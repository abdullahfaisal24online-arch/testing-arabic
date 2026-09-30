/**
 * المتجر — مسار الشراء (المرحلة 2).
 *
 *   POST /api/store/discount        فحص كود خصم لمنتج
 *   POST /api/store/order           إنشاء طلب (معلومات المشتري) ← بيرجع رابط سرّي للطلب
 *   GET  /api/store/order?t=TOKEN   حالة الطلب
 *   POST /api/store/proof?t=TOKEN   رفع إثبات الدفع (صورة أو PDF — جسم الطلب هو الملف نفسه)
 *
 * الأسعار والمنتجات بتنقرأ من /store/products.json (بيتبنى من لوحة التحكم)، والسعر بينحسب هون
 * مش بالمتصفح. الطلبات والإثباتات وأكواد الخصم بقاعدة D1 (الجداول بتنعمل لحالها).
 * الـ API بيشتغل بس لما المتجر مفتوح بالبناء (STORE_OPEN=1) — غير هيك بيرجع store_closed.
 */
import { EmailMessage } from 'cloudflare:email';
import { sendBuyerMail, type MailEnv, type MailTexts } from './store-mail';

export interface StoreEnv extends MailEnv {
  DB: D1Database;
  ASSETS: Fetcher;
  ADMIN_PASSWORD: string;
  EMAIL: { send(message: EmailMessage): Promise<void> };
}

const OWNER_TO = 'abdullahqafaisal@gmail.com';
const MAIL_FROM = 'contact@testing-arabic.com';
const ORDERS_PER_HOUR = 6;
const MAX_PROOF = 1_900_000; // حد D1 للصف الواحد 2MB
const PROOF_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'application/pdf']);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const round2 = (n: number) => Math.round(n * 100) / 100;
const clean = (v: unknown, max: number) => String(v ?? '').replace(/[\u0000-\u001f]+/g, ' ').trim().slice(0, max);

async function hashIp(ip: string, secret: string) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret || 'store'), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(ip));
  return [...new Uint8Array(sig)].slice(0, 16).map((b) => b.toString(16).padStart(2, '0')).join('');
}

const randHex = (bytes: number) => [...crypto.getRandomValues(new Uint8Array(bytes))].map((b) => b.toString(16).padStart(2, '0')).join('');

/* ---------- الجداول ---------- */
let READY = false;
export async function ensureTables(env: StoreEnv) {
  if (READY) return;
  await env.DB.batch([
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS store_orders (
      id TEXT PRIMARY KEY, token TEXT NOT NULL UNIQUE, product TEXT NOT NULL, product_title TEXT,
      name TEXT NOT NULL, email TEXT NOT NULL, phone TEXT,
      price REAL NOT NULL, discount_code TEXT, discount REAL NOT NULL DEFAULT 0, amount REAL NOT NULL,
      status TEXT NOT NULL DEFAULT 'awaiting_payment',
      created_at INTEGER NOT NULL, expires_at INTEGER NOT NULL, proof_at INTEGER, ref TEXT,
      ip_hash TEXT, code TEXT, reject_reason TEXT, reviewed_at INTEGER)`),
    env.DB.prepare(`CREATE INDEX IF NOT EXISTS idx_store_orders_status ON store_orders (status, created_at)`),
    env.DB.prepare(`CREATE INDEX IF NOT EXISTS idx_store_orders_ip ON store_orders (ip_hash, created_at)`),
    env.DB.prepare(`CREATE INDEX IF NOT EXISTS idx_store_orders_code ON store_orders (discount_code)`),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS store_proofs (
      order_id TEXT PRIMARY KEY, mime TEXT NOT NULL, size INTEGER NOT NULL, data BLOB NOT NULL, created_at INTEGER NOT NULL)`),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS store_discounts (
      code TEXT PRIMARY KEY, kind TEXT NOT NULL DEFAULT 'pct', value REAL NOT NULL,
      products TEXT NOT NULL DEFAULT '', max_uses INTEGER NOT NULL DEFAULT 0, expires_at INTEGER NOT NULL DEFAULT 0,
      active INTEGER NOT NULL DEFAULT 1, note TEXT, created_at INTEGER NOT NULL DEFAULT 0)`),
    // أكواد التفعيل (نفس جدول القسم المدفوع القديم — المرحلة 4 بتفتح المحتوى منه)
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS pro_codes (
      code TEXT PRIMARY KEY, name TEXT, email TEXT, payment_ref TEXT, price_jod REAL, products TEXT,
      max_devices INTEGER NOT NULL DEFAULT 3, status TEXT NOT NULL DEFAULT 'active', created_at INTEGER NOT NULL, expires_at INTEGER)`),
    env.DB.prepare(`CREATE TABLE IF NOT EXISTS pro_activations (id TEXT PRIMARY KEY, code TEXT NOT NULL, device_hash TEXT NOT NULL, created_at INTEGER NOT NULL, last_seen_at INTEGER)`),
  ]);
  READY = true;
}

/* ---------- الكاتالوج ---------- */
interface Product { slug: string; title: string; price: number; offerPrice: number | null }
export interface Catalog { open: boolean; holdHours: number; maxDevices: number; mail: MailTexts; products: Product[] }

export async function catalog(req: Request, env: StoreEnv): Promise<Catalog> {
  const res = await env.ASSETS.fetch(new Request(new URL('/store/products.json', req.url)));
  if (!res.ok) return { open: false, holdHours: 48, maxDevices: 3, mail: {}, products: [] };
  const data = (await res.json()) as { open?: boolean; store?: { holdHours?: number; maxDevices?: number; mail?: MailTexts }; products?: Product[] };
  return {
    open: !!data.open,
    holdHours: Math.max(1, Number(data.store?.holdHours) || 48),
    maxDevices: Math.max(1, Number(data.store?.maxDevices) || 3),
    mail: data.store?.mail ?? {},
    products: data.products ?? [],
  };
}

/* ---------- الخصم ---------- */
type Disc = { code: string; kind: string; value: number; products: string; max_uses: number; expires_at: number; active: number };

async function applyDiscount(env: StoreEnv, rawCode: string, product: string, price: number) {
  const code = rawCode.trim().toUpperCase().slice(0, 40);
  if (!code) return { ok: true as const, code: '', discount: 0 };
  const d = await env.DB.prepare(`SELECT * FROM store_discounts WHERE code = ?1`).bind(code).first<Disc>();
  if (!d || !d.active) return { ok: false as const, error: 'code_invalid' };
  if (d.expires_at && Date.now() > d.expires_at) return { ok: false as const, error: 'code_expired' };
  const list = d.products.split(',').map((s) => s.trim()).filter(Boolean);
  if (list.length && !list.includes(product)) return { ok: false as const, error: 'code_product' };
  if (d.max_uses > 0) {
    const used = await env.DB.prepare(
      `SELECT COUNT(*) AS n FROM store_orders WHERE discount_code = ?1 AND status IN ('awaiting_payment','review','approved')`,
    ).bind(code).first<{ n: number }>();
    if ((used?.n ?? 0) >= d.max_uses) return { ok: false as const, error: 'code_used_up' };
  }
  const discount = round2(Math.min(price, d.kind === 'fixed' ? d.value : (price * d.value) / 100));
  return { ok: true as const, code, discount };
}

/* ---------- عرض الطلب للمشتري ---------- */
export type Order = {
  id: string; token: string; product: string; product_title: string | null; name: string; email: string;
  price: number; discount_code: string | null; discount: number; amount: number; status: string;
  created_at: number; expires_at: number; proof_at: number | null; code: string | null; reject_reason: string | null;
};

const publicOrder = (o: Order) => ({
  id: o.id,
  product: o.product,
  productTitle: o.product_title,
  name: o.name,
  email: o.email,
  price: o.price,
  discountCode: o.discount_code,
  discount: o.discount,
  amount: o.amount,
  status: o.status,
  createdAt: o.created_at,
  expiresAt: o.expires_at,
  proofAt: o.proof_at,
  code: o.status === 'approved' ? o.code : null,
  rejectReason: o.status === 'rejected' ? o.reject_reason : null,
});

async function loadOrder(env: StoreEnv, token: string): Promise<Order | null> {
  if (!/^[a-f0-9]{40}$/.test(token)) return null;
  const o = await env.DB.prepare(`SELECT * FROM store_orders WHERE token = ?1`).bind(token).first<Order>();
  if (!o) return null;
  if (o.status === 'awaiting_payment' && Date.now() > o.expires_at) {
    await env.DB.prepare(`UPDATE store_orders SET status = 'expired' WHERE id = ?1`).bind(o.id).run();
    o.status = 'expired';
  }
  return o;
}

async function notifyOwner(env: StoreEnv, o: Order, ref: string, origin: string) {
  const subject = `طلب جديد بانتظار المراجعة — ${o.id} (${o.amount} JOD)`;
  const raw = [
    `From: Testing بالعربي <${MAIL_FROM}>`,
    `To: ${OWNER_TO}`,
    `Subject: ${subject.replace(/[\r\n]+/g, ' ')}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    '',
    `الطلب: ${o.id}`,
    `المنتج: ${o.product_title ?? o.product}`,
    `المشتري: ${o.name} — ${o.email}`,
    `المبلغ: ${o.amount} JOD${o.discount_code ? ` (كود ${o.discount_code}، خصم ${o.discount})` : ''}`,
    ref ? `مرجع التحويل: ${ref}` : '',
    '',
    'وصل إثبات الدفع. قبل ما توافق، تأكد من تطبيق البنك إنه التحويل وصل بنفس المبلغ ومعه رقم الطلب.',
    `${origin}/admin/store/`,
  ].join('\r\n');
  await env.EMAIL.send(new EmailMessage(MAIL_FROM, OWNER_TO, raw));
}

/* ---------- الراوتر ---------- */
export async function handleStore(req: Request, env: StoreEnv, url: URL): Promise<Response> {
  const path = url.pathname.replace(/\/+$/, '');
  const cat = await catalog(req, env);
  if (!cat.open) return json({ ok: false, error: 'store_closed' }, 404);
  await ensureTables(env);
  const findProduct = (slug: string) => cat.products.find((p) => p.slug === slug);

  // ---- فحص كود خصم ----
  if (path === '/api/store/discount' && req.method === 'POST') {
    const body = (await req.json().catch(() => ({}))) as { product?: string; code?: string };
    const p = findProduct(clean(body.product, 80));
    if (!p) return json({ ok: false, error: 'bad_product' }, 400);
    const price = p.offerPrice ?? p.price;
    const r = await applyDiscount(env, clean(body.code, 40), p.slug, price);
    if (!r.ok) return json({ ok: false, error: r.error });
    return json({ ok: true, code: r.code, price, discount: r.discount, amount: round2(price - r.discount) });
  }

  // ---- إنشاء طلب ----
  if (path === '/api/store/order' && req.method === 'POST') {
    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    if (clean(body.website, 50)) return json({ ok: true, token: '' }); // فخّ للبوتات
    const p = findProduct(clean(body.product, 80));
    if (!p) return json({ ok: false, error: 'bad_product' }, 400);
    const name = clean(body.name, 80);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 30).replace(/[^\d+\s-]/g, '');
    if (name.length < 2) return json({ ok: false, error: 'bad_name' }, 400);
    if (!EMAIL_RE.test(email)) return json({ ok: false, error: 'bad_email' }, 400);

    const ipHash = await hashIp(req.headers.get('cf-connecting-ip') ?? '0.0.0.0', env.ADMIN_PASSWORD);
    const recent = await env.DB.prepare(`SELECT COUNT(*) AS n FROM store_orders WHERE ip_hash = ?1 AND created_at > ?2`)
      .bind(ipHash, Date.now() - 3600_000).first<{ n: number }>();
    if ((recent?.n ?? 0) >= ORDERS_PER_HOUR) return json({ ok: false, error: 'too_many' }, 429);

    const price = p.offerPrice ?? p.price;
    const d = await applyDiscount(env, clean(body.code, 40), p.slug, price);
    if (!d.ok) return json({ ok: false, error: d.error });
    const amount = round2(price - d.discount);

    const now = Date.now();
    const token = randHex(20);
    for (let i = 0; i < 5; i++) {
      const id = `TA-${Math.floor(1000 + Math.random() * 9000)}${randHex(1).toUpperCase().slice(0, 1)}`;
      try {
        await env.DB.prepare(
          `INSERT INTO store_orders (id, token, product, product_title, name, email, phone, price, discount_code, discount, amount, status, created_at, expires_at, ip_hash)
           VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9, ?10, ?11, 'awaiting_payment', ?12, ?13, ?14)`,
        ).bind(id, token, p.slug, p.title, name, email, phone || null, price, d.code || null, d.discount, amount, now, now + cat.holdHours * 3600_000, ipHash).run();
        const link = `${url.origin}/store/order/?t=${token}`;
        const mailing = sendBuyerMail(env, email, 'order', cat.mail, { name, id, amount: `${amount} JOD`, product: p.title, link, hours: String(cat.holdHours) }, { href: link, label: cat.mail.orderButton || 'تفاصيل الطلب' });
        await mailing;
        return json({ ok: true, id, token, amount });
      } catch (e) {
        if (!String(e).includes('UNIQUE')) throw e; // رقم طلب مكرر؟ جرّب رقم غيره
      }
    }
    return json({ ok: false, error: 'server_error' }, 500);
  }

  // ---- حالة الطلب ----
  if (path === '/api/store/order' && req.method === 'GET') {
    const o = await loadOrder(env, url.searchParams.get('t') ?? '');
    if (!o) return json({ ok: false, error: 'not_found' }, 404);
    return json({ ok: true, order: publicOrder(o) });
  }

  // ---- رفع إثبات الدفع ----
  if (path === '/api/store/proof' && req.method === 'POST') {
    const o = await loadOrder(env, url.searchParams.get('t') ?? '');
    if (!o) return json({ ok: false, error: 'not_found' }, 404);
    if (o.status !== 'awaiting_payment' && o.status !== 'review') return json({ ok: false, error: 'bad_status', status: o.status }, 409);
    const mime = (req.headers.get('content-type') ?? '').split(';')[0].trim().toLowerCase();
    if (!PROOF_TYPES.has(mime)) return json({ ok: false, error: 'bad_type' }, 400);
    const buf = await req.arrayBuffer();
    if (!buf.byteLength) return json({ ok: false, error: 'empty' }, 400);
    if (buf.byteLength > MAX_PROOF) return json({ ok: false, error: 'too_big' }, 413);
    const ref = clean(url.searchParams.get('ref'), 60);
    const now = Date.now();
    await env.DB.batch([
      env.DB.prepare(`INSERT OR REPLACE INTO store_proofs (order_id, mime, size, data, created_at) VALUES (?1, ?2, ?3, ?4, ?5)`)
        .bind(o.id, mime, buf.byteLength, new Uint8Array(buf), now),
      env.DB.prepare(`UPDATE store_orders SET status = 'review', proof_at = ?2, ref = ?3 WHERE id = ?1`).bind(o.id, now, ref || null),
    ]);
    const firstTime = o.status === 'awaiting_payment';
    o.status = 'review';
    o.proof_at = now;
    if (firstTime) {
      try { await notifyOwner(env, o, ref, url.origin); } catch (e) { console.error('store_notify_failed', e); }
    }
    return json({ ok: true, order: publicOrder(o) });
  }

  return json({ ok: false, error: 'not_found' }, 404);
}

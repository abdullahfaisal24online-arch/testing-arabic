/**
 * القسم المدفوع: بوابة الوصول بالكود، طلبات الشراء، وصفحة الإدارة.
 * الأدوات المشتركة (json / html / esc / …) بتجي من worker/index.ts عشان ما نكرّرها.
 */
import type { Env } from './index';
import { esc, hashIp, hmac, html, ipSalt, json, readCookie, sameOrigin, shell, uid } from './index';

const PRO_COOKIE = 'ta_pro';
const PRO_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // بدون 0 O 1 I L عشان ما تلتبس بالقراءة
const PRO_TTL_DAYS = 365;
const PRO_DEFAULT_DEVICES = 3;
const PRO_MAX_CODES = 8; // أقصى عدد أكواد بكوكي واحد (مشتري اشترى أكثر من منتج)
const PRO_CODE_RE = /^TA-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
const PRO_SLUG_RE = /^[a-z0-9][a-z0-9-]{1,59}$/;
// مسارات تحت /pro/ مفتوحة للكل — مش منتجات
const PRO_OPEN = new Set(['unlock']);

const proSecret = (env: Env) => env.PRO_SECRET || ipSalt(env);

const normCode = (s: string) => s.trim().toUpperCase().replace(/\s+/g, '');

const newProCode = () => {
  const pick = (n: number) =>
    Array.from(crypto.getRandomValues(new Uint8Array(n)))
      .map((b) => PRO_ALPHABET[b % PRO_ALPHABET.length])
      .join('');
  return `TA-${pick(4)}-${pick(4)}`;
};

/* ---------- كاتالوج المنتجات: بيجي من الـ CMS عبر /store/products.json ---------- */
type ProCatalogItem = {
  slug: string;
  title: string;
  kind: string;
  price: number;
  offerPrice: number | null;
  bundleOf: string[];
};
type ProCatalog = { products: ProCatalogItem[]; lessonGates: Record<string, string> };

let proCatalogCache: { at: number; data: ProCatalog } | null = null;

async function proCatalog(env: Env, origin: string): Promise<ProCatalog> {
  const now = Date.now();
  if (proCatalogCache && now - proCatalogCache.at < 60_000) return proCatalogCache.data;
  try {
    const res = await env.ASSETS.fetch(new Request(`${origin}/store/products.json`));
    if (res.ok) {
      const data = (await res.json()) as Partial<ProCatalog>;
      if (Array.isArray(data.products)) {
        const clean: ProCatalog = {
          products: data.products
            .filter((p) => p && PRO_SLUG_RE.test(String(p.slug)))
            .map((p) => ({ ...p, bundleOf: Array.isArray(p.bundleOf) ? p.bundleOf : [] })),
          lessonGates: data.lessonGates ?? {},
        };
        proCatalogCache = { at: now, data: clean };
        return clean;
      }
    }
  } catch (err) {
    /* الكاتالوج مش ضروري لبوابة /pro/ — بس لدروس الدورات المدفوعة */
  }
  return { products: [], lessonGates: {} };
}

/* ---------- الكوكي: بتحمل أكواد متعددة موقّعة بتوقيع واحد ---------- */
async function proToken(env: Env, joined: string, exp: number): Promise<string> {
  const payload = `${joined}.${exp}`;
  return `${payload}.${await hmac(proSecret(env), payload)}`;
}

// بترجّع قائمة الأكواد إذا التوقيع سليم والمدة ما خلصت، وإلا قائمة فاضية
async function proCodes(req: Request, env: Env): Promise<string[]> {
  const token = readCookie(req, PRO_COOKIE);
  if (!token) return [];
  const parts = token.split('.');
  if (parts.length !== 3) return [];
  const [joined, expRaw, sig] = parts;
  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || exp < Date.now()) return [];
  const expect = await hmac(proSecret(env), `${joined}.${exp}`);
  if (sig.length !== expect.length) return [];
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expect.charCodeAt(i);
  if (diff !== 0) return [];
  return joined.split('~').filter((c) => PRO_CODE_RE.test(c)).slice(0, PRO_MAX_CODES);
}

// الكوكي وحدو مش كفاية: نتأكد إن كل كود لسا active بقاعدة البيانات
export async function proProducts(req: Request, env: Env): Promise<Set<string>> {
  const codes = await proCodes(req, env);
  const out = new Set<string>();
  if (!codes.length) return out;

  const marks = codes.map((_, i) => `?${i + 1}`).join(', ');
  const { results } = await env.DB.prepare(
    `SELECT products FROM pro_codes
      WHERE code IN (${marks}) AND status = 'active'
        AND (expires_at IS NULL OR expires_at > ?${codes.length + 1})`,
  )
    .bind(...codes, Date.now())
    .all<{ products: string | null }>();

  for (const r of results ?? []) {
    for (const piece of String(r.products ?? '').split(',')) {
      const v = piece.trim();
      if (v) out.add(v);
    }
  }
  return out;
}

// أي منتج لازم لهاد المسار؟ فاضي = المسار عام
export async function proGateFor(path: string, env: Env, origin: string): Promise<string> {
  if (path === '/pro' || path === '/pro/') return '';
  if (path.startsWith('/pro/')) {
    const m = /^\/pro\/([^/]+)(?:\/|$)/.exec(path);
    if (!m) return '';
    return PRO_OPEN.has(m[1]) ? '' : m[1];
  }
  // دروس الدورات المدفوعة — بتشتغل لما نضيف /lessons/* لـ run_worker_first
  if (path.startsWith('/lessons/')) {
    const m = /^\/lessons\/([^/]+)(?:\/|$)/.exec(path);
    if (!m) return '';
    const cat = await proCatalog(env, origin);
    return cat.lessonGates[m[1]] ?? '';
  }
  return '';
}

export const proCookie = (value: string, maxAge: number) =>
  `${PRO_COOKIE}=${value}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;

export async function proUnlock(req: Request, env: Env): Promise<Response> {
  if (!sameOrigin(req)) return json({ ok: false, error: 'origin' }, 403);

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const code = normCode(String(body.code ?? ''));
  if (!PRO_CODE_RE.test(code)) return json({ ok: false, error: 'format' }, 400);

  const row = await env.DB.prepare(
    `SELECT code, products, max_devices, status, expires_at FROM pro_codes WHERE code = ?1`,
  )
    .bind(code)
    .first<{
      code: string;
      products: string | null;
      max_devices: number;
      status: string;
      expires_at: number | null;
    }>();

  if (!row) return json({ ok: false, error: 'unknown' }, 404);
  if (row.status !== 'active') return json({ ok: false, error: 'blocked' }, 403);
  if (row.expires_at && row.expires_at < Date.now()) return json({ ok: false, error: 'expired' }, 403);

  const now = Date.now();
  const device = await hashIp(
    `${req.headers.get('cf-connecting-ip') ?? ''}|${req.headers.get('user-agent') ?? ''}`,
    ipSalt(env),
  );

  const seen = await env.DB.prepare(
    `SELECT id FROM pro_activations WHERE code = ?1 AND device_hash = ?2`,
  )
    .bind(code, device)
    .first<{ id: string }>();

  if (seen) {
    await env.DB.prepare(`UPDATE pro_activations SET last_seen_at = ?2 WHERE id = ?1`)
      .bind(seen.id, now)
      .run();
  } else {
    const used = await env.DB.prepare(`SELECT COUNT(*) AS n FROM pro_activations WHERE code = ?1`)
      .bind(code)
      .first<{ n: number }>();
    if ((used?.n ?? 0) >= (row.max_devices || PRO_DEFAULT_DEVICES)) {
      return json({ ok: false, error: 'devices' }, 403);
    }
    await env.DB.prepare(
      `INSERT INTO pro_activations (id, code, device_hash, created_at, last_seen_at)
        VALUES (?1, ?2, ?3, ?4, ?4)`,
    )
      .bind(uid(), code, device, now)
      .run();
  }

  // الكود الجديد بينضاف على أكواد الجهاز القديمة بدل ما يمحيها
  const existing = await proCodes(req, env);
  const codes = [code, ...existing.filter((c) => c !== code)].slice(0, PRO_MAX_CODES);
  const exp = now + PRO_TTL_DAYS * 86400000;
  const opened = String(row.products ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  return new Response(JSON.stringify({ ok: true, products: opened }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'set-cookie': proCookie(await proToken(env, codes.join('~'), exp), PRO_TTL_DAYS * 86400),
    },
  });
}

/* ---------- طلبات الشراء ---------- */
export async function proOrder(req: Request, env: Env): Promise<Response> {
  if (!sameOrigin(req)) return json({ ok: false, error: 'origin' }, 403);

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const name = String(body.name ?? '').trim().slice(0, 80);
  const email = String(body.email ?? '').trim().toLowerCase().slice(0, 254);
  const phone = String(body.phone ?? '').trim().slice(0, 40);
  const note = String(body.note ?? '').trim().slice(0, 500);
  const joinList = body.newsletter === true;
  const items = (Array.isArray(body.products) ? body.products : [])
    .map((v) => String(v).trim())
    .filter((v) => PRO_SLUG_RE.test(v))
    .slice(0, 10);

  if (name.length < 2) return json({ ok: false, error: 'name' }, 400);
  if (email.length > 254 || !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) {
    return json({ ok: false, error: 'email' }, 400);
  }
  if (!items.length) return json({ ok: false, error: 'products' }, 400);

  const ipHash = await hashIp(req.headers.get('cf-connecting-ip') ?? '', ipSalt(env));
  const since = Date.now() - 3600_000;
  const recent = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM pro_orders WHERE ip_hash = ?1 AND created_at > ?2`,
  )
    .bind(ipHash, since)
    .first<{ n: number }>();
  if ((recent?.n ?? 0) >= 5) return json({ ok: false, error: 'rate' }, 429);

  const cat = await proCatalog(env, new URL(req.url).origin);
  const known = new Map(cat.products.map((p) => [p.slug, p]));

  // السعر بيتحسب على اللي طلبه فعلاً — الحزمة سعرها سعرها، مش مجموع أعضائها
  const amount = items.reduce((sum, slug) => {
    const p = known.get(slug);
    if (!p) return sum;
    return sum + (p.offerPrice ?? p.price ?? 0);
  }, 0);

  // الحزمة بتتفكّك لأعضائها عشان الكود يفتح محتوى كل عضو
  const opens = new Set<string>();
  for (const slug of items) {
    const p = known.get(slug);
    if (p && p.bundleOf.length) {
      for (const m of p.bundleOf) if (PRO_SLUG_RE.test(m)) opens.add(m);
    } else {
      opens.add(slug);
    }
  }
  const stored = [...opens].slice(0, 20);

  const id = uid();
  await env.DB.prepare(
    `INSERT INTO pro_orders (id, name, email, phone, products, amount_jod, note, status, created_at, ip_hash)
      VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, 'new', ?8, ?9)`,
  )
    .bind(id, name, email, phone || null, stored.join(','), amount || null, note || null, Date.now(), ipHash)
    .run();

  // الإيميل بينضاف لقائمة النشرة فقط إذا المشتري أشّر على الخيار
  if (joinList) {
    await env.DB.prepare(
      `INSERT INTO subscribers (email, source, created_at, last_seen_at)
        VALUES (?1, 'order', ?2, ?2)
        ON CONFLICT(email) DO UPDATE SET last_seen_at = ?2`,
    )
      .bind(email, Date.now())
      .run();
  }

  return json({ ok: true, ref: id.slice(0, 8).toUpperCase() });
}

/* ---------- صفحة إدارة الأكواد (خلف Cloudflare Access) ---------- */
const proDate = (ms: number | null) =>
  ms ? new Date(ms).toISOString().slice(0, 16).replace('T', ' ') : '—';

const proNames = (cat: ProCatalog, csv: string | null) => {
  const map = new Map(cat.products.map((p) => [p.slug, p.title]));
  return String(csv ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => map.get(s) ?? s);
};

export async function proAdminPage(req: Request, env: Env, justCreated = ''): Promise<string> {
  const cat = await proCatalog(env, new URL(req.url).origin);

  const orders = await env.DB.prepare(
    `SELECT id, name, email, phone, products, amount_jod, note, status, code, created_at
       FROM pro_orders ORDER BY created_at DESC LIMIT 100`,
  ).all<{
    id: string;
    name: string;
    email: string;
    phone: string | null;
    products: string;
    amount_jod: number | null;
    note: string | null;
    status: string;
    code: string | null;
    created_at: number;
  }>();

  const { results } = await env.DB.prepare(
    `SELECT c.code, c.name, c.email, c.payment_ref, c.price_jod, c.products, c.max_devices, c.status,
            c.created_at, c.note,
            (SELECT COUNT(*) FROM pro_activations a WHERE a.code = c.code) AS devices,
            (SELECT MAX(a.last_seen_at) FROM pro_activations a WHERE a.code = c.code) AS last_seen
       FROM pro_codes c
       ORDER BY c.created_at DESC
       LIMIT 300`,
  ).all<{
    code: string;
    name: string | null;
    email: string | null;
    payment_ref: string | null;
    price_jod: number | null;
    products: string | null;
    max_devices: number;
    status: string;
    created_at: number;
    note: string | null;
    devices: number;
    last_seen: number | null;
  }>();

  const picks = cat.products.length
    ? cat.products
        .map(
          (p) => `<label class="pick">
            <input type="checkbox" name="products" value="${esc(p.slug)}" />
            <span>${esc(p.title)}</span>
            <span class="dim">${p.offerPrice ?? p.price} د.أ</span>
          </label>`,
        )
        .join('')
    : `<p class="warn">ما في منتجات معرّفة بعد. ضيفها من لوحة المحتوى (المنتجات المدفوعة) وبترجع تظهر هون.</p>`;

  const orderRows = (orders.results ?? [])
    .map((o) => {
      const names = proNames(cat, o.products)
        .map((n) => esc(n))
        .join('، ');
      const hidden = String(o.products ?? '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((s) => `<input type="hidden" name="products" value="${esc(s)}" />`)
        .join('');
      const action =
        o.status === 'new'
          ? `<form method="post" action="/admin/pro/new">
              ${hidden}
              <input type="hidden" name="order_id" value="${esc(o.id)}" />
              <input type="hidden" name="name" value="${esc(o.name)}" />
              <input type="hidden" name="email" value="${esc(o.email)}" />
              <input type="hidden" name="price_jod" value="${o.amount_jod ?? ''}" />
              <button type="submit">أنشئ الكود</button>
            </form>`
          : `<span class="dim">${esc(o.code ?? o.status)}</span>`;
      return `<tr class="${o.status === 'new' ? 'hot' : 'off'}">
        <td>${esc(o.name)}<br><span class="dim">${esc(o.email)}${o.phone ? ' · ' + esc(o.phone) : ''}</span></td>
        <td>${names}${o.note ? '<br><span class="dim">' + esc(o.note) + '</span>' : ''}</td>
        <td>${o.amount_jod ?? '—'}</td>
        <td>${proDate(o.created_at)}</td>
        <td>${action}</td>
      </tr>`;
    })
    .join('');

  const rows = (results ?? [])
    .map(
      (r) => `<tr class="${r.status === 'active' ? '' : 'off'}">
        <td class="code">${esc(r.code)}</td>
        <td>${esc(r.name ?? '')}<br><span class="dim">${esc(r.email ?? '')}</span></td>
        <td>${proNames(cat, r.products).map((n) => esc(n)).join('، ') || '<span class="dim">—</span>'}</td>
        <td>${r.price_jod ?? '—'}<br><span class="dim">${esc(r.payment_ref ?? '')}</span></td>
        <td>${r.devices} / ${r.max_devices}</td>
        <td>${proDate(r.last_seen)}</td>
        <td>
          <form method="post" action="/admin/pro/action">
            <input type="hidden" name="code" value="${esc(r.code)}" />
            <input type="hidden" name="op" value="${r.status === 'active' ? 'block' : 'unblock'}" />
            <button type="submit">${r.status === 'active' ? 'إيقاف' : 'تفعيل'}</button>
          </form>
        </td>
      </tr>`,
    )
    .join('');

  const created = justCreated
    ? `<p class="new">الكود الجديد: <strong>${esc(justCreated)}</strong> — انسخه وابعته للمشتري.</p>`
    : '';

  return `<div class="wrap">
    <h1>القسم المدفوع</h1>
    ${created}

    <h2>طلبات الشراء</h2>
    <table>
      <thead><tr><th>المشتري</th><th>الطلب</th><th>المبلغ</th><th>التاريخ</th><th></th></tr></thead>
      <tbody>${orderRows || '<tr><td colspan="5">ما في طلبات بعد.</td></tr>'}</tbody>
    </table>

    <h2>كود جديد يدوياً</h2>
    <form class="add" method="post" action="/admin/pro/new">
      <div class="picks">${picks}</div>
      <div class="line">
        <input name="name" placeholder="اسم المشتري" />
        <input name="email" type="email" placeholder="إيميل المشتري" />
        <input name="payment_ref" placeholder="مرجع الحوالة / CliQ" />
        <input name="price_jod" type="number" step="0.5" placeholder="المبلغ (دينار)" />
        <input name="max_devices" type="number" min="1" max="10" value="3" title="عدد الأجهزة" />
        <button type="submit">أنشئ كود</button>
      </div>
    </form>

    <h2>الأكواد</h2>
    <table>
      <thead><tr><th>الكود</th><th>المشتري</th><th>يفتح</th><th>المبلغ</th><th>الأجهزة</th><th>آخر دخول</th><th></th></tr></thead>
      <tbody>${rows || '<tr><td colspan="7">ما في أكواد بعد.</td></tr>'}</tbody>
    </table>

    <style>
      h2 { font-size: 17px; margin: 30px 0 10px; }
      .add { margin: 10px 0 26px; }
      .picks { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; }
      .pick { display: flex; align-items: center; gap: 7px; border: 1px solid #2a3a55; border-radius: 8px; padding: 7px 11px; font-size: 14px; cursor: pointer; }
      .line { display: flex; flex-wrap: wrap; gap: 8px; }
      .add input { padding: 8px 10px; }
      table { width: 100%; border-collapse: collapse; font-size: 14px; }
      th, td { text-align: right; padding: 8px 6px; border-bottom: 1px solid #2a3a55; vertical-align: top; }
      .code { font-family: monospace; font-weight: 700; }
      .dim { opacity: .6; font-size: 12px; }
      tr.off { opacity: .45; }
      tr.hot td { background: #1b2b1f; }
      .new { background: #14351f; border: 1px solid #2f7d4f; padding: 10px 14px; border-radius: 8px; }
      .warn { background: #3a2a14; border: 1px solid #7d5f2f; padding: 10px 14px; border-radius: 8px; }
    </style>
  </div>`;
}

export async function proAdminAction(req: Request, env: Env): Promise<Response> {
  if (!sameOrigin(req)) return html(shell('<div class="wrap"><h1>طلب مرفوض</h1></div>', 'مرفوض'), 403);
  const form = await req.formData();
  const code = normCode(String(form.get('code') ?? ''));
  const op = String(form.get('op') ?? '');
  if (code && (op === 'block' || op === 'unblock')) {
    await env.DB.prepare(`UPDATE pro_codes SET status = ?2 WHERE code = ?1`)
      .bind(code, op === 'block' ? 'blocked' : 'active')
      .run();
  }
  return Response.redirect(new URL('/admin/pro', req.url).toString(), 303);
}

export async function proAdminNew(req: Request, env: Env): Promise<Response> {
  if (!sameOrigin(req)) return html(shell('<div class="wrap"><h1>طلب مرفوض</h1></div>', 'مرفوض'), 403);
  const form = await req.formData();
  const code = newProCode();
  const devices = Number(form.get('max_devices') ?? PRO_DEFAULT_DEVICES);
  const products = form
    .getAll('products')
    .map((v) => String(v).trim())
    .filter((v) => PRO_SLUG_RE.test(v))
    .slice(0, 20);
  const orderId = String(form.get('order_id') ?? '').slice(0, 60);

  await env.DB.prepare(
    `INSERT INTO pro_codes (code, name, email, payment_ref, price_jod, products, max_devices, status, created_at)
      VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, 'active', ?8)`,
  )
    .bind(
      code,
      String(form.get('name') ?? '').slice(0, 80) || null,
      String(form.get('email') ?? '').slice(0, 120) || null,
      String(form.get('payment_ref') ?? '').slice(0, 80) || null,
      Number(form.get('price_jod') ?? 0) || null,
      products.join(',') || null,
      Number.isFinite(devices) && devices > 0 ? Math.min(devices, 10) : PRO_DEFAULT_DEVICES,
      Date.now(),
    )
    .run();

  if (orderId) {
    await env.DB.prepare(`UPDATE pro_orders SET status = 'done', code = ?2 WHERE id = ?1`)
      .bind(orderId, code)
      .run();
  }

  return html(shell(await proAdminPage(req, env, code), 'القسم المدفوع'));
}

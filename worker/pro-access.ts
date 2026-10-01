/**
 * وصول المشتري للمحتوى المدفوع (المرحلة 4).
 *
 *   POST /api/pro/unlock   {code}    تفعيل كود على هاد الجهاز
 *   GET  /api/pro/me                  المواد المفتوحة على هاد الجهاز
 *   POST /api/pro/logout             إطلاع هاد الجهاز (بيفضى مكانه بالكود)
 *   POST /api/pro/forgot   {email}   إعادة إرسال الكود على الإيميل
 *   GET  /api/pro/bank/<slug>        أسئلة البنك كاملة — بس لجهاز مفعّل على المنتج
 *
 * الجهاز بيتعرّف بكوكي ثابت (ta_dev) — رقم عشوائي بيضل سنة وبيتجدد مع كل زيارة.
 * بقاعدة البيانات بنخزّن بصمته (HMAC) مش الرقم نفسه. كل كود إله حد أجهزة (max_devices).
 * المحتوى ما بيوصل للمتصفح إلا من هون، وبس إذا المتجر مفتوح بهاد البناء.
 */
import { catalog, ensureTables, type StoreEnv } from './store';
import { sendBuyerMail } from './store-mail';
import ctflQuestions from '../src/data/banks/ctfl-questions.json';
import ctflAtQuestions from '../src/data/banks/ctfl-at-questions.json';

// بنوك الأسئلة المتاحة (slug المنتج ← ملف البنك). بنك جديد = سطر جديد هون.
const BANKS: Record<string, unknown> = {
  'ctfl-questions': ctflQuestions,
  'ctfl-at-questions': ctflAtQuestions,
};

const DEV_COOKIE = 'ta_dev';
const YEAR_MS = 365 * 86400_000;
const CODE_RE = /^TA-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UNLOCK_FAILS_PER_HOUR = 10;
const FORGOT_PER_HOUR = 5;

const json = (data: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...extra },
  });

async function hmacHex(secret: string, value: string, bytes = 16) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret || 'pro'), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return [...new Uint8Array(sig)].slice(0, bytes).map((b) => b.toString(16).padStart(2, '0')).join('');
}
const randHex = (n: number) => [...crypto.getRandomValues(new Uint8Array(n))].map((b) => b.toString(16).padStart(2, '0')).join('');

const readCookie = (req: Request, name: string) => {
  const m = (req.headers.get('cookie') ?? '').match(new RegExp(`(?:^|;\\s*)${name}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : '';
};
const devCookie = (id: string) => `${DEV_COOKIE}=${id}; Path=/; Max-Age=${YEAR_MS / 1000}; HttpOnly; Secure; SameSite=Lax`;

// «ta abcd efgh» أو «ABCDEFGH» ← TA-ABCD-EFGH
const normCode = (s: unknown) => {
  let c = String(s ?? '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12);
  if (c.length === 8) c = `TA${c}`;
  return c.length === 10 && c.startsWith('TA') ? `TA-${c.slice(2, 6)}-${c.slice(6)}` : c;
};

type ProCode = { code: string; name: string | null; email: string | null; products: string | null; max_devices: number; status: string; expires_at: number | null };

/** الجهاز الحالي: الرقم من الكوكي (أو رقم جديد) + بصمته */
async function device(req: Request, env: StoreEnv) {
  let id = readCookie(req, DEV_COOKIE);
  const fresh = !/^[a-f0-9]{32}$/.test(id);
  if (fresh) id = randHex(16);
  return { id, fresh, hash: await hmacHex(env.ADMIN_PASSWORD, `dev:${id}`) };
}

/** الأكواد الشغّالة على هاد الجهاز */
async function deviceCodes(env: StoreEnv, devHash: string): Promise<ProCode[]> {
  const rows = await env.DB.prepare(
    `SELECT c.* FROM pro_activations a JOIN pro_codes c ON c.code = a.code
     WHERE a.device_hash = ?1 AND COALESCE(a.last_seen_at, a.created_at) > ?2`,
  ).bind(devHash, Date.now() - YEAR_MS).all<ProCode>();
  const now = Date.now();
  return (rows.results ?? []).filter((c) => c.status === 'active' && (!c.expires_at || c.expires_at > now));
}

/** المنتجات اللي بيفتحها كود (مع الحزم) */
function productsOf(codes: ProCode[], cat: Awaited<ReturnType<typeof catalog>>) {
  const set = new Set<string>();
  for (const c of codes) {
    for (const slug of (c.products ?? '').split(',').map((s) => s.trim()).filter(Boolean)) {
      set.add(slug);
      const p = cat.products.find((x) => x.slug === slug) as { bundleOf?: string[] } | undefined;
      for (const b of p?.bundleOf ?? []) set.add(b);
    }
  }
  return set;
}

async function tooMany(env: StoreEnv, ipHash: string, kind: string, limit: number) {
  const r = await env.DB.prepare(`SELECT COUNT(*) AS n FROM pro_attempts WHERE ip_hash = ?1 AND kind = ?2 AND at > ?3`)
    .bind(ipHash, kind, Date.now() - 3600_000).first<{ n: number }>();
  return (r?.n ?? 0) >= limit;
}
const logAttempt = (env: StoreEnv, ipHash: string, kind: string) =>
  env.DB.prepare(`INSERT INTO pro_attempts (ip_hash, kind, at) VALUES (?1, ?2, ?3)`).bind(ipHash, kind, Date.now()).run();

export async function handleProAccess(req: Request, env: StoreEnv, url: URL): Promise<Response> {
  const path = url.pathname.replace(/\/+$/, '');
  const cat = await catalog(req, env);
  if (!cat.open) return json({ ok: false, error: 'store_closed' }, 404);

  // POST بس من نفس الموقع
  if (req.method === 'POST') {
    const origin = req.headers.get('origin');
    if (origin && origin !== url.origin) return json({ ok: false, error: 'bad_origin' }, 403);
  }

  await ensureTables(env);
  const dev = await device(req, env);
  const setDev = { 'set-cookie': devCookie(dev.id) }; // بيتجدد كل مرة ← سنة من آخر زيارة
  const ipHash = await hmacHex(env.ADMIN_PASSWORD, `ip:${req.headers.get('cf-connecting-ip') ?? '0.0.0.0'}`);
  const title = (slug: string) => cat.products.find((p) => p.slug === slug)?.title ?? slug;

  // ---- تفعيل ----
  if (path === '/api/pro/unlock' && req.method === 'POST') {
    if (await tooMany(env, ipHash, 'unlock_fail', UNLOCK_FAILS_PER_HOUR)) return json({ ok: false, error: 'too_many' }, 429, setDev);
    const body = (await req.json().catch(() => ({}))) as { code?: string };
    const code = normCode(body.code);
    const c = CODE_RE.test(code) ? await env.DB.prepare(`SELECT * FROM pro_codes WHERE code = ?1`).bind(code).first<ProCode>() : null;
    if (!c) {
      await logAttempt(env, ipHash, 'unlock_fail');
      return json({ ok: false, error: 'invalid' }, 400, setDev);
    }
    if (c.status !== 'active' || (c.expires_at && c.expires_at < Date.now())) return json({ ok: false, error: 'blocked' }, 403, setDev);

    const now = Date.now();
    const mine = await env.DB.prepare(`SELECT id FROM pro_activations WHERE code = ?1 AND device_hash = ?2`).bind(code, dev.hash).first<{ id: string }>();
    if (mine) {
      await env.DB.prepare(`UPDATE pro_activations SET last_seen_at = ?2 WHERE id = ?1`).bind(mine.id, now).run();
    } else {
      const used = await env.DB.prepare(`SELECT COUNT(*) AS n FROM pro_activations WHERE code = ?1 AND COALESCE(last_seen_at, created_at) > ?2`)
        .bind(code, now - YEAR_MS).first<{ n: number }>();
      const max = Math.max(1, c.max_devices || cat.maxDevices);
      if ((used?.n ?? 0) >= max) return json({ ok: false, error: 'devices', devices: max }, 403, setDev);
      await env.DB.prepare(`INSERT INTO pro_activations (id, code, device_hash, created_at, last_seen_at) VALUES (?1, ?2, ?3, ?4, ?4)`)
        .bind(crypto.randomUUID(), code, dev.hash, now).run();
    }
    const products = [...productsOf([c], cat)].map((slug) => ({ slug, title: title(slug) }));
    return json({ ok: true, products }, 200, setDev);
  }

  // ---- موادي ----
  if (path === '/api/pro/me' && req.method === 'GET') {
    if (dev.fresh) return json({ ok: true, products: [] }, 200, setDev);
    const codes = await deviceCodes(env, dev.hash);
    if (codes.length) {
      await env.DB.prepare(`UPDATE pro_activations SET last_seen_at = ?2 WHERE device_hash = ?1`).bind(dev.hash, Date.now()).run();
    }
    const products = [...productsOf(codes, cat)].map((slug) => ({ slug, title: title(slug) }));
    return json({ ok: true, products, name: codes[0]?.name ?? '' }, 200, setDev);
  }

  // ---- اطلع من هاد الجهاز ----
  if (path === '/api/pro/logout' && req.method === 'POST') {
    await env.DB.prepare(`DELETE FROM pro_activations WHERE device_hash = ?1`).bind(dev.hash).run();
    return json({ ok: true }, 200, setDev);
  }

  // ---- نسيت الكود ----
  if (path === '/api/pro/forgot' && req.method === 'POST') {
    const body = (await req.json().catch(() => ({}))) as { email?: string };
    const email = String(body.email ?? '').trim().toLowerCase().slice(0, 254);
    if (!EMAIL_RE.test(email)) return json({ ok: false, error: 'bad_email' }, 400, setDev);
    if (await tooMany(env, ipHash, 'forgot', FORGOT_PER_HOUR)) return json({ ok: false, error: 'too_many' }, 429, setDev);
    await logAttempt(env, ipHash, 'forgot');
    const rows = await env.DB.prepare(`SELECT * FROM pro_codes WHERE lower(email) = ?1 AND status = 'active' ORDER BY created_at DESC LIMIT 3`)
      .bind(email).all<ProCode>();
    for (const c of rows.results ?? []) {
      const product = (c.products ?? '').split(',').map((s) => title(s.trim())).join(' + ');
      const unlock = `${url.origin}/pro/unlock/?code=${c.code}`;
      await sendBuyerMail(env, email, 'forgot', cat.mail, { name: c.name ?? '', product, code: c.code, unlock },
        { href: unlock, label: cat.mail.approvedButton || 'فعّل الآن' });
    }
    // نفس الرد دايماً — ما منكشف إذا الإيميل عنا
    return json({ ok: true }, 200, setDev);
  }

  // ---- البنك ----
  const m = path.match(/^\/api\/pro\/bank\/([a-z0-9][a-z0-9-]{0,59})$/);
  if (m && req.method === 'GET') {
    const slug = m[1];
    const bank = BANKS[slug];
    if (!bank) return json({ ok: false, error: 'not_found' }, 404, setDev);
    const codes = dev.fresh ? [] : await deviceCodes(env, dev.hash);
    if (!productsOf(codes, cat).has(slug)) return json({ ok: false, error: 'locked' }, 403, setDev);
    return json({ ok: true, bank }, 200, setDev);
  }

  return json({ ok: false, error: 'not_found' }, 404, setDev);
}

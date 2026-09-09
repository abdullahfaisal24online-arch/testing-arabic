/**
 * خادم التعليقات لمنصة Testing بالعربي.
 *
 * كل الملفات الثابتة بتنخدم مباشرة بدون ما تمرّ من هون (مجانية وغير محدودة).
 * هذا الخادم بيشتغل فقط على:
 *   POST /api/comments        إرسال تعليق جديد
 *   GET  /api/comments?page=  جلب التعليقات المنشورة لصفحة
 *   GET  /admin/comments        صفحة المراجعة (محمية بـ Cloudflare Access)
 *   GET  /admin/comments/count  عدد التعليقات المنتظرة (للقائمة الجانبية)
 *
 * الحماية: كل مسار تحت /admin محمي ببوابة Cloudflare Access على مستوى الشبكة،
 * قبل ما الطلب يوصل لهذا الخادم أصلاً. ما في كلمة سر يدوية ولا جلسة خاصة هون.
 */

interface Env {
  DB: D1Database;
  ASSETS: Fetcher;
  /** سر توقيع كوكي القسم المدفوع */
  PRO_SECRET?: string;
  /** ملح بصمة الآي بي. اختياري — إذا مش مضبوط بينستعمل ADMIN_PASSWORD القديمة. */
  IP_SALT?: string;
  /** قديمة: كانت كلمة سر صفحة المراجعة. هلأ بتستعمل كملح فقط. */
  ADMIN_PASSWORD?: string;
}

type Row = {
  id: string;
  page: string;
  page_title: string | null;
  name: string;
  body: string;
  status: string;
  is_owner: number;
  parent_id: string | null;
  created_at: number;
};

const MAX_NAME = 40;
const MAX_BODY = 2000;
const MIN_BODY = 2;
const MAX_PER_HOUR = 12;
const FALLBACK_SALT = 'ta-comments-ip-salt';

/* ===================== أدوات ===================== */

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const html = (body: string, status = 200) =>
  new Response(body, {
    status,
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
  });

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const uid = () => crypto.randomUUID();

const ipSalt = (env: Env) => env.IP_SALT || env.ADMIN_PASSWORD || FALLBACK_SALT;

async function hmac(secret: string, value: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(value));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

async function hashIp(ip: string, secret: string): Promise<string> {
  // ما بنخزّن الآي بي نفسه — بس بصمة عشان منع التكرار
  return (await hmac(secret, `ip:${ip}`)).slice(0, 32);
}

/**
 * التعليق بيحدد صفحته بنفسه، فلازم نتأكد إنه مسار داخلي فعلاً.
 * "//evil.com" بيبدأ بـ "/" بس هو رابط خارجي كامل — لهيك منرفضه.
 */
const isInternalPath = (p: string) =>
  p.startsWith('/') && !p.startsWith('//') && !p.startsWith('/\\') && !p.includes('\\') && p.length <= 200;

/**
 * الطلبات اللي بتغيّر حالة (نشر/حذف/رد) لازم تكون جاية من الموقع نفسه.
 * بوابة Access بتحمي المسار، بس هذا بيقفل باب التزوير عبر المواقع (CSRF).
 */
function sameOrigin(req: Request): boolean {
  const host = new URL(req.url).host;
  const origin = req.headers.get('origin');
  if (origin) {
    try {
      return new URL(origin).host === host;
    } catch {
      return false;
    }
  }
  const referer = req.headers.get('referer');
  if (referer) {
    try {
      return new URL(referer).host === host;
    } catch {
      return false;
    }
  }
  return false;
}

const readCookie = (req: Request, name: string) =>
  (req.headers.get('cookie') ?? '')
    .split(';')
    .map((c) => c.trim().split('='))
    .find(([k]) => k === name)?.[1];

/* ===================== بوابة Cloudflare Access ===================== */

/**
 * الطلب اللي بيعدّي من Access بيوصل ومعه ترويسة JWT وإيميل المستخدم.
 * إذا ما وصلت هالترويسات معناها إنو البوابة مش قدّام هذا المسار —
 * وقتها منرفض بدل ما نفتح اللوحة للعالم.
 */
const accessEmail = (req: Request) =>
  req.headers.get('cf-access-authenticated-user-email') ?? '';

const behindAccess = (req: Request) =>
  Boolean(
    req.headers.get('cf-access-jwt-assertion') ||
      accessEmail(req) ||
      readCookie(req, 'CF_Authorization'),
  );

function accessMissingPage() {
  return shell(
    `<div class="wrap">
      <h1>البوابة مش مفعّلة</h1>
      <p class="sub">هذه الصفحة لازم تكون خلف Cloudflare Access. الطلب وصل بدون هوية، فانرفض.</p>
      <p class="sub">افحص: Zero Trust → Access controls → Applications → التطبيق على
      <code>/admin</code> شغّال ومربوط بهذا الدومين.</p>
    </div>`,
    'البوابة مش مفعّلة',
  );
}

/* ===================== واجهة التعليقات العامة ===================== */

async function listComments(env: Env, page: string) {
  const { results } = await env.DB.prepare(
    `SELECT id, name, body, is_owner, parent_id, created_at
       FROM comments
      WHERE page = ?1 AND status = 'approved'
      ORDER BY created_at ASC`,
  )
    .bind(page)
    .all<Row>();

  const roots = results.filter((r) => !r.parent_id);
  const replies = results.filter((r) => r.parent_id);

  return roots.map((r) => ({
    id: r.id,
    name: r.name,
    body: r.body,
    createdAt: r.created_at,
    replies: replies
      .filter((x) => x.parent_id === r.id)
      .map((x) => ({
        id: x.id,
        name: x.name,
        body: x.body,
        isOwner: x.is_owner === 1,
        createdAt: x.created_at,
      })),
  }));
}

async function createComment(req: Request, env: Env) {
  let data: Record<string, string>;
  try {
    data = (await req.json()) as Record<string, string>;
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }

  const page = (data.page ?? '').trim();
  const name = (data.name ?? '').trim();
  const body = (data.body ?? '').trim();
  const pageTitle = (data.pageTitle ?? '').trim().slice(0, 200);
  const honey = (data.website ?? '').trim();
  const openedAt = Number(data.t ?? 0);

  if (!isInternalPath(page)) return json({ ok: false, error: 'bad_page' }, 400);
  if (name.length < 2 || name.length > MAX_NAME) return json({ ok: false, error: 'bad_name' }, 400);
  if (body.length < MIN_BODY || body.length > MAX_BODY) return json({ ok: false, error: 'bad_body' }, 400);

  // فلاتر صامتة: البوت بيعبّي الحقل المخفي، وبيرسل فوراً
  const looksAutomated =
    honey.length > 0 || (openedAt > 0 && Date.now() - openedAt < 3000) || (body.match(/https?:\/\//g) ?? []).length > 2;

  const ip = req.headers.get('cf-connecting-ip') ?? '0.0.0.0';
  const ipHash = await hashIp(ip, ipSalt(env));

  // منع الإغراق: حد أقصى بالساعة من نفس المصدر
  const since = Date.now() - 3600_000;
  const recent = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM comments WHERE ip_hash = ?1 AND created_at > ?2`,
  )
    .bind(ipHash, since)
    .first<{ n: number }>();

  if ((recent?.n ?? 0) >= MAX_PER_HOUR) return json({ ok: false, error: 'too_many' }, 429);

  await env.DB.prepare(
    `INSERT INTO comments (id, page, page_title, name, body, status, is_owner, parent_id, ip_hash, created_at)
     VALUES (?1, ?2, ?3, ?4, ?5, ?6, 0, NULL, ?7, ?8)`,
  )
    .bind(uid(), page, pageTitle || null, name, body, looksAutomated ? 'spam' : 'pending', ipHash, Date.now())
    .run();

  return json({ ok: true });
}

/* ===================== صفحة المراجعة ===================== */

const fmtDate = (ms: number) =>
  new Intl.DateTimeFormat('ar-JO-u-nu-latn', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(ms));

function shell(inner: string, title = 'مراجعة التعليقات') {
  return `<!doctype html>
<html lang="ar" dir="rtl"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${esc(title)}</title>
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap">
<style>
:root{--bg:#0a1428;--surface:#12213d;--navy:#0d1b33;--line:rgba(56,189,248,.16);--line2:rgba(56,189,248,.32);
--ink:#e8eef9;--ink2:#c3d0e4;--muted:#93a4c0;--faint:#7c8ca8;--cyan:#38bdf8;--orange:#f6823b;color-scheme:dark}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);font-family:'IBM Plex Sans Arabic',system-ui,sans-serif;line-height:1.85}
.wrap{max-width:900px;margin:0 auto;padding:28px 20px 70px}
h1{font-size:26px;margin:0 0 6px}
.sub{color:var(--muted);font-size:15px;margin:0 0 24px}
.sub code{background:var(--surface);border:1px solid var(--line);border-radius:6px;padding:1px 6px;font-size:14px}
.who-bar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-size:14px;color:var(--muted);margin:0 0 20px}
.who-bar .mail{color:var(--cyan)}
.tabs{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:22px}
.tab{font:inherit;font-size:14px;color:var(--muted);background:transparent;border:1px solid var(--line);
border-radius:999px;padding:8px 16px;text-decoration:none;display:inline-block}
.tab.on{background:rgba(56,189,248,.12);color:var(--cyan);border-color:var(--line2)}
.c{background:var(--surface);border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin-bottom:14px}
.c.spam{opacity:.7;border-style:dashed}
.meta{display:flex;gap:10px;flex-wrap:wrap;align-items:center;font-size:13px;color:var(--muted);margin-bottom:10px}
.who{color:var(--ink);font-weight:600;font-size:15px}
.page-link{color:var(--cyan);text-decoration:none}
.body{white-space:pre-wrap;color:var(--ink2);font-size:16px;margin:0 0 14px}
.acts{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
button,.btn{font:inherit;font-size:14px;font-weight:600;border-radius:9px;padding:9px 16px;cursor:pointer;border:1px solid transparent}
.ok{background:var(--cyan);color:#06263a}
.no{background:transparent;border-color:var(--line2);color:var(--ink2)}
.del{background:transparent;border-color:rgba(246,130,59,.4);color:var(--orange)}
textarea,input{font:inherit;width:100%;background:var(--bg);border:1px solid var(--line2);border-radius:10px;
padding:12px 14px;color:var(--ink);font-size:15px}
textarea{min-height:90px;resize:vertical;margin-bottom:10px}
form.inline{display:contents}
.reply{margin-top:14px;padding-top:14px;border-top:1px solid var(--line)}
.reply summary{cursor:pointer;color:var(--cyan);font-size:14px;font-weight:600;list-style:none}
.reply summary::-webkit-details-marker{display:none}
.rep{background:var(--navy);border-inline-start:3px solid var(--cyan);border-radius:10px;padding:12px 14px;margin-top:12px}
.rep .who{font-size:14px;color:var(--cyan)}
.empty{color:var(--muted);text-align:center;padding:50px 0}
.count{background:rgba(246,130,59,.14);color:var(--orange);border-radius:999px;padding:2px 10px;font-size:13px}
a.back{color:var(--muted);font-size:14px;text-decoration:none}
</style></head><body>${inner}</body></html>`;
}

async function adminPage(req: Request, env: Env, view: string) {
  const status = view === 'approved' ? 'approved' : view === 'spam' ? 'spam' : 'pending';

  const { results } = await env.DB.prepare(
    `SELECT * FROM comments WHERE status = ?1 AND parent_id IS NULL ORDER BY created_at DESC LIMIT 200`,
  )
    .bind(status)
    .all<Row>();

  const ids = results.map((r) => r.id);
  let replies: Row[] = [];
  if (ids.length) {
    const marks = ids.map((_, i) => `?${i + 1}`).join(',');
    const r = await env.DB.prepare(
      `SELECT * FROM comments WHERE parent_id IN (${marks}) ORDER BY created_at ASC`,
    )
      .bind(...ids)
      .all<Row>();
    replies = r.results;
  }

  const pending = await env.DB.prepare(
    `SELECT COUNT(*) AS n FROM comments WHERE status = 'pending'`,
  ).first<{ n: number }>();

  const tab = (key: string, label: string) =>
    `<a class="tab${status === key ? ' on' : ''}" href="/admin/comments?view=${key}">${label}${
      key === 'pending' && (pending?.n ?? 0) > 0 ? ` <span class="count">${pending?.n}</span>` : ''
    }</a>`;

  const cards = results
    .map((c) => {
      const myReplies = replies
        .filter((r) => r.parent_id === c.id)
        .map(
          (r) => `<div class="rep"><div class="who">ردّك</div><div class="body">${esc(r.body)}</div>
<form method="post" action="/admin/comments/action" class="inline">
<input type="hidden" name="id" value="${r.id}">
<input type="hidden" name="view" value="${status}">
<button class="del" name="action" value="delete" type="submit">حذف الرد</button>
</form></div>`,
        )
        .join('');

      return `<article class="c${status === 'spam' ? ' spam' : ''}">
<div class="meta">
<span class="who">${esc(c.name)}</span>
<span>·</span><span>${fmtDate(c.created_at)}</span>
<span>·</span><a class="page-link" href="${esc(c.page)}" target="_blank" rel="noopener noreferrer">${esc(c.page_title || c.page)}</a>
</div>
<p class="body">${esc(c.body)}</p>
<div class="acts">
<form method="post" action="/admin/comments/action" class="inline">
<input type="hidden" name="id" value="${c.id}">
<input type="hidden" name="view" value="${status}">
${status !== 'approved' ? '<button class="ok" name="action" value="approve" type="submit">نشر</button>' : ''}
${status !== 'pending' ? '<button class="no" name="action" value="unapprove" type="submit">إرجاع للانتظار</button>' : ''}
${status !== 'spam' ? '<button class="no" name="action" value="spam" type="submit">سبام</button>' : ''}
<button class="del" name="action" value="delete" type="submit">حذف</button>
</form>
</div>
${myReplies}
<details class="reply">
<summary>اكتب رد</summary>
<form method="post" action="/admin/comments/action" style="margin-top:12px">
<input type="hidden" name="id" value="${c.id}">
<input type="hidden" name="view" value="${status}">
<textarea name="reply" placeholder="ردّك على ${esc(c.name)}…" required></textarea>
<button class="ok" name="action" value="reply" type="submit">انشر الرد</button>
</form>
</details>
</article>`;
    })
    .join('');

  const email = accessEmail(req);

  return shell(`<div class="wrap">
<h1>مراجعة التعليقات</h1>
<p class="sub">التعليقات ما بتظهر على الموقع إلا بعد ما توافق عليها.</p>
<div class="who-bar">
${email ? `<span>داخل باسم <span class="mail">${esc(email)}</span></span><span>·</span>` : ''}
<a class="back" href="/admin/">لوحة المحتوى</a>
</div>
<nav class="tabs">
${tab('pending', 'بانتظار المراجعة')}
${tab('approved', 'منشورة')}
${tab('spam', 'سبام')}
<a class="tab" href="/cdn-cgi/access/logout">خروج</a>
</nav>
${cards || '<p class="empty">ما في تعليقات هون.</p>'}
</div>`);
}

async function adminAction(req: Request, env: Env) {
  const form = await req.formData();
  const id = String(form.get('id') ?? '');
  const action = String(form.get('action') ?? '');
  const view = String(form.get('view') ?? 'pending');

  if (!id) return Response.redirect(new URL('/admin/comments', req.url).toString(), 303);

  if (action === 'approve' || action === 'unapprove' || action === 'spam') {
    const status = action === 'approve' ? 'approved' : action === 'spam' ? 'spam' : 'pending';
    await env.DB.prepare(`UPDATE comments SET status = ?1 WHERE id = ?2 OR parent_id = ?2`)
      .bind(status, id)
      .run();
  } else if (action === 'delete') {
    await env.DB.prepare(`DELETE FROM comments WHERE id = ?1 OR parent_id = ?1`).bind(id).run();
  } else if (action === 'reply') {
    const body = String(form.get('reply') ?? '').trim().slice(0, MAX_BODY);
    if (body) {
      const parent = await env.DB.prepare(`SELECT page, page_title FROM comments WHERE id = ?1`)
        .bind(id)
        .first<{ page: string; page_title: string | null }>();
      if (parent) {
        await env.DB.prepare(
          `INSERT INTO comments (id, page, page_title, name, body, status, is_owner, parent_id, ip_hash, created_at)
           VALUES (?1, ?2, ?3, ?4, ?5, 'approved', 1, ?6, NULL, ?7)`,
        )
          .bind(uid(), parent.page, parent.page_title, 'عبدالله', body, id, Date.now())
          .run();
        // الرد بيعني الموافقة على التعليق الأصلي
        await env.DB.prepare(`UPDATE comments SET status = 'approved' WHERE id = ?1`).bind(id).run();
      }
    }
  }

  return Response.redirect(new URL(`/admin/comments?view=${view}`, req.url).toString(), 303);
}

/* ===================== الموجّه ===================== */

/* ---------- القسم المدفوع: بوابة الوصول بالكود ---------- */
const PRO_COOKIE = 'ta_pro';
const PRO_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // بدون 0 O 1 I L عشان ما تلتبس بالقراءة
const PRO_TTL_DAYS = 365;
const PRO_DEFAULT_DEVICES = 3;

const proSecret = (env: Env) => env.PRO_SECRET || ipSalt(env);

const normCode = (s: string) => s.trim().toUpperCase().replace(/\s+/g, '');

const newProCode = () => {
  const pick = (n: number) =>
    Array.from(crypto.getRandomValues(new Uint8Array(n)))
      .map((b) => PRO_ALPHABET[b % PRO_ALPHABET.length])
      .join('');
  return `TA-${pick(4)}-${pick(4)}`;
};

async function proToken(env: Env, code: string, exp: number): Promise<string> {
  const payload = `${code}.${exp}`;
  return `${payload}.${await hmac(proSecret(env), payload)}`;
}

// بترجّع الكود إذا التوقيع سليم والمدة ما خلصت، وإلا null
async function proTokenCode(env: Env, token: string): Promise<string | null> {
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [code, expRaw, sig] = parts;
  const exp = Number(expRaw);
  if (!Number.isFinite(exp) || exp < Date.now()) return null;
  const expect = await hmac(proSecret(env), `${code}.${exp}`);
  if (sig.length !== expect.length) return null;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) diff |= sig.charCodeAt(i) ^ expect.charCodeAt(i);
  return diff === 0 ? code : null;
}

// الكوكي وحدو مش كفاية: نتأكد إن الكود لسا active بقاعدة البيانات
async function proAccess(req: Request, env: Env): Promise<string | null> {
  const token = readCookie(req, PRO_COOKIE);
  if (!token) return null;
  const code = await proTokenCode(env, token);
  if (!code) return null;
  const row = await env.DB.prepare(
    `SELECT code FROM pro_codes
      WHERE code = ?1 AND status = 'active' AND (expires_at IS NULL OR expires_at > ?2)`,
  )
    .bind(code, Date.now())
    .first<{ code: string }>();
  return row ? code : null;
}

const proCookie = (value: string, maxAge: number) =>
  `${PRO_COOKIE}=${value}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;

async function proUnlock(req: Request, env: Env): Promise<Response> {
  if (!sameOrigin(req)) return json({ ok: false, error: 'origin' }, 403);

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const code = normCode(String(body.code ?? ''));
  if (!/^TA-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) return json({ ok: false, error: 'format' }, 400);

  const row = await env.DB.prepare(
    `SELECT code, max_devices, status, expires_at FROM pro_codes WHERE code = ?1`,
  )
    .bind(code)
    .first<{ code: string; max_devices: number; status: string; expires_at: number | null }>();

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

  const exp = now + PRO_TTL_DAYS * 86400000;
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'set-cookie': proCookie(await proToken(env, code, exp), PRO_TTL_DAYS * 86400),
    },
  });
}

/* ---------- صفحة إدارة الأكواد (خلف Cloudflare Access) ---------- */
const proDate = (ms: number | null) =>
  ms ? new Date(ms).toISOString().slice(0, 16).replace('T', ' ') : '—';

async function proAdminPage(env: Env, justCreated = ''): Promise<string> {
  const { results } = await env.DB.prepare(
    `SELECT c.code, c.name, c.email, c.payment_ref, c.price_jod, c.max_devices, c.status,
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
    max_devices: number;
    status: string;
    created_at: number;
    note: string | null;
    devices: number;
    last_seen: number | null;
  }>();

  const rows = (results ?? [])
    .map(
      (r) => `<tr class="${r.status === 'active' ? '' : 'off'}">
        <td class="code">${esc(r.code)}</td>
        <td>${esc(r.name ?? '')}<br><span class="dim">${esc(r.email ?? '')}</span></td>
        <td>${r.price_jod ?? '—'}<br><span class="dim">${esc(r.payment_ref ?? '')}</span></td>
        <td>${r.devices} / ${r.max_devices}</td>
        <td>${proDate(r.last_seen)}</td>
        <td>${proDate(r.created_at)}</td>
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
    <h1>أكواد القسم المدفوع</h1>
    ${created}
    <form class="add" method="post" action="/admin/pro/new">
      <input name="name" placeholder="اسم المشتري" />
      <input name="email" type="email" placeholder="إيميل المشتري" />
      <input name="payment_ref" placeholder="مرجع الحوالة / CliQ" />
      <input name="price_jod" type="number" step="0.5" placeholder="المبلغ (دينار)" />
      <input name="max_devices" type="number" min="1" max="10" value="3" title="عدد الأجهزة" />
      <button type="submit">أنشئ كود</button>
    </form>
    <table>
      <thead><tr><th>الكود</th><th>المشتري</th><th>المبلغ</th><th>الأجهزة</th><th>آخر دخول</th><th>الإنشاء</th><th></th></tr></thead>
      <tbody>${rows || '<tr><td colspan="7">ما في أكواد بعد.</td></tr>'}</tbody>
    </table>
    <style>
      .add { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0 26px; }
      .add input { padding: 8px 10px; }
      table { width: 100%; border-collapse: collapse; font-size: 14px; }
      th, td { text-align: right; padding: 8px 6px; border-bottom: 1px solid #2a3a55; vertical-align: top; }
      .code { font-family: monospace; font-weight: 700; }
      .dim { opacity: .6; font-size: 12px; }
      tr.off { opacity: .45; }
      .new { background: #14351f; border: 1px solid #2f7d4f; padding: 10px 14px; border-radius: 8px; }
    </style>
  </div>`;
}

async function proAdminAction(req: Request, env: Env): Promise<Response> {
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

async function proAdminNew(req: Request, env: Env): Promise<Response> {
  if (!sameOrigin(req)) return html(shell('<div class="wrap"><h1>طلب مرفوض</h1></div>', 'مرفوض'), 403);
  const form = await req.formData();
  const code = newProCode();
  const devices = Number(form.get('max_devices') ?? PRO_DEFAULT_DEVICES);
  await env.DB.prepare(
    `INSERT INTO pro_codes (code, name, email, payment_ref, price_jod, max_devices, status, created_at)
      VALUES (?1, ?2, ?3, ?4, ?5, ?6, 'active', ?7)`,
  )
    .bind(
      code,
      String(form.get('name') ?? '').slice(0, 80) || null,
      String(form.get('email') ?? '').slice(0, 120) || null,
      String(form.get('payment_ref') ?? '').slice(0, 80) || null,
      Number(form.get('price_jod') ?? 0) || null,
      Number.isFinite(devices) && devices > 0 ? Math.min(devices, 10) : PRO_DEFAULT_DEVICES,
      Date.now(),
    )
    .run();
  return html(shell(await proAdminPage(env, code), 'أكواد القسم المدفوع'));
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    const path = url.pathname;

    // ---------- القسم المدفوع ----------
    if (path === '/api/pro/unlock') {
      if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
      return proUnlock(req, env);
    }
    if (path === '/api/pro/status') {
      return json({ ok: Boolean(await proAccess(req, env)) });
    }
    if (path === '/api/pro/logout') {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'set-cookie': proCookie('', 0),
        },
      });
    }

    if (path.startsWith('/admin/pro')) {
      if (!behindAccess(req)) return html(accessMissingPage(), 403);
      if (path === '/admin/pro/new' && req.method === 'POST') return proAdminNew(req, env);
      if (path === '/admin/pro/action' && req.method === 'POST') return proAdminAction(req, env);
      return html(shell(await proAdminPage(env), 'أكواد القسم المدفوع'));
    }

    // صفحة إدخال الكود مفتوحة للكل; باقي /pro/ محجوب
    if (path.startsWith('/pro') && !path.startsWith('/pro/unlock')) {
      if (!(await proAccess(req, env))) {
        const to = new URL('/pro/unlock/', req.url);
        to.searchParams.set('to', path);
        return Response.redirect(to.toString());
      }
    }

    // ---------- واجهة التعليقات ----------
    if (path === '/api/comments') {
      if (req.method === 'GET') {
        const page = url.searchParams.get('page') ?? '';
        if (!isInternalPath(page)) return json({ ok: false, error: 'bad_page' }, 400);
        const body = JSON.stringify({ ok: true, comments: await listComments(env, page) });
        // كاش قصير بمتصفّح الزائر: التعليق الجديد بدّه موافقتك أصلاً، فدقيقة تأخير ما بتضر
        return new Response(body, {
          headers: {
            'content-type': 'application/json; charset=utf-8',
            'cache-control': 'public, max-age=60',
          },
        });
      }
      if (req.method === 'POST') return createComment(req, env);
      return json({ ok: false, error: 'method' }, 405);
    }

    // ---------- نسخة محلية من مشتركي النشرة ----------
    // النموذج بيضل يبعت لـ Kit مباشرة؛ هاد الـ endpoint بس بيسجّل الإيميل عندنا كنسخة احتياطية
    if (path === '/api/subscribe') {
      if (req.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
      if (!sameOrigin(req)) return json({ ok: false, error: 'origin' }, 403);

      let email = '';
      if ((req.headers.get('content-type') ?? '').includes('application/json')) {
        const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
        email = String(body.email ?? '');
      } else {
        const form = await req.formData().catch(() => null);
        email = String(form?.get('email') ?? '');
      }
      email = email.trim().toLowerCase();

      if (email.length > 254 || !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) {
        return json({ ok: false, error: 'email' }, 400);
      }

      const now = Date.now();
      await env.DB.prepare(
        `INSERT INTO subscribers (email, source, created_at, last_seen_at)
         VALUES (?1, ?2, ?3, ?3)
         ON CONFLICT(email) DO UPDATE SET last_seen_at = ?3`,
      )
        .bind(email, (req.headers.get('referer') ?? '').slice(0, 300), now)
        .run();

      return json({ ok: true });
    }

    // ---------- صفحة المراجعة (خلف Cloudflare Access) ----------
    if (path.startsWith('/admin/comments')) {
      if (!behindAccess(req)) return html(accessMissingPage(), 403);

      if (path === '/admin/comments/action' && req.method === 'POST') {
        if (!sameOrigin(req)) return html(shell('<div class="wrap"><h1>طلب مرفوض</h1><p class="sub">هذا الطلب مش جاي من الموقع نفسه.</p></div>', 'طلب مرفوض'), 403);
        return adminAction(req, env);
      }

      // عدّاد التعليقات المنتظرة — بتستعمله القائمة الجانبية بلوحة المحتوى
      if (path === '/admin/comments/count') {
        const row = await env.DB.prepare(
          `SELECT COUNT(*) AS n FROM comments WHERE status = 'pending'`,
        ).first<{ n: number }>();
        return json({ ok: true, pending: row?.n ?? 0 });
      }

      // روابط قديمة من نسخة كلمة السر
      if (path === '/admin/comments/login' || path === '/admin/comments/logout') {
        return Response.redirect(new URL('/admin/comments', req.url).toString(), 303);
      }

      return html(await adminPage(req, env, url.searchParams.get('view') ?? 'pending'));
    }

    // ---------- كل شي تاني: الملفات الثابتة ----------
    return env.ASSETS.fetch(req);
  },
} satisfies ExportedHandler<Env>;

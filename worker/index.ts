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

  if (!page.startsWith('/') || page.length > 200) return json({ ok: false, error: 'bad_page' }, 400);
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
<span>·</span><a class="page-link" href="${esc(c.page)}" target="_blank">${esc(c.page_title || c.page)}</a>
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

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    const path = url.pathname;

    // ---------- واجهة التعليقات ----------
    if (path === '/api/comments') {
      if (req.method === 'GET') {
        const page = url.searchParams.get('page') ?? '';
        if (!page.startsWith('/')) return json({ ok: false, error: 'bad_page' }, 400);
        return json({ ok: true, comments: await listComments(env, page) });
      }
      if (req.method === 'POST') return createComment(req, env);
      return json({ ok: false, error: 'method' }, 405);
    }

    // ---------- صفحة المراجعة (خلف Cloudflare Access) ----------
    if (path.startsWith('/admin/comments')) {
      if (!behindAccess(req)) return html(accessMissingPage(), 403);

      if (path === '/admin/comments/action' && req.method === 'POST') return adminAction(req, env);

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

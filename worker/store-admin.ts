/**
 * لوحة إدارة المتجر — /admin/store (المرحلة 3).
 * محمية بـ Cloudflare Access (نفس بوابة /admin). الـ Worker كمان بيرفض أي طلب ما عليه هوية Access،
 * وبيرفض أي POST جاي من دومين تاني.
 *
 *   GET  /admin/store?view=review|awaiting|approved|rejected|expired|all   الطلبات
 *   GET  /admin/store/order/<id>                                           تفاصيل طلب + الإيصال
 *   GET  /admin/store/proof/<id>                                           ملف الإيصال نفسه
 *   GET  /admin/store/discounts                                            أكواد الخصم
 *   POST /admin/store/action                                               قبول / رفض / خصم…
 */
import { ensureTables, catalog, type StoreEnv, type Order } from './store';
import { sendBuyerMail } from './store-mail';

const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // بدون 0 O 1 I L
const newCode = () => {
  const pick = (n: number) => Array.from(crypto.getRandomValues(new Uint8Array(n)), (b) => ALPHABET[b % ALPHABET.length]).join('');
  return `TA-${pick(4)}-${pick(4)}`;
};
const esc = (s: unknown) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const jod = (n: number) => `${Number.isInteger(n) ? n : n.toFixed(2)} JOD`;
const when = (ms: number | null) =>
  ms ? new Date(ms).toLocaleString('ar-JO-u-nu-latn', { timeZone: 'Asia/Amman', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }) : '—';
const html = (body: string, status = 200) =>
  new Response(body, { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
const back = (req: Request, to: string) => Response.redirect(new URL(to, req.url).toString(), 303);

const STATUS: Record<string, [string, string]> = {
  review: ['قيد المراجعة', 'w'],
  awaiting_payment: ['بانتظار الدفع', 'p'],
  approved: ['مفعّل', 'o'],
  rejected: ['مرفوض', 'r'],
  expired: ['منتهي', 'x'],
};
const VIEWS: [string, string, string | null][] = [
  ['review', 'قيد المراجعة', 'review'],
  ['awaiting', 'بانتظار الدفع', 'awaiting_payment'],
  ['approved', 'مفعّلة', 'approved'],
  ['rejected', 'مرفوضة', 'rejected'],
  ['expired', 'منتهية', 'expired'],
  ['all', 'الكل', null],
];

function shell(title: string, inner: string, flash = '') {
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>${esc(title)} — المتجر</title><style>
:root{--bg:#0a1428;--card:#12213d;--line:rgba(56,189,248,.18);--ink:#e8eef9;--mut:#93a4c0;--cy:#38bdf8;--or:#f6823b;--gr:#34d399;--rd:#f87171;--yl:#fbbf24}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.7 system-ui,-apple-system,"Segoe UI",Tahoma,sans-serif}
a{color:var(--cy)}.wrap{max-width:1100px;margin:0 auto;padding:18px 16px 60px}
header{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px}
header h1{margin:0;font-size:22px}nav a{margin-inline-start:14px;font-weight:600;text-decoration:none}
.flash{background:rgba(52,211,153,.12);border:1px solid rgba(52,211,153,.4);border-radius:12px;padding:10px 14px;margin-bottom:14px}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:14px}
.kpis div{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:10px 14px;color:var(--mut);font-size:13px}.kpis b{display:block;color:var(--ink);font-size:22px}
.tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px}.tabs a{padding:4px 14px;border-radius:999px;border:1px solid var(--line);color:var(--mut);text-decoration:none;font-size:14px}.tabs a.on{background:var(--cy);border-color:var(--cy);color:#04121f;font-weight:700}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;margin-bottom:14px;overflow-x:auto}
table{width:100%;border-collapse:collapse;font-size:14px;min-width:640px}th{color:var(--mut);font-weight:600;text-align:start;padding:6px 8px;border-bottom:1px solid var(--line)}
td{padding:9px 8px;border-bottom:1px solid rgba(56,189,248,.08);vertical-align:middle}tr:hover td{background:rgba(56,189,248,.04)}
.mono{font-family:ui-monospace,Menlo,Consolas,monospace;direction:ltr;unicode-bidi:isolate}
.st{font-size:12px;font-weight:700;padding:1px 10px;border-radius:999px;white-space:nowrap}
.st.w{background:rgba(251,191,36,.15);color:var(--yl)}.st.p{background:rgba(147,164,192,.18);color:var(--mut)}.st.o{background:rgba(52,211,153,.15);color:var(--gr)}.st.r{background:rgba(248,113,113,.15);color:var(--rd)}.st.x{background:rgba(147,164,192,.1);color:#7c8ca8}
.btn{font:inherit;font-weight:700;font-size:14px;border:0;border-radius:10px;padding:8px 16px;cursor:pointer;text-decoration:none;display:inline-block}
.y{background:var(--gr);color:#052e1f}.n{background:rgba(248,113,113,.18);color:var(--rd)}.g{background:transparent;border:1px solid var(--line);color:var(--ink)}.o2{background:var(--or);color:#1a0d04}
.grid2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:14px}@media(max-width:800px){.grid2{grid-template-columns:1fr}}
.kv{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;font-size:14.5px}.kv span{color:var(--mut)}
.proof img{max-width:100%;border-radius:10px;display:block;background:#fff}
.warn{background:rgba(251,191,36,.08);border:1px solid rgba(251,191,36,.35);color:#fde68a;border-radius:10px;padding:10px 12px;font-size:14px}
input,select,textarea{font:inherit;font-size:15px;background:#0b1729;border:1px solid var(--line);border-radius:10px;padding:8px 10px;color:var(--ink);width:100%}
form.inline{display:flex;gap:8px;flex-wrap:wrap;align-items:end}form.inline label{display:grid;gap:4px;font-size:13px;color:var(--mut);flex:1;min-width:120px}
.acts{display:flex;gap:8px;flex-wrap:wrap;margin-top:12px}.codebox{font-size:22px;letter-spacing:2px;color:#a7f3d0;border:2px solid var(--gr);border-radius:12px;padding:10px 14px;display:inline-block}
.muted{color:var(--mut)}
</style></head><body><div class="wrap"><header><h1>🔻 إدارة المتجر</h1><nav><a href="/admin/store">الطلبات</a><a href="/admin/store/discounts">أكواد الخصم</a><a href="/store/" target="_blank">المتجر ↗</a></nav></header>
${flash ? `<div class="flash">${esc(flash)}</div>` : ''}${inner}</div></body></html>`;
}

async function listPage(env: StoreEnv, url: URL) {
  const view = VIEWS.find((v) => v[0] === url.searchParams.get('view')) ?? VIEWS[0];
  const counts = await env.DB.prepare(`SELECT status, COUNT(*) AS n FROM store_orders GROUP BY status`).all<{ status: string; n: number }>();
  const c = Object.fromEntries((counts.results ?? []).map((r) => [r.status, r.n]));
  const monthStart = new Date(); monthStart.setUTCDate(1); monthStart.setUTCHours(0, 0, 0, 0);
  const rev = await env.DB.prepare(`SELECT COALESCE(SUM(amount),0) AS s, COUNT(*) AS n FROM store_orders WHERE status='approved' AND reviewed_at >= ?1`)
    .bind(monthStart.getTime()).first<{ s: number; n: number }>();
  const rows = (view[2]
    ? await env.DB.prepare(`SELECT * FROM store_orders WHERE status = ?1 ORDER BY created_at DESC LIMIT 200`).bind(view[2]).all<Order & { ref: string | null }>()
    : await env.DB.prepare(`SELECT * FROM store_orders ORDER BY created_at DESC LIMIT 200`).all<Order & { ref: string | null }>()).results ?? [];
  const now = Date.now();
  const tr = rows.map((o) => {
    const st = o.status === 'awaiting_payment' && now > o.expires_at ? 'expired' : o.status;
    const [label, cls] = STATUS[st] ?? [st, 'p'];
    return `<tr><td><a class="mono" href="/admin/store/order/${esc(o.id)}">${esc(o.id)}</a></td><td>${esc(o.name)}<br><small class="mono muted">${esc(o.email)}</small></td>
<td>${esc(o.product_title ?? o.product)}</td><td>${jod(o.amount)}${o.discount_code ? `<br><small class="muted">${esc(o.discount_code)}</small>` : ''}</td>
<td>${when(o.created_at)}</td><td><span class="st ${cls}">${label}</span></td><td><a class="btn g" href="/admin/store/order/${esc(o.id)}">فتح</a></td></tr>`;
  }).join('');
  return `<div class="kpis"><div><b>${c.review ?? 0}</b>قيد المراجعة</div><div><b>${c.awaiting_payment ?? 0}</b>بانتظار الدفع</div>
<div><b>${c.approved ?? 0}</b>مفعّلة (الكل)</div><div><b>${jod(Math.round((rev?.s ?? 0) * 100) / 100)}</b>مبيعات هالشهر (${rev?.n ?? 0})</div></div>
<div class="tabs">${VIEWS.map((v) => `<a class="${v === view ? 'on' : ''}" href="/admin/store?view=${v[0]}">${v[1]}${v[2] ? ` (${c[v[2]] ?? 0})` : ''}</a>`).join('')}</div>
<div class="card">${rows.length ? `<table><tr><th>الطلب</th><th>المشتري</th><th>المنتج</th><th>المبلغ</th><th>التاريخ</th><th>الحالة</th><th></th></tr>${tr}</table>` : '<p class="muted">ما في طلبات هون.</p>'}</div>`;
}

async function orderPage(env: StoreEnv, id: string, origin: string) {
  const o = await env.DB.prepare(`SELECT * FROM store_orders WHERE id = ?1`).bind(id).first<Order & { ref: string | null; phone: string | null; reviewed_at: number | null }>();
  if (!o) return null;
  const proof = await env.DB.prepare(`SELECT mime, size, created_at FROM store_proofs WHERE order_id = ?1`).bind(id).first<{ mime: string; size: number; created_at: number }>();
  const [label, cls] = STATUS[o.status] ?? [o.status, 'p'];
  const link = `${origin}/store/order/?t=${o.token}`;
  const phone = (o.phone ?? '').replace(/[^\d]/g, '');
  const waText = o.status === 'approved' && o.code
    ? `مرحبا ${o.name}، تم تفعيل طلبك ${o.id} ✅\nكود التفعيل: ${o.code}\nفعّله من هون: ${origin}/pro/unlock/?code=${o.code}`
    : `مرحبا ${o.name}، بخصوص طلبك ${o.id} على Testing بالعربي`;
  const devices = o.code ? await env.DB.prepare(`SELECT COUNT(*) AS n FROM pro_activations WHERE code = ?1`).bind(o.code).first<{ n: number }>().catch(() => null) : null;

  const proofHtml = proof
    ? proof.mime === 'application/pdf'
      ? `<p><a class="btn g" href="/admin/store/proof/${esc(o.id)}" target="_blank">افتح الـ PDF ↗</a></p>`
      : `<a href="/admin/store/proof/${esc(o.id)}" target="_blank"><img src="/admin/store/proof/${esc(o.id)}" alt="الإيصال"></a>`
    : '<p class="muted">ما وصل إثبات دفع لسا.</p>';

  const actions =
    o.status === 'review' || o.status === 'awaiting_payment' || o.status === 'expired'
      ? `<div class="warn">قبل ما توافق: افتح تطبيق البنك وتأكد إنه وصل تحويل بمبلغ <b>${jod(o.amount)}</b> ومعه <b class="mono">${esc(o.id)}</b>.</div>
<form method="post" action="/admin/store/action" class="acts"><input type="hidden" name="id" value="${esc(o.id)}"><input type="hidden" name="do" value="approve">
<button class="btn y">✓ قبول وتوليد الكود</button></form>
<form method="post" action="/admin/store/action" class="inline" style="margin-top:12px"><input type="hidden" name="id" value="${esc(o.id)}"><input type="hidden" name="do" value="reject">
<label>سبب الرفض (بيظهر للمشتري)<input name="reason" maxlength="200" placeholder="مثلاً: ما وصلنا تحويل بهاد المبلغ"></label><button class="btn n">رفض</button></form>`
      : o.status === 'approved'
        ? `<p>كود التفعيل:</p><p><span class="codebox mono">${esc(o.code)}</span></p><p class="muted">الأجهزة المفعّلة: ${devices?.n ?? 0}</p>
<div class="acts"><form method="post" action="/admin/store/action"><input type="hidden" name="id" value="${esc(o.id)}"><input type="hidden" name="do" value="resend"><button class="btn g">إعادة إرسال الإيميل</button></form>
<form method="post" action="/admin/store/action"><input type="hidden" name="id" value="${esc(o.id)}"><input type="hidden" name="do" value="reset_devices"><button class="btn g">تصفير الأجهزة</button></form>
<form method="post" action="/admin/store/action" onsubmit="return confirm('إيقاف الكود؟ المشتري ما بيقدر يفتح المحتوى بعدها.')"><input type="hidden" name="id" value="${esc(o.id)}"><input type="hidden" name="do" value="revoke"><button class="btn n">إيقاف الكود</button></form></div>`
        : o.status === 'rejected'
          ? `<p class="muted">مرفوض${o.reject_reason ? `: ${esc(o.reject_reason)}` : ''}</p><form method="post" action="/admin/store/action"><input type="hidden" name="id" value="${esc(o.id)}"><input type="hidden" name="do" value="reopen"><button class="btn g">رجّعه لقيد المراجعة</button></form>`
          : '';

  return `<p><a href="/admin/store">→ كل الطلبات</a></p><div class="grid2">
<div class="card"><h2 style="margin-top:0" class="mono">${esc(o.id)} <span class="st ${cls}">${label}</span></h2>
<div class="kv"><span>المنتج</span><b>${esc(o.product_title ?? o.product)}</b><span>المشتري</span><b>${esc(o.name)}</b>
<span>الإيميل</span><b class="mono">${esc(o.email)}</b><span>واتساب</span><b class="mono">${esc(o.phone ?? '—')}</b>
<span>السعر</span><b>${jod(o.price)}</b><span>كود الخصم</span><b>${o.discount_code ? `${esc(o.discount_code)} (− ${jod(o.discount)})` : '—'}</b>
<span>المطلوب</span><b style="color:var(--or)">${jod(o.amount)}</b><span>مرجع التحويل</span><b class="mono">${esc(o.ref ?? '—')}</b>
<span>تاريخ الطلب</span><b>${when(o.created_at)}</b><span>وصل الإثبات</span><b>${when(o.proof_at)}</b><span>آخر حجز</span><b>${when(o.expires_at)}</b></div>
<div style="margin-top:14px">${actions}</div>
<div class="acts">${phone ? `<a class="btn g" target="_blank" href="https://wa.me/${phone}?text=${encodeURIComponent(waText)}">واتساب للمشتري ↗</a>` : ''}
<a class="btn g" target="_blank" href="${esc(link)}">صفحة الطلب عند المشتري ↗</a></div></div>
<div class="card proof"><h3 style="margin-top:0">إثبات الدفع</h3>${proofHtml}</div></div>`;
}

async function discountsPage(env: StoreEnv, products: { slug: string; title: string }[]) {
  const rows = (await env.DB.prepare(`SELECT d.*, (SELECT COUNT(*) FROM store_orders o WHERE o.discount_code = d.code AND o.status IN ('awaiting_payment','review','approved')) AS used FROM store_discounts d ORDER BY created_at DESC`).all<any>()).results ?? [];
  const tr = rows.map((d) => `<tr><td class="mono"><b>${esc(d.code)}</b></td><td>${d.kind === 'fixed' ? jod(d.value) : `${d.value}%`}</td>
<td>${d.products ? esc(d.products) : 'كل المنتجات'}</td><td>${d.used}${d.max_uses ? ` / ${d.max_uses}` : ''}</td><td>${d.expires_at ? when(d.expires_at) : '—'}</td>
<td>${d.active ? '<span class="st o">فعّال</span>' : '<span class="st x">موقوف</span>'}</td><td>${esc(d.note ?? '')}</td>
<td><form method="post" action="/admin/store/action" style="display:inline"><input type="hidden" name="do" value="disc_toggle"><input type="hidden" name="code" value="${esc(d.code)}"><button class="btn g">${d.active ? 'إيقاف' : 'تفعيل'}</button></form>
<form method="post" action="/admin/store/action" style="display:inline" onsubmit="return confirm('حذف الكود؟')"><input type="hidden" name="do" value="disc_delete"><input type="hidden" name="code" value="${esc(d.code)}"><button class="btn n">حذف</button></form></td></tr>`).join('');
  return `<div class="card"><h2 style="margin-top:0">كود خصم جديد</h2>
<form method="post" action="/admin/store/action" class="inline"><input type="hidden" name="do" value="disc_add">
<label>الكود<input name="code" required maxlength="40" dir="ltr" placeholder="LAUNCH20"></label>
<label>النوع<select name="kind"><option value="pct">نسبة %</option><option value="fixed">مبلغ ثابت JOD</option></select></label>
<label>القيمة<input name="value" type="number" step="0.01" min="0.01" required></label>
<label>لمنتج معيّن (اختياري)<select name="products"><option value="">كل المنتجات</option>${products.map((p) => `<option value="${esc(p.slug)}">${esc(p.title)}</option>`).join('')}</select></label>
<label>حد الاستخدام (0 = بلا حد)<input name="max_uses" type="number" min="0" value="0"></label>
<label>بينتهي بتاريخ (اختياري)<input name="expires" type="date"></label>
<label>ملاحظة<input name="note" maxlength="80"></label><button class="btn o2">إضافة</button></form></div>
<div class="card">${rows.length ? `<table><tr><th>الكود</th><th>الخصم</th><th>المنتجات</th><th>استُخدم</th><th>ينتهي</th><th>الحالة</th><th>ملاحظة</th><th></th></tr>${tr}</table>` : '<p class="muted">ما في أكواد لسا.</p>'}</div>`;
}

async function action(req: Request, env: StoreEnv, url: URL) {
  const f = await req.formData();
  const act = String(f.get('do') ?? '');
  const id = String(f.get('id') ?? '');
  const now = Date.now();
  const cat = await catalog(req, env);

  if (act.startsWith('disc_')) {
    const code = String(f.get('code') ?? '').trim().toUpperCase().replace(/\s+/g, '').slice(0, 40);
    if (!/^[A-Z0-9_-]{2,40}$/.test(code)) return back(req, '/admin/store/discounts?m=bad');
    if (act === 'disc_add') {
      const kind = f.get('kind') === 'fixed' ? 'fixed' : 'pct';
      const value = Math.max(0, Number(f.get('value')) || 0);
      if (!value || (kind === 'pct' && value > 100)) return back(req, '/admin/store/discounts?m=bad');
      const exp = String(f.get('expires') ?? '');
      const expires = exp ? new Date(`${exp}T23:59:59+03:00`).getTime() : 0;
      await env.DB.prepare(`INSERT OR REPLACE INTO store_discounts (code, kind, value, products, max_uses, expires_at, active, note, created_at) VALUES (?1,?2,?3,?4,?5,?6,1,?7,?8)`)
        .bind(code, kind, value, String(f.get('products') ?? ''), Math.max(0, Number(f.get('max_uses')) || 0), expires || 0, String(f.get('note') ?? '').slice(0, 80), now).run();
      return back(req, '/admin/store/discounts?m=added');
    }
    if (act === 'disc_toggle') await env.DB.prepare(`UPDATE store_discounts SET active = 1 - active WHERE code = ?1`).bind(code).run();
    if (act === 'disc_delete') await env.DB.prepare(`DELETE FROM store_discounts WHERE code = ?1`).bind(code).run();
    return back(req, '/admin/store/discounts?m=saved');
  }

  const o = await env.DB.prepare(`SELECT * FROM store_orders WHERE id = ?1`).bind(id).first<Order & { ref: string | null }>();
  if (!o) return back(req, '/admin/store');
  const link = `${url.origin}/store/order/?t=${o.token}`;
  const vars = { name: o.name, id: o.id, amount: `${o.amount} JOD`, product: o.product_title ?? o.product, link };

  if (act === 'approve' && o.status !== 'approved') {
    let code = '';
    for (let i = 0; i < 5 && !code; i++) {
      const c = newCode();
      try {
        await env.DB.prepare(`INSERT INTO pro_codes (code, name, email, payment_ref, price_jod, products, max_devices, status, created_at) VALUES (?1,?2,?3,?4,?5,?6,?7,'active',?8)`)
          .bind(c, o.name, o.email, `${o.id}${o.ref ? ` / ${o.ref}` : ''}`, o.amount, o.product, cat.maxDevices, now).run();
        code = c;
      } catch (e) { if (!String(e).includes('UNIQUE')) throw e; }
    }
    await env.DB.prepare(`UPDATE store_orders SET status='approved', code=?2, reviewed_at=?3, reject_reason=NULL WHERE id=?1`).bind(o.id, code, now).run();
    const unlock = `${url.origin}/pro/unlock/?code=${code}`;
    const r = await sendBuyerMail(env, o.email, 'approved', cat.mail, { ...vars, code, unlock }, { href: unlock, label: cat.mail.approvedButton || 'فعّل الآن' });
    return back(req, `/admin/store/order/${o.id}?m=${r === 'sent' ? 'approved_mailed' : 'approved'}`);
  }
  if (act === 'reject') {
    const reason = String(f.get('reason') ?? '').trim().slice(0, 200);
    await env.DB.prepare(`UPDATE store_orders SET status='rejected', reject_reason=?2, reviewed_at=?3 WHERE id=?1`).bind(o.id, reason || null, now).run();
    await sendBuyerMail(env, o.email, 'rejected', cat.mail, { ...vars, reason: reason || '—' }, { href: link, label: cat.mail.orderButton || 'تفاصيل الطلب' });
    return back(req, `/admin/store/order/${o.id}?m=rejected`);
  }
  if (act === 'reopen') {
    await env.DB.prepare(`UPDATE store_orders SET status='review', reject_reason=NULL WHERE id=?1`).bind(o.id).run();
    return back(req, `/admin/store/order/${o.id}`);
  }
  if (act === 'resend' && o.code) {
    const unlock = `${url.origin}/pro/unlock/?code=${o.code}`;
    const r = await sendBuyerMail(env, o.email, 'approved', cat.mail, { ...vars, code: o.code, unlock }, { href: unlock, label: cat.mail.approvedButton || 'فعّل الآن' });
    return back(req, `/admin/store/order/${o.id}?m=${r === 'sent' ? 'mailed' : 'mail_failed'}`);
  }
  if (act === 'reset_devices' && o.code) {
    await env.DB.prepare(`DELETE FROM pro_activations WHERE code = ?1`).bind(o.code).run();
    return back(req, `/admin/store/order/${o.id}?m=reset`);
  }
  if (act === 'revoke' && o.code) {
    await env.DB.prepare(`UPDATE pro_codes SET status='blocked' WHERE code = ?1`).bind(o.code).run();
    await env.DB.prepare(`UPDATE store_orders SET status='rejected', reject_reason=?2 WHERE id=?1`).bind(o.id, 'تم إيقاف الكود').run();
    return back(req, `/admin/store/order/${o.id}?m=revoked`);
  }
  return back(req, `/admin/store/order/${o.id}`);
}

const FLASH: Record<string, string> = {
  approved: '✓ تم القبول وتوليد الكود. الإيميل ما انبعت (خدمة الإيميل مش مفعّلة) — ابعته واتساب.',
  approved_mailed: '✓ تم القبول، والكود انبعت للمشتري على الإيميل.',
  rejected: 'تم الرفض.', mailed: '✓ انبعت الإيميل من جديد.', mail_failed: 'ما قدرنا نبعت الإيميل — تأكد من إعداد Resend.',
  reset: '✓ تم تصفير الأجهزة.', revoked: 'تم إيقاف الكود.', added: '✓ انضاف الكود.', saved: '✓ تم الحفظ.', bad: 'الكود أو القيمة مش صحيحة.',
};

export async function handleStoreAdmin(req: Request, env: StoreEnv, url: URL): Promise<Response> {
  // هوية Cloudflare Access لازم تكون موجودة
  if (!req.headers.get('cf-access-authenticated-user-email') && !req.headers.get('cf-access-jwt-assertion')) {
    return new Response('Forbidden', { status: 403 });
  }
  await ensureTables(env);
  const path = url.pathname.replace(/\/+$/, '');
  const flash = FLASH[url.searchParams.get('m') ?? ''] ?? '';

  if (req.method === 'POST') {
    const origin = req.headers.get('origin');
    if (!origin || new URL(origin).host !== url.host) return new Response('Bad origin', { status: 403 });
    if (path === '/admin/store/action') return action(req, env, url);
    return new Response('Not found', { status: 404 });
  }

  const pm = path.match(/^\/admin\/store\/proof\/([A-Z0-9-]{4,20})$/);
  if (pm) {
    const p = await env.DB.prepare(`SELECT mime, data FROM store_proofs WHERE order_id = ?1`).bind(pm[1]).first<{ mime: string; data: ArrayBuffer | number[] }>();
    if (!p) return new Response('Not found', { status: 404 });
    // D1 بيرجّع الـ BLOB كمصفوفة أرقام
    const bytes = p.data instanceof ArrayBuffer ? new Uint8Array(p.data) : Uint8Array.from(p.data as number[]);
    return new Response(bytes, { headers: { 'content-type': p.mime, 'cache-control': 'private, no-store', 'x-content-type-options': 'nosniff', 'content-disposition': 'inline' } });
  }
  const om = path.match(/^\/admin\/store\/order\/([A-Z0-9-]{4,20})$/);
  if (om) {
    const body = await orderPage(env, om[1], url.origin);
    return body ? html(shell(om[1], body, flash)) : html(shell('غير موجود', '<p>الطلب مش موجود.</p>'), 404);
  }
  if (path === '/admin/store/discounts') {
    const cat = await catalog(req, env);
    return html(shell('أكواد الخصم', await discountsPage(env, cat.products), flash));
  }
  if (path === '/admin/store') return html(shell('الطلبات', await listPage(env, url), flash));
  return html(shell('غير موجود', '<p>الصفحة مش موجودة.</p>'), 404);
}

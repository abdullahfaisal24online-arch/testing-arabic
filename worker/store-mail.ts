/**
 * إيميلات المشتري (Resend). بتشتغل بس إذا في Secret اسمه RESEND_API_KEY —
 * غير هيك بتنسجّل بالـ logs وبتتخطّى بهدوء (الطلب ما بيتأثر).
 * نصوص الإيميلات من «إعدادات المتجر» بلوحة التحكم (بتوصل عبر /store/products.json).
 */
export interface MailEnv {
  RESEND_API_KEY?: string;
  STORE_MAIL_FROM?: string;
}

export type MailTexts = Record<string, string>;

const fill = (s: string, v: Record<string, string>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? v[k] : m));
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function htmlBody(text: string, cta?: { href: string; label: string }, code?: string) {
  const paras = esc(text)
    .split(/\n{2,}/)
    .map((p) => `<p style="margin:0 0 14px;line-height:1.9">${p.replace(/\n/g, '<br>')}</p>`)
    .join('');
  const codeBox = code
    ? `<p style="margin:18px 0;padding:14px;border:2px solid #34d399;border-radius:12px;text-align:center;font:700 22px monospace;letter-spacing:2px;direction:ltr">${esc(code)}</p>`
    : '';
  const btn = cta
    ? `<p style="margin:22px 0;text-align:center"><a href="${esc(cta.href)}" style="background:#f6823b;color:#0a1428;text-decoration:none;font-weight:700;padding:12px 26px;border-radius:12px;display:inline-block">${esc(cta.label)}</a></p>`
    : '';
  return `<!doctype html><html lang="ar" dir="rtl"><body style="margin:0;background:#f4f6fb;font-family:Tahoma,Arial,sans-serif;color:#0d1b33">
<div style="max-width:560px;margin:0 auto;padding:24px 16px"><div style="background:#fff;border-radius:16px;padding:26px 24px;text-align:right" dir="rtl">
<p style="margin:0 0 18px;font-weight:700;font-size:18px">🔻 Testing بالعربي</p>${paras}${codeBox}${btn}
<p style="margin:22px 0 0;color:#7b8aa5;font-size:12px">testing-arabic.com</p></div></div></body></html>`;
}

export async function sendBuyerMail(
  env: MailEnv,
  to: string,
  kind: 'order' | 'approved' | 'rejected',
  texts: MailTexts,
  vars: Record<string, string>,
  cta?: { href: string; label: string },
): Promise<'sent' | 'skipped' | 'failed'> {
  if (!env.RESEND_API_KEY) {
    console.log('store_mail_skipped (no RESEND_API_KEY)', kind, vars.id);
    return 'skipped';
  }
  const subject = fill(texts[`${kind}Subject`] || '', vars).replace(/[\r\n]+/g, ' ').trim();
  const body = fill(texts[`${kind}Body`] || '', vars);
  if (!subject || !body) return 'skipped';
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        from: env.STORE_MAIL_FROM || 'Testing بالعربي <store@testing-arabic.com>',
        to: [to],
        subject,
        text: body + (cta ? `\n\n${cta.label}: ${cta.href}` : '') + (kind === 'approved' && vars.code ? `\n\n${vars.code}` : ''),
        html: htmlBody(body, cta, kind === 'approved' ? vars.code : undefined),
      }),
    });
    if (!res.ok) {
      console.error('store_mail_failed', res.status, await res.text());
      return 'failed';
    }
    return 'sent';
  } catch (e) {
    console.error('store_mail_failed', e);
    return 'failed';
  }
}

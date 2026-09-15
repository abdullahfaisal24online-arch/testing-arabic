import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { excerpt } from '../lib/utils';

/**
 * سقوف طول النص المفهرس لكل نوع.
 * مرفوعة عن قصد: الدرس الواحد عندنا أطول بكثير من 1200 حرف، وكان الجزء
 * الأكبر منه خارج البحث تماماً. السقف هون حماية من حالة شاذة فقط.
 */
const CAP = {
  lesson: 24000,
  article: 16000,
  course: 4000,
  news: 6000,
  resource: 4000,
  glossary: 2000,
  question: 4000,
  page: 8000,
};

/**
 * يشيل رموز الماركداون قبل الفهرسة.
 * بدونها بتنكسر مطابقة الجُمَل: نص زي "تقرير **Bug**" ما بيطابق بحث
 * "تقرير Bug" لأن النجمات بتفصل الكلمتين.
 */
function plain(md: string): string {
  return md
    .replace(/^```.*$/gm, ' ') // أسوار بلوكات الكود — بنخلّي محتواها
    .replace(/`([^`]+)`/g, '$1') // كود داخل السطر
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // صور
    // روابط: بنخلّي النص الظاهر، وكمان كلمات الرابط الداخلي —
    // كثير مصطلحات إنجليزية موجودة بالـ slug بس (مثال: شدّته → /glossary/severity/)
    .replace(/\[([^\]]+)\]\(([^)]*)\)/g, (_m, label: string, href: string) =>
      href.startsWith('/') ? `${label} ${href.replace(/[^\p{L}\p{N}]+/gu, ' ')}` : label,
    )
    .replace(/<[^>]+>/g, ' ') // وسوم HTML
    .replace(/^\s{0,3}#{1,6}\s+/gm, '') // علامات العناوين (نص العنوان بيضل)
    .replace(/^\s{0,3}>\s?/gm, '') // اقتباس
    .replace(/^\s*[-*+]\s+/gm, '') // نقاط القوائم
    .replace(/^\s*\d+[.)]\s+/gm, '') // قوائم مرقّمة
    .replace(/^\s*[-:|\s]{3,}$/gm, ' ') // فواصل الجداول والخطوط الأفقية
    .replace(/\|/g, ' ') // أعمدة الجداول
    .replace(/\*\*|__/g, '') // تعريض
    .replace(/\s+/g, ' ')
    .trim();
}

/** نص الجسم بعد التنظيف والقص */
const bodyText = (body: string | undefined, cap: number) => excerpt(plain(body ?? ''), cap);

export const GET: APIRoute = async () => {
  const [lessons, articles, courses, news, resources, glossary, questions, pages] = await Promise.all([
    getCollection('lessons'),
    getCollection('articles'),
    getCollection('courses'),
    getCollection('news'),
    getCollection('resources'),
    getCollection('glossary'),
    getCollection('questions'),
    getCollection('pages'),
  ]);

  const items = [
    ...lessons
      .filter((l) => !l.data.draft)
      .map((l) => ({
        kind: 'درس',
        title: l.data.title,
        description: l.data.description,
        url: `/lessons/${l.id}/`,
        text: bodyText(l.body, CAP.lesson),
      })),
    ...articles
      .filter((a) => !a.data.draft)
      .map((a) => ({
        kind: 'مقال',
        title: a.data.title,
        description: a.data.description,
        url: `/articles/${a.id}/`,
        text: bodyText(a.body, CAP.article),
      })),
    ...courses
      .filter((c) => !c.data.draft)
      .map((c) => ({
        kind: 'دورة',
        title: c.data.title,
        description: c.data.description,
        url: `/courses/${c.id}/`,
        text: bodyText(c.body, CAP.course),
      })),
    ...news
      .filter((n) => !n.data.draft)
      .map((n) => ({
        kind: 'خبر',
        title: n.data.title,
        description: n.data.description,
        url: `/news/${n.id}/`,
        text: bodyText(n.body, CAP.news),
      })),
    ...resources
      .filter((r) => !r.data.draft)
      .map((r) => ({
        kind: 'مورد',
        title: r.data.title,
        description: r.data.description,
        url: `/resources/${r.id}/`,
        text: bodyText(r.body, CAP.resource),
      })),
    ...glossary
      .filter((g) => !g.data.draft)
      .map((g) => ({
        kind: 'مصطلح',
        title: `${g.data.title}${g.data.termEn ? ` — ${g.data.termEn}` : ''}`,
        description: g.data.description,
        url: `/glossary/${g.id}/`,
        text: `${g.data.aliases.join(' ')} ${bodyText(g.body, CAP.glossary)}`,
      })),
    ...questions
      .filter((q) => !q.data.draft)
      .map((q) => ({
        kind: 'سؤال مقابلة',
        title: q.data.title,
        description: q.data.shortAnswer,
        url: `/questions/${q.id}/`,
        text: `${q.data.domain} ${q.data.level} ${bodyText(q.body, CAP.question)}`,
      })),
    ...pages
      .filter((p) => !p.data.draft)
      .map((p) => ({
        kind: 'صفحة',
        title: p.data.title,
        description: p.data.description,
        url: `/${p.id}/`,
        text: bodyText(p.body, CAP.page),
      })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

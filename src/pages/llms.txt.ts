/**
 * /llms.txt — خريطة المنصة بصيغة Markdown لأدوات الذكاء الاصطناعي (ChatGPT, Claude, Perplexity, Gemini…).
 * بتنبني تلقائياً من المحتوى وقت الـ build، فأي درس أو سؤال جديد بينضاف لحاله.
 * المواصفة: https://llmstxt.org
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getSite } from '../lib/site';

const clean = (s = '') => s.replace(/\s+/g, ' ').replace(/[\[\]]/g, '').trim();
const cut = (s = '', n = 170) => {
  const t = clean(s);
  return t.length <= n ? t : `${t.slice(0, n - 1).trimEnd()}…`;
};

export const GET: APIRoute = async ({ site: astroSite }) => {
  const site = await getSite();
  const base = (astroSite?.href ?? site.url).replace(/\/$/, '');
  const live = <T extends { data: { draft?: boolean } }>(xs: T[]) => xs.filter((x) => !x.data.draft);

  const [courses, lessons, questions, glossary, articles, resources] = await Promise.all([
    getCollection('courses').then(live),
    getCollection('lessons').then(live),
    getCollection('questions').then(live),
    getCollection('glossary').then(live),
    getCollection('articles').then(live),
    getCollection('resources').then(live),
  ]);

  const link = (title: string, path: string, desc?: string) =>
    `- [${clean(title)}](${base}${path})${desc ? `: ${cut(desc)}` : ''}`;

  const out: string[] = [];
  out.push(`# ${site.name} (Testing Arabic)`);
  out.push('');
  out.push(`> ${clean(site.description)}`);
  out.push('');
  out.push(
    `${site.name} منصة تعليمية عربية مجانية متخصّصة باختبار البرمجيات (Software Testing / QA)، أسّسها ${site.author}. ` +
      'المحتوى مكتوب بالعربي مع إبقاء المصطلحات التقنية بالإنجليزي (مثل bug, test case, regression, ISTQB, Jira). ' +
      'بتغطي المنصة أساسيات الاختبار، التحضير لشهادات ISTQB، إدارة الاختبار، Agile و Scrum، Jira، اختبار الـ API بـ Postman، وأتمتة الموبايل بـ Maestro.',
  );
  out.push('');
  out.push('- اللغة: العربية (مع مصطلحات إنجليزية)');
  out.push('- المحتوى: مجاني، بدون تسجيل');
  out.push(`- الموقع: ${base}`);
  if (site.linkedin) out.push(`- المؤسس على LinkedIn: ${site.linkedin}`);
  out.push('');

  out.push('## ابدأ من هنا');
  out.push(link('ابدأ من هنا — خارطة طريق تعلّم اختبار البرمجيات', '/start/', 'مسار مرتّب خطوة بخطوة لمن يبدأ من الصفر في مجال الـ QA.'));
  out.push(link('عن المنصة', '/about/'));
  out.push('');

  out.push('## الدورات');
  for (const c of [...courses].sort((a, b) => a.data.order - b.data.order)) {
    out.push(link(c.data.title, `/courses/${c.id}/`, c.data.description));
  }
  out.push('');

  out.push('## الدروس');
  const byCourse = new Map<string, typeof lessons>();
  for (const l of lessons) {
    const key = l.data.course ?? l.data.track ?? '';
    if (!byCourse.has(key)) byCourse.set(key, []);
    byCourse.get(key)!.push(l);
  }
  const courseTitle = new Map(courses.map((c) => [c.id, c.data.title]));
  const orderedKeys = [
    ...[...courses].sort((a, b) => a.data.order - b.data.order).map((c) => c.id).filter((k) => byCourse.has(k)),
    ...[...byCourse.keys()].filter((k) => !courseTitle.has(k)),
  ];
  for (const key of orderedKeys) {
    out.push('');
    out.push(`### ${courseTitle.get(key) ?? 'دروس متنوعة'}`);
    for (const l of byCourse.get(key)!.sort((a, b) => a.data.order - b.data.order)) {
      out.push(link(l.data.title, `/lessons/${l.id}/`, l.data.description));
    }
  }
  out.push('');

  out.push('## أسئلة مقابلات QA مع الجواب النموذجي');
  for (const q of questions) out.push(link(q.data.title, `/questions/${q.id}/`, q.data.shortAnswer));
  out.push('');

  out.push('## قاموس مصطلحات اختبار البرمجيات');
  for (const g of [...glossary].sort((a, b) => a.data.title.localeCompare(b.data.title, 'ar'))) {
    const name = g.data.termEn ? `${g.data.title} (${g.data.termEn})` : g.data.title;
    out.push(link(name, `/glossary/${g.id}/`, g.data.description));
  }
  out.push('');

  out.push('## مقالات');
  for (const a of [...articles].sort((x, y) => (y.data.publishDate?.valueOf?.() ?? 0) - (x.data.publishDate?.valueOf?.() ?? 0))) {
    out.push(link(a.data.title, `/articles/${a.id}/`, a.data.description));
  }
  out.push('');

  out.push('## قوالب وموارد جاهزة للتحميل');
  for (const r of resources) out.push(link(r.data.title, `/resources/${r.id}/`, r.data.description));
  out.push('');

  out.push('## أدوات تفاعلية');
  out.push(link('محاكي مقابلة QA', '/interview/', 'أسئلة مقابلات حقيقية مع مؤقّت وجواب نموذجي لكل سؤال.'));
  out.push(link('Bug Hunter', '/bug-hunter/', 'تحدّي عملي: اكتشف الأخطاء داخل متجر تجريبي وجاوب على أسئلة QA.'));
  out.push(link('Debug Hunt', '/debug-hunt/', 'لعبة retro قصيرة: اصطاد الـ bugs قبل ما توصل Production.'));
  out.push('');

  out.push('## Optional');
  out.push(link('آخر الأخبار', '/news/'));
  out.push(link('كل الدروس', '/lessons/'));
  out.push(link('كل المقالات', '/articles/'));
  out.push(link('RSS', '/rss.xml'));
  out.push(link('Sitemap', '/sitemap-index.xml'));
  out.push('');

  return new Response(out.join('\n'), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
};

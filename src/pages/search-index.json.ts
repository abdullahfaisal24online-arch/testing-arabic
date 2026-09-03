import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { excerpt } from '../lib/utils';

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
        text: excerpt(l.body ?? '', 1200),
      })),
    ...articles
      .filter((a) => !a.data.draft)
      .map((a) => ({
        kind: 'مقال',
        title: a.data.title,
        description: a.data.description,
        url: `/articles/${a.id}/`,
        text: excerpt(a.body ?? '', 1200),
      })),
    ...courses
      .filter((c) => !c.data.draft)
      .map((c) => ({
        kind: 'دورة',
        title: c.data.title,
        description: c.data.description,
        url: `/courses/${c.id}/`,
        text: excerpt(c.body ?? '', 600),
      })),
    ...news
      .filter((n) => !n.data.draft)
      .map((n) => ({
        kind: 'خبر',
        title: n.data.title,
        description: n.data.description,
        url: `/news/${n.id}/`,
        text: excerpt(n.body ?? '', 800),
      })),
    ...resources
      .filter((r) => !r.data.draft)
      .map((r) => ({
        kind: 'مورد',
        title: r.data.title,
        description: r.data.description,
        url: `/resources/${r.id}/`,
        text: excerpt(r.body ?? '', 800),
      })),
    ...glossary
      .filter((g) => !g.data.draft)
      .map((g) => ({
        kind: 'مصطلح',
        title: `${g.data.title}${g.data.termEn ? ` — ${g.data.termEn}` : ''}`,
        description: g.data.description,
        url: `/glossary/${g.id}/`,
        text: `${g.data.aliases.join(' ')} ${excerpt(g.body ?? '', 500)}`,
      })),
    ...questions
      .filter((q) => !q.data.draft)
      .map((q) => ({
        kind: 'سؤال مقابلة',
        title: q.data.title,
        description: q.data.shortAnswer,
        url: `/questions/${q.id}/`,
        text: `${q.data.domain} ${q.data.level} ${excerpt(q.body ?? '', 600)}`,
      })),
    ...pages
      .filter((p) => !p.data.draft)
      .map((p) => ({
        kind: 'صفحة',
        title: p.data.title,
        description: p.data.description,
        url: `/${p.id}/`,
        text: excerpt(p.body ?? '', 800),
      })),
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};

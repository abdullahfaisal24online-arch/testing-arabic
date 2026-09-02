import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { excerpt } from '../lib/utils';

export const GET: APIRoute = async () => {
  const [lessons, articles, tracks, pages] = await Promise.all([
    getCollection('lessons'),
    getCollection('articles'),
    getCollection('tracks'),
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
    ...tracks
      .filter((t) => !t.data.draft)
      .map((t) => ({
        kind: 'مسار',
        title: t.data.title,
        description: t.data.description,
        url: `/tracks/${t.id}/`,
        text: excerpt(t.body ?? '', 600),
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

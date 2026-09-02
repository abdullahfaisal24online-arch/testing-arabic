import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

export async function GET(context: APIContext) {
  const [lessons, articles] = await Promise.all([
    getCollection('lessons'),
    getCollection('articles'),
  ]);

  const items = [
    ...lessons.filter((l) => !l.data.draft).map((l) => ({
      title: l.data.title,
      description: l.data.description,
      pubDate: l.data.publishDate,
      link: `/lessons/${l.id}/`,
    })),
    ...articles.filter((a) => !a.data.draft).map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.publishDate,
      link: `/articles/${a.id}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    customData: '<language>ar</language>',
    items,
  });
}

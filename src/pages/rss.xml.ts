import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { getSite } from '../lib/site';

export async function GET(context: APIContext) {
  const site = await getSite();
  const [lessons, articles, news, resources] = await Promise.all([
    getCollection('lessons'),
    getCollection('articles'),
    getCollection('news'),
    getCollection('resources'),
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
    ...news.filter((n) => !n.data.draft).map((n) => ({
      title: n.data.title,
      description: n.data.description,
      pubDate: n.data.publishDate,
      link: `/news/${n.id}/`,
    })),
    ...resources.filter((r) => !r.data.draft).map((r) => ({
      title: r.data.title,
      description: r.data.description,
      pubDate: r.data.publishDate,
      link: `/resources/${r.id}/`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: site.name,
    description: site.description,
    site: context.site ?? site.url,
    customData: '<language>ar</language>',
    items,
  });
}

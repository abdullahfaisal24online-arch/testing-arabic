import type { APIRoute } from 'astro';
import { getSite } from '../lib/site';

export const GET: APIRoute = async ({ site: astroSite }) => {
  const settings = await getSite();
  const base = (astroSite?.href ?? settings.url).replace(/\/$/, '');
  const body = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /search/

Sitemap: ${base}/sitemap-index.xml
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

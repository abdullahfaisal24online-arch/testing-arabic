import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

/**
 * كاتالوج المنتجات المدفوعة — بيتبنى من لوحة المحتوى.
 * الـ Worker بيقرأه عشان يعرف أسماء المنتجات وأسعارها ودروس الدورات المدفوعة.
 * المسار تحت /store/ عشان يضل عام: /pro/ كلها محجوبة.
 */
export const GET: APIRoute = async () => {
  const products = (await getCollection('products'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => a.data.order - b.data.order);
  const lessons = (await getCollection('lessons')).filter((l) => !l.data.draft);

  // درس → المنتج اللي بيفتحه (للدورات المدفوعة)
  const lessonGates: Record<string, string> = {};
  for (const p of products) {
    if (!p.data.course) continue;
    for (const l of lessons) {
      const belongs = l.data.course ?? l.data.track;
      if (belongs === p.data.course) lessonGates[l.id] = p.id;
    }
  }

  const body = JSON.stringify({
    v: 1,
    products: products.map((p) => ({
      slug: p.id,
      title: p.data.title,
      kind: p.data.kind,
      price: p.data.price,
      offerPrice: p.data.offerPrice ?? null,
      bundleOf: p.data.bundleOf ?? [],
    })),
    lessonGates,
  });

  return new Response(body, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  });
};

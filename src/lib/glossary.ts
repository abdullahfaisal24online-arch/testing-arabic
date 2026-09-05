export type GlossaryTerm = { slug: string; labels: string[] };

const SKIP_OPEN = /^<(a|code|pre|kbd|h1|h2|h3|h4|h5|h6|script|style)\b/i;
const SKIP_CLOSE = /^<\/(a|code|pre|kbd|h1|h2|h3|h4|h5|h6|script|style)\s*>/i;

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** تهريب علامات الاقتباس حتى ما تكسر خاصية title */
const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/**
 * يربط أول ظهور لكل مصطلح داخل نص HTML بصفحة المصطلح بالقاموس.
 * بيتجاهل الروابط والأكواد والعناوين، وبيربط كل مصطلح مرة وحدة بالصفحة.
 *
 * ملاحظة مهمة: كل التطابقات بتنحسب على النص الأصلي، وبعدين منبني المقطع مرة وحدة.
 * لو ربطنا مصطلح وبعدها فتّشنا بالنص المعدّل، كان ممكن مصطلح تاني يتطابق جوّا
 * الرابط اللي ضفناه نحنا (مثلاً كلمة "Test" جوّا title="شو يعني Test Case؟")
 * وينتج رابط داخل رابط و HTML مكسور.
 */
export function linkGlossary(html: string, terms: GlossaryTerm[], selfSlug?: string): string {
  if (!html || terms.length === 0) return html;

  const patterns = terms
    .filter((t) => t.slug !== selfSlug)
    .flatMap((t) =>
      t.labels
        .map((l) => l.trim())
        .filter((l) => l.length >= 2)
        .map((label) => ({ slug: t.slug, label })),
    )
    .sort((a, b) => b.label.length - a.label.length)
    .map((t) => ({
      ...t,
      re: new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRe(t.label)}(?![\\p{L}\\p{N}_])`, 'u'),
    }));

  const used = new Set<string>();
  const parts = html.split(/(<[^>]+>)/);
  let skipDepth = 0;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (part.startsWith('<')) {
      if (SKIP_CLOSE.test(part)) skipDepth = Math.max(0, skipDepth - 1);
      else if (SKIP_OPEN.test(part) && !part.endsWith('/>')) skipDepth++;
      continue;
    }

    if (skipDepth > 0 || !part.trim()) continue;

    // 1) نجمع التطابقات كلها على النص الأصلي
    const hits: { start: number; end: number; slug: string; text: string }[] = [];
    for (const term of patterns) {
      if (used.has(term.slug)) continue;
      const m = term.re.exec(part);
      if (!m) continue;

      const start = m.index;
      const end = start + m[0].length;
      // مصطلح جوّا مصطلح أطول منه — منتجاهله ومنترك سلَجه متاح لمقطع تاني
      if (hits.some((h) => start < h.end && end > h.start)) continue;

      hits.push({ start, end, slug: term.slug, text: m[0] });
      used.add(term.slug);
    }

    if (hits.length === 0) continue;

    // 2) منبني المقطع مرة وحدة بالترتيب
    hits.sort((a, b) => a.start - b.start);
    let out = '';
    let cursor = 0;
    for (const h of hits) {
      out +=
        part.slice(cursor, h.start) +
        `<a class="glossary-link" href="/glossary/${h.slug}/" title="شو يعني ${escapeAttr(
          h.text,
        )}؟">${h.text}</a>`;
      cursor = h.end;
    }
    out += part.slice(cursor);
    parts[i] = out;
  }

  return parts.join('');
}

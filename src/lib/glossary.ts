export type GlossaryTerm = { slug: string; labels: string[] };

const SKIP_OPEN = /^<(a|code|pre|kbd|h1|h2|h3|h4|h5|h6|script|style)\b/i;
const SKIP_CLOSE = /^<\/(a|code|pre|kbd|h1|h2|h3|h4|h5|h6|script|style)\s*>/i;

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/**
 * يربط أول ظهور لكل مصطلح داخل نص HTML بصفحة المصطلح بالقاموس.
 * بيتجاهل الروابط والأكواد والعناوين، وبيربط كل مصطلح مرة وحدة بالصفحة.
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

    let text = part;
    for (const term of patterns) {
      if (used.has(term.slug)) continue;
      const m = term.re.exec(text);
      if (!m) continue;

      text =
        text.slice(0, m.index) +
        `<a class="glossary-link" href="/glossary/${term.slug}/" title="شو يعني ${m[0]}؟">${m[0]}</a>` +
        text.slice(m.index + m[0].length);
      used.add(term.slug);
    }
    parts[i] = text;
  }

  return parts.join('');
}

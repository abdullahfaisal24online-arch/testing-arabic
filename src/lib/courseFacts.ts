/**
 * حقائق الدورة المحسوبة من دروسها (عدد الدروس والمدة)، وتعبئة {lessons} و {duration}
 * بنصوص لوحة التحكم (صندوق «باختصار» والأسئلة الشائعة) حتى ما تتقادم الأرقام.
 * بتنستعمل بصفحة الدورة وبـ /llms.txt.
 */
export function totalSeconds(durations: string[]): number {
  return durations.reduce((sum, d) => {
    const p = (d || '').split(':').map((n) => parseInt(n, 10) || 0);
    const s = p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p.length === 2 ? p[0] * 60 + p[1] : p[0];
    return sum + s;
  }, 0);
}

export function durationLabel(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.round((seconds % 3600) / 60);
  const h = hours === 1 ? 'ساعة' : hours === 2 ? 'ساعتين' : hours <= 10 ? `${hours} ساعات` : `${hours} ساعة`;
  if (hours === 0) return mins === 1 ? 'دقيقة' : mins === 2 ? 'دقيقتين' : mins <= 10 ? `${mins} دقائق` : `${mins} دقيقة`;
  const m = mins === 1 ? 'دقيقة' : mins === 2 ? 'دقيقتين' : mins <= 10 ? `${mins} دقائق` : `${mins} دقيقة`;
  return mins > 0 ? `${h} و${m}` : h;
}

/** عدد الدروس بصيغة عربية سليمة: درس واحد، درسين، 3 دروس، 11 درس */
export function lessonsLabel(n: number): string {
  if (n === 1) return 'درس واحد';
  if (n === 2) return 'درسين';
  if (n >= 3 && n <= 10) return `${n} دروس`;
  return `${n} درس`;
}

/** عناوين الدروس بقائمة عربية: «أ، ب، وج» — بدون الرموز التزيينية */
export function lessonListLabel(titles: string[]): string {
  const t = titles.map((x) => x.replace(/🔻/g, '').replace(/\s+/g, ' ').trim()).filter(Boolean);
  if (t.length <= 1) return t.join('');
  return `${t.slice(0, -1).join('، ')}، و${t[t.length - 1]}`;
}

export function fillFacts(text: string, facts: { lessons: number; seconds: number; titles?: string[] }): string {
  return (text || '')
    .replaceAll('{lessons}', lessonsLabel(facts.lessons))
    .replaceAll('{duration}', durationLabel(facts.seconds))
    .replaceAll('{lessonList}', lessonListLabel(facts.titles ?? []));
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** نص عادي + روابط بشكل [النص](/مسار/) → HTML آمن. الروابط الداخلية أو https بس. */
export function inlineLinks(text: string): string {
  const parts: string[] = [];
  let last = 0;
  const re = /\[([^\]]+)\]\(((?:\/|https:\/\/)[^)\s]*)\)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    parts.push(esc(text.slice(last, m.index)));
    parts.push(`<a href="${esc(m[2])}">${esc(m[1])}</a>`);
    last = m.index + m[0].length;
  }
  parts.push(esc(text.slice(last)));
  return parts.join('').replace(/\n+/g, '<br>');
}

/** نفس النص بدون صيغة الروابط — للـ JSON-LD و llms.txt */
export function plainLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\(([^)\s]*)\)/g, '$1');
}

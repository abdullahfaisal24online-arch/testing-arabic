/**
 * بنوك الأسئلة — الملفات بـ src/data/banks/<slug>.json (مش بـ public).
 * بس أسئلة العيّنة بتنبني جوّا صفحة HTML؛ الباقي بيوصل بعد التفعيل (المرحلة 4).
 */
/** بنوك الأسئلة (خارج public — بس العيّنة بتوصل للمتصفح) */
export interface BankItem { n: number; ch: number; q: string; qAr?: string; o: Record<string, string>; a: string; exAr?: string; exEn: string }
const banks = import.meta.glob<{ default: { items: BankItem[]; sample?: number[] } }>('../data/banks/*.json', { eager: true });
export const getBank = (slug: string) => banks[`../data/banks/${slug}.json`]?.default?.items ?? [];

/**
 * أسئلة العيّنة المجانية — ثابتة دايماً (بتنبني مرة وحدة وقت البناء، ما بتتغيّر مع كل زيارة).
 * إذا البنك فيه "sample": [أرقام الأسئلة بالترتيب] منستعملها (أول N منها، N من لوحة التحكم).
 * غير هيك: سؤال من كل فصل بالدور، عشان العيّنة تكون موزّعة على المنهج.
 */
export function getSample(slug: string, n: number): BankItem[] {
  const data = banks[`../data/banks/${slug}.json`]?.default;
  const items = data?.items ?? [];
  const byN = new Map(items.map((i) => [i.n, i]));
  const picked: BankItem[] = (data?.sample ?? []).map((x) => byN.get(x)).filter((x): x is BankItem => !!x);
  if (picked.length < n) {
    const chapters = [...new Set(items.map((i) => i.ch))].sort((a, b) => a - b);
    const queues = chapters.map((c) => items.filter((i) => i.ch === c && !picked.includes(i)));
    for (let round = 0; picked.length < n && queues.some((q) => q.length); round++) {
      for (const q of queues) { const it = q.shift(); if (it && picked.length < n) picked.push(it); }
    }
  }
  return picked.slice(0, n);
}

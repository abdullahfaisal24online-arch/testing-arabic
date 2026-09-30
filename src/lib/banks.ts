/**
 * بنوك الأسئلة — الملفات بـ src/data/banks/<slug>.json (مش بـ public).
 * بس أسئلة العيّنة بتنبني جوّا صفحة HTML؛ الباقي بيوصل بعد التفعيل (المرحلة 4).
 */
/** بنوك الأسئلة (خارج public — بس العيّنة بتوصل للمتصفح) */
export interface BankItem { n: number; ch: number; q: string; qAr?: string; o: Record<string, string>; a: string; exAr?: string; exEn: string }
const banks = import.meta.glob<{ default: { items: BankItem[] } }>('../data/banks/*.json', { eager: true });
export const getBank = (slug: string) => banks[`../data/banks/${slug}.json`]?.default?.items ?? [];

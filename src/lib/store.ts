/**
 * هل المتجر مفتوح؟
 * بيتحدد وقت البناء من متغير STORE_OPEN:
 *  - النسخة التجريبية (staging): STORE_OPEN=1 ← المتجر كامل ظاهر
 *  - الموقع الحقيقي: بدون المتغير ← نافذة «قريباً» وصفحات المنتجات ما بتنبني
 * يوم الإطلاق: ضيف STORE_OPEN=1 على بناء الموقع الحقيقي.
 */
export const STORE_OPEN: boolean =
  (typeof process !== 'undefined' && process.env?.STORE_OPEN === '1') ||
  import.meta.env.STORE_OPEN === '1';

/** ترتيب التصنيفات بالمتجر وأسماؤها الظاهرة */
export const STORE_GROUPS: { key: string; title: string; kinds: string[] }[] = [
  { key: 'courses', title: 'دورات', kinds: ['دورة'] },
  { key: 'banks', title: 'بنوك أسئلة', kinds: ['بنك أسئلة'] },
  { key: 'summaries', title: 'ملخصات', kinds: ['ملخصات'] },
  { key: 'more', title: 'قوالب وحزم', kinds: ['قوالب', 'حزمة'] },
];

export const jod = (n: number) => `${Number.isInteger(n) ? n : n.toFixed(2)} د.أ`;

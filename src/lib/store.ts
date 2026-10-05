import { getEntry } from 'astro:content';
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

/** منتج دليل CT-GenAI بالمتجر (صفحات الدليل تحت /store/ct-genai-guide/) */
export const GUIDE_PRODUCT = 'ct-genai-guide';

/** ترتيب التصنيفات بالمتجر */
// title = اسم الخانة بإعدادات المتجر اللي فيها اسم التصنيف
export const STORE_GROUPS = [
  { key: 'courses', title: 'groupCourses', kinds: ['دورة'] },
  { key: 'banks', title: 'groupBanks', kinds: ['بنك أسئلة'] },
  { key: 'summaries', title: 'groupSummaries', kinds: ['ملخصات'] },
  { key: 'more', title: 'groupMore', kinds: ['قوالب', 'حزمة'] },
] as const;

/** الأسعار بالدولار (المقابل بالدينار بيطلع بس وقت الدفع — سعر الصرف من إعدادات المتجر) */
export const usd = (n: number) => `$${Number.isInteger(n) ? n : n.toFixed(2)}`;
export const toJod = (n: number, rate: number) => Math.round(n * rate * 100) / 100;


/** إعدادات المتجر من لوحة التحكم (إعدادات الموقع ← المتجر) */
export async function getStoreSettings() {
  const e = await getEntry('storeSettings', 'store').catch(() => undefined);
  if (e) return e.data;
  throw new Error('src/content/settings/store.json مفقود');
}

/** بيعبّي {n} و{score}… بالنص */
export const tpl = (s: string | undefined, vars: Record<string, string | number>) =>
  (s ?? '').replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));


// ===== إعدادات الموقع =====
// كل شي بتحتاج تغيّره موجود بهذا الملف.

export const SITE = {
  name: 'Testing بالعربي',
  tagline: 'تعلّم اختبار البرمجيات بالعربي — من الصفر لحدّ الأتمتة',
  description:
    'منصة عربية لتعليم اختبار البرمجيات: دروس مصوّرة، مسارات مرتّبة، ومقالات عملية في الاختبار اليدوي والأتمتة وأدوات الـ QA.',
  url: 'https://testing-arabic.com',
  locale: 'ar_JO',
  author: 'عبدالله',
  youtube: 'https://www.youtube.com/@testingbilarabi',
  linkedin: '',
  email: 'testingarabic94@gmail.com',
} as const;

// ===== إعدادات Bunny Stream =====
// libraryId: رقم المكتبة من لوحة Bunny.
// cdnHostname: اسم نطاق البث (مثال: vz-1a2b3c4d-e5f.b-cdn.net) — منه بتتولّد الصور المصغّرة.
// اتركهم فاضيين لحد ما تجهّز الحساب؛ الموقع بيشتغل عادي وبيعرض صورة بديلة.
export const BUNNY = {
  libraryId: '',
  cdnHostname: '',
} as const;

export const NAV = [
  { label: 'الرئيسية', href: '/' },
  { label: 'المسارات', href: '/tracks/' },
  { label: 'الدروس', href: '/lessons/' },
  { label: 'المقالات', href: '/articles/' },
  { label: 'عن المنصة', href: '/about/' },
] as const;

// رابط نموذج الاشتراك بالنشرة (Kit / Buttondown / Google Form).
// اتركه فاضي وبينخفي قسم النشرة تلقائياً.
export const NEWSLETTER_ACTION = '';

export type Level = 'مبتدئ' | 'متوسط' | 'متقدّم';

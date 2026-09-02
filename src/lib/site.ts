import { getEntry } from 'astro:content';

/** القيم الافتراضية — بتستعمل فقط لو الحقل فاضي بلوحة التحكم */
const SITE_DEFAULTS = {
  name: 'Testing بالعربي',
  logoTop: 'Testing',
  logoBottom: 'بالعربي',
  tagline: 'تعلّم اختبار البرمجيات بالعربي',
  description: 'منصة عربية لتعليم اختبار البرمجيات.',
  url: 'https://testing-arabic.com',
  author: 'عبدالله',
  youtube: '',
  linkedin: '',
  email: '',
  newsletterAction: '',
  bunnyLibraryId: '',
  bunnyCdnHostname: '',
  headerCtaLabel: 'ابدأ من هنا',
  headerCtaHref: '/tracks/',
  footerNote: '',
  nav: [] as { label: string; href: string }[],
};

const HOME_DEFAULTS = {
  heroEyebrow: '',
  heroTitle: 'تعلّم اختبار البرمجيات بالعربي',
  heroHighlight: '',
  heroSubtitle: '',
  primaryCtaLabel: 'ابدأ من هنا',
  primaryCtaHref: '/tracks/',
  secondaryCtaLabel: 'تصفّح المكتبة',
  secondaryCtaHref: '/lessons/',
  showStats: true,
  statLessonsLabel: 'درس',
  statTracksLabel: 'مسارات',
  statArticlesLabel: 'مقالات',
  showFeatured: true,
  featuredBadge: 'الأحدث',
  featuredCta: 'شاهد الدرس',
  showTracks: true,
  tracksEyebrow: '',
  tracksTitle: 'المسارات التعليمية',
  tracksSubtitle: '',
  showLessons: true,
  lessonsTitle: 'أحدث الدروس',
  showArticles: true,
  articlesTitle: 'من المقالات',
  newsletterTitle: '',
  newsletterText: '',
  newsletterButton: 'اشترك',
  newsletterNote: '',
};

const merge = <T extends Record<string, unknown>>(defaults: T, data: Record<string, unknown> = {}): T => {
  const out = { ...defaults };
  for (const [k, v] of Object.entries(data)) {
    if (v === undefined || v === null || v === '') continue;
    if (Array.isArray(v) && v.length === 0) continue;
    (out as Record<string, unknown>)[k] = v;
  }
  return out;
};

export type SiteSettings = typeof SITE_DEFAULTS;
export type HomeSettings = typeof HOME_DEFAULTS;

export async function getSite(): Promise<SiteSettings> {
  const entry = await getEntry('site', 'site');
  return merge(SITE_DEFAULTS, (entry?.data ?? {}) as Record<string, unknown>);
}

export async function getHome(): Promise<HomeSettings> {
  const entry = await getEntry('home', 'home');
  return merge(HOME_DEFAULTS, (entry?.data ?? {}) as Record<string, unknown>);
}

/** يقسم العنوان لثلاث قطع حتى نلوّن الكلمة المميّزة */
export function splitHighlight(title: string, highlight: string) {
  if (!highlight) return { before: title, mark: '', after: '' };
  const i = title.indexOf(highlight);
  if (i === -1) return { before: title, mark: '', after: '' };
  return {
    before: title.slice(0, i),
    mark: highlight,
    after: title.slice(i + highlight.length),
  };
}

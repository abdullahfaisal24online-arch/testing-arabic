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
  newsletterField: 'email',
  newsletterHidden: [] as { name: string; value: string }[],
  bunnyLibraryId: '',
  bunnyCdnHostname: '',
  headerCtaLabel: 'ابدأ من هنا',
  headerCtaHref: '/tracks/',
  footerNote: '',
  commentsEnabled: false,
  commentsTitle: 'النقاش',
  commentsNote: 'اكتب سؤالك أو ملاحظتك. التعليقات بتظهر بعد المراجعة.',
  commentsPlaceholder: 'سؤالك أو ملاحظتك…',
  likesEnabled: false,
  likesLabel: 'أعجبني',
  likesThreshold: 3,
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
  statsStyle: 'قيم' as 'قيم' | 'أرقام',
  values: [] as { title: string; text: string }[],
  statLessonsLabel: 'درس',
  statCoursesLabel: 'دورات',
  statArticlesLabel: 'مقالات',
  showFeatured: true,
  featuredBadge: 'الأحدث',
  featuredCta: 'شاهد الدرس',
  showWelcome: false,
  welcomeBadge: 'ابدأ من هون',
  welcomeTitle: '',
  welcomeText: '',
  welcomeVideoId: '',
  welcomeThumbnail: '',
  showCourses: true,
  coursesEyebrow: '',
  coursesTitle: 'الدورات',
  coursesSubtitle: '',
  showLessons: true,
  lessonsTitle: 'أحدث الدروس',
  showArticles: true,
  articlesTitle: 'من المقالات',
  showResources: true,
  resourcesEyebrow: '',
  resourcesTitle: 'موارد وقوالب',
  resourcesSubtitle: '',
  showNews: true,
  newsTitle: 'آخر الأخبار',
  inlineNewsletterTitle: 'وصلك الجديد أول بأول',
  inlineNewsletterText: '',
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

const START_DEFAULTS = {
  title: 'ابدأ من هنا',
  intro: '',
  note: '',
  stages: [] as {
    label?: string;
    title: string;
    body: string;
    items: { label: string; href: string; kind?: string }[];
  }[],
};

export type SiteSettings = typeof SITE_DEFAULTS;
export type StartSettings = typeof START_DEFAULTS;
export type HomeSettings = typeof HOME_DEFAULTS;

export async function getSite(): Promise<SiteSettings> {
  const entry = await getEntry('site', 'site');
  return merge(SITE_DEFAULTS, (entry?.data ?? {}) as Record<string, unknown>);
}

export async function getHome(): Promise<HomeSettings> {
  const entry = await getEntry('home', 'home');
  return merge(HOME_DEFAULTS, (entry?.data ?? {}) as Record<string, unknown>);
}

export async function getStart(): Promise<StartSettings> {
  const entry = await getEntry('start', 'start');
  return merge(START_DEFAULTS, (entry?.data ?? {}) as Record<string, unknown>);
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

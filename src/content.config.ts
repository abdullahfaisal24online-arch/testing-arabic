import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const levels = ['مبتدئ', 'متوسط', 'متقدّم'] as const;

/**
 * لوحة التحكم بتكتب الحقول الفاضية كفراغ أو null بدل ما تحذفها،
 * وهاي الدوال بتتعامل مع هيك حالات حتى ما يفشل البناء بسبب حقل اختياري فاضي.
 */
const blank = (v: unknown) => (v === '' || v === null || v === undefined ? undefined : v);
const fallback = <T>(def: T) => (v: unknown) => (v === '' || v === null || v === undefined ? def : v);

const optString = z.preprocess(blank, z.string().optional());
const optDate = z.preprocess(blank, z.coerce.date().optional());
const str = (def: string) => z.preprocess(fallback(def), z.string());
const bool = (def: boolean) => z.preprocess(fallback(def), z.boolean());
const num = (def: number) => z.preprocess(fallback(def), z.coerce.number());
const level = z.preprocess(fallback('مبتدئ'), z.enum(levels));

/* ===== الدروس ===== */
const lessons = defineCollection({
  loader: glob({ base: './src/content/lessons', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    publishDate: z.coerce.date(),
    updatedDate: optDate,
    category: str('أساسيات'),
    level,
    duration: str('00:00'),
    videoId: optString,
    youtubeUrl: optString,
    thumbnail: optString,
    // الدورة التي ينتمي لها الدرس (track = الاسم القديم، مدعوم للتوافق)
    course: optString,
    track: optString,
    order: num(0),
    resources: z.preprocess(
      fallback([]),
      z.array(z.object({ label: str(''), url: str('') })),
    ),
    featured: bool(false),
    draft: bool(false),
  }),
});

/* ===== المقالات ===== */
const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    publishDate: z.coerce.date(),
    updatedDate: optDate,
    category: str('مقالات'),
    cover: optString,
    featured: bool(false),
    draft: bool(false),
  }),
});

/* ===== الدورات ===== */
const courses = defineCollection({
  loader: glob({ base: './src/content/courses', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    level,
    order: num(0),
    accent: z.preprocess(fallback('cyan'), z.enum(['cyan', 'orange'])),
    recommended: bool(false),
    cover: optString,
    draft: bool(false),
  }),
});

/* ===== آخر الأخبار ===== */
const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    publishDate: z.coerce.date(),
    cover: optString,
    pinned: bool(false),
    draft: bool(false),
  }),
});

/* ===== صفحات حرّة ===== */
const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    order: num(0),
    draft: bool(false),
  }),
});

/* ===== إعدادات الموقع ===== */
const site = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: 'site.json' }),
  schema: z.object({
    name: optString,
    logoTop: optString,
    logoBottom: optString,
    tagline: optString,
    description: optString,
    url: optString,
    author: optString,
    youtube: optString,
    linkedin: optString,
    email: optString,
    newsletterAction: optString,
    bunnyLibraryId: optString,
    bunnyCdnHostname: optString,
    headerCtaLabel: optString,
    headerCtaHref: optString,
    footerNote: optString,
    nav: z.preprocess(
      fallback([]),
      z.array(z.object({ label: str(''), href: str('/') })),
    ),
  }),
});

/* ===== نصوص الصفحة الرئيسية ===== */
const home = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: 'home.json' }),
  schema: z.object({
    heroEyebrow: optString,
    heroTitle: optString,
    heroHighlight: optString,
    heroSubtitle: optString,
    primaryCtaLabel: optString,
    primaryCtaHref: optString,
    secondaryCtaLabel: optString,
    secondaryCtaHref: optString,
    showStats: bool(true),
    statLessonsLabel: optString,
    statCoursesLabel: optString,
    statArticlesLabel: optString,
    showFeatured: bool(true),
    featuredBadge: optString,
    featuredCta: optString,
    showCourses: bool(true),
    coursesEyebrow: optString,
    coursesTitle: optString,
    coursesSubtitle: optString,
    showLessons: bool(true),
    lessonsTitle: optString,
    showArticles: bool(true),
    articlesTitle: optString,
    showNews: bool(true),
    newsTitle: optString,
    newsletterTitle: optString,
    newsletterText: optString,
    newsletterButton: optString,
    newsletterNote: optString,
  }),
});

export const collections = { lessons, articles, courses, news, pages, site, home };

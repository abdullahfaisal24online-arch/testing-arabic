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
const strList = z.preprocess(fallback([]), z.array(str('')));

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
    // نوع الدرس ووسومه
    lessonType: z.preprocess(fallback('شرح'), z.enum(['شرح', 'عملي', 'مراجعة', 'أدوات'])),
    tags: strList,
    // ملخّص بنقاط يظهر أعلى الشرح
    summary: strList,
    // متطلبات سابقة قبل هذا الدرس
    prerequisites: strList,
    // دروس مرتبطة يدوياً (slug لكل درس) — تتقدّم على الاقتراح التلقائي
    relatedLessons: strList,
    // التطبيق أو الأداة المستخدمة بالدرس
    appUsed: optString,
    // تمرين الدرس وحلّه
    exerciseTitle: optString,
    exercise: strList,
    exerciseNote: optString,
    solution: strList,
    solutionCode: optString,
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
    tags: strList,
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
    // شو رح يتعلّمه المتدرّب من الدورة
    outcomes: strList,
    // متطلبات سابقة قبل البدء
    prerequisites: strList,
    tags: strList,
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

/* ===== الموارد والقوالب ===== */
const resources = defineCollection({
  loader: glob({ base: './src/content/resources', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    publishDate: z.coerce.date(),
    updatedDate: optDate,
    category: str('قوالب'),
    audience: optString,
    format: optString,
    files: z.preprocess(
      fallback([]),
      z.array(z.object({ label: str(''), url: str('') })),
    ),
    tags: strList,
    cover: optString,
    featured: bool(false),
    draft: bool(false),
  }),
});

/* ===== بنك أسئلة المقابلات ===== */
const questions = defineCollection({
  loader: glob({ base: './src/content/questions', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    level: level,
    domain: str('أساسيات'),
    // الجواب المختصر الذي يُعرض عند كشف الإجابة
    shortAnswer: str(''),
    tags: strList,
    relatedLessons: strList,
    draft: bool(false),
  }),
});

/* ===== قاموس المصطلحات ===== */
const glossary = defineCollection({
  loader: glob({ base: './src/content/glossary', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    termEn: optString,
    description: str(''),
    category: str('أساسيات'),
    // كلمات بديلة يربطها الموقع تلقائياً بمتن الدروس
    aliases: strList,
    related: strList,
    draft: bool(false),
  }),
});

/* ===== صفحة ابدأ من هنا ===== */
const start = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: 'start.json' }),
  schema: z.object({
    title: optString,
    intro: optString,
    note: optString,
    stages: z.preprocess(
      fallback([]),
      z.array(
        z.object({
          label: optString,
          title: str(''),
          body: str(''),
          items: z.preprocess(
            fallback([]),
            z.array(z.object({ label: str(''), href: str('/'), kind: optString })),
          ),
        }),
      ),
    ),
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
    // بطاقة التعريف — اختيارية، بتظهر بس لما تنحط صورة
    profilePhoto: optString,
    profileName: optString,
    profileRole: optString,
    profileText: optString,
    profileLink: optString,
    profileLinkLabel: optString,
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
    newsletterField: optString,
    newsletterHidden: z.preprocess(
      fallback([]),
      z.array(z.object({ name: str(''), value: str('') })),
    ),
    bunnyLibraryId: optString,
    bunnyCdnHostname: optString,
    headerCtaLabel: optString,
    headerCtaHref: optString,
    footerNote: optString,
    // التعليقات
    commentsEnabled: bool(false),
    commentsTitle: optString,
    commentsNote: optString,
    commentsPlaceholder: optString,
    // الإعجابات
    likesEnabled: bool(false),
    likesLabel: optString,
    likesThreshold: num(3),
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
    statsStyle: z.preprocess(fallback('قيم'), z.enum(['قيم', 'أرقام'])),
    values: z.preprocess(
      fallback([]),
      z.array(z.object({ title: str(''), text: str('') })),
    ),
    statLessonsLabel: optString,
    statCoursesLabel: optString,
    statArticlesLabel: optString,
    showFeatured: bool(true),
    featuredBadge: optString,
    featuredCta: optString,
    // بطاقة الفيديو الترحيبي — بتحلّ محل بطاقة آخر درس لما تنفعّل
    showWelcome: bool(false),
    welcomeBadge: optString,
    welcomeTitle: optString,
    welcomeText: optString,
    welcomeVideoId: optString,
    welcomeThumbnail: optString,
    showCourses: bool(true),
    coursesEyebrow: optString,
    coursesTitle: optString,
    coursesSubtitle: optString,
    showLessons: bool(true),
    lessonsTitle: optString,
    showArticles: bool(true),
    articlesTitle: optString,
    showResources: bool(true),
    resourcesEyebrow: optString,
    resourcesTitle: optString,
    resourcesSubtitle: optString,
    showNews: bool(true),
    newsTitle: optString,
    inlineNewsletterTitle: optString,
    inlineNewsletterText: optString,
    newsletterTitle: optString,
    newsletterText: optString,
    newsletterButton: optString,
    newsletterNote: optString,
  }),
});

export const collections = { lessons, articles, courses, news, resources, glossary, questions, pages, site, home, start };

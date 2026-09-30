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
// تصنيف واحد أو أكثر: بيقبل النص القديم (تصنيف واحد) أو قائمة من لوحة التحكم، وما بيطلع فاضي أبداً
const catList = (def: string) =>
  z.preprocess((v) => {
    const raw = Array.isArray(v) ? v : v === '' || v === null || v === undefined ? [] : [v];
    const list = [...new Set(raw.map((x) => String(x ?? '').trim()).filter(Boolean))];
    return list.length ? list : [def];
  }, z.array(z.string()).min(1));

/* ===== الدروس ===== */
const lessons = defineCollection({
  loader: glob({ base: './src/content/lessons', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: str(''),
    publishDate: z.coerce.date(),
    updatedDate: optDate,
    category: catList('أساسيات'),
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
    category: catList('مقالات'),
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
    certificateEnabled: bool(false),
    certificateTitleEn: optString,
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
    facebook: optString,
    instagram: optString,
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
    // المشاهدات
    viewsThreshold: num(10),
    nav: z.preprocess(
      fallback([]),
      z.array(z.object({ label: str(''), href: str('/') })),
    ),
  }),
});

/* ===== مساعد Testo ===== */
const chat = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: 'chat.json' }),
  schema: z.object({
    // تشغيل/إطفاء البوت من غير حذف الكود
    enabled: bool(true),
    // الموديل المجاني على Workers AI
    model: str('@cf/meta/llama-3.3-70b-instruct-fp8-fast'),
    // تعليمات وشخصية إضافية تتراكم فوق القواعد الأساسية المقفلة
    instructions: optString,
    // رسالة الترحيب أول ما يفتح الزائر البوت
    welcome: optString,
    // أقصى طول للرد (كل ما زاد، الرد أطول واستهلاك أكثر)
    maxTokens: num(512),
    // عدد الرسائل المسموحة لكل زائر بالساعة
    perHour: num(15),
    // الرسالة لما الزائر يوصل الحد
    limitMessage: optString,
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

/* ===== لعبة Debug Hunt ===== */
const debugHunt = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: 'debug-hunt.json' }),
  schema: z.object({
    trashEnabled: bool(true),
    trashPhoto: optString,
    trashPhoto2: optString,
    trashPhoto3: optString,
    trashPoints: num(50),
    showHomeCard: bool(true),
    homeBadge: optString,
    homeTitle: str('Debug Hunt'),
    homeText: str('اصطاد الـ bugs قبل ما توصل Production… وانتبه لا تكسر أي feature 😅'),
    homeCta: str('العب Debug Hunt'),
    homeMeta: strList,
    // بلوك "خلصت الدرس؟" بآخر كل درس
    lessonCtaEnabled: bool(true),
    lessonCtaEyebrow: str('خلصت الدرس؟ 👏'),
    lessonCtaTitle: str('خذ استراحة 60 ثانية واصطد bugs'),
    lessonCtaText: str('لعبة Debug Hunt — بتلعبها عالموبايل كمان'),
    lessonCtaButton: str('العب هسا'),
  }),
});

/* ===== شريط الأخبار فوق الموقع ===== */
const announcements = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: 'announcements.json' }),
  schema: z.object({
    enabled: bool(true),
    interval: num(5),
    items: z.preprocess(
      fallback([]),
      z.array(
        z.object({
          enabled: bool(true),
          text: str(''),
          href: optString,
          badge: optString,
          tone: z.preprocess(fallback('cyan'), z.enum(['cyan', 'orange'])),
          start: optDate,
          end: optDate,
        }),
      ),
    ),
  }),
});

/* ===== لعبة Bug Hunter ===== */
/* ===== Bug Hunter ===== */
const bhResource = z.object({ label: str(''), href: str('/'), kind: str('محتوى') });
const bhBug = z.object({
  id: str(''),
  title: str(''),
  sceneLabel: str(''),
  question: str(''),
  answers: strList,
  correctAnswer: str(''),
  explanation: str(''),
  expectedResult: optString,
  correctMessage: str('Correct! +100'),
  // لتقرير النهاية (بشكل Jira): عنوان إنجليزي احترافي + الخطورة
  reportTitle: optString,
  severity: z.preprocess(blank, z.enum(['CRITICAL', 'HIGH', 'MEDIUM', 'LOW']).optional()),
  resources: z.preprocess(fallback([]), z.array(bhResource)),
});
// فخ "Not a Bug": عنصر شكله غلط بس هو سلوك مقصود
const bhTrap = z.object({ id: str(''), title: str(''), explanation: str('') });
const CASE01_TRAPS = [
  { id: 'sale-price', title: 'سعر مشطوب على Mechanical Keyboard', explanation: 'السعر المشطوب $59.00 هو السعر القديم، والمنتج عليه خصم SALE مقصود. هاد سلوك مطلوب من الـ Business، مش خطأ.' },
  { id: 'sold-out', title: 'زر SOLD OUT معطّل على Minimal Desk Lamp', explanation: 'المنتج نافد من المخزون، فالزر معطّل ومكتوب عليه SOLD OUT. هاد سلوك مقصود بيمنع المستخدم يطلب منتج مش موجود.' },
];

const bugHunter = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: 'bug-hunter.json' }),
  schema: z.object({
    enabled: bool(true),
    showHomeCard: bool(true),
    homeBadge: optString,
    homeTitle: str('هل عينك عين فاحص جودة؟'),
    homeText: str('اصطد الأخطاء داخل متجر تجريبي واختبر مهاراتك قبل انتهاء الوقت.'),
    homeCta: str('ابدأ تحدي Bug Hunter'),
    pickerTitle: str('اختار الـ Case'),
    pickerText: str('كل Case إلها شاشة وbugs وأسئلة خاصة فيها. اختار وحدة وابدأ الصيد.'),
    trapPenalty: num(30),
    caseKicker: str('CASE 01 · E-COMMERCE'),
    caseBadge: optString,
    caseCover: optString,
    caseLabel: str('BUG HUNTER • CASE 01'),
    caseTitle: str('The Broken Shop'),
    caseText: str('متجر جديد على وشك الإطلاق، لكن فريق التطوير ترك خلفه مجموعة من الأخطاء.'),
    durationSeconds: num(90),
    challengeLabel: str('Challenge Mode'),
    practiceLabel: str('Practice Mode'),
    oneAttemptNote: str('لديك محاولة واحدة فقط لكل Bug.'),
    resultTitle: str('Mission Completed!'),
    resultText: str('شوف نتيجتك والمهارات التي تحتاج إلى تقويتها.'),
    ranks: z.preprocess(
      fallback([]),
      z.array(z.object({ min: num(0), label: str('QA Intern') })),
    ),
    bugs: z.preprocess(fallback([]), z.array(bhBug)),
    // فاضية = فخاخ Case 01 الافتراضية (لأن لوحة التحكم ممكن تحفظها كـ [])
    traps: z.preprocess((v) => (Array.isArray(v) && v.length === 0 ? CASE01_TRAPS : fallback(CASE01_TRAPS)(v)), z.array(bhTrap)),
  }),
});

// Cases إضافية للعبة (كل ملف = Case). الشاشة نفسها (scene) مبنية بالكود، والمحتوى من لوحة التحكم.
const bugCases = defineCollection({
  loader: glob({ base: './src/content/bug-cases', pattern: '*.json' }),
  schema: z.object({
    enabled: bool(true),
    comingSoon: bool(false),
    order: num(10),
    scene: str('login'),
    badge: optString,
    cover: optString,
    kicker: str('CASE 02'),
    caseLabel: str('BUG HUNTER • CASE 02'),
    caseTitle: str('New Case'),
    caseText: str(''),
    durationSeconds: num(90),
    bugs: z.preprocess(fallback([]), z.array(bhBug)),
    traps: z.preprocess(fallback([]), z.array(bhTrap)),
  }),
});


const products = defineCollection({
  loader: glob({ base: './src/content/products', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    kind: z.preprocess(
      fallback('بنك أسئلة'),
      z.enum(['بنك أسئلة', 'ملخصات', 'قوالب', 'دورة', 'حزمة']),
    ),
    // سطر واحد بيشرح شو هي المادة
    pitch: str(''),
    price: num(0),
    offerPrice: z.preprocess(blank, z.coerce.number().optional()),
    offerNote: optString,
    // شو جواها — نقطة بكل سطر
    includes: strList,
    // للدورات المدفوعة: slug الدورة اللي بيفتحها هاد المنتج
    course: optString,
    // للحزم: أكواد المنتجات اللي بتفتحها الحزمة
    bundleOf: strList,
    sampleHref: optString,
    cover: optString,
    order: num(0),
    featured: bool(false),
    draft: bool(false),
    // ===== نصوص المنتج — أي خانة فاضية بتاخد النص العام من «إعدادات المتجر» =====
    // الكارد بصفحة المتجر
    cardTitle: optString,
    cardText: optString,
    cardBadge: optString,
    cardButton: optString,
    // أعلى صفحة المنتج
    eyebrow: optString,
    heroTitle: optString,
    seoDescription: optString,
    // صندوق السعر
    buyButton: optString,
    sampleButton: optString,
    trust: strList,
    // شو بتاخد
    includesTitle: optString,
    // العيّنة المجانية (الأسئلة بتنسحب من بنك المنتج)
    sampleEnabled: bool(true),
    sampleCount: num(10),
    sampleEyebrow: optString,
    sampleTitle: optString,
    sampleText: optString,
    // الختام
    endTitle: optString,
    endButton: optString,
  }),
});

/* ===== إعدادات المتجر: نصوص صفحة المتجر + النصوص الافتراضية لكل المنتجات + بيانات الدفع ===== */
const storeSettings = defineCollection({
  loader: glob({ base: './src/content/settings', pattern: 'store.json' }),
  schema: z.object({
    // صفحة المتجر
    heroEyebrow: str('المتجر'),
    heroTitle: str('مواد بتختصر عليك الطريق'),
    heroText: str('بنوك أسئلة وملخّصات ودورات متقدمة، كلها بالعربي وجوّا المنصة. بتشتري مرة، وبتضل مفتوحة إلك على أي جهاز.'),
    allLabel: str('الكل'),
    groupCourses: str('دورات'),
    groupBanks: str('بنوك أسئلة'),
    groupSummaries: str('ملخصات'),
    groupMore: str('قوالب وحزم'),
    emptyText: str('ما في منتجات لسا. ارجع قريباً 👀'),
    haveCodeText: str('عندك كود؟'),
    haveCodeLink: str('فعّله من هون'),
    myItemsLink: str('موادي'),
    // الكارد
    cardButton: str('التفاصيل ←'),
    offerBadge: str('عرض'),
    // صفحة المنتج
    buyButton: str('اطلب الآن ←'),
    sampleButton: str('🎁 جرّب {n} أسئلة مجاناً'),
    saveLabel: str('وفّر {p}%'),
    trust: z.preprocess(fallback(['دفع بـ CliQ أو تحويل بنكي', 'كود تفعيل خاص فيك، على أي جهاز', 'المحتوى جوّا المنصة، مش ملف بينتقل']), z.array(str(''))),
    includesTitle: str('شو بتاخد؟'),
    endTitle: str('جاهز تبلّش؟'),
    endButton: str('اطلب الآن ←'),
    boughtText: str('اشتريت قبل؟'),
    boughtLink: str('فعّل الكود من هون'),
    // صفحة العيّنة
    sampleEyebrow: str('عيّنة مجانية'),
    sampleTitle: str('جرّب قبل ما تشتري'),
    sampleText: str('أول {n} أسئلة من البنك، بنفس الشكل اللي بتلاقيه بعد الشراء. اختار جوابك وبتعرف فوراً إذا صح وليش.'),
    sampleBack: str('→ رجوع لتفاصيل المنتج'),
    sampleNext: str('السؤال التالي ←'),
    sampleFinish: str('خلصت ←'),
    sampleCorrect: str('✓ جوابك صح'),
    sampleWrong: str('✗ الجواب الصح هو {a}'),
    sampleEnglish: str('الشرح بالإنجليزي'),
    sampleDone: str('خلصت العيّنة! جاوبت صح على {score} من {n}.'),
    sampleDoneText: str('البنك الكامل فيه {total} سؤال، مع امتحان تجريبي وتدريب حسب الفصل.'),
    // طلب الشراء + صفحة متابعة الطلب
    orderTitle: str("طلب شراء"),
    orderText: str("عبّي معلوماتك، وبعدها بتطلعلك تفاصيل التحويل. ما في حساب ولا كلمة سر."),
    fieldName: str("الاسم"),
    fieldEmail: str("الإيميل"),
    fieldEmailHint: str("عليه بيوصلك كود التفعيل، فتأكد إنه صحيح."),
    fieldPhone: str("رقم واتساب (اختياري)"),
    codeLabel: str("عندك كود خصم؟"),
    codeApply: str("تطبيق"),
    codeOk: str("✓ تم تطبيق الخصم: {discount}"),
    codeBad: str("الكود مش صحيح أو انتهت صلاحيته."),
    summaryTotal: str("المجموع"),
    orderSubmit: str("متابعة للدفع ←"),
    orderAgree: str("بالضغط على «متابعة» إنت موافق على شروط الشراء وسياسة الاسترجاع."),
    orderOpen: str("عندك طلب مفتوح لهاد المنتج —"),
    orderOpenLink: str("كمّله من هون"),
    payTitle: str("حوّل المبلغ"),
    payText: str("رقم طلبك {id} والمبلغ المطلوب {amount}. حوّل بأي طريقة من هدول، وبعدها ارفع صورة الإيصال."),
    cliqTitle: str("⚡ CliQ (الأسرع)"),
    bankTitle: str("🏦 تحويل بنكي"),
    copyLabel: str("نسخ"),
    copiedLabel: str("✓ انتسخ"),
    payRefNote: str("📝 اكتب {id} بملاحظة التحويل عشان نطابق طلبك بسرعة."),
    holdText: str("الطلب محجوز لحد {date}."),
    uploadTitle: str("ارفع إثبات الدفع"),
    uploadText: str("صورة شاشة من تطبيق البنك أو CliQ (صورة أو PDF)."),
    uploadPick: str("📎 اختار الملف"),
    refLabel: str("رقم مرجع التحويل (اختياري)"),
    uploadSubmit: str("إرسال للمراجعة ←"),
    uploadTooBig: str("الملف كبير. جرّب صورة شاشة أصغر أو PDF أقل من 1.9MB."),
    reviewTitle: str("وصلنا إثبات الدفع 👌"),
    reviewText: str("طلبك قيد المراجعة. أول ما نتأكد من التحويل بيطلعلك كود التفعيل هون وبيوصلك على الإيميل."),
    approvedTitle: str("طلبك مفعّل 🎉"),
    approvedText: str("هاد كود التفعيل تبعك. احتفظ فيه، وبتقدر تستعمله على أي جهاز."),
    approvedButton: str("فعّل وافتح موادي ←"),
    rejectedTitle: str("ما قدرنا نأكد الدفع"),
    rejectedText: str("إذا حوّلت فعلاً، تواصل معنا وابعت رقم الطلب."),
    expiredTitle: str("انتهت مدة حجز الطلب"),
    expiredText: str("ما وصلنا إثبات دفع خلال المدة. بتقدر تعمل طلب جديد بأي وقت."),
    saveLinkText: str("احفظ رابط هاي الصفحة — منه بتتابع طلبك وبتلاقي الكود."),
    stepReceived: str("استلمنا طلبك"),
    stepProof: str("وصل إثبات الدفع"),
    stepReview: str("قيد المراجعة"),
    stepDone: str("مفعّل ✓"),
    contactText: str("عندك سؤال؟ راسلنا واتساب"),
    // التفعيل والإيميلات
    maxDevices: num(3),
    payFallback: str("تواصل معنا لتفاصيل التحويل."),
    orderSubject: str("استلمنا طلبك {id} — Testing بالعربي"),
    orderBody: str("أهلاً {name} 👋\n\nاستلمنا طلبك {id} على «{product}» والمبلغ المطلوب {amount}.\n\nمن الرابط تحت بتلاقي تفاصيل التحويل (CliQ أو بنكي) وبترفع صورة الإيصال. الطلب محجوز إلك {hours} ساعة.\n\nاحتفظ بهاد الإيميل — منه بتتابع طلبك."),
    orderButton: str("تفاصيل الطلب والدفع"),
    approvedSubject: str("🎉 طلبك {id} مفعّل — كود التفعيل"),
    approvedBody: str("أهلاً {name} 🎉\n\nتأكدنا من الدفع وطلبك {id} صار مفعّل.\n\nهاد كود التفعيل تبعك لـ «{product}». احتفظ فيه، وبتقدر تستعمله على أي جهاز:"),
    approvedButton: str("فعّل وافتح المحتوى"),
    rejectedSubject: str("بخصوص طلبك {id}"),
    rejectedBody: str("أهلاً {name}،\n\nما قدرنا نأكد الدفع لطلبك {id}.\nالسبب: {reason}\n\nإذا حوّلت فعلاً، رد على هاد الإيميل أو راسلنا وابعت رقم الطلب."),
    // بيانات الدفع (بتظهر للمشتري بعد ما يطلب)
    cliqAlias: optString,
    bankName: optString,
    accountName: optString,
    iban: optString,
    whatsapp: optString,
    holdHours: num(48),
    payNote: optString,
  }),
});

export const collections = { products, storeSettings, lessons, articles, courses, news, resources, glossary, questions, pages, site, home, start, chat, bugHunter, bugCases, debugHunt, announcements };

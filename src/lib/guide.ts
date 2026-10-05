/**
 * محرّك أدلة الدراسة التفاعلية (staging فقط).
 *
 * كل دليل (CT-GenAI، CTFL…) بيتعرّف بملف إعدادات بـ src/lib/guides.ts:
 * الاسم، الفصول، المجموعات، مجلدات المحتوى، ومنتج المتجر.
 * هون الأنواع والمنطق المشترك: تحميل الصفحات، تحويل العناوين، الروابط، مفتاح الحفظ.
 */
import type { MarkdownInstance } from 'astro';

export type GuideView = 'preview' | 'full';
export type GuideKind = 'home' | 'chapter' | 'section' | 'glossary';
/** زر الشراء بالمعاينة المجانية (من منتج المتجر تبع الدليل) */
export interface GuideBuy { href: string; order: string; price: string; old?: string }

export interface GuideTerm {
  en: string;
  ar: string;
  def: string;
  /** تعريف المصطلح بالعربي (يظهر أولًا، والإنجليزي تحته) */
  defAr?: string;
  match?: string[];
}

export interface GuideFrontmatter {
  order: number;
  slug: string;
  chapter?: number;
  group?: string;
  section: string;
  /** الشكل الجديد: العنوان الإنجليزي. الشكل القديم: العنوان العربي */
  title: string;
  titleAr?: string;
  /** الشكل القديم فقط */
  english?: string;
  objectives?: string;
  minutes?: number;
  takeaways?: string[];
  /** ترجمة الخلاصة بالعربي، بنفس ترتيب takeaways */
  takeawaysAr?: string[];
  terms?: GuideTerm[];
  /** صياغتنا المختصرة لكل هدف تعلّم (بالإنجليزي)، مفتاحها رمز الهدف */
  lo?: Record<string, string>;
  /** نفس الأهداف بالعربي */
  loAr?: Record<string, string>;
  /** تمارين تفاعلية بالصفحة مش مربوطة بهدف HO من السيليبس (مثل أدلة CTFL) */
  labs?: string[];
}

export type GuideModules = Record<string, MarkdownInstance<GuideFrontmatter>>;

export interface Objective {
  code: string;
  level: string;
  text?: string;
  textAr?: string;
}

export interface HeadingRef {
  id: string;
  level: 2 | 3;
  num: string;
  en: string;
  ar: string;
}

export interface GuidePage {
  slug: string;
  chapter: number;
  order: number;
  group?: string;
  section: string;
  title: string;
  titleAr: string;
  minutes: number;
  objectives: Objective[];
  labs: string[];
  takeaways: { ar?: string; en: string }[];
  terms: GuideTerm[];
  load: () => Promise<{ html: string; headings: HeadingRef[] }>;
}

export interface GuideChapter {
  number: number;
  en: string;
  ar: string;
}

/** إعدادات دليل واحد */
export interface GuideDef {
  /** معرّف قصير، بيدخل بمفتاح الحفظ بالمتصفح (لا تغيّره بعد النشر) */
  id: string;
  /** معرّف منتج المتجر = أول جزء من الرابط /store/<product>/ */
  product: string;
  /** الاسم المختصر بالمسار والعناوين (مثل CT-GenAI) */
  name: string;
  /** السطر الصغير فوق عنوان الرئيسية */
  kicker: string;
  /** عنوان الرئيسية */
  homeTitle: string;
  /** مرجع السيليبس بسطر المصدر آخر كل عنوان */
  syllabus: string;
  /** فقرة «عن هذا الدليل» بالرئيسية */
  about: string;
  /** ملاحظة الرئيسية بالمسودة الكاملة */
  fullNote: string;
  /** مثال بخانة البحث بالفهرس */
  searchHint: string;
  /** بادئة رموز أهداف التعلّم بالسيليبس (GenAI- أو FL-) */
  loPrefix: string;
  /** بادئة أهداف التمارين العملية بالسيليبس، إذا موجودة */
  labPrefix?: string;
  chapters: GuideChapter[];
  /** عناوين المجموعات (المستوى الثاني بالسيليبس) */
  groups: Record<string, { en: string; ar: string }>;
  /** المعاينة المجانية (عادة الفصل الأول) */
  sample: GuideModules;
  /** باقي الفصول (بالدليل الكامل فقط) */
  full: GuideModules;
}

export const LEVELS: Record<string, { name: string; ar: string; hint: string; hintAr: string }> = {
  K1: { name: 'Remember', ar: 'تذكّر', hint: 'Recall a term, fact or concept.', hintAr: 'تتذكّر مصطلحًا أو حقيقة أو مفهومًا.' },
  K2: { name: 'Understand', ar: 'فهم', hint: 'Explain, compare, classify or give examples.', hintAr: 'تشرح وتقارن وتصنّف وتعطي أمثلة.' },
  K3: { name: 'Apply', ar: 'تطبيق', hint: 'Use a concept or procedure in a given situation.', hintAr: 'تطبّق مفهومًا أو إجراءً على موقف معطى.' },
  H0: { name: 'Demonstration', ar: 'عرض توضيحي', hint: 'Watch a worked example or a live demo.', hintAr: 'تشاهد مثالًا محلولًا أو عرضًا مباشرًا.' },
  H1: { name: 'Guided exercise', ar: 'تمرين موجّه', hint: 'Follow the lab steps yourself.', hintAr: 'تنفّذ خطوات التمرين بنفسك.' },
  H2: { name: 'Exercise with hints', ar: 'تمرين بتلميحات', hint: 'Work through the task with hints only.', hintAr: 'تحل المهمة بنفسك مع تلميحات فقط.' },
};

const parseObjectives = (raw = '', lo: Record<string, string> = {}, loAr: Record<string, string> = {}): Objective[] =>
  raw
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [code, level = ''] = part.split('·').map((s) => s.trim());
      return { code, level, text: lo[code], textAr: loAr[code] };
    });

const ARABIC = /[؀-ۿ]/;
const isLatin = (s: string) => /[A-Za-z]/.test(s) && !ARABIC.test(s);
const stripTags = (s: string) => s.replace(/<[^>]+>/g, '').trim();

/** يحوّل «عربي — English» أو «1.2.3 عنوان» لعنوان بالإنجليزي وسطر عربي صغير */
export function splitHeading(text: string): Omit<HeadingRef, 'id' | 'level'> {
  let rest = text.trim();
  let num = '';
  const sectionNum = rest.match(/^(\d+(?:\.\d+)+)\s+/);
  if (sectionNum) {
    num = sectionNum[1];
    rest = rest.slice(sectionNum[0].length);
  } else {
    rest = rest.replace(/^\d+\.\s+/, '');
  }
  const parts = rest.split(/\s+—\s+/).map((p) => p.trim()).filter(Boolean);
  let en = '';
  let ar = '';
  if (parts.length >= 2) {
    en = parts.find(isLatin) || '';
    ar = parts.filter((p) => p !== en).join(' — ');
  } else if (isLatin(rest)) {
    en = rest;
  } else {
    ar = rest;
  }
  return { num, en, ar };
}

function transform(html: string): { html: string; headings: HeadingRef[] } {
  const headings: HeadingRef[] = [];
  let out = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/g, (_m, lvl: string, attrs: string, inner: string) => {
    const level = Number(lvl) as 2 | 3;
    const id = attrs.match(/id="([^"]+)"/)?.[1] || '';
    const { num, en, ar } = splitHeading(stripTags(inner));
    if (id) headings.push({ id, level, num, en, ar });
    const cls = en ? 'gx-h' : 'gx-h gx-h--ar';
    const parts = [
      num ? `<span class="gx-h-num" dir="ltr">${num}</span>` : '',
      en ? `<span class="gx-h-en" lang="en" dir="ltr">${en}</span>` : '',
      ar ? `<span class="gx-h-ar">${ar}</span>` : '',
    ].join('');
    return `<h${lvl}${attrs} class="${cls}">${parts}</h${lvl}>`;
  });
  out = out
    .replace(/<table>/g, '<div class="gx-table" tabindex="0" role="region" aria-label="جدول، ممكن تمرّره أفقيًا"><table>')
    .replace(/<\/table>/g, '</table></div>');
  return { html: out, headings };
}

function toPage(mod: MarkdownInstance<GuideFrontmatter>, labPrefix?: string): GuidePage {
  const fm = mod.frontmatter;
  const legacy = Boolean(fm.english);
  const objectives = parseObjectives(fm.objectives, fm.lo, fm.loAr);
  const syllabusLabs = labPrefix ? objectives.filter((o) => o.code.startsWith(labPrefix)).map((o) => o.code) : [];
  return {
    slug: String(fm.slug),
    chapter: fm.chapter || 1,
    order: Number(fm.order) || 0,
    group: fm.group,
    section: String(fm.section),
    title: legacy ? String(fm.english) : fm.title,
    titleAr: legacy ? fm.title : fm.titleAr || '',
    minutes: Number(fm.minutes) || 0,
    objectives,
    labs: [...syllabusLabs, ...(fm.labs || [])],
    takeaways: (fm.takeaways || []).map((en, i) => ({ en, ar: fm.takeawaysAr?.[i] })),
    terms: fm.terms || [],
    load: async () => transform(await mod.compiledContent()),
  };
}

const sortPages = (a: GuidePage, b: GuidePage) => a.chapter - b.chapter || a.order - b.order;

export const termId = (en: string) => `term-${en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

/** تسمية العنوان بالفهرس: رقم السيليبس، والصفحات القديمة بتحمل نطاقها (مثل 2.2.4–2.2.5) */
export const sectionLabel = (p: GuidePage) => p.section.replace(/\s*·\s*/g, ' · ');

export function createGuide(def: GuideDef) {
  const samplePages = Object.values(def.sample).map((m) => toPage(m, def.labPrefix)).sort(sortPages);
  const allPages = [...samplePages, ...Object.values(def.full).map((m) => toPage(m, def.labPrefix))].sort(sortPages);

  /** المعاينة المجانية = صفحات sample فقط */
  const pagesFor = (view: GuideView) => (view === 'full' ? allPages : samplePages);
  const chaptersFor = (view: GuideView) =>
    def.chapters.map((c) => ({ ...c, pages: pagesFor(view).filter((p) => p.chapter === c.number) }));

  const guideBase = (view: GuideView) => `/store/${def.product}/${view}/`;
  const pageUrl = (view: GuideView, p: GuidePage) => `${guideBase(view)}${p.slug}/`;
  const chapterUrl = (view: GuideView, n: number) => `${guideBase(view)}chapter-${n}/`;
  const glossaryUrl = (view: GuideView) => `${guideBase(view)}glossary/`;
  const storageKey = (view: GuideView) => `ta:${def.id}:guide:${view}:v2`;

  /** مسارات getStaticPaths للدليل. ما بينبنوا أبداً بدون CMS_BRANCH=staging أو بدون محتوى. */
  const staticPaths = () => {
    if (process.env.CMS_BRANCH !== 'staging') return [];
    const views: GuideView[] = ['preview', 'full'];
    return views.flatMap((view) => {
      const pages = pagesFor(view);
      if (!pages.length) return [];
      const chapters = def.chapters.filter((c) => pages.some((p) => p.chapter === c.number));
      return [
        { params: { view, path: undefined }, props: { view, kind: 'home' as const } },
        { params: { view, path: 'glossary' }, props: { view, kind: 'glossary' as const } },
        ...chapters.map((c) => ({ params: { view, path: `chapter-${c.number}` }, props: { view, kind: 'chapter' as const, chapter: c.number } })),
        ...pages.map((p) => ({ params: { view, path: p.slug }, props: { view, kind: 'section' as const, slug: p.slug } })),
      ];
    });
  };

  return { ...def, pagesFor, chaptersFor, guideBase, pageUrl, chapterUrl, glossaryUrl, storageKey, staticPaths };
}

export type Guide = ReturnType<typeof createGuide>;

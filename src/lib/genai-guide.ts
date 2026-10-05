/**
 * دليل CT-GenAI: تحميل المحتوى وبناء بنية الفصول والعناوين (staging فقط).
 *
 * الفصل الأول مقسّم حسب ترقيم السيليبس (صفحة لكل عنوان فرعي مثل 1.1.2).
 * الفصول 2–5 لسا بالشكل القديم (ملف يغطي أكثر من عنوان) لحد ما تنقسم بدفعاتها،
 * فبنحوّل حقولها هون لنفس الشكل الجديد.
 */
import type { MarkdownInstance } from 'astro';

export type GuideView = 'preview' | 'full';
/** زر الشراء بالمعاينة المجانية (من منتج المتجر ct-genai-guide) */
export interface GuideBuy { href: string; order: string; price: string; old?: string }
export { GUIDE_PRODUCT } from './store';

export interface GuideTerm {
  en: string;
  ar: string;
  def: string;
  /** تعريف المصطلح بالعربي (يظهر أولًا، والإنجليزي تحته) */
  defAr?: string;
  match?: string[];
}

interface Frontmatter {
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
}

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

export const CHAPTERS: GuideChapter[] = [
  { number: 1, en: 'Introduction to Generative AI for Software Testing', ar: 'مدخل إلى الذكاء الاصطناعي التوليدي لاختبار البرمجيات' },
  { number: 2, en: 'Prompt Engineering for Effective Software Testing', ar: 'هندسة التوجيه لاختبار برمجيات فعّال' },
  { number: 3, en: 'Managing Risks of Generative AI in Software Testing', ar: 'إدارة مخاطر الذكاء التوليدي في اختبار البرمجيات' },
  { number: 4, en: 'LLM-Powered Test Infrastructure for Software Testing', ar: 'بنية اختبار تحتية مدعومة بالنماذج اللغوية' },
  { number: 5, en: 'Deploying and Integrating Generative AI in Test Organizations', ar: 'نشر الذكاء التوليدي ودمجه في مؤسسات الاختبار' },
];

/** عناوين المجموعات (المستوى الثاني بالسيليبس). بتنضاف لكل فصل لما ينقسم بدفعته. */
export const GROUPS: Record<string, { en: string; ar: string }> = {
  '1.1': { en: 'Generative AI Foundations and Key Concepts', ar: 'أساسيات الذكاء التوليدي ومفاهيمه الرئيسية' },
  '1.2': { en: 'Leveraging Generative AI in Software Testing: Core Principles', ar: 'الاستفادة من الذكاء التوليدي في الاختبار: المبادئ الأساسية' },
  '2.1': { en: 'Effective Prompt Development', ar: 'تطوير توجيهات فعّالة' },
  '2.2': { en: 'Applying Prompt Engineering Techniques to Software Test Tasks', ar: 'تطبيق تقنيات هندسة التوجيه على مهام الاختبار' },
  '2.3': { en: 'Evaluate Generative AI Results and Refine Prompts for Software Test Tasks', ar: 'تقييم نتائج الذكاء التوليدي وتنقيح التوجيهات' },
  '3.1': { en: 'Hallucinations, Reasoning Errors and Biases', ar: 'الهلوسة وأخطاء الاستدلال والتحيز' },
  '3.2': { en: 'Data Privacy and Security Risks of Generative AI in Software Testing', ar: 'مخاطر خصوصية البيانات والأمن' },
  '3.3': { en: 'Energy Consumption and Environmental Impact of Generative AI for Software Testing', ar: 'استهلاك الطاقة والأثر البيئي' },
  '3.4': { en: 'AI Regulations, Standards, and Best Practice Frameworks', ar: 'التنظيمات والمعايير وأطر الممارسات' },
  '4.1': { en: 'Architectural Approaches for LLM-Powered Test Infrastructure', ar: 'المقاربات المعمارية لبنية الاختبار المدعومة بالنماذج' },
  '4.2': { en: 'Fine-Tuning and LLMOps: Operationalizing Generative AI for Software Testing', ar: 'الضبط الدقيق وLLMOps: تشغيل الذكاء التوليدي في الاختبار' },
  '5.1': { en: 'Roadmap for the Adoption of Generative AI in Software Testing', ar: 'خارطة طريق تبنّي الذكاء التوليدي في الاختبار' },
  '5.2': { en: 'Manage Change when Adopting Generative AI for Software Testing', ar: 'إدارة التغيير عند تبنّي الذكاء التوليدي' },
};

export const LEVELS: Record<string, { name: string; ar: string; hint: string; hintAr: string }> = {
  K1: { name: 'Remember', ar: 'تذكّر', hint: 'Recall a term, fact or concept.', hintAr: 'تتذكّر مصطلحًا أو حقيقة أو مفهومًا.' },
  K2: { name: 'Understand', ar: 'فهم', hint: 'Explain, compare, classify or give examples.', hintAr: 'تشرح وتقارن وتصنّف وتعطي أمثلة.' },
  K3: { name: 'Apply', ar: 'تطبيق', hint: 'Use a concept or procedure in a given situation.', hintAr: 'تطبّق مفهومًا أو إجراءً على موقف معطى.' },
  H0: { name: 'Demonstration', ar: 'عرض توضيحي', hint: 'Watch a worked example or a live demo.', hintAr: 'تشاهد مثالًا محلولًا أو عرضًا مباشرًا.' },
  H1: { name: 'Guided exercise', ar: 'تمرين موجّه', hint: 'Follow the lab steps yourself.', hintAr: 'تنفّذ خطوات التمرين بنفسك.' },
  H2: { name: 'Exercise with hints', ar: 'تمرين بتلميحات', hint: 'Work through the task with hints only.', hintAr: 'تحل المهمة بنفسك مع تلميحات فقط.' },
};

const sampleModules = import.meta.glob<MarkdownInstance<Frontmatter>>('../data/readers/ct-genai/*.md', { eager: true });
const draftModules = import.meta.glob<MarkdownInstance<Frontmatter>>('../data/readers/ct-genai-full/*.md', { eager: true });

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

function toPage(mod: MarkdownInstance<Frontmatter>): GuidePage {
  const fm = mod.frontmatter;
  const legacy = Boolean(fm.english);
  const objectives = parseObjectives(fm.objectives, fm.lo, fm.loAr);
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
    labs: objectives.filter((o) => o.code.startsWith('HO-')).map((o) => o.code),
    takeaways: (fm.takeaways || []).map((en, i) => ({ en, ar: fm.takeawaysAr?.[i] })),
    terms: fm.terms || [],
    load: async () => transform(await mod.compiledContent()),
  };
}

const sortPages = (a: GuidePage, b: GuidePage) => a.chapter - b.chapter || a.order - b.order;

export const SAMPLE_PAGES = Object.values(sampleModules).map(toPage).sort(sortPages);
export const ALL_PAGES = [...SAMPLE_PAGES, ...Object.values(draftModules).map(toPage)].sort(sortPages);

/** المعاينة المجانية = الفصل الأول فقط */
export const pagesFor = (view: GuideView) => (view === 'full' ? ALL_PAGES : SAMPLE_PAGES);
export const chaptersFor = (view: GuideView) =>
  CHAPTERS.map((c) => ({ ...c, pages: pagesFor(view).filter((p) => p.chapter === c.number) }));

export const guideBase = (view: GuideView) => `/store/ct-genai-guide/${view}/`;
export const pageUrl = (view: GuideView, p: GuidePage) => `${guideBase(view)}${p.slug}/`;
export const chapterUrl = (view: GuideView, n: number) => `${guideBase(view)}chapter-${n}/`;
export const glossaryUrl = (view: GuideView) => `${guideBase(view)}glossary/`;
export const termId = (en: string) => `term-${en.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;
export const storageKey = (view: GuideView) => `ta:ct-genai:guide:${view}:v2`;

/** تسمية العنوان بالفهرس: رقم السيليبس، والصفحات القديمة بتحمل نطاقها (مثل 2.2.4–2.2.5) */
export const sectionLabel = (p: GuidePage) => p.section.replace(/\s*·\s*/g, ' · ');

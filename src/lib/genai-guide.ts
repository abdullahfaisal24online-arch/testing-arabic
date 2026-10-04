/**
 * دليل CT-GenAI: تحميل المحتوى وبناء بنية الفصول والعناوين (staging فقط).
 *
 * الفصل الأول مقسّم حسب ترقيم السيليبس (صفحة لكل عنوان فرعي مثل 1.1.2).
 * الفصول 2–5 لسا بالشكل القديم (ملف يغطي أكثر من عنوان) لحد ما تنقسم بدفعاتها،
 * فبنحوّل حقولها هون لنفس الشكل الجديد.
 */
import type { MarkdownInstance } from 'astro';

export type GuideView = 'preview' | 'full';

export interface GuideTerm {
  en: string;
  ar: string;
  def: string;
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
  terms?: GuideTerm[];
}

export interface Objective {
  code: string;
  level: string;
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
  takeaways: string[];
  terms: GuideTerm[];
  load: () => Promise<{ html: string; headings: HeadingRef[] }>;
}

export interface GuideChapter {
  number: number;
  en: string;
  ar: string;
}

export const CHAPTERS: GuideChapter[] = [
  { number: 1, en: 'Foundations of Generative AI for Software Testing', ar: 'أساسيات الذكاء الاصطناعي التوليدي لاختبار البرمجيات' },
  { number: 2, en: 'Prompt Engineering for Software Testing', ar: 'هندسة التوجيه لاختبار البرمجيات' },
  { number: 3, en: 'Managing Risks of Generative AI', ar: 'إدارة مخاطر الذكاء الاصطناعي التوليدي' },
  { number: 4, en: 'Infrastructure for Generative AI', ar: 'البنية التحتية للذكاء الاصطناعي التوليدي' },
  { number: 5, en: 'Adoption of Generative AI in Organizations', ar: 'تبنّي الذكاء الاصطناعي التوليدي في المؤسسات' },
];

/** عناوين المجموعات (المستوى الثاني بالسيليبس). بتنضاف لكل فصل لما ينقسم بدفعته. */
export const GROUPS: Record<string, { en: string; ar: string }> = {
  '1.1': { en: 'Generative AI Foundations and Key Concepts', ar: 'أساسيات الذكاء التوليدي ومفاهيمه الرئيسية' },
  '1.2': { en: 'Leveraging Generative AI in Software Testing', ar: 'الاستفادة من الذكاء التوليدي في اختبار البرمجيات' },
};

export const LEVELS: Record<string, { name: string; hint: string }> = {
  K1: { name: 'Remember', hint: 'Recall a term, fact or concept.' },
  K2: { name: 'Understand', hint: 'Explain, compare, classify or give examples.' },
  K3: { name: 'Apply', hint: 'Use a concept or procedure in a given situation.' },
  H0: { name: 'Demonstration', hint: 'Watch a worked example or a live demo.' },
  H1: { name: 'Guided exercise', hint: 'Follow the lab steps yourself.' },
  H2: { name: 'Exercise with hints', hint: 'Work through the task with hints only.' },
};

const sampleModules = import.meta.glob<MarkdownInstance<Frontmatter>>('../data/readers/ct-genai/*.md', { eager: true });
const draftModules = import.meta.glob<MarkdownInstance<Frontmatter>>('../data/readers/ct-genai-draft/*.md', { eager: true });

const parseObjectives = (raw = ''): Objective[] =>
  raw
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => {
      const [code, level = ''] = part.split('·').map((s) => s.trim());
      return { code, level };
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
  const objectives = parseObjectives(fm.objectives);
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
    takeaways: fm.takeaways || [],
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

/**
 * أدلة الدراسة المتاحة. كل دليل جديد = إعدادات هون + مجلدين محتوى + ملف مسار
 * تحت src/pages/store/<product>/[view]/[...path].astro.
 *
 * ملاحظة: import.meta.glob لازم يكون بنص ثابت، عشان هيك المجلدات مكتوبة هون مش بالمحرّك.
 */
import { createGuide, type Guide, type GuideModules } from './guide';

export const CT_GENAI = createGuide({
  id: 'ct-genai',
  product: 'ct-genai-guide',
  name: 'CT-GenAI',
  kicker: 'ISTQB® CT-GenAI · Syllabus v1.1',
  homeTitle: 'دليل CT-GenAI بالعربي',
  syllabus: 'ISTQB® CT-GenAI Syllabus v1.1',
  about:
    'شرح دراسي مستقل من Testing بالعربي، مبني على ISTQB® CT-GenAI Syllabus v1.1 (27 أبريل 2026). حقوق السيليبس لـISTQB® ومؤلفيه Abbas Ahmad وGualtiero Bazzana وAlessandro Collino وOlivier Denoo وBruno Legeard. هذا الدليل مش مادة تدريب معتمدة ولا ضمان لنتيجة الامتحان.',
  fullNote: 'مسودة مراجعة داخلية: الفصل الأول مقسّم حسب السيليبس، والفصول 2–5 لسا بشكلها القديم لحد ما تنراجع بدفعاتها.',
  searchHint: 'مثل: Tokens أو Hallucination',
  loPrefix: 'GenAI-',
  labPrefix: 'HO-',
  chapters: [
    { number: 1, en: 'Introduction to Generative AI for Software Testing', ar: 'مدخل إلى الذكاء الاصطناعي التوليدي لاختبار البرمجيات' },
    { number: 2, en: 'Prompt Engineering for Effective Software Testing', ar: 'هندسة التوجيه لاختبار برمجيات فعّال' },
    { number: 3, en: 'Managing Risks of Generative AI in Software Testing', ar: 'إدارة مخاطر الذكاء التوليدي في اختبار البرمجيات' },
    { number: 4, en: 'LLM-Powered Test Infrastructure for Software Testing', ar: 'بنية اختبار تحتية مدعومة بالنماذج اللغوية' },
    { number: 5, en: 'Deploying and Integrating Generative AI in Test Organizations', ar: 'نشر الذكاء التوليدي ودمجه في مؤسسات الاختبار' },
  ],
  groups: {
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
  },
  sample: import.meta.glob('../data/readers/ct-genai/*.md', { eager: true }) as GuideModules,
  full: import.meta.glob('../data/readers/ct-genai-full/*.md', { eager: true }) as GuideModules,
});

/**
 * دليل CTFL v4.0.1. صفحاته ما بتنبني لحد ما ينضاف محتوى بالمجلدين:
 *   src/data/readers/ctfl/        الفصل الأول (المعاينة المجانية)
 *   src/data/readers/ctfl-full/   الفصول 2–6
 */
export const CTFL = createGuide({
  id: 'ctfl',
  product: 'ctfl-guide',
  name: 'CTFL',
  kicker: 'ISTQB® CTFL · Syllabus v4.0.1',
  homeTitle: 'دليل CTFL بالعربي',
  syllabus: 'ISTQB® CTFL Syllabus v4.0.1',
  about:
    'شرح دراسي مستقل من Testing بالعربي، مبني على ISTQB® Certified Tester Foundation Level Syllabus v4.0.1 (15 سبتمبر 2024). حقوق السيليبس لـISTQB®. هذا الدليل مش مادة تدريب معتمدة ولا ضمان لنتيجة الامتحان.',
  fullNote: 'مسودة مراجعة داخلية: الفصول بتنضاف بدفعات لحد ما يكتمل الدليل.',
  searchHint: 'مثل: Boundary Value أو Regression',
  loPrefix: 'FL-',
  chapters: [
    { number: 1, en: 'Fundamentals of Testing', ar: 'أساسيات الاختبار' },
    { number: 2, en: 'Testing Throughout the Software Development Lifecycle', ar: 'الاختبار خلال دورة حياة تطوير البرمجيات' },
    { number: 3, en: 'Static Testing', ar: 'الاختبار الساكن' },
    { number: 4, en: 'Test Analysis and Design', ar: 'تحليل الاختبار وتصميمه' },
    { number: 5, en: 'Managing the Test Activities', ar: 'إدارة أنشطة الاختبار' },
    { number: 6, en: 'Test Tools', ar: 'أدوات الاختبار' },
  ],
  groups: {
    '1.1': { en: 'What is Testing?', ar: 'شو هو الاختبار؟' },
    '1.2': { en: 'Why is Testing Necessary?', ar: 'ليش الاختبار ضروري؟' },
    '1.3': { en: 'Testing Principles', ar: 'مبادئ الاختبار' },
    '1.4': { en: 'Test Activities, Testware and Test Roles', ar: 'أنشطة الاختبار ومخرجاته وأدواره' },
    '1.5': { en: 'Essential Skills and Good Practices in Testing', ar: 'المهارات الأساسية والممارسات الجيدة' },
    '2.1': { en: 'Testing in the Context of a Software Development Lifecycle', ar: 'الاختبار ضمن دورة حياة التطوير' },
    '2.2': { en: 'Test Levels and Test Types', ar: 'مستويات الاختبار وأنواعه' },
    '2.3': { en: 'Maintenance Testing', ar: 'اختبار الصيانة' },
    '3.1': { en: 'Static Testing Basics', ar: 'أساسيات الاختبار الساكن' },
    '3.2': { en: 'Feedback and Review Process', ar: 'التغذية الراجعة وعملية المراجعة' },
    '4.1': { en: 'Test Techniques Overview', ar: 'نظرة عامة على تقنيات الاختبار' },
    '4.2': { en: 'Black-Box Test Techniques', ar: 'تقنيات الصندوق الأسود' },
    '4.3': { en: 'White-Box Test Techniques', ar: 'تقنيات الصندوق الأبيض' },
    '4.4': { en: 'Experience-based Test Techniques', ar: 'تقنيات مبنية على الخبرة' },
    '4.5': { en: 'Collaboration-based Test Approaches', ar: 'مقاربات مبنية على التعاون' },
    '5.1': { en: 'Test Planning', ar: 'تخطيط الاختبار' },
    '5.2': { en: 'Risk Management', ar: 'إدارة المخاطر' },
    '5.3': { en: 'Test Monitoring, Test Control and Test Completion', ar: 'مراقبة الاختبار والتحكم فيه وإكماله' },
    '5.4': { en: 'Configuration Management', ar: 'إدارة الإعدادات' },
    '5.5': { en: 'Defect Management', ar: 'إدارة العيوب' },
    '6.1': { en: 'Tool Support for Testing', ar: 'دعم الأدوات للاختبار' },
    '6.2': { en: 'Benefits and Risks of Test Automation', ar: 'فوائد أتمتة الاختبار ومخاطرها' },
  },
  sample: import.meta.glob('../data/readers/ctfl/*.md', { eager: true }) as GuideModules,
  full: import.meta.glob('../data/readers/ctfl-full/*.md', { eager: true }) as GuideModules,
});

/** الدليل حسب معرّف منتج المتجر */
export const GUIDES: Record<string, Guide> = {
  [CT_GENAI.product]: CT_GENAI,
  [CTFL.product]: CTFL,
};

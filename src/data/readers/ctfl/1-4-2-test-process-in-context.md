---
order: 8
slug: "1-4-2"
chapter: 1
group: "1.4"
section: "1.4.2"
title: "Test Process in Context"
titleAr: "عملية الاختبار ضمن سياقها"
objectives: "FL-1.4.2 · K2"
minutes: 6
lo:
  FL-1.4.2: "Explain how the context affects the test process."
loAr:
  FL-1.4.2: "تشرح كيف يؤثر السياق على عملية الاختبار."
takeaways:
  - "Testing is part of the development process and is funded by stakeholders, so it must meet their business needs."
  - "Eight groups of factors shape how testing is done: stakeholders, team, business domain, technical factors, project constraints, organisation, SDLC and tools."
  - "These factors affect the test strategy, techniques, automation, coverage, level of documentation detail and reporting."
takeawaysAr:
  - "الاختبار جزء من عملية التطوير ويموّله أصحاب المصلحة، فيجب أن يلبّي احتياجات عملهم."
  - "ثماني مجموعات من العوامل تحدد طريقة الاختبار: أصحاب المصلحة، والفريق، ومجال العمل، والعوامل التقنية، وقيود المشروع، والمؤسسة، ودورة حياة التطوير، والأدوات."
  - "هذه العوامل تؤثر على استراتيجية الاختبار وتقنياته والأتمتة والتغطية ومستوى تفصيل التوثيق والتقارير."
terms:
  - en: "Test Strategy"
    ar: "استراتيجية الاختبار"
    def: "A description of how testing will be done to meet the test objectives under given circumstances."
    defAr: "وصف لطريقة تنفيذ الاختبار لتحقيق أهدافه ضمن ظروف معيّنة."
    match: ["Test Strategy", "test strategy"]
---
الاختبار لا يُنفَّذ في فراغ. أنشطة الاختبار جزء من عمليات التطوير في المؤسسة، ويموّلها أصحاب المصلحة. لذلك يجب أن تلبّي عملية الاختبار **احتياجات عملهم**، لا أن تُطبَّق بالطريقة نفسها في كل مكان.

### العوامل المؤثرة — Contextual Factors

يذكر المنهج ثماني مجموعات من العوامل التي تحدد طريقة تنفيذ الاختبار:

| Factor | أمثلة |
| --- | --- |
| Stakeholders | احتياجاتهم وتوقعاتهم ومتطلباتهم، ومدى استعدادهم للتعاون |
| Team members | مهاراتهم ومعرفتهم ومستوى خبرتهم، وتوفّرهم، واحتياجاتهم للتدريب |
| Business domain | مدى أهمية موضوع الاختبار، والمخاطر المحددة، واحتياجات السوق، والأنظمة القانونية الخاصة |
| Technical factors | نوع البرمجية، وبنية المنتج، والتقنيات المستخدمة |
| Project constraints | النطاق، والوقت، والميزانية، والموارد |
| Organizational factors | الهيكل التنظيمي، والسياسات القائمة، والممارسات المتّبعة |
| SDLC | ممارسات الهندسة وأساليب التطوير |
| Tools | توفّرها، وسهولة استخدامها، والتزامها بالمعايير |

### ماذا تغيّر هذه العوامل؟ — What These Factors Change

هذه العوامل تؤثر على قضايا كثيرة في الاختبار، منها:

- استراتيجية الاختبار.
- تقنيات الاختبار المستخدمة.
- درجة أتمتة الاختبار.
- مستوى التغطية المطلوب.
- مستوى تفصيل التوثيق الخاص بالاختبار.
- طريقة إعداد التقارير.

<figure class="gx-figure gx-spectrum" aria-label="Same feature, different context, different testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Hospital system</b><span>Strict regulation, high criticality: formal documentation, high coverage, independent testing.</span></div><div class="gx-spectrum-item"><b>Startup MVP</b><span>Tight time and budget: lighter documentation, exploratory testing, fast feedback.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Mature SaaS</b><span>DevOps pipeline: heavy automation, continuous testing, dashboard reporting.</span></div></div><figcaption>Same feature, different context, different testing.</figcaption></figure>

هذا تطبيق مباشر للمبدأ السادس: **الاختبار يعتمد على السياق.**

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A new tester moves from a fintech company with detailed test plans to a small agency with two-week projects. Bringing the same 40-page plan template would waste time. Understanding the new context first (constraints, team, client expectations) decides how much documentation and formality make sense.</p><p class="gx-ar" lang="ar" dir="rtl">مختبر جديد ينتقل من شركة تقنية مالية تعتمد خطط اختبار مفصّلة، إلى وكالة صغيرة مشاريعها مدتها أسبوعان. لو أحضر قالب الخطة نفسه المكوّن من 40 صفحة لأضاع الوقت. فهم السياق الجديد أولًا (القيود، والفريق، وتوقعات العميل) هو ما يحدد كم يلزم من التوثيق والرسمية.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">A K2 question may describe a project and ask which factor most influences a testing decision. Match the clue: deadlines and budget → project constraints; regulations and criticality → business domain; architecture and technology → technical factors.</p><p class="gx-ar" lang="ar" dir="rtl">قد يصف سؤال من مستوى K2 مشروعًا ويسأل أي عامل يؤثر أكثر على قرار اختبار معيّن. اربط الدليل بالعامل: المواعيد والميزانية ← قيود المشروع؛ الأنظمة القانونية ومدى الأهمية ← مجال العمل؛ البنية والتقنية ← العوامل التقنية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating "regulations" as an organizational factor. In the syllabus, specific legal regulations belong to the business domain; organizational factors are structure, policies and practices.</p><p class="gx-ar" lang="ar" dir="rtl">تصنيف «الأنظمة القانونية» كعامل تنظيمي. في المنهج، الأنظمة القانونية الخاصة تتبع مجال العمل؛ أما العوامل التنظيمية فهي الهيكل والسياسات والممارسات.</p></aside>

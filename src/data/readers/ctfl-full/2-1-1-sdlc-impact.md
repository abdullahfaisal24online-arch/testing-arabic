---
order: 1
slug: "2-1-1"
chapter: 2
group: "2.1"
section: "2.1.1"
title: "Impact of the Software Development Lifecycle on Testing"
titleAr: "أثر دورة حياة التطوير على الاختبار"
objectives: "FL-2.1.1 · K2"
minutes: 8
lo:
  FL-2.1.1: "Explain how the chosen software development lifecycle affects testing."
loAr:
  FL-2.1.1: "تشرح كيف تؤثر دورة حياة التطوير المختارة على الاختبار."
takeaways:
  - "Testing must fit the SDLC; the SDLC shapes the scope and timing of testing, documentation, techniques, automation and the tester's role."
  - "In sequential models, dynamic testing usually comes late because code arrives late; early phases focus on reviews, analysis and design."
  - "Iterative and incremental models deliver working increments, so static and dynamic testing can happen at all levels in every iteration, with fast feedback and heavy regression testing."
  - "Agile favours lightweight documentation, extensive automation and experience-based techniques."
takeawaysAr:
  - "الاختبار يجب أن يناسب دورة حياة التطوير؛ فهي تحدد نطاق الاختبار وتوقيته، والتوثيق، والتقنيات، والأتمتة، ودور المختبر."
  - "في النماذج المتسلسلة يأتي الاختبار الديناميكي عادة متأخرًا لأن الشيفرة تصل متأخرة؛ والمراحل المبكرة تركّز على المراجعات والتحليل والتصميم."
  - "النماذج التكرارية والتزايدية تسلّم أجزاء عاملة، فيمكن إجراء الاختبار الساكن والديناميكي في كل المستويات خلال كل دورة، مع تغذية راجعة سريعة واختبار انحدار مكثّف."
  - "Agile يفضّل التوثيق الخفيف والأتمتة الواسعة والتقنيات المبنية على الخبرة."
terms:
  - en: "Software Development Lifecycle"
    ar: "دورة حياة تطوير البرمجيات"
    def: "The activities performed at each stage in software development and how they relate to one another logically and chronologically."
    defAr: "الأنشطة التي تُنفّذ في كل مرحلة من تطوير البرمجيات، وعلاقتها ببعضها منطقيًا وزمنيًا."
    match: ["Software Development Lifecycle", "SDLC"]
  - en: "Sequential Development Model"
    ar: "نموذج التطوير المتسلسل"
    def: "A model in which development activities happen in a linear sequence, each phase starting after the previous one, such as Waterfall or the V-model."
    defAr: "نموذج تُنفّذ فيه أنشطة التطوير بتسلسل خطي، تبدأ كل مرحلة بعد السابقة، مثل الشلال (Waterfall) أو نموذج V."
  - en: "Iterative Development Model"
    ar: "نموذج التطوير التكراري"
    def: "A model in which the product is built in repeated cycles, each delivering a working increment that can be tested."
    defAr: "نموذج يُبنى فيه المنتج على دورات متكررة، تسلّم كل منها جزءًا عاملًا قابلًا للاختبار."
---
**دورة حياة تطوير البرمجيات (SDLC)** تمثيل مجرد لعملية التطوير: ما الأنشطة التي تحدث، وكيف ترتبط ببعضها زمنيًا ومنطقيًا. من أمثلتها: نماذج التطوير المتسلسلة كالشلال (Waterfall) ونموذج V، والنماذج التكرارية كالحلزوني (Spiral) والنماذج الأولية، والنماذج التزايدية كالعملية الموحّدة (Unified Process).

وهناك أيضًا أساليب وممارسات تطوير تعمل داخل هذه النماذج، مثل: التطوير المقاد بالاختبار وبالسلوك، وتطوير Agile مثل Scrum وKanban، وDevOps.

### ما الذي يتأثر بالـ SDLC؟ — What the SDLC Influences

الاختبار يجب أن يتكيّف مع الـ SDLC حتى ينجح. واختيار الـ SDLC يؤثر على:

- **نطاق أنشطة الاختبار وتوقيتها** (مثل مستويات الاختبار وأنواعه).
- **مستوى تفصيل** توثيق الاختبار.
- **اختيار تقنيات الاختبار** ونهجه.
- **مدى أتمتة** الاختبار.
- **دور المختبر ومسؤولياته.**

### النماذج المتسلسلة — Sequential Models

في المراحل الأولى يشارك المختبر عادة في **مراجعة المتطلبات** و**تحليل الاختبار** و**تصميمه**. أما الشيفرة القابلة للتشغيل فتُنشأ عادة في مراحل متأخرة، لذلك **لا يمكن إجراء الاختبار الديناميكي غالبًا إلا متأخرًا** في دورة الحياة.

### النماذج التكرارية والتزايدية — Iterative and Incremental Models

في بعض النماذج التكرارية والتزايدية يُفترض أن كل دورة تسلّم **نموذجًا أوليًا عاملًا أو جزءًا من المنتج**. هذا يعني أنه في كل دورة يمكن إجراء الاختبار **الساكن والديناميكي** على كل مستويات الاختبار.

ولأن الأجزاء تُسلَّم بشكل متكرر، يحتاج الفريق إلى **تغذية راجعة سريعة** و**اختبار انحدار مكثّف**.

### تطوير Agile — Agile Development

تطوير البرمجيات بأسلوب Agile يفترض أن التغيير قد يحدث في أي وقت خلال المشروع. لذلك:

- يُفضَّل **توثيق خفيف** لمخرجات العمل.
- تُستخدم **أتمتة اختبار واسعة** لتسهيل اختبار الانحدار.
- معظم الاختبار اليدوي يُنفَّذ بـ **تقنيات مبنية على الخبرة** (الفصل 4.4)، لأنها لا تحتاج تحليلًا وتصميمًا مسبقًا واسعًا.

<figure class="gx-figure gx-spectrum" aria-label="How the lifecycle changes testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Sequential (Waterfall, V-model)</b><span>Early: reviews, analysis, design. Dynamic testing late, when code exists.</span></div><div class="gx-spectrum-item"><b>Iterative / incremental</b><span>Static and dynamic testing in every iteration, fast feedback, lots of regression.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Agile</b><span>Lightweight documentation, extensive automation, experience-based techniques.</span></div></div><figcaption>How the lifecycle changes testing.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In a V-model government project, testers spend the first months reviewing requirement documents and writing system test cases. In a Scrum product team, the same tester tests a new increment every two weeks and relies on an automated regression suite that runs on every commit.</p><p class="gx-ar" lang="ar" dir="rtl">في مشروع حكومي يتبع نموذج V، يقضي المختبرون الأشهر الأولى في مراجعة وثائق المتطلبات وكتابة حالات اختبار النظام. أما في فريق منتج يعمل بـ Scrum، فيختبر المختبر نفسه جزءًا جديدًا كل أسبوعين، ويعتمد على مجموعة اختبارات انحدار مؤتمتة تعمل مع كل Commit.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">If a question asks why dynamic testing starts late in a project, look for "sequential model: executable code is created late". If it asks why regression testing is heavy, look for "iterative/incremental: frequent increments".</p><p class="gx-ar" lang="ar" dir="rtl">إذا سأل السؤال لماذا يبدأ الاختبار الديناميكي متأخرًا في مشروع ما، ابحث عن «نموذج متسلسل: الشيفرة القابلة للتشغيل تُنشأ متأخرًا». وإذا سأل لماذا اختبار الانحدار مكثّف، ابحث عن «تكراري/تزايدي: تسليمات متكررة».</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking testers have nothing to do early in a sequential project. They review requirements and do test analysis and design long before there is code to run.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن المختبرين لا عمل لهم في بداية المشروع المتسلسل. هم يراجعون المتطلبات ويقومون بتحليل الاختبار وتصميمه قبل وجود أي شيفرة قابلة للتشغيل بوقت طويل.</p></aside>

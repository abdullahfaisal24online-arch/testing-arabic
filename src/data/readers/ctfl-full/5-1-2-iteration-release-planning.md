---
order: 2
slug: "5-1-2"
chapter: 5
group: "5.1"
section: "5.1.2"
title: "Tester's Contribution to Iteration and Release Planning"
titleAr: "مساهمة المختبر في تخطيط الدورات والإصدارات"
objectives: "FL-5.1.2 · K1"
minutes: 7
lo:
  FL-5.1.2: "Recognise how a tester adds value to iteration and release planning."
loAr:
  FL-5.1.2: "تتعرّف على القيمة التي يضيفها المختبر في تخطيط الدورات والإصدارات."
takeaways:
  - "Release planning looks ahead to the release of a product, defines and re-defines the product backlog, and may refine larger stories into smaller ones."
  - "In release planning, testers help write testable stories and acceptance criteria, take part in project and quality risk analyses, estimate test effort, determine the test approach and plan testing for the release."
  - "Iteration planning looks ahead to the end of one iteration and is concerned with the iteration backlog."
  - "In iteration planning, testers take part in detailed risk analysis of stories, determine testability, break stories into tasks (especially testing tasks), estimate test effort and identify functional and non-functional aspects to test."
takeawaysAr:
  - "تخطيط الإصدار ينظر إلى إطلاق المنتج، ويعرّف قائمة المنتج ويعيد تعريفها، وقد يقسّم القصص الكبيرة إلى أصغر."
  - "في تخطيط الإصدار يساعد المختبرون في كتابة قصص ومعايير قبول قابلة للاختبار، ويشاركون في تحليل مخاطر المشروع والجودة، ويقدّرون جهد الاختبار، ويحددون نهج الاختبار، ويخططون الاختبار للإصدار."
  - "تخطيط الدورة ينظر إلى نهاية دورة واحدة، ويهتم بقائمة الدورة."
  - "في تخطيط الدورة يشارك المختبرون في تحليل مخاطر القصص بالتفصيل، وتحديد قابليتها للاختبار، وتقسيمها إلى مهام (خاصة مهام الاختبار)، وتقدير جهد الاختبار، وتحديد الجوانب الوظيفية وغير الوظيفية التي ستُختبر."
terms:
  - en: "Release Planning"
    ar: "تخطيط الإصدار"
    def: "Planning that looks ahead to the release of a product and defines and refines the product backlog."
    defAr: "تخطيط ينظر إلى إطلاق المنتج، ويعرّف قائمة المنتج ويحسّنها."
  - en: "Iteration Planning"
    ar: "تخطيط الدورة"
    def: "Planning that looks ahead to the end of a single iteration and is concerned with the iteration backlog."
    defAr: "تخطيط ينظر إلى نهاية دورة واحدة، ويهتم بقائمة تلك الدورة."
---
في دورات حياة التطوير التكرارية (iterative SDLCs) يحدث عادةً نوعان من التخطيط: **تخطيط الإصدار (Release Planning)** و**تخطيط الدورة (Iteration Planning)**. والمختبر لا ينتظر حتى تُكتب الشيفرة، بل يضيف قيمة في المستويين. في **تطبيق التوصيل**، يصدر الفريق نسخة إلى المتاجر كل 2 sprints، فتخطيط الإصدار ينظر إلى هذين الـ sprints معًا، وتخطيط الدورة ينظر إلى sprint واحد مدته أسبوعان.

### تخطيط الإصدار — Release Planning

ينظر تخطيط الإصدار إلى **إطلاق المنتج**، ويعرّف **قائمة المنتج (Product Backlog)** ويعيد تعريفها، وقد يشمل **تقسيم قصص المستخدم الكبيرة إلى قصص أصغر**. مثلًا، قصة «كزبون أريد استخدام الكوبونات» كبيرة جدًا، فتُقسَّم إلى: كوبون بنسبة مئوية، وكوبون بمبلغ ثابت، ورفض الكوبون المنتهي. ويقول السيليبس إن تخطيط الإصدار **أساس نهج الاختبار وخطة الاختبار عبر كل الدورات**، لأن القرارات الكبيرة تُتخذ هنا مرة واحدة للإصدار كله.

ما يفعله المختبرون في تخطيط الإصدار، ولماذا:

- **يشاركون في كتابة قصص مستخدم ومعايير قبول قابلة للاختبار** (القسم 4.5). معيار مثل «الخصم يعمل بشكل جيد» لا يمكن اختباره، أما «كوبون 10% على طلب 30.00 دينارًا يُنقص قيمة الطلب إلى 27.00 دينارًا» فيمكن.
- **يشاركون في تحليل مخاطر المشروع ومخاطر الجودة** (القسم 5.2)، مثل خطر تأخر بيئة بوابة الدفع، أو خطر خصم الكوبون مرتين.
- **يقدّرون جهد الاختبار** المرتبط بالقصص (القسم 5.1.4)، حتى يعكس حجم الإصدار عمل الاختبار أيضًا لا التطوير وحده.
- **يحددون نهج الاختبار**: ما المستويات والتقنيات والأتمتة التي ستُستخدم عبر الدورات.
- **يخططون الاختبار للإصدار**، مثل موعد اختبار الانحدار الكامل قبل النشر.

### تخطيط الدورة — Iteration Planning

ينظر تخطيط الدورة إلى **نهاية دورة واحدة**، ويهتم بـ **قائمة الدورة (Iteration Backlog)**، أي القصص التي التزم بها الفريق في هذا الـ sprint. هنا يصبح العمل أكثر تفصيلًا:

- **يشاركون في تحليل المخاطر التفصيلي لقصص المستخدم**: ما الذي قد يفشل تحديدًا في قصة «كوبون بمبلغ ثابت»؟ مثلًا أن يصبح الإجمالي سالبًا.
- **يحددون قابلية القصص للاختبار (testability)**: هل معايير القبول واضحة؟ وهل توجد بيانات كوبونات منتهية في بيئة الاختبار؟
- **يقسّمون القصص إلى مهام**، خاصة **مهام الاختبار**: تصميم الحالات، وتجهيز البيانات، وأتمتة اختبار الـ API.
- **يقدّرون جهد الاختبار لكل مهام الاختبار**.
- **يحددون ويحسّنون الجوانب الوظيفية وغير الوظيفية** لموضوع الاختبار، مثل صحة الخصم (وظيفي) وزمن استجابة التحقق من الكوبون (غير وظيفي).

### لماذا يضيف المختبر قيمة؟ — Why the Tester Adds Value

مشاركة المختبر في التخطيط تطبيق مباشر لمبدأ **الاختبار المبكر**: السؤال «كيف سنختبر هذا؟» عند كتابة القصة يكشف الغموض قبل أن يتحول إلى defect في الشيفرة. كما أن تقديرات الفريق تصبح أكثر واقعية لأنها تشمل جهد الاختبار، ومخاطر الجودة تُرى من زاوية من يبحث عن الفشل لا من زاوية من يبني فقط.

<figure class="gx-figure gx-spectrum" aria-label="Release planning vs iteration planning."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Release planning</b><span>Looks ahead to the release. Product backlog. Testable stories, risk analysis, test approach, release test plan.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Iteration planning</b><span>Looks ahead to the end of one iteration. Iteration backlog. Detailed risk, testability, testing tasks, estimates.</span></div></div><figcaption>Release planning vs iteration planning.</figcaption></figure>

### لا تخلط بين — Don't Confuse

| | Release planning | Iteration planning |
| --- | --- | --- |
| Horizon | The release | The end of one iteration |
| Backlog | Product backlog | Iteration backlog |
| Risk analysis | Project and quality risks | Detailed risk analysis of stories |
| Estimation | Test effort for user stories | Test effort for all testing tasks |
| Typical tester output | Test approach, release test plan | Testing tasks, testability, functional and non-functional aspects |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: match the activity to the planning level. "Determining the test approach" and "planning testing for the release" → release planning. "Breaking stories into testing tasks" and "determining testability" → iteration planning. Estimating test effort appears in both.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: اربط النشاط بمستوى التخطيط. «تحديد نهج الاختبار» و«تخطيط الاختبار للإصدار» ← تخطيط الإصدار. «تقسيم القصص إلى مهام اختبار» و«تحديد القابلية للاختبار» ← تخطيط الدورة. وتقدير جهد الاختبار يظهر في الاثنين.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking testers only join once stories are in the sprint. Their input during release planning (testable stories, risks, approach) is part of the syllabus.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن المختبرين ينضمون فقط عندما تدخل القصص الـ sprint. مساهمتهم في تخطيط الإصدار (قصص قابلة للاختبار، والمخاطر، والنهج) جزء من المنهج.</p></aside>

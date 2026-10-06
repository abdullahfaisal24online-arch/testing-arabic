---
order: 7
slug: "1-4-1"
chapter: 1
group: "1.4"
section: "1.4.1"
title: "Test Activities and Tasks"
titleAr: "أنشطة الاختبار ومهامه"
objectives: "FL-1.4.1 · K2"
minutes: 12
lo:
  FL-1.4.1: "Summarise the test activities and the tasks in each one."
loAr:
  FL-1.4.1: "تلخّص أنشطة الاختبار والمهام في كل منها."
labs: ["LAB-1.4.1"]
takeaways:
  - "The test process has seven groups of activities: planning, monitoring and control, analysis, design, implementation, execution and completion."
  - "They look sequential, but in practice they are often iterative or run in parallel, and they are tailored to the project."
  - "Test analysis answers 'what to test?' (test conditions); test design answers 'how to test?' (test cases)."
  - "Test implementation prepares everything needed to run; test execution runs the tests and compares actual with expected results."
  - "Test completion happens at milestones: archive testware, close environments, capture lessons learned and report."
takeawaysAr:
  - "عملية الاختبار فيها سبع مجموعات أنشطة: التخطيط، والمراقبة والتحكم، والتحليل، والتصميم، والتجهيز، والتنفيذ، والإكمال."
  - "تبدو متسلسلة، لكنها عمليًا كثيرًا ما تكون تكرارية أو متوازية، وتُكيَّف حسب المشروع."
  - "تحليل الاختبار يجيب «ماذا نختبر؟» (شروط الاختبار)؛ وتصميم الاختبار يجيب «كيف نختبر؟» (حالات الاختبار)."
  - "تجهيز الاختبار يُعدّ كل ما يلزم للتشغيل؛ وتنفيذ الاختبار يشغّل الاختبارات ويقارن النتائج الفعلية بالمتوقعة."
  - "إكمال الاختبار يحدث عند المحطات الرئيسية: أرشفة مخرجات الاختبار، وإغلاق البيئات، وتوثيق الدروس المستفادة، والتقرير."
terms:
  - en: "Test Process"
    ar: "عملية الاختبار"
    def: "The set of interrelated activities that make up testing: planning, monitoring and control, analysis, design, implementation, execution and completion."
    defAr: "مجموعة الأنشطة المترابطة التي يتكوّن منها الاختبار: التخطيط، والمراقبة والتحكم، والتحليل، والتصميم، والتجهيز، والتنفيذ، والإكمال."
  - en: "Test Basis"
    ar: "أساس الاختبار"
    def: "The body of knowledge used as the basis for test analysis and design, such as requirements, user stories or designs."
    defAr: "مجموعة المعلومات التي يُبنى عليها تحليل الاختبار وتصميمه، مثل المتطلبات وقصص المستخدم والتصاميم."
    match: ["Test Basis", "test basis"]
  - en: "Test Condition"
    ar: "شرط الاختبار"
    def: "A testable aspect of a component or system identified as a basis for testing. Answers 'what to test'."
    defAr: "جانب قابل للاختبار في مكوّن أو نظام، يُحدَّد كأساس للاختبار. يجيب عن سؤال «ماذا نختبر؟»."
    match: ["Test Condition", "test condition", "test conditions"]
  - en: "Test Case"
    ar: "حالة الاختبار"
    def: "A set of preconditions, inputs, actions, expected results and postconditions, developed from test conditions."
    defAr: "مجموعة من الشروط المسبقة والمدخلات والإجراءات والنتائج المتوقعة والشروط اللاحقة، مبنية على شروط الاختبار."
    match: ["Test Case", "test case", "test cases"]
  - en: "Test Procedure"
    ar: "إجراء الاختبار"
    def: "A sequence of test cases in execution order, with any actions needed to set up preconditions and wrap up afterwards."
    defAr: "تسلسل من حالات الاختبار بترتيب التنفيذ، مع أي إجراءات لازمة لتهيئة الشروط المسبقة والإنهاء بعدها."
  - en: "Test Suite"
    ar: "مجموعة الاختبارات"
    def: "A set of test scripts or test procedures to be executed in a specific test run."
    defAr: "مجموعة من الـ test scripts أو إجراءاته تُنفَّذ في دورة تشغيل محددة."
  - en: "Coverage"
    ar: "التغطية"
    def: "The degree to which specified coverage items are exercised by a test suite, expressed as a percentage."
    defAr: "مدى تغطية مجموعة اختبارات لعناصر التغطية المحددة، ويُعبَّر عنها كنسبة مئوية."
    match: ["Coverage", "coverage"]
---
الاختبار ليس عملًا عشوائيًا، ولا يحدث بمعزل عن باقي المشروع؛ بل هو جزء لا يتجزأ من عمليات التطوير في المؤسسة. يتكوّن عادة من **مجموعات رئيسية من الأنشطة**، تشكّل معًا **عملية الاختبار (Test Process)**.

<figure class="gx-figure" aria-label="The seven groups of test activities. Planning and monitoring/control run alongside all the others."><div class="gx-flow-row"><span class="gx-flow-node gx-flow-node--accent">Planning</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Monitoring & control</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Analysis<small>what to test</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Design<small>how to test</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Implementation<small>get ready</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Execution<small>run & compare</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Completion<small>close & learn</small></span></div><figcaption>The seven groups of test activities. Planning and monitoring/control run alongside all the others.</figcaption></figure>

تبدو هذه الأنشطة متسلسلة، لكنها في الواقع **كثيرًا ما تكون تكرارية أو تُنفَّذ بالتوازي**. في فريق Agile مثلًا قد يحدث التحليل والتصميم والتنفيذ كلها داخل الـ sprint الواحد، وتتكرر مع كل قصة. كما أن هذه الأنشطة **تحتاج تكييفًا** حسب النظام والمشروع.

### تخطيط الاختبار — Test Planning

يشمل تحديد **أهداف الاختبار**، ثم اختيار النهج الذي يحقق هذه الأهداف بأفضل شكل ضمن قيود السياق. ستتعمق فيه في القسم 5.1.

### مراقبة الاختبار والتحكم فيه — Test Monitoring and Test Control

- **المراقبة (Monitoring):** فحص مستمر لكل أنشطة الاختبار، ومقارنة التقدم الفعلي بالخطة.
- **التحكم (Control):** اتخاذ الإجراءات اللازمة لتحقيق أهداف الاختبار، مثل إعادة توزيع الجهد عند التأخر.

ستتعمق فيهما في القسم 5.3.

### تحليل الاختبار — Test Analysis

يجيب عن سؤال: **«ماذا نختبر؟»** ويشمل:

- تحليل **أساس الاختبار (Test Basis)** لتحديد الخصائص القابلة للاختبار.
- تحديد **شروط الاختبار (Test Conditions)** المرتبطة بها وترتيب أولوياتها، مع مراعاة المخاطر ومستوياتها.
- تقييم أساس الاختبار وموضوع الاختبار لاكتشاف الـ defects فيهما، وتقييم قابليتهما للاختبار.

غالبًا يُدعم التحليل باستخدام تقنيات الاختبار، ويُقاس بمعايير تغطية قابلة للقياس.

### تصميم الاختبار — Test Design

يجيب عن سؤال: **«كيف نختبر؟»** ويشمل:

- تحويل شروط الاختبار إلى **حالات اختبار (Test Cases)** ومخرجات أخرى، مثل مواثيق الاختبار (Test Charters).
- تحديد **عناصر التغطية (Coverage Items)** التي توجّه اختيار مدخلات حالات الاختبار.
- تحديد متطلبات بيانات الاختبار.
- تصميم بيئة الاختبار، وتحديد البنية التحتية والأدوات اللازمة.

تقنيات الاختبار (الفصل الرابع) هي الأداة الأساسية هنا.

### تجهيز الاختبار — Test Implementation

يشمل إعداد أو الحصول على كل ما يلزم لتنفيذ الاختبارات:

- إنشاء بيانات الاختبار.
- ترتيب حالات الاختبار في **إجراءات اختبار (Test Procedures)**، وتجميعها غالبًا في **مجموعات اختبارات (Test Suites)**.
- كتابة الـ test scripts اليدوية والمؤتمتة.
- ترتيب أولويات إجراءات الاختبار ووضعها في **جدول تنفيذ** يضمن كفاءة التشغيل.
- بناء بيئة الاختبار والتأكد من أنها مُعدّة بشكل صحيح.

### تنفيذ الاختبار — Test Execution

يشمل تشغيل الاختبارات وفق جدول التنفيذ:

- التشغيل قد يكون يدويًا أو مؤتمتًا، وبأشكال مختلفة مثل الاختبار المستمر أو جلسات الاختبار الثنائي (Pair Testing).
- **مقارنة النتائج الفعلية بالنتائج المتوقعة.**
- تسجيل نتائج الاختبار.
- تحليل الحالات الشاذة (Anomalies) لتحديد أسبابها المحتملة.
- الإبلاغ عن الحالات الشاذة بناءً على الأعطال الملاحظة.

### إكمال الاختبار — Test Completion

يحدث عادة عند المحطات الرئيسية في المشروع، مثل الإطلاق أو نهاية دورة تكرار أو اكتمال مستوى اختبار. ويشمل:

- إنشاء طلبات تغيير أو عناصر في قائمة المنتج (Product Backlog) للـ defects التي لم تُحل.
- تحديد مخرجات الاختبار التي قد تفيد مستقبلًا، وأرشفتها أو تسليمها للفرق المعنية.
- إغلاق بيئة الاختبار وإعادتها لحالة متفق عليها.
- تحليل أنشطة الاختبار لاستخلاص الدروس المستفادة وتحسينات للمستقبل.
- إعداد **تقرير إكمال الاختبار** وإرساله لأصحاب المصلحة.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Analysis = what to test (test conditions). Design = how to test (test cases). Implementation = get everything ready (procedures, data, environment). Execution = run, compare, log, report.</p><p class="gx-ar" lang="ar" dir="rtl">التحليل = ماذا نختبر (شروط الاختبار). التصميم = كيف نختبر (حالات الاختبار). التجهيز = إعداد كل شيء (الإجراءات، البيانات، البيئة). التنفيذ = شغّل، قارن، سجّل، أبلغ.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Story: "A user can reset their password by email." Analysis: test conditions such as valid email, unknown email, expired link. Design: concrete test cases with inputs and expected results, plus test data needs. Implementation: create test accounts, set up a mail catcher, order the cases. Execution: run them, compare results, log a defect if the link never expires.</p><p class="gx-ar" lang="ar" dir="rtl">القصة: «يستطيع المستخدم إعادة تعيين كلمة المرور عبر الإيميل». التحليل: شروط اختبار مثل إيميل صحيح، وإيميل غير مسجّل، ورابط منتهي الصلاحية. التصميم: حالات اختبار محددة بمدخلات ونتائج متوقعة، مع متطلبات البيانات. التجهيز: إنشاء حسابات اختبار، وتهيئة أداة لالتقاط الإيميلات، وترتيب الحالات. التنفيذ: تشغيلها، ومقارنة النتائج، وتسجيل defect إذا كان الرابط لا تنتهي صلاحيته أبدًا.</p></aside>

<section class="gx-lab" data-lab="LAB-1.4.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Map One Story Through All Seven Activities</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · مرّر قصة واحدة على الأنشطة السبعة</span></span><span class="gx-lab-meta">LAB-1.4.1 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> see the whole test process on a single user story from your work.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> رؤية عملية الاختبار كاملة على قصة مستخدم واحدة من عملك.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Pick one user story or feature you tested recently.</span><span class="gx-ar" lang="ar" dir="rtl">اختر قصة مستخدم أو ميزة اختبرتها مؤخرًا.</span></li><li><span class="gx-en" lang="en" dir="ltr">For each of the seven activities, write what was actually done and by whom.</span><span class="gx-ar" lang="ar" dir="rtl">لكل نشاط من الأنشطة السبعة، اكتب ما تم فعلًا ومن قام به.</span></li><li><span class="gx-en" lang="en" dir="ltr">Mark activities that were skipped or done informally (often analysis and completion).</span><span class="gx-ar" lang="ar" dir="rtl">علّم الأنشطة التي تم تجاوزها أو نُفّذت بشكل غير رسمي (غالبًا التحليل والإكمال).</span></li><li><span class="gx-en" lang="en" dir="ltr">Note where activities overlapped or repeated instead of following a strict order.</span><span class="gx-ar" lang="ar" dir="rtl">لاحظ أين تداخلت الأنشطة أو تكررت بدل أن تتبع ترتيبًا صارمًا.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You can place each real task under the right activity (for example, preparing test accounts is implementation, not design), and you can explain why skipping analysis or completion carries a risk.</span><span class="gx-ar" lang="ar" dir="rtl">تستطيع وضع كل مهمة حقيقية تحت النشاط الصحيح (مثلًا: تجهيز حسابات الاختبار تجهيز وليس تصميمًا)، وتستطيع أن تشرح لماذا يحمل تجاوز التحليل أو الإكمال خطرًا.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Expect questions that give a task and ask which activity it belongs to. Classic traps: identifying coverage items is design; defining test data requirements is design, but creating the data is implementation; comparing actual and expected results is execution; archiving testware is completion.</p><p class="gx-ar" lang="ar" dir="rtl">توقّع أسئلة تعطيك مهمة وتسأل لأي نشاط تنتمي. فخاخ معروفة: تحديد عناصر التغطية تصميم؛ وتحديد متطلبات بيانات الاختبار تصميم، لكن إنشاء البيانات تجهيز؛ ومقارنة النتائج الفعلية بالمتوقعة تنفيذ؛ وأرشفة مخرجات الاختبار إكمال.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking the activities must happen strictly one after another. They often overlap, repeat in iterations, or run in parallel, and each project tailors them.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الأنشطة يجب أن تحدث واحدًا بعد الآخر بشكل صارم. كثيرًا ما تتداخل، أو تتكرر في دورات، أو تُنفَّذ بالتوازي، وكل مشروع يكيّفها حسب حاجته.</p></aside>

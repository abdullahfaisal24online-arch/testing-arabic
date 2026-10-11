---
order: 7
slug: "1-4-1"
chapter: 1
group: "1.4"
section: "1.4.1"
title: "Test Activities and Tasks"
titleAr: "أنشطة الاختبار ومهامه"
objectives: "FL-1.4.1 · K2"
minutes: 15
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
  - "Test analysis also evaluates the test basis and the test object for defects and testability; in execution, anomalies are analysed for their likely causes before being reported."
takeawaysAr:
  - "عملية الاختبار فيها سبع مجموعات أنشطة: التخطيط، والمراقبة والتحكم، والتحليل، والتصميم، والتجهيز، والتنفيذ، والإكمال."
  - "تبدو متسلسلة، لكنها عمليًا كثيرًا ما تكون تكرارية أو متوازية، وتُكيَّف حسب المشروع."
  - "تحليل الاختبار يجيب «ماذا نختبر؟» (شروط الاختبار)؛ وتصميم الاختبار يجيب «كيف نختبر؟» (حالات الاختبار)."
  - "تجهيز الاختبار يُعدّ كل ما يلزم للتشغيل؛ وتنفيذ الاختبار يشغّل الاختبارات ويقارن النتائج الفعلية بالمتوقعة."
  - "إكمال الاختبار يحدث عند المحطات الرئيسية: أرشفة مخرجات الاختبار، وإغلاق البيئات، وتوثيق الدروس المستفادة، والتقرير."
  - "تحليل الاختبار يقيّم أيضًا أساس الاختبار وموضوع الاختبار بحثًا عن الـ defects وتقييمًا لقابلية الاختبار؛ وفي التنفيذ تُحلَّل الحالات الشاذة لمعرفة أسبابها المحتملة قبل الإبلاغ عنها."
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
الاختبار يعتمد على السياق، لكن السيليبس يلاحظ أن هناك، على مستوى عالٍ، **مجموعات مشتركة من أنشطة الاختبار** إذا غابت يصبح تحقيق أهداف الاختبار أقل احتمالًا. هذه المجموعات تشكّل معًا **عملية الاختبار (Test Process)**. أما أي الأنشطة تدخل في العملية، وكيف تُنفَّذ، ومتى تحدث، فيُقرَّر عادة أثناء **تخطيط الاختبار** للموقف المحدد (القسم 5.1). والمعيار **ISO/IEC/IEEE 29119-2** يقدّم معلومات إضافية عنها.

في هذا القسم سنتابع قصة واحدة من تطبيق التوصيل عبر الأنشطة السبعة كلها: «بصفتي زبونًا، أريد إدخال كوبون خصم عند الدفع لأحصل على سعر أقل». قواعد الكوبون معروفة: نسبة مئوية أو مبلغ ثابت، وكوبون واحد لكل طلب، وتاريخ انتهاء صلاحية. الفريق يعمل بـ sprints مدتها أسبوعان، ويُطلق التطبيق للمتاجر كل 2 sprints.

<figure class="gx-figure" aria-label="The seven groups of test activities. Planning and monitoring/control run alongside all the others."><div class="gx-flow-row"><span class="gx-flow-node gx-flow-node--accent">Planning</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Monitoring & control</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Analysis<small>what to test</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Design<small>how to test</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Implementation<small>get ready</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Execution<small>run & compare</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Completion<small>close & learn</small></span></div><figcaption>The seven groups of test activities. Planning and monitoring/control run alongside all the others.</figcaption></figure>

### متسلسلة على الورق، متداخلة في الواقع — Iterative and Parallel

تبدو الأنشطة كأنها تتبع ترتيبًا منطقيًا، لكنها **كثيرًا ما تُنفَّذ بشكل تكراري أو متوازٍ**. في فريق التوصيل يحدث التحليل والتصميم والتنفيذ داخل الـ sprint الواحد، ويتكرر ذلك مع كل قصة، والمراقبة والتحكم يعملان طوال الوقت. ويؤكد السيليبس أن هذه الأنشطة **تحتاج تكييفًا** حسب النظام والمشروع: فريق صغير قد يكتفي بخطة من صفحة واحدة، ونظام طبي يحتاج توثيقًا رسميًا.

### تخطيط الاختبار — Test Planning

يتكون من **تحديد أهداف الاختبار**، ثم **اختيار النهج** الذي يحقق هذه الأهداف بأفضل شكل ضمن القيود التي يفرضها السياق العام. الهدف أولًا ثم الطريقة، لأن النهج الجيد لهدف ما قد يكون سيئًا لهدف آخر.

في قصة الكوبون: الهدف هو «اكتساب الثقة بأن حساب الخصم صحيح قبل إطلاق المتاجر». والقيود: مختبران فقط، و sprint من أسبوعين، وبوابة دفع خارجية لا تتوفر إلا كبيئة تجريبية. فيختار الفريق نهجًا يجمع اختبارات API مؤتمتة لحساب الخصم تعمل في الـ CI، مع جلسة استكشافية لواجهة الدفع. (القسم 5.1).

### مراقبة الاختبار والتحكم فيه — Test Monitoring and Test Control

- **المراقبة (Test Monitoring):** فحص **مستمر** لكل أنشطة الاختبار، و**مقارنة التقدم الفعلي بالخطة**.
- **التحكم (Test Control):** **اتخاذ الإجراءات اللازمة** لتحقيق أهداف الاختبار.

المراقبة وحدها مجرد ملاحظة؛ قيمتها تظهر عندما يتبعها تحكم. في اليوم السادس من الـ sprint تكشف المراقبة أن 40% فقط من الاختبارات المخطط لها نُفّذت، لأن البيئة التجريبية لبوابة الدفع متوقفة منذ يومين. والتحكم هو القرار: إعادة ترتيب الأولويات لتنفيذ اختبارات الكوبون التي لا تحتاج البوابة أولًا، وإبلاغ مالك المنتج بالخطر على موعد الإطلاق. التفاصيل في القسم 5.3.

### تحليل الاختبار — Test Analysis

يجيب عن سؤال **«ماذا نختبر؟»** بصيغة **معايير تغطية قابلة للقياس**. ويشمل:

1. **تحليل أساس الاختبار (Test Basis)** لتحديد الخصائص القابلة للاختبار. أساس الاختبار هنا هو القصة ومعايير قبولها وقواعد الكوبون.
2. **تعريف شروط الاختبار (Test Conditions)** المرتبطة بها **وترتيب أولوياتها** مع مراعاة المخاطر ومستوياتها (القسم 5.2). مثل: «الكوبون بالنسبة المئوية يُنقص الإجمالي بشكل صحيح»، و«الكوبون المنتهي يُرفض»، و«الكوبون الثاني في الطلب نفسه يُرفض». شروط الحساب تأخذ أولوية عالية لأن الخطأ فيها يعني خسارة مال.
3. **تقييم أساس الاختبار وموضوع الاختبار** لاكتشاف الـ defects فيهما وتقييم **قابليتهما للاختبار (Testability)**. يلاحظ المختبر أن القصة لا تقول هل يُفحص الحد الأدنى للطلب (5.00 دنانير) قبل الخصم أم بعده؛ هذا defect في أساس الاختبار يُكتشف قبل كتابة أي شيفرة، فيكون إصلاحه رخيصًا. ويلاحظ أن تاريخ الانتهاء لا يمكن التحكم فيه في بيئة الاختبار، وهذه مشكلة قابلية اختبار.

وغالبًا يُدعم التحليل **بتقنيات الاختبار** (الفصل 4).

### تصميم الاختبار — Test Design

يجيب عن سؤال **«كيف نختبر؟»**. ويشمل:

- **تحويل شروط الاختبار إلى حالات اختبار (Test Cases)** ومخرجات اختبار أخرى، مثل **مواثيق الاختبار (Test Charters)**.
- **تحديد عناصر التغطية (Coverage Items)**، وهي التي توجّه اختيار مدخلات حالات الاختبار. شرط «الكوبون المنتهي يُرفض» يتحول بتحليل القيم الحدّية إلى عناصر تغطية: كوبون ينتهي اليوم، وكوبون انتهى أمس.
- **تحديد متطلبات بيانات الاختبار**: نحتاج كوبونًا بالنسبة وآخر بمبلغ ثابت، وكوبونًا منتهيًا، وحسابًا لديه طلب سابق.
- **تصميم بيئة الاختبار** وتحديد **البنية التحتية والأدوات** اللازمة: بيئة staging متصلة ببوابة الدفع التجريبية، مع إمكانية تغيير تاريخ الخادم.

### تجهيز الاختبار — Test Implementation

يشمل **إنشاء أو الحصول على** مخرجات الاختبار اللازمة للتنفيذ، مثل بيانات الاختبار. ولاحظ الفرق: التصميم **حدّد** ما نحتاجه من بيانات، والتجهيز **ينشئها فعلًا** في قاعدة البيانات. ويشمل أيضًا:

- تنظيم حالات الاختبار في **إجراءات اختبار (Test Procedures)**، وتجميعها غالبًا في **مجموعات اختبارات (Test Suites)**، مثل «مجموعة اختبارات الكوبون».
- إنشاء **الـ test scripts اليدوية والمؤتمتة**.
- ترتيب أولويات الإجراءات ووضعها في **جدول تنفيذ الاختبار (Test Execution Schedule)** لتنفيذ فعّال (القسم 5.1.5): اختبارات الحساب عالية المخاطر أولًا.
- **بناء بيئة الاختبار والتحقق من أنها مُعدّة بشكل صحيح**. فالبيئة المعطوبة تُنتج نتائج فاشلة يُظن أنها defects.

### تنفيذ الاختبار — Test Execution

يشمل **تشغيل الاختبارات وفق جدول التنفيذ**، وكل تشغيل يسمّى **دورة تشغيل (Test Run)**. وقد يكون التنفيذ يدويًا أو مؤتمتًا، ويأخذ أشكالًا كثيرة منها **الاختبار المستمر (Continuous Testing)**، كتشغيل اختبارات الكوبون مع كل commit في الـ CI، و**جلسات الاختبار الثنائي (Pair Testing)**.

في التنفيذ تُقارَن **النتائج الفعلية بالنتائج المتوقعة**، وتُسجَّل النتائج. وعندما تظهر **حالة شاذة (Anomaly)**، أي اختلاف بين الفعلي والمتوقع، **تُحلَّل لتحديد سببها المحتمل**. مثلًا: طلب قيمته 20.00 دينارًا مع كوبون 10% أصبح 18.00 وأضيفت له رسوم توصيل 1.50. defect في الشيفرة، أم خطأ في الحالة، أم غموض في المتطلب؟ هذا التحليل هو ما يسمح **بالإبلاغ عن الحالات الشاذة بناءً على الأعطال الملاحظة** (القسم 5.5)، بدل إرسال تقارير خاطئة.

### إكمال الاختبار — Test Completion

يحدث عادة عند **المحطات الرئيسية** في المشروع: الإطلاق، أو نهاية دورة تكرار، أو اكتمال مستوى اختبار. في تطبيق التوصيل: عند كل إطلاق. ويشمل:

- إنشاء **طلبات تغيير أو عناصر في قائمة المنتج (Product Backlog)** لأي defects لم تُحل: خلل بسيط في محاذاة الخصم في الواجهة العربية يتحول إلى عنصر في القائمة.
- تحديد مخرجات الاختبار التي قد تفيد مستقبلًا، و**أرشفتها أو تسليمها للفرق المعنية**: scripts الكوبون المؤتمتة تنضم إلى مجموعة اختبارات الانحدار.
- **إغلاق بيئة الاختبار وإعادتها إلى حالة متفق عليها**: حذف كوبونات الاختبار من staging.
- **تحليل أنشطة الاختبار** لاستخلاص الدروس المستفادة وتحسينات للتكرارات أو الإصدارات أو المشاريع القادمة (القسم 2.1.6): «اكتشفنا غموض الحد الأدنى متأخرًا؛ لنُشرك المختبر في جلسات تحسين القصص».
- إنشاء **تقرير إكمال الاختبار** وإيصاله إلى أصحاب المصلحة.

تجاوز الإكمال يعني أن الـ defects المؤجلة تُنسى والأخطاء نفسها تتكرر في الإصدار القادم.

### نظرة سريعة — Activities at a Glance

| Activity | Key question | Main output for the coupon story |
| --- | --- | --- |
| Planning | What are the objectives and the approach? | Approach: API automation + exploratory session |
| Monitoring & control | Are we on track? What do we change? | Re-prioritised tests when the gateway sandbox was down |
| Analysis | What to test? | Prioritised test conditions; question about the 5.00 minimum |
| Design | How to test? | Test cases, coverage items, data and environment requirements |
| Implementation | Is everything ready to run? | Coupons created, scripts, suite, schedule, verified staging |
| Execution | What actually happened? | Logged results, analysed anomalies, defect reports |
| Completion | What do we close, keep and learn? | Backlog items, archived suite, lessons learned, report |

### لا تخلط بين — Don't Confuse

| Task | Belongs to |
| --- | --- |
| Defining test data requirements | Design |
| Creating the test data | Implementation |
| Designing the test environment | Design |
| Building and verifying the test environment | Implementation |
| Identifying coverage items | Design |
| Prioritising test conditions | Analysis |
| Prioritising test procedures in the execution schedule | Implementation |
| Analysing anomalies for their likely causes | Execution |

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Analysis = what to test (test conditions). Design = how to test (test cases). Implementation = get everything ready (procedures, data, environment). Execution = run, compare, log, report.</p><p class="gx-ar" lang="ar" dir="rtl">التحليل = ماذا نختبر (شروط الاختبار). التصميم = كيف نختبر (حالات الاختبار). التجهيز = إعداد كل شيء (الإجراءات، البيانات، البيئة). التنفيذ = شغّل، قارن، سجّل، أبلغ.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Story: "A user can reset their password by email." Analysis: test conditions such as valid email, unknown email, expired link. Design: concrete test cases with inputs and expected results, plus test data needs. Implementation: create test accounts, set up a mail catcher, order the cases. Execution: run them, compare results, log a defect if the link never expires.</p><p class="gx-ar" lang="ar" dir="rtl">القصة: «يستطيع المستخدم إعادة تعيين كلمة المرور عبر الإيميل». التحليل: شروط اختبار مثل إيميل صحيح، وإيميل غير مسجّل، ورابط منتهي الصلاحية. التصميم: حالات اختبار محددة بمدخلات ونتائج متوقعة، مع متطلبات البيانات. التجهيز: إنشاء حسابات اختبار، وتهيئة أداة لالتقاط الإيميلات، وترتيب الحالات. التنفيذ: تشغيلها، ومقارنة النتائج، وتسجيل defect إذا كان الرابط لا تنتهي صلاحيته أبدًا.</p></aside>

<section class="gx-lab" data-lab="LAB-1.4.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Map One Story Through All Seven Activities</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · مرّر قصة واحدة على الأنشطة السبعة</span></span><span class="gx-lab-meta">LAB-1.4.1 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> see the whole test process on a single user story from your work.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> رؤية عملية الاختبار كاملة على قصة مستخدم واحدة من عملك.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Pick one user story or feature you tested recently.</span><span class="gx-ar" lang="ar" dir="rtl">اختر قصة مستخدم أو ميزة اختبرتها مؤخرًا.</span></li><li><span class="gx-en" lang="en" dir="ltr">For each of the seven activities, write what was actually done and by whom.</span><span class="gx-ar" lang="ar" dir="rtl">لكل نشاط من الأنشطة السبعة، اكتب ما تم فعلًا ومن قام به.</span></li><li><span class="gx-en" lang="en" dir="ltr">Mark activities that were skipped or done informally (often analysis and completion).</span><span class="gx-ar" lang="ar" dir="rtl">علّم الأنشطة التي تم تجاوزها أو نُفّذت بشكل غير رسمي (غالبًا التحليل والإكمال).</span></li><li><span class="gx-en" lang="en" dir="ltr">Note where activities overlapped or repeated instead of following a strict order.</span><span class="gx-ar" lang="ar" dir="rtl">لاحظ أين تداخلت الأنشطة أو تكررت بدل أن تتبع ترتيبًا صارمًا.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You can place each real task under the right activity (for example, preparing test accounts is implementation, not design), and you can explain why skipping analysis or completion carries a risk.</span><span class="gx-ar" lang="ar" dir="rtl">تستطيع وضع كل مهمة حقيقية تحت النشاط الصحيح (مثلًا: تجهيز حسابات الاختبار تجهيز وليس تصميمًا)، وتستطيع أن تشرح لماذا يحمل تجاوز التحليل أو الإكمال خطرًا.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Expect questions that give a task and ask which activity it belongs to. Classic traps: identifying coverage items is design; defining test data requirements is design, but creating the data is implementation; comparing actual and expected results is execution; archiving testware is completion.</p><p class="gx-ar" lang="ar" dir="rtl">توقّع أسئلة تعطيك مهمة وتسأل لأي نشاط تنتمي. فخاخ معروفة: تحديد عناصر التغطية تصميم؛ وتحديد متطلبات بيانات الاختبار تصميم، لكن إنشاء البيانات تجهيز؛ ومقارنة النتائج الفعلية بالمتوقعة تنفيذ؛ وأرشفة مخرجات الاختبار إكمال.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip · analysis</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان · التحليل</span></p><p class="gx-en" lang="en" dir="ltr">Finding a defect in a requirement during test analysis is a normal analysis task: analysis evaluates the test basis and the test object for defects and testability, not only the code.</p><p class="gx-ar" lang="ar" dir="rtl">اكتشاف defect في متطلب أثناء تحليل الاختبار مهمة تحليل طبيعية: التحليل يقيّم أساس الاختبار وموضوع الاختبار بحثًا عن الـ defects وتقييمًا لقابلية الاختبار، لا الشيفرة فقط.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking the activities must happen strictly one after another. They often overlap, repeat in iterations, or run in parallel, and each project tailors them.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الأنشطة يجب أن تحدث واحدًا بعد الآخر بشكل صارم. كثيرًا ما تتداخل، أو تتكرر في دورات، أو تُنفَّذ بالتوازي، وكل مشروع يكيّفها حسب حاجته.</p></aside>

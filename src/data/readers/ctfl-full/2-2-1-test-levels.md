---
order: 7
slug: "2-2-1"
chapter: 2
group: "2.2"
section: "2.2.1"
title: "Test Levels"
titleAr: "مستويات الاختبار"
objectives: "FL-2.2.1 · K2"
minutes: 18
lo:
  FL-2.2.1: "Tell the different test levels apart."
loAr:
  FL-2.2.1: "تميّز بين مستويات الاختبار المختلفة."
labs: ["LAB-2.2.1"]
takeaways:
  - "A test level is a group of test activities organised and managed together, linked to a stage of development."
  - "The five levels: component, component integration, system, system integration and acceptance testing."
  - "Levels are told apart by test object, test objectives, test basis, defects and failures, and approach and responsibilities."
  - "Acceptance testing focuses on validation and demonstrating readiness for deployment, and includes UAT, operational, contractual, regulatory, alpha and beta testing."
  - "In sequential models, the exit criteria of one level are often part of the entry criteria of the next; in iterative models this may not apply, and levels may overlap in time."
  - "Component integration testing depends heavily on the integration strategy: bottom-up, top-down or big-bang."
takeawaysAr:
  - "مستوى الاختبار مجموعة أنشطة اختبار تُنظَّم وتُدار معًا، وترتبط بمرحلة من التطوير."
  - "المستويات الخمسة: المكوّنات، وتكامل المكوّنات، والنظام، وتكامل الأنظمة، والقبول."
  - "تتمايز المستويات حسب موضوع الاختبار، وأهدافه، وأساسه، والـ defects والأعطال، والنهج والمسؤوليات."
  - "اختبار القبول يركّز على المصادقة وإثبات الجاهزية للنشر، ويشمل UAT والقبول التشغيلي والتعاقدي والتنظيمي وAlpha وBeta."
  - "في النماذج المتسلسلة تكون معايير الخروج من مستوى غالبًا جزءًا من معايير الدخول للمستوى التالي؛ وفي النماذج التكرارية قد لا ينطبق ذلك، وقد تتداخل المستويات زمنيًا."
  - "اختبار تكامل المكوّنات يعتمد كثيرًا على استراتيجية التكامل: من الأسفل للأعلى، أو من الأعلى للأسفل، أو الانفجار الكبير."
terms:
  - en: "Component Testing"
    ar: "اختبار المكوّنات"
    def: "A test level that focuses on individual components in isolation. Also called unit testing."
    defAr: "مستوى اختبار يركّز على المكوّنات منفردة ومعزولة. ويسمّى أيضًا اختبار الوحدات."
    match: ["Component Testing", "component testing", "unit testing"]
  - en: "Component Integration Testing"
    ar: "اختبار تكامل المكوّنات"
    def: "A test level that focuses on the interfaces and interactions between components."
    defAr: "مستوى اختبار يركّز على الواجهات والتفاعلات بين المكوّنات."
    match: ["Component Integration Testing", "component integration testing"]
  - en: "System Testing"
    ar: "اختبار النظام"
    def: "A test level that focuses on the overall behaviour and capabilities of an entire system or product."
    defAr: "مستوى اختبار يركّز على السلوك والقدرات العامة لنظام أو منتج كامل."
    match: ["System Testing", "system testing"]
  - en: "System Integration Testing"
    ar: "اختبار تكامل الأنظمة"
    def: "A test level that focuses on the interfaces of the system under test with other systems and external services."
    defAr: "مستوى اختبار يركّز على واجهات النظام قيد الاختبار مع الأنظمة الأخرى والخدمات الخارجية."
    match: ["System Integration Testing", "system integration testing"]
  - en: "Acceptance Testing"
    ar: "اختبار القبول"
    def: "A test level that focuses on validation and on demonstrating readiness for deployment."
    defAr: "مستوى اختبار يركّز على المصادقة وإثبات الجاهزية للنشر."
    match: ["Acceptance Testing", "acceptance testing"]
  - en: "Test Harness"
    ar: "أداة تشغيل الاختبار"
    def: "A test environment of stubs and drivers needed to execute a test in isolation."
    defAr: "بيئة اختبار من البدائل (Stubs) والمشغّلات (Drivers) اللازمة لتنفيذ اختبار بشكل معزول."
---
لا يمكن اختبار تطبيق التوصيل كله دفعة واحدة ثم انتظار الأفضل. نختبره على طبقات: أولًا كل قطعة صغيرة وحدها، ثم القطع وهي تتحدث مع بعضها، ثم التطبيق كاملًا، ثم التطبيق مع الأنظمة الخارجية، وأخيرًا نسأل المستخدمين: هل يلبّي هذا حاجتكم؟ كل طبقة من هذه هي **مستوى اختبار (test level)**.

### ما مستوى الاختبار؟ — What a Test Level Is

**مستويات الاختبار مجموعات من أنشطة الاختبار تُنظَّم وتُدار معًا**. و**كل مستوى هو تجسيد (instance) لعملية الاختبار** بكل أنشطتها (التخطيط، والتحليل، والتصميم، والتنفيذ…)، يُطبَّق على البرمجية في **مرحلة تطوير معيّنة**: من **المكوّنات المفردة** إلى **الأنظمة الكاملة**، أو **أنظمة الأنظمة (systems of systems)** حيث ينطبق ذلك.

ومستويات الاختبار **مرتبطة بأنشطة أخرى في دورة حياة التطوير**:

- في **النماذج المتسلسلة** تُعرَّف المستويات غالبًا بحيث تكون **معايير الخروج (exit criteria) من مستوى جزءًا من معايير الدخول (entry criteria) للمستوى التالي**. لا يبدأ اختبار النظام قبل أن ينجح اختبار التكامل.
- في **بعض النماذج التكرارية** قد لا ينطبق ذلك؛ فقد **تمتد أنشطة التطوير عبر عدة مستويات**، و**قد تتداخل المستويات زمنيًا**. في sprint واحد من تطبيق التوصيل يجري اختبار مكوّنات لقصة جديدة واختبار نظام لقصة سابقة في الوقت نفسه.

أما **أنواع الاختبار (test types)** فهي مجموعات أنشطة مرتبطة **بخصائص جودة محددة**، ومعظمها يمكن تنفيذه في كل مستوى (القسم 2.2.2).

<figure class="gx-figure" aria-label="The five test levels, from the smallest piece to readiness for real use."><div class="gx-flow-row"><span class="gx-flow-node">Component<small>unit</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Component integration</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">System</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">System integration</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Acceptance</span></div><figcaption>The five test levels, from the smallest piece to readiness for real use.</figcaption></figure>

### اختبار المكوّنات — Component Testing

**اختبار المكوّنات (component testing)**، ويسمّى أيضًا **اختبار الوحدات (unit testing)**، **يركّز على اختبار المكوّنات منفردة ومعزولة**. ولأن المكوّن لا يعمل وحده عادة، **يحتاج غالبًا دعمًا خاصًا** مثل **أدوات تشغيل الاختبار (test harness)** أو **أطر اختبار الوحدات (unit test frameworks)**، لتوفير بدائل للأجزاء التي يعتمد عليها. و**ينفّذه عادة المطوّرون في بيئات التطوير** الخاصة بهم، لأنهم الأقرب إلى الشيفرة.

**أهدافه:** التحقق من أن كل مكوّن يعمل كما صُمّم، واكتشاف الـ defects داخله مبكرًا قبل أن تنتشر، وبناء الثقة في جودته؛ ومع TDD وCI تتحول هذه الاختبارات إلى شبكة أمان آلية تعمل مع كل تغيير.

| Attribute | Delivery app example |
| --- | --- |
| Test object | Delivery-fee function, coupon validator, order-state class |
| Test basis | Detailed design, code, component specifications |
| Typical defects | Wrong calculation (fee at 20.00), incorrect logic, off-by-one errors |
| Who | Developers |

### اختبار تكامل المكوّنات — Component Integration Testing

**اختبار تكامل المكوّنات (component integration testing)**، ويسمّى أيضًا **اختبار تكامل الوحدات**، **يركّز على الواجهات والتفاعلات بين المكوّنات**. قد يعمل كل مكوّن صحيحًا وحده، ثم يفشلان معًا لأن أحدهما يرسل المبلغ بالقروش والآخر يتوقعه بالدنانير.

**أهدافه:** التحقق من أن المكوّنات تتبادل البيانات وتستدعي بعضها كما هو متوقع، واكتشاف الـ defects في الواجهات قبل أن تختفي داخل سلوك النظام الكامل.

وهو **يعتمد كثيرًا على استراتيجية التكامل**:

- **من الأسفل للأعلى (bottom-up)**: نبدأ بالمكوّنات الأساسية ثم نضيف ما يعتمد عليها، ونستخدم مشغّلات (drivers) بدل الطبقات العليا.
- **من الأعلى للأسفل (top-down)**: نبدأ من الطبقة العليا، ونستخدم بدائل (stubs) للمكوّنات التي لم تكتمل.
- **الانفجار الكبير (big-bang)**: ندمج كل شيء مرة واحدة؛ أسرع في الإعداد، لكن تحديد مصدر العطل يصبح صعبًا.

| Attribute | Delivery app example |
| --- | --- |
| Test object | Cart service calling the pricing service; order API calling the database |
| Test basis | Software and system design, interface specifications, sequence diagrams |
| Typical defects | Wrong data format or units, missing calls, wrong assumptions about the other component |
| Who | Usually developers, sometimes testers |

### اختبار النظام — System Testing

**اختبار النظام (system testing)** **يركّز على السلوك والقدرات العامة للنظام أو المنتج كاملًا**، ويشمل غالبًا **الاختبار الوظيفي للمهام من البداية إلى النهاية (end-to-end)** و**الاختبار غير الوظيفي لخصائص الجودة**. بعض الخصائص غير الوظيفية **يُفضَّل اختبارها على نظام كامل في بيئة اختبار ممثّلة**، مثل **سهولة الاستخدام (usability)**، لأن الانطباع عن سهولة الطلب لا يظهر إلا في التطبيق كاملًا. و**يمكن استخدام محاكاة (simulations) للأنظمة الفرعية** غير المتاحة. وقد **ينفّذه فريق اختبار مستقل**، وهو **مرتبط بمواصفات النظام**.

**أهدافه:** التحقق من أن النظام المتكامل يؤدي الوظائف المطلوبة ويحقق خصائص الجودة المحددة، واكتشاف الـ defects قبل وصوله إلى المستخدمين، وتقديم معلومات تساعد في قرار الإطلاق.

| Attribute | Delivery app example |
| --- | --- |
| Test object | The whole app: customer app, restaurant dashboard, driver app, backend |
| Test basis | System requirements, user stories, use cases, system specifications |
| Typical defects | Wrong end-to-end flow (order never reaches Delivered), slow checkout, confusing Arabic layout |
| Who | Testers, possibly an independent test team |

### اختبار تكامل الأنظمة — System Integration Testing

**اختبار تكامل الأنظمة (system integration testing)** **يركّز على واجهات النظام قيد الاختبار مع الأنظمة الأخرى والخدمات الخارجية**. في تطبيقنا: بوابة الدفع وخدمة الخرائط، وكلاهما طرف ثالث لا نتحكم في شيفرته. ولذلك **يحتاج بيئات اختبار مناسبة، يُفضَّل أن تشبه بيئة التشغيل الفعلية**؛ فالبوابة في وضع الاختبار قد تتصرف بشكل مختلف عن الإنتاج.

**أهدافه:** التحقق من أن تبادل البيانات مع الأنظمة الخارجية صحيح وموثوق، وأن النظام يتصرف بشكل معقول عندما تتأخر الخدمة الخارجية أو تفشل.

| Attribute | Delivery app example |
| --- | --- |
| Test object | Interfaces to the payment gateway and the maps service |
| Test basis | Interface agreements, external API documentation, system architecture |
| Typical defects | Timeouts not handled, payment confirmed but order not created, wrong coordinates format |
| Who | Testers, with the external provider when needed |

### اختبار القبول — Acceptance Testing

**اختبار القبول (acceptance testing)** **يركّز على المصادقة (validation)** وعلى **إثبات الجاهزية للنشر**، أي أن **النظام يلبّي احتياجات عمل المستخدم**. السؤال هنا ليس «هل يطابق المواصفة؟» بل «هل يصلح للاستخدام الحقيقي؟». و**يُفضَّل أن ينفّذه المستخدمون المستهدفون**.

**أهدافه:** بناء الثقة بأن النظام صالح للاستخدام، والتحقق من اكتماله وعمله كما يتوقع أصحاب المصلحة، أكثر من اصطياد أكبر عدد من الـ defects.

أشكاله الرئيسية كما يذكرها المنهج:

| Form | Focus | Delivery app example |
| --- | --- | --- |
| User acceptance testing (UAT) | Users confirm it meets their needs | Restaurant staff accept orders on the dashboard during lunch rush |
| Operational acceptance testing | Readiness to operate: backup, restore, monitoring | Ops team restores the order database from backup |
| Contractual acceptance testing | Criteria agreed in a contract | Checks agreed with a restaurant chain |
| Regulatory acceptance testing | Laws and regulations | Payment and data-protection rules |
| Alpha testing | Potential users at the developer's site | Staff of the company order real meals |
| Beta testing | Users at their own locations | 500 customers use a beta build before store release |

| Attribute | Delivery app example |
| --- | --- |
| Test object | The release candidate in a production-like environment |
| Test basis | Business needs, user requirements, acceptance criteria, contracts, regulations |
| Typical defects | Workflow does not match how restaurants really work, business rules missing |
| Who | Intended users, customers, operators, product owner |

### ما الذي يميّز المستويات؟ — What Distinguishes the Levels

يميّز المنهج المستويات **بقائمة غير شاملة من الصفات**، والهدف **تجنّب تداخل أنشطة الاختبار**: **موضوع الاختبار (test object)**، و**أهداف الاختبار**، و**أساس الاختبار (test basis)**، و**الـ defects والأعطال**، و**النهج والمسؤوليات**. إذا وجدت مستويين لهما الصفات نفسها، فأحدهما يكرر الآخر.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">One rule, five levels: "free delivery from 20.00 JOD". Component: the fee function returns 0 for 20.00. Component integration: the cart passes the total to the pricing service in the right unit. System: a full order of 20.00 shows no fee on the receipt. System integration: the payment gateway is charged 20.00, not 21.50. Acceptance: customers in the beta understand why delivery is free.</p><p class="gx-ar" lang="ar" dir="rtl">قاعدة واحدة وخمسة مستويات: «توصيل مجاني من 20.00 دينارًا». المكوّنات: دالة الرسوم تعيد 0 للقيمة 20.00. تكامل المكوّنات: السلة ترسل المجموع لخدمة التسعير بالوحدة الصحيحة. النظام: طلب كامل بقيمة 20.00 يظهر بلا رسوم في الإيصال. تكامل الأنظمة: بوابة الدفع تخصم 20.00 لا 21.50. القبول: الزبائن في نسخة Beta يفهمون لماذا التوصيل مجاني.</p></aside>

<section class="gx-lab" data-lab="LAB-2.2.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Fill a Test Level Map for Your Product</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · املأ خريطة مستويات الاختبار لمنتجك</span></span><span class="gx-lab-meta">LAB-2.2.1 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> describe each test level in your project using the five distinguishing attributes.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> وصف كل مستوى اختبار في مشروعك باستخدام الصفات الخمس المميِّزة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Make a table: rows are the five test levels, columns are test object, objective, test basis, typical defects, who does it.</span><span class="gx-ar" lang="ar" dir="rtl">أنشئ جدولًا: الصفوف هي المستويات الخمسة، والأعمدة: موضوع الاختبار، والهدف، وأساس الاختبار، والـ defects المعتادة، ومن ينفّذه.</span></li><li><span class="gx-en" lang="en" dir="ltr">Fill each cell from what actually happens in your team, not from theory.</span><span class="gx-ar" lang="ar" dir="rtl">املأ كل خانة مما يحدث فعلًا في فريقك، لا من النظرية.</span></li><li><span class="gx-en" lang="en" dir="ltr">Mark empty rows or rows that duplicate another level's objectives.</span><span class="gx-ar" lang="ar" dir="rtl">علّم الصفوف الفارغة، أو التي تكرر أهداف مستوى آخر.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Each level has a different objective and test basis (for example, component: a function against its design; acceptance: the whole product against business needs). Gaps, like no system integration testing for a payment gateway, are now visible.</span><span class="gx-ar" lang="ar" dir="rtl">لكل مستوى هدف وأساس اختبار مختلفان (مثلًا: المكوّنات: دالة مقابل تصميمها؛ القبول: المنتج كله مقابل احتياجات العمل). والفجوات، مثل غياب اختبار تكامل الأنظمة لبوابة الدفع، صارت ظاهرة.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Classic question: "Testing the interface between the app and an external payment service" → system integration testing. "Testing interactions between two modules of the same app" → component integration testing. Alpha = at the developer's site; beta = at users' sites.</p><p class="gx-ar" lang="ar" dir="rtl">سؤال كلاسيكي: «اختبار الواجهة بين التطبيق وخدمة دفع خارجية» ← اختبار تكامل الأنظمة. «اختبار التفاعل بين وحدتين في التطبيق نفسه» ← اختبار تكامل المكوّنات. Alpha = في موقع المطوّر؛ Beta = في مواقع المستخدمين.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Confusing test levels with test types. A test level is where in development you test (component, system...); a test type is what quality characteristic you test (functional, performance...). Any type can be done at any level.</p><p class="gx-ar" lang="ar" dir="rtl">الخلط بين مستويات الاختبار وأنواعه. المستوى هو أين في التطوير تختبر (مكوّن، نظام...)؛ والنوع هو أي خاصية جودة تختبر (وظيفي، أداء...). وأي نوع يمكن تنفيذه في أي مستوى.</p></aside>

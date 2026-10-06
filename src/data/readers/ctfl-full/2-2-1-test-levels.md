---
order: 7
slug: "2-2-1"
chapter: 2
group: "2.2"
section: "2.2.1"
title: "Test Levels"
titleAr: "مستويات الاختبار"
objectives: "FL-2.2.1 · K2"
minutes: 10
lo:
  FL-2.2.1: "Tell the different test levels apart."
loAr:
  FL-2.2.1: "تميّز بين مستويات الاختبار المختلفة."
labs: ["LAB-2.2.1"]
takeaways:
  - "A test level is a group of test activities organised and managed together, linked to a stage of development."
  - "The five levels: component, component integration, system, system integration and acceptance testing."
  - "Levels are told apart by test object, test objectives, test basis, defects and failures, and approach and responsibilities."
  - "Acceptance testing validates readiness for use and includes UAT, operational, contractual, regulatory, alpha and beta testing."
takeawaysAr:
  - "مستوى الاختبار مجموعة أنشطة اختبار تُنظَّم وتُدار معًا، وترتبط بمرحلة من التطوير."
  - "المستويات الخمسة: المكوّنات، وتكامل المكوّنات، والنظام، وتكامل الأنظمة، والقبول."
  - "تتمايز المستويات حسب موضوع الاختبار، وأهدافه، وأساسه، والـ defects والأعطال، والنهج والمسؤوليات."
  - "اختبار القبول يصادق على الجاهزية للاستخدام، ويشمل UAT والقبول التشغيلي والتعاقدي والتنظيمي وAlpha وBeta."
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
**مستويات الاختبار (Test Levels)** مجموعات من أنشطة الاختبار تُنظَّم وتُدار معًا. كل مستوى هو تجسيد لعملية الاختبار، ويُنفَّذ على البرمجية في مرحلة تطوير معيّنة: من المكوّنات المفردة إلى أنظمة كاملة، أو أنظمة من أنظمة.

في النماذج المتسلسلة يرتبط كل مستوى عادة بنشاط في الـ SDLC، ومعايير الخروج من مستوى غالبًا تكون معايير دخول للمستوى التالي. في بعض النماذج التكرارية قد لا ينطبق ذلك، وقد تتداخل الأنشطة.

<figure class="gx-figure" aria-label="The five test levels, from the smallest piece to readiness for real use."><div class="gx-flow-row"><span class="gx-flow-node">Component<small>unit</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Component integration</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">System</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">System integration</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Acceptance</span></div><figcaption>The five test levels, from the smallest piece to readiness for real use.</figcaption></figure>

### اختبار المكوّنات — Component Testing

يسمّى أيضًا **اختبار الوحدات (Unit Testing)**. يركّز على اختبار المكوّنات **منفردة ومعزولة**. غالبًا يحتاج دعمًا خاصًا مثل **أدوات تشغيل الاختبار (Test Harness)** أو أطر اختبار الوحدات. يُنفّذه عادة **المطوّرون** في بيئات التطوير.

### اختبار تكامل المكوّنات — Component Integration Testing

يسمّى أيضًا اختبار تكامل الوحدات. يركّز على **الواجهات والتفاعلات بين المكوّنات**. ويعتمد كثيرًا على **استراتيجية التكامل**، مثل: من الأسفل للأعلى (Bottom-up)، أو من الأعلى للأسفل (Top-down)، أو الانفجار الكبير (Big-bang).

### اختبار النظام — System Testing

يركّز على **السلوك والقدرات العامة للنظام أو المنتج كاملًا**. وغالبًا يشمل:

- **الاختبار الوظيفي** للمهام من البداية للنهاية (End-to-end).
- **الاختبار غير الوظيفي** لخصائص الجودة.

بالنسبة لبعض الخصائص غير الوظيفية، يُفضّل اختبارها على نظام كامل في بيئة اختبار ممثّلة، مثل **سهولة الاستخدام**. ويمكن استخدام محاكاة للأنظمة الفرعية. وقد يُنفّذه **فريق اختبار مستقل**، ويرتبط بمواصفات النظام.

### اختبار تكامل الأنظمة — System Integration Testing

يركّز على اختبار **واجهات النظام قيد الاختبار مع الأنظمة الأخرى والخدمات الخارجية**، مثل بوابة الدفع أو خدمة الرسائل. يحتاج بيئات اختبار مناسبة، يُفضّل أن تكون مشابهة لبيئة التشغيل الفعلية.

### اختبار القبول — Acceptance Testing

يركّز على **المصادقة** وإثبات **الجاهزية للنشر**، أي أن النظام يلبّي احتياجات عمل المستخدم. يُفضّل أن ينفّذه **المستخدمون المستهدفون**. أشكاله الرئيسية:

| Form | المعنى |
| --- | --- |
| User acceptance testing (UAT) | يتحقق المستخدمون من أن النظام يلبّي احتياجاتهم |
| Operational acceptance testing | جاهزية التشغيل: النسخ الاحتياطي، الاستعادة، الصيانة، الأمن |
| Contractual acceptance testing | مطابقة معايير القبول المتفق عليها في العقد |
| Regulatory acceptance testing | الالتزام باللوائح والأنظمة القانونية |
| Alpha testing | اختبار في موقع المطوّر من قبل مستخدمين أو عملاء محتملين |
| Beta testing | اختبار في مواقع المستخدمين أنفسهم قبل الإطلاق العام |

### ما الذي يميّز كل مستوى؟ — What Distinguishes the Levels

مستويات الاختبار تتمايز حسب قائمة غير شاملة من الصفات، لتجنّب تداخل الأنشطة:

- **موضوع الاختبار (Test Object).**
- **أهداف الاختبار.**
- **أساس الاختبار.**
- **الـ defects والأعطال** المتوقعة.
- **النهج والمسؤوليات.**

<section class="gx-lab" data-lab="LAB-2.2.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Fill a Test Level Map for Your Product</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · املأ خريطة مستويات الاختبار لمنتجك</span></span><span class="gx-lab-meta">LAB-2.2.1 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> describe each test level in your project using the five distinguishing attributes.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> وصف كل مستوى اختبار في مشروعك باستخدام الصفات الخمس المميِّزة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Make a table: rows are the five test levels, columns are test object, objective, test basis, typical defects, who does it.</span><span class="gx-ar" lang="ar" dir="rtl">أنشئ جدولًا: الصفوف هي المستويات الخمسة، والأعمدة: موضوع الاختبار، والهدف، وأساس الاختبار، والـ defects المعتادة، ومن ينفّذه.</span></li><li><span class="gx-en" lang="en" dir="ltr">Fill each cell from what actually happens in your team, not from theory.</span><span class="gx-ar" lang="ar" dir="rtl">املأ كل خانة مما يحدث فعلًا في فريقك، لا من النظرية.</span></li><li><span class="gx-en" lang="en" dir="ltr">Mark empty rows or rows that duplicate another level's objectives.</span><span class="gx-ar" lang="ar" dir="rtl">علّم الصفوف الفارغة، أو التي تكرر أهداف مستوى آخر.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Each level has a different objective and test basis (for example, component: a function against its design; acceptance: the whole product against business needs). Gaps, like no system integration testing for a payment gateway, are now visible.</span><span class="gx-ar" lang="ar" dir="rtl">لكل مستوى هدف وأساس اختبار مختلفان (مثلًا: المكوّنات: دالة مقابل تصميمها؛ القبول: المنتج كله مقابل احتياجات العمل). والفجوات، مثل غياب اختبار تكامل الأنظمة لبوابة الدفع، صارت ظاهرة.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Classic question: "Testing the interface between the app and an external payment service" → system integration testing. "Testing interactions between two modules of the same app" → component integration testing. Alpha = at the developer's site; beta = at users' sites.</p><p class="gx-ar" lang="ar" dir="rtl">سؤال كلاسيكي: «اختبار الواجهة بين التطبيق وخدمة دفع خارجية» ← اختبار تكامل الأنظمة. «اختبار التفاعل بين وحدتين في التطبيق نفسه» ← اختبار تكامل المكوّنات. Alpha = في موقع المطوّر؛ Beta = في مواقع المستخدمين.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Confusing test levels with test types. A test level is where in development you test (component, system...); a test type is what quality characteristic you test (functional, performance...). Any type can be done at any level.</p><p class="gx-ar" lang="ar" dir="rtl">الخلط بين مستويات الاختبار وأنواعه. المستوى هو أين في التطوير تختبر (مكوّن، نظام...)؛ والنوع هو أي خاصية جودة تختبر (وظيفي، أداء...). وأي نوع يمكن تنفيذه في أي مستوى.</p></aside>

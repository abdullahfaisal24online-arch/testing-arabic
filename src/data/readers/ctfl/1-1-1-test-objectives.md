---
order: 1
slug: "1-1-1"
chapter: 1
group: "1.1"
section: "1.1.1"
title: "Test Objectives"
titleAr: "أهداف الاختبار"
objectives: "FL-1.1.1 · K1"
minutes: 9
lo:
  FL-1.1.1: "Identify the typical objectives of testing."
loAr:
  FL-1.1.1: "تتعرّف على الأهداف المعتادة للاختبار."
takeaways:
  - "Testing is a set of activities to find defects and evaluate the quality of work products, not just running tests."
  - "Testing covers both verification (did we build it right?) and validation (did we build the right thing?)."
  - "Static testing examines work products without running them; dynamic testing runs the software."
  - "There are nine typical test objectives, and which ones matter most depends on the context."
takeawaysAr:
  - "الاختبار مجموعة أنشطة لاكتشاف الـ defects وتقييم جودة مخرجات العمل، وليس مجرد تشغيل اختبارات."
  - "الاختبار يشمل التحقق (هل بنيناه بشكل صحيح؟) والمصادقة (هل بنينا الشيء الصحيح؟)."
  - "الاختبار الساكن يفحص مخرجات العمل دون تشغيلها؛ والاختبار الديناميكي يشغّل البرمجية."
  - "هناك تسعة أهداف معتادة للاختبار، وأهمّها يختلف حسب السياق."
terms:
  - en: "Testing"
    ar: "الاختبار"
    def: "A set of activities to discover defects and evaluate the quality of software work products."
    defAr: "مجموعة أنشطة لاكتشاف الـ defects وتقييم جودة مخرجات العمل البرمجية."
  - en: "Test Object"
    ar: "موضوع الاختبار"
    def: "The work product that is being tested."
    defAr: "مُخرَج العمل الذي يخضع للاختبار."
  - en: "Test Objective"
    ar: "هدف الاختبار"
    def: "The reason or purpose for testing."
    defAr: "السبب أو الغاية من الاختبار."
  - en: "Verification"
    ar: "التحقق"
    def: "Checking that the test object meets its specified requirements."
    defAr: "التأكد من أن موضوع الاختبار يحقق المتطلبات المحددة له."
  - en: "Validation"
    ar: "المصادقة"
    def: "Checking that the test object meets the needs of users and other stakeholders in its operational environment."
    defAr: "التأكد من أن موضوع الاختبار يلبّي احتياجات المستخدمين وأصحاب المصلحة في بيئة التشغيل الفعلية."
  - en: "Static Testing"
    ar: "الاختبار الساكن"
    def: "Testing that does not execute the software, such as reviews and static analysis."
    defAr: "اختبار لا يتضمن تشغيل البرمجية، مثل المراجعات والتحليل الساكن."
    match: ["Static Testing", "static testing"]
  - en: "Dynamic Testing"
    ar: "الاختبار الديناميكي"
    def: "Testing that involves executing the software."
    defAr: "اختبار يتضمن تشغيل البرمجية."
    match: ["Dynamic Testing", "dynamic testing"]
---
البرمجيات حولنا في كل مكان: تطبيق البنك، ونظام الحجز، وبرنامج المستشفى. وأي برمجية قد لا تعمل كما هو متوقع، وقد تكون العواقب خسارة مال أو وقت أو سمعة، وأحيانًا ما هو أخطر. **الاختبار** يساعدنا على تقييم جودة البرمجية وتقليل خطر حدوث الأعطال أثناء التشغيل.

يعرّف المنهج **الاختبار (Testing)** بأنه مجموعة أنشطة لاكتشاف الـ defects وتقييم جودة مخرجات العمل البرمجية. والشيء الذي نختبره، سواء كان شيفرة أو متطلبات أو تصميمًا، يسمّى **موضوع الاختبار (Test Object)**.

### ما هو الاختبار فعلًا؟ — What Testing Really Is

هناك فكرتان خاطئتان شائعتان عن الاختبار. الأولى أنه مجرد **تشغيل الاختبارات** والتأكد من النتيجة. الحقيقة أن التشغيل جزء واحد فقط؛ فالاختبار يشمل أيضًا التخطيط والتحليل والتصميم والتجهيز والمتابعة والإغلاق، وكلها مرتبطة بدورة حياة التطوير.

الفكرة الثانية أن الاختبار يركّز فقط على التأكد من تطابق النظام مع المتطلبات المكتوبة. هذا جزء مهم ويسمّى **التحقق (Verification)**. لكن الاختبار يشمل أيضًا **المصادقة (Validation)**: التأكد من أن النظام يلبّي احتياجات المستخدمين وأصحاب المصلحة الفعلية في بيئة التشغيل.

<figure class="gx-figure gx-spectrum" aria-label="Verification checks against the specification. Validation checks against real needs."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Verification</b><span>Did we build the system right? Compare it with the specified requirements.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Validation</b><span>Did we build the right system? Compare it with what users actually need.</span></div></div><figcaption>Verification checks against the specification. Validation checks against real needs.</figcaption></figure>

### الاختبار الساكن والديناميكي — Static and Dynamic Testing

يمكن أن يكون الاختبار **ديناميكيًا (Dynamic Testing)**، أي يتضمن تشغيل البرمجية ومراقبة سلوكها. ويمكن أن يكون **ساكنًا (Static Testing)**، أي فحص مُخرَج العمل دون تشغيله، مثل مراجعة وثيقة المتطلبات أو تحليل الشيفرة بأداة تحليل ساكن.

هذا يعني أن الاختبار يمكن أن يبدأ قبل وجود أي شيفرة قابلة للتشغيل. مراجعة قصة المستخدم واكتشاف تناقض فيها هي اختبار أيضًا.

### أكثر من نشاط تقني — More Than a Technical Activity

الاختبار ليس عملًا تقنيًا فقط. يحتاج إلى تخطيط وإدارة وتقدير ومتابعة وتحكم. والمختبرون يستخدمون الأدوات، لكن الاختبار في جوهره **نشاط ذهني** يحتاج معرفة متخصصة، ومهارات تحليلية، وتفكيرًا نقديًا، وتفكيرًا منظوميًا يرى النظام كاملًا لا أجزاءه فقط.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Testing is not the same as test execution. Planning, analysis, design, implementation, monitoring and completion are all part of testing, and so is reviewing a document without running anything.</p><p class="gx-ar" lang="ar" dir="rtl">الاختبار ليس مرادفًا لتشغيل الاختبارات. التخطيط والتحليل والتصميم والتجهيز والمتابعة والإغلاق كلها جزء من الاختبار، وكذلك مراجعة وثيقة دون تشغيل أي شيء.</p></aside>

### الأهداف المعتادة للاختبار — Typical Test Objectives

لماذا نختبر؟ يذكر المنهج تسعة أهداف معتادة:

| Test objective | المعنى |
| --- | --- |
| Evaluating work products | تقييم مخرجات العمل مثل المتطلبات وقصص المستخدم والتصاميم والشيفرة |
| Causing failures and finding defects | إحداث الأعطال واكتشاف الـ defects |
| Ensuring required coverage | ضمان التغطية المطلوبة لموضوع الاختبار |
| Reducing risk | خفض مستوى خطر أن تكون جودة البرمجية غير كافية |
| Verifying specified requirements | التحقق من أن المتطلبات المحددة تحققت |
| Verifying compliance | التحقق من الالتزام بالمتطلبات التعاقدية والقانونية والتنظيمية |
| Providing information to stakeholders | تزويد أصحاب المصلحة بمعلومات تساعدهم على اتخاذ قرارات مدروسة |
| Building confidence | بناء الثقة في جودة موضوع الاختبار |
| Validating the test object | المصادقة على أن موضوع الاختبار مكتمل ويعمل كما يتوقع أصحاب المصلحة |

### الأهداف تختلف حسب السياق — Objectives Depend on Context

لا يكون لكل الأهداف الوزن نفسه في كل مشروع. أهداف الاختبار تتغير حسب **السياق**، ومنه:

- مُخرَج العمل الذي نختبره (متطلبات؟ شيفرة؟ نظام كامل؟).
- مستوى الاختبار (اختبار مكوّن؟ اختبار قبول؟).
- المخاطر.
- دورة حياة التطوير المتّبعة.
- عوامل سياق العمل، مثل هيكل المؤسسة والمنافسة ووقت الوصول للسوق.

مثلًا، في اختبار المكوّنات قد يكون الهدف الأهم اكتشاف أكبر عدد من الـ defects مبكرًا. أما في اختبار القبول فالهدف الأهم غالبًا بناء الثقة والمصادقة على أن النظام جاهز للاستخدام الفعلي، لا البحث عن defects كثيرة.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A banking app must comply with central bank regulations, so verifying compliance becomes a key objective. A startup's prototype may focus on giving the founders quick information about whether the main flow works at all.</p><p class="gx-ar" lang="ar" dir="rtl">تطبيق بنكي يجب أن يلتزم بتعليمات البنك المركزي، فيصبح التحقق من الالتزام هدفًا رئيسيًا. أما النموذج الأولي لشركة ناشئة فقد يركّز على تزويد المؤسسين بمعلومة سريعة عن عمل المسار الرئيسي من الأساس.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">This is a K1 objective: you need to recognise the typical objectives in a list. Watch for options that sound plausible but are not test objectives, such as "fixing defects" (that is debugging) or "proving the software has no defects" (testing cannot do that).</p><p class="gx-ar" lang="ar" dir="rtl">هذا هدف K1: المطلوب أن تتعرّف على الأهداف المعتادة ضمن قائمة. انتبه للخيارات التي تبدو منطقية لكنها ليست أهداف اختبار، مثل «إصلاح الـ defects» (هذا تنقيح Debugging) أو «إثبات خلو البرمجية من الـ defects» (الاختبار لا يستطيع ذلك).</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking validation is the same as verification. Verification compares the product with its specification; validation checks whether it meets the real needs of its users, even if the specification was incomplete.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن المصادقة هي نفسها التحقق. التحقق يقارن المنتج بمواصفاته؛ والمصادقة تتأكد من أنه يلبّي الاحتياجات الفعلية لمستخدميه، حتى لو كانت المواصفات ناقصة.</p></aside>

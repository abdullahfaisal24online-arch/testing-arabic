---
order: 1
slug: "1-1-1"
chapter: 1
group: "1.1"
section: "1.1.1"
title: "Test Objectives"
titleAr: "أهداف الاختبار"
objectives: "FL-1.1.1 · K1"
minutes: 8
lo:
  FL-1.1.1: "Identify the typical objectives of testing."
loAr:
  FL-1.1.1: "تتعرّف على الأهداف المعتادة للاختبار."
takeaways:
  - "Testing is a set of activities to find defects and evaluate the quality of work products, not just running tests."
  - "Testing covers both verification (did we build it right?) and validation (did we build the right thing?)."
  - "Static testing examines work products without running them; dynamic testing runs the software."
  - "There are nine typical test objectives, and which ones matter most depends on the context."
  - "Testing is largely an intellectual activity that needs analytical, critical and systems thinking, not only tools."
takeawaysAr:
  - "الاختبار مجموعة أنشطة لاكتشاف الـ defects وتقييم جودة مخرجات العمل، وليس مجرد تشغيل اختبارات."
  - "الاختبار يشمل التحقق (هل بنيناه بشكل صحيح؟) والمصادقة (هل بنينا الشيء الصحيح؟)."
  - "الاختبار الساكن يفحص مخرجات العمل دون تشغيلها؛ والاختبار الديناميكي يشغّل البرمجية."
  - "هناك تسعة أهداف معتادة للاختبار، وأهمّها يختلف حسب السياق."
  - "الاختبار نشاط ذهني في جوهره يحتاج تفكيرًا تحليليًا ونقديًا ومنظوميًا، لا أدوات فقط."
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
البرمجيات جزء من حياتنا اليومية، ومعظمنا جرّب برمجية لم تعمل كما توقّع. والبرمجية التي لا تعمل بشكل صحيح قد تسبب خسارة مال أو وقت أو سمعة تجارية، وفي الحالات القصوى إصابة أو وفاة. هنا يأتي دور **الاختبار**: فهو يقيّم جودة البرمجية ويساعد على **تقليل خطر العطل أثناء التشغيل**. في تطبيق التوصيل الذي نتابعه في هذا الدليل، عطل واحد في الدفع يعني زبائن خُصمت أموالهم ومطاعم لم تستلم طلباتها.

يعرّف المنهج **الاختبار (Testing)** بأنه مجموعة أنشطة لاكتشاف الـ defects وتقييم جودة مخرجات العمل البرمجية. ومُخرَج العمل حين يخضع للاختبار يسمّى **موضوع الاختبار (Test Object)**: قد يكون قصة مستخدم، أو تصميم شاشة، أو واجهة API، أو التطبيق كاملًا.

### فكرتان خاطئتان عن الاختبار — Two Misconceptions

**الأولى:** أن الاختبار هو **تشغيل الاختبارات** فقط ومقارنة النتائج. الصحيح أن التشغيل نشاط واحد بين أنشطة كثيرة، مثل التخطيط والتحليل والتصميم والتجهيز والمتابعة والإغلاق، ويجب أن تتماشى كلها مع دورة حياة التطوير (الفصل 2).

**الثانية:** أن الاختبار يقتصر على **التحقق (Verification)**، أي فحص مطابقة النظام للمتطلبات المحددة. الاختبار يشمل أيضًا **المصادقة (Validation)**: فحص ما إذا كان النظام يلبّي احتياجات المستخدمين وأصحاب المصلحة **في بيئة التشغيل الفعلية**. قد تنص المواصفات على أن الزبون يتتبع طلبه على الخريطة، فينجح التحقق؛ لكن إذا كانت الخريطة لا تتحدث إلا كل دقيقتين فالزبون لن يستفيد منها، وهذا ما تكشفه المصادقة.

<figure class="gx-figure gx-spectrum" aria-label="Verification checks against the specification. Validation checks against real needs."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Verification</b><span>Did we build the system right? Compare it with the specified requirements.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Validation</b><span>Did we build the right system? Compare it with what users actually need.</span></div></div><figcaption>Verification checks against the specification. Validation checks against real needs.</figcaption></figure>

### الساكن والديناميكي — Static and Dynamic Testing

**الاختبار الديناميكي (Dynamic Testing)** يشغّل البرمجية، ويستخدم تقنيات ومناهج اختبار مختلفة لاستخراج حالات الاختبار (الفصل 4). أما **الاختبار الساكن (Static Testing)** فلا يشغّل شيئًا، ويشمل المراجعات والتحليل الساكن (الفصل 3). لذلك يبدأ الاختبار قبل وجود شيفرة: مراجعة قصة «كوبون واحد لكل طلب» واكتشاف أنها لا تذكر ماذا يحدث للكوبون إذا أُلغي الطلب هي اختبار.

### أكثر من نشاط تقني — More Than a Technical Activity

الاختبار يحتاج أيضًا إلى تخطيط وإدارة وتقدير ومتابعة وتحكم (الفصل 5). والمختبرون يستخدمون الأدوات (الفصل 6)، لكن الاختبار **نشاط ذهني** في جوهره، يتطلب معرفة متخصصة ومهارات تحليلية وتفكيرًا نقديًا و**تفكيرًا منظوميًا** يرى كيف تتفاعل أجزاء النظام.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Testing is not the same as test execution. Planning, analysis, design, implementation, monitoring and completion are all part of testing, and so is reviewing a document without running anything.</p><p class="gx-ar" lang="ar" dir="rtl">الاختبار ليس مرادفًا لتشغيل الاختبارات. التخطيط والتحليل والتصميم والتجهيز والمتابعة والإغلاق كلها جزء من الاختبار، وكذلك مراجعة وثيقة دون تشغيل أي شيء.</p></aside>

### الأهداف المعتادة للاختبار — Typical Test Objectives

**هدف الاختبار (Test Objective)** هو سبب الاختبار أو غايته. يذكر المنهج تسعة أهداف معتادة:

| # | Test objective | Delivery-app example |
| --- | --- | --- |
| 1 | Evaluating work products (requirements, user stories, designs, code) | Reviewing the coupon user story |
| 2 | Causing failures and finding defects | A 19.99 JOD order wrongly gets free delivery |
| 3 | Ensuring required coverage of a test object | Every order state transition is exercised |
| 4 | Reducing the risk level of inadequate software quality | Extra tests on card payments |
| 5 | Verifying whether specified requirements have been fulfilled | Minimum order of 5.00 JOD is enforced |
| 6 | Verifying compliance with contractual, legal and regulatory requirements | Card data handling meets payment rules |
| 7 | Providing information to stakeholders for informed decisions | Test report before the store release |
| 8 | Building confidence in the quality of the test object | Smooth end-to-end order on iOS and Android |
| 9 | Validating that the test object is complete and works as stakeholders expect | Restaurants try the dashboard in a real shift |

لاحظ أن بعض الأهداف **تبحث عن المشكلات** (2، 4)، وبعضها **يقيس ويطمئن** (3، 7، 8)، وبعضها **يقارن بمرجع**: المتطلبات (5)، أو القانون والعقود (6)، أو توقعات أصحاب المصلحة (9). والهدف الأول يذكّرك بأن موضوع الاختبار ليس الشيفرة وحدها.

هدفان يحتاجان توضيحًا: **التغطية (Coverage)** تعني أن نقيس كم من عناصر موضوع الاختبار مررنا عليها، فلا نترك حالة طلب أو طريقة دفع دون اختبار. و**خفض المخاطر** يعني أن الاختبار لا يزيل الخطر تمامًا، لكنه يقلل احتمال أن تصل إلى الزبائن برمجية جودتها غير كافية.

### الأهداف تختلف حسب السياق — Objectives Depend on Context

لا يكون لكل الأهداف الوزن نفسه دائمًا. يتغير الاختيار حسب **السياق**: مُخرَج العمل الذي نختبره، و**مستوى الاختبار**، والمخاطر، ودورة حياة التطوير المتّبعة، وعوامل سياق العمل مثل هيكل المؤسسة والمنافسة و**وقت الوصول للسوق**. في اختبار المكوّنات يغلب هدف اكتشاف الـ defects مبكرًا، وفي اختبار القبول يغلب بناء الثقة والمصادقة. وإذا كان منافس سيطلق ميزة «الطلب المجدول» قريبًا، قد يركّز الفريق على تزويد مالك المنتج بمعلومات سريعة تدعم قرار الإطلاق.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A banking app must comply with central bank regulations, so verifying compliance becomes a key objective. A startup's prototype may focus on giving the founders quick information about whether the main flow works at all.</p><p class="gx-ar" lang="ar" dir="rtl">تطبيق بنكي يجب أن يلتزم بتعليمات البنك المركزي، فيصبح التحقق من الالتزام هدفًا رئيسيًا. أما النموذج الأولي لشركة ناشئة فقد يركّز على تزويد المؤسسين بمعلومة سريعة عن عمل المسار الرئيسي من الأساس.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">This is a K1 objective: you need to recognise the typical objectives in a list. Watch for options that sound plausible but are not test objectives, such as "fixing defects" (that is debugging) or "proving the software has no defects" (testing cannot do that).</p><p class="gx-ar" lang="ar" dir="rtl">هذا هدف K1: المطلوب أن تتعرّف على الأهداف المعتادة ضمن قائمة. انتبه للخيارات التي تبدو منطقية لكنها ليست أهداف اختبار، مثل «إصلاح الـ defects» (هذا تنقيح Debugging) أو «إثبات خلو البرمجية من الـ defects» (الاختبار لا يستطيع ذلك).</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking validation is the same as verification. Verification compares the product with its specification; validation checks whether it meets the real needs of its users, even if the specification was incomplete.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن المصادقة هي نفسها التحقق. التحقق يقارن المنتج بمواصفاته؛ والمصادقة تتأكد من أنه يلبّي الاحتياجات الفعلية لمستخدميه، حتى لو كانت المواصفات ناقصة.</p></aside>

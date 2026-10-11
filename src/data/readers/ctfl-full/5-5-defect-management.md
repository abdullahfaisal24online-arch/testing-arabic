---
order: 16
slug: "5-5"
chapter: 5
section: "5.5"
title: "Defect Management"
titleAr: "إدارة الـ defects"
objectives: "FL-5.5.1 · K3"
minutes: 20
lo:
  FL-5.5.1: "Prepare a defect report."
loAr:
  FL-5.5.1: "تُعدّ تقرير defect."
labs: ["LAB-5.5"]
takeaways:
  - "Defect management follows an agreed workflow: logging anomalies, analysing and classifying them, deciding on a response (fix or keep as is), and closing the report."
  - "Reported anomalies may be real defects or something else, such as a false positive or a change request; this is resolved during defect management."
  - "A defect report gives the people responsible enough information to resolve the issue, tracks quality, and gives ideas for improving processes."
  - "A typical defect report contains: ID, title, date, issuing organization, author and role, test object and environment, context, description for reproduction, expected and actual results, severity, priority, status and references."
  - "At a minimum, the defect management process includes a workflow from discovery to closure and rules for classification; it must be followed by all involved stakeholders, and defects from static testing should be handled similarly."
  - "Severity is the degree of impact; priority is the urgency of the fix. They are set separately and can differ."
takeawaysAr:
  - "إدارة الـ defects تتبع سير عمل متفقًا عليه: تسجيل الحالات الشاذة، وتحليلها وتصنيفها، وتقرير الاستجابة (إصلاح أو إبقاء كما هي)، وإغلاق التقرير."
  - "الحالات الشاذة المبلّغ عنها قد تكون defects حقيقية أو شيئًا آخر، مثل إنذار كاذب أو طلب تغيير؛ ويُحسم ذلك ضمن إدارة الـ defects."
  - "تقرير الـ defect يعطي المسؤولين معلومات كافية لحل المشكلة، ويتابع الجودة، ويقدّم أفكارًا لتحسين العمليات."
  - "تقرير الـ defect المعتاد يحتوي: المعرّف، والعنوان، والتاريخ، والجهة المُصدِرة، والكاتب ودوره، وموضوع الاختبار والبيئة، والسياق، والوصف لإعادة الإنتاج، والنتائج المتوقعة والفعلية، والخطورة، والأولوية، والحالة، والمراجع."
  - "عملية إدارة الـ defects تتضمن كحد أدنى سير عمل من الاكتشاف حتى الإغلاق وقواعد للتصنيف؛ ويجب أن يتّبعها كل أصحاب المصلحة المعنيين، ويُنصح بمعالجة الـ defects في الاختبار الساكن بطريقة مشابهة."
  - "الخطورة هي درجة الأثر، والأولوية هي استعجال الإصلاح؛ تُحددان كلًّا على حدة وقد تختلفان."
terms:
  - en: "Defect Management"
    ar: "إدارة الـ defects"
    def: "The process of recognising, recording, classifying, investigating, resolving and closing defects."
    defAr: "عملية التعرّف على الـ defects وتسجيلها وتصنيفها والتحقيق فيها وحلّها وإغلاقها."
    match: ["Defect Management", "defect management"]
  - en: "Defect Report"
    ar: "تقرير الـ defect"
    def: "Documentation of the occurrence, nature and status of a defect."
    defAr: "توثيق لحدوث الـ defect وطبيعته وحالته."
    match: ["Defect Report", "defect report", "defect reports"]
  - en: "Severity"
    ar: "الخطورة"
    def: "The degree of impact a defect has on the interests of stakeholders or requirements."
    defAr: "درجة أثر الـ defect على مصالح أصحاب المصلحة أو على المتطلبات."
    match: ["Severity", "severity"]
  - en: "Priority"
    ar: "الأولوية"
    def: "The level of urgency assigned to fixing a defect."
    defAr: "مستوى الاستعجال المحدد لإصلاح الـ defect."
  - en: "False Positive"
    ar: "الإنذار الكاذب"
    def: "A reported anomaly that turns out not to be a defect, for example caused by a wrong test or test environment."
    defAr: "حالة شاذة مبلّغ عنها يتبيّن أنها ليست defect، مثلًا بسبب اختبار أو بيئة اختبار خاطئة."
    match: ["False Positive", "false positive"]
---
أحد الأهداف الرئيسية للاختبار هو **اكتشاف الـ defects**. لكن الـ defect الذي يُكتشف ثم يضيع في رسالة شات، أو يُوصف بعبارة «الكوبون لا يعمل»، لا يُصلَح. لذلك لا بد من **عملية راسخة لإدارة الـ defects (Defect Management)**، يعرفها الجميع ويتّبعها الجميع. في هذا القسم نتعلّم العملية، ثم نطبّق الهدف العملي (K3): **إعداد تقرير defect** كامل. والتقرير الجيد ليس مهارة كتابة فقط، بل مهارة اختبار: كلما عزلت الشرط الذي يُظهر الفشل بدقة أكبر، قصُر الطريق من الاكتشاف إلى الإصلاح، وقلّ الجدل بين المختبرين والمطوّرين حول ما حدث فعلًا.

### ليست كل حالة شاذة defect — Anomaly or Defect?

نقول «defects» للتبسيط، لكن ما يُبلَّغ عنه في الحقيقة **حالات شاذة (Anomalies)**: سلوك يختلف عن المتوقع. وقد يتبيّن أن الحالة الشاذة:

- **defect حقيقي:** رسوم التوصيل تُحتسب على طلب قيمته 20.00 دينارًا.
- **إنذار كاذب (False Positive):** الاختبار فشل لأن الكوبون في بيانات الاختبار انتهت صلاحيته، لا لأن البرنامج خاطئ.
- **طلب تغيير (Change Request):** المختبر توقّع أن تظهر رسوم التوصيل قبل صفحة الدفع، لكن المتطلبات لا تنص على ذلك؛ هذه رغبة جديدة لا defect.

حسم هذا السؤال يحدث **أثناء عملية التعامل مع تقارير الـ defects**، لا قبلها. لهذا يسجّل المختبر ما رآه، ولا ينتظر حتى يتأكد بنفسه من طبيعته.

ويمكن الإبلاغ عن الحالات الشاذة **في أي مرحلة من دورة حياة التطوير**، و**شكل الإبلاغ يعتمد على نموذج دورة الحياة**: في مراجعة متطلبات قد تكون تعليقًا في وثيقة المراجعة، وفي فريق Scrum قد تكون بطاقة على اللوحة أو تذكرة في أداة إدارة الـ defects، وفي مشروع تسلسلي رسمي تقريرًا بقالب محدد.

### العملية وسير العمل — Process and Workflow

**كحد أدنى**، تتضمن عملية إدارة الـ defects أمرين:

1. **سير عمل (Workflow)** لمعالجة كل defect أو حالة شاذة **من اكتشافها حتى إغلاقها**.
2. **قواعد لتصنيفها**، مثل تعريف درجات الخطورة والأولوية، حتى يقصد الجميع الشيء نفسه بكلمة «حرج».

<figure class="gx-figure" aria-label="A typical defect management workflow."><div class="gx-flow-row"><span class="gx-flow-node">Log<small>the anomaly</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Analyse & classify</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Decide response<small>fix or keep</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Close</span></div><figcaption>A typical defect management workflow.</figcaption></figure>

يتكوّن سير العمل عادة من:

1. **تسجيل** الحالات الشاذة المبلّغ عنها.
2. **تحليلها وتصنيفها:** هل هي defect حقيقي؟ هل هي مكررة؟ ما خطورتها؟
3. **تقرير الاستجابة المناسبة**، مثل **إصلاحها** أو **إبقائها كما هي** (مثلًا defect تجميلي في شاشة ستُستبدل قريبًا).
4. **إغلاق** تقرير الـ defect.

**يجب أن يتّبع كل أصحاب المصلحة المعنيين هذه العملية.** إذا أصلح مطوّر defect دون تحديث حالته، فلن يعرف المختبر أن عليه إجراء اختبار التأكيد، وستبقى مقاييس الـ defects خاطئة. ويُنصح بمعالجة **الـ defects المكتشفة في الاختبار الساكن**، وخاصة **التحليل الساكن**، **بطريقة مشابهة**، حتى لا تبقى خارج المتابعة والقياس.

**مثال على مسار الحالات** لـ defect واحد: Open ← Waiting to be fixed ← Awaiting confirmation testing ← Closed. وإذا فشل اختبار التأكيد: Re-opened ← Waiting to be fixed من جديد. وقد ينتهي تقرير آخر بحالة **Rejected** (إنذار كاذب)، أو **Duplicate** (defect سبق تسجيله)، أو **Deferred** (يُصلح في إصدار لاحق).

### أهداف تقرير الـ defect — Objectives of a Defect Report

لتقرير الـ defect المعتاد ثلاثة أهداف:

1. **تزويد المسؤولين عن معالجة الـ defects وحلها بمعلومات كافية لحل المشكلة.** هذا الهدف المباشر: مطوّر لم يرَ الفشل يجب أن يفهمه ويعيد إنتاجه من التقرير وحده.
2. **توفير وسيلة لمتابعة جودة مُخرَج العمل.** مجموع التقارير يعطي مقاييس الـ defects (القسم 5.3.1): عددها، وخطورتها، وكثافتها في كل وحدة.
3. **تقديم أفكار لتحسين عمليات التطوير والاختبار.** إذا كانت أغلب الـ defects في الإصدار في حسابات المبالغ العشرية، فربما نحتاج قاعدة برمجة للمبالغ، أو مراجعة أدق لهذا النوع من الشيفرة.

### محتوى تقرير الـ defect — Contents of a Defect Report

تقرير الـ defect المسجّل أثناء **الاختبار الديناميكي** يتضمن عادة الحقول التالية. لاحظ سبب وجود كل حقل:

| Field | What it holds | Why it matters |
| --- | --- | --- |
| Unique identifier | e.g. DEF-1287 | Reference it without confusion, link it to tests and builds |
| Title | Short summary of the anomaly | Understand the problem from a list, without opening the report |
| Date, issuing organization, author and role | When observed, by which team, by whom | Know who to ask and when it happened |
| Test object and test environment | What was tested, on which build and environment | Reproduce on the same configuration |
| Context | Test case, test activity, SDLC phase, technique, checklist, test data | Understand how the failure was found |
| Description of the failure | Test steps, test logs, database dumps, screenshots, recordings | Reproduce and resolve |
| Expected and actual results | What should happen vs what happened | Show the deviation clearly |
| Severity | Degree of impact on stakeholders' interests or requirements | Judge how serious it is |
| Priority to fix | Urgency of the fix | Decide the order of fixing |
| Status | open, deferred, duplicate, waiting to be fixed, awaiting confirmation testing, re-opened, closed, rejected | Track it through the workflow |
| References | e.g. to the test case | Keep traceability |

بعض هذه البيانات **قد تُضاف تلقائيًا** عند استخدام أدوات إدارة الـ defects، مثل **المعرّف** و**التاريخ** و**الكاتب** و**الحالة الأولية**. وتوجد قوالب ونماذج لتقارير الـ defects في المعيار **ISO/IEC/IEEE 29119-3**، الذي يسمّيها **تقارير الحوادث (Incident Reports)**.

### الخطورة والأولوية — Severity vs Priority

<figure class="gx-figure gx-spectrum" aria-label="Severity vs priority."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Severity</b><span>How big is the impact? Set by the impact on stakeholders or requirements.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Priority</b><span>How urgent is the fix? Set by business needs and plans.</span></div></div><figcaption>Severity vs priority.</figcaption></figure>

**الخطورة (Severity)** تقيس **حجم الأثر**، و**الأولوية (Priority)** تقيس **استعجال الإصلاح**. غالبًا ترتفعان معًا، لكن ليس دائمًا:

| | High priority | Low priority |
| --- | --- | --- |
| High severity | Card charged twice at checkout | Crash in a monthly admin report used by one person |
| Low severity | Restaurant logo misspelled on the launch banner | Slight misalignment on the Settings screen in landscape mode |

### خطوات إعداد تقرير الـ defect — Step by Step

1. **أعد إنتاج الفشل** مرة أخرى على الأقل، وحدّد أقل خطوات تُظهره.
2. **اعزل الشرط:** ما الذي يُحدث الفرق؟ (مع كوبون أم بدونه؟ عند 20.00 أم عند 20.01؟)
3. **اكتب العنوان:** ماذا يحدث، وأين، وتحت أي شرط.
4. **سجّل موضوع الاختبار والبيئة** بأرقام إصدارات دقيقة، لا «آخر نسخة».
5. **اكتب السياق:** حالة الاختبار، والنشاط، والمرحلة، والتقنية، وبيانات الاختبار.
6. **اكتب خطوات مرقّمة** ثم **النتيجة المتوقعة والفعلية**، وأرفق الأدلة.
7. **حدّد الخطورة والأولوية** كلًّا على حدة، مع تبرير.
8. **أضف المراجع** وراجع التقرير: هل يستطيع شخص غريب عن الميزة إعادة الإنتاج منه وحده؟

### مثال محلول: تقرير defect كامل — A Complete Defect Report

أثناء اختبار النظام في الـ sprint 14، نفّذت المختبرة حالة اختبار مبنية على BVA لحدّ التوصيل المجاني. طلب من ثلاث وجبات بأسعار 6.60 و9.45 و3.95 دنانير قيمته 20.00 دينارًا بالضبط، فيجب أن يكون التوصيل مجانيًا، لكن التطبيق احتسب رسومًا.

| Field | Value |
| --- | --- |
| Unique identifier | DEF-1287 |
| Title | Delivery fee 1.50 JOD charged when a multi-meal subtotal is exactly 20.00 JOD |
| Date observed | 2026-10-04 |
| Issuing organization | Delivery app QA (Scrum team) |
| Author and role | Lina Haddad, Tester |
| Test object | Customer app Android 3.2.0 (412) with Pricing API 5.8.1 |
| Test environment | ENV-B (staging); Android 14 phone; Arabic UI; payment gateway sandbox API v2 |
| Context | TC-PRC-031 "Free delivery threshold"; system testing, sprint 14, release 3.2; technique: 2-value BVA on 20.00; test data: restaurant R-102, meals priced 6.60, 9.45 and 3.95 JOD, no coupon |
| Description | Steps 1–6 below; attached: screenshot of the cart, Pricing API log, screen recording |
| Expected result | Delivery fee 0.00 JOD; total to pay 20.00 JOD |
| Actual result | Delivery fee 1.50 JOD; total to pay 21.50 JOD |
| Severity | Major: customers are overcharged; violates the free-delivery requirement |
| Priority | High: release planned in 3 days; a coupon campaign starts at launch |
| Status | Open |
| References | TC-PRC-031 v4; user story US-218; CI run #1842 |

**خطوات إعادة الإنتاج (Description):**

1. سجّل الدخول بحساب الزبون test.customer07.
2. افتح المطعم R-102 وأضف ثلاث وجبات بأسعار 6.60 و9.45 و3.95 دنانير.
3. افتح السلة دون إدخال أي كوبون.
4. تحقق أن المجموع الفرعي المعروض 20.00.
5. لاحظ رسوم التوصيل والمجموع النهائي.
6. للمقارنة: طلب من وجبة واحدة سعرها 20.00 يُظهر توصيلًا مجانيًا بشكل صحيح، وطلب من ثلاث وجبات بأسعار 6.65 و9.45 و3.95 (المجموع 20.05) يُظهر توصيلًا مجانيًا أيضًا.

لاحظ أن الخطوة 6 لا تشخّص السبب، لكنها **تعزل الشرط**: المشكلة تظهر فقط عند الحد تمامًا وعندما يُجمع المبلغ من عدة وجبات. وهذا يوفّر على المطوّر ساعات، فيبحث مباشرة في طريقة جمع الأسعار ومقارنة المجموع بالحد. ولاحظ أيضًا أن التقرير يصف الحقائق فقط، ولا يلوم أحدًا.

**ماذا حدث للتقرير بعد ذلك؟** في اجتماع فرز الـ defects صُنّف التقرير defect حقيقيًا لا إنذارًا كاذبًا، وثُبّتت الخطورة والأولوية، فانتقلت حالته إلى Waiting to be fixed. وجد المطوّر أن الأسعار تُجمع بأرقام عشرية تقريبية (floating point) فيصبح المجموع 19.999999999999996 بدل 20.00، فيفشل الشرط «≥ 20.00». أُصلح الـ defect في البناء 413، فصارت الحالة Awaiting confirmation testing. أعادت المختبرة تنفيذ TC-PRC-031 على البناء 413 فنجح، وشغّلت اختبارات الانحدار للحسابات، ثم أُغلق التقرير (Closed). وهكذا حقق التقرير أهدافه الثلاثة: أعطى المطوّر ما يكفي للإصلاح، ودخل في مقاييس جودة وحدة التسعير، وأدّى إلى تحسين في العملية: قاعدة جديدة بأن تُخزَّن المبالغ كأعداد صحيحة بالقروش، وبند جديد في قائمة تحقق المراجعة.

### مثال 2: تقرير ضعيف وتحسينه — Weak vs Strong

| Weak report | Problem | Improved |
| --- | --- | --- |
| "Coupon not working" | Title says nothing specific | "Expired coupon SAVE10 accepted on 2026-10-05 at 00:10" |
| "Tested on the app" | Test object and environment unknown | "iOS 3.2.0 (409), ENV-B, iPhone 13, iOS 18" |
| "It gives the wrong total" | No expected vs actual | "Expected: coupon rejected, total 12.00. Actual: 10% discount applied, total 10.80" |
| "Very urgent!!!" | Severity and priority mixed with emotion | "Severity: Major. Priority: Medium, campaign coupons not affected" |

### مثال 3: حالة دقيقة — Edge Case

بلّغ مختبر أن اختبار «إلغاء الطلب» فشل لأن زر الإلغاء لا يظهر لطلب في حالة Out for delivery. عند التحليل تبيّن أن المتطلب ينص على أن الإلغاء ممكن **قبل** هذه الحالة فقط، فالسلوك صحيح وحالة الاختبار هي الخاطئة. يُغلق التقرير بحالة **Rejected** (إنذار كاذب)، وتُصحَّح حالة الاختبار. التقرير لم يكن مضيعة للوقت: لقد كشف defect في مُخرَج اختبار، وهذا أيضًا تحسين للعملية.

### لا تخلط بين — Don't Confuse

| Status | Meaning | Delivery-app example |
| --- | --- | --- |
| Rejected | Not a defect (e.g. false positive) | Cancel button hidden in Out for delivery, as required |
| Duplicate | Already reported in another report | A second tester logs the 20.00 JOD fee problem again |
| Deferred | Real defect, fix postponed | Landscape misalignment on Settings, moved to release 3.3 |
| Re-opened | Confirmation testing failed | The fix works on Android but not on iOS |

لكل حالة من الحالات الأربع معنى مختلف: المرفوض ليس defect أصلًا، والمكرر defect لكنه مسجّل في مكان آخر، والمؤجل defect حقيقي سيبقى في المنتج مؤقتًا فيجب أن يظهر في تقرير الإكمال ضمن الـ defects غير المصلحة، أما المعاد فتحه فيعني أن اختبار التأكيد فشل فيعود الـ defect إلى سير العمل.

<section class="gx-lab" data-lab="LAB-5.5"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Write a Complete Defect Report</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · اكتب تقرير defect كاملًا</span></span><span class="gx-lab-meta">LAB-5.5 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> prepare a defect report with every field from the syllabus (K3).</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> إعداد تقرير defect بكل الحقول المذكورة في المنهج (هدف K3).</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Reproduce a real failure from your product, or use this one: the order confirmation email shows the wrong total when a coupon is used.</span><span class="gx-ar" lang="ar" dir="rtl">أعد إنتاج عطل حقيقي من منتجك، أو استخدم هذا: إيميل تأكيد الطلب يعرض مجموعًا خاطئًا عند استخدام كوبون.</span></li><li><span class="gx-en" lang="en" dir="ltr">Write the title so someone can understand the problem without opening the report.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب العنوان بحيث يفهم أي شخص المشكلة دون فتح التقرير.</span></li><li><span class="gx-en" lang="en" dir="ltr">Fill in test object, environment and context (test case, phase, test data).</span><span class="gx-ar" lang="ar" dir="rtl">املأ موضوع الاختبار والبيئة والسياق (حالة الاختبار، والمرحلة، وبيانات الاختبار).</span></li><li><span class="gx-en" lang="en" dir="ltr">Write numbered reproduction steps, then expected and actual results side by side, and attach evidence.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب خطوات إعادة الإنتاج مرقّمة، ثم النتائج المتوقعة والفعلية جنبًا إلى جنب، وأرفق الدليل.</span></li><li><span class="gx-en" lang="en" dir="ltr">Set severity and priority separately and justify each in one line.</span><span class="gx-ar" lang="ar" dir="rtl">حدد الخطورة والأولوية كلًّا على حدة، وبرّر كلًّا منهما بسطر واحد.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">A developer who has never seen the feature can reproduce the failure from your steps alone; expected and actual results differ clearly; severity and priority are not just copies of each other; and nothing in the report blames a person.</span><span class="gx-ar" lang="ar" dir="rtl">مطوّر لم يرَ الميزة من قبل يستطيع إعادة إنتاج العطل من خطواتك وحدها؛ والنتائج المتوقعة والفعلية مختلفة بوضوح؛ والخطورة والأولوية ليستا نسخة من بعضهما؛ ولا شيء في التقرير يلوم شخصًا.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K3: you may be given a defect report and asked what is missing. The usual gaps: expected vs actual results, steps to reproduce, test environment or version, or severity/priority.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K3: قد يُعطى لك تقرير defect ويُسأل عمّا ينقصه. الفجوات المعتادة: النتائج المتوقعة مقابل الفعلية، أو خطوات إعادة الإنتاج، أو بيئة الاختبار أو الإصدار، أو الخطورة/الأولوية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Mixing up severity and priority. A typo on the home page has low severity but may get high priority; a crash in a rarely used admin report has high severity but may get lower priority.</p><p class="gx-ar" lang="ar" dir="rtl">الخلط بين الخطورة والأولوية. خطأ إملائي في الصفحة الرئيسية خطورته منخفضة لكن قد يحصل على أولوية عالية؛ وانهيار في تقرير إداري نادر الاستخدام خطورته عالية لكن قد يحصل على أولوية أقل.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake · not every anomaly is a defect</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع · ليست كل حالة شاذة defect</span></p><p class="gx-en" lang="en" dir="ltr">Assuming every reported anomaly is a real defect. It may be a false positive or a change request; that is decided while the report is handled, so log what you observed and let the process classify it.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن كل حالة شاذة مبلّغ عنها defect حقيقي. قد تكون إنذارًا كاذبًا أو طلب تغيير؛ وهذا يُحسم أثناء معالجة التقرير، فسجّل ما لاحظته واترك العملية تصنّفه.</p></aside>

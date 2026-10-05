---
order: 16
slug: "5-5"
chapter: 5
section: "5.5"
title: "Defect Management"
titleAr: "إدارة العيوب"
objectives: "FL-5.5.1 · K3"
minutes: 10
lo:
  FL-5.5.1: "Prepare a defect report."
loAr:
  FL-5.5.1: "تُعدّ تقرير عيب."
labs: ["LAB-5.5"]
takeaways:
  - "Defect management follows an agreed workflow: logging anomalies, analysing and classifying them, deciding on a response (fix or keep as is), and closing the report."
  - "Reported anomalies may be real defects or something else, such as a false positive or a change request; this is resolved during defect management."
  - "A defect report gives the people responsible enough information to resolve the issue, tracks quality, and gives ideas for improving processes."
  - "A typical defect report contains: ID, title, date, author and role, test object and environment, context, description for reproduction, expected and actual results, severity, priority, status and references."
takeawaysAr:
  - "إدارة العيوب تتبع سير عمل متفقًا عليه: تسجيل الحالات الشاذة، وتحليلها وتصنيفها، وتقرير الاستجابة (إصلاح أو إبقاء كما هي)، وإغلاق التقرير."
  - "الحالات الشاذة المبلّغ عنها قد تكون عيوبًا حقيقية أو شيئًا آخر، مثل إنذار كاذب أو طلب تغيير؛ ويُحسم ذلك ضمن إدارة العيوب."
  - "تقرير العيب يعطي المسؤولين معلومات كافية لحل المشكلة، ويتابع الجودة، ويقدّم أفكارًا لتحسين العمليات."
  - "تقرير العيب المعتاد يحتوي: المعرّف، والعنوان، والتاريخ، والكاتب ودوره، وموضوع الاختبار والبيئة، والسياق، والوصف لإعادة الإنتاج، والنتائج المتوقعة والفعلية، والخطورة، والأولوية، والحالة، والمراجع."
terms:
  - en: "Defect Management"
    ar: "إدارة العيوب"
    def: "The process of recognising, recording, classifying, investigating, resolving and closing defects."
    defAr: "عملية التعرّف على العيوب وتسجيلها وتصنيفها والتحقيق فيها وحلّها وإغلاقها."
    match: ["Defect Management", "defect management"]
  - en: "Defect Report"
    ar: "تقرير العيب"
    def: "Documentation of the occurrence, nature and status of a defect."
    defAr: "توثيق لحدوث العيب وطبيعته وحالته."
    match: ["Defect Report", "defect report", "defect reports"]
  - en: "Severity"
    ar: "الخطورة"
    def: "The degree of impact a defect has on the interests of stakeholders or requirements."
    defAr: "درجة أثر العيب على مصالح أصحاب المصلحة أو على المتطلبات."
    match: ["Severity", "severity"]
  - en: "Priority"
    ar: "الأولوية"
    def: "The level of urgency assigned to fixing a defect."
    defAr: "مستوى الاستعجال المحدد لإصلاح العيب."
  - en: "False Positive"
    ar: "الإنذار الكاذب"
    def: "A reported anomaly that turns out not to be a defect, for example caused by a wrong test or test environment."
    defAr: "حالة شاذة مبلّغ عنها يتبيّن أنها ليست عيبًا، مثلًا بسبب اختبار أو بيئة اختبار خاطئة."
    match: ["False Positive", "false positive"]
---
أحد الأهداف الرئيسية للاختبار هو اكتشاف العيوب. لذلك يجب أن تكون هناك **عملية لإدارة العيوب** متفق عليها.

### سير العمل — The Workflow

سير العمل يختلف حسب السياق، لكنه يشمل عادة:

<figure class="gx-figure" aria-label="A typical defect management workflow."><div class="gx-flow-row"><span class="gx-flow-node">Log<small>the anomaly</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Analyse & classify</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Decide response<small>fix or keep</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Close</span></div><figcaption>A typical defect management workflow.</figcaption></figure>

1. **تسجيل** الحالات الشاذة المبلّغ عنها.
2. **تحليلها وتصنيفها.**
3. **تقرير الاستجابة المناسبة**، مثل إصلاحها أو إبقائها كما هي.
4. **إغلاق** تقرير العيب.

يجب أن يتّبع **كل أصحاب المصلحة** المعنيين هذه العملية. ويُنصح بمعالجة **العيوب المكتشفة بالاختبار الساكن** (خاصة التحليل الساكن) بطريقة مشابهة.

### ليست كل حالة شاذة عيبًا — Not Every Anomaly Is a Defect

الحالات الشاذة المبلّغ عنها قد تتبيّن أنها **عيوب حقيقية**، أو **شيئًا آخر**، مثل **إنذار كاذب (False Positive)** أو **طلب تغيير**. يُحسم ذلك خلال عملية إدارة العيوب. ويمكن الإبلاغ عن الحالات الشاذة في **أي مرحلة** من دورة التطوير، وشكلها يعتمد على هذه المرحلة.

### أهداف تقرير العيب — Objectives of a Defect Report

- تزويد المسؤولين عن معالجة العيوب **بمعلومات كافية لحل المشكلة**.
- وسيلة **لمتابعة جودة** مُخرَج العمل.
- تقديم **أفكار لتحسين** عمليات التطوير والاختبار.

### محتوى تقرير العيب — Contents of a Defect Report

تقرير العيب المسجّل أثناء **الاختبار الديناميكي** يشمل عادة:

| Field | المحتوى |
| --- | --- |
| Unique identifier | معرّف فريد |
| Title | عنوان مع ملخص قصير للحالة الشاذة |
| Date, organization, author | تاريخ الملاحظة، والجهة المُبلِّغة، والكاتب ودوره |
| Test object and environment | تحديد موضوع الاختبار وبيئة الاختبار |
| Context | حالة الاختبار المنفذة، ونشاط الاختبار، ومرحلة الـ SDLC، وأي معلومات مفيدة مثل التقنية أو قائمة التحقق أو بيانات الاختبار |
| Description | وصف العطل لإعادة إنتاجه وحله: الخطوات، وسجلات الاختبار، وتفريغ قاعدة البيانات، ولقطات الشاشة، أو التسجيلات |
| Expected and actual results | النتائج المتوقعة والنتائج الفعلية |
| Severity | درجة الأثر على مصالح أصحاب المصلحة أو المتطلبات |
| Priority | أولوية الإصلاح |
| Status | الحالة: مفتوح، مؤجَّل، مكرر، بانتظار الإصلاح، بانتظار اختبار التأكيد، أُعيد فتحه، مغلق، مرفوض |
| References | مراجع، مثل حالة الاختبار المرتبطة |

بعض هذه البيانات قد تُضاف تلقائيًا عند استخدام أدوات إدارة العيوب (مثل المعرّف والتاريخ والكاتب والحالة الأولية). قوالب تقارير العيوب وأمثلتها موجودة في **ISO/IEC/IEEE 29119-3**، ويسمّيها **تقارير الحوادث (Incident Reports)**.

<figure class="gx-figure gx-spectrum" aria-label="Severity vs priority."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Severity</b><span>How big is the impact? Set by the impact on stakeholders or requirements.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Priority</b><span>How urgent is the fix? Set by business needs and plans.</span></div></div><figcaption>Severity vs priority.</figcaption></figure>

<section class="gx-lab" data-lab="LAB-5.5"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Write a Complete Defect Report</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · اكتب تقرير عيب كاملًا</span></span><span class="gx-lab-meta">LAB-5.5 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> prepare a defect report with every field from the syllabus (K3).</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> إعداد تقرير عيب بكل الحقول المذكورة في المنهج (هدف K3).</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Reproduce a real failure from your product, or use this one: the order confirmation email shows the wrong total when a coupon is used.</span><span class="gx-ar" lang="ar" dir="rtl">أعد إنتاج عطل حقيقي من منتجك، أو استخدم هذا: إيميل تأكيد الطلب يعرض مجموعًا خاطئًا عند استخدام كوبون.</span></li><li><span class="gx-en" lang="en" dir="ltr">Write the title so someone can understand the problem without opening the report.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب العنوان بحيث يفهم أي شخص المشكلة دون فتح التقرير.</span></li><li><span class="gx-en" lang="en" dir="ltr">Fill in test object, environment and context (test case, phase, test data).</span><span class="gx-ar" lang="ar" dir="rtl">املأ موضوع الاختبار والبيئة والسياق (حالة الاختبار، والمرحلة، وبيانات الاختبار).</span></li><li><span class="gx-en" lang="en" dir="ltr">Write numbered reproduction steps, then expected and actual results side by side, and attach evidence.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب خطوات إعادة الإنتاج مرقّمة، ثم النتائج المتوقعة والفعلية جنبًا إلى جنب، وأرفق الدليل.</span></li><li><span class="gx-en" lang="en" dir="ltr">Set severity and priority separately and justify each in one line.</span><span class="gx-ar" lang="ar" dir="rtl">حدد الخطورة والأولوية كلًّا على حدة، وبرّر كلًّا منهما بسطر واحد.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">A developer who has never seen the feature can reproduce the failure from your steps alone; expected and actual results differ clearly; severity and priority are not just copies of each other; and nothing in the report blames a person.</span><span class="gx-ar" lang="ar" dir="rtl">مطوّر لم يرَ الميزة من قبل يستطيع إعادة إنتاج العطل من خطواتك وحدها؛ والنتائج المتوقعة والفعلية مختلفة بوضوح؛ والخطورة والأولوية ليستا نسخة من بعضهما؛ ولا شيء في التقرير يلوم شخصًا.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K3: you may be given a defect report and asked what is missing. The usual gaps: expected vs actual results, steps to reproduce, test environment or version, or severity/priority.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K3: قد يُعطى لك تقرير عيب ويُسأل عمّا ينقصه. الفجوات المعتادة: النتائج المتوقعة مقابل الفعلية، أو خطوات إعادة الإنتاج، أو بيئة الاختبار أو الإصدار، أو الخطورة/الأولوية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Mixing up severity and priority. A typo on the home page has low severity but may get high priority; a crash in a rarely used admin report has high severity but may get lower priority.</p><p class="gx-ar" lang="ar" dir="rtl">الخلط بين الخطورة والأولوية. خطأ إملائي في الصفحة الرئيسية خطورته منخفضة لكن قد يحصل على أولوية عالية؛ وانهيار في تقرير إداري نادر الاستخدام خطورته عالية لكن قد يحصل على أولوية أقل.</p></aside>

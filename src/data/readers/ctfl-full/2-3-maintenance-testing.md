---
order: 10
slug: "2-3"
chapter: 2
section: "2.3"
title: "Maintenance Testing"
titleAr: "اختبار الصيانة"
objectives: "FL-2.3.1 · K2"
minutes: 7
lo:
  FL-2.3.1: "Summarise maintenance testing and what triggers it."
loAr:
  FL-2.3.1: "تلخّص اختبار الصيانة وما يستدعيه."
takeaways:
  - "Maintenance can be corrective, adaptive to environment changes, or to improve performance or maintainability; it can be planned or an unplanned hot fix."
  - "Impact analysis before a change helps decide whether to make it, and how much testing it needs."
  - "Maintenance testing checks the change itself and runs regression tests on the unchanged parts, usually most of the system."
  - "Its scope depends on the risk of the change, the size of the existing system and the size of the change."
  - "Triggers: modifications, upgrades or migrations, and retirement."
takeawaysAr:
  - "الصيانة قد تكون تصحيحية، أو تكيّفًا مع تغيّر البيئة، أو لتحسين الأداء أو قابلية الصيانة؛ وقد تكون مخططة أو إصلاحًا عاجلًا غير مخطط."
  - "تحليل الأثر قبل التغيير يساعد في تقرير إجرائه، وكم يحتاج من اختبار."
  - "اختبار الصيانة يفحص التغيير نفسه، ويشغّل اختبارات انحدار على الأجزاء التي لم تتغير، وهي غالبًا معظم النظام."
  - "نطاقه يعتمد على خطورة التغيير، وحجم النظام الحالي، وحجم التغيير."
  - "ما يستدعيه: التعديلات، والترقيات أو الترحيل، والإحالة للتقاعد."
terms:
  - en: "Maintenance Testing"
    ar: "اختبار الصيانة"
    def: "Testing of changes to an operational system, or of the impact of a changed environment on it."
    defAr: "اختبار التغييرات على نظام قيد التشغيل، أو أثر تغيّر البيئة عليه."
    match: ["Maintenance Testing", "maintenance testing"]
  - en: "Hot Fix"
    ar: "الإصلاح العاجل"
    def: "An urgent, unplanned change to a system in production, usually to fix a critical defect."
    defAr: "تغيير عاجل غير مخطط على نظام في الإنتاج، غالبًا لإصلاح عيب حرج."
    match: ["Hot Fix", "hot fix", "hot fixes"]
---
بعد إطلاق النظام لا يتوقف العمل عليه. هناك أنواع مختلفة من **الصيانة**:

- **تصحيحية (Corrective):** لإصلاح العيوب.
- **تكيّفية (Adaptive):** للتكيّف مع تغيّرات في البيئة.
- **لتحسين الأداء أو قابلية الصيانة.**

يمكن أن تكون الصيانة جزءًا من **إصدارات ونشر مخطط**، أو **غير مخططة** مثل **الإصلاحات العاجلة (Hot Fixes)**.

### تحليل الأثر — Impact Analysis

قد يُجرى **تحليل الأثر** قبل إجراء التغيير، للمساعدة في تقرير ما إذا كان يجب إجراؤه، بناءً على عواقبه المحتملة على مناطق أخرى من النظام.

### ماذا يشمل اختبار الصيانة؟ — What Maintenance Testing Covers

اختبار التغييرات على نظام قيد التشغيل يشمل:

- **تقييم نجاح تنفيذ التغيير** نفسه.
- **التحقق من الانحدار المحتمل** في أجزاء النظام التي **لم تتغير**، وهي عادة **معظم النظام**.

### ما الذي يحدد نطاقه؟ — What Determines the Scope

- **درجة خطورة التغيير.**
- **حجم النظام الحالي.**
- **حجم التغيير.**

### ما الذي يستدعي الصيانة واختبارها؟ — Triggers

<figure class="gx-figure gx-spectrum" aria-label="The three groups of maintenance triggers."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Modifications</b><span>Planned enhancements (releases), corrective changes, hot fixes.</span></div><div class="gx-spectrum-item"><b>Upgrades or migrations</b><span>Platform changes, which need tests of the new environment and the changed software; data conversion when data moves from another application.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Retirement</b><span>End of life: test data archiving and, if needed, restore and retrieval procedures.</span></div></div><figcaption>The three groups of maintenance triggers.</figcaption></figure>

1. **التعديلات (Modifications):** مثل التحسينات المخططة (ضمن الإصدارات)، والتغييرات التصحيحية، والإصلاحات العاجلة.
2. **الترقيات أو الترحيل (Upgrades or Migrations):** للبيئة التشغيلية، مثل الانتقال من منصة لأخرى. هذا قد يتطلب اختبارات مرتبطة بالبيئة الجديدة وبالبرمجية المتغيرة، أو اختبارات **تحويل البيانات** عند ترحيل بيانات من تطبيق آخر إلى النظام الذي تتم صيانته.
3. **الإحالة للتقاعد (Retirement):** عندما يصل التطبيق لنهاية عمره. قد يتطلب ذلك اختبار **أرشفة البيانات** إذا كانت هناك حاجة للاحتفاظ بها لفترات طويلة. وقد يلزم أيضًا اختبار **إجراءات الاستعادة والاسترجاع** بعد الأرشفة، إذا كانت بعض البيانات ستُطلب خلال فترة الأرشفة.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A bank moves its customer portal from on-premise servers to the cloud (migration). Testing covers the portal on the new platform, the conversion of ten years of customer data, and a regression suite for the unchanged features. Two years later, the old reporting module is retired: the team tests that its data is archived and can still be retrieved for audits.</p><p class="gx-ar" lang="ar" dir="rtl">بنك ينقل بوابة عملائه من خوادم داخلية إلى السحابة (ترحيل). يشمل الاختبار البوابة على المنصة الجديدة، وتحويل بيانات عملاء عشر سنوات، ومجموعة انحدار للميزات التي لم تتغير. بعد سنتين تُحال وحدة التقارير القديمة للتقاعد: يختبر الفريق أرشفة بياناتها، وإمكانية استرجاعها لأغراض التدقيق.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Learn the three trigger groups and their examples. "Data conversion" belongs to migration; "archiving" and "restore after archiving" belong to retirement.</p><p class="gx-ar" lang="ar" dir="rtl">احفظ مجموعات المحفّزات الثلاث وأمثلتها. «تحويل البيانات» ينتمي للترحيل؛ و«الأرشفة» و«الاستعادة بعد الأرشفة» تنتميان للإحالة للتقاعد.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Testing only the changed part in maintenance. The unchanged parts, usually most of the system, need regression testing too.</p><p class="gx-ar" lang="ar" dir="rtl">اختبار الجزء الذي تغيّر فقط أثناء الصيانة. الأجزاء التي لم تتغير، وهي غالبًا معظم النظام، تحتاج اختبار انحدار أيضًا.</p></aside>

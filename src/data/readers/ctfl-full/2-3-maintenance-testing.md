---
order: 10
slug: "2-3"
chapter: 2
section: "2.3"
title: "Maintenance Testing"
titleAr: "اختبار الصيانة"
objectives: "FL-2.3.1 · K2"
minutes: 12
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
    defAr: "تغيير عاجل غير مخطط على نظام في الإنتاج، غالبًا لإصلاح defect حرج."
    match: ["Hot Fix", "hot fix", "hot fixes"]
---
إطلاق تطبيق التوصيل في المتاجر ليس نهاية القصة، بل بدايتها. بعد الإطلاق تأتي بلاغات الزبائن عن defects، وتطلب المطاعم ميزات جديدة، وتصدر نسخ جديدة من iOS وAndroid، وتغيّر بوابة الدفع واجهتها. كل تغيير على **نظام قيد التشغيل** يحتاج اختبارًا، وهذا هو **اختبار الصيانة (maintenance testing)**. الفرق المهم عن الاختبار قبل الإطلاق أن هناك الآن زبائن حقيقيين وبيانات حقيقية، وأي خطأ يظهر لهم مباشرة.

### فئات الصيانة — Categories of Maintenance

يذكر المنهج أن للصيانة فئات مختلفة (التفاصيل في معيار **ISO/IEC 14764**):

- **تصحيحية (corrective)**: لإصلاح الـ defects، مثل تصحيح رسوم توصيل تُحسب خطأً.
- **تكيّفية (adaptive)** مع التغيّرات في البيئة: مثل تعديل التطبيق ليعمل على إصدار جديد من Android، أو مع نسخة جديدة من واجهة بوابة الدفع.
- **لتحسين الأداء أو قابلية الصيانة**: مثل تسريع البحث عن المطاعم، أو إعادة هيكلة شيفرة الكوبونات لتسهيل تعديلها لاحقًا.

لذلك قد تتضمن الصيانة **إصدارات ونشرًا مخططًا (planned releases/deployments)**، أو **غير مخطط** مثل **الإصلاحات العاجلة (hot fixes)**. الإصدار المخطط يأتي ضمن جدول الفريق كل 2 sprints، فيتسع له وقت الاختبار المعتاد؛ أما الإصلاح العاجل، كعطل يمنع الدفع بالبطاقة مساء الجمعة، فيُنشر خلال ساعات، والاختبار يجب أن يكون سريعًا ومركّزًا، وهنا تظهر قيمة مجموعة الانحدار المؤتمتة.

### تحليل الأثر قبل التغيير — Impact Analysis Before the Change

**قد يُجرى تحليل الأثر (impact analysis) قبل إجراء التغيير**، **للمساعدة في تقرير ما إذا كان يجب إجراؤه أصلًا**، **بناءً على عواقبه المحتملة في مناطق أخرى من النظام**. لاحظ الفرق عن القسم 2.2.3: هناك استُخدم تحليل الأثر لتحديد **نطاق اختبار الانحدار**؛ وهنا يُستخدم أيضًا **كأداة قرار**. مثال: طلب مطعم تغيير الحد الأدنى للطلب لديه وحده إلى 7 دنانير. يكشف تحليل الأثر أن القاعدة الحالية عامة ومستخدمة في السلة والكوبونات والتقارير، فيقرر مالك المنتج تأجيل التغيير إلى إصدار مخطط بدل تنفيذه كإصلاح عاجل.

### ماذا يشمل اختبار الصيانة؟ — What Maintenance Testing Covers

اختبار التغييرات على نظام قيد التشغيل يشمل أمرين:

1. **تقييم نجاح تنفيذ التغيير** نفسه: هل الميزة الجديدة تعمل؟ هل الـ defect أُصلح؟
2. **التحقق من الانحدار المحتمل في أجزاء النظام التي لم تتغير**، وهي **عادة معظم النظام**. التغيير قد يكون سطرًا واحدًا، لكن ما يعتمد عليه قد يكون كثيرًا. ولهذا يجمع اختبار الصيانة بين ما تعلمناه في القسم 2.2.3: اختبار تأكيد أو اختبار للميزة الجديدة من جهة، واختبار انحدار واسع تختاره نتائج تحليل الأثر من جهة أخرى.

### ما الذي يحدد نطاقه؟ — What Determines the Scope

**يعتمد نطاق اختبار الصيانة عادة على**:

- **درجة خطورة التغيير**: تعديل في حساب المبلغ المدفوع أخطر من تغيير لون زر.
- **حجم النظام الحالي**: كلما كبر النظام كثرت الأجزاء التي قد تتأثر واتسعت مجموعة الانحدار.
- **حجم التغيير**: إضافة طريقة دفع جديدة تحتاج اختبارًا أوسع من تصحيح نص رسالة.

### ما الذي يستدعي الصيانة واختبارها؟ — Triggers

يصنّف المنهج محفّزات الصيانة واختبار الصيانة في ثلاث مجموعات:

<figure class="gx-figure gx-spectrum" aria-label="The three groups of maintenance triggers."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Modifications</b><span>Planned enhancements (releases), corrective changes, hot fixes.</span></div><div class="gx-spectrum-item"><b>Upgrades or migrations</b><span>Platform changes, which need tests of the new environment and the changed software; data conversion when data moves from another application.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Retirement</b><span>End of life: test data archiving and, if needed, restore and retrieval procedures.</span></div></div><figcaption>The three groups of maintenance triggers.</figcaption></figure>

**1. التعديلات (modifications)**: مثل **التحسينات المخططة** (المبنية على الإصدارات)، و**التغييرات التصحيحية**، و**الإصلاحات العاجلة**. في تطبيقنا: إضافة ميزة «إعادة الطلب» في الإصدار القادم، أو إصلاح عاجل لعطل الدفع.

**2. الترقيات أو الترحيل في البيئة التشغيلية (upgrades or migrations)**، **مثل الانتقال من منصة إلى أخرى**. هذا **قد يتطلب اختبارات مرتبطة بالبيئة الجديدة وبالبرمجية المتغيرة معًا**. أو قد يتطلب **اختبار تحويل البيانات (data conversion)** **عند ترحيل بيانات من تطبيق آخر إلى النظام الذي تتم صيانته**. مثال: نقل الخوادم إلى مزوّد سحابي جديد، أو استيراد قوائم الطعام وحسابات المطاعم من نظام قديم كانت تستخدمه سلسلة مطاعم انضمت حديثًا؛ يجب التحقق من أن الأسعار والوجبات انتقلت كاملة وبالتنسيق الصحيح.

**3. الإحالة للتقاعد (retirement)**، **عندما يصل التطبيق إلى نهاية عمره**. عند إحالة نظام للتقاعد **قد يلزم اختبار أرشفة البيانات (data archiving)** **إذا كانت فترات الاحتفاظ بالبيانات طويلة**. و**قد يلزم أيضًا اختبار إجراءات الاستعادة والاسترجاع (restore and retrieval) بعد الأرشفة**، **إذا احتجنا بعض البيانات خلال فترة الأرشفة**. مثال: إيقاف لوحة المطاعم القديمة بعد إطلاق لوحة جديدة؛ يجب التأكد من أرشفة سجل الطلبات والفواتير للسنوات المطلوبة، ومن إمكانية استرجاع فاتورة قديمة عند تدقيق أو شكوى.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Friday evening, card payments fail in the delivery app after the payment gateway changed a field name. Hot fix: the team tests the corrected card payment (the change), then runs the automated regression suite for cash, wallet, coupons and order states (the unchanged parts). The risk is high but the change is small, so the scope is focused; the full exploratory round waits for the next planned release.</p><p class="gx-ar" lang="ar" dir="rtl">مساء الجمعة، يفشل الدفع بالبطاقة في تطبيق التوصيل بعد أن غيّرت بوابة الدفع اسم أحد الحقول. إصلاح عاجل: يختبر الفريق الدفع بالبطاقة بعد التصحيح (التغيير)، ثم يشغّل مجموعة الانحدار المؤتمتة للدفع النقدي والمحفظة والكوبونات وحالات الطلب (الأجزاء التي لم تتغير). الخطورة عالية لكن التغيير صغير، فيبقى النطاق مركّزًا؛ وتنتظر الجولة الاستكشافية الكاملة الإصدار المخطط القادم.</p></aside>

### لا تخلط بين — Don't Confuse

| Situation | Trigger group | Special testing |
| --- | --- | --- |
| New feature in the next release | Modification (planned) | The change + regression |
| Urgent fix in production | Modification (hot fix) | Focused, fast; regression suite |
| Move to a new cloud platform | Upgrade / migration | New environment + changed software |
| Import restaurant data from an old system | Migration | Data conversion |
| Old dashboard switched off | Retirement | Data archiving, restore and retrieval |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Learn the three trigger groups and their examples. "Data conversion" belongs to migration; "archiving" and "restore after archiving" belong to retirement.</p><p class="gx-ar" lang="ar" dir="rtl">احفظ مجموعات المحفّزات الثلاث وأمثلتها. «تحويل البيانات» ينتمي للترحيل؛ و«الأرشفة» و«الاستعادة بعد الأرشفة» تنتميان للإحالة للتقاعد.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Testing only the changed part in maintenance. The unchanged parts, usually most of the system, need regression testing too.</p><p class="gx-ar" lang="ar" dir="rtl">اختبار الجزء الذي تغيّر فقط أثناء الصيانة. الأجزاء التي لم تتغير، وهي غالبًا معظم النظام، تحتاج اختبار انحدار أيضًا.</p></aside>

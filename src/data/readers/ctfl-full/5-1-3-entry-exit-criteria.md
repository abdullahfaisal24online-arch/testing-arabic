---
order: 3
slug: "5-1-3"
chapter: 5
group: "5.1"
section: "5.1.3"
title: "Entry Criteria and Exit Criteria"
titleAr: "معايير الدخول ومعايير الخروج"
objectives: "FL-5.1.3 · K2"
minutes: 7
lo:
  FL-5.1.3: "Compare and contrast entry criteria and exit criteria."
loAr:
  FL-5.1.3: "تقارن بين معايير الدخول ومعايير الخروج."
takeaways:
  - "Entry criteria are the preconditions for starting an activity; exit criteria define what must be achieved to declare it complete."
  - "They should be defined for each test level and differ by test objectives."
  - "Typical entry criteria: available resources, available testware, and an initial quality level of the test object, such as passed smoke tests."
  - "Typical exit criteria: thoroughness measures (coverage, unresolved defects, defect density, failed tests) and completion criteria (planned tests run, static testing done, defects reported, regression tests automated)."
  - "Running out of time or budget can be a valid exit criterion if stakeholders accept the risk; in Agile, exit criteria are the Definition of Done and entry criteria the Definition of Ready."
takeawaysAr:
  - "معايير الدخول هي الشروط المسبقة لبدء نشاط؛ ومعايير الخروج تحدد ما يجب تحقيقه لاعتباره مكتملًا."
  - "يجب تحديدها لكل مستوى اختبار، وتختلف حسب أهداف الاختبار."
  - "معايير الدخول المعتادة: توفر الموارد، وتوفر مخرجات الاختبار، ومستوى جودة أولي لموضوع الاختبار مثل نجاح اختبارات الدخان."
  - "معايير الخروج المعتادة: مقاييس الشمولية (التغطية، والعيوب غير المحلولة، وكثافة العيوب، والاختبارات الفاشلة) ومعايير الإكمال (تنفيذ الاختبارات المخططة، وإجراء الاختبار الساكن، والإبلاغ عن العيوب، وأتمتة اختبارات الانحدار)."
  - "نفاد الوقت أو الميزانية قد يكون معيار خروج صالحًا إذا قبل أصحاب المصلحة الخطر؛ وفي Agile تسمّى معايير الخروج «تعريف الإنجاز» ومعايير الدخول «تعريف الجاهزية»."
terms:
  - en: "Entry Criteria"
    ar: "معايير الدخول"
    def: "The preconditions for starting a given activity."
    defAr: "الشروط المسبقة لبدء نشاط معيّن."
    match: ["Entry Criteria", "entry criteria"]
  - en: "Exit Criteria"
    ar: "معايير الخروج"
    def: "What must be achieved to declare an activity completed."
    defAr: "ما يجب تحقيقه لاعتبار النشاط مكتملًا."
    match: ["Exit Criteria", "exit criteria"]
  - en: "Definition of Done"
    ar: "تعريف الإنجاز"
    def: "In Agile, the exit criteria that define when a work item is considered complete."
    defAr: "في Agile، معايير الخروج التي تحدد متى يُعتبر عنصر العمل مكتملًا."
    match: ["Definition of Done", "DoD"]
  - en: "Definition of Ready"
    ar: "تعريف الجاهزية"
    def: "In Agile, the entry criteria a user story must fulfil to start development and/or testing."
    defAr: "في Agile، معايير الدخول التي يجب أن تحققها قصة المستخدم لبدء التطوير و/أو الاختبار."
    match: ["Definition of Ready", "DoR"]
  - en: "Smoke Test"
    ar: "اختبار الدخان"
    def: "A small set of tests that checks the main functions work, to decide whether further testing makes sense."
    defAr: "مجموعة صغيرة من الاختبارات تتحقق من عمل الوظائف الرئيسية، لتقرير هل يستحق الاختبار الإضافي."
    match: ["Smoke Test", "smoke test", "smoke tests"]
---
**معايير الدخول (Entry Criteria)** تحدد **الشروط المسبقة** لبدء نشاط معيّن. إذا لم تتحقق، قد يصبح النشاط أصعب، أو أطول، أو أكثر تكلفة، أو أكثر خطورة.

**معايير الخروج (Exit Criteria)** تحدد **ما يجب تحقيقه** لاعتبار النشاط **مكتملًا**.

يجب تحديد معايير الدخول والخروج **لكل مستوى اختبار**، وتختلف حسب أهداف الاختبار.

### معايير الدخول المعتادة — Typical Entry Criteria

- **توفر الموارد:** الأشخاص، والأدوات، والبيئات، وبيانات الاختبار، والميزانية، والوقت.
- **توفر مخرجات الاختبار:** أساس الاختبار، ومتطلبات قابلة للاختبار، وقصص المستخدم، وحالات الاختبار.
- **مستوى جودة أولي لموضوع الاختبار:** مثلًا، نجاح كل **اختبارات الدخان (Smoke Tests)**.

### معايير الخروج المعتادة — Typical Exit Criteria

| Group | أمثلة |
| --- | --- |
| Measures of thoroughness | مستوى التغطية المحقق، عدد العيوب غير المحلولة، كثافة العيوب، عدد حالات الاختبار الفاشلة |
| Completion criteria | تنفيذ الاختبارات المخططة، إجراء الاختبار الساكن، الإبلاغ عن كل العيوب المكتشفة، أتمتة كل اختبارات الانحدار |

### نفاد الوقت أو الميزانية — Running Out of Time or Budget

**نفاد الوقت أو الميزانية** يمكن أن يُعتبر **معيار خروج صالحًا** أيضًا. حتى دون تحقق المعايير الأخرى، قد يكون إيقاف الاختبار مقبولًا في هذه الظروف، **إذا راجع أصحاب المصلحة خطر الإطلاق دون اختبار إضافي وقبلوه**.

### في Agile — In Agile

- معايير الخروج تسمّى غالبًا **تعريف الإنجاز (Definition of Done)**، وتحدد المقاييس الموضوعية لاعتبار عنصر قابل للإطلاق مكتملًا.
- معايير الدخول التي يجب أن تحققها قصة المستخدم لبدء أنشطة التطوير و/أو الاختبار تسمّى **تعريف الجاهزية (Definition of Ready)**.

<figure class="gx-figure gx-spectrum" aria-label="Entry vs exit criteria."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Entry criteria</b><span>Can we start? Resources, testware, initial quality (e.g. smoke tests pass). Agile: Definition of Ready.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Exit criteria</b><span>Are we done? Thoroughness and completion measures. Agile: Definition of Done.</span></div></div><figcaption>Entry vs exit criteria.</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Classify by question: "Can we start?" → entry. "Are we done?" → exit. "All smoke tests passed" is a typical entry criterion; "statement coverage of 80% reached" is an exit criterion.</p><p class="gx-ar" lang="ar" dir="rtl">صنّف حسب السؤال: «هل نستطيع البدء؟» ← دخول. «هل انتهينا؟» ← خروج. «نجاح كل اختبارات الدخان» معيار دخول معتاد؛ و«الوصول إلى تغطية تعليمات 80%» معيار خروج.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking that stopping because the time ran out is always a failure of the process. The syllabus accepts it as a valid exit criterion when stakeholders have reviewed and accepted the risk.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن التوقف بسبب نفاد الوقت فشل دائم للعملية. المنهج يقبله كمعيار خروج صالح عندما يراجع أصحاب المصلحة الخطر ويقبلونه.</p></aside>

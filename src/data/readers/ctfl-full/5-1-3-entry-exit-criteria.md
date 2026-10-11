---
order: 3
slug: "5-1-3"
chapter: 5
group: "5.1"
section: "5.1.3"
title: "Entry Criteria and Exit Criteria"
titleAr: "معايير الدخول ومعايير الخروج"
objectives: "FL-5.1.3 · K2"
minutes: 11
lo:
  FL-5.1.3: "Compare and contrast entry criteria and exit criteria."
loAr:
  FL-5.1.3: "تقارن بين معايير الدخول ومعايير الخروج."
takeaways:
  - "Entry criteria are the preconditions for starting an activity; exit criteria define what must be achieved to declare it complete."
  - "They should be defined for each test level and differ by test objectives."
  - "Typical entry criteria: available resources, available testware, and an initial quality level of the test object, such as passed smoke tests."
  - "Typical exit criteria: thoroughness measures (coverage, unresolved defects, defect density, failed tests) and binary yes/no completion criteria (planned tests run, static testing done, defects reported, regression tests automated)."
  - "Running out of time or budget can be a valid exit criterion if stakeholders accept the risk; in Agile, exit criteria are the Definition of Done and entry criteria the Definition of Ready."
takeawaysAr:
  - "معايير الدخول هي الشروط المسبقة لبدء نشاط؛ ومعايير الخروج تحدد ما يجب تحقيقه لاعتباره مكتملًا."
  - "يجب تحديدها لكل مستوى اختبار، وتختلف حسب أهداف الاختبار."
  - "معايير الدخول المعتادة: توفر الموارد، وتوفر مخرجات الاختبار، ومستوى جودة أولي لموضوع الاختبار مثل نجاح اختبارات الدخان."
  - "معايير الخروج المعتادة: مقاييس الشمولية (التغطية، والـ defects غير المحلولة، وكثافة الـ defects، والاختبارات الفاشلة) ومعايير الإكمال (تنفيذ الاختبارات المخططة، وإجراء الاختبار الساكن، والإبلاغ عن الـ defects، وأتمتة اختبارات الانحدار)."
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
كل نشاط اختبار له **بداية** و**نهاية**، والسؤالان الأصعب في الحالتين: «هل نحن جاهزون للبدء؟» و«هل يحق لنا أن نقول إننا انتهينا؟». يجيب عنهما نوعان من المعايير يُتفق عليهما مسبقًا في خطة الاختبار، حتى لا يُتخذ القرار بالمزاج أو تحت ضغط الموعد.

**معايير الدخول (Entry Criteria)** تحدد **الشروط المسبقة** لبدء نشاط معيّن. ويشرح السيليبس لماذا هي مهمة: إذا لم تتحقق، فالأرجح أن يصبح النشاط **أصعب، وأطول وقتًا، وأكثر تكلفة، وأكثر خطورة**. تخيّل أن فريق **تطبيق التوصيل** بدأ اختبار النظام لميزة الكوبونات بينما بيئة الاختبار لا تتصل ببوابة الدفع: سيضيع المختبران أيامًا في تسجيل «defects» سببها البيئة لا المنتج، ثم يعيدان الاختبارات كلها.

**معايير الخروج (Exit Criteria)** تحدد **ما يجب تحقيقه** لاعتبار النشاط **مكتملًا**. بدونها قد يتوقف الفريق مبكرًا جدًا فيترك defects خطيرة، أو يستمر بلا نهاية في اختبار أشياء قليلة القيمة.

### لكل مستوى معاييره — Per Test Level

يقول السيليبس إن معايير الدخول والخروج **يجب أن تُحدَّد لكل مستوى اختبار**، وإنها **تختلف حسب أهداف الاختبار**. فهدف اختبار المكوّنات غير هدف اختبار القبول، ومعاييرهما تختلف تبعًا لذلك:

| Test level | Example entry criterion | Example exit criterion |
| --- | --- | --- |
| Component testing | Code compiles; unit test framework ready | 90% statement coverage of the fee calculation |
| System testing | Build deployed to staging; all smoke tests passed | All planned tests executed; no open critical defects |
| Acceptance testing | System testing exit criteria met; product owner available | All acceptance criteria of the stories passed |

لاحظ أيضًا أن المعايير تتصل ببعضها: تحقق معايير الخروج لمستوى ما كثيرًا ما يكون جزءًا من معايير الدخول للمستوى التالي، كما في الجدول، حيث يشترط بدء اختبار القبول تحقق معايير خروج اختبار النظام. والمعايير لا تخص مستويات الاختبار وحدها، بل أي نشاط يحتاج بداية ونهاية واضحتين، مثل تحليل الاختبار أو تصميمه.

### معايير الدخول المعتادة — Typical Entry Criteria

يذكر السيليبس ثلاث مجموعات:

- **توفر الموارد (availability of resources):** الأشخاص، والأدوات، والبيئات، وبيانات الاختبار، والميزانية، والوقت. مثال: جهازا iOS وAndroid متاحان، وحسابات زبائن تجريبية جاهزة.
- **توفر مخرجات الاختبار (availability of testware):** أساس الاختبار، ومتطلبات قابلة للاختبار، وقصص المستخدم، وحالات الاختبار. مثال: قصص الكوبونات مكتوبة بمعايير قبول واضحة، وحالات BVA لتاريخ الانتهاء مصممة.
- **مستوى جودة أولي لموضوع الاختبار (initial quality level):** مثلًا **نجاح كل اختبارات الدخان (Smoke Tests)**. إذا كان التطبيق لا يفتح شاشة الدفع أصلًا، فلا معنى لبدء اختبار مفصل للكوبونات؛ الأفضل إعادة النسخة للمطوّرين.

### معايير الخروج المعتادة — Typical Exit Criteria

يقسّمها السيليبس إلى مجموعتين:

| Group | أمثلة |
| --- | --- |
| Measures of thoroughness | مستوى التغطية المحقق، عدد الـ defects غير المحلولة، كثافة الـ defects، عدد حالات الاختبار الفاشلة |
| Binary "yes/no" (completion) criteria | تنفيذ الاختبارات المخططة، إجراء الاختبار الساكن، الإبلاغ عن كل الـ defects المكتشفة، أتمتة كل اختبارات الانحدار |

**مقاييس الشمولية (measures of thoroughness)** أرقام تقيس **مدى عمق** الاختبار وجودة النتيجة: مثل «تغطية 100% لقيم BVA»، أو «لا أكثر من 3 defects طفيفة مفتوحة»، أو «كثافة defects أقل من defect لكل ألف سطر»، أو «صفر حالات فاشلة من الأولوية العليا». أما **المعايير الثنائية (binary "yes/no" criteria)** فجوابها نعم أو لا فقط: هل نُفذت كل الاختبارات المخططة؟ هل رُوجعت قصص المستخدم (اختبار ساكن)؟ هل سُجّل كل defect وُجد؟ هل أُتمتت اختبارات الانحدار كلها؟ الجمع بين النوعين مفيد: الأول يقيس الجودة، والثاني يتأكد أن لا نشاط مخطط قد نُسي.

### نفاد الوقت أو الميزانية — Running Out of Time or Budget

**نفاد الوقت أو الميزانية** يمكن أن يُعتبر **معيار خروج صالحًا** أيضًا. حتى دون تحقق المعايير الأخرى، قد يكون إنهاء الاختبار مقبولًا في هذه الظروف، **إذا راجع أصحاب المصلحة خطر الإطلاق دون اختبار إضافي وقبلوه**. مثال: موعد النشر في المتاجر يوم الخميس، وبقيت 12 حالة منخفضة الأولوية لاختبار الواجهة الإنجليزية لم تُنفَّذ. يعرض المختبرون الوضع والمخاطر، فيقرر مالك المنتج الإطلاق ويقبل الخطر. القرار هنا **قرار عمل واعٍ موثق**، لا توقف عشوائي. والشرط الحاسم هو المراجعة والقبول: إن توقف الفريق دون إطلاع أصحاب المصلحة على الخطر، فهذا ليس معيار خروج بل إهمال.

### في Agile — In Agile

- معايير الخروج تسمّى غالبًا **تعريف الإنجاز (Definition of Done)**، وتحدد **المقاييس الموضوعية** التي يعتمدها الفريق لاعتبار عنصر قابل للإطلاق مكتملًا. مثال في تطبيق التوصيل: الشيفرة مراجَعة، واختبارات الوحدات ناجحة في خط CI، ومعايير القبول ناجحة، ولا defects حرجة مفتوحة.
- معايير الدخول التي يجب أن تحققها قصة المستخدم **لبدء أنشطة التطوير و/أو الاختبار** تسمّى **تعريف الجاهزية (Definition of Ready)**. مثال: القصة مقدّرة، ولها معايير قبول قابلة للاختبار، وتصميم الشاشة متوفر، والاعتماديات (مثل واجهة API) معروفة.

<figure class="gx-figure gx-spectrum" aria-label="Entry vs exit criteria."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Entry criteria</b><span>Can we start? Resources, testware, initial quality (e.g. smoke tests pass). Agile: Definition of Ready.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Exit criteria</b><span>Are we done? Thoroughness and completion measures. Agile: Definition of Done.</span></div></div><figcaption>Entry vs exit criteria.</figcaption></figure>

### لا تخلط بين — Don't Confuse

| | Entry criteria | Exit criteria |
| --- | --- | --- |
| Question | Can we start the activity? | Can we declare the activity completed? |
| Typical content | Resources, testware, initial quality of the test object | Thoroughness measures, binary yes/no criteria |
| If not met | Activity is harder, slower, costlier, riskier | Activity continues, or stakeholders accept the risk |
| Agile name | Definition of Ready | Definition of Done |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Classify by question: "Can we start?" → entry. "Are we done?" → exit. "All smoke tests passed" is a typical entry criterion; "statement coverage of 80% reached" is an exit criterion.</p><p class="gx-ar" lang="ar" dir="rtl">صنّف حسب السؤال: «هل نستطيع البدء؟» ← دخول. «هل انتهينا؟» ← خروج. «نجاح كل اختبارات الدخان» معيار دخول معتاد؛ و«الوصول إلى تغطية تعليمات 80%» معيار خروج.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking that stopping because the time ran out is always a failure of the process. The syllabus accepts it as a valid exit criterion when stakeholders have reviewed and accepted the risk.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن التوقف بسبب نفاد الوقت فشل دائم للعملية. المنهج يقبله كمعيار خروج صالح عندما يراجع أصحاب المصلحة الخطر ويقبلونه.</p></aside>

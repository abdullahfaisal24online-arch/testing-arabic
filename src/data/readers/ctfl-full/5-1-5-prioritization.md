---
order: 5
slug: "5-1-5"
chapter: 5
group: "5.1"
section: "5.1.5"
title: "Test Case Prioritization"
titleAr: "ترتيب أولويات حالات الاختبار"
objectives: "FL-5.1.5 · K3"
minutes: 18
lo:
  FL-5.1.5: "Apply test case prioritization."
loAr:
  FL-5.1.5: "تطبّق ترتيب أولويات حالات الاختبار."
takeaways:
  - "Once test cases and procedures are assembled into suites, they are arranged in a test execution schedule."
  - "Risk-based prioritization: run the tests covering the most important risks first."
  - "Coverage-based prioritization: run the tests with the highest coverage first; additional coverage prioritization picks each next test by the extra coverage it adds."
  - "Requirements-based prioritization: follow the priorities of the requirements traced to the tests, as set by stakeholders."
  - "Dependencies override priority: if a high-priority test depends on a lower-priority one, the lower one runs first. Resource availability also matters."
takeawaysAr:
  - "بعد تجميع حالات الاختبار وإجراءاته في مجموعات، تُرتَّب في جدول تنفيذ."
  - "الترتيب المبني على المخاطر: شغّل الاختبارات التي تغطي أهم المخاطر أولًا."
  - "الترتيب المبني على التغطية: شغّل الاختبارات ذات التغطية الأعلى أولًا؛ والتغطية الإضافية تختار كل اختبار تالٍ بحسب ما يضيفه من تغطية جديدة."
  - "الترتيب المبني على المتطلبات: اتّبع أولويات المتطلبات المرتبطة بالاختبارات كما يحددها أصحاب المصلحة."
  - "الاعتماديات تتقدّم على الأولوية: إذا اعتمد اختبار عالي الأولوية على آخر أقل أولوية، يُنفَّذ الأقل أولًا. وتوفر الموارد مهم أيضًا."
terms:
  - en: "Test Execution Schedule"
    ar: "جدول تنفيذ الاختبار"
    def: "A schedule for the execution of test suites within a test cycle, defining the order in which tests run."
    defAr: "جدول لتنفيذ مجموعات الاختبار ضمن دورة اختبار، يحدد ترتيب تشغيل الاختبارات."
---
لنفترض أن لدى فريق **تطبيق التوصيل** 300 حالة اختبار جاهزة قبل النشر، والوقت المتبقي يومان. الترتيب هنا ليس تفصيلًا شكليًا: إذا انقطع التنفيذ في منتصفه، أو نفد الوقت، يجب أن تكون **أهم** الاختبارات قد نُفذت. وإذا كانت الـ defects في الدفع موجودة، فالأفضل اكتشافها في الساعة الأولى لا في الساعة الأخيرة، حتى يكون لدى المطوّرين وقت لإصلاحها.

بعد أن تُوصَّف حالات الاختبار وإجراءاته وتُجمع في **مجموعات اختبار (test suites)**، يمكن ترتيب هذه المجموعات في **جدول تنفيذ الاختبار (Test Execution Schedule)** الذي يحدد **ترتيب تشغيلها**. فالجدول لا يقول «ماذا نختبر» فحسب، بل «ماذا نختبر أولًا»، وهذا هو جوهر هذا القسم. وعند ترتيب أولويات حالات الاختبار يمكن مراعاة **عوامل مختلفة**؛ ويذكر السيليبس ثلاث استراتيجيات هي الأكثر استخدامًا، ثم قيدين يجب احترامهما: الاعتماديات والموارد.

### الاستراتيجيات الثلاث — Three Strategies

<figure class="gx-figure gx-spectrum" aria-label="The most commonly used prioritization strategies."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Risk-based</b><span>Order by risk analysis results. Tests covering the most important risks run first.</span></div><div class="gx-spectrum-item"><b>Coverage-based</b><span>Order by coverage (e.g. statement coverage). Highest coverage first; or additional coverage: each next test adds the most new coverage.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Requirements-based</b><span>Order by the priorities of the requirements traced to the tests, defined by stakeholders.</span></div></div><figcaption>The most commonly used prioritization strategies.</figcaption></figure>

- **الترتيب المبني على المخاطر (Risk-based prioritization):** ترتيب التنفيذ يعتمد على **نتائج تحليل المخاطر** (القسم 5.2.3). الاختبارات التي تغطي **أهم المخاطر** تُنفَّذ أولًا. الفكرة: نقلل أكبر قدر من الخطر في أقل وقت.
- **الترتيب المبني على التغطية (Coverage-based prioritization):** ترتيب التنفيذ يعتمد على **التغطية**، مثل تغطية التعليمات (statement coverage). الاختبارات التي تحقق **أعلى تغطية** تُنفَّذ أولًا. وفي صيغة أخرى تسمّى **ترتيب التغطية الإضافية (Additional Coverage Prioritization)**: يُنفَّذ أولًا الاختبار ذو أعلى تغطية، ثم يكون كل اختبار تالٍ هو الذي يحقق **أعلى تغطية إضافية**، أي أكثر ما يضيفه من أجزاء **لم تُغطَّ بعد**.
- **الترتيب المبني على المتطلبات (Requirements-based prioritization):** ترتيب التنفيذ يعتمد على **أولويات المتطلبات** المرتبطة (بالتتبع) بحالات الاختبار. هذه الأولويات **يحددها أصحاب المصلحة**، والاختبارات المرتبطة **بأهم المتطلبات** تُنفَّذ أولًا. فالمختبر هنا لا يقرر الأهمية بنفسه، بل يترجم قرار العمل إلى ترتيب تنفيذ.

### خطوات التطبيق — Step by Step

1. **اختر الاستراتيجية** (أو ما يطلبه السؤال): مخاطر، أو تغطية، أو متطلبات.
2. **أعطِ كل حالة أولوية** حسب هذه الاستراتيجية: مستوى الخطر، أو نسبة التغطية، أو أولوية المتطلب المرتبط.
3. **رتّب** الحالات من الأعلى أولوية إلى الأدنى.
4. **طبّق الاعتماديات**: خذ أعلى حالة متبقية؛ إن كانت تعتمد على حالة لم تُنفَّذ، ضع تلك الحالة قبلها مباشرة (واعتمادياتها قبلها).
5. **راجع توفر الموارد** وعدّل الجدول إن كانت أداة أو بيئة أو شخص متاحًا في وقت محدد فقط.

### مثال محلول 1: المبني على المخاطر — Risk-based

نتائج تحليل المخاطر لإصدار الكوبونات، ومستوى الخطر = الاحتمال × الأثر (مقياس 1–5):

| Test | Risk covered | Likelihood | Impact | Risk level |
| --- | --- | --- | --- | --- |
| TC-A | Card payment charged twice | 3 | 5 | 15 |
| TC-B | Wrong delivery fee at 19.99 / 20.00 | 4 | 3 | 12 |
| TC-C | Arabic text cut off in order history | 2 | 1 | 2 |
| TC-D | Expired coupon accepted | 3 | 3 | 9 |
| TC-E | Cancel fails before Out for delivery | 2 | 4 | 8 |

الترتيب: **TC-A → TC-B → TC-D → TC-E → TC-C**. لاحظ أن TC-B أعلى احتمالًا من TC-A، لكن مستوى الخطر الكلي هو الذي يحدد الترتيب. ولو نفد الوقت بعد ثلاث حالات، فإن ما بقي دون تنفيذ هو الأقل خطرًا، وهذا بالضبط ما يريده الترتيب المبني على المخاطر.

### مثال محلول 2: المبني على التغطية — Coverage-based

دالة حساب الإجمالي عند الدفع فيها 10 تعليمات (S1–S10)، وأربع حالات اختبار:

| Test | Statements covered | Statement coverage |
| --- | --- | --- |
| T1 | S1–S6 | 60% |
| T2 | S1–S4, S7 | 50% |
| T3 | S7, S8, S9 | 30% |
| T4 | S5, S10 | 20% |

**بالتغطية الكلية:** نرتب حسب النسبة فقط: **T1 → T2 → T3 → T4**.

**بالتغطية الإضافية:** نحسب في كل خطوة ما تضيفه كل حالة من تعليمات جديدة:

| Step | Already covered | T2 adds | T3 adds | T4 adds | Chosen |
| --- | --- | --- | --- | --- | --- |
| 1 | — | 50% | 30% | 20% | T1 (60%, highest) |
| 2 | S1–S6 | S7 = 10% | S7–S9 = 30% | S10 = 10% | T3 |
| 3 | S1–S9 | 0% | — | S10 = 10% | T4 |
| 4 | S1–S10 | 0% | — | — | T2 |

الترتيب: **T1 → T3 → T4 → T2**. بعد ثلاث حالات وصلنا إلى **100%**، بينما في ترتيب التغطية الكلية نصل بعد ثلاث حالات إلى 90% فقط (S1–S9)، لأن T2 يكرر في معظمه ما غطاه T1.

الفكرة وراء التغطية الإضافية أن قيمة الاختبار لا تُقاس بما يغطيه وحده، بل **بما يضيفه** إلى ما نُفذ قبله. الاختبار الذي يعيد تشغيل الشيفرة نفسها قليلًا ما يكشف defect جديدًا، أما الاختبار الذي يدخل منطقة لم تُلمس بعد فاحتمال كشفه لـ defect أعلى. لذلك يجب **إعادة الحساب بعد كل اختيار**؛ ومن الأخطاء الشائعة حساب الإضافة مرة واحدة في البداية فقط.

### مثال محلول 3: المبني على المتطلبات — Requirements-based

أولويات المتطلبات كما حددها مالك المنتج (1 = الأهم)، وحالات الاختبار المرتبطة بها:

| Requirement | Stakeholder priority | Traced test cases |
| --- | --- | --- |
| REQ-1 Place order and pay by card | 1 | TC-11, TC-14 |
| REQ-2 Apply a coupon | 2 | TC-13 |
| REQ-3 Track the order on the map | 3 | TC-10 |
| REQ-4 Switch UI language | 4 | TC-12 |

الترتيب: **TC-11، TC-14 → TC-13 → TC-10 → TC-12**. أولوية الحالة هنا موروثة من المتطلب الذي تتتبع إليه، لا من رأي المختبر. ولهذا تحتاج هذه الاستراتيجية إلى **تتبع (traceability)** جيد بين المتطلبات وحالات الاختبار؛ فالحالة التي لا ترتبط بأي متطلب لا يمكن ترتيبها بهذه الطريقة.

### متى أختار أي استراتيجية؟ — Choosing a Strategy

السيليبس لا يفرض استراتيجية واحدة، بل يقول إن عوامل مختلفة يمكن أخذها في الحساب. وكل استراتيجية تناسب سياقًا:

- **المبنية على المخاطر** مناسبة عندما يكون لدى الفريق تحليل مخاطر حديث، والوقت محدود، والهدف تقليل أكبر قدر من الخطر قبل الإطلاق. في تطبيق التوصيل، الدفع وحساب الرسوم مخاطر عالية دائمًا.
- **المبنية على التغطية** مناسبة لاختبارات الانحدار المؤتمتة، حيث تتوفر أدوات تقيس تغطية كل حالة، والهدف تشغيل أكبر قدر من الشيفرة بسرعة لاكتشاف أي كسر. والتغطية الإضافية أكفأ حين تتداخل الحالات كثيرًا.
- **المبنية على المتطلبات** مناسبة عندما يكون صوت أصحاب المصلحة هو المعيار، مثل اختبار القبول، حيث يريد مالك المنتج التأكد أولًا من الميزات التي يعدّها أهم.

في الامتحان، السؤال يحدد الاستراتيجية عادةً؛ طبّقها كما هي، ثم طبّق الاعتماديات.

### الاعتماديات والموارد — Dependencies and Resources

المثالي أن تُنفَّذ الحالات حسب مستويات أولويتها، باستخدام إحدى الاستراتيجيات السابقة مثلًا. لكن هذا قد **لا ينجح** إذا كانت هناك **اعتماديات** بين حالات الاختبار أو بين الخصائص التي تختبرها. والقاعدة في السيليبس:

**إذا اعتمدت حالة اختبار ذات أولوية أعلى على حالة ذات أولوية أقل، يجب تنفيذ الحالة الأقل أولوية أولًا.**

كما يجب أن يراعي ترتيب التنفيذ **توفر الموارد**: أدوات الاختبار، أو بيئات الاختبار، أو الأشخاص المطلوبون، الذين قد لا يتوفرون إلا في **نافذة زمنية محددة**. مثلًا، إذا كانت بيئة sandbox لبوابة الدفع متاحة يوم الأربعاء فقط، تُجدوَل اختبارات الدفع بالبطاقة يوم الأربعاء حتى لو جاء ترتيبها النظري في مكان آخر.

### مثال محلول 4: سلسلة اعتماديات — Dependency Chain

| Test | Priority (1 = highest) | Depends on |
| --- | --- | --- |
| T-Track: track order Out for delivery | 1 | T-Accept |
| T-Coupon: apply coupon at checkout | 2 | T-Place |
| T-Place: customer places an order | 3 | — |
| T-Accept: restaurant accepts the order | 4 | T-Place |
| T-Lang: switch language to English | 5 | — |

- أعلى أولوية متبقية T-Track، لكنه يعتمد على T-Accept، وT-Accept يعتمد بدوره على T-Place. إذن: **T-Place → T-Accept → T-Track**.
- التالي T-Coupon؛ اعتماديته T-Place نُفذت، فيأتي مباشرة.
- يبقى T-Lang.

الترتيب النهائي: **T-Place → T-Accept → T-Track → T-Coupon → T-Lang**. لاحظ أن T-Accept (أولوية 4) نُفذ قبل T-Coupon (أولوية 2)، لأنه شرط لتنفيذ الحالة الأهم.

**حالة خادعة (الموارد):** لنفترض في المثال نفسه أن T-Track يحتاج محاكي موقع السائق، وأن المحاكي متاح فقط بعد الظهر، بينما تبدأ الاختبارات صباحًا. هنا لا يمكن تنفيذ T-Track في مكانه. الحل المعقول: تنفيذ ما لا يحتاج المحاكي أولًا بترتيب الأولوية (T-Place ثم T-Accept ثم T-Coupon ثم T-Lang)، ثم T-Track عند توفر المحاكي. الأولوية تبقى مهمة، لكن الاعتماديات والموارد قيود لا يمكن تجاوزها.

### مثال مبسّط للتدريب — Simple Example

| Test | Priority (1 = highest) | Depends on |
| --- | --- | --- |
| TC1 | 3 | — |
| TC2 | 1 | TC3 |
| TC3 | 4 | — |
| TC4 | 2 | — |

TC2 هو الأعلى أولوية، لكنه يعتمد على TC3. لذلك يُنفَّذ TC3 أولًا، ثم TC2، ثم TC4، ثم TC1:

**TC3 → TC2 → TC4 → TC1**

الطريقة: خذ الاختبار ذا **أعلى أولوية** من الاختبارات المتبقية. إذا كانت له **اعتمادية لم تُنفَّذ**، نفّذها قبله مباشرة (واعتمادياتها قبلها). ثم انتقل للأولوية التالية. ولاحظ أن TC3، صاحب أدنى أولوية، صار أول ما يُنفَّذ؛ هذا ليس تناقضًا، بل نتيجة طبيعية لقاعدة الاعتماديات.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="prio" data-config="{&quot;title&quot;:&quot;Execution order with dependencies&quot;,&quot;spec&quot;:&quot;Change the priorities and see how the execution order changes. A test always runs after the tests it depends on.&quot;,&quot;tests&quot;:[{&quot;id&quot;:&quot;TC1&quot;,&quot;priority&quot;:3},{&quot;id&quot;:&quot;TC2&quot;,&quot;priority&quot;:1,&quot;deps&quot;:[&quot;TC3&quot;]},{&quot;id&quot;:&quot;TC3&quot;,&quot;priority&quot;:4},{&quot;id&quot;:&quot;TC4&quot;,&quot;priority&quot;:2}],&quot;caption&quot;:&quot;At each step the highest-priority remaining test is scheduled, with any unmet dependencies placed right before it.&quot;}" aria-label="Execution order with dependencies"><figcaption>Interactive: Execution order with dependencies</figcaption></figure>

### لا تخلط بين — Don't Confuse

| | Coverage-based (total) | Additional coverage |
| --- | --- | --- |
| Ranking rule | Each test's own coverage | New coverage added to what is already covered |
| Re-calculated each step? | No | Yes |
| Effect | Tests that overlap may run early | Reaches full coverage with fewer tests |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Exam method: start from the highest-priority test; if it has an unmet dependency, schedule that dependency first (and its own dependencies before it). Then continue with the next highest priority.</p><p class="gx-ar" lang="ar" dir="rtl">طريقة الامتحان: ابدأ بأعلى اختبار أولوية؛ إذا كانت له اعتمادية لم تُنفَّذ، جدوِلها أولًا (واعتمادياتها قبلها). ثم تابع مع الأولوية التالية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Running tests strictly by priority number and ignoring dependencies. A test that needs data or state created by another test cannot run before it.</p><p class="gx-ar" lang="ar" dir="rtl">تشغيل الاختبارات حسب رقم الأولوية فقط مع تجاهل الاعتماديات. الاختبار الذي يحتاج بيانات أو حالة يُنشئها اختبار آخر لا يمكن تشغيله قبله.</p></aside>

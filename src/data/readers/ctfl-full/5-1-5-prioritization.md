---
order: 5
slug: "5-1-5"
chapter: 5
group: "5.1"
section: "5.1.5"
title: "Test Case Prioritization"
titleAr: "ترتيب أولويات حالات الاختبار"
objectives: "FL-5.1.5 · K3"
minutes: 10
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
بعد بناء حالات الاختبار وإجراءاته وتجميعها في **مجموعات اختبار**، يمكن ترتيبها في **جدول تنفيذ الاختبار** الذي يحدد ترتيب تشغيلها. عند ترتيب الأولويات يجب مراعاة عوامل مختلفة.

### الاستراتيجيات الثلاث — Three Strategies

<figure class="gx-figure gx-spectrum" aria-label="The most commonly used prioritization strategies."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Risk-based</b><span>Order by risk analysis results. Tests covering the most important risks run first.</span></div><div class="gx-spectrum-item"><b>Coverage-based</b><span>Order by coverage (e.g. statement coverage). Highest coverage first; or additional coverage: each next test adds the most new coverage.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Requirements-based</b><span>Order by the priorities of the requirements traced to the tests, defined by stakeholders.</span></div></div><figcaption>The most commonly used prioritization strategies.</figcaption></figure>

- **المبني على المخاطر (Risk-based):** ترتيب تنفيذ الاختبارات حسب نتائج تحليل المخاطر (القسم 5.2.3). الاختبارات التي تغطي **أهم المخاطر** تُنفَّذ أولًا.
- **المبني على التغطية (Coverage-based):** ترتيب التنفيذ حسب التغطية، مثل تغطية التعليمات. الاختبارات ذات **أعلى تغطية** أولًا. وفي صيغة أخرى تسمّى **ترتيب التغطية الإضافية (Additional Coverage Prioritization)**: يُنفَّذ أولًا الاختبار ذو أعلى تغطية، ثم كل اختبار تالٍ هو الذي **يضيف أعلى تغطية جديدة**.
- **المبني على المتطلبات (Requirements-based):** ترتيب التنفيذ حسب **أولويات المتطلبات** المرتبطة بالاختبارات، كما يحددها أصحاب المصلحة.

### الاعتماديات والموارد — Dependencies and Resources

المثالي أن تُنفَّذ الاختبارات حسب أولوياتها. لكن هذا قد لا يكون ممكنًا إذا كانت هناك **اعتماديات** بين الحالات أو بين الخصائص التي تختبرها:

**إذا اعتمد اختبار ذو أولوية أعلى على اختبار ذي أولوية أقل، يجب تنفيذ الاختبار الأقل أولوية أولًا.**

كما يجب مراعاة **توفر الموارد**: الأدوات، أو البيئات، أو الأشخاص المطلوبون قد لا يتوفرون إلا في وقت محدد.

### مثال — Example

| Test | Priority (1 = highest) | Depends on |
| --- | --- | --- |
| TC1 | 3 | — |
| TC2 | 1 | TC3 |
| TC3 | 4 | — |
| TC4 | 2 | — |

TC2 هو الأعلى أولوية، لكنه يعتمد على TC3. لذلك يُنفَّذ TC3 أولًا، ثم TC2، ثم TC4، ثم TC1:

**TC3 → TC2 → TC4 → TC1**

الطريقة: خذ الاختبار ذا **أعلى أولوية** من الاختبارات المتبقية. إذا كانت له **اعتمادية لم تُنفَّذ**، نفّذها قبله مباشرة (واعتمادياتها قبلها). ثم انتقل للأولوية التالية.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="prio" data-config="{&quot;title&quot;:&quot;Execution order with dependencies&quot;,&quot;spec&quot;:&quot;Change the priorities and see how the execution order changes. A test always runs after the tests it depends on.&quot;,&quot;tests&quot;:[{&quot;id&quot;:&quot;TC1&quot;,&quot;priority&quot;:3},{&quot;id&quot;:&quot;TC2&quot;,&quot;priority&quot;:1,&quot;deps&quot;:[&quot;TC3&quot;]},{&quot;id&quot;:&quot;TC3&quot;,&quot;priority&quot;:4},{&quot;id&quot;:&quot;TC4&quot;,&quot;priority&quot;:2}],&quot;caption&quot;:&quot;At each step the highest-priority remaining test is scheduled, with any unmet dependencies placed right before it.&quot;}" aria-label="Execution order with dependencies"><figcaption>Interactive: Execution order with dependencies</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Exam method: start from the highest-priority test; if it has an unmet dependency, schedule that dependency first (and its own dependencies before it). Then continue with the next highest priority.</p><p class="gx-ar" lang="ar" dir="rtl">طريقة الامتحان: ابدأ بأعلى اختبار أولوية؛ إذا كانت له اعتمادية لم تُنفَّذ، جدوِلها أولًا (واعتمادياتها قبلها). ثم تابع مع الأولوية التالية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Running tests strictly by priority number and ignoring dependencies. A test that needs data or state created by another test cannot run before it.</p><p class="gx-ar" lang="ar" dir="rtl">تشغيل الاختبارات حسب رقم الأولوية فقط مع تجاهل الاعتماديات. الاختبار الذي يحتاج بيانات أو حالة يُنشئها اختبار آخر لا يمكن تشغيله قبله.</p></aside>

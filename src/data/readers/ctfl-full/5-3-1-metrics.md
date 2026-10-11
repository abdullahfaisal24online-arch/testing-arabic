---
order: 12
slug: "5-3-1"
chapter: 5
group: "5.3"
section: "5.3.1"
title: "Metrics used in Testing"
titleAr: "المقاييس المستخدمة في الاختبار"
objectives: "FL-5.3.1 · K1"
minutes: 11
lo:
  FL-5.3.1: "Recall metrics used for testing."
loAr:
  FL-5.3.1: "تتذكّر المقاييس المستخدمة في الاختبار."
takeaways:
  - "Test monitoring gathers information about testing to check progress against the plan; test control uses it to give guidance and corrective actions (control directives)."
  - "Examples of control directives: reprioritising tests when a risk becomes an issue, re-evaluating entry/exit criteria after rework, adjusting the schedule for a late test environment, adding resources."
  - "Test completion collects data at milestones: end of a test level, an iteration, a project, a release or a maintenance release."
  - "Common metric groups: project progress, test progress, product quality, defects, risks, coverage and cost."
takeawaysAr:
  - "مراقبة الاختبار تجمع معلومات عنه لمقارنة التقدّم بالخطة؛ والتحكم يستخدمها لتقديم توجيهات وإجراءات تصحيحية (توجيهات التحكم)."
  - "أمثلة على توجيهات التحكم: إعادة ترتيب الأولويات عندما يتحول خطر إلى مشكلة، وإعادة تقييم معايير الدخول/الخروج بعد إعادة العمل، وتعديل الجدول بسبب تأخر بيئة الاختبار، وإضافة موارد."
  - "إكمال الاختبار يجمع البيانات عند المحطات: نهاية مستوى اختبار، أو دورة، أو مشروع، أو إصدار، أو إصدار صيانة."
  - "مجموعات المقاييس الشائعة: تقدّم المشروع، وتقدّم الاختبار، وجودة المنتج، والـ defects، والمخاطر، والتغطية، والتكلفة."
terms:
  - en: "Test Monitoring"
    ar: "مراقبة الاختبار"
    def: "Gathering information about testing to assess progress and measure whether exit criteria or associated tasks are satisfied."
    defAr: "جمع معلومات عن الاختبار لتقييم التقدّم وقياس تحقق معايير الخروج أو المهام المرتبطة بها."
    match: ["Test Monitoring", "test monitoring"]
  - en: "Test Control"
    ar: "التحكم في الاختبار"
    def: "Using information from test monitoring to provide guidance and the corrective actions needed to achieve the most effective and efficient testing."
    defAr: "استخدام معلومات مراقبة الاختبار لتقديم التوجيه والإجراءات التصحيحية اللازمة لاختبار أكثر فعالية وكفاءة."
    match: ["Test Control", "test control"]
  - en: "Defect Density"
    ar: "كثافة الـ defects"
    def: "The number of defects per unit size of a work product, such as defects per 1,000 lines of code."
    defAr: "عدد الـ defects لكل وحدة حجم من مُخرَج العمل، مثل الـ defects لكل 1000 سطر شيفرة."
  - en: "Defect Detection Percentage"
    ar: "نسبة اكتشاف الـ defects"
    def: "The share of defects found by testing out of all defects found, including those found later in production."
    defAr: "نسبة الـ defects التي اكتشفها الاختبار من إجمالي الـ defects المكتشفة، بما فيها ما اكتُشف لاحقًا في الإنتاج."
---
الخطة تقول ما **ينبغي** أن يحدث، والمقاييس تقول ما **يحدث فعلًا**. يجمع القسم 5.3 ثلاثة أنشطة مترابطة تعتمد كلها على المقاييس: المراقبة، والتحكم، والإكمال.

### المراقبة والتحكم والإكمال — Monitoring, Control and Completion

**مراقبة الاختبار (Test Monitoring)** تجمع المعلومات عن الاختبار، لتقييم **التقدّم** وقياس هل **تحققت معايير الخروج** أو المهام المرتبطة بها، مثل بلوغ أهداف التغطية لمخاطر المنتج أو المتطلبات أو معايير القبول.

**التحكم في الاختبار (Test Control)** يستخدم معلومات المراقبة ليقدّم، في صورة **توجيهات تحكم (Control Directives)**، التوجيه والإجراءات التصحيحية اللازمة لاختبار أكثر فعالية وكفاءة. أمثلتها في تطبيق التوصيل:

- **إعادة ترتيب أولويات الاختبارات عندما يتحول خطر محدد إلى مشكلة فعلية:** بوابة الدفع غيّرت واجهتها فعلًا، فتُقدَّم اختبارات الدفع على غيرها.
- **إعادة تقييم هل يحقق عنصر الاختبار معايير الدخول أو الخروج بسبب إعادة العمل:** أُعيدت كتابة حساب المجموع، فتُعاد الاختبارات التي كانت قد نجحت.
- **تعديل جدول الاختبار** لمعالجة تأخر تسليم بيئة الاختبار.
- **إضافة موارد جديدة** متى وأين احتاج الأمر.

**إكمال الاختبار (Test Completion)** يجمع البيانات من أنشطة الاختبار المكتملة لتوحيد الخبرة ومخرجات الاختبار (testware) وأي معلومات مهمة أخرى. يحدث عند **محطات المشروع**: اكتمال مستوى اختبار، أو انتهاء تكرار Agile، أو اكتمال مشروع اختبار **أو إلغاؤه**، أو إطلاق نظام، أو اكتمال إصدار صيانة.

### لماذا نجمع المقاييس؟ — Why Metrics

تُجمع مقاييس الاختبار لإظهار ثلاثة أمور:

1. **التقدّم مقارنة بالجدول والميزانية المخططين.**
2. **الجودة الحالية لموضوع الاختبار.**
3. **فعالية أنشطة الاختبار** مقارنة بأهداف الاختبار أو بهدف التكرار.

والمراقبة تجمع هذه المقاييس لتدعم **التحكم** أثناء العمل، و**الإكمال** في نهايته.

### المقاييس الشائعة مع أمثلة محسوبة — Common Metrics, Worked

بيانات الـ sprint 14 في تطبيق التوصيل:

| Group | Metric | Calculation | Result |
| --- | --- | --- | --- |
| Project progress | Task completion | 34 of 40 test tasks done | 85% |
| Project progress | Test effort | 120 hours used of 150 planned | 80% of budget |
| Test progress | Test case implementation progress | 228 of 240 written | 95% |
| Test progress | Test environment preparation | 5 of 6 components ready | 83% |
| Test progress | Run / not run, passed / failed | 182 run, 58 not run; 173 passed, 9 failed | 76% run, 95% pass rate |
| Test progress | Test execution time | Regression suite in CI | 18 min |
| Product quality | Availability | 719 of 720 hours up | 99.86% |
| Product quality | Response time | Checkout, 95th percentile | 2.4 s |
| Product quality | Mean time to failure (MTTF) | 600 hours ÷ 3 failures | 200 h |
| Defect | Found / fixed by priority | 27 found, 21 fixed; 4 high still open | 78% fixed |
| Defect | Defect density | 18 defects ÷ 12 KLOC | 1.5 per KLOC |
| Defect | Defect detection percentage (DDP) | 45 found by testing ÷ (45 + 5 found in production) | 90% |
| Risk | Residual risk level | Sum of open risk levels: 64 at start, 18 now | 72% reduced |
| Coverage | Requirements coverage | 44 of 50 acceptance criteria tested | 88% |
| Coverage | Code coverage | 3,900 of 4,800 statements executed | 81% |
| Cost | Cost of testing | 120 h × 20 JOD | 2,400 JOD |
| Cost | Organizational cost of quality | Prevention + appraisal + failure costs in the quarter | per quarter |

**نسبة اكتشاف الـ defects (DDP)** تقيس فعالية الاختبار: من كل الـ defects المعروفة، كم وجد الاختبار قبل أن يجدها الزبائن؟ و**كثافة الـ defects (Defect Density)** تقارن الأجزاء ببعضها: وحدة الكوبونات بكثافة 4 لكل ألف سطر تستحق اختبارًا أعمق من وحدة بكثافة 0.5.

**متوسط الوقت حتى العطل (MTTF)** و**التوفّر (Availability)** و**زمن الاستجابة** لا تقيس الاختبار نفسه، بل **جودة المنتج**: كم يعمل النظام قبل أن يتعطل، وكم من الوقت يبقى متاحًا للزبائن، وكم ينتظر الزبون حتى يُؤكَّد طلبه. أما **مستوى المخاطر المتبقية** فيربط المقاييس بالقسم 5.2: انخفاض مجموع مستويات المخاطر المفتوحة من 64 إلى 18 يعني أن الاختبار يؤدي دوره في خفض الخطر. و**التكلفة التنظيمية للجودة** تجمع كل ما تنفقه المؤسسة على الجودة: كلفة منع الـ defects، وكلفة التقييم والاختبار، وكلفة الأعطال قبل الإصدار وبعده.

**من المقياس إلى القرار:** نسبة التنفيذ 76% في منتصف الـ sprint مع 4 defects عالية مفتوحة تعني أن معايير الخروج لن تتحقق في الموعد إذا استمر الوضع. هنا تنتهي المراقبة ويبدأ التحكم: يقرر مدير الاختبار توجيهًا يناسب السبب، كتأجيل اختبارات منخفضة الخطر أو إضافة مختبر. المقياس وحده لا يصلح شيئًا؛ قيمته في القرار الذي يتيحه.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A weekly dashboard shows: 182 of 240 test cases run (76%), 9 failed; 4 open high-priority defects; requirements coverage 88%; test environment down 1.5 days. The test manager adds a control directive: move the two days of exploratory testing to next week and add a second tester to regression.</p><p class="gx-ar" lang="ar" dir="rtl">لوحة متابعة أسبوعية تُظهر: 182 من 240 حالة اختبار نُفّذت (76%)، فشلت منها 9؛ و4 defects عالية الأولوية مفتوحة؛ وتغطية المتطلبات 88%؛ وبيئة الاختبار تعطّلت يومًا ونصفًا. يضيف مدير الاختبار توجيه تحكم: تأجيل يومي الاختبار الاستكشافي للأسبوع القادم، وإضافة مختبر ثانٍ لاختبار الانحدار.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: match a metric to its group. "Mean time to failure" → product quality. "Defect detection percentage" → defects. "Number of test cases passed/failed" → test progress. "Residual risk level" → risk.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: اربط المقياس بمجموعته. «متوسط الوقت حتى العطل» ← جودة المنتج. «نسبة اكتشاف الـ defects» ← الـ defects. «عدد الحالات الناجحة/الفاشلة» ← تقدّم الاختبار. «مستوى المخاطر المتبقية» ← المخاطر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Confusing monitoring and control. Monitoring gathers and compares information; control acts on it with directives such as reprioritising or adding resources.</p><p class="gx-ar" lang="ar" dir="rtl">الخلط بين المراقبة والتحكم. المراقبة تجمع المعلومات وتقارنها؛ والتحكم يتصرف بناءً عليها بتوجيهات مثل إعادة ترتيب الأولويات أو إضافة موارد.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake · test effort</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع · جهد الاختبار</span></p><p class="gx-en" lang="en" dir="ltr">"Test effort" sounds like test progress, but the syllabus lists it under project progress metrics, together with task completion and resource usage.</p><p class="gx-ar" lang="ar" dir="rtl">«جهد الاختبار» يبدو كأنه من مقاييس تقدّم الاختبار، لكن السيليبس يضعه ضمن مقاييس تقدّم المشروع، مع إنجاز المهام واستخدام الموارد.</p></aside>

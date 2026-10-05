---
order: 12
slug: "5-3-1"
chapter: 5
group: "5.3"
section: "5.3.1"
title: "Metrics used in Testing"
titleAr: "المقاييس المستخدمة في الاختبار"
objectives: "FL-5.3.1 · K1"
minutes: 7
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
  - "مجموعات المقاييس الشائعة: تقدّم المشروع، وتقدّم الاختبار، وجودة المنتج، والعيوب، والمخاطر، والتغطية، والتكلفة."
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
    ar: "كثافة العيوب"
    def: "The number of defects per unit size of a work product, such as defects per 1,000 lines of code."
    defAr: "عدد العيوب لكل وحدة حجم من مُخرَج العمل، مثل العيوب لكل 1000 سطر شيفرة."
  - en: "Defect Detection Percentage"
    ar: "نسبة اكتشاف العيوب"
    def: "The share of defects found by testing out of all defects found, including those found later in production."
    defAr: "نسبة العيوب التي اكتشفها الاختبار من إجمالي العيوب المكتشفة، بما فيها ما اكتُشف لاحقًا في الإنتاج."
---
### المراقبة والتحكم والإكمال — Monitoring, Control and Completion

- **مراقبة الاختبار (Test Monitoring):** جمع المعلومات عن الاختبار. تُستخدم لتقييم التقدّم، وقياس هل تحققت معايير الخروج أو المهام المرتبطة بها، مثل تحقق أهداف التغطية المتعلقة بمخاطر المنتج أو المتطلبات أو معايير القبول.
- **التحكم في الاختبار (Test Control):** يستخدم المعلومات من المراقبة لتقديم **توجيهات** و**إجراءات تصحيحية** لاختبار أكثر فعالية وكفاءة، تسمّى **توجيهات التحكم (Control Directives)**. أمثلتها:
  - **إعادة ترتيب أولويات الاختبارات** عندما يتحول خطر محدد إلى مشكلة فعلية.
  - **إعادة تقييم** هل يحقق عنصر الاختبار معايير الدخول أو الخروج بسبب إعادة العمل.
  - **تعديل جدول الاختبار** بسبب تأخر تسليم بيئة الاختبار.
  - **إضافة موارد جديدة** عند الحاجة.
- **إكمال الاختبار (Test Completion):** يجمع البيانات من أنشطة الاختبار المكتملة لتوحيد الخبرة ومخرجات الاختبار وأي معلومات مهمة. يحدث عند المحطات: اكتمال مستوى اختبار، أو انتهاء دورة Agile، أو اكتمال المشروع أو إلغاؤه، أو إطلاق نظام، أو اكتمال إصدار صيانة.

### المقاييس الشائعة — Common Metrics

تُجمع مقاييس الاختبار لإظهار **التقدّم مقارنة بالجدول والميزانية**، و**جودة موضوع الاختبار الحالية**، و**فعالية أنشطة الاختبار** مقارنة بالأهداف.

| Group | أمثلة |
| --- | --- |
| Project progress | إنجاز المهام، استخدام الموارد، جهد الاختبار |
| Test progress | تقدّم تجهيز حالات الاختبار، تقدّم تحضير البيئة، عدد الحالات المنفذة وغير المنفذة، الناجحة والفاشلة، وقت التنفيذ |
| Product quality | التوفّر، زمن الاستجابة، متوسط الوقت حتى العطل (MTTF) |
| Defect | عدد العيوب المكتشفة والمصلحة وأولوياتها، كثافة العيوب، نسبة اكتشاف العيوب |
| Risk | مستوى المخاطر المتبقية |
| Coverage | تغطية المتطلبات، تغطية الشيفرة |
| Cost | تكلفة الاختبار، التكلفة التنظيمية للجودة |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A weekly dashboard shows: 182 of 240 test cases run (76%), 9 failed; 4 open high-priority defects; requirements coverage 88%; test environment down 1.5 days. The test manager adds a control directive: move the two days of exploratory testing to next week and add a second tester to regression.</p><p class="gx-ar" lang="ar" dir="rtl">لوحة متابعة أسبوعية تُظهر: 182 من 240 حالة اختبار نُفّذت (76%)، فشلت منها 9؛ و4 عيوب عالية الأولوية مفتوحة؛ وتغطية المتطلبات 88%؛ وبيئة الاختبار تعطّلت يومًا ونصفًا. يضيف مدير الاختبار توجيه تحكم: تأجيل يومي الاختبار الاستكشافي للأسبوع القادم، وإضافة مختبر ثانٍ لاختبار الانحدار.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: match a metric to its group. "Mean time to failure" → product quality. "Defect detection percentage" → defects. "Number of test cases passed/failed" → test progress. "Residual risk level" → risk.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: اربط المقياس بمجموعته. «متوسط الوقت حتى العطل» ← جودة المنتج. «نسبة اكتشاف العيوب» ← العيوب. «عدد الحالات الناجحة/الفاشلة» ← تقدّم الاختبار. «مستوى المخاطر المتبقية» ← المخاطر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Confusing monitoring and control. Monitoring gathers and compares information; control acts on it with directives such as reprioritising or adding resources.</p><p class="gx-ar" lang="ar" dir="rtl">الخلط بين المراقبة والتحكم. المراقبة تجمع المعلومات وتقارنها؛ والتحكم يتصرف بناءً عليها بتوجيهات مثل إعادة ترتيب الأولويات أو إضافة موارد.</p></aside>

---
order: 7
slug: "2-2-4"
chapter: 2
group: "2.2"
section: "2.2.4"
title: "Test Monitoring and Test Control with Generative AI"
titleAr: "مراقبة الاختبار والتحكم فيه باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.4 · K3 / HO-2.2.4 · H0"
minutes: 20
lo:
  GenAI-2.2.4: "Apply GenAI to test monitoring and test control tasks."
  HO-2.2.4: "Observe how an LLM turns test data into monitoring metrics."
loAr:
  GenAI-2.2.4: "تطبّق GenAI على مهام مراقبة الاختبار والتحكم فيه."
  HO-2.2.4: "تشاهد كيف يحوّل نموذج لغوي بيانات الاختبار إلى مقاييس مراقبة."
takeaways:
  - "Monitoring compares progress with the plan; control acts on the gaps."
  - "GenAI helps with metrics analysis, control decisions, completion reports and dashboards."
  - "Every ratio needs a defined numerator and denominator. Blocked tests are neither executed nor passed."
  - "A forecast about a future risk is not an established fact."
  - "GenAI gives control insights; the test manager or team still makes the decision."
takeawaysAr:
  - "المراقبة تقارن التقدم بالخطة؛ والتحكم يتصرف حيال الفجوات."
  - "يساعد GenAI في تحليل المقاييس، وقرارات التحكم، وتقارير الإكمال، ولوحات المؤشرات."
  - "كل نسبة تحتاج بسطًا ومقامًا معرّفين. الاختبارات المحجوبة ليست منفّذة ولا ناجحة."
  - "التوقّع بخطر مستقبلي ليس حقيقة ثابتة."
  - "يقدّم GenAI رؤى للتحكم، ويبقى القرار لمدير الاختبار أو للفريق."
terms:
  - en: "Test Monitoring"
    ar: "مراقبة الاختبار"
    def: "Gathering information about testing and comparing actual progress with the plan."
    defAr: "جمع معلومات عن الاختبار ومقارنة التقدم الفعلي بالخطة."
  - en: "Test Control"
    ar: "التحكم في الاختبار"
    def: "Taking actions to meet the test objectives when monitoring shows deviations."
    defAr: "اتخاذ إجراءات لتحقيق أهداف الاختبار عندما تُظهر المراقبة انحرافات."
  - en: "Test Completion Report"
    ar: "تقرير إكمال الاختبار"
    def: "A report at the end of testing that summarises what was achieved, remaining defects and risks, successes and lessons learned."
    defAr: "تقرير في نهاية الاختبار يلخص ما أُنجز، والـ defects والمخاطر المتبقية، والنجاحات والدروس المستفادة."
---
**مراقبة الاختبار (Test Monitoring)** تجمع المعلومات عن الاختبار وتقارن التقدم الفعلي بالخطة. و**التحكم في الاختبار (Test Control)** يتخذ الإجراءات عندما تُظهر المراقبة انحرافًا، مثل تغيير الأولويات أو الجدول أو توزيع الموارد. هذان النشاطان معروفان من شهادة CTFL؛ الجديد هنا هو كيف يساعد GenAI فيهما. والهدف من مستوى **K3**: أن تستطيع **تطبيق** GenAI على مهمة مراقبة أو تحكم معطاة، وأن تعرف أين يجب أن تراجع ناتجه.

### مشكلة البيانات — Why Monitoring Needs Help

يبدأ المنهج بملاحظة بسيطة: مهام المراقبة تتطلب **استرجاع كميات كبيرة من البيانات**، وهذه البيانات **أحيانًا غير منظّمة (unstructured)**، وهي **متاحة غالبًا في أدوات إدارة الاختبار**، ويستطيع GenAI المساعدة في **تحليلها وتوليفها (analyze and synthesize)**.

ماذا تعني «غير منظّمة»؟ في تطبيق التوصيل، الأرقام المنظّمة سهلة: عدد الحالات الناجحة والفاشلة. لكن جزءًا مهمًا من الصورة موجود في نصوص حرة: تعليقات المختبرين على الـ defects، وملاحظات جلسات الاختبار الاستكشافي، وأسباب حجب الحالات. قراءة مئات التعليقات يدويًا كل يوم مرهقة، بينما يستطيع النموذج اللغوي قراءتها واستخراج الأنماط منها، مثل أن خمسة تعليقات مختلفة تذكر بطء بوابة الدفع.

### الاستخدامات الأربعة — Four Uses

يسرد المنهج أربع مهام في المراقبة والتحكم يسهّلها GenAI:

| Use | What GenAI does | Value for the team |
|---|---|---|
| Test monitoring and metrics analysis | Automates monitoring, analyses trends, predicts risks, alerts on deviations from the plan | Teams stay informed and act to maintain quality standards |
| Test control | Insights for reprioritising tests, adjusting schedules, reallocating resources | Testing stays flexible and focused on high-priority areas |
| Test completion insights and continuous learning | Generates test completion reports with successes and lessons learned | Teams refine test strategies and improve future processes |
| Enhanced test metrics visualization and reporting | Dynamic dashboards and natural language summaries | All stakeholders get relevant metrics for quick decisions and a clear view of progress |

### مراقبة المقاييس وتحليلها — Test Monitoring and Metrics Analysis

يسهّل GenAI **أتمتة المراقبة**، أي جمع الأرقام وحسابها وعرضها دون عمل يدوي يومي. ويحلل **الاتجاهات (trends)** لكي **يتنبأ بالمخاطر المحتملة**، و**ينبّه الفريق إلى أي انحراف عن الخطة**. الفرق بين الرقم والاتجاه مهم: ثمانية defects مفتوحة في الدفع رقم، أما «ثلاثة ثم خمسة ثم ثمانية في ثلاثة أيام» فهو اتجاه يستحق تنبيهًا. يقول المنهج إن ذلك يُبقي الفرق **على اطلاع**، ويمكّنها من **التصرف للحفاظ على معايير الجودة**.

### التحكم في الاختبار — Test Control

يساعد GenAI في التحكم بتقديم **رؤى (insights)** لثلاثة أنواع من القرارات: **إعادة ترتيب أولوية الاختبارات**، و**تعديل جداول الاختبار**، و**إعادة توزيع الموارد** عند الحاجة. والنتيجة، كما يقول المنهج، أن يبقى الاختبار **مرنًا ومركّزًا على المناطق عالية الأولوية**. لاحظ كلمة المنهج: GenAI يقدّم **رؤى**، أي اقتراحات مع أسبابها. عمليًا، القرار لمدير الاختبار أو للفريق، لأن النموذج لا يعرف كل شيء: إجازات الأشخاص، أو وعدًا قُطع لعميل مهم، أو اعتمادية لم تُسجَّل في الأداة. مثال لكل نوع في تطبيق التوصيل: تقديم حالات الدفع بالبطاقة لأن الـ defects تتركز فيها (أولوية)، ونقل اختبارات الأداء إلى الأسبوع الثاني بعد استقرار البناء (جدول)، وإشراك أحد المطوّرين يومًا في اختبار واجهة المطعم (موارد).

### رؤى الإكمال والتعلّم المستمر — Test Completion Insights and Continuous Learning

يساعد GenAI في **توليد تقارير إكمال الاختبار (test completion reports)**، مع إبراز **النجاحات والدروس المستفادة**. لماذا الدروس تحديدًا؟ لأن هدف هذا النشاط ليس توثيق ما حدث فقط، بل أن **تحسّن الفرق استراتيجيات الاختبار** و**عمليات الاختبار المستقبلية**. النموذج مفيد هنا لأنه يستطيع قراءة بيانات الإصدار كله، من defects وتعليقات وأسباب حجب، واقتراح أنماط متكررة قد لا يتذكرها الفريق في اجتماع المراجعة.

### عرض المقاييس والتقارير — Enhanced Test Metrics Visualization and Reporting

يساعد GenAI في إنشاء **لوحات مؤشرات ديناميكية (dynamic dashboards)** و**ملخصات بلغة طبيعية (natural language summaries)**، بحيث يحصل **كل أصحاب المصلحة على المقاييس ذات الصلة** بهم. مالك المنتج يريد معرفة هل ميزة الكوبونات جاهزة، والإدارة تريد جملتين عن جاهزية الإصدار، والمطوّرون يريدون قائمة الحالات الفاشلة مع سجلاتها. الملخص المكتوب مفيد خصوصًا لمن لا يقرأ الرسوم البيانية. والنتيجة، بحسب المنهج: معلومات تكفي **لاتخاذ قرارات سريعة**، و**رؤية واضحة لتقدم الاختبار**.

### كيف يبدو ذلك عمليًا؟ — From Test Data to Insights

يصف الهدف العملي HO-2.2.4 سلسلة واضحة: **بيانات اختبار مستخرجة من أدوات الاختبار** ← نموذج لغوي **يعالجها ويولّد مقاييس أساسية**، مثل **تقدم الاختبار، واتجاهات الـ defects، والتغطية**، مع **إبراز المخاطر المحتملة** ← عرض هذه المقاييس على **لوحة مؤشرات** ← **ملخص بلغة طبيعية** يفهمه الجميع. كل سهم في هذه السلسلة نقطة قد يحدث فيها خطأ، ولذلك نراجع الحسابات قبل اللوحة، ونراجع اللوحة قبل الملخص.

### خطوات التطبيق — Step by Step

1. **صدّر البيانات من مصدرها** (أداة إدارة الاختبار، أداة الـ defects، نتائج CI)، واذكر تاريخها.
2. **عرّف كل مقياس** قبل أن تطلبه: البسط والمقام، وماذا يُحسب منفّذًا.
3. **أعطِ الخطة** حتى يقارن النموذج الفعلي بالمخطط، لا الأرقام وحدها.
4. **اطلب فصل ثلاثة أشياء**: ملاحظات مثبتة بالأرقام، وتوقعات، وتوصيات تحكم مع أسبابها.
5. **راجع الحسابات** بنفسك أو بأداة، ثم **قرّر** إجراءات التحكم مع الفريق.
6. **خصّص العرض** لكل جمهور: لوحة، أو ملخص، أو تفاصيل تقنية.

### أمثلة محلولة — Worked Examples

**المثال 1: المراقبة في منتصف الـ sprint.** في الـ sprint الحالي من إصدار تطبيق التوصيل القادم 200 حالة مخططة (10 أيام عمل). الخطة: 120 حالة منفّذة بنهاية اليوم السادس. بيانات اليوم السادس: 80 ناجحة، و16 فاشلة، و12 محجوبة (بيئة sandbox بوابة الدفع متوقفة)، و92 لم تبدأ. والمجموع 80 + 16 + 12 + 92 = 200.

| Metric | Calculation | Value |
|---|---|---|
| Execution progress | (80 + 16) ÷ 200 | 48% |
| Planned progress by day 6 | 120 ÷ 200 | 60% |
| Gap to plan | 120 − 96 | 24 cases (12 points) |
| Pass rate of executed | 80 ÷ 96 | 83.3% |
| Blocked | 12 ÷ 200 | 6% |
| Open payment defects, days 4–6 | 3 → 5 → 8 | Rising trend |

يولّد النموذج تنبيهًا: التنفيذ متأخر عن الخطة بـ24 حالة، والـ defects المفتوحة في الدفع في ازدياد. هذه **ملاحظات مثبتة** بالأرقام. أما جملة مثل «سيتأخر الإصدار ثلاثة أيام» فهي **توقع** يجب أن يُكتب كتوقع مع افتراضاته.

**المثال 2: التحكم، وحالة خادعة.** يقترح النموذج إجراءات، ويراجعها مدير الاختبار:

| Suggested action | Model's reason | Human decision |
|---|---|---|
| Run critical payment tests first when the sandbox is back | Rising defect trend in payment | Accept |
| Move one tester from the restaurant dashboard to payment | Dashboard tests are stable | Accept for 3 days |
| Postpone coupon tests as low priority | They all passed last sprint | Reject: coupon logic changed in this sprint |

الاقتراح الثالث هو الحالة الخادعة: سببه يبدو منطقيًا، لكنه مبني على تاريخ الحالات فقط، ولم يرَ النموذج أن قاعدة الكوبونات تغيّرت في هذا الـ sprint. لو قُبل، لخرج تغيير عالي الخطر دون انحدار كافٍ.

**المثال 3: خطأ في الحساب.** في محاولة أخرى، كتب النموذج «تقدم التنفيذ 54%». عند المراجعة تبيّن أنه حسب (96 + 12) ÷ 200، أي عدّ الحالات المحجوبة منفّذة. الحالة المحجوبة لم تُشغَّل، فلا هي منفّذة ولا ناجحة. القيمة الصحيحة 48%. لهذا نعرّف البسط والمقام في التوجيه، ولا نعرض الرقم على اللوحة قبل مراجعته.

**المثال 4: تقرير الإكمال.** في نهاية الإصدار، يجهّز النموذج مسودة تقرير إكمال: ما الذي اختُبر، والـ defects المتبقية ومخاطرها، والنجاحات، والدروس. من الدروس التي اقترحها: «12 حالة حُجبت يومين بسبب توقف sandbox الدفع؛ يُقترح بديل محاكاة (mock) لبوابة الدفع في الإصدار القادم». هذا درس يغيّر الاستراتيجية فعلًا، وهو بالضبط ما يقصده المنهج بالتعلّم المستمر.

ثم يحوّل النموذج الأرقام نفسها إلى ثلاثة عروض. لمالك المنتج: لوحة بحالة كل ميزة (الكوبونات، الدفع، الإلغاء) بالألوان. للإدارة: ملخص من جملتين، مثل «اكتمل تنفيذ 97% من الحالات المخططة، وبقي defect متوسط الخطورة في الدفع بالمحفظة الرقمية مع حل بديل موثّق». وللمطوّرين: قائمة الحالات الفاشلة مع روابط السجلات. المصدر واحد والأرقام واحدة، والذي يتغير هو مستوى التفصيل واللغة. وقبل النشر، يتأكد المختبِر أن الجملتين لا تقولان أكثر مما تقوله الأرقام، فعبارة مثل «الإصدار آمن» حكم لا يملكه النموذج.

### لا تخلط بين — Don't Confuse

| | Test monitoring | Test control | Test completion |
|---|---|---|---|
| Question | Where are we compared with the plan? | What do we change now? | What did we learn for next time? |
| GenAI output | Metrics, trends, alerts | Suggested reprioritising, rescheduling, reallocation | Completion report, successes, lessons learned |
| Who decides? | Facts are checked by the tester | Test manager or team decides | Team agrees on improvements |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team generates a daily monitoring summary from the test management tool. Before it reaches the product owner, a tester checks three things: the ratios against the raw counts, that blocked cases are not counted as executed, and that every forecast is labelled as a forecast. It takes five minutes and has caught wrong numbers more than once.</p><p class="gx-ar" lang="ar" dir="rtl">يولّد فريق تطبيق التوصيل ملخص مراقبة يوميًا من أداة إدارة الاختبار. وقبل أن يصل إلى مالك المنتج، يفحص مختبِر ثلاثة أشياء: النسب مقابل الأعداد الخام، وأن الحالات المحجوبة لم تُحسب منفّذة، وأن كل توقع مكتوب على أنه توقع. يستغرق ذلك خمس دقائق، وقد كشف أرقامًا خاطئة أكثر من مرة.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Define every metric and review the calculations. Do not turn a forecast about a future risk into a stated fact.</p><p class="gx-ar" lang="ar" dir="rtl">عرّف كل مقياس وراجع الحسابات. لا تحوّل توقّعًا بخطر مستقبلي إلى حقيقة مؤكدة.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the four uses: monitoring and metrics analysis, test control, test completion insights and continuous learning, and metrics visualisation and reporting. Monitoring observes and compares with the plan; control takes action.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف الاستخدامات الأربعة: مراقبة المقاييس وتحليلها، والتحكم في الاختبار، ورؤى إكمال الاختبار والتعلّم المستمر، وعرض المقاييس والتقارير. المراقبة ترصد وتقارن بالخطة؛ والتحكم يتخذ الإجراء.</p></aside>

<section class="gx-lab" data-lab="HO-2.2.4"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Demo · Metrics from Test Data</span><span class="gx-ar" lang="ar" dir="rtl">عرض توضيحي · مقاييس من بيانات الاختبار</span></span><span class="gx-lab-meta">HO-2.2.4 · H0</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Given:</strong> 100 planned cases: 60 passed, 15 failed, 5 blocked (not run), 20 not started. Executed means passed + failed.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المعطيات:</strong> 100 حالة مخططة: 60 ناجحة، و15 فاشلة، و5 محجوبة (لم تُنفّذ)، و20 لم تبدأ. المنفّذ يعني الناجح والفاشل.</span></p><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Metric</span><span class="gx-ar" lang="ar" dir="rtl">المقياس</span></th><th><span class="gx-en" lang="en" dir="ltr">Calculation</span><span class="gx-ar" lang="ar" dir="rtl">الحساب</span></th><th><span class="gx-en" lang="en" dir="ltr">Meaning</span><span class="gx-ar" lang="ar" dir="rtl">المعنى</span></th></tr></thead><tbody><tr><td><span class="gx-en" lang="en" dir="ltr">Execution progress</span><span class="gx-ar" lang="ar" dir="rtl">تقدّم التنفيذ</span></td><td>(60 + 15) ÷ 100 = 75%</td><td><span class="gx-en" lang="en" dir="ltr">Executed vs planned</span><span class="gx-ar" lang="ar" dir="rtl">المنفّذ مقابل المخطط</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Pass rate of executed</span><span class="gx-ar" lang="ar" dir="rtl">نجاح المنفّذ</span></td><td>60 ÷ 75 = 80%</td><td><span class="gx-en" lang="en" dir="ltr">Pass rate of what actually ran</span><span class="gx-ar" lang="ar" dir="rtl">نسبة نجاح ما شُغّل فعلًا</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Pass rate of plan</span><span class="gx-ar" lang="ar" dir="rtl">النجاح من كامل الخطة</span></td><td>60 ÷ 100 = 60%</td><td><span class="gx-en" lang="en" dir="ltr">A different metric; name it clearly</span><span class="gx-ar" lang="ar" dir="rtl">مقياس مختلف؛ سمّه بوضوح</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Blocked</span><span class="gx-ar" lang="ar" dir="rtl">المحجوب</span></td><td>5 ÷ 100 = 5%</td><td><span class="gx-en" lang="en" dir="ltr">Work waiting for an obstacle to be removed</span><span class="gx-ar" lang="ar" dir="rtl">عمل ينتظر إزالة عائق</span></td></tr></tbody></table><pre class="gx-lab-prompt"><code>Analyse the attached execution data against the plan.
Define the numerator and denominator for every ratio.
Do not count blocked cases as executed or passed.
Output: metric, calculation, value, data source,
then suggested actions with reasons.
Separate proven observations from forecasts and control recommendations.</code></pre><details class="gx-lab-answer"><summary>Reading the result · <span class="gx-ar-inline" lang="ar" dir="rtl">قراءة النتيجة</span></summary><p><span class="gx-en" lang="en" dir="ltr">If the plan required 90 executed cases today, there is a gap of 15. The numbers alone do not show that a person underperformed or that the release is safe. Rescheduling also needs the importance of the remaining cases, time and dependencies. A completion report adds remaining defects, risks and lessons, not ratios alone.</span><span class="gx-ar" lang="ar" dir="rtl">إذا كانت الخطة تتطلب تنفيذ 90 حالة اليوم، فهناك فجوة 15 حالة. الأرقام وحدها لا تثبت أن شخصًا قصّر أو أن الإصدار آمن. وإعادة الجدولة تحتاج أيضًا أهمية الحالات المتبقية والوقت والاعتماديات. وتقرير الإكمال يضيف الـ defects المتبقية والمخاطر والدروس، لا النسب وحدها.</span></p></details></div></section>

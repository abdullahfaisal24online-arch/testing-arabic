---
order: 7
slug: "2-2-4"
chapter: 2
group: "2.2"
section: "2.2.4"
title: "Test Monitoring and Test Control with Generative AI"
titleAr: "مراقبة الاختبار والتحكم فيه باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.4 · K3 / HO-2.2.4 · H0"
minutes: 9
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
takeawaysAr:
  - "المراقبة تقارن التقدم بالخطة؛ والتحكم يتصرف حيال الفجوات."
  - "يساعد GenAI في تحليل المقاييس، وقرارات التحكم، وتقارير الإكمال، ولوحات المؤشرات."
  - "كل نسبة تحتاج بسطًا ومقامًا معرّفين. الاختبارات المحجوبة ليست منفّذة ولا ناجحة."
  - "التوقّع بخطر مستقبلي ليس حقيقة ثابتة."
terms:
  - en: "Test Monitoring"
    ar: "مراقبة الاختبار"
    def: "Gathering information about testing and comparing actual progress with the plan."
    defAr: "جمع معلومات عن الاختبار ومقارنة التقدم الفعلي بالخطة."
  - en: "Test Control"
    ar: "التحكم في الاختبار"
    def: "Taking actions to meet the test objectives when monitoring shows deviations."
    defAr: "اتخاذ إجراءات لتحقيق أهداف الاختبار عندما تُظهر المراقبة انحرافات."
---
**Test Monitoring** يجمع البيانات ويقارن التقدم بالخطة. **Test Control** يتخذ إجراءات بناءً على الفجوات، مثل تعديل الأولوية أو الجدول أو توزيع الموارد. تحتاج المراقبة بيانات كثيرة وغير منظمة غالبًا، متاحة عادة في أنظمة إدارة الاختبار، ويستطيع GenAI فحصها وتلخيصها.

### أربعة استخدامات — Four Uses

- **مراقبة المقاييس وتحليلها:** أتمتة المتابعة وتحليل الاتجاهات، وتوقّع المخاطر المحتملة والتنبيه للانحراف عن الجدول.
- **التحكم:** اقتراح إعادة ترتيب الاختبارات وتعديل الجداول وإعادة توزيع الموارد عند تغيّر الظروف.
- **تقارير الإكمال والتعلّم المستمر:** إعداد تقرير الإكمال بما أُنجز والدروس المستفادة لتحسين العمليات القادمة.
- **عرض المقاييس:** لوحات مؤشرات وملخصات مكتوبة تعطي كل صاحب مصلحة المقاييس المناسبة لقرارات أسرع وأوضح.

### مثال من سبرنت — A Sprint Example

في منتصف السبرنت، يقرأ النموذج بيانات أداة إدارة الاختبار: نسبة التنفيذ أقل من المخطط بـ15%، والعيوب المفتوحة في مكوّن الدفع تزداد منذ ثلاثة أيام. يقترح النموذج تنبيهًا للفريق، ويقترح للتحكم: نقل مختبِر من مكوّن مستقر إلى الدفع، وتأجيل حالات منخفضة الأولوية، وتقديم حالات الدفع الحرجة. مدير الاختبار يقرر، لأن النموذج لا يعرف مثلًا أن المختبِر المقترح نقله في إجازة.

وفي نهاية الإصدار، يجهّز النموذج مسودة تقرير إكمال: ما الذي أُنجز، والعيوب المتبقية، والمخاطر، والدروس المستفادة للإصدار القادم. ثم يحوّل المقاييس إلى لوحة لمدير المنتج، وملخص مكتوب للإدارة، ومستوى تفصيل أعلى للفريق التقني.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-ar">فكرة أساسية</span><span class="gx-en" lang="en" dir="ltr">Key idea</span></p><p class="gx-ar">عرّف كل مقياس وراجع الحسابات. لا تحوّل توقّعًا بخطر مستقبلي إلى حقيقة مؤكدة.</p><p class="gx-en" lang="en" dir="ltr">Define every metric and review the calculations. Do not turn a forecast about a future risk into a stated fact.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">اعرف الاستخدامات الأربعة: مراقبة المقاييس وتحليلها، والتحكم في الاختبار، ورؤى إكمال الاختبار والتعلّم المستمر، وعرض المقاييس والتقارير. المراقبة ترصد وتقارن بالخطة؛ والتحكم يتخذ الإجراء.</p><p class="gx-en" lang="en" dir="ltr">Know the four uses: monitoring and metrics analysis, test control, test completion insights and continuous learning, and metrics visualisation and reporting. Monitoring observes and compares with the plan; control takes action.</p></aside>

<section class="gx-lab" data-lab="HO-2.2.4"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-ar">عرض توضيحي · مقاييس من بيانات الاختبار</span><span class="gx-en" lang="en" dir="ltr">Demo · Metrics from Test Data</span></span><span class="gx-lab-meta">HO-2.2.4 · H0</span></header><div class="gx-lab-body"><p><span class="gx-ar"><strong>المعطيات:</strong> 100 حالة مخططة: 60 ناجحة، و15 فاشلة، و5 محجوبة (لم تُنفّذ)، و20 لم تبدأ. المنفّذ يعني الناجح والفاشل.</span><span class="gx-en" lang="en" dir="ltr"><strong>Given:</strong> 100 planned cases: 60 passed, 15 failed, 5 blocked (not run), 20 not started. Executed means passed + failed.</span></p><table><thead><tr><th><span class="gx-ar">المقياس</span><span class="gx-en" lang="en" dir="ltr">Metric</span></th><th><span class="gx-ar">الحساب</span><span class="gx-en" lang="en" dir="ltr">Calculation</span></th><th><span class="gx-ar">المعنى</span><span class="gx-en" lang="en" dir="ltr">Meaning</span></th></tr></thead><tbody><tr><td><span class="gx-ar">تقدّم التنفيذ</span><span class="gx-en" lang="en" dir="ltr">Execution progress</span></td><td>(60 + 15) ÷ 100 = 75%</td><td><span class="gx-ar">المنفّذ مقابل المخطط</span><span class="gx-en" lang="en" dir="ltr">Executed vs planned</span></td></tr><tr><td><span class="gx-ar">نجاح المنفّذ</span><span class="gx-en" lang="en" dir="ltr">Pass rate of executed</span></td><td>60 ÷ 75 = 80%</td><td><span class="gx-ar">نسبة نجاح ما شُغّل فعلًا</span><span class="gx-en" lang="en" dir="ltr">Pass rate of what actually ran</span></td></tr><tr><td><span class="gx-ar">النجاح من كامل الخطة</span><span class="gx-en" lang="en" dir="ltr">Pass rate of plan</span></td><td>60 ÷ 100 = 60%</td><td><span class="gx-ar">مقياس مختلف؛ سمّه بوضوح</span><span class="gx-en" lang="en" dir="ltr">A different metric; name it clearly</span></td></tr><tr><td><span class="gx-ar">المحجوب</span><span class="gx-en" lang="en" dir="ltr">Blocked</span></td><td>5 ÷ 100 = 5%</td><td><span class="gx-ar">عمل ينتظر إزالة عائق</span><span class="gx-en" lang="en" dir="ltr">Work waiting for an obstacle to be removed</span></td></tr></tbody></table><pre class="gx-lab-prompt"><code>Analyse the attached execution data against the plan.
Define the numerator and denominator for every ratio.
Do not count blocked cases as executed or passed.
Output: metric, calculation, value, data source,
then suggested actions with reasons.
Separate proven observations from forecasts and control recommendations.</code></pre><details class="gx-lab-answer"><summary>قراءة النتيجة <span class="gx-en-inline" lang="en">· Reading the result</span></summary><p><span class="gx-ar">إذا كانت الخطة تتطلب تنفيذ 90 حالة اليوم، فهناك فجوة 15 حالة. الأرقام وحدها لا تثبت أن شخصًا قصّر أو أن الإصدار آمن. وإعادة الجدولة تحتاج أيضًا أهمية الحالات المتبقية والوقت والاعتماديات. وتقرير الإكمال يضيف العيوب المتبقية والمخاطر والدروس، لا النسب وحدها.</span><span class="gx-en" lang="en" dir="ltr">If the plan required 90 executed cases today, there is a gap of 15. The numbers alone do not show that a person underperformed or that the release is safe. Rescheduling also needs the importance of the remaining cases, time and dependencies. A completion report adds remaining defects, risks and lessons, not ratios alone.</span></p></details></div></section>

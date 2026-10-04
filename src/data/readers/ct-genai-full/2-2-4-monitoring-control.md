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
takeaways:
  - "Monitoring compares progress with the plan; control acts on the gaps."
  - "GenAI helps with metrics analysis, control decisions, completion reports and dashboards."
  - "Every ratio needs a defined numerator and denominator. Blocked tests are neither executed nor passed."
  - "A forecast about a future risk is not an established fact."
terms:
  - en: "Test Monitoring"
    ar: "مراقبة الاختبار"
    def: "Gathering information about testing and comparing actual progress with the plan."
  - en: "Test Control"
    ar: "التحكم في الاختبار"
    def: "Taking actions to meet the test objectives when monitoring shows deviations."
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

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea</p><p>Define every metric and review the calculations. Do not turn a forecast about a future risk into a stated fact.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Know the four uses: monitoring and metrics analysis, test control, test completion insights and continuous learning, and metrics visualisation and reporting. Monitoring observes and compares with the plan; control takes action.</p></aside>

<section class="gx-lab" data-lab="HO-2.2.4"><header class="gx-lab-head"><span class="gx-lab-title">Demo · Metrics from Test Data</span><span class="gx-lab-meta">HO-2.2.4 · H0</span></header><div class="gx-lab-body"><p><strong>Given:</strong> 100 planned cases: 60 passed, 15 failed, 5 blocked (not run), 20 not started. Executed means passed + failed.</p><table><thead><tr><th>Metric</th><th>Calculation</th><th>Meaning</th></tr></thead><tbody><tr><td>Execution progress</td><td>(60 + 15) ÷ 100 = 75%</td><td>Executed vs planned</td></tr><tr><td>Pass rate of executed</td><td>60 ÷ 75 = 80%</td><td>Pass rate of what actually ran</td></tr><tr><td>Pass rate of plan</td><td>60 ÷ 100 = 60%</td><td>A different metric; name it clearly</td></tr><tr><td>Blocked</td><td>5 ÷ 100 = 5%</td><td>Work waiting for an obstacle to be removed</td></tr></tbody></table><pre class="gx-lab-prompt"><code>Analyse the attached execution data against the plan.
Define the numerator and denominator for every ratio.
Do not count blocked cases as executed or passed.
Output: metric, calculation, value, data source,
then suggested actions with reasons.
Separate proven observations from forecasts and control recommendations.</code></pre><details class="gx-lab-answer"><summary>Reading the result</summary><p>If the plan required 90 executed cases today, there is a gap of 15. The numbers alone do not show that a person underperformed or that the release is safe. Rescheduling also needs the importance of the remaining cases, time and dependencies. A completion report adds remaining defects, risks and lessons, not ratios alone.</p></details></div></section>

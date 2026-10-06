---
order: 2
slug: "1-1-2"
chapter: 1
group: "1.1"
section: "1.1.2"
title: "Testing and Debugging"
titleAr: "الاختبار والتنقيح"
objectives: "FL-1.1.2 · K2"
minutes: 7
lo:
  FL-1.1.2: "Explain how testing differs from debugging."
loAr:
  FL-1.1.2: "تشرح الفرق بين الاختبار والتنقيح."
labs: ["LAB-1.1.2"]
takeaways:
  - "Testing finds problems; debugging finds, analyses and removes their causes."
  - "Dynamic testing triggers failures; debugging then reproduces the failure, diagnoses the defect and fixes it."
  - "After a fix, confirmation testing checks the fix, and regression testing checks that nothing else broke."
  - "Static testing finds defects directly, so debugging only needs to remove them."
takeawaysAr:
  - "الاختبار يكشف المشكلات؛ والتنقيح يجد أسبابها ويحللها ويزيلها."
  - "الاختبار الديناميكي يُحدث الأعطال؛ ثم يعيد التنقيح إنتاج العطل ويشخّص الـ defect ويصلحه."
  - "بعد الإصلاح، يتأكد اختبار التأكيد من نجاح الإصلاح، ويتأكد اختبار الانحدار من أن شيئًا آخر لم يتعطل."
  - "الاختبار الساكن يكتشف الـ defects مباشرة، فلا يحتاج التنقيح إلا إلى إزالتها."
terms:
  - en: "Debugging"
    ar: "التنقيح"
    def: "The process of finding, analysing and removing the causes of failures in a component or system."
    defAr: "عملية إيجاد أسباب الأعطال في مكوّن أو نظام وتحليلها وإزالتها."
  - en: "Confirmation Testing"
    ar: "اختبار التأكيد"
    def: "Testing that checks whether a fix has resolved the original problem. Also called re-testing."
    defAr: "اختبار يتأكد من أن الإصلاح حلّ المشكلة الأصلية. ويسمّى أيضًا إعادة الاختبار."
    match: ["Confirmation Testing", "confirmation testing", "re-testing"]
  - en: "Regression Testing"
    ar: "اختبار الانحدار"
    def: "Testing that checks whether a change, including a fix, has caused failures in other parts of the system."
    defAr: "اختبار يتأكد من أن تغييرًا ما، بما في ذلك الإصلاح، لم يسبب أعطالًا في أجزاء أخرى من النظام."
    match: ["Regression Testing", "regression testing"]
---
كثيرًا ما يُخلط بين **الاختبار** و**التنقيح (Debugging)**، وكأن المختبر هو من يصلح المشكلة. لكنهما نشاطان مختلفان، ولكلٍّ منهما هدف ومسؤول مختلف.

### الفرق الأساسي — The Core Difference

الاختبار يكشف وجود مشكلة. يمكن أن يحدث ذلك بطريقتين:

- **الاختبار الديناميكي** يشغّل البرمجية، فيُحدث **أعطالًا (Failures)** سببها defects في الشيفرة.
- **الاختبار الساكن** يفحص مُخرَج العمل دون تشغيله، فيجد **الـ defects (Defects)** نفسها مباشرة.

أما **التنقيح** فيهتم بإيجاد أسباب الأعطال، وهي الـ defects، ثم تحليلها وإزالتها. الاختبار يقول «هنا مشكلة»، والتنقيح يقول «هذا سببها، وهذا إصلاحها».

### بعد الاختبار الديناميكي — After Dynamic Testing

عندما يُحدث الاختبار الديناميكي عطلًا، تمر عملية التنقيح عادة بثلاث خطوات:

<figure class="gx-figure" aria-label="Debugging after a failure found by dynamic testing, followed by confirmation and regression testing."><div class="gx-flow-row"><span class="gx-flow-node">Reproduce<small>the failure</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Diagnose<small>find the defect</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Fix<small>remove the cause</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Confirm<small>re-test</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Regress<small>check the rest</small></span></div><figcaption>Debugging after a failure found by dynamic testing, followed by confirmation and regression testing.</figcaption></figure>

1. **إعادة إنتاج العطل (Reproduction):** التأكد من أن العطل يتكرر، وفهم الظروف التي يحدث فيها.
2. **التشخيص (Diagnosis):** البحث عن الـ defect الذي سبّب العطل.
3. **الإصلاح (Fixing):** إزالة سبب المشكلة.

بعد الإصلاح يعود دور الاختبار:

- **اختبار التأكيد (Confirmation Testing)** يتحقق من أن الإصلاح حلّ المشكلة الأصلية. يُفضّل أن يقوم به الشخص نفسه الذي نفّذ الاختبار الأول، لأنه يعرف تفاصيل الحالة.
- **اختبار الانحدار (Regression Testing)** قد يُنفَّذ بعده، للتأكد من أن الإصلاح لم يسبب أعطالًا في أجزاء أخرى من موضوع الاختبار.

### بعد الاختبار الساكن — After Static Testing

إذا اكتشف الاختبار الساكن defect، كتعارض بين متطلبين في وثيقة، يكون التنقيح أبسط: المطلوب فقط **إزالة الـ defect**. لا حاجة لإعادة إنتاج عطل أو تشخيصه، لأن الاختبار الساكن يجد الـ defect مباشرة ولا يمكنه أن يُحدث عطلًا أصلًا؛ فلا شيء يتم تشغيله.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Testing and debugging are separate activities. Testing shows that a problem exists; debugging finds and removes its cause. Fixing a defect is not a testing activity.</p><p class="gx-ar" lang="ar" dir="rtl">الاختبار والتنقيح نشاطان منفصلان. الاختبار يُظهر أن هناك مشكلة؛ والتنقيح يجد سببها ويزيله. إصلاح الـ defect ليس نشاط اختبار.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A tester finds that the discount is not applied at checkout and reports it. A developer reproduces it, finds a wrong condition in the pricing code and fixes it. The tester then re-runs the original test (confirmation) and runs the checkout regression suite to make sure shipping and tax still work (regression).</p><p class="gx-ar" lang="ar" dir="rtl">يكتشف المختبر أن الخصم لا يُطبَّق عند الدفع ويرفع تقريرًا. يعيد المطوّر إنتاج المشكلة، ويجد شرطًا خاطئًا في شيفرة التسعير ويصلحه. ثم يعيد المختبر تشغيل الاختبار الأصلي (تأكيد)، ويشغّل مجموعة اختبارات الانحدار الخاصة بالدفع للتأكد من أن الشحن والضريبة ما زالا يعملان (انحدار).</p></aside>

<section class="gx-lab" data-lab="LAB-1.1.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Split a Bug's Life into Testing and Debugging</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · فصّل حياة defect بين الاختبار والتنقيح</span></span><span class="gx-lab-meta">LAB-1.1.2 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> take one real defect from your project and separate the testing steps from the debugging steps.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> خذ defect حقيقيًا من مشروعك وافصل خطوات الاختبار عن خطوات التنقيح.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Pick a closed defect report from your tracker (Jira or similar).</span><span class="gx-ar" lang="ar" dir="rtl">اختر تقرير defect مغلقًا من أداة المتابعة لديكم (Jira أو غيرها).</span></li><li><span class="gx-en" lang="en" dir="ltr">List every step from discovery to closure: who did it and what they did.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب كل خطوة من اكتشافه حتى إغلاقه: من قام بها وماذا فعل.</span></li><li><span class="gx-en" lang="en" dir="ltr">Label each step as Testing, Debugging, Confirmation testing or Regression testing.</span><span class="gx-ar" lang="ar" dir="rtl">صنّف كل خطوة: اختبار، أو تنقيح، أو اختبار تأكيد، أو اختبار انحدار.</span></li><li><span class="gx-en" lang="en" dir="ltr">Check whether confirmation and regression testing actually happened. If not, note the risk.</span><span class="gx-ar" lang="ar" dir="rtl">تأكد هل تم اختبار التأكيد والانحدار فعلًا. إن لم يحدث، سجّل الخطر.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Each step has one clear label. Reproduce, diagnose and fix are debugging; finding the failure, re-testing the fix and checking the rest are testing. You can point to where confirmation or regression testing was missing.</span><span class="gx-ar" lang="ar" dir="rtl">لكل خطوة تصنيف واضح. إعادة الإنتاج والتشخيص والإصلاح تنقيح؛ واكتشاف العطل وإعادة اختبار الإصلاح وفحص باقي النظام اختبار. وتستطيع أن تحدد أين غاب اختبار التأكيد أو الانحدار.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Questions often describe a scenario and ask which activity is debugging. Reproducing, diagnosing and fixing belong to debugging. Re-running a test after a fix is confirmation testing, not debugging.</p><p class="gx-ar" lang="ar" dir="rtl">الأسئلة غالبًا تصف موقفًا وتسأل أي نشاط هو التنقيح. إعادة الإنتاج والتشخيص والإصلاح تنتمي للتنقيح. أما إعادة تشغيل الاختبار بعد الإصلاح فهي اختبار تأكيد، وليست تنقيحًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Mixing up confirmation and regression testing. Confirmation testing checks that the fix works; regression testing checks that the fix (or any change) did not break something else.</p><p class="gx-ar" lang="ar" dir="rtl">الخلط بين اختبار التأكيد واختبار الانحدار. اختبار التأكيد يتأكد من أن الإصلاح يعمل؛ واختبار الانحدار يتأكد من أن الإصلاح (أو أي تغيير) لم يعطّل شيئًا آخر.</p></aside>

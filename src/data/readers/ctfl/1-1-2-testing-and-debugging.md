---
order: 2
slug: "1-1-2"
chapter: 1
group: "1.1"
section: "1.1.2"
title: "Testing and Debugging"
titleAr: "الاختبار والتنقيح"
objectives: "FL-1.1.2 · K2"
minutes: 9
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
  - "Confirmation testing is preferably done by the same person who performed the initial test."
takeawaysAr:
  - "الاختبار يكشف المشكلات؛ والتنقيح يجد أسبابها ويحللها ويزيلها."
  - "الاختبار الديناميكي يُحدث الأعطال؛ ثم يعيد التنقيح إنتاج العطل ويشخّص الـ defect ويصلحه."
  - "بعد الإصلاح، يتأكد اختبار التأكيد من نجاح الإصلاح، ويتأكد اختبار الانحدار من أن شيئًا آخر لم يتعطل."
  - "الاختبار الساكن يكتشف الـ defects مباشرة، فلا يحتاج التنقيح إلا إلى إزالتها."
  - "يُفضَّل أن يُجري اختبار التأكيد الشخصُ نفسه الذي نفّذ الاختبار الأول."
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
كثيرًا ما يُخلط بين **الاختبار** و**التنقيح (Debugging)**، فيظن البعض أن المختبر هو من يصلح المشكلة، أو أن المطوّر حين يتتبع الخطأ في الشيفرة «يختبر». المنهج يحسم الأمر من أول جملة: **الاختبار والتنقيح نشاطان منفصلان**. لكلٍّ منهما هدف مختلف، ومخرجات مختلفة، وغالبًا شخص مختلف يقوم به. وفهم هذا الفصل مهم عمليًا: الفريق الذي يخلط بينهما إما يترك الـ defects دون إصلاح، أو يصلحها دون أن يتأكد أحد أن الإصلاح نجح.

### الفرق الأساسي — The Core Difference

الاختبار يكشف أن هناك مشكلة، وذلك بطريقتين:

- **الاختبار الديناميكي (Dynamic Testing)** يشغّل البرمجية، فقد **يُحدث أعطالًا (Failures)** سببها defects في الشيفرة. نحن لا نرى الـ defect نفسه، بل نرى أثره: نتيجة خاطئة، أو شاشة تتوقف، أو رسالة غير متوقعة.
- **الاختبار الساكن (Static Testing)** يفحص مُخرَج العمل دون تشغيله، فيجد **الـ defects (Defects)** نفسها **مباشرة**: شرط ناقص في قصة مستخدم، أو سطر شيفرة مريب في مراجعة.

أما **التنقيح** فهو عملية إيجاد أسباب الأعطال، أي الـ defects، ثم تحليلها وإزالتها. بعبارة مختصرة: الاختبار يقول «هنا مشكلة»، والتنقيح يقول «هذا سببها، وهذا إصلاحها». لذلك **إصلاح الـ defect ليس نشاط اختبار**، حتى لو قام به مختبر.

### التنقيح بعد الاختبار الديناميكي — Debugging After Dynamic Testing

عندما يُحدث الاختبار الديناميكي عطلًا، يمر التنقيح عادة بثلاث خطوات، ثم يعود الاختبار ليغلق الدائرة:

<figure class="gx-figure" aria-label="Debugging after a failure found by dynamic testing, followed by confirmation and regression testing."><div class="gx-flow-row"><span class="gx-flow-node">Reproduce<small>the failure</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Diagnose<small>find the defect</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Fix<small>remove the cause</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Confirm<small>re-test</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Regress<small>check the rest</small></span></div><figcaption>Debugging after a failure found by dynamic testing, followed by confirmation and regression testing.</figcaption></figure>

1. **إعادة إنتاج العطل (Reproduction):** يتأكد المطوّر أن العطل يتكرر، ويحدد الظروف الدقيقة التي يظهر فيها: أي جهاز، وأي بيانات، وأي خطوات. لماذا تبدأ العملية هنا؟ لأن عطلًا لا يمكن إعادة إنتاجه لا يمكن تشخيصه بثقة، ولا يمكن التأكد لاحقًا من أنه زال.
2. **التشخيص (Diagnosis):** البحث عن **الـ defect** الذي سبّب العطل، أي المكان الدقيق للخلل في الشيفرة أو الإعدادات.
3. **الإصلاح (Fixing):** إزالة الـ defect.

بعد الإصلاح يعود دور الاختبار:

- **اختبار التأكيد (Confirmation Testing)** يتحقق من أن الإصلاح **حلّ المشكلة الأصلية**. يفضّل المنهج أن يقوم به **الشخص نفسه الذي نفّذ الاختبار الأول**، لأنه يعرف الخطوات والبيانات والظروف التي أظهرت العطل، فيعيدها بدقة ولا يكتفي بنسخة مبسطة منها.
- **اختبار الانحدار (Regression Testing)** قد يُنفَّذ بعده، للتأكد من أن الإصلاح **لم يسبب أعطالًا في أجزاء أخرى** من موضوع الاختبار. فالتعديل في دالة واحدة قد يغيّر سلوك كل من يستخدمها. وستجد تفاصيل النوعين في القسم 2.2.3.

### مثال كامل من تطبيق التوصيل — A Full Example

| Step | What happens | Activity |
| --- | --- | --- |
| 1 | Tester runs a test: order of exactly 20.00 JOD; the app charges a 1.50 JOD delivery fee instead of free delivery | Testing (dynamic) → failure |
| 2 | Developer repeats it on a test device and sees the same fee | Debugging: reproduction |
| 3 | Developer finds the condition `total > 20` where the rule needs `total >= 20` | Debugging: diagnosis |
| 4 | Developer corrects the condition and commits | Debugging: fixing |
| 5 | Same tester re-runs the original test with 20.00 JOD: delivery is now free | Confirmation testing |
| 6 | CI runs the checkout and payment tests: cash, card, wallet, percentage coupons | Regression testing |

لاحظ أن العطل (رسوم 1.50 دينار على طلب يستحق التوصيل المجاني) هو ما رآه المختبر، والـ defect (الشرط `>` بدل `>=`) هو ما وجده المطوّر. المختبر لم يقرأ الشيفرة، والمطوّر لم يكتشف المشكلة؛ كل منهما أدّى نشاطًا مختلفًا. ولاحظ لماذا الخطوة 6 ضرورية: الشرط نفسه قد يُستخدم في شاشة ملخص الطلب أو في رسالة «أضف X دينار لتحصل على توصيل مجاني»، والإصلاح قد يغيّر سلوكها.

### التنقيح بعد الاختبار الساكن — Debugging After Static Testing

إذا اكتشف الاختبار الساكن defect، يكون التنقيح أبسط: المطلوب فقط **إزالة الـ defect**. لا حاجة لإعادة إنتاج أو تشخيص، والسبب منطقي: الاختبار الساكن **يجد الـ defect مباشرة**، ولا يمكنه أن **يُحدث عطلًا** أصلًا، لأن لا شيء يتم تشغيله. مثلًا، في مراجعة قصة المستخدم يلاحظ المختبر أنها تسمح بإلغاء الطلب «في أي وقت»، بينما القاعدة المتفق عليها أن الإلغاء ممكن فقط قبل «Out for delivery». مكان الـ defect معروف من لحظة اكتشافه، فيكفي أن يعدّل مالك المنتج النص.

والأمر نفسه ينطبق على الشيفرة: إذا نبّهت أداة التحليل الساكن في خط CI إلى متغير يُستخدم قبل إعطائه قيمة في شيفرة حساب الكوبون، فالأداة أشارت إلى السطر نفسه، ولا يحتاج المطوّر إلى تشغيل التطبيق ليبحث عن السبب؛ يكفيه أن يصحح السطر.

### لماذا يهم الفصل بينهما؟ — Why the Separation Matters

قد يقوم الشخص نفسه بالنشاطين. المطوّر في فريق التوصيل يكتب اختبار مكوّن لدالة رسوم التوصيل، فيفشل الاختبار (اختبار)، ثم يتتبع السبب ويصلحه (تنقيح). لكن وجود شخص واحد لا يلغي أنهما نشاطان مختلفان، والتمييز بينهما له فوائد عملية:

- **التخطيط والتقدير:** وقت التنقيح لا يُحسب ضمن جهد الاختبار، وإلا بدا الاختبار أبطأ مما هو.
- **المسؤولية:** المختبر مسؤول عن وصف العطل بدقة تسمح بإعادة إنتاجه، والمطوّر مسؤول عن إيجاد الـ defect وإزالته. تقرير defect جيد يختصر خطوة إعادة الإنتاج كثيرًا.
- **إغلاق الدائرة:** إذا اعتبر الفريق أن «الإصلاح انتهى» يعني «المشكلة انتهت»، فسيتخطى اختبار التأكيد والانحدار، وهنا تعود الأعطال إلى المتجر.

### لا تخلط بين — Don't Confuse

| | Testing | Debugging |
| --- | --- | --- |
| Purpose | Show that problems exist; evaluate quality | Find, analyse and remove the causes of failures |
| Output | Failures observed, defects reported, test results | A fixed work product |
| Typical owner | Testers (and anyone testing) | Developers (or the author of the work product) |
| After static testing | Finds the defect directly | Only removes it |

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Testing and debugging are separate activities. Testing shows that a problem exists; debugging finds and removes its cause. Fixing a defect is not a testing activity.</p><p class="gx-ar" lang="ar" dir="rtl">الاختبار والتنقيح نشاطان منفصلان. الاختبار يُظهر أن هناك مشكلة؛ والتنقيح يجد سببها ويزيله. إصلاح الـ defect ليس نشاط اختبار.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In the delivery team, a tester logs that a percentage coupon is not applied when paying by wallet. A developer reproduces it, finds a missing payment-method branch in the pricing code and fixes it. The tester then re-runs the original test (confirmation), and the CI pipeline runs the checkout regression suite to make sure cash, card and the delivery fee still work (regression).</p><p class="gx-ar" lang="ar" dir="rtl">في فريق تطبيق التوصيل، يسجّل المختبر أن كوبون النسبة المئوية لا يُطبَّق عند الدفع بالمحفظة. يعيد المطوّر إنتاج المشكلة، ويجد فرعًا ناقصًا لطريقة الدفع في شيفرة التسعير ويصلحه. ثم يعيد المختبر تشغيل الاختبار الأصلي (تأكيد)، ويشغّل خط CI مجموعة اختبارات الانحدار الخاصة بالدفع للتأكد من أن النقد والبطاقة ورسوم التوصيل ما زالت تعمل (انحدار).</p></aside>

<section class="gx-lab" data-lab="LAB-1.1.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Split a Bug's Life into Testing and Debugging</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · فصّل حياة defect بين الاختبار والتنقيح</span></span><span class="gx-lab-meta">LAB-1.1.2 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> take one real defect from your project and separate the testing steps from the debugging steps.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> خذ defect حقيقيًا من مشروعك وافصل خطوات الاختبار عن خطوات التنقيح.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Pick a closed defect report from your tracker (Jira or similar).</span><span class="gx-ar" lang="ar" dir="rtl">اختر تقرير defect مغلقًا من أداة المتابعة لديكم (Jira أو غيرها).</span></li><li><span class="gx-en" lang="en" dir="ltr">List every step from discovery to closure: who did it and what they did.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب كل خطوة من اكتشافه حتى إغلاقه: من قام بها وماذا فعل.</span></li><li><span class="gx-en" lang="en" dir="ltr">Label each step as Testing, Debugging, Confirmation testing or Regression testing.</span><span class="gx-ar" lang="ar" dir="rtl">صنّف كل خطوة: اختبار، أو تنقيح، أو اختبار تأكيد، أو اختبار انحدار.</span></li><li><span class="gx-en" lang="en" dir="ltr">Check whether confirmation and regression testing actually happened. If not, note the risk.</span><span class="gx-ar" lang="ar" dir="rtl">تأكد هل تم اختبار التأكيد والانحدار فعلًا. إن لم يحدث، سجّل الخطر.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Each step has one clear label. Reproduce, diagnose and fix are debugging; finding the failure, re-testing the fix and checking the rest are testing. You can point to where confirmation or regression testing was missing.</span><span class="gx-ar" lang="ar" dir="rtl">لكل خطوة تصنيف واضح. إعادة الإنتاج والتشخيص والإصلاح تنقيح؛ واكتشاف العطل وإعادة اختبار الإصلاح وفحص باقي النظام اختبار. وتستطيع أن تحدد أين غاب اختبار التأكيد أو الانحدار.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Questions often describe a scenario and ask which activity is debugging. Reproducing, diagnosing and fixing belong to debugging. Re-running a test after a fix is confirmation testing, not debugging.</p><p class="gx-ar" lang="ar" dir="rtl">الأسئلة غالبًا تصف موقفًا وتسأل أي نشاط هو التنقيح. إعادة الإنتاج والتشخيص والإصلاح تنتمي للتنقيح. أما إعادة تشغيل الاختبار بعد الإصلاح فهي اختبار تأكيد، وليست تنقيحًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Mixing up confirmation and regression testing. Confirmation testing checks that the fix works; regression testing checks that the fix (or any change) did not break something else.</p><p class="gx-ar" lang="ar" dir="rtl">الخلط بين اختبار التأكيد واختبار الانحدار. اختبار التأكيد يتأكد من أن الإصلاح يعمل؛ واختبار الانحدار يتأكد من أن الإصلاح (أو أي تغيير) لم يعطّل شيئًا آخر.</p></aside>

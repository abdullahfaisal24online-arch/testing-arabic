---
order: 9
slug: "2-3-1"
chapter: 2
group: "2.3"
section: "2.3.1"
title: "Metrics for Evaluating the Results of Generative AI on Test Tasks"
titleAr: "مقاييس تقييم نتائج الذكاء التوليدي في مهام الاختبار"
objectives: "GenAI-2.3.1 · K2 / HO-2.3.1 · H0"
minutes: 16
lo:
  GenAI-2.3.1: "Explain the metrics used to evaluate GenAI results on test tasks."
  HO-2.3.1: "Observe task-specific metrics applied to real LLM output."
loAr:
  GenAI-2.3.1: "تشرح المقاييس المستخدمة لتقييم نتائج GenAI في مهام الاختبار."
  HO-2.3.1: "تشاهد مقاييس خاصة بالمهمة مطبّقة على ناتج نموذج لغوي فعلي."
takeaways:
  - "Seven common metrics: accuracy, precision, recall, relevance, diversity, execution success rate and time efficiency."
  - "Add task-specific metrics, and define the success criterion and the measurement method for each."
  - "Because output is non-deterministic, judge on enough varied runs, not one good attempt."
  - "A script that executes is not a passed test, and time saved must include review and fixing."
  - "Precision asks how much of what was flagged is right; recall asks how much of what should be found was found."
takeawaysAr:
  - "سبعة مقاييس شائعة: الدقة الكلية، والضبط، والاستدعاء، والملاءمة، والتنوّع، ونسبة نجاح التشغيل، وكفاءة الوقت."
  - "أضف مقاييس خاصة بالمهمة، وعرّف معيار النجاح وطريقة القياس لكل منها."
  - "لأن الناتج غير حتمي، احكم على عدد كافٍ من التشغيلات المتنوعة، لا على محاولة واحدة جيدة."
  - "الـ script الذي يعمل ليس اختبارًا ناجحًا، والوقت الموفّر يجب أن يشمل المراجعة والتصحيح."
  - "الضبط يسأل كم مما أُشير إليه صحيح؛ والاستدعاء يسأل كم مما يجب إيجاده وُجد فعلًا."
terms:
  - en: "Accuracy"
    ar: "الدقة الكلية"
    def: "Overall correctness of the output compared with an expert reference, requirements or benchmark."
    defAr: "الصحة الكلية للناتج مقارنة بمرجع خبير أو بالمتطلبات أو بمعيار."
  - en: "Precision"
    ar: "الضبط"
    def: "Of the items the model flagged for a goal, the share that were actually correct."
    defAr: "من بين العناصر التي أشار إليها النموذج لهدف ما، نسبة ما كان صحيحًا فعلًا."
  - en: "Recall"
    ar: "الاستدعاء"
    def: "Of all relevant items in the reference set, the share the model found."
    defAr: "من بين كل العناصر ذات الصلة في المجموعة المرجعية، نسبة ما وجده النموذج."
  - en: "Execution Success Rate"
    ar: "نسبة نجاح التشغيل"
    def: "The share of generated test cases or scripts that run successfully in a working test environment."
    defAr: "نسبة حالات الاختبار أو الـ scripts المولّدة التي تعمل بنجاح في بيئة اختبار عاملة."
  - en: "Relevance and Contextual Fit"
    ar: "الملاءمة والتوافق مع السياق"
    def: "Whether generated output is applicable and appropriate for the context, consistent with the test basis and domain requirements."
    defAr: "مدى مناسبة الناتج المولّد للسياق، واتساقه مع أساس الاختبار ومتطلبات المجال."
    match: ["Contextual Fit"]
  - en: "Diversity"
    ar: "التنوّع"
    def: "The extent to which generated output covers a wide range of inputs, user behaviours and edge cases without repetition."
    defAr: "مدى تغطية الناتج المولّد لمدى واسع من المدخلات وسلوكيات المستخدم والحالات الحدّية دون تكرار."
  - en: "Time Efficiency"
    ar: "كفاءة الوقت"
    def: "Time saved by using GenAI compared with equivalent manual test effort."
    defAr: "الوقت الموفّر باستخدام GenAI مقارنة بجهد الاختبار اليدوي المكافئ."
---
لا تكفي إجابة مرتبة وواثقة للحكم على جودة ناتج GenAI. لكي نعرف هل التوجيه جيد، نحتاج **مقاييس (metrics)** واضحة تقيس **الجودة والملاءمة والفعالية**، ومرجعًا موثوقًا نقارن به. يقول المنهج إن هذه المقاييس، **عامة كانت أو خاصة بالمهمة**، هي ما يساعد على تحسين التوجيه. ولهذا يأتي هذا القسم قبل 2.3.2: لا يمكنك أن تحسّن ما لا تقيسه.

### جدول المنهج — The Syllabus Table

| Metric | Description | Example |
|---|---|---|
| Accuracy | Overall correctness of the output against expert-written test cases, requirements or other standards | Degree to which generated test cases cover all specified requirements |
| Precision | Correctness of the output with respect to a specific objective | Degree to which generated test cases correctly identify anomalies |
| Recall | Ability of the model to identify all relevant instances within a dataset | Degree to which generated test cases cover valid and invalid equivalence partitions of a data class |
| Relevance and Contextual Fit | Whether the output is applicable and appropriate for a given context | Degree to which test cases are consistent with the test basis and integrate domain-specific requirements |
| Diversity | A wide range of inputs and scenarios is covered, avoiding repetition | Degree to which test cases cover various user behaviours and explore edge cases |
| Execution Success Rate | Proportion of generated test artefacts that execute successfully as is in the test environment | How many generated scripts run without syntax errors or output format issues |
| Time Efficiency | Time saved compared to manual test efforts | AI time to generate test cases vs human time to create equivalent tests |

سنشرح كل مقياس بمثال محسوب من ميزة الكوبونات في تطبيق التوصيل. المنهج يعرّف المقاييس بالكلمات؛ أما الصيغ والأرقام أدناه فطريقة عملية للحساب، وأرقامها تعليمية.

### الدقة الكلية — Accuracy

**ماذا يقيس؟** الصحة الكلية مقارنة بمرجع: حالات كتبها خبير، أو المتطلبات، أو معيار آخر. **مثال محسوب:** في ميزة الكوبونات 12 متطلبًا محددًا، وغطّت الحالات المولّدة 9 منها بشكل صحيح. الدقة = 9 ÷ 12 = **75%**. **لماذا يهم؟** لأنه يجيب عن السؤال الأول لأي مختبِر: هل الناتج صحيح في مجمله؟ لكن قيمته تعتمد على جودة المرجع؛ مرجع ناقص يعطي دقة عالية مضللة.

### الضبط — Precision

**ماذا يقيس؟** صحة ما أنتجه النموذج **بالنسبة إلى هدف محدد**. مثال المنهج: هل حددت الحالات المولّدة الحالات الشاذة (anomalies) بشكل صحيح؟ **مثال محسوب:** طلبنا من النموذج تحديد السلوكيات الشاذة في سجلات تشغيل الانحدار، فأشار إلى 10، منها 7 شاذة فعلًا. الضبط = 7 ÷ 10 = **70%**.

### الاستدعاء — Recall

**ماذا يقيس؟** قدرة النموذج على إيجاد **كل** العناصر ذات الصلة. مثال المنهج: تغطية فئات التكافؤ الصحيحة وغير الصحيحة لفئة بيانات. **مثال محسوب:** لعدد الوجبات (1–20) ثلاث فئات: أقل من 1، ومن 1 إلى 20، وأكثر من 20. ولقيمة الطلب ثلاث: أقل من 5.00، ومن 5.00 إلى أقل من 20.00 (رسوم 1.50)، و20.00 فأكثر (توصيل مجاني). المجموع 6 فئات، وغطّت الحالات 5 منها وفاتتها فئة «أكثر من 20 وجبة». الاستدعاء = 5 ÷ 6 = **83.3%**.

### الفرق بين Precision و Recall — Precision vs Recall

هذان المقياسان يختلط فهمهما كثيرًا. **Precision** يسأل: من بين ما قال النموذج إنه صحيح، كم كان صحيحًا فعلًا؟ و**Recall** يسأل: من بين كل ما كان يجب أن يجده، كم وجد فعلًا؟

مثال: نموذج يراجع 100 متطلب ليكشف الغامض منها، وفيها فعلًا 20 متطلبًا غامضًا. إذا أشار إلى 10 متطلبات، كلها غامضة فعلًا، فالـ Precision عالٍ (100%) لكن الـ Recall منخفض (50%)، لأنه فوّت نصف المتطلبات الغامضة. وإذا أشار إلى 60 متطلبًا، منها العشرون كلها، فالـ Recall كامل لكن الـ Precision منخفض (20 ÷ 60 ≈ 33%)، لأن ثلثي ما أشار إليه ليس غامضًا. أيهما أهم؟ يعتمد على المهمة: في كشف الـ defects الحرجة، تفويت defect أخطر من إنذار زائد.

### الملاءمة والتوافق مع السياق — Relevance and Contextual Fit

**ماذا يقيس؟** هل الناتج **مناسب للسياق**: متسق مع أساس الاختبار، ويدمج متطلبات المجال؟ **مثال محسوب:** من 25 حالة مولّدة، افترضت حالتان الدفع عبر PayPal، والتطبيق لا يدعم إلا النقد والبطاقة والمحفظة الرقمية. الحالات الملائمة = 23 ÷ 25 = **92%**. **لماذا يهم؟** لأن الحالة غير الملائمة لا تكتفي بإضاعة وقت التنفيذ، بل قد توحي بمتطلب غير موجود، فتضلل الفريق.

### التنوّع — Diversity

**ماذا يقيس؟** هل غطّى الناتج **مدى واسعًا** من المدخلات والسيناريوهات وسلوكيات المستخدم والحالات الحدّية، **دون تكرار**؟ **مثال محسوب:** من 30 حالة، كانت 12 حالة نسخًا متقاربة لسيناريو «طلب ناجح بالبطاقة». بعد دمج المتشابه بقيت 19 حالة مختلفة فعلًا: 19 ÷ 30 ≈ **63%** فقط من الحالات تضيف سيناريو جديدًا. **لماذا يهم؟** لأن عددًا كبيرًا من الحالات المتشابهة يعطي إحساسًا زائفًا بالتغطية، بينما تبقى الحالات الحدّية وسلوكيات المستخدم المختلفة دون اختبار.

### نسبة نجاح التشغيل — Execution Success Rate

**ماذا يقيس؟** نسبة الـ test artefacts المولّدة التي **تعمل كما هي** في بيئة الاختبار، بلا أخطاء تركيب أو مشكلات في صيغة الناتج. **مثال محسوب:** من 40 script مولّدًا، عمل 34 دون تعديل. النسبة = 34 ÷ 40 = **85%**. انتبه: «يعمل» لا يعني «ينجح»؛ الـ script قد يعمل ويكشف defect حقيقيًا.

### كفاءة الوقت — Time Efficiency

**ماذا يقيس؟** الوقت الموفّر مقارنة بالعمل اليدوي. **مثال محسوب:** كتابة الحالات يدويًا تستغرق 120 دقيقة. مع GenAI: 5 دقائق توليد، و40 مراجعة، و15 تصحيح، أي 60 دقيقة. الوفر = 120 − 60 = 60 دقيقة، أي **50%**. لو حسبنا زمن التوليد وحده (5 دقائق) لبدا الوفر 96%، وهذا مضلل.

### مقاييس خاصة بالمهمة، وطريقة القياس — Task-specific Metrics and Measurement

يضيف المنهج أنه يمكن، إلى جانب المقاييس العامة، **تصميم مقاييس خاصة بالمهمة** تقيس مدى دعم GenAI لنشاط اختبار معيّن. ومن الأمثلة العملية: نسبة الالتزام بقالب Gherkin الخاص بالفريق، أو نسبة الكلمات المفتاحية الموثّقة في scripts الانحدار المولّدة. عمليًا، لا تحتاج كل المقاييس في كل مهمة: اختر ما يعبّر عن الخطر الحقيقي فيها، ثم عرّف معيار النجاح قبل التشغيل، مثل «استدعاء 100% لفئات التكافؤ».

ولتقييم المقاييس، قد يجري المختبرون **مراجعات يدوية**، أو **يؤتمتونها**، مثلًا بمقارنة ناتج النموذج **بمرجع محدد مسبقًا**. ولأن GenAI **غير حتمي**، يشترط المنهج أن تُبنى المقاييس على **بيانات ذات دلالة إحصائية**. مثال: شغّلنا التوجيه نفسه خمس مرات، فعمل 34 ثم 30 ثم 36 ثم 32 ثم 38 script من 40. المتوسط 170 ÷ 5 = 34، أي 85%، والمدى من 75% إلى 95%. لو حكمنا على التشغيل الأخير وحده لقلنا 95%.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">GenAI output is non-deterministic, so base metrics on statistically adequate data: repeated, varied runs rather than one successful attempt. Define the success criterion and method, and never use one metric name for differently calculated numbers.</p><p class="gx-ar" lang="ar" dir="rtl">ناتج GenAI غير حتمي، لذلك ابنِ المقاييس على بيانات كافية إحصائيًا: تشغيلات متكررة ومتنوعة بدل محاولة واحدة ناجحة. عرّف معيار النجاح وطريقته، ولا تستخدم اسم مقياس واحد لأرقام محسوبة بطرق مختلفة.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app testers keep a small reference set: the coupon requirements, the expert-written test cases and the 6 equivalence partitions. Every new prompt version is run five times against this set, and accuracy, recall and execution success rate are recorded as averages with their range.</p><p class="gx-ar" lang="ar" dir="rtl">يحتفظ مختبرو تطبيق التوصيل بمجموعة مرجعية صغيرة: متطلبات الكوبونات، والحالات التي كتبها الخبير، وفئات التكافؤ الست. وكل نسخة جديدة من التوجيه تُشغَّل خمس مرات على هذه المجموعة، وتُسجَّل الدقة الكلية والاستدعاء ونسبة نجاح التشغيل كمتوسطات مع مداها.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Expect a scenario where you choose the right metric. Overall correctness against a reference → accuracy. Correctness of what was flagged → precision. Finding all relevant items → recall. Fit to the test basis and domain → relevance. Variety and less duplication → diversity. Scripts that run → execution success rate. Time saved → time efficiency.</p><p class="gx-ar" lang="ar" dir="rtl">توقّع سيناريو تختار فيه المقياس المناسب. الصحة الكلية مقابل مرجع ← الدقة الكلية. صحة ما أُشير إليه ← الضبط. إيجاد كل العناصر ذات الصلة ← الاستدعاء. الملاءمة لأساس الاختبار والمجال ← الملاءمة. التنوّع وتقليل التكرار ← التنوّع. scripts تعمل ← نسبة نجاح التشغيل. الوقت الموفّر ← كفاءة الوقت.</p></aside>

<section class="gx-lab" data-lab="HO-2.3.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Demo · Metrics on a Real Task</span><span class="gx-ar" lang="ar" dir="rtl">عرض توضيحي · مقاييس على مهمة فعلية</span></span><span class="gx-lab-meta">HO-2.3.1 · H0</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Given:</strong> a defect-classification task on 20 items. The expert reference has 10 defective items and 10 clean ones. The model flagged 10 items: 8 correct (TP) and 2 false alarms (FP). It missed 2 defects (FN) and left 8 clean items unflagged (TN).</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المعطيات:</strong> مهمة تصنيف defects على 20 عنصرًا. المرجع الخبير فيه 10 عناصر فيها defects و10 سليمة. أشار النموذج إلى 10 عناصر: 8 صحيحة (TP) و2 إنذار خاطئ (FP). وفاته اثنان من الـ defects (FN)، وترك 8 عناصر سليمة دون إشارة (TN).</span></p><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Metric</span><span class="gx-ar" lang="ar" dir="rtl">المقياس</span></th><th><span class="gx-en" lang="en" dir="ltr">Formula</span><span class="gx-ar" lang="ar" dir="rtl">الصيغة</span></th><th><span class="gx-en" lang="en" dir="ltr">Value</span><span class="gx-ar" lang="ar" dir="rtl">القيمة</span></th></tr></thead><tbody><tr><td><span class="gx-en" lang="en" dir="ltr">Precision</span><span class="gx-ar" lang="ar" dir="rtl">الضبط · Precision</span></td><td>TP ÷ (TP + FP) = 8 ÷ 10</td><td>80%</td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Recall</span><span class="gx-ar" lang="ar" dir="rtl">الاستدعاء · Recall</span></td><td>TP ÷ (TP + FN) = 8 ÷ 10</td><td>80%</td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Accuracy</span><span class="gx-ar" lang="ar" dir="rtl">الدقة الكلية · Accuracy</span></td><td>(TP + TN) ÷ 20 = 16 ÷ 20</td><td>80%</td></tr></tbody></table><p><span class="gx-en" lang="en" dir="ltr">The equal values are a coincidence of these numbers; the metrics do not mean the same thing. If missing critical defects is the main concern, watch recall and the impact of what was missed, without hiding a high false-alarm rate.</span><span class="gx-ar" lang="ar" dir="rtl">تساوي القيم هنا مصادفة في هذه الأرقام؛ المقاييس لا تعني الشيء نفسه. إذا كان تفويت الـ defects الحرجة هو الهمّ الأساسي، راقب الاستدعاء وأثر ما فات، دون إخفاء ارتفاع الإنذارات الخاطئة.</span></p><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Two more readings</span><span class="gx-ar" lang="ar" dir="rtl">قراءتان إضافيتان</span></p><p><span class="gx-en" lang="en" dir="ltr">18 of 20 scripts running gives a 90% execution success rate. It does not mean the product passed 90% of its tests; a script can run and correctly reveal a defect.</span><span class="gx-ar" lang="ar" dir="rtl">تشغيل 18 من 20 script يعطي نسبة نجاح تشغيل 90%. هذا لا يعني أن المنتج اجتاز 90% من اختباراته؛ فقد يعمل الـ script ويكشف defect بشكل صحيح.</span></p><p><span class="gx-en" lang="en" dir="ltr">If manual work takes 90 minutes, and AI generation takes 10 plus 35 for review and 15 for fixes, the net saving is 30 minutes, not 80. These numbers are for teaching, not a measurement of any tool.</span><span class="gx-ar" lang="ar" dir="rtl">إذا احتاج العمل اليدوي 90 دقيقة، والتوليد بـ AI عشر دقائق مع 35 للمراجعة و15 للتصحيح، فالوفر الصافي 30 دقيقة، لا 80. الأرقام تعليمية وليست قياسًا لأي أداة.</span></p></div></section>

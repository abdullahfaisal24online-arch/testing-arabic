---
order: 9
slug: "2-3-1"
chapter: 2
group: "2.3"
section: "2.3.1"
title: "Metrics for Evaluating the Results of Generative AI on Test Tasks"
titleAr: "مقاييس تقييم نتائج الذكاء التوليدي في مهام الاختبار"
objectives: "GenAI-2.3.1 · K2 / HO-2.3.1 · H0"
minutes: 11
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
takeawaysAr:
  - "سبعة مقاييس شائعة: الدقة الكلية، والضبط، والاستدعاء، والملاءمة، والتنوّع، ونسبة نجاح التشغيل، وكفاءة الوقت."
  - "أضف مقاييس خاصة بالمهمة، وعرّف معيار النجاح وطريقة القياس لكل منها."
  - "لأن الناتج غير حتمي، احكم على عدد كافٍ من التشغيلات المتنوعة، لا على محاولة واحدة جيدة."
  - "السكربت الذي يعمل ليس اختبارًا ناجحًا، والوقت الموفّر يجب أن يشمل المراجعة والتصحيح."
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
    defAr: "نسبة حالات الاختبار أو السكربتات المولّدة التي تعمل بنجاح في بيئة اختبار عاملة."
---
لا تكفي إجابة مرتبة للحكم على جودة التوجيه. نحدد مرجعًا موثوقًا ومهمة محددة ومقاييس، ثم نقارن النتائج. هذه المقاييس، عامة كانت أو خاصة بالمهمة، هي ما يوجّه تحسين التوجيه لاحقًا.

| Metric | ما يقيسه؟ | مثال اختبار |
|---|---|---|
| Accuracy | الصحة الكلية مقارنة بمرجع خبير أو متطلبات أو معيار | نسبة الحالات المولّدة التي تغطي المتطلبات المحددة بشكل صحيح |
| Precision | صحة المخرجات المرتبطة بهدف محدد | نسبة الحالات التي حددت الشذوذ بشكل صحيح |
| Recall | قدرة النموذج على إيجاد كل العناصر ذات الصلة | نسبة فئات التكافؤ الصحيحة وغير الصحيحة التي غطتها الحالات |
| Relevance / Contextual Fit | ملاءمة الناتج للسياق والمجال وأساس الاختبار | عدم إضافة دفع إلكتروني لمنصة لا تدعمه |
| Diversity | تنوّع المدخلات والسيناريوهات وتقليل التكرار | حالات إيجابية وسلبية وحدّية وسلوكيات مستخدم متعددة |
| Execution Success Rate | نسبة الحالات أو السكربتات المولّدة التي تعمل بنجاح في بيئة الاختبار | سكربتات بلا أخطاء تركيب أو تنسيق تمنع التشغيل |
| Time Efficiency | الوقت الموفّر مقارنة بالعمل اليدوي | زمن الإنشاء والمراجعة والتصحيح معًا مقابل الإعداد اليدوي |

### الفرق بين Precision و Recall — Precision vs Recall

هذان المقياسان يختلط فهمهما كثيرًا. **Precision** يسأل: من بين ما قال النموذج إنه صحيح، كم كان صحيحًا فعلًا؟ و**Recall** يسأل: من بين كل ما كان يجب أن يجده، كم وجد فعلًا؟

مثال: نموذج يراجع 100 متطلب ليكشف الغامض منها، وفيها فعلًا 20 متطلبًا غامضًا. إذا أشار إلى 10 متطلبات، كلها غامضة فعلًا، فالـ Precision عالٍ (100%) لكن الـ Recall منخفض (50%)، لأنه فوّت نصف المتطلبات الغامضة. وإذا أشار إلى 60 متطلبًا، منها العشرون كلها، فالـ Recall كامل لكن الـ Precision منخفض، لأن ثلثي ما أشار إليه ليس غامضًا. أيهما أهم؟ يعتمد على المهمة: في كشف العيوب الحرجة، تفويت عيب أخطر من إنذار زائد.

يمكن إضافة مقاييس خاصة بالمهمة، مثل نسبة المتطلبات المغطاة أو الالتزام بقالب المؤسسة. والتقييم قد يكون مراجعة بشرية أو مقارنة آلية مع مرجع محدد مسبقًا.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-ar">فكرة أساسية</span><span class="gx-en" lang="en" dir="ltr">Key idea</span></p><p class="gx-ar">ناتج GenAI غير حتمي، لذلك ابنِ المقاييس على بيانات كافية إحصائيًا: تشغيلات متكررة ومتنوعة بدل محاولة واحدة ناجحة. عرّف معيار النجاح وطريقته، ولا تستخدم اسم مقياس واحد لأرقام محسوبة بطرق مختلفة.</p><p class="gx-en" lang="en" dir="ltr">GenAI output is non-deterministic, so base metrics on statistically adequate data: repeated, varied runs rather than one successful attempt. Define the success criterion and method, and never use one metric name for differently calculated numbers.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">توقّع سيناريو تختار فيه المقياس المناسب. الصحة الكلية مقابل مرجع ← الدقة الكلية. صحة ما أُشير إليه ← الضبط. إيجاد كل العناصر ذات الصلة ← الاستدعاء. الملاءمة لأساس الاختبار والمجال ← الملاءمة. التنوّع وتقليل التكرار ← التنوّع. سكربتات تعمل ← نسبة نجاح التشغيل. الوقت الموفّر ← كفاءة الوقت.</p><p class="gx-en" lang="en" dir="ltr">Expect a scenario where you choose the right metric. Overall correctness against a reference → accuracy. Correctness of what was flagged → precision. Finding all relevant items → recall. Fit to the test basis and domain → relevance. Variety and less duplication → diversity. Scripts that run → execution success rate. Time saved → time efficiency.</p></aside>

<section class="gx-lab" data-lab="HO-2.3.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-ar">عرض توضيحي · مقاييس على مهمة فعلية</span><span class="gx-en" lang="en" dir="ltr">Demo · Metrics on a Real Task</span></span><span class="gx-lab-meta">HO-2.3.1 · H0</span></header><div class="gx-lab-body"><p><span class="gx-ar"><strong>المعطيات:</strong> مهمة تصنيف عيوب على 20 عنصرًا. المرجع الخبير فيه 10 عناصر معيبة و10 سليمة. أشار النموذج إلى 10 عناصر: 8 صحيحة (TP) و2 إنذار خاطئ (FP). وفاته عيبان (FN)، وترك 8 عناصر سليمة دون إشارة (TN).</span><span class="gx-en" lang="en" dir="ltr"><strong>Given:</strong> a defect-classification task on 20 items. The expert reference has 10 defective items and 10 clean ones. The model flagged 10 items: 8 correct (TP) and 2 false alarms (FP). It missed 2 defects (FN) and left 8 clean items unflagged (TN).</span></p><table><thead><tr><th><span class="gx-ar">المقياس</span><span class="gx-en" lang="en" dir="ltr">Metric</span></th><th><span class="gx-ar">الصيغة</span><span class="gx-en" lang="en" dir="ltr">Formula</span></th><th><span class="gx-ar">القيمة</span><span class="gx-en" lang="en" dir="ltr">Value</span></th></tr></thead><tbody><tr><td><span class="gx-ar">الضبط · Precision</span><span class="gx-en" lang="en" dir="ltr">Precision</span></td><td>TP ÷ (TP + FP) = 8 ÷ 10</td><td>80%</td></tr><tr><td><span class="gx-ar">الاستدعاء · Recall</span><span class="gx-en" lang="en" dir="ltr">Recall</span></td><td>TP ÷ (TP + FN) = 8 ÷ 10</td><td>80%</td></tr><tr><td><span class="gx-ar">الدقة الكلية · Accuracy</span><span class="gx-en" lang="en" dir="ltr">Accuracy</span></td><td>(TP + TN) ÷ 20 = 16 ÷ 20</td><td>80%</td></tr></tbody></table><p><span class="gx-ar">تساوي القيم هنا مصادفة في هذه الأرقام؛ المقاييس لا تعني الشيء نفسه. إذا كان تفويت العيوب الحرجة هو الهمّ الأساسي، راقب الاستدعاء وأثر ما فات، دون إخفاء ارتفاع الإنذارات الخاطئة.</span><span class="gx-en" lang="en" dir="ltr">The equal values are a coincidence of these numbers; the metrics do not mean the same thing. If missing critical defects is the main concern, watch recall and the impact of what was missed, without hiding a high false-alarm rate.</span></p><p class="gx-lab-subhead"><span class="gx-ar">قراءتان إضافيتان</span><span class="gx-en" lang="en" dir="ltr">Two more readings</span></p><p><span class="gx-ar">تشغيل 18 من 20 سكربتًا يعطي نسبة نجاح تشغيل 90%. هذا لا يعني أن المنتج اجتاز 90% من اختباراته؛ فقد يعمل السكربت ويكشف عيبًا بشكل صحيح.</span><span class="gx-en" lang="en" dir="ltr">18 of 20 scripts running gives a 90% execution success rate. It does not mean the product passed 90% of its tests; a script can run and correctly reveal a defect.</span></p><p><span class="gx-ar">إذا احتاج العمل اليدوي 90 دقيقة، والتوليد بـ AI عشر دقائق مع 35 للمراجعة و15 للتصحيح، فالوفر الصافي 30 دقيقة، لا 80. الأرقام تعليمية وليست قياسًا لأي أداة.</span><span class="gx-en" lang="en" dir="ltr">If manual work takes 90 minutes, and AI generation takes 10 plus 35 for review and 15 for fixes, the net saving is 30 minutes, not 80. These numbers are for teaching, not a measurement of any tool.</span></p></div></section>

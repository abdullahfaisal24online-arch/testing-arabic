---
order: 8
slug: "2-2-5"
chapter: 2
group: "2.2"
section: "2.2.5"
title: "Choosing Prompting Techniques for Software Testing"
titleAr: "اختيار تقنية التوجيه المناسبة للاختبار"
objectives: "GenAI-2.2.5 · K3 / HO-2.2.5 · H1"
minutes: 7
lo:
  GenAI-2.2.5: "Choose suitable prompting techniques for a given testing task."
  HO-2.2.5: "Pick and justify the prompting technique that fits each given test task."
loAr:
  GenAI-2.2.5: "تختار تقنيات التوجيه المناسبة لمهمة اختبار معطاة."
  HO-2.2.5: "تختار تقنية التوجيه المناسبة لكل مهمة اختبار معطاة وتبرر اختيارك."
takeaways:
  - "Chaining for complex work that needs a check at each stage."
  - "Few-shot for repetitive output with a fixed format, such as Gherkin, keywords or report templates."
  - "Meta prompting for new or changing tasks where you do not yet have a good prompt."
  - "One task can combine all three; measure the result instead of assuming more techniques is better."
takeawaysAr:
  - "تسلسل التوجيهات للعمل المعقّد الذي يحتاج فحصًا في كل مرحلة."
  - "التوجيه بالأمثلة للمخرجات المتكررة بصيغة ثابتة، مثل Gherkin أو الكلمات المفتاحية أو قوالب التقارير."
  - "التوجيه الفوقي للمهام الجديدة أو المتغيّرة التي لا تملك لها توجيهًا جيدًا بعد."
  - "يمكن لمهمة واحدة أن تجمع الثلاث؛ قِس النتيجة بدل افتراض أن المزيد من التقنيات أفضل."
---
اختيار التقنية يعتمد على طبيعة المهمة، لا على اسم النشاط وحده.

| Technique | متى نستخدمها؟ | أمثلة |
|---|---|---|
| Prompt chaining | مهام معقّدة تحتاج دقة وتحققًا في كل مرحلة | التحليل والتصميم والأتمتة مع مراجعة كل خطوة |
| Few-shot prompting | مخرجات متكررة أو ذات تنسيق محدد | Gherkin، سكربتات الكلمات المفتاحية، تقارير بقالب |
| Meta prompting | مهام مرنة أو جديدة لا نملك لها توجيهًا جيدًا | تحليل التقارير واكتشاف الشذوذ في سياق جديد |

### كيف تقرر؟ — How to Decide

اسأل نفسك سؤالين عن المهمة:

1. **هل تحتاج دقة عالية وتحققًا بين المراحل؟** إذا كان الخطأ في خطوة مبكرة سيفسد كل ما بعدها، فقسّمها بـ Prompt chaining.
2. **هل الناتج متكرر بشكل محدد؟** إذا كنت تريد نفس البنية مرات كثيرة، فأعطِ أمثلة بـ Few-shot.

وإذا كانت المهمة جديدة ولا تعرف كيف تصيغ الطلب أصلًا، ابدأ بـ Meta prompting ليقترح النموذج توجيهًا تراجعه.

### الدمج — Combining Techniques

يمكن لحالة واحدة أن تستخدم أكثر من تقنية: نبني التوجيه الأول عبر Meta prompting، ونضيف إليه أمثلة تحتاج تكييفًا عبر Few-shot، ثم نقسّم العمل إلى مراحل للتحقق الوسيط عبر Prompt chaining.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming that combining more techniques automatically improves the result. Measure quality after combining them.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن الجمع بين تقنيات أكثر يحسّن النتيجة تلقائيًا. قِس الجودة بعد الجمع.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">GenAI-2.2.5 is K3: you will get a task and must pick the technique. Chaining = complex, needs precision and verification per stage. Few-shot = repetitive, format-specific output (Gherkin, keywords, formatted reports). Meta = adaptive or new tasks where you need help creating the prompt.</p><p class="gx-ar" lang="ar" dir="rtl">الهدف GenAI-2.2.5 من مستوى K3: ستُعطى مهمة وعليك اختيار التقنية. التسلسل = مهمة معقّدة تحتاج دقة وتحققًا في كل مرحلة. الأمثلة = ناتج متكرر بصيغة محددة (Gherkin، كلمات مفتاحية، تقارير بقالب). الفوقي = مهام مرنة أو جديدة تحتاج فيها مساعدة لإنشاء التوجيه.</p></aside>

<section class="gx-lab" data-lab="HO-2.2.5"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Exercise · Pick the Technique</span><span class="gx-ar" lang="ar" dir="rtl">تمرين · اختر التقنية</span></span><span class="gx-lab-meta">HO-2.2.5 · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> for each task, choose the technique (or mix), write a prompt, and note why you chose it and how you will judge the output.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> لكل مهمة، اختر التقنية (أو مزيجًا منها)، واكتب توجيهًا، ودوّن سبب اختيارك وكيف ستحكم على الناتج.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Review an ambiguous user story, then derive test cases from it.</span><span class="gx-ar" lang="ar" dir="rtl">مراجعة قصة مستخدم غامضة، ثم اشتقاق حالات اختبار منها.</span></li><li><span class="gx-en" lang="en" dir="ltr">Convert ten user stories into consistent Gherkin.</span><span class="gx-ar" lang="ar" dir="rtl">تحويل عشر قصص مستخدم إلى Gherkin بشكل موحّد.</span></li><li><span class="gx-en" lang="en" dir="ltr">Design a prompt that detects anomalies in a new team's test reports.</span><span class="gx-ar" lang="ar" dir="rtl">تصميم توجيه يكتشف الحالات الشاذة في تقارير اختبار فريق جديد.</span></li></ol><details class="gx-lab-answer"><summary>Suggested answer · <span class="gx-ar-inline" lang="ar" dir="rtl">الإجابة المقترحة</span></summary><p><span class="gx-en" lang="en" dir="ltr">1: chaining, with an ambiguity review before generation. 2: few-shot, with varied correct examples. 3: meta prompting to draft a suitable prompt; the analysis can then be split into steps and given examples.</span><span class="gx-ar" lang="ar" dir="rtl">الأولى: تسلسل توجيهات مع مراجعة الغموض قبل التوليد. الثانية: أمثلة صحيحة ومتنوعة. الثالثة: توجيه فوقي لصياغة توجيه مناسب؛ ثم يمكن تقسيم التحليل إلى خطوات وإعطاؤه أمثلة.</span></p></details></div></section>

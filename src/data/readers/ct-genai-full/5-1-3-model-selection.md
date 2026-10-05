---
order: 3
slug: "5-1-3"
chapter: 5
group: "5.1"
section: "5.1.3"
title: "Selecting LLMs/SLMs for Software Test Tasks"
titleAr: "اختيار النماذج الكبيرة أو الصغيرة لمهام الاختبار"
objectives: "GenAI-5.1.3 · K2 / HO-5.1.3 · H1"
minutes: 9
lo:
  GenAI-5.1.3: "Explain what to consider when selecting LLMs or SLMs for test tasks."
  HO-5.1.3: "Estimate the recurring cost of using an LLM for a test task."
loAr:
  GenAI-5.1.3: "شرح ما يجب مراعاته عند اختيار النماذج اللغوية الكبيرة أو الصغيرة لمهام الاختبار."
  HO-5.1.3: "تقدير الكلفة المتكررة لاستخدام نموذج لغوي في مهمة اختبار."
takeaways:
  - "First check the capabilities the task needs: image input, reasoning, context window, licence type."
  - "Criteria: performance on your own tasks and metrics, fine-tuning options and benefit, recurring cost, and community, support and documentation."
  - "Public benchmarks are a hint, not a decision."
  - "You may end up with more than one model for different tasks."
takeawaysAr:
  - "تحقق أولًا من القدرات التي تحتاجها المهمة: إدخال الصور، والاستدلال، ونافذة السياق، ونوع الترخيص."
  - "المعايير: الأداء على مهامك ومقاييسك أنت، وإمكانات الضبط الدقيق وفائدته، والكلفة المتكررة، والمجتمع والدعم والتوثيق."
  - "المقاييس المعيارية العامة مؤشّر، لا قرار."
  - "قد ينتهي بك الأمر بأكثر من نموذج لمهام مختلفة."
terms:
  - en: "Benchmark"
    ar: "معيار المقارنة"
    def: "A standard test set used to compare models. A public benchmark may not represent your team's tasks."
    defAr: "مجموعة اختبار معيارية تُستخدم لمقارنة النماذج. وقد لا يمثّل المقياس المعياري العام مهام فريقك."
---
تحقق أولًا من القدرات التي تحتاجها المهمة: هل المدخل صور؟ هل تتطلب استدلالًا؟ ما نافذة السياق المطلوبة؟ ما نوع الترخيص؟ النماذج تختلف في القدرات الوظيفية (مثل الإدخال متعدد الوسائط والاستدلال)، والخصائص التقنية (مثل حجم نافذة السياق)، ونوع الترخيص (تجاري أو مفتوح المصدر). وتوجد معايير مقارنة (Benchmarks) كثيرة لمعالجة اللغة وتوليد الشيفرة وتحليل الصور، لكن القليل منها مخصص لمهام الاختبار تحديدًا. لذلك لا تكفي النتائج العامة؛ قد يكون النموذج قويًا في اللغة أو الشيفرة ولا يمثّل مهمة فريقك.

### معايير الاختيار — Selection Criteria

- **الأداء على مهام مستهدفة** بقياسات المؤسسة نفسها.
- **إمكانية الضبط الدقيق وفائدته** للمهمة.
- **الكلفة المتكررة**، بما فيها الترخيص والتشغيل.
- **المجتمع والدعم والتوثيق.**

### LLM أم SLM؟ — LLM or SLM?

**النموذج الكبير** مناسب للمهام المتنوعة والمعقّدة التي تحتاج فهمًا واسعًا أو استدلالًا متعدد الخطوات، مثل تحليل متطلبات غامضة في مجال جديد. كلفته وزمن استجابته أعلى غالبًا.

**النموذج الصغير** مناسب لمهمة ضيقة ومتكررة ومحددة جيدًا، مثل تصنيف تقارير العيوب حسب المكوّن، خصوصًا بعد ضبطه على بيانات المؤسسة. أخف في التشغيل، ويمكن تشغيله داخليًا بسهولة أكبر، وهذا مفيد للخصوصية.

القرار يُبنى على القياس: جرّب الاثنين على عينة ممثلة من مهمتك، وقارن الجودة والكلفة والزمن.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Picking the model with the top public benchmark score. Measure it on data and tasks that represent your team, and review integration, privacy, licensing, cost and support.</p><p class="gx-ar" lang="ar" dir="rtl">اختيار النموذج صاحب أعلى نتيجة في المقاييس المعيارية العامة. قِسه على بيانات ومهام تمثّل فريقك، وراجع التكامل والخصوصية والترخيص والكلفة والدعم.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the selection criteria: performance on targeted tasks measured with your own metrics, fine-tuning possibilities, recurring costs (licensing and operation), and community, support and documentation. Check required capabilities first: modality, reasoning, context window, licence.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف معايير الاختيار: الأداء على المهام المستهدفة مقاسًا بمقاييسك، وإمكانات الضبط الدقيق، والتكاليف المتكررة (الترخيص والتشغيل)، والمجتمع والدعم والتوثيق. وتحقق أولًا من القدرات المطلوبة: نوع المدخلات، والاستدلال، ونافذة السياق، والترخيص.</p></aside>

<section class="gx-lab" data-lab="HO-5.1.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Exercise · Recurring Cost Estimate</span><span class="gx-ar" lang="ar" dir="rtl">تمرين · تقدير الكلفة المتكررة</span></span><span class="gx-lab-meta">HO-5.1.3 · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr">All numbers are hypothetical training values, not provider prices.</span><span class="gx-ar" lang="ar" dir="rtl">كل الأرقام افتراضية لأغراض التدريب، وليست أسعار مزوّدين.</span></p><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Commercial service</span><span class="gx-ar" lang="ar" dir="rtl">خدمة تجارية</span></p><p><span class="gx-en" lang="en" dir="ltr">1,000 tasks per month, each with 2,000 input tokens and 500 output tokens. Assumed price: $2 per million input tokens and $8 per million output tokens.</span><span class="gx-ar" lang="ar" dir="rtl">1,000 مهمة شهريًا، كلٌّ منها بـ 2,000 رمز إدخال و500 رمز إخراج. السعر المفترض: 2$ لكل مليون رمز إدخال و8$ لكل مليون رمز إخراج.</span></p><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Item</span><span class="gx-ar" lang="ar" dir="rtl">البند</span></th><th><span class="gx-en" lang="en" dir="ltr">Calculation</span><span class="gx-ar" lang="ar" dir="rtl">الحساب</span></th><th><span class="gx-en" lang="en" dir="ltr">Cost</span><span class="gx-ar" lang="ar" dir="rtl">الكلفة</span></th></tr></thead><tbody><tr><td><span class="gx-en" lang="en" dir="ltr">Input</span><span class="gx-ar" lang="ar" dir="rtl">الإدخال</span></td><td>2M × $2</td><td>$4</td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Output</span><span class="gx-ar" lang="ar" dir="rtl">الإخراج</span></td><td>0.5M × $8</td><td>$4</td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Generation total</span><span class="gx-ar" lang="ar" dir="rtl">إجمالي التوليد</span></td><td><span class="gx-en" lang="en" dir="ltr">one pass per task</span><span class="gx-ar" lang="ar" dir="rtl">تمريرة واحدة لكل مهمة</span></td><td>$8</td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Two passes per task</span><span class="gx-ar" lang="ar" dir="rtl">تمريرتان لكل مهمة</span></td><td><span class="gx-en" lang="en" dir="ltr">same size each</span><span class="gx-ar" lang="ar" dir="rtl">بالحجم نفسه لكلٍّ منهما</span></td><td>$16</td></tr></tbody></table><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Self-hosted open-licence model</span><span class="gx-ar" lang="ar" dir="rtl">نموذج مفتوح الترخيص مستضاف ذاتيًا</span></p><p><span class="gx-en" lang="en" dir="ltr">$40 compute + $10 storage and monitoring + 2 maintenance hours at $15 = <strong>$80 per month</strong> in this scenario.</span><span class="gx-ar" lang="ar" dir="rtl">40$ حوسبة + 10$ تخزين ومراقبة + ساعتا صيانة بسعر 15$ = <strong>80$ شهريًا</strong> في هذا السيناريو.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Repeat the comparison with documented, dated prices and terms for several options, including one commercial and one open-licence model.</span><span class="gx-ar" lang="ar" dir="rtl">كرّر المقارنة بأسعار وشروط موثّقة ومؤرّخة لعدة خيارات، منها نموذج تجاري وآخر مفتوح الترخيص.</span></li><li><span class="gx-en" lang="en" dir="ltr">Change the task count, passes, and input and output length, and see where the answer flips.</span><span class="gx-ar" lang="ar" dir="rtl">غيّر عدد المهام وعدد التمريرات وطول الإدخال والإخراج، وانظر متى تنقلب النتيجة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Label one-off setup costs separately from recurring costs.</span><span class="gx-ar" lang="ar" dir="rtl">افصل تكاليف الإعداد لمرة واحدة عن التكاليف المتكررة.</span></li></ol><p><span class="gx-en" lang="en" dir="ltr">Do not conclude that commercial is always cheaper: volume, usage, infrastructure, privacy and output quality all change the decision.</span><span class="gx-ar" lang="ar" dir="rtl">لا تستنتج أن الخيار التجاري أرخص دائمًا: الحجم والاستخدام والبنية التحتية والخصوصية وجودة المخرجات كلها تغيّر القرار.</span></p></div></section>

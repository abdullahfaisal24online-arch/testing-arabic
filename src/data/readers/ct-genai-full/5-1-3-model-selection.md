---
order: 3
slug: "5-1-3"
chapter: 5
group: "5.1"
section: "5.1.3"
title: "Selecting LLMs/SLMs for Software Test Tasks"
titleAr: "اختيار النماذج الكبيرة أو الصغيرة لمهام الاختبار"
objectives: "GenAI-5.1.3 · K2 / HO-5.1.3 · H1"
minutes: 14
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
  - "Recurring cost depends on tokens per task, the prompts used, the number of passes and how often the task runs."
takeawaysAr:
  - "تحقق أولًا من القدرات التي تحتاجها المهمة: إدخال الصور، والاستدلال، ونافذة السياق، ونوع الترخيص."
  - "المعايير: الأداء على مهامك ومقاييسك أنت، وإمكانات الضبط الدقيق وفائدته، والكلفة المتكررة، والمجتمع والدعم والتوثيق."
  - "المقاييس المعيارية العامة مؤشّر، لا قرار."
  - "قد ينتهي بك الأمر بأكثر من نموذج لمهام مختلفة."
  - "الكلفة المتكررة تعتمد على عدد الرموز في كل مهمة، والتوجيهات المستخدمة، وعدد التمريرات، وعدد مرات تنفيذ المهمة."
terms:
  - en: "Benchmark"
    ar: "معيار المقارنة"
    def: "A standard test set used to compare models. A public benchmark may not represent your team's tasks."
    defAr: "مجموعة اختبار معيارية تُستخدم لمقارنة النماذج. وقد لا يمثّل المقياس المعياري العام مهام فريقك."
  - en: "Recurring Cost"
    ar: "الكلفة المتكررة"
    def: "The ongoing cost of using an LLM/SLM for a test task, such as licensing fees, token-based usage charges and operational expenses, as opposed to one-off setup costs."
    defAr: "الكلفة المستمرة لاستخدام نموذج لغوي في مهمة اختبار، مثل رسوم الترخيص ورسوم الاستخدام حسب الرموز ونفقات التشغيل، مقابل تكاليف الإعداد لمرة واحدة."
---
بعد أن حددت الاستراتيجية أهدافها (القسم 5.1.2)، يأتي سؤال عملي: **أي نموذج نستخدم؟** يوجد عدد كبير من **النماذج اللغوية الكبيرة والصغيرة (LLMs/SLMs)**، والاختيار الخاطئ يكلّف مالًا أو جودة أو خصوصية. يشرح هذا القسم بماذا تختلف النماذج، ولماذا لا تكفي المقارنات العامة، وما المعايير الأربعة التي يذكرها المنهج.

### بماذا تختلف النماذج؟ — How Models Differ

يذكر المنهج ثلاثة أبعاد للاختلاف، ولكل منها أثر مباشر على مهام الاختبار:

- **القدرات الوظيفية (functional capabilities):** مثل **الإدخال متعدد الوسائط (multimodal input)** و**قدرات الاستدلال (reasoning)**. مثال: مقارنة لقطات شاشة الواجهة العربية والإنجليزية في تطبيق التوصيل تحتاج نموذجًا يقبل الصور، وتحليل قواعد الكوبون والتوصيل المجاني المتداخلة يستفيد من نموذج قوي في الاستدلال.
- **الخصائص التقنية (technical features):** مثل **حجم نافذة السياق (context window)**. مثال: تحليل مواصفة الواجهات البرمجية كاملة مع سجلات طويلة يحتاج نافذة سياق كبيرة، وإلا اقتُطع جزء من المدخل.
- **نوع الترخيص (licensing types):** **تجاري أو مفتوح المصدر**. مثال: النموذج مفتوح المصدر يمكن تشغيله على خوادم الشركة، فلا تخرج بيانات العملاء منها، لكن تشغيله وصيانته على الفريق.

### لماذا لا تكفي المقارنات العامة؟ — Why Public Benchmarks Are Not Enough

توجد **معايير مقارنة (benchmarks)** كثيرة لتقييم النماذج في مهام مثل **معالجة اللغة الطبيعية** و**توليد الشيفرة** و**تحليل الصور**، لكن **القليل منها فقط مخصص لمهام الاختبار تحديدًا** (Wenhan 2024). فقد يكون النموذج الأول في توليد الشيفرة، ثم ينسى القيم الحدّية عند تصميم حالات الاختبار. **لذلك** يقول المنهج إن اختيار النماذج لمهام الاختبار يتطلب دراسة متأنية لعدة معايير أساسية.

### معايير الاختيار — Selection Criteria

| Criterion | What to evaluate | Delivery app example |
|---|---|---|
| Model performance | Performance on the targeted test tasks against the organization's benchmarks, using metrics from 2.3.1 | 30 approved stories with expert test cases as the team's own benchmark |
| Fine-tuning potential | Whether fine-tuning with domain-specific data is possible and useful | Past defect reports used to improve defect classification |
| Recurring cost | Licensing fees and operational expenses within budget | Token charges for a task that runs on every commit |
| Community and support | Active community and detailed documentation | Clear docs and forums for integration and troubleshooting |

**1. أداء النموذج (Model performance):** قيّم أداء النموذج **على مهام الاختبار المستهدفة** مقابل **معايير المقارنة الخاصة بالمؤسسة**، باستخدام مقاييس مثل تلك في القسم 2.3.1. **لماذا؟** لأن مهمتك أنت هي ما يهم. **مثال:** يجمع الفريق 30 قصة مستخدم معتمدة مع حالات اختبار كتبها خبير، ويقيس لكل نموذج مرشّح Accuracy و Recall، أي هل غطّى الحد الأدنى للطلب 5.00 وحد التوصيل المجاني 20.00 والحدّين 1 و20 لعدد الوجبات.

**2. إمكانية الضبط الدقيق (Fine-tuning potential):** قيّم هل **يمكن** و**يفيد** ضبط النموذج (كبيرًا أو صغيرًا) على **بيانات خاصة بالمجال**، لتحسين الأداء في حالة استخدام معيّنة، فتزداد **الدقة والملاءمة في السياقات المتخصصة** (انظر القسم 4.2.1). الكلمتان مهمتان: بعض النماذج لا تسمح بالضبط أصلًا، وأحيانًا يكون الضبط ممكنًا لكن فائدته لا تبرر كلفته. **مثال:** لدى الفريق آلاف تقارير الـ defects السابقة بالعربية والإنجليزية؛ ضبط نموذج صغير عليها قد يحسّن تصنيف التقارير الجديدة حسب المكوّن (تطبيق العميل، لوحة المطعم، تطبيق السائق).

**3. الكلفة المتكررة (Recurring cost):** راعِ **التكاليف المتكررة** لاستخدام النموذج، بما فيها **رسوم الترخيص** و**نفقات التشغيل**، لتتأكد أنه **يناسب ميزانية المؤسسة** للمهام المستهدفة. **مثال:** مهمة تُشغَّل عند كل commit في الـ CI pipeline تتكرر مئات المرات شهريًا، فتختلف كلفتها كثيرًا عن مهمة تُشغَّل مرة في كل sprint، حتى مع النموذج نفسه.

**4. المجتمع والدعم (Community and support):** اختر نماذج لها **مجتمع نشط** و**توثيق مفصّل**، لأنهما يساعدان في **التطبيق وحل المشكلات**. **مثال:** عندما يفشل تكامل النموذج مع أداة إدارة الاختبار، يجد الفريق الحل أسرع في توثيق واضح أو منتدى نشط.

وبتقييم هذه المعايير بعناية، تستطيع مؤسسات الاختبار اختيار **نموذج واحد أو أكثر** يلبّي احتياجاتها الخاصة وقيودها التنظيمية.

### LLM أم SLM؟ — LLM or SLM?

عمليًا، يساعد هذا التقسيم في التفكير، مع أن القرار يُبنى على القياس:

**النموذج الكبير** مناسب للمهام المتنوعة والمعقّدة التي تحتاج فهمًا واسعًا أو استدلالًا متعدد الخطوات، مثل تحليل متطلبات غامضة في مجال جديد. كلفته وزمن استجابته أعلى غالبًا.

**النموذج الصغير** مناسب لمهمة ضيقة ومتكررة ومحددة جيدًا، مثل تصنيف تقارير الـ defects حسب المكوّن، خصوصًا بعد ضبطه على بيانات المؤسسة. أخف في التشغيل، ويمكن تشغيله داخليًا بسهولة أكبر، وهذا مفيد للخصوصية.

جرّب الاثنين على عينة ممثلة من مهمتك، وقارن الجودة والكلفة والزمن.

### تقدير الكلفة المتكررة — Estimating Recurring Cost

يركّز الهدف العملي HO-5.1.3 على تقدير الكلفة المتكررة لمهمة اختبار محددة بناءً على افتراضات، منها **عدد الرموز (tokens) في المدخلات والمخرجات**، و**التوجيهات المستخدمة**، و**تكرار المهمة**. ويقارن نماذج التسعير لدى عدة مزوّدين، منها **حل تجاري واحد على الأقل** و**نموذج مفتوح الترخيص واحد على الأقل**، لفهم الأثر المالي لاختلاف الأساليب والمزوّدين. لاحظ أن تقسيم المهمة إلى عدة توجيهات متسلسلة يضاعف عدد التمريرات، وبالتالي الكلفة.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team tested three candidate models on its 30-story benchmark. The model with the best public scores missed the 20-meal upper boundary in a third of the stories. The team chose a large commercial model for test analysis and a small self-hosted model for classifying defect reports, which contain customer data.</p><p class="gx-ar" lang="ar" dir="rtl">جرّب فريق تطبيق التوصيل ثلاثة نماذج مرشّحة على معيار المقارنة الخاص به المكوّن من 30 قصة. النموذج صاحب أفضل النتائج العامة نسي الحد الأعلى البالغ 20 وجبة في ثلث القصص. فاختار الفريق نموذجًا تجاريًا كبيرًا لتحليل الاختبار، ونموذجًا صغيرًا مستضافًا ذاتيًا لتصنيف تقارير الـ defects التي تحتوي بيانات عملاء.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Picking the model with the top public benchmark score. Measure it on data and tasks that represent your team, and review integration, privacy, licensing, cost and support.</p><p class="gx-ar" lang="ar" dir="rtl">اختيار النموذج صاحب أعلى نتيجة في المقاييس المعيارية العامة. قِسه على بيانات ومهام تمثّل فريقك، وراجع التكامل والخصوصية والترخيص والكلفة والدعم.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the selection criteria: performance on targeted tasks measured with your own metrics, fine-tuning possibilities, recurring costs (licensing and operation), and community, support and documentation. Check required capabilities first: modality, reasoning, context window, licence.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف معايير الاختيار: الأداء على المهام المستهدفة مقاسًا بمقاييسك، وإمكانات الضبط الدقيق، والتكاليف المتكررة (الترخيص والتشغيل)، والمجتمع والدعم والتوثيق. وتحقق أولًا من القدرات المطلوبة: نوع المدخلات، والاستدلال، ونافذة السياق، والترخيص.</p></aside>

<section class="gx-lab" data-lab="HO-5.1.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Exercise · Recurring Cost Estimate</span><span class="gx-ar" lang="ar" dir="rtl">تمرين · تقدير الكلفة المتكررة</span></span><span class="gx-lab-meta">HO-5.1.3 · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr">All numbers are hypothetical training values, not provider prices.</span><span class="gx-ar" lang="ar" dir="rtl">كل الأرقام افتراضية لأغراض التدريب، وليست أسعار مزوّدين.</span></p><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Commercial service</span><span class="gx-ar" lang="ar" dir="rtl">خدمة تجارية</span></p><p><span class="gx-en" lang="en" dir="ltr">1,000 tasks per month, each with 2,000 input tokens and 500 output tokens. Assumed price: $2 per million input tokens and $8 per million output tokens.</span><span class="gx-ar" lang="ar" dir="rtl">1,000 مهمة شهريًا، كلٌّ منها بـ 2,000 رمز إدخال و500 رمز إخراج. السعر المفترض: 2$ لكل مليون رمز إدخال و8$ لكل مليون رمز إخراج.</span></p><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Item</span><span class="gx-ar" lang="ar" dir="rtl">البند</span></th><th><span class="gx-en" lang="en" dir="ltr">Calculation</span><span class="gx-ar" lang="ar" dir="rtl">الحساب</span></th><th><span class="gx-en" lang="en" dir="ltr">Cost</span><span class="gx-ar" lang="ar" dir="rtl">الكلفة</span></th></tr></thead><tbody><tr><td><span class="gx-en" lang="en" dir="ltr">Input</span><span class="gx-ar" lang="ar" dir="rtl">الإدخال</span></td><td>2M × $2</td><td>$4</td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Output</span><span class="gx-ar" lang="ar" dir="rtl">الإخراج</span></td><td>0.5M × $8</td><td>$4</td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Generation total</span><span class="gx-ar" lang="ar" dir="rtl">إجمالي التوليد</span></td><td><span class="gx-en" lang="en" dir="ltr">one pass per task</span><span class="gx-ar" lang="ar" dir="rtl">تمريرة واحدة لكل مهمة</span></td><td>$8</td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Two passes per task</span><span class="gx-ar" lang="ar" dir="rtl">تمريرتان لكل مهمة</span></td><td><span class="gx-en" lang="en" dir="ltr">same size each</span><span class="gx-ar" lang="ar" dir="rtl">بالحجم نفسه لكلٍّ منهما</span></td><td>$16</td></tr></tbody></table><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Self-hosted open-licence model</span><span class="gx-ar" lang="ar" dir="rtl">نموذج مفتوح الترخيص مستضاف ذاتيًا</span></p><p><span class="gx-en" lang="en" dir="ltr">$40 compute + $10 storage and monitoring + 2 maintenance hours at $15 = <strong>$80 per month</strong> in this scenario.</span><span class="gx-ar" lang="ar" dir="rtl">40$ حوسبة + 10$ تخزين ومراقبة + ساعتا صيانة بسعر 15$ = <strong>80$ شهريًا</strong> في هذا السيناريو.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Repeat the comparison with documented, dated prices and terms for several options, including one commercial and one open-licence model.</span><span class="gx-ar" lang="ar" dir="rtl">كرّر المقارنة بأسعار وشروط موثّقة ومؤرّخة لعدة خيارات، منها نموذج تجاري وآخر مفتوح الترخيص.</span></li><li><span class="gx-en" lang="en" dir="ltr">Change the task count, passes, and input and output length, and see where the answer flips.</span><span class="gx-ar" lang="ar" dir="rtl">غيّر عدد المهام وعدد التمريرات وطول الإدخال والإخراج، وانظر متى تنقلب النتيجة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Label one-off setup costs separately from recurring costs.</span><span class="gx-ar" lang="ar" dir="rtl">افصل تكاليف الإعداد لمرة واحدة عن التكاليف المتكررة.</span></li></ol><p><span class="gx-en" lang="en" dir="ltr">Do not conclude that commercial is always cheaper: volume, usage, infrastructure, privacy and output quality all change the decision.</span><span class="gx-ar" lang="ar" dir="rtl">لا تستنتج أن الخيار التجاري أرخص دائمًا: الحجم والاستخدام والبنية التحتية والخصوصية وجودة المخرجات كلها تغيّر القرار.</span></p></div></section>

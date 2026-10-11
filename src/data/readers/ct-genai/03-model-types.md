---
order: 3
slug: "1-1-3"
chapter: 1
group: "1.1"
section: "1.1.3"
title: "Foundation, Instruction-Tuned and Reasoning LLMs"
titleAr: "النماذج الأساسية والموجّهة بالتعليمات والاستدلالية"
objectives: "GenAI-1.1.3 · K2"
minutes: 15
lo:
  GenAI-1.1.3: "Tell foundation, instruction-tuned and reasoning LLMs apart."
loAr:
  GenAI-1.1.3: "تميّز بين النماذج الأساسية والموجّهة بالتعليمات والاستدلالية."
takeaways:
  - "General foundation → instruction following → specialised for complex reasoning."
  - "The category reflects how a model was prepared, not its brand name or the size of its context window."
  - "In testing, pick instruction-tuned or reasoning models by what the task needs, and review the output of both."
  - "Instruction tuning optimises task adherence, instruction following and response coherence."
takeawaysAr:
  - "أساسي عام ← يتبع التعليمات ← مخصص للاستدلال المعقّد."
  - "الفئة تعكس طريقة إعداد النموذج، لا اسمه التجاري ولا حجم نافذة السياق."
  - "في الاختبار، اختر بين النماذج الموجّهة بالتعليمات والاستدلالية حسب حاجة المهمة، وراجع ناتج الاثنين."
  - "الضبط بالتعليمات يحسّن الالتزام بالمهمة واتباع التعليمات وتماسك الاستجابة."
terms:
  - en: "Foundation LLM"
    ar: "النموذج الأساسي"
    def: "Trained on broad, diverse data to build general capabilities. May need extra adaptation for a specialised task."
    defAr: "مدرّب على بيانات واسعة ومتنوعة لبناء قدرات عامة. قد يحتاج تكييفًا إضافيًا لمهمة متخصصة."
    match: ["Foundation LLMs", "Foundation"]
  - en: "Instruction-Tuned LLM"
    ar: "النموذج الموجّه بالتعليمات"
    def: "A foundation model further tuned on prompt–response pairs to follow instructions and task formats more reliably."
    defAr: "نموذج أساسي ضُبط إضافيًا على أزواج من التوجيهات والاستجابات ليتبع التعليمات وصيغ المهام بموثوقية أعلى."
    match: ["Instruction-Tuned LLMs", "Instruction-tuned"]
  - en: "Reasoning LLM"
    ar: "النموذج الاستدلالي"
    def: "Builds on instruction-tuned models with extra training on complex tasks to strengthen logical inference, multi-step problem solving and chain-of-thought reasoning."
    defAr: "يبني على النماذج الموجّهة بالتعليمات بتدريب إضافي على مهام معقّدة، لتقوية الاستنتاج المنطقي والحل متعدد الخطوات والاستدلال المتسلسل."
    match: ["Reasoning LLMs", "Reasoning"]
---
عندما يختار فريقك أداة GenAI، ستجد في إعداداتها أحيانًا أكثر من نموذج: واحد «سريع»، وآخر «يفكّر» قبل أن يجيب. هذا القسم يشرح من أين يأتي هذا الفرق. يقول المنهج إن النماذج اللغوية الكبيرة تُطوَّر عبر **مراحل تدريب متدرّجة في التخصّص**، هدفها تحسين فعاليتها في نطاق واسع من المهام، وإن هذه المراحل تُنتج **ثلاث فئات رئيسية**: النماذج الأساسية، والموجّهة بالتعليمات، والاستدلالية.

الفرق إذن يتعلق بما أُعدّ النموذج للقيام به، وليس بالاسم التجاري أو حجم نافذة السياق. أسهل طريقة لتذكّرها أن تراها كطبقات تبني على بعضها: نموذج أساسي عام، ثم نسخة منه مضبوطة لتتبع التعليمات، ثم نسخة أكثر تخصيصًا للاستدلال المعقّد.

<figure class="gx-figure" aria-label="Three layers: foundation LLM, instruction-tuned LLM built on it, reasoning LLM built on that."><div class="gx-flow-row"><span class="gx-flow-node">Foundation<small>broad general ability</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Instruction-tuned<small>follows instructions</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Reasoning<small>multi-step logic</small></span></div><figcaption>Each layer is trained further on top of the previous one.</figcaption></figure>

### النماذج الأساسية — Foundation LLMs

هي **نماذج عامة الأغراض (general-purpose)** مدرّبة على مجموعات بيانات هائلة ومتنوعة تضم **نصوصًا وشيفرات وصورًا ووسائط أخرى**. هذا التدريب المسبق الواسع يمكّنها من دعم مهام في مجالات متعددة، يذكر المنهج منها **معالجة اللغة الطبيعية (natural language processing)** و**الرؤية الحاسوبية (computer vision)** و**التعرّف على الكلام (speech recognition)**.

يصفها المنهج بأنها **قوية ومرنة**، لكنها **تحتاج عادةً إلى تكييف إضافي** لتلبية متطلبات مهمة محددة. لماذا؟ لأن التدريب المسبق يعلّم النموذج «كيف تبدو اللغة والشيفرة» عمومًا، لا كيف ينفّذ طلبك. عمليًا، النموذج الأساسي الخام مدرَّب على إكمال النص: إذا كتبت له «اكتب حالات اختبار لصفحة الدفع في تطبيق التوصيل»، فقد يكمل الجملة بفقرة تشبه مقالًا عن الاختبار، أو بقائمة طلبات مشابهة، بدل أن يعطيك جدول حالات. لهذا نادرًا ما يستخدم المختبِر نموذجًا أساسيًا خامًا مباشرة؛ غالبًا يستخدم نسخة مكيّفة منه، وأشهر أشكال هذا التكييف الفئة التالية.

### النماذج الموجّهة بالتعليمات — Instruction-Tuned LLMs

**تُشتق من النماذج الأساسية**، ثم **تُضبط (fine-tuned)** باستخدام مجموعات بيانات **تقرن التوجيهات بالاستجابات المتوقعة**: آلاف الأمثلة من نوع «هذا طلب، وهذه هي الإجابة الجيدة عليه». هذه المرحلة تحسّن **توافق النموذج مع التعليمات البشرية**، فيصبح أسهل استخدامًا في التطبيقات الواقعية.

يحدد المنهج ثلاثة أشياء تُحسَّن في عملية الضبط، وكلها تهمك كمختبِر:

- **الالتزام بالمهمة (task adherence):** أن ينفّذ ما طُلب منه بالضبط. إذا طلبت حالات اختبار للكوبونات، فلا يكتب لك شيفرة الكوبونات.
- **اتباع التعليمات (instruction following):** أن يحترم القيود والصيغة، مثل «جدول بأعمدة: الشروط المسبقة، الخطوات، النتيجة المتوقعة»، أو «لا تتجاوز عشر حالات».
- **تماسك الاستجابة (response coherence):** أن تكون الإجابة مترابطة بلا تناقض داخلي، فلا يقول في حالة إن التوصيل مجاني للطلبات من 20.00 دينارًا فأكثر ثم يحسب رسومًا لطلب قيمته 25.00 في حالة أخرى.

والنتيجة، كما يقول المنهج، تحسين قدرة النموذج على **فهم نية المستخدم والتصرف وفقها بفعالية**. ومعظم أدوات المحادثة التي يستخدمها الفريق يوميًا مبنية على نماذج من هذا النوع. وهي مناسبة لمهام واضحة ومحددة مثل: إعادة صياغة تقرير defect بقالب الفريق، أو تلخيص نتائج تشغيل، أو توليد بيانات اختبار بصيغة معينة. لكن اتباع الصيغة لا يعني صحة المحتوى؛ الجدول المنسّق قد يحمل نتيجة متوقعة خاطئة.

وتُسمّى هذه النماذج أحيانًا **غير الاستدلالية (non-reasoning)** تمييزًا لها عن الفئة التالية.

### النماذج الاستدلالية — Reasoning LLMs

**توسّع النماذج الموجّهة بالتعليمات** بالتركيز على **قدرات معرفية منظّمة**، يذكر المنهج منها: **الاستنتاج المنطقي (logical inference)**، و**حل المشكلات متعدد الخطوات (multi-step problem-solving)**، و**الاستدلال المتسلسل (chain-of-thought reasoning)**. وتُدرَّب أو تُضبط بصورة إضافية على **مهام مختارة بعناية** تتطلب **فهمًا للسياق**، و**خطوات استدلال وسيطة**، و**تركيب معلومات معقّدة**. لذلك هي **أنسب للمهام ذات العبء المعرفي العالي (high-cognitive-load tasks)**، بما فيها مهام المجالات التقنية.

مثال من تطبيق التوصيل: «ما المبلغ الذي يدفعه العميل لطلب قيمته 18.00 دينارًا مع كوبون بمبلغ ثابت 3.00؟ وماذا لو كانت القيمة 21.00 مع الكوبون نفسه؟». الإجابة الصحيحة تتطلب خطوات وسيطة مرتبة: فحص الحد الأدنى، ثم فحص حد التوصيل المجاني **قبل** الخصم، ثم تطبيق الخصم، ثم إضافة الرسوم إن وجدت. الأول: 18.00 − 3.00 + 1.50 = 16.50. الثاني: 21.00 − 3.00 = 18.00 بتوصيل مجاني. هذا النوع من المسائل، حيث يعتمد كل استنتاج على سابقه، هو ما صُمّمت له النماذج الاستدلالية.

عمليًا، كثير من هذه النماذج يمر بخطوات وسيطة قبل الإجابة، فيستغرق وقتًا أطول ويستهلك رموزًا أكثر، وبالتالي كلفة أعلى. لذلك لا تستخدمها لكل شيء. وهي ليست معصومة من أخطاء الاستدلال: راجع الاستنتاجات باستخدام قواعد المهمة ومراجع مستقلة، ولا تعتبر تسمية «Reasoning» ضمانًا.

| Compared on | Foundation | Instruction-tuned | Reasoning |
| --- | --- | --- | --- |
| Built from | Pretraining on vast, diverse data | Foundation + prompt–response pairs | Instruction-tuned + selected complex tasks |
| Main strength | Broad, flexible general ability | Follows instructions and formats | Multi-step logic, chain-of-thought |
| Typical testing use | Rarely used raw; base for adaptation | Clear, well-defined tasks | High-cognitive-load tasks |
| Watch out for | Needs further adaptation | Neat format, wrong content | Slower, costlier, still fallible |

### المهمة تحدد الاختيار — Choosing by Task

يختم المنهج بأن تطبيقات GenAI في الاختبار تستخدم **النوعين معًا**: الموجّهة بالتعليمات والاستدلالية. و**الاختيار يعتمد على تعقيد مهمة الاختبار المحددة ومتطلباتها الاستدلالية**. لاحظ أن النموذج الأساسي الخام ليس ضمن هذا الاختيار العملي.

| Delivery app task | Reasoning demand | Likely fit |
| --- | --- | --- |
| Rewrite 10 defect reports in the team template | Low: format and wording | Instruction-tuned |
| Summarise yesterday's CI run results | Low to medium | Instruction-tuned |
| Expected totals for coupon + free-delivery combinations | High: dependent calculation steps | Reasoning |
| Order the state-transition tests by risk and dependency | High: constraints that interact | Reasoning |

**الحالة الأولى:** تحويل عشرة تقارير defects إلى قالب موحّد. هذه مهمة واضحة ومتكررة؛ يمكن تقييم نموذج Instruction-tuned عليها، ثم قياس صحة النتائج والوقت والكلفة.

**الحالة الثانية:** ترتيب ثلاثة اختبارات لحالات الطلب: A (إنشاء الطلب)، وB (قبول المطعم له)، وC (إلغاء الطلب بعد قبوله واسترداد المبلغ). الاختبار C هو الأعلى خطورة، لكنه يعتمد على نجاح B، وB يعتمد على A. هنا تحتاج إلى مراعاة الاعتماديات قبل ترتيب المخاطر. نموذج Reasoning قد يكون مرشحًا مناسبًا، لكن النتيجة يجب أن تحترم أن **A يسبق B، وB يسبق C**؛ لا يصح وضع C أولًا لمجرد ارتفاع خطورته.

<figure class="gx-figure gx-flow" aria-label="Dependency order: A, then B, then C. C has the highest risk but depends on B."><div class="gx-flow-row"><span class="gx-flow-node">A</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">B</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">C<small>highest risk</small></span></div><figcaption>Dependencies come first: C cannot run before A and B pass, however high its risk.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app testers used the fast instruction-tuned model for daily work: formatting defect reports and summarising CI runs. For expected totals of coupon and delivery-fee combinations, it sometimes applied the free-delivery check after the discount. Switching that one task to a reasoning model reduced the errors, but the testers still checked every expected total against the written rules before using it as an oracle.</p><p class="gx-ar" lang="ar" dir="rtl">استخدم مختبرو تطبيق التوصيل النموذج الموجّه بالتعليمات السريع لعملهم اليومي: تنسيق تقارير الـ defects وتلخيص نتائج الـ CI. أما في حساب المجاميع المتوقعة لتركيبات الكوبونات ورسوم التوصيل، فكان يطبّق أحيانًا فحص التوصيل المجاني بعد الخصم. نقل هذه المهمة وحدها إلى نموذج استدلالي قلّل الأخطاء، لكن المختبرين ظلوا يقارنون كل مجموع متوقع بالقواعد المكتوبة قبل اعتماده مرجعًا للحكم.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember the order and what each layer adds: foundation = broad general ability; instruction-tuned = trained on prompt–response pairs to follow instructions; reasoning = built on instruction-tuned, trained further on complex tasks for multi-step and chain-of-thought reasoning. In testing, both instruction-tuned and reasoning models are used, chosen by how much reasoning the task needs.</p><p class="gx-ar" lang="ar" dir="rtl">تذكّر الترتيب وما تضيفه كل طبقة: الأساسي = قدرة عامة واسعة؛ الموجّه بالتعليمات = مدرّب على أزواج توجيه واستجابة ليتبع التعليمات؛ الاستدلالي = مبني على الموجّه بالتعليمات ومدرّب أكثر على مهام معقّدة للاستدلال متعدد الخطوات والمتسلسل. في الاختبار يُستخدم النوعان الأخيران، ويُختار بينهما حسب حاجة المهمة للاستدلال.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming the biggest model is always the best fit. Model category, task complexity and results on a realistic evaluation all matter; size alone does not prove fit. Choosing between LLMs and SLMs, and their costs, is covered in Chapter 5.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن النموذج الأكبر هو الأنسب دائمًا. فئة النموذج وتعقيد المهمة ونتائجه في تقييم واقعي كلها مهمة؛ الحجم وحده لا يثبت الملاءمة. الاختيار بين LLM وSLM وكلفتهما موضوع الفصل الخامس.</p></aside>

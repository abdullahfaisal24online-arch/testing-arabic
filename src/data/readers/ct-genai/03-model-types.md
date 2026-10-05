---
order: 3
slug: "1-1-3"
chapter: 1
group: "1.1"
section: "1.1.3"
title: "Foundation, Instruction-Tuned and Reasoning LLMs"
titleAr: "النماذج الأساسية والموجّهة بالتعليمات والاستدلالية"
objectives: "GenAI-1.1.3 · K2"
minutes: 8
lo:
  GenAI-1.1.3: "Tell foundation, instruction-tuned and reasoning LLMs apart."
loAr:
  GenAI-1.1.3: "تميّز بين النماذج الأساسية والموجّهة بالتعليمات والاستدلالية."
takeaways:
  - "General foundation → instruction following → specialised for complex reasoning."
  - "The category reflects how a model was prepared, not its brand name or the size of its context window."
  - "In testing, pick instruction-tuned or reasoning models by what the task needs, and review the output of both."
takeawaysAr:
  - "أساسي عام ← يتبع التعليمات ← مخصص للاستدلال المعقّد."
  - "الفئة تعكس طريقة إعداد النموذج، لا اسمه التجاري ولا حجم نافذة السياق."
  - "في الاختبار، اختر بين النماذج الموجّهة بالتعليمات والاستدلالية حسب حاجة المهمة، وراجع ناتج الاثنين."
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
يفرّق المنهج بين ثلاث فئات تنتج عن مراحل تدريب وتخصيص متدرّجة. الفرق يتعلق بما تم إعداد النموذج للقيام به، وليس بمجرد الاسم التجاري أو حجم نافذة السياق.

أسهل طريقة لتذكّرها أن تراها كطبقات تبني على بعضها: نموذج أساسي عام، ثم نسخة منه مضبوطة لتتبع التعليمات، ثم نسخة أكثر تخصيصًا للاستدلال المعقّد.

<figure class="gx-figure" aria-label="Three layers: foundation LLM, instruction-tuned LLM built on it, reasoning LLM built on that."><div class="gx-flow-row"><span class="gx-flow-node">Foundation<small>broad general ability</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Instruction-tuned<small>follows instructions</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Reasoning<small>multi-step logic</small></span></div><figcaption>Each layer is trained further on top of the previous one.</figcaption></figure>

### النماذج الأساسية — Foundation LLMs

تُدرَّب على بيانات واسعة ومتنوعة لتكوين قدرات عامة. قد تشمل عائلة النماذج الأساسية نصوصًا وشيفرات ووسائط أخرى، تبعًا لبنية النموذج وتدريبه. تستطيع هذه القدرات دعم مجالات متعددة، مثل معالجة اللغة أو الرؤية أو الكلام، لكن تحقيق مهمة متخصصة قد يحتاج تكييفًا إضافيًا.

لا تفترض أن كل نموذج أساسي مجهّز أصلًا كمساعد محادثة يتبع التعليمات بالطريقة التي تريدها. التدريب المسبق يوفر أساسًا عامًا؛ اتباع أوامر المستخدم بدقة هدف آخر للتخصيص.

بعبارة أخرى: النموذج الأساسي «يعرف» كثيرًا عن اللغة والشيفرة، لكنه مدرَّب على إكمال النص لا على تنفيذ طلبك. إذا كتبت له «اكتب حالات اختبار لصفحة الدخول» قد يكمل النص بطريقة غير متوقعة بدل أن يعطيك جدول حالات. لهذا نادرًا ما يستخدم المختبِر نموذجًا أساسيًا خامًا مباشرة؛ غالبًا يستخدم نسخة مضبوطة منه.

### النماذج الموجّهة بالتعليمات — Instruction-Tuned LLMs

تنطلق من نموذج أساسي، ثم تُضبط باستخدام بيانات تربط التوجيهات بالاستجابات المتوقعة. الهدف تحسين الالتزام بالمهمة والتعليمات واتساق الرد، بحيث يصبح النموذج أنسب للتعامل مع طلب المستخدم.

مثال: «حوّل قصة المستخدم إلى جدول حالات اختبار يتضمن الشروط المسبقة والخطوات والنتيجة المتوقعة». اتباع هذا التنسيق وتنفيذ التكليف مثال على القدرات المستهدفة بضبط التعليمات، لكنه يظل بحاجة إلى مراجعة.

وتُسمّى هذه النماذج أحيانًا **غير الاستدلالية (Non-reasoning)** تمييزًا لها عن الفئة التالية.

معظم أدوات الدردشة التي يستخدمها الفريق يوميًا مبنية على نماذج من هذا النوع، لأنها تفهم الطلب وتلتزم بالتنسيق المطلوب وتعطي ردودًا متماسكة. وهي مناسبة لمهام واضحة ومحددة مثل: إعادة صياغة تقرير عيب بقالب الفريق، أو تلخيص نتائج تشغيل، أو توليد بيانات اختبار بشكل معيّن.

### النماذج الاستدلالية — Reasoning LLMs

تبني على النماذج الموجّهة بالتعليمات، وتُدرَّب أو تُضبط بصورة إضافية على مهام معقّدة مختارة بعناية، لتقوية قدرات منظمة مثل الاستنتاج المنطقي، والحل متعدد الخطوات، والاستدلال المتسلسل **Chain-of-Thought**. لذلك تناسب المهام ذات العبء المعرفي العالي في المجالات التقنية. قد تناسب مهام اختبار فيها أولويات واعتماديات وشروط متداخلة.

عمليًا، كثير من هذه النماذج «يفكر» عبر خطوات وسيطة قبل الإجابة، فتستغرق وقتًا أطول وتستهلك رموزًا أكثر، وبالتالي كلفة أعلى. لذلك لا تستخدمها لكل شيء؛ تحويل تقرير إلى قالب لا يحتاج نموذج استدلال، أما ترتيب حالات بينها اعتماديات وأولويات متعارضة فقد يستفيد منه.

هذا لا يجعلها معصومة من أخطاء الاستدلال. راجع الاستنتاجات باستخدام قواعد المهمة ومراجع مستقلة، ولا تعتبر تسمية «Reasoning» ضمانًا.

| Compared on | Foundation | Instruction-tuned | Reasoning |
| --- | --- | --- | --- |
| محور الإعداد | قدرات عامة من التدريب المسبق | اتباع التعليمات والاستجابة للمهمة | حل مسائل تتطلب خطوات وربطًا منطقيًا |
| مثال توضيحي | نموذج عام يحتاج تكييفًا لدور متخصص | إنشاء تقرير بصيغة محددة | ترتيب اختبارات مع أولويات واعتماديات |
| ما يجب التحقق منه | ملاءمة النموذج للمهمة | الالتزام بالمطلوب وصحة المحتوى | صحة الشروط والحسابات والاستنتاجات |

### المهمة تحدد الاختيار — Choosing by Task

**الحالة الأولى:** تحويل عشرة تقارير عيوب إلى قالب موحّد. هذه مهمة واضحة ومتكررة؛ يمكن تقييم نموذج Instruction-tuned عليها، ثم قياس صحة النتائج والوقت والتكلفة.

**الحالة الثانية:** ترتيب الاختبارات A و B و C عندما يكون C الأعلى خطورة، لكن C يعتمد على نجاح B، و B يعتمد على A. هنا تحتاج إلى مراعاة الاعتماديات قبل ترتيب المخاطر. نموذج Reasoning قد يكون مرشحًا مناسبًا، لكن النتيجة يجب أن تحترم أن **A يسبق B، و B يسبق C**؛ لا يصح وضع C أولًا لمجرد ارتفاع خطورته.

<figure class="gx-figure gx-flow" aria-label="Dependency order: A, then B, then C. C has the highest risk but depends on B."><div class="gx-flow-row"><span class="gx-flow-node">A</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">B</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">C<small>highest risk</small></span></div><figcaption>Dependencies come first: C cannot run before A and B pass, however high its risk.</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember the order and what each layer adds: foundation = broad general ability; instruction-tuned = trained on prompt–response pairs to follow instructions; reasoning = built on instruction-tuned, trained further on complex tasks for multi-step and chain-of-thought reasoning. In testing, both instruction-tuned and reasoning models are used, chosen by how much reasoning the task needs.</p><p class="gx-ar" lang="ar" dir="rtl">تذكّر الترتيب وما تضيفه كل طبقة: الأساسي = قدرة عامة واسعة؛ الموجّه بالتعليمات = مدرّب على أزواج توجيه واستجابة ليتبع التعليمات؛ الاستدلالي = مبني على الموجّه بالتعليمات ومدرّب أكثر على مهام معقّدة للاستدلال متعدد الخطوات والمتسلسل. في الاختبار يُستخدم النوعان الأخيران، ويُختار بينهما حسب حاجة المهمة للاستدلال.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming the biggest model is always the best fit. Model category, task complexity and results on a realistic evaluation all matter; size alone does not prove fit. Choosing between LLMs and SLMs, and their costs, is covered in Chapter 5.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن النموذج الأكبر هو الأنسب دائمًا. فئة النموذج وتعقيد المهمة ونتائجه في تقييم واقعي كلها مهمة؛ الحجم وحده لا يثبت الملاءمة. الاختيار بين LLM وSLM وكلفتهما موضوع الفصل الخامس.</p></aside>

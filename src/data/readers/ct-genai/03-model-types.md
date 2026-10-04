---
order: 3
slug: "1-1-3"
chapter: 1
group: "1.1"
section: "1.1.3"
title: "Foundation, Instruction-Tuned and Reasoning LLMs"
titleAr: "النماذج الأساسية والموجّهة بالتعليمات والاستدلالية"
objectives: "GenAI-1.1.3 · K2"
minutes: 5
lo:
  GenAI-1.1.3: "Tell foundation, instruction-tuned and reasoning LLMs apart."
takeaways:
  - "General foundation → instruction following → specialised for complex reasoning."
  - "The category reflects how a model was prepared, not its brand name or the size of its context window."
  - "In testing, pick instruction-tuned or reasoning models by what the task needs, and review the output of both."
terms:
  - en: "Foundation LLM"
    ar: "النموذج الأساسي"
    def: "Trained on broad, diverse data to build general capabilities. May need extra adaptation for a specialised task."
    match: ["Foundation LLMs", "Foundation"]
  - en: "Instruction-Tuned LLM"
    ar: "النموذج الموجّه بالتعليمات"
    def: "A foundation model further tuned on prompt–response pairs to follow instructions and task formats more reliably."
    match: ["Instruction-Tuned LLMs", "Instruction-tuned"]
  - en: "Reasoning LLM"
    ar: "النموذج الاستدلالي"
    def: "Builds on instruction-tuned models with extra training on complex tasks to strengthen logical inference, multi-step problem solving and chain-of-thought reasoning."
    match: ["Reasoning LLMs", "Reasoning"]
---
يفرّق المنهج بين ثلاث فئات تنتج عن مراحل تدريب وتخصيص متدرّجة. الفرق يتعلق بما تم إعداد النموذج للقيام به، وليس بمجرد الاسم التجاري أو حجم نافذة السياق.

### النماذج الأساسية — Foundation LLMs

تُدرَّب على بيانات واسعة ومتنوعة لتكوين قدرات عامة. قد تشمل عائلة النماذج الأساسية نصوصًا وشيفرات ووسائط أخرى، تبعًا لبنية النموذج وتدريبه. تستطيع هذه القدرات دعم مجالات متعددة، مثل معالجة اللغة أو الرؤية أو الكلام، لكن تحقيق مهمة متخصصة قد يحتاج تكييفًا إضافيًا.

لا تفترض أن كل نموذج أساسي مجهّز أصلًا كمساعد محادثة يتبع التعليمات بالطريقة التي تريدها. التدريب المسبق يوفر أساسًا عامًا؛ اتباع أوامر المستخدم بدقة هدف آخر للتخصيص.

### النماذج الموجّهة بالتعليمات — Instruction-Tuned LLMs

تنطلق من نموذج أساسي، ثم تُضبط باستخدام بيانات تربط التوجيهات بالاستجابات المتوقعة. الهدف تحسين الالتزام بالمهمة والتعليمات واتساق الرد، بحيث يصبح النموذج أنسب للتعامل مع طلب المستخدم.

مثال: «حوّل قصة المستخدم إلى جدول حالات اختبار يتضمن الشروط المسبقة والخطوات والنتيجة المتوقعة». اتباع هذا التنسيق وتنفيذ التكليف مثال على القدرات المستهدفة بضبط التعليمات، لكنه يظل بحاجة إلى مراجعة.

### النماذج الاستدلالية — Reasoning LLMs

تبني على النماذج الموجّهة بالتعليمات، وتُدرَّب أو تُضبط بصورة إضافية على مهام معقّدة مختارة بعناية، لتقوية قدرات منظمة مثل الاستنتاج المنطقي، والحل متعدد الخطوات، والاستدلال المتسلسل **Chain-of-Thought**. لذلك تناسب المهام ذات العبء المعرفي العالي في المجالات التقنية. قد تناسب مهام اختبار فيها أولويات واعتماديات وشروط متداخلة.

هذا لا يجعلها معصومة من أخطاء الاستدلال. راجع الاستنتاجات باستخدام قواعد المهمة ومراجع مستقلة، ولا تعتبر تسمية «Reasoning» ضمانًا.

| Compared on | Foundation | Instruction-tuned | Reasoning |
| --- | --- | --- | --- |
| محور الإعداد | قدرات عامة من التدريب المسبق | اتباع التعليمات والاستجابة للمهمة | حل مسائل تتطلب خطوات وربطًا منطقيًا |
| مثال توضيحي | نموذج عام يحتاج تكييفًا لدور متخصص | إنشاء تقرير بصيغة محددة | ترتيب اختبارات مع أولويات واعتماديات |
| ما يجب التحقق منه | ملاءمة النموذج للمهمة | الالتزام بالمطلوب وصحة المحتوى | صحة الشروط والحسابات والاستنتاجات |

### المهمة تحدد الاختيار — Choosing by Task

**الحالة الأولى:** تحويل عشرة تقارير عيوب إلى قالب موحّد. هذه مهمة واضحة ومتكررة؛ يمكن تقييم نموذج Instruction-tuned عليها، ثم قياس صحة النتائج والوقت والتكلفة.

**الحالة الثانية:** ترتيب الاختبارات A وB وC عندما يكون C الأعلى خطورة، لكن C يعتمد على نجاح B، وB يعتمد على A. هنا تحتاج إلى مراعاة الاعتماديات قبل ترتيب المخاطر. نموذج Reasoning قد يكون مرشحًا مناسبًا، لكن النتيجة يجب أن تحترم أن **A يسبق B، وB يسبق C**؛ لا يصح وضع C أولًا لمجرد ارتفاع خطورته.

<figure class="gx-figure gx-flow" aria-label="Dependency order: A, then B, then C. C has the highest risk but depends on B."><div class="gx-flow-row"><span class="gx-flow-node">A</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">B</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">C<small>highest risk</small></span></div><figcaption>Dependencies come first: C cannot run before A and B pass, however high its risk.</figcaption></figure>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Assuming the biggest model is always the best fit. Model category, task complexity and results on a realistic evaluation all matter; size alone does not prove fit. Choosing between LLMs and SLMs, and their costs, is covered in Chapter 5.</p></aside>

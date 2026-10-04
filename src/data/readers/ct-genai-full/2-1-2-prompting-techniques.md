---
order: 2
slug: "2-1-2"
chapter: 2
group: "2.1"
section: "2.1.2"
title: "Core Prompting Techniques for Software Testing"
titleAr: "تقنيات التوجيه الأساسية لاختبار البرمجيات"
objectives: "GenAI-2.1.2 · K2 / HO-2.1.2a · H0 / HO-2.1.2b · H1"
minutes: 7
lo:
  GenAI-2.1.2: "Tell the core prompting techniques for testing apart."
  HO-2.1.2a: "Watch prompt chaining, few-shot prompting and meta prompting applied to test scenarios."
  HO-2.1.2b: "Recognise which prompting techniques are used in given sample prompts."
takeaways:
  - "Prompt chaining splits work into steps, with a review of each output before the next step."
  - "Zero-shot gives no example, one-shot gives one, few-shot gives several. Examples steer format and behaviour."
  - "Meta prompting asks the model to write or improve the prompt itself, which the tester then reviews."
  - "The techniques can be combined, and they work on top of the six-component structure."
terms:
  - en: "Prompt Chaining"
    ar: "تسلسل التوجيهات"
    def: "Breaking a complex task into sequential prompts, reviewing and refining each output before moving on."
  - en: "Zero-shot Prompting"
    ar: "التوجيه بلا أمثلة"
    def: "A prompt that includes no examples of the expected output."
    match: ["Zero-shot"]
  - en: "One-shot Prompting"
    ar: "التوجيه بمثال واحد"
    def: "A prompt that includes exactly one example of input and expected output."
    match: ["One-shot"]
  - en: "Few-shot Prompting"
    ar: "التوجيه بأمثلة قليلة"
    def: "A prompt that includes several examples so the model follows a consistent pattern."
    match: ["Few-shot Prompting", "Few-shot"]
  - en: "Meta Prompting"
    ar: "التوجيه الفوقي"
    def: "Using the model to generate or refine prompts, which the tester reviews before use."
---
تعمل هذه التقنيات فوق المكونات الستة من القسم السابق. يمكن استخدام كل واحدة لوحدها، أو الجمع بينها لتحسين النتيجة.

### تسلسل التوجيهات — Prompt Chaining

تفكّك المهمة المعقّدة إلى توجيهات وسيطة متتالية. تُراجع نتيجة كل خطوة وتُصحَّح، يدويًا أو آليًا، قبل الانتقال للتي بعدها. لأن كل استجابة تُغذّي التوجيه التالي، ترتفع الدقة، وتكون التقنية مفيدة خصوصًا في عمليات الاختبار متعددة الجوانب التي تحتاج تفكيكًا وتحققًا منهجيًا.

مثال: اكتشاف غموض المتطلبات، ثم اعتماد شروط الاختبار، ثم توليد الحالات.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Chaining steps automatically without checking the intermediate output. An error in step one is carried into every later step.</p></aside>

### التوجيه بالأمثلة — Few-shot Prompting

تضمّن أمثلة داخل التوجيه توضّح النمط المطلوب. **Zero-shot** لا يتضمن أي مثال، و**One-shot** يتضمن مثالًا واحدًا، و**Few-shot** يتضمن عدة أمثلة. تساعد الأمثلة الواضحة على توجيه النموذج والحصول على مخرجات متسقة ومتوقعة، وتكون فعّالة خصوصًا عندما يستطيع المثال أن يُظهر السلوك المطلوب.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Count the actual examples given to the model, not the number of outputs requested. “Write five test cases” with no example is still zero-shot.</p></aside>

### التوجيه الفوقي — Meta Prompting

تستفيد من قدرة النموذج على توليد التوجيهات أو تحسينها بشكل تكراري: ينشئ النموذج التوجيه، ويقيّمه المختبِر ويعدّله ثم يستخدمه. هذا يحسّن جودة التوجيه بالاستفادة من فهم النموذج لما يجعل التوجيه فعّالًا، ويقلّل جهد التصميم اليدوي، ويفيد عندما لا يكون المختبِر متأكدًا من أفضل صياغة. هو شكل من **Pairing** بين الإنسان والذكاء الاصطناعي لتحقيق هدف مشترك.

<figure class="gx-figure" aria-label="Combining the three techniques: meta prompting creates the prompt, few-shot fixes the format, chaining adds review points."><div class="gx-flow-row"><span class="gx-flow-node">Meta<small>draft the prompt</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Few-shot<small>fix the format</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Chaining<small>review each step</small></span></div><figcaption>One way to combine the techniques on a single task.</figcaption></figure>

<section class="gx-lab" data-lab="HO-2.1.2"><header class="gx-lab-head"><span class="gx-lab-title">Demo + Exercise · Name the Technique</span><span class="gx-lab-meta">HO-2.1.2a · H0 / HO-2.1.2b · H1</span></header><div class="gx-lab-body"><p><strong>Goal:</strong> watch the three techniques on the same sign-up story, then recognise which technique each sample uses.</p><ol class="gx-lab-steps"><li><em>“List only the ambiguities. Wait for my review before writing any test cases.”</em> — identify the technique.</li><li><em>“Here is one user story with one correct scenario. Follow the same pattern for the new story.”</em> — identify the technique.</li><li><em>“Design a prompt that reviews the completeness of sign-up test cases, and state what information it needs.”</em> — identify the technique.</li><li>Change one phrase in any prompt and record its effect on accuracy and completeness.</li></ol><details class="gx-lab-answer"><summary>Model answer</summary><p>1 is prompt chaining with a review point. 2 is one-shot prompting (one example). 3 is meta prompting. A request to improve a prompt is meta prompting; it also becomes few-shot when you add several input–output examples. Techniques can be combined.</p></details></div></section>

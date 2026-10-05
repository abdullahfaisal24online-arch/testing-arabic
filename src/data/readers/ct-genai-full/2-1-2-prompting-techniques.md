---
order: 2
slug: "2-1-2"
chapter: 2
group: "2.1"
section: "2.1.2"
title: "Core Prompting Techniques for Software Testing"
titleAr: "تقنيات التوجيه الأساسية لاختبار البرمجيات"
objectives: "GenAI-2.1.2 · K2 / HO-2.1.2a · H0 / HO-2.1.2b · H1"
minutes: 10
lo:
  GenAI-2.1.2: "Tell the core prompting techniques for testing apart."
  HO-2.1.2a: "Watch prompt chaining, few-shot prompting and meta prompting applied to test scenarios."
  HO-2.1.2b: "Recognise which prompting techniques are used in given sample prompts."
loAr:
  GenAI-2.1.2: "تميّز بين تقنيات التوجيه الأساسية في الاختبار."
  HO-2.1.2a: "تشاهد تسلسل التوجيهات والتوجيه بالأمثلة والتوجيه الفوقي مطبّقة على سيناريوهات اختبار."
  HO-2.1.2b: "تتعرّف على تقنيات التوجيه المستخدمة في أمثلة توجيهات معطاة."
takeaways:
  - "Prompt chaining splits work into steps, with a review of each output before the next step."
  - "Zero-shot gives no example, one-shot gives one, few-shot gives several. Examples steer format and behaviour."
  - "Meta prompting asks the model to write or improve the prompt itself, which the tester then reviews."
  - "The techniques can be combined, and they work on top of the six-component structure."
takeawaysAr:
  - "تسلسل التوجيهات يقسّم العمل إلى خطوات، مع مراجعة ناتج كل خطوة قبل التالية."
  - "Zero-shot بلا أمثلة، وOne-shot بمثال واحد، وFew-shot بعدة أمثلة. الأمثلة توجّه الصيغة والسلوك."
  - "التوجيه الفوقي يطلب من النموذج كتابة التوجيه نفسه أو تحسينه، ثم يراجعه المختبِر."
  - "يمكن الجمع بين التقنيات، وكلها تعمل فوق البنية ذات المكوّنات الستة."
terms:
  - en: "Prompt Chaining"
    ar: "تسلسل التوجيهات"
    def: "Breaking a complex task into sequential prompts, reviewing and refining each output before moving on."
    defAr: "تقسيم مهمة معقّدة إلى توجيهات متتالية، مع مراجعة كل ناتج وتحسينه قبل الانتقال."
  - en: "Zero-shot Prompting"
    ar: "التوجيه بلا أمثلة"
    def: "A prompt that includes no examples of the expected output."
    defAr: "توجيه لا يتضمن أي مثال على الناتج المتوقع."
    match: ["Zero-shot"]
  - en: "One-shot Prompting"
    ar: "التوجيه بمثال واحد"
    def: "A prompt that includes exactly one example of input and expected output."
    defAr: "توجيه يتضمن مثالًا واحدًا بالضبط على مدخل وناتجه المتوقع."
    match: ["One-shot"]
  - en: "Few-shot Prompting"
    ar: "التوجيه بأمثلة قليلة"
    def: "A prompt that includes several examples so the model follows a consistent pattern."
    defAr: "توجيه يتضمن عدة أمثلة لكي يتبع النموذج نمطًا ثابتًا."
    match: ["Few-shot Prompting", "Few-shot"]
  - en: "Meta Prompting"
    ar: "التوجيه الفوقي"
    def: "Using the model to generate or refine prompts, which the tester reviews before use."
    defAr: "استخدام النموذج لتوليد التوجيهات أو تحسينها، ثم يراجعها المختبِر قبل استخدامها."
---
تعمل هذه التقنيات فوق المكونات الستة من القسم السابق. يمكن استخدام كل واحدة لوحدها، أو الجمع بينها لتحسين النتيجة.

### تسلسل التوجيهات — Prompt Chaining

تفكّك المهمة المعقّدة إلى توجيهات وسيطة متتالية. تُراجع نتيجة كل خطوة وتُصحَّح، يدويًا أو آليًا، قبل الانتقال للتي بعدها. لأن كل استجابة تُغذّي التوجيه التالي، ترتفع الدقة، وتكون التقنية مفيدة خصوصًا في عمليات الاختبار متعددة الجوانب التي تحتاج تفكيكًا وتحققًا منهجيًا.

مثال: اكتشاف غموض المتطلبات، ثم اعتماد شروط الاختبار، ثم توليد الحالات.

<figure class="gx-figure" aria-label="Prompt chaining: step 1 output is reviewed before it feeds step 2, and step 2 output is reviewed before step 3."><div class="gx-flow-row"><span class="gx-flow-node">1 · Ambiguities</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Review</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">2 · Conditions</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Review</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">3 · Test cases</span></div><figcaption>Each step's output is checked before it becomes the next step's input.</figcaption></figure>

لماذا تعمل هذه الطريقة أفضل من طلب واحد كبير؟ لأن الطلب الكبير يطلب من النموذج أن يحلل ويقرر ويولّد في خطوة واحدة، فإذا أخطأ في الفهم ظهر الخطأ في كل الحالات دون أن تعرف أين بدأ. أما التسلسل فيجعل كل خطوة صغيرة وقابلة للمراجعة، ويكشف الخطأ مبكرًا قبل أن يتراكم.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Chaining steps automatically without checking the intermediate output. An error in step one is carried into every later step.</p><p class="gx-ar" lang="ar" dir="rtl">ربط الخطوات آليًا دون فحص الناتج الوسيط. الخطأ في الخطوة الأولى ينتقل إلى كل الخطوات التالية.</p></aside>

### التوجيه بالأمثلة — Few-shot Prompting

تضمّن أمثلة داخل التوجيه توضّح النمط المطلوب. **Zero-shot** لا يتضمن أي مثال، فيعتمد النموذج على معرفته السابقة فقط، و**One-shot** يتضمن مثالًا واحدًا، و**Few-shot** يتضمن عدة أمثلة. تساعد الأمثلة الواضحة على توجيه النموذج والحصول على مخرجات متسقة ومتوقعة، وتكون فعّالة خصوصًا عندما يستطيع المثال أن يُظهر السلوك المطلوب.

متى يكون مفيدًا جدًا؟ عندما تريد مخرجات متكررة بشكل ثابت: سيناريوهات Gherkin، أو سكربتات بالكلمات المفتاحية، أو تقارير عيوب بقالب الفريق. مثالان أو ثلاثة جيدة ومتنوعة تعلّم النموذج النمط أفضل من فقرة طويلة تصف التنسيق. وفي المقابل، الأمثلة الضعيفة أو المتشابهة جدًا تُعلّمه أخطاءها أو تجعله ينسخ تفاصيلها حرفيًا.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Count the actual examples given to the model, not the number of outputs requested. “Write five test cases” with no example is still zero-shot.</p><p class="gx-ar" lang="ar" dir="rtl">احسب الأمثلة الفعلية المعطاة للنموذج، لا عدد المخرجات المطلوبة. «اكتب خمس حالات اختبار» بدون مثال يبقى Zero-shot.</p></aside>

### التوجيه الفوقي — Meta Prompting

تستفيد من قدرة النموذج على توليد التوجيهات أو تحسينها بشكل تكراري: ينشئ النموذج التوجيه، ويقيّمه المختبِر ويعدّله ثم يستخدمه. هذا يحسّن جودة التوجيه بالاستفادة من فهم النموذج لما يجعل التوجيه فعّالًا، ويقلّل جهد التصميم اليدوي، ويفيد عندما لا يكون المختبِر متأكدًا من أفضل صياغة. هو شكل من **Pairing** بين الإنسان والذكاء الاصطناعي لتحقيق هدف مشترك، وهي طريقة جديدة للتعاون مع أدوات AI تعزز الإنتاجية والتعلّم، ليس في هندسة التوجيه فقط، بل أيضًا في البرمجة الثنائية (Pair programming) والاختبار الثنائي (Pair testing).

مثال: لا تعرف كيف تكتب توجيهًا جيدًا لمراجعة اكتمال تقرير اختبار. تطلب من النموذج: «صمّم لي توجيهًا يراجع تقارير إكمال الاختبار، وحدد المعلومات التي يحتاجها». يقترح النموذج توجيهًا بدور وقائمة فحص وتنسيق نتيجة. تراجعه أنت، وتحذف ما لا يناسب فريقك، وتضيف قيدًا مهمًا نسيه، ثم تستخدمه.

<figure class="gx-figure" aria-label="Combining the three techniques: meta prompting creates the prompt, few-shot fixes the format, chaining adds review points."><div class="gx-flow-row"><span class="gx-flow-node">Meta<small>draft the prompt</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Few-shot<small>fix the format</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Chaining<small>review each step</small></span></div><figcaption>One way to combine the techniques on a single task.</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Match technique to clue. “Break into steps with a check in between” → prompt chaining. “Include examples to fix the format” → few-shot (or one-shot with one example). “Ask the model to create or improve the prompt” → meta prompting.</p><p class="gx-ar" lang="ar" dir="rtl">طابق التقنية مع العلامة. «قسّم إلى خطوات مع مراجعة بينها» ← تسلسل التوجيهات. «ضمّن أمثلة لتثبيت الصيغة» ← Few-shot (أو One-shot بمثال واحد). «اطلب من النموذج إنشاء التوجيه أو تحسينه» ← التوجيه الفوقي.</p></aside>

<section class="gx-lab" data-lab="HO-2.1.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Demo + Exercise · Name the Technique</span><span class="gx-ar" lang="ar" dir="rtl">عرض توضيحي وتمرين · سمِّ التقنية</span></span><span class="gx-lab-meta">HO-2.1.2a · H0 / HO-2.1.2b · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> watch the three techniques on the same sign-up story, then recognise which technique each sample uses.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> مشاهدة التقنيات الثلاث على قصة التسجيل نفسها، ثم التعرّف على التقنية المستخدمة في كل مثال.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr"><em>“List only the ambiguities. Wait for my review before writing any test cases.”</em> — identify the technique.</span><span class="gx-ar" lang="ar" dir="rtl"><em>«اذكر الغموض فقط. انتظر مراجعتي قبل كتابة أي حالات اختبار.»</em> حدّد التقنية.</span></li><li><span class="gx-en" lang="en" dir="ltr"><em>“Here is one user story with one correct scenario. Follow the same pattern for the new story.”</em> — identify the technique.</span><span class="gx-ar" lang="ar" dir="rtl"><em>«هذه قصة مستخدم واحدة مع سيناريو صحيح واحد. اتبع النمط نفسه للقصة الجديدة.»</em> حدّد التقنية.</span></li><li><span class="gx-en" lang="en" dir="ltr"><em>“Design a prompt that reviews the completeness of sign-up test cases, and state what information it needs.”</em> — identify the technique.</span><span class="gx-ar" lang="ar" dir="rtl"><em>«صمّم توجيهًا يراجع اكتمال حالات اختبار التسجيل، واذكر المعلومات التي يحتاجها.»</em> حدّد التقنية.</span></li><li><span class="gx-en" lang="en" dir="ltr">Change one phrase in any prompt and record its effect on accuracy and completeness.</span><span class="gx-ar" lang="ar" dir="rtl">غيّر عبارة واحدة في أي توجيه وسجّل أثرها على الدقة والاكتمال.</span></li></ol><details class="gx-lab-answer"><summary>Model answer · <span class="gx-ar-inline" lang="ar" dir="rtl">الإجابة النموذجية</span></summary><p><span class="gx-en" lang="en" dir="ltr">1 is prompt chaining with a review point. 2 is one-shot prompting (one example). 3 is meta prompting. A request to improve a prompt is meta prompting; it also becomes few-shot when you add several input–output examples. Techniques can be combined.</span><span class="gx-ar" lang="ar" dir="rtl">الأول تسلسل توجيهات بنقطة مراجعة. الثاني One-shot (مثال واحد). الثالث توجيه فوقي. طلب تحسين توجيه هو توجيه فوقي؛ ويصبح أيضًا Few-shot عندما تضيف عدة أمثلة مدخلات ومخرجات. ويمكن الجمع بين التقنيات.</span></p></details></div></section>

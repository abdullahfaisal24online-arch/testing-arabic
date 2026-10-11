---
order: 2
slug: "2-1-2"
chapter: 2
group: "2.1"
section: "2.1.2"
title: "Core Prompting Techniques for Software Testing"
titleAr: "تقنيات التوجيه الأساسية لاختبار البرمجيات"
objectives: "GenAI-2.1.2 · K2 / HO-2.1.2a · H0 / HO-2.1.2b · H1"
minutes: 13
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
  - "Meta prompting is a form of pairing: tester and model co-create the prompt, which improves productivity and learning."
takeawaysAr:
  - "تسلسل التوجيهات يقسّم العمل إلى خطوات، مع مراجعة ناتج كل خطوة قبل التالية."
  - "Zero-shot بلا أمثلة، وOne-shot بمثال واحد، وFew-shot بعدة أمثلة. الأمثلة توجّه الصيغة والسلوك."
  - "التوجيه الفوقي يطلب من النموذج كتابة التوجيه نفسه أو تحسينه، ثم يراجعه المختبِر."
  - "يمكن الجمع بين التقنيات، وكلها تعمل فوق البنية ذات المكوّنات الستة."
  - "التوجيه الفوقي شكل من الاقتران (Pairing): المختبِر والنموذج ينشئان التوجيه معًا، مما يعزّز الإنتاجية والتعلّم."
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
  - en: "Pairing"
    ar: "الاقتران مع أداة GenAI"
    def: "The tester and the GenAI tool working together interactively toward a shared goal, for example co-creating a prompt."
    defAr: "عمل المختبِر وأداة GenAI معًا بشكل تفاعلي لتحقيق هدف مشترك، مثل إنشاء توجيه بالمشاركة."
---
اقتُرحت في السنوات الأخيرة تقنيات توجيه كثيرة لاستخدامات GenAI المختلفة، ويشير المنهج إلى مسح شامل لها (Schulhoff 2024). من بين هذه التقنيات، يختار المنهج **ثلاث تقنيات أساسية** شائعة في مهام الاختبار: **تسلسل التوجيهات (Prompt Chaining)**، و**التوجيه بالأمثلة (Few-shot Prompting)**، و**التوجيه الفوقي (Meta Prompting)**.

النقطة المهمة: هذه التقنيات **لا تحل محل** البنية ذات المكوّنات الستة من القسم السابق، بل **تُستخدم معها**. كل توجيه في السلسلة، وكل توجيه فيه أمثلة، وكل توجيه يولّده النموذج، يبقى توجيهًا منظّمًا له دور وسياق وتعليمات ومدخلات وقيود وصيغة مخرجات.

### تسلسل التوجيهات — Prompt Chaining

**ما هو؟** تقسيم المهمة إلى **سلسلة من الخطوات الوسيطة**، أي عدة توجيهات بدل توجيه واحد. **يُفحص ناتج كل خطوة ويُحسَّن، يدويًا أو آليًا، قبل الانتقال** إلى الخطوة التالية.

**لماذا يرفع الدقة؟** يقول المنهج إن هذا الأسلوب يؤدي إلى **دقة أكبر لأن كل استجابة تغذّي التوجيه التالي**. فإذا صحّحت ناتج الخطوة الأولى، تبدأ الخطوة الثانية من أساس سليم.

**متى يفيد؟** في عمليات الاختبار التي تكون فيها المهام **معقّدة** وتحتاج **تفكيكًا إلى مهام فرعية** و**فحصًا منهجيًا للمخرجات الوسيطة**. ويضيف المنهج أنه يسمح أيضًا **بتفاعلات ديناميكية**: بعد كل خطوة تستطيع تغيير الاتجاه بناءً على ما رأيته، كأن تضيف خطوة لم تخطط لها لأن المراجعة كشفت غموضًا.

**مثال من تطبيق التوصيل:** اكتشاف الغموض في قصة إلغاء الطلب، ثم اعتماد شروط الاختبار بعد سؤال مالك المنتج، ثم توليد حالات الاختبار من الشروط المعتمدة فقط.

<figure class="gx-figure" aria-label="Prompt chaining: step 1 output is reviewed before it feeds step 2, and step 2 output is reviewed before step 3."><div class="gx-flow-row"><span class="gx-flow-node">1 · Ambiguities</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Review</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">2 · Conditions</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Review</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">3 · Test cases</span></div><figcaption>Each step's output is checked before it becomes the next step's input.</figcaption></figure>

لماذا تعمل هذه الطريقة أفضل من طلب واحد كبير؟ لأن الطلب الكبير يطلب من النموذج أن يحلل ويقرر ويولّد في خطوة واحدة، فإذا أخطأ في الفهم ظهر الخطأ في كل الحالات دون أن تعرف أين بدأ. أما التسلسل فيجعل كل خطوة صغيرة وقابلة للمراجعة، ويكشف الخطأ مبكرًا قبل أن يتراكم.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Chaining steps automatically without checking the intermediate output. An error in step one is carried into every later step.</p><p class="gx-ar" lang="ar" dir="rtl">ربط الخطوات آليًا دون فحص الناتج الوسيط. الخطأ في الخطوة الأولى ينتقل إلى كل الخطوات التالية.</p></aside>

### التوجيه بالأمثلة — Few-shot Prompting

**ما هو؟** تضمين **أمثلة داخل التوجيه**. ويميّز المنهج بين ثلاثة مستويات:

| Variant | Examples in the prompt | What the model relies on |
|---|---|---|
| Zero-shot | None | Its pre-existing knowledge only |
| One-shot | Exactly one | One example showing the expected result for a given input |
| Few-shot | More than one (a few) | Several examples that consolidate the desired behaviour |

في **Zero-shot** يعتمد النموذج على معرفته السابقة وحدها. في **One-shot** تعطيه مثالًا واحدًا يوضّح الناتج المتوقع لمدخل معيّن. وفي **Few-shot** تعطيه أكثر من مثال، لكي **تُرسّخ** السلوك المطلوب.

**لماذا يفيد؟** يقول المنهج إن الأمثلة توجّه النموذج بتقديم **مرجع واضح**، وتضمن أن تكون النتائج **متسقة ومطابقة للتوقعات**. وهو فعّال خصوصًا في المهام التي **تستطيع فيها الأمثلة أن توضّح السلوك المطلوب**، فيتمكن النموذج من **التعميم** وإنتاج نتائج موثوقة. «التعميم» هنا يعني أن النموذج لا ينسخ المثال، بل يطبّق نمطه على مدخل جديد.

متى يكون مفيدًا جدًا؟ عندما تريد مخرجات متكررة بشكل ثابت: سيناريوهات Gherkin، أو scripts بالكلمات المفتاحية، أو تقارير defects بقالب الفريق. مثالان أو ثلاثة جيدة ومتنوعة تعلّم النموذج النمط أفضل من فقرة طويلة تصف التنسيق. وفي المقابل، الأمثلة الضعيفة أو المتشابهة جدًا تُعلّمه أخطاءها أو تجعله ينسخ تفاصيلها حرفيًا.

**مثال من تطبيق التوصيل:** يضع المختبِر في التوجيه حالتين مكتوبتين بقالب الفريق: طلب بقيمة 20.00 دينار يحصل على توصيل مجاني، وطلب بقيمة 4.99 يُرفض لأنه تحت الحد الأدنى. ثم يطلب حالات لقاعدة عدد الوجبات (1–20) بالنمط نفسه.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Count the actual examples given to the model, not the number of outputs requested. “Write five test cases” with no example is still zero-shot.</p><p class="gx-ar" lang="ar" dir="rtl">احسب الأمثلة الفعلية المعطاة للنموذج، لا عدد المخرجات المطلوبة. «اكتب خمس حالات اختبار» بدون مثال يبقى Zero-shot.</p></aside>

### التوجيه الفوقي — Meta Prompting

**ما هو؟** تقنية **تستفيد من قدرة النموذج على توليد توجيهاته أو تحسينها**. في **دورة تكرارية**، يولّد الـ LLM توجيهات **يقيّمها المختبِر ويحسّنها**، ثم تُستخدم.

**لماذا يفيد؟** يذكر المنهج عدة أسباب:
- **يحسّن جودة التوجيه** بالاستفادة من معرفة النموذج بما يجعل التوجيه فعّالًا.
- **يفيد خصوصًا عندما تكون الكفاءة وتحسين التوجيه أمرين حاسمين**، لأنه **يقلّل الجهد اليدوي** في تصميم التوجيهات.
- إذا لم يكن المختبِر **متأكدًا من طريقة صياغة توجيه فعّال**، يستطيع أن **يشارك النموذج في إنشائه**.

هذا التعاون الأخير يسمّيه المنهج شكلًا من **الاقتران (Pairing)** مع أداة GenAI: المختبِر والذكاء الاصطناعي يعملان معًا بشكل تفاعلي لتحقيق هدف مشترك. وهو طريقة جديدة للتعاون مع أدوات AI تعزّز **الإنتاجية والتعلّم**، ليس في هندسة التوجيه فقط، بل أيضًا في **البرمجة الثنائية (pair programming)** و**الاختبار الثنائي (pair testing)**.

مثال: لا تعرف كيف تكتب توجيهًا جيدًا لمراجعة اكتمال تقرير اختبار. تطلب من النموذج: «صمّم لي توجيهًا يراجع تقارير إكمال الاختبار، وحدد المعلومات التي يحتاجها». يقترح النموذج توجيهًا بدور وقائمة فحص وتنسيق نتيجة. تراجعه أنت، وتحذف ما لا يناسب فريقك، وتضيف قيدًا مهمًا نسيه، ثم تستخدمه.

### الجمع بين التقنيات — Combining Techniques

يقول المنهج إن هذه التقنيات **يمكن استخدامها معًا بفعالية لتحسين نتائج الـ LLM**، ويفصّل ذلك في القسم 2.2.5. مثلًا: توجيه فوقي يقترح التوجيه، ثم أمثلة تثبّت الصيغة، ثم سلسلة بنقاط مراجعة.

<figure class="gx-figure" aria-label="Combining the three techniques: meta prompting creates the prompt, few-shot fixes the format, chaining adds review points."><div class="gx-flow-row"><span class="gx-flow-node">Meta<small>draft the prompt</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Few-shot<small>fix the format</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Chaining<small>review each step</small></span></div><figcaption>One way to combine the techniques on a single task.</figcaption></figure>

### لا تخلط بين — Don't Confuse

| | Prompt chaining | Few-shot | Meta prompting |
|---|---|---|---|
| Core idea | Several prompts, checked step by step | Examples inside one prompt | The model writes or improves the prompt |
| Who checks? | Tester or automated check after each step | Tester reviews the output | Tester evaluates and refines the generated prompt |
| Clue in a question | “Wait for my review before the next step” | “Here are examples, follow the pattern” | “Design a prompt for…” |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app testers needed test cases for the order cancellation story. They used meta prompting to get a first prompt, added two correct cases in the team's format as examples, and then split the work into a chain: ambiguities first, then conditions, then cases. The review after the first step found that the story did not say what happens to a card payment after cancellation.</p><p class="gx-ar" lang="ar" dir="rtl">احتاج مختبرو تطبيق التوصيل إلى حالات اختبار لقصة إلغاء الطلب. استخدموا التوجيه الفوقي للحصول على توجيه أولي، وأضافوا إليه حالتين صحيحتين بقالب الفريق كأمثلة، ثم قسّموا العمل إلى سلسلة: الغموض أولًا، ثم الشروط، ثم الحالات. وكشفت المراجعة بعد الخطوة الأولى أن القصة لا تذكر ما يحدث للدفع بالبطاقة بعد الإلغاء.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Match technique to clue. “Break into steps with a check in between” → prompt chaining. “Include examples to fix the format” → few-shot (or one-shot with one example). “Ask the model to create or improve the prompt” → meta prompting.</p><p class="gx-ar" lang="ar" dir="rtl">طابق التقنية مع العلامة. «قسّم إلى خطوات مع مراجعة بينها» ← تسلسل التوجيهات. «ضمّن أمثلة لتثبيت الصيغة» ← Few-shot (أو One-shot بمثال واحد). «اطلب من النموذج إنشاء التوجيه أو تحسينه» ← التوجيه الفوقي.</p></aside>

### ماذا ستشاهد وتمارس — Demonstration and Exercise

في **HO-2.1.2a** (مستوى H0) تشاهد التقنيات الثلاث تُطبَّق على روبوت محادثة في مهام اختبار محددة، ويُناقش كيف تساهم كل تقنية في **دقة** مخرجات الـ LLM و**اكتمالها**. وفي **HO-2.1.2b** (مستوى H1) تقرأ أمثلة توجيهات وتتعرّف على التقنية المستخدمة في كل منها، مثل تسلسل التوجيهات والتوجيه بمثال واحد والتوجيه الفوقي، مع ملاحظة السمات التي تميّز كل تقنية. يستخدم التمرين قصة التسجيل في منصة «تعلّم».

<section class="gx-lab" data-lab="HO-2.1.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Demo + Exercise · Name the Technique</span><span class="gx-ar" lang="ar" dir="rtl">عرض توضيحي وتمرين · سمِّ التقنية</span></span><span class="gx-lab-meta">HO-2.1.2a · H0 / HO-2.1.2b · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> watch the three techniques on the same sign-up story, then recognise which technique each sample uses.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> مشاهدة التقنيات الثلاث على قصة التسجيل نفسها، ثم التعرّف على التقنية المستخدمة في كل مثال.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr"><em>“List only the ambiguities. Wait for my review before writing any test cases.”</em> — identify the technique.</span><span class="gx-ar" lang="ar" dir="rtl"><em>«اذكر الغموض فقط. انتظر مراجعتي قبل كتابة أي حالات اختبار.»</em> حدّد التقنية.</span></li><li><span class="gx-en" lang="en" dir="ltr"><em>“Here is one user story with one correct scenario. Follow the same pattern for the new story.”</em> — identify the technique.</span><span class="gx-ar" lang="ar" dir="rtl"><em>«هذه قصة مستخدم واحدة مع سيناريو صحيح واحد. اتبع النمط نفسه للقصة الجديدة.»</em> حدّد التقنية.</span></li><li><span class="gx-en" lang="en" dir="ltr"><em>“Design a prompt that reviews the completeness of sign-up test cases, and state what information it needs.”</em> — identify the technique.</span><span class="gx-ar" lang="ar" dir="rtl"><em>«صمّم توجيهًا يراجع اكتمال حالات اختبار التسجيل، واذكر المعلومات التي يحتاجها.»</em> حدّد التقنية.</span></li><li><span class="gx-en" lang="en" dir="ltr">Change one phrase in any prompt and record its effect on accuracy and completeness.</span><span class="gx-ar" lang="ar" dir="rtl">غيّر عبارة واحدة في أي توجيه وسجّل أثرها على الدقة والاكتمال.</span></li></ol><details class="gx-lab-answer"><summary>Model answer · <span class="gx-ar-inline" lang="ar" dir="rtl">الإجابة النموذجية</span></summary><p><span class="gx-en" lang="en" dir="ltr">1 is prompt chaining with a review point. 2 is one-shot prompting (one example). 3 is meta prompting. A request to improve a prompt is meta prompting; it also becomes few-shot when you add several input–output examples. Techniques can be combined.</span><span class="gx-ar" lang="ar" dir="rtl">الأول تسلسل توجيهات بنقطة مراجعة. الثاني One-shot (مثال واحد). الثالث توجيه فوقي. طلب تحسين توجيه هو توجيه فوقي؛ ويصبح أيضًا Few-shot عندما تضيف عدة أمثلة مدخلات ومخرجات. ويمكن الجمع بين التقنيات.</span></p></details></div></section>

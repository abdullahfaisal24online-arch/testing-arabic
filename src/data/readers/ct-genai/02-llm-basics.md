---
order: 2
slug: "1-1-2"
chapter: 1
group: "1.1"
section: "1.1.2"
title: "Basics of Generative AI and LLMs"
titleAr: "أساسيات الذكاء التوليدي والنماذج اللغوية الكبيرة"
objectives: "GenAI-1.1.2 · K2 / HO-1.1.2 · H1"
minutes: 12
lo:
  GenAI-1.1.2: "Explain at a basic level how generative AI and large language models work."
  HO-1.1.2: "Tokenize sample text and evaluate token counts for a testing task."
loAr:
  GenAI-1.1.2: "تشرح بشكل مبسّط كيف يعمل الذكاء التوليدي والنماذج اللغوية الكبيرة."
  HO-1.1.2: "تقطّع نصًا تجريبيًا إلى رموز وتقيّم عدد الرموز في مهمة اختبار."
takeaways:
  - "Tokenization splits text into tokens; word count and token count rarely match."
  - "Embeddings turn tokens into vectors, and the Transformer processes the relations between them."
  - "During inference the model predicts the next token repeatedly to build the answer."
  - "The context window caps the context a model can consider, measured in tokens."
  - "Output is probabilistic: one successful run does not prove reliability, so verification is part of the job."
takeawaysAr:
  - "التقطيع إلى رموز يقسّم النص إلى Tokens، ونادرًا ما يتساوى عدد الكلمات مع عدد الرموز."
  - "التضمينات تحوّل الرموز إلى متجهات، والـ Transformer يعالج العلاقات بينها."
  - "أثناء الاستدلال يتوقّع النموذج الرمز التالي مرة بعد مرة ليبني الإجابة."
  - "نافذة السياق تحدّ كمية السياق التي يأخذها النموذج بعين الاعتبار، وتُقاس بالرموز."
  - "الناتج احتمالي: نجاح تجربة واحدة لا يثبت الموثوقية، لذلك التحقق جزء أساسي من العمل."
terms:
  - en: "Token"
    ar: "رمز"
    def: "The smallest unit of text a model processes: a character, part of a word, or a whole word."
    defAr: "أصغر وحدة نصية يعالجها النموذج: حرف، أو جزء من كلمة، أو كلمة كاملة."
    match: ["Tokens", "Token"]
  - en: "Tokenization"
    ar: "التقطيع إلى رموز"
    def: "Splitting text into tokens. The split depends on the tokenizer, the language and the text itself."
    defAr: "تقسيم النص إلى رموز. يعتمد التقسيم على أداة الترميز واللغة والنص نفسه."
  - en: "Embeddings"
    ar: "التضمينات المتجهية"
    def: "Numeric vectors that represent tokens in a multi-dimensional space and capture semantic and contextual relations."
    defAr: "متجهات عددية تمثّل الرموز في فضاء متعدد الأبعاد، وتحمل العلاقات الدلالية والسياقية بينها."
  - en: "Transformer"
    ar: "بنية المحوّل"
    def: "The model architecture that processes context and learns relations between tokens."
    defAr: "بنية النموذج التي تعالج السياق وتتعلّم العلاقات بين الرموز."
  - en: "Inference"
    ar: "الاستدلال"
    def: "Running a trained model to produce output, predicting the next token again and again to build the response."
    defAr: "تشغيل نموذج مدرَّب لإنتاج ناتج، بتوقّع الرمز التالي مرة بعد مرة لبناء الاستجابة."
  - en: "Context Window"
    ar: "نافذة السياق"
    def: "The limit on how much context a model can consider at once, measured in tokens."
    defAr: "حدّ كمية السياق التي يستطيع النموذج أخذها بعين الاعتبار مرة واحدة، ويُقاس بالرموز."
  - en: "Non-Deterministic Behavior"
    ar: "السلوك غير الحتمي"
    def: "The same input can produce different outputs because generation is probabilistic."
    defAr: "المدخل نفسه قد يعطي نواتج مختلفة لأن التوليد احتمالي."
  - en: "Generative Pre-trained Transformer"
    ar: "المحوّل التوليدي المدرّب مسبقًا"
    def: "GPT. The deep-learning architecture that many foundation LLMs are based on."
    defAr: "GPT. بنية التعلّم العميق التي تقوم عليها كثير من النماذج اللغوية الأساسية."
    match: ["Generative Pre-trained Transformer"]
  - en: "SLM"
    ar: "نموذج لغوي صغير"
    def: "Small Language Model. Fewer parameters, lighter to run, focused on specific needs."
    defAr: "نموذج لغوي صغير. عدد معاملات أقل، أخف في التشغيل، ومركّز على احتياجات محددة."
    match: ["SLMs", "SLM"]
---
النماذج اللغوية الكبيرة تُدرَّب على مجموعات ضخمة من النصوص، مثل الكتب والمقالات والمواقع، لتتعلّم العلاقات والأنماط اللغوية. يعرض المنهج عملها بالاستناد إلى بنية **Generative Pre-trained Transformer (GPT)**، والاسم نفسه يشرح الفكرة:

- **Generative:** يولّد محتوى جديدًا.
- **Pre-trained:** دُرِّب مسبقًا على بيانات عامة واسعة قبل أن تستخدمه أنت.
- **Transformer:** نوع البنية العصبية التي يعتمد عليها، وسنشرحها بعد قليل.

توجد أيضًا **نماذج لغوية صغيرة (Small Language Models / SLMs)**، بعدد أقل من المعاملات (Parameters). هي أخف في التشغيل وأقل كلفة، ومصمّمة لحلول مركّزة على احتياجات محددة. النموذج الأكبر ليس دائمًا الأنسب؛ مهمة ضيقة ومتكررة قد يكفيها نموذج صغير، وهذا موضوع نعود له في الفصل الخامس.

تستطيع هذه النماذج التعامل مع دقائق اللغة وإنتاج محتوى مترابط. ومفهومان أساسيان يجعلان ذلك ممكنًا: **التقطيع إلى رموز** و**التضمينات**؛ فهما يحوّلان اللغة إلى صورة عددية يستطيع النموذج معالجتها.

لفهم أثر صياغة طلبك وطوله على النتيجة، تتبّع رحلة النص داخل النموذج عبر المفاهيم التالية.

### التقطيع إلى رموز — Tokenization

أول ما يحدث لنصّك أنه يُقسّم إلى وحدات تسمّى **Tokens**. قد تكون الوحدة حرفًا، أو جزءًا من كلمة، أو كلمة كاملة؛ لذلك **عدد الكلمات لا يساوي بالضرورة عدد Tokens**. يختلف التقطيع باختلاف أداة الترميز (Tokenizer) واللغة والنص نفسه. عند معالجة جملة، يقطّعها النموذج أولًا ليفهم كل رمز على حدة، مع الحفاظ على السياق العام للجملة. ويشمل ذلك علامات الترقيم أيضًا، فقد تكون الفاصلة أو النقطة رمزًا مستقلًا.

<figure class="gx-figure gx-tokens" aria-label="Example: four words split into five tokens"><div class="gx-tokens-row"><span class="gx-tokens-label">Input</span><span class="gx-tokens-input">Verify the login page</span></div><div class="gx-tokens-row"><span class="gx-tokens-label">Tokens</span><span class="gx-token">Ver</span><span class="gx-token gx-token--alt">ify</span><span class="gx-token">·the</span><span class="gx-token gx-token--alt">·login</span><span class="gx-token">·page</span></div><div class="gx-tokens-row gx-tokens-count"><span class="gx-tokens-label"></span><span>4 words</span><span class="gx-accent">5 tokens</span></div><figcaption>Illustrative split. Actual tokens depend on the tokenizer.</figcaption></figure>

لماذا يهمك هذا كمختبِر؟ لثلاثة أسباب عملية:

1. **حدود النموذج تُقاس بالـ Tokens لا بالكلمات.** الطلب الذي يبدو قصيرًا قد يستهلك سياقًا أكثر مما تتوقع.
2. **الكلفة غالبًا تُحسب بالـ Tokens.** في الخدمات التجارية تدفع على عدد رموز الإدخال والإخراج.
3. **اللغة والمحتوى يغيّران العدد.** الجملة «اختبر تسجيل الدخول» ثلاث كلمات، لكن لا نستطيع تحديد عدد رموزها دون معرفة الـ Tokenizer. وكثيرًا ما يختلف العدد بين العربية والإنجليزية للمعنى نفسه، ويتغيّر أكثر عند إضافة شيفرة أو JSON.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">احذر أي خيار يفترض أن كل كلمة تساوي رمزًا واحدًا، أو أن هناك نسبة ثابتة بين الكلمات والرموز. عدد الرموز يعتمد على أداة الترميز واللغة والمحتوى.</p><p class="gx-en" lang="en" dir="ltr">Be careful with any option that assumes one word equals one token, or a fixed word-to-token ratio. Token counts depend on the tokenizer, the language and the content.</p></aside>

### التضمينات المتجهية — Embeddings

بعد التقطيع، يتحول كل رمز إلى تمثيل عددي يسمّى **Vector**، أي قائمة طويلة من الأرقام تحدد موقعه في فضاء متعدد الأبعاد. هذه الأرقام تحمل علاقات دلالية ونحوية وسياقية تعلّمها النموذج أثناء التدريب. كلما تقاربت تمثيلات رموز في هذا الفضاء، دلّ ذلك غالبًا على معانٍ أو أدوار سياقية متشابهة.

تخيّل خريطة: الكلمات المتقاربة في المعنى تقع متجاورة. «Bug» و«Defect» و«عيب» قد تقع في منطقة متقاربة في سياق الاختبار، بينما «Release» في منطقة أخرى. هذا التقارب هو ما يسمح للنموذج بفهم العلاقات بين الكلمات، والحفاظ على السياق، وإنتاج ردود مترابطة ومناسبة. فيفهم مثلًا أن سؤالك عن «عيب» مرتبط بسؤال آخر عن «Defect».

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-ar">خطأ شائع</span><span class="gx-en" lang="en" dir="ltr">Common mistake</span></p><p class="gx-ar">اعتبار تقارب التضمينات دليلًا على الصحة. تقارب المتجهات يعني استخدامًا متشابهًا، لا أن مصطلح النموذج أو استنتاجه صحيح لمشروعك.</p><p class="gx-en" lang="en" dir="ltr">Treating closeness of embeddings as proof of correctness. Similar vectors mean related usage, not that the model's term or conclusion is right for your project.</p></aside>

ستقابل الـ Embeddings مرة أخرى في الفصل الرابع، لأنها أساس البحث الدلالي في أنظمة RAG.

### بنية المحوّل — Transformer

**Transformer** بنية شبكة عصبية تتفوق في المهام اللغوية لأنها تعالج تسلسلات نصية طويلة وتتعلّم العلاقات بين الرموز، حتى البعيدة منها داخل النص. فهي تفهم مثلًا أن «هو» في نهاية فقرة يعود على «النظام» في أولها.

أثناء **الاستدلال (Inference)**، أي حين تستخدم النموذج المدرَّب، يعمل النموذج بطريقة بسيطة في جوهرها: يتوقّع **الرمز التالي** الأكثر ملاءمة استنادًا إلى المدخل والرموز التي ولّدها حتى الآن، ثم يضيفه ويكرر العملية رمزًا بعد رمز حتى تكتمل الاستجابة.

<figure class="gx-figure" aria-label="Inference loop: input and generated tokens, predict next token, append, repeat"><div class="gx-flow-row"><span class="gx-flow-node">Input + tokens so far</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Predict next token</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Append<small>repeat until done</small></span></div><figcaption>Generation is a loop of next-token predictions, not a lookup of a stored answer.</figcaption></figure>

هذا يفسّر لماذا تكون إجابات النموذج سلسة لغويًا: هو ينتج نصًا **معقولًا إحصائيًا** بناءً على بيانات التدريب والتوجيه. لكن المعقول ليس بالضرورة صحيحًا.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-ar">خطأ شائع</span><span class="gx-en" lang="en" dir="ltr">Common mistake</span></p><p class="gx-ar">اعتبار الإجابة السلسة إجابةً صحيحة. قد يكتب النموذج تقريرًا مقنعًا يتضمن متطلبًا غير موجود أصلًا. السلاسة ليست دقة، وليست توافقًا مع أساس الاختبار.</p><p class="gx-en" lang="en" dir="ltr">Treating a fluent answer as a correct one. A model can write a convincing report that includes a requirement that does not exist. Fluency is not accuracy, and it is not alignment with the test basis.</p></aside>

### نافذة السياق — Context Window

هي كمية النص السابق التي يأخذها النموذج بعين الاعتبار عند توليد الاستجابة، وتُقاس بالـ Tokens. النافذة الأكبر تساعد النموذج على الحفاظ على الترابط في نصوص أطول، مثل متطلبات طويلة أو سجلات اختبار، لكنها تزيد التعقيد الحسابي وتحتاج موارد ووقتًا أكبر.

حدود المدخل والمخرج وتوزيع السعة تختلف بين النماذج. في كثير من النماذج يتشارك المدخل والمخرج الميزانية نفسها، فإذا ملأت النافذة بالمدخلات لم يبقَ مكان كافٍ للإجابة. لذلك:

- راجع حدود النموذج الذي تستخدمه قبل إرسال وثائق طويلة.
- احجز مساحة كافية للإجابة.
- أرسل المعلومات المرتبطة بالمهمة فقط، بدل سجلات كاملة لا علاقة لمعظمها بالسؤال.

النافذة الكبيرة لا تضمن أن النموذج سيستخدم كل معلومة فيها بدقة.

<figure class="gx-figure gx-budget" aria-label="Hypothetical context budget: 8,000 tokens. Prompt 6,200 plus reserved answer 1,500 leaves 300. Adding a 1,000-token log goes 700 over."><div class="gx-budget-head"><span>Context window · 8,000 tokens</span><span class="gx-danger">+700 over</span></div><div class="gx-budget-bar"><span class="gx-budget-prompt" style="flex:62">Prompt · 6,200</span><span class="gx-budget-answer" style="flex:15">Answer · 1,500</span><span class="gx-budget-free" style="flex:3"></span></div><div class="gx-budget-bar gx-budget-extra"><span style="flex:70"></span><span class="gx-budget-log" style="flex:10">+ Log · 1,000</span></div><figcaption>Hypothetical budget for practice, not a real model limit.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-ar">من الواقع العملي</span><span class="gx-en" lang="en" dir="ltr">In practice</span></p><p class="gx-ar">بدل لصق سجل تشغيل كامل، أرسل الأسطر المحيطة بالفشل مع المتطلب المرتبط بها. النافذة الأكبر لا تعني أن عليك ملأها.</p><p class="gx-en" lang="en" dir="ltr">Instead of pasting a full run log, send the lines around the failure together with the requirement they relate to. A bigger window does not mean you should fill it.</p></aside>

### السلوك غير الحتمي — Non-Deterministic Behavior

قد تختلف النتيجة عند تكرار المدخل نفسه، لأن آلية الاستدلال احتمالية: في كل خطوة يختار النموذج الرمز التالي من بين عدة احتمالات، لا من إجابة ثابتة. كما أن إعدادات النموذج (Hyperparameters) مثل درجة العشوائية تؤثر في هذا الاختيار.

النتيجة العملية للمختبِر مهمة جدًا: **لا يكفي نجاح طلب واحد للحكم على موثوقية استخدامه.** إذا جرّبت توجيهًا مرة وأعطاك حالات ممتازة، فقد يعطيك في المرة التالية حالات ناقصة. خفض العشوائية قد يزيد الاتساق، لكنه لا يضمن تطابق النتائج أو صحتها. نناقش وسائل التخفيف بالتفصيل في الفصل الثالث.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">اعرف مصدرَي السلوك غير الحتمي: الاستدلال الاحتمالي، وإعدادات المعاملات (Hyperparameters). وتذكّر أن الناتج الثابت ليس بالضرورة ناتجًا صحيحًا.</p><p class="gx-en" lang="en" dir="ltr">Know the two sources of non-determinism: probabilistic inference and hyperparameter settings. And remember that consistent output is not the same as correct output.</p></aside>

<section class="gx-lab" data-lab="HO-1.1.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-ar">تمرين عملي · قارن طول توجيهين</span><span class="gx-en" lang="en" dir="ltr">Lab · Compare Two Prompt Lengths</span></span><span class="gx-lab-meta">HO-1.1.2 · H1</span></header><div class="gx-lab-body"><p><span class="gx-ar"><strong>الهدف:</strong> مقارنة طول المدخل في توجيهين لمهمة توليد حالات اختبار.</span><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> compare the input length of two prompts for a test-case generation task.</span></p><ol class="gx-lab-steps"><li><span class="gx-ar">افتح أداة ترميز تناسب نموذجًا تختاره وأدخل: <em>«أنشئ حالات اختبار لتسجيل الدخول»</em>.</span><span class="gx-en" lang="en" dir="ltr">Open a tokenizer that matches a model you choose and enter: <em>“Generate test cases for login.”</em></span></li><li><span class="gx-ar">أضف قصة المستخدم ومعايير القبول وقيود الحقول وصيغة المخرجات. سجّل عدد الرموز في هذا التوجيه الثاني.</span><span class="gx-en" lang="en" dir="ltr">Add the user story, acceptance criteria, field constraints and output format. Record the token count of this second prompt.</span></li><li><span class="gx-ar">جرّب نصًا عربيًا ونصًا إنجليزيًا بالمعنى نفسه، ثم نصًا يحتوي بيانات JSON. سجّل القيم الفعلية، ولا تفترض أنها متساوية.</span><span class="gx-en" lang="en" dir="ltr">Try an Arabic text and an English text with the same meaning, then a text that contains JSON data. Record the actual values. Do not assume they are equal.</span></li><li><span class="gx-ar">قارن الأعداد بحدود النموذج، وقرر ما يمكن حذفه دون خسارة سياق ضروري.</span><span class="gx-en" lang="en" dir="ltr">Compare the counts with the model limits and decide what you can remove without losing essential context.</span></li></ol><p class="gx-lab-subhead"><span class="gx-ar">مثال محلول (أرقام افتراضية)</span><span class="gx-en" lang="en" dir="ltr">Worked example (hypothetical numbers)</span></p><p><span class="gx-ar">ميزانية مشتركة من 8,000 رمز، وتوجيه من 6,200 رمز، و1,500 رمز محجوزة للإجابة؛ يتبقى 300. إضافة سجل من 1,000 رمز تتجاوز الميزانية بـ 700. الحل: اختصار المدخل أو تقسيم المهمة مع الحفاظ على المعلومات الأساسية.</span><span class="gx-en" lang="en" dir="ltr">A shared budget of 8,000 tokens, a 6,200-token prompt and 1,500 tokens reserved for the answer leave 300. Adding a 1,000-token log exceeds the budget by 700. Fix it by shortening the input or splitting the task while keeping the essential information.</span></p><details class="gx-lab-answer"><summary>كيف يبدو الحل الجيد <span class="gx-en-inline" lang="en">· What good looks like</span></summary><p><span class="gx-ar">تستطيع أن تفسّر لماذا يختلف عدد الرموز بين المدخلات، وتحسب أثر الطول على حدّ السياق، وتقرر ما يحتاجه النموذج فعلًا للمهمة. الرقم نفسه ليس الهدف؛ الهدف هو القرار الذي يحافظ على السياق والكفاءة.</span><span class="gx-en" lang="en" dir="ltr">You can explain why token counts differ between inputs, calculate how length affects the context limit, and decide what the model actually needs for the task. The number itself is not the goal; the decision that keeps context and efficiency is.</span></p></details></div></section>

---
order: 2
slug: "1-1-2"
chapter: 1
group: "1.1"
section: "1.1.2"
title: "Basics of Generative AI and LLMs"
titleAr: "أساسيات الذكاء التوليدي والنماذج اللغوية الكبيرة"
objectives: "GenAI-1.1.2 · K2 / HO-1.1.2 · H1"
minutes: 18
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
  - "A larger context window helps with long inputs such as test logs, but costs more computation and processing time."
takeawaysAr:
  - "التقطيع إلى رموز يقسّم النص إلى Tokens، ونادرًا ما يتساوى عدد الكلمات مع عدد الرموز."
  - "التضمينات تحوّل الرموز إلى متجهات، والـ Transformer يعالج العلاقات بينها."
  - "أثناء الاستدلال يتوقّع النموذج الرمز التالي مرة بعد مرة ليبني الإجابة."
  - "نافذة السياق تحدّ كمية السياق التي يأخذها النموذج بعين الاعتبار، وتُقاس بالرموز."
  - "الناتج احتمالي: نجاح تجربة واحدة لا يثبت الموثوقية، لذلك التحقق جزء أساسي من العمل."
  - "نافذة السياق الأكبر تساعد مع المدخلات الطويلة مثل سجلات الاختبار، لكنها تكلّف حسابًا ووقت معالجة أكبر."
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
  - en: "Hyperparameters"
    ar: "المعاملات الفائقة"
    def: "Settings chosen when running or training a model, not learned from data, such as the level of randomness used when picking the next token."
    defAr: "إعدادات تُختار عند تشغيل النموذج أو تدريبه ولا يتعلّمها من البيانات، مثل مستوى العشوائية عند اختيار الرمز التالي."
    match: ["Hyperparameters"]
---
لماذا يعطيك النموذج إجابة ممتازة اليوم وإجابة ناقصة غدًا للسؤال نفسه؟ ولماذا تبدو إجاباته واثقة حتى حين تكون خاطئة؟ الجواب في طريقة عمله من الداخل، وفهمها يجعلك تعرف أين تثق وأين تتحقق.

### من أين تأتي النماذج اللغوية الكبيرة؟ — Where LLMs Come From

النماذج اللغوية الكبيرة تُدرَّب على مجموعات ضخمة جدًا من البيانات، **مثل الكتب والمقالات والمواقع**، لتتعلّم العلاقات والأنماط اللغوية. ويعرض المنهج عملها بالاستناد إلى نموذج التعلّم العميق **Generative Pre-trained Transformer (GPT)**، والاسم نفسه يشرح الفكرة:

- **Generative:** يولّد محتوى جديدًا.
- **Pre-trained:** دُرِّب مسبقًا على بيانات عامة واسعة قبل أن تستخدمه أنت.
- **Transformer:** نوع البنية العصبية التي يعتمد عليها، وسنشرحها بعد قليل.

لاحظ ما تعنيه كلمة «مسبقًا» لك كمختبِر: النموذج تعلّم من نصوص عامة، لا من وثائق تطبيق التوصيل. هو يعرف ما هو «الكوبون» عمومًا، لكنه لا يعرف أن تطبيقكم يسمح بكوبون واحد فقط لكل طلب، إلا إذا ذكرت ذلك في توجيهك.

توجد أيضًا **نماذج لغوية صغيرة (Small Language Models / SLMs)**: نماذج مدمجة بعدد أقل من **المعاملات (parameters)** مقارنة بالنماذج الكبيرة، ومصمّمة لتقديم حلول GenAI **خفيفة ومركّزة**. مهمة ضيقة ومتكررة، مثل تصنيف رسائل خطأ الدفع، قد يكفيها نموذج صغير. والاختيار بين LLM وSLM موضوع نعود إليه في الفصل الخامس.

تستطيع هذه النماذج التعامل مع **دقائق اللغة (language nuances)** وإنتاج محتوى مترابط. ومفهومان أساسيان يجعلان ذلك ممكنًا: **التقطيع إلى رموز** و**التضمينات**؛ فهما يحوّلان اللغة إلى صورة عددية يستطيع النموذج معالجتها بكفاءة، لأن الشبكة العصبية لا تفهم الحروف، بل الأرقام.

### التقطيع إلى رموز — Tokenization

أول ما يحدث لنصّك أنه يُقسّم إلى وحدات أصغر تسمّى **Tokens**. قد تكون الوحدة صغيرة بحجم حرف، أو كبيرة بحجم جزء من كلمة أو كلمة كاملة؛ لذلك **عدد الكلمات لا يساوي بالضرورة عدد Tokens**. يختلف التقطيع باختلاف أداة الترميز (Tokenizer) واللغة والنص نفسه. عند معالجة جملة، يقطّعها النموذج أولًا ليفهم كل رمز على حدة، **مع الحفاظ على السياق العام** للجملة. ويشمل ذلك علامات الترقيم أيضًا، فقد تكون الفاصلة أو النقطة رمزًا مستقلًا.

<figure class="gx-figure gx-tokens" aria-label="Example: four words split into five tokens"><div class="gx-tokens-row"><span class="gx-tokens-label">Input</span><span class="gx-tokens-input">Verify the login page</span></div><div class="gx-tokens-row"><span class="gx-tokens-label">Tokens</span><span class="gx-token">Ver</span><span class="gx-token gx-token--alt">ify</span><span class="gx-token">·the</span><span class="gx-token gx-token--alt">·login</span><span class="gx-token">·page</span></div><div class="gx-tokens-row gx-tokens-count"><span class="gx-tokens-label"></span><span>4 words</span><span class="gx-accent">5 tokens</span></div><figcaption>Illustrative split. Actual tokens depend on the tokenizer.</figcaption></figure>

لماذا يهمك هذا كمختبِر؟ لثلاثة أسباب عملية:

1. **حدود النموذج تُقاس بالـ Tokens لا بالكلمات.** الطلب الذي يبدو قصيرًا قد يستهلك سياقًا أكثر مما تتوقع.
2. **الكلفة غالبًا تُحسب بالـ Tokens.** في الخدمات التجارية تدفع عمليًا على عدد رموز الإدخال والإخراج.
3. **اللغة والمحتوى يغيّران العدد.** واجهة تطبيق التوصيل بالعربية والإنجليزية؛ فالعبارة «أكّد الطلب» وما يقابلها «Confirm order» لهما المعنى نفسه، لكن لا تستطيع معرفة عدد رموز كل منهما دون تجربة الـ Tokenizer. وكثيرًا ما يختلف العدد بين اللغتين، ويتغيّر أكثر عند إضافة شيفرة أو JSON أو أرقام هواتف وعناوين.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Be careful with any option that assumes one word equals one token, or a fixed word-to-token ratio. Token counts depend on the tokenizer, the language and the content.</p><p class="gx-ar" lang="ar" dir="rtl">احذر أي خيار يفترض أن كل كلمة تساوي رمزًا واحدًا، أو أن هناك نسبة ثابتة بين الكلمات والرموز. عدد الرموز يعتمد على أداة الترميز واللغة والمحتوى.</p></aside>

### التضمينات المتجهية — Embeddings

بعد التقطيع، يتحول كل رمز إلى **متجه (vector)**، أي قائمة طويلة من الأرقام تحدد موقعه في **فضاء عالي الأبعاد**. هذه الأرقام تحمل العلاقات **الدلالية** (المعنى) و**النحوية** (دور الكلمة في الجملة) و**السياقية** (كيف تُستخدم مع غيرها) التي تعلّمها النموذج أثناء التدريب، بصيغة مناسبة لمعالجة نماذج GenAI.

تخيّل خريطة: الرموز ذات المعاني أو الأدوار السياقية المتشابهة تقع متجاورة. في سياق الاختبار قد تقع «defect» و«bug» و«failure» في منطقة متقاربة، بينما تقع «delivery» و«driver» و«address» في منطقة أخرى. هذا **التقارب** هو ما يسمح للنموذج، كما يقول المنهج، بفهم العلاقات بين الكلمات، والحفاظ على السياق، وإنتاج ردود مترابطة ومناسبة. فإذا سألت عن «bug في الدفع بالمحفظة»، فهم النموذج أن سؤالك قريب من تقرير سابق عن «defect في digital wallet» رغم اختلاف الكلمات.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating closeness of embeddings as proof of correctness. Similar vectors mean related usage, not that the model's term or conclusion is right for your project.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار تقارب التضمينات دليلًا على الصحة. تقارب المتجهات يعني استخدامًا متشابهًا، لا أن مصطلح النموذج أو استنتاجه صحيح لمشروعك.</p></aside>

ستقابل الـ Embeddings مرة أخرى في الفصل الرابع، لأنها أساس البحث الدلالي في أنظمة RAG.

### بنية المحوّل — Transformer

تعتمد النماذج اللغوية الكبيرة على بنية شبكة عصبية تسمى **نموذج المحوّل (transformer model)**. تتفوق هذه البنية في المهام اللغوية لأنها **تعالج سياق تسلسلات نصية طويلة، وتتعلّم كيف ترتبط الرموز ببعضها**، حتى البعيدة منها داخل النص. فهي تفهم مثلًا أن «هو» في نهاية فقرة يعود على «الطلب» في أولها.

أثناء **الاستدلال (Inference)**، أي حين تستخدم النموذج المدرَّب، يعمل النموذج بطريقة بسيطة في جوهرها: **يتوقّع الرمز التالي** في التسلسل مستفيدًا من العلاقات التي تعلّمها، استنادًا إلى المدخل والرموز التي ولّدها حتى الآن، ثم يضيفه ويكرر العملية رمزًا بعد رمز حتى تكتمل الاستجابة.

<figure class="gx-figure" aria-label="Inference loop: input and generated tokens, predict next token, append, repeat"><div class="gx-flow-row"><span class="gx-flow-node">Input + tokens so far</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Predict next token</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Append<small>repeat until done</small></span></div><figcaption>Generation is a loop of next-token predictions, not a lookup of a stored answer.</figcaption></figure>

هذا يفسّر لماذا تكون إجابات النموذج سلسة لغويًا: هو ينتج نصًا **معقولًا إحصائيًا** بناءً على بيانات التدريب والتوجيه. ويختم المنهج هذه الفكرة بجملة يجب أن تحفظها: **المعقول ليس بالضرورة صحيحًا (plausible is not necessarily correct)**. إذا طلبت النتيجة المتوقعة لطلب قيمته 22.00 دينارًا مع كوبون خصم 10%، فقد يجيب النموذج بثقة أن رسوم التوصيل 1.50 دينار لأن القيمة بعد الخصم 19.80؛ إجابة «معقولة» لغويًا ومنطقيًا، لكنها خاطئة لأن قاعدة التطبيق تفحص حد التوصيل المجاني على القيمة قبل الخصم.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating a fluent answer as a correct one. A model can write a convincing report that includes a requirement that does not exist. Fluency is not accuracy, and it is not alignment with the test basis.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار الإجابة السلسة إجابةً صحيحة. قد يكتب النموذج تقريرًا مقنعًا يتضمن متطلبًا غير موجود أصلًا. السلاسة ليست دقة، وليست توافقًا مع أساس الاختبار.</p></aside>

### السلوك غير الحتمي — Non-Deterministic Behavior

قد تختلف النتيجة عند تكرار المدخل نفسه. يرجع المنهج ذلك أساسًا إلى مصدرين: **الطبيعة الاحتمالية لآلية الاستدلال**، إذ يختار النموذج في كل خطوة الرمز التالي من بين عدة احتمالات لا من إجابة ثابتة؛ و**إعدادات المعاملات الفائقة (hyperparameters)** مثل درجة العشوائية التي تؤثر في هذا الاختيار. هذه العشوائية المتأصلة قد تؤدي إلى اختلاف النواتج حتى عند تقديم المدخل نفسه عدة مرات.

النتيجة العملية للمختبِر مهمة جدًا: **لا يكفي نجاح طلب واحد للحكم على موثوقية استخدامه.** قد يعطيك التوجيه نفسه اثنتي عشرة حالة اختبار للكوبونات في الصباح، تشمل الكوبون المنتهي، ثم تسع حالات بعد الظهر تنسى هذه الحالة تمامًا. خفض العشوائية قد يزيد الاتساق، لكنه لا يضمن تطابق النتائج أو صحتها. نناقش وسائل التخفيف بالتفصيل في الفصل الثالث.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the two sources of non-determinism: probabilistic inference and hyperparameter settings. And remember that consistent output is not the same as correct output.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف مصدرَي السلوك غير الحتمي: الطبيعة الاحتمالية لآلية الاستدلال (inference)، وإعدادات المعاملات (Hyperparameters). وتذكّر أن الناتج الثابت ليس بالضرورة ناتجًا صحيحًا.</p></aside>

### نافذة السياق — Context Window

**نافذة السياق** هي كمية النص السابق التي يستطيع النموذج أخذها بعين الاعتبار عند توليد الاستجابة، **وتُقاس بالـ Tokens**. وكل ما ترسله، من تعليمات وقصص مستخدم وسجلات، يُحسب من هذه السعة.

يذكر المنهج الجانبين معًا. **الإيجابي:** النافذة الأكبر تسمح للنموذج بالحفاظ على الترابط في نصوص أطول، **مثل تحليل سجلات اختبار كبيرة**. **والثمن:** زيادة عدد الرموز في النافذة تزيد **التعقيد الحسابي ووقت المعالجة** اللازمين ليعمل النموذج بفعالية.

عمليًا، تختلف حدود المدخل والمخرج بين النماذج، وفي كثير منها يتشارك المدخل والمخرج الميزانية نفسها، فإذا ملأت النافذة بالمدخلات لم يبقَ مكان كافٍ للإجابة. لذلك:

- راجع حدود النموذج الذي تستخدمه قبل إرسال وثائق طويلة.
- احجز مساحة كافية للإجابة.
- أرسل المعلومات المرتبطة بالمهمة فقط، بدل سجلات كاملة لا علاقة لمعظمها بالسؤال.

والنافذة الكبيرة لا تضمن أن النموذج سيستخدم كل معلومة فيها بدقة.

<figure class="gx-figure gx-budget" aria-label="Hypothetical context budget: 8,000 tokens. Prompt 6,200 plus reserved answer 1,500 leaves 300. Adding a 1,000-token log goes 700 over."><div class="gx-budget-head"><span>Context window · 8,000 tokens</span><span class="gx-danger">+700 over</span></div><div class="gx-budget-bar"><span class="gx-budget-prompt" style="flex:62">Prompt · 6,200</span><span class="gx-budget-answer" style="flex:15">Answer · 1,500</span><span class="gx-budget-free" style="flex:3"></span></div><div class="gx-budget-bar gx-budget-extra"><span style="flex:70"></span><span class="gx-budget-log" style="flex:10">+ Log · 1,000</span></div><figcaption>Hypothetical budget for practice, not a real model limit.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A delivery app tester wanted to know why some orders stay in Preparing. Pasting the whole night's backend log filled most of the window and the answer missed the key lines. Sending only the entries for three affected orders, plus the order-state rules, gave a shorter, faster and more useful answer. A bigger window does not mean you should fill it.</p><p class="gx-ar" lang="ar" dir="rtl">أراد مختبِر في تطبيق التوصيل معرفة لماذا تبقى بعض الطلبات في حالة Preparing. لصق سجل الخادم لليلة كاملة ملأ معظم النافذة، وأغفلت الإجابة الأسطر المهمة. أما إرسال سجلات ثلاثة طلبات متأثرة فقط مع قواعد حالات الطلب فأعطى إجابة أقصر وأسرع وأنفع. النافذة الأكبر لا تعني أن عليك ملأها.</p></aside>

### لا تخلط بين — Don't Confuse

| Concept | What it is | Measured in | Why a tester cares |
| --- | --- | --- | --- |
| Token | A unit of text after splitting | Count of tokens | Limits and cost are counted in tokens |
| Embedding | A vector that represents a token's meaning | Numbers in a high-dimensional space | Explains how related terms are linked |
| Context window | How much preceding text the model considers | Tokens | Long inputs may not fit; more tokens = slower |
| Inference | Using the trained model to generate output | Next-token predictions | Output is plausible, not guaranteed correct |
| Non-determinism | Different output for the same input | Variation between runs | One good run proves little |

<section class="gx-lab" data-lab="HO-1.1.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Compare Two Prompt Lengths</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · قارن طول توجيهين</span></span><span class="gx-lab-meta">HO-1.1.2 · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> compare the input length of two prompts for a test-case generation task.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> مقارنة طول المدخل في توجيهين لمهمة توليد حالات اختبار.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Open a tokenizer that matches a model you choose and enter: <em>“Generate test cases for login.”</em></span><span class="gx-ar" lang="ar" dir="rtl">افتح أداة ترميز تناسب نموذجًا تختاره وأدخل: <em>«أنشئ حالات اختبار لتسجيل الدخول»</em>.</span></li><li><span class="gx-en" lang="en" dir="ltr">Look at the output: how were words, sub-words and punctuation split into tokens? Note any patterns, then record the token count.</span><span class="gx-ar" lang="ar" dir="rtl">انظر إلى الناتج: كيف قُسّمت الكلمات وأجزاء الكلمات وعلامات الترقيم إلى رموز؟ دوّن أي أنماط تلاحظها، ثم سجّل عدد الرموز.</span></li><li><span class="gx-en" lang="en" dir="ltr">Add the user story, acceptance criteria, field constraints and output format. Record the token count of this second prompt.</span><span class="gx-ar" lang="ar" dir="rtl">أضف قصة المستخدم ومعايير القبول وقيود الحقول وصيغة المخرجات. سجّل عدد الرموز في هذا التوجيه الثاني.</span></li><li><span class="gx-en" lang="en" dir="ltr">Try an Arabic text and an English text with the same meaning, then a text that contains JSON data. Record the actual values. Do not assume they are equal.</span><span class="gx-ar" lang="ar" dir="rtl">جرّب نصًا عربيًا ونصًا إنجليزيًا بالمعنى نفسه، ثم نصًا يحتوي بيانات JSON. سجّل القيم الفعلية، ولا تفترض أنها متساوية.</span></li><li><span class="gx-en" lang="en" dir="ltr">Compare the counts with the model limits and decide what you can remove without losing essential context.</span><span class="gx-ar" lang="ar" dir="rtl">قارن الأعداد بحدود النموذج، وقرر ما يمكن حذفه دون خسارة سياق ضروري.</span></li></ol><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Worked example (hypothetical numbers)</span><span class="gx-ar" lang="ar" dir="rtl">مثال محلول (أرقام افتراضية)</span></p><p><span class="gx-en" lang="en" dir="ltr">A shared budget of 8,000 tokens, a 6,200-token prompt and 1,500 tokens reserved for the answer leave 300. Adding a 1,000-token log exceeds the budget by 700. Fix it by shortening the input or splitting the task while keeping the essential information.</span><span class="gx-ar" lang="ar" dir="rtl">ميزانية مشتركة من 8,000 رمز، وتوجيه من 6,200 رمز، و1,500 رمز محجوزة للإجابة؛ يتبقى 300. إضافة سجل من 1,000 رمز تتجاوز الميزانية بـ 700. الحل: اختصار المدخل أو تقسيم المهمة مع الحفاظ على المعلومات الأساسية.</span></p><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You can explain why token counts differ between inputs, calculate how length affects the context limit, and decide what the model actually needs for the task. The number itself is not the goal; the decision that keeps context and efficiency is.</span><span class="gx-ar" lang="ar" dir="rtl">تستطيع أن تفسّر لماذا يختلف عدد الرموز بين المدخلات، وتحسب أثر الطول على حدّ السياق، وتقرر ما يحتاجه النموذج فعلًا للمهمة. الرقم نفسه ليس الهدف؛ الهدف هو القرار الذي يحافظ على السياق والكفاءة.</span></p></details></div></section>

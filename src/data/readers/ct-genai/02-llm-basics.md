---
order: 2
slug: "1-1-2"
chapter: 1
group: "1.1"
section: "1.1.2"
title: "Basics of Generative AI and LLMs"
titleAr: "أساسيات الذكاء التوليدي والنماذج اللغوية الكبيرة"
objectives: "GenAI-1.1.2 · K2 / HO-1.1.2 · H1"
minutes: 7
lo:
  GenAI-1.1.2: "Explain at a basic level how generative AI and large language models work."
  HO-1.1.2: "Tokenize sample text and evaluate token counts for a testing task."
takeaways:
  - "Tokenization splits text into tokens; word count and token count rarely match."
  - "Embeddings turn tokens into vectors, and the Transformer processes the relations between them."
  - "The context window caps the context a model can consider, measured in tokens."
  - "Output is probabilistic: one successful run does not prove reliability, so verification is part of the job."
terms:
  - en: "Token"
    ar: "رمز"
    def: "The smallest unit of text a model processes: a character, part of a word, or a whole word."
    match: ["Tokens", "Token"]
  - en: "Tokenization"
    ar: "التقطيع إلى رموز"
    def: "Splitting text into tokens. The split depends on the tokenizer, the language and the text itself."
  - en: "Embeddings"
    ar: "التضمينات المتجهية"
    def: "Numeric vectors that represent tokens in a multi-dimensional space and capture semantic and contextual relations."
  - en: "Transformer"
    ar: "بنية المحوّل"
    def: "The model architecture that processes context and learns relations between tokens."
  - en: "Inference"
    ar: "الاستدلال"
    def: "Running a trained model to produce output, predicting the next token again and again to build the response."
  - en: "Context Window"
    ar: "نافذة السياق"
    def: "The limit on how much context a model can consider at once, measured in tokens."
  - en: "Non-Deterministic Behavior"
    ar: "السلوك غير الحتمي"
    def: "The same input can produce different outputs because generation is probabilistic."
  - en: "Generative Pre-trained Transformer"
    ar: "المحوّل التوليدي المدرّب مسبقًا"
    def: "GPT. The deep-learning architecture that many foundation LLMs are based on."
    match: ["Generative Pre-trained Transformer"]
  - en: "SLM"
    ar: "نموذج لغوي صغير"
    def: "Small Language Model. Fewer parameters, lighter to run, focused on specific needs."
    match: ["SLMs", "SLM"]
---
النماذج اللغوية الكبيرة تُدرَّب على مجموعات ضخمة من النصوص، مثل الكتب والمقالات والمواقع، لتتعلّم العلاقات والأنماط اللغوية. يعرض المنهج عملها بالاستناد إلى **Generative Pre-trained Transformer (GPT)**. توجد أيضًا **نماذج لغوية صغيرة (Small Language Models / SLMs)**، بعدد أقل من المعاملات، لتوفير حلول أخف ومركّزة على احتياجات محددة.

لفهم أثر صياغة طلبك وطوله، تتبّع المفاهيم التالية.

### التقطيع إلى رموز — Tokenization

يُقسّم النص إلى وحدات تسمّى **Tokens**. قد تكون الوحدة حرفًا أو جزءًا من كلمة أو كلمة كاملة؛ لذلك **عدد الكلمات لا يساوي بالضرورة عدد Tokens**. يختلف التقطيع باختلاف أداة الترميز واللغة والنص نفسه.

<figure class="gx-figure gx-tokens" aria-label="Example: four words split into five tokens"><div class="gx-tokens-row"><span class="gx-tokens-label">Input</span><span class="gx-tokens-input">Verify the login page</span></div><div class="gx-tokens-row"><span class="gx-tokens-label">Tokens</span><span class="gx-token">Ver</span><span class="gx-token gx-token--alt">ify</span><span class="gx-token">·the</span><span class="gx-token gx-token--alt">·login</span><span class="gx-token">·page</span></div><div class="gx-tokens-row gx-tokens-count"><span class="gx-tokens-label"></span><span>4 words</span><span class="gx-accent">5 tokens</span></div><figcaption>Illustrative split. Actual tokens depend on the tokenizer.</figcaption></figure>

الجملة «اختبر تسجيل الدخول» تحتوي ثلاث كلمات، لكن لا نستطيع تحديد عدد Tokens الفعلي دون معرفة الـTokenizer المستخدم. لا تعتمد معامل تحويل ثابتًا بين الكلمات والرموز، خصوصًا عند خلط العربية والإنجليزية أو إضافة شيفرة.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Be careful with any option that assumes one word equals one token, or a fixed word-to-token ratio. Token counts depend on the tokenizer, the language and the content.</p></aside>

### التضمينات المتجهية — Embeddings

تتحول الرموز إلى تمثيلات عددية تسمّى **Vectors** ضمن فضاء متعدد الأبعاد. تمثّل هذه القيم علاقات دلالية ونحوية وسياقية تعلّمها النموذج. كلما تقاربت تمثيلات رموز في هذا الفضاء، دلّ ذلك غالبًا على معانٍ أو أدوار سياقية متشابهة، مما يساعد على معالجة العلاقات داخل النص.

مثال توضيحي: قد يرتبط «عيب» و«Defect» في سياق الاختبار، لكن التشابه بين تمثيلات الكلمات لا يجعل النموذج مرجعًا يضمن صحة المصطلح أو الاستنتاج.

### بنية المحوّل — Transformer

تساعد بنية Transformer النموذج على معالجة السياق وتعلّم العلاقات بين الرموز. أثناء **الاستدلال (Inference)**، يتوقّع النموذج الرمز التالي استنادًا إلى المدخل والرموز التي سبق توليدها، ويتكرر ذلك لبناء الاستجابة.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Treating a fluent answer as a correct one. A model can write a convincing report that includes a requirement that does not exist. Fluency is not accuracy, and it is not alignment with the test basis.</p></aside>

### نافذة السياق — Context Window

هي كمية النص السابق التي يأخذها النموذج بعين الاعتبار عند توليد الاستجابة، وتُقاس بالـTokens. النافذة الأكبر تساعد النموذج على الحفاظ على الترابط في نصوص أطول، مثل متطلبات طويلة أو سجلات اختبار، لكنها تزيد التعقيد الحسابي وتحتاج موارد ووقتًا أكبر.

حدود المدخل والمخرج وتوزيع السعة تختلف بين النماذج. راجع حدود النموذج، ووفّر مساحة كافية للإجابة، وحدّد المعلومات المهمة بدل إرسال سجلات غير مرتبطة بالمهمة. النافذة الكبيرة لا تضمن استخدام كل معلومة بدقة.

<figure class="gx-figure gx-budget" aria-label="Hypothetical context budget: 8,000 tokens. Prompt 6,200 plus reserved answer 1,500 leaves 300. Adding a 1,000-token log goes 700 over."><div class="gx-budget-head"><span>Context window · 8,000 tokens</span><span class="gx-danger">+700 over</span></div><div class="gx-budget-bar"><span class="gx-budget-prompt" style="flex:62">Prompt · 6,200</span><span class="gx-budget-answer" style="flex:15">Answer · 1,500</span><span class="gx-budget-free" style="flex:3"></span></div><div class="gx-budget-bar gx-budget-extra"><span style="flex:70"></span><span class="gx-budget-log" style="flex:10">+ Log · 1,000</span></div><figcaption>Hypothetical budget for practice, not a real model limit.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice</p><p>Instead of pasting a full run log, send the lines around the failure together with the requirement they relate to. A bigger window does not mean you should fill it.</p></aside>

### السلوك غير الحتمي — Non-Deterministic Behavior

قد تختلف النتيجة عند تكرار المدخل نفسه، لأن آلية الاستدلال احتمالية، ولأن إعدادات النموذج (Hyperparameters) مثل درجة العشوائية تؤثر في التوليد. لذلك لا يكفي نجاح طلب واحد للحكم على موثوقية استخدامه. خفض العشوائية قد يزيد الاتساق، لكنه لا يضمن تطابق النتائج أو صحتها؛ تُناقَش وسائل التخفيف في الفصل الثالث.

<section class="gx-lab" data-lab="HO-1.1.2"><header class="gx-lab-head"><span class="gx-lab-title">Lab · Compare Two Prompt Lengths</span><span class="gx-lab-meta">HO-1.1.2 · H1</span></header><div class="gx-lab-body"><p><strong>Goal:</strong> compare the input length of two prompts for a test-case generation task.</p><ol class="gx-lab-steps"><li>Open a tokenizer that matches a model you choose and enter: <em>“Generate test cases for login.”</em></li><li>Add the user story, acceptance criteria, field constraints and output format. Record the token count of this second prompt.</li><li>Try an Arabic text and an English text with the same meaning, then a text that contains JSON data. Record the actual values. Do not assume they are equal.</li><li>Compare the counts with the model limits and decide what you can remove without losing essential context.</li></ol><p class="gx-lab-subhead">Worked example (hypothetical numbers)</p><p>A shared budget of 8,000 tokens, a 6,200-token prompt and 1,500 tokens reserved for the answer leave 300. Adding a 1,000-token log exceeds the budget by 700. Fix it by shortening the input or splitting the task while keeping the essential information.</p><details class="gx-lab-answer"><summary>What good looks like</summary><p>You can explain why token counts differ between inputs, calculate how length affects the context limit, and decide what the model actually needs for the task. The number itself is not the goal; the decision that keeps context and efficiency is.</p></details></div></section>

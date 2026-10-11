---
order: 3
slug: "2-1-3"
chapter: 2
group: "2.1"
section: "2.1.3"
title: "System Prompt and User Prompt"
titleAr: "توجيه النظام وتوجيه المستخدم"
objectives: "GenAI-2.1.3 · K2"
minutes: 11
lo:
  GenAI-2.1.3: "Explain how a system prompt differs from a user prompt."
loAr:
  GenAI-2.1.3: "تشرح الفرق بين توجيه النظام وتوجيه المستخدم."
takeaways:
  - "The system prompt sets overall behaviour, role and limits; it is set once and stays constant."
  - "The user prompt carries the current task and changes with every interaction."
  - "The model answers using both together, so each needs to be clear: role and constraints in one, a focused task in the other."
  - "A system prompt may contain parts of a structured prompt, such as role, context and constraints, and operational parameters such as tone and conciseness."
takeawaysAr:
  - "توجيه النظام يحدد السلوك العام والدور والحدود؛ يُضبط مرة ويبقى ثابتًا."
  - "توجيه المستخدم يحمل المهمة الحالية ويتغير مع كل تفاعل."
  - "النموذج يجيب باستخدام الاثنين معًا، لذلك يجب أن يكون كل منهما واضحًا: الدور والقيود في الأول، ومهمة مركّزة في الثاني."
  - "قد يحتوي توجيه النظام أجزاء من التوجيه المنظّم مثل الدور والسياق والقيود، ومعايير تشغيل مثل النبرة والإيجاز."
terms:
  - en: "System Prompt"
    ar: "توجيه النظام"
    def: "Predefined instructions, usually set by developers or testers, that define a model's role, behaviour and limits for a whole session."
    defAr: "تعليمات محددة مسبقًا، يضبطها عادة المطورون أو المختبرون، تحدد دور النموذج وسلوكه وحدوده طوال الجلسة."
    match: ["System prompt"]
  - en: "User Prompt"
    ar: "توجيه المستخدم"
    def: "The input or question a user sends in a single interaction."
    defAr: "المدخل أو السؤال الذي يرسله المستخدم في تفاعل واحد."
    match: ["User prompt"]
  - en: "Operational Parameters"
    ar: "معايير التشغيل"
    def: "Settings in a system prompt that determine how the model responds, such as a formal tone, concise answers, domain rules or behaviour to avoid."
    defAr: "إعدادات في توجيه النظام تحدد طريقة رد النموذج، مثل الأسلوب الرسمي أو الإيجاز أو قواعد المجال أو السلوك الواجب تجنّبه."
---
عندما تتعامل مع نموذج لغوي في أداة حوارية، فهو لا يرى رسالتك وحدها. هناك نوعان من التوجيه **يخدمان غرضين مختلفين**، ولكل منهما دور مميز في تشكيل المحادثة: **توجيه النظام (System Prompt)** الثابت، و**توجيه المستخدم (User Prompt)** الذي يتغير مع كل رسالة. ويأخذ النموذج الاثنين معًا عند توليد كل استجابة.

لماذا يهم المختبِر هذا الفرق؟ لسببين. الأول أنه قد **يضبط** بنفسه توجيه النظام لأداة يستخدمها فريقه، فيحدد سلوكها لكل المستخدمين. والثاني أنه قد **يختبر** تطبيقًا مبنيًا على LLM، فيحتاج أن يفهم أن جزءًا من سلوك التطبيق يأتي من تعليمات مخفية لا يراها المستخدم.

| Compared on | System prompt | User prompt |
|---|---|---|
| Purpose | Overall behaviour, role, rules and operational parameters | The current question or task, its data and output format |
| Set by | Usually the developer or tester who sets up the tool | The chatbot's user, in each interaction |
| Lifetime | Set once at the start; constant for the whole session | Changes with every question or task |
| Visibility | Usually not visible or editable by the user | Visible; the immediate context for each response |

<figure class="gx-figure" aria-label="Example system prompt and user prompt"><div class="gx-tokens-row"><span class="gx-tokens-label">System</span><span class="gx-tokens-input">You are a software testing assistant. Answer clearly, base your review on the sources given, and separate assumptions from facts.</span></div><div class="gx-tokens-row"><span class="gx-tokens-label">User</span><span class="gx-tokens-input">Review the sign-up user story below and list its ambiguities in a table.</span></div><figcaption>The system prompt stays the same across the session; the user prompt changes each turn.</figcaption></figure>

### توجيه النظام — System Prompt

يقول المنهج إن توجيه النظام **يحدده عادةً المطوّر أو المختبِر** لتوجيه السلوك العام للـ LLM، وإنه **في معظم الواجهات لا يراه مستخدم روبوت المحادثة ولا يستطيع تعديله**. فهو يعمل خلف الواجهة. عمليًا، لهذا الإخفاء فائدة واضحة: القواعد التي ضبطها الفريق تبقى كما هي لكل المستخدمين، ولا يغيّرها أحد بالخطأ أثناء المحادثة. لكنه يعني أيضًا أن المستخدم قد يرى سلوكًا لا يفهم مصدره، مثل رفض النموذج لنوع معيّن من الطلبات، لأن السبب مكتوب في تعليمات لا يراها.

ويصفه بأنه **مجموعة أوامر محددة مسبقًا** تعرّف **سلوك** النموذج و**شخصيته** و**معايير تشغيله (Operational parameters)**. معايير التشغيل تحدد **طريقة** رد النموذج: مثل استخدام أسلوب رسمي، أو الإيجاز في الإجابة، أو احترام قواعد خاصة بالمجال، أو تجنّب سلوكيات معيّنة.

**توجيه النظام يضع قواعد المحادثة كلها**، وقد يحتوي **أجزاء من التوجيه المنظّم** مثل **الدور والسياق والقيود**. وهذا منطقي: هذه المكوّنات لا تتغير من سؤال إلى آخر، فمن الأفضل كتابتها مرة واحدة. وهو **يبقى ثابتًا طوال جلسة التفاعل**، ويضع **الإطار الأساسي** لطريقة استجابة النموذج.

مثال المنهج لتوجيه نظام: «أنت مساعد اختبار برمجيات محترف. أجب دائمًا بوضوح، واستخدم لغة رسمية، وركّز على الممارسات المتوافقة مع ISTQB. تجنّب التخمين واستشهد بمبادئ الاختبار عند الحاجة». لاحظ ما فيه: دور (مساعد اختبار)، ومعايير تشغيل (وضوح، لغة رسمية)، وقواعد مجال (ISTQB)، وسلوك ممنوع (التخمين).

### توجيه المستخدم — User Prompt

توجيه المستخدم في المقابل هو **المدخل الفعلي أو السؤال** من مستخدم روبوت المحادثة. **يتغير مع كل تفاعل**، وقد يتضمن تعليمات محددة أو أسئلة أو مهام يريد المستخدم من النموذج معالجتها. وعلى عكس توجيه النظام، توجيهات المستخدم **ظاهرة مباشرة**، وتشكّل **السياق المباشر لكل استجابة**.

مثال المنهج لتوجيه مستخدم: «اذكر الفروق الرئيسية بين اختبار الصندوق الأسود والصندوق الأبيض مع أمثلة». هو طلب واحد محدد، يأتي بعده طلب آخر مختلف، بينما يبقى توجيه النظام كما هو.

### كيف يعملان معًا — How They Work Together

الاستخدام المعتاد كما يصفه المنهج: **يُضبط توجيه النظام مرة واحدة في بداية المحادثة**، ثم تُرسل **توجيهات مستخدم متتالية** لكل تفاعل. **يولّد النموذج استجابته بالنظر إلى توجيه النظام الثابت وتوجيه المستخدم الحالي معًا**. لذلك لا يحتاج المستخدم أن يعيد كتابة الدور والقواعد في كل رسالة.

**مثال من تطبيق التوصيل:** يجهّز أحد مختبري الفريق مساعدًا داخليًا لكتابة حالات الاختبار. يكتب في توجيه النظام: «أنت محلل اختبار في فريق تطبيق توصيل طعام على iOS وAndroid بواجهتين عربية وإنجليزية. الأسعار بالدينار الأردني. لا تضف قواعد أعمال غير موجودة في المدخلات، واكتب كل افتراض كسؤال مفتوح. اكتب حالات الاختبار في جدول: المعرّف، الشروط المسبقة، الخطوات، النتيجة المتوقعة». ثم يكتب زملاؤه في كل مرة توجيه مستخدم قصيرًا، مثل: «هذه قصة الكوبونات ومعاييرها؛ ولّد حالات اختبار لتاريخ الانتهاء». المستخدمون لا يرون توجيه النظام، لكنهم يحصلون على مخرجات متسقة بالعملة والصيغة نفسيهما.

### ما يجعل كل نوع فعّالًا — Making Each Effective

**توجيه النظام** يجب أن يكون **واضحًا ومحددًا** في **دور** النموذج و**القيود** الممكنة. وقد يحتوي أيضًا **سياقًا** و**تعليمات عامة**، مثل ما يخص شكل المخرجات المتوقع.

**توجيه المستخدم** يجب أن يكون **مركّزًا ومنظّمًا**: **تعليمات صريحة**، مع **سياق إضافي مناسب** للمهمة الحالية، و**تعليمات عن صيغة المخرجات** عند الحاجة. أي أن المكوّنات الستة من القسم 2.1.1 تتوزع عمليًا بين النوعين:

| Component | Usually in | Why |
|---|---|---|
| Role | System prompt | Same for every request |
| General context, constraints | System prompt | Rules for the whole session |
| Task-specific context | User prompt | Changes with each task |
| Instruction, input data | User prompt | The current task and its material |
| Output format | Either | General format in system; task-specific format in user |

### لا تخلط بين — Don't Confuse

| | Role component | System prompt |
|---|---|---|
| What it is | One of the six parts of a structured prompt | A separate prompt that frames the whole session |
| Relation | Can be placed inside a system prompt | May contain role, context and constraints |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember four contrasts: who sets it (developer or tester vs end user), how long it lasts (whole session vs one interaction), visibility (usually hidden vs visible), and content (role, rules, constraints vs the specific task). The model uses both together for every response.</p><p class="gx-ar" lang="ar" dir="rtl">تذكّر أربعة فروق: من يضبطه (المطوّر أو المختبِر مقابل المستخدم النهائي)، ومدته (الجلسة كلها مقابل تفاعل واحد)، وظهوره (مخفي غالبًا مقابل ظاهر)، ومحتواه (الدور والقواعد والقيود مقابل المهمة المحددة). النموذج يستخدم الاثنين معًا في كل رد.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In the delivery app team, each tester first repeated the role, the currency and the table format in every message, and the outputs still varied. Moving these shared parts into one system prompt made every user prompt shorter and the results consistent across the team.</p><p class="gx-ar" lang="ar" dir="rtl">في فريق تطبيق التوصيل، كان كل مختبِر في البداية يكرر الدور والعملة وصيغة الجدول في كل رسالة، ومع ذلك اختلفت المخرجات. ونقْل هذه الأجزاء المشتركة إلى توجيه نظام واحد جعل كل توجيه مستخدم أقصر، والنتائج متسقة في الفريق كله.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming a system prompt guarantees safety or correctness. It shapes behaviour, but security controls and output review are still needed.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن توجيه النظام يضمن الأمان أو الصحة. هو يشكّل السلوك، لكن الضوابط الأمنية ومراجعة الناتج تبقى ضرورية.</p></aside>

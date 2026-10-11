---
order: 1
slug: "2-1-1"
chapter: 2
group: "2.1"
section: "2.1.1"
title: "Structure of Prompts for Generative AI in Software Testing"
titleAr: "بنية التوجيه للذكاء التوليدي في اختبار البرمجيات"
objectives: "GenAI-2.1.1 · K2 / HO-2.1.1 · H0"
minutes: 14
lo:
  GenAI-2.1.1: "Give examples of how prompts for testing tasks are structured."
  HO-2.1.1: "Observe structured prompts and identify each of their six components."
loAr:
  GenAI-2.1.1: "تعطي أمثلة على بنية التوجيهات المستخدمة في مهام الاختبار."
  HO-2.1.1: "تشاهد توجيهات منظّمة وتحدد كل مكوّن من مكوّناتها الستة."
takeaways:
  - "A structured prompt has six components: role, context, instruction, input data, constraints and output format."
  - "Context is background; input data is the material actually analysed. An instruction is the task; a constraint limits it."
  - "The structure is a base to combine with prompting techniques, chosen by task and model."
  - "Each component reduces guessing: role sets the perspective, context the background, instruction the task, input data the material, constraints the limits, output format the shape."
takeawaysAr:
  - "التوجيه المنظّم له ستة مكوّنات: الدور، والسياق، والتعليمات، والمدخلات، والقيود، وصيغة المخرجات."
  - "السياق خلفية؛ والمدخلات هي المادة التي تُحلَّل فعلًا. التعليمات هي المهمة؛ والقيد يحدّها."
  - "البنية أساس يُدمج مع تقنيات التوجيه، ويُختار حسب المهمة والنموذج."
  - "كل مكوّن يقلّل التخمين: الدور يحدد المنظور، والسياق الخلفية، والتعليمات المهمة، والمدخلات المادة، والقيود الحدود، وصيغة المخرجات الشكل."
terms:
  - en: "Prompt Engineering"
    ar: "هندسة التوجيه"
    def: "Designing and refining prompts, inputs and constraints so a model produces useful, evaluable output for a task."
    defAr: "تصميم التوجيهات والمدخلات والقيود وتحسينها، لكي يُنتج النموذج ناتجًا مفيدًا وقابلًا للتقييم لمهمة ما."
  - en: "Role"
    ar: "الدور"
    def: "The perspective or persona the model takes, such as tester, test manager or automation engineer."
    defAr: "المنظور أو الشخصية التي يتبناها النموذج، مثل مختبِر أو مدير اختبار أو مهندس أتمتة."
  - en: "Context"
    ar: "السياق"
    def: "Background about the test object, the feature and the circumstances of the task."
    defAr: "خلفية عن موضوع الاختبار والميزة وظروف المهمة."
  - en: "Constraints"
    ar: "القيود"
    def: "Limits and considerations the model must respect while doing the task."
    defAr: "حدود واعتبارات يجب أن يلتزم بها النموذج أثناء تنفيذ المهمة."
  - en: "Instruction"
    ar: "التعليمات"
    def: "Clear, imperative and concise directives that describe the specific task and its requirements."
    defAr: "أوامر واضحة وموجزة بصيغة الأمر تصف المهمة المحددة ومتطلباتها."
  - en: "Input Data"
    ar: "المدخلات"
    def: "The information the model needs to do the task, such as user stories, acceptance criteria, screenshots, code, existing test cases or output examples."
    defAr: "المعلومات التي يحتاجها النموذج لأداء المهمة، مثل قصص المستخدم ومعايير القبول ولقطات الشاشة والشيفرة وحالات الاختبار الموجودة وأمثلة المخرجات."
  - en: "Output Format"
    ar: "صيغة المخرجات"
    def: "The expected format, structure or characteristics of the model's response."
    defAr: "الصيغة أو البنية أو الخصائص المتوقعة لاستجابة النموذج."
---
**هندسة التوجيه (Prompt Engineering)** هي تنظيم الطلب والمدخلات والقيود بحيث تتضح المهمة للنموذج، ثم تحسينها بناءً على نتائج يمكن تقييمها. يبدأ المنهج الفصل الثاني بفكرة بسيطة: **تصميم التوجيه الفعّال يزيد فرصة** أن تنفّذ أدوات GenAI مهام الاختبار بدقة وكفاءة، وأن يحصل المختبِر على نتائج مفيدة من الـ LLM. لاحظ كلمة «فرصة»: الصياغة الجيدة ترفع الاحتمال، ولا تُغني عن مراجعة الناتج.

لماذا يهم هذا المختبِر؟ لأن النموذج لا يعرف عن مشروعك إلا ما تكتبه له. عندما يكتب مختبِر في فريق تطبيق التوصيل «اكتب حالات اختبار للكوبونات»، سيملأ النموذج كل ما لم يُذكر بافتراضات عامة: ربما يسمح بكوبونين في الطلب نفسه، أو يختار عملة غير الدينار، أو يكتب حالات بصيغة لا تناسب أداة الفريق. **التوجيه المنظّم (structured prompt)** يتكون من مكوّنات محددة، وكل مكوّن يضيف شيئًا من **الوضوح والدقة**، فيصل إلى النموذج ما تريده بالضبط: المتطلبات والتوقعات معًا.

والبنية وحدها ليست كل شيء: **تقنيات التوجيه** (القسم 2.1.2) تساعد في تحديات الاختبار المعقّدة، و**الجمع بين البنية وهذه التقنيات** هو ما يهدف إلى نتائج جيدة في مهام الاختبار.

### المكونات الستة — The Six Components

يقول المنهج إن التوجيه المنظّم لمهام الاختبار يتضمن عادةً ستة مكوّنات. ليس المطلوب تعبئة حقول شكلية؛ المطلوب أن يعرف النموذج من يكون، وعلى ماذا يعمل، وما النتيجة المقبولة.

| Component | Question it answers | Delivery app example |
|---|---|---|
| Role | Who is answering, from which perspective? | Test analyst for the delivery app |
| Context | What is the background of the test object? | Customer app checkout, iOS and Android, Arabic and English UI |
| Instruction | What exactly must be done? | Derive test conditions for applying a coupon |
| Input data | What material is actually analysed? | Coupon user story, acceptance criteria, checkout screenshot |
| Constraints | What limits apply while doing it? | Use only the given criteria; list assumptions separately |
| Output format | What should the answer look like? | Table: ID, Source, Test condition, Open question |

### الدور — Role

يحدد الدور **المنظور أو الشخصية (perspective or persona)** التي يتبناها النموذج عند الإجابة. ويشرح المنهج فائدته: يساعد الـ LLM على **تحديد مسؤولياته** واختيار **النبرة والأسلوب المناسبين**، مثل أن يتصرف كمختبِر، أو مدير اختبار، أو مهندس أتمتة.

لماذا يفرق ذلك؟ لأن الطلب نفسه يُفهم بطرق مختلفة حسب الدور. «راجع نتائج اختبار الكوبونات» بصفتك **مدير اختبار** يقود إلى ملخص للمخاطر وجاهزية الإصدار بلغة يفهمها مالك المنتج. والطلب نفسه بصفتك **مهندس أتمتة** يقود إلى ملاحظات عن استقرار الـ test scripts والبيانات القابلة لإعادة الاستخدام. عمليًا، الدور لا يمنح النموذج خبرة لا يملكها، لكنه يوجّه زاوية النظر ومستوى التفصيل.

### السياق — Context

السياق هو **معلومات الخلفية** التي يحتاجها النموذج **لتحديد شروط الاختبار**: تفاصيل عن **موضوع الاختبار (test object)**، و**الوظيفة المحددة** المطلوب اختبارها، وأي معلومات سياقية أخرى ذات صلة.

في تطبيق التوصيل قد يكون السياق: «تطبيق عميل لتوصيل الطعام على iOS وAndroid، بواجهتين عربية وإنجليزية، والميزة المطلوبة هي تطبيق الكوبون في شاشة الدفع». بدونها لن يفكر النموذج في اتجاه النص العربي أو في اختلاف المنصتين.

### التعليمات — Instruction

التعليمات **أوامر موجّهة** للنموذج تحدد **المهمة المطلوب تنفيذها**. ويصفها المنهج بثلاث صفات: **واضحة، وبصيغة الأمر، وموجزة**، وتتضمن **وصف المهمة** وأي **متطلبات خاصة بها**.

الفعل الدقيق هو قلب التعليمات: «استخرج»، «صنّف»، «ولّد»، «قارن». «ساعدني في اختبار الكوبونات» واسعة جدًا ولا يمكن الحكم على ناتجها. أما «استخرج شروط الاختبار من معايير القبول المرفقة، ورتّبها حسب المعيار الذي اشتُقّت منه» فمحددة، ويمكنك بعد التشغيل أن تقول: هل نفّذها النموذج أم لا؟

### المدخلات — Input Data

المدخلات هي **كل معلومة يحتاجها النموذج لأداء المهمة**. ويعدّد المنهج أمثلة: قصص المستخدم، ومعايير القبول، ولقطات الشاشة، والشيفرة، وحالات الاختبار الموجودة، و**أمثلة على المخرجات**. ثم يضيف السبب: تقديم مدخلات **مفصّلة ومنظّمة** يساعد الـ LLM على توليد نتائج **أدق وأكثر وعيًا بالسياق**.

في مثالنا، المدخلات هي نص قصة الكوبون، ومعاييرها (نسبة مئوية أو مبلغ ثابت، كوبون واحد لكل طلب، تاريخ انتهاء)، ولقطة شاشة الدفع. لاحظ أن «أمثلة المخرجات» جزء من المدخلات؛ وعندما تضع عدة أمثلة منها تكون قد بدأت تستخدم التوجيه بالأمثلة من القسم التالي.

### القيود — Constraints

القيود تحدد **أي قيود أو اعتبارات خاصة** يجب أن يلتزم بها النموذج. ويضيف المنهج وظيفتها الدقيقة: القيود تساعد على تحديد **كيف تُطبَّق التعليمات على المدخلات**.

أمثلة من تطبيق التوصيل: «اعتمد على معايير القبول المرفقة فقط ولا تضف قواعد غير مذكورة»، «لا تتجاوز 15 شرطًا»، «ضع كل افتراض في عمود مستقل بدل دمجه في الشرط». عمليًا، تقلّل القيود الإضافات غير المطلوبة والافتراضات الصامتة، لكنها لا تمنعها تمامًا، فتبقى مراجعة الناتج ضرورية.

### صيغة المخرجات — Output Format

مواصفات المخرجات تحدد **الصيغة أو البنية أو الخصائص** المتوقعة للاستجابة، وهذه المؤشرات **تشكّل ناتج الـ LLM**. قد تكون الصيغة جدولًا بأعمدة محددة، أو JSON، أو سيناريوهات Gherkin، وقد تكون خاصية مثل «بالعربية» أو «في أقل من 200 كلمة».

لماذا تهم؟ لأن الناتج المنظّم أسهل في المراجعة والمقارنة والاستيراد في الأدوات. جدول فيه عمود «Source» مثلًا يجعل المختبِر يرى فورًا أي شرط لا يستند إلى معيار قبول.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Mixing up neighbouring components. That the system is a food-delivery app on iOS and Android is <strong>context</strong>; the text of the coupon rule is <strong>input data</strong>. “Generate the test cases” is an <strong>instruction</strong>; “do not invent requirements” is a <strong>constraint</strong> on it.</p><p class="gx-ar" lang="ar" dir="rtl">الخلط بين مكوّنات متجاورة. كون النظام تطبيق توصيل طعام على iOS وAndroid هو <strong>سياق</strong>؛ ونص قاعدة الكوبون هو <strong>مدخلات</strong>. «ولّد حالات الاختبار» <strong>تعليمات</strong>؛ و«لا تخترع متطلبات» <strong>قيد</strong> عليها.</p></aside>

### البنية أساس، لا قالب جامد — Structure Plus Techniques

يختم المنهج بأن هذه المكوّنات تشكّل **البنية الأساسية** للتوجيه، وأنها يجب أن **تُدمج مع تقنيات التوجيه** (القسم 2.1.2) **بحسب المهمة المطلوبة والـ LLM المستخدم**.

**بحسب المهمة:** إذا كان الناتج متكررًا بصيغة ثابتة، مثل تحويل قصص كثيرة إلى Gherkin، تضيف أمثلة إلى المدخلات. وإذا كانت المهمة معقّدة، تقسّمها إلى سلسلة توجيهات، ولكل توجيه في السلسلة بنيته الخاصة. **بحسب النموذج:** عمليًا، النموذج متعدد الوسائط يقبل لقطة الشاشة كمدخل، والنموذج الذي لا يقبل الصور يحتاج وصفًا نصيًا لها، والنموذج ذو نافذة السياق الصغيرة يحتاج مدخلات أكثر إيجازًا.

### لا تخلط بين — Don't Confuse

| Pair | First one | Second one |
|---|---|---|
| Context vs Input data | Background about the system and feature | The material the task works on |
| Instruction vs Constraint | The task itself (the verb) | A limit on how the task is done |
| Role vs Context | Who answers and from which view | What the answer is about |
| Output format vs Instruction | The shape of the answer | What the answer must do |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A delivery app tester first asked “Write test cases for coupons” and got cases that accepted two coupons on one order and used dollars. After rewriting the request with all six components, including the rule “one coupon per order” as input data and “do not add rules that are not stated” as a constraint, the output followed the story and every row pointed to its source.</p><p class="gx-ar" lang="ar" dir="rtl">طلب أحد مختبري تطبيق التوصيل في البداية «اكتب حالات اختبار للكوبونات»، فحصل على حالات تقبل كوبونين في الطلب نفسه وتستخدم الدولار. وبعد إعادة كتابة الطلب بالمكوّنات الستة، مع وضع قاعدة «كوبون واحد لكل طلب» في المدخلات و«لا تضف قواعد غير مذكورة» كقيد، جاء الناتج ملتزمًا بالقصة، وكل صف يشير إلى مصدره.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Expect questions that show a prompt fragment and ask which component it is. Quick test: who or how (role), background (context), the verb (instruction), the material analysed (input data), a limit (constraint), the shape of the answer (output format).</p><p class="gx-ar" lang="ar" dir="rtl">توقّع أسئلة تعرض جزءًا من توجيه وتسأل عن المكوّن. اختبار سريع: من أو كيف (الدور)، الخلفية (السياق)، الفعل المطلوب (التعليمات)، المادة المحلَّلة (المدخلات)، الحدّ (القيد)، شكل الإجابة (صيغة المخرجات).</p></aside>

### ماذا ستشاهد في العرض — The Demonstration

الهدف العملي HO-2.1.1 من مستوى H0، أي **مشاهدة**: تُجرَّب أمامك عدة توجيهات منظّمة على روبوت محادثة، لكل منها مهمة اختبار محددة. المطلوب أن تلاحظ وتحلّل **كيف يساهم كل مكوّن** في جعل ما يقدّمه النموذج **دقيقًا وذا صلة وقابلًا للتنفيذ**. يستخدم العرض أدناه مثال التسجيل في منصة «تعلّم» التعليمية: حاول تسمية كل مكوّن قبل قراءة النتيجة المتوقعة.

<section class="gx-lab" data-lab="HO-2.1.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Demo · Spot the Six Components</span><span class="gx-ar" lang="ar" dir="rtl">عرض توضيحي · تعرّف على المكوّنات الستة</span></span><span class="gx-lab-meta">HO-2.1.1 · H0</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> read a structured prompt and name the role, context, instruction, input data, constraints and output format.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> قراءة توجيه منظّم وتسمية الدور والسياق والتعليمات والمدخلات والقيود وصيغة المخرجات.</span></p><pre class="gx-lab-prompt"><code>Role: Functional test analyst.
Context: "Taallam" e-learning platform, new account sign-up on the web.
Instruction: Identify test conditions and any statements that are not testable.
Input data: Email is required and unique; password is 12–64 characters;
            on success the account is created.
Constraints: Do not infer an MFA policy or complexity rules that are not stated.
             Put anything missing as an open question.
Output format: Table with ID | Source | Test condition | Note or question.</code></pre><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Expected teaching result</span><span class="gx-ar" lang="ar" dir="rtl">النتيجة التعليمية المتوقعة</span></p><p><span class="gx-en" lang="en" dir="ltr">Conditions for an empty email, a duplicate email, the password length boundaries, and confirming the account is created. “Is an activation email sent?” stays an open question, not a confirmed acceptance criterion.</span><span class="gx-ar" lang="ar" dir="rtl">شروط للبريد الفارغ، والبريد المكرر، وحدود طول كلمة المرور، والتأكد من إنشاء الحساب. أما «هل يُرسل بريد تفعيل؟» فيبقى سؤالًا مفتوحًا، لا معيار قبول مؤكدًا.</span></p><p><span class="gx-en" lang="en" dir="ltr">For comparison, try the short prompt <em>“Write sign-up tests”</em> and notice how loosely its output follows the source text.</span><span class="gx-ar" lang="ar" dir="rtl">للمقارنة، جرّب التوجيه المختصر <em>«اكتب اختبارات للتسجيل»</em> ولاحظ كم يبتعد ناتجه عن النص الأصلي.</span></p></div></section>

---
order: 6
slug: "3-2-2"
chapter: 3
group: "3.2"
section: "3.2.2"
title: "Data Privacy and Vulnerabilities in Generative AI for Test Processes and Tools"
titleAr: "خصوصية البيانات والثغرات في أدوات وعمليات الاختبار بالذكاء التوليدي"
objectives: "GenAI-3.2.2 · K2"
minutes: 14
lo:
  GenAI-3.2.2: "Give examples of privacy issues and vulnerabilities when using GenAI in testing."
loAr:
  GenAI-3.2.2: "تعطي أمثلة على مشكلات الخصوصية والثغرات عند استخدام GenAI في الاختبار."
takeaways:
  - "Four attack vectors: context manipulation, request manipulation, data poisoning and malicious code generation."
  - "Text inside a log or an image is data to analyse, never trusted instructions."
  - "Recognise and assess each risk for your application; none of them is guaranteed to happen."
  - "Each vector targets a different point: the context, the input, the training data or the generated code."
takeawaysAr:
  - "أربعة متجهات هجوم: التلاعب بالسياق، والتلاعب بالطلب، وتسميم البيانات، وتوليد شيفرة ضارة."
  - "النص الموجود داخل سجل أو صورة بيانات للتحليل، وليس تعليمات موثوقة أبدًا."
  - "تعرّف على كل خطر وقيّمه لتطبيقك؛ ليس أيٌّ منها حتمي الحدوث."
  - "كل متجه يستهدف نقطة مختلفة: السياق، أو المدخلات، أو بيانات التدريب، أو الشيفرة المولّدة."
terms:
  - en: "Context Manipulation"
    ar: "التلاعب بالسياق"
    def: "Manipulating the context, for example with very long prompts, to try to make the model reveal confidential data."
    defAr: "التلاعب بالسياق، مثلًا بطلبات طويلة جدًا، لمحاولة دفع النموذج لكشف بيانات سرية."
  - en: "Request Manipulation"
    ar: "التلاعب بالطلب"
    def: "Introducing material, such as an image with embedded instructions, that pushes the output off course."
    defAr: "إدخال مادة، مثل صورة فيها تعليمات مضمّنة، تُخرج الناتج عن مساره."
  - en: "Data Poisoning"
    ar: "تسميم البيانات"
    def: "Corrupting training or tuning data, for example with fake ratings, to distort the model."
    defAr: "إفساد بيانات التدريب أو التحسين، مثلًا بتقييمات مزيفة، لتشويه النموذج."
  - en: "Malicious Code Generation"
    ar: "توليد شيفرة ضارة"
    def: "Steering a model to produce code with backdoors or unwanted command calls."
    defAr: "دفع النموذج لإنتاج شيفرة فيها أبواب خلفية أو استدعاءات أوامر غير مرغوبة."
  - en: "Attack Vector"
    ar: "متجه الهجوم"
    def: "A path or method an attacker uses to misuse a system, such as manipulating its context, input, training data or generated code."
    defAr: "طريق أو أسلوب يستخدمه المهاجم لإساءة استخدام نظام، مثل التلاعب بسياقه أو مدخلاته أو بيانات تدريبه أو الشيفرة التي يولّدها."
---
في القسم 3.2.1 رأيت المخاطر بشكل عام: كشف البيانات، واستغلال النموذج، والمدخلات الخبيثة. هذا القسم يجعلها ملموسة من خلال **متجهات الهجوم (Attack Vectors)**، أي الطرق التي يمكن أن يُساء بها استخدام أدوات GenAI وعمليات الاختبار المعتمدة عليها. يعرض المنهج **أربعة أمثلة** في جدول واحد، ومستوى الهدف **K2**: أن تعطي أمثلة على هذه الثغرات وتفهم فكرة كل منها.

الهدف هنا ليس تعلّم الهجوم، بل **التعرّف عليه**. المختبِر الذي يعرف كيف يبدو كل متجه يستطيع أن يسأل الأسئلة الصحيحة عن أداة الفريق، وأن يلاحظ العلامات في الناتج، وأن يطلب الضوابط المناسبة قبل أن يقع الضرر.

### جدول المنهج — The Syllabus Table

| Attack vector | Description | Example |
|---|---|---|
| Context Manipulation | Sending requests designed to extract confidential training data | Exceeding the LLM context window with long prompts to overload the AI's memory could lead it to reveal random snippets of its training data and potentially expose sensitive information |
| Request manipulation | Introducing data that disrupts the AI's output | Images that lure the AI into a different context, thus provoking hallucinations on, e.g., acceptance criteria |
| Data poisoning | Manipulating training data | Providing fake evaluations when rating the results of an AI-generated test report |
| Malicious code generation | Manipulating an LLM to generate backdoors (e.g., external command calls) during use | Generation of code to open a communication channel with a specific, malicious IP |

سنشرح كل صف: الفكرة، ومثال المنهج، ومثالًا من تطبيق التوصيل، وكيف يتحقق المختبِر من هذا الخطر.

### التلاعب بالسياق — Context Manipulation

**الفكرة:** إرسال طلبات **مصمّمة لاستخراج بيانات تدريب سرية**. المهاجم لا يطلب المعلومة السرية مباشرة، بل يضغط على النموذج حتى يخرج عن سلوكه المعتاد.

**مثال المنهج:** تجاوز **نافذة السياق (context window)** بطلبات طويلة جدًا لإرهاق «ذاكرة» النموذج، وهذا **قد** يدفعه إلى كشف مقاطع عشوائية من بيانات تدريبه، فيكشف معلومات حساسة. لاحظ كلمة «قد»: هذا خطر يجب تقييمه، لا نتيجة مؤكدة.

**في تطبيق التوصيل:** لو ضبط الفريق مساعد اختبار على بيانات طلبات حقيقية، فإن كشف مقاطع من بيانات التدريب يعني كشف أسماء عملاء وعناوينهم.

**كيف يتحقق المختبِر؟** يسأل أولًا: هل تحتوي بيانات تدريب الأداة أو سياقها على بيانات سرية أصلًا؟ ثم، في بيئة اختبار معزولة، يراقب هل تُخرج الأداة محتوى لا علاقة له بالمهمة عند المدخلات الطويلة جدًا، ويتأكد أن هناك حدًا لطول المدخلات ومراقبة للاستخدام غير المعتاد.

### التلاعب بالطلب — Request Manipulation

**الفكرة:** **إدخال بيانات تُربك ناتج النموذج** وتُخرجه عن مساره. الهدف هنا ليس سرقة بيانات بالضرورة، بل إفساد النتيجة.

**مثال المنهج:** **صور تجرّ النموذج إلى سياق مختلف**، فتثير **هلوسات** في معايير القبول مثلًا. في الاختبار متعدد الوسائط، يُرفق المختبِر لقطة شاشة مع المتطلب، فإذا كانت الصورة تحتوي نصًا أو عناصر تقود النموذج إلى موضوع آخر، جاءت معايير القبول بعيدة عن المتطلب الحقيقي.

**في تطبيق التوصيل:** يُرفق تصميم شاشة الدفع ليولّد النموذج معايير قبول. الصورة تحتوي نصًا صغيرًا عن «برنامج نقاط الولاء» من تصميم قديم، فيولّد النموذج معايير عن نقاط الولاء، وهي ميزة غير موجودة.

**كيف يتحقق المختبِر؟** يطبّق التحقق المتقاطع (انظر 3.1.2): كل معيار يجب أن يرتبط بمتطلب. ويقارن الناتج مع المرفق وبدونه، ويتأكد أن المرفقات من مصدر موثوق. والقاعدة الأهم: **النص الموجود داخل صورة أو سجل بيانات للتحليل، لا تعليمات للتنفيذ**.

### تسميم البيانات — Data Poisoning

**الفكرة:** **التلاعب ببيانات التدريب**. أثر هذا المتجه أعمق من المتجهين السابقين، لأنه لا يفسد ناتجًا واحدًا، بل يغيّر ما يتعلمه النموذج، فيستمر أثره في كل استخدام لاحق.

**مثال المنهج:** **تقديم تقييمات مزيفة** عند تقييم نتائج **تقرير اختبار مولَّد**. كثير من الأدوات تجمع تقييمات المستخدمين لتحسين نفسها، فتصبح هذه التقييمات بيانات تدريب.

**في تطبيق التوصيل:** أداة التقارير تطلب من الفريق تقييم كل ملخص اختبار. لو أعطى حساب واحد تقييمات عالية متكررة لملخصات تُخفي الـ defects المفتوحة، فقد تتعلم الأداة أن هذا النوع من الملخصات «جيد».

**كيف يتحقق المختبِر؟** يسأل: من يستطيع إرسال التقييمات، وهل تدخل مباشرة في تحسين النموذج؟ ويبحث عن أنماط مريبة، مثل تقييمات كثيرة من مصدر واحد أو تقييمات تخالف نتائج المراجعة. وعمليًا، يقيس جودة الأداة دوريًا على مجموعة ثابتة من الحالات المعروفة، فإذا تراجعت دون سبب واضح، كان ذلك علامة تستحق التحقيق.

### توليد شيفرة ضارة — Malicious Code Generation

**الفكرة:** **التلاعب بالنموذج ليولّد أبوابًا خلفية (backdoors)** أثناء الاستخدام، مثل **استدعاءات أوامر خارجية (external command calls)**. الشيفرة تبدو مفيدة، لكنها تحمل وظيفة مخفية.

**مثال المنهج:** **توليد شيفرة تفتح قناة اتصال مع عنوان IP محدد وضار**.

**في تطبيق التوصيل:** يطلب المختبِر test script لتدفق الدفع. يأتي الـ script بخطوات الاختبار المطلوبة، ومعها سطر يرسل بيانات البيئة إلى عنوان خارجي لا علاقة له بالتطبيق ولا ببوابة الدفع.

**كيف يتحقق المختبِر؟** **لا يُشغَّل أي script مولَّد قبل مراجعته**. يفحص كل اتصال شبكي وكل استدعاء أوامر وكل وصول إلى بيانات الاعتماد، ويسأل: هل يحتاجه الاختبار فعلًا؟ ثم يشغّله أولًا في بيئة معزولة. وعمليًا، يمكن أن تساعد أدوات التحليل الثابت للشيفرة في التنبيه إلى هذه الأنماط.

### لا تخلط بين — Don't Confuse

| | Context manipulation | Request manipulation | Data poisoning | Malicious code generation |
|---|---|---|---|---|
| Target | The model's context and training data | The input of one request | The training data | The generated code |
| Main goal | Extract confidential data | Disrupt the output | Distort future behaviour | Plant a backdoor |
| Typical sign for the tester | Off-task output containing data snippets | Output about things not in the requirements | Quality drifts over time | Unexpected network or command calls |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team added one rule to its CI pipeline: a generated test script is merged only after a human review that lists every network call and external command in it. In the first sprint, the review rejected a script that called an address unrelated to the app, the maps service or the payment gateway.</p><p class="gx-ar" lang="ar" dir="rtl">أضاف فريق تطبيق التوصيل قاعدة واحدة إلى الـ CI pipeline: لا يُدمج أي test script مولَّد إلا بعد مراجعة بشرية تسرد كل اتصال شبكي وكل أمر خارجي فيه. في أول sprint، رفضت المراجعة script يتصل بعنوان لا علاقة له بالتطبيق ولا بخدمة الخرائط ولا ببوابة الدفع.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip · v1.1</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان · v1.1</span></p><p class="gx-en" lang="en" dir="ltr">In v1.1 the first vector is named <strong>Context Manipulation</strong>. Learn this name.</p><p class="gx-ar" lang="ar" dir="rtl">في نسخة المنهج v1.1 اسم المتجه الأول <strong>Context Manipulation</strong>. احفظ هذا الاسم.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Reading the context example as a rule that exceeding the context window always leaks training data. The point is to recognise the risk and assess it for your application. Likewise, text found inside a log or an image is data to analyse; it does not become a trusted instruction because the model read it.</p><p class="gx-ar" lang="ar" dir="rtl">قراءة مثال السياق على أنه قاعدة: تجاوز نافذة السياق يكشف بيانات التدريب دائمًا. المقصود التعرّف على الخطر وتقييمه لتطبيقك. وبالمثل، النص الموجود داخل سجل أو صورة بيانات للتحليل؛ ولا يصبح تعليمات موثوقة لأن النموذج قرأه.</p></aside>

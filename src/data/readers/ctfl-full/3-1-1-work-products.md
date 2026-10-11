---
order: 1
slug: "3-1-1"
chapter: 3
group: "3.1"
section: "3.1.1"
title: "Work Products Examinable by Static Testing"
titleAr: "مخرجات العمل القابلة للاختبار الساكن"
objectives: "FL-3.1.1 · K1"
minutes: 9
lo:
  FL-3.1.1: "Recognise the types of work products that static testing can examine."
loAr:
  FL-3.1.1: "تتعرّف على أنواع مخرجات العمل التي يمكن فحصها بالاختبار الساكن."
takeaways:
  - "Static testing examines work products without executing them, through manual reviews or tool-based static analysis."
  - "Almost any work product that can be read and understood can be reviewed: requirements, code, test plans, test cases, backlog items, charters, documentation, contracts and models."
  - "Static analysis needs a work product with a formal structure, such as code or models, or text with a formal syntax."
  - "Work products that are hard for people to interpret and should not be analysed by tools, such as third-party executable code for legal reasons, are not suitable."
  - "Static testing objectives include improving quality, detecting defects and assessing readability, completeness, correctness, testability and consistency; it supports both verification and validation."
  - "Static analysis needs no test cases, is often part of the CI pipeline, and also evaluates maintainability and security."
takeawaysAr:
  - "الاختبار الساكن يفحص مخرجات العمل دون تشغيلها، إما بالمراجعة اليدوية أو بالتحليل الساكن بالأدوات."
  - "تقريبًا أي مُخرَج يمكن قراءته وفهمه قابل للمراجعة: المتطلبات، والشيفرة، وخطط الاختبار وحالاته، وعناصر القائمة، والمواثيق، والتوثيق، والعقود، والنماذج."
  - "التحليل الساكن يحتاج مُخرَجًا ذا بنية رسمية، مثل الشيفرة أو النماذج، أو نصًا ذا صيغة رسمية (formal syntax)."
  - "المخرجات التي يصعب على الإنسان تفسيرها ولا يجوز تحليلها بالأدوات، مثل شيفرة تنفيذية لطرف ثالث لأسباب قانونية، غير مناسبة."
  - "أهداف الاختبار الساكن تشمل تحسين الجودة، واكتشاف الـ defects، وتقييم سهولة القراءة والاكتمال والصحة وقابلية الاختبار والاتساق؛ وهو يخدم التحقق والمصادقة معًا."
  - "التحليل الساكن لا يحتاج حالات اختبار، وغالبًا يكون جزءًا من خط CI، ويقيّم أيضًا قابلية الصيانة والأمان."
terms:
  - en: "Review"
    ar: "المراجعة"
    def: "A type of static testing in which people examine a work product to find defects or for other purposes such as reaching consensus."
    defAr: "نوع من الاختبار الساكن يفحص فيه الأشخاص مُخرَج عمل لاكتشاف الـ defects أو لأغراض أخرى مثل الوصول لتوافق."
    match: ["Review", "review", "reviews"]
---
في **الاختبار الساكن (Static Testing)** لا نشغّل البرمجية قيد الاختبار، على عكس **الاختبار الديناميكي (Dynamic Testing)**. بدل التشغيل نقرأ ونفحص: الشيفرة، أو مواصفات العمليات، أو مواصفات معمارية النظام، أو أي مُخرَج عمل آخر. ويتم الفحص بطريقتين:

- **يدويًا** عبر **المراجعات (Reviews)**: أشخاص يقرؤون المُخرَج ويناقشونه.
- **بمساعدة أداة** عبر **التحليل الساكن (Static Analysis)**: أداة تفحص المُخرَج آليًا مقابل قواعد محددة.

في تطبيق التوصيل، الفريق يمارس الاختبار الساكن قبل أن يكتب سطرًا واحدًا من شيفرة الميزة: حين يقرأ قصة المستخدم الخاصة بالكوبونات، ويسأل «ماذا لو أدخل الزبون كوبونين؟»، فهو يختبر دون أن يشغّل شيئًا.

### أهداف الاختبار الساكن — Objectives

أهدافه: **تحسين الجودة**، و**اكتشاف الـ defects**، و**تقييم خصائص** مثل سهولة القراءة، والاكتمال، والصحة، و**قابلية الاختبار (testability)**، والاتساق. ويصلح للأمرين معًا: **التحقق (Verification)**، أي «هل بنينا المُخرَج بشكل صحيح وفق مواصفاته؟»، و**المصادقة (Validation)**، أي «هل هذا ما يحتاجه أصحاب المصلحة فعلًا؟».

### التعاون حول قصص المستخدم — Collaborating on User Stories

يعمل المختبرون وممثلو العمل (مالك المنتج، ومحلل الأعمال…) والمطوّرون معًا في جلسات **Example Mapping**، و**الكتابة التعاونية لقصص المستخدم**، و**تحسين قائمة المنتج (Backlog Refinement)**، للتأكد من أن القصص تحقق معايير متفق عليها مثل **تعريف الجاهزية (Definition of Ready)**. تُطبَّق أساليب المراجعة هنا لضمان أن القصة **مكتملة ومفهومة**، وأن لها **معايير قبول قابلة للاختبار**. وبطرح الأسئلة الصحيحة يستكشف المختبر القصة ويتحدّاها ويساعد على تحسينها. مثلًا، قصة «يحصل الزبون على توصيل مجاني للطلبات الكبيرة» غير قابلة للاختبار حتى يُسأل: «كبيرة يعني كم؟»، فتصبح «20.00 دينارًا فأكثر».

### التحليل الساكن — Static Analysis

يكتشف التحليل الساكن مشكلات **قبل الاختبار الديناميكي**، وغالبًا **بجهد أقل**، لأنه **لا يحتاج حالات اختبار**، وتقوم به أدوات عادة. لذلك يُدمج كثيرًا في **أُطر التكامل المستمر (CI)**: في تطبيق التوصيل يعمل محلّل الشيفرة مع كل commit. ورغم أنه يُستخدم أساسًا لاكتشاف defects محددة في الشيفرة، فهو يقيّم أيضًا **قابلية الصيانة** و**الأمان**. و**المدقق الإملائي** و**أدوات قياس سهولة القراءة** أمثلة أخرى على أدوات التحليل الساكن.

### ما الذي يمكن مراجعته؟ — What Can Be Reviewed

**تقريبًا أي مُخرَج عمل** يمكن فحصه بالاختبار الساكن: وثائق مواصفات المتطلبات، والشيفرة المصدرية، وخطط الاختبار، وحالات الاختبار، وعناصر قائمة المنتج، و**مواثيق الاختبار (test charters)**، وتوثيق المشروع، والعقود، والنماذج. والقاعدة البسيطة: **أي مُخرَج يمكن قراءته وفهمه يمكن أن يكون موضوعًا للمراجعة**.

<figure class="gx-figure gx-spectrum" aria-label="Work products that can be examined by static testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Requirements</b><span>Specifications, user stories, acceptance criteria.</span></div><div class="gx-spectrum-item"><b>Source code</b><span>Reviewed by people, analysed by tools.</span></div><div class="gx-spectrum-item"><b>Test work products</b><span>Test plans, test cases, test charters.</span></div><div class="gx-spectrum-item"><b>Backlog items</b><span>Product backlog items and their details.</span></div><div class="gx-spectrum-item"><b>Documentation</b><span>Project documentation, contracts.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Models</b><span>Design and architecture models.</span></div></div><figcaption>Work products that can be examined by static testing.</figcaption></figure>

### ماذا يحتاج التحليل الساكن؟ — What Static Analysis Needs

الأداة لا «تفهم» كما يفهم الإنسان، فهي تحتاج **بنية يمكن فحص المُخرَج مقابلها**: نماذج، أو شيفرة، أو نص له **صيغة رسمية (formal syntax)**. لذلك تستطيع أداة أن تفحص ملف OpenAPI لواجهات الطلبات في تطبيق التوصيل، أو مخطط حالات الطلب، لكنها لا تستطيع الحكم على قصة مستخدم مكتوبة بحرية إلا في حدود الإملاء والقواعد وسهولة القراءة.

### ما الذي لا يناسب؟ — What Is Not Suitable

لا يناسب الاختبار الساكن المُخرَج الذي يجتمع فيه شرطان: **يصعب على الإنسان تفسيره**، و**لا ينبغي تحليله بالأدوات**. مثال المنهج: **الشيفرة التنفيذية لطرف ثالث**، لأسباب قانونية. في تطبيق التوصيل، مكتبة بوابة الدفع المغلقة تصل ملفًا ثنائيًا لا يقرؤه أحد، ورخصتها تمنع تفكيكها وتحليلها؛ فنختبر تكاملنا معها ديناميكيًا بدل ذلك.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In one sprint, a team reviews three user stories with the product owner, runs a linter and a security scanner on every pull request, and peer-reviews the new test cases for the payment flow. All three are static testing; none of them runs the application.</p><p class="gx-ar" lang="ar" dir="rtl">في sprint واحد، يراجع فريق ثلاث قصص مستخدم مع مالك المنتج، ويشغّل أداة Linter وماسحًا أمنيًا على كل Pull Request، ويراجع الزملاء حالات الاختبار الجديدة لمسار الدفع. الثلاثة اختبار ساكن؛ ولا واحد منها يشغّل التطبيق.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: if the option is something you can read, it can be statically tested, including test cases and contracts. Watch for the syllabus example of what is not suitable: third-party executable code that cannot be analysed for legal reasons.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: إذا كان الخيار شيئًا يمكن قراءته، فيمكن اختباره ساكنًا، بما في ذلك حالات الاختبار والعقود. وانتبه لمثال المنهج على ما لا يناسب: شيفرة تنفيذية لطرف ثالث لا يجوز تحليلها لأسباب قانونية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking static testing is only for code. Requirements, test cases, contracts and models are all valid targets, and often the most valuable ones because defects there are found earliest.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار الساكن للشيفرة فقط. المتطلبات وحالات الاختبار والعقود والنماذج كلها أهداف صحيحة، وغالبًا الأكثر قيمة، لأن الـ defects فيها تُكتشف في أبكر وقت.</p></aside>

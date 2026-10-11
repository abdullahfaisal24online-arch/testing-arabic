---
order: 4
slug: "2-2-1"
chapter: 2
group: "2.2"
section: "2.2.1"
title: "Test Analysis with Generative AI"
titleAr: "تحليل الاختبار باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.1 · K3 / HO-2.2.1a · H2 / HO-2.2.1b · H2"
minutes: 20
lo:
  GenAI-2.2.1: "Use GenAI to support test analysis tasks."
  HO-2.2.1a: "Write structured multimodal prompts that turn a user story and a wireframe into acceptance criteria."
  HO-2.2.1b: "Use prompt chaining with human checks to analyse user stories and improve acceptance criteria."
loAr:
  GenAI-2.2.1: "تطبّق GenAI لدعم مهام تحليل الاختبار."
  HO-2.2.1a: "تكتب توجيهات منظّمة متعددة الوسائط تحوّل قصة مستخدم ومخطط واجهة إلى معايير قبول."
  HO-2.2.1b: "تستخدم تسلسل التوجيهات مع مراجعة بشرية لتحليل قصص المستخدم وتحسين معايير القبول."
takeaways:
  - "GenAI can find test basis defects, derive test conditions, prioritise them by risk, check coverage and suggest test techniques."
  - "Inputs are requirements, user stories, specifications and wireframes; outputs are test conditions and acceptance criteria."
  - "Input quality decides output accuracy. Never accept a threshold or risk level the model invented."
  - "Risk-based prioritisation needs likelihood and impact data from you; the model then considers regulatory compliance, user-facing features and defect history."
  - "Coverage analysis maps requirements and user stories to test conditions to reveal gaps that could lead to escaped defects."
takeawaysAr:
  - "يستطيع GenAI كشف defects أساس الاختبار، واشتقاق شروط الاختبار، وترتيبها حسب المخاطر، وفحص التغطية، واقتراح تقنيات الاختبار."
  - "المدخلات متطلبات وقصص مستخدم ومواصفات ومخططات واجهة؛ والمخرجات شروط اختبار ومعايير قبول."
  - "جودة المدخلات تحدد دقة الناتج. لا تقبل أبدًا قيمة حدّية أو مستوى خطر اخترعه النموذج."
  - "الترتيب حسب المخاطر يحتاج منك بيانات الاحتمال والأثر؛ ثم يراعي النموذج الالتزام التنظيمي والوظائف المواجهة للمستخدم وتاريخ الـ defects."
  - "تحليل التغطية يربط المتطلبات وقصص المستخدم بشروط الاختبار ليكشف الفجوات التي قد تؤدي إلى defects مفلتة."
terms:
  - en: "Test Basis"
    ar: "أساس الاختبار"
    def: "The body of knowledge used for test analysis and design, such as requirements, user stories and specifications."
    defAr: "مجموعة المعرفة المستخدمة في تحليل الاختبار وتصميمه، مثل المتطلبات وقصص المستخدم والمواصفات."
  - en: "Test Conditions"
    ar: "شروط الاختبار"
    def: "Testable aspects of the test object, derived from the test basis. They answer “what should we test?”."
    defAr: "جوانب قابلة للاختبار في موضوع الاختبار، مشتقة من أساس الاختبار. تجيب عن سؤال «ماذا نختبر؟»."
    match: ["Test Conditions", "Test Condition"]
  - en: "Boundary Value Analysis"
    ar: "تحليل القيم الحدّية"
    def: "A test technique that targets the edges of valid and invalid ranges."
    defAr: "تقنية اختبار تستهدف حواف المجالات الصحيحة وغير الصحيحة."
  - en: "Coverage Analysis"
    ar: "تحليل التغطية"
    def: "Mapping requirements and user stories to test conditions to find out whether all aspects of the test basis are covered."
    defAr: "ربط المتطلبات وقصص المستخدم بشروط الاختبار لمعرفة هل غُطّيت كل جوانب أساس الاختبار."
  - en: "Escaped Defects"
    ar: "defects مفلتة"
    def: "Defects that are not found during testing and reach later stages or users, often because of coverage gaps."
    defAr: "defects لم تُكتشف أثناء الاختبار ووصلت إلى مراحل لاحقة أو إلى المستخدمين، غالبًا بسبب فجوات في التغطية."
---
يبدأ القسم 2.2 بالانتقال من «كيف أكتب توجيهًا جيدًا؟» إلى «أين أستخدمه في عملي؟». يقول المنهج إن تطبيق تقنيات هندسة التوجيه على الاختبار يمكّن GenAI من دعم مهام مثل **تحليل الاختبار، وتصميمه، وأتمتته، وترتيب أولويات حالات الاختبار، وكشف الـ defects، وتحليل التغطية، ومراقبة الاختبار والتحكم فيه**. وباستخدام تقنيات مثل Prompt chaining وFew-shot وMeta prompting والجمع بينها، يستطيع الفريق **تكييف التوجيهات مع أهداف الاختبار المحددة**، فتصبح المخرجات أدق وأكثر صلة وفعالية. ويضع المنهج شرطًا يتكرر في الأقسام كلها: **المدخلات عالية الجودة ضرورية للحصول على نتائج ذات معنى.**

أول هذه المهام **تحليل الاختبار (test analysis)**، وهو يجيب عن سؤال: **ماذا ينبغي أن نختبر؟** يقول المنهج إن GenAI يستطيع دعمه بثلاث طرق رئيسية: **توليد شروط الاختبار وترتيب أولوياتها**، و**كشف defects في أساس الاختبار (test basis)**، و**تقديم تحليل للتغطية**.

| Input data | Output |
|---|---|
| Requirements | Prioritised test conditions |
| User stories | Acceptance criteria (as an example of test conditions) |
| Technical specifications | Questions and suggested improvements to the test basis |
| GUI wireframes and other relevant information | Coverage mapping, suggested test techniques |

المدخلات كلها أجزاء محتملة من أساس الاختبار، والمخرجات هي **نواتج التحليل المعتادة**، مثل شروط اختبار مرتبة حسب الأولوية، ومعايير القبول مثال عليها. ولهذا الهدف مستوى **K3**: ستُعطى سيناريو تحليل، وعليك أن تعرف كيف تستخدم GenAI فيه وماذا تتحقق منه.

### 1. كشف defects محتملة في أساس الاختبار — Identify Potential Defects in the Test Basis

**ماذا يفعل النموذج؟** يحلل أساس الاختبار بحثًا عن **التناقض، والغموض، والمعلومات الناقصة** التي قد تؤدي إلى defects لاحقًا. ويذكر المنهج طريقتين: **مقارنة أنماط متطلبات متشابهة**، أو **تطبيق معرفة من تقارير defects سابقة**. ثم يُبرز الحالات الشاذة المحتملة ويقترح تحسينات.

**لماذا يهم؟** عمليًا، الـ defect في المتطلب أرخص ما يكون عند اكتشافه قبل كتابة الشيفرة. **مثال من تطبيق التوصيل:** مسودة قصة الكوبونات تقول «التوصيل مجاني للطلبات من 20.00 دينار فأكثر» ولا تحدد هل تُحسب القيمة قبل الخصم أم بعده؛ هذا **غموض**. وقصة الإلغاء تقول «يمكن إلغاء الطلب قبل خروجه للتوصيل» ولا تذكر ما يحدث للمبلغ المدفوع بالبطاقة؛ هذا **نقص**. وإذا كتبت وثيقة أخرى أن الحد الأدنى 6.00 بدل 5.00، فهذا **تناقض**. النموذج يقترح، ومالك المنتج يقرر: في فريقنا قرر أن حد التوصيل المجاني يُحسب **قبل** الخصم.

### 2. توليد شروط الاختبار — Generate Test Conditions

**ماذا يفعل النموذج؟** يحلل المتطلبات وقصص المستخدم، ويستخدم **معالجة اللغة الطبيعية (natural language processing)** لتفسير معناها، ثم **يفككها إلى عبارات قابلة للقياس والاختبار**. وهكذا يساعد على ترجمة المتطلبات إلى شروط اختبار محددة.

**مثال:** من قصة الإلغاء يشتق النموذج شروطًا مثل: الإلغاء متاح في الحالات Placed وAccepted وPreparing؛ الإلغاء غير متاح في Out for delivery وDelivered؛ الطلب الملغى يظهر بحالة Cancelled في تطبيق العميل ولوحة المطعم. كل شرط يمكن فحصه، ومرتبط بجملة في القصة.

### 3. ترتيب الشروط حسب مستوى الخطر — Prioritise Test Conditions Based on Risk Level

**ماذا يفعل النموذج؟** إذا توفرت له **معلومات عن احتمال الخطر وأثر الفشل** لكل شرط، يساعد في ترتيب جهد الاختبار. ويذكر المنهج جوانب يأخذها في الاعتبار: **الالتزام التنظيمي**، و**الوظائف المواجهة للمستخدم** (مثل تسجيل الدخول أو معالجة الدفع)، و**بيانات الـ defects التاريخية**. ثم **يوصي** بمستويات أولوية.

لاحظ الشرط في جملة المنهج: «**مع** معلومات عن الاحتمال والأثر». النموذج لا يعرف وحده أن بوابة الدفع تعطلت مرتين في الإصدار الماضي؛ أنت من يعطيه ذلك.

| Test condition | Likelihood (given) | Impact (given) | Suggested priority |
|---|---|---|---|
| Card payment is charged once only | Medium (2 past defects) | High (money, third-party gateway) | High |
| Customer phone number not shown to other customers | Low | High (personal data) | High |
| Free delivery applied at 20.00 JOD | Medium | Medium | Medium |
| Arabic labels on the order history screen | Low | Low | Low |

### 4. دعم تحليل التغطية — Support Coverage Analysis

**ماذا يفعل النموذج؟** يربط المتطلبات وقصص المستخدم بشروط الاختبار، ليحدد **هل غُطّيت كل جوانب أساس الاختبار**. ويقول المنهج إن هذا مفيد خصوصًا في المشاريع ذات **المتطلبات المعقّدة**، حيث تؤدي فجوات التغطية إلى **defects مفلتة (escaped defects)**، أي defects تصل إلى المستخدمين.

**مثال:** تطلب مصفوفة تربط معايير قصة الكوبونات (نسبة مئوية، مبلغ ثابت، كوبون واحد، تاريخ انتهاء) بالشروط المشتقة. إذا لم يقابل معيار «تاريخ الانتهاء» أي شرط، ظهرت الفجوة قبل أن يكتشفها عميل يستخدم كوبونًا منتهيًا.

### 5. اقتراح تقنيات الاختبار — Suggest Test Techniques

**ماذا يفعل النموذج؟** يقترح تقنيات مناسبة، مثل **تحليل القيم الحدّية (Boundary Value Analysis)** و**تقسيم التكافؤ (equivalence partitioning)**، **بحسب نوع المتطلب** أو القصة. وهذا يساعد المختبِر على تطبيق أكثر التقنيات فعالية لكل شرط.

**مثال:** الحد الأدنى للطلب 5.00 دينار وعدد الوجبات 1–20 ← تحليل القيم الحدّية. طرق الدفع الثلاث (نقدًا، بطاقة، محفظة رقمية) ← تقسيم التكافؤ. وعمليًا، قد يقترح أيضًا تقنيات أخرى، مثل اختبار انتقال الحالات لحالات الطلب.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">The quality and relevance of the inputs directly decide how accurate and precise the analysis output is.</p><p class="gx-ar" lang="ar" dir="rtl">جودة المدخلات وملاءمتها تحدد مباشرة مدى دقة ناتج التحليل.</p></aside>

يختم المنهج القسم بهذه الجملة: **جودة المدخلات وملاءمتها للمهمة تؤثر مباشرة في دقة الناتج وإحكامه.** قصة غامضة تعطي شروطًا غامضة، ومخطط واجهة قديم يعطي معايير قبول لشاشة لم تعد موجودة.

### خطوات التطبيق — Step by Step

1. **حدّد المهمة**: أيّ المهام الخمس تريد؟ مهمة واحدة لكل توجيه أوضح من خمس مهام معًا.
2. **جهّز المدخلات**: القصة ومعاييرها، والقواعد المعتمدة، ومخطط الواجهة إن وُجد، وبيانات المخاطر إن كانت المهمة ترتيبًا.
3. **اكتب توجيهًا منظّمًا** بالمكوّنات الستة، مع قيد صريح: «لا تضف قواعد غير مذكورة؛ اكتب كل افتراض كسؤال».
4. **قسّم المهام الكبيرة إلى سلسلة**: الغموض، ثم قابلية الاختبار، ثم الاكتمال، مع مراجعة بعد كل خطوة.
5. **راجع كل سطر**: هل يستند إلى مصدر؟ هل فيه رقم أو مستوى خطر لم يأتِ منك؟
6. **حوّل الأسئلة المفتوحة** إلى مالك المنتج، وحدّث أساس الاختبار بعد إجابته.

### أمثلة محلولة — Worked Examples

**المثال 1: كشف defects في قصة الكوبونات.** المدخل: مسودة القصة ومعاييرها. التوجيه يطلب الغموض والتناقض والنقص فقط.

| Model finding | Type | Tester decision |
|---|---|---|
| Free delivery threshold: before or after the coupon? | Ambiguity | Ask PO; answer: before the discount |
| Can a percentage and a fixed coupon be combined? | Already answered | Reject finding: story says one coupon per order |
| What message appears for an expired coupon? | Missing information | Ask PO; add as acceptance criterion |

لاحظ الصف الثاني: النموذج أثار سؤالًا جوابه موجود في القصة. المراجعة البشرية لا تكتفي بقبول ما يقوله النموذج، بل ترفض ما لا يستحق.

**المثال 2: اختيار الاستخدام المناسب لـ GenAI.**

| Situation | Analysis task to use |
|---|---|
| 40 user stories for the new driver app; you fear some have no test conditions | Coverage analysis |
| A new rule: delivery fee 1.50 JOD below 20.00 JOD | Generate test conditions, then suggest techniques (BVA) |
| Two weeks left before release, too many conditions | Prioritise by risk, with likelihood and impact data |
| A story copied from an old project with conflicting statements | Identify defects in the test basis |

**المثال 3 (حالة خادعة): قصة التسجيل في منصة «تعلّم».** هذه هي القصة المستخدمة في التمارين أدناه: «كمتعلم أريد التسجيل بالبريد وكلمة مرور حتى أبدأ الدراسة». القواعد المعتمدة: البريد إلزامي وفريد، وكلمة المرور من 12 إلى 64 محرفًا، ويُعرض تأكيد عند إنشاء الحساب. وعبارة «التسجيل سريع وآمن» موجودة في المسودة ولم تُفصّل.

| Information | Analysis decision |
|---|---|
| Email is unique | Test condition: an already used email is rejected |
| 12–64 characters | Boundary test condition; suggest Boundary Value Analysis |
| “Fast” | Question: time limit, load and environment? |
| “Secure” | Question: which security properties and how to assess them? |
| No mention of email activation | Do not assume it; ask for clarification |

الفخ هنا أن النموذج قد يحوّل «سريع» إلى رقم من عنده. ولا نخلط شرط «رفض الطول غير المقبول» بحالة تفصيلية فيها كلمة مرور محددة وخطوات ونتيجة؛ هذا التفصيل يأتي في التصميم (القسم 2.2.2).

### لا تخلط بين — Don't Confuse

| | Test condition | Test case |
|---|---|---|
| Question | What to test? | How to test it, exactly? |
| Activity | Test analysis (this section) | Test design (2.2.2) |
| Example | Free delivery from 20.00 JOD | Order 19.99 JOD, no coupon, expect fee 1.50 JOD |

| | Defect in the test basis | Defect in the test object |
|---|---|---|
| Where | Requirement, story, specification | The software itself |
| Found by | Analysing documents (with GenAI support) | Executing tests |

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Accepting a number the model invented. If it turns “fast” into “under one second” with no approved source, record it as a question for the requirement owner instead. Likewise, a condition is not high risk just because the model says so: give it likelihood and impact data.</p><p class="gx-ar" lang="ar" dir="rtl">قبول رقم اخترعه النموذج. إذا حوّل «سريع» إلى «أقل من ثانية» دون مصدر معتمد، سجّل ذلك سؤالًا لمالك المتطلب. وبالمثل، الشرط ليس عالي الخطورة لأن النموذج قال ذلك: أعطه بيانات الاحتمال والأثر.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app testers gave the model the coupon story together with the checkout wireframe. The model noticed that the wireframe has one coupon field but the draft text said “apply your coupons”. The product owner confirmed one coupon per order, and the story was fixed before development started.</p><p class="gx-ar" lang="ar" dir="rtl">أعطى مختبرو تطبيق التوصيل النموذج قصة الكوبونات مع مخطط شاشة الدفع. لاحظ النموذج أن المخطط فيه حقل كوبون واحد، بينما تقول المسودة «طبّق كوبوناتك». أكد مالك المنتج أن المسموح كوبون واحد لكل طلب، وصُحّحت القصة قبل بدء التطوير.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">GenAI-2.2.1 is K3 (apply). Be ready to pick the right use of GenAI for an analysis scenario: finding test basis defects, generating test conditions, risk-based prioritisation, coverage evaluation, or suggesting a test technique. Also remember the inputs (requirements, user stories, specifications, wireframes) and the outputs (test conditions, acceptance criteria).</p><p class="gx-ar" lang="ar" dir="rtl">الهدف GenAI-2.2.1 من مستوى K3 (تطبيق). كن جاهزًا لاختيار الاستخدام المناسب لـ GenAI في سيناريو تحليل: كشف defects أساس الاختبار، أو توليد شروط الاختبار، أو الترتيب حسب المخاطر، أو تقييم التغطية، أو اقتراح تقنية اختبار. وتذكّر المدخلات (متطلبات، قصص مستخدم، مواصفات، مخططات واجهة) والمخرجات (شروط اختبار، معايير قبول).</p></aside>

### التمرينان العمليان — The Two Labs

**HO-2.2.1a** (مستوى H2) تمرين على كتابة توجيهات منظّمة **متعددة الوسائط (multimodal)**، أي بمدخلات نصية وصورة معًا. الهدف توليد معايير قبول **عالية الجودة**، أي **سليمة الصياغة وواضحة ومكتملة**، من قصة مستخدم ومخطط واجهة. ويمكن إضافة عناصر نصية أخرى للسياق، مثل **قيود على حقول الإدخال** أو **قواعد أعمال** لمعالجة البيانات. ثم **تُقارن النتائج** لتقييم أثر الصياغات المختلفة للتوجيه المنظّم (الدور، والسياق، والتعليمات، والمدخلات النصية والصورية، والقيود، وصيغة المخرجات). والدرس: أهمية بنية التوجيه، ودقة التعليمات، وقيمة البيانات النصية والصورية معًا.

**HO-2.2.1b** (مستوى H2) تمرين على **تسلسل التوجيهات مع تحقق بشري**: تحليل قصة وتحسين معايير قبولها **بالتدريج**، أولًا **بتحديد الغموض**، ثم **بتقييم قابلية الاختبار**، وأخيرًا **بتقييم الاكتمال**. في كل خطوة **تُراجع نتائج النموذج يدويًا وتُصحَّح عند الحاجة**، إما بتعديل الناتج مباشرة، أو بتوجيه متابعة. وهكذا تبدأ كل مرحلة من **نتيجة نظيفة** من المرحلة السابقة. والدرس: فائدة تقسيم المهمة المعقّدة إلى مهام فرعية مع تحقق بشري من نتيجة كل مرحلة.

<section class="gx-lab" data-lab="HO-2.2.1a"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Acceptance Criteria from Story + Wireframe</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · معايير قبول من القصة ومخطط الواجهة</span></span><span class="gx-lab-meta">HO-2.2.1a · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> write structured multimodal prompts that turn the sign-up story and the wireframe from section 1.1.4 into clear, testable acceptance criteria. Attach the wireframe image to a tool that accepts images; text alone is not a multimodal run.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> كتابة توجيهات منظّمة متعددة الوسائط تحوّل قصة التسجيل ومخطط الواجهة من القسم 1.1.4 إلى معايير قبول واضحة وقابلة للاختبار. أرفق صورة المخطط بأداة تقبل الصور؛ النص وحده ليس تجربة متعددة الوسائط.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Run a short prompt with the task only.</span><span class="gx-ar" lang="ar" dir="rtl">شغّل توجيهًا مختصرًا فيه المهمة فقط.</span></li><li><span class="gx-en" lang="en" dir="ltr">Run a structured prompt with all six components (below). Optionally add constraints or business rules.</span><span class="gx-ar" lang="ar" dir="rtl">شغّل توجيهًا منظّمًا بالمكوّنات الستة كلها (أدناه). ويمكنك إضافة قيود أو قواعد أعمال.</span></li><li><span class="gx-en" lang="en" dir="ltr">Compare clarity, completeness and faithfulness to the source between the two outputs.</span><span class="gx-ar" lang="ar" dir="rtl">قارن بين الناتجين من حيث الوضوح والاكتمال والالتزام بالمصدر.</span></li></ol><pre class="gx-lab-prompt"><code>Role: Test analyst.
Context: Sign-up for the "Taallam" e-learning platform.
Instruction: Derive clear, testable acceptance criteria.
Input data: The user story, the approved rules, and the attached wireframe.
Constraints: Separate what the story states, what the image shows,
             and what needs a product-owner decision.
             Do not infer server behaviour from the image.
Output format: ID | Proposed criterion | Source | Open question</code></pre><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">“No account is created when the email is missing” is backed by the rule that email is required. An account-lockout policy is not backed by a sign-up screenshot, so it should appear as an open question, not a criterion.</span><span class="gx-ar" lang="ar" dir="rtl">«لا يُنشأ حساب عند غياب البريد» مدعوم بقاعدة أن البريد إلزامي. أما سياسة قفل الحساب فلا تدعمها لقطة شاشة التسجيل، لذلك يجب أن تظهر سؤالًا مفتوحًا لا معيارًا.</span></p></details></div></section>

<section class="gx-lab" data-lab="HO-2.2.1b"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Chained Review with Human Checks</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · مراجعة متسلسلة مع تحقق بشري</span></span><span class="gx-lab-meta">HO-2.2.1b · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> analyse the user story step by step and improve its acceptance criteria, checking the model's output yourself after each step.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تحليل قصة المستخدم خطوة بخطوة وتحسين معايير قبولها، مع التحقق بنفسك من ناتج النموذج بعد كل خطوة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr"><strong>Ambiguity.</strong> Ask for the vague phrases only. Confirm “fast” is undefined and do not accept a number the model made up. For this exercise, assume the product owner then approves “within two seconds under a defined load in the test environment”.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الغموض.</strong> اطلب العبارات المبهمة فقط. تأكد أن «سريع» غير معرّفة، ولا تقبل رقمًا اخترعه النموذج. لغرض التمرين، افترض أن مالك المنتج اعتمد بعدها «خلال ثانيتين تحت حمل محدد في بيئة الاختبار».</span></li><li><span class="gx-en" lang="en" dir="ltr"><strong>Testability.</strong> Pass only the corrected text and ask for conditions with observable results. “A great experience” is not enough; “a visible confirmation message after successful creation” can be checked.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>قابلية الاختبار.</strong> مرّر النص المصحّح فقط، واطلب شروطًا لها نتائج قابلة للرصد. «تجربة ممتازة» لا تكفي؛ أما «رسالة تأكيد ظاهرة بعد الإنشاء الناجح» فيمكن فحصها.</span></li><li><span class="gx-en" lang="en" dir="ltr"><strong>Completeness.</strong> Ask for a matrix linking each condition to each rule and flagging gaps. Review every row before approving it.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الاكتمال.</strong> اطلب مصفوفة تربط كل شرط بكل قاعدة وتُظهر الفجوات. راجع كل صف قبل اعتماده.</span></li></ol><p><span class="gx-en" lang="en" dir="ltr">If a step's output is wrong, fix it directly or with a follow-up prompt before moving on.</span><span class="gx-ar" lang="ar" dir="rtl">إذا كان ناتج خطوة خاطئًا، صحّحه مباشرة أو بتوجيه متابعة قبل الانتقال.</span></p></div></section>

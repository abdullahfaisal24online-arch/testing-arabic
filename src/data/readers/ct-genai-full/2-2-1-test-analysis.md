---
order: 4
slug: "2-2-1"
chapter: 2
group: "2.2"
section: "2.2.1"
title: "Test Analysis with Generative AI"
titleAr: "تحليل الاختبار باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.1 · K3 / HO-2.2.1a · H2 / HO-2.2.1b · H2"
minutes: 12
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
takeawaysAr:
  - "يستطيع GenAI كشف عيوب أساس الاختبار، واشتقاق شروط الاختبار، وترتيبها حسب المخاطر، وفحص التغطية، واقتراح تقنيات الاختبار."
  - "المدخلات متطلبات وقصص مستخدم ومواصفات ومخططات واجهة؛ والمخرجات شروط اختبار ومعايير قبول."
  - "جودة المدخلات تحدد دقة الناتج. لا تقبل أبدًا حدًا زمنيًا أو مستوى خطر اخترعه النموذج."
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
---
تطبيق التوجيه المنظّم على مهام الاختبار يجعل GenAI يدعم التحليل والتصميم والأتمتة وترتيب الحالات وكشف العيوب وتقييم التغطية والمراقبة. والجمع بين Prompt chaining و Few-shot و Meta prompting يسمح للفريق بتكييف الأسلوب مع هدف الاختبار، فتصبح المخرجات أدق وأنفع.

التحليل يجيب أساسًا: **ماذا ينبغي أن نختبر؟** المدخلات قد تكون متطلبات، أو قصص مستخدم، أو مواصفات تقنية، أو مخططات واجهة، وكلها أجزاء محتملة من **Test Basis**. والمخرجات هي نواتج التحليل المعتادة، مثل شروط اختبار منظمة ومعايير قبول.

### مهام التحليل الخمس — Five Test Analysis Tasks

1. **كشف عيوب أساس الاختبار:** البحث عن التناقض والغموض والنقص، بالمقارنة مع متطلبات مشابهة أو الاستفادة من تاريخ العيوب، ثم اقتراح تحسينات.
2. **توليد شروط الاختبار:** تفسير المتطلبات وقصص المستخدم وتفكيكها إلى عبارات قابلة للقياس والاختبار.
3. **ترتيب الشروط حسب المخاطر:** عند توفر احتمال الخطر وأثره لكل شرط، مع مراعاة الالتزامات التنظيمية والوظائف المواجهة للعميل مثل الدخول والدفع وأنماط العيوب السابقة.
4. **دعم تقييم التغطية:** ربط كل متطلب أو قصة بشروطها لمعرفة ما غُطّي وما لم يُغطَّ، وهذا مهم خصوصًا في المتطلبات المعقّدة.
5. **اقتراح تقنيات الاختبار:** مثل تقسيم التكافؤ أو تحليل القيم الحدّية بحسب نوع المتطلب.

### كيف تبدو كل مهمة عمليًا؟ — Each Task in Practice

**كشف عيوب أساس الاختبار:** متطلبان يقولان «كلمة المرور 8 محارف على الأقل» و«كلمة المرور 12 محرفًا على الأقل» في وثيقتين مختلفتين. يستطيع النموذج إظهار هذا التناقض إذا أعطيته الوثيقتين معًا. وقد يلاحظ أيضًا أن المتطلبات لا تذكر ما يحدث عند نسيان كلمة المرور؛ هذا نقص يستحق سؤالًا.

**توليد شروط الاختبار:** من متطلب «يستطيع المستخدم إلغاء الطلب قبل الشحن»، يشتق النموذج شروطًا مثل: الإلغاء متاح قبل الشحن، الإلغاء غير متاح بعد الشحن، ماذا يحدث للمبلغ المدفوع عند الإلغاء. كل شرط قابل للاختبار ومرتبط بالمتطلب.

**الترتيب حسب المخاطر:** إذا أعطيت النموذج احتمال الخطر وأثره لكل شرط، يستطيع ترتيبها. الدفع والدخول وما تفرضه الأنظمة عادةً أعلى أثرًا. لكنه يعتمد على المعلومات التي تعطيه إياها، ولا يعرف وحده أن مكوّنًا معيّنًا تكررت فيه العيوب الإصدار الماضي.

**تقييم التغطية:** تطلب مصفوفة تربط كل متطلب بالشروط المشتقة منه، فتظهر المتطلبات التي لا يقابلها أي شرط. هذا مفيد خصوصًا في المتطلبات المعقّدة التي قد يفلت منها جزء دون أن يلاحظه أحد.

**اقتراح التقنيات:** لحقل رقمي له مدى، يقترح تحليل القيم الحدّية. لحقل له فئات قيم، يقترح تقسيم التكافؤ. لقواعد أعمال مركّبة، قد يقترح جدول القرارات.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">The quality and relevance of the inputs directly decide how accurate and precise the analysis output is.</p><p class="gx-ar" lang="ar" dir="rtl">جودة المدخلات وملاءمتها تحدد مباشرة مدى دقة ناتج التحليل.</p></aside>

### حالة تطبيقية — Worked Case

القصة: «كمتعلم أريد التسجيل بالبريد وكلمة مرور حتى أبدأ الدراسة». القواعد المعتمدة: البريد إلزامي وفريد، وكلمة المرور من 12 إلى 64 محرفًا، ويُعرض تأكيد عند إنشاء الحساب. عبارة «التسجيل سريع وآمن» موجودة في المسودة ولم تُفصّل.

| Information | قرار التحليل |
|---|---|
| البريد فريد | شرط للتحقق من البريد المستخدم سابقًا |
| 12–64 محرفًا | شرط للحدود واقتراح Boundary Value Analysis |
| سريع | سؤال عن حد زمني وشروط الحمل والبيئة |
| آمن | سؤال عن الخصائص الأمنية ومعايير تقييمها |
| لا ذكر لتفعيل البريد | لا نفترضه؛ نطلب توضيحًا |

لا نخلط شرط «رفض الطول غير المقبول» بحالة تفصيلية فيها كلمة مرور محددة وخطوات ونتيجة. هذا التفصيل يأتي في التصميم.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Accepting a number the model invented. If it turns “fast” into “under one second” with no approved source, record it as a question for the requirement owner instead. Likewise, a condition is not high risk just because the model says so: give it likelihood and impact data.</p><p class="gx-ar" lang="ar" dir="rtl">قبول رقم اخترعه النموذج. إذا حوّل «سريع» إلى «أقل من ثانية» دون مصدر معتمد، سجّل ذلك سؤالًا لمالك المتطلب. وبالمثل، الشرط ليس عالي الخطورة لأن النموذج قال ذلك: أعطه بيانات الاحتمال والأثر.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">GenAI-2.2.1 is K3 (apply). Be ready to pick the right use of GenAI for an analysis scenario: finding test basis defects, generating test conditions, risk-based prioritisation, coverage evaluation, or suggesting a test technique. Also remember the inputs (requirements, user stories, specifications, wireframes) and the outputs (test conditions, acceptance criteria).</p><p class="gx-ar" lang="ar" dir="rtl">الهدف GenAI-2.2.1 من مستوى K3 (تطبيق). كن جاهزًا لاختيار الاستخدام المناسب لـ GenAI في سيناريو تحليل: كشف عيوب أساس الاختبار، أو توليد شروط الاختبار، أو الترتيب حسب المخاطر، أو تقييم التغطية، أو اقتراح تقنية اختبار. وتذكّر المدخلات (متطلبات، قصص مستخدم، مواصفات، مخططات واجهة) والمخرجات (شروط اختبار، معايير قبول).</p></aside>

<section class="gx-lab" data-lab="HO-2.2.1a"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Acceptance Criteria from Story + Wireframe</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · معايير قبول من القصة ومخطط الواجهة</span></span><span class="gx-lab-meta">HO-2.2.1a · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> write structured multimodal prompts that turn the sign-up story and the wireframe from section 1.1.4 into clear, testable acceptance criteria. Attach the wireframe image to a tool that accepts images; text alone is not a multimodal run.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> كتابة توجيهات منظّمة متعددة الوسائط تحوّل قصة التسجيل ومخطط الواجهة من القسم 1.1.4 إلى معايير قبول واضحة وقابلة للاختبار. أرفق صورة المخطط بأداة تقبل الصور؛ النص وحده ليس تجربة متعددة الوسائط.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Run a short prompt with the task only.</span><span class="gx-ar" lang="ar" dir="rtl">شغّل توجيهًا مختصرًا فيه المهمة فقط.</span></li><li><span class="gx-en" lang="en" dir="ltr">Run a structured prompt with all six components (below). Optionally add constraints or business rules.</span><span class="gx-ar" lang="ar" dir="rtl">شغّل توجيهًا منظّمًا بالمكوّنات الستة كلها (أدناه). ويمكنك إضافة قيود أو قواعد أعمال.</span></li><li><span class="gx-en" lang="en" dir="ltr">Compare clarity, completeness and faithfulness to the source between the two outputs.</span><span class="gx-ar" lang="ar" dir="rtl">قارن بين الناتجين من حيث الوضوح والاكتمال والالتزام بالمصدر.</span></li></ol><pre class="gx-lab-prompt"><code>Role: Test analyst.
Context: Sign-up for the "Taallam" e-learning platform.
Instruction: Derive clear, testable acceptance criteria.
Input data: The user story, the approved rules, and the attached wireframe.
Constraints: Separate what the story states, what the image shows,
             and what needs a product-owner decision.
             Do not infer server behaviour from the image.
Output format: ID | Proposed criterion | Source | Open question</code></pre><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">“No account is created when the email is missing” is backed by the rule that email is required. An account-lockout policy is not backed by a sign-up screenshot, so it should appear as an open question, not a criterion.</span><span class="gx-ar" lang="ar" dir="rtl">«لا يُنشأ حساب عند غياب البريد» مدعوم بقاعدة أن البريد إلزامي. أما سياسة قفل الحساب فلا تدعمها لقطة شاشة التسجيل، لذلك يجب أن تظهر سؤالًا مفتوحًا لا معيارًا.</span></p></details></div></section>

<section class="gx-lab" data-lab="HO-2.2.1b"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Chained Review with Human Checks</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · مراجعة متسلسلة مع تحقق بشري</span></span><span class="gx-lab-meta">HO-2.2.1b · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> analyse the user story step by step and improve its acceptance criteria, checking the model's output yourself after each step.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تحليل قصة المستخدم خطوة بخطوة وتحسين معايير قبولها، مع التحقق بنفسك من ناتج النموذج بعد كل خطوة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr"><strong>Ambiguity.</strong> Ask for the vague phrases only. Confirm “fast” is undefined and do not accept a number the model made up. For this exercise, assume the product owner then approves “within two seconds under a defined load in the test environment”.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الغموض.</strong> اطلب العبارات المبهمة فقط. تأكد أن «سريع» غير معرّفة، ولا تقبل رقمًا اخترعه النموذج. لغرض التمرين، افترض أن مالك المنتج اعتمد بعدها «خلال ثانيتين تحت حمل محدد في بيئة الاختبار».</span></li><li><span class="gx-en" lang="en" dir="ltr"><strong>Testability.</strong> Pass only the corrected text and ask for conditions with observable results. “A great experience” is not enough; “a visible confirmation message after successful creation” can be checked.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>قابلية الاختبار.</strong> مرّر النص المصحّح فقط، واطلب شروطًا لها نتائج قابلة للرصد. «تجربة ممتازة» لا تكفي؛ أما «رسالة تأكيد ظاهرة بعد الإنشاء الناجح» فيمكن فحصها.</span></li><li><span class="gx-en" lang="en" dir="ltr"><strong>Completeness.</strong> Ask for a matrix linking each condition to each rule and flagging gaps. Review every row before approving it.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الاكتمال.</strong> اطلب مصفوفة تربط كل شرط بكل قاعدة وتُظهر الفجوات. راجع كل صف قبل اعتماده.</span></li></ol><p><span class="gx-en" lang="en" dir="ltr">If a step's output is wrong, fix it directly or with a follow-up prompt before moving on.</span><span class="gx-ar" lang="ar" dir="rtl">إذا كان ناتج خطوة خاطئًا، صحّحه مباشرة أو بتوجيه متابعة قبل الانتقال.</span></p></div></section>

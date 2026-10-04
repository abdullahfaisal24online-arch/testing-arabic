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
takeaways:
  - "GenAI can find test basis defects, derive test conditions, prioritise them by risk, check coverage and suggest test techniques."
  - "Inputs are requirements, user stories, specifications and wireframes; outputs are test conditions and acceptance criteria."
  - "Input quality decides output accuracy. Never accept a threshold or risk level the model invented."
terms:
  - en: "Test Basis"
    ar: "أساس الاختبار"
    def: "The body of knowledge used for test analysis and design, such as requirements, user stories and specifications."
  - en: "Test Conditions"
    ar: "شروط الاختبار"
    def: "Testable aspects of the test object, derived from the test basis. They answer “what should we test?”."
    match: ["Test Conditions", "Test Condition"]
  - en: "Boundary Value Analysis"
    ar: "تحليل القيم الحدّية"
    def: "A test technique that targets the edges of valid and invalid ranges."
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

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea</p><p>The quality and relevance of the inputs directly decide how accurate and precise the analysis output is.</p></aside>

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

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Accepting a number the model invented. If it turns “fast” into “under one second” with no approved source, record it as a question for the requirement owner instead. Likewise, a condition is not high risk just because the model says so: give it likelihood and impact data.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>GenAI-2.2.1 is K3 (apply). Be ready to pick the right use of GenAI for an analysis scenario: finding test basis defects, generating test conditions, risk-based prioritisation, coverage evaluation, or suggesting a test technique. Also remember the inputs (requirements, user stories, specifications, wireframes) and the outputs (test conditions, acceptance criteria).</p></aside>

<section class="gx-lab" data-lab="HO-2.2.1a"><header class="gx-lab-head"><span class="gx-lab-title">Lab · Acceptance Criteria from Story + Wireframe</span><span class="gx-lab-meta">HO-2.2.1a · H2</span></header><div class="gx-lab-body"><p><strong>Goal:</strong> write structured multimodal prompts that turn the sign-up story and the wireframe from section 1.1.4 into clear, testable acceptance criteria. Attach the wireframe image to a tool that accepts images; text alone is not a multimodal run.</p><ol class="gx-lab-steps"><li>Run a short prompt with the task only.</li><li>Run a structured prompt with all six components (below). Optionally add constraints or business rules.</li><li>Compare clarity, completeness and faithfulness to the source between the two outputs.</li></ol><pre class="gx-lab-prompt"><code>Role: Test analyst.
Context: Sign-up for the "Taallam" e-learning platform.
Instruction: Derive clear, testable acceptance criteria.
Input data: The user story, the approved rules, and the attached wireframe.
Constraints: Separate what the story states, what the image shows,
             and what needs a product-owner decision.
             Do not infer server behaviour from the image.
Output format: ID | Proposed criterion | Source | Open question</code></pre><details class="gx-lab-answer"><summary>What good looks like</summary><p>“No account is created when the email is missing” is backed by the rule that email is required. An account-lockout policy is not backed by a sign-up screenshot, so it should appear as an open question, not a criterion.</p></details></div></section>

<section class="gx-lab" data-lab="HO-2.2.1b"><header class="gx-lab-head"><span class="gx-lab-title">Lab · Chained Review with Human Checks</span><span class="gx-lab-meta">HO-2.2.1b · H2</span></header><div class="gx-lab-body"><p><strong>Goal:</strong> analyse the user story step by step and improve its acceptance criteria, checking the model's output yourself after each step.</p><ol class="gx-lab-steps"><li><strong>Ambiguity.</strong> Ask for the vague phrases only. Confirm “fast” is undefined and do not accept a number the model made up. For this exercise, assume the product owner then approves “within two seconds under a defined load in the test environment”.</li><li><strong>Testability.</strong> Pass only the corrected text and ask for conditions with observable results. “A great experience” is not enough; “a visible confirmation message after successful creation” can be checked.</li><li><strong>Completeness.</strong> Ask for a matrix linking each condition to each rule and flagging gaps. Review every row before approving it.</li></ol><p>If a step's output is wrong, fix it directly or with a follow-up prompt before moving on.</p></div></section>

---
order: 6
slug: "1-2-2"
chapter: 1
group: "1.2"
section: "1.2.2"
title: "AI Chatbots and LLM-Powered Testing Applications for Software Testing"
titleAr: "روبوتات المحادثة وتطبيقات الاختبار المدعومة بالنماذج"
objectives: "GenAI-1.2.2 · K2"
minutes: 15
lo:
  GenAI-1.2.2: "Compare the ways of interacting with GenAI in testing: chatbots and integrated applications."
loAr:
  GenAI-1.2.2: "تقارن طرق التفاعل مع GenAI في الاختبار: المحادثة والتطبيقات المدمجة."
takeaways:
  - "Chatbots suit exploration, quick clarification and learning; integrated applications suit repeated or specialised workflows."
  - "Neither interface is secure by default: data handling, permissions and controls decide."
  - "Both need clear prompting, suitable inputs and verification of results."
  - "The two ways differ in functionality, flexibility and integration approach, and they complement each other."
  - "Chatbots are accessible even to non-technical stakeholders; integrated applications bring customisation and scalability through APIs."
takeawaysAr:
  - "المحادثة تناسب الاستكشاف والتوضيح السريع والتعلّم؛ والتطبيقات المدمجة تناسب سير العمل المتكرر أو المتخصص."
  - "لا توجد واجهة آمنة تلقائيًا: طريقة التعامل مع البيانات والصلاحيات والضوابط هي التي تحدد."
  - "الاثنان يحتاجان توجيهًا واضحًا ومدخلات مناسبة وتحققًا من النتائج."
  - "الطريقتان تختلفان في الوظيفة والمرونة وأسلوب التكامل، وتكمّل إحداهما الأخرى."
  - "المحادثة متاحة حتى لأصحاب المصلحة غير التقنيين؛ والتطبيقات المدمجة تجلب التخصيص وقابلية التوسع عبر APIs."
terms:
  - en: "AI Chatbot"
    ar: "روبوت المحادثة"
    def: "A conversational interface where the user talks to the model in natural language, adds context and reviews each reply."
    defAr: "واجهة حوارية يتحدث فيها المستخدم مع النموذج بلغة طبيعية، ويضيف السياق، ويراجع كل رد."
    match: ["AI Chatbots", "AI Chatbot"]
  - en: "LLM-Powered Testing Application"
    ar: "تطبيق اختبار مدعوم بالنماذج"
    def: "A testing tool that integrates model capabilities through APIs to perform specific tasks inside the team's workflow."
    defAr: "أداة اختبار تدمج قدرات النموذج عبر APIs لتنفيذ مهام محددة داخل سير عمل الفريق."
    match: ["LLM-Powered Testing Applications"]
  - en: "Prompt Chaining"
    ar: "تسلسل التوجيهات"
    def: "Splitting work into linked prompts, where each output feeds the next step and can be reviewed and refined in between."
    defAr: "تقسيم العمل إلى توجيهات مترابطة، يغذّي فيها ناتج كل خطوة الخطوة التالية، مع مراجعة وتحسين بينها."
  - en: "AI Agent"
    ar: "الوكيل الذكي"
    def: "An application that uses a model to understand a task and can call tools to take actions. Covered in Chapter 4."
    defAr: "تطبيق يستخدم النموذج لفهم المهمة ويستطيع استدعاء أدوات لتنفيذ إجراءات. موضوع الفصل الرابع."
    match: ["AI Agents"]
---
عرفت في القسم السابق ماذا تستطيع النماذج أن تفعل في الاختبار. السؤال التالي عملي جدًا: **كيف أصل إلى هذه القدرات؟** يحدد المنهج طريقتين **متكاملتين** يستطيع المختبِر، في أي دور كان، أن يستفيد بهما من الذكاء التوليدي: **روبوتات المحادثة (AI Chatbots)** التي تعطي ردودًا فورية على الأسئلة، و**تطبيقات الاختبار المدعومة بالنماذج (LLM-Powered Testing Applications)** المدمجة في أدوات الاختبار.

كلتاهما تساعد المختبِر، لكنهما تختلفان، كما يقول المنهج، في **الوظيفة (functionality)**، و**المرونة (flexibility)**، و**أسلوب التكامل (integration approach)**. والفرق بينهما ليس في «ذكاء» النموذج؛ فقد يكون النموذج نفسه خلف الطريقتين. الفرق في طريقة الوصول إليه، ومن يوفّر السياق، ومدى قابلية العمل للتكرار والتوسع. ولهذا الهدف مستوى **K2**: يُتوقع منك أن تقارن بينهما وأن تعرف أيهما يناسب موقفًا معينًا.

### روبوتات المحادثة — AI Chatbots

**واجهة حوارية مباشرة**

توفّر روبوتات المحادثة **واجهة حوارية سهلة الاستخدام** تتيح للمختبِر **التواصل مباشرة مع النموذج**. يكتب بلغة طبيعية **أسئلة أو أوامر أو توجيهات**، ويحصل على **ردود فورية ومدركة للسياق (contextually aware)**. معنى «مدركة للسياق» أن النموذج يأخذ بالحسبان ما قيل سابقًا في المحادثة نفسها، ضمن حدود نافذة السياق التي عرفتها في القسم 1.1.2. فلا تحتاج أن تعيد شرح قصة المستخدم في كل رسالة.

**التحسين التدريجي بتسلسل التوجيهات**

يذكر المنهج أن المختبِر يستطيع، عبر تقنيات مثل **تسلسل التوجيهات (prompt chaining)**، أن **يحسّن الناتج تدريجيًا**: يطلب شيئًا، يراجعه، ثم يبني عليه الطلب التالي. ستتعمق في هذه التقنية في الفصل الثاني.

**مثال من تطبيق التوصيل:** مختبِر يلصق قصة «إلغاء الطلب» ويسأل: «ما الذي قد يكون غامضًا هنا؟». يرد النموذج: ماذا يحدث للمبلغ المدفوع بالبطاقة عند الإلغاء؟ يسأل المختبِر مالك المنتج ويضيف الإجابة للمحادثة، ثم يطلب: «اقترح حالات اختبار للإلغاء في كل حالة طلب». ثم يسأل: «لماذا اقترحت حالة سلبية بعد Out for delivery؟». كل خطوة تبني على السابقة، والمختبِر يراجع في كل مرة.

**متى تناسب المحادثة؟**

يقول المنهج إن المحادثة **فعّالة بشكل خاص** في:

- **المهام الروتينية:** إعادة صياغة تقرير defect، أو تلخيص ملاحظات اجتماع.
- **الاختبار الاستكشافي (exploratory testing):** اقتراح أفكار لما يمكن تجربته أثناء جلسة استكشاف، مثل «ماذا لو تغيّرت لغة الواجهة أثناء الدفع؟».
- **تأهيل المختبرين الجدد (onboarding):** وصول سريع إلى معرفة الاختبار وممارساته، كأن يسأل مختبِر انضم حديثًا عن الفرق بين الشدة والأولوية.

وتفيد أكثر في المواقف التي تحتاج **تغذية راجعة سريعة**، أو **توضيح مفاهيم الاختبار**، أو **الاستكشاف الديناميكي للمتطلبات وحالات الاختبار المحتملة**.

**متاحة لغير التقنيين**

بسبب **واجهتها البديهية**، تبقى المحادثة **متاحة حتى لأصحاب المصلحة غير التقنيين**. هذا **يوسّع قاعدة المستخدمين المحتملين** و**يشجّع على تبنٍّ أوسع**. مثال: مالك المنتج في الفريق يستطيع أن يسأل المحادثة «هل معايير القبول التي كتبتها لقصة المحفظة الرقمية قابلة للاختبار؟» دون أن يكتب سطر شيفرة.

عمليًا، قوة المحادثة هي ضعفها أيضًا: السياق يعتمد على ما ينسخه المستخدم بنفسه، والجودة تعتمد على مهارته، ويصعب تكرار العمل بالجودة نفسها على مئة قصة.

### تطبيقات الاختبار المدعومة بالنماذج — LLM-Powered Testing Applications

**التكامل عبر APIs**

في المقابل، تعتمد هذه التطبيقات على **دمج قدرات النموذج عبر APIs** لأداء **مهام اختبار محددة جيدًا، ومؤتمتة في الغالب**. المختبِر هنا لا يحاور النموذج؛ الأداة هي التي تبني الطلب وترسله وتستقبل الناتج.

**التخصيص وقابلية التوسع**

توفّر هذه التطبيقات **تخصيصًا أكبر** و**قابلية توسع أعلى**. ويذكر المنهج أنها تتيح **للمؤسسات ولمورّدي الأدوات** أن **يدمجوا الذكاء التوليدي في أطر الاختبار القائمة**. الفريق يستطيع أن يضبط القالب والمدخلات وصيغة الناتج مرة واحدة، ثم تُستدعى العملية آلاف المرات بالطريقة نفسها.

**أتمتة المهام المتكررة أو المعقّدة**

هذا التكامل يمكّن من **أتمتة المهام المتكررة أو المعقّدة**، وأمثلة المنهج عليها: **توليد حالات الاختبار**، و**تحليل الـ defects**، و**توليد بيانات الاختبار (test data synthesis)**.

**مثال من تطبيق التوصيل:** أداة إدارة الاختبار التي يستخدمها الفريق تضيف زرًّا «اقترح حالات» بجانب كل قصة مستخدم. عند الضغط، تجمع الأداة القصة ومعايير القبول، وتبني التوجيه بقالب ثابت أعدّه الفريق، وترسله للنموذج، ثم تحفظ المسودة مرتبطة بالقصة لمراجعة المختبِر. وفي خط CI، تُرسل الاختبارات الفاشلة بعد كل commit إلى النموذج ليقترح تجميعها حسب السبب المحتمل. المستخدم لم يكتب أي توجيه؛ التكامل هو الذي وفّر السياق.

**الوكلاء الذكيون**

في **التطبيقات الأكثر تقدمًا**، تستطيع المؤسسات أن تبني **وكلاء ذكيين (AI agents)** مصممين خصيصًا لأداء **أدوار اختبار معينة**. هذا موضوع الفصل الرابع.

### المقارنة — Side by Side

| Compared on | AI chatbot | LLM-powered testing application |
| --- | --- | --- |
| Functionality | Questions, commands and prompts in a conversation | Well-defined, often automated tasks |
| Flexibility | High: any topic, iterative refinement | Customisable for specific workflows |
| Integration | Direct use, no integration needed | LLM embedded via APIs in test frameworks |
| Context | Provided by the user in the chat | Gathered by the tool's integrations |
| Scale | One conversation at a time | Repeated calls inside automated workflows |
| Typical users | Any tester, new testers, non-technical stakeholders | Teams, organisations and tool vendors |
| Typical uses | Fast feedback, exploration, onboarding, concept clarification | Test case generation, defect analysis, test data synthesis |

الطريقتان **متكاملتان** لا متنافستان. عمليًا، كثيرًا ما يجرّب الفريق التوجيه أولًا في المحادثة حتى يصل إلى صيغة جيدة، ثم يحوّله إلى قالب ثابت في تطبيق مدمج.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming the interface decides security. An integrated application is not secure just because it is integrated, and not every chat is insecure. What matters is how data, permissions, the runtime environment and controls are handled. Chapter 3 covers this in detail.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن الواجهة هي التي تحدد الأمان. التطبيق المدمج ليس آمنًا لمجرد أنه مدمج، وليست كل محادثة غير آمنة. المهم هو طريقة التعامل مع البيانات والصلاحيات وبيئة التشغيل والضوابط. الفصل الثالث يفصّل ذلك.</p></aside>

### القاسم المشترك: هندسة التوجيه — Prompt Engineering in Both

يؤكد المنهج أنه **بغض النظر عن طريقة التفاعل**، محادثة كانت أو تطبيقًا مدمجًا، فإن نجاح استخدام الذكاء التوليدي في الاختبار يتطلب **هندسة توجيه قوية (prompt engineering)**، وهي موضوع الفصل الثاني. **التوجيهات المصممة بعناية** و**التعليمات الواضحة والمحددة** ضرورية **لزيادة احتمال** أن تأتي المخرجات **دقيقة، وذات صلة، ومتوافقة مع أهداف الاختبار**.

لاحظ عبارة «زيادة احتمال»: التوجيه الجيد لا يضمن ناتجًا صحيحًا، لكنه يرفع فرصته. ولهذا يبقى التحقق ضروريًا. ويضيف المنهج أن هذه الممارسة **تزيد القيمة المستفادة** من الذكاء التوليدي، و**تتيح دعمًا أكثر اتساقًا وموثوقية** لمجموعة واسعة من أنشطة الاختبار.

وفي التطبيق المدمج، قد لا يكتب المختبِر التوجيه بنفسه، لكن أحدًا كتبه: الفريق أو مورّد الأداة في القالب الثابت. التوجيه الضعيف في القالب يتكرر في كل استدعاء، فأثره أكبر من توجيه ضعيف في محادثة واحدة.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In the delivery app team, a tester first refined a prompt in a chatbot to turn a user story into test cases, adding the rule that the free-delivery limit is checked before the coupon. Once it worked well on five stories, the team saved it as the template behind the test tool's “Suggest cases” button. The chatbot was the lab; the integrated application made it repeatable for every story in every sprint.</p><p class="gx-ar" lang="ar" dir="rtl">في فريق تطبيق التوصيل، حسّن أحد المختبرين أولًا توجيهًا في المحادثة لتحويل قصة مستخدم إلى حالات اختبار، وأضاف إليه قاعدة أن حد التوصيل المجاني يُفحص قبل الكوبون. وعندما نجح جيدًا على خمس قصص، حفظه الفريق قالبًا خلف زر «اقترح حالات» في أداة الاختبار. كانت المحادثة هي المختبر؛ والتطبيق المدمج جعل العمل قابلًا للتكرار لكل قصة في كل sprint.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">GenAI-1.2.2 asks you to compare interaction models. Match the scenario: ad-hoc questions, exploration, onboarding, iterative refinement through prompt chaining → AI chatbot. Repeated, well-defined, automated tasks inside existing test frameworks, more customisation and scale, or agents with specific roles → LLM-powered testing application. In both, strong prompt engineering is essential.</p><p class="gx-ar" lang="ar" dir="rtl">الهدف GenAI-1.2.2 يطلب منك المقارنة بين نماذج التفاعل. طابق السيناريو: أسئلة عابرة، واستكشاف، وتأهيل المختبرين الجدد، وتحسين تدريجي عبر تسلسل التوجيهات ← محادثة AI. مهام متكررة ومحددة ومؤتمتة داخل أطر الاختبار القائمة، أو حاجة لتخصيص وتوسّع أكبر، أو وكلاء بأدوار محددة ← تطبيق اختبار مدعوم بالنماذج. وفي الحالتين هندسة التوجيه الجيدة أساسية.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea · The tester's role</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية · دور المختبِر</span></p><p class="gx-en" lang="en" dir="ltr">The tester still sets the goal, provides the test basis, checks coverage and evidence, corrects the output and makes the decision. A generated draft or a tidy report does not prove the system passed the test.</p><p class="gx-ar" lang="ar" dir="rtl">المختبِر هو من يحدد الهدف، ويوفّر أساس الاختبار، ويتحقق من التغطية والأدلة، ويصحّح الناتج، ويتخذ القرار. المسودة المولّدة أو التقرير المرتب لا يثبتان أن النظام اجتاز الاختبار.</p></aside>

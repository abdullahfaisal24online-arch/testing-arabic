---
order: 6
slug: "1-2-2"
chapter: 1
group: "1.2"
section: "1.2.2"
title: "AI Chatbots and LLM-Powered Testing Applications for Software Testing"
titleAr: "روبوتات المحادثة وتطبيقات الاختبار المدعومة بالنماذج"
objectives: "GenAI-1.2.2 · K2"
minutes: 7
lo:
  GenAI-1.2.2: "Compare the ways of interacting with GenAI in testing: chatbots and integrated applications."
loAr:
  GenAI-1.2.2: "تقارن طرق التفاعل مع GenAI في الاختبار: المحادثة والتطبيقات المدمجة."
takeaways:
  - "Chatbots suit exploration, quick clarification and learning; integrated applications suit repeated or specialised workflows."
  - "Neither interface is secure by default: data handling, permissions and controls decide."
  - "Both need clear prompting, suitable inputs and verification of results."
takeawaysAr:
  - "المحادثة تناسب الاستكشاف والتوضيح السريع والتعلّم؛ والتطبيقات المدمجة تناسب سير العمل المتكرر أو المتخصص."
  - "لا توجد واجهة آمنة تلقائيًا: طريقة التعامل مع البيانات والصلاحيات والضوابط هي التي تحدد."
  - "الاثنان يحتاجان توجيهًا واضحًا ومدخلات مناسبة وتحققًا من النتائج."
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
يحدد السيليبس طريقتين رئيسيتين للتفاعل مع الذكاء التوليدي في الاختبار: المحادثة المباشرة مع النموذج، أو تطبيقات اختبار تدمج النموذج داخلها. الفرق بينهما ليس في «ذكاء» النموذج، بل في طريقة الوصول إليه، ومن يوفّر السياق، ومدى قابلية العمل للتكرار والتوسع.

### المحادثة المباشرة — AI Chatbots

يتفاعل المستخدم بلغة طبيعية مع النموذج: يسأل، ويزوّد السياق، ويعدّل الطلب، ثم يراجع الرد. هذا مفيد للتغذية الراجعة السريعة، والمهام الروتينية، والاختبار الاستكشافي، وتوضيح المفاهيم، ومساعدة أعضاء جدد على فهم العمل.

تدعم المحادثة **Prompt Chaining**: تحسين النتيجة عبر توجيهات مترابطة، مثل تحليل قصة مستخدم، ثم توضيح الغموض، ثم اقتراح الحالات. سهولة الواجهة تجعلها متاحة أيضًا لأصحاب مصلحة غير تقنيين.

مثال: مختبِر جديد في الفريق يلصق قصة مستخدم في المحادثة ويسأل «ما الذي قد يكون غامضًا هنا؟»، ثم يطلب اقتراح حالات للأجزاء الواضحة، ثم يسأل عن الفرق بين حالتين لم يفهمهما. كل خطوة مبنية على السابقة، والمختبِر يراجع ويعدّل في كل مرة. هذا الاستخدام سريع ومرن، لكنه يعتمد على ما ينسخه المستخدم بنفسه من سياق، ويصعب تكراره بنفس الجودة لمئة قصة.

### قدرات مدمجة في أدوات الاختبار — LLM-Powered Testing Applications

تدمج التطبيقات قدرات النماذج عبر APIs داخل أطر الاختبار القائمة، لأداء مهام محددة ومؤتمتة غالبًا، مثل توليد حالات الاختبار وتحليل العيوب وتجهيز بيانات الاختبار. قد تقرأ الأداة متطلبات من نظام إدارة العمل، وتجهّز الطلب، وتولّد مسودة حالات اختبار ضمن سير عمل الفريق. يوفر ذلك فرصًا أكبر للتخصيص والتوسع وأتمتة المهام المتكررة أو المعقّدة.

في تطبيقات أكثر تقدمًا، قد تتولى **AI Agents** أدوارًا محددة وتستخدم أدوات لتنفيذ مهام؛ هذا موضوع الفصل الرابع.

| Compared on | AI Chatbot | LLM-powered testing app |
| --- | --- | --- |
| Interaction | محادثة وأسئلة وتوجيهات مباشرة | تدفق عمل مدمج ومهام محددة |
| Context | يقدّمه المستخدم أو مصادر متاحة للمحادثة | قد تجمعه تكاملات الأداة وفق صلاحياتها |
| Flexibility | مناسب للاستكشاف والتوضيح السريع | قابل للتخصيص لأعمال متكررة أو متخصصة |
| Scale | يعتمد على طريقة استخدام المحادثات | يتيح دمج الاستدعاءات ضمن سير عمل آلي |
| Review | يقيّم المستخدم الرد | تحتاج الأداة كذلك ضوابط تحقق ومراجعة |

مثال: أداة إدارة اختبار تضيف زرًّا «اقترح حالات» بجانب كل قصة مستخدم. عند الضغط، تجمع الأداة القصة ومعايير القبول والمكوّن المرتبط من النظام، وتبني التوجيه بقالب ثابت أعدّه الفريق، وترسله للنموذج، ثم تحفظ المسودة مرتبطة بالقصة لمراجعة المختبِر. المستخدم لم يكتب أي توجيه؛ التكامل هو الذي وفّر السياق.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-ar">خطأ شائع</span><span class="gx-en" lang="en" dir="ltr">Common mistake</span></p><p class="gx-ar">افتراض أن الواجهة هي التي تحدد الأمان. التطبيق المدمج ليس آمنًا لمجرد أنه مدمج، وليست كل محادثة غير آمنة. المهم هو طريقة التعامل مع البيانات والصلاحيات وبيئة التشغيل والضوابط. الفصل الثالث يفصّل ذلك.</p><p class="gx-en" lang="en" dir="ltr">Assuming the interface decides security. An integrated application is not secure just because it is integrated, and not every chat is insecure. What matters is how data, permissions, the runtime environment and controls are handled. Chapter 3 covers this in detail.</p></aside>

### اختيار طريقة التفاعل — Choosing the Interaction

لفهم مفهوم واكتشاف الغموض في قصة مستخدم واحدة، قد تكون المحادثة مناسبة. ولإعداد مسودات حالات اختبار بصورة متكررة من نظام إدارة المتطلبات، قد يناسبك تطبيق مدمج. في الحالتين تحتاج **Prompt Engineering** واضحة، ومدخلات مناسبة، وتحققًا من النتائج.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">الهدف GenAI-1.2.2 يطلب منك المقارنة بين نماذج التفاعل. طابق السيناريو: أسئلة عابرة، واستكشاف، وتأهيل الموظفين الجدد، وتحسين تدريجي عبر تسلسل التوجيهات ← محادثة AI. مهام متكررة ومحددة ومؤتمتة داخل أطر الاختبار القائمة، أو حاجة لتخصيص وتوسّع أكبر، أو وكلاء بأدوار محددة ← تطبيق اختبار مدعوم بالنماذج. وفي الحالتين هندسة التوجيه الجيدة أساسية.</p><p class="gx-en" lang="en" dir="ltr">GenAI-1.2.2 asks you to compare interaction models. Match the scenario: ad-hoc questions, exploration, onboarding, iterative refinement through prompt chaining → AI chatbot. Repeated, well-defined, automated tasks inside existing test frameworks, more customisation and scale, or agents with specific roles → LLM-powered testing application. In both, strong prompt engineering is essential.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-ar">فكرة أساسية · دور المختبِر</span><span class="gx-en" lang="en" dir="ltr">Key idea · The tester's role</span></p><p class="gx-ar">المختبِر هو من يحدد الهدف، ويوفّر أساس الاختبار، ويتحقق من التغطية والأدلة، ويصحّح الناتج، ويتخذ القرار. المسودة المولّدة أو التقرير المرتب لا يثبتان أن النظام اجتاز الاختبار.</p><p class="gx-en" lang="en" dir="ltr">The tester still sets the goal, provides the test basis, checks coverage and evidence, corrects the output and makes the decision. A generated draft or a tidy report does not prove the system passed the test.</p></aside>

---
order: 6
slug: "1-2-2"
chapter: 1
group: "1.2"
section: "1.2.2"
title: "AI Chatbots and LLM-Powered Testing Applications for Software Testing"
titleAr: "روبوتات المحادثة وتطبيقات الاختبار المدعومة بالنماذج"
objectives: "GenAI-1.2.2 · K2"
minutes: 4
lo:
  GenAI-1.2.2: "Compare the ways of interacting with GenAI in testing: chatbots and integrated applications."
takeaways:
  - "Chatbots suit exploration, quick clarification and learning; integrated applications suit repeated or specialised workflows."
  - "Neither interface is secure by default: data handling, permissions and controls decide."
  - "Both need clear prompting, suitable inputs and verification of results."
terms:
  - en: "AI Chatbot"
    ar: "روبوت المحادثة"
    def: "A conversational interface where the user talks to the model in natural language, adds context and reviews each reply."
    match: ["AI Chatbots", "AI Chatbot"]
  - en: "LLM-Powered Testing Application"
    ar: "تطبيق اختبار مدعوم بالنماذج"
    def: "A testing tool that integrates model capabilities through APIs to perform specific tasks inside the team's workflow."
    match: ["LLM-Powered Testing Applications"]
  - en: "Prompt Chaining"
    ar: "تسلسل التوجيهات"
    def: "Splitting work into linked prompts, where each output feeds the next step and can be reviewed and refined in between."
  - en: "AI Agent"
    ar: "الوكيل الذكي"
    def: "An application that uses a model to understand a task and can call tools to take actions. Covered in Chapter 4."
    match: ["AI Agents"]
---
### المحادثة المباشرة — AI Chatbots

يتفاعل المستخدم بلغة طبيعية مع النموذج: يسأل، ويزوّد السياق، ويعدّل الطلب، ثم يراجع الرد. هذا مفيد للتغذية الراجعة السريعة، والمهام الروتينية، والاختبار الاستكشافي، وتوضيح المفاهيم، ومساعدة أعضاء جدد على فهم العمل.

تدعم المحادثة **Prompt Chaining**: تحسين النتيجة عبر توجيهات مترابطة، مثل تحليل قصة مستخدم، ثم توضيح الغموض، ثم اقتراح الحالات. سهولة الواجهة تجعلها متاحة أيضًا لأصحاب مصلحة غير تقنيين.

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

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Assuming the interface decides security. An integrated application is not secure just because it is integrated, and not every chat is insecure. What matters is how data, permissions, the runtime environment and controls are handled. Chapter 3 covers this in detail.</p></aside>

### اختيار طريقة التفاعل — Choosing the Interaction

لفهم مفهوم واكتشاف الغموض في قصة مستخدم واحدة، قد تكون المحادثة مناسبة. ولإعداد مسودات حالات اختبار بصورة متكررة من نظام إدارة المتطلبات، قد يناسبك تطبيق مدمج. في الحالتين تحتاج **Prompt Engineering** واضحة، ومدخلات مناسبة، وتحققًا من النتائج.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea · The tester's role</p><p>The tester still sets the goal, provides the test basis, checks coverage and evidence, corrects the output and makes the decision. A generated draft or a tidy report does not prove the system passed the test.</p></aside>

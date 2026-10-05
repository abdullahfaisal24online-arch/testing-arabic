---
order: 3
slug: "4-1-3"
chapter: 4
group: "4.1"
section: "4.1.3"
title: "The Role of LLM-Powered Agents in Automating Test Processes"
titleAr: "دور الوكلاء المدعومين بالنماذج في أتمتة عمليات الاختبار"
objectives: "GenAI-4.1.3 · K2 / HO-4.1.3 · H0"
minutes: 10
lo:
  GenAI-4.1.3: "Explain how LLM-powered agents help automate test processes."
  HO-4.1.3: "Observe an LLM-powered agent automating a repetitive test task."
loAr:
  GenAI-4.1.3: "شرح كيف تساعد الوكلاء المعتمدة على النماذج اللغوية في أتمتة عمليات الاختبار."
  HO-4.1.3: "مشاهدة وكيل معتمد على نموذج لغوي يؤتمت مهمة اختبار متكرّرة."
takeaways:
  - "An agent uses the model to understand the task and calls predefined tools to act."
  - "What it can do depends on the tools and permissions it is given, not its language skill."
  - "Autonomous, semi-autonomous and multi-agent set-ups differ in how much humans review."
  - "AI assistants extend automation from following scripts to goal-driven work across the test process."
  - "An error can now become an action, so scope permissions tightly and review critical steps."
takeawaysAr:
  - "يستخدم الوكيل النموذج لفهم المهمة، ويستدعي أدوات محدّدة مسبقًا لينفّذ."
  - "ما يستطيع فعله يعتمد على الأدوات والصلاحيات الممنوحة له، لا على مهارته اللغوية."
  - "تختلف الإعدادات المستقلة وشبه المستقلة ومتعددة الوكلاء في مقدار المراجعة البشرية."
  - "المساعدات الذكية توسّع الأتمتة من تنفيذ سكربتات إلى عمل موجَّه بالأهداف عبر عملية الاختبار."
  - "الخطأ قد يصبح الآن فعلًا، فاضبط الصلاحيات بإحكام وراجع الخطوات الحرجة."
terms:
  - en: "LLM-powered Agent"
    ar: "الوكيل المدعوم بالنموذج"
    def: "An application that uses an LLM to understand a task and its context, and can call defined tools to take actions."
    defAr: "تطبيق يستخدم نموذجًا لغويًا لفهم المهمة وسياقها، ويستطيع استدعاء أدوات محدّدة لتنفيذ أفعال."
  - en: "Orchestration"
    ar: "التنسيق"
    def: "Coordinating agents' roles, messages and the order of work in a multi-agent system."
    defAr: "تنسيق أدوار الوكلاء ورسائلهم وترتيب العمل في نظام متعدد الوكلاء."
  - en: "Semi-autonomous"
    ar: "شبه مستقل"
    def: "An agent set-up that pauses for human review at defined points."
    defAr: "إعداد للوكيل يتوقف للمراجعة البشرية عند نقاط محدّدة."
---
**LLM-powered Agent** تطبيق يستخدم النموذج لفهم المهمة والسياق، ويستطيع استدعاء أدوات محددة لتنفيذ إجراءات. الدردشة التقليدية قد تقترح تقريرًا؛ أما الوكيل المتصل بأداة فقد يقرأ نتائج التشغيل ويجهّز مسودة التقرير في نظام العمل.

الأدوات وظائف معرّفة مسبقًا، مثل قراءة نتيجة تشغيل أو جلب متطلب أو إنشاء مسودة. ما يستطيع الوكيل فعله يتوقف على الأدوات والصلاحيات التي وفّرها التطبيق، لا على قدرته اللغوية وحدها.

### درجات الاستقلال — Levels of Autonomy

| Type | طريقة العمل | مثال |
|---|---|---|
| Autonomous | يعمل باستقلال وبأقل تدخل بشري، معتمدًا على قواعد محددة مسبقًا والتعلّم المعزّز (Reinforcement learning) وحلقات تغذية راجعة تكيفية | تجميع تقارير اختبار غير حساسة دوريًا |
| Semi-autonomous | ينفّذ المهام مع إشراف بشري دوري يضمن أن الناتج يحقق أهداف المستخدم | اقتراح تعديل سكربت ينتظر اعتماد المختبِر |
| Multi-agent | عدة وكلاء بأدوار متخصصة يُنسَّق بينهم | تحليل ثم تصميم ثم مراجعة عبر Orchestration |

كيف تختار الدرجة المناسبة؟ كلما زاد أثر الخطأ، قلّ الاستقلال المسموح. تجميع تقرير يومي من بيانات غير حساسة يمكن أن يكون مستقلًا. تعديل سكربتات الانحدار يجب أن يكون شبه مستقل، لأن تعديلًا خاطئًا قد يخفي عيبًا. والأنظمة متعددة الوكلاء تناسب سير عمل طويلًا تتوزع فيه الأدوار: وكيل يحلل، وآخر يصمم، وثالث يراجع.

في **البنى متعددة الوكلاء (Multi-agent architectures)** تتعاون عدة وكلاء بأدوار متخصصة، وتتواصل وتنسّق لحل مشكلات معقّدة بكفاءة أعلى من وكيل واحد. ويسمى هذا التنسيق **Orchestration**، وفيه تؤتمت الوكلاء مهام الاختبار عبر محاكاة الاستدلال واتخاذ القرار البشري. وهو يشمل تنسيق الأدوار والرسائل وتسلسل العمل. تعدد الوكلاء لا يضمن أن رأي المراجع مستقل أو أن المخرجات صحيحة؛ قد يتوارثون افتراضًا خاطئًا واحدًا.

### المساعدات المدمجة — AI Assistants

يمكن لمساعد مدمج في أدوات الفريق تحويل قصة مستخدم إلى تحليل وشروط، ثم حالات وسكربتات، ثم تشغيل وتحليل تقارير. هذا يوسّع الأتمتة من اتباع سكربت محدد إلى أتمتة قائمة على الوكلاء وموجّهة بهدف. حين يكون الدمج جيدًا، تقلّ بعض الأعمال اليدوية وتقصر دورة التغذية الراجعة، وتزداد أهمية تحديد حدود التصرف والتحقق من المخرجات.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">اعرف مستويات الاستقلالية الثلاثة (مستقل، شبه مستقل، متعدد الوكلاء) وما يميّز الوكيل عن روبوت المحادثة: قدرته على استدعاء الأدوات وتنفيذ الأفعال. ولاحظ إضافة v1.1: المساعدات الذكية التي توسّع الأتمتة إلى عمل موجَّه بالأهداف قائم على الوكلاء عبر عملية الاختبار.</p><p class="gx-en" lang="en" dir="ltr">Know the three autonomy levels (autonomous, semi-autonomous, multi-agent) and what makes an agent different from a chatbot: it can call tools and take actions. Note the v1.1 addition: AI assistants that extend automation to goal-driven, agent-based work across the test process.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-ar">خطأ شائع</span><span class="gx-en" lang="en" dir="ltr">Common mistake</span></p><p class="gx-ar">اعتبار عبارة «سأفتح تذكرة» دليلًا على أن الوكيل فتحها. تحتاج نتيجة الأداة ورقم التذكرة من النظام. النيّة المكتوبة ليست فعلًا مكتملًا ومُتحقَّقًا منه.</p><p class="gx-en" lang="en" dir="ltr">Taking “I will open a ticket” as proof the agent opened one. You need the tool result and the ticket ID from the system. Text intent is not a completed, verified action.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-ar">فكرة أساسية</span><span class="gx-en" lang="en" dir="ltr">Key idea</span></p><p class="gx-ar">ترث الوكلاء الهلوسات وأخطاء الاستدلال والتحيّزات من النموذج، لكن الخطأ قد يصبح الآن فعلًا. استخدم فحوصًا آلية على نتائج الأدوات، وأبقِ المهام الحرجة شبه مستقلة مع مراجعة بشرية، وامنح فقط الصلاحيات التي تحتاجها المهمة: قراءة النتائج لا تحتاج صلاحية حذف بيانات الاختبار أو تعديل بيئة الإنتاج.</p><p class="gx-en" lang="en" dir="ltr">Agents inherit hallucinations, reasoning errors and biases from the model, but a mistake can now become an action. Use automated checks on tool results, keep critical tasks semi-autonomous with human review, and grant only the permissions the task needs: reading results does not need permission to delete test data or change production.</p></aside>

<section class="gx-lab" data-lab="HO-4.1.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-ar">عرض توضيحي · وكيل يلخّص إخفاقات اختبار الانحدار</span><span class="gx-en" lang="en" dir="ltr">Demo · Agent Summarises Regression Failures</span></span><span class="gx-lab-meta">HO-4.1.3 · H0</span></header><div class="gx-lab-body"><p><span class="gx-ar"><strong>المدخلات:</strong> رقم التشغيل، والنتائج، وسجل العيوب المعروفة، وقالب التقرير. <strong>الأدوات المسموحة:</strong> قراءة النتائج، والبحث في العيوب، وحفظ مسودة فقط.</span><span class="gx-en" lang="en" dir="ltr"><strong>Inputs:</strong> run ID, results, the known-defects log and a report template. <strong>Allowed tools:</strong> read results, search defects, save a draft only.</span></p><ol class="gx-lab-steps"><li><span class="gx-ar">يسترجع الوكيل النتائج ويتحقق من وجود كل صف.</span><span class="gx-en" lang="en" dir="ltr">The agent retrieves the results and checks every row is present.</span></li><li><span class="gx-ar">يجمّع الأعراض المتشابهة ويحتفظ بمعرّفات الحالات.</span><span class="gx-en" lang="en" dir="ltr">It groups similar symptoms and keeps the case IDs.</span></li><li><span class="gx-ar">يبحث في العيوب المعروفة ويسجّل الروابط المحتملة كفرضيات.</span><span class="gx-en" lang="en" dir="ltr">It searches known defects and records possible links as hypotheses.</span></li><li><span class="gx-ar">يبني مسودة تذكر ما فشل، وما لم يُنفَّذ، وما ينقص من بيانات.</span><span class="gx-en" lang="en" dir="ltr">It builds a draft listing what failed, what did not run and what data is missing.</span></li><li><span class="gx-ar">يراجع المختبِر المراجع والتجميع قبل النشر أو اتخاذ أي إجراء.</span><span class="gx-en" lang="en" dir="ltr">The tester reviews the references and grouping before publishing or acting.</span></li></ol><p class="gx-lab-subhead"><span class="gx-ar">راقب</span><span class="gx-en" lang="en" dir="ltr">Watch for</span></p><p><span class="gx-ar">هل اختار التشغيل الصحيح؟ هل استدعى أداة خارج نطاقه؟ هل فقد حالات أثناء التجميع؟ هل ادّعى أن عيبًا «أُصلح» دون تشغيل جديد كدليل؟ هذا المثال يصف السلوك المطلوب، وليس سجلًا لتشغيل وكيل حقيقي.</span><span class="gx-en" lang="en" dir="ltr">Did it pick the right run? Did it call a tool outside its scope? Did it lose cases while grouping? Did it claim a defect was “fixed” without a new run as evidence? This example describes the desired behaviour; it is not a log of a real agent run.</span></p></div></section>

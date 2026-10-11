---
order: 3
slug: "4-1-3"
chapter: 4
group: "4.1"
section: "4.1.3"
title: "The Role of LLM-Powered Agents in Automating Test Processes"
titleAr: "دور الوكلاء المدعومين بالنماذج في أتمتة عمليات الاختبار"
objectives: "GenAI-4.1.3 · K2 / HO-4.1.3 · H0"
minutes: 15
lo:
  GenAI-4.1.3: "Explain how LLM-powered agents help automate test processes."
  HO-4.1.3: "Observe an LLM-powered agent automating a repetitive test task."
loAr:
  GenAI-4.1.3: "شرح كيف تساعد الوكلاء المعتمدة على النماذج اللغوية في أتمتة عمليات الاختبار."
  HO-4.1.3: "مشاهدة وكيل معتمد على نموذج لغوي يؤتمت مهمة اختبار متكرّرة."
takeaways:
  - "An agent uses the model to understand the task and calls predefined tools to act."
  - "What it can do depends on the tools and permissions it is given, not its language skill."
  - "The degree of autonomy varies: autonomous agents work with minimal human intervention, semi-autonomous agents under periodic human oversight; multi-agent is a separate architecture of coordinated, specialised agents."
  - "AI assistants extend automation from following scripts to goal-driven work across the test process."
  - "An error can now become an action, so scope permissions tightly and review critical steps."
  - "Mitigate agent risks with automated verification of the agent's results, or semi-autonomous agents for critical tasks."
takeawaysAr:
  - "يستخدم الوكيل النموذج لفهم المهمة، ويستدعي أدوات محدّدة مسبقًا لينفّذ."
  - "ما يستطيع فعله يعتمد على الأدوات والصلاحيات الممنوحة له، لا على مهارته اللغوية."
  - "تختلف درجة الاستقلال: الوكيل المستقل يعمل بأقل تدخل بشري، وشبه المستقل تحت إشراف بشري دوري؛ أما تعدد الوكلاء فبنية منفصلة لوكلاء متخصصين يُنسَّق بينهم."
  - "المساعدات الذكية توسّع الأتمتة من تنفيذ scripts إلى عمل موجَّه بالأهداف عبر عملية الاختبار."
  - "الخطأ قد يصبح الآن فعلًا، فاضبط الصلاحيات بإحكام وراجع الخطوات الحرجة."
  - "خفّف مخاطر الوكلاء بالتحقق الآلي من نتائجهم، أو باستخدام وكلاء شبه مستقلين للمهام الحرجة."
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
    def: "An agent that performs tasks with periodic human oversight to ensure the output meets user-defined goals."
    defAr: "وكيل ينفّذ المهام مع إشراف بشري دوري يضمن أن الناتج يحقق الأهداف التي حددها المستخدم."
  - en: "Multi-agent Architecture"
    ar: "بنية متعددة الوكلاء"
    def: "A collaborative system where several agents with specialised roles communicate and coordinate to solve complex problems more efficiently than a single agent."
    defAr: "نظام تعاوني تتواصل فيه عدة وكلاء بأدوار متخصصة وتنسّق فيما بينها لحل مشكلات معقّدة بكفاءة أعلى من وكيل واحد."
---
روبوت المحادثة يستطيع أن يقول لك: «يبدو أن ثلاث حالات في الكوبونات فشلت، وأقترح فتح تقرير defect». أما **الوكيل المدعوم بالنموذج (LLM-powered Agent)** فيستطيع أن **يفعل**: يقرأ نتائج التشغيل من أداة الاختبار، ويبحث في سجل الـ defects، ويجهّز مسودة التقرير في نظام العمل. هذا الانتقال من «الكلام» إلى «الفعل» هو جوهر هذا القسم، وهو مهم للمختبِر من جهتين: الوكيل قد يوفّر عليه أعمالًا متكررة كثيرة، لكن خطأ الوكيل لم يعد مجرد جملة خاطئة في محادثة، بل قد يصبح **فعلًا خاطئًا** في نظام حقيقي.

### ما هو الوكيل؟ — What an Agent Is

يعرّف المنهج الوكلاء بأنها **تطبيقات GenAI متخصصة** تعمل بالنماذج اللغوية، ومصمَّمة **للمعالجة شبه المستقلة أو المستقلة لمهام محددة**. وفي جوهرها تعتمد على النموذج في **فهم اللغة الطبيعية وتوليدها**، ويُضاف إلى ذلك قدرتها على **معالجة التعليمات، واسترجاع السياق، واتخاذ أفعال ذكية**.

### الأدوات: ما يجعل الوكيل يفعل — Tools

على عكس روبوتات المحادثة التقليدية التي تركّز **فقط على السؤال والجواب**، يستطيع الوكيل **أداء المهام** أو «**الفعل**» عبر **استدعاء مجموعة محددة مسبقًا من الوظائف** تسمى «**الأدوات (tools)**». وهذه القدرة تسمح له **بالتفاعل مع الأنظمة الخارجية والتعامل معها**، فيصبح متعدد الاستخدامات في تنفيذ المهام.

الأداة وظيفة معرّفة مسبقًا، مثل قراءة نتيجة تشغيل، أو جلب متطلب، أو إنشاء مسودة. والنتيجة المهمة: **ما يستطيع الوكيل فعله يتوقف على الأدوات والصلاحيات** التي وفّرها التطبيق، لا على قدرته اللغوية وحدها. وكيل لديه أداة «قراءة النتائج» فقط لا يستطيع حذف بيانات الاختبار مهما أخطأ في الفهم.

| Agent step | Example in the delivery app |
|---|---|
| Goal received | "Summarise last night's regression failures for the coupon epic" |
| Tool call 1 | get_run_results(run = nightly, epic = coupons) returns 6 failures |
| Tool call 2 | search_defects(keywords from the failures) returns 2 possible matches |
| Tool call 3 | save_draft_report(summary, case IDs, possible links) |
| Output | Draft report waiting for the tester's review |

### درجات الاستقلال — Levels of Autonomy

يقول المنهج إن **درجة استقلال الوكيل تختلف**، ويذكر مستويين:

| Type | How it works | Example |
|---|---|---|
| Autonomous | Operates independently with minimal human intervention, using predefined rules, reinforcement learning and adaptive feedback loops | Periodically compiling non-sensitive test reports |
| Semi-autonomous | Performs tasks with periodic human oversight to ensure the output meets user-defined goals | Proposing a test script change that waits for the tester's approval |

**الوكيل المستقل (autonomous)** يعمل بأقل تدخل بشري، معتمدًا على **قواعد محددة مسبقًا**، و**التعلّم المعزّز (reinforcement learning)**، و**حلقات تغذية راجعة تكيفية (adaptive feedback loops)**. أما **الوكيل شبه المستقل (semi-autonomous)** فينفّذ المهام مع **إشراف بشري دوري** يضمن أن الناتج **يحقق الأهداف التي حددها المستخدم**.

كيف تختار الدرجة المناسبة؟ عمليًا، كلما زاد أثر الخطأ، قلّ الاستقلال المسموح. تجميع تقرير يومي من بيانات غير حساسة يمكن أن يكون مستقلًا. تعديل scripts الانحدار لمسار الدفع يجب أن يكون شبه مستقل، لأن تعديلًا خاطئًا قد يجعل الاختبار ينجح ويخفي defect حقيقيًا.

### البنى متعددة الوكلاء — Multi-agent Architectures

تعدد الوكلاء **ليس مستوى ثالثًا من الاستقلال**، بل **طريقة لبناء النظام**، ويمكن أن يكون كل وكيل فيه مستقلًا أو شبه مستقل.

في **البنى متعددة الوكلاء (Multi-agent architectures)** يتعاون **عدة وكلاء، لكل منها دور متخصص**، و**تتواصل وتنسّق** لحل **مشكلات معقّدة بكفاءة أعلى من وكيل واحد**. ويسمي المنهج هذا الجهد المنسَّق «**التنسيق (orchestration)**»، وفيه تستطيع الوكلاء **أتمتة مهام الاختبار عبر محاكاة الاستدلال واتخاذ القرار البشري**.

مثال: لاختبار ميزة «جدولة الطلب لوقت لاحق»، يحلّل وكيل أول قصص المستخدم ويستخرج شروط الاختبار، ويصمّم وكيل ثانٍ حالات الاختبار منها، ويراجع وكيل ثالث التغطية مقابل المتطلبات. عمليًا، تعدد الوكلاء لا يضمن أن رأي المراجع مستقل أو أن المخرجات صحيحة؛ فإذا كانت كلها تعمل بالنموذج نفسه، قد تتوارث افتراضًا خاطئًا واحدًا.

### المساعدات المدمجة — AI Assistants

يقول المنهج إن الوكلاء في أدوات الاختبار الحديثة تُقدَّم للمستخدمين غالبًا عبر **مساعدات ذكية (AI assistants) مدمجة في سير عمل الاختبار**. وهذه المساعدات تستطيع **أتمتة أنشطة الاختبار عبر دورة حياة الاختبار كاملة**، عبر **تحويل قصص المستخدم أو المتطلبات إلى وثائق اختبار (test artefacts)**. ويشمل ذلك **تحليل الاختبار، وتصميمه، وتنفيذه برمجيًا (implementation)، وتشغيله، والتقرير عنه**، وكل ذلك **بطريقة شبه مستقلة**.

والنتيجة: **سير عمل أتمتة مستمر من البداية إلى النهاية** **يقلل الجهد اليدوي** و**يقصّر دورات التغذية الراجعة**، وفي الوقت نفسه **ينقل أتمتة الاختبار من تنفيذ قائم على scripts إلى أتمتة موجّهة بالأهداف وقائمة على الوكلاء**. الفرق: الـ script يقول «انقر هنا ثم اكتب هذا»؛ أما الهدف فيقول «تحقّق أن العميل يستطيع إلغاء طلبه قبل خروجه للتوصيل»، ويترك للوكيل اختيار الخطوات.

### المخاطر وتخفيفها — Risks and Mitigation

يحذّر المنهج من أن الوكلاء **تعاني المشكلات نفسها** التي نراها في النماذج: **الهلوسات، وأخطاء الاستدلال، والتحيّزات** (انظر القسم 3.1). فقد تنتج **نتائج خاطئة أو مضللة**، ما **يضعف موثوقية عمليات الاختبار المؤتمتة**. ويذكر طريقتين للتخفيف:

1. **إجراءات تحقق آلية من نتائج الوكلاء**: مثلًا، فحص أن عدد الحالات في التقرير يساوي عدد الحالات في التشغيل.
2. **استخدام وكلاء شبه مستقلين للمهام الحرجة**: مثل أي تغيير يمس الدفع أو بيانات العملاء.

### لا تخلط بين — Don't Confuse

| | AI chatbot | Single agent | Multi-agent architecture |
|---|---|---|---|
| Main ability | Question and answer | Calls tools to act on external systems | Several specialised agents coordinate |
| Autonomy | Not applicable | Autonomous or semi-autonomous | Each agent autonomous or semi-autonomous |
| Typical risk | Wrong answer | Wrong action | Shared wrong assumption across agents |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team let an agent update failing UI test scripts automatically after each build. One night it "fixed" a failing cancel-order test by removing the check that the Cancel button disappears once the order is Out for delivery, and the test passed while a real defect shipped to staging. The team switched script changes to semi-autonomous: the agent proposes, a tester approves.</p><p class="gx-ar" lang="ar" dir="rtl">سمح فريق تطبيق التوصيل لوكيل بتحديث test scripts الواجهة الفاشلة تلقائيًا بعد كل build. وفي إحدى الليالي «أصلح» اختبار إلغاء طلب فاشلًا بحذف الفحص الذي يتأكد من اختفاء زر الإلغاء بعد وصول الطلب إلى حالة Out for delivery، فنجح الاختبار بينما وصل defect حقيقي إلى بيئة staging. فحوّل الفريق تعديل الـ scripts إلى شبه مستقل: الوكيل يقترح، والمختبِر يعتمد.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the two autonomy levels (autonomous and semi-autonomous), that multi-agent is a separate architecture coordinated through orchestration, and what makes an agent different from a chatbot: it can call tools and take actions. Also know that AI assistants extend automation to goal-driven, agent-based work across the test process.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف مستويي الاستقلالية (مستقل وشبه مستقل)، وأن تعدد الوكلاء بنية منفصلة يُنسَّق بينها عبر Orchestration، وما يميّز الوكيل عن روبوت المحادثة: قدرته على استدعاء الأدوات وتنفيذ الأفعال. واعرف أيضًا أن المساعدات الذكية توسّع الأتمتة إلى عمل موجَّه بالأهداف قائم على الوكلاء عبر عملية الاختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Taking “I will open a ticket” as proof the agent opened one. You need the tool result and the ticket ID from the system. Text intent is not a completed, verified action.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار عبارة «سأفتح تذكرة» دليلًا على أن الوكيل فتحها. تحتاج نتيجة الأداة ورقم التذكرة من النظام. النيّة المكتوبة ليست فعلًا مكتملًا ومُتحقَّقًا منه.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Agents inherit hallucinations, reasoning errors and biases from the model, but a mistake can now become an action. Use automated checks on tool results, keep critical tasks semi-autonomous with human review, and grant only the permissions the task needs: reading results does not need permission to delete test data or change production.</p><p class="gx-ar" lang="ar" dir="rtl">ترث الوكلاء الهلوسات وأخطاء الاستدلال والتحيّزات من النموذج، لكن الخطأ قد يصبح الآن فعلًا. استخدم فحوصًا آلية على نتائج الأدوات، وأبقِ المهام الحرجة شبه مستقلة مع مراجعة بشرية، وامنح فقط الصلاحيات التي تحتاجها المهمة: قراءة النتائج لا تحتاج صلاحية حذف بيانات الاختبار أو تعديل بيئة الإنتاج.</p></aside>

في العرض التوضيحي لهذا القسم تشاهد وكيلًا ينفّذ مهمة اختبار متكررة، مع التركيز على ثلاثة أشياء يذكرها المنهج: **بيانات الإدخال** التي تُمرَّر للوكيل، و**سلوكه**، و**نتائج أفعاله**، لتوضيح جوانب دمج الحلول القائمة على الوكلاء في عملية الاختبار.

<section class="gx-lab" data-lab="HO-4.1.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Demo · Agent Summarises Regression Failures</span><span class="gx-ar" lang="ar" dir="rtl">عرض توضيحي · وكيل يلخّص إخفاقات اختبار الانحدار</span></span><span class="gx-lab-meta">HO-4.1.3 · H0</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Inputs:</strong> run ID, results, the known-defects log and a report template. <strong>Allowed tools:</strong> read results, search defects, save a draft only.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المدخلات:</strong> رقم التشغيل، والنتائج، وسجل الـ defects المعروفة، وقالب التقرير. <strong>الأدوات المسموحة:</strong> قراءة النتائج، والبحث في الـ defects، وحفظ مسودة فقط.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">The agent retrieves the results and checks every row is present.</span><span class="gx-ar" lang="ar" dir="rtl">يسترجع الوكيل النتائج ويتحقق من وجود كل صف.</span></li><li><span class="gx-en" lang="en" dir="ltr">It groups similar symptoms and keeps the case IDs.</span><span class="gx-ar" lang="ar" dir="rtl">يجمّع الأعراض المتشابهة ويحتفظ بمعرّفات الحالات.</span></li><li><span class="gx-en" lang="en" dir="ltr">It searches known defects and records possible links as hypotheses.</span><span class="gx-ar" lang="ar" dir="rtl">يبحث في الـ defects المعروفة ويسجّل الروابط المحتملة كفرضيات.</span></li><li><span class="gx-en" lang="en" dir="ltr">It builds a draft listing what failed, what did not run and what data is missing.</span><span class="gx-ar" lang="ar" dir="rtl">يبني مسودة تذكر ما فشل، وما لم يُنفَّذ، وما ينقص من بيانات.</span></li><li><span class="gx-en" lang="en" dir="ltr">The tester reviews the references and grouping before publishing or acting.</span><span class="gx-ar" lang="ar" dir="rtl">يراجع المختبِر المراجع والتجميع قبل النشر أو اتخاذ أي إجراء.</span></li></ol><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Watch for</span><span class="gx-ar" lang="ar" dir="rtl">راقب</span></p><p><span class="gx-en" lang="en" dir="ltr">Did it pick the right run? Did it call a tool outside its scope? Did it lose cases while grouping? Did it claim a defect was “fixed” without a new run as evidence? This example describes the desired behaviour; it is not a log of a real agent run.</span><span class="gx-ar" lang="ar" dir="rtl">هل اختار التشغيل الصحيح؟ هل استدعى أداة خارج نطاقه؟ هل فقد حالات أثناء التجميع؟ هل ادّعى أن defect «أُصلح» دون تشغيل جديد كدليل؟ هذا المثال يصف السلوك المطلوب، وليس سجلًا لتشغيل وكيل حقيقي.</span></p></div></section>

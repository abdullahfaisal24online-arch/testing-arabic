---
order: 3
slug: "4-1-3"
chapter: 4
group: "4.1"
section: "4.1.3"
title: "The Role of LLM-Powered Agents in Automating Test Processes"
titleAr: "دور الوكلاء المدعومين بالنماذج في أتمتة عمليات الاختبار"
objectives: "GenAI-4.1.3 · K2 / HO-4.1.3 · H0"
minutes: 6
lo:
  GenAI-4.1.3: "Explain how LLM-powered agents help automate test processes."
  HO-4.1.3: "Observe an LLM-powered agent automating a repetitive test task."
takeaways:
  - "An agent uses the model to understand the task and calls predefined tools to act."
  - "What it can do depends on the tools and permissions it is given, not its language skill."
  - "Autonomous, semi-autonomous and multi-agent set-ups differ in how much humans review."
  - "AI assistants extend automation from following scripts to goal-driven work across the test process."
  - "An error can now become an action, so scope permissions tightly and review critical steps."
terms:
  - en: "LLM-powered Agent"
    ar: "الوكيل المدعوم بالنموذج"
    def: "An application that uses an LLM to understand a task and its context, and can call defined tools to take actions."
  - en: "Orchestration"
    ar: "التنسيق"
    def: "Coordinating agents' roles, messages and the order of work in a multi-agent system."
  - en: "Semi-autonomous"
    ar: "شبه مستقل"
    def: "An agent set-up that pauses for human review at defined points."
---
**LLM-powered Agent** تطبيق يستخدم النموذج لفهم المهمة والسياق، ويستطيع استدعاء أدوات محددة لتنفيذ إجراءات. الدردشة التقليدية قد تقترح تقريرًا؛ أما الوكيل المتصل بأداة فقد يقرأ نتائج التشغيل ويجهّز مسودة التقرير في نظام العمل.

الأدوات وظائف معرّفة مسبقًا، مثل قراءة نتيجة تشغيل أو جلب متطلب أو إنشاء مسودة. ما يستطيع الوكيل فعله يتوقف على الأدوات والصلاحيات التي وفّرها التطبيق، لا على قدرته اللغوية وحدها.

### درجات الاستقلال — Levels of Autonomy

| Type | طريقة العمل | مثال |
|---|---|---|
| Autonomous | يعمل بتدخل بشري محدود ضمن نطاق وقواعد محددة | تجميع تقارير اختبار غير حساسة دوريًا |
| Semi-autonomous | يتوقف لمراجعة بشرية عند نقاط محددة | اقتراح تعديل سكربت ينتظر اعتماد المختبِر |
| Multi-agent | عدة وكلاء بأدوار متخصصة يُنسَّق بينهم | تحليل ثم تصميم ثم مراجعة عبر Orchestration |

**Orchestration** هو تنسيق الأدوار والرسائل وتسلسل العمل. تعدد الوكلاء لا يضمن أن رأي المراجع مستقل أو أن المخرجات صحيحة؛ قد يتوارثون افتراضًا خاطئًا واحدًا.

### المساعدات المدمجة — AI Assistants

يمكن لمساعد مدمج في أدوات الفريق تحويل قصة مستخدم إلى تحليل وشروط، ثم حالات وسكربتات، ثم تشغيل وتحليل تقارير. هذا يوسّع الأتمتة من اتباع سكربت محدد إلى أتمتة قائمة على الوكلاء وموجّهة بهدف. حين يكون الدمج جيدًا، تقلّ بعض الأعمال اليدوية وتقصر دورة التغذية الراجعة، وتزداد أهمية تحديد حدود التصرف والتحقق من المخرجات.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Taking “I will open a ticket” as proof the agent opened one. You need the tool result and the ticket ID from the system. Text intent is not a completed, verified action.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea</p><p>Agents inherit hallucinations, reasoning errors and biases from the model, but a mistake can now become an action. Use automated checks on tool results, keep critical tasks semi-autonomous with human review, and grant only the permissions the task needs: reading results does not need permission to delete test data or change production.</p></aside>

<section class="gx-lab" data-lab="HO-4.1.3"><header class="gx-lab-head"><span class="gx-lab-title">Demo · Agent Summarises Regression Failures</span><span class="gx-lab-meta">HO-4.1.3 · H0</span></header><div class="gx-lab-body"><p><strong>Inputs:</strong> run ID, results, the known-defects log and a report template. <strong>Allowed tools:</strong> read results, search defects, save a draft only.</p><ol class="gx-lab-steps"><li>The agent retrieves the results and checks every row is present.</li><li>It groups similar symptoms and keeps the case IDs.</li><li>It searches known defects and records possible links as hypotheses.</li><li>It builds a draft listing what failed, what did not run and what data is missing.</li><li>The tester reviews the references and grouping before publishing or acting.</li></ol><p class="gx-lab-subhead">Watch for</p><p>Did it pick the right run? Did it call a tool outside its scope? Did it lose cases while grouping? Did it claim a defect was “fixed” without a new run as evidence? This example describes the desired behaviour; it is not a log of a real agent run.</p></div></section>

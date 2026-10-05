---
order: 9
slug: "1-4-3"
chapter: 1
group: "1.4"
section: "1.4.3"
title: "Testware"
titleAr: "مخرجات الاختبار"
objectives: "FL-1.4.3 · K2"
minutes: 8
lo:
  FL-1.4.3: "Tell apart the testware that supports each test activity."
loAr:
  FL-1.4.3: "تميّز مخرجات الاختبار التي تدعم كل نشاط من أنشطته."
takeaways:
  - "Testware is the work products created as output of the test activities."
  - "Each activity has typical testware, from the test plan in planning to the completion report at the end."
  - "Testware must be managed properly, using configuration management, to keep it consistent and intact."
  - "Organisations produce, name, organise and manage testware in very different ways."
takeawaysAr:
  - "مخرجات الاختبار (Testware) هي ما ينتج عن أنشطة الاختبار من مخرجات عمل."
  - "لكل نشاط مخرجاته المعتادة، من خطة الاختبار في التخطيط حتى تقرير الإكمال في النهاية."
  - "يجب إدارة مخرجات الاختبار بشكل صحيح، عبر إدارة الإعدادات، للحفاظ على اتساقها وسلامتها."
  - "المؤسسات تختلف كثيرًا في طريقة إنتاج هذه المخرجات وتسميتها وتنظيمها وإدارتها."
terms:
  - en: "Testware"
    ar: "مخرجات الاختبار"
    def: "Work products produced during the test process, such as test plans, test cases, test data and test reports."
    defAr: "مخرجات العمل الناتجة خلال عملية الاختبار، مثل خطط الاختبار وحالاته وبياناته وتقاريره."
    match: ["Testware", "testware"]
  - en: "Test Plan"
    ar: "خطة الاختبار"
    def: "A document describing the test objectives, the means and schedule to achieve them, organised to coordinate testing activities."
    defAr: "وثيقة تصف أهداف الاختبار ووسائل تحقيقها وجدولها الزمني، لتنسيق أنشطة الاختبار."
    match: ["Test Plan", "test plan"]
  - en: "Risk Register"
    ar: "سجل المخاطر"
    def: "A list of risks with their likelihood, impact and information about how they are mitigated."
    defAr: "قائمة بالمخاطر مع احتمالها وأثرها ومعلومات عن طريقة تخفيفها."
  - en: "Test Charter"
    ar: "ميثاق الاختبار"
    def: "Documentation of the goal or objective for a test session, typically used in exploratory testing."
    defAr: "توثيق لهدف جلسة اختبار، ويُستخدم عادة في الاختبار الاستكشافي."
  - en: "Test Log"
    ar: "سجل الاختبار"
    def: "A chronological record of relevant details about the execution of tests."
    defAr: "سجل زمني بالتفاصيل المهمة حول تنفيذ الاختبارات."
---
كل نشاط اختبار ينتج **مخرجات عمل (Work Products)**. هذه المخرجات تسمّى **مخرجات الاختبار (Testware)**.

المؤسسات تختلف كثيرًا في طريقة إنتاج هذه المخرجات وشكلها وأسمائها وتنظيمها. فما يسمّى «خطة اختبار» من 30 صفحة في شركة، قد يكون صفحة Wiki في شركة أخرى. لكن الأهم أن تُدار بشكل صحيح: تطبيق **إدارة الإعدادات (Configuration Management)** يضمن اتساق هذه المخرجات وسلامتها.

### المخرجات حسب النشاط — Testware by Activity

| Activity | Typical testware |
| --- | --- |
| Test planning | Test plan, test schedule, risk register, entry and exit criteria |
| Monitoring & control | Test progress reports, documentation of control directives, risk information |
| Test analysis | (Prioritized) test conditions such as acceptance criteria; defect reports on the test basis |
| Test design | (Prioritized) test cases, test charters, coverage items, test data requirements, test environment requirements |
| Test implementation | Test procedures, manual and automated test scripts, test suites, test data, test execution schedule, test environment items |
| Test execution | Test logs, defect reports |
| Test completion | Test completion report, improvement action items, lessons learned, change requests |

### تفاصيل تستحق الانتباه — Details Worth Noting

- **سجل المخاطر (Risk Register)** في التخطيط: قائمة بالمخاطر مع احتمالها وأثرها ومعلومات عن تخفيفها.
- **تقارير العيوب في التحليل**: إذا اكتشفت أثناء التحليل عيبًا في أساس الاختبار نفسه (كمتطلب متناقض) ولم يُصحَّح مباشرة، فإنك تسجّله في تقرير عيب.
- **عناصر بيئة الاختبار في التجهيز**: مثل الـ Stubs والـ Drivers والمحاكيات (Simulators) وافتراضية الخدمات (Service Virtualization)، وهي بدائل لأجزاء غير متوفرة بعد.
- **طلبات التغيير في الإكمال**: العيوب التي لم تُحل تتحول إلى طلبات تغيير، مثل عناصر في قائمة المنتج.

<figure class="gx-figure" aria-label="How testware flows from one activity to the next."><div class="gx-flow-row"><span class="gx-flow-node">Test conditions<small>analysis</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Test cases<small>design</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Procedures & data<small>implementation</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Logs & defect reports<small>execution</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Completion report<small>completion</small></span></div><figcaption>How testware flows from one activity to the next.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In a Jira-based team, test conditions might be acceptance criteria on the story, test cases live in a test management plugin, the test suite is a "Sprint 14 regression" cycle, and the completion report is a short page linked from the release ticket. Different names, same testware.</p><p class="gx-ar" lang="ar" dir="rtl">في فريق يعمل على Jira، قد تكون شروط الاختبار هي معايير القبول في القصة، وحالات الاختبار داخل إضافة لإدارة الاختبارات، ومجموعة الاختبارات دورة باسم «انحدار السبرنت 14»، وتقرير الإكمال صفحة قصيرة مربوطة بتذكرة الإطلاق. الأسماء مختلفة، لكنها نفس مخرجات الاختبار.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Common questions give a work product and ask which activity produces it. Learn the borderline ones: test charters and coverage items come from design; test data and the execution schedule come from implementation; test logs come from execution; the risk register comes from planning.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة شائعة تعطيك مُخرَجًا وتسأل أي نشاط ينتجه. احفظ الحالات الحدّية: مواثيق الاختبار وعناصر التغطية من التصميم؛ وبيانات الاختبار وجدول التنفيذ من التجهيز؛ وسجلات الاختبار من التنفيذ؛ وسجل المخاطر من التخطيط.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Placing test data in design. Design defines the test data requirements; the test data itself is created in implementation.</p><p class="gx-ar" lang="ar" dir="rtl">وضع بيانات الاختبار تحت التصميم. التصميم يحدد متطلبات بيانات الاختبار؛ أما البيانات نفسها فتُنشأ في التجهيز.</p></aside>

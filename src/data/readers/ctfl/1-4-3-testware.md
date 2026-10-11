---
order: 9
slug: "1-4-3"
chapter: 1
group: "1.4"
section: "1.4.3"
title: "Testware"
titleAr: "مخرجات الاختبار"
objectives: "FL-1.4.3 · K2"
minutes: 13
lo:
  FL-1.4.3: "Tell apart the testware that supports each test activity."
loAr:
  FL-1.4.3: "تميّز مخرجات الاختبار التي تدعم كل نشاط من أنشطته."
takeaways:
  - "Testware is the work products created as output of the test activities."
  - "Each activity has typical testware, from the test plan in planning to the completion report at the end."
  - "Testware must be managed properly, using configuration management, to keep it consistent and intact."
  - "Organisations produce, name, organise and manage testware in very different ways."
  - "Test environment items such as stubs, drivers, simulators and service virtualizations are testware of test implementation."
takeawaysAr:
  - "مخرجات الاختبار (Testware) هي ما ينتج عن أنشطة الاختبار من مخرجات عمل."
  - "لكل نشاط مخرجاته المعتادة، من خطة الاختبار في التخطيط حتى تقرير الإكمال في النهاية."
  - "يجب إدارة مخرجات الاختبار بشكل صحيح، عبر إدارة الإعدادات، للحفاظ على اتساقها وسلامتها."
  - "المؤسسات تختلف كثيرًا في طريقة إنتاج هذه المخرجات وتسميتها وتنظيمها وإدارتها."
  - "عناصر بيئة الاختبار، مثل الـ Stubs والـ Drivers والمحاكيات وافتراضية الخدمات، من مخرجات تجهيز الاختبار."
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
  - en: "Stub"
    ar: "البديل (Stub)"
    def: "A skeletal or special-purpose implementation of a software component, used to develop or test a component that calls or is otherwise dependent on it."
    defAr: "تنفيذ مبسّط أو خاص لمكوّن برمجي، يُستخدم لتطوير أو اختبار مكوّن آخر يستدعيه أو يعتمد عليه."
    match: ["Stub", "stubs", "Stubs"]
  - en: "Service Virtualization"
    ar: "افتراضية الخدمات"
    def: "A technique to enable virtual delivery of services which are deployed, accessed and managed remotely."
    defAr: "تقنية تتيح تقديم نسخة افتراضية من خدمات تُنشر ويُوصل إليها وتُدار عن بُعد، فتُستخدم بدل الخدمة الحقيقية في الاختبار."
    match: ["Service Virtualization", "service virtualization", "service virtualizations"]
---
كل نشاط من أنشطة الاختبار السبعة (القسم 1.4.1) ينتج **مخرجات عمل (Work Products)**، وهذه المخرجات تسمّى **مخرجات الاختبار (Testware)**. فهم هذه المخرجات يجيب عن سؤال عملي: ماذا يجب أن يكون بين يديّ بعد كل نشاط؟ ومن أين أعرف أن النشاط اكتمل فعلًا؟

يلاحظ السيليبس أن هناك **اختلافًا كبيرًا** بين المؤسسات في طريقة **إنتاج** هذه المخرجات و**تشكيلها** و**تسميتها** و**تنظيمها** و**إدارتها**. ما يسمّى «خطة اختبار» من 30 صفحة في شركة، قد يكون صفحة Wiki أو مجموعة بطاقات في Jira في شركة أخرى. لذلك احكم على المُخرَج بوظيفته لا باسمه. والقائمة التي يقدّمها السيليبس **ليست شاملة**؛ قد تجد في مشروعك مخرجات أخرى.

### لماذا إدارة الإعدادات؟ — Configuration Management

مخرجات الاختبار تتغير باستمرار: حالة اختبار تُعدَّل، وبيانات تُحدَّث، و script يُصلَح. **إدارة الإعدادات (Configuration Management)** السليمة (القسم 5.4) **تضمن اتساق المخرجات وسلامتها**. مثال: في تطبيق التوصيل تغيّرت قاعدة الحد الأدنى للطلب في الإصدار 3.3. بدون إدارة إعدادات، قد يشغّل الفريق حالات الاختبار القديمة على الإصدار الجديد، فتفشل حالات صحيحة أو تنجح حالات خاطئة. ومع إدارة الإعدادات، تعرف بالضبط أي نسخة من كل حالة اختبار وكل script تتبع أي نسخة من التطبيق.

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

### مخرجات التخطيط — Test Planning

**خطة الاختبار (Test Plan)**، و**الجدول الزمني للاختبار (Test Schedule)**، و**سجل المخاطر (Risk Register)**، و**معايير الدخول ومعايير الخروج (Entry and Exit Criteria)** (القسم 5.1). سجل المخاطر قائمة بالمخاطر مع **احتمال** كل خطر و**أثره** ومعلومات عن **تخفيفه** (القسم 5.2). ويذكر السيليبس أن الجدول الزمني وسجل المخاطر ومعايير الدخول والخروج **كثيرًا ما تكون جزءًا من خطة الاختبار** نفسها. في تطبيق التوصيل، قد يحتوي سجل المخاطر على «حساب خاطئ لرسوم التوصيل عند 20.00 دينارًا: احتمال متوسط، أثر عالٍ، التخفيف: اختبارات حدّية مؤتمتة». أما معايير الدخول والخروج فتجيب عن سؤالين: متى نبدأ اختبار الإصدار (مثلًا: البيئة جاهزة والبناء يجتاز اختبارات الدخان)، ومتى نتوقف ونقول إنه جاهز (مثلًا: لا defects حرجة مفتوحة في الدفع).

### مخرجات المراقبة والتحكم — Test Monitoring and Control

**تقارير تقدّم الاختبار (Test Progress Reports)** (القسم 5.3.2)، و**توثيق توجيهات التحكم (Control Directives)** (القسم 5.3)، و**معلومات عن المخاطر** (القسم 5.2). توجيه التحكم هو القرار الذي يُتخذ لإعادة المسار، مثل: «تأجيل اختبار المحفظة الرقمية للـ sprint القادم، والتركيز على الدفع بالبطاقة». توثيقه مهم حتى يعرف الجميع ماذا تغيّر ولماذا. وتقرير التقدّم في منتصف الـ sprint قد يقول: «نُفّذ 60% من اختبارات الكوبون، نجح 55% منها، واثنان من الـ defects مفتوحان في حساب الخصم».

### مخرجات التحليل — Test Analysis

**شروط الاختبار (Test Conditions)** مرتّبة حسب الأولوية، مثل **معايير القبول (Acceptance Criteria)** (القسم 4.5.2)، و**تقارير الـ defects الخاصة بأساس الاختبار** إذا لم تُصحَّح مباشرة. إذا اكتشف المختبر أن قصة الكوبون لا تحدد ماذا يحدث للكوبون عند إلغاء الطلب، وأمكن تصحيح القصة فورًا مع مالك المنتج، فلا حاجة لتقرير. وإذا لم يمكن ذلك، يُسجَّل تقرير defect حتى لا يضيع.

### مخرجات التصميم — Test Design

**حالات الاختبار (Test Cases)** مرتّبة حسب الأولوية، و**مواثيق الاختبار (Test Charters)**، و**عناصر التغطية (Coverage Items)**، و**متطلبات بيانات الاختبار**، و**متطلبات بيئة الاختبار**. لاحظ كلمة «متطلبات»: التصميم يصف ما نحتاجه، مثل «كوبون منتهي الصلاحية» و«بيئة متصلة ببوابة دفع تجريبية»، ولا ينشئه بعد. وحالة الاختبار الواحدة قد تكون: «الشرط المسبق: زبون مسجّل وطلب بقيمة 25.00 دينارًا؛ المُدخل: كوبون ثابت بقيمة 3.00؛ النتيجة المتوقعة: الإجمالي 22.00 مع توصيل مجاني». ورتّبنا الحالات حسب الأولوية هنا لأن الوقت قد لا يكفي لتنفيذها كلها.

### مخرجات التجهيز — Test Implementation

**إجراءات الاختبار (Test Procedures)**، و**الـ test scripts اليدوية والمؤتمتة**، و**مجموعات الاختبارات (Test Suites)**، و**بيانات الاختبار** نفسها، و**جدول تنفيذ الاختبار**، و**عناصر بيئة الاختبار**. إجراء الاختبار يرتّب عدة حالات بتسلسل منطقي، مثل: إنشاء طلب، ثم تطبيق كوبون، ثم الدفع، ثم التحقق من الإيصال. ومجموعة الاختبارات تجمع إجراءات تُشغَّل معًا، مثل «مجموعة انحدار الدفع» التي تعمل في الـ CI. ويعطي السيليبس أمثلة على عناصر البيئة، وهي بدائل لأجزاء غير جاهزة أو غير متاحة:

| Test environment item | What it does | Delivery-app example |
| --- | --- | --- |
| Stub | Replaces a component that is called by the test object | A fake maps service that always returns a 12-minute ETA |
| Driver | Calls the test object in place of a missing caller | A script that calls the order API before the customer app exists |
| Simulator | Imitates a real environment or device | A GPS simulator that moves the driver along a route |
| Service virtualization | Emulates the behaviour of a real external service | A virtual payment gateway that can approve, decline or time out |

### مخرجات التنفيذ — Test Execution

**سجلات الاختبار (Test Logs)**، و**تقارير الـ defects (Defect Reports)** (القسم 5.5). سجل الاختبار يوضح ما شُغّل ومتى وعلى أي نسخة وما النتيجة، وهو الدليل الذي يُبنى عليه كل تقرير لاحق. أما تقرير الـ defect فيصف عطلًا لوحظ: الخطوات، والنتيجة المتوقعة، والنتيجة الفعلية، والأثر، حتى يستطيع المطوّر إعادة إنتاجه وإصلاحه.

### مخرجات الإكمال — Test Completion

**تقرير إكمال الاختبار (Test Completion Report)** (القسم 5.3.2)، و**بنود عمل لتحسين** المشاريع أو التكرارات اللاحقة، و**الدروس المستفادة الموثّقة**، و**طلبات التغيير** مثل عناصر في قائمة المنتج. مثلًا: defect عرض بسيط في الواجهة العربية لم يُصلح قبل الإطلاق يتحول إلى عنصر في قائمة المنتج. ودرس مستفاد مثل «تعطّل البيئة التجريبية لبوابة الدفع أخّرنا يومين» يصبح بند عمل للإصدار القادم: «جهّز خدمة افتراضية لبوابة الدفع».

<figure class="gx-figure" aria-label="How testware flows from one activity to the next."><div class="gx-flow-row"><span class="gx-flow-node">Test conditions<small>analysis</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Test cases<small>design</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Procedures & data<small>implementation</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Logs & defect reports<small>execution</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Completion report<small>completion</small></span></div><figcaption>How testware flows from one activity to the next.</figcaption></figure>

### لا تخلط بين — Don't Confuse

| Pair | Earlier activity | Later activity |
| --- | --- | --- |
| Test data | Design: test data requirements | Implementation: the test data itself |
| Test environment | Design: environment requirements | Implementation: environment items (stubs, drivers…) |
| Defect reports | Analysis: defects in the test basis | Execution: defects found by running tests |
| Reports | Monitoring: test progress reports | Completion: test completion report |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In a Jira-based team, test conditions might be acceptance criteria on the story, test cases live in a test management plugin, the test suite is a "Sprint 14 regression" cycle, and the completion report is a short page linked from the release ticket. Different names, same testware.</p><p class="gx-ar" lang="ar" dir="rtl">في فريق يعمل على Jira، قد تكون شروط الاختبار هي معايير القبول في القصة، وحالات الاختبار داخل إضافة لإدارة الاختبارات، ومجموعة الاختبارات دورة باسم «انحدار الـ sprint 14»، وتقرير الإكمال صفحة قصيرة مربوطة بتذكرة الإطلاق. الأسماء مختلفة، لكنها نفس مخرجات الاختبار.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Common questions give a work product and ask which activity produces it. Learn the borderline ones: test charters and coverage items come from design; test data and the execution schedule come from implementation; test logs come from execution; the risk register comes from planning.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة شائعة تعطيك مُخرَجًا وتسأل أي نشاط ينتجه. احفظ الحالات الحدّية: مواثيق الاختبار وعناصر التغطية من التصميم؛ وبيانات الاختبار وجدول التنفيذ من التجهيز؛ وسجلات الاختبار من التنفيذ؛ وسجل المخاطر من التخطيط.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Placing test data in design. Design defines the test data requirements; the test data itself is created in implementation.</p><p class="gx-ar" lang="ar" dir="rtl">وضع بيانات الاختبار تحت التصميم. التصميم يحدد متطلبات بيانات الاختبار؛ أما البيانات نفسها فتُنشأ في التجهيز.</p></aside>

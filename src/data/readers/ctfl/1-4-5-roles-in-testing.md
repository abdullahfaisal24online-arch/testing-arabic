---
order: 11
slug: "1-4-5"
chapter: 1
group: "1.4"
section: "1.4.5"
title: "Roles in Testing"
titleAr: "الأدوار في الاختبار"
objectives: "FL-1.4.5 · K2"
minutes: 6
lo:
  FL-1.4.5: "Compare the different roles in testing."
loAr:
  FL-1.4.5: "تقارن بين الأدوار المختلفة في الاختبار."
takeaways:
  - "The syllabus covers two principal roles: the test management role and the testing role."
  - "Test management owns the test process, the team and leadership: mainly planning, monitoring and control, and completion."
  - "The testing role owns the technical side: mainly analysis, design, implementation and execution."
  - "These are roles, not job titles: who performs them depends on the context, and one person can hold both."
takeawaysAr:
  - "المنهج يغطي دورين رئيسيين: دور إدارة الاختبار ودور الاختبار."
  - "إدارة الاختبار مسؤولة عن عملية الاختبار والفريق والقيادة: أساسًا التخطيط، والمراقبة والتحكم، والإكمال."
  - "دور الاختبار مسؤول عن الجانب التقني: أساسًا التحليل، والتصميم، والتجهيز، والتنفيذ."
  - "هذه أدوار لا مسمّيات وظيفية: من يؤديها يعتمد على السياق، وقد يجمع شخص واحد الدورين."
terms:
  - en: "Test Management Role"
    ar: "دور إدارة الاختبار"
    def: "The role with overall responsibility for the test process, the test team and leadership of the test activities."
    defAr: "الدور المسؤول بشكل عام عن عملية الاختبار وفريق الاختبار وقيادة أنشطته."
  - en: "Testing Role"
    ar: "دور الاختبار"
    def: "The role with overall responsibility for the engineering (technical) aspect of testing."
    defAr: "الدور المسؤول بشكل عام عن الجانب الهندسي (التقني) من الاختبار."
---
يغطي المنهج **دورين رئيسيين** في الاختبار. الكلمة المهمة هنا «دور» وليس «وظيفة»: الدور مجموعة مسؤوليات، وقد يؤديها أشخاص بمسمّيات وظيفية مختلفة.

### دور إدارة الاختبار — Test Management Role

يتحمل المسؤولية الكاملة عن **عملية الاختبار** و**فريق الاختبار** و**قيادة أنشطة الاختبار**. يركّز أساسًا على:

- تخطيط الاختبار.
- مراقبة الاختبار والتحكم فيه.
- إكمال الاختبار.

طريقة أداء هذا الدور تختلف حسب السياق. في تطوير Agile مثلًا، قد يتولى فريق Agile نفسه بعض مهام إدارة الاختبار. أما المهام التي تمتد عبر عدة فرق أو على مستوى المؤسسة كلها، فقد يتولاها مديرو اختبار من خارج فريق التطوير.

### دور الاختبار — Testing Role

يتحمل المسؤولية الكاملة عن **الجانب الهندسي (التقني)** من الاختبار. يركّز أساسًا على:

- تحليل الاختبار.
- تصميم الاختبار.
- تجهيز الاختبار.
- تنفيذ الاختبار.

### الأدوار حسب السياق — Roles Depend on Context

أشخاص مختلفون قد يتولون هذه الأدوار في أوقات مختلفة. وتعتمد طريقة توزيعها على:

- سياق المشروع والمنتج.
- مهارات الأشخاص.
- المؤسسة.

ومن الممكن أن **يجمع شخص واحد دوري الاختبار وإدارة الاختبار في الوقت نفسه**، كما في فريق صغير فيه مختبر واحد يخطط ويصمم وينفذ ويقدّم التقرير.

<figure class="gx-figure gx-spectrum" aria-label="Two roles mapped to the seven test activities."><div class="gx-spectrum-row"><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Test management</b><span>Planning · Monitoring & control · Completion</span></div><div class="gx-spectrum-item"><b>Testing</b><span>Analysis · Design · Implementation · Execution</span></div></div><figcaption>Two roles mapped to the seven test activities.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In a Scrum team, the tester writes and runs tests (testing role) while the team as a whole decides the sprint's test approach and reports progress in the review (shared test management tasks). Across five teams, a QA lead coordinates the regression strategy and release reporting (test management role outside the teams).</p><p class="gx-ar" lang="ar" dir="rtl">في فريق Scrum، يكتب المختبر الاختبارات وينفذها (دور الاختبار)، بينما يقرر الفريق كله نهج الاختبار في الـ sprint ويعرض التقدّم في المراجعة (مهام إدارة اختبار مشتركة). وعلى مستوى خمسة فرق، ينسّق قائد QA استراتيجية الانحدار وتقارير الإطلاق (دور إدارة الاختبار من خارج الفرق).</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">If a question lists a task, decide which role it belongs to by the activity: planning, monitoring, control, completion → test management; analysis, design, implementation, execution → testing.</p><p class="gx-ar" lang="ar" dir="rtl">إذا ذكر السؤال مهمة، حدد دورها من النشاط الذي تتبعه: التخطيط، والمراقبة، والتحكم، والإكمال ← إدارة الاختبار؛ والتحليل، والتصميم، والتجهيز، والتنفيذ ← دور الاختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming the roles must be held by different people, or that "test manager" must be a job title. The syllabus explicitly allows one person to hold both roles at the same time.</p><p class="gx-ar" lang="ar" dir="rtl">الافتراض بأن الدورين يجب أن يتولاهما شخصان مختلفان، أو أن «مدير الاختبار» يجب أن يكون مسمّى وظيفيًا. المنهج يسمح صراحة بأن يجمع شخص واحد الدورين في الوقت نفسه.</p></aside>

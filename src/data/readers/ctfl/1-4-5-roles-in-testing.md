---
order: 11
slug: "1-4-5"
chapter: 1
group: "1.4"
section: "1.4.5"
title: "Roles in Testing"
titleAr: "الأدوار في الاختبار"
objectives: "FL-1.4.5 · K2"
minutes: 10
lo:
  FL-1.4.5: "Compare the different roles in testing."
loAr:
  FL-1.4.5: "تقارن بين الأدوار المختلفة في الاختبار."
takeaways:
  - "The syllabus covers two principal roles: the test management role and the testing role."
  - "Test management owns the test process, the team and leadership: mainly planning, monitoring and control, and completion."
  - "The testing role owns the technical side: mainly analysis, design, implementation and execution."
  - "These are roles, not job titles: who performs them depends on the context, and one person can hold both."
  - "In Agile, some test management tasks may be handled by the team; tasks spanning several teams or the whole organisation may be done by test managers outside the team."
takeawaysAr:
  - "المنهج يغطي دورين رئيسيين: دور إدارة الاختبار ودور الاختبار."
  - "إدارة الاختبار مسؤولة عن عملية الاختبار والفريق والقيادة: أساسًا التخطيط، والمراقبة والتحكم، والإكمال."
  - "دور الاختبار مسؤول عن الجانب التقني: أساسًا التحليل، والتصميم، والتجهيز، والتنفيذ."
  - "هذه أدوار لا مسمّيات وظيفية: من يؤديها يعتمد على السياق، وقد يجمع شخص واحد الدورين."
  - "في Agile قد يتولى الفريق بعض مهام إدارة الاختبار؛ أما المهام الممتدة عبر عدة فرق أو المؤسسة كلها فقد يتولاها مديرو اختبار من خارج الفريق."
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
من يخطط للاختبار في تطبيق التوصيل؟ ومن يكتب حالات الاختبار؟ ومن يقرر أن الإصدار جاهز من ناحية الاختبار؟ يجيب السيليبس عن هذه الأسئلة بمفهوم **الدور (Role)** لا بمفهوم المسمّى الوظيفي. يغطي السيليبس **دورين رئيسيين**: **دور إدارة الاختبار (Test Management Role)** و**دور الاختبار (Testing Role)**. الدور مجموعة مسؤوليات ومهام، أما المسمّى الوظيفي فمجرد اسم في عقد العمل. والمسؤوليات نفسها قد يؤديها أشخاص بمسمّيات مختلفة، وقد يجمع شخص واحد أكثر من دور.

ويؤكد السيليبس أن **الأنشطة والمهام المسندة لكل دور تعتمد على عوامل** منها: **سياق المشروع والمنتج**، و**مهارات الأشخاص** الذين يشغلون الأدوار، و**المؤسسة**. لذلك لن تجد توزيعًا واحدًا صحيحًا للمهام في كل الفرق. **السياق:** منتج طبي خاضع للتنظيم قد يحتاج مدير اختبار متفرغًا يوقّع على تقارير رسمية، بينما يكفي تطبيق التوصيل أن يتقاسم الفريق هذه المهام. **المهارات:** إذا كان أحد المطوّرين يجيد أتمتة الاختبار، فقد يتولى جزءًا من التجهيز. **المؤسسة:** بعض الشركات لديها قسم اختبار مركزي يتولى إدارة الاختبار لكل المشاريع، وبعضها يترك ذلك للفرق.

### دور إدارة الاختبار — Test Management Role

يتحمل **المسؤولية الكاملة عن عملية الاختبار**، وعن **فريق الاختبار**، وعن **قيادة أنشطة الاختبار**. ويركّز أساسًا على أربعة أنشطة:

- **تخطيط الاختبار:** تحديد الأهداف والنهج والجدول والمخاطر.
- **مراقبة الاختبار:** متابعة التقدم ومقارنته بالخطة.
- **التحكم في الاختبار:** اتخاذ القرارات عند الانحراف عن الخطة.
- **إكمال الاختبار:** تقرير الإكمال والدروس المستفادة.

أما **قيادة أنشطة الاختبار** فتعني توزيع العمل على الأشخاص، وإزالة العوائق أمامهم، مثل المطالبة ببيئة تجريبية مستقرة لبوابة الدفع، والتأكد من أن لكل شخص ما يحتاجه من تدريب وأدوات.

لماذا هذه الأنشطة تحديدًا؟ لأنها تنظر إلى الاختبار كله من الأعلى: الأهداف، والموارد، والوقت، والقرارات. في تطبيق التوصيل، صاحب هذا الدور هو من يقرر أن اختبار المحفظة الرقمية يؤجَّل لأن الوقت لا يكفي، ومن يكتب لأصحاب المصلحة أن الإصدار جاهز مع اثنين من الـ defects بسيطين معروفين.

**طريقة أداء هذا الدور تختلف حسب السياق.** في **تطوير Agile**، قد يتولى **فريق Agile نفسه بعض مهام إدارة الاختبار**: فريق التوصيل كله يقرر في تخطيط الـ sprint ما يُختبر وكيف، ويتابع التقدم في الاجتماع اليومي. أما **المهام التي تمتد عبر عدة فرق أو على مستوى المؤسسة كلها**، فقد يتولاها **مديرو اختبار من خارج فريق التطوير**. لو كان لدى الشركة ثلاثة فرق (تطبيق الزبون، ولوحة المطعم، وتطبيق السائق)، فتنسيق اختبار الإطلاق المشترك واختيار أداة إدارة الاختبار للمؤسسة مهام تحتاج من ينظر إلى الفرق كلها.

### دور الاختبار — Testing Role

يتحمل **المسؤولية الكاملة عن الجانب الهندسي (التقني) من الاختبار**. ويركّز أساسًا على أربعة أنشطة:

- **تحليل الاختبار:** استخراج شروط الاختبار من قصة الكوبون واكتشاف الغموض فيها.
- **تصميم الاختبار:** تحويل الشروط إلى حالات اختبار بتقنيات مثل تحليل القيم الحدّية.
- **تجهيز الاختبار:** إنشاء البيانات والـ scripts وتهيئة البيئة.
- **تنفيذ الاختبار:** تشغيل الاختبارات وتسجيل النتائج والإبلاغ عن الـ defects.

هذه الأنشطة هي «صنعة» الاختبار: تحتاج معرفة بالتقنيات والأدوات والنظام نفسه. ولاحظ العلاقة بين الدورين: دور إدارة الاختبار يحدد **ماذا نريد أن نحقق وبأي موارد**، ودور الاختبار يحوّل ذلك إلى **اختبارات فعلية ونتائج**. ثم تعود النتائج إلى دور إدارة الاختبار ليراقب ويتحكم ويقرر. فإذا غاب أحد الدورين ظهرت فجوة: اختبارات ممتازة تقنيًا بلا أولويات واضحة، أو خطة جميلة لا يطبّقها أحد.

### الأدوار ليست أشخاصًا — Roles Are Not People

يقول السيليبس إن **أشخاصًا مختلفين قد يتولون هذه الأدوار في أوقات مختلفة**. ومثاله أن دور إدارة الاختبار قد يؤديه **قائد فريق (Team Leader)**، أو **مدير اختبار (Test Manager)**، أو **مدير تطوير (Development Manager)**، وغيرهم. ومن الممكن أيضًا أن **يجمع شخص واحد دوري الاختبار وإدارة الاختبار في الوقت نفسه**.

في فريق التوصيل، المختبِرة الأقدم تكتب خطة الاختبار للإصدار وتُعدّ تقرير الإكمال (دور إدارة الاختبار)، وفي الأسبوع نفسه تصمم حالات اختبار الكوبون وتنفذها (دور الاختبار). وعندما تكون في إجازة، قد يتولى قائد الفريق متابعة التقدم، فينتقل الدور مؤقتًا إلى شخص آخر.

### مقارنة الدورين — Comparing the Two Roles

| Aspect | Test management role | Testing role |
| --- | --- | --- |
| Overall responsibility | Test process, test team, leadership of test activities | Engineering (technical) aspect of testing |
| Main activities | Planning, monitoring, control, completion | Analysis, design, implementation, execution |
| Typical question | Are we testing the right things on time? | Are these the right tests, and do they pass? |
| In Agile | Some tasks shared by the Agile team; cross-team tasks by test managers outside it | Usually done inside the team |
| Who can perform it | Team leader, test manager, development manager, etc. | Testers and other team members with the skills |

<figure class="gx-figure gx-spectrum" aria-label="Two roles mapped to the seven test activities."><div class="gx-spectrum-row"><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Test management</b><span>Planning · Monitoring & control · Completion</span></div><div class="gx-spectrum-item"><b>Testing</b><span>Analysis · Design · Implementation · Execution</span></div></div><figcaption>Two roles mapped to the seven test activities.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In a Scrum team, the tester writes and runs tests (testing role) while the team as a whole decides the sprint's test approach and reports progress in the review (shared test management tasks). Across five teams, a QA lead coordinates the regression strategy and release reporting (test management role outside the teams).</p><p class="gx-ar" lang="ar" dir="rtl">في فريق Scrum، يكتب المختبر الاختبارات وينفذها (دور الاختبار)، بينما يقرر الفريق كله نهج الاختبار في الـ sprint ويعرض التقدّم في المراجعة (مهام إدارة اختبار مشتركة). وعلى مستوى خمسة فرق، ينسّق قائد QA استراتيجية الانحدار وتقارير الإطلاق (دور إدارة الاختبار من خارج الفرق).</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">If a question lists a task, decide which role it belongs to by the activity: planning, monitoring, control, completion → test management; analysis, design, implementation, execution → testing.</p><p class="gx-ar" lang="ar" dir="rtl">إذا ذكر السؤال مهمة، حدد دورها من النشاط الذي تتبعه: التخطيط، والمراقبة، والتحكم، والإكمال ← إدارة الاختبار؛ والتحليل، والتصميم، والتجهيز، والتنفيذ ← دور الاختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming the roles must be held by different people, or that "test manager" must be a job title. The syllabus explicitly allows one person to hold both roles at the same time.</p><p class="gx-ar" lang="ar" dir="rtl">الافتراض بأن الدورين يجب أن يتولاهما شخصان مختلفان، أو أن «مدير الاختبار» يجب أن يكون مسمّى وظيفيًا. المنهج يسمح صراحة بأن يجمع شخص واحد الدورين في الوقت نفسه.</p></aside>

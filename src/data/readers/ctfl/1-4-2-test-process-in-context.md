---
order: 8
slug: "1-4-2"
chapter: 1
group: "1.4"
section: "1.4.2"
title: "Test Process in Context"
titleAr: "عملية الاختبار ضمن سياقها"
objectives: "FL-1.4.2 · K2"
minutes: 10
lo:
  FL-1.4.2: "Explain how the context affects the test process."
loAr:
  FL-1.4.2: "تشرح كيف يؤثر السياق على عملية الاختبار."
takeaways:
  - "Testing is part of the development process and is funded by stakeholders, so it must meet their business needs."
  - "Eight groups of factors shape how testing is done: stakeholders, team, business domain, technical factors, project constraints, organisation, SDLC and tools."
  - "These factors affect the test strategy, techniques, automation, coverage, level of documentation detail and reporting."
takeawaysAr:
  - "الاختبار جزء من عملية التطوير ويموّله أصحاب المصلحة، فيجب أن يلبّي احتياجات عملهم."
  - "ثماني مجموعات من العوامل تحدد طريقة الاختبار: أصحاب المصلحة، والفريق، ومجال العمل، والعوامل التقنية، وقيود المشروع، والمؤسسة، ودورة حياة التطوير، والأدوات."
  - "هذه العوامل تؤثر على استراتيجية الاختبار وتقنياته والأتمتة والتغطية ومستوى تفصيل التوثيق والتقارير."
terms:
  - en: "Test Strategy"
    ar: "استراتيجية الاختبار"
    def: "A description of how testing will be done to meet the test objectives under given circumstances."
    defAr: "وصف لطريقة تنفيذ الاختبار لتحقيق أهدافه ضمن ظروف معيّنة."
    match: ["Test Strategy", "test strategy"]
---
الاختبار **لا يُنفَّذ بمعزل عن غيره**. أنشطة الاختبار **جزء لا يتجزأ من عمليات التطوير** في المؤسسة، فهي تتأثر بطريقة كتابة المتطلبات، وبإيقاع التسليم، وبأدوات الفريق، وتؤثر فيها بدورها: سؤال يطرحه المختبر في جلسة تحسين القصص قد يغيّر المتطلب نفسه. والاختبار أيضًا **يموّله أصحاب المصلحة**، وغايته النهائية أن **يساعد على تلبية احتياجات عملهم**. من هاتين الحقيقتين تأتي النتيجة: لا توجد طريقة واحدة صحيحة للاختبار في كل مكان، بل طريقة تناسب سياقًا معيّنًا. وهذا تطبيق مباشر للمبدأ السادس: **الاختبار يعتمد على السياق**.

يذكر السيليبس ثماني مجموعات من **العوامل السياقية** التي تحدد طريقة تنفيذ الاختبار. لن تحفظها فقط، بل سترى كيف يغيّر كل منها قرارات الاختبار في تطبيق التوصيل.

### العوامل السياقية — Contextual Factors

| Factor | Examples from the syllabus |
| --- | --- |
| Stakeholders | Needs, expectations, requirements, willingness to cooperate |
| Team members | Skills, knowledge, level of experience, availability, training needs |
| Business domain | Criticality of the test object, identified risks, market needs, specific legal regulations |
| Technical factors | Type of software, product architecture, technology used |
| Project constraints | Scope, time, budget, resources |
| Organizational factors | Organizational structure, existing policies, practices used |
| SDLC | Engineering practices, development methods |
| Tools | Availability, usability, compliance |

**أصحاب المصلحة (Stakeholders):** احتياجاتهم وتوقعاتهم ومتطلباتهم، و**مدى استعدادهم للتعاون**. إذا كان مالك المنتج في تطبيق التوصيل متاحًا يوميًا ويجيب عن الأسئلة، يستطيع الفريق الاعتماد على معايير قبول خفيفة وحوار مستمر. أما إذا كان صاحب المصلحة بعيدًا ولا يراجع إلا عند الإطلاق، فيحتاج الفريق توثيقًا أوضح وتقارير أكثر رسمية، لأن الأسئلة التي لا تجد من يجيب عنها تتحول إلى افتراضات، والافتراضات مصدر defects.

**أعضاء الفريق (Team Members):** مهاراتهم ومعرفتهم ومستوى خبرتهم، وتوفّرهم، واحتياجاتهم للتدريب. الفريق فيه مختبران فقط؛ إذا كان أحدهما يجيد الأتمتة، يميل النهج نحو اختبارات API مؤتمتة. وإذا انضم مختبر مبتدئ، فقد تحتاج حالات الاختبار تفاصيل أكثر، ويحتاج هو تدريبًا على تقنيات الاختبار.

**مجال العمل (Business Domain):** **مدى أهمية موضوع الاختبار**، والمخاطر المحددة، واحتياجات السوق، و**الأنظمة القانونية الخاصة**. الدفع بالبطاقة في تطبيق التوصيل أعلى أهمية من شاشة «عن التطبيق»، فيحصل على اختبار أعمق. وإذا كان المنافسون سيطلقون ميزة الكوبونات قريبًا، فحاجة السوق تضغط على الوقت. وإذا فرضت الأنظمة قواعد على حماية بيانات الزبائن، تصبح هناك اختبارات لا يمكن التنازل عنها.

**العوامل التقنية (Technical Factors):** نوع البرمجية، وبنية المنتج، والتقنيات المستخدمة. تطبيق التوصيل يعمل على iOS وAndroid، ويعتمد على بوابة دفع وخدمة خرائط من أطراف ثالثة. هذا يعني اختبارًا على المنصتين، واختبار تكامل مع خدمات لا يتحكم فيها الفريق، وربما محاكاة هذه الخدمات عندما لا تتوفر.

**قيود المشروع (Project Constraints):** النطاق، والوقت، والميزانية، والموارد. الـ sprint أسبوعان والإطلاق كل 2 sprints؛ لا وقت لتنفيذ كل الاختبارات الممكنة، فيجب ترتيب الأولويات حسب المخاطر. والميزانية قد لا تسمح بشراء أجهزة كثيرة، فيُستخدم عدد محدود من الأجهزة الحقيقية مع محاكيات.

**العوامل التنظيمية (Organizational Factors):** الهيكل التنظيمي، والسياسات القائمة، والممارسات المتّبعة. إذا كانت سياسة الشركة تفرض تقرير إكمال اختبار موقّعًا قبل كل إطلاق، فهذا جزء من العملية مهما كان الفريق صغيرًا. وإذا كان في الشركة فريق أمن مركزي، فقد يُسند إليه اختبار الأمن.

**دورة حياة تطوير البرمجيات (SDLC):** ممارسات الهندسة وأساليب التطوير. فريق التوصيل يعمل بـ Scrum مع CI على كل commit، فالاختبار يحدث داخل كل sprint، والانحدار المؤتمت يعمل باستمرار. في نموذج تسلسلي (Waterfall) كان الاختبار الديناميكي سيتركز في مرحلة متأخرة.

**الأدوات (Tools):** **توفّرها، وسهولة استخدامها، والتزامها بالمعايير (Compliance)**. وجود أداة لإدارة الاختبار مربوطة بأداة متابعة المهام يسهّل التتبّع والتقارير. أما إذا كانت الأداة الوحيدة المتاحة جدول بيانات، فسيكون التتبّع يدويًا وأبطأ. والالتزام يعني توافق الأداة مع المعايير وسياسات المؤسسة: أداة أتمتة ممتازة لا تُستخدم إذا كانت ترفع بيانات الزبائن إلى خدمة سحابية غير معتمدة.

### ماذا تغيّر هذه العوامل؟ — What These Factors Change

يقول السيليبس إن هذه العوامل تؤثر على قضايا كثيرة متعلقة بالاختبار، منها:

| Testing issue | How context changes it in the delivery app |
| --- | --- |
| Test strategy | Risk-based, with most effort on payment and order states |
| Test techniques used | BVA for amounts, state transition testing for order states |
| Degree of test automation | High: CI runs API and regression tests on every commit |
| Required level of coverage | Higher for payment than for the "About" screen |
| Level of detail of testware | Light test cases and charters, not long formal documents |
| Test reporting | Short sprint reports plus a completion report per release |

لاحظ أن القائمة في السيليبس تنتهي بكلمة «إلخ»، فهي أمثلة لا حصر. الفكرة المهمة: كل قرار في الاختبار، من التقنية حتى شكل التقرير، يجب أن يكون له سبب في السياق.

والعوامل لا تعمل منفردة، بل قد تتعارض. في تطبيق التوصيل، حاجة السوق تدفع نحو إطلاق ميزة الكوبونات بسرعة، بينما أهمية الدفع تتطلب اختبارًا عميقًا لحساب الخصم. ودور **تخطيط الاختبار** هو الموازنة بينهما: تغطية عالية وأتمتة لحساب المبالغ، واختبار أخف للشاشات الأقل خطرًا. ولهذا يتغير نهج الاختبار عندما يتغير السياق، حتى للفريق نفسه: لو قررت الشركة لاحقًا تقديم خدمة توصيل الأدوية، لظهرت أنظمة قانونية جديدة ومخاطر أعلى، ولاحتاج الفريق توثيقًا أكثر تفصيلًا واستقلالية أكبر في الاختبار.

<figure class="gx-figure gx-spectrum" aria-label="Same feature, different context, different testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Hospital system</b><span>Strict regulation, high criticality: formal documentation, high coverage, independent testing.</span></div><div class="gx-spectrum-item"><b>Startup MVP</b><span>Tight time and budget: lighter documentation, exploratory testing, fast feedback.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Mature SaaS</b><span>DevOps pipeline: heavy automation, continuous testing, dashboard reporting.</span></div></div><figcaption>Same feature, different context, different testing.</figcaption></figure>

### لا تخلط بين — Don't Confuse

| Clue in the question | Factor |
| --- | --- |
| Legal regulations, criticality, market needs | Business domain |
| Company policies, structure, existing practices | Organizational factors |
| Deadlines, budget, scope, people available | Project constraints |
| Architecture, technology, type of software | Technical factors |
| Agile or sequential, engineering practices | SDLC |
| Skills, experience, training needs | Team members |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A new tester moves from a fintech company with detailed test plans to a small agency with two-week projects. Bringing the same 40-page plan template would waste time. Understanding the new context first (constraints, team, client expectations) decides how much documentation and formality make sense.</p><p class="gx-ar" lang="ar" dir="rtl">مختبر جديد ينتقل من شركة تقنية مالية تعتمد خطط اختبار مفصّلة، إلى وكالة صغيرة مشاريعها مدتها أسبوعان. لو أحضر قالب الخطة نفسه المكوّن من 40 صفحة لأضاع الوقت. فهم السياق الجديد أولًا (القيود، والفريق، وتوقعات العميل) هو ما يحدد كم يلزم من التوثيق والرسمية.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">A K2 question may describe a project and ask which factor most influences a testing decision. Match the clue: deadlines and budget → project constraints; regulations and criticality → business domain; architecture and technology → technical factors.</p><p class="gx-ar" lang="ar" dir="rtl">قد يصف سؤال من مستوى K2 مشروعًا ويسأل أي عامل يؤثر أكثر على قرار اختبار معيّن. اربط الدليل بالعامل: المواعيد والميزانية ← قيود المشروع؛ الأنظمة القانونية ومدى الأهمية ← مجال العمل؛ البنية والتقنية ← العوامل التقنية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating "regulations" as an organizational factor. In the syllabus, specific legal regulations belong to the business domain; organizational factors are structure, policies and practices.</p><p class="gx-ar" lang="ar" dir="rtl">تصنيف «الأنظمة القانونية» كعامل تنظيمي. في المنهج، الأنظمة القانونية الخاصة تتبع مجال العمل؛ أما العوامل التنظيمية فهي الهيكل والسياسات والممارسات.</p></aside>

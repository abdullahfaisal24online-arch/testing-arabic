---
order: 1
slug: "2-1-1"
chapter: 2
group: "2.1"
section: "2.1.1"
title: "Impact of the Software Development Lifecycle on Testing"
titleAr: "أثر دورة حياة التطوير على الاختبار"
objectives: "FL-2.1.1 · K2"
minutes: 12
lo:
  FL-2.1.1: "Explain how the chosen software development lifecycle affects testing."
loAr:
  FL-2.1.1: "تشرح كيف تؤثر دورة حياة التطوير المختارة على الاختبار."
takeaways:
  - "Testing must fit the SDLC; the SDLC shapes the scope and timing of testing, documentation, techniques, automation and the tester's role."
  - "In sequential models, dynamic testing usually comes late because code arrives late; early phases focus on reviews, analysis and design."
  - "Iterative and incremental models deliver working increments, so static and dynamic testing can happen at all levels in every iteration, with fast feedback and heavy regression testing."
  - "Agile favours lightweight documentation, extensive automation and experience-based techniques."
  - "An SDLC model is an abstract, high-level view of how development phases and activities relate logically and chronologically; methods and Agile practices such as TDD, BDD, Scrum and Kanban describe some activities in more detail."
takeawaysAr:
  - "الاختبار يجب أن يناسب دورة حياة التطوير؛ فهي تحدد نطاق الاختبار وتوقيته، والتوثيق، والتقنيات، والأتمتة، ودور المختبر."
  - "في النماذج المتسلسلة يأتي الاختبار الديناميكي عادة متأخرًا لأن الشيفرة تصل متأخرة؛ والمراحل المبكرة تركّز على المراجعات والتحليل والتصميم."
  - "النماذج التكرارية والتزايدية تسلّم أجزاء عاملة، فيمكن إجراء الاختبار الساكن والديناميكي في كل المستويات خلال كل دورة، مع تغذية راجعة سريعة واختبار انحدار مكثّف."
  - "Agile يفضّل التوثيق الخفيف والأتمتة الواسعة والتقنيات المبنية على الخبرة."
  - "نموذج دورة حياة التطوير تمثيل مجرد عالي المستوى لكيفية ارتباط مراحل التطوير وأنشطته منطقيًا وزمنيًا؛ والأساليب وممارسات Agile مثل TDD وBDD وScrum وKanban تصف بعض الأنشطة بتفصيل أكبر."
terms:
  - en: "Software Development Lifecycle"
    ar: "دورة حياة تطوير البرمجيات"
    def: "The activities performed at each stage in software development and how they relate to one another logically and chronologically."
    defAr: "الأنشطة التي تُنفّذ في كل مرحلة من تطوير البرمجيات، وعلاقتها ببعضها منطقيًا وزمنيًا."
    match: ["Software Development Lifecycle", "SDLC"]
  - en: "Sequential Development Model"
    ar: "نموذج التطوير المتسلسل"
    def: "A model in which development activities happen in a linear sequence, each phase starting after the previous one, such as Waterfall or the V-model."
    defAr: "نموذج تُنفّذ فيه أنشطة التطوير بتسلسل خطي، تبدأ كل مرحلة بعد السابقة، مثل الشلال (Waterfall) أو نموذج V."
  - en: "Iterative Development Model"
    ar: "نموذج التطوير التكراري"
    def: "A model in which the product is built in repeated cycles, each delivering a working increment that can be tested."
    defAr: "نموذج يُبنى فيه المنتج على دورات متكررة، تسلّم كل منها جزءًا عاملًا قابلًا للاختبار."
---
اختبار تطبيق التوصيل في فريق Scrum يُصدر نسخة كل أربعة أسابيع يختلف كثيرًا عن اختبار نظام حكومي يُبنى على مدى سنتين بنموذج V. المختبر نفسه، والمعرفة نفسها، لكن **متى** يختبر، و**كم** يوثّق، و**بأي** تقنيات، و**كم** يؤتمت، كلها تتغير. هذا ما يقصده المنهج بقوله: **الاختبار يجب أن يتكيّف مع دورة حياة التطوير حتى ينجح**. فرض طريقة اختبار لا تناسب الدورة يؤدي إما إلى اختبار متأخر لا يلحق بالتسليمات، أو إلى توثيق ثقيل يُكتب ثم يتقادم قبل أن يُقرأ.

### ما دورة حياة التطوير؟ — What Is an SDLC Model?

**نموذج دورة حياة تطوير البرمجيات (SDLC model)** تمثيل **مجرد وعالي المستوى** لعملية التطوير. هو لا يصف تفاصيل يومية، بل يحدد كيف ترتبط مراحل التطوير وأنواع الأنشطة ببعضها **منطقيًا** (ما الذي يعتمد على ماذا) و**زمنيًا** (ما الذي يأتي قبل ماذا). يذكر المنهج ثلاث عائلات من النماذج:

| Family | Examples | Main idea |
| --- | --- | --- |
| Sequential | Waterfall, V-model | One phase after another; code comes late |
| Iterative | Spiral, prototyping | Repeated cycles that refine the product |
| Incremental | Unified Process | The product is built and delivered in pieces |

وإلى جانب هذه النماذج توجد **أساليب تطوير وممارسات Agile** تصف بعض الأنشطة بتفصيل أكبر، ومن أمثلتها في المنهج: ATDD، وBDD، والتصميم المقاد بالمجال (DDD)، والبرمجة القصوى (XP)، والتطوير المقاد بالميزات (FDD)، وKanban، وLean IT، وScrum، وTDD. فريق تطبيق التوصيل مثلًا يعمل بنموذج تكراري وتزايدي، ويستخدم Scrum لتنظيم العمل في sprints مدتها أسبوعان.

### خمسة أشياء يحددها اختيار الـ SDLC — Five Things the SDLC Shapes

اختيار الـ SDLC يؤثر على خمسة جوانب في الاختبار:

1. **نطاق أنشطة الاختبار وتوقيتها**، ومنها مستويات الاختبار وأنواعه. في نموذج V يأتي اختبار النظام بعد اكتمال البناء كله؛ وفي Scrum تُختبر كل قصة مستخدم داخل الـ sprint نفسه.
2. **مستوى تفصيل توثيق الاختبار**. المشروع المتسلسل الذي يمر بمراحل اعتماد رسمية يحتاج حالات اختبار مفصّلة؛ أما الفريق الذي يغيّر المتطلبات كل أسبوعين فيكتفي بتوثيق خفيف.
3. **اختيار تقنيات الاختبار ونهجه**. حين تتوفر مواصفات كاملة مبكرًا تناسبها التقنيات المبنية على المواصفات؛ وحين تتغير بسرعة تصبح التقنيات المبنية على الخبرة أكثر عملية.
4. **مدى أتمتة الاختبار**. كلما تكررت التسليمات زادت الحاجة إلى الأتمتة.
5. **دور المختبر ومسؤولياته**. في النموذج المتسلسل قد يعمل المختبر في فريق اختبار منفصل؛ وفي Agile يكون عضوًا في الفريق يشارك في التخطيط اليومي.

<figure class="gx-figure gx-spectrum" aria-label="How the lifecycle changes testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Sequential (Waterfall, V-model)</b><span>Early: reviews, analysis, design. Dynamic testing late, when code exists.</span></div><div class="gx-spectrum-item"><b>Iterative / incremental</b><span>Static and dynamic testing in every iteration, fast feedback, lots of regression.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Agile</b><span>Lightweight documentation, extensive automation, experience-based techniques.</span></div></div><figcaption>How the lifecycle changes testing.</figcaption></figure>

### النماذج المتسلسلة — Sequential Models

في **النماذج المتسلسلة** يشارك المختبرون في المراحل الأولى عادة في **مراجعة المتطلبات**، و**تحليل الاختبار**، و**تصميم الاختبار**. السبب أن **الشيفرة القابلة للتشغيل تُنشأ في المراحل المتأخرة**، فلا يوجد شيء يمكن تشغيله بعد، ولذلك **لا يمكن عادة إجراء الاختبار الديناميكي مبكرًا** في دورة الحياة. لكن هذا لا يعني أن المختبر بلا عمل: الاختبار الساكن (المراجعات) متاح من اليوم الأول، وكل defect يُكتشف في وثيقة المتطلبات أرخص بكثير من اكتشافه بعد البرمجة.

لو بُني تطبيق التوصيل بنموذج الشلال، لقضى المختبران الأشهر الأولى في مراجعة وثيقة المتطلبات، وكتابة حالات اختبار لقاعدة «الحد الأدنى للطلب 5 دنانير»، دون أن يتمكنا من تجربة شاشة واحدة حتى نهاية مرحلة البرمجة.

### النماذج التكرارية والتزايدية — Iterative and Incremental Models

في بعض **النماذج التكرارية والتزايدية** يُفترض أن **كل دورة تسلّم نموذجًا أوليًا عاملًا أو جزءًا من المنتج (increment)**. والنتيجة المباشرة: في كل دورة يمكن إجراء **الاختبار الساكن والديناميكي معًا، على كل مستويات الاختبار**، لأن هناك شيئًا قابلًا للتشغيل منذ الدورة الأولى.

لكن التسليم المتكرر له ثمن: كل جزء جديد قد يكسر ما بُني قبله. لذلك يحتاج الفريق إلى **تغذية راجعة سريعة** ليعرف خلال ساعات لا أسابيع إن كان التغيير سليمًا، وإلى **اختبار انحدار مكثّف** يعيد التحقق من الأجزاء السابقة في كل دورة. في تطبيق التوصيل: عندما يُضاف الدفع بالمحفظة الرقمية في الـ sprint الخامس، يجب التأكد من أن الدفع النقدي والدفع بالبطاقة ما زالا يعملان.

### تطوير Agile — Agile Development

**تطوير Agile** يفترض أن **التغيير قد يحدث في أي وقت خلال المشروع**. ومن هذا الافتراض تنتج ثلاث ممارسات يفضّلها المنهج:

- **توثيق خفيف لمخرجات العمل**: لأن الوثيقة المفصّلة ستحتاج تحديثًا مع كل تغيير، فيضيع الجهد.
- **أتمتة اختبار واسعة** تسهّل اختبار الانحدار: لأن التغيير المستمر يعني أن الانحدار يجب أن يُفحص باستمرار، ولا يمكن تكراره يدويًا كل أسبوعين.
- **معظم الاختبار اليدوي يتم بتقنيات مبنية على الخبرة** (القسم 4.4)، لأنها **لا تحتاج تحليلًا وتصميمًا مسبقًا واسعًا**، فتناسب ميزة وصلت اليوم وقد تتغير الأسبوع القادم.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team works in 2-week sprints. Each story (for example, "apply a percentage coupon") gets short acceptance criteria instead of a long test specification, its checks are added to the automated regression suite that runs on every commit, and the testers spend their manual time on exploratory sessions of the new checkout flow in Arabic and English.</p><p class="gx-ar" lang="ar" dir="rtl">يعمل فريق تطبيق التوصيل بـ sprints مدتها أسبوعان. كل قصة (مثل «تطبيق كوبون نسبة مئوية») تحصل على معايير قبول قصيرة بدل مواصفات اختبار طويلة، وتُضاف فحوصها إلى مجموعة الانحدار المؤتمتة التي تعمل مع كل Commit، ويقضي المختبران وقتهما اليدوي في جلسات استكشافية لمسار الدفع الجديد بالعربية والإنجليزية.</p></aside>

### لا تخلط بين — Don't Confuse

| | Sequential | Iterative / incremental | Agile |
| --- | --- | --- | --- |
| Early tester work | Reviews, test analysis and design | Static and dynamic testing each iteration | Testing inside every iteration |
| Dynamic testing | Late (code comes late) | Every iteration, all levels | Every iteration |
| Documentation | Detailed | Varies | Lightweight |
| Automation | Helpful | Needed for regression | Extensive |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">If a question asks why dynamic testing starts late in a project, look for "sequential model: executable code is created late". If it asks why regression testing is heavy, look for "iterative/incremental: frequent increments".</p><p class="gx-ar" lang="ar" dir="rtl">إذا سأل السؤال لماذا يبدأ الاختبار الديناميكي متأخرًا في مشروع ما، ابحث عن «نموذج متسلسل: الشيفرة القابلة للتشغيل تُنشأ متأخرًا». وإذا سأل لماذا اختبار الانحدار مكثّف، ابحث عن «تكراري/تزايدي: تسليمات متكررة».</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking testers have nothing to do early in a sequential project. They review requirements and do test analysis and design long before there is code to run.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن المختبرين لا عمل لهم في بداية المشروع المتسلسل. هم يراجعون المتطلبات ويقومون بتحليل الاختبار وتصميمه قبل وجود أي شيفرة قابلة للتشغيل بوقت طويل.</p></aside>

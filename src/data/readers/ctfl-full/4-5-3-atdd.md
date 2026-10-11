---
order: 14
slug: "4-5-3"
chapter: 4
group: "4.5"
section: "4.5.3"
title: "Acceptance Test-driven Development (ATDD)"
titleAr: "التطوير المقاد باختبارات القبول"
objectives: "FL-4.5.3 · K3"
minutes: 22
lo:
  FL-4.5.3: "Use ATDD to derive test cases."
loAr:
  FL-4.5.3: "تستخدم ATDD لاستخراج حالات الاختبار."
labs: ["LAB-4.5.3"]
takeaways:
  - "ATDD is a test-first approach: test cases are created before the user story is implemented, by team members with different perspectives."
  - "It starts with a specification workshop where the story and its acceptance criteria are analysed, discussed and written, and ambiguities and defects are fixed."
  - "Test cases are based on the acceptance criteria and serve as examples of how the software works."
  - "Typically: positive tests first (happy path), then negative tests, then non-functional ones such as performance or usability."
  - "Tests are written in language stakeholders understand, cover all characteristics of the story without going beyond it, and no two tests describe the same characteristic."
  - "Captured in a format an automation framework supports, they become executable requirements."
  - "Examples and tests are the same thing in ATDD, and test techniques from sections 4.2, 4.3 and 4.4 may be applied during test design."
takeawaysAr:
  - "ATDD نهج يبدأ بالاختبار: تُنشأ حالات الاختبار قبل تنفيذ القصة، من أعضاء فريق بوجهات نظر مختلفة."
  - "يبدأ بورشة مواصفات تُحلَّل فيها القصة ومعايير قبولها وتُناقش وتُكتب، ويُعالَج الغموض والـ defects."
  - "حالات الاختبار مبنية على معايير القبول، وتعمل كأمثلة على كيفية عمل البرمجية."
  - "عادة: الاختبارات الإيجابية أولًا (المسار السعيد)، ثم السلبية، ثم غير الوظيفية مثل الأداء وسهولة الاستخدام."
  - "تُكتب بلغة يفهمها أصحاب المصلحة، وتغطي كل خصائص القصة دون تجاوزها، ولا تصف حالتان الخاصية نفسها."
  - "عند كتابتها بصيغة تدعمها أداة أتمتة، تصبح متطلبات قابلة للتشغيل."
  - "الأمثلة والاختبارات شيء واحد في ATDD، ويمكن تطبيق تقنيات الاختبار من الأقسام 4.2 و4.3 و4.4 أثناء تصميم الاختبارات."
terms:
  - en: "Specification Workshop"
    ar: "ورشة المواصفات"
    def: "A collaborative session where a user story and its acceptance criteria are analysed, discussed and written by the team."
    defAr: "جلسة تعاونية يحلّل فيها الفريق قصة المستخدم ومعايير قبولها ويناقشها ويكتبها."
  - en: "Happy Path"
    ar: "المسار السعيد"
    def: "The expected, correct flow through a feature without exceptions or error conditions."
    defAr: "المسار المتوقع والصحيح عبر الميزة، دون استثناءات أو حالات خطأ."
    match: ["Happy Path", "happy path"]
  - en: "Executable Requirements"
    ar: "متطلبات قابلة للتشغيل"
    def: "Acceptance tests captured in a format supported by a test automation framework, so that they both describe and verify the required behaviour."
    defAr: "اختبارات قبول مكتوبة بصيغة تدعمها أداة أتمتة اختبار، فتصف السلوك المطلوب وتتحقق منه في الوقت نفسه."
    match: ["executable requirements", "Executable Requirements"]
---
**التطوير المقاد باختبارات القبول (Acceptance Test-driven Development / ATDD)** نهج **يبدأ بالاختبار (test-first)** (القسم 2.1.3): تُنشأ حالات الاختبار **قبل تنفيذ قصة المستخدم**، لا بعدها. والفكرة أن كتابة الاختبار أولًا تجبر الفريق على الاتفاق على معنى «يعمل بشكل صحيح» قبل أن يكتب المطوّر سطرًا واحدًا، فيتحول الاختبار من أداة لاكتشاف الـ defects بعد وقوعها إلى أداة **لتجنّبها**، وهذه روح النُهج التعاونية في القسم 4.5.

يذكر المنهج ثلاث خصائص أساسية:

- **قبل التنفيذ:** حالات الاختبار جاهزة قبل بدء البرمجة، فتصبح هدفًا واضحًا للمطوّر.
- **من وجهات نظر مختلفة:** يكتبها أعضاء فريق بوجهات نظر متنوعة، مثل **العملاء والمطوّرين والمختبرين**. العميل يعرف القيمة، والمطوّر يعرف الممكن، والمختبر يعرف أين ينكسر الشيء.
- **يدوية أو مؤتمتة:** قد تُنفَّذ حالات الاختبار **يدويًا أو آليًا**؛ ATDD لا يشترط الأتمتة، وإن كانت تزيد قيمته كثيرًا.

<figure class="gx-figure" aria-label="The ATDD flow."><div class="gx-flow-row"><span class="gx-flow-node">Specification workshop<small>story + criteria</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Write test cases<small>from criteria</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Implement<small>make tests pass</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Executable requirements<small>automated</small></span></div><figcaption>The ATDD flow.</figcaption></figure>

### الخطوة الأولى: ورشة المواصفات — Specification Workshop

الخطوة الأولى **ورشة مواصفات (specification workshop)** تُحلَّل فيها **قصة المستخدم** و**معايير قبولها** (إن لم تكن قد عُرّفت بعد) **وتُناقش وتُكتب** من قبل أعضاء الفريق. وفي هذه العملية **يُعالَج أي نقص أو غموض أو defect** في القصة.

هذه الورشة نوع من **الاختبار الساكن** للقصة: الفريق يراجع المتطلب قبل أن يصبح شيفرة. مثال: القصة تقول «يمكن للزبون إلغاء الطلب». في الورشة يسأل المختبر: «في أي حالة؟» فيتضح أن الإلغاء مسموح فقط قبل «خرج للتوصيل». ويسأل المطوّر: «وإذا كان الدفع بالبطاقة؟» فيضيف مالك المنتج معيارًا عن الاسترداد. نقص في القصة عولج قبل أن يتحول إلى defect.

### الخطوة الثانية: إنشاء حالات الاختبار — Creating Test Cases

الخطوة التالية **إنشاء حالات الاختبار**، و**يمكن أن يقوم بها الفريق كله معًا، أو المختبر بمفرده**. وحالات الاختبار:

- **مبنية على معايير القبول**: كل معيار مصدر لاختبار واحد أو أكثر.
- **أمثلة على كيفية عمل البرمجية**: كل حالة مثال ملموس يوضح السلوك المطلوب، وهذا **يساعد الفريق على تنفيذ القصة بشكل صحيح**.
- **الأمثلة والاختبارات شيء واحد**: لذلك **يُستخدم المصطلحان بالتبادل** في سياق ATDD.
- **يمكن تطبيق تقنيات الاختبار** من الأقسام **4.2 و4.3 و4.4** أثناء التصميم: تقسيم التكافؤ وتحليل القيم الحدّية لاختيار القيم، وجداول القرار للقواعد المركّبة، وانتقال الحالات لحالات الطلب، والتقنيات المبنية على الخبرة مثل تخمين الأخطاء للحالات السلبية.

### الترتيب المعتاد — Typical Order

1. **الاختبارات الإيجابية أولًا:** تؤكد **السلوك الصحيح بدون استثناءات أو حالات خطأ**، وتشمل **تسلسل الأنشطة المنفّذة إذا سار كل شيء كما هو متوقع**، وهو ما يسمّى **المسار السعيد (Happy Path)**. نبدأ بها لأنها تثبت أن القيمة الأساسية للقصة موجودة.
2. **ثم الاختبارات السلبية (negative testing):** بعد الانتهاء من الإيجابية، يختبر الفريق المدخلات غير الصالحة والأخطاء والاستثناءات، مثل كوبون منتهي، أو طلب تحت الحد الأدنى، أو رفض بوابة الدفع للبطاقة. هنا يفيد تخمين الأخطاء كثيرًا.
3. **وأخيرًا الخصائص غير الوظيفية:** مثل **كفاءة الأداء (performance efficiency)** و**سهولة الاستخدام (usability)**، كأن يظهر المجموع الجديد خلال ثانية، أو أن تكون رسالة الرفض مفهومة بالعربية والإنجليزية.

لماذا هذا الترتيب؟ لأن المسار السعيد يحدد **السلوك الأساسي** الذي تُبنى عليه بقية الحالات؛ فلا معنى لاختبار رفض الكوبون المنتهي قبل أن نتفق على كيف يُطبَّق الكوبون الصالح.

### قواعد كتابة الاختبارات — Rules for the Tests

- **مفهومة لأصحاب المصلحة:** تُكتب عادةً **بجمل بلغة طبيعية** تتضمن **الشروط المسبقة** (إن وُجدت)، و**المدخلات**، و**الشروط اللاحقة**. صيغة Given/When/Then تحقق ذلك: Given للشروط المسبقة، وWhen للمدخلات، وThen للشروط اللاحقة.
- **تغطي كل خصائص القصة، ولا تتجاوزها:** كل خاصية في القصة لها اختبار، ولا يوجد اختبار لسلوك خارج القصة. **ومع ذلك**، قد **تفصّل معايير القبول بعض المسائل** الموصوفة في القصة، فالاختبار المبني على هذه التفاصيل لا يُعدّ تجاوزًا.
- **لا تصف حالتا اختبار الخاصية نفسها:** التكرار يضيّع الجهد ولا يضيف ثقة.

### الأتمتة: متطلبات قابلة للتشغيل — Executable Requirements

عندما تُكتب الاختبارات **بصيغة تدعمها أداة أتمتة اختبار**، يستطيع **المطوّرون أتمتتها بكتابة الشيفرة المساندة (supporting code)** أثناء تنفيذ الميزة. عندها تصبح اختبارات القبول **متطلبات قابلة للتشغيل (executable requirements)**: الوثيقة نفسها تصف السلوك وتتحقق منه، ولا يمكن أن تصبح قديمة دون أن يفشل الاختبار.

```gherkin
Scenario: Free delivery at the threshold
  Given the cart total is 20.00 JOD
  When the customer confirms the order
  Then the delivery fee is 0.00 JOD
```

### خطوات التطبيق — Step by Step

1. **اقرأ القصة ومعاييرها** في ورشة المواصفات، واسأل عن كل غموض حتى يُحسم.
2. **ارسم خريطة**: معيار القبول ← الخاصية التي يصفها ← اختبار واحد على الأقل.
3. **اكتب المسار السعيد أولًا**، ثم **السلبية**، ثم **غير الوظيفية**.
4. **اختر القيم بتقنية مناسبة**، مثل BVA للحدود.
5. **افحص المجموعة**: هل لكل معيار اختبار؟ هل يتجاوز أي اختبار القصة؟ هل يكرر اختباران الخاصية نفسها؟

### مثال محلول 1 — Worked Example: Coupon Story

القصة: «بصفتي زبونًا مسجّلًا، أريد استخدام كوبون خصم، لكي أدفع أقل».
معايير القبول: (1) كوبون نسبة مئوية صالح يخفض قيمة الوجبات بنسبته؛ (2) الكوبون المنتهي يُرفض برسالة واضحة؛ (3) كوبون واحد لكل طلب؛ (4) يظهر المجموع الجديد خلال ثانية واحدة.

| # | Type | Given | When | Then |
| --- | --- | --- | --- | --- |
| 1 | Positive | Meals 30.00 JOD, valid coupon SAVE10 (10%) | Apply coupon | Meals subtotal is 27.00 JOD |
| 2 | Negative | Meals 30.00 JOD, coupon OLD5 expired yesterday | Apply coupon | Rejected: "Coupon expired"; subtotal stays 30.00 JOD |
| 3 | Negative | SAVE10 already applied | Apply WELCOME | Rejected: "One coupon per order" |
| 4 | Non-functional | Any valid coupon | Apply coupon | New total shown within 1 second |

كل معيار له اختبار واحد، والترتيب إيجابي ثم سلبي ثم غير وظيفي، والاختبار 4 ليس تجاوزًا لأن المعيار (4) جزء من القصة.

### مثال محلول 2 — Tricky Case: Reviewing Candidate Tests

القصة: «بصفتي زبونًا، أريد أن أعرف رسوم التوصيل قبل الدفع، لكي لا أتفاجأ بالمبلغ». معاييرها: الطلب تحت 5.00 دنانير يُرفض؛ الرسوم 1.50 دينار تحت 20.00 دينارًا؛ التوصيل مجاني من 20.00 دينارًا فأكثر؛ الرسوم تظهر قبل زر الدفع. اقترح أحد الأعضاء الحالات التالية:

| Candidate | Verdict | Reason |
| --- | --- | --- |
| A: total 25.00 → fee 0.00 | Keep | Covers "free from 20.00" |
| B: total 30.00 → fee 0.00 | Remove | Same characteristic as A |
| C: total 12.00 → fee 1.50 shown before "Pay" | Keep | Covers the fee rule and when it is shown |
| D: total 4.00 → rejected | Keep | Negative test for the minimum order |
| E: total 25.00 → 2 loyalty points awarded | Remove | Goes beyond the story |

ويمكن تحسين القيم دون إضافة تكرار: استخدام **20.00** بدل 25.00 في A، و**19.99** بدل 12.00 في C، و**4.99** بدل 4.00 في D، فتختبر الحالات الخصائص نفسها لكن عند حدودها، وهي القيم التي تكشف أخطاء `>` بدل `>=`.

### مثال محلول 3 — Using a Technique Inside ATDD: Order Cancellation

القصة: «بصفتي زبونًا، أريد إلغاء طلبي قبل أن يخرج للتوصيل، لكي لا أدفع ثمن طلب لم أعد أحتاجه». في ورشة المواصفات رسم الفريق حالات الطلب، واتفق على معيارين: الإلغاء مسموح في Placed وAccepted وPreparing؛ والإلغاء مرفوض في Out for delivery برسالة توضّح السبب.

هنا يظهر دور **اختبار انتقال الحالات** (القسم 4.2.4) داخل ATDD: كل انتقال «إلغاء» من حالة مسموحة مثال إيجابي، والمحاولة من حالة غير مسموحة مثال سلبي.

| # | Type | Given (precondition) | When (input) | Then (postcondition) |
| --- | --- | --- | --- | --- |
| 1 | Positive | Order is Placed | Customer taps "Cancel" | Order is Cancelled |
| 2 | Positive | Order is Accepted | Customer taps "Cancel" | Order is Cancelled |
| 3 | Positive | Order is Preparing | Customer taps "Cancel" | Order is Cancelled |
| 4 | Negative | Order is Out for delivery | Customer taps "Cancel" | Rejected with a reason; order stays Out for delivery |

قد يبدو أن الحالات 1 و2 و3 تكرر الخاصية نفسها، لكنها في الحقيقة **ثلاث خصائص مختلفة** نصّ عليها المعيار صراحة، أي ثلاث حالات مصدر للانتقال، وكل منها قد ينكسر وحده في الشيفرة. أما إضافة اختبار «إلغاء طلب Delivered» فتحتاج سؤالًا لمالك المنتج أولًا: إن لم يكن ضمن معايير القصة، فهو تجاوز لها، ومكانه قصة أخرى أو معيار جديد يُتفق عليه في الورشة.

### لماذا يعمل ATDD؟ — Why It Works

يجمع ATDD بين ثلاث فوائد: **الفهم المشترك**، لأن الأمثلة تُكتب معًا قبل البرمجة فلا يبني المطوّر شيئًا لم يقصده مالك المنتج؛ و**الاكتشاف المبكر**، لأن الغموض والنقص يُحلّان في الورشة حين يكون إصلاحهما مجرد تعديل جملة؛ و**التوثيق الحي**، لأن الاختبارات المؤتمتة تبقى صحيحة ما دامت تنجح، وتنبّه الفريق فورًا إذا كسر تعديل لاحق سلوكًا متفقًا عليه، فتصبح جزءًا من **اختبار الانحدار (regression testing)** في خط CI.

<section class="gx-lab" data-lab="LAB-4.5.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Derive ATDD Tests from One Story</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · استخرج اختبارات ATDD من قصة واحدة</span></span><span class="gx-lab-meta">LAB-4.5.3 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> practise deriving acceptance tests in the ATDD order.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> التدرّب على استخراج اختبارات القبول بترتيب ATDD.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Take a story from your backlog that has not been developed yet.</span><span class="gx-ar" lang="ar" dir="rtl">خذ قصة من قائمة المنتج لم تُطوَّر بعد.</span></li><li><span class="gx-en" lang="en" dir="ltr">Hold a 15-minute mini workshop with a developer and the product owner; agree on 3–5 acceptance criteria.</span><span class="gx-ar" lang="ar" dir="rtl">اعقد ورشة مصغّرة لمدة 15 دقيقة مع مطوّر ومالك المنتج، واتفقوا على 3 إلى 5 معايير قبول.</span></li><li><span class="gx-en" lang="en" dir="ltr">Write test cases in Given/When/Then: positive first, then negative, then one non-functional.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب حالات الاختبار بصيغة Given/When/Then: الإيجابية أولًا، ثم السلبية، ثم واحدة غير وظيفية.</span></li><li><span class="gx-en" lang="en" dir="ltr">Check: does every criterion have a test? Does any test go beyond the story? Do two tests check the same thing?</span><span class="gx-ar" lang="ar" dir="rtl">افحص: هل لكل معيار اختبار؟ هل يتجاوز أي اختبار حدود القصة؟ هل يفحص اختباران الشيء نفسه؟</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Every acceptance criterion maps to at least one test, the first test is the happy path, nothing tests behaviour outside the story, and there are no duplicates. A developer could start coding from your tests alone.</span><span class="gx-ar" lang="ar" dir="rtl">كل معيار قبول مرتبط باختبار واحد على الأقل، وأول اختبار هو المسار السعيد، ولا شيء يختبر سلوكًا خارج القصة، ولا يوجد تكرار. ويستطيع المطوّر أن يبدأ البرمجة من اختباراتك وحدها.</span></p></details></div></section>

### لا تخلط بين — Don't Confuse

| | TDD | ATDD | BDD |
| --- | --- | --- | --- |
| Tests written by | Developers | Team: customers, developers, testers | Team, focused on behaviour |
| Level | Unit / code | Acceptance, from acceptance criteria | Behaviour, Given/When/Then |
| Main output | Unit tests that drive code | Acceptance tests as examples | Executable scenarios |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In the delivery team, each story gets a 30-minute specification workshop on the first day of the sprint with the product owner, one developer and one tester. The Given/When/Then examples they agree on are committed next to the code, run in the CI pipeline on every commit, and the story is "done" only when all of them pass.</p><p class="gx-ar" lang="ar" dir="rtl">في فريق التوصيل، تحصل كل قصة على ورشة مواصفات مدتها 30 دقيقة في اليوم الأول من الـ sprint، بحضور مالك المنتج ومطوّر ومختبر. أمثلة Given/When/Then التي يتفقون عليها تُحفظ بجانب الشيفرة، وتُشغَّل في خط CI مع كل commit، ولا تُعدّ القصة «منجزة» إلا عندما تنجح كلها.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K3 questions give a story with acceptance criteria and several candidate test cases. Pick the one that matches a criterion exactly; reject options that test something outside the story or duplicate another test.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة K3 تعطي قصة بمعايير قبول وعدة حالات اختبار مقترحة. اختر الحالة التي تطابق معيارًا بالضبط؛ واستبعد الخيارات التي تختبر شيئًا خارج القصة أو تكرر اختبارًا آخر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Starting with edge cases and negative tests. In ATDD the usual order is positive (happy path) first, then negative, then non-functional.</p><p class="gx-ar" lang="ar" dir="rtl">البدء بالحالات الحدّية والاختبارات السلبية. في ATDD الترتيب المعتاد: الإيجابية (المسار السعيد) أولًا، ثم السلبية، ثم غير الوظيفية.</p></aside>

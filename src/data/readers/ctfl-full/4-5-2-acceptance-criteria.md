---
order: 13
slug: "4-5-2"
chapter: 4
group: "4.5"
section: "4.5.2"
title: "Acceptance Criteria"
titleAr: "معايير القبول"
objectives: "FL-4.5.2 · K2"
minutes: 13
lo:
  FL-4.5.2: "Classify the different options for writing acceptance criteria."
loAr:
  FL-4.5.2: "تصنّف الخيارات المختلفة لكتابة معايير القبول."
takeaways:
  - "Acceptance criteria are the conditions an implementation must meet to be accepted by stakeholders; they are the test conditions the tests should exercise."
  - "They define scope, build consensus, describe positive and negative scenarios, are the basis for acceptance testing, and allow accurate planning and estimation."
  - "Scenario-oriented format: Given/When/Then, as used in BDD."
  - "Rule-oriented format: a bullet-point verification list, or a tabulated mapping of inputs to outputs."
  - "Other formats are fine as long as the criteria are well defined and unambiguous."
takeawaysAr:
  - "معايير القبول هي الشروط التي يجب أن يحققها التنفيذ ليقبله أصحاب المصلحة؛ وهي شروط الاختبار التي يجب أن تمر عليها الاختبارات."
  - "تحدد النطاق، وتبني التوافق، وتصف السيناريوهات الإيجابية والسلبية، وهي أساس اختبار القبول، وتتيح تخطيطًا وتقديرًا دقيقين."
  - "الصيغة الموجّهة بالسيناريو: Given/When/Then كما في BDD."
  - "الصيغة الموجّهة بالقواعد: قائمة نقاط للتحقق، أو جدول يربط المدخلات بالمخرجات."
  - "الصيغ الأخرى مقبولة طالما المعايير محددة جيدًا وغير غامضة."
terms:
  - en: "Acceptance Criteria"
    ar: "معايير القبول"
    def: "The conditions an implementation of a user story must meet to be accepted by stakeholders."
    defAr: "الشروط التي يجب أن يحققها تنفيذ قصة المستخدم ليقبله أصحاب المصلحة."
    match: ["Acceptance Criteria", "acceptance criteria", "acceptance criterion"]
  - en: "Scenario-oriented Acceptance Criteria"
    ar: "معايير قبول موجّهة بالسيناريو"
    def: "Acceptance criteria written as example scenarios, typically in the Given/When/Then format used in BDD."
    defAr: "معايير قبول تُكتب كسيناريوهات أمثلة، عادةً بصيغة Given/When/Then المستخدمة في BDD."
    match: ["Scenario-oriented", "scenario-oriented"]
  - en: "Rule-oriented Acceptance Criteria"
    ar: "معايير قبول موجّهة بالقواعد"
    def: "Acceptance criteria written as rules, for example a bullet-point verification list or a table mapping inputs to outputs."
    defAr: "معايير قبول تُكتب كقواعد، مثل قائمة نقاط للتحقق أو جدول يربط المدخلات بالمخرجات."
    match: ["Rule-oriented", "rule-oriented"]
---
**معايير القبول (Acceptance Criteria)** لقصة المستخدم هي **الشروط التي يجب أن يحققها تنفيذ القصة ليقبله أصحاب المصلحة**. إذا كانت القصة تقول «ماذا نريد ولماذا»، فمعايير القبول تقول «كيف سنعرف أننا حصلنا عليه». وهي حرف **Confirmation** في الـ 3 Cs (القسم 4.5.1).

### معايير القبول كشروط اختبار — Acceptance Criteria as Test Conditions

يقول المنهج إنه **من هذا المنظور يمكن اعتبار معايير القبول شروط الاختبار (test conditions)** التي يجب أن تمر عليها الاختبارات. هذا يربط القسم بما درسناه في العملية الأساسية للاختبار: في تحليل الاختبار نستخرج شروط الاختبار من أساس الاختبار، وهنا تأتي جاهزة تقريبًا من معايير القبول، ثم نصمّم لها حالات اختبار.

وتكون معايير القبول **غالبًا نتيجة الحوار (Conversation)**. عندما يسأل المختبر في الحوار «ماذا لو انتهت صلاحية الكوبون؟» ويجيب مالك المنتج «يُرفض برسالة واضحة»، تتحول الإجابة إلى معيار قبول مكتوب.

### لماذا نكتبها؟ — What They Are For

يذكر المنهج خمسة استخدامات:

1. **تحديد نطاق قصة المستخدم:** المعايير ترسم حدود القصة. إذا قالت «كوبون واحد لكل طلب»، فدعم الكوبونات المتعددة خارج هذه القصة.
2. **الوصول إلى توافق بين أصحاب المصلحة:** كتابة المعيار تُظهر الاختلاف مبكرًا. مالك المنتج يظن أن الخصم يشمل رسوم التوصيل، والمطوّر يظن العكس؛ المعيار المكتوب يحسم الأمر قبل البرمجة.
3. **وصف السيناريوهات الإيجابية والسلبية:** ليس فقط ما يحدث عندما يسير كل شيء جيدًا، بل أيضًا ما يحدث مع كوبون منتهي أو طلب تحت الحد الأدنى.
4. **أساس لاختبار القبول للقصة:** منها تُشتق اختبارات القبول، كما سنرى في ATDD (القسم 4.5.3).
5. **تخطيط وتقدير دقيقان:** المعايير الواضحة تخبر الفريق بحجم العمل الحقيقي. قصة بمعيارين تختلف في جهدها عن القصة نفسها بعشرة معايير.

### صيغ الكتابة — Formats

هناك عدة طرق لكتابة معايير القبول، والصيغتان **الأكثر شيوعًا**:

<figure class="gx-figure gx-spectrum" aria-label="Two common formats for acceptance criteria."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Scenario-oriented</b><span>Given / When / Then, as in BDD.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Rule-oriented</b><span>A bullet-point verification list, or a table mapping inputs to outputs.</span></div></div><figcaption>Two common formats for acceptance criteria.</figcaption></figure>

**1. موجّهة بالسيناريو (Scenario-oriented):** تصف المعيار **كمثال سلوكي** بخطوات، عادةً بصيغة **Given/When/Then** المستخدمة في **BDD** (القسم 2.1.3): **Given** تصف الحالة المسبقة، و**When** الفعل، و**Then** النتيجة المتوقعة. مثال لقصة رسوم التوصيل:

> **Given** the cart total is 22.00 JOD **When** the customer confirms the order **Then** the delivery fee is 0.00 JOD

> **Given** the cart total is 12.00 JOD **When** the customer confirms the order **Then** a delivery fee of 1.50 JOD is added

> **Given** the cart total is 4.00 JOD **When** the customer tries to confirm the order **Then** the order is rejected with the message "Minimum order is 5.00 JOD"

السيناريو الثالث **سلبي**، ويحقق الاستخدام الثالث من القائمة أعلاه. هذه الصيغة تناسب السلوك الذي يحدث **كتسلسل** من الخطوات، ويفهمها أصحاب المصلحة غير التقنيين بسهولة، ويمكن أتمتتها مباشرة بأدوات BDD.

**2. موجّهة بالقواعد (Rule-oriented):** تصف **القواعد** نفسها دون سيناريو، بشكلين:

- **قائمة نقاط للتحقق (bullet point verification list):**
  - Orders below 5.00 JOD cannot be placed.
  - Delivery is free for orders of 20.00 JOD or more.
  - A delivery fee of 1.50 JOD applies to orders below 20.00 JOD.
  - The delivery fee is shown before payment.
- **جدول يربط المدخلات بالمخرجات (tabulated input-output mapping):**

| Cart total (JOD) | Order accepted | Delivery fee (JOD) |
| --- | --- | --- |
| 4.99 | No | — |
| 5.00 | Yes | 1.50 |
| 19.99 | Yes | 1.50 |
| 20.00 | Yes | 0.00 |

هذه الصيغة تناسب **القواعد والحسابات** ذات الحالات الكثيرة، لأن الجدول يعرض كل التركيبات في مكان واحد. لاحظ أن صفوف الجدول هي نفسها قيم تحليل القيم الحدّية (القسم 4.2.2)، فالتقنيات الرسمية تساعد في كتابة معايير قبول قوية.

### صيغ أخرى — Custom Formats

يقول المنهج إن **معظم** معايير القبول يمكن توثيقها بإحدى هاتين الصيغتين، **لكن** يمكن للفريق استخدام **صيغة أخرى مخصصة**، **طالما أن المعايير محددة جيدًا (well-defined) وغير غامضة (unambiguous)**. المهم ليس الشكل، بل أن يقرأ اثنان المعيار فيفهماه بالطريقة نفسها. «يجب أن يكون الدفع سريعًا» غامض بأي صيغة كُتب؛ «تظهر نتيجة الدفع خلال 3 ثوانٍ» واضح بأي صيغة.

### مثال على التصنيف — Classifying Criteria

هدف هذا القسم من المنهج K2 «تصنيف» الخيارات، أي أن ترى معيارًا فتعرف صيغته. خذ أربعة معايير من قصص تطبيق التوصيل:

1. «بافتراض أن الطلب في حالة "قيد التحضير"، عندما يضغط الزبون "إلغاء"، فإن الطلب ينتقل إلى "ملغى" ويصل إشعار للمطعم». هذا **موجّه بالسيناريو**: حالة مسبقة، ثم فعل، ثم نتيجة.
2. «لا يُسمح بأكثر من كوبون واحد لكل طلب». هذا **موجّه بالقواعد** على شكل بند في قائمة تحقق.
3. جدول يربط كل حالة للطلب (Placed، Accepted، Preparing، Out for delivery) بإمكانية الإلغاء فيها (نعم، نعم، نعم، لا). هذا **موجّه بالقواعد** على شكل جدول مدخلات ومخرجات.
4. نموذج شاشة مرسوم يحدد مواضع الأزرار مع ملاحظات مرقّمة متفق عليها. هذه **صيغة مخصصة**، وهي مقبولة ما دامت كل ملاحظة واضحة وغير غامضة.

السؤال المفيد عند التصنيف: **هل يصف المعيار ما يحدث خطوة بخطوة في مثال محدد، أم يصف قاعدة عامة تنطبق على كل الحالات؟** الأول سيناريو، والثاني قاعدة.

### ما الذي يجعل المعيار جيدًا؟ — Good Criteria

بغض النظر عن الصيغة، المعيار الجيد **قابل للتحقق** بنتيجة واضحة (نجح أو فشل)، و**محدد** بأرقام وقيم لا بكلمات مثل «سريع» و«مناسب»، و**يبقى ضمن نطاق القصة**، ويغطي **الحالات السلبية** إلى جانب الإيجابية. وإذا لم يستطع المختبر أن يشتق منه اختبارًا، فهذه إشارة إلى أن الحوار لم يكتمل بعد.

### لا تخلط بين — Don't Confuse

| | Scenario-oriented | Rule-oriented |
| --- | --- | --- |
| Typical form | Given / When / Then | Bullet list of rules, or input-output table |
| Best for | Flows and sequences of actions | Business rules and calculations |
| Linked practice | BDD | Decision tables, BVA-style tables |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery team mixes formats on purpose: fee and coupon rules go in a table, because the product owner can check every row against the price list, while order cancellation is written as Given/When/Then scenarios, because it is a sequence of states and actions.</p><p class="gx-ar" lang="ar" dir="rtl">يمزج فريق التوصيل الصيغ عن قصد: قواعد الرسوم والكوبونات تُكتب في جدول، لأن مالك المنتج يستطيع مطابقة كل صف مع قائمة الأسعار، بينما يُكتب إلغاء الطلب كسيناريوهات Given/When/Then، لأنه تسلسل من الحالات والأفعال.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2 "classify": Given/When/Then → scenario-oriented. Bullet list of rules or an input/output table → rule-oriented.</p><p class="gx-ar" lang="ar" dir="rtl">تصنيف K2: Given/When/Then ← موجّهة بالسيناريو. قائمة نقاط بالقواعد أو جدول مدخلات/مخرجات ← موجّهة بالقواعد.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Writing only positive acceptance criteria. They should also describe negative scenarios, such as what happens with an invalid coupon.</p><p class="gx-ar" lang="ar" dir="rtl">كتابة معايير قبول إيجابية فقط. يجب أن تصف أيضًا السيناريوهات السلبية، مثل ماذا يحدث مع كوبون غير صالح.</p></aside>

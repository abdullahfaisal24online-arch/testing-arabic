---
order: 5
slug: "4-2-4"
chapter: 4
group: "4.2"
section: "4.2.4"
title: "State Transition Testing"
titleAr: "اختبار انتقالات الحالة"
objectives: "FL-4.2.4 · K3"
minutes: 14
lo:
  FL-4.2.4: "Use state transition testing to derive test cases."
loAr:
  FL-4.2.4: "تستخدم اختبار انتقالات الحالة لاستخراج حالات الاختبار."
takeaways:
  - "A state transition diagram models a system's possible states and the valid transitions between them, triggered by events, optionally with guard conditions and actions."
  - "A state table shows the same model and makes invalid transitions explicit as empty cells."
  - "A test case is a sequence of events that causes a sequence of state changes and actions."
  - "All states coverage: every state visited. Valid transitions (0-switch) coverage: every valid transition exercised. All transitions coverage: every valid transition exercised and every invalid one attempted."
  - "Test each invalid transition in a separate test case to avoid defect masking."
  - "Full valid transitions coverage guarantees full all states coverage; full all transitions coverage guarantees both."
takeawaysAr:
  - "مخطط انتقالات الحالة ينمذج الحالات الممكنة للنظام والانتقالات الصالحة بينها، التي تحفّزها الأحداث، مع شروط حراسة وإجراءات اختيارية."
  - "جدول الحالات يعرض النموذج نفسه، ويُظهر الانتقالات غير الصالحة صراحة كخانات فارغة."
  - "حالة الاختبار هي تسلسل أحداث يسبب تسلسلًا من تغيّرات الحالة والإجراءات."
  - "تغطية كل الحالات: زيارة كل حالة. تغطية الانتقالات الصالحة (0-switch): تنفيذ كل انتقال صالح. تغطية كل الانتقالات: تنفيذ كل انتقال صالح ومحاولة كل انتقال غير صالح."
  - "اختبر كل انتقال غير صالح في حالة اختبار منفصلة لتجنّب إخفاء العيوب."
  - "التغطية الكاملة للانتقالات الصالحة تضمن التغطية الكاملة لكل الحالات؛ والتغطية الكاملة لكل الانتقالات تضمن الاثنين."
terms:
  - en: "State Transition Testing"
    ar: "اختبار انتقالات الحالة"
    def: "A black-box test technique in which test cases are designed to exercise elements of a state transition model."
    defAr: "تقنية صندوق أسود تُصمَّم فيها حالات الاختبار لتمرّ على عناصر نموذج انتقالات الحالة."
    match: ["State Transition Testing", "state transition testing"]
  - en: "State Transition Diagram"
    ar: "مخطط انتقالات الحالة"
    def: "A diagram showing the states of a system and the transitions between them, triggered by events."
    defAr: "مخطط يُظهر حالات النظام والانتقالات بينها، التي تحفّزها الأحداث."
  - en: "State Table"
    ar: "جدول الحالات"
    def: "A table equivalent to a state transition diagram: rows are states, columns are events, and cells show the resulting state and actions."
    defAr: "جدول مكافئ لمخطط انتقالات الحالة: الصفوف حالات، والأعمدة أحداث، والخانات تُظهر الحالة الناتجة والإجراءات."
  - en: "0-switch Coverage"
    ar: "تغطية 0-switch"
    def: "Another name for valid transitions coverage: every single valid transition is exercised."
    defAr: "اسم آخر لتغطية الانتقالات الصالحة: تنفيذ كل انتقال صالح منفرد."
    match: ["0-switch coverage", "0-switch"]
---
بعض الأنظمة يعتمد سلوكها على **حالتها الحالية** وعلى ما حدث قبل. طلب في متجر إلكتروني لا يمكن شحنه قبل دفعه، ولا إلغاؤه بعد شحنه. **اختبار انتقالات الحالة (State Transition Testing)** مصمم لهذا النوع من الأنظمة.

### مخطط انتقالات الحالة — State Transition Diagram

يُنمذج سلوك النظام بإظهار **حالاته الممكنة** و**الانتقالات الصالحة** بينها. الانتقال يبدأ بـ **حدث (Event)**، وقد يكون مشروطًا بـ **شرط حراسة (Guard Condition)**. الانتقالات تُعتبر **فورية**، وقد ينتج عنها **إجراء (Action)** من البرمجية. الصيغة الشائعة لتسمية الانتقال:

**event [guard condition] / action**

شروط الحراسة والإجراءات يمكن حذفها إن لم تكن موجودة أو غير مهمة للمختبر.

<figure class="gx-figure" aria-label="An online order: valid transitions only."><div class="gx-flow-row"><span class="gx-flow-node">Cart</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Placed<small>Place</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Paid<small>Pay</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Shipped<small>Ship</small></span></div><figcaption>An online order: valid transitions only.</figcaption></figure>

بالإضافة لذلك: يمكن إلغاء الطلب من **Placed** أو من **Paid**، فينتقل إلى **Cancelled**.

### جدول الحالات — State Table

**جدول الحالات** نموذج مكافئ للمخطط: **الصفوف هي الحالات**، و**الأعمدة هي الأحداث** (مع شروط الحراسة إن وُجدت). الخانات تُظهر **الحالة الناتجة** والإجراءات.

ميزته أن **الخانات الفارغة تمثّل انتقالات غير صالحة** بشكل صريح، بعكس المخطط الذي يُظهر الصالح فقط.

| State \ Event | Place | Pay | Ship | Cancel |
| --- | --- | --- | --- | --- |
| Cart | Placed | — | — | — |
| Placed | — | Paid | — | Cancelled |
| Paid | — | — | Shipped | Cancelled |
| Shipped | — | — | — | — |
| Cancelled | — | — | — | — |

5 حالات، 4 أحداث، **5 انتقالات صالحة** و**15 انتقالًا غير صالح** (الخانات «—»).

### حالة الاختبار — A Test Case

حالة الاختبار المبنية على مخطط أو جدول حالات تُمثَّل عادة كـ **تسلسل أحداث** ينتج عنه تسلسل من تغيّرات الحالة (والإجراءات إن لزم). حالة اختبار واحدة قد، وغالبًا، تغطي عدة انتقالات.

### معايير التغطية — Coverage Criteria

| Criterion | Coverage items | 100% means |
| --- | --- | --- |
| All states coverage | States | Every state is visited |
| Valid transitions coverage (0-switch) | Single valid transitions | Every valid transition is exercised |
| All transitions coverage | All transitions in the state table | Every valid transition exercised and every invalid one attempted |

- تغطية كل الحالات **أضعف** من تغطية الانتقالات الصالحة، لأنها تتحقق عادة دون المرور على كل الانتقالات.
- **تغطية الانتقالات الصالحة** هي المعيار الأكثر استخدامًا. والتغطية الكاملة للانتقالات الصالحة **تضمن** التغطية الكاملة لكل الحالات.
- **التغطية الكاملة لكل الانتقالات تضمن** التغطية الكاملة لكل الحالات والانتقالات الصالحة، ويجب أن تكون **الحد الأدنى** للبرمجيات الحرجة للمهمة والسلامة.
- اختبر كل **انتقال غير صالح في حالة اختبار منفصلة**، لتجنّب **إخفاء العيوب (Fault Masking)**: إذا رُفض الانتقال الأول، لن تعرف هل كان الثاني سيُرفض.

**التغطية = العناصر المختبرة ÷ العناصر الكلية × 100%** حسب المعيار المختار.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="st" data-config="{&quot;title&quot;:&quot;Online order lifecycle&quot;,&quot;spec&quot;:&quot;Fire events from the current state. Valid transitions move the order; an invalid event stops the test case. Watch the three coverage meters.&quot;,&quot;states&quot;:[&quot;Cart&quot;,&quot;Placed&quot;,&quot;Paid&quot;,&quot;Shipped&quot;,&quot;Cancelled&quot;],&quot;events&quot;:[&quot;Place&quot;,&quot;Pay&quot;,&quot;Ship&quot;,&quot;Cancel&quot;],&quot;initial&quot;:&quot;Cart&quot;,&quot;transitions&quot;:[{&quot;from&quot;:&quot;Cart&quot;,&quot;event&quot;:&quot;Place&quot;,&quot;to&quot;:&quot;Placed&quot;},{&quot;from&quot;:&quot;Placed&quot;,&quot;event&quot;:&quot;Pay&quot;,&quot;to&quot;:&quot;Paid&quot;},{&quot;from&quot;:&quot;Placed&quot;,&quot;event&quot;:&quot;Cancel&quot;,&quot;to&quot;:&quot;Cancelled&quot;},{&quot;from&quot;:&quot;Paid&quot;,&quot;event&quot;:&quot;Ship&quot;,&quot;to&quot;:&quot;Shipped&quot;},{&quot;from&quot;:&quot;Paid&quot;,&quot;event&quot;:&quot;Cancel&quot;,&quot;to&quot;:&quot;Cancelled&quot;,&quot;label&quot;:&quot;refund&quot;}],&quot;caption&quot;:&quot;Minimum for 100% valid transitions coverage: three test cases (Place→Pay→Ship, Place→Cancel, Place→Pay→Cancel), because three valid transitions end in a final state.&quot;}" aria-label="Online order lifecycle"><figcaption>Interactive: Online order lifecycle</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Typical K3 question: "What is the minimum number of test cases for 100% valid transitions coverage?" Trace paths from the initial state; each path ends when it reaches a final state. Count how many paths you need so that every valid transition appears at least once.</p><p class="gx-ar" lang="ar" dir="rtl">سؤال K3 معتاد: «ما أقل عدد من حالات الاختبار لتغطية 100% للانتقالات الصالحة؟». تتبّع المسارات من الحالة الابتدائية؛ وكل مسار ينتهي عند وصوله لحالة نهائية. عُدّ كم مسارًا تحتاج حتى يظهر كل انتقال صالح مرة واحدة على الأقل.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Packing several invalid transitions into one test case. Once the first invalid event is rejected, the rest are not really tested. One invalid transition per test case.</p><p class="gx-ar" lang="ar" dir="rtl">وضع عدة انتقالات غير صالحة في حالة اختبار واحدة. بمجرد رفض الحدث غير الصالح الأول، لا يُختبر الباقي فعليًا. انتقال غير صالح واحد لكل حالة اختبار.</p></aside>

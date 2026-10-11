---
order: 5
slug: "4-2-4"
chapter: 4
group: "4.2"
section: "4.2.4"
title: "State Transition Testing"
titleAr: "اختبار انتقالات الحالة"
objectives: "FL-4.2.4 · K3"
minutes: 28
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
  - "Number of all-transitions coverage items = number of cells in the state table (states × events); invalid transitions = cells − valid transitions."
  - "Valid transitions coverage is the most widely used criterion; all transitions coverage should be the minimum for mission- and safety-critical software."
takeawaysAr:
  - "مخطط انتقالات الحالة ينمذج الحالات الممكنة للنظام والانتقالات الصالحة بينها، التي تحفّزها الأحداث، مع شروط حراسة وإجراءات اختيارية."
  - "جدول الحالات يعرض النموذج نفسه، ويُظهر الانتقالات غير الصالحة صراحة كخانات فارغة."
  - "حالة الاختبار هي تسلسل أحداث يسبب تسلسلًا من تغيّرات الحالة والإجراءات."
  - "تغطية كل الحالات: زيارة كل حالة. تغطية الانتقالات الصالحة (0-switch): تنفيذ كل انتقال صالح. تغطية كل الانتقالات: تنفيذ كل انتقال صالح ومحاولة كل انتقال غير صالح."
  - "اختبر كل انتقال غير صالح في حالة اختبار منفصلة لتجنّب إخفاء الـ defects."
  - "التغطية الكاملة للانتقالات الصالحة تضمن التغطية الكاملة لكل الحالات؛ والتغطية الكاملة لكل الانتقالات تضمن الاثنين."
  - "عدد عناصر تغطية كل الانتقالات = عدد خانات جدول الحالات (الحالات × الأحداث)؛ والانتقالات غير الصالحة = الخانات − الانتقالات الصالحة."
  - "تغطية الانتقالات الصالحة هي المعيار الأكثر استخدامًا؛ وتغطية كل الانتقالات يجب أن تكون الحد الأدنى للبرمجيات الحرجة للمهمة والسلامة."
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
  - en: "Guard Condition"
    ar: "شرط الحراسة"
    def: "A condition that must be true for a transition to take place when its event occurs."
    defAr: "شرط يجب أن يكون صحيحًا حتى يحدث الانتقال عند وقوع الحدث."
    match: ["guard condition", "Guard Condition", "guard conditions"]
  - en: "Defect Masking"
    ar: "إخفاء الـ defects"
    def: "A situation in which one defect prevents the detection of another."
    defAr: "حالة يمنع فيها defect اكتشافَ defect آخر."
    match: ["defect masking", "Defect Masking", "Fault Masking"]
---
بعض الأنظمة يعتمد سلوكها على **حالتها الحالية** وعلى ما حدث قبل، لا على المدخل الحالي وحده. الحدث نفسه، «إلغاء الطلب»، يُقبل في تطبيق التوصيل إذا كان الطلب ما زال في المطبخ، ويُرفض إذا كان السائق في الطريق. **اختبار انتقالات الحالة (State Transition Testing)** مصمم لهذا النوع من الأنظمة: دورات حياة الطلبات، وتسجيل الدخول مع القفل بعد محاولات فاشلة، وأجهزة الصراف، وشاشات التطبيقات.

لماذا تقنية خاصة؟ لأن EP وجداول القرار تنظر إلى المدخلات في لحظة واحدة، بينما الـ defects هنا تظهر في **تسلسل** الأحداث: حالة لا يمكن الخروج منها، أو انتقال ممنوع يقبله النظام، أو إجراء لا يحدث مع الانتقال.

### مخطط الحالات — State Diagram

**مخطط الحالات (State Diagram)** يُنمذج سلوك النظام بإظهار **حالاته الممكنة** و**الانتقالات الصالحة** بينها. ويحدد المنهج عناصره:

- **الانتقال (Transition)** يبدأ بـ **حدث (Event)**، مثل «قبِل المطعم الطلب».
- قد يكون الحدث مقيّدًا بـ **شرط حراسة (Guard Condition)**: الانتقال لا يحدث إلا إذا كان الشرط صحيحًا. مثال: «الاستلام [تم تعيين سائق]».
- الانتقالات **تُعتبر فورية**، أي لا «وقت» داخل الانتقال نفسه؛ النظام إما في الحالة القديمة أو الجديدة.
- قد ينتج عن الانتقال أحيانًا **إجراء (Action)** من البرمجية، مثل إرسال إشعار للزبون.

الصيغة الشائعة لتسمية الانتقال:

**event [guard condition] / action**

ويمكن **حذف شروط الحراسة والإجراءات** إذا لم تكن موجودة أو لم تكن مهمة للمختبر.

**نموذج الطلب في تطبيق التوصيل** (المسار الرئيسي):

<figure class="gx-figure" aria-label="Delivery app order: main path of valid transitions."><div class="gx-flow-row"><span class="gx-flow-node">Placed</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Accepted<small>Accept</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Preparing<small>Prepare</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Out for delivery<small>Pick up</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Delivered<small>Deliver</small></span></div><figcaption>Delivery app order: main path of valid transitions. Cancel leads to Cancelled from Placed, Accepted or Preparing.</figcaption></figure>

والانتقالات الصالحة كاملة، بصيغة المنهج:

| ID | From | Label (event [guard] / action) | To |
| --- | --- | --- | --- |
| T1 | Placed | Accept / notify customer | Accepted |
| T2 | Accepted | Prepare | Preparing |
| T3 | Preparing | Pick up [driver assigned] / send tracking link | Out for delivery |
| T4 | Out for delivery | Deliver / request rating | Delivered |
| T5 | Placed | Cancel | Cancelled |
| T6 | Accepted | Cancel / notify restaurant | Cancelled |
| T7 | Preparing | Cancel / notify restaurant | Cancelled |

6 حالات و**7 انتقالات صالحة**. الحالتان Delivered وCancelled **نهائيتان**: لا يخرج منهما أي انتقال صالح.

لاحظ دور شرط الحراسة في T3: حدث «الاستلام» وحده لا يكفي، بل يجب أن يكون السائق معيّنًا. ولاحظ الإجراءات: الانتقال قد يكون صحيحًا من حيث الحالة الهدف، ومع ذلك يفشل الاختبار لأن الإشعار لم يُرسل. لذلك تتحقق حالة الاختبار من **الحالة الناتجة والإجراء** معًا.

### جدول الحالات — State Table

**جدول الحالات (State Table)** نموذج **مكافئ** للمخطط: **صفوفه الحالات**، و**أعمدته الأحداث** (مع شروط الحراسة إن وُجدت). كل **خانة** تمثّل انتقالًا، وتحتوي **الحالة الهدف** والإجراءات الناتجة إن كانت معرّفة. وبعكس المخطط، **يُظهر الجدول الانتقالات غير الصالحة صراحة، وهي الخانات الفارغة**. هذه أهم ميزة له للمختبر: المخطط يخبرك بما يجب أن يحدث، والجدول يذكّرك بكل ما **يجب ألّا يحدث**.

| State \ Event | Accept | Prepare | Pick up [driver assigned] | Deliver | Cancel |
| --- | --- | --- | --- | --- | --- |
| Placed | Accepted / notify customer | | | | Cancelled |
| Accepted | | Preparing | | | Cancelled / notify restaurant |
| Preparing | | | Out for delivery / send tracking link | | Cancelled / notify restaurant |
| Out for delivery | | | | Delivered / request rating | |
| Delivered | | | | | |
| Cancelled | | | | | |

6 حالات × 5 أحداث = **30 خانة**: **7 انتقالات صالحة** و**23 انتقالًا غير صالح**. لاحظ الخانة الفارغة «Out for delivery + Cancel»: هي قاعدة العمل «لا إلغاء بعد خروج السائق» مكتوبة كانتقال غير صالح.

### حالة الاختبار — A Test Case

حالة الاختبار المبنية على مخطط الحالات أو جدولها تُمثَّل عادة كـ **تسلسل أحداث**، ينتج عنه **تسلسل من تغيّرات الحالة** (والإجراءات إذا لزم). وحالة الاختبار الواحدة **قد، وفي الغالب ستغطي، عدة انتقالات**. مثال:

| Step | State before | Event | Expected state | Expected action |
| --- | --- | --- | --- | --- |
| 1 | Placed | Accept | Accepted | Customer notified |
| 2 | Accepted | Prepare | Preparing | — |
| 3 | Preparing | Cancel | Cancelled | Restaurant notified |

هذه الحالة الواحدة تغطي T1 وT2 وT7.

وعند تجربة انتقال غير صالح تكون النتيجة المتوقعة عادة: **رفض الحدث** (رسالة خطأ أو تجاهل)، و**بقاء الحالة كما هي**، و**عدم تنفيذ أي إجراء**. مثال: طلب في حالة Delivered يستقبل حدث Cancel؛ المتوقع أن يبقى Delivered وألّا يُعاد أي مبلغ للزبون.

### معايير التغطية — Coverage Criteria

توجد معايير تغطية كثيرة لهذه التقنية، والمنهج يناقش ثلاثة منها:

| Criterion | Coverage items | 100% means | Coverage = |
| --- | --- | --- | --- |
| All states coverage | States | Every state is exercised | Exercised states ÷ all states |
| Valid transitions coverage (0-switch) | Single valid transitions | Every valid transition is exercised | Exercised valid transitions ÷ all valid transitions |
| All transitions coverage | All transitions in the state table (valid and invalid) | Every valid transition exercised and every invalid one attempted | (Valid exercised + invalid attempted) ÷ all transitions |

- **تغطية كل الحالات أضعف** من تغطية الانتقالات الصالحة، لأنها يمكن تحقيقها عادة **دون تنفيذ كل الانتقالات**.
- **تغطية الانتقالات الصالحة هي المعيار الأكثر استخدامًا**. والتغطية الكاملة لها **تضمن** التغطية الكاملة لكل الحالات، لأن كل حالة يدخلها انتقال صالح أو هي الحالة الابتدائية التي يبدأ منها كل اختبار. وتسمية «0-switch» تعني أن عنصر التغطية انتقال **منفرد**، بلا انتقالات متتالية.
- **التغطية الكاملة لكل الانتقالات تضمن** التغطية الكاملة لكل الحالات والانتقالات الصالحة معًا، ويجب أن تكون **حدًا أدنى للبرمجيات الحرجة للمهمة والسلامة (Mission- and Safety-critical)**.
- **اختبار انتقال غير صالح واحد فقط في حالة الاختبار الواحدة** يساعد على تجنّب **إخفاء الـ defects (Defect Masking)**: حالة يمنع فيها defect اكتشافَ defect آخر.

### خطوات التطبيق — Step by Step

1. **ارسم النموذج**: الحالات، والحالة الابتدائية، والأحداث، والانتقالات الصالحة مع الحراسة والإجراءات.
2. **ابنِ جدول الحالات**، وعُدّ الخانات: الصالحة والفارغة.
3. **اختر معيار التغطية** واكتب عناصر التغطية: حالات، أو انتقالات صالحة، أو كل الخانات.
4. **صمّم تسلسلات أحداث** تبدأ من الحالة الابتدائية. كل وصول إلى حالة نهائية ينهي حالة الاختبار.
5. **لكل انتقال غير صالح** صمّم حالة اختبار منفصلة: أوصل النظام إلى الحالة المطلوبة بانتقالات صالحة، ثم جرّب الحدث الممنوع مرة واحدة.
6. **حدّد النتائج المتوقعة**: الحالة بعد كل حدث، والإجراءات، وأن الحدث الممنوع يُرفض والحالة لا تتغيّر.
7. **احسب التغطية** حسب المعيار.

### مثال محلول 1: تغطية كل الحالات — All States

| Test | Event sequence | States visited |
| --- | --- | --- |
| TC1 | Accept, Prepare, Pick up, Deliver | Placed, Accepted, Preparing, Out for delivery, Delivered |
| TC2 | Cancel | Placed, Cancelled |

حالتا اختبار تزوران الحالات الست: **تغطية كل الحالات 6/6 = 100%**. لكن الانتقالات الصالحة المنفّذة هي T1 وT2 وT3 وT4 وT5 فقط، أي **5/7 = 71.4%** من تغطية الانتقالات الصالحة. الإلغاء من Accepted ومن Preparing لم يُختبر، مع أن فيه إجراء «إشعار المطعم». هذا بالضبط معنى أن تغطية كل الحالات أضعف.

### مثال محلول 2: تغطية الانتقالات الصالحة — Valid Transitions (0-switch)

أربعة انتقالات تنتهي في حالة نهائية: T4 وT5 وT6 وT7. كل منها ينهي حالة الاختبار، فلا يمكن أن تجتمع اثنتان منها في حالة واحدة. إذن الحد الأدنى **4 حالات اختبار**:

| Test | Event sequence | Transitions covered |
| --- | --- | --- |
| TC1 | Accept, Prepare, Pick up, Deliver | T1, T2, T3, T4 |
| TC2 | Cancel | T5 |
| TC3 | Accept, Cancel | T1, T6 |
| TC4 | Accept, Prepare, Cancel | T1, T2, T7 |

**تغطية الانتقالات الصالحة 7/7 = 100%**، ومعها تلقائيًا **تغطية كل الحالات 100%**. لاحظ أن T1 تكرر، وهذا طبيعي: الهدف أن يظهر كل انتقال مرة على الأقل، لا أن يظهر مرة واحدة فقط. وفي الامتحان، ابدأ بعدّ الانتقالات التي تدخل الحالات النهائية، فهي تعطيك غالبًا الحد الأدنى مباشرة.

### مثال محلول 3: تغطية كل الانتقالات — All Transitions

عناصر التغطية هي **الخانات الثلاثون** كلها. الانتقالات غير الصالحة الـ 23:

| State | Invalid events | Count |
| --- | --- | --- |
| Placed | Prepare, Pick up, Deliver | 3 |
| Accepted | Accept, Pick up, Deliver | 3 |
| Preparing | Accept, Prepare, Deliver | 3 |
| Out for delivery | Accept, Prepare, Pick up, Cancel | 4 |
| Delivered | Accept, Prepare, Pick up, Deliver, Cancel | 5 |
| Cancelled | Accept, Prepare, Pick up, Deliver, Cancel | 5 |

كل انتقال غير صالح يحتاج حالة اختبار خاصة به، فالحد الأدنى **23 حالة اختبار**. والانتقالات الصالحة السبعة لا تحتاج حالات إضافية، لأننا نصل إلى الحالة المطلوبة عبرها. مثال: «Accept, Prepare, Pick up, ثم محاولة Cancel» يغطي T1 وT2 وT3 ويحاول انتقالًا غير صالح واحدًا، والنتيجة المتوقعة: الإلغاء يُرفض والطلب يبقى Out for delivery.

**طريقة سريعة للعدّ في الامتحان:** عدد عناصر تغطية كل الانتقالات = عدد الحالات × عدد الأعمدة في جدول الحالات، وعدد غير الصالحة = هذا العدد − عدد الانتقالات الصالحة. هنا: 6 × 5 = 30، و30 − 7 = 23.

**حساب التغطية الجزئية:** نفّذ الفريق حالات المثال 2 الأربع، ثم جرّب 10 انتقالات غير صالحة فقط. تغطية كل الانتقالات = (7 + 10) ÷ 30 = **56.7%**، مع أن تغطية الانتقالات الصالحة 100%.

**لماذا انتقال غير صالح واحد فقط؟** تخيّل حالة اختبار تجرّب Deliver على طلب Placed، ثم Cancel على طلب Out for delivery. لو قبل النظام خطأً Deliver الأول، فسيصبح الطلب Delivered، ولن نصل أبدًا إلى تجربة الإلغاء من Out for delivery. الـ defect الأول **أخفى** فرصة اكتشاف الثاني.

### مثال بسيط آخر: طلب في متجر إلكتروني — Online Order

نموذج أصغر من خمس حالات، تستخدمه الأداة التفاعلية أدناه:

<figure class="gx-figure" aria-label="An online order: valid transitions only."><div class="gx-flow-row"><span class="gx-flow-node">Cart</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Placed<small>Place</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Paid<small>Pay</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Shipped<small>Ship</small></span></div><figcaption>An online order: valid transitions only.</figcaption></figure>

بالإضافة لذلك: يمكن إلغاء الطلب من **Placed** أو من **Paid**، فينتقل إلى **Cancelled**.

| State \ Event | Place | Pay | Ship | Cancel |
| --- | --- | --- | --- | --- |
| Cart | Placed | — | — | — |
| Placed | — | Paid | — | Cancelled |
| Paid | — | — | Shipped | Cancelled |
| Shipped | — | — | — | — |
| Cancelled | — | — | — | — |

5 حالات، 4 أحداث، **5 انتقالات صالحة** و**15 انتقالًا غير صالح** (الخانات «—»).

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="st" data-config="{&quot;title&quot;:&quot;Online order lifecycle&quot;,&quot;spec&quot;:&quot;Fire events from the current state. Valid transitions move the order; an invalid event stops the test case. Watch the three coverage meters.&quot;,&quot;states&quot;:[&quot;Cart&quot;,&quot;Placed&quot;,&quot;Paid&quot;,&quot;Shipped&quot;,&quot;Cancelled&quot;],&quot;events&quot;:[&quot;Place&quot;,&quot;Pay&quot;,&quot;Ship&quot;,&quot;Cancel&quot;],&quot;initial&quot;:&quot;Cart&quot;,&quot;transitions&quot;:[{&quot;from&quot;:&quot;Cart&quot;,&quot;event&quot;:&quot;Place&quot;,&quot;to&quot;:&quot;Placed&quot;},{&quot;from&quot;:&quot;Placed&quot;,&quot;event&quot;:&quot;Pay&quot;,&quot;to&quot;:&quot;Paid&quot;},{&quot;from&quot;:&quot;Placed&quot;,&quot;event&quot;:&quot;Cancel&quot;,&quot;to&quot;:&quot;Cancelled&quot;},{&quot;from&quot;:&quot;Paid&quot;,&quot;event&quot;:&quot;Ship&quot;,&quot;to&quot;:&quot;Shipped&quot;},{&quot;from&quot;:&quot;Paid&quot;,&quot;event&quot;:&quot;Cancel&quot;,&quot;to&quot;:&quot;Cancelled&quot;,&quot;label&quot;:&quot;refund&quot;}],&quot;caption&quot;:&quot;Minimum for 100% valid transitions coverage: three test cases (Place→Pay→Ship, Place→Cancel, Place→Pay→Cancel), because three valid transitions end in a final state.&quot;}" aria-label="Online order lifecycle"><figcaption>Interactive: Online order lifecycle</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team automated the four valid-transition test cases in the CI pipeline. When they later attempted the invalid transition "Cancel while Out for delivery" through the backend API, the order was cancelled and the driver kept driving: the customer app hid the button, but the API had no check. Only the state table made that empty cell visible.</p><p class="gx-ar" lang="ar" dir="rtl">أتمت فريق تطبيق التوصيل حالات اختبار الانتقالات الصالحة الأربع في خط CI. وعندما جرّبوا لاحقًا الانتقال غير الصالح «إلغاء أثناء Out for delivery» عبر الـ API، أُلغي الطلب والسائق ما زال في الطريق: تطبيق الزبون كان يخفي الزر، لكن الـ API لم يكن فيه أي فحص. جدول الحالات وحده جعل تلك الخانة الفارغة ظاهرة.</p></aside>

### لا تخلط بين — Don't Confuse

| | All states | Valid transitions (0-switch) | All transitions |
| --- | --- | --- | --- |
| Coverage items in the delivery model | 6 | 7 | 30 |
| Minimum test cases in the delivery model | 2 | 4 | 23 |
| Includes invalid transitions? | No | No | Yes, attempted one per test case |
| Guarantees | — | All states | All states and valid transitions |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Typical K3 question: "What is the minimum number of test cases for 100% valid transitions coverage?" Trace paths from the initial state; each path ends when it reaches a final state. Count how many paths you need so that every valid transition appears at least once.</p><p class="gx-ar" lang="ar" dir="rtl">سؤال K3 معتاد: «ما أقل عدد من حالات الاختبار لتغطية 100% للانتقالات الصالحة؟». تتبّع المسارات من الحالة الابتدائية؛ وكل مسار ينتهي عند وصوله لحالة نهائية. عُدّ كم مسارًا تحتاج حتى يظهر كل انتقال صالح مرة واحدة على الأقل.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Packing several invalid transitions into one test case. If a defect wrongly accepts the first invalid event, the state changes and the later invalid transitions are never really attempted (defect masking). One invalid transition per test case.</p><p class="gx-ar" lang="ar" dir="rtl">وضع عدة انتقالات غير صالحة في حالة اختبار واحدة. إذا قبل النظام خطأً الحدثَ غير الصالح الأول، تتغيّر الحالة فلا تُجرَّب الانتقالات غير الصالحة التالية فعليًا (إخفاء الـ defects). انتقال غير صالح واحد لكل حالة اختبار.</p></aside>

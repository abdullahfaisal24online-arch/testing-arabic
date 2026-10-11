---
order: 2
slug: "4-2-1"
chapter: 4
group: "4.2"
section: "4.2.1"
title: "Equivalence Partitioning"
titleAr: "تقسيم التكافؤ"
objectives: "FL-4.2.1 · K3"
minutes: 25
lo:
  FL-4.2.1: "Use equivalence partitioning to derive test cases."
loAr:
  FL-4.2.1: "تستخدم تقسيم التكافؤ لاستخراج حالات الاختبار."
takeaways:
  - "EP divides data into partitions whose elements are expected to be processed the same way."
  - "If one value finds a defect, any other value from the same partition is expected to find it too, so one test per partition is enough."
  - "Partitions must not overlap and must not be empty; they can be valid (should be processed) or invalid (should be ignored or rejected)."
  - "Coverage items are the partitions. 100% coverage means every partition, valid and invalid, is exercised at least once."
  - "With several sets of partitions, Each Choice coverage means each partition from each set is exercised at least once."
  - "Partitions can be identified for any data element: inputs, outputs, configuration items, internal values, time-related values and interface parameters."
  - "Partitioning must be done with care: in practice, understanding how the test object treats different values is often complicated."
  - "Each Choice coverage ignores combinations, so its minimum number of test cases equals the largest number of partitions in any single set."
takeawaysAr:
  - "تقسيم التكافؤ يقسم البيانات إلى أقسام يُتوقع أن تُعالَج عناصر كل منها بالطريقة نفسها."
  - "إذا اكتشفت قيمة defect، يُتوقع أن تكتشفه أي قيمة أخرى من القسم نفسه، فيكفي اختبار واحد لكل قسم."
  - "الأقسام يجب ألّا تتداخل وألّا تكون فارغة؛ وقد تكون صالحة (يجب معالجتها) أو غير صالحة (يجب تجاهلها أو رفضها)."
  - "عناصر التغطية هي الأقسام. والتغطية 100% تعني اختبار كل قسم، صالح وغير صالح، مرة واحدة على الأقل."
  - "مع عدة مجموعات من الأقسام، تغطية Each Choice تعني اختبار كل قسم من كل مجموعة مرة واحدة على الأقل."
  - "يمكن تحديد الأقسام لأي عنصر بيانات: المدخلات، والمخرجات، وعناصر الإعدادات، والقيم الداخلية، والقيم المرتبطة بالوقت، ومعاملات الواجهات."
  - "التقسيم يجب أن يتم بعناية: فهم كيف يعالج موضوع الاختبار القيم المختلفة معقّد غالبًا في الواقع."
  - "تغطية Each Choice لا تراعي التركيبات، فأقل عدد من حالات الاختبار لها يساوي أكبر عدد أقسام في مجموعة واحدة."
terms:
  - en: "Equivalence Partitioning"
    ar: "تقسيم التكافؤ"
    def: "A black-box test technique in which test conditions are equivalence partitions, exercised by one representative value each."
    defAr: "تقنية صندوق أسود تكون فيها شروط الاختبار أقسام تكافؤ، يُختبر كل منها بقيمة ممثّلة واحدة."
    match: ["Equivalence Partitioning", "equivalence partitioning", "EP"]
  - en: "Equivalence Partition"
    ar: "قسم التكافؤ"
    def: "A subset of the value domain of a variable, for which all values are expected to be treated the same way."
    defAr: "مجموعة جزئية من قيم متغير، يُتوقع أن تُعالَج كل قيمها بالطريقة نفسها."
    match: ["Equivalence Partition", "equivalence partition", "partitions"]
  - en: "Valid Partition"
    ar: "القسم الصالح"
    def: "A partition containing values that should be processed by the test object."
    defAr: "قسم يحتوي قيمًا يجب أن يعالجها موضوع الاختبار."
  - en: "Invalid Partition"
    ar: "القسم غير الصالح"
    def: "A partition containing values that should be ignored or rejected by the test object."
    defAr: "قسم يحتوي قيمًا يجب أن يتجاهلها موضوع الاختبار أو يرفضها."
  - en: "Each Choice Coverage"
    ar: "تغطية كل خيار"
    def: "Coverage in which each partition from each set of partitions is exercised at least once; combinations are not considered."
    defAr: "تغطية يُختبر فيها كل قسم من كل مجموعة أقسام مرة واحدة على الأقل، دون مراعاة التركيبات بينها."
---
**تقسيم التكافؤ (Equivalence Partitioning / EP)** يقسم البيانات إلى **أقسام (Partitions)** تسمّى **أقسام التكافؤ (Equivalence Partitions)**، بناءً على توقع أن **كل عناصر القسم الواحد ستُعالَج بالطريقة نفسها** من موضوع الاختبار.

في تطبيق التوصيل، قيمة الطلب قد تكون 5.00 أو 7.25 أو 13.40 أو 19.99 دينارًا، وكلها تُعالَج بالطريقة نفسها: يُقبل الطلب وتُضاف رسوم توصيل 1.50. فما الفائدة من اختبار عشرين قيمة منها؟ EP يقول: هذه القيم «متكافئة»، فاختر واحدة منها فقط، ووفّر وقتك للأقسام الأخرى التي تُعالَج بطريقة مختلفة.

### النظرية وراء التقنية — The Theory

الفكرة وراء التقنية: إذا اكتشفت حالة اختبار تختبر **قيمة واحدة** من قسم ما defect، فيُتوقع أن **يكتشف** الـ defect نفسه أي اختبار بقيمة أخرى من القسم نفسه. مثلًا: إذا كان الكود يحسب رسوم التوصيل 2.00 بدل 1.50 لطلب قيمته 8.00، فالخطأ نفسه سيظهر مع 12.00 ومع 17.50، لأن كل هذه القيم تمر في المعالجة نفسها. والعكس صحيح: إذا نجح الاختبار بقيمة 8.00، فلا يُتوقع أن يفشل بقيمة 12.00. لذلك **يكفي اختبار واحد لكل قسم**، وأي قيمة ثانية من القسم نفسه لا تضيف تغطية.

### أين تُستخدم الأقسام؟ — Where Partitions Apply

يمكن تحديد أقسام تكافؤ **لأي عنصر بيانات** مرتبط بموضوع الاختبار، وليس للمدخلات فقط:

| Data element | Delivery app example | Partitions |
| --- | --- | --- |
| Input | Order total | < 5.00 / 5.00–19.99 / ≥ 20.00 |
| Output | Delivery fee shown | 0.00 (free) / 1.50 |
| Configuration item | App language | Arabic / English |
| Internal value | Number of items in the cart | 0 / 1–20 / > 20 |
| Time-related value | Coupon used on a date | Before or on the expiry date / after it |
| Interface parameter | Payment gateway response | Approved / Declined / Timeout |

تقسيم **المخرجات** مهم بشكل خاص: قد تنسى المدخلات قسمًا، لكن النظر إلى المخرج «رسوم 0.00 مقابل 1.50» يذكّرك بأن هناك قسمين صالحين لقيمة الطلب، لا قسمًا واحدًا.

### أنواع الأقسام — Kinds of Partitions

يذكر المنهج أن الأقسام قد تكون:

- **متصلة (Continuous)** مثل الوقت أو المسافة، أو **منفصلة (Discrete)** مثل عدد الوجبات 1، 2، 3.
- **مرتّبة (Ordered)** مثل قيمة الطلب، أو **غير مرتّبة (Unordered)** مثل طريقة الدفع (نقدًا، بطاقة، محفظة): لا توجد طريقة «أكبر» من أخرى.
- **محدودة (Finite)** مثل «1–20 وجبة»، أو **غير محدودة (Infinite)** مثل «20.00 دينارًا فأكثر».

هذا التمييز مهم لأن **تحليل القيم الحدّية** في القسم التالي لا يعمل إلا مع الأقسام المرتّبة، بينما يعمل EP مع كل الأنواع.

### قواعد الأقسام — Rules for Partitions

- **يجب ألّا تتداخل الأقسام.** لو عرّفت قسمًا «5–20» وقسمًا «20 فأكثر»، فالقيمة 20.00 تنتمي إلى قسمين، ولن تعرف أي نتيجة تتوقع. الصحيح: «5.00–19.99» و«20.00 فأكثر».
- **يجب أن تكون الأقسام مجموعات غير فارغة.** قسم لا يحتوي أي قيمة لا يمكن اختباره، ووجوده يعني خطأ في التحليل.

### التقسيم بعناية — Partition with Care

يقول المنهج إن EP قد يكون سهلًا مع عناصر الاختبار البسيطة، لكن **فهم كيف سيعالج موضوع الاختبار القيم المختلفة معقّد غالبًا في الواقع**، لذلك **يجب أن يتم التقسيم بعناية**. مثال: قيمة الطلب تتأثر بقاعدتين معًا، الحد الأدنى 5.00 والتوصيل المجاني من 20.00، فهي ثلاثة أقسام لا قسمان. ومثال آخر: قد يتبيّن أن البطاقات الصادرة من خارج الأردن تمر بفحص إضافي في بوابة الدفع، فتصبح «بطاقة» قسمين لا قسمًا واحدًا. التقسيم الخاطئ يجعل اختبارًا واحدًا «يمثّل» قيمًا لا تتصرف مثله فعلًا، فتضيع الـ defects.

### الصالح وغير الصالح — Valid and Invalid Partitions

القسم الذي يحتوي قيمًا صالحة يسمّى **قسمًا صالحًا (Valid Partition)**، والذي يحتوي قيمًا غير صالحة يسمّى **قسمًا غير صالح (Invalid Partition)**. لكن **تعريف القيم الصالحة وغير الصالحة قد يختلف بين الفرق والمؤسسات**، والمنهج يذكر تفسيرين لكل منهما:

| | Interpretation 1 | Interpretation 2 |
| --- | --- | --- |
| Valid values | Should be processed by the test object | Their processing is defined in the specification |
| Invalid values | Should be ignored or rejected by the test object | No processing is defined for them in the specification |

مثال يوضّح الفرق: كوبون منتهي الصلاحية. حسب التفسير الأول هو **غير صالح**، لأن النظام يجب أن يرفضه. وحسب التفسير الثاني قد يُعتبر **صالحًا**، لأن المواصفات تحدد معالجته بدقة: «اعرض رسالة: انتهت صلاحية الكوبون». المهم أن يتفق الفريق على تعريف واحد، وأن **تُختبر كل الأقسام** في الحالتين.

### التغطية — Coverage

في EP، **عناصر التغطية هي أقسام التكافؤ**. للوصول إلى **تغطية 100%**، يجب أن تمر حالات الاختبار على **كل الأقسام المحددة، بما فيها الأقسام غير الصالحة**، بتغطية كل قسم **مرة واحدة على الأقل**.

**التغطية = عدد الأقسام التي اختبرتها حالة اختبار واحدة على الأقل ÷ العدد الكلي للأقسام المحددة × 100%**

### عدة مجموعات من الأقسام — Each Choice Coverage

كثير من عناصر الاختبار لها **عدة مجموعات من الأقسام**، مثل شاشة لها أكثر من مدخل، فتغطي حالة الاختبار الواحدة أقسامًا من مجموعات مختلفة في الوقت نفسه. أبسط معيار تغطية لهذه الحالة هو **تغطية كل خيار (Each Choice Coverage)**: يجب أن تمر حالات الاختبار على **كل قسم من كل مجموعة مرة واحدة على الأقل**. وهذا المعيار **لا يراعي التركيبات** بين الأقسام؛ فلا يطلب مثلًا تجربة «محفظة» مع «طلب مجدول». النتيجة العملية: أقل عدد من حالات الاختبار لتحقيق Each Choice يساوي **أكبر عدد أقسام في مجموعة واحدة**.

### خطوات التطبيق — Step by Step

1. **حدّد عناصر البيانات** المرتبطة بموضوع الاختبار: المدخلات، والمخرجات، وغيرها.
2. **قسّم كل عنصر** إلى أقسام صالحة وغير صالحة، بالرجوع إلى المواصفات ومن يعرف المعالجة.
3. **راجع القواعد**: لا تداخل، ولا قسم فارغ، وكل قيمة ممكنة تنتمي إلى قسم.
4. **اكتب عناصر التغطية**: قائمة الأقسام، مرقّمة.
5. **اختر قيمة ممثّلة** لكل قسم، وصمّم حالات الاختبار مع النتيجة المتوقعة.
6. **مع عدة مدخلات**، وزّع الأقسام على حالات الاختبار حتى يظهر كل قسم مرة على الأقل (Each Choice).
7. **احسب التغطية**.

### مثال محلول 1: قيمة الطلب — Order Total

القاعدة: الحد الأدنى للطلب 5.00 دنانير، والتوصيل مجاني من 20.00 دينارًا، وإلا فالرسوم 1.50.

| Partition | Values | Type | Test value | Expected result |
| --- | --- | --- | --- | --- |
| P1 | < 5.00 | Invalid | 3.00 | Order rejected: minimum order message |
| P2 | 5.00–19.99 | Valid | 12.00 | Accepted, fee 1.50 |
| P3 | ≥ 20.00 | Valid | 35.00 | Accepted, free delivery |

ثلاثة أقسام، فتكفي **3 حالات اختبار** لتغطية 100%. لو اختبر الفريق 12.00 و15.00 و35.00 فقط، فالتغطية **2 من 3 = 66.7%**: القيمة 15.00 لا تضيف شيئًا لأنها من P2 مثل 12.00، والقسم غير الصالح P1 لم يُختبر.

### مثال محلول 2: طريقة الدفع — Payment Method (Unordered)

يعرض التطبيق ثلاث طرق، لكن **واجهة الـ API** تقبل أي نص في معامل `paymentMethod`. كل طريقة تُعالَج بشكل مختلف (الدفع عند الاستلام، أو بوابة الدفع، أو خصم من رصيد المحفظة)، فكل منها قسم مستقل:

| Partition | Value | Type | Expected result |
| --- | --- | --- | --- |
| P1 | cash | Valid | Order placed, pay on delivery |
| P2 | card | Valid | Redirect to payment gateway |
| P3 | wallet | Valid | Wallet balance charged |
| P4 | anything else, e.g. "bank_transfer" | Invalid | Request rejected with an error |

**4 حالات اختبار** لتغطية 100%. لاحظ أن القسم غير الصالح لا يظهر في واجهة التطبيق، لكنه موجود في **معامل الواجهة**، ولذلك يجب اختباره. ولا معنى هنا لتحليل القيم الحدّية، لأن الأقسام غير مرتّبة.

### مثال محلول 3: عدة مدخلات — Each Choice

خدمة «إنشاء طلب» تستقبل ثلاثة مدخلات:

| Set | Partitions | Count |
| --- | --- | --- |
| Payment method | cash, card, wallet, unsupported (invalid) | 4 |
| Number of meals | ≤ 0 (invalid), 1–20, ≥ 21 (invalid) | 3 |
| Delivery time | ASAP, scheduled in the future, scheduled in the past (invalid) | 3 |

أكبر مجموعة فيها 4 أقسام، فأقل عدد لتغطية Each Choice هو **4 حالات اختبار**:

| Test | Payment | Meals | Delivery time |
| --- | --- | --- | --- |
| T1 | cash | 3 (1–20) | ASAP |
| T2 | card | 0 (≤ 0) | Future |
| T3 | wallet | 25 (≥ 21) | Past |
| T4 | unsupported | 5 (1–20) | ASAP |

كل قسم من المجموعات الثلاث ظهر مرة على الأقل، فالتغطية **10 من 10 أقسام = 100%**. أما التركيبات (3 × 4 × 3 = 36 تركيبة) فلا يطلبها هذا المعيار.

**الحالة الصعبة:** في T3 اجتمع قسمان غير صالحين (25 وجبة ووقت في الماضي). إذا رفض النظام الطلب بسبب عدد الوجبات، فلن نعرف هل يرفض الوقت الماضي أيضًا. لذلك يفضّل كثير من الفرق عمليًا وضع **قسم غير صالح واحد** في كل حالة اختبار، حتى لو زاد العدد عن الحد الأدنى. في الامتحان، أجب عن «أقل عدد» حسب تعريف Each Choice.

### مثال إضافي: سعر التذكرة حسب العمر — Ticket Price by Age

نظام تذاكر يحدد السعر حسب العمر (عدد صحيح). سنعود إلى هذا المثال في تحليل القيم الحدّية:

| Partition | Range | Type |
| --- | --- | --- |
| Below zero | ≤ −1 | Invalid |
| Child | 0–12 | Valid |
| Adult | 13–64 | Valid |
| Senior | 65–120 | Valid |
| Above 120 | ≥ 121 | Invalid |

خمسة أقسام، فتكفي **خمس حالات اختبار** للوصول لتغطية 100%، مثلًا: −5، 7، 30، 80، 150.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team first partitioned the order total into "below 5.00" and "5.00 or more". Looking at the output (the delivery fee) showed a third partition, 20.00 or more, with different processing. Partitioning outputs as well as inputs often reveals partitions that are easy to miss.</p><p class="gx-ar" lang="ar" dir="rtl">قسّم فريق تطبيق التوصيل قيمة الطلب في البداية إلى «أقل من 5.00» و«5.00 فأكثر». النظر إلى المخرج (رسوم التوصيل) كشف قسمًا ثالثًا، 20.00 فأكثر، له معالجة مختلفة. تقسيم المخرجات إلى جانب المدخلات يكشف غالبًا أقسامًا يسهل نسيانها.</p></aside>

### لا تخلط بين — Don't Confuse

| | 100% EP coverage (one input) | Each Choice coverage (several inputs) | All combinations |
| --- | --- | --- | --- |
| Requires | Every partition of the input | Every partition of every set at least once | Every combination of partitions |
| Minimum tests in example 3 | — | 4 (largest set) | 36 (4 × 3 × 3) |
| In this syllabus | Yes | Yes | Not required |

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="ep" data-config="{&quot;title&quot;:&quot;Ticket price by age&quot;,&quot;spec&quot;:&quot;Age is an integer. Enter test values and watch which partition each one covers.&quot;,&quot;partitions&quot;:[{&quot;label&quot;:&quot;Below zero&quot;,&quot;to&quot;:-1,&quot;valid&quot;:false},{&quot;label&quot;:&quot;Child&quot;,&quot;from&quot;:0,&quot;to&quot;:12,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Adult&quot;,&quot;from&quot;:13,&quot;to&quot;:64,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Senior&quot;,&quot;from&quot;:65,&quot;to&quot;:120,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Above 120&quot;,&quot;from&quot;:121,&quot;valid&quot;:false}],&quot;caption&quot;:&quot;Try to reach 100% with the fewest tests. A second value in the same partition adds no coverage.&quot;}" aria-label="Ticket price by age"><figcaption>Interactive: Ticket price by age</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K3 questions give a specification and ask for the minimum number of test cases for 100% EP coverage. Count all partitions, including invalid ones, and remember one value per partition is enough. With several inputs and Each Choice coverage, the minimum is the largest number of partitions in any single set.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة K3 تعطي مواصفات وتسأل عن أقل عدد من حالات الاختبار لتغطية EP بنسبة 100%. عُدّ كل الأقسام بما فيها غير الصالحة، وتذكّر أن قيمة واحدة لكل قسم تكفي. ومع عدة مدخلات وتغطية Each Choice، يكون الحد الأدنى هو أكبر عدد أقسام في أي مجموعة منفردة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Forgetting the invalid partitions, or testing two values from the same partition and counting them as extra coverage. Invalid partitions count; a second value from the same partition does not.</p><p class="gx-ar" lang="ar" dir="rtl">نسيان الأقسام غير الصالحة، أو اختبار قيمتين من القسم نفسه واحتسابهما تغطية إضافية. الأقسام غير الصالحة تُحسب؛ أما القيمة الثانية من القسم نفسه فلا تُحسب.</p></aside>

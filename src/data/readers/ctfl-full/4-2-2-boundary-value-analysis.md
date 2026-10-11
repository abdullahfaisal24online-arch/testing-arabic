---
order: 3
slug: "4-2-2"
chapter: 4
group: "4.2"
section: "4.2.2"
title: "Boundary Value Analysis"
titleAr: "تحليل القيم الحدّية"
objectives: "FL-4.2.2 · K3"
minutes: 25
lo:
  FL-4.2.2: "Use boundary value analysis to derive test cases."
loAr:
  FL-4.2.2: "تستخدم تحليل القيم الحدّية لاستخراج حالات الاختبار."
takeaways:
  - "BVA exercises the boundaries of equivalence partitions and can only be used for ordered partitions."
  - "The minimum and maximum values of a partition are its boundary values."
  - "Developers are more likely to make errors at boundaries, so defects are likely there."
  - "2-value BVA: each boundary value and its closest neighbour in the adjacent partition are coverage items."
  - "3-value BVA: each boundary value and both of its neighbours are coverage items; it is more rigorous and can find defects 2-value BVA misses."
  - "The neighbour of a boundary depends on the data's precision: 20 and 21 for whole numbers, 19.99 and 20.00 for amounts in cents."
takeawaysAr:
  - "تحليل القيم الحدّية يختبر حدود أقسام التكافؤ، ولا يُستخدم إلا مع الأقسام المرتّبة."
  - "أصغر قيمة وأكبر قيمة في القسم هما قيمتاه الحدّيتان."
  - "المطوّرون أكثر عرضة للخطأ عند الحدود، فالـ defects محتملة هناك."
  - "BVA بقيمتين: كل قيمة حدّية وأقرب جار لها في القسم المجاور عناصر تغطية."
  - "BVA بثلاث قيم: كل قيمة حدّية وجاراها الاثنان عناصر تغطية؛ وهو أكثر صرامة وقد يكتشف defects يفوّتها BVA بقيمتين."
  - "جار القيمة الحدّية يعتمد على دقة البيانات: 20 و21 للأعداد الصحيحة، و19.99 و20.00 للمبالغ بالقروش."
terms:
  - en: "Boundary Value Analysis"
    ar: "تحليل القيم الحدّية"
    def: "A black-box test technique in which test cases are designed based on boundary values of ordered equivalence partitions."
    defAr: "تقنية صندوق أسود تُصمَّم فيها حالات الاختبار بناءً على القيم الحدّية لأقسام التكافؤ المرتّبة."
    match: ["Boundary Value Analysis", "boundary value analysis", "BVA"]
  - en: "Boundary Value"
    ar: "القيمة الحدّية"
    def: "A minimum or maximum value of an ordered equivalence partition."
    defAr: "أصغر قيمة أو أكبر قيمة في قسم تكافؤ مرتّب."
    match: ["Boundary Value", "boundary value", "boundary values"]
  - en: "Coverage Item"
    ar: "عنصر التغطية"
    def: "An attribute or combination of attributes derived from one or more test conditions by using a test technique; it is used to measure test coverage."
    defAr: "صفة أو مجموعة صفات تُشتق من شرط اختبار أو أكثر باستخدام تقنية اختبار، وتُستخدم لقياس تغطية الاختبار."
    match: ["coverage items", "coverage item"]
---
**تحليل القيم الحدّية (Boundary Value Analysis / BVA)** تقنية صندوق أسود تختبر **حدود أقسام التكافؤ**. إذا كان تقسيم التكافؤ (EP) يقول لك «اختر قيمة واحدة من كل قسم»، فإن BVA يقول: «انظر بالضبط إلى المكان الذي ينتهي فيه قسم ويبدأ الذي بعده، فهناك تختبئ أغلب الأخطاء».

خذ تطبيق التوصيل الذي نستخدمه مثالًا في هذا الدليل: الحد الأدنى للطلب 5 دنانير، والتوصيل مجاني للطلبات من 20 دينارًا فأكثر، وعدد الوجبات في الطلب الواحد من 1 إلى 20. كل رقم من هذه الأرقام **حدّ**، وكل حدّ مكان محتمل لخطأ صغير يكلّف كثيرًا: زبون يدفع رسوم توصيل وهو يستحق التوصيل المجاني، أو طلب يُرفض وهو صحيح.

### القيم الحدّية — Boundary Values

**القيم الحدّية (Boundary Values)** لأي قسم هي **أصغر قيمة** و**أكبر قيمة** فيه. في قاعدة «عدد الوجبات من 1 إلى 20» عندنا ثلاثة أقسام:

| Partition | Values | Boundary values |
| --- | --- | --- |
| Invalid: too few | … , −1, 0 | 0 (max) |
| Valid | 1 … 20 | 1 (min), 20 (max) |
| Invalid: too many | 21, 22, … | 21 (min) |

لاحظ أن القسمين غير الصالحين مفتوحان من طرف واحد، فلكل منهما قيمة حدّية واحدة فقط. ولأن الأقسام لا تتداخل، يكون عند كل حدّ بين قسمين **قيمتان حدّيتان متجاورتان**: آخر قيمة في القسم الأول (0)، وأول قيمة في القسم التالي (1).

### شرط الترتيب — Ordered Partitions Only

يقول السيليبس إن BVA **لا يُستخدم إلا مع الأقسام المرتّبة**، أي أن القيم يمكن ترتيبها من الأصغر إلى الأكبر: الأرقام، والمبالغ، والتواريخ، والأوقات، وطول النص. ويضيف شرطًا مهمًا: **إذا انتمى عنصران إلى القسم نفسه، فكل العناصر بينهما تنتمي إليه أيضًا**. أي أن القسم «قطعة متصلة» بلا فجوات.

أما البيانات غير المرتّبة، مثل طريقة الدفع (نقدًا، بطاقة، محفظة) أو المدينة، فلا يوجد فيها «أول» و«آخر»، ولا معنى للحديث عن حدودها. هنا نكتفي بـ EP.

### لماذا الحدود؟ — Why Boundaries?

المطوّرون **أكثر عرضة لارتكاب الأخطاء عند القيم الحدّية**. السبب بسيط: المتطلب يقول «20 دينارًا فأكثر»، والمطوّر يترجمه إلى شرط في الكود، وأي انزياح صغير يغيّر السلوك عند الحد فقط، بينما تبقى القيم البعيدة عن الحد سليمة. لهذا لا تكشف القيم «المتوسطة» مثل 10 أو 50 هذه الأخطاء.

يحدد السيليبس ثلاثة أنواع نموذجية من الـ defects التي يجدها BVA:

| Defect type | Requirement | Wrong implementation | Value that reveals it |
| --- | --- | --- | --- |
| Boundary moved **above** its position | free delivery if total ≥ 20 | `total >= 21` | 20 (should be free, gets a fee) |
| Boundary moved **below** its position | max 20 meals | `meals < 20` | 20 (should be accepted, is rejected) |
| Boundary **omitted** | max 20 meals | no upper check at all | 21 (accepted although invalid) |

### خطوات تطبيق BVA — Step by Step

1. **حدّد المدخل المرتّب** وأقسامه أولًا بتقنية EP (الصالحة وغير الصالحة).
2. **استخرج القيم الحدّية** لكل قسم: أصغر قيمة وأكبر قيمة.
3. **اختر النسخة**: BVA بقيمتين أو بثلاث قيم، حسب المخاطر وما يطلبه السؤال.
4. **اكتب عناصر التغطية (coverage items)** حسب النسخة المختارة، واحذف المكرر.
5. **صمّم حالات الاختبار** بحيث تمر على كل عناصر التغطية، مع النتيجة المتوقعة لكل منها.
6. **احسب التغطية**: عدد العناصر المختبرة ÷ العدد الكلي للعناصر × 100%.

### BVA بقيمتين — 2-value BVA

لكل قيمة حدّية **عنصرا تغطية**: **القيمة الحدّية نفسها**، و**أقرب جار لها ينتمي إلى القسم المجاور**. وبما أن كل حدّ بين قسمين يتكون من قيمتين حدّيتين متجاورتين، فإن عناصر التغطية في BVA بقيمتين هي ببساطة **كل القيم الحدّية**. للوصول إلى 100% تغطية يجب أن تمر حالات الاختبار عليها كلها.

**مثال محلول: عدد الوجبات 1–20**

- الحدّ الأول بين «0 فأقل» و«1–20»: القيمتان **0 و1**.
- الحدّ الثاني بين «1–20» و«21 فأكثر»: القيمتان **20 و21**.
- عناصر التغطية: **0، 1، 20، 21** = 4 عناصر، وتكفيها 4 حالات اختبار: 0 ← يُرفض، 1 ← يُقبل، 20 ← يُقبل، 21 ← يُرفض.

### BVA بثلاث قيم — 3-value BVA

لكل قيمة حدّية **ثلاثة عناصر تغطية**: **القيمة الحدّية** و**جاراها الاثنان**، واحد من كل جهة. لذلك تظهر عناصر **ليست قيمًا حدّية** أصلًا، لأنها تقع داخل القسم. للوصول إلى 100% تغطية يجب اختبار القيم الحدّية وكل جيرانها.

**مثال محلول: عدد الوجبات 1–20 بثلاث قيم**

| Boundary value | Neighbours | Coverage items |
| --- | --- | --- |
| 0 | −1, 1 | −1, 0, 1 |
| 1 | 0, 2 | 0, 1, 2 |
| 20 | 19, 21 | 19, 20, 21 |
| 21 | 20, 22 | 20, 21, 22 |

بعد حذف المكرر: **−1، 0، 1، 2، 19، 20، 21، 22** = **8 عناصر**. القيم الأربع الجديدة (−1، 2، 19، 22) ليست قيمًا حدّية، لكنها جيران.

### لماذا BVA بثلاث قيم أكثر صرامة؟

لأنه قد يكتشف defects يفوّتها BVA بقيمتين. مثال السيليبس: القاعدة «إذا كان x ≤ 10» نُفّذت خطأً «إذا كان x = 10». بيانات BVA بقيمتين هي 10 و11، وكلتاهما تعطي النتيجة الصحيحة (10 ينجح، 11 يفشل)، فيبقى الـ defect مخفيًا. أما القيمة 9 من BVA بثلاث قيم فستفشل مع الكود الخاطئ رغم أنها صالحة، فينكشف الـ defect.

في تطبيق التوصيل: «حد أقصى 20 وجبة» نُفّذ خطأً `meals == 20`. إذا نظرنا إلى الحد الأعلى وحده، فالقيمتان 20 و21 من BVA بقيمتين تعطيان نتيجة صحيحة، والقيمة 19 من BVA بثلاث قيم تكشف أن طلبًا من 19 وجبة يُرفض.

### الدقة تحدد الجار — Precision Matters

جار القيمة الحدّية هو **أقرب قيمة ممكنة** حسب دقة البيانات، وليس دائمًا «زائد 1»:

- عدد الوجبات (أعداد صحيحة): جار 20 هو 19 و21.
- قيمة الطلب بالدينار مع قرشين (دقة 0.01): حدّ التوصيل المجاني عند 20.00، وقيمته الحدّية المقابلة **19.99**. عناصر BVA بقيمتين: **19.99 و20.00**، وبثلاث قيم: **19.98، 19.99، 20.00، 20.01**.
- وقت الطلب بالدقائق: إذا كان المطعم يستقبل حتى 23:59، فالحد هو 23:59 و00:00.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Free delivery starts at 20.00 JOD. A 2-value BVA gives 19.99 (fee 1.50 expected) and 20.00 (free delivery expected). A team that tests only 19 and 20 never checks what happens at 19.99, where rounding defects often hide.</p><p class="gx-ar" lang="ar" dir="rtl">يبدأ التوصيل المجاني عند 20.00 دينار. يعطي BVA بقيمتين القيمتين 19.99 (متوقع رسوم 1.50) و20.00 (متوقع توصيل مجاني). الفريق الذي يختبر 19 و20 فقط لا يتحقق أبدًا مما يحدث عند 19.99، حيث تختبئ الـ defects في التقريب غالبًا.</p></aside>

### حساب التغطية — Coverage

**التغطية = عدد عناصر التغطية المختبرة ÷ العدد الكلي لعناصر التغطية × 100%**

مثال: في قاعدة الوجبات 1–20 اختبر الفريق 0 و1 و20 فقط. بنسخة القيمتين: 3 من 4 = **75%**. وبنسخة الثلاث قيم، القيم نفسها تغطي 3 من 8 = **37.5%**. نفس الاختبارات، ونسبة مختلفة حسب النسخة، لذلك انتبه في الامتحان إلى النسخة المطلوبة.

### مثال بعدة حدود — Several Boundaries

بالاستمرار في مثال سعر التذكرة حسب العمر من قسم EP (−1 | 0–12 | 13–64 | 65–120 | 121):

| Boundary between | 2-value items | 3-value items (added) |
| --- | --- | --- |
| Below zero / Child | −1, 0 | −2, 1 |
| Child / Adult | 12, 13 | 11, 14 |
| Adult / Senior | 64, 65 | 63, 66 |
| Senior / Above 120 | 120, 121 | 119, 122 |

- **BVA بقيمتين:** 8 عناصر تغطية: −1، 0، 12، 13، 64، 65، 120، 121.
- **BVA بثلاث قيم:** الثمانية السابقة + −2، 1، 11، 14، 63، 66، 119، 122 = **16 عنصرًا**.

### لا تخلط بين — Don't Confuse

| | Equivalence Partitioning | Boundary Value Analysis |
| --- | --- | --- |
| What is tested | One value from each partition | The edges of partitions |
| Data | Ordered or unordered | Ordered only |
| Coverage items | The partitions | Boundary values (2-value), or boundary values and neighbours (3-value) |
| Typical defects | Wrong handling of a whole class of inputs | Off-by-one errors, misplaced or missing boundaries |

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="bva" data-config="{&quot;title&quot;:&quot;Ticket price by age: boundaries&quot;,&quot;spec&quot;:&quot;Same partitions as in EP. Switch between 2-value and 3-value BVA and enter test values.&quot;,&quot;partitions&quot;:[{&quot;label&quot;:&quot;Below zero&quot;,&quot;to&quot;:-1,&quot;valid&quot;:false},{&quot;label&quot;:&quot;Child&quot;,&quot;from&quot;:0,&quot;to&quot;:12,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Adult&quot;,&quot;from&quot;:13,&quot;to&quot;:64,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Senior&quot;,&quot;from&quot;:65,&quot;to&quot;:120,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Above 120&quot;,&quot;from&quot;:121,&quot;valid&quot;:false}],&quot;mode&quot;:2,&quot;caption&quot;:&quot;Coverage items with an orange outline are boundary values. In 3-value BVA, both neighbours of each boundary value are added too.&quot;}" aria-label="Ticket price by age: boundaries"><figcaption>Interactive: Ticket price by age: boundaries</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Count carefully: in 2-value BVA the coverage items are the boundary values themselves (each boundary pair gives two values). In 3-value BVA, add each boundary value's other neighbour; values shared between boundaries count once.</p><p class="gx-ar" lang="ar" dir="rtl">عُدّ بدقة: في BVA بقيمتين، عناصر التغطية هي القيم الحدّية نفسها (كل حد بين قسمين يعطي قيمتين). وفي BVA بثلاث قيم، أضف الجار الآخر لكل قيمة حدّية؛ والقيم المشتركة بين حدّين تُحسب مرة واحدة.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip · precision</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان · الدقة</span></p><p class="gx-en" lang="en" dir="ltr">Read the data type in the question. For amounts with two decimals the neighbour of 20.00 is 19.99, not 19. Exam distractors often use the wrong step.</p><p class="gx-ar" lang="ar" dir="rtl">اقرأ نوع البيانات في السؤال. للمبالغ بخانتين عشريتين يكون جار 20.00 هو 19.99 وليس 19. والخيارات الخاطئة في الامتحان كثيرًا ما تستخدم خطوة خاطئة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Using BVA on unordered data, such as a list of countries or payment methods. BVA only works for ordered partitions; use EP there.</p><p class="gx-ar" lang="ar" dir="rtl">استخدام BVA على بيانات غير مرتّبة، مثل قائمة الدول أو طرق الدفع. BVA يعمل فقط مع الأقسام المرتّبة؛ استخدم EP في هذه الحالة.</p></aside>

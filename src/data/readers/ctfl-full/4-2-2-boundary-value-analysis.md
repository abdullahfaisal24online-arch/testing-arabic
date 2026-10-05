---
order: 3
slug: "4-2-2"
chapter: 4
group: "4.2"
section: "4.2.2"
title: "Boundary Value Analysis"
titleAr: "تحليل القيم الحدّية"
objectives: "FL-4.2.2 · K3"
minutes: 12
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
takeawaysAr:
  - "تحليل القيم الحدّية يختبر حدود أقسام التكافؤ، ولا يُستخدم إلا مع الأقسام المرتّبة."
  - "أصغر قيمة وأكبر قيمة في القسم هما قيمتاه الحدّيتان."
  - "المطوّرون أكثر عرضة للخطأ عند الحدود، فالعيوب محتملة هناك."
  - "BVA بقيمتين: كل قيمة حدّية وأقرب جار لها في القسم المجاور عناصر تغطية."
  - "BVA بثلاث قيم: كل قيمة حدّية وجاراها الاثنان عناصر تغطية؛ وهو أكثر صرامة وقد يكتشف عيوبًا يفوّتها BVA بقيمتين."
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
---
**تحليل القيم الحدّية (Boundary Value Analysis / BVA)** تقنية تعتمد على اختبار **حدود أقسام التكافؤ**. لذلك **لا يمكن استخدامها إلا مع الأقسام المرتّبة**، أي التي لقيمها ترتيب مثل الأرقام والتواريخ.

**القيم الحدّية (Boundary Values)** للقسم هي **أصغر قيمة** و**أكبر قيمة** فيه.

ولأن الأقسام لا تتداخل، يكون عند كل حد بين قسمين **قيمتان حدّيتان متجاورتان**: آخر قيمة في القسم الأول، وأول قيمة في القسم التالي.

### لماذا الحدود؟ — Why Boundaries?

المطوّرون **أكثر عرضة لارتكاب الأخطاء عند القيم الحدّية**، مثل كتابة `<` بدل `<=`، أو تحديد بداية النطاق ونهايته بشكل خاطئ. لذلك يُتوقع أن تختبئ العيوب عند الحدود.

### BVA بقيمتين — 2-value BVA

لكل قيمة حدّية هناك **عنصرا تغطية**: **القيمة الحدّية نفسها**، و**أقرب جار لها ينتمي للقسم المجاور**.

للوصول إلى 100% تغطية، يجب أن تمر حالات الاختبار على كل عناصر التغطية، أي **كل القيم الحدّية المحددة**.

### BVA بثلاث قيم — 3-value BVA

لكل قيمة حدّية هناك **ثلاثة عناصر تغطية**: **القيمة الحدّية** و**جاراها الاثنان**. لذلك قد يكون بعض عناصر التغطية في BVA بثلاث قيم **ليست قيمًا حدّية** أصلًا (جار داخل القسم نفسه).

BVA بثلاث قيم **أكثر صرامة** من BVA بقيمتين، وقد يكتشف عيوبًا يفوّتها. مثلًا: إذا كانت القاعدة «إذا كان x ≤ 10» ونُفّذت خطأً «إذا كان x = 10»، فلن تكتشف بيانات اختبار BVA بقيمتين (x = 10 و x = 11) هذا العيب. أما x = 9 المستخرجة من BVA بثلاث قيم، فستكتشفه على الأرجح.

**التغطية = عدد عناصر التغطية المختبرة ÷ العدد الكلي لعناصر التغطية × 100%**

### مثال — Example

بالاستمرار في مثال سعر التذكرة حسب العمر (−1 | 0–12 | 13–64 | 65–120 | 121):

| Boundary between | 2-value items | 3-value items (added) |
| --- | --- | --- |
| Below zero / Child | −1, 0 | −2, 1 |
| Child / Adult | 12, 13 | 11, 14 |
| Adult / Senior | 64, 65 | 63, 66 |
| Senior / Above 120 | 120, 121 | 119, 122 |

- **BVA بقيمتين:** 8 عناصر تغطية: −1، 0، 12، 13، 64، 65، 120، 121.
- **BVA بثلاث قيم:** الثمانية السابقة + −2، 1، 11، 14، 63، 66، 119، 122 = **16 عنصرًا**.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="bva" data-config="{&quot;title&quot;:&quot;Ticket price by age: boundaries&quot;,&quot;spec&quot;:&quot;Same partitions as in EP. Switch between 2-value and 3-value BVA and enter test values.&quot;,&quot;partitions&quot;:[{&quot;label&quot;:&quot;Below zero&quot;,&quot;to&quot;:-1,&quot;valid&quot;:false},{&quot;label&quot;:&quot;Child&quot;,&quot;from&quot;:0,&quot;to&quot;:12,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Adult&quot;,&quot;from&quot;:13,&quot;to&quot;:64,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Senior&quot;,&quot;from&quot;:65,&quot;to&quot;:120,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Above 120&quot;,&quot;from&quot;:121,&quot;valid&quot;:false}],&quot;mode&quot;:2,&quot;caption&quot;:&quot;Coverage items with an orange outline are boundary values. In 3-value BVA, their inner neighbours are added too.&quot;}" aria-label="Ticket price by age: boundaries"><figcaption>Interactive: Ticket price by age: boundaries</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Count carefully: in 2-value BVA the coverage items are the boundary values themselves (each boundary pair gives two values). In 3-value BVA, add each boundary value's other neighbour; values shared between boundaries count once.</p><p class="gx-ar" lang="ar" dir="rtl">عُدّ بدقة: في BVA بقيمتين، عناصر التغطية هي القيم الحدّية نفسها (كل حد بين قسمين يعطي قيمتين). وفي BVA بثلاث قيم، أضف الجار الآخر لكل قيمة حدّية؛ والقيم المشتركة بين حدّين تُحسب مرة واحدة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Using BVA on unordered data, such as a list of countries or payment methods. BVA only works for ordered partitions; use EP there.</p><p class="gx-ar" lang="ar" dir="rtl">استخدام BVA على بيانات غير مرتّبة، مثل قائمة الدول أو طرق الدفع. BVA يعمل فقط مع الأقسام المرتّبة؛ استخدم EP في هذه الحالة.</p></aside>

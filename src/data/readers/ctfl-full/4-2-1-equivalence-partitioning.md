---
order: 2
slug: "4-2-1"
chapter: 4
group: "4.2"
section: "4.2.1"
title: "Equivalence Partitioning"
titleAr: "تقسيم التكافؤ"
objectives: "FL-4.2.1 · K3"
minutes: 12
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
takeawaysAr:
  - "تقسيم التكافؤ يقسم البيانات إلى أقسام يُتوقع أن تُعالَج عناصر كل منها بالطريقة نفسها."
  - "إذا اكتشفت قيمة defect، يُتوقع أن تكتشفه أي قيمة أخرى من القسم نفسه، فيكفي اختبار واحد لكل قسم."
  - "الأقسام يجب ألّا تتداخل وألّا تكون فارغة؛ وقد تكون صالحة (يجب معالجتها) أو غير صالحة (يجب تجاهلها أو رفضها)."
  - "عناصر التغطية هي الأقسام. والتغطية 100% تعني اختبار كل قسم، صالح وغير صالح، مرة واحدة على الأقل."
  - "مع عدة مجموعات من الأقسام، تغطية Each Choice تعني اختبار كل قسم من كل مجموعة مرة واحدة على الأقل."
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
**تقسيم التكافؤ (Equivalence Partitioning / EP)** يقسم البيانات إلى **أقسام (Partitions)**، تسمّى أقسام التكافؤ، بناءً على توقع أن **كل عناصر القسم الواحد ستُعالَج بالطريقة نفسها** من موضوع الاختبار.

الفكرة وراء التقنية: إذا اكتشف اختبار بقيمة من قسم ما defect، فيُتوقع أن يكتشفه أي اختبار بقيمة أخرى من القسم نفسه. لذلك **يكفي اختبار واحد لكل قسم**.

### أين تُستخدم الأقسام؟ — Where Partitions Apply

يمكن تحديد أقسام تكافؤ لأي عنصر بيانات مرتبط بموضوع الاختبار، منها:

- المدخلات والمخرجات.
- عناصر الإعدادات، والقيم الداخلية.
- القيم المرتبطة بالوقت.
- معاملات الواجهات.

والأقسام قد تكون **متصلة أو منفصلة**، **مرتّبة أو غير مرتّبة**، **محدودة أو غير محدودة**.

### قواعد الأقسام — Rules for Partitions

- الأقسام **يجب ألّا تتداخل**.
- ويجب أن تكون **مجموعات غير فارغة**.

### الصالح وغير الصالح — Valid and Invalid Partitions

- **القسم الصالح (Valid Partition)** يحتوي قيمًا **يجب أن يعالجها** موضوع الاختبار.
- **القسم غير الصالح (Invalid Partition)** يحتوي قيمًا **يجب أن يتجاهلها أو يرفضها** موضوع الاختبار.

تعريف «الصالح» و«غير الصالح» قد يختلف بين الفرق والمؤسسات. مثلًا: هل «القيمة التي يجب أن تعطي رسالة خطأ» صالحة أم غير صالحة؟ المهم أن يكون التعريف واضحًا ومتّفقًا عليه.

### التغطية — Coverage

في EP، **عناصر التغطية هي أقسام التكافؤ**. للوصول إلى **تغطية 100%**، يجب أن تمر حالات الاختبار على **كل الأقسام المحددة، بما فيها غير الصالحة**، مرة واحدة على الأقل.

**التغطية = عدد الأقسام التي اختُبرت ÷ عدد الأقسام المحددة × 100%**

كثير من مواضيع الاختبار لها **عدة مجموعات من الأقسام**، مثلًا عدة مدخلات لكل منها أقسامها. أبسط معيار تغطية لهذه الحالة هو **تغطية كل خيار (Each Choice Coverage)**: كل قسم من كل مجموعة يُختبر مرة واحدة على الأقل، **دون مراعاة التركيبات** بين الأقسام.

### مثال — Example

نظام تذاكر يحدد السعر حسب العمر (عدد صحيح):

| Partition | Range | Type |
| --- | --- | --- |
| Below zero | ≤ −1 | Invalid |
| Child | 0–12 | Valid |
| Adult | 13–64 | Valid |
| Senior | 65–120 | Valid |
| Above 120 | ≥ 121 | Invalid |

خمسة أقسام، فتكفي **خمس حالات اختبار** للوصول لتغطية 100%، مثلًا: −5، 7، 30، 80، 150.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="ep" data-config="{&quot;title&quot;:&quot;Ticket price by age&quot;,&quot;spec&quot;:&quot;Age is an integer. Enter test values and watch which partition each one covers.&quot;,&quot;partitions&quot;:[{&quot;label&quot;:&quot;Below zero&quot;,&quot;to&quot;:-1,&quot;valid&quot;:false},{&quot;label&quot;:&quot;Child&quot;,&quot;from&quot;:0,&quot;to&quot;:12,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Adult&quot;,&quot;from&quot;:13,&quot;to&quot;:64,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Senior&quot;,&quot;from&quot;:65,&quot;to&quot;:120,&quot;valid&quot;:true},{&quot;label&quot;:&quot;Above 120&quot;,&quot;from&quot;:121,&quot;valid&quot;:false}],&quot;caption&quot;:&quot;Try to reach 100% with the fewest tests. A second value in the same partition adds no coverage.&quot;}" aria-label="Ticket price by age"><figcaption>Interactive: Ticket price by age</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K3 questions give a specification and ask for the minimum number of test cases for 100% EP coverage. Count all partitions, including invalid ones, and remember one value per partition is enough. With several inputs and Each Choice coverage, the minimum is the largest number of partitions in any single set.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة K3 تعطي مواصفات وتسأل عن أقل عدد من حالات الاختبار لتغطية EP بنسبة 100%. عُدّ كل الأقسام بما فيها غير الصالحة، وتذكّر أن قيمة واحدة لكل قسم تكفي. ومع عدة مدخلات وتغطية Each Choice، يكون الحد الأدنى هو أكبر عدد أقسام في أي مجموعة منفردة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Forgetting the invalid partitions, or testing two values from the same partition and counting them as extra coverage. Invalid partitions count; a second value from the same partition does not.</p><p class="gx-ar" lang="ar" dir="rtl">نسيان الأقسام غير الصالحة، أو اختبار قيمتين من القسم نفسه واحتسابهما تغطية إضافية. الأقسام غير الصالحة تُحسب؛ أما القيمة الثانية من القسم نفسه فلا تُحسب.</p></aside>

---
order: 4
slug: "4-2-3"
chapter: 4
group: "4.2"
section: "4.2.3"
title: "Decision Table Testing"
titleAr: "الاختبار بجداول القرار"
objectives: "FL-4.2.3 · K3"
minutes: 25
lo:
  FL-4.2.3: "Use decision table testing to derive test cases."
loAr:
  FL-4.2.3: "تستخدم الاختبار بجداول القرار لاستخراج حالات الاختبار."
takeaways:
  - "Decision tables test how a system implements requirements for different combinations of conditions."
  - "Rows are conditions and actions; each column is a decision rule: one combination of conditions with its actions."
  - "Limited-entry notation: T/F for conditions, '−' for 'does not matter', 'N/A' for infeasible, and X for an action that occurs."
  - "A full table covers every combination; it can be simplified by deleting infeasible columns and minimised by merging columns where some conditions do not affect the outcome."
  - "Coverage items are the columns with feasible combinations; 100% coverage means exercising all of them."
  - "Strength: systematic, finds gaps and contradictions in requirements. Weakness: rules grow exponentially with the number of conditions."
  - "In extended-entry tables, conditions and actions can take multiple values, such as ranges, equivalence partitions or discrete values."
  - "Coverage is measured as exercised columns divided by feasible columns of the table being used, so the same tests can give different coverage on a full and a minimised table."
takeawaysAr:
  - "جداول القرار تختبر كيف ينفّذ النظام المتطلبات لتركيبات مختلفة من الشروط."
  - "الصفوف هي الشروط والإجراءات؛ وكل عمود قاعدة قرار: تركيبة واحدة من الشروط مع إجراءاتها."
  - "في الصيغة المحدودة: T/F للشروط، و«−» لـ«لا يهم»، و«N/A» لغير الممكن، وX لإجراء يحدث."
  - "الجدول الكامل يغطي كل التركيبات؛ ويمكن تبسيطه بحذف الأعمدة غير الممكنة، وتصغيره بدمج الأعمدة التي لا تؤثر فيها بعض الشروط على النتيجة."
  - "عناصر التغطية هي الأعمدة ذات التركيبات الممكنة؛ والتغطية 100% تعني اختبارها كلها."
  - "قوتها: منهجية وتكشف الفجوات والتناقضات في المتطلبات. ضعفها: عدد القواعد يتضاعف أُسّيًا مع عدد الشروط."
  - "في الجداول الموسّعة، قد تأخذ الشروط والإجراءات قيمًا متعددة، مثل نطاقات الأرقام أو أقسام التكافؤ أو القيم المنفصلة."
  - "التغطية = الأعمدة المختبرة ÷ الأعمدة الممكنة في الجدول المستخدم، لذلك قد تعطي الاختبارات نفسها نسبة مختلفة على الجدول الكامل والجدول المصغّر."
terms:
  - en: "Decision Table Testing"
    ar: "الاختبار بجداول القرار"
    def: "A black-box test technique in which test cases are designed to exercise the combinations of conditions and resulting actions shown in a decision table."
    defAr: "تقنية صندوق أسود تُصمَّم فيها حالات الاختبار لتمرّ على تركيبات الشروط والإجراءات الناتجة المبيّنة في جدول القرار."
    match: ["Decision Table Testing", "decision table testing", "decision table", "decision tables"]
  - en: "Decision Rule"
    ar: "قاعدة القرار"
    def: "A column of a decision table: a unique combination of conditions and the resulting actions."
    defAr: "عمود في جدول القرار: تركيبة فريدة من الشروط والإجراءات الناتجة عنها."
  - en: "Limited-entry Decision Table"
    ar: "جدول القرار محدود القيم"
    def: "A decision table in which all condition and action values (except irrelevant or infeasible ones) are Boolean: true or false."
    defAr: "جدول قرار تكون فيه كل قيم الشروط والإجراءات (عدا غير المهمة أو غير الممكنة) منطقية: صح أو خطأ."
    match: ["limited-entry", "Limited-entry"]
  - en: "Extended-entry Decision Table"
    ar: "جدول القرار موسّع القيم"
    def: "A decision table in which some or all conditions and actions can take multiple values, such as ranges, equivalence partitions or discrete values."
    defAr: "جدول قرار قد تأخذ فيه بعض الشروط والإجراءات أو كلها قيمًا متعددة، مثل النطاقات أو أقسام التكافؤ أو القيم المنفصلة."
    match: ["extended-entry", "Extended-entry"]
---
**جداول القرار (Decision Tables)** تُستخدم لاختبار تنفيذ المتطلبات التي تحدد كيف تؤدي **تركيبات مختلفة من الشروط** إلى **نتائج مختلفة**. وهي طريقة فعّالة لتسجيل **المنطق المعقّد**، مثل **قواعد العمل (Business Rules)**.

لماذا نحتاجها؟ لأن الـ defects في قواعد العمل نادرًا ما تكون في شرط واحد، بل في **التقاء** الشروط. في تطبيق التوصيل: الحد الأدنى للطلب، والتوصيل المجاني، والكوبون. كل قاعدة وحدها واضحة، لكن ماذا يحدث لطلب قيمته 22.00 دينارًا مع كوبون خصم ثابت 5.00؟ هل يبقى التوصيل مجانيًا؟ هذا النوع من الأسئلة هو ما تكشفه جداول القرار.

### بنية الجدول — Table Structure

عند إنشاء جدول القرار، نحدد **الشروط (Conditions)** و**الإجراءات (Actions)** الناتجة من النظام، وهي تشكّل **صفوف** الجدول. وكل **عمود** يمثّل **قاعدة قرار (Decision Rule)**: تركيبة **فريدة** من الشروط، مع الإجراءات المرتبطة بها. عمود واحد = سيناريو واحد يمكن تحويله إلى حالة اختبار.

### محدود القيم وموسّع القيم — Limited-entry and Extended-entry

- في **جداول القرار محدودة القيم (Limited-entry)**، كل قيم الشروط والإجراءات، عدا غير المهمة أو غير الممكنة، تكون **منطقية (Boolean)**: صح أو خطأ. مثال: «قيمة الطلب ≥ 20.00؟» نعم أو لا.
- في **جداول القرار موسّعة القيم (Extended-entry)**، قد تأخذ بعض الشروط والإجراءات أو كلها **قيمًا متعددة**: **نطاقات أرقام**، أو **أقسام تكافؤ**، أو **قيمًا منفصلة**. مثال: شرط «قيمة الطلب» بقيم ثلاث: أقل من 5.00، أو 5.00–19.99، أو 20.00 فأكثر. وهنا ترى كيف يتكامل EP مع جداول القرار.

### الرموز — Notation

| Symbol | Used for | Meaning |
| --- | --- | --- |
| T | Condition | The condition is satisfied (true) |
| F | Condition | The condition is not satisfied (false) |
| − | Condition | The value is irrelevant for the action outcome |
| N/A | Condition | The condition is infeasible for this rule |
| X | Action | The action should occur |
| (blank) | Action | The action should not occur |

ويذكر المنهج أن **رموزًا أخرى قد تُستخدم** أيضًا. الفرق الدقيق بين «−» و«N/A»: في «−» الشرط **له قيمة** لكنها لا تغيّر النتيجة؛ وفي «N/A» الشرط **لا يمكن** أن يأخذ قيمة في هذه القاعدة. مثال: شرطان «أدخل الزبون كوبونًا؟» و«الكوبون منتهي الصلاحية؟». في قاعدة «لم يُدخل كوبونًا» يكون الشرط الثاني **N/A**، لأنه لا يوجد كوبون أصلًا حتى نسأل عن صلاحيته.

### الكامل والمبسّط والمصغّر — Full, Simplified, Minimized

- **الجدول الكامل (Full Decision Table)** له أعمدة كافية لتغطية **كل تركيبات الشروط**. مع n شروط منطقية هناك **2ⁿ** عمودًا: 3 شروط ← 8، و5 شروط ← 32، و10 شروط ← 1024.
- **التبسيط (Simplification):** حذف الأعمدة التي فيها تركيبات **غير ممكنة (Infeasible)**، مثل «الطلب أقل من 5.00» و«الطلب 20.00 فأكثر» معًا.
- **التصغير (Minimization):** دمج الأعمدة التي **لا تؤثر فيها بعض الشروط على النتيجة** في عمود واحد، ويُكتب الشرط غير المؤثر «−».

**خوارزميات تصغير جداول القرار خارج نطاق هذا المنهج**، فيكفي أن تفهم فكرة الدمج.

### التغطية — Coverage

في الاختبار بجداول القرار، **عناصر التغطية هي الأعمدة التي تحتوي تركيبات ممكنة** من الشروط. للوصول إلى **100% تغطية**، يجب أن تمر حالات الاختبار على **كل هذه الأعمدة**.

**التغطية = عدد الأعمدة المختبرة ÷ العدد الكلي للأعمدة الممكنة × 100%**

### القوة والضعف — Strengths and Weaknesses

- **القوة:** نهج **منهجي** لتحديد **كل** تركيبات الشروط، وبعضها قد يُنسى لولا الجدول. ويساعد كذلك في اكتشاف **الفجوات (Gaps)** و**التناقضات (Contradictions)** في المتطلبات: عمود لا يعرف أحد نتيجته فجوة، وعمودان لهما الشروط نفسها والنتائج مختلفة تناقض.
- **الضعف:** مع كثرة الشروط يصبح تنفيذ كل قواعد القرار **مستهلكًا للوقت**، لأن عدد القواعد **يتضاعف أُسّيًا** مع عدد الشروط. ولتقليل عدد القواعد يمكن استخدام **جدول قرار مصغّر** أو **نهج مبني على المخاطر (Risk-based)** يختار القواعد الأهم.

مثال على التناقض: قصة مستخدم تقول «الكوبونات لا تُجمع مع التوصيل المجاني»، وقصة أخرى تقول «كل طلب من 20.00 فأكثر توصيله مجاني». عند تعبئة عمود «طلب 25.00 مع كوبون صالح» يعطي المتطلبان نتيجتين مختلفتين، فيظهر التناقض على الورق قبل أن يظهر عند الزبون. ومثال على النهج المبني على المخاطر: جدول قرار لعروض المطاعم فيه 6 شروط، أي 64 عمودًا. يختار الفريق الأعمدة التي تمس الدفع والخصومات الكبيرة أولًا، ويؤجل الأعمدة قليلة الأثر، مع توثيق هذا القرار في خطة الاختبار.

### خطوات التطبيق — Step by Step

1. **استخرج الشروط** من المتطلب، وصغها كأسئلة جوابها T أو F (أو قيم متعددة في الجدول الموسّع).
2. **استخرج الإجراءات**: كل ما يفعله النظام كنتيجة.
3. **ابنِ الجدول الكامل**: 2ⁿ عمودًا، بنمط منتظم (الشرط الأول: نصف T ونصف F، والثاني يتناوب كل ربع، وهكذا).
4. **املأ الإجراءات** لكل عمود من المتطلبات. أي عمود لا تعرف نتيجته فجوة: اسأل مالك المنتج.
5. **احذف الأعمدة غير الممكنة** (التبسيط).
6. **ادمج الأعمدة** التي لا يؤثر فيها شرط على النتيجة، إن أردت جدولًا مصغّرًا.
7. **حوّل كل عمود متبقٍّ إلى حالة اختبار** ببيانات محددة ونتيجة متوقعة، واحسب التغطية.

### مثال محلول 1: الحد الأدنى والتوصيل المجاني والكوبون

القواعد: الطلب أقل من 5.00 يُرفض. الطلب من 20.00 فأكثر توصيله مجاني، وإلا فالرسوم 1.50. والكوبون الصالح يُطبَّق خصمه.

**الجدول الكامل (2³ = 8 أعمدة):**

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| C1: Subtotal ≥ 5.00 | T | T | T | T | F | F | F | F |
| C2: Subtotal ≥ 20.00 | T | T | F | F | T | T | F | F |
| C3: Valid coupon | T | F | T | F | T | F | T | F |
| Feasible? | Yes | Yes | Yes | Yes | No | No | Yes | Yes |
| A1: Accept order | X | X | X | X | | | | |
| A2: Reject (minimum) | | | | | | | X | X |
| A3: Delivery fee 1.50 | | | X | X | | | | |
| A4: Apply discount | X | | X | | | | | |

**التبسيط:** R5 وR6 غير ممكنين، لأن المبلغ لا يمكن أن يكون أقل من 5.00 و20.00 فأكثر في الوقت نفسه. نحذفهما فيبقى **6 أعمدة ممكنة**.

**التصغير:** في R7 وR8 يُرفض الطلب سواء وُجد كوبون أم لا، فالشرط C3 لا يؤثر. ندمجهما في عمود واحد:

| | R1 | R2 | R3 | R4 | R7/8 |
| --- | --- | --- | --- | --- | --- |
| C1: Subtotal ≥ 5.00 | T | T | T | T | F |
| C2: Subtotal ≥ 20.00 | T | T | F | F | F |
| C3: Valid coupon | T | F | T | F | − |
| A1: Accept order | X | X | X | X | |
| A2: Reject (minimum) | | | | | X |
| A3: Delivery fee 1.50 | | | X | X | |
| A4: Apply discount | X | | X | | |

من كل عمود نصمّم حالة اختبار واحدة ببيانات محددة:

| Column | C1 | C2 | C3 | Test data | Expected result |
| --- | --- | --- | --- | --- | --- |
| R1 | T | T | T | 25.00, valid 10% coupon | Accepted, free delivery, 2.50 discount |
| R2 | T | T | F | 25.00, no coupon | Accepted, free delivery |
| R3 | T | F | T | 12.00, valid 2.00 coupon | Accepted, fee 1.50, 2.00 discount |
| R4 | T | F | F | 12.00, no coupon | Accepted, fee 1.50 |
| R7/8 | F | F | − | 4.00, any coupon | Rejected: minimum order message |

**5 حالات اختبار** تعطي 100% على الجدول المصغّر. في العمود المدموج نختار أي قيمة للشرط «−».

**حساب التغطية:** لو نفّذ الفريق R1 إلى R4 فقط، فالتغطية على الجدول المصغّر **4 من 5 = 80%**، وعلى الجدول المبسّط **4 من 6 = 66.7%**. الاختبارات نفسها، ونسبة مختلفة حسب الجدول.

**الفجوة التي كشفها الجدول:** عند تعبئة R1 ظهر سؤال لم تجب عنه قصة المستخدم: هل يُحسب حد 20.00 **قبل** خصم الكوبون أم **بعده**؟ طلب 22.00 مع كوبون 5.00 يصبح 17.00. هذه **فجوة في المتطلبات** يجب أن يحسمها مالك المنتج قبل كتابة الكود، وهذا بالضبط ما يقصده المنهج بقوة هذه التقنية.

### مثال محلول 2: جدول موسّع — Extended-entry

الشرطان هنا يأخذان قيمًا متعددة: **قيمة الطلب** (ثلاثة أقسام تكافؤ) و**الكوبون** (لا يوجد، صالح، منتهي). والقاعدة الإضافية: فحص الحد الأدنى يأتي أولًا.

الجدول الكامل هنا ليس 2ⁿ، بل **حاصل ضرب عدد القيم**: 3 × 3 = **9 أعمدة**. وعند الطلب أقل من 5.00 يُرفض الطلب أيًّا كان الكوبون، فتُدمج ثلاثة أعمدة في عمود واحد:

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Subtotal | < 5.00 | 5.00–19.99 | 5.00–19.99 | 5.00–19.99 | ≥ 20.00 | ≥ 20.00 | ≥ 20.00 |
| Coupon | − | None | Valid | Expired | None | Valid | Expired |
| Reject (minimum) | X | | | | | | |
| Delivery fee 1.50 | | X | X | X | | | |
| Apply discount | | | X | | | X | |
| "Coupon expired" message | | | | X | | | X |

**7 أعمدة ممكنة = 7 حالات اختبار** للتغطية الكاملة.

لاحظ ميزتين للجدول الموسّع: أولًا، هو أقصر من جدول محدود القيم يعبّر عن المنطق نفسه بشروط منطقية منفصلة. ثانيًا، كل خانة فيه قسم تكافؤ، فعند اختيار بيانات الاختبار يمكنك استخدام قيمة ممثّلة من القسم، أو قيمة حدّية مثل 19.99 و20.00 إذا أردت أن تجمع بين جداول القرار وتحليل القيم الحدّية في الاختبارات نفسها.

### المثال الكلاسيكي: متجر إلكتروني — Online Shop

ثلاثة شروط: **عميل مسجّل؟** **الطلب ≥ 100$؟** **كوبون مطبّق؟** والكوبون **متاح للعملاء المسجّلين فقط**، فأي عمود فيه «غير مسجّل + كوبون» **غير ممكن**.

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Registered | T | T | T | T | F | F | F | F |
| Order ≥ $100 | T | T | F | F | T | T | F | F |
| Coupon | T | F | T | F | T | F | T | F |
| Feasible? | Yes | Yes | Yes | Yes | No | Yes | No | Yes |
| 10% discount | X | | X | | | | | |
| Free shipping | X | X | | | | X | | |

8 أعمدة، منها **2 غير ممكنة** (R5 وR7)، فتبقى **6 عناصر تغطية**.

لماذا R5 وR7 غير ممكنين؟ لأن المتطلب نفسه يمنع أن يطبّق عميل غير مسجّل كوبونًا، فلا يمكن تجهيز بيانات اختبار لهما. أما R6 (غير مسجّل، طلب كبير، بلا كوبون) فممكن تمامًا، ويحصل على الشحن المجاني. وإذا كان النظام يسمح فعليًا لغير المسجّل بإدخال كوبون، فهذا ليس عمودًا في الجدول، بل اختبار يتحقق من أن الواجهة تمنعه.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="dt" data-config="{&quot;title&quot;:&quot;Online shop benefits&quot;,&quot;spec&quot;:&quot;Set the conditions, then run the test to cover that column. Infeasible columns (unregistered + coupon) are not coverage items.&quot;,&quot;conditions&quot;:[{&quot;id&quot;:&quot;reg&quot;,&quot;label&quot;:&quot;Registered&quot;},{&quot;id&quot;:&quot;big&quot;,&quot;label&quot;:&quot;Order ≥ $100&quot;},{&quot;id&quot;:&quot;cpn&quot;,&quot;label&quot;:&quot;Coupon&quot;}],&quot;actions&quot;:[{&quot;id&quot;:&quot;disc&quot;,&quot;label&quot;:&quot;10% discount&quot;},{&quot;id&quot;:&quot;ship&quot;,&quot;label&quot;:&quot;Free shipping&quot;}],&quot;rules&quot;:[{&quot;when&quot;:{&quot;reg&quot;:true,&quot;big&quot;:true,&quot;cpn&quot;:true},&quot;do&quot;:[&quot;disc&quot;,&quot;ship&quot;]},{&quot;when&quot;:{&quot;reg&quot;:true,&quot;big&quot;:true,&quot;cpn&quot;:false},&quot;do&quot;:[&quot;ship&quot;]},{&quot;when&quot;:{&quot;reg&quot;:true,&quot;big&quot;:false,&quot;cpn&quot;:true},&quot;do&quot;:[&quot;disc&quot;]},{&quot;when&quot;:{&quot;reg&quot;:true,&quot;big&quot;:false,&quot;cpn&quot;:false},&quot;do&quot;:[]},{&quot;when&quot;:{&quot;reg&quot;:false,&quot;big&quot;:true,&quot;cpn&quot;:false},&quot;do&quot;:[&quot;ship&quot;]},{&quot;when&quot;:{&quot;reg&quot;:false,&quot;big&quot;:false,&quot;cpn&quot;:false},&quot;do&quot;:[]}],&quot;infeasible&quot;:[{&quot;when&quot;:{&quot;reg&quot;:false,&quot;cpn&quot;:true}}],&quot;caption&quot;:&quot;Six feasible columns: six test cases give 100% decision table coverage.&quot;}" aria-label="Online shop benefits"><figcaption>Interactive: Online shop benefits</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In refinement, the delivery app's tester drew the coupon decision table on the whiteboard. The column "subtotal 22.00 with a 5.00 coupon" had no agreed outcome, so the product owner clarified that free delivery is checked before the discount. A defect was prevented before any code was written.</p><p class="gx-ar" lang="ar" dir="rtl">في جلسة التنقيح رسم مختبر تطبيق التوصيل جدول قرار الكوبون على اللوح. لم يكن للعمود «طلب 22.00 مع كوبون 5.00» نتيجة متفق عليها، فحسم مالك المنتج أن التوصيل المجاني يُحسب قبل الخصم. مُنع defect قبل كتابة أي سطر كود.</p></aside>

### لا تخلط بين — Don't Confuse

| | "−" (irrelevant) | "N/A" (infeasible) | Infeasible column |
| --- | --- | --- | --- |
| Applies to | One condition in a rule | One condition in a rule | A whole combination |
| Meaning | Has a value, but it does not change the outcome | Cannot take a value in this rule | The combination cannot occur |
| Effect on coverage | The merged column is one coverage item | The rule is still a coverage item | Not a coverage item; deleted |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">For K3 questions: count conditions (n) → full table has 2ⁿ columns; remove infeasible ones; the remaining columns are the minimum number of test cases for full coverage, unless the question gives a minimised table.</p><p class="gx-ar" lang="ar" dir="rtl">لأسئلة K3: عُدّ الشروط (n) ← الجدول الكامل فيه 2ⁿ عمودًا؛ احذف غير الممكنة منها؛ والأعمدة المتبقية هي أقل عدد من حالات الاختبار للتغطية الكاملة، إلا إذا أعطاك السؤال جدولًا مصغّرًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Counting infeasible columns as coverage items, or forgetting that '−' (does not matter) merges several combinations into one column.</p><p class="gx-ar" lang="ar" dir="rtl">احتساب الأعمدة غير الممكنة كعناصر تغطية، أو نسيان أن «−» (لا يهم) يدمج عدة تركيبات في عمود واحد.</p></aside>

---
order: 4
slug: "4-2-3"
chapter: 4
group: "4.2"
section: "4.2.3"
title: "Decision Table Testing"
titleAr: "الاختبار بجداول القرار"
objectives: "FL-4.2.3 · K3"
minutes: 12
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
takeawaysAr:
  - "جداول القرار تختبر كيف ينفّذ النظام المتطلبات لتركيبات مختلفة من الشروط."
  - "الصفوف هي الشروط والإجراءات؛ وكل عمود قاعدة قرار: تركيبة واحدة من الشروط مع إجراءاتها."
  - "في الصيغة المحدودة: T/F للشروط، و«−» لـ«لا يهم»، و«N/A» لغير الممكن، وX لإجراء يحدث."
  - "الجدول الكامل يغطي كل التركيبات؛ ويمكن تبسيطه بحذف الأعمدة غير الممكنة، وتصغيره بدمج الأعمدة التي لا تؤثر فيها بعض الشروط على النتيجة."
  - "عناصر التغطية هي الأعمدة ذات التركيبات الممكنة؛ والتغطية 100% تعني اختبارها كلها."
  - "قوتها: منهجية وتكشف الفجوات والتناقضات في المتطلبات. ضعفها: عدد القواعد يتضاعف أُسّيًا مع عدد الشروط."
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
---
**جداول القرار (Decision Tables)** تُستخدم لاختبار كيف ينفّذ النظام متطلبات النظام لـ **تركيبات مختلفة من الشروط**. هي طريقة فعّالة لتسجيل **منطق معقّد**، مثل قواعد العمل.

### بنية الجدول — Table Structure

- **الشروط (Conditions)** و**الإجراءات (Actions)** الناتجة هي **الصفوف**.
- كل **عمود** يمثّل **قاعدة قرار (Decision Rule)**: تركيبة فريدة من الشروط، مع الإجراءات المرتبطة بها.

### الرموز — Notation

في **جداول القرار محدودة القيم (Limited-entry)**، كل قيم الشروط والإجراءات (عدا غير المهمة أو غير الممكنة) تكون منطقية (صح/خطأ):

| Symbol | المعنى |
| --- | --- |
| T | الشرط متحقق (True) |
| F | الشرط غير متحقق (False) |
| − | قيمة الشرط **لا تهم** للنتيجة |
| N/A | الشرط **غير ممكن** في هذه القاعدة |
| X | الإجراء **يحدث** |
| (blank) | الإجراء لا يحدث |

قد تُستخدم رموز أخرى أيضًا.

### الجدول الكامل والتبسيط — Full Table and Simplification

**الجدول الكامل** له أعمدة كافية لتغطية **كل تركيبات الشروط**. مع n شروط منطقية هناك **2ⁿ** عمودًا.

- يمكن **تبسيط** الجدول بحذف الأعمدة التي فيها تركيبات **غير ممكنة**.
- ويمكن **تصغيره** بدمج الأعمدة التي **لا تؤثر فيها بعض الشروط على النتيجة**، في عمود واحد.

خوارزميات تصغير الجداول **خارج نطاق هذا المنهج**.

### التغطية — Coverage

في الاختبار بجداول القرار، **عناصر التغطية هي الأعمدة** التي تحتوي **تركيبات ممكنة** من الشروط. للوصول إلى 100% تغطية، يجب أن تمر حالات الاختبار على **كل هذه الأعمدة**.

**التغطية = عدد الأعمدة المختبرة ÷ عدد الأعمدة الممكنة × 100%**

### القوة والضعف — Strengths and Weaknesses

- **القوة:** نهج **منهجي** لتحديد كل تركيبات الشروط، بعضها قد يُنسى لولا الجدول. ويساعد في اكتشاف **الفجوات والتناقضات** في المتطلبات.
- **الضعف:** مع كثرة الشروط، يتضاعف عدد القواعد **أُسّيًا**، فيصبح اختبارها كلها مستهلكًا للوقت. لتقليل العدد يمكن استخدام **جدول قرار مصغّر** أو **نهج مبني على المخاطر**.

### مثال — Example

متجر إلكتروني بثلاثة شروط: **عميل مسجّل؟** **الطلب ≥ 100$؟** **كوبون مطبّق؟** والكوبون **متاح للعملاء المسجّلين فقط**، فأي عمود فيه «غير مسجّل + كوبون» **غير ممكن**.

| | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Registered | T | T | T | T | F | F | F | F |
| Order ≥ $100 | T | T | F | F | T | T | F | F |
| Coupon | T | F | T | F | T | F | T | F |
| 10% discount | X | | X | | N/A | | N/A | |
| Free shipping | X | X | | | N/A | X | N/A | |

8 أعمدة، منها **2 غير ممكنة** (R5 وR7)، فتبقى **6 عناصر تغطية**.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="dt" data-config="{&quot;title&quot;:&quot;Online shop benefits&quot;,&quot;spec&quot;:&quot;Set the conditions, then run the test to cover that column. Infeasible columns (unregistered + coupon) are not coverage items.&quot;,&quot;conditions&quot;:[{&quot;id&quot;:&quot;reg&quot;,&quot;label&quot;:&quot;Registered&quot;},{&quot;id&quot;:&quot;big&quot;,&quot;label&quot;:&quot;Order ≥ $100&quot;},{&quot;id&quot;:&quot;cpn&quot;,&quot;label&quot;:&quot;Coupon&quot;}],&quot;actions&quot;:[{&quot;id&quot;:&quot;disc&quot;,&quot;label&quot;:&quot;10% discount&quot;},{&quot;id&quot;:&quot;ship&quot;,&quot;label&quot;:&quot;Free shipping&quot;}],&quot;rules&quot;:[{&quot;when&quot;:{&quot;reg&quot;:true,&quot;big&quot;:true,&quot;cpn&quot;:true},&quot;do&quot;:[&quot;disc&quot;,&quot;ship&quot;]},{&quot;when&quot;:{&quot;reg&quot;:true,&quot;big&quot;:true,&quot;cpn&quot;:false},&quot;do&quot;:[&quot;ship&quot;]},{&quot;when&quot;:{&quot;reg&quot;:true,&quot;big&quot;:false,&quot;cpn&quot;:true},&quot;do&quot;:[&quot;disc&quot;]},{&quot;when&quot;:{&quot;reg&quot;:true,&quot;big&quot;:false,&quot;cpn&quot;:false},&quot;do&quot;:[]},{&quot;when&quot;:{&quot;reg&quot;:false,&quot;big&quot;:true,&quot;cpn&quot;:false},&quot;do&quot;:[&quot;ship&quot;]},{&quot;when&quot;:{&quot;reg&quot;:false,&quot;big&quot;:false,&quot;cpn&quot;:false},&quot;do&quot;:[]}],&quot;infeasible&quot;:[{&quot;when&quot;:{&quot;reg&quot;:false,&quot;cpn&quot;:true}}],&quot;caption&quot;:&quot;Six feasible columns: six test cases give 100% decision table coverage.&quot;}" aria-label="Online shop benefits"><figcaption>Interactive: Online shop benefits</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">For K3 questions: count conditions (n) → full table has 2ⁿ columns; remove infeasible ones; the remaining columns are the minimum number of test cases for full coverage, unless the question gives a minimised table.</p><p class="gx-ar" lang="ar" dir="rtl">لأسئلة K3: عُدّ الشروط (n) ← الجدول الكامل فيه 2ⁿ عمودًا؛ احذف غير الممكنة منها؛ والأعمدة المتبقية هي أقل عدد من حالات الاختبار للتغطية الكاملة، إلا إذا أعطاك السؤال جدولًا مصغّرًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Counting infeasible columns as coverage items, or forgetting that '−' (does not matter) merges several combinations into one column.</p><p class="gx-ar" lang="ar" dir="rtl">احتساب الأعمدة غير الممكنة كعناصر تغطية، أو نسيان أن «−» (لا يهم) يدمج عدة تركيبات في عمود واحد.</p></aside>

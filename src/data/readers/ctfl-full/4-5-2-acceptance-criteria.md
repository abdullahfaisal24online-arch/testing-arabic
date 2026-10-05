---
order: 13
slug: "4-5-2"
chapter: 4
group: "4.5"
section: "4.5.2"
title: "Acceptance Criteria"
titleAr: "معايير القبول"
objectives: "FL-4.5.2 · K2"
minutes: 6
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
---
**معايير القبول (Acceptance Criteria)** لقصة المستخدم هي **الشروط التي يجب أن يحققها تنفيذ القصة ليقبله أصحاب المصلحة**. من هذا المنظور، معايير القبول هي **شروط الاختبار** التي يجب أن تمر عليها الاختبارات. وغالبًا تكون نتيجة **الحوار** (القسم 4.5.1).

### لماذا نكتبها؟ — What They Are For

- **تحديد نطاق** قصة المستخدم.
- **الوصول إلى توافق** بين أصحاب المصلحة.
- **وصف السيناريوهات الإيجابية والسلبية.**
- **أساس لاختبار القبول** لقصة المستخدم.
- **تخطيط وتقدير دقيقان.**

### صيغ الكتابة — Formats

هناك عدة طرق لكتابة معايير القبول. الأكثر شيوعًا:

<figure class="gx-figure gx-spectrum" aria-label="Two common formats for acceptance criteria."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Scenario-oriented</b><span>Given / When / Then, as in BDD.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Rule-oriented</b><span>A bullet-point verification list, or a table mapping inputs to outputs.</span></div></div><figcaption>Two common formats for acceptance criteria.</figcaption></figure>

**موجّهة بالسيناريو (Scenario-oriented):** بصيغة Given/When/Then المستخدمة في BDD.

> **Given** the cart total is $120 **When** the registered customer checks out **Then** shipping is free

**موجّهة بالقواعد (Rule-oriented):** مثل **قائمة نقاط للتحقق**، أو **جدول يربط المدخلات بالمخرجات**.

- Shipping is free for orders of $100 or more.
- Shipping costs $5 for orders under $100.
- The shipping cost is shown before payment.

| Cart total | Shipping |
| --- | --- |
| $99.99 | $5 |
| $100.00 | Free |

معظم معايير القبول يمكن توثيقها بإحدى هاتين الصيغتين. لكن يمكن للفريق استخدام **صيغة أخرى مخصصة**، طالما أن المعايير **محددة جيدًا وغير غامضة**.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2 "classify": Given/When/Then → scenario-oriented. Bullet list of rules or an input/output table → rule-oriented.</p><p class="gx-ar" lang="ar" dir="rtl">تصنيف K2: Given/When/Then ← موجّهة بالسيناريو. قائمة نقاط بالقواعد أو جدول مدخلات/مخرجات ← موجّهة بالقواعد.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Writing only positive acceptance criteria. They should also describe negative scenarios, such as what happens with an invalid coupon.</p><p class="gx-ar" lang="ar" dir="rtl">كتابة معايير قبول إيجابية فقط. يجب أن تصف أيضًا السيناريوهات السلبية، مثل ماذا يحدث مع كوبون غير صالح.</p></aside>

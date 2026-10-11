---
order: 8
slug: "5-2-1"
chapter: 5
group: "5.2"
section: "5.2.1"
title: "Risk Definition and Risk Attributes"
titleAr: "تعريف الخطر وصفاته"
objectives: "FL-5.2.1 · K1"
minutes: 9
lo:
  FL-5.2.1: "Identify the risk level using risk likelihood and risk impact."
loAr:
  FL-5.2.1: "تحدد مستوى الخطر باستخدام احتمالية الخطر وأثره."
takeaways:
  - "Risk management lets organisations increase the chance of achieving objectives, improve the quality of the product and increase the stakeholders' confidence and trust."
  - "A risk is a potential event, hazard, threat or situation whose occurrence causes an adverse effect."
  - "A risk is characterised by risk likelihood (probability, between 0 and 1) and risk impact (the harm or consequences)."
  - "Risk level combines likelihood and impact; the higher the level, the more important it is to treat the risk."
  - "Risk-based testing: test activities are selected, prioritised and managed based on risk analysis (identification, assessment) and risk control (mitigation, monitoring)."
takeawaysAr:
  - "إدارة المخاطر تمكّن المؤسسات من رفع فرص تحقيق الأهداف، وتحسين جودة المنتج، وزيادة ثقة أصحاب المصلحة واطمئنانهم."
  - "الخطر حدث أو تهديد أو موقف محتمل يسبب حدوثه أثرًا سلبيًا."
  - "يتميّز الخطر باحتماليته (احتمال حدوثه بين 0 و1) وأثره (الضرر أو العواقب)."
  - "مستوى الخطر يجمع الاحتمالية والأثر؛ وكلما ارتفع زادت أهمية معالجته."
  - "الاختبار المبني على المخاطر: تُختار أنشطة الاختبار وتُرتَّب وتُدار بناءً على تحليل المخاطر (التحديد والتقييم) والتحكم فيها (التخفيف والمراقبة)."
terms:
  - en: "Risk"
    ar: "الخطر"
    def: "A factor that could result in future negative consequences: a potential event, hazard, threat or situation with an adverse effect."
    defAr: "عامل قد يؤدي إلى عواقب سلبية مستقبلًا: حدث أو تهديد أو موقف محتمل له أثر سلبي."
  - en: "Risk Likelihood"
    ar: "احتمالية الخطر"
    def: "The probability that a risk will occur; greater than zero and less than one."
    defAr: "احتمال حدوث الخطر؛ أكبر من صفر وأقل من واحد."
  - en: "Risk Impact"
    ar: "أثر الخطر"
    def: "The harm or consequences if a risk occurs."
    defAr: "الضرر أو العواقب إذا حدث الخطر."
  - en: "Risk Level"
    ar: "مستوى الخطر"
    def: "A measure of a risk, defined by its likelihood and impact."
    defAr: "قياس للخطر، يتحدد باحتماليته وأثره."
    match: ["Risk Level", "risk level"]
  - en: "Risk-based Testing"
    ar: "الاختبار المبني على المخاطر"
    def: "Testing in which the management, selection, prioritisation and use of test activities and resources are based on risk types and risk levels."
    defAr: "اختبار تُبنى فيه إدارة أنشطة الاختبار وموارده واختيارها وترتيب أولوياتها على أنواع المخاطر ومستوياتها."
    match: ["Risk-based Testing", "risk-based testing"]
---
تواجه المؤسسات عوامل داخلية وخارجية كثيرة تجعل تحقيق أهدافها، وموعد تحقيقها، **غير مؤكد** (ISO 31000). فريق تطبيق التوصيل مثلًا لا يعرف يقينًا هل سيصدر في موعده، ولا هل ستعمل بوابة الدفع يوم الإطلاق. **إدارة المخاطر (Risk Management)** لا تزيل هذا الغموض، لكنها تجعله مرئيًا ومُدارًا، فتسمح للمؤسسة بأن:

- ترفع **احتمال تحقيق أهدافها**.
- **تحسّن جودة** منتجاتها.
- تزيد **ثقة أصحاب المصلحة واطمئنانهم**.

### أنشطة إدارة المخاطر — Risk Management Activities

لإدارة المخاطر نشاطان رئيسيان، ولكل منهما جزءان:

| Activity | Parts | Covered in |
| --- | --- | --- |
| Risk analysis | Risk identification, risk assessment | 5.2.3 |
| Risk control | Risk mitigation, risk monitoring | 5.2.4 |

وعندما **تُختار** أنشطة الاختبار و**تُرتَّب أولوياتها** و**تُدار** بناءً على تحليل المخاطر والتحكم فيها، يسمّى هذا النهج **الاختبار المبني على المخاطر (Risk-based Testing)**. الفكرة: وقت الاختبار محدود، فنصرفه حيث يكون الضرر المحتمل أكبر.

### ما هو الخطر؟ — What Is a Risk?

**الخطر (Risk)** هو حدث، أو تهديد، أو موقف **محتمل**، إذا وقع سبّب **أثرًا سلبيًا**. الكلمة المفتاحية هي «محتمل»: الخطر لم يقع بعد. مثال: «قد تُخصم قيمة الطلب من بطاقة الزبون مرتين إذا تأخر رد بوابة الدفع».

يتميّز الخطر بعاملين:

- **احتمالية الخطر (Risk Likelihood):** احتمال وقوعه، وهو **أكبر من صفر وأقل من واحد**. لماذا لا يكون صفرًا؟ لأن ما يستحيل وقوعه ليس خطرًا. ولماذا لا يكون واحدًا؟ لأن ما سيقع حتمًا، أو وقع فعلًا، صار **مشكلة (Issue)** تُعالَج مباشرة، لا خطرًا يُقدَّر.
- **أثر الخطر (Risk Impact):** **الضرر** أو العواقب إذا وقع: خسارة مال، أو غضب زبائن، أو مخالفة قانونية.

### مستوى الخطر — Risk Level

يعبّر العاملان معًا عن **مستوى الخطر (Risk Level)**، وهو مقياس للخطر. **كلما ارتفع مستوى الخطر، زادت أهمية معالجته.** أكثر طريقة شائعة لحسابه هي ضرب الاحتمالية في الأثر (الطريقة الكمّية)، ويمكن تحديده أيضًا بمصفوفة مخاطر (الطريقة النوعية)، وتفصيلهما في القسم 5.2.3.

**مثال محلول 1: مقياس من 1 إلى 4** لمخاطر في تطبيق التوصيل:

| Risk | Likelihood | Impact | Level (L × I) |
| --- | --- | --- | --- |
| Delivery fee charged on an order of exactly 20.00 JOD | 3 | 3 | 9 |
| Card charged twice when the payment gateway times out | 2 | 4 | 8 |
| Expired coupon still accepted | 3 | 2 | 6 |
| Arabic text truncated on small Android screens | 4 | 1 | 4 |

الترتيب الناتج يوجّه الاختبار: نبدأ بحدّ التوصيل المجاني، ثم الخصم المزدوج. لاحظ أن الخطر الأخير **محتمل جدًا** لكن مستواه منخفض لأن أثره بسيط.

**مثال محلول 2: احتمالية حقيقية وأثر بالدينار.** إذا كانت احتمالية الخصم المزدوج 0.2 وكلفة الاسترداد والتعويض المقدّرة 5,000 دينار، فمستوى الخطر = 0.2 × 5,000 = **1,000 دينار**. وخطر احتماليته 0.6 وأثره 500 دينار مستواه **300 دينار** فقط، رغم أنه أكثر احتمالًا بثلاث مرات.

**حالة دقيقة:** خطران قد يحصلان على المستوى نفسه بقصتين مختلفتين، كخطر نادر مدمّر وخطر متكرر بسيط. لذلك نسجّل الاحتمالية والأثر كلًّا على حدة، ولا نكتفي بالرقم النهائي.

### لا تخلط بين — Don't Confuse

| | Risk | Issue |
| --- | --- | --- |
| Has it happened? | Not yet, it may happen | Yes, or it is certain |
| Likelihood | Between 0 and 1 | Not relevant |
| Typical response | Analyse and control it in advance | Handle it now |

مثال: «قد تتأخر بيئة الاختبار» خطر يُقدَّر مسبقًا. أما «بيئة الاختبار لم تُسلَّم اليوم كما وُعدنا» فمشكلة قائمة، يعالجها مدير الاختبار مباشرة، مثلًا بتعديل الجدول. وتحوّل الخطر إلى مشكلة سبب شائع لإعادة ترتيب أولويات الاختبار، كما سترى في القسم 5.3.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="risk" data-config="{&quot;title&quot;:&quot;Risk level from likelihood and impact&quot;,&quot;spec&quot;:&quot;Click a cell to set likelihood and impact. The score is likelihood × impact.&quot;,&quot;likelihood&quot;:[&quot;Low&quot;,&quot;Medium&quot;,&quot;High&quot;,&quot;Very high&quot;],&quot;impact&quot;:[&quot;Low&quot;,&quot;Medium&quot;,&quot;High&quot;,&quot;Very high&quot;],&quot;caption&quot;:&quot;Same score, different story: a very likely but minor risk and a rare but severe one can land on the same level. That is why both attributes are recorded.&quot;}" aria-label="Risk level from likelihood and impact"><figcaption>Interactive: Risk level from likelihood and impact</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">"The tax calculation may be wrong for the new region." Likelihood: high (new rules, new code). Impact: very high (legal penalties, refunds). Risk level: very high, so it gets the most testing and earliest. "The footer link colour may be slightly off": high likelihood, low impact, low level.</p><p class="gx-ar" lang="ar" dir="rtl">«قد يكون حساب الضريبة خاطئًا في المنطقة الجديدة». الاحتمالية: عالية (قواعد جديدة، شيفرة جديدة). الأثر: عالٍ جدًا (غرامات قانونية، استرداد أموال). مستوى الخطر: عالٍ جدًا، فيحصل على أكبر قدر من الاختبار وأبكره. «قد يكون لون رابط التذييل مختلفًا قليلًا»: احتمالية عالية، وأثر منخفض، ومستوى منخفض.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: risk level is determined by likelihood and impact. If an option names other attributes (cost of testing, number of testers), it is a distractor.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: مستوى الخطر يتحدد بالاحتمالية والأثر. إذا ذكر خيار صفات أخرى (تكلفة الاختبار، عدد المختبرين)، فهو مضلل.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating likelihood as 0 or 1. A risk is uncertain by definition: its likelihood is greater than 0 and less than 1. Certain events are issues, not risks.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار الاحتمالية 0 أو 1. الخطر غير مؤكد بطبيعته: احتماليته أكبر من 0 وأقل من 1. الأحداث المؤكدة مشكلات، لا مخاطر.</p></aside>

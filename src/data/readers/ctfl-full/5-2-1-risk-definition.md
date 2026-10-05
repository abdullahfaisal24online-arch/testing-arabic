---
order: 8
slug: "5-2-1"
chapter: 5
group: "5.2"
section: "5.2.1"
title: "Risk Definition and Risk Attributes"
titleAr: "تعريف الخطر وصفاته"
objectives: "FL-5.2.1 · K1"
minutes: 7
lo:
  FL-5.2.1: "Identify the risk level using risk likelihood and risk impact."
loAr:
  FL-5.2.1: "تحدد مستوى الخطر باستخدام احتمالية الخطر وأثره."
takeaways:
  - "Risk management lets organisations increase the chance of achieving objectives, improve quality, increase confidence, and support better decisions."
  - "A risk is a potential event, hazard, threat or situation whose occurrence causes an adverse effect."
  - "A risk is characterised by risk likelihood (probability, between 0 and 1) and risk impact (the harm or consequences)."
  - "Risk level combines likelihood and impact; the higher the level, the more important it is to treat the risk."
takeawaysAr:
  - "إدارة المخاطر تمكّن المؤسسات من رفع فرص تحقيق الأهداف، وتحسين الجودة، وزيادة الثقة، ودعم قرارات أفضل."
  - "الخطر حدث أو تهديد أو موقف محتمل يسبب حدوثه أثرًا سلبيًا."
  - "يتميّز الخطر باحتماليته (احتمال حدوثه بين 0 و1) وأثره (الضرر أو العواقب)."
  - "مستوى الخطر يجمع الاحتمالية والأثر؛ وكلما ارتفع زادت أهمية معالجته."
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
المؤسسات تواجه عوامل داخلية وخارجية كثيرة تجعل تحقيق أهدافها غير مؤكد. **إدارة المخاطر** تسمح لها بـ:

- رفع **احتمال تحقيق الأهداف**.
- **تحسين جودة** المنتج.
- **زيادة ثقة** أصحاب المصلحة.

أنشطة إدارة المخاطر الرئيسية هي **تحليل المخاطر** (تحديدها وتقييمها) و**التحكم في المخاطر** (تخفيفها ومراقبتها). ونهج الاختبار الذي تُختار فيه أنشطة الاختبار وتُرتَّب أولوياتها وتُدار بناءً على تحليل المخاطر والتحكم فيها يسمّى **الاختبار المبني على المخاطر (Risk-based Testing)**.

### ما هو الخطر؟ — What Is a Risk?

**الخطر (Risk)** هو حدث، أو تهديد، أو موقف **محتمل**، يسبب حدوثه **أثرًا سلبيًا**. يتميّز الخطر بعاملين:

- **احتمالية الخطر (Risk Likelihood):** احتمال حدوثه، وهو **أكبر من صفر وأقل من واحد**.
- **أثر الخطر (Risk Impact):** الضرر أو العواقب إذا حدث.

### مستوى الخطر — Risk Level

هذان العاملان يحددان **مستوى الخطر (Risk Level)**، وهو مقياس للخطر. **كلما ارتفع مستوى الخطر، زادت أهمية معالجته.**

- **كمّيًا:** مستوى الخطر = الاحتمالية × الأثر.
- **نوعيًا:** باستخدام **مصفوفة مخاطر** (Risk Matrix).

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="risk" data-config="{&quot;title&quot;:&quot;Risk level from likelihood and impact&quot;,&quot;spec&quot;:&quot;Click a cell to set likelihood and impact. The score is likelihood × impact.&quot;,&quot;likelihood&quot;:[&quot;Low&quot;,&quot;Medium&quot;,&quot;High&quot;,&quot;Very high&quot;],&quot;impact&quot;:[&quot;Low&quot;,&quot;Medium&quot;,&quot;High&quot;,&quot;Very high&quot;],&quot;caption&quot;:&quot;Same score, different story: a very likely but minor risk and a rare but severe one can land on the same level. That is why both attributes are recorded.&quot;}" aria-label="Risk level from likelihood and impact"><figcaption>Interactive: Risk level from likelihood and impact</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">"The tax calculation may be wrong for the new region." Likelihood: high (new rules, new code). Impact: very high (legal penalties, refunds). Risk level: very high, so it gets the most testing and earliest. "The footer link colour may be slightly off": high likelihood, low impact, low level.</p><p class="gx-ar" lang="ar" dir="rtl">«قد يكون حساب الضريبة خاطئًا في المنطقة الجديدة». الاحتمالية: عالية (قواعد جديدة، شيفرة جديدة). الأثر: عالٍ جدًا (غرامات قانونية، استرداد أموال). مستوى الخطر: عالٍ جدًا، فيحصل على أكبر قدر من الاختبار وأبكره. «قد يكون لون رابط التذييل مختلفًا قليلًا»: احتمالية عالية، وأثر منخفض، ومستوى منخفض.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: risk level is determined by likelihood and impact. If an option names other attributes (cost of testing, number of testers), it is a distractor.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: مستوى الخطر يتحدد بالاحتمالية والأثر. إذا ذكر خيار صفات أخرى (تكلفة الاختبار، عدد المختبرين)، فهو مضلل.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating likelihood as 0 or 1. A risk is uncertain by definition: its likelihood is greater than 0 and less than 1. Certain events are issues, not risks.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار الاحتمالية 0 أو 1. الخطر غير مؤكد بطبيعته: احتماليته أكبر من 0 وأقل من 1. الأحداث المؤكدة مشكلات، لا مخاطر.</p></aside>

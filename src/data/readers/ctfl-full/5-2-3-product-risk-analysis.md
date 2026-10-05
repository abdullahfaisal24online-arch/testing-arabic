---
order: 10
slug: "5-2-3"
chapter: 5
group: "5.2"
section: "5.2.3"
title: "Product Risk Analysis"
titleAr: "تحليل مخاطر المنتج"
objectives: "FL-5.2.3 · K2"
minutes: 8
lo:
  FL-5.2.3: "Explain how product risk analysis may influence the thoroughness and scope of testing."
loAr:
  FL-5.2.3: "تشرح كيف يؤثر تحليل مخاطر المنتج على شمولية الاختبار ونطاقه."
labs: ["LAB-5.2.3"]
takeaways:
  - "Product risk analysis gives awareness of product risk so testing effort can minimise the residual risk; ideally it starts early in the SDLC."
  - "It has two parts: risk identification (e.g. brainstorming, workshops, interviews, cause-effect diagrams) and risk assessment (categorisation, likelihood, impact, level, prioritisation, handling options)."
  - "Assessment can be quantitative (likelihood × impact), qualitative (a risk matrix), or a mix."
  - "Results influence the scope of testing, test levels and types, techniques and coverage, effort estimates, test prioritisation, and whether activities other than testing could reduce the risk."
takeawaysAr:
  - "تحليل مخاطر المنتج يعطي وعيًا بالمخاطر ليُوجَّه جهد الاختبار نحو تقليل المخاطر المتبقية؛ والأفضل أن يبدأ مبكرًا في دورة التطوير."
  - "له جزءان: تحديد المخاطر (مثل العصف الذهني، والورش، والمقابلات، ومخططات السبب والنتيجة) وتقييمها (التصنيف، والاحتمالية، والأثر، والمستوى، والأولوية، وخيارات المعالجة)."
  - "التقييم قد يكون كمّيًا (الاحتمالية × الأثر)، أو نوعيًا (مصفوفة مخاطر)، أو مزيجًا."
  - "النتائج تؤثر على نطاق الاختبار، ومستوياته وأنواعه، والتقنيات والتغطية، وتقدير الجهد، وترتيب الأولويات، وهل هناك أنشطة غير الاختبار تقلل الخطر."
terms:
  - en: "Risk Identification"
    ar: "تحديد المخاطر"
    def: "Generating a comprehensive list of risks, for example through brainstorming, workshops, interviews or cause-effect diagrams."
    defAr: "إعداد قائمة شاملة بالمخاطر، مثلًا عبر العصف الذهني أو الورش أو المقابلات أو مخططات السبب والنتيجة."
  - en: "Risk Assessment"
    ar: "تقييم المخاطر"
    def: "Categorising identified risks, determining their likelihood, impact and level, prioritising them and proposing ways to handle them."
    defAr: "تصنيف المخاطر المحددة، وتحديد احتماليتها وأثرها ومستواها، وترتيب أولوياتها، واقتراح طرق معالجتها."
---
من منظور الاختبار، هدف **تحليل مخاطر المنتج** هو توفير **وعي بمخاطر المنتج**، لتركيز جهد الاختبار بطريقة **تقلل المخاطر المتبقية**. يُفضّل أن يبدأ **مبكرًا** في دورة التطوير.

يتكوّن من جزأين:

<figure class="gx-figure" aria-label="Product risk analysis."><div class="gx-flow-row"><span class="gx-flow-node">Risk identification<small>list the risks</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Risk assessment<small>likelihood, impact, level, priority</small></span></div><figcaption>Product risk analysis.</figcaption></figure>

### تحديد المخاطر — Risk Identification

إعداد **قائمة شاملة** بالمخاطر. يمكن لأصحاب المصلحة تحديدها بأساليب وأدوات مختلفة، مثل:

- **العصف الذهني.**
- **ورش العمل.**
- **المقابلات.**
- **مخططات السبب والنتيجة (Cause-effect Diagrams).**

### تقييم المخاطر — Risk Assessment

يشمل: **تصنيف** المخاطر المحددة، وتحديد **احتماليتها** و**أثرها** و**مستواها**، و**ترتيب أولوياتها**، واقتراح **طرق معالجتها**. التصنيف يساعد في تحديد إجراءات التخفيف، لأن المخاطر من الفئة نفسها يمكن تخفيفها غالبًا بنهج متشابه.

يمكن أن يكون التقييم:

- **كمّيًا:** مستوى الخطر = الاحتمالية × الأثر.
- **نوعيًا:** باستخدام **مصفوفة مخاطر**.
- **مزيجًا** من الاثنين.

### كيف يؤثر على الاختبار؟ — How It Influences Testing

قد تؤثر نتائج تحليل مخاطر المنتج على **شمولية الاختبار ونطاقه**، فتُستخدم لـ:

- **تحديد نطاق الاختبار** الذي سيُنفَّذ.
- **تحديد مستويات الاختبار** و**اقتراح أنواعه**.
- **تحديد تقنيات الاختبار** و**مستوى التغطية** المطلوب.
- **تقدير جهد الاختبار** لكل مهمة.
- **ترتيب أولويات الاختبار** لاكتشاف العيوب الحرجة في أبكر وقت.
- **تحديد ما إذا كانت أنشطة أخرى غير الاختبار** يمكن أن تقلل الخطر.

<section class="gx-lab" data-lab="LAB-5.2.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Risk-Rank One Feature</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · رتّب مخاطر ميزة واحدة</span></span><span class="gx-lab-meta">LAB-5.2.3 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> identify and assess product risks for one feature and turn them into testing decisions.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تحديد مخاطر المنتج لميزة واحدة وتقييمها، وتحويلها إلى قرارات اختبار.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">In a 15-minute brainstorm with a developer and product owner, list at least eight product risks for a feature.</span><span class="gx-ar" lang="ar" dir="rtl">في عصف ذهني لمدة 15 دقيقة مع مطوّر ومالك المنتج، اكتبوا ثمانية مخاطر منتج على الأقل لميزة واحدة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Rate each risk's likelihood and impact from 1 to 4 and compute the level (L × I).</span><span class="gx-ar" lang="ar" dir="rtl">قيّموا احتمالية كل خطر وأثره من 1 إلى 4، واحسبوا المستوى (الاحتمالية × الأثر).</span></li><li><span class="gx-en" lang="en" dir="ltr">For the top three, decide test level, technique and coverage (e.g. "BVA on the 3 price thresholds, at component and system level").</span><span class="gx-ar" lang="ar" dir="rtl">لأعلى ثلاثة، حددوا مستوى الاختبار والتقنية والتغطية (مثلًا: «BVA على حدود الأسعار الثلاثة، على مستوى المكوّنات والنظام»).</span></li><li><span class="gx-en" lang="en" dir="ltr">For the lowest three, decide whether a lighter check is enough, or whether a non-testing action (a review, a monitoring alert) would reduce the risk better.</span><span class="gx-ar" lang="ar" dir="rtl">لأدنى ثلاثة، قرروا هل يكفي فحص أخف، أو هل إجراء غير اختباري (مراجعة، تنبيه مراقبة) يقلل الخطر بشكل أفضل.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Your testing effort is visibly uneven: the highest risks get stronger techniques, more coverage and earlier execution, and at least one risk is handled by something other than testing.</span><span class="gx-ar" lang="ar" dir="rtl">جهد الاختبار لديك صار غير متساوٍ بشكل واضح: المخاطر الأعلى تحصل على تقنيات أقوى وتغطية أكبر وتنفيذ أبكر، وخطر واحد على الأقل يُعالَج بشيء غير الاختبار.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: if a question asks how risk analysis influences testing, valid answers include scope, levels, types, techniques, coverage, effort and prioritisation. "It determines who the test manager is" is not one of them.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: إذا سأل السؤال كيف يؤثر تحليل المخاطر على الاختبار، فالإجابات الصحيحة تشمل النطاق، والمستويات، والأنواع، والتقنيات، والتغطية، والجهد، والأولويات. أما «يحدد من هو مدير الاختبار» فليست منها.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Doing risk analysis once at the start and never again. Risks change as the product evolves; the assessment needs updating, which is part of risk monitoring (next section).</p><p class="gx-ar" lang="ar" dir="rtl">إجراء تحليل المخاطر مرة واحدة في البداية فقط. المخاطر تتغير مع تطوّر المنتج؛ والتقييم يحتاج تحديثًا، وهذا جزء من مراقبة المخاطر (القسم التالي).</p></aside>

---
order: 10
slug: "5-2-3"
chapter: 5
group: "5.2"
section: "5.2.3"
title: "Product Risk Analysis"
titleAr: "تحليل مخاطر المنتج"
objectives: "FL-5.2.3 · K2"
minutes: 14
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
  - en: "Risk Matrix"
    ar: "مصفوفة المخاطر"
    def: "A grid that combines likelihood and impact categories to give a qualitative risk level."
    defAr: "جدول يجمع فئات الاحتمالية والأثر ليعطي مستوى خطر نوعيًا."
    match: ["Risk Matrix", "risk matrix"]
---
لا يستطيع أي فريق أن يختبر كل شيء بالعمق نفسه. **تحليل مخاطر المنتج (Product Risk Analysis)** هو الأداة التي تجيب عن سؤال: أين نضع جهد الاختبار؟ من منظور الاختبار، هدفه أن يوفّر **وعيًا بمخاطر المنتج**، حتى يُركَّز جهد الاختبار بطريقة **تقلل المستوى المتبقي من مخاطر المنتج** إلى أدنى حد. **المخاطر المتبقية (Residual Risk)** هي ما يبقى من الخطر بعد الاختبار؛ فالاختبار لا يلغي الخطر، لكنه يخفضه حيث يهم أكثر.

ويُفضّل أن يبدأ التحليل **مبكرًا في دورة حياة تطوير البرمجيات (SDLC)**. السبب: نتائجه تدخل في التخطيط والتقدير، وكلما عرفنا الخطر مبكرًا، أمكن التصرف بأرخص طريقة؛ أحيانًا بتوضيح متطلب أو تغيير تصميم قبل كتابة سطر واحد من الشيفرة. في فريق التوصيل يجري التحليل عند تحسين قائمة المهام (backlog refinement) وفي تخطيط كل إصدار، ثم يُحدَّث في كل sprint.

يتكوّن التحليل من جزأين:

<figure class="gx-figure" aria-label="Product risk analysis."><div class="gx-flow-row"><span class="gx-flow-node">Risk identification<small>list the risks</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Risk assessment<small>likelihood, impact, level, priority</small></span></div><figcaption>Product risk analysis.</figcaption></figure>

### تحديد المخاطر — Risk Identification

**تحديد المخاطر (Risk Identification)** هو إعداد **قائمة شاملة** بالمخاطر. «شاملة» مهمة: الخطر الذي لا يُذكر لن يُقيَّم ولن يُختبر. لذلك يشارك فيه **أصحاب المصلحة** المختلفون، لأن كل واحد يرى مخاطر لا يراها غيره، باستخدام أساليب وأدوات مثل:

- **العصف الذهني (Brainstorming):** الفريق كله يقترح بحرية «ماذا قد يسوء في ميزة الكوبونات؟» دون نقد في البداية.
- **ورش العمل (Workshops):** جلسة منظّمة مع مالك المنتج وممثل عن المطاعم وفريق الدعم لمراجعة رحلة الطلب خطوة خطوة.
- **المقابلات (Interviews):** سؤال موظفي الدعم الفني عن أكثر الشكاوى تكرارًا، فهم يعرفون أين يتألم الزبائن.
- **مخططات السبب والنتيجة (Cause-effect Diagrams):** نبدأ من نتيجة سيئة مثل «الطلب يصل متأخرًا» ونتتبّع أسبابها المحتملة: خطأ في الخريطة، أو حالة الطلب لا تصل للمطعم، أو تطبيق السائق يتجمد.

### تقييم المخاطر — Risk Assessment

**تقييم المخاطر (Risk Assessment)** يأخذ القائمة ويحوّلها إلى قرارات. وهو يشمل:

1. **تصنيف** المخاطر المحددة. التصنيف يساعد في تحديد إجراءات التخفيف، لأن المخاطر من **الفئة نفسها** يمكن غالبًا تخفيفها **بنهج متشابه**: كل مخاطر «الحسابات» تُعالج بتقنيات مثل BVA وجداول القرار، وكل مخاطر «الأمن» باختبار الأمن ومراجعة الشيفرة.
2. تحديد **احتمالية** كل خطر و**أثره** و**مستواه**.
3. **ترتيب أولوياتها** حسب المستوى.
4. **اقتراح طرق لمعالجتها**، وهي التي تُنفَّذ لاحقًا في التحكم بالمخاطر (القسم 5.2.4).

### كمّي أم نوعي؟ — Quantitative or Qualitative

يمكن أن يكون التقييم **كمّيًا** أو **نوعيًا** أو **مزيجًا** منهما:

- **الطريقة الكمّية:** مستوى الخطر = **الاحتمالية × الأثر**. مثال: احتمالية 0.3 وأثر 4,000 دينار ← مستوى 1,200 دينار.
- **الطريقة النوعية:** يُحدَّد المستوى من **مصفوفة مخاطر (Risk Matrix)** تجمع فئات وصفية (منخفض، متوسط، عالٍ) دون أرقام دقيقة، وهي مفيدة عندما لا تتوفر بيانات لحساب احتمالية حقيقية.
- **المزيج:** نعطي كل عامل درجة من 1 إلى 4، ونضربهما، ثم نحوّل الناتج إلى فئة: 1–4 منخفض، 5–8 متوسط، 9–16 عالٍ.

| Likelihood ↓ / Impact → | Low | Medium | High |
| --- | --- | --- | --- |
| High | Medium | High | High |
| Medium | Low | Medium | High |
| Low | Low | Low | Medium |

### مثال محلول: ميزة الكوبونات — Worked Example

عصف ذهني لمدة 15 دقيقة أنتج هذه المخاطر، وقيّمها الفريق بمقياس 1–4:

| ID | Risk | Category | L | I | Level | Priority |
| --- | --- | --- | --- | --- | --- | --- |
| R1 | Fixed coupon makes the total negative (e.g. 6.00 JOD coupon on a 5.00 JOD order) | Calculation | 3 | 4 | 12 (High) | 1 |
| R2 | Two coupons applied to one order | Business rule | 3 | 3 | 9 (High) | 2 |
| R3 | Coupon accepted on its expiry day after midnight | Business rule | 2 | 3 | 6 (Medium) | 3 |
| R4 | Coupon endpoint can be called repeatedly to guess valid codes | Security | 2 | 3 | 6 (Medium) | 4 |
| R5 | Coupon error message shown in English in the Arabic UI | Usability | 3 | 1 | 3 (Low) | 5 |

R2 وR3 من الفئة نفسها (قواعد العمل)، فيمكن معالجتهما معًا بجدول قرار واحد. وعند تساوي R3 وR4 في المستوى، قدّم الفريق R3 لأن قواعد الصلاحية تُختبر في كل sprint، وهذا قرار يتخذه الفريق بوضوح لا رقم يفرضه.

### كيف تؤثر النتائج على الاختبار؟ — How Results Influence Testing

قد يؤثر تحليل مخاطر المنتج على **شمولية الاختبار (Thoroughness)** و**نطاقه (Scope)**. تُستخدم نتائجه في:

1. **تحديد نطاق الاختبار:** ما الذي نختبره، وما الذي نختبره بخفة أو نستبعده. ميزة الكوبونات داخل النطاق بعمق، أما شاشة «المفضلة» التي لم تتغير منذ سنة فيكفيها اختبار الانحدار المؤتمت.
2. **تحديد مستويات الاختبار واقتراح أنواعه:** R1 يُختبر على **مستوى المكوّن** (دالة حساب المجموع) وعلى **مستوى النظام** (رحلة الطلب كاملة). وR4 يقترح **اختبار أمن**، وخطر البطء في ذروة الجمعة يقترح **اختبار أداء**.
3. **تحديد تقنيات الاختبار والتغطية المطلوبة:** R1 يستحق **BVA بثلاث قيم** حول حدود المجموع، وR2 وR3 **جدول قرار** بتغطية كل الأعمدة، بينما يكفي R5 فحص سريع بقائمة تحقق.
4. **تقدير جهد الاختبار لكل مهمة:** المخاطر العالية تأخذ ساعات أكثر في التقدير؛ فجهد R1 قد يكون ثلاثة أضعاف جهد R5.
5. **ترتيب أولويات الاختبار** بهدف **اكتشاف الـ defects الحرجة في أبكر وقت:** تُنفَّذ اختبارات R1 وR2 في أول يومين من الـ sprint، فإذا ظهر defect يبقى وقت لإصلاحه.
6. **تحديد هل يمكن استخدام أنشطة إضافية غير الاختبار لتقليل الخطر:** لـ R4 يضيف المطوّرون حدًّا لعدد المحاولات (rate limiting) ومراجعة شيفرة، ولـ R3 يوضّح مالك المنتج المتطلب: هل ينتهي الكوبون عند منتصف الليل بتوقيت عمّان؟

| Risk level | Thoroughness | Example decisions |
| --- | --- | --- |
| High | Most rigorous | Several test levels, strong techniques (3-value BVA, full decision table), high coverage, run first, extra reviews |
| Medium | Moderate | Main technique with standard coverage, run after high risks |
| Low | Light | Checklist or exploratory session, run if time allows, or rely on regression |

<section class="gx-lab" data-lab="LAB-5.2.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Risk-Rank One Feature</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · رتّب مخاطر ميزة واحدة</span></span><span class="gx-lab-meta">LAB-5.2.3 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> identify and assess product risks for one feature and turn them into testing decisions.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تحديد مخاطر المنتج لميزة واحدة وتقييمها، وتحويلها إلى قرارات اختبار.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">In a 15-minute brainstorm with a developer and product owner, list at least eight product risks for a feature.</span><span class="gx-ar" lang="ar" dir="rtl">في عصف ذهني لمدة 15 دقيقة مع مطوّر ومالك المنتج، اكتبوا ثمانية مخاطر منتج على الأقل لميزة واحدة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Rate each risk's likelihood and impact from 1 to 4 and compute the level (L × I).</span><span class="gx-ar" lang="ar" dir="rtl">قيّموا احتمالية كل خطر وأثره من 1 إلى 4، واحسبوا المستوى (الاحتمالية × الأثر).</span></li><li><span class="gx-en" lang="en" dir="ltr">For the top three, decide test level, technique and coverage (e.g. "BVA on the 3 price thresholds, at component and system level").</span><span class="gx-ar" lang="ar" dir="rtl">لأعلى ثلاثة، حددوا مستوى الاختبار والتقنية والتغطية (مثلًا: «BVA على حدود الأسعار الثلاثة، على مستوى المكوّنات والنظام»).</span></li><li><span class="gx-en" lang="en" dir="ltr">For the lowest three, decide whether a lighter check is enough, or whether a non-testing action (a review, a monitoring alert) would reduce the risk better.</span><span class="gx-ar" lang="ar" dir="rtl">لأدنى ثلاثة، قرروا هل يكفي فحص أخف، أو هل إجراء غير اختباري (مراجعة، تنبيه مراقبة) يقلل الخطر بشكل أفضل.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Your testing effort is visibly uneven: the highest risks get stronger techniques, more coverage and earlier execution, and at least one risk is handled by something other than testing.</span><span class="gx-ar" lang="ar" dir="rtl">جهد الاختبار لديك صار غير متساوٍ بشكل واضح: المخاطر الأعلى تحصل على تقنيات أقوى وتغطية أكبر وتنفيذ أبكر، وخطر واحد على الأقل يُعالَج بشيء غير الاختبار.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: if a question asks how risk analysis influences testing, valid answers include scope, levels, types, techniques, coverage, effort and prioritisation. "It determines who the test manager is" is not one of them.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: إذا سأل السؤال كيف يؤثر تحليل المخاطر على الاختبار، فالإجابات الصحيحة تشمل النطاق، والمستويات، والأنواع، والتقنيات، والتغطية، والجهد، والأولويات. أما «يحدد من هو مدير الاختبار» فليست منها.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip · two parts</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان · جزءان</span></p><p class="gx-en" lang="en" dir="ltr">Risk analysis = identification + assessment. Risk control = mitigation + monitoring. Brainstorming, workshops, interviews and cause-effect diagrams belong to identification; categorising, likelihood, impact, level and prioritising belong to assessment.</p><p class="gx-ar" lang="ar" dir="rtl">تحليل المخاطر = التحديد + التقييم. التحكم في المخاطر = التخفيف + المراقبة. العصف الذهني والورش والمقابلات ومخططات السبب والنتيجة تتبع التحديد؛ والتصنيف والاحتمالية والأثر والمستوى وترتيب الأولويات تتبع التقييم.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Doing risk analysis once at the start and never again. Risks change as the product evolves; the assessment needs updating, which is part of risk monitoring (next section).</p><p class="gx-ar" lang="ar" dir="rtl">إجراء تحليل المخاطر مرة واحدة في البداية فقط. المخاطر تتغير مع تطوّر المنتج؛ والتقييم يحتاج تحديثًا، وهذا جزء من مراقبة المخاطر (القسم التالي).</p></aside>

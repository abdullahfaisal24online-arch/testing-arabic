---
order: 4
slug: "5-1-4"
chapter: 5
group: "5.1"
section: "5.1.4"
title: "Estimation Techniques"
titleAr: "تقنيات التقدير"
objectives: "FL-5.1.4 · K3"
minutes: 12
lo:
  FL-5.1.4: "Use estimation techniques to calculate the required test effort."
loAr:
  FL-5.1.4: "تستخدم تقنيات التقدير لحساب جهد الاختبار المطلوب."
takeaways:
  - "Test effort estimation predicts the amount of test-related work; an estimate is based on assumptions and always has an error."
  - "Estimating small tasks is usually more accurate, so break large tasks down."
  - "Metrics-based: estimation based on ratios and extrapolation."
  - "Expert-based: Wideband Delphi (and its variant Planning Poker) and three-point estimation."
  - "Three-point estimation: E = (a + 4m + b) / 6, with standard deviation SD = (b − a) / 6."
takeawaysAr:
  - "تقدير جهد الاختبار يتوقّع حجم العمل المرتبط بالاختبار؛ والتقدير مبني على افتراضات وفيه خطأ دائمًا."
  - "تقدير المهام الصغيرة عادة أدق، لذلك قسّم المهام الكبيرة."
  - "تقنيات مبنية على المقاييس: التقدير بالنسب، والاستقراء."
  - "تقنيات مبنية على الخبراء: Wideband Delphi (ومنها Planning Poker)، والتقدير بثلاث نقاط."
  - "التقدير بثلاث نقاط: E = (a + 4m + b) / 6، والانحراف المعياري SD = (b − a) / 6."
terms:
  - en: "Estimation Based on Ratios"
    ar: "التقدير بالنسب"
    def: "A metrics-based technique that uses historical ratios, such as development-to-test effort, to estimate test effort for a new project."
    defAr: "تقنية مبنية على المقاييس تستخدم نسبًا تاريخية، مثل نسبة جهد التطوير إلى الاختبار، لتقدير جهد الاختبار لمشروع جديد."
  - en: "Extrapolation"
    ar: "الاستقراء"
    def: "A metrics-based technique that uses measurements from early in the current project to estimate the remaining work."
    defAr: "تقنية مبنية على المقاييس تستخدم قياسات من بداية المشروع الحالي لتقدير العمل المتبقي."
  - en: "Wideband Delphi"
    ar: "Wideband Delphi"
    def: "An iterative, expert-based technique in which experts estimate in isolation, discuss deviations and re-estimate until they reach consensus."
    defAr: "تقنية تكرارية مبنية على الخبراء، يقدّر فيها الخبراء بشكل منفرد، ثم يناقشون الفروق ويعيدون التقدير حتى التوافق."
  - en: "Planning Poker"
    ar: "Planning Poker"
    def: "A variant of Wideband Delphi in which estimates are made with cards, typically with Fibonacci-like numbers."
    defAr: "صيغة من Wideband Delphi تُعطى فيها التقديرات ببطاقات، غالبًا بأرقام تشبه متتالية فيبوناتشي."
  - en: "Three-point Estimation"
    ar: "التقدير بثلاث نقاط"
    def: "An expert-based technique using optimistic (a), most likely (m) and pessimistic (b) estimates: E = (a + 4m + b) / 6."
    defAr: "تقنية مبنية على الخبراء تستخدم التقدير المتفائل (a) والأرجح (m) والمتشائم (b): E = (a + 4m + b) / 6."
    match: ["Three-point Estimation", "three-point estimation"]
---
**تقدير جهد الاختبار** هو توقّع حجم العمل المرتبط بالاختبار المطلوب لتحقيق أهداف مشروع الاختبار. من المهم أن يكون واضحًا لأصحاب المصلحة أن **التقدير مبني على افتراضات**، وأنه **دائمًا معرّض للخطأ**.

تقدير المهام الصغيرة عادة **أدق** من المهام الكبيرة. لذلك، عند تقدير مهمة كبيرة، يمكن **تقسيمها** إلى مهام أصغر تُقدَّر كلٌّ منها.

يذكر المنهج أربع تقنيات:

<figure class="gx-figure gx-spectrum" aria-label="Four estimation techniques."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Estimation based on ratios</b><span>Metrics-based. Uses historical ratios from similar projects.</span></div><div class="gx-spectrum-item"><b>Extrapolation</b><span>Metrics-based. Uses measurements from early in the current project.</span></div><div class="gx-spectrum-item"><b>Wideband Delphi</b><span>Expert-based. Isolated estimates, discuss, repeat until consensus.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Three-point estimation</b><span>Expert-based. a, m, b → E = (a + 4m + b) / 6.</span></div></div><figcaption>Four estimation techniques.</figcaption></figure>

### التقدير بالنسب — Estimation Based on Ratios

تقنية **مبنية على المقاييس**. تُجمع أرقام من مشاريع سابقة داخل المؤسسة، ثم تُستخرج **نسب «معيارية»** لمشاريع مشابهة. نسب المؤسسة نفسها هي عادة أفضل مصدر.

**مثال:** إذا كانت نسبة جهد التطوير إلى جهد الاختبار في مشروع سابق **3:2**، وجهد التطوير في المشروع الحالي **600 يوم-شخص**، فجهد الاختبار المقدّر = 600 × 2 ÷ 3 = **400 يوم-شخص**.

### الاستقراء — Extrapolation

تقنية **مبنية على المقاييس**. تُجمع القياسات **في أبكر وقت ممكن من المشروع الحالي** لجمع البيانات. عند توفر ملاحظات كافية، يمكن تقريب الجهد المطلوب للعمل المتبقي باستقراء هذه البيانات، وغالبًا بتطبيق نموذج رياضي.

مناسبة جدًا للتطوير التكراري. مثلًا: يُقدَّر جهد الاختبار في الدورة القادمة كمتوسط الجهد في **آخر ثلاث دورات**.

### تقنية دلفي واسعة النطاق — Wideband Delphi

تقنية **تكرارية مبنية على الخبراء**:

1. كل خبير يقدّر الجهد **بشكل منفرد**.
2. تُجمع النتائج. إذا كانت هناك فروق خارج حدود متفق عليها، **يناقش الخبراء** تقديراتهم الحالية.
3. يُطلب من كل خبير تقدير جديد بناءً على هذه التغذية الراجعة، **بشكل منفرد** مرة أخرى.
4. تتكرر العملية حتى الوصول إلى **توافق**.

**Planning Poker** صيغة من Wideband Delphi، شائعة في تطوير Agile. تُعطى التقديرات عادة ببطاقات عليها أرقام تمثّل حجم الجهد.

### التقدير بثلاث نقاط — Three-point Estimation

تقنية **مبنية على الخبراء**. يقدّم الخبراء ثلاثة تقديرات:

- **a:** التقدير الأكثر تفاؤلًا.
- **m:** التقدير الأرجح.
- **b:** التقدير الأكثر تشاؤمًا.

**التقدير النهائي: E = (a + 4m + b) / 6**

ميزة هذه التقنية أنها تسمح بحساب **خطأ القياس**: **SD = (b − a) / 6**.

**مثال:** a = 6، m = 9، b = 18 ساعة-شخص ← E = (6 + 36 + 18) / 6 = **10**، وSD = (18 − 6) / 6 = **2**. فالتقدير النهائي **10 ± 2 ساعة-شخص**، أي بين 8 و12.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="est" data-config="{&quot;title&quot;:&quot;Three-point estimate calculator&quot;,&quot;spec&quot;:&quot;Change a, m and b and watch E and the standard deviation update.&quot;,&quot;a&quot;:6,&quot;m&quot;:9,&quot;b&quot;:18,&quot;unit&quot;:&quot;person-hours&quot;,&quot;caption&quot;:&quot;Notice how a very pessimistic b moves E less than m does: m is weighted four times.&quot;}" aria-label="Three-point estimate calculator"><figcaption>Interactive: Three-point estimate calculator</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K3 questions are calculations. For ratios, apply the ratio in the right direction (test effort = development effort × test part ÷ development part). For three-point, compute E = (a + 4m + b) / 6 and, if asked, SD = (b − a) / 6.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة K3 هنا حسابية. في النسب، طبّق النسبة بالاتجاه الصحيح (جهد الاختبار = جهد التطوير × جزء الاختبار ÷ جزء التطوير). وفي الثلاث نقاط، احسب E = (a + 4m + b) / 6، وإذا طُلب، SD = (b − a) / 6.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Using a simple average (a + m + b) / 3 for three-point estimation. The syllabus formula weights the most likely value four times and divides by six.</p><p class="gx-ar" lang="ar" dir="rtl">استخدام المتوسط البسيط (a + m + b) / 3 في التقدير بثلاث نقاط. معادلة المنهج تعطي القيمة الأرجح وزنًا مضاعفًا أربع مرات، وتقسم على ستة.</p></aside>

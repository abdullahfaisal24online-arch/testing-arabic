---
order: 4
slug: "5-1-4"
chapter: 5
group: "5.1"
section: "5.1.4"
title: "Estimation Techniques"
titleAr: "تقنيات التقدير"
objectives: "FL-5.1.4 · K3"
minutes: 20
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
في تخطيط الإصدار القادم لـ **تطبيق التوصيل** يسأل مالك المنتج: «كم يومًا يحتاج اختبار ميزة الكوبونات؟». الجواب ليس تخمينًا عشوائيًا، بل **تقدير** مبني على بيانات أو على خبرة. **تقدير جهد الاختبار (test effort estimation)** هو توقّع حجم العمل المرتبط بالاختبار المطلوب لتحقيق أهداف مشروع الاختبار. وهو أساس الجدول الزمني والميزانية في خطة الاختبار، فإن كان خاطئًا كثيرًا اختلّ كل ما بُني عليه.

### التقدير ليس وعدًا — Assumptions and Estimation Error

يشدد السيليبس على أمر مهم: يجب أن يكون **واضحًا لأصحاب المصلحة** أن التقدير **مبني على عدد من الافتراضات**، وأنه **دائمًا معرّض لخطأ التقدير**. عندما يقول المختبر «اختبار الكوبونات يحتاج 6 أيام-شخص»، فهو يفترض مثلًا أن بيئة بوابة الدفع متاحة، وأن عدد الـ defects طبيعي، وأن القصص لن تتغير. إذا سقط افتراض تغيّر التقدير. لذلك تُذكر الافتراضات مع الرقم، حتى لا يُعامل التقدير كوعد ملزم.

### قسّم لتقدّر بدقة — Decompose Large Tasks

تقدير **المهام الصغيرة** عادة **أدق** من تقدير المهام الكبيرة، لأن المهمة الصغيرة مفهومة جيدًا وفيها مجهول أقل. لذلك، عند تقدير مهمة كبيرة، **تُقسَّم إلى مهام أصغر** يُقدَّر كلٌّ منها، ثم تُجمع التقديرات. «اختبار ميزة الكوبونات» مهمة ضبابية، أما «تصميم حالات EP وBVA للكوبونات»، و«تنفيذ الاختبارات على iOS وAndroid»، و«أتمتة اختبارات الـ API» فيمكن لكل منها أن يُقدَّر بثقة أكبر. سنستخدم هذا التقسيم في المثال المحلول للتقدير بثلاث نقاط.

يصف السيليبس **أربع تقنيات**: اثنتان **مبنيتان على المقاييس (metrics-based)** تعتمدان على بيانات مقيسة، واثنتان **مبنيتان على الخبراء (expert-based)** تعتمدان على حكم أصحاب الخبرة.

<figure class="gx-figure gx-spectrum" aria-label="Four estimation techniques."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Estimation based on ratios</b><span>Metrics-based. Uses historical ratios from similar projects.</span></div><div class="gx-spectrum-item"><b>Extrapolation</b><span>Metrics-based. Uses measurements from early in the current project.</span></div><div class="gx-spectrum-item"><b>Wideband Delphi</b><span>Expert-based. Isolated estimates, discuss, repeat until consensus.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Three-point estimation</b><span>Expert-based. a, m, b → E = (a + 4m + b) / 6.</span></div></div><figcaption>Four estimation techniques.</figcaption></figure>

### التقدير بالنسب — Estimation Based on Ratios

تقنية **مبنية على المقاييس**. تُجمع أرقام من **مشاريع سابقة داخل المؤسسة**، فيمكن استخراج **نسب «معيارية»** لمشاريع مشابهة، ثم تُستخدم هذه النسب لتقدير جهد الاختبار للمشروع الجديد. ويقول السيليبس إن **نسب المؤسسة نفسها** (من بياناتها التاريخية) هي عادة **أفضل مصدر**، لأنها تعكس أدوات الفريق ومهاراته وطريقة عمله، بخلاف أرقام عامة من مؤسسات أخرى.

**مثال السيليبس:** نسبة جهد التطوير إلى جهد الاختبار في مشروع سابق **3:2**، وجهد التطوير المتوقع **600 يوم-شخص**. جهد الاختبار = 600 × 2 ÷ 3 = **400 يوم-شخص**.

**مثال محلول من تطبيق التوصيل:** في الإصدارات الثلاثة السابقة، كان مجموع جهد التطوير 75 يوم-شخص ومجموع جهد الاختبار 30 يوم-شخص.

| Step | Calculation | Result |
| --- | --- | --- |
| 1. Historical ratio dev : test | 75 : 30 | 5 : 2 |
| 2. New feature dev effort | Coupons feature | 20 person-days |
| 3. Test effort | 20 × 2 ÷ 5 | **8 person-days** |

**حالة خادعة:** انتبه إلى ما تمثّله النسبة. لو قيل «الاختبار يمثّل 40% من الجهد الكلي (تطوير + اختبار)»، وجهد التطوير 30 يوم-شخص، فالتطوير هو 60% من الكل. الجهد الكلي = 30 ÷ 0.6 = 50، وجهد الاختبار = 50 × 0.4 = **20 يوم-شخص**، وليس 30 × 0.4 = 12.

### الاستقراء — Extrapolation

تقنية **مبنية على المقاييس** أيضًا، لكن بياناتها تأتي من **المشروع الحالي نفسه**: تُجرى القياسات **في أبكر وقت ممكن** لجمع البيانات، وعند توفر **ملاحظات كافية** يُقرَّب الجهد المطلوب للعمل المتبقي **باستقراء هذه البيانات**، وعادة بتطبيق **نموذج رياضي**. ويصفها السيليبس بأنها **مناسبة جدًا لدورات الحياة التكرارية**، لأن كل دورة تعطي قياسًا جديدًا. مثاله: يقدّر الفريق جهد الاختبار في الدورة القادمة **كمتوسط الجهد في آخر ثلاث دورات**.

لماذا «أبكر وقت ممكن»؟ لأن الاستقراء يحتاج **ملاحظات كافية** قبل أن يصبح موثوقًا؛ قياس sprint واحد قد يكون استثنائيًا، أما ثلاثة sprints فتعطي اتجاهًا أوضح. وكلما بدأ الفريق القياس مبكرًا، أصبح لديه تاريخ أطول يبني عليه.

**مثال محلول 1 (متوسط آخر ثلاث دورات):**

| Sprint | Test effort (person-hours) |
| --- | --- |
| Sprint 1 | 30 |
| Sprint 2 | 42 |
| Sprint 3 | 45 |
| Sprint 4 | 48 |

التقدير للـ sprint 5 = (42 + 45 + 48) ÷ 3 = **45 ساعة-شخص**. لاحظ أن الـ sprint 1 لا يدخل الحساب؛ استخدامه يعطي (30 + 42 + 45 + 48) ÷ 4 = 41.25، وهو جواب خاطئ إذا طُلب «آخر ثلاث دورات».

**مثال محلول 2 (نموذج خطي):** في اختبار الانحدار قبل النشر نُفذت 40 حالة من أصل 160 في 10 ساعات، أي 0.25 ساعة لكل حالة. الحالات المتبقية 120، فالجهد المتبقي ≈ 120 × 0.25 = **30 ساعة**. النموذج هنا يفترض أن الحالات المتبقية بصعوبة الحالات المنفذة؛ وهذا افتراض يجب ذكره.

### تقنية دلفي واسعة النطاق — Wideband Delphi

تقنية **تكرارية مبنية على الخبراء**؛ يقدّم فيها الخبراء تقديرات **مبنية على الخبرة**:

1. كل خبير يقدّر الجهد **بشكل منفرد**، حتى لا يتأثر برأي غيره.
2. تُجمع النتائج. إذا كانت هناك تقديرات **خارج حدود متفق عليها**، **يناقش الخبراء** تقديراتهم الحالية، فيشرح صاحب القيمة الشاذة ما يعرفه أو ما فاته.
3. يُطلب من كل خبير **تقدير جديد** بناءً على هذه التغذية الراجعة، **بشكل منفرد** مرة أخرى.
4. تتكرر العملية حتى الوصول إلى **توافق (consensus)**.

**مثال محلول:** ثلاثة خبراء يقدّرون اختبار ميزة تتبّع الطلب على الخريطة، والحد المتفق عليه أن تكون التقديرات ضمن ±20% من متوسطها.

| Round | Developer | Tester 1 | Tester 2 | Within range? |
| --- | --- | --- | --- | --- |
| 1 | 4 days | 6 days | 14 days | No |
| 2 | 8 days | 9 days | 10 days | Yes → consensus ≈ 9 days |

في الجولة الأولى شرح المختبر الثاني أن خدمة الخرائط طرف ثالث وتحتاج محاكاة لموقع السائق، وهو ما لم يحسبه الآخران. وشرح المطوّر أن جزءًا من المنطق مغطى باختبارات وحدات. بعد النقاش اقتربت التقديرات المنفردة الجديدة.

لماذا التقدير **المنفرد** في كل جولة؟ لأن التقدير الجماعي المفتوح يتأثر بأقوى صوت في الغرفة أو بأول رقم يُقال. العزل يحافظ على استقلال كل رأي، والنقاش بين الجولات ينقل **المعرفة** لا الضغط. والقيمة الحقيقية للتقنية أن الفروق الكبيرة تكشف افتراضات مخفية، كما في المثال: خدمة الخرائط الخارجية.

**Planning Poker** صيغة من Wideband Delphi، **شائعة في تطوير Agile**. تُعطى التقديرات عادة **ببطاقات عليها أرقام تمثّل حجم الجهد** (مثل 1، 2، 3، 5، 8، 13). يكشف الجميع بطاقاتهم في وقت واحد، وهذا يحقق شرط التقدير المنفرد، ثم يناقش صاحبا أعلى وأدنى بطاقة أسبابهما، ويُعاد الكشف.

### التقدير بثلاث نقاط — Three-point Estimation

تقنية **مبنية على الخبراء**. يقدّم الخبراء ثلاثة تقديرات:

- **a:** التقدير **الأكثر تفاؤلًا**.
- **m:** التقدير **الأرجح**.
- **b:** التقدير **الأكثر تشاؤمًا**.

**التقدير النهائي E** هو **متوسطها الحسابي الموزون**. في الصيغة الأشهر: **E = (a + 4m + b) / 6**. القيمة الأرجح تأخذ وزن 4، والطرفان وزن 1 لكل منهما، فالمجموع 6. وميزة هذه التقنية أنها تسمح للخبراء بحساب **خطأ القياس**: **SD = (b − a) / 6**؛ كلما اتسعت المسافة بين المتفائل والمتشائم زاد عدم اليقين.

لماذا وزن 4 للقيمة الأرجح؟ لأنها الأكثر احتمالًا في الواقع، بينما التقديران الطرفيان حالتان نادرتان. ومع ذلك يدخلان الحساب، فإن كان المتشائم بعيدًا جدًا رفع E قليلًا، وهذا منطقي: المهمة التي قد تتعثر كثيرًا تستحق تقديرًا أكبر من مجرد القيمة الأرجح.

**مثال السيليبس:** a = 6، m = 9، b = 18 ساعة-شخص ← E = (6 + 36 + 18) / 6 = **10**، وSD = (18 − 6) / 6 = **2**. فالتقدير النهائي **10 ± 2 ساعة-شخص**، أي بين 8 و12.

### خطوات التطبيق — Step by Step

1. **قسّم** العمل الكبير إلى مهام صغيرة.
2. **اختر التقنية** حسب المتاح: بيانات تاريخية ← النسب؛ قياسات من المشروع الحالي ← الاستقراء؛ خبراء فقط ← Wideband Delphi أو الثلاث نقاط.
3. **احسب** بالمعادلة الصحيحة، وانتبه لاتجاه النسبة وللبيانات المطلوبة.
4. **اجمع** تقديرات المهام إن لزم.
5. **وثّق الافتراضات** وأبلغ أصحاب المصلحة بأن في التقدير خطأً محتملًا.

**مثال محلول بثلاث نقاط مع التقسيم (ميزة الكوبونات):**

| Task | a | m | b | E = (a + 4m + b) / 6 | SD = (b − a) / 6 |
| --- | --- | --- | --- | --- | --- |
| Design EP/BVA tests | 3 | 6 | 15 | (3 + 24 + 15) / 6 = 7 | 2 |
| Execute on iOS and Android | 7 | 10 | 19 | (7 + 40 + 19) / 6 = 11 | 2 |
| Automate coupon API tests | 2 | 5 | 14 | (2 + 20 + 14) / 6 = 6 | 2 |
| **Total E** | | | | **24 person-hours** | |

لكل مهمة: التقدير ± SD، مثلًا تصميم الاختبارات 7 ± 2 ساعة (بين 5 و9). **حالة خادعة:** لو استُخدم المتوسط البسيط للمهمة الأولى لكان (3 + 6 + 15) / 3 = **8** بدل 7؛ القيمة المتشائمة الكبيرة سحبت المتوسط البسيط إلى الأعلى، بينما الصيغة الموزونة تعطي m الوزن الأكبر.

### لا تخلط بين — Don't Confuse

| | Ratios | Extrapolation | Wideband Delphi | Three-point |
| --- | --- | --- | --- | --- |
| Category | Metrics-based | Metrics-based | Expert-based | Expert-based |
| Data source | Previous projects of the organization | Early measurements of the current project | Experts' experience, iterated | Experts' a, m, b |
| Output | Test effort from a ratio | Effort for the remaining work | Consensus estimate | E and SD |

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="est" data-config="{&quot;title&quot;:&quot;Three-point estimate calculator&quot;,&quot;spec&quot;:&quot;Change a, m and b and watch E and the standard deviation update.&quot;,&quot;a&quot;:6,&quot;m&quot;:9,&quot;b&quot;:18,&quot;unit&quot;:&quot;person-hours&quot;,&quot;caption&quot;:&quot;Notice how a very pessimistic b moves E less than m does: m is weighted four times.&quot;}" aria-label="Three-point estimate calculator"><figcaption>Interactive: Three-point estimate calculator</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team uses two techniques together: Planning Poker in sprint planning for each story, and extrapolation from the last three sprints as a sanity check. If the poker total is far above what the team has delivered recently, they discuss which assumptions differ before committing.</p><p class="gx-ar" lang="ar" dir="rtl">يستخدم فريق تطبيق التوصيل تقنيتين معًا: Planning Poker في تخطيط الـ sprint لكل قصة، والاستقراء من آخر ثلاثة sprints كفحص للمعقولية. إذا كان مجموع تقديرات البوكر أعلى بكثير مما أنجزه الفريق مؤخرًا، يناقش الفريق أي الافتراضات مختلفة قبل الالتزام.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K3 questions are calculations. For ratios, apply the ratio in the right direction (test effort = development effort × test part ÷ development part). For three-point, compute E = (a + 4m + b) / 6 and, if asked, SD = (b − a) / 6.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة K3 هنا حسابية. في النسب، طبّق النسبة بالاتجاه الصحيح (جهد الاختبار = جهد التطوير × جزء الاختبار ÷ جزء التطوير). وفي الثلاث نقاط، احسب E = (a + 4m + b) / 6، وإذا طُلب، SD = (b − a) / 6.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Using a simple average (a + m + b) / 3 for three-point estimation. The syllabus formula weights the most likely value four times and divides by six.</p><p class="gx-ar" lang="ar" dir="rtl">استخدام المتوسط البسيط (a + m + b) / 3 في التقدير بثلاث نقاط. معادلة المنهج تعطي القيمة الأرجح وزنًا مضاعفًا أربع مرات، وتقسم على ستة.</p></aside>

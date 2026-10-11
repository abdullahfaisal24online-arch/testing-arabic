---
order: 2
slug: "3-1-2"
chapter: 3
group: "3.1"
section: "3.1.2"
title: "Identify Hallucinations, Reasoning Errors and Biases in LLM Output"
titleAr: "كشف الهلوسة وأخطاء الاستدلال والتحيز في مخرجات النماذج"
objectives: "GenAI-3.1.2 · K3 / HO-3.1.2a · H1 / HO-3.1.2b · H1"
minutes: 26
lo:
  GenAI-3.1.2: "Identify hallucinations, reasoning errors and biases in LLM output."
  HO-3.1.2a: "Experiment with hallucinations when using GenAI for testing."
  HO-3.1.2b: "Experiment with reasoning errors when using GenAI for testing."
loAr:
  GenAI-3.1.2: "تحدد الهلوسة وأخطاء الاستدلال والتحيز في ناتج النماذج اللغوية."
  HO-3.1.2a: "تجرّب الهلوسة عند استخدام GenAI في الاختبار."
  HO-3.1.2b: "تجرّب أخطاء الاستدلال عند استخدام GenAI في الاختبار."
takeaways:
  - "Hallucinations: cross-verify against sources, consult domain experts, check consistency."
  - "Reasoning errors: validate the logic, and test the output by actually running it."
  - "Biases: review fairness and representation against the test strategy, and look for under-represented test types."
  - "The estimated risk decides which detection methods you actually use."
  - "Detection is done by review, or by review combined with automated verification; automation flags, people decide."
takeawaysAr:
  - "الهلوسة: تحقّق متقاطع مع المصادر، واستشر خبراء المجال، وافحص الاتساق."
  - "أخطاء الاستدلال: تحقّق من المنطق، واختبر الناتج بتشغيله فعلًا."
  - "التحيز: راجع العدالة والتمثيل مقابل استراتيجية الاختبار، وابحث عن أنواع اختبار ضعيفة التمثيل."
  - "مستوى الخطر المقدّر هو ما يحدد طرق الكشف التي تستخدمها فعلًا."
  - "يتم الكشف بالمراجعة، أو بالمراجعة مع تحقق آلي؛ الأتمتة تنبّه، والإنسان يقرّر."
terms:
  - en: "Cross-verification"
    ar: "التحقق المتقاطع"
    def: "Comparing generated output with documentation, requirements and known system behaviour to flag discrepancies."
    defAr: "مقارنة الناتج المولّد بالوثائق والمتطلبات والسلوك المعروف للنظام لإظهار الاختلافات."
---
في القسم 3.1.1 تعرّفت على المشكلات الثلاث: **الهلوسة (Hallucination)**، و**أخطاء الاستدلال (Reasoning Errors)**، و**التحيز (Bias)**. هذا القسم ينتقل من التعريف إلى المهارة: كيف **تكتشفها** في ناتج حقيقي أمامك؟ يقول المنهج إن الدمج الفعّال لأنظمة GenAI في الاختبار **يتطلب القدرة على كشف** هذه المشكلات، وإن طريقة الكشف **تختلف بحسب نوع المشكلة**. ولهذا الهدف مستوى **K3**: ستُعطى ناتجًا من نموذج، وعليك أن تحدد نوع الخلل فيه، وأن تختار طريقة الكشف المناسبة له.

لماذا يهم هذا المختبِر بالذات؟ لأن ناتج النموذج يبدو دائمًا واثقًا ومرتبًا. حالة اختبار مكتوبة بلغة سليمة، بمعرّف ونتيجة متوقعة، لا تكشف بمظهرها أنها مبنية على متطلب غير موجود. المختبِر الذي يقبل الناتج كما هو ينقل الخلل إلى testware الفريق، ثم إلى قرارات الإصدار.

يصف المنهج الطرق الشائعة بأنها تُطبَّق **عبر المراجعة (review)**، أو عبر **مزيج من المراجعة والتحقق الآلي (automated verification)**. القاعدة العملية: الأداة الآلية تُظهر الاختلاف وتنبّه إليه، والإنسان يحكم هل هو خلل فعلًا.

| Problem | Detection approach | Typical support |
|---|---|---|
| Hallucination | Cross-verification | Review + automated cross-referencing with trusted data sources |
| Hallucination | Domain expertise consultation | Review by subject matter experts |
| Hallucination | Consistency checks | Review + automated pattern and inconsistency flagging |
| Reasoning error | Logical validation | Review cycles; tools help, complex cases need human judgment |
| Reasoning error | Output testing | Running the testware; partly or fully automated |
| Bias | Fairness and representation review | Review against test strategy and coverage requirements |
| Bias | Test-type coverage assessment | Review of which test types are under-represented |

### كشف الهلوسة — Detecting Hallucinations

الهلوسة ناتج **لا يستند إلى مصدر**: معلومة مختلقة، أو حالة اختبار لمعيار قبول غير موجود. لذلك تعتمد طرق كشفها الثلاث على سؤال واحد: **ما المصدر الذي يسند هذا السطر؟**

**التحقق المتقاطع — Cross-verification**

تقارن الناتج المولَّد بـ**الوثائق الموجودة، والمتطلبات، والسلوك المعروف للنظام**. ويضيف المنهج أن **الأدوات الآلية يمكن أن تساعد** في مقارنة الناتج بمصادر بيانات معتمدة، **لإظهار الاختلافات (flag discrepancies)**.

**لماذا ينجح؟** لأن الهلوسة تعيش في الفجوة بين ما يقوله النموذج وما تقوله المصادر. عندما تطلب ربط كل سطر بمصدره، يظهر السطر اليتيم فورًا.

**مثال من تطبيق التوصيل:** يولّد النموذج 18 حالة اختبار لملحمة الكوبونات. يربط المختبِر كل حالة بمعرّف قصة المستخدم التي تغطيها. حالتان تتحققان من أن «الكوبون صالح للطلب الأول فقط»، ولا توجد أي قصة تذكر ذلك. هذه حالات تتحقق من **معيار قبول غير موجود**، أي هلوسة. عمليًا، يمكن أتمتة جزء من هذا الفحص: script صغير يتأكد أن كل حالة تحمل معرّف متطلب موجودًا فعلًا في قائمة المتطلبات، وينبّه إلى الحالات التي بلا معرّف.

**استشارة خبراء المجال — Domain Expertise Consultation**

تُشرك **خبراء الموضوع (subject matter experts)** للتحقق من دقة المحتوى المولَّد. ويؤكد المنهج أن خبرتهم **ضرورية لالتقاط التفاصيل الدقيقة** التي قد تفوت الأنظمة الآلية.

**لماذا نحتاجهم؟** لأن بعض الهلوسات لا تتعارض مع أي وثيقة مكتوبة، فهي تملأ فراغًا سكتت عنه الوثائق بافتراض معقول الشكل. الأداة لا تجد شيئًا تقارن به، أما الخبير فيعرف كيف يعمل المجال فعلًا.

**مثال:** يقترح النموذج حالات للوحة تحكم المطعم، منها أن المطعم يستطيع تعديل قيمة الطلب بعد قبوله. الوثائق لا تذكر هذا لا نفيًا ولا إثباتًا، فلا يكشفه التحقق المتقاطع الآلي. مالك المنتج، بصفته خبير المجال في الفريق، هو من يقرر أن هذه الميزة غير موجودة، فتُحذف الحالة.

**فحوص الاتساق — Consistency Checks**

تتحقق أن المخرجات **متّسقة بعضها مع بعض**، و**متّسقة مع المعلومات المعروفة**. ويذكر المنهج أن **الأنظمة الآلية يمكن أن تساعد** في اكتشاف الأنماط والتنبيه إلى التناقضات.

**مثال:** في ناتج واحد، الحالة TC-07 تتوقع توصيلًا مجانيًا لطلب قيمته 22.00 مع كوبون 20%، والحالة TC-12 تتوقع رسوم 1.50 للوضع نفسه تقريبًا. الحالتان لا يمكن أن تصحّا معًا، وهذا تناقض **بين المخرجات**. ثم تحسم **المعلومة المعروفة** الأمر: حد التوصيل المجاني يُفحص على قيمة الطلب قبل الخصم، فالصحيحة هي TC-07. ومثال آخر على التناقض **مع المعلومات المعروفة**: حالة تنقل الطلب إلى حالة «Ready for pickup»، وهي حالة غير موجودة في دورة حالات الطلب المعروفة.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating repetition as proof. A claim that appears in several answers is not true just because it repeats.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار التكرار دليلًا. المعلومة التي تظهر في عدة إجابات ليست صحيحة لمجرد أنها تتكرر.</p></aside>

### كشف أخطاء الاستدلال — Detecting Reasoning Errors

خطأ الاستدلال يختلف عن الهلوسة: المعلومات قد تكون صحيحة كلها، لكن **الاستنتاج المبني عليها خاطئ**، في السبب والنتيجة، أو الشروط، أو ترتيب الخطوات. لذلك لا يكفي البحث عن المصدر؛ يجب فحص **المنطق نفسه** أو **تشغيل الناتج**.

**التحقق المنطقي — Logical Validation**

تقيّم **التسلسل المنطقي** للمحتوى المولَّد، أي اتساقه وترابطه وبنية استدلاله، من حيث الترابط والصحة، عبر **دورات مراجعة (review cycles)**. ويقول المنهج إن **الأدوات الآلية يمكن أن تساعد، لكن الحالات المعقّدة قد تحتاج حكمًا بشريًا**.

**مثال على الشرط:** يكتب النموذج في النتيجة المتوقعة: «الطلب 22.00 مع كوبون 20% يصبح 17.60، وهو أقل من 20.00، إذن تُضاف رسوم التوصيل 1.50». كل رقم صحيح، والقاعدة مذكورة في السياق، لكن النموذج طبّق الشرط على القيمة الخطأ. هذا خطأ استدلال في المنطق الشرطي، ولا يظهر إلا لمن يتتبع خطوات الاستنتاج.

**مثال على الترتيب:** يقترح النموذج ترتيب تنفيذ يضع اختبار «تقييم الطلب بعد التسليم» أولًا لأنه الأعلى أولوية. لكنه يعتمد على طلب وصل إلى حالة Delivered، فالترتيب غير قابل للتنفيذ.

**اختبار الناتج — Output Testing**

**تشغّل** حالات الاختبار أو test scripts المولَّدة على **موضوع الاختبار (test object)**، وتتحقق من نتائج الاختبار. ويمكن أن يكون ذلك **مؤتمتًا جزئيًا أو كليًا، بحسب نوع الـ testware المولَّد**.

**لماذا ينجح؟** لأن التنفيذ لا يجامل. script يبدو منطقيًا قد يفشل عند التشغيل لأنه ينتظر حالة Preparing قبل Accepted. **مثال على اختلاف درجة الأتمتة:** test script للدفع بالبطاقة يُشغَّل آليًا في بيئة الاختبار عبر الـ CI pipeline، أما حالات الاختبار اليدوية لواجهة العربية فينفّذها المختبِر بنفسه على التطبيق، ويقارن النتائج الفعلية بالمتوقعة.

### كشف التحيز — Detecting Biases

التحيز لا يظهر غالبًا في حالة واحدة، بل في **مجموع الناتج**: ما الذي يتكرر كثيرًا، وما الذي يغيب. لذلك يُكشف بالنظر إلى المجموعة كاملة مقابل مرجع واضح.

**مراجعة العدالة والتمثيل — Fairness and Representation Review**

تراجع هل يمثّل الـ testware المولَّد، مثل **شيفرة الاختبار** أو **بيانات الاختبار التركيبية (synthetic test data)**، **استراتيجية الاختبار المحددة ومتطلبات التغطية** تمثيلًا عادلًا ودقيقًا.

**مثال:** يولّد النموذج 50 عميلًا تركيبيًا: كل الأسماء والعناوين بالإنجليزية، وكلهم يدفعون بالبطاقة. استراتيجية الفريق تتطلب واجهتين، عربية وإنجليزية، وثلاث طرق دفع. كل سجل صحيح بمفرده، لكن المجموعة متحيزة، لأن النقد والمحفظة الرقمية والأسماء العربية غائبة.

**تقييم التحيز في أنواع الاختبار — Test-Type Bias**

تقيّم التحيز المرتبط بـ**أنواع الاختبار**، مثل **ضعف تمثيل الاختبارات غير الوظيفية** في ناتج النموذج.

**مثال:** من 60 حالة مولّدة لميزة الطلب، 58 وظيفية. لا شيء عن الأداء وقت ذروة الغداء، ولا عن قابلية الوصول، ولا عن عرض الواجهة من اليمين إلى اليسار. هذا تحيز نحو الاختبار الوظيفي يكشفه عدّ الحالات حسب نوع الاختبار.

### الخطر يحدد عمق الكشف — Risk-Based Depth

يختم المنهج بأن **التطبيق الفعلي لطرق الكشف يعتمد على مستوى الخطر المقدَّر** للهلوسة أو أخطاء الاستدلال أو التحيز في المهمة المنفّذة بـ GenAI. أي أنك لا تطبّق الطرق السبع على كل ناتج.

| Task | Estimated risk | Detection depth |
|---|---|---|
| Brainstorm exploratory test ideas | Low | Quick relevance review |
| Test cases for coupons and delivery fees | High (money) | Cross-verification + consistency checks + logical validation |
| Synthetic customer data for release testing | Medium (coverage) | Representation review against the strategy |
| Automated payment scripts for the CI pipeline | High | Code review + output testing |

### خطوات التطبيق — Step by Step

1. **حدّد المهمة وخطرها**: ما أثر الخطأ لو مرّ؟ هذا يحدد العمق.
2. **ابحث عن المصدر لكل سطر**: سطر بلا مصدر أو مخالف للمصدر ← **هلوسة** (تحقق متقاطع، خبير، اتساق).
3. **تتبّع الاستنتاج**: المعطيات صحيحة والنتيجة خاطئة ← **خطأ استدلال** (تحقق منطقي، تشغيل الناتج).
4. **انظر إلى المجموعة كاملة**: ما الذي يتكرر وما الذي يغيب مقارنة بالاستراتيجية؟ ← **تحيز**.
5. **وثّق كل خلل** مع نوعه وطريقة كشفه، ثم صحّح أو أعد التوليد وراجع مرة أخرى.

### أمثلة محلولة — Worked Examples

**المثال 1: مراجعة حالات الاختبار لملحمة الكوبونات**

| Generated item | Problem type | How it was found |
|---|---|---|
| "Coupon valid on first order only" | Hallucination | Cross-verification: no requirement |
| Order moves to a "Ready for pickup" state | Hallucination | Consistency with known behaviour |
| 22.00 with 20% coupon → fee 1.50 | Reasoning error | Logical validation of the condition |
| Script waits for Preparing before Accepted | Reasoning error | Output testing: the run fails |
| All 18 cases use card payment | Bias | Representation review vs. strategy |

**المثال 2: مراجعة خطة تنفيذ مولّدة**

| Generated item | Problem type | How it was found |
|---|---|---|
| Rating test scheduled before placing an order | Reasoning error | Logical validation of dependencies |
| Estimate cites a "team velocity of 40 points" not in any data given | Hallucination | Cross-verification with the inputs |
| No performance or accessibility tests planned | Bias (test types) | Test-type coverage assessment |

**حالة خادعة 1:** حالة تتوقع توصيلًا مجانيًا لطلب 22.00 مع كوبون يخفّضه إلى 17.60. قد يظنها المراجع المستعجل خطأ، لكنها **صحيحة**، لأن الحد يُفحص قبل الخصم. الكشف الجيد يعني الرجوع إلى المصدر، لا الحكم من الانطباع.

**حالة خادعة 2:** أصلحت توجيهك فاختفت حالة «الطلب الأول فقط»، ثم ظهرت مرة أخرى في محادثة جديدة مع النموذج نفسه. هذا متوقع بسبب **السلوك غير الحتمي** للنماذج (انظر 3.1.4)، ولذلك لا تعني نتيجة نظيفة واحدة أن الخلل انتهى؛ أعد الفحص في كل تشغيل.

### لا تخلط بين — Don't Confuse

| | Hallucination | Reasoning error | Bias |
|---|---|---|---|
| What is wrong | Content with no source, or wrong facts | Wrong conclusion from correct facts | Skewed balance across the whole output |
| Visible in one item? | Usually yes | Yes, when you trace the logic | Usually only across the set |
| Main detection | Cross-verification, experts, consistency | Logical validation, output testing | Representation and test-type review |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app testers asked a model for synthetic customers for release testing. It produced 100 records, all with English names and card payments. Each record was valid, but the test strategy requires Arabic and English and all three payment methods, so the set was biased. They now check the generated data against the strategy before using it. Count is not diversity.</p><p class="gx-ar" lang="ar" dir="rtl">طلب مختبرو تطبيق التوصيل من نموذج بيانات عملاء تركيبية لاختبار الإصدار. أنتج 100 سجل، كلها بأسماء إنجليزية ودفع بالبطاقة. كل سجل كان صحيحًا، لكن استراتيجية الاختبار تتطلب العربية والإنجليزية وطرق الدفع الثلاث، فكانت المجموعة متحيزة. صاروا الآن يقارنون البيانات المولّدة بالاستراتيجية قبل استخدامها. العدد ليس تنوّعًا.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">How deep you check depends on the estimated risk of hallucinations, reasoning errors or biases for that task. A brainstorm of test ideas needs a lighter review than expected results for a payment calculation.</p><p class="gx-ar" lang="ar" dir="rtl">عمق الفحص يعتمد على الخطر المقدّر للهلوسة أو أخطاء الاستدلال أو التحيز في تلك المهمة. عصف أفكار لحالات الاختبار يحتاج مراجعة أخف من النتائج المتوقعة لعملية حساب دفع.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">GenAI-3.1.2 is K3 (in v1.1 the verb is “Identify”). Map the method to the problem: cross-verification, domain experts and consistency checks for hallucinations; logical validation and executing the output for reasoning errors; fairness and representation review and test-type coverage for biases.</p><p class="gx-ar" lang="ar" dir="rtl">الهدف GenAI-3.1.2 من مستوى K3 (وفي v1.1 الفعل «Identify»). طابق الطريقة مع المشكلة: التحقق المتقاطع وخبراء المجال وفحص الاتساق للهلوسة؛ التحقق المنطقي وتشغيل الناتج لأخطاء الاستدلال؛ مراجعة العدالة والتمثيل وتغطية أنواع الاختبار للتحيز.</p></aside>

يطلب المنهج في التجربة الأولى مواجهة **نموذجين على الأقل** بموقف يدفعهما إلى اختلاق عناصر غير ذات صلة، مثل معايير لا وجود لها في البيانات السياقية المعطاة، ثم تجربة **صيغ توجيه مختلفة** لمعرفة أثر التوجيه على الهلوسة.

<section class="gx-lab" data-lab="HO-3.1.2a"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Experiment · Provoke a Hallucination</span><span class="gx-ar" lang="ar" dir="rtl">تجربة · استدرج هلوسة</span></span><span class="gx-lab-meta">HO-3.1.2a · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Given rules:</strong> email is required and unique; password is 12–64 characters.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>القواعد المعطاة:</strong> البريد إلزامي وفريد؛ كلمة المرور من 12 إلى 64 محرفًا.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Give the same rules to at least two LLMs and ask for acceptance criteria with no extra constraint.</span><span class="gx-ar" lang="ar" dir="rtl">أعطِ القواعد نفسها لنموذجين على الأقل، واطلب معايير قبول دون أي قيد إضافي.</span></li><li><span class="gx-en" lang="en" dir="ltr">Repeat with: <em>“Use only the text provided, and mark anything missing as a question.”</em></span><span class="gx-ar" lang="ar" dir="rtl">أعد التجربة مع: <em>«استخدم النص المعطى فقط، وضع أي شيء ناقص كسؤال.»</em></span></li><li><span class="gx-en" lang="en" dir="ltr">Record every criterion that has no source, and compare across runs and models.</span><span class="gx-ar" lang="ar" dir="rtl">سجّل كل معيار ليس له مصدر، وقارن بين التشغيلات والنماذج.</span></li></ol><p><span class="gx-en" lang="en" dir="ltr">Additions such as “a phone number is required” or “the account locks after three attempts” are unsupported. Record what your models actually produced; do not assume a given model produces these.</span><span class="gx-ar" lang="ar" dir="rtl">إضافات مثل «يلزم رقم هاتف» أو «يُقفل الحساب بعد ثلاث محاولات» غير مسنودة. سجّل ما أنتجته نماذجك فعلًا؛ ولا تفترض أن نموذجًا معيّنًا ينتج هذه الإضافات.</span></p></div></section>

يقترح المنهج لهذه التجربة مسائل من تخطيط الاختبار، مثل **تقدير جهد الاختبار** و**ترتيب أولوية الحالات**، بمدخلات معقّدة بما يكفي لإظهار حدود النماذج، ثم مقارنة الناتج بالنتيجة الصحيحة. المثال التالي من نوع ترتيب التنفيذ والزمن.

<section class="gx-lab" data-lab="HO-3.1.2b"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Experiment · Expose a Reasoning Error</span><span class="gx-ar" lang="ar" dir="rtl">تجربة · اكشف خطأ استدلال</span></span><span class="gx-lab-meta">HO-3.1.2b · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Given:</strong> two runners. A takes 2 min. B takes 3 min and needs A. C takes 4 min and needs B. D takes 1 min and is independent.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المعطيات:</strong> منفّذان. A يستغرق دقيقتين. B يستغرق 3 دقائق ويحتاج A. C يستغرق 4 دقائق ويحتاج B. D يستغرق دقيقة وهو مستقل.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Ask an LLM, an SLM and a reasoning model for the minimum total time.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب من LLM وSLM ونموذج استدلالي الحد الأدنى للزمن الكلي.</span></li><li><span class="gx-en" lang="en" dir="ltr">Change the prompt to ask for a start/end table with dependencies, and compare.</span><span class="gx-ar" lang="ar" dir="rtl">غيّر التوجيه ليطلب جدولًا بأوقات البداية والنهاية مع الاعتماديات، وقارن.</span></li><li><span class="gx-en" lang="en" dir="ltr">Change the durations and repeat, so you are not measuring recall of one example.</span><span class="gx-ar" lang="ar" dir="rtl">غيّر المدد وأعد التجربة، حتى لا تقيس حفظ مثال واحد.</span></li></ol><details class="gx-lab-answer"><summary>Reference answer · <span class="gx-ar-inline" lang="ar" dir="rtl">الإجابة المرجعية</span></summary><p><span class="gx-en" lang="en" dir="ltr">The minimum is 9 minutes: A → B → C is a chain of 9, and D runs on the second runner during A. Dividing the 10-minute total by two runners to get 5 is a reasoning error that ignores the dependencies.</span><span class="gx-ar" lang="ar" dir="rtl">الحد الأدنى 9 دقائق: A ← B ← C سلسلة طولها 9، وD يعمل على المنفّذ الثاني أثناء A. قسمة المجموع (10 دقائق) على منفّذين للحصول على 5 خطأ استدلال يتجاهل الاعتماديات.</span></p></details></div></section>

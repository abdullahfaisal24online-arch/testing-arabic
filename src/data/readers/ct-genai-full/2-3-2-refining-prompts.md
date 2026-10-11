---
order: 10
slug: "2-3-2"
chapter: 2
group: "2.3"
section: "2.3.2"
title: "Techniques for Evaluating and Iteratively Refining Prompts"
titleAr: "أساليب تقييم التوجيهات وتحسينها تكراريًا"
objectives: "GenAI-2.3.2 · K2 / HO-2.3.2 · H1"
minutes: 15
lo:
  GenAI-2.3.2: "Explain techniques for evaluating and iteratively refining prompts."
  HO-2.3.2: "Evaluate and improve a prompt for a given test task using metrics."
loAr:
  GenAI-2.3.2: "تشرح أساليب تقييم التوجيهات وتحسينها تكراريًا."
  HO-2.3.2: "تقيّم توجيهًا لمهمة اختبار معطاة وتحسّنه باستخدام المقاييس."
takeaways:
  - "Five techniques: iterative modification, A/B testing, output analysis, user feedback, and adjusting length and specificity."
  - "A longer prompt is not always better; extra context can add noise or limit generalisation."
  - "One run of A against one run of B is not enough to pick a winner."
  - "Teams improve faster with shared prompt reviews and a shared prompt library."
  - "Output analysis looks for the type of error, so the prompt can be fixed at its cause and similar defects avoided."
takeawaysAr:
  - "خمسة أساليب: التعديل التكراري، ومقارنة A/B، وتحليل الناتج، وملاحظات المستخدمين، وضبط الطول ودرجة التحديد."
  - "التوجيه الأطول ليس دائمًا الأفضل؛ السياق الإضافي قد يضيف تشويشًا أو يحدّ من التعميم."
  - "تشغيل واحد لـ A مقابل تشغيل واحد لـ B لا يكفي لاختيار الأفضل."
  - "تتحسن الفرق أسرع بمراجعات توجيه مشتركة ومكتبة توجيهات مشتركة."
  - "تحليل الناتج يبحث عن نوع الخطأ، فيُصلَح التوجيه من أصل المشكلة وتُتجنَّب defects مشابهة."
terms:
  - en: "A/B Testing"
    ar: "مقارنة A/B"
    def: "Running two or more prompt variants against the same metrics to see which produces better results."
    defAr: "تشغيل نسختين أو أكثر من التوجيه على المقاييس نفسها لمعرفة أيها يعطي نتائج أفضل."
    match: ["A/B"]
  - en: "Prompt Library"
    ar: "مكتبة التوجيهات"
    def: "A shared collection of tested prompts that a test team or organisation reuses to standardise prompting and avoid repeated errors."
    defAr: "مجموعة مشتركة من التوجيهات المجرّبة يعيد فريق الاختبار أو المؤسسة استخدامها لتوحيد أساليب التوجيه وتجنّب الأخطاء المتكررة."
---
نادرًا ما يكون التوجيه الأول هو الأفضل. قد يفوّت حالات، أو يستخدم مصطلحات لا تناسب فريقك. لذلك يُعامَل التوجيه كأي testware: **يُختبَر، ويُقاس، ثم يُحسَّن**. في القسم 2.3.1 تعرّفنا على **المقاييس (metrics)** التي تحكم على جودة الناتج. يقول المنهج إن هذا القسم **يبني على تلك المقاييس**: فهو يقدّم **أساليب محددة لتقييم التوجيه وتحسينه** من أجل تحسين نتائج GenAI.

ولهذا الهدف مستوى **K2**: يُتوقّع منك أن تعطي أمثلة على هذه الأساليب، وأن تفهم لماذا يفيد كل منها.

### الأساليب الخمسة — The Five Techniques

| Technique | What it means | Delivery app example |
|---|---|---|
| Iterative prompt modification | Start with a base prompt, then modify it step by step based on actual results | Add the free-delivery rule and fix the term "delivery fee" |
| A/B testing of prompts | Create several prompt versions and compare them with predefined metrics | Free-text prompt vs structured prompt, compared on recall and relevance |
| Output analysis | Examine the output for inaccuracies or inconsistencies, e.g. with the test basis | Classify why some coupon test cases are wrong |
| Integrate user feedback | Ask testers how useful and clear the output is, e.g. its level of detail | The second tester says the steps are too vague to execute |
| Adjust prompt length and specificity | Try different lengths and levels of detail | Full specification vs a short, focused prompt |

### التعديل التكراري للتوجيه — Iterative Prompt Modification

**ما هو؟** تبدأ **بتوجيه أساسي (base prompt)**، ثم تعدّله **تكراريًا بناءً على النتائج الفعلية**: تضيف **سياقًا** تدريجيًا، أو تضبط **الصياغة**، مثل **المصطلحات**، لتزيد **التحديد (specificity)** و**الملاءمة (relevance)**.

**لماذا ينجح؟** التوجيه الأساسي يكشف لك ما لم يفهمه النموذج، فتعالج ما ظهر فعلًا بدل أن تخمّن كل شيء مسبقًا. والتدرّج مهم: إذا غيّرت أشياء كثيرة دفعة واحدة، فلن تعرف أي تغيير حسّن الناتج وأيها أفسده.

**مثال:** طلب المختبِر حالات اختبار لرسوم التوصيل. استخدم النموذج كلمة «shipping»، وافترض أن حد التوصيل المجاني يُفحص **بعد** خصم الكوبون. في الدورة التالية أضاف المختبِر سياقًا صريحًا: «التوصيل مجاني إذا كانت قيمة الطلب قبل أي خصم 20.00 JOD فأكثر، وإلا فالرسوم 1.50 JOD»، وطلب استخدام مصطلحات الفريق: «delivery fee» و«order value». فأصبحت الحالات أدق وأقرب إلى أساس الاختبار.

### مقارنة A/B للتوجيهات — A/B Testing of Prompts

**ما هو؟** تصوغ **عدة نسخ** من التوجيه، ثم تقيّم أيها يعطي نتائج أفضل وفق **مقاييس محددة مسبقًا**. يقول المنهج إن هذا يساعد على معرفة أي **صياغة** أو أي **بنية** للتوجيه تعطي النتائج **الأدق والأكثر ملاءمة**.

**لماذا «محددة مسبقًا»؟** لأنك إذا اخترت المقياس بعد رؤية النتائج، فستميل دون قصد إلى المقياس الذي يجعل نسختك المفضّلة تفوز. تحديد المقياس أولًا يجعل المقارنة عادلة.

**مثال:** النسخة A تعليمات نصية حرّة، والنسخة B توجيه منظّم بقيود وجدول ناتج. المقياسان المحددان مسبقًا: **الاستدعاء (recall)** على فئات التكافؤ الست لقيمة الطلب وعدد الوجبات، و**الملاءمة** مع طرق الدفع المدعومة. عمليًا، ولأن GenAI غير حتمي، شغّل كل نسخة عدة مرات على المدخلات نفسها قبل أن تحكم (انظر 2.3.1).

### تحليل الناتج — Output Analysis

**ما هو؟** تفحص الناتج بحثًا عن **أخطاء أو تناقضات**، مثلًا **مع أساس الاختبار (test basis)**. ويؤكد المنهج أن **فهم أنواع الأخطاء والتناقضات** يساعد على تحسين التوجيه **لتجنّب defects مشابهة في الدورات القادمة**.

**لماذا لا يكفي تصحيح الناتج؟** لأن تصحيح الحالات الخاطئة يدويًا يصلح هذا الناتج فقط. أما معرفة **سبب** الخطأ فتصلح التوجيه، فلا يتكرر الخطأ في المرة القادمة.

**مثال:** من 25 حالة مولّدة لميزة الكوبونات، افترضت 3 حالات الدفع عبر PayPal، وأعطت حالتان نتيجة متوقعة خاطئة عند القيمة الحدّية 20.00. الخطأ الأول معلومة مخترعة، فعلاجه أن يذكر التوجيه طرق الدفع الثلاث المدعومة صراحةً. والثاني خطأ في تطبيق الشرط، فعلاجه أن يكتب القاعدة بصيغة لا تحتمل التأويل: «20.00 فأكثر». وهذه الأنواع هي ما يفصّله الفصل 3 تحت الهلوسة وأخطاء الاستدلال.

### دمج ملاحظات المستخدمين — Integrate User Feedback

**ما هو؟** تجمع رأي **المختبرين** في **فائدة** الناتج و**وضوحه**، مثل **مستوى تفصيل** الاختبارات المولّدة، ثم **تحلّل** ملاحظاتهم وتستخدمها لتحسين التوجيه بحيث يلبّي **احتياجات الاختبار الواقعية**.

**لماذا؟** المقاييس لا ترى كل شيء. قد تكون الدقة عالية والحالات صحيحة، لكنها غير قابلة للاستخدام: خطوات عامة مثل «ادفع الطلب» لا تكفي من سينفّذها.

**مثال:** قال المختبِر الثاني في الفريق إن الحالات تفتقر إلى الشروط المسبقة وبيانات الاختبار. فأضاف زميله إلى التوجيه صيغة ناتج فيها عمودان جديدان: Preconditions وTest data.

### ضبط طول التوجيه ودرجة تحديده — Adjust Prompt Length and Specificity

**ما هو؟** تجرّب **أطوالًا ومستويات تفصيل مختلفة**. يقول المنهج: أحيانًا **يحسّن السياق الإضافي** جودة الرد، وفي حالات أخرى تعطي **التوجيهات الأقصر تعميمًا أفضل (better generalization)**.

**لماذا لا يكون الأطول دائمًا أفضل؟** السياق الإضافي يفيد عندما يكون **ذا صلة**. أما السياق الزائد فقد يشتّت النموذج، أو يجعله يلتصق بالتفاصيل المعطاة فلا يرى غيرها.

**مثال:** عندما لصق المختبِر مواصفات التطبيق كاملة لتوليد حالات الكوبونات، اقترح النموذج حالات عن تتبّع السائق لا علاقة لها بالمهمة. وعندما طلب **أفكارًا استكشافية** بتوجيه قصير، جاءت أفكار أوسع، مثل كوبون يُطبَّق ثم يُلغى الطلب.

### كيف تبدو دورة التحسين؟ — A Refinement Cycle

الأساليب تعمل معًا في دورات. مثال على توجيه يولّد حالات اختبار لقيمة الطلب وعدد الوجبات، ويُقاس بالاستدعاء والملاءمة والتنوّع:

| Iteration | Measured result | Analysis | Change made |
|---|---|---|---|
| 1 | Recall 4 of 6 partitions | Missed "below 5.00" and "more than 20 meals" | Add the minimum order and meal limits to the context |
| 2 | Recall 6 of 6, but 2 cases assume PayPal | Invented payment method | Add a constraint: only cash, card and digital wallet |
| 3 | Correct, but 30% near-duplicates | Low diversity | Ask to merge similar cases and add boundary cases |

كل دورة تغيّر شيئًا واحدًا تقريبًا، وتقيس أثره، وتسجّل السبب. هذا ما يجعل التحسين **منهجيًا** بدل تجربة عشوائية. ويصف الهدف العملي HO-2.3.2 هذا بالضبط: تبدأ بتوجيه أولي، وتحسّنه عبر **عدة دورات**، وتستخدم **مقارنة A/B** و**التحقق البشري (human verification)**، وتقيّم كل دورة بالمقاييس، لترى كيف يقود التحسين التكراري إلى حالات اختبار أكثر فعالية وملاءمة للسياق.

### الجانب الجماعي — Team Sessions and Shared Libraries

يضيف المنهج أن هذه الأساليب تمكّن فرق الاختبار من **تنظيم جلسات لتقييم التوجيهات وتحسينها**، لضمان **التحسين المستمر** للتوجيهات. و**مشاركة الممارسات** على مستوى فريق الاختبار أو مؤسسة الاختبار تحقق عدة أمور:

- **توحيد أساليب التوجيه** والحفاظ على **جودة متسقة**: لا يعتمد مستوى الناتج على من كتب التوجيه.
- **نشر ثقافة التعلّم والتحسين التكراري**.
- **تطوير منهجيات الاختبار بالذكاء التوليدي**: تبني الفرق على **الخبرة الجماعية**، و**تتجنّب الأخطاء المتكررة**، وتحسّن استخدامها لأدوات GenAI مع الوقت.

ومثال المنهج على ذلك **مشاركة مكتبات التوجيهات (prompt libraries)**. عمليًا، تفيد المكتبة أكثر عندما يُحفظ مع كل توجيه إصداره، والنموذج الذي جُرِّب عليه، ونتائج قياسه، وحدوده المعروفة.

### لا تخلط بين — Don't Confuse

| | Iterative modification | A/B testing | Output analysis | User feedback |
|---|---|---|---|---|
| Core question | What should I change next? | Which version is better? | What kind of error is this? | Is the output useful to testers? |
| Input | Results of the last run | Two or more versions, same metrics | The output vs the test basis | Testers' opinions |
| Result | A new prompt version | A chosen version | Error types to address in the prompt | Changes to detail, clarity, format |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">At the end of each sprint, the delivery app testers hold a short prompt review session: they compare the metrics of the prompts used, note the error types found, and add the improved prompts to the team library with their examples, version and known limits. Shared learning reduces repeated mistakes and keeps quality consistent across the team.</p><p class="gx-ar" lang="ar" dir="rtl">في نهاية كل sprint، يعقد مختبرو تطبيق التوصيل جلسة قصيرة لمراجعة التوجيهات: يقارنون مقاييس التوجيهات المستخدمة، ويدوّنون أنواع الأخطاء التي ظهرت، ويضيفون التوجيهات المحسّنة إلى مكتبة الفريق مع أمثلتها وإصدارها وحدودها المعروفة. التعلّم المشترك يقلل الأخطاء المتكررة ويحافظ على جودة متسقة في الفريق.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Declaring prompt B better after one run of each. Generation varies and one sample may not be representative. Use repeated runs, varied cases and a fixed evaluation reference, then explain the difference and the limits of the data.</p><p class="gx-ar" lang="ar" dir="rtl">إعلان أن التوجيه B أفضل بعد تشغيل واحد لكل منهما. التوليد يتفاوت، وقد لا تكون العينة الواحدة ممثّلة. استخدم تشغيلات متكررة وحالات متنوعة ومرجع تقييم ثابتًا، ثم فسّر الفرق وحدود البيانات.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the five techniques by name: iterative prompt modification, A/B testing of prompts, output analysis, integrating user feedback, and adjusting prompt length and specificity. Also remember the team side: regular prompt review sessions and sharing prompt libraries.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف الأساليب الخمسة بأسمائها: التعديل التكراري للتوجيه، ومقارنة A/B للتوجيهات، وتحليل الناتج، ودمج ملاحظات المستخدمين، وضبط طول التوجيه ودرجة تحديده. وتذكّر الجانب الجماعي: جلسات مراجعة التوجيهات الدورية ومشاركة مكتبات التوجيهات.</p></aside>

<section class="gx-lab" data-lab="HO-2.3.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Exercise · Improve a Prompt with A/B</span><span class="gx-ar" lang="ar" dir="rtl">تمرين · حسّن توجيهًا بمقارنة A/B</span></span><span class="gx-lab-meta">HO-2.3.2 · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>A:</strong> <em>“Generate sign-up tests.”</em><br><strong>B:</strong> the six-component prompt with the approved sign-up rules, a coverage table, and a ban on assuming new requirements.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>A:</strong> <em>«ولّد اختبارات للتسجيل.»</em><br><strong>B:</strong> التوجيه ذو المكوّنات الستة مع قواعد التسجيل المعتمدة، وجدول تغطية، ومنع افتراض متطلبات جديدة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Run each version on the same user stories, keeping the model and settings fixed where possible and recording versions.</span><span class="gx-ar" lang="ar" dir="rtl">شغّل كل نسخة على قصص المستخدم نفسها، مع تثبيت النموذج والإعدادات قدر الإمكان وتسجيل الإصدارات.</span></li><li><span class="gx-en" lang="en" dir="ltr">Repeat the runs and review against one reference: correctness of expected results, coverage, unsupported assumptions and total time.</span><span class="gx-ar" lang="ar" dir="rtl">كرّر التشغيلات وراجع النتائج مقابل مرجع واحد: صحة النتائج المتوقعة، والتغطية، والافتراضات غير المسنودة، والوقت الكلي.</span></li><li><span class="gx-en" lang="en" dir="ltr">If B improved coverage but added duplicates, adjust only the de-duplication constraint instead of rewriting everything.</span><span class="gx-ar" lang="ar" dir="rtl">إذا حسّنت B التغطية لكنها أضافت تكرارًا، عدّل قيد إزالة التكرار فقط بدل إعادة كتابة كل شيء.</span></li><li><span class="gx-en" lang="en" dir="ltr">Record each change, its reason and its result, and add the final prompt to the team library.</span><span class="gx-ar" lang="ar" dir="rtl">سجّل كل تغيير وسببه ونتيجته، وأضف التوجيه النهائي إلى مكتبة الفريق.</span></li></ol></div></section>

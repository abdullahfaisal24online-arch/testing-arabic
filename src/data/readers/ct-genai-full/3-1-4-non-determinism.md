---
order: 4
slug: "3-1-4"
chapter: 3
group: "3.1"
section: "3.1.4"
title: "Mitigation of Non-Deterministic Behavior of LLMs"
titleAr: "تخفيف السلوك غير الحتمي للنماذج اللغوية"
objectives: "GenAI-3.1.4 · K1"
minutes: 10
lo:
  GenAI-3.1.4: "Recall ways to reduce the non-deterministic behaviour of LLMs."
loAr:
  GenAI-3.1.4: "تتذكّر طرق تقليل السلوك غير الحتمي للنماذج اللغوية."
takeaways:
  - "Probabilistic sampling at inference makes outputs vary for the same input, more so for long outputs."
  - "Lowering temperature reduces randomness but also creativity and diversity."
  - "Setting a random seed, where supported, improves reproducibility."
  - "Consistency is not correctness: a stable answer can be wrong every time."
  - "Complete reproducibility cannot be guaranteed; automating parts of output verification keeps evaluation structured and consistent."
takeawaysAr:
  - "أخذ العينات الاحتمالي أثناء الاستدلال يجعل النواتج تختلف للمدخل نفسه، وأكثر مع النواتج الطويلة."
  - "خفض درجة الحرارة يقلل العشوائية، لكنه يقلل الإبداع والتنوّع أيضًا."
  - "تحديد بذرة عشوائية، حيث يُدعم ذلك، يحسّن قابلية إعادة النتائج."
  - "الاتساق ليس صحة: الإجابة الثابتة قد تكون خاطئة في كل مرة."
  - "لا يمكن ضمان إعادة النتائج بالكامل؛ وأتمتة أجزاء من التحقق من الناتج تجعل التقييم منظّمًا ومتسقًا."
terms:
  - en: "Temperature"
    ar: "درجة الحرارة"
    def: "A generation setting that controls randomness. Lower values give more consistent but less diverse output."
    defAr: "إعداد في التوليد يتحكم بالعشوائية. القيم الأقل تعطي ناتجًا أكثر اتساقًا وأقل تنوّعًا."
  - en: "Random Seed"
    ar: "البذرة العشوائية"
    def: "A value that fixes the pseudo-random sequence used in generation, where the implementation supports it."
    defAr: "قيمة تثبّت تسلسل الأعداد شبه العشوائية المستخدم في التوليد، حيث يدعم التطبيق ذلك."
---
للنماذج اللغوية **سلوك غير حتمي (Non-Deterministic Behavior)** متأصل فيها (انظر 1.1.2): قد ينتج **المدخل نفسه مخرجات مختلفة**. والسبب، كما يقول المنهج، هو **عمليات أخذ العينات الاحتمالية (probabilistic sampling)** المستخدمة أثناء **الاستدلال (Inference)**، أي أثناء توليد الإجابة. النموذج لا يختار دائمًا الكلمة الأكثر احتمالًا، بل يسحب الكلمة التالية من توزيع احتمالات، فقد يسلك طريقًا مختلفًا في كل تشغيل.

النتيجة أن الحصول على نتائج **متسقة وقابلة للإعادة** صعب، و**خصوصًا مع النواتج الطويلة**: كل كلمة مختلفة في البداية تغيّر ما بعدها، فيتراكم الاختلاف كلما طال الناتج.

لماذا يهمك ذلك كمختبِر؟ لأن الاختبار يقوم على قابلية التكرار. إذا شغّلت التوجيه نفسه على قصة «إلغاء الطلب» في تطبيق التوصيل مرتين، وحصلت مرة على 12 حالة ومرة على 9 حالات مختلفة، فمن الصعب أن تقارن أو تراجع أو تعيد إنتاج نتيجة. وفي تقييم التوجيهات، قد تحكم على توجيه بأنه ممتاز بناءً على تشغيل محظوظ.

يؤكد المنهج أن **إعادة النتائج بالكامل لا يمكن ضمانها**، لكنه يذكر استراتيجيتين **لتقليل التباين**:

| Strategy | Effect | Trade-off or limit |
|---|---|---|
| Lower the temperature | Narrower probability distribution, less randomness, more consistent output | Less creativity and diversity; more repetitive output |
| Set a random seed | Same pseudo-random sequence, better reproducibility | Only some implementations support it |

### خفض درجة الحرارة — Temperature

**درجة الحرارة (Temperature)** إعداد في التوليد. خفضها أثناء توليد الإجابة **يضيّق توزيع الاحتمالات**، فيقلّ احتمال اختيار الكلمات الأضعف احتمالًا، وتقلّ العشوائية، وتصبح المخرجات **أكثر اتساقًا**. المقابل الذي يذكره المنهج: **إبداع وتنوّع أقل**، ومخرجات **أكثر تكرارًا أو حتمية أكثر من اللازم**. عمليًا، لا تختر قيمة واحدة لكل المهام: استخراج قيم ثابتة لحالات رسوم التوصيل يناسبه حرارة منخفضة، أما توليد أفكار لاختبار استكشافي فيحتاج تنوّعًا أكبر.

### تحديد البذرة العشوائية — Random Seed

تسمح **بعض** تطبيقات النماذج بتحديد قيمة **بذرة (seed)** لمولّد الأعداد العشوائية. هذا يضمن استخدام **تسلسل الأعداد شبه العشوائية نفسه** (أي قيم عشوائية في ظاهرها لكنها حتمية)، فتتحسن **قابلية إعادة النتائج**. عمليًا، البذرة لا تضمن تطابق النتائج إذا تغيّر النموذج أو الخدمة أو الإعدادات.

### ربط ذلك بالهلوسة والاستدلال — Link to Verification

يختم المنهج بأن تقليل خطر الهلوسة وأخطاء الاستدلال يتضمن **معالجة هذا السلوك غير الحتمي**، مثلًا **بأتمتة بعض جوانب التحقق من الناتج** لضمان عملية تقييم **منظّمة ومتسقة**. فإذا كان الناتج يتغير من تشغيل لآخر، فالفحص الآلي نفسه يُطبَّق على كل تشغيل بالمعايير نفسها.

### الاتساق ليس صحة — Consistency Is Not Correctness

الاستراتيجيتان تجعلان الناتج **أكثر ثباتًا**، لا **أكثر صحة**. إذا كان النموذج يفترض خطأً أن حد التوصيل المجاني يُفحص بعد الخصم، فخفض الحرارة وتثبيت البذرة قد يجعلانه يكرر الخطأ نفسه في كل تشغيل. عمليًا، الخطأ الثابت أسهل في الكشف والتتبع من خطأ يظهر مرة ويختفي مرة، لكن كشفه ما زال يحتاج تحققًا بالمصدر (انظر 3.1.2).

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: recall the two techniques, lowering temperature and setting a random seed, and the trade-off of low temperature (less creativity and diversity, more repetitive output). Also remember that longer outputs increase variability.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: تذكّر التقنيتين، خفض درجة الحرارة وتحديد بذرة عشوائية، ومقابل خفض الحرارة (إبداع وتنوّع أقل، وناتج أكثر تكرارًا). وتذكّر أيضًا أن النواتج الأطول تزيد التباين.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Believing temperature 0 prevents hallucinations. Less randomness does not turn wrong knowledge or wrong reasoning into right answers. You still need suitable context and independent verification.</p><p class="gx-ar" lang="ar" dir="rtl">الاعتقاد بأن درجة حرارة 0 تمنع الهلوسة. تقليل العشوائية لا يحوّل المعرفة الخاطئة أو الاستدلال الخاطئ إلى إجابات صحيحة. ما زلت تحتاج سياقًا مناسبًا وتحققًا مستقلًا.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">When the delivery app testers extract fixed fields, such as the expected delivery fee for each order value, they use settings that reduce variation and validate the output schema automatically. For exploratory test ideas for the driver app, they allow more diversity, then review relevance and remove duplicates. In both cases they record the model version, prompt and settings, and evaluate several samples. Automating parts of the verification keeps the evaluation structured and consistent.</p><p class="gx-ar" lang="ar" dir="rtl">عندما يستخرج مختبرو تطبيق التوصيل حقولًا ثابتة، مثل رسوم التوصيل المتوقعة لكل قيمة طلب، يستخدمون إعدادات تقلل التباين ويتحققون آليًا من بنية الناتج. ولأفكار الاختبار الاستكشافية لتطبيق السائق، يسمحون بتنوّع أكبر ثم يراجعون الصلة ويزيلون التكرار. وفي الحالتين يسجّلون إصدار النموذج والتوجيه والإعدادات، ويقيّمون عدة عينات. أتمتة أجزاء من التحقق تجعل التقييم منظّمًا ومتسقًا.</p></aside>

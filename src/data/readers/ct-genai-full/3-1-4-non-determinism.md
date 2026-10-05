---
order: 4
slug: "3-1-4"
chapter: 3
group: "3.1"
section: "3.1.4"
title: "Mitigation of Non-Deterministic Behavior of LLMs"
titleAr: "تخفيف السلوك غير الحتمي للنماذج اللغوية"
objectives: "GenAI-3.1.4 · K1"
minutes: 7
lo:
  GenAI-3.1.4: "Recall ways to reduce the non-deterministic behaviour of LLMs."
loAr:
  GenAI-3.1.4: "تتذكّر طرق تقليل السلوك غير الحتمي للنماذج اللغوية."
takeaways:
  - "Probabilistic sampling at inference makes outputs vary for the same input, more so for long outputs."
  - "Lowering temperature reduces randomness but also creativity and diversity."
  - "Setting a random seed, where supported, improves reproducibility."
  - "Consistency is not correctness: a stable answer can be wrong every time."
takeawaysAr:
  - "أخذ العينات الاحتمالي أثناء الاستدلال يجعل النواتج تختلف للمدخل نفسه، وأكثر مع النواتج الطويلة."
  - "خفض درجة الحرارة يقلل العشوائية، لكنه يقلل الإبداع والتنوّع أيضًا."
  - "تحديد بذرة عشوائية، حيث يُدعم ذلك، يحسّن قابلية إعادة النتائج."
  - "الاتساق ليس صحة: الإجابة الثابتة قد تكون خاطئة في كل مرة."
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
قد ينتج المدخل نفسه مخرجات مختلفة بسبب عملية أخذ العينات الاحتمالية أثناء **Inference**، ويزيد التباين مع المخرجات الطويلة، فيصعب الحصول على نتائج متسقة وقابلة للإعادة.

لماذا يهمك ذلك كمختبِر؟ لأن الاختبار يقوم على قابلية التكرار: إذا شغّلت التوجيه نفسه على القصة نفسها مرتين وحصلت على حالات مختلفة، فمن الصعب أن تقارن أو تراجع أو تعيد إنتاج نتيجة. وفي التقييم، قد تحكم على توجيه بأنه ممتاز بناءً على تشغيل محظوظ.

### Temperature

خفض درجة الحرارة أثناء التوليد يضيّق توزيع الاحتمالات ويقلّل العشوائية، فتصبح المخرجات أكثر اتساقًا. المقابل: تنوع وإبداع أقل، واستجابات أكثر تكرارًا وحتمية. لا تختر قيمة واحدة لكل المهام؛ توليد أفكار استكشافية يختلف عن إخراج جدول محدد.

### Random Seed

تسمح بعض التطبيقات بتحديد بذرة تضمن استخدام تسلسل الأعداد شبه العشوائية نفسه، فتتحسن قابلية إعادة النتائج. الدعم وحدوده يختلفان، والبذرة لا تضمن تطابق النتائج إذا تغيّر النموذج أو الخدمة أو الإعدادات.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: recall the two techniques, lowering temperature and setting a random seed, and the trade-off of low temperature (less creativity and diversity, more repetitive output). Also remember that longer outputs increase variability.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: تذكّر التقنيتين، خفض درجة الحرارة وتحديد بذرة عشوائية، ومقابل خفض الحرارة (إبداع وتنوّع أقل، وناتج أكثر تكرارًا). وتذكّر أيضًا أن النواتج الأطول تزيد التباين.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Believing temperature 0 prevents hallucinations. Less randomness does not turn wrong knowledge or wrong reasoning into right answers. You still need suitable context and independent verification.</p><p class="gx-ar" lang="ar" dir="rtl">الاعتقاد بأن درجة حرارة 0 تمنع الهلوسة. تقليل العشوائية لا يحوّل المعرفة الخاطئة أو الاستدلال الخاطئ إلى إجابات صحيحة. ما زلت تحتاج سياقًا مناسبًا وتحققًا مستقلًا.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">For extracting fixed fields, use settings that reduce variation and validate the output schema automatically. For exploratory test ideas, allow more diversity, then review relevance and remove duplicates. In both cases record the model version, prompt and settings, and evaluate several samples. Automating parts of the verification keeps the evaluation structured and consistent.</p><p class="gx-ar" lang="ar" dir="rtl">لاستخراج حقول ثابتة، استخدم إعدادات تقلل التباين وتحقق آليًا من بنية الناتج. ولأفكار الاختبار الاستكشافية، اسمح بتنوّع أكبر ثم راجع الصلة وأزل التكرار. وفي الحالتين سجّل إصدار النموذج والتوجيه والإعدادات، وقيّم عدة عينات. أتمتة أجزاء من التحقق تجعل التقييم منظّمًا ومتسقًا.</p></aside>

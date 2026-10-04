---
order: 4
slug: "3-1-4"
chapter: 3
group: "3.1"
section: "3.1.4"
title: "Mitigation of Non-Deterministic Behavior of LLMs"
titleAr: "تخفيف السلوك غير الحتمي للنماذج اللغوية"
objectives: "GenAI-3.1.4 · K1"
minutes: 4
lo:
  GenAI-3.1.4: "Recall ways to reduce the non-deterministic behaviour of LLMs."
takeaways:
  - "Probabilistic sampling at inference makes outputs vary for the same input, more so for long outputs."
  - "Lowering temperature reduces randomness but also creativity and diversity."
  - "Setting a random seed, where supported, improves reproducibility."
  - "Consistency is not correctness: a stable answer can be wrong every time."
terms:
  - en: "Temperature"
    ar: "درجة الحرارة"
    def: "A generation setting that controls randomness. Lower values give more consistent but less diverse output."
  - en: "Random Seed"
    ar: "البذرة العشوائية"
    def: "A value that fixes the pseudo-random sequence used in generation, where the implementation supports it."
---
قد ينتج المدخل نفسه مخرجات مختلفة بسبب عملية أخذ العينات الاحتمالية أثناء **Inference**، ويزيد التباين مع المخرجات الطويلة، فيصعب الحصول على نتائج متسقة وقابلة للإعادة.

### Temperature

خفض درجة الحرارة أثناء التوليد يضيّق توزيع الاحتمالات ويقلّل العشوائية، فتصبح المخرجات أكثر اتساقًا. المقابل: تنوع وإبداع أقل، واستجابات أكثر تكرارًا وحتمية. لا تختر قيمة واحدة لكل المهام؛ توليد أفكار استكشافية يختلف عن إخراج جدول محدد.

### Random Seed

تسمح بعض التطبيقات بتحديد بذرة تضمن استخدام تسلسل الأعداد شبه العشوائية نفسه، فتتحسن قابلية إعادة النتائج. الدعم وحدوده يختلفان، والبذرة لا تضمن تطابق النتائج إذا تغيّر النموذج أو الخدمة أو الإعدادات.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Believing temperature 0 prevents hallucinations. Less randomness does not turn wrong knowledge or wrong reasoning into right answers. You still need suitable context and independent verification.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice</p><p>For extracting fixed fields, use settings that reduce variation and validate the output schema automatically. For exploratory test ideas, allow more diversity, then review relevance and remove duplicates. In both cases record the model version, prompt and settings, and evaluate several samples. Automating parts of the verification keeps the evaluation structured and consistent.</p></aside>

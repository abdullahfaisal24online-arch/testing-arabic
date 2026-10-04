---
order: 4
slug: "4-2-1"
chapter: 4
group: "4.2"
section: "4.2.1"
title: "Fine-Tuning LLMs for Test Tasks"
titleAr: "الضبط الدقيق للنماذج لمهام الاختبار"
objectives: "GenAI-4.2.1 · K2 / HO-4.2.1 · H0"
minutes: 9
lo:
  GenAI-4.2.1: "Explain how fine-tuning adapts a model to specialised test tasks."
  HO-4.2.1: "Observe the steps of fine-tuning a model for a test task."
takeaways:
  - "Fine-tuning is extra training of a pre-trained model on task- or domain-specific data; it applies to LLMs and SLMs."
  - "Main challenges: biased or wrong data, overfitting, opacity and heavy compute."
  - "Evaluate on data that was not used for training."
  - "RAG supplies updatable context at request time; fine-tuning changes behaviour, style or vocabulary. They can be combined."
terms:
  - en: "Fine-tuning"
    ar: "الضبط الدقيق"
    def: "Extra training of a pre-trained model on targeted data so it handles a task, format or domain better."
  - en: "Overfitting"
    ar: "فرط التخصيص"
    def: "Performing well on training data but poorly on new data."
  - en: "Opacity"
    ar: "الغموض"
    def: "Difficulty explaining or correcting why a model produces a given output."
---
الضبط الدقيق تدريب إضافي لنموذج مسبق التدريب على بيانات موجّهة لمهمة أو مجال. يساعد النموذج على استخدام مصطلحات المجال، أو اتباع قالب المؤسسة، أو تحسين الأداء في مهام متخصصة. وينطبق على LLM و SLM؛ قد يحقق نموذج صغير مضبوط أداءً مناسبًا لمهمة ضيقة بكلفة حوسبة أقل، لكن ذلك يحتاج قياسًا.

مثال: لدينا قصص مستخدم وحالات اختبار معتمدة مكتوبة بقالب المؤسسة. نستخدم أزواجًا عالية الجودة لتعليم النموذج القالب والمفردات المطلوبة.

### متى يستحق الضبط الدقيق؟ — When It Is Worth It

الضبط الدقيق مكلف ويحتاج بيانات جيدة وخبرة، فلا تبدأ به. جرّب أولًا التوجيه الجيد، ثم الأمثلة (Few-shot)، ثم RAG. إذا بقيت المشكلة في **سلوك** النموذج نفسه، مثل أنه لا يلتزم بقالب مؤسستك المعقّد رغم الأمثلة، أو لا يفهم مصطلحات مجالك المتخصص (بنوك، طيران، أجهزة طبية)، فهنا قد يستحق الضبط الدقيق.

### التحديات — Challenges

| Challenge | أثره | نقطة تحقق |
|---|---|---|
| Biased or wrong data | ترسيخ مخرجات غير موثوقة | مراجعة صحة البيانات وتمثيلها |
| Overfitting | أداء جيد على التدريب وضعيف على الجديد | تقييم على قصص لم تُستخدم في التدريب |
| Opacity | صعوبة تفسير القرارات وتصحيحها | تتبّع المدخلات والمخرجات والقياسات |
| Heavy compute | وقت وكلفة وتشغيل أعقد | مقارنة الفائدة بالكلفة وبحل أبسط |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Know the four challenges: biased or poor-quality data, overfitting, opacity, and high compute cost. And the key contrast: RAG adds current context at request time; fine-tuning changes the model's behaviour through extra training.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Putting weak answers in the training data and expecting training to fix them. Fine-tuning learns what you give it, including the mistakes.</p></aside>

### RAG أم Fine-tuning؟ — RAG or Fine-tuning?

RAG مناسب لتوفير وثائق وسياق قابلين للتحديث وقت الطلب. Fine-tuning مناسب لتكييف سلوك المهمة أو النمط أو المصطلحات بالتدريب. ويمكن دمجهما: نموذج مكيّف لقالب المؤسسة يسترجع أحدث معايير القبول. لا تضمن أيٌّ منهما غياب الأخطاء، ويجب تقييم النظام كاملًا.

<section class="gx-lab" data-lab="HO-4.2.1"><header class="gx-lab-head"><span class="gx-lab-title">Demo · Fine-tuning Steps</span><span class="gx-lab-meta">HO-4.2.1 · H0</span></header><div class="gx-lab-body"><p><strong>Task:</strong> output test cases in the internal template.</p><ol class="gx-lab-steps"><li>Choose a suitable model and check it supports fine-tuning.</li><li>Prepare reviewed story–test-case pairs, with sensitive data removed, and hold back an evaluation set that is not used for training.</li><li>Run the training step in a suitable framework.</li><li>Send a new story to the tuned model and compare template, correctness and coverage with the baseline.</li></ol><p>This is a teaching sequence; no real training run or measured improvement is claimed. Discuss data quality and generalisation, not just whether the model repeats a training example.</p></div></section>

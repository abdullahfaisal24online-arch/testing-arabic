---
order: 5
slug: "5-2-1"
chapter: 5
group: "5.2"
section: "5.2.1"
title: "Essential Skills and Knowledge for Testing with Generative AI"
titleAr: "المهارات والمعرفة الأساسية للاختبار بالذكاء التوليدي"
objectives: "GenAI-5.2.1 · K2"
minutes: 6
lo:
  GenAI-5.2.1: "Explain the essential skills and knowledge for testing with GenAI."
takeaways:
  - "Prompt engineering, understanding the context window, and reviewing generated testware."
  - "Domain and test-technique knowledge stay essential: good phrasing cannot replace knowing the right answer."
  - "Data sharing implications, data sanitization and privacy-preserving prompts."
  - "Right-sizing models for cost and energy, and knowing when to reject an output."
terms:
  - en: "Data Sanitization"
    ar: "تنقيح البيانات"
    def: "Removing or masking personal and confidential information before data is shared with a GenAI tool."
---
الدمج الناجح يجمع المهارات التقنية والتغيير التنظيمي: من يوجّه الأداة، ومن يراجع، ومن يقرر، وكيف يتعلم الفريق ويحسّن العملية مع الوقت.

### المهارات المطلوبة — Required Skills

- **هندسة التوجيه** وفهم نافذة السياق وطرق مراجعة مواد الاختبار المولّدة.
- **معرفة المجال وتقنيات الاختبار**، وهي أساسية لتقييم الحالات المولّدة وتحليل العيوب وبيانات الاختبار.
- **تقييم قدرات النموذج** وتنقيح الطلبات وتقييم صحة Testware وتغطيته، وفهم المخاطر وطرق تخفيفها.
- **فهم تبعات مشاركة البيانات** و**Data Sanitization** بإزالة المعلومات الشخصية والسرية أو إخفائها، وصياغة طلبات تحافظ على الخصوصية.
- **اختيار حجم النموذج ونمط استخدامه** بما يوازن الفائدة بالكلفة والطاقة.

### لماذا تبقى خبرة الاختبار أساسية؟ — Why Testing Expertise Still Matters

قد يبدو أن الذكاء التوليدي يقلل الحاجة لمعرفة تقنيات الاختبار، والعكس هو الصحيح. لكي تحكم على حالات ولّدها النموذج، يجب أن تعرف ما الحالات الصحيحة: أين الحدود، وما الفئات المتكافئة، وما المخاطر في هذا المجال. المختبِر الذي لا يعرف تحليل القيم الحدّية لن يلاحظ أن النموذج نسي الحد الأعلى.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice · A combined skill</p><p>The model produces a case accepting an 8-character password, but the source says 12. The tester needs to read the source, know the boundaries, check traceability and fix the prompt. If the inputs also contain real customer data, they need to sanitise it and question whether the tool is suitable.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea</p><p>Know when to reject an output or ask for missing information, instead of passing it on because it looks tidy.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Skills span prompting and context management, domain and test-technique knowledge, evaluating model capabilities and testware, understanding risks, data sanitization and privacy-preserving prompting, and right-sizing models for cost and energy.</p></aside>

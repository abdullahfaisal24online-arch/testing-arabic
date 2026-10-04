---
order: 1
slug: "3-1-1"
chapter: 3
group: "3.1"
section: "3.1.1"
title: "Hallucinations, Reasoning Errors and Biases in Generative AI"
titleAr: "الهلوسة وأخطاء الاستدلال والتحيز في الذكاء التوليدي"
objectives: "GenAI-3.1.1 · K1"
minutes: 5
lo:
  GenAI-3.1.1: "Recall what hallucinations, reasoning errors and biases are in GenAI systems."
takeaways:
  - "Hallucination: output that is factually wrong or irrelevant to the task."
  - "Reasoning error: a wrong conclusion about cause and effect, conditions or steps, because LLMs match patterns rather than truly reason."
  - "Bias: output that favours certain information, approaches or assumptions, usually because of the training data."
  - "The root causes are the training data and the inherent limits of transformer models."
terms:
  - en: "Hallucination"
    ar: "الهلوسة"
    def: "LLM output that is factually incorrect or irrelevant to the task, such as a test case for a requirement that does not exist."
  - en: "Reasoning Error"
    ar: "خطأ الاستدلال"
    def: "A wrong interpretation of logical structure: cause and effect, conditional logic or step-by-step problem solving."
  - en: "Bias"
    ar: "التحيز"
    def: "A tendency of the output to favour certain information, approaches or assumptions, often inherited from the training data."
---
قد ينتج النموذج نصًا مقنعًا لكنه غير صحيح أو غير مناسب، وهذه الأخطاء تضعف جودة مواد الاختبار. وبسبب السلوك غير الحتمي قد تختفي المشكلة بعد تعديل طلب ثم تظهر مرة أخرى في محادثة جديدة؛ نجاح تصحيح واحد لا يعني زوال الخطر.

| Type | معناه | مثال من منصة تعلّم |
|---|---|---|
| Hallucination | معلومة غير صحيحة أو غير مرتبطة بالمهمة | إضافة شرط SMS غير موجود في المتطلبات |
| Reasoning error | استنتاج خاطئ من علاقات أو شروط أو خطوات | جدولة إصدار الشهادة قبل إكمال متطلباتها |
| Bias | ميل لنوع معين من المعلومات أو الحلول أو الافتراضات | بيانات أسماء إنجليزية فقط رغم أن الجمهور عربي أيضًا |

### الهلوسة — Hallucinations

مخرجات تبدو صحيحة لكنها خاطئة أو غير مرتبطة بالمهمة. في الاختبار قد تظهر كحالات اختبار وهمية، أو سكربتات لا تعمل، أو تحقق من معايير قبول غير موجودة. خطرها أنها تضلل المختبِر وتضعف صلاحية ناتج الاختبار.

### أخطاء الاستدلال — Reasoning Errors

سوء تفسير للبنى المنطقية: علاقة السبب والنتيجة، أو المنطق الشرطي، أو حل المسائل خطوة بخطوة. السبب أن النماذج تعتمد على مطابقة الأنماط أكثر من الاستدلال المنطقي الحقيقي. تظهر في مهام مثل الحساب، وتخطيط الاختبار، وترتيب أولوية الحالات.

### التحيز — Biases

ميل المخرجات لصالح معلومات أو أساليب أو افتراضات معينة، وغالبًا مصدره تركيبة بيانات التدريب. في الاختبار قد يظهر كضعف تمثيل المنظورات غير الإنجليزية أو قيود مرتبطة باللغة، ويؤثر خصوصًا في توليد بيانات الاختبار وتحسين معايير القبول.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea</p><p>The three types can overlap. Classifying an error is useful because it points to how to detect and fix it, not because every error must fit one box. Their root causes are the nature of the training data and the inherent limits of transformer models.</p></aside>

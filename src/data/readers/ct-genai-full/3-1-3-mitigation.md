---
order: 3
slug: "3-1-3"
chapter: 3
group: "3.1"
section: "3.1.3"
title: "Mitigation Techniques of GenAI Hallucinations, Reasoning Errors and Biases in Software Test Tasks"
titleAr: "تقنيات تخفيف الهلوسة وأخطاء الاستدلال والتحيز في مهام الاختبار"
objectives: "GenAI-3.1.3 · K2"
minutes: 5
lo:
  GenAI-3.1.3: "Summarise how to reduce hallucinations, reasoning errors and biases in test tasks."
takeaways:
  - "Five techniques: complete context, splitting the task, clear data formats, a model suited to the task, and comparing models."
  - "RAG and fine-tuning are more advanced options, covered in Chapter 4."
  - "None of them removes the need to evaluate the output; scale the review to the risk."
---
تزداد المشكلات عندما يكون السياق ناقصًا أو الطلب غامضًا. نختار مجموعة ضوابط تناسب خطر المهمة بدل الاعتماد على عبارة «كن دقيقًا».

| Technique | التطبيق العملي | الحد الذي يجب تذكره |
|---|---|---|
| Complete context | توفير كل المعلومات ذات الصلة داخل التوجيه، مثل قواعد التسجيل المعتمدة وإصدارها (انظر 2.1.1) | نسخ مستودع كامل يزيد الضجيج ولا يضمن الملاءمة |
| Split into segments | Prompt chaining: شروط ثم حالات ثم سكربت، مع تحقق من كل ناتج قبل التالي (انظر 2.1.2) | السلسلة بلا مراجعة قد تضخّم الخطأ |
| Clear data formats | تنسيقات منظمة وواضحة مثل المعرّفات والجداول والحقول الصريحة | جودة التنسيق لا تثبت صحة البيانات |
| Suitable model | نموذج مدرّب أو مناسب للمهمة المستهدفة (انظر 5.1.3) | شهرة النموذج لا تغني عن التقييم |
| Compare models | تجربة التوجيه على عدة نماذج لكشف الأخطاء واختيار النتائج الموثوقة | اتفاق النماذج ليس إثباتًا مستقلًا للصحة |

ويمكن دعم السياق عبر **RAG** أو تكييف النموذج عبر **Fine-tuning**، ونفصّلهما في الفصل الرابع.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice</p><p>Start from the approved requirements with IDs. Ask for conditions with the source of each one, and turn any line without a source into a question. Approve the conditions before moving to design, then compare the coverage summary with the requirement list instead of trusting the model's claim that it “covered everything”.</p></aside>

يمكن أتمتة فحوص بنيوية، مثل وجود الأعمدة وعدم تكرار المعرّفات وصحة تنسيق البيانات، بينما تبقى صحة النتيجة المتوقعة محتاجة مراجعة بالمصدر. وتتدرّج شدة المراجعة مع خطورة استخدام الناتج.

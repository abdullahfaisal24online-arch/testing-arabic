---
order: 3
slug: "3-1-3"
chapter: 3
group: "3.1"
section: "3.1.3"
title: "Mitigation Techniques of GenAI Hallucinations, Reasoning Errors and Biases in Software Test Tasks"
titleAr: "تقنيات تخفيف الهلوسة وأخطاء الاستدلال والتحيز في مهام الاختبار"
objectives: "GenAI-3.1.3 · K2"
minutes: 8
lo:
  GenAI-3.1.3: "Summarise how to reduce hallucinations, reasoning errors and biases in test tasks."
loAr:
  GenAI-3.1.3: "تلخّص طرق تقليل الهلوسة وأخطاء الاستدلال والتحيز في مهام الاختبار."
takeaways:
  - "Five techniques: complete context, splitting the task, clear data formats, a model suited to the task, and comparing models."
  - "RAG and fine-tuning are more advanced options, covered in Chapter 4."
  - "None of them removes the need to evaluate the output; scale the review to the risk."
takeawaysAr:
  - "خمس تقنيات: سياق كامل، وتقسيم المهمة، وصيغ بيانات واضحة، ونموذج مناسب للمهمة، ومقارنة النماذج."
  - "RAG والضبط الدقيق خيارات أكثر تقدمًا، يتناولها الفصل الرابع."
  - "لا تلغي أيٌّ منها الحاجة لتقييم الناتج؛ اجعل المراجعة بقدر الخطر."
---
تزداد المشكلات عندما يكون السياق ناقصًا أو الطلب غامضًا. نختار مجموعة ضوابط تناسب خطر المهمة بدل الاعتماد على عبارة «كن دقيقًا».

| Technique | التطبيق العملي | الحد الذي يجب تذكره |
|---|---|---|
| Complete context | توفير كل المعلومات ذات الصلة داخل التوجيه، مثل قواعد التسجيل المعتمدة وإصدارها (انظر 2.1.1) | نسخ مستودع كامل يزيد الضجيج ولا يضمن الملاءمة |
| Split into segments | Prompt chaining: شروط ثم حالات ثم سكربت، مع تحقق من كل ناتج قبل التالي (انظر 2.1.2) | السلسلة بلا مراجعة قد تضخّم الخطأ |
| Clear data formats | تنسيقات منظمة وواضحة مثل المعرّفات والجداول والحقول الصريحة | جودة التنسيق لا تثبت صحة البيانات |
| Suitable model | نموذج مدرّب أو مناسب للمهمة المستهدفة (انظر 5.1.3) | شهرة النموذج لا تغني عن التقييم |
| Compare models | تجربة التوجيه على عدة نماذج لكشف الأخطاء واختيار النتائج الموثوقة | اتفاق النماذج ليس إثباتًا مستقلًا للصحة |

### كيف تقلل كل تقنية الخطر؟ — Why Each Technique Helps

**السياق الكامل** يقلل الهلوسة لأن النموذج لا يضطر لملء الفراغات بافتراضات عامة. إذا لم تذكر أن البريد فريد، قد يفترضه أو لا يفترضه؛ إذا ذكرته، يبني عليه.

**تقسيم المهمة** يقلل أخطاء الاستدلال لأن كل خطوة أبسط، ولأن المراجعة بين الخطوات تكشف الخطأ قبل أن ينتقل.

**التنسيقات الواضحة** تجعل النموذج يركّز على جوهر المهمة. جدول بأعمدة محددة أسهل في الفهم من فقرة طويلة تخلط المتطلبات بالملاحظات.

**النموذج المناسب** مهم لأن قدرات النماذج تختلف؛ نموذج مدرّب على مهام مشابهة قد يخطئ أقل في مهمتك.

**مقارنة النماذج** تكشف الاختلافات: إذا أعطى نموذجان نتيجتين مختلفتين، فهذا مؤشر لمراجعة المصدر. لكن الاتفاق لا يثبت الصحة، فقد يخطئ الاثنان بالطريقة نفسها.

ويمكن دعم السياق عبر **RAG** أو تكييف النموذج عبر **Fine-tuning**، ونفصّلهما في الفصل الرابع.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the five techniques: complete context, prompt chaining into manageable segments, clear and interpretable data formats, selecting a suitable model, and comparing results across models. RAG and fine-tuning are named as more advanced options covered in Chapter 4.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف التقنيات الخمس: سياق كامل، وتسلسل التوجيهات بأجزاء صغيرة، وصيغ بيانات واضحة سهلة التفسير، واختيار نموذج مناسب، ومقارنة النتائج بين النماذج. ويذكر المنهج RAG والضبط الدقيق كخيارات أكثر تقدمًا في الفصل الرابع.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Start from the approved requirements with IDs. Ask for conditions with the source of each one, and turn any line without a source into a question. Approve the conditions before moving to design, then compare the coverage summary with the requirement list instead of trusting the model's claim that it “covered everything”.</p><p class="gx-ar" lang="ar" dir="rtl">ابدأ من المتطلبات المعتمدة بمعرّفاتها. اطلب الشروط مع مصدر كل منها، وحوّل أي سطر بلا مصدر إلى سؤال. اعتمد الشروط قبل الانتقال إلى التصميم، ثم قارن ملخص التغطية بقائمة المتطلبات بدل الوثوق بقول النموذج إنه «غطى كل شيء».</p></aside>

يمكن أتمتة فحوص بنيوية، مثل وجود الأعمدة وعدم تكرار المعرّفات وصحة تنسيق البيانات، بينما تبقى صحة النتيجة المتوقعة محتاجة مراجعة بالمصدر. وتتدرّج شدة المراجعة مع خطورة استخدام الناتج.

---
order: 1
slug: "3-1-1"
chapter: 3
group: "3.1"
section: "3.1.1"
title: "Hallucinations, Reasoning Errors and Biases in Generative AI"
titleAr: "الهلوسة وأخطاء الاستدلال والتحيز في الذكاء التوليدي"
objectives: "GenAI-3.1.1 · K1"
minutes: 8
lo:
  GenAI-3.1.1: "Recall what hallucinations, reasoning errors and biases are in GenAI systems."
loAr:
  GenAI-3.1.1: "تتذكّر ما هي الهلوسة وأخطاء الاستدلال والتحيز في أنظمة GenAI."
takeaways:
  - "Hallucination: output that is factually wrong or irrelevant to the task."
  - "Reasoning error: a wrong conclusion about cause and effect, conditions or steps, because LLMs match patterns rather than truly reason."
  - "Bias: output that favours certain information, approaches or assumptions, usually because of the training data."
  - "The root causes are the training data and the inherent limits of transformer models."
takeawaysAr:
  - "الهلوسة: ناتج خاطئ في حقائقه أو لا علاقة له بالمهمة."
  - "خطأ الاستدلال: استنتاج خاطئ حول السبب والنتيجة أو الشروط أو الخطوات، لأن النماذج تطابق الأنماط ولا تستدل منطقيًا بحق."
  - "التحيز: ناتج يميل لصالح معلومات أو أساليب أو افتراضات معيّنة، وغالبًا بسبب بيانات التدريب."
  - "الأسباب الجذرية هي بيانات التدريب والحدود المتأصلة في نماذج Transformer."
terms:
  - en: "Hallucination"
    ar: "الهلوسة"
    def: "LLM output that is factually incorrect or irrelevant to the task, such as a test case for a requirement that does not exist."
    defAr: "ناتج من النموذج خاطئ في حقائقه أو لا علاقة له بالمهمة، مثل حالة اختبار لمتطلب غير موجود."
  - en: "Reasoning Error"
    ar: "خطأ الاستدلال"
    def: "A wrong interpretation of logical structure: cause and effect, conditional logic or step-by-step problem solving."
    defAr: "تفسير خاطئ لبنية منطقية: السبب والنتيجة، أو المنطق الشرطي، أو حل المسائل خطوة بخطوة."
  - en: "Bias"
    ar: "التحيز"
    def: "A tendency of the output to favour certain information, approaches or assumptions, often inherited from the training data."
    defAr: "ميل في الناتج لصالح معلومات أو أساليب أو افتراضات معيّنة، وغالبًا موروث من بيانات التدريب."
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

الفرق بينها وبين الهلوسة: في الهلوسة **المعلومة نفسها** خاطئة أو مخترعة. في خطأ الاستدلال **المعلومات صحيحة** لكن الاستنتاج منها خاطئ. مثال: تعطي النموذج مدد خمس حالات واعتمادياتها بشكل صحيح، فيحسب الزمن الكلي بجمع المدد وقسمتها على عدد المنفذين، متجاهلًا أن بعض الحالات لا تبدأ قبل انتهاء غيرها. كل المعطيات صحيحة، والنتيجة خاطئة.

### التحيز — Biases

ميل المخرجات لصالح معلومات أو أساليب أو افتراضات معينة، وغالبًا مصدره تركيبة بيانات التدريب. في الاختبار قد يظهر كضعف تمثيل المنظورات غير الإنجليزية أو قيود مرتبطة باللغة، ويؤثر خصوصًا في توليد بيانات الاختبار وتحسين معايير القبول.

أمثلة يعرفها المختبِر العربي جيدًا: بيانات اختبار كلها أسماء إنجليزية وعناوين أمريكية بينما المستخدمون عرب، أو حالات لا تختبر اتجاه الكتابة من اليمين لليسار، أو معايير قبول تفترض صيغة تاريخ معيّنة. وقد يظهر التحيز أيضًا في نوع الاختبارات نفسها: تركيز على الاختبارات الوظيفية وإهمال الأداء وقابلية الوصول.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">هدف K1: تذكّر التعريفات. الهلوسة = ناتج خاطئ أو غير مرتبط (اختبارات مخترعة، سكربتات لا تعمل، تحقق من معايير غير موجودة). خطأ الاستدلال = منطق خاطئ حول السبب والنتيجة أو الشروط أو الخطوات، لأن النماذج تطابق الأنماط. التحيز = تفضيل معلومات أو افتراضات معيّنة، مصدره بيانات التدريب.</p><p class="gx-en" lang="en" dir="ltr">K1: recall the definitions. Hallucination = output that is factually wrong or irrelevant (invented tests, non-working scripts, checks for non-existent criteria). Reasoning error = wrong logic about cause and effect, conditions or steps, because LLMs match patterns. Bias = favouring certain information or assumptions, from the training data.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-ar">فكرة أساسية</span><span class="gx-en" lang="en" dir="ltr">Key idea</span></p><p class="gx-ar">الأنواع الثلاثة قد تتداخل. تصنيف الخطأ مفيد لأنه يدلّك على طريقة كشفه وإصلاحه، لا لأن كل خطأ يجب أن يدخل في صندوق واحد. وأسبابها الجذرية طبيعة بيانات التدريب والحدود المتأصلة في نماذج Transformer.</p><p class="gx-en" lang="en" dir="ltr">The three types can overlap. Classifying an error is useful because it points to how to detect and fix it, not because every error must fit one box. Their root causes are the nature of the training data and the inherent limits of transformer models.</p></aside>

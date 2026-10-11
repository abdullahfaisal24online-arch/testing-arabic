---
order: 1
slug: "3-1-1"
chapter: 3
group: "3.1"
section: "3.1.1"
title: "Hallucinations, Reasoning Errors and Biases in Generative AI"
titleAr: "الهلوسة وأخطاء الاستدلال والتحيز في الذكاء التوليدي"
objectives: "GenAI-3.1.1 · K1"
minutes: 9
lo:
  GenAI-3.1.1: "Recall what hallucinations, reasoning errors and biases are in GenAI systems."
loAr:
  GenAI-3.1.1: "تتذكّر ما هي الهلوسة وأخطاء الاستدلال والتحيز في أنظمة GenAI."
takeaways:
  - "Hallucination: output that is factually wrong or irrelevant to the task."
  - "Reasoning error: a wrong conclusion about cause and effect, conditions or steps, because LLMs match patterns rather than truly reason."
  - "Bias: output that favours certain information, approaches or assumptions, usually because of the training data."
  - "The root causes are the training data and the inherent limits of transformer models."
  - "Because of non-determinism, a defect that seems fixed in one output may reappear in another conversation."
takeawaysAr:
  - "الهلوسة: ناتج خاطئ في حقائقه أو لا علاقة له بالمهمة."
  - "خطأ الاستدلال: استنتاج خاطئ حول السبب والنتيجة أو الشروط أو الخطوات، لأن النماذج تطابق الأنماط ولا تستدل منطقيًا بحق."
  - "التحيز: ناتج يميل لصالح معلومات أو أساليب أو افتراضات معيّنة، وغالبًا بسبب بيانات التدريب."
  - "الأسباب الجذرية هي بيانات التدريب والحدود المتأصلة في نماذج Transformer."
  - "بسبب السلوك غير الحتمي، قد يعود defect بدا مصحَّحًا في ناتج ما إلى الظهور في محادثة أخرى."
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
يقول المنهج إن أنظمة GenAI، وخصوصًا النماذج اللغوية الكبيرة، **معرّضة لـ defects معيّنة**: **الهلوسة**، و**أخطاء الاستدلال**، و**التحيز**. هذه الـ defects تُضعف جودة الناتج، فيأتي الـ testware المولَّد دون توقعات المختبرين. لذلك على المختبِر أن **يتعرّف عليها** في ناتج النموذج، وأن تُتخذ **إجراءات للحد منها** (انظر 3.1.2 و3.1.3).

ويضيف المنهج صعوبة مهمة: بسبب **السلوك غير الحتمي (non-deterministic behavior)** للنماذج (انظر 1.1.2)، قد يبدو الـ defect **مصحَّحًا** في ناتج ما، ثم **يعود** في محادثة أخرى مع النموذج نفسه. نجاح تصحيح واحد لا يعني زوال الخطر.

| Type | Definition | Delivery app example |
|---|---|---|
| Hallucination | Output that is factually incorrect or irrelevant to the task | A test case for an SMS confirmation code the app does not have |
| Reasoning error | Misreading logical structures, leading to wrong conclusions | Allowing cancellation after Out for delivery |
| Bias | Output that favours certain information, approaches or assumptions | Test data with English names and US addresses only |

### الهلوسة — Hallucinations

**التعريف:** تحدث **الهلوسة (hallucination)** عندما يولّد النموذج ناتجًا **خاطئًا في حقائقه** أو **غير مرتبط بالمهمة**، مع أنه يبدو مقنعًا. ويذكر المنهج ثلاثة أشكال لها في الاختبار:

- **حالات اختبار وهمية أو غير ذات صلة:** مثل حالة لتحقق برمز SMS غير موجود في المتطلبات.
- **test scripts خاطئة أو لا تعمل:** مثل script يستدعي دالة غير موجودة في أداة الأتمتة.
- **حالات تتحقق من معايير قبول غير موجودة:** مثل حالة تتحقق من «حد أقصى لقيمة الطلب 100.00 JOD»، ولا يوجد هذا المعيار أصلًا.

**لماذا هي خطرة؟** لأنها **تضلل المختبرين** و**تضعف صلاحية ناتج الاختبار**: حالة لمتطلب وهمي قد تقنع الفريق بأن المتطلب موجود فعلًا.

### أخطاء الاستدلال — Reasoning Errors

**التعريف:** تحدث **أخطاء الاستدلال (reasoning errors)** عندما يُسيء النموذج تفسير **البنى المنطقية**، فيصل إلى **استنتاجات خاطئة**. ويذكر المنهج ثلاثًا منها:

- **السبب والنتيجة:** مثل الاستنتاج أن فشل بوابة الدفع سببه الكوبون لأنهما ظهرا في السجل نفسه.
- **المنطق الشرطي:** مثل السماح بالإلغاء بعد Out for delivery، مع أن القاعدة تسمح به قبلها فقط.
- **حل المسائل خطوة بخطوة:** مثل حساب الرسوم بعد الخصم بدل قيمة الطلب قبله.

**لماذا تحدث؟** لأن النماذج، **خلافًا للبشر**، لا تملك **استدلالًا منطقيًا حقيقيًا**، بل تعتمد على **مطابقة الأنماط (pattern matching)**. ويستشهد المنهج بدراسة (Mirzadeh 2024) عن ضعفها في **الاستدلال الرياضي**. ومن مهام الاختبار التي تحتاج استدلالًا، ويذكرها المنهج، **تخطيط الاختبار** و**ترتيب أولوية حالات الاختبار**.

**الفرق عن الهلوسة:** في الهلوسة **المعلومة نفسها** مخترعة أو خاطئة. في خطأ الاستدلال **المعطيات صحيحة** لكن الاستنتاج منها خاطئ.

### التحيز — Biases

**التعريف:** **التحيز (bias)** في النماذج **مصدره البيانات التي دُرِّب عليها النموذج**، ويؤدي إلى ناتج **يميل لصالح أنواع معيّنة من المعلومات أو الأساليب أو الافتراضات**. ومثال المنهج: النماذج المدرَّبة أساسًا على بيانات إنجليزية قد **تُضعف تمثيل المنظورات غير الإنجليزية**.

**أين يظهر في الاختبار؟** يذكر المنهج **توليد بيانات الاختبار** و**تحسين معايير القبول**. مثال: بيانات اختبار كلها أسماء إنجليزية وعناوين أمريكية، مع أن مستخدمي تطبيق التوصيل يكتبون عناوينهم بالعربية، أو معايير قبول تنسى اتجاه الكتابة من اليمين لليسار.

### الأسباب الجذرية — Root Causes

يرجع المنهج الأنواع الثلاثة إلى **طبيعة بيانات التدريب** و**الحدود المتأصلة في نموذج Transformer** (انظر الفصل 1). ويختم بأن **التعرّف على هذه التحديات ومعالجتها** يرفع جودة نتائج GenAI في عمليات الاختبار.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: recall the definitions. Hallucination = output that is factually wrong or irrelevant (invented tests, non-working scripts, checks for non-existent criteria). Reasoning error = wrong logic about cause and effect, conditions or steps, because LLMs match patterns. Bias = favouring certain information or assumptions, from the training data.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: تذكّر التعريفات. الهلوسة = ناتج خاطئ أو غير مرتبط (اختبارات مخترعة، scripts لا تعمل، تحقق من معايير غير موجودة). خطأ الاستدلال = منطق خاطئ حول السبب والنتيجة أو الشروط أو الخطوات، لأن النماذج تطابق الأنماط. التحيز = تفضيل معلومات أو افتراضات معيّنة، مصدره بيانات التدريب.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">The three types can overlap. Classifying an error is useful because it points to how to detect and fix it, not because every error must fit one box. Their root causes are the nature of the training data and the inherent limits of transformer models.</p><p class="gx-ar" lang="ar" dir="rtl">الأنواع الثلاثة قد تتداخل. تصنيف الخطأ مفيد لأنه يدلّك على طريقة كشفه وإصلاحه، لا لأن كل خطأ يجب أن يدخل في صندوق واحد. وأسبابها الجذرية طبيعة بيانات التدريب والحدود المتأصلة في نماذج Transformer.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">One prompt for the delivery app's order states produced all three types at once: a test for a "Ready for pickup" state that does not exist (hallucination), a case allowing cancellation after Out for delivery (reasoning error), and customer data with English names only (bias). The testers fixed the prompt, but a new chat the next day brought back a similar invented state, so the review step stayed in place.</p><p class="gx-ar" lang="ar" dir="rtl">أنتج توجيه واحد لحالات الطلب في تطبيق التوصيل الأنواع الثلاثة معًا: اختبارًا لحالة «Ready for pickup» غير موجودة (هلوسة)، وحالة تسمح بالإلغاء بعد Out for delivery (خطأ استدلال)، وبيانات عملاء بأسماء إنجليزية فقط (تحيز). عدّل المختبرون التوجيه، لكن محادثة جديدة في اليوم التالي أعادت حالة مخترعة مشابهة، فبقيت خطوة المراجعة في مكانها.</p></aside>

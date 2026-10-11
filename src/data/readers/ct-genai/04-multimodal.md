---
order: 4
slug: "1-1-4"
chapter: 1
group: "1.1"
section: "1.1.4"
title: "Multimodal LLMs and Vision-Language Models"
titleAr: "النماذج متعددة الوسائط ونماذج الرؤية واللغة"
objectives: "GenAI-1.1.4 · K2 / HO-1.1.4 · H1"
minutes: 18
lo:
  GenAI-1.1.4: "Write and run a given prompt for a test task on a multimodal LLM, understanding how it handles text and images."
  HO-1.1.4: "Write and run a prompt that gives a multimodal LLM both text and an image for a test task."
loAr:
  GenAI-1.1.4: "تكتب وتنفّذ توجيهًا معطى لمهمة اختبار على نموذج متعدد الوسائط، وتفهم كيف يتعامل مع النص والصورة."
  HO-1.1.4: "تكتب وتنفّذ توجيهًا يعطي نموذجًا متعدد الوسائط نصًا وصورة معًا لمهمة اختبار."
takeaways:
  - "Multimodal input widens the context available to the tester and the model."
  - "The value comes from linking visual evidence with the written description."
  - "Keep what the image shows separate from what needs execution to verify."
  - "Each modality is tokenized in its own way; images become embeddings through a vision-language model before the transformer processes them."
  - "Running a multimodal prompt has two steps: review the inputs, then execute and verify the actual result."
takeawaysAr:
  - "المدخلات متعددة الوسائط توسّع السياق المتاح للمختبِر وللنموذج."
  - "القيمة تأتي من الربط بين الدليل المرئي والوصف المكتوب."
  - "افصل ما تُظهره الصورة عمّا يحتاج تنفيذًا للتحقق منه."
  - "لكل وسيط طريقته في التقطيع؛ فالصور تتحول إلى تضمينات عبر نموذج رؤية ولغة قبل أن يعالجها الـ Transformer."
  - "تنفيذ توجيه متعدد الوسائط خطوتان: مراجعة المدخلات، ثم التنفيذ والتحقق من النتيجة الفعلية."
terms:
  - en: "Multimodal LLM"
    ar: "النموذج متعدد الوسائط"
    def: "A model that handles more than one data type, such as text, images, audio or video. Supported inputs and outputs differ per model."
    defAr: "نموذج يتعامل مع أكثر من نوع بيانات، مثل النص والصور والصوت والفيديو. المدخلات والمخرجات المدعومة تختلف من نموذج لآخر."
    match: ["Multimodal LLMs", "Multimodal"]
  - en: "VLM"
    ar: "نموذج الرؤية واللغة"
    def: "Vision-Language Model. Combines visual and textual information to describe images, answer questions about them, or check text against visuals."
    defAr: "نموذج الرؤية واللغة. يجمع المعلومات المرئية والنصية ليصف الصور، ويجيب عن أسئلة حولها، أو يقارن النص بما يظهر بصريًا."
    match: ["Vision-Language Models", "VLMs"]
  - en: "GUI Wireframe"
    ar: "مخطط الواجهة"
    def: "A simple layout sketch of a screen that shows its elements without final visual design."
    defAr: "رسم مبسّط لتخطيط الشاشة يُظهر عناصرها دون التصميم البصري النهائي."
  - en: "Image Captioning"
    ar: "وصف الصورة"
    def: "A vision-language task: producing a text description of what an image shows."
    defAr: "مهمة من مهام نماذج الرؤية واللغة: إنتاج وصف نصي لما تُظهره الصورة."
    match: ["image captioning"]
  - en: "Visual Question Answering"
    ar: "الإجابة عن الأسئلة البصرية"
    def: "A vision-language task: answering a question in text about the content of an image."
    defAr: "مهمة من مهام نماذج الرؤية واللغة: الإجابة نصيًا عن سؤال حول محتوى صورة."
    match: ["visual question answering"]
---
جزء كبير من عمل المختبِر بصري: لقطات شاشة مرفقة بتقارير الـ defects، ومخططات واجهة من فريق التصميم، وشاشات يجب أن تظهر صحيحة بالعربية والإنجليزية وعلى iOS وAndroid. النموذج الذي يقرأ النص فقط يرى نصف الصورة، حرفيًا. أما النموذج متعدد الوسائط فيستطيع أن يقرأ قصة المستخدم **وينظر** إلى الشاشة في الوقت نفسه، ثم يخبرك أين لا يتطابقان. هذا القسم يشرح كيف يحدث ذلك، وكيف تكتب توجيهًا لمهمة اختبار تجمع النص والصورة، ولماذا يبقى التحقق في يدك.

### ما النموذج متعدد الوسائط؟ — Multimodal LLMs

**النماذج متعددة الوسائط (Multimodal LLMs)** **توسّع نموذج المحوّل التقليدي** الذي عرفته في القسم 1.1.2 ليعالج **وسائط بيانات متعددة**، منها النص والصور والصوت والفيديو. وتُدرَّب على **مجموعات بيانات كبيرة ومتنوعة** تمكّنها من **تعلّم العلاقات بين أنواع البيانات المختلفة**: أن عبارة «زر سلة المشتريات» تقابل شكلًا معينًا في الصورة، وأن «رسالة خطأ حمراء تحت الحقل» تصف نمطًا بصريًا محددًا.

عمليًا، إمكانات الإدخال والإخراج تختلف من نموذج لآخر؛ دعم الصور لا يعني تلقائيًا دعم الفيديو أو توليد الصوت. لذلك تحقق مما يقبله النموذج الذي تستخدمه قبل أن تبني مهمة اختبار عليه.

### كيف يُقطَّع ما ليس نصًا؟ — Tokenization Across Modalities

تعلّمت أن النموذج اللغوي يحوّل النص إلى رموز ثم إلى Embeddings. لكن الصورة ليست جملة. لذلك يقول المنهج إن **التقطيع يُكيَّف لكل نوع من البيانات**: فـ**الصور تُحوَّل إلى Embeddings باستخدام نماذج الرؤية واللغة، قبل أن يعالجها نموذج المحوّل**. بعد هذه الخطوة يصبح النص والصورة كلاهما متجهات يستطيع الـ Transformer أن يربط بينها، فيفهم أن عبارة «رسوم التوصيل» في قصة المستخدم مرتبطة بالسطر الذي يحمل «1.50 JOD» في لقطة الشاشة.

<figure class="gx-figure" aria-label="Multimodal flow: text and image inputs become embeddings, the transformer relates them, the model produces a text answer."><div class="gx-flow-row"><span class="gx-flow-node">Text<small>user story</small></span><span class="gx-flow-arrow" aria-hidden="true">+</span><span class="gx-flow-node">Image<small>screenshot</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Embeddings<small>per modality</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Transformer<small>links both</small></span></div><figcaption>Each modality is turned into embeddings first, then processed together.</figcaption></figure>

### نماذج الرؤية واللغة — Vision-Language Models

**نماذج الرؤية واللغة (Vision-Language Models / VLMs)** **مجموعة فرعية من النماذج متعددة الوسائط**، تختص بـ**دمج المعلومات المرئية والنصية**. يذكر المنهج لها ثلاث مهام:

- **وصف الصورة (Image captioning):** كتابة وصف نصي لما في الصورة. تعطي النموذج لقطة شاشة تتبّع الطلب، فيكتب: «شاشة تُظهر الطلب في حالة Out for delivery، مع خريطة واسم السائق وزر اتصال». مفيد عمليًا لتوثيق خطوات إعادة إنتاج defect، أو لفهم شاشة سريعًا قبل مراجعتها.
- **الإجابة عن أسئلة بصرية (Visual question answering):** تسأل عن محتوى الصورة وتحصل على جواب نصي: «هل تظهر رسوم التوصيل في شاشة الدفع؟ وما قيمتها؟»، أو «هل زر الإلغاء ظاهر في هذه الشاشة؟».
- **تحليل الاتساق بين المدخل النصي والمرئي:** هل يطابق ما يقوله النص ما يظهر في الصورة؟ تقرير defect يقول «زر الإلغاء مفقود في حالة Preparing»، بينما تُظهر اللقطة المرفقة الزر موجودًا لكن باهتًا وغير قابل للنقر. هذا تناقض يستحق سؤال المبلّغ قبل إصلاح شيء.

### الاستخدام في الاختبار — Use in Testing

يرى المنهج أن النماذج متعددة الوسائط، **وخاصة النماذج اللغوية المعزّزة بنماذج الرؤية واللغة**، تقدّم **فرصًا كبيرة** للاختبار. ويفصّلها في ثلاث نقاط:

**1. تحليل العناصر المرئية مع الوصف النصي المرافق.** يستطيع النموذج تحليل **لقطات الشاشة** و**مخططات الواجهة (GUI Wireframes)**، **مع** نصوص مرتبطة بها مثل **تقارير الـ defects** و**قصص المستخدم**. القيمة في كلمة «مع»: الصورة وحدها لا تقول ما هو المتوقع، والنص وحده لا يقول ما الذي ظهر فعلًا.

**2. كشف الاختلاف بين النتيجة المتوقعة والعناصر المرئية الفعلية.** مثال: قصة المستخدم تقول إن التوصيل مجاني للطلبات من 20.00 دينارًا فأكثر، مقيسةً **قبل** الخصم. تعطي النموذج هذا النص ولقطة شاشة دفع تُظهر: سلة بقيمة 22.00، وكوبون 10%، والمجموع بعد الخصم 19.80، ثم «رسوم التوصيل 1.50». يستطيع النموذج أن يربط بين الاثنين ويقترح هذا كاختلاف محتمل، لأن القيمة قبل الخصم تتجاوز الحد. لكنه لا يستطيع من الصورة وحدها أن يعرف إن كان الخادم قد حسب الرسوم فعلًا، أو أن الواجهة فقط تعرض قيمة قديمة؛ هذا يحتاج تنفيذًا.

**3. توليد حالات اختبار أغنى وأقرب للواقع تزيد التغطية.** يستطيع النموذج توليد حالات تجمع **البيانات النصية** و**الإشارات البصرية** معًا. من مخطط بطاقة الطلب في تطبيق السائق مع قصتها، قد يقترح حالات لم تكن لتخطر من النص وحده: عنوان عربي طويل جدًا، هل يُقطع أم يلتف؟ رقم هاتف داخل نص عربي، هل يظهر باتجاه صحيح؟ زر «فتح الخريطة» على شاشة صغيرة، هل يبقى ظاهرًا؟ هذا ما يقصده المنهج بزيادة التغطية الكلية.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">An image does not reveal server behaviour or every application state. Keep <strong>what the evidence shows</strong> separate from <strong>what needs execution to verify</strong>.</p><p class="gx-ar" lang="ar" dir="rtl">الصورة لا تكشف سلوك الخادم ولا كل حالات التطبيق. افصل <strong>ما يُظهره الدليل</strong> عن <strong>ما يحتاج تنفيذًا للتحقق منه</strong>.</p></aside>

### كتابة توجيه متعدد الوسائط وتنفيذه — Step by Step

يصف المنهج التمرين العملي في خطوتين: **مراجعة المدخلات**، ثم **تنفيذ التوجيه والتحقق من النتيجة الفعلية**. عمليًا يمكن تفصيلهما هكذا:

1. **راجع التوجيه:** هل يحدد المهمة بوضوح؟ هل يربط الصورة بالنص صراحةً («قارن اللقطة المرفقة بمعايير القبول التالية»)؟ هل يطلب فصل الملاحظة المرئية عن الاستنتاج، وذكر ما لا يمكن تأكيده؟
2. **راجع المدخلات:** هل الصورة مقروءة وبدقة كافية؟ هل هي من الإصدار والشاشة الصحيحين؟ هل النص كامل؟ وهل في اللقطة **بيانات شخصية**؟ لقطات تطبيق التوصيل قد تحمل أسماء العملاء وأرقام هواتفهم وعناوينهم؛ استخدم بيانات اختبار أو أخفِ هذه الحقول قبل الإرسال، وسنفصّل ذلك في الفصل الثالث.
3. **نفّذ** على نموذج يقبل الصور، وأرسل النص والصورة معًا في الطلب نفسه.
4. **تحقق من كل ملاحظة:** هل تستند إلى شيء ظاهر فعلًا في الصورة، وإلى متطلب موجود فعلًا في النص؟ صنّف كل ملاحظة: مدعومة، أو غير مثبتة من الصورة، أو مختلقة. وسجّل ما فات النموذج.

مثال على توجيه لشاشة الدفع:

```text
Attached: a checkout screenshot from the delivery app (Arabic UI) and the
acceptance criteria below. Compare them. For each discrepancy, quote the
visual evidence and the related criterion. List what you cannot confirm
from the image alone. Do not invent requirements.
```

### الفوائد والتحديات — Benefits and Challenges

يهدف التمرين أيضًا إلى أن **تدرك الفوائد والتحديات المحتملة**. هذا ملخص عملي لها:

| Benefits | Challenges |
| --- | --- |
| Links visual evidence with the written test basis | Low image quality or cropped screens |
| Faster review of many screens and languages | Behaviour behind the screen is invisible |
| Spots expected-vs-actual visual discrepancies | Hallucinated elements or invented requirements |
| Richer test cases from text plus visual cues | Personal data visible in screenshots |
| Helps check defect reports against their screenshots | Supported modalities differ per model |

### لا تخلط بين — Don't Confuse

| | Multimodal LLM | Vision-language model (VLM) |
| --- | --- | --- |
| Scope | Several modalities: text, images, sound, video | Visual + textual information specifically |
| Relation | The wider family | A subset of multimodal LLMs |
| Typical tasks | Any mix the model supports | Captioning, visual QA, text–image consistency |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Before each store release, the delivery app testers send the Arabic and English checkout screenshots together with the acceptance criteria to a multimodal model. In one sprint it flagged that the Arabic screen showed the delivery fee on a 22.00 JOD order with a coupon. The testers then placed a real test order to confirm the backend charged the fee too, and only then logged the defect with both the screenshot and the execution evidence.</p><p class="gx-ar" lang="ar" dir="rtl">قبل كل إصدار إلى المتاجر، يرسل مختبرو تطبيق التوصيل لقطات شاشة الدفع بالعربية والإنجليزية مع معايير القبول إلى نموذج متعدد الوسائط. في أحد الـ sprints نبّه النموذج إلى أن الشاشة العربية تعرض رسوم توصيل على طلب بقيمة 22.00 دينارًا مع كوبون. نفّذ المختبرون بعدها طلبًا تجريبيًا فعليًا ليتأكدوا أن الخادم احتسب الرسوم أيضًا، ثم سجّلوا الـ defect مع اللقطة ودليل التنفيذ معًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming that a model that accepts images also accepts video or produces audio. Supported inputs and outputs differ per model; check before you design a test task around them.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن النموذج الذي يقبل الصور يقبل الفيديو أيضًا أو يولّد صوتًا. المدخلات والمخرجات المدعومة تختلف من نموذج لآخر؛ تحقق قبل أن تبني مهمة اختبار عليها.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the VLM tasks by name: image captioning, visual question answering, and consistency analysis between text and image. In testing, the syllabus links them to comparing expected and actual visual elements and to richer test cases from text plus visual cues.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف مهام VLM بأسمائها: وصف الصورة، والإجابة عن أسئلة بصرية، وتحليل الاتساق بين النص والصورة. في الاختبار يربطها المنهج بمقارنة العناصر المرئية المتوقعة بالفعلية، وبحالات اختبار أغنى من النص والإشارات البصرية معًا.</p></aside>

<section class="gx-lab" data-lab="HO-1.1.4"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Review a Sign-up Form with Image + Text</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · مراجعة نموذج تسجيل بالصورة والنص</span></span><span class="gx-lab-meta">HO-1.1.4 · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> review a sign-up form using the image and the requirements together. The wireframe below is an original teaching example. Take a screenshot of it to use in the lab; the fields are display only.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> مراجعة نموذج تسجيل باستخدام الصورة والمتطلبات معًا. المخطط التالي مثال تعليمي أصلي؛ خذ لقطة شاشة له لتستخدمها في التمرين، والحقول للعرض فقط.</span></p><div class="example-wireframe" role="img" aria-label="Teaching wireframe: Create account heading, Email field, Password field and Create account button. No message explains the password rules."><strong>Create account</strong><span>Email</span><div class="wire-input">name@example.com</div><span>Password</span><div class="wire-input">••••••••</div><div class="wire-button">Create account</div></div><p><span class="gx-en" lang="en" dir="ltr"><strong>Written requirements:</strong> Email is required. The password must be at least 12 characters. Password rules must be shown to the user before submitting. The requirements contain no rule about special characters or SMS verification.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المتطلبات المكتوبة:</strong> البريد إلزامي. كلمة المرور لا تقل عن 12 محرفًا. يجب عرض شروط كلمة المرور للمستخدم قبل الإرسال. لا توجد في المتطلبات قاعدة عن الرموز الخاصة أو التحقق عبر SMS.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Check the inputs: the image is readable, the requirements are complete, and nothing contains real personal data.</span><span class="gx-ar" lang="ar" dir="rtl">راجع المدخلات: الصورة مقروءة، والمتطلبات كاملة، ولا يوجد فيها بيانات شخصية حقيقية.</span></li><li><span class="gx-en" lang="en" dir="ltr">Send the text and the image to a model that accepts visual input, using the prompt below.</span><span class="gx-ar" lang="ar" dir="rtl">أرسل النص والصورة إلى نموذج يقبل الإدخال المرئي، باستخدام التوجيه التالي.</span></li><li><span class="gx-en" lang="en" dir="ltr">Compare each finding in the response with the evidence and record any hallucination or anything the model missed.</span><span class="gx-ar" lang="ar" dir="rtl">قارن كل ملاحظة في الرد بالدليل، وسجّل أي هلوسة أو أي شيء فات النموذج.</span></li></ol><pre class="gx-lab-prompt"><code>Review the attached sign-up form image and requirements.
List the differences you can observe from the image only.
For each finding, cite the visual evidence and the related requirement.
Suggest test cases, and separate what needs execution from visual observations.
Do not add new requirements, and state what you cannot confirm.</code></pre><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Model analysis</span><span class="gx-ar" lang="ar" dir="rtl">تحليل نموذجي</span></p><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Finding</span><span class="gx-ar" lang="ar" dir="rtl">الملاحظة</span></th><th><span class="gx-en" lang="en" dir="ltr">Assessment</span><span class="gx-ar" lang="ar" dir="rtl">التقييم</span></th><th><span class="gx-en" lang="en" dir="ltr">Why</span><span class="gx-ar" lang="ar" dir="rtl">السبب</span></th></tr></thead><tbody><tr><td><span class="gx-en" lang="en" dir="ltr">Password rules are not shown in the wireframe</span><span class="gx-ar" lang="ar" dir="rtl">شروط كلمة المرور غير ظاهرة في المخطط</span></td><td><span class="gx-en" lang="en" dir="ltr">Supported observation</span><span class="gx-ar" lang="ar" dir="rtl">ملاحظة مدعومة</span></td><td><span class="gx-en" lang="en" dir="ltr">The text requires them; the wireframe does not show them.</span><span class="gx-ar" lang="ar" dir="rtl">النص يطلب عرضها، والمخطط لا يعرضها.</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">The app accepts an 8-character password</span><span class="gx-ar" lang="ar" dir="rtl">التطبيق يقبل كلمة مرور من 8 محارف</span></td><td><span class="gx-en" lang="en" dir="ltr">Not proven by the image</span><span class="gx-ar" lang="ar" dir="rtl">غير مثبتة بالصورة</span></td><td><span class="gx-en" lang="en" dir="ltr">The number of dots shown proves neither the validation nor the real length.</span><span class="gx-ar" lang="ar" dir="rtl">عدد النقاط الظاهرة لا يثبت آلية التحقق ولا الطول الفعلي.</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">An SMS code must be sent</span><span class="gx-ar" lang="ar" dir="rtl">يجب إرسال رمز SMS</span></td><td><span class="gx-en" lang="en" dir="ltr">Invented requirement</span><span class="gx-ar" lang="ar" dir="rtl">متطلب مختلق</span></td><td><span class="gx-en" lang="en" dir="ltr">The requirements do not say so.</span><span class="gx-ar" lang="ar" dir="rtl">المتطلبات لم تنص على ذلك.</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Try passwords of 11 and 12 characters</span><span class="gx-ar" lang="ar" dir="rtl">جرّب كلمات مرور من 11 و12 محرفًا</span></td><td><span class="gx-en" lang="en" dir="ltr">Suitable test idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة اختبار مناسبة</span></td><td><span class="gx-en" lang="en" dir="ltr">Directly tied to the stated minimum.</span><span class="gx-ar" lang="ar" dir="rtl">مرتبطة مباشرة بالحد الأدنى المذكور.</span></td></tr></tbody></table><p><span class="gx-en" lang="en" dir="ltr">This is a suggested teaching answer, not guaranteed output from a live run.</span><span class="gx-ar" lang="ar" dir="rtl">هذه إجابة تعليمية مقترحة، وليست ناتجًا مضمونًا من تجربة حيّة.</span></p><details class="gx-lab-answer"><summary>What to watch · <span class="gx-ar-inline" lang="ar" dir="rtl">ما الذي يجب الانتباه له</span></summary><p><span class="gx-en" lang="en" dir="ltr">The task is not just uploading an image. It is combining <strong>text and image</strong> in a clear testing task, then reviewing the result. Typical challenges: poor image quality, ambiguous requirements, and inferring behaviour that cannot be seen.</span><span class="gx-ar" lang="ar" dir="rtl">المهمة ليست رفع صورة فقط، بل دمج <strong>النص والصورة</strong> في مهمة اختبار واضحة ثم مراجعة النتيجة. التحديات المعتادة: رداءة الصورة، وغموض المتطلبات، واستنتاج سلوك لا يمكن رؤيته.</span></p></details></div></section>

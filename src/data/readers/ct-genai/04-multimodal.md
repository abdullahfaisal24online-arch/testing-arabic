---
order: 4
slug: "1-1-4"
chapter: 1
group: "1.1"
section: "1.1.4"
title: "Multimodal LLMs and Vision-Language Models"
titleAr: "النماذج متعددة الوسائط ونماذج الرؤية واللغة"
objectives: "GenAI-1.1.4 · K2 / HO-1.1.4 · H1"
minutes: 9
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
takeawaysAr:
  - "المدخلات متعددة الوسائط توسّع السياق المتاح للمختبِر وللنموذج."
  - "القيمة تأتي من الربط بين الدليل المرئي والوصف المكتوب."
  - "افصل ما تُظهره الصورة عمّا يحتاج تنفيذًا للتحقق منه."
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
---
تتعامل **النماذج متعددة الوسائط (Multimodal LLMs)** مع أكثر من نوع من البيانات، مثل النص والصورة والصوت والفيديو. إمكانات الإدخال والإخراج تختلف من نموذج لآخر؛ دعم الصور لا يعني تلقائيًا دعم الفيديو أو توليد الصوت.

تمدّ هذه النماذج بنية Transformer لتشمل وسائط متعددة، وتُدرَّب على بيانات متنوعة لتتعلّم العلاقات بين هذه الوسائط. ويتكيّف التقطيع مع نوع الوسيط: لا تُعامل الصورة حرفيًا كجملة نصية، بل تُحوّل أولًا إلى Embeddings، ثم يعالجها الـ Transformer ويربطها بالنص.

**نماذج الرؤية واللغة (Vision-Language Models / VLMs)** مجموعة فرعية من النماذج متعددة الوسائط تجمع المعلومات المرئية والنصية تحديدًا. أبرز مهامها:

- **وصف الصورة (Image captioning):** كتابة وصف نصي لما في لقطة الشاشة.
- **الإجابة عن أسئلة بصرية (Visual question answering):** مثل «هل زر الحفظ ظاهر في هذه الشاشة؟».
- **تحليل الاتساق بين النص والصورة:** هل ما يقوله تقرير العيب أو قصة المستخدم يطابق ما يظهر فعلًا؟

<figure class="gx-figure" aria-label="Multimodal flow: text and image inputs become embeddings, the transformer relates them, the model produces a text answer."><div class="gx-flow-row"><span class="gx-flow-node">Text<small>user story</small></span><span class="gx-flow-arrow" aria-hidden="true">+</span><span class="gx-flow-node">Image<small>screenshot</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Embeddings<small>per modality</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Transformer<small>links both</small></span></div><figcaption>Each modality is turned into embeddings first, then processed together.</figcaption></figure>

### الاستخدام في الاختبار — Use in Testing

يمكن تزويد النموذج بصورة شاشة أو مخطط واجهة **GUI Wireframe**، مع قصة مستخدم أو وصف عيب. يتيح ذلك:

- مقارنة عنصر مرئي بنتيجة متوقعة مكتوبة، والإشارة إلى اختلاف محتمل.
- توليد حالات اختبار أغنى وأقرب للواقع تجمع المتطلبات النصية مع عناصر الواجهة المرئية، مما يزيد التغطية.
- تحليل اتساق وصف العيب مع لقطة الشاشة، وطلب معلومات مفقودة.

مثال عملي: تعطي النموذج قصة مستخدم تقول «يظهر للمستخدم سعر المنتج شاملًا الضريبة» ولقطة شاشة لصفحة الدفع. يستطيع النموذج أن يلاحظ أن السعر المعروض لا يحمل أي إشارة للضريبة، فيقترحه كاختلاف محتمل، ويقترح حالة اختبار تتحقق من حساب الضريبة. لكنه لا يستطيع من الصورة وحدها أن يعرف إذا كان الرقم المعروض يتضمن الضريبة فعلًا.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">An image does not reveal server behaviour or every application state. Keep <strong>what the evidence shows</strong> separate from <strong>what needs execution to verify</strong>.</p><p class="gx-ar" lang="ar" dir="rtl">الصورة لا تكشف سلوك الخادم ولا كل حالات التطبيق. افصل <strong>ما يُظهره الدليل</strong> عن <strong>ما يحتاج تنفيذًا للتحقق منه</strong>.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming that a model that accepts images also accepts video or produces audio. Supported inputs and outputs differ per model; check before you design a test task around them.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن النموذج الذي يقبل الصور يقبل الفيديو أيضًا أو يولّد صوتًا. المدخلات والمخرجات المدعومة تختلف من نموذج لآخر؛ تحقق قبل أن تبني مهمة اختبار عليها.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the VLM tasks by name: image captioning, visual question answering, and consistency analysis between text and image. In testing, the syllabus links them to comparing expected and actual visual elements and to richer test cases from text plus visual cues.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف مهام VLM بأسمائها: وصف الصورة، والإجابة عن أسئلة بصرية، وتحليل الاتساق بين النص والصورة. في الاختبار يربطها المنهج بمقارنة العناصر المرئية المتوقعة بالفعلية، وبحالات اختبار أغنى من النص والإشارات البصرية معًا.</p></aside>

<section class="gx-lab" data-lab="HO-1.1.4"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Review a Sign-up Form with Image + Text</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · مراجعة نموذج تسجيل بالصورة والنص</span></span><span class="gx-lab-meta">HO-1.1.4 · H1</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> review a sign-up form using the image and the requirements together. The wireframe below is an original teaching example. Take a screenshot of it to use in the lab; the fields are display only.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> مراجعة نموذج تسجيل باستخدام الصورة والمتطلبات معًا. المخطط التالي مثال تعليمي أصلي؛ خذ لقطة شاشة له لتستخدمها في التمرين، والحقول للعرض فقط.</span></p><div class="example-wireframe" role="img" aria-label="Teaching wireframe: Create account heading, Email field, Password field and Create account button. No message explains the password rules."><strong>Create account</strong><span>Email</span><div class="wire-input">name@example.com</div><span>Password</span><div class="wire-input">••••••••</div><div class="wire-button">Create account</div></div><p><span class="gx-en" lang="en" dir="ltr"><strong>Written requirements:</strong> Email is required. The password must be at least 12 characters. Password rules must be shown to the user before submitting. The requirements contain no rule about special characters or SMS verification.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المتطلبات المكتوبة:</strong> البريد إلزامي. كلمة المرور لا تقل عن 12 محرفًا. يجب عرض شروط كلمة المرور للمستخدم قبل الإرسال. لا توجد في المتطلبات قاعدة عن الرموز الخاصة أو التحقق عبر SMS.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Check the inputs: the image is readable, the requirements are complete, and nothing contains real personal data.</span><span class="gx-ar" lang="ar" dir="rtl">راجع المدخلات: الصورة مقروءة، والمتطلبات كاملة، ولا يوجد فيها بيانات شخصية حقيقية.</span></li><li><span class="gx-en" lang="en" dir="ltr">Send the text and the image to a model that accepts visual input, using the prompt below.</span><span class="gx-ar" lang="ar" dir="rtl">أرسل النص والصورة إلى نموذج يقبل الإدخال المرئي، باستخدام التوجيه التالي.</span></li><li><span class="gx-en" lang="en" dir="ltr">Compare each finding in the response with the evidence and record any hallucination or anything the model missed.</span><span class="gx-ar" lang="ar" dir="rtl">قارن كل ملاحظة في الرد بالدليل، وسجّل أي هلوسة أو أي شيء فات النموذج.</span></li></ol><pre class="gx-lab-prompt"><code>Review the attached sign-up form image and requirements.
List the differences you can observe from the image only.
For each finding, cite the visual evidence and the related requirement.
Suggest test cases, and separate what needs execution from visual observations.
Do not add new requirements, and state what you cannot confirm.</code></pre><p class="gx-lab-subhead"><span class="gx-en" lang="en" dir="ltr">Model analysis</span><span class="gx-ar" lang="ar" dir="rtl">تحليل نموذجي</span></p><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Finding</span><span class="gx-ar" lang="ar" dir="rtl">الملاحظة</span></th><th><span class="gx-en" lang="en" dir="ltr">Assessment</span><span class="gx-ar" lang="ar" dir="rtl">التقييم</span></th><th><span class="gx-en" lang="en" dir="ltr">Why</span><span class="gx-ar" lang="ar" dir="rtl">السبب</span></th></tr></thead><tbody><tr><td><span class="gx-en" lang="en" dir="ltr">Password rules are not shown in the wireframe</span><span class="gx-ar" lang="ar" dir="rtl">شروط كلمة المرور غير ظاهرة في المخطط</span></td><td><span class="gx-en" lang="en" dir="ltr">Supported observation</span><span class="gx-ar" lang="ar" dir="rtl">ملاحظة مدعومة</span></td><td><span class="gx-en" lang="en" dir="ltr">The text requires them; the wireframe does not show them.</span><span class="gx-ar" lang="ar" dir="rtl">النص يطلب عرضها، والمخطط لا يعرضها.</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">The app accepts an 8-character password</span><span class="gx-ar" lang="ar" dir="rtl">التطبيق يقبل كلمة مرور من 8 محارف</span></td><td><span class="gx-en" lang="en" dir="ltr">Not proven by the image</span><span class="gx-ar" lang="ar" dir="rtl">غير مثبتة بالصورة</span></td><td><span class="gx-en" lang="en" dir="ltr">The number of dots shown proves neither the validation nor the real length.</span><span class="gx-ar" lang="ar" dir="rtl">عدد النقاط الظاهرة لا يثبت آلية التحقق ولا الطول الفعلي.</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">An SMS code must be sent</span><span class="gx-ar" lang="ar" dir="rtl">يجب إرسال رمز SMS</span></td><td><span class="gx-en" lang="en" dir="ltr">Invented requirement</span><span class="gx-ar" lang="ar" dir="rtl">متطلب مختلق</span></td><td><span class="gx-en" lang="en" dir="ltr">The requirements do not say so.</span><span class="gx-ar" lang="ar" dir="rtl">المتطلبات لم تنص على ذلك.</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Try passwords of 11 and 12 characters</span><span class="gx-ar" lang="ar" dir="rtl">جرّب كلمات مرور من 11 و12 محرفًا</span></td><td><span class="gx-en" lang="en" dir="ltr">Suitable test idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة اختبار مناسبة</span></td><td><span class="gx-en" lang="en" dir="ltr">Directly tied to the stated minimum.</span><span class="gx-ar" lang="ar" dir="rtl">مرتبطة مباشرة بالحد الأدنى المذكور.</span></td></tr></tbody></table><p><span class="gx-en" lang="en" dir="ltr">This is a suggested teaching answer, not guaranteed output from a live run.</span><span class="gx-ar" lang="ar" dir="rtl">هذه إجابة تعليمية مقترحة، وليست ناتجًا مضمونًا من تجربة حيّة.</span></p><details class="gx-lab-answer"><summary>What to watch · <span class="gx-ar-inline" lang="ar" dir="rtl">ما الذي يجب الانتباه له</span></summary><p><span class="gx-en" lang="en" dir="ltr">The task is not just uploading an image. It is combining <strong>text and image</strong> in a clear testing task, then reviewing the result. Typical challenges: poor image quality, ambiguous requirements, and inferring behaviour that cannot be seen.</span><span class="gx-ar" lang="ar" dir="rtl">المهمة ليست رفع صورة فقط، بل دمج <strong>النص والصورة</strong> في مهمة اختبار واضحة ثم مراجعة النتيجة. التحديات المعتادة: رداءة الصورة، وغموض المتطلبات، واستنتاج سلوك لا يمكن رؤيته.</span></p></details></div></section>

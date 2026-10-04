---
order: 4
slug: "1-1-4"
chapter: 1
group: "1.1"
section: "1.1.4"
title: "Multimodal LLMs and Vision-Language Models"
titleAr: "النماذج متعددة الوسائط ونماذج الرؤية واللغة"
objectives: "GenAI-1.1.4 · K2 / HO-1.1.4 · H1"
minutes: 6
takeaways:
  - "Multimodal input widens the context available to the tester and the model."
  - "The value comes from linking visual evidence with the written description."
  - "Keep what the image shows separate from what needs execution to verify."
terms:
  - en: "Multimodal LLM"
    ar: "النموذج متعدد الوسائط"
    def: "A model that handles more than one data type, such as text, images, audio or video. Supported inputs and outputs differ per model."
    match: ["Multimodal LLMs", "Multimodal"]
  - en: "VLM"
    ar: "نموذج الرؤية واللغة"
    def: "Vision-Language Model. Combines visual and textual information to describe images, answer questions about them, or check text against visuals."
    match: ["Vision-Language Models", "VLMs"]
  - en: "GUI Wireframe"
    ar: "مخطط الواجهة"
    def: "A simple layout sketch of a screen that shows its elements without final visual design."
---
تتعامل **النماذج متعددة الوسائط (Multimodal LLMs)** مع أكثر من نوع من البيانات، مثل النص والصورة والصوت والفيديو. إمكانات الإدخال والإخراج تختلف من نموذج لآخر؛ دعم الصور لا يعني تلقائيًا دعم الفيديو أو توليد الصوت.

تتكيّف طريقة تمثيل المدخلات مع نوع الوسيط. لا تُعامل الصورة حرفيًا كجملة نصية، بل تُحوّل معلوماتها إلى تمثيلات يستطيع النظام معالجتها وربطها بالنص.

**نماذج الرؤية واللغة (Vision-Language Models / VLMs)** تجمع المعلومات المرئية والنصية. يمكن استخدامها لوصف صورة، والإجابة عن أسئلة مرتبطة بها، وتحليل مدى اتساق النص مع ما يظهر بصريًا.

### الاستخدام في الاختبار — Use in Testing

يمكن تزويد النموذج بصورة شاشة أو مخطط واجهة **GUI Wireframe**، مع قصة مستخدم أو وصف عيب. يتيح ذلك:

- مقارنة عنصر مرئي بنتيجة متوقعة مكتوبة، والإشارة إلى اختلاف محتمل.
- اقتراح حالات اختبار تجمع المتطلبات النصية مع عناصر الواجهة المرئية.
- تحليل اتساق وصف العيب مع لقطة الشاشة، وطلب معلومات مفقودة.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea</p><p>An image does not reveal server behaviour or every application state. Keep <strong>what the evidence shows</strong> separate from <strong>what needs execution to verify</strong>.</p></aside>

<section class="gx-lab" data-lab="HO-1.1.4"><header class="gx-lab-head"><span class="gx-lab-title">Lab · Review a Sign-up Form with Image + Text</span><span class="gx-lab-meta">HO-1.1.4 · H1</span></header><div class="gx-lab-body"><p><strong>Goal:</strong> review a sign-up form using the image and the requirements together. The wireframe below is an original teaching example. Take a screenshot of it to use in the lab; the fields are display only.</p><div class="example-wireframe" role="img" aria-label="Teaching wireframe: Create account heading, Email field, Password field and Create account button. No message explains the password rules."><strong>Create account</strong><span>Email</span><div class="wire-input">name@example.com</div><span>Password</span><div class="wire-input">••••••••</div><div class="wire-button">Create account</div></div><p><strong>Written requirements:</strong> Email is required. The password must be at least 12 characters. Password rules must be shown to the user before submitting. The requirements contain no rule about special characters or SMS verification.</p><ol class="gx-lab-steps"><li>Check the inputs: the image is readable, the requirements are complete, and nothing contains real personal data.</li><li>Send the text and the image to a model that accepts visual input, using the prompt below.</li><li>Compare each finding in the response with the evidence and record any hallucination or anything the model missed.</li></ol><pre class="gx-lab-prompt"><code>Review the attached sign-up form image and requirements.
List the differences you can observe from the image only.
For each finding, cite the visual evidence and the related requirement.
Suggest test cases, and separate what needs execution from visual observations.
Do not add new requirements, and state what you cannot confirm.</code></pre><p class="gx-lab-subhead">Model analysis</p><table><thead><tr><th>Finding</th><th>Assessment</th><th>Why</th></tr></thead><tbody><tr><td>Password rules are not shown in the wireframe</td><td>Supported observation</td><td>The text requires them; the wireframe does not show them.</td></tr><tr><td>The app accepts an 8-character password</td><td>Not proven by the image</td><td>The number of dots shown proves neither the validation nor the real length.</td></tr><tr><td>An SMS code must be sent</td><td>Invented requirement</td><td>The requirements do not say so.</td></tr><tr><td>Try passwords of 11 and 12 characters</td><td>Suitable test idea</td><td>Directly tied to the stated minimum.</td></tr></tbody></table><p>This is a suggested teaching answer, not guaranteed output from a live run.</p><details class="gx-lab-answer"><summary>What to watch</summary><p>The task is not just uploading an image. It is combining <strong>text and image</strong> in a clear testing task, then reviewing the result. Typical challenges: poor image quality, ambiguous requirements, and inferring behaviour that cannot be seen.</p></details></div></section>

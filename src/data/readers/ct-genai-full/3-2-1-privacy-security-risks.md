---
order: 5
slug: "3-2-1"
chapter: 3
group: "3.2"
section: "3.2.1"
title: "Data Privacy and Security Risks Associated with Using Generative AI"
titleAr: "مخاطر خصوصية البيانات والأمن المرتبطة باستخدام الذكاء التوليدي"
objectives: "GenAI-3.2.1 · K2"
minutes: 4
lo:
  GenAI-3.2.1: "Explain the main data privacy and security risks of using GenAI in testing."
takeaways:
  - "Privacy risks: unintended exposure of sensitive data, loss of control over how data is used, and non-compliance with data protection rules such as GDPR."
  - "Security risks: attacks on the test infrastructure, exploitation of the model, and malicious input that misleads it."
  - "The weak point can be the database, the API or tool permissions, not only the model."
terms:
  - en: "GDPR"
    ar: "اللائحة العامة لحماية البيانات"
    def: "The EU General Data Protection Regulation, Regulation (EU) 2016/679, cited in the syllabus as an example of a data protection framework."
---
سجلات الاختبار ولقطات الشاشة وتقارير العيوب قد تتضمن أسماء وبريدًا وبيانات سرية أو مفاتيح وصول. إدخالها إلى أداة GenAI ينشئ مسار معالجة جديدًا يجب فهمه: أين تُخزَّن، وما الذي يُسجَّل، ومن هو المزود، ومن يستطيع الوصول.

### مخاطر الخصوصية — Data Privacy Risks

- **كشف غير مقصود:** قد تكشف النماذج معلومات حساسة في مخرجاتها.
- **فقد السيطرة على استخدام البيانات:** قد تخزّن الأداة البيانات الحساسة وتعالجها دون موافقة أو تحكم صريح، فيحدث سوء استخدام أو وصول غير مصرح.
- **مخاطر الامتثال:** استخدام أدوات GenAI دون الالتزام بأنظمة حماية البيانات، مثل **GDPR**، قد يؤدي إلى نزاعات قانونية.

### المخاطر الأمنية — Security Risks

- **ثغرات البنية التحتية:** بنية الاختبار المعتمدة على النماذج قد تتعرض لاختراق بيانات أو وصول غير مصرح.
- **استغلال النموذج:** هجمات تلاعب تغيّر سلوك النموذج أو تستخرج معلومات حساسة.
- **مدخلات خبيثة:** بيانات يدخلها مهاجم عمدًا لتضليل النموذج والإضرار بدقة النتائج وأمنها.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea</p><p>GDPR is the syllabus example of a data protection framework. This is study material, not a statement of the legal obligations of any specific project.</p></aside>

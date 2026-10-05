---
order: 7
slug: "3-2-3"
chapter: 3
group: "3.2"
section: "3.2.3"
title: "Mitigation Strategies to Protect Data Privacy and Enhance Security in Testing with Generative AI"
titleAr: "استراتيجيات حماية الخصوصية وتعزيز الأمن في الاختبار بالذكاء التوليدي"
objectives: "GenAI-3.2.3 · K2 / HO-3.2.3 · H0"
minutes: 10
lo:
  GenAI-3.2.3: "Summarise strategies that protect privacy and improve security when testing with GenAI."
  HO-3.2.3: "Recognise privacy and security risks in a given GenAI testing case study."
loAr:
  GenAI-3.2.3: "تلخّص استراتيجيات حماية الخصوصية وتعزيز الأمن عند الاختبار بالذكاء التوليدي."
  HO-3.2.3: "تتعرّف على مخاطر الخصوصية والأمن في دراسة حالة معطاة عن الاختبار بالذكاء التوليدي."
takeaways:
  - "Send only what the task needs, and anonymise or mask sensitive data first."
  - "Secure transfer and storage, control access, set clear policies and train people."
  - "Review outputs, especially generated code, before running anything."
  - "Pick the deployment by sensitivity, and run regular audits and vulnerability assessments."
takeawaysAr:
  - "أرسل فقط ما تحتاجه المهمة، وأخفِ البيانات الحساسة أو أزلها أولًا."
  - "أمّن النقل والتخزين، وتحكّم بالوصول، وضع سياسات واضحة ودرّب الفريق."
  - "راجع المخرجات، خصوصًا الشيفرة المولّدة، قبل تشغيل أي شيء."
  - "اختر بيئة التشغيل حسب السرية، ونفّذ تدقيقًا أمنيًا وتقييمًا للثغرات بشكل دوري."
terms:
  - en: "Data Minimization"
    ar: "تقليل البيانات"
    def: "Sending only the data a task actually needs."
    defAr: "إرسال البيانات التي تحتاجها المهمة فعلًا فقط."
  - en: "Anonymization"
    ar: "إخفاء الهوية"
    def: "Processing data so it can no longer be linked to a person."
    defAr: "معالجة البيانات بحيث لا يمكن ربطها بشخص."
  - en: "Pseudonymization"
    ar: "الترميز المستعار"
    def: "Replacing identifiers with codes that can still be linked back using extra information, so it is weaker than anonymization."
    defAr: "استبدال المعرّفات برموز يمكن إعادة ربطها بمعلومات إضافية، لذلك هو أضعف من إخفاء الهوية."
---
مع انتشار الذكاء التوليدي ومخاطره، تظهر تنظيمات ومعايير للحد منها (انظر 3.4.1). وأنظمة حماية البيانات مثل GDPR لا تمنع استخدام GenAI صراحةً، لكنها تضع ضمانات قد تحدّ مما يمكن فعله، خصوصًا فيما يتعلق بمشروعية جمع البيانات ومعالجتها وتخزينها، وتقييد أغراض ذلك.

### إجراءات حماية الخصوصية — Data Privacy Measures

- **تقليل البيانات (Data minimization):** تجنّب معالجة البيانات الحساسة ما لم يكن ذلك مسموحًا قانونيًا، واستخدام الحد الأدنى اللازم من البيانات غير الحساسة فقط.
- **إخفاء الهوية والترميز المستعار (Anonymization and pseudonymization):** إخفاء المعلومات الحساسة أو استبدالها ببيانات لا تكشف الهوية، في بيانات الاختبار والمتطلبات وتقارير العيوب. **Anonymization** يمنع ربط البيانات بالشخص، أما **Pseudonymization** فيستبدل المعرّفات مع بقاء إمكانية إعادة الربط.
- **تأمين التخزين والنقل:** تشفير قوي وضوابط وصول، وإتاحة البيانات الضرورية فقط للنموذج.
- **تدريب الموارد البشرية:** برامج تدريب وسياسات واضحة تضمن الاستخدام المسؤول لأدوات GenAI، وتعزز الممارسات الأخلاقية.

### استراتيجيات إضافية — Additional Strategies

- **مراجعة منهجية للمخرجات:** التقييم البشري ضروري لضمان جودة ودقة مهام الاختبار بالذكاء التوليدي، خصوصًا فحص الشيفرة والسكربتات المولّدة بحثًا عن أبواب خلفية أو أوامر غير مقصودة.
- **المقارنة مع نموذج آخر:** تشغيل أكثر من نموذج على المهمة نفسها ومقارنة الردود. تذكّر أن إرسال البيانات إلى مزود ثانٍ يحتاج صلاحية هو الآخر.
- **اختيار بيئة تشغيل آمنة:** حسب مستوى السرية المطلوب: عرض تجاري آمن من مزود النموذج، أو تشغيل النموذج في سحابة آمنة، أو تثبيته داخل بنية المؤسسة. كلمة «داخلي» لا تعفي من تأمين الصلاحيات والتحديثات.
- **تدقيق أمني دوري وتقييم الثغرات:** لاكتشاف نقاط الضعف في أنظمة GenAI ومعالجتها.
- **متابعة أفضل الممارسات الأمنية:** البقاء على اطلاع بأحدث الإرشادات والتقنيات الأمنية.

هذه الاستراتيجيات تكمّل بعضها، ولا تكفي واحدة منها وحدها. ويُنصح بإشراك مهندسي الأمن الكبار، والمستشار القانوني، والمدير التقني (CTO)، أو مدير أمن المعلومات (CISO) إن وُجد في المؤسسة.

### ربط الاستراتيجيات بالمخاطر — Mapping Strategies to Risks

| Risk | الاستراتيجية الأنسب |
|---|---|
| كشف بيانات حساسة | تقليل البيانات وإخفاء الهوية قبل الإرسال |
| فقد السيطرة على استخدام البيانات | اختيار بيئة مناسبة ومراجعة سياسات المزود |
| مخاطر الامتثال | سياسات واضحة ومراجعة قانونية ومتابعة الامتثال |
| وصول غير مصرّح | ضوابط الوصول والتشفير ومراقبة الاستخدام |
| مدخلات خبيثة أو تلاعب | فحص المدخلات واعتبار النص المضمّن بيانات لا تعليمات |
| شيفرة ضارة | مراجعة الشيفرة المولّدة وتشغيلها في بيئة معزولة |
| ثغرات غير معروفة | تدقيق أمني دوري وتقييم ثغرات |

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-ar">خطأ شائع</span><span class="gx-en" lang="en" dir="ltr">Common mistake</span></p><p class="gx-ar">وصف البيانات بأنها مجهولة الهوية بعد استبدال الأسماء بأرقام، بينما يوجد جدول يربط الأرقام بالأشخاص. هذا ترميز مستعار: الربط ممكن استعادته، فاحمِ جدول الربط واسأل إن كانت البيانات لازمة أصلًا.</p><p class="gx-en" lang="en" dir="ltr">Calling data anonymous after replacing names with numbers while a table still maps numbers to people. That is pseudonymization: the link can be restored, so protect the mapping and question whether the data is needed at all.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">توقّع أسئلة من نوع «أي استراتيجية تناسب هذا الخطر؟». الخطوة الأولى الأقوى غالبًا ألا ترسل البيانات الحساسة أصلًا: قلّلها أو أخفِ هويتها أو حجبها قبل أن تصل للأداة.</p><p class="gx-en" lang="en" dir="ltr">Expect “which strategy fits this risk?” questions. The strongest first step is usually not sending sensitive data at all: minimise, anonymise or mask it before it reaches the tool.</p></aside>

<section class="gx-lab" data-lab="HO-3.2.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-ar">دراسة حالة · اكتشف المخاطر</span><span class="gx-en" lang="en" dir="ltr">Case Study · Spot the Risks</span></span><span class="gx-lab-meta">HO-3.2.3 · H0</span></header><div class="gx-lab-body"><p><span class="gx-ar"><strong>الحالة:</strong> مختبِر يريد ملخصًا لتقرير فشل. التقرير يحتوي بريد عميل ورمز جلسة (Session token). الأداة تحتفظ بسجل المحادثات. والسكربت المقترح يتصل بخدمة لا يحتاجها الاختبار.</span><span class="gx-en" lang="en" dir="ltr"><strong>Case:</strong> a tester wants a summary of a failure report. The report contains a customer's email and a session token. The tool keeps chat history. The suggested script connects to a service the test does not need.</span></p><table><thead><tr><th><span class="gx-ar">الملاحظة</span><span class="gx-en" lang="en" dir="ltr">Observation</span></th><th><span class="gx-ar">الخطر</span><span class="gx-en" lang="en" dir="ltr">Risk</span></th><th><span class="gx-ar">الإجراء المناسب</span><span class="gx-en" lang="en" dir="ltr">Suitable action</span></th></tr></thead><tbody><tr><td><span class="gx-ar">بريد العميل</span><span class="gx-en" lang="en" dir="ltr">Customer email</span></td><td><span class="gx-ar">كشف هوية دون حاجة</span><span class="gx-en" lang="en" dir="ltr">Identity exposed with no need</span></td><td><span class="gx-ar">استبداله ببيانات تدريبية مناسبة</span><span class="gx-en" lang="en" dir="ltr">Replace with suitable training data</span></td></tr><tr><td><span class="gx-ar">رمز الجلسة</span><span class="gx-en" lang="en" dir="ltr">Session token</span></td><td><span class="gx-ar">تسريب وصول</span><span class="gx-en" lang="en" dir="ltr">Access leak</span></td><td><span class="gx-ar">إزالته ومعالجة التعرّض وفق سياسة الأمن</span><span class="gx-en" lang="en" dir="ltr">Remove it and handle the exposure per security policy</span></td></tr><tr><td><span class="gx-ar">الاحتفاظ بالمحادثة</span><span class="gx-en" lang="en" dir="ltr">Chat retention</span></td><td><span class="gx-ar">فقد السيطرة على دورة حياة البيانات</span><span class="gx-en" lang="en" dir="ltr">Loss of control over the data lifecycle</span></td><td><span class="gx-ar">مراجعة سياسة الأداة وضبط الاحتفاظ والوصول</span><span class="gx-en" lang="en" dir="ltr">Check the tool policy; configure retention and access</span></td></tr><tr><td><span class="gx-ar">اتصال خارجي في السكربت</span><span class="gx-en" lang="en" dir="ltr">External call in the script</span></td><td><span class="gx-ar">تسريب بيانات أو سلوك غير مرغوب</span><span class="gx-en" lang="en" dir="ltr">Data leak or unwanted behaviour</span></td><td><span class="gx-ar">رفضه ومراجعة الشيفرة قبل أي تشغيل</span><span class="gx-en" lang="en" dir="ltr">Reject it and review the code before any run</span></td></tr></tbody></table><p><span class="gx-ar">فكّر أيضًا: من يستطيع قراءة المحادثة، وما الذي تسجّله البنية التحتية، وكيف يُراقَب الاستخدام. ابدأ بفحص المدخلات والبيئة والصلاحيات، لا بإرسال البيانات أولًا ثم المعالجة لاحقًا.</span><span class="gx-en" lang="en" dir="ltr">Also consider who can read the chat, what the infrastructure logs, and how usage is monitored. Start by checking the input, the environment and the permissions, not by sending the data first and fixing later.</span></p></div></section>

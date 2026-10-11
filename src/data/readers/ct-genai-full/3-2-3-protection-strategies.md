---
order: 7
slug: "3-2-3"
chapter: 3
group: "3.2"
section: "3.2.3"
title: "Mitigation Strategies to Protect Data Privacy and Enhance Security in Testing with Generative AI"
titleAr: "استراتيجيات حماية الخصوصية وتعزيز الأمن في الاختبار بالذكاء التوليدي"
objectives: "GenAI-3.2.3 · K2 / HO-3.2.3 · H0"
minutes: 15
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
  - "No single strategy is enough: combine them and involve senior security engineers, legal counsel, the CTO or the CISO."
takeawaysAr:
  - "أرسل فقط ما تحتاجه المهمة، وأخفِ هوية البيانات الحساسة أو احجبها أولًا."
  - "أمّن النقل والتخزين، وتحكّم بالوصول، وضع سياسات واضحة ودرّب الفريق."
  - "راجع المخرجات، خصوصًا الشيفرة المولّدة، قبل تشغيل أي شيء."
  - "اختر بيئة التشغيل حسب السرية، ونفّذ تدقيقًا أمنيًا وتقييمًا للثغرات بشكل دوري."
  - "لا تكفي استراتيجية واحدة: اجمع بينها وأشرك مهندسي الأمن الكبار والمستشار القانوني والمدير التقني أو مدير أمن المعلومات."
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
  - en: "Purpose Limitation"
    ar: "تقييد الغرض"
    def: "A data protection safeguard: data collected for one purpose should not be freely collected, processed or stored for another."
    defAr: "ضمانة في حماية البيانات: البيانات المجموعة لغرض معيّن لا تُجمع أو تُعالج أو تُخزَّن بحرية لغرض آخر."
---
عرفنا في 3.2.1 مخاطر الخصوصية والأمن، وفي 3.2.2 طرق الهجوم. هذا القسم يجيب عن السؤال التالي: **كيف نحمي البيانات والأنظمة ونحن نختبر بـ GenAI؟** وهو مهم للمختبِر لأن قراراته اليومية الصغيرة، مثل ما يلصقه في الأداة وما يشغّله من scripts مولّدة، هي خط الحماية الأول. ولهذا الهدف مستوى **K2**: يُتوقّع منك أن تلخّص هذه الاستراتيجيات وتفهم ما يعالجه كل منها.

### الإطار التنظيمي — Regulations and GDPR

يبدأ المنهج بأن الذكاء التوليدي أصبح **سائدًا**، ومع **المخاطر المتأصلة** فيه تظهر **تنظيمات ومعايير** للحد منها (انظر 3.4.1).

ثم يوضح نقطة دقيقة: أنظمة حماية البيانات مثل **GDPR** **لا تقيّد تطبيقات GenAI صراحةً**، لكنها تضع **ضمانات قد تحدّ مما يمكن فعله**، خصوصًا في أمرين:

- **المشروعية (lawfulness):** هل يوجد أساس يسمح بمعالجة هذه البيانات أصلًا؟
- **تقييد الغرض (purpose limitation):** البيانات التي جُمعت لغرض معيّن لا تُستخدم بحرية لغرض آخر، سواء في **الجمع** أو **المعالجة** أو **التخزين**.

**مثال:** جمع تطبيق التوصيل عناوين العملاء وأرقام هواتفهم **لتوصيل الطلبات**. أما لصقها في أداة GenAI لتوليد بيانات اختبار فهو غرض مختلف، وقد لا يسمح به الأساس الذي جُمعت عليه. لم يمنع النظام استخدام GenAI، لكنه حدّ مما يمكن فعله بهذه البيانات.

### إجراءات حماية الخصوصية — Data Privacy Measures

يقول المنهج إن على المؤسسات تطبيق **إجراءات قوية لحماية الخصوصية**، منها أربعة:

**1. تقليل البيانات (Data minimization):** **تجنّب معالجة البيانات الحساسة ما لم يكن ذلك مسموحًا قانونيًا**، واستخدام **الحد الأدنى اللازم** من البيانات غير الحساسة فقط. **لماذا؟** لأن ما لا يصل إلى الأداة لا يمكن أن يتسرّب منها. **مثال:** لتحليل defect في حساب رسوم التوصيل، يكفي إرسال قيمة الطلب والكوبون والرسوم المحسوبة، لا اسم العميل ولا عنوانه.

**2. إخفاء الهوية والترميز المستعار (Data anonymization and pseudonymization):** **حجب المعلومات الحساسة أو استبدالها ببيانات لا تكشف الهوية**. والفرق بينهما مهم: **Anonymization** يجعل ربط البيانات بالشخص غير ممكن، أما **Pseudonymization** فيستبدل المعرّفات برموز مع بقاء إمكانية إعادة الربط بمعلومات إضافية. **مثال:** استبدال «أحمد، 0791234567، شارع الجامعة» بـ «Customer-017، 0790000000، Test Street 1» قبل إرسال تقرير الـ defect.

**3. تأمين التخزين والنقل (Secure data storage and transmission):** تطبيق **تشفير قوي** و**ضوابط وصول**. **مثال:** البيانات التي تنتقل بين أداة الاختبار والنموذج تُنقل مشفّرة، وسجل المحادثات المخزّن لا يقرؤه إلا من يحتاجه.

**4. تدريب الموارد البشرية (Resources training):** وضع **برامج تدريب وسياسات واضحة** تضمن **الاستخدام المسؤول** لأدوات GenAI، وتعزز **الممارسات الأخلاقية**، وتحد من المخاطر المحتملة. **لماذا؟** لأن أقوى الضوابط التقنية لا تمنع مختبِرًا لا يعرف أن لصق سجل الإنتاج في أداة عامة مشكلة.

### استراتيجيات إضافية — Additional Mitigation Strategies

ويذكر المنهج استراتيجيات أخرى يمكن النظر فيها عند استخدام GenAI في الاختبار:

**1. المراجعة المنهجية للناتج (Systematic review of the generated output):** **التقييم البشري ضروري** لضمان جودة مهام الاختبار بالذكاء التوليدي ودقتها. عمليًا، يشمل ذلك فحص الشيفرة والـ scripts المولّدة قبل تشغيلها، بحثًا عن اتصالات أو أوامر غير مقصودة (انظر توليد الشيفرة الضارة في 3.2.2).

**2. التقييم بالمقارنة مع نموذج آخر (Evaluation by comparison with another LLM):** استخدام **عدة نماذج** على المهمة نفسها، ومقارنة ردودها. الاختلاف بين الردود إشارة إلى نقطة تستحق المراجعة. عمليًا، إرسال البيانات إلى مزوّد ثانٍ يحتاج إلى أن يكون مسموحًا هو الآخر.

**3. اختيار بيئة تشغيل آمنة (Choice of a secure, operational environment):** **حسب مستوى السرية المطلوب**، يذكر المنهج ثلاثة خيارات:

| Option | What it means | When it fits (in practice) |
|---|---|---|
| Commercial secure offering | A secure, commercial service from the LLM provider | Moderate confidentiality, little infrastructure effort |
| Secure cloud | The organisation operates the LLM in a secure cloud | More control over data and configuration |
| In-house installation | The LLM is installed in the organisation's own infrastructure | Highest confidentiality needs |

عمليًا، كلمة «داخلي» لا تعفي من تأمين الصلاحيات والتحديثات.

**4. التدقيق الأمني الدوري وتقييم الثغرات (Regular security audits and vulnerability assessments):** **اكتشاف نقاط الضعف** في أنظمة GenAI **ومعالجتها**. **مثال:** فحص دوري لصلاحيات أداة الاختبار المتصلة بنظام تتبّع الـ defects، للتأكد أنها لا تصل إلى أكثر مما تحتاج.

**5. متابعة أفضل الممارسات الأمنية (Staying updated with security best practices):** **البقاء على اطلاع** بأحدث الإرشادات والتقنيات الأمنية، لأن طرق الهجوم على النماذج تتطور بسرعة.

### الاستراتيجيات تعمل معًا — Combining Strategies

يؤكد المنهج أن هذه الاستراتيجيات **تكمّل بعضها غالبًا**، وأن **الجمع بينها مطلوب** لضمان أمن البيانات. فإخفاء الهوية لا يحمي من script ضار، ومراجعة الشيفرة لا تمنع تسريب بيانات العملاء. ويوصي المنهج بشدة بإشراك **مهندسي الأمن الكبار**، و**المستشار القانوني**، و**المدير التقني (CTO)**، أو **مدير أمن المعلومات (CISO)** إن وُجد في المؤسسة.

ويصف الهدف العملي HO-3.2.3 تطبيق ذلك على دراسات حالة: تكتشف تهديدات مثل **ثغرات النموذج**، و**الوصول غير المصرّح إلى البيانات**، و**الاستخدام الخبيث للمخرجات المولّدة**، ثم تستكشف وسائل الحماية: **التعامل الآمن مع البيانات**، و**ضوابط وصول قوية**، و**مراقبة استخدام الذكاء الاصطناعي**، مع التفكير في الجوانب **الأخلاقية والعملية**.

### ربط الاستراتيجيات بالمخاطر — Mapping Strategies to Risks

هذا الربط اجتهاد عملي يجمع ما في 3.2.1 و3.2.2 مع استراتيجيات هذا القسم:

| Risk | Most suitable strategies |
|---|---|
| Unintentional data exposure | Data minimization; anonymization before sending |
| Lack of control over data usage | Secure environment choice; check the provider's policies |
| Compliance risks | Clear policies, training, legal counsel |
| Unauthorised access | Access controls, encryption, usage monitoring |
| Malicious input or manipulation | Treat embedded text as data, not instructions; output review |
| Malicious code generation | Review generated code; run it in an isolated environment |
| Unknown weaknesses | Regular security audits and vulnerability assessments |

### لا تخلط بين — Don't Confuse

| | Data minimization | Anonymization | Pseudonymization |
|---|---|---|---|
| Core idea | Send less data | Remove the link to the person | Replace identifiers with codes |
| Can the person be re-identified? | Only from what was still sent | No | Yes, with the mapping |
| Delivery app example | Send order value, not the address | Real names replaced by fictional ones, no mapping kept | Customer-017, with a table linking it to the real customer |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team agreed on a short rule before using GenAI on defect reports: remove names, phone numbers and addresses, or replace them with fictional data; use only the company's approved tool with chat retention configured; never run a generated script before a review. They also held one session with the security engineer to check the tool's access rights.</p><p class="gx-ar" lang="ar" dir="rtl">اتفق فريق تطبيق التوصيل على قاعدة قصيرة قبل استخدام GenAI على تقارير الـ defects: أزِل الأسماء وأرقام الهواتف والعناوين أو استبدلها ببيانات وهمية، واستخدم أداة الشركة المعتمدة فقط بعد ضبط الاحتفاظ بالمحادثات، ولا تشغّل script مولّدًا قبل مراجعته. وعقدوا أيضًا جلسة مع مهندس الأمن لفحص صلاحيات الأداة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Calling data anonymous after replacing names with numbers while a table still maps numbers to people. That is pseudonymization: the link can be restored, so protect the mapping and question whether the data is needed at all.</p><p class="gx-ar" lang="ar" dir="rtl">وصف البيانات بأنها مجهولة الهوية بعد استبدال الأسماء بأرقام، بينما يوجد جدول يربط الأرقام بالأشخاص. هذا ترميز مستعار: الربط ممكن استعادته، فاحمِ جدول الربط واسأل إن كانت البيانات لازمة أصلًا.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Expect “which strategy fits this risk?” questions. In practice, the first question is whether the sensitive data needs to be sent at all: minimise, anonymise or mask it before it reaches the tool.</p><p class="gx-ar" lang="ar" dir="rtl">توقّع أسئلة من نوع «أي استراتيجية تناسب هذا الخطر؟». عمليًا، السؤال الأول هو: هل يلزم إرسال البيانات الحساسة أصلًا؟ قلّلها أو أخفِ هويتها أو احجبها قبل أن تصل إلى الأداة.</p></aside>

<section class="gx-lab" data-lab="HO-3.2.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Case Study · Spot the Risks</span><span class="gx-ar" lang="ar" dir="rtl">دراسة حالة · اكتشف المخاطر</span></span><span class="gx-lab-meta">HO-3.2.3 · H0</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Case:</strong> a tester wants a summary of a failure report. The report contains a customer's email and a session token. The tool keeps chat history. The suggested script connects to a service the test does not need.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الحالة:</strong> مختبِر يريد ملخصًا لتقرير فشل. التقرير يحتوي بريد عميل ورمز جلسة (Session token). الأداة تحتفظ بسجل المحادثات. والـ script المقترح يتصل بخدمة لا يحتاجها الاختبار.</span></p><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Observation</span><span class="gx-ar" lang="ar" dir="rtl">الملاحظة</span></th><th><span class="gx-en" lang="en" dir="ltr">Risk</span><span class="gx-ar" lang="ar" dir="rtl">الخطر</span></th><th><span class="gx-en" lang="en" dir="ltr">Suitable action</span><span class="gx-ar" lang="ar" dir="rtl">الإجراء المناسب</span></th></tr></thead><tbody><tr><td><span class="gx-en" lang="en" dir="ltr">Customer email</span><span class="gx-ar" lang="ar" dir="rtl">بريد العميل</span></td><td><span class="gx-en" lang="en" dir="ltr">Identity exposed with no need</span><span class="gx-ar" lang="ar" dir="rtl">كشف هوية دون حاجة</span></td><td><span class="gx-en" lang="en" dir="ltr">Replace with suitable training data</span><span class="gx-ar" lang="ar" dir="rtl">استبداله ببيانات تدريبية مناسبة</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Session token</span><span class="gx-ar" lang="ar" dir="rtl">رمز الجلسة</span></td><td><span class="gx-en" lang="en" dir="ltr">Access leak</span><span class="gx-ar" lang="ar" dir="rtl">تسريب وصول</span></td><td><span class="gx-en" lang="en" dir="ltr">Remove it and handle the exposure per security policy</span><span class="gx-ar" lang="ar" dir="rtl">إزالته ومعالجة التعرّض وفق سياسة الأمن</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">Chat retention</span><span class="gx-ar" lang="ar" dir="rtl">الاحتفاظ بالمحادثة</span></td><td><span class="gx-en" lang="en" dir="ltr">Loss of control over the data lifecycle</span><span class="gx-ar" lang="ar" dir="rtl">فقد السيطرة على دورة حياة البيانات</span></td><td><span class="gx-en" lang="en" dir="ltr">Check the tool policy; configure retention and access</span><span class="gx-ar" lang="ar" dir="rtl">مراجعة سياسة الأداة وضبط الاحتفاظ والوصول</span></td></tr><tr><td><span class="gx-en" lang="en" dir="ltr">External call in the script</span><span class="gx-ar" lang="ar" dir="rtl">اتصال خارجي في الـ script</span></td><td><span class="gx-en" lang="en" dir="ltr">Data leak or unwanted behaviour</span><span class="gx-ar" lang="ar" dir="rtl">تسريب بيانات أو سلوك غير مرغوب</span></td><td><span class="gx-en" lang="en" dir="ltr">Reject it and review the code before any run</span><span class="gx-ar" lang="ar" dir="rtl">رفضه ومراجعة الشيفرة قبل أي تشغيل</span></td></tr></tbody></table><p><span class="gx-en" lang="en" dir="ltr">Also consider who can read the chat, what the infrastructure logs, and how usage is monitored. Start by checking the input, the environment and the permissions, not by sending the data first and fixing later.</span><span class="gx-ar" lang="ar" dir="rtl">فكّر أيضًا: من يستطيع قراءة المحادثة، وما الذي تسجّله البنية التحتية، وكيف يُراقَب الاستخدام. ابدأ بفحص المدخلات والبيئة والصلاحيات، لا بإرسال البيانات أولًا ثم المعالجة لاحقًا.</span></p></div></section>

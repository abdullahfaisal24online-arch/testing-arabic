---
order: 5
slug: "3-2-1"
chapter: 3
group: "3.2"
section: "3.2.1"
title: "Data Privacy and Security Risks Associated with Using Generative AI"
titleAr: "مخاطر خصوصية البيانات والأمن المرتبطة باستخدام الذكاء التوليدي"
objectives: "GenAI-3.2.1 · K2"
minutes: 13
lo:
  GenAI-3.2.1: "Explain the main data privacy and security risks of using GenAI in testing."
loAr:
  GenAI-3.2.1: "تشرح أهم مخاطر خصوصية البيانات والأمن عند استخدام GenAI في الاختبار."
takeaways:
  - "Privacy risks: unintended exposure of sensitive data, loss of control over how data is used, and non-compliance with data protection rules such as GDPR."
  - "Security risks: attacks on the test infrastructure, exploitation of the model, and malicious input that misleads it."
  - "The weak point can be the database, the API or tool permissions, not only the model."
  - "Privacy risks are about what happens to the data; security risks are about someone attacking the system."
takeawaysAr:
  - "مخاطر الخصوصية: كشف بيانات حساسة دون قصد، وفقد السيطرة على طريقة استخدام البيانات، وعدم الالتزام بأنظمة حماية البيانات مثل GDPR."
  - "المخاطر الأمنية: هجمات على بنية الاختبار، واستغلال النموذج، ومدخلات خبيثة تضلله."
  - "نقطة الضعف قد تكون قاعدة البيانات أو API أو صلاحيات الأداة، لا النموذج وحده."
  - "مخاطر الخصوصية تتعلق بما يحدث للبيانات؛ والمخاطر الأمنية تتعلق بمن يهاجم النظام."
terms:
  - en: "GDPR"
    ar: "اللائحة العامة لحماية البيانات"
    def: "The EU General Data Protection Regulation, Regulation (EU) 2016/679, cited in the syllabus as an example of a data protection framework."
    defAr: "اللائحة العامة لحماية البيانات في الاتحاد الأوروبي، اللائحة (EU) 2016/679، ويذكرها المنهج مثالًا على إطار لحماية البيانات."
---
استخدام GenAI في الاختبار لا يغيّر طريقة العمل فقط، بل يغيّر **مسار البيانات** أيضًا. يقول المنهج إن الذكاء التوليدي في الاختبار يجلب مخاطر في **الخصوصية والأمن** لسببين: **التعامل مع معلومات حساسة**، و**الثغرات المحتملة في بنية الاختبار المعتمدة على النماذج (LLM-powered test infrastructure)**. ولذلك تُعدّ **الحماية القوية للبيانات** ضرورية لمنع **الاختراقات**، و**الوصول غير المصرّح**، و**كشف البيانات السرية**.

لماذا يخص هذا المختبِر؟ لأن مواد الاختبار اليومية مليئة بالبيانات. في تطبيق التوصيل، سجل خطأ واحد قد يحتوي اسم عميل ورقم هاتفه وعنوانه، وتقرير defect قد يتضمن لقطة شاشة لطلب حقيقي. وعندما يلصق المختبِر هذه المواد في أداة GenAI، تنشأ أسئلة جديدة: أين تُخزَّن؟ وما الذي يُسجَّل؟ ومن هو المزود؟ ومن يستطيع الوصول إليها؟

يقسّم المنهج المخاطر إلى مجموعتين:

| Group | Risk | In short |
|---|---|---|
| Data privacy | Unintentional data exposure | Output accidentally reveals sensitive information |
| Data privacy | Lack of control over data usage | Data stored or processed without explicit consent or control |
| Data privacy | Compliance risks | Not complying with regulations such as GDPR may lead to legal disputes |
| Security | Infrastructure vulnerabilities | Data breaches or unauthorised access to LLM-powered test infrastructure |
| Security | Exploitation of the LLM | Manipulative attacks that alter behaviour or extract sensitive information |
| Security | Malicious input data | Input introduced on purpose to mislead the model |

### مخاطر الخصوصية — Data Privacy Risks

يبدأ المنهج من حقيقة بسيطة: أنظمة GenAI يمكن أن **تعالج كميات كبيرة من البيانات**، وقد تحتوي هذه البيانات على **معلومات حساسة أو معلومات تعرّف بالشخص (personally identifiable information)**. ومن هنا تنشأ ثلاث مخاوف.

**1. الكشف غير المقصود (Unintentional data exposure):** قد تولّد النماذج مخرجات **تكشف معلومات حساسة عن غير قصد**. **مثال:** أداة داخلية تلخّص تقارير الـ defects للفريق، وأحد التقارير يحتوي رقم هاتف عميل وعنوانه. يظهر الرقم في الملخص الذي يُرسل إلى قناة الفريق كلها، مع أن أحدًا لم يطلبه. لم يهاجم أحد النظام؛ الخطر جاء من طبيعة الناتج نفسه.

**2. فقد السيطرة على استخدام البيانات (Lack of control over data usage):** قد **تخزّن** أدوات GenAI البيانات الحساسة **وتعالجها دون موافقة أو تحكم صريح من المستخدم**، وهذا قد يؤدي إلى **سوء استخدام** أو **وصول غير مصرّح**. **مثال:** مختبِر يلصق سجل خطأ من بيئة الإنتاج في أداة دردشة عامة ليسأل عن السبب. السجل يحتوي أرقام هواتف عملاء ورمز وصول لخدمة داخلية. حتى لو كانت نيته جيدة، خرجت هذه البيانات من سيطرة المؤسسة: قد تُخزَّن لدى المزود، أو تبقى في سجل المحادثات، أو تُستخدم بطريقة لا يعرفها.

**3. مخاطر الامتثال (Compliance risks):** استخدام أدوات GenAI **دون الالتزام بأنظمة حماية البيانات**، مثل **اللائحة العامة لحماية البيانات (GDPR)**، قد يؤدي إلى **نزاعات قانونية**. **مثال:** بيانات عملاء تطبيق التوصيل بيانات شخصية. إرسالها إلى خدمة خارجية دون أساس واضح يسمح بذلك قد يضع المؤسسة في مخالفة، حتى لو لم يحدث أي تسريب فعلي.

### المخاطر الأمنية — Security Risks

يضيف المنهج **مخاطر أمنية محددة** تنشأ عند الاختبار بـ GenAI. الفرق عن مخاطر الخصوصية أن هنا **طرفًا يحاول الإضرار عمدًا**.

**1. ثغرات بنية الاختبار (Infrastructure vulnerabilities):** بنية الاختبار المعتمدة على النماذج قد تتعرض **لهجمات أمنية**، مثل **اختراق البيانات** أو **الوصول غير المصرّح**. **مثال:** أداة اختبار داخلية تتصل بقاعدة بيانات بيئة الاختبار وبنظام إدارة الـ defects. إذا كانت صلاحياتها أوسع من اللازم، فمن يصل إلى الأداة يصل إلى كل ما تصل إليه. نقطة الضعف هنا قد تكون قاعدة البيانات أو الـ API أو صلاحيات الأداة، لا النموذج نفسه.

**2. استغلال النموذج (Exploitation of the LLM):** قد يستغل **الفاعلون الخبيثون (malicious actors)** ثغرات النماذج، مثل **الهجمات التلاعبية (manipulative attacks)** التي يفصّلها القسم 3.2.2، **لتغيير سلوك النموذج** أو **استخراج معلومات حساسة**. **مثال:** مستخدم يصوغ طلبات تدفع مساعد الاختبار إلى الخروج عن مهمته وكشف ما في سياقه من بيانات.

**3. المدخلات الخبيثة (Malicious input data):** قد **يُدخل المهاجمون عمدًا بيانات خبيثة** لتضليل النموذج والإضرار **بدقته أو أمنه**. **مثال:** أحدهم يضع داخل تقرير defect نصًا يطلب من النموذج تجاهل تعليماته وإرسال محتوى التقارير. إذا كانت الأداة تقرأ التقارير وتنفّذ ما فيها دون ضوابط، فقد يحاول النموذج تنفيذ هذا النص.

### كيف ترتبط المجموعتان — How the Risks Connect

المجموعتان ليستا منفصلتين تمامًا. هجوم أمني ناجح، مثل وصول غير مصرّح إلى أداة الاختبار، يتحول فورًا إلى مشكلة خصوصية إذا كانت الأداة تحتفظ ببيانات العملاء. وبالعكس، كلما قلّت البيانات الحساسة التي تصل إلى الأداة، قلّ ما يمكن أن يخسره الفريق لو نجح هجوم. لذلك يبدأ التفكير العملي في هذه المخاطر بسؤالين: ما البيانات التي تمر بالأداة؟ ومن يستطيع التأثير في مدخلاتها أو الوصول إلى مخرجاتها؟ أما استراتيجيات الحماية فيتناولها القسم 3.2.3.

### لا تخلط بين — Don't Confuse

| | Data privacy risk | Security risk |
|---|---|---|
| Core question | What happens to the data? | Who can attack the system, and how? |
| Needs an attacker? | No, can happen by accident | Yes, usually a deliberate actor |
| Delivery app example | Customer phone number in a defect summary | Hidden instruction inside a defect report |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Before the delivery app team connected a GenAI tool to its defect tracker, the testers listed what the tracker contains: customer names, phone numbers and addresses in screenshots and logs. That list turned an abstract risk into concrete questions for the team: which fields must never reach the tool, where the tool stores data, and who can read its history.</p><p class="gx-ar" lang="ar" dir="rtl">قبل أن يربط فريق تطبيق التوصيل أداة GenAI بنظام تتبّع الـ defects، أعدّ المختبرون قائمة بما يحتويه النظام: أسماء العملاء وأرقام هواتفهم وعناوينهم في لقطات الشاشة والسجلات. حوّلت هذه القائمة خطرًا مجرّدًا إلى أسئلة محددة للفريق: أي الحقول يجب ألا تصل إلى الأداة أبدًا، وأين تخزّن الأداة البيانات، ومن يستطيع قراءة سجلها.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Two lists to remember. Privacy: unintentional data exposure, lack of control over data usage, compliance risks (GDPR as the example). Security: infrastructure vulnerabilities, exploitation of the LLM, and malicious input.</p><p class="gx-ar" lang="ar" dir="rtl">قائمتان للحفظ. الخصوصية: كشف البيانات دون قصد، وفقد السيطرة على استخدامها، ومخاطر الامتثال (GDPR مثالًا). الأمن: ثغرات البنية التحتية، واستغلال النموذج، والمدخلات الخبيثة.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">GDPR is the syllabus example of a data protection framework. This is study material, not a statement of the legal obligations of any specific project.</p><p class="gx-ar" lang="ar" dir="rtl">GDPR هو مثال المنهج على إطار لحماية البيانات. هذه مادة دراسية، وليست تحديدًا للالتزامات القانونية لأي مشروع بعينه.</p></aside>

---
order: 1
slug: "5-1-1"
chapter: 5
group: "5.1"
section: "5.1.1"
title: "Risks of Shadow AI"
titleAr: "مخاطر الذكاء الاصطناعي الخفي"
objectives: "GenAI-5.1.1 · K1"
minutes: 8
lo:
  GenAI-5.1.1: "Recall the risks of shadow AI."
loAr:
  GenAI-5.1.1: "تذكّر مخاطر الذكاء الاصطناعي الخفي."
takeaways:
  - "Shadow AI is the use of AI tools outside the organisation's approval or oversight."
  - "Risks: weak security and privacy, non-compliance with regulations or standards, and unclear IP and licensing."
  - "An approved strategy, approved tools and clear training reduce the pull towards unmanaged personal tools."
takeawaysAr:
  - "الذكاء الاصطناعي الخفي هو استخدام أدوات ذكاء اصطناعي خارج موافقة المؤسسة أو رقابتها."
  - "المخاطر: ضعف الأمن والخصوصية، وعدم الامتثال للأنظمة أو المعايير، وعدم وضوح الملكية الفكرية والترخيص."
  - "الاستراتيجية المعتمدة والأدوات المعتمدة والتدريب الواضح تقلّل الانجذاب نحو الأدوات الشخصية غير المُدارة."
terms:
  - en: "Shadow AI"
    ar: "الذكاء الاصطناعي الخفي"
    def: "Using AI tools without the organisation's approval or oversight, such as uploading project logs to a personal account."
    defAr: "استخدام أدوات ذكاء اصطناعي دون موافقة المؤسسة أو رقابتها، مثل رفع سجلات المشروع إلى حساب شخصي."
---
يبدأ الفصل الخامس بسؤال تنظيمي لا تقني: كيف تنتقل مؤسسة اختبار من تجارب فردية متفرقة مع GenAI إلى استخدام منظّم ومفيد؟ يقول المنهج إن استراتيجية الاختبار مع GenAI يجب أن تراعي بعناية جوانب أساسية: **أهداف الاختبار** المطلوب تحقيقها، و**اختيار النموذج اللغوي المناسب**، و**مشكلات بيانات الإدخال** المستخدمة في التوجيه، و**الامتثال لمعايير AI وتنظيماته**. وبناءً على هذه الاستراتيجية، تضع المؤسسة **خارطة طريق (roadmap)** وتتابع تقدّمها في دمج GenAI بعمليات الاختبار.

الانتقال من تجربة فردية إلى استخدام مؤسسي يبدأ بأهداف وبيانات ومقاييس ومسؤوليات. لا تقاس الجاهزية بعدد اشتراكات الأدوات؛ المهم أن يحقق الاستخدام فائدة قابلة للقياس ضمن مخاطر مقبولة. وأول خطر يظهر عندما تغيب هذه الاستراتيجية هو **الذكاء الاصطناعي الخفي (Shadow AI)**.

### ما هو Shadow AI؟ — What Is Shadow AI

**Shadow AI** هو استخدام أدوات AI خارج اعتماد المؤسسة أو رقابتها، مثل رفع سجلات المشروع إلى حساب شخصي دون موافقة. الكلمة المهمة هنا «خارج الرقابة»: المشكلة ليست في الذكاء الاصطناعي نفسه، بل في أن المؤسسة لا تعرف ما الذي أُرسل، ولا إلى أين، ولا بأي شروط. يذكر المنهج أن Shadow AI قد يؤدي إلى مخاطر تتعلق بالأمن والامتثال وخصوصية البيانات، ويفصّلها في ثلاث نقاط.

### 1. ضعف أمن المعلومات وخصوصية البيانات — Information Security and Data Privacy Weaknesses

أدوات AI الشخصية **قد تفتقر إلى أمن متين**، وهذا قد يؤدي إلى **تسريب البيانات (data breaches)**. السبب أن الأداة الشخصية لم تمرّ بأي تقييم: لا يُعرف أين تُخزَّن المحادثات، ولا من يستطيع الوصول إليها، ولا هل تُستخدم لاحقًا في تدريب النموذج.

**مثال من تطبيق التوصيل:** مختبِر يحقق في defect يظهر عند تأكيد الطلب، فيلصق سجلات الخادم كما هي في أداة دردشة عامة بحسابه الشخصي. السجلات تحتوي أسماء العملاء وأرقام هواتفهم وعناوينهم، وهي بيانات شخصية خرجت الآن من سيطرة الشركة.

### 2. مشكلات الامتثال والتنظيم — Compliance and Regulatory Issues

استخدام أدوات AI **غير معتمدة** قد يؤدي إلى **عدم الامتثال لمعايير الصناعة وتنظيماتها** (انظر القسم 3.4.1)، وهذا قد ينتهي **بعواقب قانونية**. فالأنظمة مثل GDPR تفرض قواعد على معالجة البيانات الشخصية، والمؤسسة لا تستطيع إثبات التزامها إذا كانت البيانات تُعالج في أدوات لا تعرف عنها شيئًا.

**مثال:** لو طُلب من شركة التوصيل أن تبيّن أين عالجت بيانات عملائها، فلن تستطيع ذكر الأداة الشخصية التي استخدمها المختبِر، لأنها لم تكن ضمن الأدوات المعتمدة أصلًا.

### 3. غموض الملكية الفكرية — Vague Intellectual Property

استخدام أدوات AI ذات **اتفاقيات ترخيص غير واضحة** قد يعرّض مستخدمي النماذج اللغوية **لنزاعات الملكية الفكرية**، خصوصًا إذا عولجت **بيانات محمية بحقوق النشر دون إذن مناسب**.

**مثال:** مختبِر يرفع شيفرة الشركة المملوكة لأداة مجانية لتوليد test scripts، أو يرفع محتوى قوائم الطعام الخاصة بالمطاعم الشريكة لتوليد بيانات اختبار. شروط الأداة قد تمنحها حقوقًا على المدخلات، وقد لا يكون للشركة إذن بمعالجة محتوى الشريك بهذه الطريقة.

| Risk area | What can go wrong | Delivery app example |
|---|---|---|
| Security and data privacy | Data breach from a weakly secured personal tool | Logs with customer names and phones pasted into a public chatbot |
| Compliance and regulation | Non-compliance with standards and regulations, legal consequences | Personal data processed in a tool outside the approved list |
| Intellectual property | Disputes from unclear licences or unauthorised copyrighted data | Proprietary code or partner menus uploaded to a free tool |

### لماذا يحدث؟ وما العلاج؟ — Why It Happens and the Remedy

غالبًا لا يبدأ Shadow AI بنية سيئة. مختبِر تحت ضغط موعد تسليم، والأداة المعتمدة غير موجودة أو بطيئة أو لا تكفي، فيستخدم حسابه الشخصي في أداة عامة «لمرة واحدة». ومن الأمثلة الشائعة أيضًا استخدام إضافة متصفح تقرأ محتوى أدوات إدارة الاختبار.

لذلك يقول المنهج إن **الاستراتيجية وخطوات الدمج والنشر** لـ GenAI تساعد مؤسسات الاختبار على تجنّب خطر Shadow AI. عمليًا، عندما يجد المختبِر أداة معتمدة تلبّي حاجته، وقواعد واضحة لما يجوز إرساله، يختفي الدافع إلى الحل الفردي.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">After the log incident, the delivery app team did not just ban AI tools. It got an approved tool with a company account, wrote a one-page rule on which data may be sent (no real customer names, phones or addresses), and showed both testers how to mask logs before using them. Personal accounts stopped being the faster option.</p><p class="gx-ar" lang="ar" dir="rtl">بعد حادثة السجلات، لم يكتفِ فريق تطبيق التوصيل بحظر أدوات AI. بل حصل على أداة معتمدة بحساب للشركة، وكتب قاعدة من صفحة واحدة تحدد البيانات المسموح بإرسالها (لا أسماء ولا هواتف ولا عناوين عملاء حقيقية)، ودرّب المختبِرَين على إخفاء البيانات في السجلات قبل استخدامها. فلم تعد الحسابات الشخصية هي الخيار الأسرع.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Good intentions do not remove the risk. An approved strategy, approved tools and clear training reduce the need for unmanaged individual workarounds.</p><p class="gx-ar" lang="ar" dir="rtl">النوايا الحسنة لا تزيل الخطر. الاستراتيجية المعتمدة والأدوات المعتمدة والتدريب الواضح تقلّل الحاجة إلى حلول فردية غير مُدارة.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the three risk areas: security and privacy, compliance with regulations and standards, and intellectual property and licensing. The answer to shadow AI is an approved strategy, approved tools and training, not just a ban.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف مجالات الخطر الثلاثة: الأمن والخصوصية، والامتثال للأنظمة والمعايير، والملكية الفكرية والترخيص. والردّ على الذكاء الاصطناعي الخفي هو استراتيجية معتمدة وأدوات معتمدة وتدريب، لا مجرد الحظر.</p></aside>

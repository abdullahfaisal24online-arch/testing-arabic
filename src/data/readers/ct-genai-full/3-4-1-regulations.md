---
order: 9
slug: "3-4-1"
chapter: 3
group: "3.4"
section: "3.4.1"
title: "AI Regulations, Standards and Frameworks Relevant to GenAI in Software Testing"
titleAr: "التنظيمات والمعايير والأطر المرتبطة بالذكاء التوليدي في الاختبار"
objectives: "GenAI-3.4.1 · K1"
minutes: 9
lo:
  GenAI-3.4.1: "Recall examples of AI regulations, standards and frameworks relevant to GenAI in testing."
loAr:
  GenAI-3.4.1: "تتذكّر أمثلة على تنظيمات ومعايير وأطر الذكاء الاصطناعي المرتبطة بالذكاء التوليدي في الاختبار."
takeaways:
  - "Know each name, its type (regulation, standard or framework) and its purpose."
  - "ISO/IEC 42001 and ISO/IEC 23053 are standards, the EU AI Act is a regulation, and NIST AI RMF is a framework."
  - "Citing a standard does not prove it is applied, and following a framework is not the same as complying with a regulation."
  - "These references help address the risks of chapter 3: reasoning errors, data privacy, vulnerabilities and environmental impact."
  - "Test organisations must stay updated on regulations, standards, national laws and best practice frameworks."
takeawaysAr:
  - "اعرف كل اسم ونوعه (تنظيم أو معيار أو إطار) والغرض منه."
  - "ISO/IEC 42001 وISO/IEC 23053 معايير، وEU AI Act تنظيم قانوني، وNIST AI RMF إطار."
  - "ذكر معيار لا يثبت تطبيقه، واتباع إطار لا يعني الامتثال لتنظيم قانوني."
  - "تساعد هذه المراجع على معالجة مخاطر الفصل الثالث: أخطاء الاستدلال، وخصوصية البيانات، والثغرات، والأثر البيئي."
  - "على مؤسسات الاختبار متابعة تطور التنظيمات والمعايير والقوانين الوطنية وأطر أفضل الممارسات."
terms:
  - en: "EU AI Act"
    ar: "قانون الذكاء الاصطناعي الأوروبي"
    def: "The EU's risk-based legal framework for AI systems."
    defAr: "الإطار القانوني للاتحاد الأوروبي لأنظمة AI، القائم على تصنيف المخاطر."
  - en: "NIST AI RMF"
    ar: "إطار NIST لإدارة مخاطر الذكاء الاصطناعي"
    def: "A US framework from NIST that offers guidelines for managing AI risks, including fairness, transparency and security."
    defAr: "إطار أمريكي من المعهد NIST يقدّم إرشادات لإدارة مخاطر AI، يشمل الإنصاف والشفافية والأمن."
  - en: "ISO/IEC 42001"
    ar: "معيار نظام إدارة الذكاء الاصطناعي"
    def: "ISO/IEC 42001:2023, a standard that specifies requirements for managing AI systems within an organization (an AI management system)."
    defAr: "المعيار ISO/IEC 42001:2023، يحدد متطلبات إدارة أنظمة AI داخل المؤسسة (نظام إدارة للذكاء الاصطناعي)."
---
تعرّفت في الأقسام 3.1 و3.2 و3.3 على مخاطر استخدام GenAI في الاختبار: **أخطاء الاستدلال**، و**خصوصية البيانات**، و**الثغرات الأمنية**، و**الأثر البيئي**. يقول المنهج إن معالجة هذه المخاطر يجب أن تأخذ في الحسبان **التنظيمات والمعايير وأطر أفضل الممارسات** العامة للذكاء الاصطناعي. فالفريق لا يحتاج أن يخترع وحده طريقة لإدارة هذه المخاطر؛ هناك مراجع معروفة تساعده على تنظيمها.

هذا الهدف من مستوى **K1**: المطلوب أن **تتذكر** أسماء هذه المراجع، و**نوع** كل منها، و**غرضه** باختصار.

### جدول المنهج — The Syllabus Table

| Name | Type | Description | Application in software testing |
|---|---|---|---|
| ISO/IEC 42001:2023 (AI management system) | Standard | Specifies requirements for managing AI systems within an organization | Promotes that GenAI in testing adheres to recommended practices, promoting consistency and reliability |
| ISO/IEC 23053:2022 (Framework for AI systems using machine learning) | Standard | Provides a framework for AI lifecycle processes, emphasizing safety and transparency | Provides a framework for data quality, transparency and safety when using GenAI for testing |
| EU AI Act | Regulation | Establishes a legal framework addressing AI risks, classifying applications by risk level | Mandates compliance in transparency, accountability and bias mitigation for GenAI used in testing |
| NIST AI Risk Management Framework (US) | Framework | Offers guidelines for managing AI risks, focusing on fairness, transparency and security | Supports fairness and mitigates risks in GenAI, preventing biased test results |

### ما الذي يعنيه كل مرجع للمختبِر؟ — What Each Means for Testers

**ISO/IEC 42001:2023** معيار يحدد **متطلبات إدارة أنظمة AI داخل المؤسسة**. ودوره في الاختبار أنه يعزز التزام استخدام GenAI **بالممارسات الموصى بها**، فيدعم **الاتساق والموثوقية**. مثال: في فريق تطبيق التوصيل، يعني ذلك ألا يستخدم كل مختبِر أداة GenAI بطريقته الخاصة، بل ضمن طريقة إدارة موحّدة.

**ISO/IEC 23053:2022** معيار يقدم **إطارًا لعمليات دورة حياة أنظمة AI** المبنية على تعلّم الآلة، مع تركيز على **السلامة والشفافية**. وفي الاختبار يوفّر إطارًا لـ **جودة البيانات والشفافية والسلامة** عند استخدام GenAI. مثال: إذا ولّد النموذج بيانات اختبار اصطناعية لعناوين العملاء، فالسؤال عن **جودة** هذه البيانات، وعن **وضوح** طريقة إنتاجها، يدخل في صلب ما يركز عليه هذا المعيار.

**EU AI Act** هو **التنظيم** الوحيد في الجدول، أي **إطار قانوني** يعالج مخاطر AI و**يصنّف التطبيقات حسب مستوى خطرها**. ويذكر المنهج أنه **يفرض الامتثال** في **الشفافية والمساءلة وتخفيف التحيّز** لـ GenAI المستخدم في الاختبار. عمليًا، يعني هذا للمختبِر أن نجاح الأداة تقنيًا لا يكفي وحده: قد يُطلب من الفريق أن يوضح **كيف** استُخدم GenAI، و**من** يتحمل مسؤولية نتائجه. وتحديد ما ينطبق فعلًا على مشروع معيّن مسألة يراجعها المختصون، لا المختبِر وحده.

**NIST AI RMF** **إطار** أمريكي يقدم **إرشادات لإدارة مخاطر AI**، مع تركيز على **الإنصاف والشفافية والأمن**. ودوره في الاختبار دعم الإنصاف وتخفيف المخاطر، و**منع نتائج اختبار متحيّزة**. مثال: لو ولّد النموذج بيانات اختبار لأسماء العملاء كلها باللغة الإنجليزية، لبقيت واجهة التطبيق العربية دون اختبار كافٍ، وهذا نوع من التحيّز الذي يساعد إطار إدارة المخاطر على الانتباه إليه.

### لا تخلط بين — Don't Confuse

| Type | Example in the table | Key word in the syllabus |
|---|---|---|
| Regulation | EU AI Act | Legal framework; mandates compliance |
| Standard | ISO/IEC 42001, ISO/IEC 23053 | Specifies requirements; provides a framework |
| Framework | NIST AI RMF | Offers guidelines |

انتبه إلى أن كلمة «framework» تظهر في وصف أكثر من مرجع، لكن **النوع** الذي يحدده المنهج هو المهم: ISO/IEC 23053 **معيار** رغم أن اسمه يحتوي كلمة إطار.

### المتابعة المستمرة — Staying Updated

يختم المنهج بأن تقنيات AI وبيئتها التنظيمية **تتطور باستمرار**، ولذلك على مؤسسات الاختبار **متابعة تطور التنظيمات والمعايير والقوانين الوطنية وأطر أفضل الممارسات**، مثل المذكورة في الجدول. الجدول إذن **أمثلة** وليس قائمة نهائية.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">This is a K1 objective: recall the name and match it to its type and purpose. Do not mix up a standard (ISO/IEC), a regulation (EU AI Act) and a framework (NIST AI RMF).</p><p class="gx-ar" lang="ar" dir="rtl">هذا هدف K1: تذكّر الاسم واربطه بنوعه وغرضه. لا تخلط بين معيار (ISO/IEC) وتنظيم قانوني (EU AI Act) وإطار (NIST AI RMF).</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app handles customer names, phone numbers and addresses, so the team cannot treat GenAI use as a purely technical choice. It can organise its AI-use policy and responsibilities with a management system, use a risk framework to assess use cases, and review the applicable legal requirements with specialists. Mentioning a standard in a document does not prove it is applied, and obligations and effective dates need checking against official sources for each country and use.</p><p class="gx-ar" lang="ar" dir="rtl">يتعامل تطبيق التوصيل مع أسماء العملاء وأرقام هواتفهم وعناوينهم، فلا يستطيع الفريق اعتبار استخدام GenAI قرارًا تقنيًا بحتًا. يستطيع تنظيم سياسة استخدام AI ومسؤولياته بنظام إدارة، واستخدام إطار مخاطر لتقييم حالات الاستخدام، ومراجعة المتطلبات القانونية المنطبقة مع المختصين. ذكر معيار في وثيقة لا يثبت تطبيقه، والالتزامات وتواريخ سريانها تحتاج تحققًا من المصادر الرسمية لكل دولة واستخدام.</p></aside>

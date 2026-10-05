---
order: 9
slug: "3-4-1"
chapter: 3
group: "3.4"
section: "3.4.1"
title: "AI Regulations, Standards and Frameworks Relevant to GenAI in Software Testing"
titleAr: "التنظيمات والمعايير والأطر المرتبطة بالذكاء التوليدي في الاختبار"
objectives: "GenAI-3.4.1 · K1"
minutes: 7
lo:
  GenAI-3.4.1: "Recall examples of AI regulations, standards and frameworks relevant to GenAI in testing."
loAr:
  GenAI-3.4.1: "تتذكّر أمثلة على تنظيمات ومعايير وأطر الذكاء الاصطناعي المرتبطة بالذكاء التوليدي في الاختبار."
takeaways:
  - "Know each name, its type (regulation, standard or framework) and its purpose."
  - "ISO/IEC 42001 and ISO/IEC 23053 are standards, the EU AI Act is a regulation, and NIST AI RMF is a framework."
  - "Citing a standard does not prove it is applied, and a voluntary framework is not legal compliance."
takeawaysAr:
  - "اعرف كل اسم ونوعه (تنظيم أو معيار أو إطار) والغرض منه."
  - "ISO/IEC 42001 وISO/IEC 23053 معايير، وEU AI Act تنظيم قانوني، وNIST AI RMF إطار."
  - "ذكر معيار لا يثبت تطبيقه، والإطار الطوعي ليس امتثالًا قانونيًا."
terms:
  - en: "EU AI Act"
    ar: "قانون الذكاء الاصطناعي الأوروبي"
    def: "The EU's risk-based legal framework for AI systems."
    defAr: "الإطار القانوني للاتحاد الأوروبي لأنظمة AI، القائم على تصنيف المخاطر."
  - en: "NIST AI RMF"
    ar: "إطار NIST لإدارة مخاطر الذكاء الاصطناعي"
    def: "A voluntary framework from the US NIST for managing AI risks, including fairness, transparency and security."
    defAr: "إطار طوعي من المعهد الأمريكي NIST لإدارة مخاطر AI، يشمل الإنصاف والشفافية والأمن."
---
يربط هذا الفصل فرص GenAI بمخاطر الاستدلال والخصوصية والثغرات والبيئة. تساعد الأطر على تنظيم إدارة هذه المخاطر، لكن نوع المرجع يختلف: قانون ملزم عند انطباقه، أو معيار، أو إطار إرشادي.

| Reference | Type | الفكرة الدراسية ودورها في الاختبار |
|---|---|---|
| ISO/IEC 42001:2023 | Standard | متطلبات نظام إدارة AI في المؤسسة؛ يعزز التزام استخدام GenAI في الاختبار بالممارسات الموصى بها، فيدعم الاتساق والموثوقية |
| ISO/IEC 23053:2022 | Standard | إطار لأنظمة AI التي تستخدم تعلّم الآلة؛ يساعد على فهم دورة الحياة وجودة البيانات والشفافية والسلامة |
| EU AI Act | Regulation | إطار قانوني قائم على المخاطر؛ ترتبط به الشفافية والمساءلة والتحيز بحسب التطبيق |
| NIST AI RMF 1.0 (US) | Framework | إرشادات لإدارة مخاطر AI، بما فيها الإنصاف والشفافية والأمن؛ يدعم الإنصاف ويساعد على منع نتائج اختبار متحيزة |

### ما الذي يعنيه كل مرجع للمختبِر؟ — What Each Means for Testers

**ISO/IEC 42001** يتعلق بإدارة الذكاء الاصطناعي على مستوى المؤسسة: سياسات، ومسؤوليات، وعمليات. قد يعني للمختبِر أن استخدام أدوات GenAI يتم ضمن سياسة موثقة وأدوار واضحة.

**ISO/IEC 23053** يصف إطارًا لأنظمة AI المبنية على تعلّم الآلة، فيساعد على فهم مكوّنات النظام ودورة حياته، وهذا مفيد عند اختبار أنظمة AI نفسها.

**EU AI Act** قانون يصنّف أنظمة AI حسب مستوى خطرها، ويفرض متطلبات أكثر على الأنظمة عالية الخطر. قد يؤثر على متطلبات التوثيق والشفافية التي يحتاج الفريق اختبارها أو إثباتها.

**NIST AI RMF** إطار إرشادي طوعي لإدارة مخاطر AI، يساعد الفريق على تحديد المخاطر وقياسها ومعالجتها بطريقة منظمة.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-ar">تلميح امتحان</span><span class="gx-en" lang="en" dir="ltr">Exam tip</span></p><p class="gx-ar">هذا هدف K1: تذكّر الاسم واربطه بنوعه وغرضه. لا تخلط بين معيار (ISO/IEC) وتنظيم قانوني (EU AI Act) وإطار (NIST AI RMF).</p><p class="gx-en" lang="en" dir="ltr">This is a K1 objective: recall the name and match it to its type and purpose. Do not mix up a standard (ISO/IEC), a regulation (EU AI Act) and a framework (NIST AI RMF).</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-ar">من الواقع العملي</span><span class="gx-en" lang="en" dir="ltr">In practice</span></p><p class="gx-ar">يستطيع الفريق تنظيم سياسة استخدام AI ومسؤولياته بنظام إدارة، واستخدام إطار مخاطر لتقييم حالات الاستخدام، ومراجعة المتطلبات القانونية المنطبقة مع المختصين. ذكر معيار في وثيقة لا يثبت تطبيقه، والالتزامات وتواريخ سريانها تحتاج تحققًا من المصادر الرسمية لكل دولة واستخدام.</p><p class="gx-en" lang="en" dir="ltr">A team can organise its AI-use policy and responsibilities with a management system, use a risk framework to assess use cases, and review the applicable legal requirements with specialists. Mentioning a standard in a document does not prove it is applied, and obligations and effective dates need checking against official sources for each country and use.</p></aside>

ومع استمرار تطور تقنيات الذكاء الاصطناعي وتنظيماتها، على مؤسسات الاختبار متابعة تطور التنظيمات والمعايير والقوانين الوطنية وأطر أفضل الممارسات، مثل المذكورة في الجدول.

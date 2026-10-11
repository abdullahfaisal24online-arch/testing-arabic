---
order: 1
slug: "4-1-1"
chapter: 4
group: "4.1"
section: "4.1.1"
title: "Key Architectural Components and Concepts of LLM-Powered Test Infrastructure"
titleAr: "المكونات والمفاهيم المعمارية لبنية الاختبار المدعومة بالنماذج اللغوية"
objectives: "GenAI-4.1.1 · K2"
minutes: 9
lo:
  GenAI-4.1.1: "Explain the main components and concepts of LLM-powered test infrastructure."
loAr:
  GenAI-4.1.1: "شرح المكوّنات والمفاهيم الرئيسية لبنية الاختبار التحتية المعتمدة على النماذج اللغوية الكبيرة."
takeaways:
  - "Main components: front-end, back-end, the LLM and external data sources (relational and vector databases); the back-end also post-processes the LLM output."
  - "The LLM can be a third-party service via API or a model hosted inside the organisation."
  - "Authentication and permissions stay the application's job, not the model's."
  - "Post-processing can reject malformed output, but well-formed text can still be wrong."
takeawaysAr:
  - "المكوّنات الأساسية: الواجهة الأمامية، والواجهة الخلفية، والنموذج اللغوي، ومصادر البيانات الخارجية (قواعد البيانات العلائقية والمتجهية)؛ والواجهة الخلفية تتولى أيضًا المعالجة اللاحقة لمخرجات النموذج."
  - "يمكن أن يكون النموذج اللغوي خدمة خارجية عبر API أو نموذجًا مستضافًا داخل المؤسسة."
  - "المصادقة والصلاحيات تبقى من مسؤولية التطبيق، لا النموذج."
  - "المعالجة اللاحقة ترفض المخرجات المشوّهة البنية، لكن النص السليم البنية قد يبقى خاطئًا."
terms:
  - en: "Vector Database"
    ar: "قاعدة بيانات متجهية"
    def: "A store of embeddings that supports semantic retrieval of the most relevant content for a query."
    defAr: "مخزن للتضمينات (embeddings) يدعم الاسترجاع الدلالي لأكثر المحتوى صلةً بالاستعلام."
  - en: "Post-processing"
    ar: "المعالجة اللاحقة"
    def: "Checking and transforming model output, for example validating its schema, before it is shown or used."
    defAr: "فحص مخرجات النموذج وتحويلها، مثل التحقق من مطابقتها للمخطط (schema)، قبل عرضها أو استخدامها."
---
أداة الاختبار المدعومة بالنماذج تربط تفاعل المستخدم ببيانات العمل وإجراءات المعالجة والتوليد. قد تكون دردشة أو واجهة متخصصة؛ القيمة ليست في شكل المحادثة، بل في طريقة توفير السياق والتحقق من الناتج ودمجه في عملية الاختبار.

<figure class="gx-figure" aria-label="Request flow: front-end, back-end, data stores and LLM, then post-processing back to the front-end."><div class="gx-flow-row"><span class="gx-flow-node">Front-end<small>tester request</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Back-end<small>auth · retrieval · prompt</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">LLM<small>generates draft</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Post-processing<small>checks before display</small></span></div><div class="gx-flow-row"><span class="gx-tokens-label">Data</span><span class="gx-token">Relational DB · structured data</span><span class="gx-token gx-token--alt">Vector DB · semantic retrieval</span></div><figcaption>The back-end orchestrates data stores and the model; post-processing checks the output before the tester sees it.</figcaption></figure>

| Component | المسؤولية | مثال |
|---|---|---|
| Front-end | استقبال طلب المختبِر وعرض النتائج | اختيار قصة وطلب حالات اختبار |
| Back-end | المصادقة والاسترجاع وتجهيز التوجيه واستدعاء النموذج | جمع معايير القبول المسموح بها |
| LLM | توليد استجابة من التوجيه والسياق | مسودة الحالات والنتائج |
| External data: relational database | البيانات المنظمة، تدمجها الواجهة الخلفية | حالات ومعرّفات وعلاقاتها |
| External data: vector database | استرجاع دلالي بواسطة Embeddings، تدمجه الواجهة الخلفية | مقاطع توثيق ذات صلة بالسؤال |
| Post-processing (back-end function) | فحص وتحويل الناتج قبل العرض | التحقق من البنية وربط الحالات بالمصادر |

### لماذا نوعان من قواعد البيانات؟ — Two Kinds of Database

**قاعدة البيانات العلائقية** تخزن البيانات المنظمة التي تُسأل بدقة: حالة الاختبار رقم 42، ومتطلباتها، ونتيجة آخر تشغيل لها. السؤال هنا «أعطني بالضبط هذا السجل».

**قاعدة البيانات المتجهية** تخزن Embeddings لمقاطع نصية وتسمح بالبحث بالمعنى: «أعطني الأجزاء الأقرب لسؤال عن قواعد كلمة المرور» حتى لو لم تحتوِ الوثيقة على الكلمات نفسها. هذا أساس RAG الذي نشرحه في القسم التالي.

الأداة الجيدة تستخدم الاثنين: العلائقية للدقة والعلاقات، والمتجهية للعثور على السياق المناسب.

يمكن أن يكون النموذج خدمة طرف ثالث عبر API أو نموذجًا داخل المؤسسة. ويختلف هذا النظام عن شاتبوت قواعد ثابتة لأنه يولّد الاستجابات من السياق، وعن تطبيق عميل/خادم بسيط لأن الخلفية تنسّق مصادر متعددة ومراحل معالجة.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice · Tracing one request</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي · تتبّع طلب واحد</span></p><p class="gx-en" lang="en" dir="ltr">The tester picks the “sign-up” story. The back-end checks the user's permissions, retrieves the approved version and builds the prompt. The model returns a draft, and the tool checks the fields and requirement IDs before showing it for review.</p><p class="gx-ar" lang="ar" dir="rtl">يختار المختبِر قصة «التسجيل». تتحقق الواجهة الخلفية من صلاحيات المستخدم، وتسترجع النسخة المعتمدة، وتبني الـ prompt. يعيد النموذج مسودة، وتتحقق الأداة من الحقول ومعرّفات المتطلبات قبل عرضها للمراجعة.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the components and the job of each: front-end (user interaction), back-end (auth, data retrieval, prompt preparation, LLM interaction, and post-processing of the output), the LLM (generation), and external data sources the back-end integrates: relational databases (structured data) and vector databases (semantic retrieval).</p><p class="gx-ar" lang="ar" dir="rtl">اعرف المكوّنات ووظيفة كلٍّ منها: الواجهة الأمامية (تفاعل المستخدم)، والواجهة الخلفية (المصادقة، واسترجاع البيانات، وتجهيز الـ prompt، والتعامل مع النموذج، والمعالجة اللاحقة لمخرجاته)، والنموذج اللغوي (التوليد)، ومصادر البيانات الخارجية التي تدمجها الواجهة الخلفية: قواعد البيانات العلائقية (البيانات المهيكلة) والمتجهية (الاسترجاع الدلالي).</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Trusting structurally valid output. Post-processing can reject missing fields, but it cannot fix every reasoning error. And authentication and permissions remain the application's responsibility; the model does not replace them.</p><p class="gx-ar" lang="ar" dir="rtl">الثقة بمخرجات سليمة البنية. المعالجة اللاحقة ترفض الحقول الناقصة، لكنها لا تصلح كل أخطاء الاستدلال. كما تبقى المصادقة والصلاحيات من مسؤولية التطبيق، والنموذج لا يحلّ محلّها.</p></aside>

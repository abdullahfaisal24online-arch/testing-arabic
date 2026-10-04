---
order: 5
slug: "4-2-2"
chapter: 4
group: "4.2"
section: "4.2.2"
title: "LLMOps when Deploying and Managing LLMs for Software Testing"
titleAr: "عمليات النماذج اللغوية (LLMOps) عند نشرها وإدارتها في الاختبار"
objectives: "GenAI-4.2.2 · K2"
minutes: 8
lo:
  GenAI-4.2.2: "Summarise LLMOps for deploying and managing LLMs in testing."
takeaways:
  - "LLMOps covers the practices, tools and processes for developing, deploying and maintaining LLMs in operation."
  - "Considerations grow from a chatbot, to a GenAI-enabled test tool, to building an in-house tool."
  - "The approaches can coexist, and any of them can include RAG and fine-tuning."
  - "An open licence does not make running a model free."
terms:
  - en: "LLMOps"
    ar: "عمليات النماذج اللغوية"
    def: "Large Language Model Operations: practices, tools and processes for developing, deploying and maintaining LLMs in production."
---
اختيار نموذج وبناء تجربة أولية لا يكفيان لصيانة أداة اختبار مع الوقت. **Large Language Model Operations** مجموعة ممارسات وأدوات وعمليات تنظّم التطوير والنشر والصيانة في بيئة التشغيل، وتتغير قراراتها بحسب طريقة تبنّي المؤسسة لـ GenAI.

| Approach | اعتبارات التشغيل |
|---|---|
| AI chatbot | الخصوصية والأمن والكلفة، وتقييم ضمانات المزود أو قدرات التشغيل الداخلي |
| GenAI-enabled test tool | ما سبق، مضافًا إليه ضمانات أمن وأداء مزود الأداة، وملاءمة الدمج، والعائد مقابل الكلفة |
| In-house tool | إدارة البيانات والحوسبة والتخزين، وتدريب الفريق، والتحقق والصيانة، وخبرة نشر البنية |

يمكن استخدام خدمة نموذج عبر الإنترنت عندما تناسب الضمانات، أو تشغيل نموذج مرخّص للاستخدام الداخلي وفق القدرات المتاحة. وقد تجمع المؤسسة الدردشة لبعض المهام وأداة داخلية لأخرى؛ هذه الأساليب ليست بدائل متنافية، ويمكن أن تتضمن RAG وضبطًا دقيقًا.

### ما الذي تشمله الممارسات؟ — What LLMOps Covers

كما تحتاج الشيفرة إلى DevOps، يحتاج النموذج في التشغيل إلى ممارسات مستمرة. من أمثلتها: تتبع إصدار النموذج والتوجيه المستخدم في كل نتيجة، ومراقبة جودة المخرجات مع الوقت، وإعادة التقييم عند تحديث النموذج أو المزود، وإدارة الكلفة والاستهلاك، وضبط الصلاحيات والسجلات. بدونها، قد تتغيّر نتائج أداة الاختبار بعد تحديث صامت من المزود دون أن يلاحظ أحد.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice</p><p>A small team summarising non-sensitive data may be fine with an approved tool after evaluation. A task that needs document retrieval with fine-grained permissions and workflow control widens the infrastructure and maintenance needs. Do not build in-house just because it looks more advanced; weigh risk, cost, resources and goals.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Know the three approaches and what each adds: AI chatbot (privacy, security, cost, provider guarantees), GenAI-enabled test tool (plus the tool vendor's security and performance, integration and value for cost), in-house tool (plus data, compute, storage, team training, validation, maintenance and deployment expertise).</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Assuming an open-licence model is free to run. Compute, storage, monitoring, maintenance and training costs remain, and the licence terms themselves need review.</p></aside>

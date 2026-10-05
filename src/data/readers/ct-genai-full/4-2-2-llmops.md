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
loAr:
  GenAI-4.2.2: "تلخيص LLMOps لنشر النماذج اللغوية وإدارتها في الاختبار."
takeaways:
  - "LLMOps covers the practices, tools and processes for developing, deploying and maintaining LLMs in operation."
  - "Considerations grow from a chatbot, to a GenAI-enabled test tool, to building an in-house tool."
  - "The approaches can coexist, and any of them can include RAG and fine-tuning."
  - "An open licence does not make running a model free."
takeawaysAr:
  - "يغطي LLMOps الممارسات والأدوات والعمليات لتطوير النماذج اللغوية ونشرها وصيانتها في التشغيل."
  - "تزداد الاعتبارات من روبوت محادثة، إلى أداة اختبار مدعومة بالذكاء التوليدي، إلى بناء أداة داخلية."
  - "يمكن أن تتعايش هذه الأساليب، ويمكن لأيٍّ منها أن يتضمن RAG والضبط الدقيق."
  - "الترخيص المفتوح لا يعني أن تشغيل النموذج مجاني."
terms:
  - en: "LLMOps"
    ar: "عمليات النماذج اللغوية"
    def: "Large Language Model Operations: practices, tools and processes for developing, deploying and maintaining LLMs in production."
    defAr: "عمليات النماذج اللغوية الكبيرة: ممارسات وأدوات وعمليات لتطوير النماذج اللغوية ونشرها وصيانتها في بيئة الإنتاج."
---
اختيار نموذج وبناء تجربة أولية لا يكفيان لصيانة أداة اختبار مع الوقت. **Large Language Model Operations** مجموعة ممارسات وأدوات وعمليات تنظّم التطوير والنشر والصيانة في بيئة التشغيل، وتتغير قراراتها بحسب طريقة تبنّي المؤسسة لـ GenAI.

| Approach | اعتبارات التشغيل |
|---|---|
| AI chatbot | الخصوصية والأمن والكلفة، وتقييم ضمانات المزود أو قدرات التشغيل الداخلي |
| GenAI-enabled test tool | ما سبق، مضافًا إليه ضمانات أمن وأداء مزود الأداة، وملاءمة الدمج، والعائد مقابل الكلفة |
| In-house tool | إدارة البيانات والحوسبة والتخزين، وتدريب الفريق، والتحقق والصيانة، وخبرة نشر البنية |

في حالة الدردشة، يمكن استخدام منصات **LLM-as-a-Service** إذا توفرت الضمانات اللازمة، أو نشر بنية داخلية تعتمد على نماذج بترخيص مفتوح المصدر لتحكم أكبر، مع تقييم صارم لضمانات المزود أو القدرات الداخلية. وفي حالة أداة اختبار جاهزة، تكمّل الأداة عمليات الاختبار القائمة، فتحتاج تحليل كلفة وفائدة وتقييم مخاطر شاملين. وفي البناء الداخلي، يلزم وضع عمليات منظمة للتحقق من التطويرات الخاصة بـ GenAI وصيانتها. وقد تجمع المؤسسة الدردشة لبعض المهام وأداة داخلية لأخرى؛ هذه الأساليب ليست بدائل متنافية، ويمكن أن تتضمن RAG وضبطًا دقيقًا.

### ما الذي تشمله الممارسات؟ — What LLMOps Covers

كما تحتاج الشيفرة إلى DevOps، يحتاج النموذج في التشغيل إلى ممارسات مستمرة. من أمثلتها: تتبع إصدار النموذج والتوجيه المستخدم في كل نتيجة، ومراقبة جودة المخرجات مع الوقت، وإعادة التقييم عند تحديث النموذج أو المزود، وإدارة الكلفة والاستهلاك، وضبط الصلاحيات والسجلات. بدونها، قد تتغيّر نتائج أداة الاختبار بعد تحديث صامت من المزود دون أن يلاحظ أحد.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A small team summarising non-sensitive data may be fine with an approved tool after evaluation. A task that needs document retrieval with fine-grained permissions and workflow control widens the infrastructure and maintenance needs. Do not build in-house just because it looks more advanced; weigh risk, cost, resources and goals.</p><p class="gx-ar" lang="ar" dir="rtl">فريق صغير يلخّص بيانات غير حساسة قد يكفيه أداة معتمدة بعد تقييمها. أما مهمة تحتاج استرجاع مستندات بصلاحيات دقيقة وتحكّمًا بسير العمل فتوسّع احتياجات البنية التحتية والصيانة. لا تبنِ داخليًا لمجرد أنه يبدو أكثر تقدّمًا؛ وازن بين المخاطر والكلفة والموارد والأهداف.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the three approaches and what each adds: AI chatbot (privacy, security, cost, provider guarantees), GenAI-enabled test tool (plus the tool vendor's security and performance, integration and value for cost), in-house tool (plus data, compute, storage, team training, validation, maintenance and deployment expertise).</p><p class="gx-ar" lang="ar" dir="rtl">اعرف الأساليب الثلاثة وما يضيفه كلٌّ منها: روبوت المحادثة (الخصوصية، والأمن، والكلفة، وضمانات المزوّد)، وأداة الاختبار المدعومة بالذكاء التوليدي (إضافةً إلى أمن مورّد الأداة وأدائه، والتكامل، والقيمة مقابل الكلفة)، والأداة الداخلية (إضافةً إلى البيانات، والحوسبة، والتخزين، وتدريب الفريق، والتحقق، والصيانة، وخبرة النشر).</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming an open-licence model is free to run. Compute, storage, monitoring, maintenance and training costs remain, and the licence terms themselves need review.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن تشغيل نموذج مفتوح الترخيص مجاني. تبقى تكاليف الحوسبة والتخزين والمراقبة والصيانة والتدريب، وشروط الترخيص نفسها تحتاج مراجعة.</p></aside>

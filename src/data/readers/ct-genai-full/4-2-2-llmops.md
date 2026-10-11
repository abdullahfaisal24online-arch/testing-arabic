---
order: 5
slug: "4-2-2"
chapter: 4
group: "4.2"
section: "4.2.2"
title: "LLMOps when Deploying and Managing LLMs for Software Testing"
titleAr: "عمليات النماذج اللغوية (LLMOps) عند نشرها وإدارتها في الاختبار"
objectives: "GenAI-4.2.2 · K2"
minutes: 14
lo:
  GenAI-4.2.2: "Summarise LLMOps for deploying and managing LLMs in testing."
loAr:
  GenAI-4.2.2: "تلخيص LLMOps لنشر النماذج اللغوية وإدارتها في الاختبار."
takeaways:
  - "LLMOps covers the practices, tools and processes for developing, deploying and maintaining LLMs in operation."
  - "Considerations grow from a chatbot, to a GenAI-enabled test tool, to building an in-house tool."
  - "The approaches can coexist, and any of them can include RAG and fine-tuning."
  - "An open licence does not make running a model free."
  - "For a chatbot, use LLM-as-a-Service only with the necessary assurances, or run open-source licensed LLMs in-house for greater control."
  - "A GenAI-enabled test tool complements existing test processes, so it needs a cost-benefit analysis and risk assessment."
takeawaysAr:
  - "يغطي LLMOps الممارسات والأدوات والعمليات لتطوير النماذج اللغوية ونشرها وصيانتها في التشغيل."
  - "تزداد الاعتبارات من روبوت محادثة، إلى أداة اختبار مدعومة بالذكاء التوليدي، إلى بناء أداة داخلية."
  - "يمكن أن تتعايش هذه الأساليب، ويمكن لأيٍّ منها أن يتضمن RAG والضبط الدقيق."
  - "الترخيص المفتوح لا يعني أن تشغيل النموذج مجاني."
  - "في روبوت المحادثة، استخدم LLM-as-a-Service فقط مع الضمانات اللازمة، أو شغّل نماذج مفتوحة الترخيص داخليًا لتحكم أكبر."
  - "أداة الاختبار المدعومة بالذكاء التوليدي تكمّل عمليات الاختبار القائمة، فتحتاج تحليل كلفة وفائدة وتقييم مخاطر."
terms:
  - en: "LLMOps"
    ar: "عمليات النماذج اللغوية"
    def: "Large Language Model Operations: practices, tools and processes for developing, deploying and maintaining LLMs in production."
    defAr: "عمليات النماذج اللغوية الكبيرة: ممارسات وأدوات وعمليات لتطوير النماذج اللغوية ونشرها وصيانتها في بيئة الإنتاج."
  - en: "LLM-as-a-Service"
    ar: "النموذج اللغوي كخدمة"
    def: "A provider-hosted platform that gives access to an LLM over the internet, so the organisation does not run the model itself."
    defAr: "منصة يستضيفها مزوّد وتتيح الوصول إلى نموذج لغوي عبر الإنترنت، فلا تشغّل المؤسسة النموذج بنفسها."
---
تجربة GenAI في الاختبار تبدأ عادة بسيطة: مختبِر يفتح روبوت محادثة ويطلب حالات اختبار. لكن عندما يصبح النموذج جزءًا ثابتًا من عمل الفريق، تظهر أسئلة أخرى: أين تذهب بيانات العملاء؟ من يدفع الكلفة؟ ماذا يحدث إذا حدّث المزوّد النموذج؟ من يصون الأداة؟ هذه أسئلة **التشغيل**، وهي موضوع **LLMOps**، الممارسة الثانية التي يذكرها المنهج لتشغيل بنية الاختبار المدعومة بالنماذج، بعد الضبط الدقيق (4.2.1). ويهم ذلك المختبِر لأن جودة ما تنتجه الأداة اليوم لا تضمن جودتها بعد شهرين إن لم يُدَر تشغيلها.

### ما هو LLMOps؟ — What LLMOps Is

يعرّف المنهج **عمليات النماذج اللغوية الكبيرة (Large Language Model Operations / LLMOps)** بأنها **مجموعة الممارسات والأدوات والعمليات** المصمّمة **لتبسيط وتنظيم تطوير النماذج اللغوية ونشرها وصيانتها في بيئات الإنتاج (production)**. لاحظ ثلاث كلمات:

- **التطوير**: إعداد الحل، مثل اختيار النموذج وكتابة التوجيهات وربط مصادر البيانات.
- **النشر**: إتاحة الحل للفريق في بيئة حقيقية، بصلاحيات وبنية مناسبة.
- **الصيانة**: إبقاؤه صالحًا مع الوقت، وهي الجزء الذي يُنسى غالبًا.

عمليًا، كما تحتاج الشيفرة إلى DevOps، يحتاج النموذج في التشغيل إلى ممارسات مستمرة، مثل: تتبع إصدار النموذج والتوجيه المستخدم في كل نتيجة، ومراقبة جودة المخرجات مع الوقت، وإعادة التقييم عند تحديث النموذج أو المزوّد، وإدارة الكلفة والاستهلاك، وضبط الصلاحيات والسجلات. بدونها، قد تتغيّر نتائج أداة الاختبار بعد تحديث صامت من المزوّد دون أن يلاحظ أحد. هذه الأمثلة من الممارسة، لا قائمة من المنهج.

### طريقة التبنّي تحدد القرارات — Three Adoption Approaches

يقول المنهج إن استخدام GenAI في عمليات الاختبار يمكن أن يتم بطرق مختلفة، و**الطريقة المختارة هي التي تحدد قرارات LLMOps**. ويذكر ثلاثة أساليب ممكنة:

| Approach | Primary considerations | What it adds |
|---|---|---|
| Using an AI chatbot | Data privacy and security risks, cost | LLM-as-a-Service with assurances, or in-house open-source LLMs; rigorous assessment of vendor assurances or internal capabilities |
| Using a test tool with GenAI capabilities | Same as chatbot: privacy, security, operational cost | Tool provider's data security and performance assurances; cost-benefit analysis and risk assessment |
| In-house development of a GenAI-based test tool | Comprehensive control of privacy and security | Planning compute, storage and staff training; structured validation and maintenance; deployment expertise |

### الأسلوب الأول: روبوت المحادثة — Using an AI Chatbot

الاعتبارات الأساسية هنا: **إدارة مخاطر خصوصية البيانات وأمنها** مع **تحسين الكلفة**. ويذكر المنهج خيارين:

- **منصات LLM-as-a-Service**: نموذج يستضيفه مزوّد خارجي، وتستخدمه المؤسسة عبر الإنترنت، **إذا قُدّمت الضمانات اللازمة** (عمليًا: مثل عدم استخدام بياناتك في تدريب النموذج، ومكان حفظها).
- **بنية داخلية تعتمد على نماذج بترخيص مفتوح المصدر (open-source licensed LLMs)**: تشغّل المؤسسة النموذج على خوادمها **لتحكم أكبر**، فلا تغادر البيانات حدودها.

وفي الحالتين، يشدد المنهج على **تقييم صارم لضمانات المزوّد أو للقدرات الداخلية**، للتخفيف من مخاطر الخصوصية والأمن (القسم 3.2) ولضمان **الكفاءة التشغيلية**. مثال: قصة مستخدم في تطبيق التوصيل تحتوي لقطة من بيانات عميل حقيقي (اسم ورقم هاتف وعنوان). لصقها في روبوت محادثة عام بلا ضمانات يعني إرسال بيانات شخصية خارج المؤسسة.

### الأسلوب الثاني: أداة اختبار بقدرات GenAI — Using a GenAI-enabled Test Tool

لهذا الأسلوب **اعتبارات مشابهة** لروبوت المحادثة: الخصوصية والأمن وكلفة التشغيل. لكن **يُضاف إليها** أن على المؤسسة **تقييم ضمانات أمن البيانات والأداء التي يقدّمها مزوّد الأداة**؛ فالأداة نفسها تصبح طرفًا يرى بياناتك، وأداؤها يؤثر في سرعة عملك. ويذكر المنهج أن هذه الأدوات **تكمّل عادة عمليات الاختبار القائمة**، ولهذا تحتاج **تحليلًا شاملًا للكلفة والفائدة (cost-benefit analysis) وتقييمًا للمخاطر (risk assessment)**: هل تستحق الاشتراك؟ وهل تندمج مع أدوات الفريق؟ مثال: أداة إدارة اختبار تولّد حالات اختبار من قصص المستخدم داخل أداة الفريق. قبل اعتمادها يسأل الفريق: أين تُعالَج القصص؟ وكم سيوفّر من وقت المختبِرَين مقابل كلفة الاشتراك؟

### الأسلوب الثالث: بناء أداة داخلية — In-house Development

هنا يركّز المنهج على **التحكم الشامل في مخاطر الخصوصية والأمن**، وعلى **التخطيط الدقيق لاستخدام موارد الذكاء الاصطناعي**: **موارد الحوسبة، وتخزين البيانات، وتدريب الموظفين**. كما يجب على المؤسسة **وضع عمليات منظمة للتحقق من التطويرات الخاصة بـ GenAI وصيانتها**؛ فالأداة الداخلية لا يصونها مزوّد، بل الفريق نفسه. ويحتاج هذا الأسلوب **خبرة في تنفيذ بنية اختبار مدعومة بالنماذج ونشرها**. مثال: فريق التوصيل يبني أداة داخلية تسترجع متطلبات التطبيق وتولّد حالات اختبار. عليه أن يقرر أين يُشغَّل النموذج، ومن يحدّث فهرس المستندات، وكيف يُعاد تقييم الأداة بعد كل تغيير.

### ليست بدائل متنافية — Not Mutually Exclusive

يؤكد المنهج أن هذه الأساليب **ليست متنافية**: قد تستخدم المؤسسة روبوت محادثة لبعض المهام وتطوّر أدوات مخصّصة لمهام أخرى، فتُطبَّق **في الوقت نفسه** بحسب أنشطة الاختبار. كما يمكن أن تتضمن **تقنيات إضافية مثل RAG والضبط الدقيق لـ LLM أو SLM** لتعزيز فاعلية عمليات الاختبار وقابليتها للتكيّف. مثال: الأداة الداخلية لفريق التوصيل تستخدم RAG لاسترجاع المتطلبات، ونموذجًا صغيرًا مضبوطًا على قالب حالات الاختبار.

### لا تخلط بين — Don't Confuse

| | LLM-as-a-Service | In-house open-source LLM |
|---|---|---|
| Who runs the model | The provider | The organisation |
| Data leaves the organisation | Yes, under provider assurances | No, if hosted internally |
| Main thing to assess | Vendor assurances | Internal capabilities |
| Cost profile | Usage fees | Compute, storage, staff, maintenance |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team uses an approved chatbot to summarise non-sensitive release notes; that was enough after the provider's assurances were checked. Generating test data from production orders is different: it touches customer names, phone numbers and addresses, and needs document retrieval with fine-grained permissions. That need, not the wish to look advanced, is what justified a small in-house tool, together with the cost of compute, storage, monitoring and keeping it maintained.</p><p class="gx-ar" lang="ar" dir="rtl">يستخدم فريق تطبيق التوصيل روبوت محادثة معتمدًا لتلخيص ملاحظات الإصدار غير الحساسة، وكان ذلك كافيًا بعد التحقق من ضمانات المزوّد. أما توليد بيانات اختبار من طلبات الإنتاج فمختلف: فهو يمسّ أسماء العملاء وأرقام هواتفهم وعناوينهم، ويحتاج استرجاع مستندات بصلاحيات دقيقة. هذه الحاجة، لا الرغبة في أن يبدو الحل متقدمًا، هي ما برّر بناء أداة داخلية صغيرة، مع حساب كلفة الحوسبة والتخزين والمراقبة والصيانة.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the three approaches and what each adds: AI chatbot (privacy, security, cost, provider guarantees), GenAI-enabled test tool (plus the tool vendor's data security and performance assurances, and a cost-benefit analysis and risk assessment), in-house tool (plus data, compute, storage, team training, validation, maintenance and deployment expertise).</p><p class="gx-ar" lang="ar" dir="rtl">اعرف الأساليب الثلاثة وما يضيفه كلٌّ منها: روبوت المحادثة (الخصوصية، والأمن، والكلفة، وضمانات المزوّد)، وأداة الاختبار المدعومة بالذكاء التوليدي (إضافةً إلى ضمانات أمن البيانات والأداء من مزوّد الأداة، وتحليل الكلفة والفائدة وتقييم المخاطر)، والأداة الداخلية (إضافةً إلى البيانات، والحوسبة، والتخزين، وتدريب الفريق، والتحقق، والصيانة، وخبرة النشر).</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming an open-licence model is free to run. Compute, storage, monitoring, maintenance and training costs remain, and the licence terms themselves need review.</p><p class="gx-ar" lang="ar" dir="rtl">افتراض أن تشغيل نموذج مفتوح الترخيص مجاني. تبقى تكاليف الحوسبة والتخزين والمراقبة والصيانة والتدريب، وشروط الترخيص نفسها تحتاج مراجعة.</p></aside>

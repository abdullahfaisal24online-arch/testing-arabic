---
order: 1
slug: "4-1-1"
chapter: 4
group: "4.1"
section: "4.1.1"
title: "Key Architectural Components and Concepts of LLM-Powered Test Infrastructure"
titleAr: "المكونات والمفاهيم المعمارية لبنية الاختبار المدعومة بالنماذج اللغوية"
objectives: "GenAI-4.1.1 · K2"
minutes: 13
lo:
  GenAI-4.1.1: "Explain the main components and concepts of LLM-powered test infrastructure."
loAr:
  GenAI-4.1.1: "شرح المكوّنات والمفاهيم الرئيسية لبنية الاختبار التحتية المعتمدة على النماذج اللغوية الكبيرة."
takeaways:
  - "Main components: front-end, back-end, the LLM and external data sources (relational and vector databases); the back-end also post-processes the LLM output."
  - "The LLM can be a third-party service via API or a model hosted inside the organisation."
  - "Authentication and permissions stay the application's job, not the model's."
  - "Post-processing can reject malformed output, but well-formed text can still be wrong."
  - "It goes beyond client-server: the LLM interprets and reasons on testware, and responses are generated from context, not scripted rules."
takeawaysAr:
  - "المكوّنات الأساسية: الواجهة الأمامية، والواجهة الخلفية، والنموذج اللغوي، ومصادر البيانات الخارجية (قواعد البيانات العلائقية والمتجهية)؛ والواجهة الخلفية تتولى أيضًا المعالجة اللاحقة لمخرجات النموذج."
  - "يمكن أن يكون النموذج اللغوي خدمة خارجية عبر API أو نموذجًا مستضافًا داخل المؤسسة."
  - "المصادقة والصلاحيات تبقى من مسؤولية التطبيق، لا النموذج."
  - "المعالجة اللاحقة ترفض المخرجات المشوّهة البنية، لكن النص السليم البنية قد يبقى خاطئًا."
  - "تتجاوز البنية نموذج العميل/الخادم: النموذج يفسّر ويستدل على وثائق الاختبار، والاستجابات تُولَّد من السياق لا من قواعد مكتوبة مسبقًا."
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
حين يستخدم المختبِر روبوت محادثة عامًا، يفعل كل شيء بنفسه: ينسخ قصة المستخدم، ويلصقها، ويكتب التوجيه، ثم يراجع الناتج وينقله إلى أداة إدارة الاختبار. أما **بنية الاختبار المدعومة بالنماذج اللغوية (LLM-powered test infrastructure)** فتنقل كثيرًا من هذا العمل إلى نظام مصمَّم لهذا الغرض. هذا القسم يشرح **من أي مكوّنات** يتكون هذا النظام، و**ماذا يفعل كل مكوّن**، و**لماذا** هو أكثر من مجرد تطبيق عميل/خادم. فهم هذه الصورة يساعد المختبِر على معرفة أين يمكن أن يقع الخطأ: في البيانات المسترجَعة، أو في التوجيه، أو في النموذج، أو في الفحص اللاحق.

### نوعان من البنى وما يوسّعها — Two Types and What Extends Them

يذكّر المنهج في مقدمة الفصل بأن **روبوتات المحادثة (AI chatbots)** و**أدوات الاختبار المدعومة بالنماذج (LLM-powered test tools)** هما نوعان من بنى الاختبار التي تستخدم النماذج اللغوية (انظر القسم 1.2.2). ثم يضيف أن **التوليد المعزّز بالاسترجاع (RAG)** في القسم 4.1.2، و**بنى الوكلاء (agents)** في القسم 4.1.3، **توسّع** وظائف البنية الأساسية التي نشرحها هنا وفائدتها.

### ما هي هذه البنية؟ — What It Is

يعرّفها المنهج بأنها **نظام يدمج نموذجًا لغويًا في عملية الاختبار** لتعزيز **الأتمتة، والاستدلال، واتخاذ القرار**. والفرق عن روبوت المحادثة التقليدي واضح: الروبوت يركّز أساسًا على **التفاعل الحواري**، أما أداة الاختبار المدعومة بالنموذج فمصمَّمة لدعم الاختبار نفسه، عبر:

- **معالجة الاستفسارات المتعلقة بالاختبار**، مثل «ما الحالات المرتبطة بالكوبونات التي فشلت في آخر تشغيل؟».
- **تحليل المتطلبات**، مثل كشف غموض في قصة «إلغاء الطلب».
- **توليد حالات الاختبار** من قصص المستخدم.
- **تقييم المخرجات**، مثل مقارنة النتيجة الفعلية بالمتوقعة.

### المكوّنات الأساسية — The Core Components

يقول المنهج إن البنية النموذجية تتبع **تصميمًا متعدد المكوّنات** يسهّل التفاعل مع النموذج **بأمان وكفاءة**. وتتكون من **واجهة أمامية** و**واجهة خلفية**، إضافةً إلى **مصادر بيانات خارجية** و**نموذج لغوي مدمج**:

<figure class="gx-figure" aria-label="Request flow: front-end, back-end, data stores and LLM, then post-processing back to the front-end."><div class="gx-flow-row"><span class="gx-flow-node">Front-end<small>tester request</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Back-end<small>auth · retrieval · prompt</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">LLM<small>generates draft</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Post-processing<small>checks before display</small></span></div><div class="gx-flow-row"><span class="gx-tokens-label">Data</span><span class="gx-token">Relational DB · structured data</span><span class="gx-token gx-token--alt">Vector DB · semantic retrieval</span></div><figcaption>The back-end orchestrates data stores and the model; post-processing checks the output before the tester sees it.</figcaption></figure>

| Component | Responsibility | Delivery app example |
|---|---|---|
| Front-end | User interface where testers enter queries or commands; shows results | Tester selects the coupon story and asks for test cases |
| Back-end | Processes user input: authentication, data retrieval, prompt preparation, interaction with the LLM | Checks the tester's access, fetches the approved story and rules, builds the prompt |
| LLM | Generates responses based on structured prompts; third-party service via API or custom in-house model | Drafts the test cases |
| External data: relational database | Structured data used in testing, such as test cases | Existing test cases, their IDs and linked requirements |
| External data: vector database | Semantic retrieval of related content using embeddings | Spec passages about coupons and free delivery |
| Post-processing (back-end function) | Enhances the raw output so it aligns with the test conditions before it reaches the front-end | Checks fields and requirement IDs; rejects malformed output |

**الواجهة الأمامية (front-end)** هي واجهة المستخدم التي **يُدخل فيها المختبِر استفساراته أو أوامره**. قد تكون نافذة محادثة، أو زرًا داخل أداة إدارة الاختبار بعنوان «ولّد حالات اختبار لهذه القصة».

**الواجهة الخلفية (back-end)** **تعالج مدخلات المستخدم** وتدير الوظائف الحرجة: **المصادقة (authentication)** للتأكد من هوية المستخدم وصلاحياته، و**استرجاع البيانات** المطلوبة، و**تجهيز التوجيه (prompt preparation)**، و**التعامل مع النموذج**. لماذا لا يُترك ذلك للنموذج؟ لأن النموذج لا يعرف من يحق له رؤية ماذا؛ المصادقة والصلاحيات قرارات تطبيق، لا قرارات لغة. مثلًا، مختبِر من فريق المطاعم لا ينبغي أن تسترجع له الأداة بيانات عملاء حقيقية.

**النموذج اللغوي (LLM)** **يولّد الاستجابات بناءً على توجيهات منظَّمة (structured prompts)** تجهّزها الواجهة الخلفية. ويمكن أن يكون **خدمة طرف ثالث** يُوصل إليها عبر **API**، أو **نموذجًا داخليًا مخصصًا (custom in-house model)**. عمليًا، هذا الاختيار يؤثر في الكلفة والتحكم والخصوصية: بيانات تطبيق التوصيل تحتوي أسماء وأرقام هواتف وعناوين، فإرسالها إلى خدمة خارجية قرار يحتاج تقييمًا (انظر القسم 3.2).

### لماذا هي أكثر من عميل/خادم؟ — Beyond Client-Server

يقول المنهج إن هذه البنية **تتجاوز نموذج العميل/الخادم التقليدي** لأنها تضم **مكوّنات معالجة ذكية** مثل النموذج اللغوي و**واجهات خلفية متعددة المصادر**. ويشرح ذلك في أربع نقاط:

1. **النموذج ليس مجرد خادم**، بل **مكوّن معالجة ذكي يفسّر ويستدل** بناءً على **وثائق الاختبار (testware)**. الخادم التقليدي يعيد ما طُلب منه بالضبط؛ أما النموذج فيقرأ قصة المستخدم ويستنتج منها، مثلًا، أن حد التوصيل المجاني يحتاج قيمًا حدّية حول 20.00 JOD.
2. **على عكس روبوتات المحادثة القائمة على القواعد** التي تتبع **ردودًا مكتوبة مسبقًا**، تولّد هذه البنية **رؤى اختبار ديناميكيًا من السياق**، مثل **المتطلبات، أو الشيفرة، أو نتائج الاختبار**. الروبوت القائم على القواعد يجيب عن «ما حالة الطلب؟» بقالب ثابت؛ أما هذه البنية فتستطيع أن تقرأ نتائج تشغيل الانحدار وتقترح أين يتركز الخلل.
3. **الواجهة الخلفية تدمج مصادر بيانات متعددة**، منها **قواعد البيانات العلائقية** للبيانات المنظمة المستخدمة في الاختبار مثل حالات الاختبار، و**قواعد البيانات المتجهية (vector databases)** للاسترجاع الدلالي للمحتوى المرتبط بواسطة **التضمينات (embeddings)**.
4. **الواجهة الخلفية تحسّن الناتج الخام للنموذج عبر المعالجة اللاحقة (post-processing)**، لتضمن أن الاستجابات **تتوافق مع شروط الاختبار في عملية الاختبار** قبل عرضها على الواجهة الأمامية.

### لماذا نوعان من قواعد البيانات؟ — Two Kinds of Database

**قاعدة البيانات العلائقية** تخزن البيانات المنظمة التي تُسأل بدقة: حالة الاختبار رقم 42، ومتطلباتها، ونتيجة آخر تشغيل لها. السؤال هنا «أعطني بالضبط هذا السجل».

**قاعدة البيانات المتجهية** تخزن Embeddings لمقاطع نصية وتسمح بالبحث بالمعنى: «أعطني الأجزاء الأقرب لسؤال عن رسوم التوصيل» حتى لو كانت الوثيقة تستخدم عبارة «delivery fee» أو «الحد الأدنى للطلب» بدل الكلمات نفسها. هذا أساس RAG الذي نشرحه في القسم التالي.

الأداة الجيدة تستخدم الاثنين: العلائقية للدقة والعلاقات، والمتجهية للعثور على السياق المناسب.

### المعالجة اللاحقة: آخر خط قبل المختبِر — Post-processing

النموذج قد يعيد نصًا بصيغة غير متوقعة: حقل ناقص، أو معرّف متطلب غير موجود، أو حالة اختبار لا ترتبط بأي شرط اختبار. المعالجة اللاحقة، وهي **وظيفة من وظائف الواجهة الخلفية**، تفحص الناتج وتحوّله قبل أن يصل إلى المختبِر. مثلًا، ترفض حالة اختبار تشير إلى حالة طلب غير موجودة مثل «Shipped»، لأن حالات الطلب في التطبيق هي Placed وAccepted وPreparing وOut for delivery وDelivered وCancelled فقط. لكن انتبه: الناتج السليم البنية قد يبقى خاطئًا في المنطق، ولذلك تبقى مراجعة المختبِر ضرورية.

### لا تخلط بين — Don't Confuse

| | Traditional client-server | Rule-based chatbot | LLM-powered test infrastructure |
|---|---|---|---|
| How the response is produced | Server returns the requested data | Scripted responses from fixed rules | Generated dynamically from context |
| Role of the processing component | Store and return data | Match input to rules | Interpret and reason on testware |
| Data sources | Usually one application database | Its rule set | Multiple sources: relational and vector databases |
| Output checking | Not needed for stored data | Responses are pre-written | Post-processing before display, then human review |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice · Tracing one request</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي · تتبّع طلب واحد</span></p><p class="gx-en" lang="en" dir="ltr">A delivery app tester picks the coupon story and asks for test cases. The back-end checks the tester's permissions, pulls the story and existing coupon test cases from the relational database, retrieves the free-delivery rule from the vector database, and builds the prompt. The model returns a draft, and post-processing checks the fields and requirement IDs before the tester reviews it.</p><p class="gx-ar" lang="ar" dir="rtl">يختار مختبِر في تطبيق التوصيل قصة الكوبونات ويطلب حالات اختبار. تتحقق الواجهة الخلفية من صلاحياته، وتجلب القصة وحالات الكوبونات الحالية من قاعدة البيانات العلائقية، وتسترجع قاعدة التوصيل المجاني من قاعدة البيانات المتجهية، وتبني التوجيه. يعيد النموذج مسودة، وتفحص المعالجة اللاحقة الحقول ومعرّفات المتطلبات قبل أن يراجعها المختبِر.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the components and the job of each: front-end (user interaction), back-end (auth, data retrieval, prompt preparation, LLM interaction, and post-processing of the output), the LLM (generation), and external data sources the back-end integrates: relational databases (structured data) and vector databases (semantic retrieval).</p><p class="gx-ar" lang="ar" dir="rtl">اعرف المكوّنات ووظيفة كلٍّ منها: الواجهة الأمامية (تفاعل المستخدم)، والواجهة الخلفية (المصادقة، واسترجاع البيانات، وتجهيز الـ prompt، والتعامل مع النموذج، والمعالجة اللاحقة لمخرجاته)، والنموذج اللغوي (التوليد)، ومصادر البيانات الخارجية التي تدمجها الواجهة الخلفية: قواعد البيانات العلائقية (البيانات المهيكلة) والمتجهية (الاسترجاع الدلالي).</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Trusting structurally valid output. Post-processing can reject missing fields, but it cannot fix every reasoning error. And authentication and permissions remain the application's responsibility; the model does not replace them.</p><p class="gx-ar" lang="ar" dir="rtl">الثقة بمخرجات سليمة البنية. المعالجة اللاحقة ترفض الحقول الناقصة، لكنها لا تصلح كل أخطاء الاستدلال. كما تبقى المصادقة والصلاحيات من مسؤولية التطبيق، والنموذج لا يحلّ محلّها.</p></aside>

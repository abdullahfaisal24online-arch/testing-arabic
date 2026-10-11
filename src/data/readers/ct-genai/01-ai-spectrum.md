---
order: 1
slug: "1-1-1"
chapter: 1
group: "1.1"
section: "1.1.1"
title: "AI Spectrum: Symbolic AI, Classical Machine Learning, Deep Learning, and Generative AI"
titleAr: "طيف الذكاء الاصطناعي"
objectives: "GenAI-1.1.1 · K1"
minutes: 14
lo:
  GenAI-1.1.1: "Recall the main types of AI: symbolic AI, classical machine learning, deep learning and generative AI."
loAr:
  GenAI-1.1.1: "تتذكّر الأنواع الرئيسية للذكاء الاصطناعي: الرمزي، وتعلّم الآلة الكلاسيكي، والتعلّم العميق، والذكاء التوليدي."
takeaways:
  - "Tell four approaches apart: applying a rule, learning a pattern, learning complex features, and generating content."
  - "They are related techniques inside AI, not stages that replace each other. One system can combine them."
  - "Pre-trained GenAI models can be used for test tasks without training a new model, but their output still needs review."
  - "Useful GenAI output is not automatically correct output."
  - "Each approach has its own strengths and limitations; choose by the problem, not by what is newest."
takeawaysAr:
  - "ميّز بين أربعة أساليب: تطبيق قاعدة، وتعلّم نمط، وتعلّم خصائص معقّدة، وتوليد محتوى."
  - "هي تقنيات مترابطة داخل مجال AI، وليست مراحل تلغي إحداها الأخرى. ويمكن لنظام واحد أن يجمع بينها."
  - "يمكن استخدام نماذج GenAI المدرّبة مسبقًا في مهام الاختبار دون تدريب نموذج جديد، لكن ناتجها يحتاج مراجعة."
  - "الناتج المفيد من GenAI ليس بالضرورة ناتجًا صحيحًا."
  - "لكل أسلوب نقاط قوته وحدوده؛ اختر حسب المشكلة، لا حسب الأحدث."
terms:
  - en: "Generative AI"
    ar: "الذكاء الاصطناعي التوليدي"
    def: "AI that creates new content such as text, code or images from patterns learned in training and the context it is given."
    defAr: "ذكاء اصطناعي يُنشئ محتوى جديدًا مثل النصوص والشيفرات والصور، اعتمادًا على أنماط تعلّمها أثناء التدريب وعلى السياق المعطى له."
    match: ["Generative AI", "GenAI"]
  - en: "LLM"
    ar: "النموذج اللغوي الكبير"
    def: "Large Language Model. A GenAI model trained on large text corpora that generates text and code in response to a prompt."
    defAr: "نموذج لغوي كبير. نموذج GenAI مدرّب على مجموعات نصية ضخمة، يولّد نصوصًا وشيفرات استجابةً للتوجيه."
    match: ["Large Language Model", "LLM"]
  - en: "Prompt"
    ar: "التوجيه"
    def: "The instruction and context sent to a model to get a response."
    defAr: "التعليمات والسياق التي تُرسل للنموذج للحصول على استجابة."
  - en: "Symbolic AI"
    ar: "الذكاء الاصطناعي الرمزي"
    def: "Represents knowledge as symbols and explicit logical rules. The result comes from applying predefined rules, not from training data."
    defAr: "يمثّل المعرفة على هيئة رموز وقواعد منطقية صريحة. النتيجة تأتي من تطبيق قواعد محددة مسبقًا، لا من بيانات تدريب."
  - en: "Classical Machine Learning"
    ar: "تعلّم الآلة الكلاسيكي"
    def: "Learns patterns from prepared data using features chosen by people, then predicts or classifies."
    defAr: "يتعلّم أنماطًا من بيانات محضّرة باستخدام خصائص يختارها الإنسان، ثم يتنبأ أو يصنّف."
  - en: "Features"
    ar: "الخصائص"
    def: "Measurable attributes used as model input, such as the size of a code change or the number of past defects in a component."
    defAr: "صفات قابلة للقياس تُستخدم كمدخلات للنموذج، مثل حجم التغيير البرمجي أو عدد الـ defects السابقة في مكوّن."
  - en: "Deep Learning"
    ar: "التعلّم العميق"
    def: "Multi-layer neural networks that learn complex features from text, images, audio or video with less manual feature design."
    defAr: "شبكات عصبية متعددة الطبقات تتعلّم خصائص معقّدة من النصوص أو الصور أو الصوت أو الفيديو، بجهد يدوي أقل في تحديد الخصائص."
---
**الذكاء الاصطناعي التوليدي (Generative AI / GenAI)** فرع من الذكاء الاصطناعي يستخدم نماذج كبيرة مدرّبة مسبقًا لتوليد مخرجات تشبه ما ينتجه الإنسان، مثل النصوص والصور والشيفرات. ينشئ هذه المخرجات اعتمادًا على أنماط تعلّمها أثناء التدريب، وعلى سياق نقدّمه له لحظة الطلب.

**النموذج اللغوي الكبير (Large Language Model / LLM)** نموذج GenAI مدرّب مسبقًا على مجموعات نصية ضخمة، فيستطيع فهم السياق وإنتاج ردود مناسبة لطلب المستخدم، أي لـ**التوجيه (Prompt)** الذي يرسله. البيانات التي تدرّب عليها واسعة جدًا، لكنها لا تعني أنه يعرف متطلبات مشروعك أو قواعد عملك الخاصة. لا يعرف النموذج مثلًا أن الحد الأدنى للطلب في تطبيق التوصيل 5.00 دنانير؛ هذه المعلومة أنت من يوفّرها، وأنت من يتحقق من أن الناتج يطابقها.

في اختبار البرمجيات، يمكن أن تدعم هذه النماذج مهامًّا عبر عملية الاختبار كاملة، مثل: مراجعة معايير القبول وتحسينها، وتوليد حالات الاختبار والـ test scripts، وتحديد الـ defects المحتملة، وتحليل أنماط الـ defects، وتوليد بيانات اختبار تركيبية، والمساعدة في إعداد الوثائق.

وستقابل في هذا الفصل ثلاثة مفاهيم مفتاحية: **التقطيع إلى رموز (tokenization)**، أي تقسيم النص إلى وحدات صغيرة يعالجها النموذج؛ و**نافذة السياق (context window)**، أي حدّ كمية المعلومات التي يأخذها النموذج بعين الاعتبار مرة واحدة؛ و**النماذج متعددة الوسائط (multimodal models)** التي تعالج النص والصور والصوت معًا. نشرحها في الأقسام 1.1.2 و1.1.4؛ أما هذا القسم فيضع GenAI في مكانه من الخريطة الأوسع.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">You can use a pre-trained model for a testing task without training a new model from scratch. That makes it easy to start, but it brings its own risks, so it does not remove the need to review the output.</p><p class="gx-ar" lang="ar" dir="rtl">تستطيع استخدام نموذج مدرّب مسبقًا لمهمة اختبار دون تدريب نموذج جديد من الصفر. هذا يسهّل البداية، لكنه يحمل مخاطره الخاصة، فلا يلغي الحاجة إلى مراجعة الناتج.</p></aside>

### طيف من الأساليب — The AI Spectrum

الذكاء الاصطناعي مجال واسع يضم تقنيات مختلفة، لكل منها طريقتها الخاصة في حل المشكلات. يركّز المنهج على أربع منها، وما سواها خارج نطاقه. أسهل طريقة للتمييز بينها أن تسأل سؤالًا واحدًا: **من أين يأتي القرار أو الناتج؟** من قاعدة كتبها إنسان؟ من نمط تعلّمه النموذج من بيانات؟ أم من محتوى جديد يولّده؟

<figure class="gx-figure gx-spectrum" aria-label="AI spectrum: Symbolic AI, Classical ML, Deep Learning and Generative AI"><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Symbolic AI</b><span>Decision comes from explicit rules</span></div><div class="gx-spectrum-item"><b>Classical ML</b><span>Learns from data + human-chosen features</span></div><div class="gx-spectrum-item"><b>Deep Learning</b><span>Learns the features itself</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Generative AI</b><span>Creates new content</span></div></div><figcaption>Related techniques within AI, not stages that replace each other.</figcaption></figure>

### الذكاء الاصطناعي الرمزي — Symbolic AI

يحاكي اتخاذ القرار البشري عبر **نظام قائم على القواعد (rule-based system)**، ويمثّل المعرفة على هيئة **رموز وقواعد منطقية** يكتبها الإنسان مسبقًا. في تطبيق التوصيل مثلًا: «إذا كانت قيمة الطلب أقل من 5.00 دنانير، ارفض الطلب»، و«إذا وصلت قيمة الطلب قبل الخصم إلى 20.00 دينارًا، اجعل التوصيل مجانيًا». النتيجة تأتي من تطبيق القاعدة كما هي؛ النظام لا «يتعلّم» شيئًا من بيانات تدريب.

**نقطة قوته** أن قراره قابل للتفسير بالكامل: تستطيع دائمًا أن تشير إلى القاعدة التي أنتجته، وأن تتنبأ بسلوكه. **وحدّه** أنه لا يتعامل جيدًا مع حالات لم يتوقعها كاتب القواعد، وأن صيانة آلاف القواعد تصبح صعبة. في الاختبار تجده في أشياء مألوفة: أداة تحكم بالنجاح أو الفشل حسب شروط ثابتة، أو فحص آلي يرفض تقرير defect لا يحتوي الحقول الإلزامية.

### تعلّم الآلة الكلاسيكي — Classical Machine Learning

أسلوب **قائم على البيانات (data-driven)** بدل القواعد المكتوبة يدويًا. يمر العمل بثلاث خطوات: **تحضير البيانات**، ثم **اختيار الخصائص (Features)**، ثم **تدريب النموذج**. الخاصية معلومة قابلة للقياس يختارها الإنسان لأنه يتوقع أنها مؤثرة، مثل حجم التغيير البرمجي، أو عدد الـ defects السابقة في مكوّن، أو عدد المطوّرين الذين عدّلوا ملفًا.

يذكر المنهج له استخدامين في الاختبار: **تصنيف الـ defects (defect categorization)** و**التنبؤ بمشكلات البرمجيات**. قد يدرّب فريق التوصيل نموذجًا على تقارير الـ defects القديمة ليصنّف كل تقرير جديد تلقائيًا: دفع، أو خرائط، أو واجهة. أو يتنبأ بالمكوّنات الأكثر عرضة للمشكلات في الإصدار القادم، فيركّز الاختبار عليها.

**نقطة قوته** أنه يكتشف أنماطًا لا يستطيع إنسان كتابتها كقواعد. **وحدّه** أن جودة التنبؤ مرهونة بجودة البيانات واختيار الخصائص: إذا لم يختر الإنسان خاصية مهمة، فلن يعرفها النموذج.

### التعلّم العميق — Deep Learning

يستخدم بنى تعلّم آلة تسمى **الشبكات العصبية (neural networks)** لكي **يتعلّم الخصائص من البيانات تلقائيًا**. لذلك يستطيع اكتشاف أنماط في مجموعات بيانات كبيرة جدًا ومعقّدة، مثل الصور والفيديو والصوت والنصوص، دون أن يحدد المستخدمون الخصائص يدويًا. هذا هو الفرق الجوهري عن الأسلوب السابق: لا أحد يخبر الشبكة أن «لون الزر» أو «موضع النص» مهم؛ هي تكتشف ذلك بنفسها.

لكن المنهج يحرص على تنبيه مهم: عمليًا قد يظل التعلّم العميق **بحاجة إلى تدخل بشري** في مهام مثل **توسيم البيانات (data annotation)**، و**ضبط النموذج (model tuning)**، و**التحقق من النتائج (result validation)**. مثال: نموذج يقارن لقطات شاشة واجهة تطبيق التوصيل بالعربية والإنجليزية ليكتشف نصًا مقطوعًا أو عنصرًا متداخلًا؛ يحتاج أولًا آلاف اللقطات التي وسمها إنسان بأنها «سليمة» أو «فيها مشكلة»، ثم يحتاج مختبِرًا يراجع ما يبلّغ عنه.

### الذكاء الاصطناعي التوليدي — Generative AI

يستخدم تقنيات التعلّم العميق لـ**إنشاء محتوى جديد** (نصوص، صور، شيفرات) عبر تعلّم أنماط بيانات التدريب ومحاكاتها. تستطيع نماذج مثل LLMs توليد النصوص، وكتابة الشيفرات، و**محاكاة الاستدلال وحل المشكلات ضمن نطاق تدريبها**. في تطبيق التوصيل، يستطيع LLM أن يقرأ قصة مستخدم عن الكوبونات فيقترح سيناريوهات اختبار، أو يكتب مسودة تقرير defect، أو يحوّل حالة اختبار إلى script أتمتة.

الفرق عن الأساليب السابقة أن الناتج ليس قرارًا أو تصنيفًا فقط، بل محتوى لم يكن موجودًا. ولاحظ عبارة «ضمن نطاق تدريبها»: النموذج يحاكي الاستدلال، ولأنه مبني على الأنماط قد يكون ناتجه مقنعًا في صياغته وخاطئًا في مضمونه. قد يفترض مثلًا أن حد التوصيل المجاني يُحسب بعد خصم الكوبون، لأن هذا شائع في تطبيقات أخرى، مع أن قاعدة تطبيقكم عكس ذلك.

### المقارنة بينها — Comparing the Approaches

| Approach | Output comes from | Human role | Strength | Limitation | QA example |
| --- | --- | --- | --- | --- | --- |
| Symbolic AI | Explicit, predefined rules | Writes and maintains rules | Fully explainable | Unforeseen cases, rule upkeep | Rule-based pass/fail check |
| Classical ML | Patterns in data + chosen features | Prepares data, selects features | Finds patterns beyond rules | Only as good as data and features | Defect categorization, risk prediction |
| Deep Learning | Features learned by neural networks | Annotates, tunes, validates | Handles images, audio, text at scale | Needs much data and human checks | Visual differences in screenshots |
| GenAI | New content from learned patterns + prompt | Prompts and reviews output | Ready to use, no training phase | Plausible is not always correct | Drafting test cases or scripts |

يلخّص المنهج الصورة بأن مجال AI **تطوّر في عدة اتجاهات، لكل منها نقاط قوة وحدود مختلفة**. هذه تقنيات مترابطة، وليست مراحل تلغي إحداها الأخرى. بل إن GenAI نفسه مبني على التعلّم العميق، وقد يجمع النظام الواحد قواعد صريحة ونموذجًا متعلّمًا وقدرات توليدية. مثلًا: أداة تولّد حالات اختبار بـ GenAI، ثم تمرّرها على قواعد ثابتة ترفض أي حالة بلا معرّف متطلب.

### الميزة الأساسية لـ GenAI في الاختبار — The Key Advantage

يحدد المنهج **الميزة الأساسية** لاستخدام GenAI في الاختبار: أنه يستخدم **نماذج مدرّبة مسبقًا يمكن تطبيقها مباشرة على مهام الاختبار دون مرحلة تدريب إضافية**. قارن ذلك بالأساليب الأخرى: لكي يبني فريق التوصيل نموذج تعلّم آلة كلاسيكي يتنبأ بالمكوّنات الخطرة، يحتاج بيانات defects لعدة إصدارات، وتحضيرها، واختيار خصائص، ثم تدريبًا وتقييمًا. أما مع GenAI فيستطيع المختبِر أن يبدأ اليوم: يفتح أداة محادثة، ويلصق قصة المستخدم، ويطلب أفكار اختبار.

لكن المنهج يضيف فورًا أن هذا **يأتي مع بعض المخاطر**، ويحيل إلى القسم 3.1 حيث نشرح الهلوسة وأخطاء الاستدلال والتحيّز. سهولة البداية لا تعني أن الناتج جاهز للاعتماد.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In the delivery app team, the check that rejects orders under 5.00 JOD is <strong>symbolic</strong>: a written rule. The model that sorts new store reviews and defect reports into payment, maps or UI, trained on past reports with chosen features, is <strong>classical machine learning</strong>. The visual checker that learned from labelled screenshots to spot broken Arabic layouts is <strong>deep learning</strong>. The assistant that reads the coupon user story and writes new test scenarios is <strong>generative AI</strong>: it creates content.</p><p class="gx-ar" lang="ar" dir="rtl">في فريق تطبيق التوصيل، الفحص الذي يرفض الطلبات تحت 5.00 دنانير <strong>رمزي</strong>: قاعدة مكتوبة. والنموذج الذي يصنّف مراجعات المتجر وتقارير الـ defects الجديدة إلى دفع أو خرائط أو واجهة، بعد تدريبه على تقارير سابقة وخصائص مختارة، هو <strong>تعلّم آلة كلاسيكي</strong>. وأداة الفحص البصري التي تعلّمت من لقطات شاشة موسومة أن تكتشف خللًا في الواجهة العربية هي <strong>تعلّم عميق</strong>. أما المساعد الذي يقرأ قصة مستخدم الكوبونات ويكتب سيناريوهات اختبار جديدة فهو <strong>ذكاء توليدي</strong>: لأنه يُنشئ محتوى.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">This is a K1 objective: expect “which type is this?” questions. Look for the key signal: explicit rules → symbolic; human-chosen features → classical ML; features learned automatically by neural networks → deep learning; new content created → generative AI.</p><p class="gx-ar" lang="ar" dir="rtl">هذا هدف K1: توقّع أسئلة من نوع «أي نوع هذا؟». ابحث عن العلامة المميزة: قواعد صريحة ← رمزي؛ خصائص يختارها الإنسان ← تعلّم آلة كلاسيكي؛ خصائص تتعلمها الشبكات العصبية تلقائيًا ← تعلّم عميق؛ محتوى جديد يُنشأ ← ذكاء توليدي.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking deep learning means “no human involved”. It removes manual feature design, not data labelling, tuning or result checking.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن التعلّم العميق يعني «لا دور للإنسان». هو يلغي تحديد الخصائص يدويًا، لكنه لا يلغي توسيم البيانات أو ضبط النموذج أو التحقق من النتائج.</p></aside>

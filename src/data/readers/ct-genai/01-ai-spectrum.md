---
order: 1
slug: "1-1-1"
chapter: 1
group: "1.1"
section: "1.1.1"
title: "AI Spectrum: Symbolic AI, Classical Machine Learning, Deep Learning, and Generative AI"
titleAr: "طيف الذكاء الاصطناعي"
objectives: "GenAI-1.1.1 · K1"
minutes: 9
lo:
  GenAI-1.1.1: "Recall the main types of AI: symbolic AI, classical machine learning, deep learning and generative AI."
takeaways:
  - "Tell four approaches apart: applying a rule, learning a pattern, learning complex features, and generating content."
  - "They are related techniques inside AI, not stages that replace each other. One system can combine them."
  - "Pre-trained GenAI models can be used for test tasks without training a new model, but their output still needs review."
  - "Useful GenAI output is not automatically correct output."
terms:
  - en: "Generative AI"
    ar: "الذكاء الاصطناعي التوليدي"
    def: "AI that creates new content such as text, code or images from patterns learned in training and the context it is given."
    match: ["Generative AI", "GenAI"]
  - en: "LLM"
    ar: "النموذج اللغوي الكبير"
    def: "Large Language Model. A GenAI model trained on large text corpora that generates text and code in response to a prompt."
    match: ["Large Language Model", "LLM"]
  - en: "Prompt"
    ar: "التوجيه"
    def: "The instruction and context sent to a model to get a response."
  - en: "Symbolic AI"
    ar: "الذكاء الاصطناعي الرمزي"
    def: "Represents knowledge as symbols and explicit logical rules. The result comes from applying predefined rules, not from training data."
  - en: "Classical Machine Learning"
    ar: "تعلّم الآلة الكلاسيكي"
    def: "Learns patterns from prepared data using features chosen by people, then predicts or classifies."
  - en: "Features"
    ar: "الخصائص"
    def: "Measurable attributes used as model input, such as the size of a code change or the number of past defects in a component."
  - en: "Deep Learning"
    ar: "التعلّم العميق"
    def: "Multi-layer neural networks that learn complex features from text, images, audio or video with less manual feature design."
---
في اختبار البرمجيات، يمكن استخدام **الذكاء الاصطناعي التوليدي (Generative AI / GenAI)** للمساعدة في تحليل المتطلبات، وإنشاء حالات الاختبار والسكربتات، وتوليد بيانات اصطناعية، وتحليل تقارير العيوب. الفكرة أنه ينشئ مخرجات جديدة اعتمادًا على أنماط تعلّمها أثناء التدريب، وعلى سياق نقدّمه له لحظة الطلب.

**النموذج اللغوي الكبير (Large Language Model / LLM)** أحد أنواع نماذج GenAI. يتعامل مع اللغة ويمكنه توليد نصوص وشيفرات استجابةً لتوجيه أو أمر **Prompt**. البيانات التي تدرّب عليها واسعة جدًا، لكنها لا تعني أنه يعرف متطلبات مشروعك أو قواعد عملك الخاصة. هذه المعلومات أنت من يوفّرها، وأنت من يتحقق من أن الناتج يطابقها.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea</p><p>You can use a pre-trained model for a testing task without training a new model from scratch. That makes it easy to start, but it brings its own risks, so it does not remove the need to review the output.</p></aside>

لكي تفهم أين يقع GenAI، من المفيد أن تراه ضمن «طيف» أوسع من أساليب الذكاء الاصطناعي. كل أسلوب يجيب بطريقة مختلفة عن سؤال واحد: **من أين يأتي القرار أو الناتج؟**

<figure class="gx-figure gx-spectrum" aria-label="AI spectrum: Symbolic AI, Classical ML, Deep Learning and Generative AI"><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Symbolic AI</b><span>Decision comes from explicit rules</span></div><div class="gx-spectrum-item"><b>Classical ML</b><span>Learns from data + human-chosen features</span></div><div class="gx-spectrum-item"><b>Deep Learning</b><span>Learns the features itself</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Generative AI</b><span>Creates new content</span></div></div><figcaption>Related techniques within AI, not stages that replace each other.</figcaption></figure>

### الذكاء الاصطناعي الرمزي — Symbolic AI

يحاكي اتخاذ القرار البشري عبر أنظمة قائمة على القواعد، ويمثّل المعرفة على هيئة **رموز وقواعد منطقية** يكتبها الإنسان مسبقًا، مثل: «إذا تجاوز عدد محاولات الدخول الفاشلة الحد المسموح، امنع محاولة إضافية». النتيجة تأتي من تطبيق القاعدة كما هي؛ النظام لا «يتعلّم» شيئًا من بيانات تدريب.

ميزة هذا الأسلوب أن قراره قابل للتفسير بالكامل: تستطيع دائمًا أن تشير إلى القاعدة التي أنتجته. وحدّه أنه لا يتعامل جيدًا مع حالات لم يتوقعها كاتب القواعد، وأن صيانة آلاف القواعد تصبح صعبة.

في الاختبار تجده في أشياء مألوفة: أداة تحكم بالنجاح أو الفشل حسب شروط ثابتة، أو محرّك قواعد يصنّف نتائج التشغيل، أو فحص آلي يرفض تقرير عيب لا يحتوي الحقول الإلزامية.

### تعلّم الآلة الكلاسيكي — Classical Machine Learning

يقوم على البيانات بدل القواعد المكتوبة يدويًا. يتضمن العمل ثلاث خطوات رئيسية: تحضير البيانات، واختيار **الخصائص (Features)**، ثم تدريب النموذج. الخاصية معلومة قابلة للقياس يختارها الإنسان لأنه يتوقع أنها مؤثرة، مثل حجم التغيير البرمجي، أو عدد العيوب السابقة في مكوّن، أو عدد المطوّرين الذين عدّلوا ملفًا.

بعد التدريب يستطيع النموذج التنبؤ أو التصنيف لحالات جديدة. في الاختبار قد يستخدم فريق نموذجًا لتصنيف تقارير العيوب حسب المكوّن، أو للتنبؤ بالمكوّنات الأكثر عرضة للمشكلات في الإصدار القادم فيركّز عليها الاختبار.

جودة البيانات واختيار الخصائص هما ما يحدد جودة التنبؤ. إذا لم يختر الإنسان خاصية مهمة، فلن يعرفها النموذج.

### التعلّم العميق — Deep Learning

يعتمد على شبكات عصبية متعددة الطبقات **تستخلص الخصائص من البيانات تلقائيًا**، وتكتشف أنماطًا في مجموعات بيانات كبيرة ومعقّدة مثل النصوص والصور والصوت والفيديو. هذا هو الفرق الجوهري عن تعلّم الآلة الكلاسيكي: الإنسان لم يعد مضطرًا لتحديد الخصائص بنفسه، فالشبكة تتعلم بنفسها ما المهم في البيانات.

يخفّف ذلك العمل اليدوي في تعريف الخصائص، **لكنه لا يلغي دور الإنسان**: ما زالت مهام مثل جمع البيانات وتوسيمها، وضبط النموذج، والتحقق من النتائج ضرورية. في الاختبار قد يُستخدم مثلًا لتحليل لقطات شاشة واكتشاف اختلافات بصرية في الواجهة.

### الذكاء الاصطناعي التوليدي — Generative AI

يستخدم تقنيات التعلّم العميق لتوليد **محتوى جديد** مثل النصوص والصور والشيفرات، عبر تعلّم أنماط بيانات التدريب ومحاكاتها. يستطيع LLM مثلًا اقتراح حالات اختبار من قصة مستخدم، أو كتابة مسودة تقرير عيب، أو تحويل وصف حالة إلى سكربت أتمتة. وقد يحاكي الاستدلال وحل المشكلات في مهام معقّدة.

الفرق عن الأساليب السابقة أن الناتج ليس قرارًا أو تصنيفًا فقط، بل محتوى لم يكن موجودًا. ولأنه مبني على الأنماط، قد يكون الناتج مقنعًا في صياغته وخاطئًا في مضمونه؛ وهذا ما يجعل المراجعة جزءًا ثابتًا من العمل.

### المقارنة بينها — Comparing the Approaches

| Approach | من أين يأتي الناتج؟ | دور الإنسان | مثال في عمل QA |
| --- | --- | --- | --- |
| Symbolic AI | قواعد صريحة مكتوبة مسبقًا | يكتب القواعد ويصونها | تصنيف نتيجة وفق شروط محددة مسبقًا |
| Classical ML | أنماط في بيانات وخصائص مختارة | يحضّر البيانات ويختار الخصائص | توقّع مناطق عالية المخاطر |
| Deep Learning | خصائص تتعلمها الشبكة بنفسها | يجمع البيانات ويوسّمها ويقيّم | تحليل نمط في صور واجهة |
| GenAI | محتوى جديد من الأنماط المتعلّمة والسياق | يوجّه ويراجع الناتج | اقتراح حالات اختبار أو سكربت |

هذه تقنيات مترابطة ضمن مجال AI، وليست مراحل تلغي إحداها الأخرى. يمكن أن يجمع النظام الواحد قواعد صريحة ونموذجًا متعلّمًا وقدرات توليدية. مثلًا: أداة اختبار تولّد حالات بـ GenAI، ثم تمرّرها على قواعد ثابتة ترفض أي حالة بلا معرّف متطلب.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice</p><p>A tool that reads a user story and writes five new test scenarios is <strong>Generative AI</strong>: it creates content. A tool that applies a fixed rule to decide pass or fail is <strong>rule-based (symbolic)</strong>. A model that predicts which component will have the most defects, trained on past defect data and chosen metrics, is <strong>classical machine learning</strong>.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>This is a K1 objective: expect “which type is this?” questions. Look for the key signal: explicit rules → symbolic; human-chosen features → classical ML; features learned automatically by neural networks → deep learning; new content created → generative AI.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Thinking deep learning means “no human involved”. It removes manual feature design, not data labelling, tuning or result checking.</p></aside>

---
order: 1
slug: "1-1-1"
chapter: 1
group: "1.1"
section: "1.1.1"
title: "The AI Spectrum"
titleAr: "طيف الذكاء الاصطناعي"
objectives: "GenAI-1.1.1 · K1"
minutes: 5
takeaways:
  - "Tell four approaches apart: applying a rule, learning a pattern, learning complex features, and generating content."
  - "They are related techniques inside AI, not stages that replace each other. One system can combine them."
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
في اختبار البرمجيات، يمكن استخدام **الذكاء الاصطناعي التوليدي (Generative AI / GenAI)** للمساعدة في تحليل المتطلبات، وإنشاء حالات الاختبار والسكربتات، وتوليد بيانات اصطناعية، وتحليل تقارير العيوب. الفكرة أنه ينشئ مخرجات اعتمادًا على أنماط تعلّمها وسياق نقدّمه له.

**النموذج اللغوي الكبير (Large Language Model / LLM)** أحد أنواع نماذج GenAI. يتعامل مع اللغة ويمكنه توليد نصوص وشيفرات استجابةً لتوجيه أو أمر **Prompt**. تتضمن البيانات التي تدرّب عليها نصوصًا واسعة النطاق؛ لكنها لا تعني أنه يعرف متطلبات مشروعك الخاصة. أنت مسؤول عن توفيرها والتحقق من النتيجة.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label">Key idea</p><p>You can use a pre-trained model for a testing task without training a new model from scratch. That makes it easy to start, but it does not remove the need to review the output.</p></aside>

<figure class="gx-figure gx-spectrum" aria-label="AI spectrum: Symbolic AI, Classical ML, Deep Learning and Generative AI"><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Symbolic AI</b><span>Applies explicit rules</span></div><div class="gx-spectrum-item"><b>Classical ML</b><span>Learns from data + chosen features</span></div><div class="gx-spectrum-item"><b>Deep Learning</b><span>Learns complex features itself</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Generative AI</b><span>Creates new content</span></div></div><figcaption>Related techniques within AI, not stages that replace each other.</figcaption></figure>

### الذكاء الاصطناعي الرمزي — Symbolic AI

يمثّل المعرفة على هيئة **رموز وقواعد منطقية**. القواعد تكون محددة مسبقًا، مثل: «إذا تجاوز عدد محاولات الدخول الفاشلة الحد المسموح، امنع محاولة إضافية». النتيجة تأتي من تطبيق القاعدة؛ لا يحتاج النظام في هذا المثال إلى تعلّمها من بيانات تدريب.

### تعلّم الآلة الكلاسيكي — Classical Machine Learning

يتعلّم أنماطًا من البيانات. يتضمن العمل تحضير البيانات، واختيار **الخصائص (Features)**، وتدريب النموذج. الخاصية معلومة قابلة للقياس، مثل حجم تغيير برمجي أو عدد العيوب السابقة في مكوّن.

في الاختبار قد يستخدم فريق نموذجًا لتصنيف تقارير العيوب أو التنبؤ بالمكوّنات الأكثر عرضة للمشكلات. جودة البيانات والخصائص تؤثر في جودة التنبؤ.

### التعلّم العميق — Deep Learning

يعتمد على شبكات عصبية متعددة الطبقات تستطيع تعلّم خصائص معقّدة من النصوص أو الصور أو الصوت أو الفيديو. يخفّف ذلك الحاجة إلى تعريف الخصائص يدويًا، **ولا يعني غياب دور الإنسان**: ما زالت مهام مثل توسيم البيانات، وضبط النموذج، والتحقق من النتائج مهمة.

### الذكاء الاصطناعي التوليدي — Generative AI

يستخدم تقنيات التعلّم العميق لتوليد محتوى مثل النصوص والصور والشيفرات. يستطيع LLM، مثلًا، اقتراح حالات اختبار من قصة مستخدم، أو كتابة مسودة تقرير عيب. وقد يحاكي الاستدلال لحل مهمة معقّدة، مع احتمال تقديم نتيجة غير صحيحة.

| Approach | ما الذي يميّزها؟ | مثال في عمل QA |
| --- | --- | --- |
| Symbolic AI | تطبيق قواعد صريحة | تصنيف نتيجة وفق شروط محددة مسبقًا |
| Classical ML | تعلّم من بيانات وخصائص مختارة | توقّع مناطق عالية المخاطر |
| Deep Learning | تعلّم تمثيلات وخصائص معقّدة | تحليل نمط في صور واجهة |
| GenAI | إنشاء مخرجات من الأنماط المتعلّمة والسياق | اقتراح حالات اختبار أو سكربت |

هذه تقنيات مترابطة ضمن مجال AI، وليست مراحل تلغي إحداها الأخرى. يمكن أن يجمع النظام الواحد قواعد صريحة ونموذجًا متعلّمًا وقدرات توليدية.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice</p><p>A tool that reads a user story and writes five new test scenarios is <strong>Generative AI</strong>: it creates content. A tool that applies a fixed rule to decide pass or fail is <strong>rule-based</strong>.</p></aside>

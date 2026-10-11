---
order: 4
slug: "5-1-4"
chapter: 5
group: "5.1"
section: "5.1.4"
title: "Phases when Adopting Generative AI in Software Testing"
titleAr: "مراحل تبنّي الذكاء التوليدي في الاختبار"
objectives: "GenAI-5.1.4 · K1"
minutes: 8
lo:
  GenAI-5.1.4: "Recall the phases of adopting GenAI in testing."
loAr:
  GenAI-5.1.4: "تذكّر مراحل تبنّي الذكاء التوليدي في الاختبار."
takeaways:
  - "Three phases: Discovery, Initiation and usage definition, Utilization and iteration."
  - "Different use cases can be in different phases at the same time."
  - "Address job-replacement fears early; change needs people as much as technology."
takeawaysAr:
  - "ثلاث مراحل: الاستكشاف، ثم البدء وتحديد الاستخدام، ثم الاستخدام والتكرار."
  - "قد تكون حالات استخدام مختلفة في مراحل مختلفة في الوقت نفسه."
  - "تعامل مبكرًا مع مخاوف فقدان الوظائف؛ التغيير يحتاج الناس بقدر ما يحتاج التقنية."
---
الاستراتيجية (القسم 5.1.2) تحدد إلى أين تريد المؤسسة أن تصل، وخارطة الطريق تحدد كيف تصل. يقول المنهج إن تبنّي GenAI في مؤسسة اختبار يمرّ **بثلاث مراحل أساسية**. والفكرة بسيطة: لا يمكن أن تدمج أداة في عملياتك قبل أن يفهمها فريقك، ولا أن تفهمها قبل أن يجرّبها. لهذا يبدأ التبنّي بالتعلّم، ثم بالاختيار، ثم بالدمج والتحسين.

<figure class="gx-figure" aria-label="Three adoption phases: Discovery, then Initiation and usage definition, then Utilization and iteration."><div class="gx-flow-row"><span class="gx-flow-node">1 · Discovery<small>awareness · first trials</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">2 · Initiation<small>define use cases</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">3 · Utilization<small>integrate · iterate · scale</small></span></div><figcaption>Each use case moves through the phases at its own pace.</figcaption></figure>

| Phase | Focus | Key activities |
|---|---|---|
| 1. Discovery | Awareness and capability building | Training on GenAI concepts, access to LLMs/SLMs, first experiments |
| 2. Initiation and usage definition | Identifying and prioritizing use cases | Evaluating LLM-powered test infrastructure, developing expertise, aligning with organizational needs |
| 3. Utilization and iteration | Full integration into test processes | Continuous monitoring, measuring and managing the transformation, scaling |

### 1. الاستكشاف — Discovery

تركّز المرحلة الأولى على **الوعي وبناء القدرات (awareness and capability building)**. ويذكر المنهج ثلاثة أنشطة: **تدريب فرق الاختبار على مفاهيم GenAI**، و**إتاحة الوصول إلى النماذج الكبيرة والصغيرة**، و**التجريب على حالات استخدام أولية**. والهدف أن **يألف المختبِرون GenAI ويبنوا الثقة** به، لا إنتاجية فورية.

**مثال:** يحضر المختبِران في فريق تطبيق التوصيل تدريبًا قصيرًا عن التوجيه والـ hallucination، ويحصلان على أداة معتمدة، ثم يجرّبان توليد أفكار اختبار لقصة الحد الأدنى للطلب (5.00) ويقارنانها بما كتباه بنفسيهما.

### 2. البدء وتحديد الاستخدام — Initiation and Usage Definition

بعد أن **يترسّخ الفهم الأساسي**، تركّز المرحلة الثانية على **تحديد حالات الاستخدام العملية لـ GenAI في الاختبار وترتيبها حسب الأولوية**. وتشمل **تقييم البنية التحتية للاختبار المدعومة بالنماذج اللغوية**، و**تطوير الخبرة**، و**ضمان المواءمة مع احتياجات المؤسسة** (يحيل المنهج هنا إلى القسم 6 من منهج CTFL، الخاص بأدوات الاختبار).

**مثال:** يختار الفريق حالتي استخدام: صياغة حالات الاختبار من قصص المستخدم، وتلخيص نتائج الانحدار قبل كل إصدار. ويقيّم هل تتكامل الأداة مع أداة إدارة الاختبار والـ CI pipeline، ويؤجّل أتمتة الـ test scripts لأنها أعلى خطرًا.

### 3. الاستخدام والتكرار — Utilization and Iteration

في هذه **المرحلة المتقدمة**، **تدمج المؤسسة GenAI بالكامل في عمليات الاختبار**. وتوجد **مراقبة مستمرة** لتقدّم GenAI في الاختبار وأدواته، إضافة إلى **قياس التحول وإدارته** لضمان **فوائد مستدامة وقابلية للتوسّع**. كلمة «التكرار» تعني أن العمل لا ينتهي: تُحسَّن التوجيهات والعمليات باستمرار بناءً على القياس.

**مثال:** أصبح تلخيص نتائج الانحدار جزءًا ثابتًا من كل إصدار، ويتابع الفريق كل شهر الوقت الكلي مع المراجعة ونسبة الملخصات التي احتاجت تصحيحًا.

### مراحل متوازية — Phases in Parallel

يؤكد المنهج أن هذه المراحل **قد تسير بالتوازي لحالات استخدام مختلفة**. ومثاله: قد يكون **تحليل تقارير الاختبار** متقدمًا على خارطة الطريق، بينما **أتمتة الاختبار** ما زالت في مراحلها الأولى. أي أن المرحلة صفة لحالة الاستخدام، لا للمؤسسة كلها. في تطبيق التوصيل مثلًا، تلخيص الانحدار في المرحلة الثالثة، وتوليد الـ test scripts ما زال في الأولى.

### المخاوف المبكرة — Early Concerns

يقول المنهج إنه من المهم **التعرّف على المخاوف المبكرة ومعالجتها**، مثل **الخوف من فقدان الوظيفة (fear of job displacement)**، لأنها **قد تؤثر في التبنّي وفي معنويات الفريق**. المختبِر الخائف قد يقاوم الأداة أو يبالغ في إظهار أخطائها. عمليًا، يساعد أن يُشرح بوضوح أن المختبِر يبقى مسؤولًا عن المراجعة والقرار، وأن دوره يتطور (القسم 5.2.3).

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In the first retrospective after GenAI was introduced, one delivery app tester asked whether the team would still need two testers. The product owner answered openly: the generated cases still need expert review, and the time saved goes to exploratory testing of the coupon and payment flows. Adoption sped up once that was said aloud.</p><p class="gx-ar" lang="ar" dir="rtl">في أول اجتماع استعادي (retrospective) بعد إدخال GenAI، سأل أحد مختبِرَي تطبيق التوصيل هل سيظل الفريق بحاجة إلى مختبِرَين. فأجاب مالك المنتج بصراحة: الحالات المولّدة ما زالت تحتاج مراجعة خبير، والوقت الموفَّر يذهب إلى الاختبار الاستكشافي لمسارات الكوبونات والدفع. وتسارع التبنّي بعد أن قيل ذلك بوضوح.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Discuss job-replacement concerns early: they affect trust and morale. Adoption needs people as much as it needs technology.</p><p class="gx-ar" lang="ar" dir="rtl">ناقش مخاوف فقدان الوظائف مبكرًا: فهي تؤثر في الثقة والمعنويات. التبنّي يحتاج الناس بقدر ما يحتاج التقنية.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember the three phase names in order: Discovery; Initiation and usage definition; Utilization and iteration. A common distractor reverses the order or invents a separate “pilot” or “scaling” phase.</p><p class="gx-ar" lang="ar" dir="rtl">تذكّر أسماء المراحل الثلاث بالترتيب: Discovery (الاستكشاف)؛ Initiation and usage definition (البدء وتحديد الاستخدام)؛ Utilization and iteration (الاستخدام والتكرار). من المشتّتات الشائعة عكس الترتيب أو اختراع مرحلة منفصلة باسم «تجريبية» أو «توسّع».</p></aside>

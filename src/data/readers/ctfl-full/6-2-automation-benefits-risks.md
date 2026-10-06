---
order: 2
slug: "6-2"
chapter: 6
section: "6.2"
title: "Benefits and Risks of Test Automation"
titleAr: "فوائد أتمتة الاختبار ومخاطرها"
objectives: "FL-6.2.1 · K1"
minutes: 8
lo:
  FL-6.2.1: "Recall the benefits and risks of test automation."
loAr:
  FL-6.2.1: "تتذكّر فوائد أتمتة الاختبار ومخاطرها."
labs: ["LAB-6.2"]
takeaways:
  - "Buying a tool does not guarantee success; each new tool needs effort to bring real, lasting benefits."
  - "Benefits: less repetitive manual work, fewer simple human errors through consistency, more objective assessment, easier access to test information, shorter execution times for earlier feedback, and more time for testers to design better tests."
  - "Risks: unrealistic expectations, inaccurate estimates of the effort to introduce and maintain the tool, using it where manual testing fits better, over-reliance on the tool, vendor dependency, abandoned open-source tools, incompatibility with the platform, and unsuitable tools for regulatory or safety standards."
takeawaysAr:
  - "شراء أداة لا يضمن النجاح؛ كل أداة جديدة تحتاج جهدًا لتحقيق فوائد حقيقية ودائمة."
  - "الفوائد: عمل يدوي متكرر أقل، وأخطاء بشرية بسيطة أقل بفضل الاتساق، وتقييم أكثر موضوعية، ووصول أسهل لمعلومات الاختبار، ووقت تنفيذ أقصر لتغذية راجعة أبكر، ووقت أكثر للمختبرين لتصميم اختبارات أفضل."
  - "المخاطر: توقعات غير واقعية، وتقدير غير دقيق لجهد إدخال الأداة وصيانتها، واستخدامها حيث يناسب الاختبار اليدوي أكثر، والاعتماد المفرط عليها، والاعتماد على المورّد، وأدوات مفتوحة المصدر متوقفة، وعدم التوافق مع المنصة، وأدوات لا تناسب المعايير التنظيمية أو معايير السلامة."
terms: []
---
مجرد **امتلاك أداة لا يضمن النجاح**. كل أداة جديدة تحتاج **جهدًا** لتحقيق فوائد حقيقية ودائمة، مثل إدخال الأداة وصيانتها والتدريب عليها. وهناك أيضًا **مخاطر** تحتاج تحليلًا وتخفيفًا.

### الفوائد — Benefits

- **توفير الوقت** بتقليل العمل اليدوي المتكرر، مثل: تنفيذ اختبارات الانحدار، وإعادة إدخال بيانات الاختبار نفسها، ومقارنة النتائج المتوقعة بالفعلية، والتحقق من معايير كتابة الشيفرة.
- **منع الأخطاء البشرية البسيطة** بفضل **الاتساق وقابلية التكرار**: الاختبارات تُستخرج من المتطلبات بشكل متسق، وبيانات الاختبار تُنشأ بشكل منهجي، والأداة تنفّذ الاختبارات بالترتيب والتكرار نفسيهما.
- **تقييم أكثر موضوعية** (مثل التغطية)، وتوفير **مقاييس معقدة جدًا** على الإنسان.
- **وصول أسهل لمعلومات الاختبار** لدعم إدارته وتقاريره: إحصاءات، ورسوم بيانية، وبيانات مجمّعة عن التقدّم، ونسب الـ defects، ومدة التنفيذ.
- **تقليل وقت تنفيذ الاختبار**، لاكتشاف الـ defects مبكرًا، وتغذية راجعة أسرع، ووصول أسرع للسوق.
- **وقت أكثر للمختبرين** لتصميم اختبارات جديدة وأعمق وأكثر فعالية.

### المخاطر — Risks

- **توقعات غير واقعية** عن فوائد الأداة، بما فيها وظائفها وسهولة استخدامها.
- **تقديرات غير دقيقة** للوقت والتكاليف والجهد اللازم لإدخال الأداة، وصيانة الـ test scripts، وتغيير عملية الاختبار اليدوي الحالية.
- **استخدام أداة اختبار عندما يكون الاختبار اليدوي أنسب.**
- **الاعتماد المفرط على الأداة**، مثل تجاهل الحاجة للتفكير النقدي البشري.
- **الاعتماد على مورّد الأداة**: قد يخرج من السوق، أو يوقف الأداة، أو يبيعها لمورّد آخر، أو يقدّم دعمًا ضعيفًا.
- **استخدام برمجيات مفتوحة المصدر قد تتوقف** (لا تحديثات أخرى)، أو مكوّناتها الداخلية تحتاج تحديثًا متكررًا.
- **أداة الأتمتة غير متوافقة** مع منصة التطوير.
- **اختيار أداة غير مناسبة** لا تلتزم بالمتطلبات التنظيمية و/أو معايير السلامة.

<figure class="gx-figure gx-spectrum" aria-label="Test automation in one view."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Benefits</b><span>Saves repetitive work, consistent and repeatable, objective measures, easier reporting, faster feedback, more time for better tests.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Risks</b><span>Unrealistic expectations, wrong effort estimates, wrong use, over-reliance, vendor or open-source dependency, incompatibility, regulatory mismatch.</span></div></div><figcaption>Test automation in one view.</figcaption></figure>

<section class="gx-lab" data-lab="LAB-6.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Make the Case for Automating One Suite</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · ابنِ مبررًا لأتمتة مجموعة اختبارات واحدة</span></span><span class="gx-lab-meta">LAB-6.2 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> weigh real benefits against real risks before automating.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> موازنة الفوائد الحقيقية مقابل المخاطر الحقيقية قبل الأتمتة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Choose a manual suite you run often (for example, a 40-case regression run before each release).</span><span class="gx-ar" lang="ar" dir="rtl">اختر مجموعة اختبارات يدوية تشغّلها كثيرًا (مثلًا: انحدار من 40 حالة قبل كل إصدار).</span></li><li><span class="gx-en" lang="en" dir="ltr">Estimate the manual time per run and how often it runs per year.</span><span class="gx-ar" lang="ar" dir="rtl">قدّر الوقت اليدوي لكل تشغيل، وكم مرة تُشغَّل في السنة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Estimate the effort to automate it and to maintain the scripts each year. Be honest: include flaky tests and UI changes.</span><span class="gx-ar" lang="ar" dir="rtl">قدّر جهد أتمتتها وصيانة الـ scripts سنويًا. كن صادقًا: احسب الاختبارات غير المستقرة وتغييرات الواجهة.</span></li><li><span class="gx-en" lang="en" dir="ltr">List the three risks from the syllabus that apply most to your context and one mitigation for each.</span><span class="gx-ar" lang="ar" dir="rtl">اذكر أكثر ثلاثة مخاطر من المنهج تنطبق على سياقك، وإجراء تخفيف واحدًا لكل منها.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You can state roughly when automation pays back, which tests should stay manual (for example, exploratory and usability checks), and which risks you will watch. The decision is based on numbers and risks, not on enthusiasm.</span><span class="gx-ar" lang="ar" dir="rtl">تستطيع أن تقول تقريبًا متى تسترد الأتمتة تكلفتها، وأي اختبارات يجب أن تبقى يدوية (مثل الاستكشافي وفحوص سهولة الاستخدام)، وأي مخاطر ستراقبها. القرار مبني على الأرقام والمخاطر، لا على الحماس.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: sort statements into benefits or risks. "More time for testers to design new tests" is a benefit. "Relying on the tool too much, ignoring critical thinking" is a risk. "Automation removes all manual testing" is neither: it is false.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: صنّف العبارات إلى فوائد أو مخاطر. «وقت أكثر للمختبرين لتصميم اختبارات جديدة» فائدة. «الاعتماد المفرط على الأداة وتجاهل التفكير النقدي» خطر. «الأتمتة تلغي كل الاختبار اليدوي» ليست هذه ولا تلك: هي عبارة خاطئة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Counting only the cost of building the scripts. Maintenance of test scripts and changes to the manual process are part of the effort, and underestimating them is one of the listed risks.</p><p class="gx-ar" lang="ar" dir="rtl">احتساب تكلفة بناء الـ scripts فقط. صيانة الـ test scripts وتغيير العملية اليدوية جزء من الجهد، والاستهانة بها من المخاطر المذكورة في المنهج.</p></aside>

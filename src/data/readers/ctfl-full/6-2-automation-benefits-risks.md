---
order: 2
slug: "6-2"
chapter: 6
section: "6.2"
title: "Benefits and Risks of Test Automation"
titleAr: "فوائد أتمتة الاختبار ومخاطرها"
objectives: "FL-6.2.1 · K1"
minutes: 11
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
**مجرد امتلاك أداة لا يضمن النجاح.** كل أداة جديدة تحتاج **جهدًا** حتى تحقق **فوائد حقيقية ودائمة**: جهد **إدخال الأداة**، و**صيانتها**، و**التدريب** عليها. وهناك أيضًا **مخاطر** تحتاج **تحليلًا وتخفيفًا**. لذلك لا يكفي أن يقرر فريق تطبيق التوصيل «سنؤتمت الاختبارات»؛ عليه أن يعرف ما الذي سيكسبه، وما الذي قد يخسره.

### الفوائد — Benefits

| Benefit | Delivery-app example |
| --- | --- |
| Less repetitive manual work | Regression suite runs on every commit |
| Fewer simple human errors | Same steps, same data, same order every run |
| More objective assessment | Coverage measured by the tool |
| Easier access to test information | Dashboard of progress and failure rates |
| Shorter execution times | Feedback in minutes, not days |
| More time for better tests | Testers explore new features instead |

- **توفير الوقت بتقليل العمل اليدوي المتكرر**: تنفيذ اختبارات الانحدار، وإعادة إدخال بيانات الاختبار نفسها، ومقارنة النتائج المتوقعة بالفعلية، والتحقق من الالتزام بمعايير كتابة الشيفرة. لا أحد يريد إدخال عنوان التوصيل نفسه مئة مرة.
- **منع الأخطاء البشرية البسيطة** بفضل **الاتساق وقابلية التكرار**: تُستخرج الاختبارات من المتطلبات بشكل متسق، وتُنشأ بيانات الاختبار بطريقة منهجية، وتنفّذ الأداة الاختبارات **بالترتيب نفسه وبالتكرار نفسه** دائمًا؛ فهي لا تتعب ولا تنسى خطوة في نهاية يوم طويل.
- **تقييم أكثر موضوعية** (مثل التغطية)، وتوفير **مقاييس أعقد من أن يحسبها الإنسان**.
- **وصول أسهل لمعلومات الاختبار** لدعم إدارة الاختبار وتقاريره: إحصاءات، ورسوم بيانية، وبيانات مجمّعة عن **تقدّم الاختبار**، و**معدلات الفشل**، و**مدة التنفيذ**.
- **تقليل وقت تنفيذ الاختبار**، ما يعني **اكتشافًا أبكر للـ defects**، و**تغذية راجعة أسرع**، و**وصولًا أسرع إلى السوق**.
- **وقت أكثر للمختبرين** لتصميم اختبارات **جديدة وأعمق وأكثر فعالية**. هذه الفائدة هي ثمرة الفوائد السابقة: الوقت الذي كان المختبران يقضيانه في تكرار الانحدار يذهب الآن إلى استكشاف ميزة المحفظة الرقمية الجديدة.

### المخاطر — Risks

- **توقعات غير واقعية** عن فوائد الأداة، بما فيها **وظائفها وسهولة استخدامها**.
- **تقديرات غير دقيقة** للوقت والتكلفة والجهد اللازم **لإدخال الأداة**، و**صيانة الـ test scripts**، و**تغيير عملية الاختبار اليدوي الحالية**. كل تغيير في واجهة الدفع قد يكسر عشرات الـ scripts.
- **استخدام أداة اختبار عندما يكون الاختبار اليدوي أنسب**، مثل تقييم سهولة استخدام شاشة الطلب بالعربية.
- **الاعتماد المفرط على الأداة**، مثل **تجاهل الحاجة إلى التفكير النقدي البشري**؛ الاختبارات الخضراء لا تعني أن الزبون راضٍ.
- **الاعتماد على مورّد الأداة**: قد **يخرج من السوق**، أو **يوقف الأداة**، أو **يبيعها لمورّد آخر**، أو يقدّم **دعمًا ضعيفًا** (في الرد على الاستفسارات، والترقيات، وإصلاح الـ defects).
- **استخدام برمجيات مفتوحة المصدر** قد **يُهجر تطويرها** فلا تصدر لها تحديثات، أو تحتاج **مكوّناتها الداخلية تحديثًا متكررًا**.
- **أداة الأتمتة غير متوافقة مع منصة التطوير**: مثلًا أداة لا تدعم إصدار iOS الجديد.
- **اختيار أداة غير مناسبة** لا تلتزم بـ**المتطلبات التنظيمية** و/أو **معايير السلامة**، كأداة تخزّن بيانات بطاقات الدفع التجريبية بطريقة لا تسمح بها قواعد قطاع الدفع.

### الموازنة — Weighing Both Sides

الفوائد لا تأتي تلقائيًا، والمخاطر ليست سببًا لرفض الأتمتة. القرار الجيد يبدأ بتحليل المخاطر وخطة لتخفيف كل منها، ثم أتمتة ما يتكرر كثيرًا ويستقر نسبيًا، وإبقاء ما يحتاج حكمًا بشريًا يدويًا.

<figure class="gx-figure gx-spectrum" aria-label="Test automation in one view."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Benefits</b><span>Saves repetitive work, consistent and repeatable, objective measures, easier reporting, faster feedback, more time for better tests.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Risks</b><span>Unrealistic expectations, wrong effort estimates, wrong use, over-reliance, vendor or open-source dependency, incompatibility, regulatory mismatch.</span></div></div><figcaption>Test automation in one view.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery-app team automates its 40 regression checks for checkout and coupons, which now run on every commit instead of once per release. But a redesign of the checkout screen breaks half the UI scripts in one sprint: maintenance effort is real. They keep exploratory testing and Arabic/English usability checks manual.</p><p class="gx-ar" lang="ar" dir="rtl">يؤتمت فريق تطبيق التوصيل 40 فحص انحدار لإتمام الطلب والكوبونات، فصارت تعمل مع كل commit بدل مرة واحدة لكل إصدار. لكن إعادة تصميم شاشة الدفع كسرت نصف scripts الواجهة في sprint واحد: جهد الصيانة حقيقي. ويُبقي الفريق الاختبار الاستكشافي وفحوص سهولة الاستخدام بالعربية والإنجليزية يدوية.</p></aside>

<section class="gx-lab" data-lab="LAB-6.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Make the Case for Automating One Suite</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · ابنِ مبررًا لأتمتة مجموعة اختبارات واحدة</span></span><span class="gx-lab-meta">LAB-6.2 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> weigh real benefits against real risks before automating.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> موازنة الفوائد الحقيقية مقابل المخاطر الحقيقية قبل الأتمتة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Choose a manual suite you run often (for example, a 40-case regression run before each release).</span><span class="gx-ar" lang="ar" dir="rtl">اختر مجموعة اختبارات يدوية تشغّلها كثيرًا (مثلًا: انحدار من 40 حالة قبل كل إصدار).</span></li><li><span class="gx-en" lang="en" dir="ltr">Estimate the manual time per run and how often it runs per year.</span><span class="gx-ar" lang="ar" dir="rtl">قدّر الوقت اليدوي لكل تشغيل، وكم مرة تُشغَّل في السنة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Estimate the effort to automate it and to maintain the scripts each year. Be honest: include flaky tests and UI changes.</span><span class="gx-ar" lang="ar" dir="rtl">قدّر جهد أتمتتها وصيانة الـ scripts سنويًا. كن صادقًا: احسب الاختبارات غير المستقرة وتغييرات الواجهة.</span></li><li><span class="gx-en" lang="en" dir="ltr">List the three risks from the syllabus that apply most to your context and one mitigation for each.</span><span class="gx-ar" lang="ar" dir="rtl">اذكر أكثر ثلاثة مخاطر من المنهج تنطبق على سياقك، وإجراء تخفيف واحدًا لكل منها.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You can state roughly when automation pays back, which tests should stay manual (for example, exploratory and usability checks), and which risks you will watch. The decision is based on numbers and risks, not on enthusiasm.</span><span class="gx-ar" lang="ar" dir="rtl">تستطيع أن تقول تقريبًا متى تسترد الأتمتة تكلفتها، وأي اختبارات يجب أن تبقى يدوية (مثل الاستكشافي وفحوص سهولة الاستخدام)، وأي مخاطر ستراقبها. القرار مبني على الأرقام والمخاطر، لا على الحماس.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: sort statements into benefits or risks. "More time for testers to design new tests" is a benefit. "Relying on the tool too much, ignoring critical thinking" is a risk. "Automation removes all manual testing" is neither: it is false.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: صنّف العبارات إلى فوائد أو مخاطر. «وقت أكثر للمختبرين لتصميم اختبارات جديدة» فائدة. «الاعتماد المفرط على الأداة وتجاهل التفكير النقدي» خطر. «الأتمتة تلغي كل الاختبار اليدوي» ليست هذه ولا تلك: هي عبارة خاطئة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Counting only the cost of building the scripts. Maintenance of test scripts and changes to the manual process are part of the effort, and underestimating them is one of the listed risks.</p><p class="gx-ar" lang="ar" dir="rtl">احتساب تكلفة بناء الـ scripts فقط. صيانة الـ test scripts وتغيير العملية اليدوية جزء من الجهد، والاستهانة بها من المخاطر المذكورة في المنهج.</p></aside>

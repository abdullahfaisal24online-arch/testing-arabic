---
order: 6
slug: "5-1-6"
chapter: 5
group: "5.1"
section: "5.1.6"
title: "Test Pyramid"
titleAr: "هرم الاختبار"
objectives: "FL-5.1.6 · K1"
minutes: 5
lo:
  FL-5.1.6: "Recall the concepts of the test pyramid."
loAr:
  FL-5.1.6: "تتذكّر مفاهيم هرم الاختبار."
takeaways:
  - "The test pyramid shows that tests can have different granularity; it supports test automation and effort allocation."
  - "Layers are groups of tests. The higher the layer, the lower the granularity and isolation, and the longer the execution time."
  - "Bottom-layer tests are small, isolated and fast, each checking a small piece of functionality, so many are needed."
  - "Top-layer tests are complex, high-level end-to-end tests, slower and checking large pieces of functionality, so usually only a few."
  - "The number and names of layers vary; the original model has unit, service and UI tests."
takeawaysAr:
  - "هرم الاختبار يُظهر أن للاختبارات درجات تفصيل مختلفة؛ ويدعم الأتمتة وتوزيع الجهد."
  - "الطبقات مجموعات اختبارات. كلما ارتفعت الطبقة قلّ التفصيل والعزل وزاد وقت التنفيذ."
  - "اختبارات الطبقة السفلى صغيرة ومعزولة وسريعة، كل منها يفحص جزءًا صغيرًا، فنحتاج عددًا كبيرًا منها."
  - "اختبارات الطبقة العليا معقدة وعالية المستوى من البداية للنهاية، أبطأ وتفحص أجزاء كبيرة، فعددها عادة قليل."
  - "عدد الطبقات وأسماؤها يختلفان؛ والنموذج الأصلي فيه اختبارات الوحدات والخدمات والواجهة."
terms:
  - en: "Test Pyramid"
    ar: "هرم الاختبار"
    def: "A model showing that different tests have different granularity, with many small, fast tests at the bottom and few large, slow ones at the top."
    defAr: "نموذج يُظهر أن للاختبارات درجات تفصيل مختلفة، مع اختبارات صغيرة وسريعة كثيرة في الأسفل، وقليلة كبيرة وبطيئة في الأعلى."
    match: ["Test Pyramid", "test pyramid"]
---
**هرم الاختبار (Test Pyramid)** نموذج يُظهر أن **للاختبارات المختلفة درجات تفصيل (Granularity) مختلفة**. يدعم الفريق في **أتمتة الاختبار** وفي **توزيع جهد الاختبار**.

<figure class="gx-figure" aria-label="The test pyramid: many small fast tests at the bottom, few large slow ones at the top."><div class="gx-pyramid"><div><b>UI / end-to-end tests</b><span>Few · complex · slow · large functionality</span></div><div><b>Service / integration tests</b><span>Some</span></div><div><b>Unit / component tests</b><span>Many · small · isolated · fast</span></div></div><figcaption>The test pyramid: many small fast tests at the bottom, few large slow ones at the top.</figcaption></figure>

### الطبقات — The Layers

الطبقات تمثّل **مجموعات من الاختبارات**. **كلما ارتفعت الطبقة**:

- **قلّ** التفصيل (Granularity).
- **قلّ** العزل (Isolation).
- **زاد** وقت التنفيذ.

**اختبارات الطبقة السفلى:** صغيرة، ومعزولة، وسريعة، وكل منها يفحص **جزءًا صغيرًا من الوظائف**. لذلك نحتاج **عددًا كبيرًا** منها لتحقيق تغطية معقولة.

**اختبارات الطبقة العليا:** معقدة، وعالية المستوى، **من البداية للنهاية (End-to-end)**. أبطأ عمومًا من اختبارات الطبقات الأدنى، وتفحص **أجزاء كبيرة من الوظائف**. لذلك نحتاج **عددًا قليلًا** منها عادة.

### عدد الطبقات وأسماؤها — Number and Names of Layers

عدد الطبقات وتسمياتها **قد يختلف**. مثلًا:

- **النموذج الأصلي** للهرم (Cohn 2009) فيه ثلاث طبقات: **اختبارات الوحدات، واختبارات الخدمات، واختبارات واجهة المستخدم**.
- نموذج شائع آخر: **اختبارات الوحدات (المكوّنات)، واختبارات التكامل (تكامل المكوّنات)، واختبارات من البداية للنهاية**.

ويمكن أن تُستخدم مستويات اختبار أخرى أيضًا (القسم 2.2.1).

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A team had 40 slow UI tests and almost no unit tests: the suite took 90 minutes and broke often. Moving most checks down the pyramid (validation rules to unit tests, API rules to service tests) cut the run to 12 minutes, with only eight UI tests for the critical user journeys.</p><p class="gx-ar" lang="ar" dir="rtl">فريق كان لديه 40 اختبار واجهة بطيئًا وتقريبًا بلا اختبارات وحدات: المجموعة تستغرق 90 دقيقة وتتعطل كثيرًا. نقل معظم الفحوص للأسفل في الهرم (قواعد التحقق إلى اختبارات وحدات، وقواعد الـ API إلى اختبارات خدمات) خفّض التشغيل إلى 12 دقيقة، مع ثمانية اختبارات واجهة فقط لمسارات المستخدم الحرجة.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: "higher layer = less granularity, less isolation, longer execution time" and "bottom layer = many tests, top layer = few tests". An option saying UI tests should be the majority contradicts the model.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: «الطبقة الأعلى = تفصيل أقل، وعزل أقل، ووقت تنفيذ أطول» و«الطبقة السفلى = اختبارات كثيرة، والعليا = قليلة». أي خيار يقول إن اختبارات الواجهة يجب أن تكون الأغلبية يناقض النموذج.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking the pyramid prescribes exactly three named layers. The number and names of layers can differ; the shape and the trade-offs are the point.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الهرم يفرض ثلاث طبقات بأسماء محددة. عدد الطبقات وأسماؤها قد تختلف؛ المهم هو الشكل والمقايضات.</p></aside>

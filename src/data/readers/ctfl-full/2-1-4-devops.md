---
order: 4
slug: "2-1-4"
chapter: 2
group: "2.1"
section: "2.1.4"
title: "DevOps and Testing"
titleAr: "DevOps والاختبار"
objectives: "FL-2.1.4 · K2"
minutes: 7
lo:
  FL-2.1.4: "Summarise how DevOps might affect testing."
loAr:
  FL-2.1.4: "تلخّص كيف قد يؤثر DevOps على الاختبار."
takeaways:
  - "DevOps creates synergy between development (including testing) and operations to reach shared goals."
  - "It relies on a cultural shift, team autonomy, fast feedback, integrated toolchains, and practices such as CI and CD."
  - "Benefits for testing: fast feedback, shift left through CI, stable test environments, visibility of non-functional quality, less repetitive manual testing and lower regression risk."
  - "Risks: the delivery pipeline must be defined and set up, CI/CD tools introduced and maintained, and test automation needs resources and is hard to build and maintain."
  - "Manual testing, especially from the user's perspective, is still needed."
takeawaysAr:
  - "DevOps يصنع تآزرًا بين التطوير (ومنه الاختبار) والعمليات لتحقيق أهداف مشتركة."
  - "يعتمد على تغيير ثقافي، واستقلالية الفرق، وتغذية راجعة سريعة، وأدوات متكاملة، وممارسات مثل CI وCD."
  - "فوائده للاختبار: تغذية راجعة سريعة، ونقل لليسار عبر CI، وبيئات اختبار مستقرة، ورؤية للجودة غير الوظيفية، واختبار يدوي متكرر أقل، وخطر انحدار أقل."
  - "مخاطره: يجب تعريف خط التسليم وإعداده، وإدخال أدوات CI/CD وصيانتها، والأتمتة تحتاج موارد ويصعب بناؤها وصيانتها."
  - "الاختبار اليدوي، خاصة من منظور المستخدم، يبقى ضروريًا."
terms:
  - en: "DevOps"
    ar: "DevOps"
    def: "An organisational approach that creates synergy between development (including testing) and operations to achieve common goals."
    defAr: "نهج تنظيمي يصنع تآزرًا بين التطوير (ومنه الاختبار) والعمليات لتحقيق أهداف مشتركة."
  - en: "Continuous Integration"
    ar: "التكامل المستمر"
    def: "A practice in which code changes are merged and built frequently, with automated tests run on each change."
    defAr: "ممارسة تُدمج فيها تغييرات الشيفرة وتُبنى بشكل متكرر، مع تشغيل اختبارات مؤتمتة لكل تغيير."
    match: ["Continuous Integration", "CI"]
  - en: "Continuous Delivery"
    ar: "التسليم المستمر"
    def: "A practice in which software is kept in a releasable state and delivered through an automated pipeline."
    defAr: "ممارسة تبقى فيها البرمجية جاهزة للإطلاق، وتُسلَّم عبر خط تسليم مؤتمت."
    match: ["Continuous Delivery", "CD"]
---
**DevOps** نهج تنظيمي يهدف إلى إيجاد **تآزر** بين التطوير (ويشمل الاختبار) والعمليات (Operations)، ليعملا معًا لتحقيق مجموعة أهداف مشتركة.

يتطلب DevOps تغييرًا ثقافيًا داخل المؤسسة لسدّ الفجوة بين التطوير والعمليات، والتعامل مع وظائفهما بقيمة متساوية. ومن ركائزه:

- استقلالية الفرق.
- التغذية الراجعة السريعة.
- سلاسل أدوات متكاملة.
- ممارسات تقنية مثل **التكامل المستمر (CI)** و**التسليم المستمر (CD)**.

هذا يسمح للفرق ببناء شيفرة عالية الجودة واختبارها وإطلاقها بشكل أسرع عبر **خط تسليم DevOps (DevOps Delivery Pipeline)**.

<figure class="gx-figure" aria-label="A simplified DevOps delivery pipeline with automated testing at each step."><div class="gx-flow-row"><span class="gx-flow-node">Commit</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Build + static analysis</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Component tests</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Integration tests</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Deploy</span></div><figcaption>A simplified DevOps delivery pipeline with automated testing at each step.</figcaption></figure>

### الفوائد للاختبار — Benefits for Testing

- **تغذية راجعة سريعة** عن جودة الشيفرة، وعن تأثير التغييرات سلبًا على الشيفرة الموجودة.
- **CI يعزز النقل لليسار**: يشجّع المطوّرين على تسليم شيفرة عالية الجودة مصحوبة باختبارات مكوّنات وتحليل ساكن.
- عمليات مؤتمتة مثل CI/CD تسهّل إنشاء **بيئات اختبار مستقرة**.
- **رؤية أوضح لخصائص الجودة غير الوظيفية**، مثل كفاءة الأداء والموثوقية.
- الأتمتة عبر خط التسليم **تقلل الحاجة للاختبار اليدوي المتكرر**.
- اختبارات الانحدار المؤتمتة الواسعة **تقلل خطر الانحدار**.

### المخاطر والتحديات — Risks and Challenges

- يجب **تعريف خط تسليم DevOps وإعداده**.
- يجب **إدخال أدوات CI/CD وصيانتها**.
- **أتمتة الاختبار تحتاج موارد إضافية**، وقد يصعب إنشاؤها وصيانتها.

ورغم أن DevOps يأتي بمستوى عالٍ من الاختبار المؤتمت، يبقى **الاختبار اليدوي**، خاصة من منظور المستخدم، ضروريًا.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A team adds an automated pipeline: every commit runs static analysis and 1,200 component tests in eight minutes. Developers now find their own regressions within minutes. Testers stop re-running the same login checks by hand and spend that time on exploratory testing of new user journeys.</p><p class="gx-ar" lang="ar" dir="rtl">فريق يضيف خط تسليم مؤتمت: كل Commit يشغّل تحليلًا ساكنًا و1200 اختبار مكوّنات خلال ثماني دقائق. صار المطوّرون يكتشفون الانحدار الذي يسببونه خلال دقائق. وتوقّف المختبرون عن إعادة فحوص تسجيل الدخول نفسها يدويًا، وصاروا يستغلون ذلك الوقت في الاختبار الاستكشافي لمسارات المستخدم الجديدة.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: be ready to sort statements into "benefit" or "risk". Fast feedback, stable environments and lower regression risk are benefits. Setting up the pipeline, maintaining CI/CD tools and the cost of automation are risks.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: كن جاهزًا لتصنيف العبارات إلى «فائدة» أو «خطر». التغذية الراجعة السريعة، والبيئات المستقرة، وانخفاض خطر الانحدار فوائد. إعداد خط التسليم، وصيانة أدوات CI/CD، وتكلفة الأتمتة مخاطر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Concluding that DevOps removes manual testing. The syllabus explicitly says manual testing, especially from the user's perspective, is still needed.</p><p class="gx-ar" lang="ar" dir="rtl">الاستنتاج بأن DevOps يلغي الاختبار اليدوي. المنهج يقول صراحة إن الاختبار اليدوي، خاصة من منظور المستخدم، يبقى ضروريًا.</p></aside>

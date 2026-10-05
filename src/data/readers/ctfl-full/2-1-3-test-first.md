---
order: 3
slug: "2-1-3"
chapter: 2
group: "2.1"
section: "2.1.3"
title: "Testing as a Driver for Software Development"
titleAr: "الاختبار كمحرّك لتطوير البرمجيات"
objectives: "FL-2.1.3 · K1"
minutes: 7
lo:
  FL-2.1.3: "Recall examples of test-first approaches to development."
loAr:
  FL-2.1.3: "تتذكّر أمثلة على أساليب التطوير التي تبدأ بالاختبار."
labs: ["LAB-2.1.3"]
takeaways:
  - "TDD, ATDD and BDD are test-first approaches: tests are defined before the code they test."
  - "TDD drives coding through test cases: write a test, write code to pass it, then refactor."
  - "ATDD derives tests from acceptance criteria as part of system design, before the feature is built."
  - "BDD expresses desired behaviour in simple natural language, usually Given/When/Then, which can be turned into executable tests."
  - "In all three, the tests remain as automated tests that protect future changes."
takeawaysAr:
  - "TDD وATDD وBDD أساليب تبدأ بالاختبار: تُحدَّد الاختبارات قبل الشيفرة التي تختبرها."
  - "TDD يقود كتابة الشيفرة عبر حالات الاختبار: اكتب اختبارًا، ثم شيفرة تنجحه، ثم أعد الهيكلة."
  - "ATDD يستخرج الاختبارات من معايير القبول كجزء من تصميم النظام، قبل بناء الميزة."
  - "BDD يعبّر عن السلوك المطلوب بلغة طبيعية بسيطة، غالبًا Given/When/Then، ويمكن تحويلها لاختبارات قابلة للتشغيل."
  - "في الأساليب الثلاثة تبقى الاختبارات كاختبارات مؤتمتة تحمي التغييرات المستقبلية."
terms:
  - en: "Test-Driven Development"
    ar: "التطوير المقاد بالاختبار"
    def: "A development approach in which test cases are written first, then code is written to pass them, then both are refactored."
    defAr: "أسلوب تطوير تُكتب فيه حالات الاختبار أولًا، ثم الشيفرة التي تجعلها تنجح، ثم يُعاد هيكلة الاثنين."
    match: ["Test-Driven Development", "TDD"]
  - en: "Acceptance Test-Driven Development"
    ar: "التطوير المقاد باختبارات القبول"
    def: "A collaboration-based, test-first approach that derives tests from acceptance criteria before the feature is developed."
    defAr: "أسلوب تعاوني يبدأ بالاختبار، يستخرج الاختبارات من معايير القبول قبل تطوير الميزة."
    match: ["Acceptance Test-Driven Development", "ATDD"]
  - en: "Behavior-Driven Development"
    ar: "التطوير المقاد بالسلوك"
    def: "An approach that expresses the desired behaviour of an application in simple natural language, typically Given/When/Then, that stakeholders can understand."
    defAr: "أسلوب يعبّر عن السلوك المطلوب للتطبيق بلغة طبيعية بسيطة يفهمها أصحاب المصلحة، غالبًا بصيغة Given/When/Then."
    match: ["Behavior-Driven Development", "BDD"]
---
عادة نتخيل أن الشيفرة تُكتب أولًا ثم تُختبر. لكن هناك أساليب تقلب الترتيب: **الاختبار يُكتب أولًا ويقود التطوير.** الأساليب الثلاثة التالية تطبّق مبدأ الاختبار المبكر وتتبع نهج النقل لليسار، لأن الاختبارات تُحدَّد قبل كتابة الشيفرة.

### التطوير المقاد بالاختبار — Test-Driven Development (TDD)

- يوجّه كتابة الشيفرة عبر **حالات الاختبار** بدل التصميم المسبق الواسع.
- تُكتب الاختبارات أولًا، ثم تُكتب الشيفرة لتنجح هذه الاختبارات، ثم يُعاد هيكلة **الاختبارات والشيفرة** معًا.

<figure class="gx-figure" aria-label="The TDD cycle, repeated in small steps."><div class="gx-flow-row"><span class="gx-flow-node">Write a test<small>it fails</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Write code<small>test passes</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Refactor<small>code + tests</small></span></div><figcaption>The TDD cycle, repeated in small steps.</figcaption></figure>

### التطوير المقاد باختبارات القبول — Acceptance Test-Driven Development (ATDD)

- يستخرج الاختبارات من **معايير القبول** كجزء من عملية تصميم النظام.
- تُكتب الاختبارات **قبل** تطوير الجزء المعني من التطبيق لتلبية هذه الاختبارات.

ستتعمق في ATDD في القسم 4.5.3.

### التطوير المقاد بالسلوك — Behavior-Driven Development (BDD)

- يعبّر عن **السلوك المطلوب** للتطبيق بحالات اختبار مكتوبة بلغة طبيعية بسيطة يسهل على أصحاب المصلحة فهمها.
- الصيغة المعتادة: **Given / When / Then**.
- تُترجم حالات الاختبار تلقائيًا إلى **اختبارات قابلة للتشغيل**.

### ما يجمع الثلاثة — What They Have in Common

في الأساليب الثلاثة، يمكن أن تبقى الاختبارات بعد تنفيذ الميزة كـ **اختبارات مؤتمتة**، تضمن جودة الشيفرة عند تعديلها أو إعادة هيكلتها مستقبلًا.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A BDD scenario for a coffee shop app: Given a customer has 9 stamps, When they buy one more coffee, Then the 10th coffee is free and the stamp count resets to 0. The product owner can read it, and the team turns it into an automated test.</p><p class="gx-ar" lang="ar" dir="rtl">سيناريو BDD لتطبيق مقهى: Given لدى العميل 9 أختام، When يشتري قهوة إضافية، Then تكون القهوة العاشرة مجانية ويعود عدد الأختام إلى 0. مالك المنتج يستطيع قراءته، والفريق يحوّله إلى اختبار مؤتمت.</p></aside>

<section class="gx-lab" data-lab="LAB-2.1.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Write One Feature Test-First</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · اكتب ميزة واحدة بدءًا بالاختبار</span></span><span class="gx-lab-meta">LAB-2.1.3 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> feel the test-first order on a tiny example.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> أن تجرّب الترتيب الذي يبدأ بالاختبار على مثال صغير.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Pick a tiny rule from your product, such as "username must be 3 to 15 characters".</span><span class="gx-ar" lang="ar" dir="rtl">اختر قاعدة صغيرة من منتجك، مثل «اسم المستخدم من 3 إلى 15 حرفًا».</span></li><li><span class="gx-en" lang="en" dir="ltr">Write two or three scenarios in Given/When/Then before any code exists.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب سيناريوهين أو ثلاثة بصيغة Given/When/Then قبل وجود أي شيفرة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Share them with a developer and the product owner and ask: is anything unclear or missing?</span><span class="gx-ar" lang="ar" dir="rtl">شاركها مع مطوّر ومالك المنتج واسأل: هل هناك شيء غير واضح أو ناقص؟</span></li><li><span class="gx-en" lang="en" dir="ltr">Note which questions came up that would otherwise have been found only after coding.</span><span class="gx-ar" lang="ar" dir="rtl">سجّل الأسئلة التي ظهرت، وكانت ستُكتشف بعد البرمجة لولا هذه الخطوة.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Your scenarios are readable by a non-technical person, each checks one behaviour, and the discussion revealed at least one gap (for example, "are spaces allowed?") before coding started.</span><span class="gx-ar" lang="ar" dir="rtl">سيناريوهاتك مفهومة لشخص غير تقني، وكل واحد يفحص سلوكًا واحدًا، والنقاش كشف فجوة واحدة على الأقل (مثلًا: «هل المسافات مسموحة؟») قبل بدء البرمجة.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K1: match the name to its signature. Tests drive the code → TDD. Tests derived from acceptance criteria → ATDD. Given/When/Then in natural language → BDD.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K1: اربط الاسم بعلامته المميزة. الاختبارات تقود الشيفرة ← TDD. الاختبارات مستخرجة من معايير القبول ← ATDD. Given/When/Then بلغة طبيعية ← BDD.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking these approaches are only for testers, or only manual. They are development approaches that involve the whole team, and the tests usually become automated regression tests.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن هذه الأساليب للمختبرين فقط، أو يدوية فقط. هي أساليب تطوير تشمل الفريق كله، والاختبارات عادة تصبح اختبارات انحدار مؤتمتة.</p></aside>

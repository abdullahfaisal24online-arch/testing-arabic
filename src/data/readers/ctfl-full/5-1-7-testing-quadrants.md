---
order: 7
slug: "5-1-7"
chapter: 5
group: "5.1"
section: "5.1.7"
title: "Testing Quadrants"
titleAr: "أرباع الاختبار"
objectives: "FL-5.1.7 · K2"
minutes: 11
lo:
  FL-5.1.7: "Summarise the testing quadrants and their relationship with test levels and test types."
loAr:
  FL-5.1.7: "تلخّص أرباع الاختبار وعلاقتها بمستويات الاختبار وأنواعه."
takeaways:
  - "The testing quadrants (Brian Marick) group test levels with test types, activities, techniques and work products in Agile."
  - "They help make sure all test types and levels are included, and help explain the types of tests to stakeholders."
  - "Two dimensions: business facing vs technology facing, and supporting the team vs critiquing the product."
  - "Q1: technology facing, support the team: component and component integration tests, automated in CI."
  - "Q2: business facing, support the team: functional tests, examples, story tests, UX prototypes, API testing, simulations."
  - "Q3: business facing, critique the product: exploratory, usability and user acceptance testing, often manual."
  - "Q4: technology facing, critique the product: smoke tests and non-functional tests (except usability), often automated."
takeawaysAr:
  - "أرباع الاختبار (Brian Marick) تجمع مستويات الاختبار مع أنواعه وأنشطته وتقنياته ومخرجاته في Agile."
  - "تساعد على ضمان تضمين كل أنواع الاختبار ومستوياته، وعلى شرح أنواع الاختبارات لأصحاب المصلحة."
  - "بُعدان: موجّه للعمل مقابل موجّه للتقنية، ودعم الفريق مقابل نقد المنتج."
  - "الربع 1: موجّه للتقنية، يدعم الفريق: اختبارات المكوّنات وتكاملها، مؤتمتة ضمن CI."
  - "الربع 2: موجّه للعمل، يدعم الفريق: اختبارات وظيفية، وأمثلة، واختبارات القصص، ونماذج تجربة المستخدم، واختبار الـ API، والمحاكاة."
  - "الربع 3: موجّه للعمل، ينقد المنتج: الاختبار الاستكشافي، وسهولة الاستخدام، واختبار قبول المستخدم، وغالبًا يدوي."
  - "الربع 4: موجّه للتقنية، ينقد المنتج: اختبارات الدخان والاختبارات غير الوظيفية (عدا سهولة الاستخدام)، وغالبًا مؤتمت."
terms:
  - en: "Testing Quadrants"
    ar: "أرباع الاختبار"
    def: "A model grouping tests by whether they are business or technology facing, and whether they support the team or critique the product."
    defAr: "نموذج يجمع الاختبارات حسب كونها موجّهة للعمل أو للتقنية، وكونها تدعم الفريق أو تنقد المنتج."
    match: ["Testing Quadrants", "testing quadrants"]
---
فريق **تطبيق التوصيل** يكتب اختبارات وحدات في خط CI، ويختبر معايير قبول القصص، ويجري اختبارًا استكشافيًا قبل كل نشر، ويقيس أداء الـ API. كيف يتأكد أنه لم ينسَ نوعًا مهمًا من الاختبار، كاختبار سهولة الاستخدام أو الأمان؟ وكيف يشرح لمالك المنتج لماذا يحتاج كل هذه الأنواع؟ هنا يفيد نموذج **أرباع الاختبار (Testing Quadrants)**.

عرّف النموذج **Brian Marick** (Marick 2003, Crispin 2008)، وهو **يجمع مستويات الاختبار** مع **أنواع الاختبار** والأنشطة **وتقنيات الاختبار ومخرجات العمل** المناسبة لها في **تطوير Agile**.

### لماذا هذا النموذج؟ — Why the Quadrants?

يذكر السيليبس ثلاث فوائد:

- **إظهار الصورة كاملة لضمان تضمين كل أنواع الاختبار ومستوياته المناسبة** في دورة حياة التطوير. عندما يضع الفريق اختباراته في الأرباع الأربعة، يظهر الربع الفارغ فورًا. فلو كانت كل اختبارات تطبيق التوصيل في الربعين 1 و2، فالفريق لا ينقد المنتج من منظور المستخدم ولا يقيس أداءه.
- **فهم أن بعض أنواع الاختبار أكثر ارتباطًا بمستويات اختبار معيّنة** من غيرها. اختبار المكوّنات مثلًا مرتبط بمستوى المكوّنات وبالأتمتة في CI، واختبار قبول المستخدم مرتبط بمستوى القبول.
- **التمييز بين أنواع الاختبارات ووصفها لكل أصحاب المصلحة**، بمن فيهم المطوّرون والمختبرون وممثلو العمل. النموذج يعطي الجميع لغة مشتركة بسيطة: «هذا اختبار من الربع 3» يفهمه المطوّر ومالك المنتج بالمعنى نفسه.

### البُعدان — The Two Dimensions

**البُعد الأول: لمن يتجه الاختبار؟**

- **موجّه للعمل (Business facing):** يُكتب بلغة العمل ويفهمه ممثلو العمل، مثل «زبون يطبّق كوبون 10% على طلب 30.00 دينارًا».
- **موجّه للتقنية (Technology facing):** يُكتب بلغة تقنية ويهم الفريق التقني، مثل «دالة الخصم تُرجع 3.00 للمدخلات 30.00 و10%»، أو «الـ API يستجيب خلال 300 ميلي ثانية».

**البُعد الثاني: ما الغرض منه؟**

- **يدعم الفريق (Support the team):** أي **يوجّه التطوير**؛ اختبارات تُكتب قبل الشيفرة أو معها لتساعد الفريق على بناء الشيء الصحيح بالطريقة الصحيحة.
- **ينقد المنتج (Critique the product):** أي **يقيس سلوك المنتج مقارنة بالتوقعات**؛ اختبارات تنظر إلى المنتج المبني وتسأل: هل هو جيد بما يكفي للمستخدم ومن الناحية التقنية؟

**تركيب هذين المنظورين** يعطي الأرباع الأربعة:

<figure class="gx-figure" aria-label="The four testing quadrants. Top: business facing; bottom: technology facing. Left: support the team; right: critique the product."><div class="gx-quad"><div><small>Q2 · Business facing · Support the team</small><b>Functional tests, examples, story tests, UX prototypes, API testing, simulations</b><span>Check acceptance criteria. Manual or automated.</span></div><div><small>Q3 · Business facing · Critique the product</small><b>Exploratory testing, usability testing, user acceptance testing</b><span>User-oriented, often manual.</span></div><div><small>Q1 · Technology facing · Support the team</small><b>Component tests, component integration tests</b><span>Automated, part of CI.</span></div><div><small>Q4 · Technology facing · Critique the product</small><b>Smoke tests, non-functional tests (except usability)</b><span>Often automated.</span></div></div><figcaption>The four testing quadrants. Top: business facing; bottom: technology facing. Left: support the team; right: critique the product.</figcaption></figure>

### الأرباع الأربعة — The Four Quadrants

**الربع Q1 (موجّه للتقنية، يدعم الفريق):** يضم **اختبارات المكوّنات** و**اختبارات تكامل المكوّنات**. هذه الاختبارات **يجب أن تكون مؤتمتة ومضمّنة في عملية CI**، لأنها تعطي المطوّرين تغذية راجعة فورية مع كل commit. مثال: اختبار وحدة لدالة رسوم التوصيل، واختبار تكامل بين خدمة الطلبات وخدمة الكوبونات.

**الربع Q2 (موجّه للعمل، يدعم الفريق):** يضم **الاختبارات الوظيفية، والأمثلة، واختبارات قصص المستخدم، ونماذج تجربة المستخدم الأولية (UX prototypes)، واختبار الـ API، والمحاكاة**. هذه الاختبارات **تتحقق من معايير القبول**، ويمكن أن تكون **يدوية أو مؤتمتة**. مثال: اختبار معيار القبول «الكوبون المنتهي يُرفض برسالة واضحة»، ومحاكاة رحلة السائق بدل خدمة الخرائط الحقيقية.

**الربع Q3 (موجّه للعمل، ينقد المنتج):** يضم **الاختبار الاستكشافي، واختبار سهولة الاستخدام، واختبار قبول المستخدم**. هذه الاختبارات **موجّهة للمستخدم**، و**غالبًا يدوية**، لأنها تحتاج حكمًا بشريًا. مثال: جلسة استكشافية على شاشة الدفع بالواجهة العربية، أو مراقبة زبائن حقيقيين يحاولون تطبيق كوبون.

**الربع Q4 (موجّه للتقنية، ينقد المنتج):** يضم **اختبارات الدخان** و**الاختبارات غير الوظيفية (عدا اختبارات سهولة الاستخدام)**، مثل الأداء والأمان والتحمل. هذه الاختبارات **غالبًا مؤتمتة**. مثال: اختبار حمل لـ 2,000 طلب متزامن وقت الغداء، واختبار دخان بعد كل نشر على بيئة staging.

| Quadrant | Facing | Purpose | Examples | Execution |
| --- | --- | --- | --- | --- |
| Q1 | Technology | Support the team | Component tests, component integration tests | Automated, in CI |
| Q2 | Business | Support the team | Functional tests, examples, user story tests, UX prototypes, API testing, simulations | Manual or automated; check acceptance criteria |
| Q3 | Business | Critique the product | Exploratory testing, usability testing, user acceptance testing | User-oriented, often manual |
| Q4 | Technology | Critique the product | Smoke tests, non-functional tests (except usability) | Often automated |

### العلاقة بالمستويات والأنواع — Relation to Test Levels and Test Types

هدف التعلم يطلب تلخيص علاقة الأرباع **بمستويات الاختبار وأنواعه**. القراءة المختصرة: Q1 يرتبط بمستويي **المكوّنات وتكامل المكوّنات**؛ وQ2 يرتبط أساسًا **بالاختبار الوظيفي** لقصص المستخدم ومعايير قبولها؛ وQ3 يضم **اختبار قبول المستخدم** (مستوى القبول) و**سهولة الاستخدام**؛ وQ4 هو موطن **الاختبار غير الوظيفي**. ولاحظ أن سهولة الاستخدام نوع غير وظيفي، لكنها في Q3 لأنها تُقيَّم من منظور المستخدم.

ولاحظ نمط التنفيذ: اختبارات «دعم الفريق» يجب أن تعمل باستمرار ومع كل تغيير، لذلك تميل إلى الأتمتة. واختبارات «نقد المنتج» الموجّهة للعمل تحتاج حكمًا بشريًا فتميل إلى اليدوي، بينما الموجّهة للتقنية (كالأداء) تحتاج أدوات وحِملًا لا يولّده الإنسان، فتميل إلى الأتمتة. والأرباع ليست مراحل متتابعة، فتطبيق التوصيل قد ينفذ اختبارات من الأرباع الأربعة في الـ sprint نفسه.

### لا تخلط بين — Don't Confuse

| | Test pyramid | Testing quadrants |
| --- | --- | --- |
| Main question | How many tests of each granularity? | Which test types and levels do we need, and why? |
| Organized by | Granularity, isolation, execution time | Business vs technology facing; support vs critique |
| Typical use | Test automation and effort allocation | Making sure no test type is missing; explaining tests to stakeholders |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Two quick rules: usability is in Q3 (business facing, critique), while all other non-functional tests are in Q4. Component tests are always Q1.</p><p class="gx-ar" lang="ar" dir="rtl">قاعدتان سريعتان: سهولة الاستخدام في الربع 3 (موجّه للعمل، نقد)، بينما بقية الاختبارات غير الوظيفية في الربع 4. واختبارات المكوّنات دائمًا في الربع 1.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating the quadrants as a sequence (Q1 first, Q4 last). They are categories, not phases; tests from all quadrants can run in the same iteration.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار الأرباع تسلسلًا زمنيًا (الربع 1 أولًا، والربع 4 أخيرًا). هي تصنيفات وليست مراحل؛ ويمكن تنفيذ اختبارات من كل الأرباع في الدورة نفسها.</p></aside>

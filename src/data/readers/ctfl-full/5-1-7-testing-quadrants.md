---
order: 7
slug: "5-1-7"
chapter: 5
group: "5.1"
section: "5.1.7"
title: "Testing Quadrants"
titleAr: "أرباع الاختبار"
objectives: "FL-5.1.7 · K2"
minutes: 7
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
**أرباع الاختبار (Testing Quadrants)**، التي عرّفها Brian Marick، تجمع **مستويات الاختبار** مع **أنواع الاختبار** والأنشطة والتقنيات ومخرجات العمل المناسبة في تطوير Agile.

يدعم النموذج إدارة الاختبار في:

- **ضمان تضمين** كل أنواع الاختبار ومستوياته المطلوبة في دورة التطوير.
- **فهم** أن بعض أنواع الاختبار مرتبطة بمستويات اختبار معيّنة أكثر من غيرها.
- **التمييز بين أنواع الاختبارات وشرحها** لكل أصحاب المصلحة، بمن فيهم المطوّرون والمختبرون وممثلو العمل.

### البُعدان — The Two Dimensions

- **موجّه للعمل (Business facing)** مقابل **موجّه للتقنية (Technology facing)**.
- **يدعم الفريق (Support the team):** يوجّه التطوير. مقابل **ينقد المنتج (Critique the product):** يقيس سلوكه مقارنة بالتوقعات.

<figure class="gx-figure" aria-label="The four testing quadrants. Top: business facing; bottom: technology facing. Left: support the team; right: critique the product."><div class="gx-quad"><div><small>Q2 · Business facing · Support the team</small><b>Functional tests, examples, story tests, UX prototypes, API testing, simulations</b><span>Check acceptance criteria. Manual or automated.</span></div><div><small>Q3 · Business facing · Critique the product</small><b>Exploratory testing, usability testing, user acceptance testing</b><span>User-oriented, often manual.</span></div><div><small>Q1 · Technology facing · Support the team</small><b>Component tests, component integration tests</b><span>Automated, part of CI.</span></div><div><small>Q4 · Technology facing · Critique the product</small><b>Smoke tests, non-functional tests (except usability)</b><span>Often automated.</span></div></div><figcaption>The four testing quadrants. Top: business facing; bottom: technology facing. Left: support the team; right: critique the product.</figcaption></figure>

### الأرباع الأربعة — The Four Quadrants

| Quadrant | Facing | Purpose | Examples | Execution |
| --- | --- | --- | --- | --- |
| Q1 | Technology | Support the team | Component tests, component integration tests | Automated, in CI |
| Q2 | Business | Support the team | Functional tests, examples, user story tests, UX prototypes, API testing, simulations | Manual or automated; check acceptance criteria |
| Q3 | Business | Critique the product | Exploratory testing, usability testing, user acceptance testing | User-oriented, often manual |
| Q4 | Technology | Critique the product | Smoke tests, non-functional tests (except usability) | Often automated |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Two quick rules: usability is in Q3 (business facing, critique), while all other non-functional tests are in Q4. Component tests are always Q1.</p><p class="gx-ar" lang="ar" dir="rtl">قاعدتان سريعتان: سهولة الاستخدام في الربع 3 (موجّه للعمل، نقد)، بينما بقية الاختبارات غير الوظيفية في الربع 4. واختبارات المكوّنات دائمًا في الربع 1.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating the quadrants as a sequence (Q1 first, Q4 last). They are categories, not phases; tests from all quadrants can run in the same iteration.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار الأرباع تسلسلًا زمنيًا (الربع 1 أولًا، والربع 4 أخيرًا). هي تصنيفات وليست مراحل؛ ويمكن تنفيذ اختبارات من كل الأرباع في الدورة نفسها.</p></aside>

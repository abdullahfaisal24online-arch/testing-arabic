---
order: 15
slug: "5-4"
chapter: 5
section: "5.4"
title: "Configuration Management"
titleAr: "إدارة الإعدادات"
objectives: "FL-5.4.1 · K2"
minutes: 6
lo:
  FL-5.4.1: "Summarise how configuration management supports testing."
loAr:
  FL-5.4.1: "تلخّص كيف تدعم إدارة الإعدادات الاختبار."
takeaways:
  - "Configuration management (CM) identifies, controls and tracks work products such as test plans, strategies, conditions, cases, scripts, results, logs and reports as configuration items."
  - "For complex items, CM records what they consist of, their relationships and versions; an approved item becomes a baseline, changeable only through formal change control."
  - "CM keeps a record of changes and makes it possible to revert to a previous baseline to reproduce earlier test results."
  - "To support testing, all items are uniquely identified, version controlled, tracked for changes and related to each other for traceability, and documentation and software are referenced unambiguously in testware."
  - "Continuous integration, delivery and deployment usually include automated CM in the DevOps pipeline."
takeawaysAr:
  - "إدارة الإعدادات (CM) تحدد مخرجات العمل وتتحكم فيها وتتابعها كعناصر إعدادات، مثل خطط الاختبار واستراتيجياته وشروطه وحالاته وسكربتاته ونتائجه وسجلاته وتقاريره."
  - "للعناصر المعقدة، تسجّل CM ما تتكون منه وعلاقاتها وإصداراتها؛ والعنصر المعتمد يصبح خط أساس، لا يتغير إلا عبر ضبط تغيير رسمي."
  - "CM تحتفظ بسجل للتغييرات، وتتيح العودة لخط أساس سابق لإعادة إنتاج نتائج اختبار سابقة."
  - "لدعم الاختبار: كل العناصر مُعرَّفة بشكل فريد، وتحت ضبط الإصدارات، ومتابَعة التغييرات، ومرتبطة ببعضها للتتبّع، والوثائق والبرمجيات مُشار إليها بوضوح في مخرجات الاختبار."
  - "التكامل والتسليم والنشر المستمر تتضمن عادة إدارة إعدادات مؤتمتة في خط DevOps."
terms:
  - en: "Configuration Management"
    ar: "إدارة الإعدادات"
    def: "A discipline that identifies, controls and tracks work products as configuration items, including their versions and changes."
    defAr: "منهجية تحدد مخرجات العمل وتتحكم فيها وتتابعها كعناصر إعدادات، بما في ذلك إصداراتها وتغييراتها."
    match: ["Configuration Management", "configuration management"]
  - en: "Configuration Item"
    ar: "عنصر الإعدادات"
    def: "A work product placed under configuration management and treated as a single entity."
    defAr: "مُخرَج عمل يوضع تحت إدارة الإعدادات ويُعامَل ككيان واحد."
  - en: "Baseline"
    ar: "خط الأساس"
    def: "An approved version of a configuration item that can only be changed through formal change control."
    defAr: "إصدار معتمد من عنصر إعدادات، لا يمكن تغييره إلا عبر ضبط تغيير رسمي."
---
في الاختبار، **إدارة الإعدادات (Configuration Management / CM)** توفّر إطارًا لـ **تحديد** مخرجات العمل و**التحكم** فيها و**متابعتها**، مثل خطط الاختبار، واستراتيجياته، وشروطه، وحالاته، وسكربتاته، ونتائجه، وسجلاته، وتقاريره، باعتبارها **عناصر إعدادات (Configuration Items)**.

### العناصر المعقدة وخطوط الأساس — Complex Items and Baselines

- لعنصر إعدادات معقد، مثل بيئة اختبار، تسجّل CM **العناصر التي يتكون منها**، و**علاقاتها**، و**إصداراتها**.
- إذا **اعتُمد** عنصر الإعدادات للاختبار، يصبح **خط أساس (Baseline)**، و**لا يمكن تغييره إلا عبر عملية ضبط تغيير رسمية**.
- CM تحتفظ **بسجل لعناصر الإعدادات المتغيرة** عند إنشاء خط أساس جديد. ويمكن **العودة إلى خط أساس سابق** لإعادة إنتاج نتائج اختبار سابقة.

### كيف تدعم الاختبار؟ — How CM Supports Testing

لدعم الاختبار بشكل صحيح، تضمن CM أن:

- **كل عناصر الإعدادات**، بما فيها عناصر الاختبار (أجزاء موضوع الاختبار)، **مُعرَّفة بشكل فريد**، و**تحت ضبط الإصدارات**، و**تُتابَع تغييراتها**، و**مرتبطة ببعضها** للحفاظ على التتبّع طوال عملية الاختبار.
- **كل الوثائق وعناصر البرمجيات المحددة** مُشار إليها **بوضوح لا لبس فيه** في مخرجات الاختبار.

### CM والأتمتة — CM and Automation

**التكامل المستمر، والتسليم المستمر، والنشر المستمر** والاختبار المرتبط بها، تُنفَّذ عادة كجزء من **خط DevOps مؤتمت**، تكون فيه **إدارة الإعدادات المؤتمتة** جزءًا أساسيًا.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A defect report says "Fails on build 4.12.3, test environment ENV-B (Postgres 15.4), test script checkout_v7". Because all three are under configuration management, a developer can recreate exactly the same setup a month later and reproduce the failure.</p><p class="gx-ar" lang="ar" dir="rtl">تقرير عيب يقول: «يفشل على النسخة 4.12.3، بيئة الاختبار ENV-B (Postgres 15.4)، سكربت الاختبار checkout_v7». ولأن الثلاثة تحت إدارة الإعدادات، يستطيع المطوّر إعادة إنشاء الإعداد نفسه بالضبط بعد شهر، وإعادة إنتاج العطل.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Key ideas for K2: unique identification, version control, change tracking, traceability between items, and baselines that change only through formal change control. Reverting to a baseline lets you reproduce earlier results.</p><p class="gx-ar" lang="ar" dir="rtl">أفكار أساسية لهدف K2: التعريف الفريد، وضبط الإصدارات، ومتابعة التغييرات، والتتبّع بين العناصر، وخطوط الأساس التي لا تتغير إلا عبر ضبط تغيير رسمي. والعودة لخط أساس تتيح إعادة إنتاج النتائج السابقة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking configuration management is only for source code. Test plans, test cases, scripts, results, logs, reports and test environments are configuration items too.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن إدارة الإعدادات للشيفرة المصدرية فقط. خطط الاختبار وحالاته وسكربتاته ونتائجه وسجلاته وتقاريره وبيئاته عناصر إعدادات أيضًا.</p></aside>

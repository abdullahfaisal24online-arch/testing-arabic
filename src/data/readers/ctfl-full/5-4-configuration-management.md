---
order: 15
slug: "5-4"
chapter: 5
section: "5.4"
title: "Configuration Management"
titleAr: "إدارة الإعدادات"
objectives: "FL-5.4.1 · K2"
minutes: 12
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
  - "إدارة الإعدادات (CM) تحدد مخرجات العمل وتتحكم فيها وتتابعها كعناصر إعدادات، مثل خطط الاختبار واستراتيجياته وشروطه وحالاته والـ test scripts ونتائجه وسجلاته وتقاريره."
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
تخيّل هذا الموقف في فريق التوصيل: زبون يبلّغ عن خطأ في حساب الكوبون، والمطوّر يسأل: «على أي نسخة اختبرتم؟ وبأي بيانات؟ وبأي إصدار من حالة الاختبار؟». إذا لم يستطع أحد الإجابة بدقة، فلا يمكن إعادة إنتاج المشكلة، ولا معرفة هل الاختبار كان صحيحًا أصلًا. هذه هي المشكلة التي تحلها **إدارة الإعدادات (Configuration Management / CM)**.

في الاختبار، توفّر CM **منهجية منضبطة** لـ **تحديد** مخرجات العمل، و**التحكم** فيها، و**متابعتها**، باعتبارها **عناصر إعدادات (Configuration Items)**. ويذكر السيليبس منها:

| Configuration item | Delivery-app example |
| --- | --- |
| Test plan | Release 3.2 test plan, v1.3 |
| Test strategy | Organizational test strategy, v2.0 |
| Test conditions | TCOND-CPN-07 "Fixed coupon larger than the subtotal" |
| Test cases | TC-PRC-031 v4 |
| Test scripts | checkout_coupon.spec.ts at commit a91f3c2 |
| Test results | Run #1842 results for build 3.2.0 (412) |
| Test logs | CI log of pipeline run #1842 |
| Test reports | Sprint 14 progress report |

### العناصر المعقدة — Complex Configuration Items

بعض عناصر الإعدادات **معقدة**، أي تتكوّن من أجزاء كثيرة. المثال الذي يذكره السيليبس هو **بيئة الاختبار**. لهذا النوع، تسجّل CM **العناصر التي يتكوّن منها**، و**علاقاتها**، و**إصداراتها**:

| Component of ENV-B (staging) | Version |
| --- | --- |
| Customer app (Android) | 3.2.0 (412) |
| Customer app (iOS) | 3.2.0 (409) |
| Backend APIs | 5.8.1 |
| Database | PostgreSQL 15.4 |
| Payment gateway sandbox | API v2 |
| Maps SDK | 9.1 |
| Test data set | TD-07 (120 restaurants, 40 coupons) |

**العلاقات** مهمة بقدر الإصدارات: تطبيق Android 3.2.0 يعمل مع الواجهات 5.8.1 تحديدًا، ولا يعمل مع 5.7. فإذا تغيّر جزء دون أن يُسجَّل، تصبح نتيجة الاختبار بلا معنى، لأننا لا نعرف على أي تركيبة نُفّذ.

### خط الأساس وضبط التغيير — Baseline and Change Control

إذا **اعتُمد** عنصر الإعدادات للاختبار، يصبح **خط أساس (Baseline)**، و**لا يمكن تغييره إلا عبر عملية ضبط تغيير رسمية (Formal Change Control)**. لماذا هذا التشدد؟ لأن الفريق يبني ثقته بالنتائج على ثبات ما يختبره. إذا رقّى أحدهم قاعدة البيانات بهدوء في منتصف اختبار الانحدار، فقد تختلط الـ defects في الترقية بالـ defects في الإصدار. بدلًا من ذلك يُقدَّم **طلب تغيير**، فيُقيَّم أثره ويُعتمد ويُسجَّل، ثم يُنشأ خط أساس جديد.

وعند إنشاء خط أساس جديد، **تحتفظ CM بسجل لعناصر الإعدادات التي تغيّرت**. ويمكن **العودة إلى خط أساس سابق لإعادة إنتاج نتائج اختبار سابقة**. مثال: الفريق يعمل على الإصدار 3.3، وزبون يبلّغ عن defect في الإصدار 3.1.4 الذي ما زال يستخدمه. بفضل خط الأساس المحفوظ، يُعاد بناء بيئة 3.1.4 بكل مكوّناتها، فيُعاد إنتاج الـ defect ويُقارن بالنتائج القديمة.

### كيف تدعم CM الاختبار؟ — How CM Supports Testing

لدعم الاختبار بشكل صحيح، تضمن CM أمرين:

**أولًا:** أن **كل عناصر الإعدادات**، بما فيها **عناصر الاختبار (Test Items)**، أي الأجزاء المفردة من موضوع الاختبار:

- **مُعرَّفة بشكل فريد:** لكل عنصر اسم ورقم لا يتكرر، مثل TC-PRC-031، فلا يلتبس بغيره.
- **تحت ضبط الإصدارات (Version Controlled):** نعرف أن الإصدار 4 من حالة الاختبار يختلف عن الإصدار 3، ومتى تغيّر.
- **تُتابَع تغييراتها:** من غيّر، وماذا غيّر، ولماذا.
- **مرتبطة بعناصر الإعدادات الأخرى**، حتى يُحافَظ على **التتبّع (Traceability)** طوال عملية الاختبار.

سلسلة التتبّع في تطبيق التوصيل تبدو هكذا:

| User story | Test condition | Test case | Test result | Defect | Build |
| --- | --- | --- | --- | --- | --- |
| US-218 Free delivery | TCOND-PRC-03 | TC-PRC-031 v4 | Run #1842: failed | DEF-1287 | 3.2.0 (412) |

بفضل هذه الروابط يمكن الإجابة عن أسئلة مهمة: أي قصص تأثرت بهذا الـ defect؟ وأي اختبارات يجب إعادتها إذا تغيّرت هذه القصة؟

**ثانيًا:** أن **كل الوثائق وعناصر البرمجيات المحددة مُشار إليها بوضوح لا لبس فيه في مخرجات الاختبار (Testware)**. عبارة مثل «اختُبر على آخر نسخة» غامضة، لأن «آخر نسخة» تتغير كل يوم. أما «اختُبر على البناء 3.2.0 (412) مقابل متطلب US-218 بالإصدار 2» فلا تحتمل إلا معنى واحدًا.

### ماذا يحدث بدون CM؟ — Without CM

أفضل طريقة لفهم قيمة CM هي تخيّل غيابها في فريق التوصيل:

- **defects لا يمكن إعادة إنتاجها:** المطوّر يجرّب على بيئة تغيّرت منذ يوم الاختبار، فيغلق الـ defect بعبارة «لا يتكرر عندي».
- **اختبار الشيء الخطأ:** المختبر ينفّذ الإصدار 3 من حالة الاختبار، بينما المتطلب تغيّر وصار يحتاج الإصدار 4، فينجح اختبار لم يعد صالحًا.
- **اختبار التأكيد على بناء لا يحتوي الإصلاح:** يُعاد الاختبار، فيفشل، ويُعاد فتح الـ defect ظلمًا.
- **تقارير لا يُعتمد عليها:** نسبة نجاح 95% لا قيمة لها إن لم نعرف على أي بناء وأي بيئة حُسبت.

كل مشكلة من هذه تقابلها ضمانة من ضمانات CM: التعريف الفريد، وضبط الإصدارات، ومتابعة التغييرات، والتتبّع، والإشارة الواضحة.

### CM والأتمتة — CM and Automation

**التكامل المستمر (Continuous Integration)** و**التسليم المستمر (Continuous Delivery)** و**النشر المستمر (Continuous Deployment)**، والاختبار المرتبط بها، تُنفَّذ عادة كجزء من **خط DevOps مؤتمت** (القسم 2.1.4)، تكون فيه **إدارة الإعدادات المؤتمتة** جزءًا طبيعيًا. في خط CI لفريق التوصيل يحدث هذا تلقائيًا مع كل commit: تُخزَّن الشيفرة والـ test scripts في نظام ضبط الإصدارات، ويحصل البناء على رقم فريد، وتُعرَّف البيئة كشيفرة (environment as code)، وتُحفظ نتائج الاختبار وسجلاته مربوطة برقم البناء. لا أحد يملأ جدولًا يدويًا، ومع ذلك يبقى كل شيء قابلًا للتتبّع.

### لا تخلط بين — Don't Confuse

| | Configuration item | Baseline | Change control |
| --- | --- | --- | --- |
| What it is | Any work product managed by CM | An approved version of a configuration item | The formal process for changing a baseline |
| Example | TC-PRC-031 | ENV-B as approved for release 3.2 testing | Change request to upgrade PostgreSQL to 16 |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A defect report says "Fails on build 4.12.3, test environment ENV-B (Postgres 15.4), test script checkout_v7". Because all three are under configuration management, a developer can recreate exactly the same setup a month later and reproduce the failure.</p><p class="gx-ar" lang="ar" dir="rtl">تقرير defect يقول: «يفشل على النسخة 4.12.3، بيئة الاختبار ENV-B (Postgres 15.4)، الـ test script checkout_v7». ولأن الثلاثة تحت إدارة الإعدادات، يستطيع المطوّر إعادة إنشاء الإعداد نفسه بالضبط بعد شهر، وإعادة إنتاج العطل.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Key ideas for K2: unique identification, version control, change tracking, traceability between items, and baselines that change only through formal change control. Reverting to a baseline lets you reproduce earlier results.</p><p class="gx-ar" lang="ar" dir="rtl">أفكار أساسية لهدف K2: التعريف الفريد، وضبط الإصدارات، ومتابعة التغييرات، والتتبّع بين العناصر، وخطوط الأساس التي لا تتغير إلا عبر ضبط تغيير رسمي. والعودة لخط أساس تتيح إعادة إنتاج النتائج السابقة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking configuration management is only for source code. Test plans, test cases, scripts, results, logs, reports and test environments are configuration items too.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن إدارة الإعدادات للشيفرة المصدرية فقط. خطط الاختبار وحالاته والـ test scripts ونتائجه وسجلاته وتقاريره وبيئاته عناصر إعدادات أيضًا.</p></aside>

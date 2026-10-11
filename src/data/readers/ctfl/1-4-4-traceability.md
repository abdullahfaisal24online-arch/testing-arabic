---
order: 10
slug: "1-4-4"
chapter: 1
group: "1.4"
section: "1.4.4"
title: "Traceability between the Test Basis and Testware"
titleAr: "التتبّع بين أساس الاختبار ومخرجاته"
objectives: "FL-1.4.4 · K2"
minutes: 12
lo:
  FL-1.4.4: "Explain why maintaining traceability is valuable."
loAr:
  FL-1.4.4: "تشرح قيمة الحفاظ على التتبّع."
labs: ["LAB-1.4.4"]
takeaways:
  - "Traceability links test basis items, testware, test results and defects to each other."
  - "It makes coverage measurable: are all requirements covered by test cases?"
  - "Tracing results to risks shows the residual risk; tracing to requirements shows the impact of changes."
  - "It supports audits and governance and makes test reports easier for stakeholders to understand."
  - "Measurable coverage criteria in the test basis can act as key performance indicators showing to what extent the test objectives have been achieved."
takeawaysAr:
  - "التتبّع يربط عناصر أساس الاختبار ومخرجات الاختبار ونتائجه والـ defects ببعضها."
  - "يجعل التغطية قابلة للقياس: هل كل المتطلبات مغطّاة بحالات اختبار؟"
  - "ربط النتائج بالمخاطر يُظهر المخاطر المتبقية؛ وربطها بالمتطلبات يُظهر أثر التغييرات."
  - "يدعم التدقيق والحوكمة، ويجعل تقارير الاختبار أسهل فهمًا لأصحاب المصلحة."
  - "معايير التغطية القابلة للقياس في أساس الاختبار يمكن أن تعمل كمؤشرات أداء رئيسية تُظهر إلى أي مدى تحققت أهداف الاختبار."
terms:
  - en: "Traceability"
    ar: "التتبّع"
    def: "The degree to which a relationship can be established between two or more work products, such as requirements and test cases."
    defAr: "مدى إمكانية إقامة علاقة بين مُخرَجَي عمل أو أكثر، مثل المتطلبات وحالات الاختبار."
    match: ["Traceability", "traceability"]
  - en: "Residual Risk"
    ar: "المخاطر المتبقية"
    def: "The risk that remains after testing and other mitigation actions have been taken."
    defAr: "الخطر الذي يبقى بعد تنفيذ الاختبار وإجراءات التخفيف الأخرى."
---
تخيّل أن مالك المنتج في تطبيق التوصيل يسألك قبل الإطلاق بيوم: «هل اختبرنا كل قواعد الكوبون؟ وما الذي ما زال يقلقك؟». إذا كانت لديك 300 حالة اختبار بلا روابط، فلن تستطيع الإجابة إلا بالتخمين. أما إذا كانت كل حالة مربوطة بالمتطلب الذي تختبره وبنتيجتها وبالـ defects التي كشفتها، فالإجابة جاهزة. هذه الروابط هي **التتبّع (Traceability)**.

يقول السيليبس إنه **لتنفيذ مراقبة الاختبار والتحكم فيه بشكل فعّال**، من المهم **إنشاء التتبّع والحفاظ عليه طوال عملية الاختبار** بين:

- **عناصر أساس الاختبار**: متطلب، أو قصة مستخدم، أو معيار قبول.
- **مخرجات الاختبار المرتبطة بهذه العناصر**، مثل شروط الاختبار، و**المخاطر**، وحالات الاختبار.
- **نتائج الاختبار**.
- **الـ defects**.

كلمة «الحفاظ» مهمة: التتبّع الذي يُبنى مرة ثم يُهمل يصبح مضلّلًا، لأن المتطلبات والحالات تتغير كل sprint. وعبارة «طوال عملية الاختبار» مهمة أيضًا: الروابط تبدأ في التحليل (شرط ← معيار قبول)، وتمتد في التصميم والتجهيز (حالة ← شرط، script ← حالة)، ثم في التنفيذ (نتيجة و defect ← حالة)، حتى تصل إلى تقرير الإكمال.

### مثال: مصفوفة تتبّع — Example: A Traceability Matrix

| Requirement | Test cases | Last result | Defects |
| --- | --- | --- | --- |
| AC-1 Percentage coupon reduces the total | TC-01, TC-02, TC-03 | Passed | — |
| AC-2 Expired coupon is rejected | TC-04, TC-05 | Failed | BUG-117 |
| AC-3 Only one coupon per order | TC-06 | Not run | — |
| AC-4 Fixed-amount coupon reduces the total | — | — | — |

من نظرة واحدة: AC-4 بلا أي حالة اختبار، وAC-2 فيه defect مفتوح، وAC-3 لم يُختبر بعد. هذه المعلومة هي بالضبط ما تحتاجه المراقبة والتحكم.

### التتبّع والتغطية — Traceability and Coverage

**التتبّع الدقيق يدعم تقييم التغطية**. لذلك من المفيد جدًا أن تكون هناك **معايير تغطية قابلة للقياس** معرّفة في أساس الاختبار، مثل «كل معيار قبول تغطيه حالة اختبار واحدة على الأقل». هذه المعايير يمكن أن تعمل **كمؤشرات أداء رئيسية (KPIs)** توجّه الأنشطة التي تُظهر **إلى أي مدى تحققت أهداف الاختبار** (القسم 1.1.1). معنى ذلك أن الفريق لا يكتفي بعدّ الاختبارات المنفّذة، بل يتابع رقمًا مرتبطًا بالهدف: إذا كان الهدف «التحقق من أن كل معايير قبول الكوبون مستوفاة»، فنسبة المعايير المغطّاة والناجحة هي المؤشر الذي يخبر الفريق أين يوجّه جهده في الأيام الباقية من الـ sprint. ويعطي السيليبس مثالين:

1. **ربط حالات الاختبار بالمتطلبات** يتحقق من أن المتطلبات **مغطّاة بحالات اختبار**. في المصفوفة أعلاه، التغطية 3 من 4 معايير قبول = 75%، والفجوة واضحة: AC-4.
2. **ربط نتائج الاختبار بالمخاطر** يُستخدم لتقييم مستوى **المخاطر المتبقية (Residual Risk)** في موضوع الاختبار:

| Risk | Level | Linked tests | Results | Residual risk |
| --- | --- | --- | --- | --- |
| Wrong delivery fee around 20.00 JOD | High | 6 | 6 passed | Low |
| Expired coupon accepted | High | 2 | 1 failed (BUG-117) | Still high |
| Coupon text misaligned in Arabic UI | Low | 1 | Not run | Unknown, accepted |

بدون ربط النتائج بالمخاطر، لا تستطيع أن تقول إن خطرًا ما انخفض؛ تستطيع فقط أن تقول إنك شغّلت اختبارات.

### فوائد أخرى للتتبّع — Further Benefits

إلى جانب تقييم التغطية، يذكر السيليبس فوائد أخرى:

- **تحديد أثر التغييرات (Impact of Changes):** قرر مالك المنتج رفع الحد الأدنى للطلب من 5.00 إلى 6.00 دنانير. بفضل التتبّع تعرف فورًا أي حالات الاختبار و scripts الأتمتة مربوطة بهذا المتطلب، فتحدّثها وتعيد تشغيلها، بدل البحث اليدوي بين مئات الحالات.
- **تسهيل التدقيق (Audits):** إذا طلب مدقق دليلًا على أن عمليات الدفع اختُبرت قبل الإطلاق، فالتتبّع يقدّم السلسلة كاملة: المتطلب، والحالات، والنتائج، والـ defects وحالتها.
- **الوفاء بمعايير حوكمة تقنية المعلومات (IT Governance):** المؤسسات التي تلتزم بسياسات حوكمة تحتاج إثبات أن التغييرات مضبوطة ومختبرة، والتتبّع هو هذا الإثبات.
- **تقارير أوضح:** التتبّع يجعل **تقارير تقدّم الاختبار وتقارير إكماله** أسهل فهمًا، لأنها تتضمن **حالة عناصر أساس الاختبار**: «معايير قبول الكوبون الأربعة: واحد نجح، وواحد فشل، وواحد لم يُنفَّذ بعد، وواحد بلا اختبار»، بدل «نُفّذت 37 حالة».
- **تواصل أفضل:** يساعد على **شرح الجوانب التقنية للاختبار لأصحاب المصلحة** بلغة يفهمونها، لأنهم يفكرون بالمتطلبات والمخاطر، لا بأرقام حالات الاختبار.
- **معلومات للتقييم:** يوفّر معلومات لتقييم **جودة المنتج**، و**قدرة العملية (Process Capability)**، و**تقدّم المشروع مقارنة بأهداف العمل**. مثلًا: إذا أظهر التتبّع أن معظم الـ defects ترجع إلى متطلبات غامضة، فهذه معلومة عن قدرة عملية كتابة المتطلبات، لا عن المنتج فقط.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Traceability turns "we ran 300 tests" into "every high-risk requirement is covered, two have open defects, one is not tested yet". That second sentence is what stakeholders can make decisions with.</p><p class="gx-ar" lang="ar" dir="rtl">التتبّع يحوّل جملة «شغّلنا 300 اختبار» إلى «كل متطلب عالي المخاطر مغطّى، اثنان فيهما defects مفتوحة، وواحد لم يُختبر بعد». الجملة الثانية هي ما يستطيع أصحاب المصلحة اتخاذ قرار بناءً عليه.</p></aside>

### كيف يُبنى التتبّع عمليًا — Building It in Practice

لا يحتاج التتبّع إلى جدول ضخم يُحدَّث يدويًا. في فريق التوصيل، كل حالة اختبار تحمل رقم القصة ومعيار القبول الذي تختبره، وكل تقرير defect يُربط بالحالة التي كشفته، ونتائج الـ CI تُربط تلقائيًا بالحالات المؤتمتة. وكل خطر في سجل المخاطر يُربط بالاختبارات التي تخفّفه. بهذه الروابط الصغيرة تستطيع الأداة أن تُنتج المصفوفة في أي لحظة. والقاعدة العملية: أنشئ الرابط في اللحظة التي تنشئ فيها المُخرَج، لأن إضافته لاحقًا تُنسى غالبًا، ولأن التتبّع الناقص يعطي صورة غير صحيحة عن التغطية.

### لا تخلط بين — Don't Confuse

| Trace link | What it tells you |
| --- | --- |
| Test cases → requirements | Are the requirements covered by test cases? |
| Test results → risks | What is the level of residual risk? |
| Requirement → test cases and scripts | What is the impact of a change? |
| Test basis elements → results and defects | What is the status to show in progress and completion reports? |

<section class="gx-lab" data-lab="LAB-1.4.4"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Build a Mini Traceability Matrix</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · ابنِ مصفوفة تتبّع صغيرة</span></span><span class="gx-lab-meta">LAB-1.4.4 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> link requirements, tests, results and defects for one feature and read what the matrix tells you.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> ربط المتطلبات والاختبارات والنتائج والـ defects لميزة واحدة، وقراءة ما تخبرك به المصفوفة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Choose one feature with 4–6 acceptance criteria or requirements.</span><span class="gx-ar" lang="ar" dir="rtl">اختر ميزة فيها 4 إلى 6 معايير قبول أو متطلبات.</span></li><li><span class="gx-en" lang="en" dir="ltr">Make a table with columns: Requirement, Test cases, Last result, Defects.</span><span class="gx-ar" lang="ar" dir="rtl">أنشئ جدولًا بالأعمدة: المتطلب، حالات الاختبار، آخر نتيجة، الـ defects.</span></li><li><span class="gx-en" lang="en" dir="ltr">Fill it from your test management tool and defect tracker.</span><span class="gx-ar" lang="ar" dir="rtl">عبّئه من أداة إدارة الاختبار وأداة متابعة الـ defects.</span></li><li><span class="gx-en" lang="en" dir="ltr">Write three findings: uncovered requirements, requirements with open defects, and what to re-test if one requirement changes tomorrow.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب ثلاث ملاحظات: متطلبات غير مغطّاة، ومتطلبات فيها defects مفتوحة، وما الذي ستعيد اختباره لو تغيّر أحد المتطلبات غدًا.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Every requirement has a row, gaps are visible at a glance, and you can answer a change-impact question in under a minute by reading across one row.</span><span class="gx-ar" lang="ar" dir="rtl">لكل متطلب صف، والفجوات واضحة من النظرة الأولى، وتستطيع الإجابة عن سؤال «ما أثر هذا التغيير؟» في أقل من دقيقة بقراءة صف واحد.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">The exam asks about the value of traceability. If an option mentions coverage, residual risk, impact of changes, audits or understandable reports, it is a valid benefit. Traceability itself does not find defects.</p><p class="gx-ar" lang="ar" dir="rtl">الامتحان يسأل عن قيمة التتبّع. إذا ذكر الخيار التغطية، أو المخاطر المتبقية، أو أثر التغييرات، أو التدقيق، أو وضوح التقارير، فهو فائدة صحيحة. التتبّع بحد ذاته لا يكتشف الـ defects.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Linking only requirements to test cases. Full traceability also links test results and defects, and risks where relevant; without results you cannot judge residual risk.</p><p class="gx-ar" lang="ar" dir="rtl">ربط المتطلبات بحالات الاختبار فقط. التتبّع الكامل يربط أيضًا نتائج الاختبار والـ defects، والمخاطر عند الحاجة؛ وبدون النتائج لا تستطيع تقدير المخاطر المتبقية.</p></aside>

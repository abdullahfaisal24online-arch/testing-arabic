---
order: 10
slug: "1-4-4"
chapter: 1
group: "1.4"
section: "1.4.4"
title: "Traceability between the Test Basis and Testware"
titleAr: "التتبّع بين أساس الاختبار ومخرجاته"
objectives: "FL-1.4.4 · K2"
minutes: 7
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
takeawaysAr:
  - "التتبّع يربط عناصر أساس الاختبار ومخرجات الاختبار ونتائجه والعيوب ببعضها."
  - "يجعل التغطية قابلة للقياس: هل كل المتطلبات مغطّاة بحالات اختبار؟"
  - "ربط النتائج بالمخاطر يُظهر المخاطر المتبقية؛ وربطها بالمتطلبات يُظهر أثر التغييرات."
  - "يدعم التدقيق والحوكمة، ويجعل تقارير الاختبار أسهل فهمًا لأصحاب المصلحة."
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
لكي تكون متابعة الاختبار والتحكم فيه فعّالين، من المهم إنشاء **التتبّع (Traceability)** والحفاظ عليه طوال عملية الاختبار. التتبّع يعني وجود روابط واضحة بين:

- عناصر **أساس الاختبار** (متطلب، قصة مستخدم، خطر).
- **مخرجات الاختبار** المرتبطة بها (شروط الاختبار، حالات الاختبار).
- **نتائج الاختبار**.
- **العيوب** المكتشفة.

### مثال: مصفوفة تتبّع — Example: A Traceability Matrix

| Requirement | Test cases | Last result | Defects |
| --- | --- | --- | --- |
| REQ-01 Login with email | TC-01, TC-02, TC-03 | Passed | — |
| REQ-02 Lock after 5 failed attempts | TC-04, TC-05 | Failed | BUG-117 |
| REQ-03 Password reset by email | TC-06 | Not run | — |
| REQ-04 Login with phone number | — | — | — |

من نظرة واحدة على هذا الجدول تستطيع أن ترى أن REQ-04 بلا أي حالة اختبار، وأن REQ-02 فيه عيب مفتوح، وأن REQ-03 لم يُختبر بعد.

### فوائد التتبّع — Benefits of Traceability

- **قياس التغطية:** التتبّع الجيد يدعم تقييم التغطية. ويفضّل أن تكون معايير التغطية قابلة للقياس، فتصبح مؤشرات أداء (KPIs) تبيّن مدى تحقيق أهداف الاختبار.
- **التأكد من تغطية المتطلبات:** ربط حالات الاختبار بالمتطلبات يبيّن هل كل متطلب مغطّى بحالات اختبار.
- **تقييم المخاطر المتبقية:** ربط نتائج الاختبار بالمخاطر يساعد في تقييم مستوى **المخاطر المتبقية (Residual Risk)** في موضوع الاختبار.
- **تحليل أثر التغيير:** عندما يتغير متطلب، تعرف مباشرة أي حالات الاختبار تحتاج تحديثًا أو إعادة تشغيل.
- **التدقيق والحوكمة:** يسهّل عمليات التدقيق ويساعد في الوفاء بمعايير حوكمة تقنية المعلومات.
- **تقارير أوضح:** يجعل تقارير تقدم الاختبار وإكماله أسهل فهمًا، لأنها تُظهر حالة كل عنصر في أساس الاختبار (متطلبات اختُبرت ونجحت، أو فشلت، أو تنتظر الاختبار).
- **تواصل أفضل:** يساعد على شرح الجوانب التقنية للاختبار لأصحاب المصلحة بلغة مفهومة.
- **تقييم شامل:** يوفر معلومات لتقييم جودة المنتج، وقدرة العملية، وتقدم المشروع مقارنة بأهداف العمل.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Traceability turns "we ran 300 tests" into "every high-risk requirement is covered, two have open defects, one is not tested yet". That second sentence is what stakeholders can make decisions with.</p><p class="gx-ar" lang="ar" dir="rtl">التتبّع يحوّل جملة «شغّلنا 300 اختبار» إلى «كل متطلب عالي المخاطر مغطّى، اثنان فيهما عيوب مفتوحة، وواحد لم يُختبر بعد». الجملة الثانية هي ما يستطيع أصحاب المصلحة اتخاذ قرار بناءً عليه.</p></aside>

<section class="gx-lab" data-lab="LAB-1.4.4"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Build a Mini Traceability Matrix</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · ابنِ مصفوفة تتبّع صغيرة</span></span><span class="gx-lab-meta">LAB-1.4.4 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> link requirements, tests, results and defects for one feature and read what the matrix tells you.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> ربط المتطلبات والاختبارات والنتائج والعيوب لميزة واحدة، وقراءة ما تخبرك به المصفوفة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Choose one feature with 4–6 acceptance criteria or requirements.</span><span class="gx-ar" lang="ar" dir="rtl">اختر ميزة فيها 4 إلى 6 معايير قبول أو متطلبات.</span></li><li><span class="gx-en" lang="en" dir="ltr">Make a table with columns: Requirement, Test cases, Last result, Defects.</span><span class="gx-ar" lang="ar" dir="rtl">أنشئ جدولًا بالأعمدة: المتطلب، حالات الاختبار، آخر نتيجة، العيوب.</span></li><li><span class="gx-en" lang="en" dir="ltr">Fill it from your test management tool and defect tracker.</span><span class="gx-ar" lang="ar" dir="rtl">عبّئه من أداة إدارة الاختبار وأداة متابعة العيوب.</span></li><li><span class="gx-en" lang="en" dir="ltr">Write three findings: uncovered requirements, requirements with open defects, and what to re-test if one requirement changes tomorrow.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب ثلاث ملاحظات: متطلبات غير مغطّاة، ومتطلبات فيها عيوب مفتوحة، وما الذي ستعيد اختباره لو تغيّر أحد المتطلبات غدًا.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Every requirement has a row, gaps are visible at a glance, and you can answer a change-impact question in under a minute by reading across one row.</span><span class="gx-ar" lang="ar" dir="rtl">لكل متطلب صف، والفجوات واضحة من النظرة الأولى، وتستطيع الإجابة عن سؤال «ما أثر هذا التغيير؟» في أقل من دقيقة بقراءة صف واحد.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">The exam asks about the value of traceability. If an option mentions coverage, residual risk, impact of changes, audits or understandable reports, it is a valid benefit. Traceability itself does not find defects or make testing faster.</p><p class="gx-ar" lang="ar" dir="rtl">الامتحان يسأل عن قيمة التتبّع. إذا ذكر الخيار التغطية، أو المخاطر المتبقية، أو أثر التغييرات، أو التدقيق، أو وضوح التقارير، فهو فائدة صحيحة. التتبّع بحد ذاته لا يكتشف العيوب ولا يسرّع الاختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Linking only requirements to test cases. Full traceability also links test results and defects, and risks where relevant; without results you cannot judge residual risk.</p><p class="gx-ar" lang="ar" dir="rtl">ربط المتطلبات بحالات الاختبار فقط. التتبّع الكامل يربط أيضًا نتائج الاختبار والعيوب، والمخاطر عند الحاجة؛ وبدون النتائج لا تستطيع تقدير المخاطر المتبقية.</p></aside>

---
order: 1
slug: "5-1-1"
chapter: 5
group: "5.1"
section: "5.1.1"
title: "Purpose and Content of a Test Plan"
titleAr: "الغرض من خطة الاختبار ومحتواها"
objectives: "FL-5.1.1 · K2"
minutes: 8
lo:
  FL-5.1.1: "Give examples of the purpose and content of a test plan."
loAr:
  FL-5.1.1: "تعطي أمثلة على الغرض من خطة الاختبار ومحتواها."
takeaways:
  - "A test plan describes the objectives, resources and processes for a test project."
  - "It documents the means and schedule for achieving the test objectives, helps ensure activities meet the criteria, serves communication, and shows that testing follows the test policy and strategy."
  - "Planning makes testers think ahead and confront risks, schedules, people, tools, costs and effort."
  - "Typical content: context, assumptions and constraints, stakeholders, communication, risk register, test approach, budget and schedule."
takeawaysAr:
  - "خطة الاختبار تصف الأهداف والموارد والعمليات لمشروع اختبار."
  - "توثّق وسائل تحقيق أهداف الاختبار وجدولها، وتساعد على ضمان التزام الأنشطة بالمعايير، وتخدم التواصل، وتُظهر أن الاختبار يتبع سياسة الاختبار واستراتيجيته."
  - "التخطيط يجعل المختبرين يفكرون مسبقًا ويواجهون المخاطر والجداول والأشخاص والأدوات والتكاليف والجهد."
  - "المحتوى المعتاد: السياق، والافتراضات والقيود، وأصحاب المصلحة، والتواصل، وسجل المخاطر، ونهج الاختبار، والميزانية والجدول الزمني."
terms:
  - en: "Test Approach"
    ar: "نهج الاختبار"
    def: "The way testing is carried out for a specific project: test levels, test types, techniques, deliverables, entry and exit criteria, and more."
    defAr: "طريقة تنفيذ الاختبار لمشروع محدد: المستويات، والأنواع، والتقنيات، والمخرجات، ومعايير الدخول والخروج، وغيرها."
---
**خطة الاختبار (Test Plan)** تصف **الأهداف والموارد والعمليات** لمشروع اختبار.

### الغرض — Purpose

- **توثيق وسائل وجدول** تحقيق أهداف الاختبار.
- المساعدة في التأكد من أن أنشطة الاختبار المنفذة **تحقق المعايير المحددة**.
- **وسيلة تواصل** مع أعضاء الفريق وأصحاب المصلحة الآخرين.
- **إثبات** أن الاختبار سيلتزم بسياسة الاختبار واستراتيجيته الحالية، أو توضيح سبب الانحراف عنهما.

**التخطيط** يوجّه تفكير المختبرين، ويجبرهم على مواجهة التحديات المستقبلية المتعلقة بالمخاطر والجداول والأشخاص والأدوات والتكاليف والجهد وغيرها. إعداد خطة الاختبار طريقة مفيدة للتفكير في الجهد المطلوب لتحقيق أهداف مشروع الاختبار.

### المحتوى المعتاد — Typical Content

| Section | المحتوى |
| --- | --- |
| Context of testing | النطاق، وأهداف الاختبار، والقيود، وأساس الاختبار |
| Assumptions and constraints | افتراضات وقيود مشروع الاختبار |
| Stakeholders | الأدوار والمسؤوليات، وعلاقتهم بالاختبار، واحتياجات التوظيف والتدريب |
| Communication | أشكال التواصل وتكراره وقوالب التوثيق |
| Risk register | مخاطر المنتج ومخاطر المشروع |
| Test approach | مستويات الاختبار، وأنواعه، وتقنياته، ومخرجاته، ومعايير الدخول والخروج، واستقلالية الاختبار، والمقاييس التي ستُجمع، ومتطلبات بيانات وبيئة الاختبار، والانحرافات عن ممارسات المؤسسة |
| Budget and schedule | الميزانية والجدول الزمني |

تفاصيل أكثر عن خطة الاختبار ومحتواها موجودة في معيار **ISO/IEC/IEEE 29119-3**.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A one-page test plan for a small release can still cover the essentials: scope (new loyalty points feature), out of scope (old checkout), risks (points miscalculation), approach (EP and BVA on point thresholds, automated regression on checkout), exit criteria (no open critical defects), schedule (5 days), and who to tell about blockers.</p><p class="gx-ar" lang="ar" dir="rtl">خطة اختبار من صفحة واحدة لإصدار صغير يمكن أن تغطي الأساسيات: النطاق (ميزة نقاط الولاء الجديدة)، وخارج النطاق (عملية الدفع القديمة)، والمخاطر (خطأ في حساب النقاط)، والنهج (EP وBVA على حدود النقاط، وانحدار مؤتمت على الدفع)، ومعايير الخروج (لا عيوب حرجة مفتوحة)، والجدول (5 أيام)، ومن يجب إبلاغه عند العوائق.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: questions often list items and ask which belongs in a test plan. Test levels, techniques, entry/exit criteria, risk register, budget and schedule all do. Actual test results do not; they belong in test reports.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: الأسئلة كثيرًا ما تذكر بنودًا وتسأل أيها ينتمي لخطة الاختبار. مستويات الاختبار، والتقنيات، ومعايير الدخول/الخروج، وسجل المخاطر، والميزانية والجدول كلها تنتمي. أما نتائج الاختبار الفعلية فلا؛ مكانها تقارير الاختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Seeing the test plan as a document written once and forgotten. Planning is about thinking ahead, and the plan is a communication tool that is updated as things change.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار خطة الاختبار وثيقة تُكتب مرة وتُنسى. التخطيط هو تفكير مسبق، والخطة أداة تواصل تُحدَّث كلما تغيّرت الظروف.</p></aside>

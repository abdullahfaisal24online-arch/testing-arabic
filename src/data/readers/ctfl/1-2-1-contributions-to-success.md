---
order: 3
slug: "1-2-1"
chapter: 1
group: "1.2"
section: "1.2.1"
title: "Testing's Contributions to Success"
titleAr: "مساهمة الاختبار في النجاح"
objectives: "FL-1.2.1 · K2"
minutes: 6
lo:
  FL-1.2.1: "Give examples of why testing is necessary."
loAr:
  FL-1.2.1: "تعطي أمثلة توضّح لماذا الاختبار ضروري."
takeaways:
  - "Testing is a cost-effective way to detect defects; removing them (debugging) is what raises quality."
  - "Testing lets you evaluate quality directly and supports decisions such as moving to the next phase or releasing."
  - "Testers represent users indirectly, keeping their needs in view throughout development."
  - "Testing may be required to meet contractual, legal or regulatory requirements."
takeawaysAr:
  - "الاختبار وسيلة فعّالة التكلفة لاكتشاف الـ defects؛ وإزالتها (بالتنقيح) هي ما يرفع الجودة."
  - "الاختبار يسمح بتقييم الجودة مباشرة، ويدعم قرارات مثل الانتقال للمرحلة التالية أو الإطلاق."
  - "المختبرون يمثّلون المستخدمين بشكل غير مباشر، ويبقون احتياجاتهم حاضرة طوال التطوير."
  - "قد يكون الاختبار مطلوبًا للوفاء بمتطلبات تعاقدية أو قانونية أو تنظيمية."
terms:
  - en: "Quality"
    ar: "الجودة"
    def: "The degree to which a work product satisfies stated and implied needs of its stakeholders."
    defAr: "مدى تلبية مُخرَج العمل للاحتياجات المعلنة والضمنية لأصحاب المصلحة."
  - en: "Stakeholder"
    ar: "صاحب المصلحة"
    def: "A person or group with an interest in the system, such as users, customers, managers or regulators."
    defAr: "شخص أو جهة لها مصلحة في النظام، مثل المستخدمين والعملاء والمديرين والجهات الرقابية."
---
لماذا ندفع وقتًا ومالًا على الاختبار؟ لأن الاختبار، بكل أشكاله، يساعد على تحقيق أهداف المشروع المتفق عليها ضمن النطاق والوقت والجودة والميزانية المحددة. ومساهمته لا تقتصر على فريق الاختبار؛ فأي شخص يستخدم مهارات الاختبار يساهم في اقتراب المشروع من النجاح.

### أربع مساهمات رئيسية — Four Main Contributions

<figure class="gx-figure gx-spectrum" aria-label="How testing contributes to project success."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Detect defects</b><span>A cost-effective way to find defects, so they can be removed.</span></div><div class="gx-spectrum-item"><b>Evaluate quality</b><span>Direct measurement of quality at different SDLC stages.</span></div><div class="gx-spectrum-item"><b>Represent users</b><span>Keep users' needs in view throughout development.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Meet obligations</b><span>Satisfy contractual, legal or regulatory requirements.</span></div></div><figcaption>How testing contributes to project success.</figcaption></figure>

### اكتشاف الـ defects بتكلفة معقولة — Cost-Effective Defect Detection

الاختبار وسيلة فعّالة من حيث التكلفة لاكتشاف الـ defects. بعد اكتشافها تُزال عبر **التنقيح**، وهو نشاط ليس من الاختبار. لذلك يقال إن الاختبار يساهم **بشكل غير مباشر** في رفع جودة موضوع الاختبار: هو يكشف، والتنقيح يصلح، والنتيجة منتج أفضل.

### تقييم الجودة ودعم القرارات — Evaluating Quality

الاختبار يتيح تقييم جودة موضوع الاختبار مباشرة في مراحل مختلفة من دورة حياة التطوير. هذه المعلومات تُستخدم ضمن إدارة المشروع لدعم قرارات مثل:

- هل ننتقل إلى المرحلة التالية من التطوير؟
- هل المنتج جاهز للإطلاق؟

بدون اختبار، تُتخذ هذه القرارات بناءً على الانطباع والتخمين.

### تمثيل المستخدمين — Representing Users

المستخدمون غالبًا لا يحضرون اجتماعات الفريق اليومية. الاختبار يمنحهم **تمثيلًا غير مباشر** في المشروع: المختبرون يتأكدون من أن فهمهم لاحتياجات المستخدمين حاضر طوال دورة التطوير.

البديل، وهو إشراك عيّنة ممثّلة من المستخدمين في المشروع بشكل دائم، غالبًا غير ممكن بسبب التكلفة العالية وصعوبة توفّر المستخدمين المناسبين.

### الالتزامات والمتطلبات — Contractual, Legal and Regulatory Needs

في بعض المجالات يكون الاختبار مطلوبًا رسميًا، للوفاء بمتطلبات تعاقدية أو قانونية أو للالتزام بمعايير تنظيمية. أنظمة الأجهزة الطبية والطيران والقطاع المالي أمثلة واضحة على ذلك.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Before a release decision, a product manager asks: "Can we go live on Sunday?" A test report showing that all high-risk payment scenarios passed, with two low-priority known issues, turns that question from a guess into an informed decision.</p><p class="gx-ar" lang="ar" dir="rtl">قبل قرار الإطلاق، يسأل مدير المنتج: «هل نستطيع الإطلاق يوم الأحد؟». تقرير اختبار يُظهر نجاح كل سيناريوهات الدفع عالية المخاطر، مع مشكلتين معروفتين منخفضتي الأولوية، يحوّل السؤال من تخمين إلى قرار مدروس.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">For this K2 objective, be ready to match a scenario to a contribution. Note the wording: testing contributes to quality indirectly, because removing defects is done by debugging.</p><p class="gx-ar" lang="ar" dir="rtl">في هذا الهدف من مستوى K2، كن جاهزًا لربط موقف معيّن بنوع المساهمة. وانتبه للصياغة: الاختبار يساهم في الجودة بشكل غير مباشر، لأن إزالة الـ defects تتم بالتنقيح.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Saying testing "improves quality" by itself. Testing finds defects and gives information; the quality improves only when someone acts on that information and fixes the defects.</p><p class="gx-ar" lang="ar" dir="rtl">القول إن الاختبار «يحسّن الجودة» بحد ذاته. الاختبار يجد الـ defects ويقدّم معلومات؛ والجودة تتحسن فقط عندما يتصرف أحد بناءً على هذه المعلومات ويصلح الـ defects.</p></aside>

---
order: 13
slug: "5-3-2"
chapter: 5
group: "5.3"
section: "5.3.2"
title: "Purpose, Content and Audience for Test Reports"
titleAr: "الغرض من تقارير الاختبار ومحتواها وجمهورها"
objectives: "FL-5.3.2 · K2"
minutes: 7
lo:
  FL-5.3.2: "Summarise the purposes, content and audiences for test reports."
loAr:
  FL-5.3.2: "تلخّص أغراض تقارير الاختبار ومحتواها وجمهورها."
takeaways:
  - "Test reporting summarises and communicates test information during and after testing."
  - "Test progress reports support ongoing test control, are produced regularly, and include the period, progress, impediments, metrics, new or changed risks and the plan for the next period."
  - "Test completion reports summarise a completed stage when exit criteria are met; they include the summary, quality evaluation against the plan, deviations, impediments, metrics, unmitigated risks and unfixed defects, and lessons learned."
  - "Different audiences need different information and formality; ISO/IEC/IEEE 29119-3 has templates."
takeawaysAr:
  - "تقارير الاختبار تلخّص معلومات الاختبار وتوصلها خلاله وبعده."
  - "تقارير التقدّم تدعم التحكم المستمر، وتصدر بانتظام، وتشمل الفترة، والتقدّم، والعوائق، والمقاييس، والمخاطر الجديدة أو المتغيرة، وخطة الفترة القادمة."
  - "تقارير الإكمال تلخّص مرحلة مكتملة عند تحقق معايير الخروج؛ وتشمل الملخص، وتقييم الجودة مقارنة بالخطة، والانحرافات، والعوائق، والمقاييس، والمخاطر غير المخففة والـ defects غير المصلحة، والدروس المستفادة."
  - "الجماهير المختلفة تحتاج معلومات ودرجة رسمية مختلفة؛ ومعيار ISO/IEC/IEEE 29119-3 فيه قوالب."
terms:
  - en: "Test Progress Report"
    ar: "تقرير تقدّم الاختبار"
    def: "A regular report on the progress of testing, used to support ongoing test control."
    defAr: "تقرير دوري عن تقدّم الاختبار، يُستخدم لدعم التحكم المستمر في الاختبار."
    match: ["Test Progress Report", "test progress report", "test progress reports"]
  - en: "Test Completion Report"
    ar: "تقرير إكمال الاختبار"
    def: "A report summarising a completed test stage, prepared when its exit criteria are met."
    defAr: "تقرير يلخّص مرحلة اختبار مكتملة، يُعدّ عند تحقق معايير خروجها."
    match: ["Test Completion Report", "test completion report"]
---
**تقارير الاختبار** تلخّص معلومات الاختبار وتوصلها **أثناءه وبعده**.

### تقرير تقدّم الاختبار — Test Progress Report

- يدعم **التحكم المستمر** في الاختبار.
- يجب أن يوفّر معلومات كافية لتعديل جدول الاختبار أو الموارد أو خطة الاختبار، عندما تكون هذه التعديلات مطلوبة بسبب انحراف عن الخطة أو تغيّر الظروف.
- يصدر **بانتظام**: يوميًا، أو أسبوعيًا، وغيرها.

محتواه المعتاد:

- **فترة الاختبار.**
- **تقدّم الاختبار** (مثل: متقدّم أو متأخر عن الجدول)، مع أي انحرافات ملحوظة.
- **عوائق الاختبار** وحلولها البديلة.
- **مقاييس الاختبار** (القسم 5.3.1).
- **المخاطر الجديدة والمتغيرة** خلال الفترة.
- **الاختبار المخطط للفترة القادمة.**

### تقرير إكمال الاختبار — Test Completion Report

- **يلخّص مرحلة اختبار محددة** (مستوى اختبار، أو دورة، أو مشروع).
- يُعدّ خلال **إكمال الاختبار**، عندما يكتمل مستوى أو دورة أو مشروع، ويُفضّل عند **تحقق معايير الخروج**.
- يستخدم تقارير التقدّم وبيانات أخرى.

محتواه المعتاد:

- **ملخص الاختبار.**
- **تقييم الاختبار وجودة المنتج** بناءً على خطة الاختبار الأصلية (أهداف الاختبار ومعايير الخروج).
- **الانحرافات عن الخطة** (مثل الاختلاف عن الجدول والمدة والجهد المخطط).
- **عوائق الاختبار** وحلولها البديلة.
- **مقاييس الاختبار** المبنية على تقارير التقدّم.
- **المخاطر غير المخففة**، والـ defects غير المصلحة.
- **الدروس المستفادة** المتعلقة بالاختبار.

### الجمهور — Audience

جماهير مختلفة تحتاج **معلومات مختلفة** في التقارير، وتؤثر على **درجة رسميتها** وتكرارها:

- التقارير لزملاء الفريق نفسه غالبًا متكررة وغير رسمية.
- التقارير عن مشروع مكتمل تتبع قالبًا محددًا وتصدر مرة واحدة.

معيار **ISO/IEC/IEEE 29119-3** يتضمن قوالب وأمثلة لتقارير التقدّم (تسمّى فيه تقارير حالة الاختبار) وتقارير الإكمال.

<figure class="gx-figure gx-spectrum" aria-label="Progress report vs completion report."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Test progress report</b><span>During testing, regularly. Supports ongoing control. Includes next period's plan.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Test completion report</b><span>At the end of a stage, when exit criteria are met. Evaluates against the plan. Includes lessons learned.</span></div></div><figcaption>Progress report vs completion report.</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">"Testing planned for the next period" → progress report. "Lessons learned" and "evaluation against the original plan's exit criteria" → completion report.</p><p class="gx-ar" lang="ar" dir="rtl">«الاختبار المخطط للفترة القادمة» ← تقرير التقدّم. «الدروس المستفادة» و«التقييم مقارنة بمعايير الخروج في الخطة الأصلية» ← تقرير الإكمال.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Sending the same detailed report to every audience. Executives need a short risk-and-decision view; the team needs details. Tailor content and formality to the reader.</p><p class="gx-ar" lang="ar" dir="rtl">إرسال التقرير التفصيلي نفسه لكل الجماهير. الإدارة العليا تحتاج نظرة قصيرة عن المخاطر والقرارات؛ والفريق يحتاج التفاصيل. كيّف المحتوى ودرجة الرسمية حسب القارئ.</p></aside>

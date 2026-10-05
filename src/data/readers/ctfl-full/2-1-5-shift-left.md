---
order: 5
slug: "2-1-5"
chapter: 2
group: "2.1"
section: "2.1.5"
title: "Shift Left"
titleAr: "النقل لليسار"
objectives: "FL-2.1.5 · K2"
minutes: 6
lo:
  FL-2.1.5: "Explain the shift-left approach."
loAr:
  FL-2.1.5: "تشرح نهج النقل لليسار."
takeaways:
  - "Shift left means testing earlier in the SDLC; it applies the 'early testing saves time and money' principle."
  - "It does not mean neglecting testing later in the SDLC."
  - "Practices: review specifications from a tester's view, write test cases before code, use CI/CD with automated component tests, run static analysis before dynamic testing, and start non-functional testing at component level."
  - "It may cost more training, effort or money early on, but is expected to save effort and cost later; stakeholder buy-in is important."
takeawaysAr:
  - "النقل لليسار يعني الاختبار في وقت أبكر من دورة حياة التطوير؛ وهو تطبيق لمبدأ «الاختبار المبكر يوفّر الوقت والمال»."
  - "لا يعني إهمال الاختبار في المراحل اللاحقة."
  - "ممارساته: مراجعة المواصفات من منظور المختبر، وكتابة حالات الاختبار قبل الشيفرة، وCI/CD مع اختبارات مكوّنات مؤتمتة، وتحليل ساكن قبل الاختبار الديناميكي، وبدء الاختبار غير الوظيفي على مستوى المكوّنات."
  - "قد يكلّف تدريبًا أو جهدًا أو مالًا في البداية، لكنه يُتوقع أن يوفّر لاحقًا؛ ودعم أصحاب المصلحة مهم."
terms:
  - en: "Shift Left"
    ar: "النقل لليسار"
    def: "An approach where testing is performed earlier in the software development lifecycle."
    defAr: "نهج يُنفَّذ فيه الاختبار في وقت أبكر من دورة حياة تطوير البرمجيات."
    match: ["Shift Left", "shift left", "shift-left"]
  - en: "Static Analysis"
    ar: "التحليل الساكن"
    def: "The evaluation of a work product, such as code, by a tool without executing it."
    defAr: "تقييم مُخرَج عمل، مثل الشيفرة، بواسطة أداة دون تشغيله."
    match: ["Static Analysis", "static analysis"]
---
تخيّل دورة حياة التطوير كخط زمني من اليسار (البداية: المتطلبات) إلى اليمين (النهاية: الإطلاق). **النقل لليسار (Shift Left)** يعني تحريك الاختبار نحو بداية هذا الخط، أي **الاختبار في وقت أبكر**.

النقل لليسار تطبيق مباشر لمبدأ **الاختبار المبكر يوفّر الوقت والمال**. لكنه **لا يعني إهمال الاختبار في المراحل اللاحقة**؛ بل يعني إضافة اختبار مبكر إليها.

<figure class="gx-figure" aria-label="Shift left moves testing towards the start of the lifecycle."><div class="gx-flow-row"><span class="gx-flow-node gx-flow-node--accent">Requirements<small>review specs</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Design<small>test cases first</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Code<small>static analysis, CI</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Integration</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Release</span></div><figcaption>Shift left moves testing towards the start of the lifecycle.</figcaption></figure>

### ممارسات جيدة للنقل لليسار — Good Practices

- **مراجعة المواصفات من منظور الاختبار.** هذه المراجعات غالبًا تكشف عيوبًا محتملة مثل الغموض والنقص والتناقض.
- **كتابة حالات الاختبار قبل كتابة الشيفرة**، وتشغيل الشيفرة في أداة اختبار (Test Harness) أثناء تنفيذها.
- **استخدام CI، والأفضل CD**، لأنه يأتي بتغذية راجعة سريعة واختبارات مكوّنات مؤتمتة مع كل تسليم للشيفرة.
- **إكمال التحليل الساكن للشيفرة قبل الاختبار الديناميكي**، أو كجزء من عملية مؤتمتة.
- **إجراء الاختبار غير الوظيفي بدءًا من مستوى اختبار المكوّنات** حيثما أمكن. هذا نوع من النقل لليسار، لأن هذه الاختبارات تُنفَّذ عادة متأخرًا عندما يكتمل النظام وتتوفر بيئة اختبار ممثّلة.

### التكلفة والدعم — Cost and Buy-in

قد يتطلب النقل لليسار **تدريبًا أو جهدًا أو تكاليف إضافية** في المراحل المبكرة، لكن يُتوقع أن **يوفّر الجهد والتكلفة** في المراحل اللاحقة. لذلك من المهم أن يقتنع أصحاب المصلحة بهذا المفهوم ويدعموه.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A team measures the response time of the search API with a simple performance test at component level, two months before system testing. They find an unindexed query early, when the fix takes one hour instead of a week of late investigation.</p><p class="gx-ar" lang="ar" dir="rtl">فريق يقيس زمن استجابة واجهة البحث (API) باختبار أداء بسيط على مستوى المكوّنات، قبل اختبار النظام بشهرين. يكتشفون استعلامًا بلا فهرس مبكرًا، فيأخذ إصلاحه ساعة بدل أسبوع من التحقيق المتأخر.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">A common distractor: "shift left means moving all testing to the beginning". Wrong. It means doing more testing earlier, not dropping later testing.</p><p class="gx-ar" lang="ar" dir="rtl">خيار مضلل شائع: «النقل لليسار يعني نقل كل الاختبار إلى البداية». خطأ. يعني اختبارًا أكثر في وقت أبكر، لا إلغاء الاختبار اللاحق.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking non-functional testing must wait for a complete system. Where possible, it can start at component level, and that is itself a shift-left practice.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار غير الوظيفي يجب أن ينتظر اكتمال النظام. حيثما أمكن، يمكن أن يبدأ على مستوى المكوّنات، وهذا بحد ذاته ممارسة نقل لليسار.</p></aside>

---
order: 13
slug: "5-3-2"
chapter: 5
group: "5.3"
section: "5.3.2"
title: "Purpose, Content and Audience for Test Reports"
titleAr: "الغرض من تقارير الاختبار ومحتواها وجمهورها"
objectives: "FL-5.3.2 · K2"
minutes: 13
lo:
  FL-5.3.2: "Summarise the purposes, content and audiences for test reports."
loAr:
  FL-5.3.2: "تلخّص أغراض تقارير الاختبار ومحتواها وجمهورها."
takeaways:
  - "Test reporting summarises and communicates test information during and after testing."
  - "Test progress reports support ongoing test control, are produced regularly, and include the period, progress, impediments, metrics, new or changed risks and the plan for the next period."
  - "Test completion reports summarise a completed stage, ideally when its exit criteria have been met; they include the summary, quality evaluation against the plan, deviations, impediments, metrics, unmitigated risks and unfixed defects, and lessons learned."
  - "Different audiences need different information and formality; ISO/IEC/IEEE 29119-3 has templates."
takeawaysAr:
  - "تقارير الاختبار تلخّص معلومات الاختبار وتوصلها خلاله وبعده."
  - "تقارير التقدّم تدعم التحكم المستمر، وتصدر بانتظام، وتشمل الفترة، والتقدّم، والعوائق، والمقاييس، والمخاطر الجديدة أو المتغيرة، وخطة الفترة القادمة."
  - "تقارير الإكمال تلخّص مرحلة مكتملة، ويُفضَّل أن يكون ذلك عند تحقق معايير الخروج؛ وتشمل الملخص، وتقييم الجودة مقارنة بالخطة، والانحرافات، والعوائق، والمقاييس، والمخاطر غير المخففة والـ defects غير المصلحة، والدروس المستفادة."
  - "الجماهير المختلفة تحتاج معلومات ودرجة رسمية مختلفة؛ ومعيار ISO/IEC/IEEE 29119-3 فيه قوالب."
terms:
  - en: "Test Progress Report"
    ar: "تقرير تقدّم الاختبار"
    def: "A regular report on the progress of testing, used to support ongoing test control."
    defAr: "تقرير دوري عن تقدّم الاختبار، يُستخدم لدعم التحكم المستمر في الاختبار."
    match: ["Test Progress Report", "test progress report", "test progress reports"]
  - en: "Test Completion Report"
    ar: "تقرير إكمال الاختبار"
    def: "A report summarising a completed test stage, prepared when the stage is complete and, ideally, its exit criteria have been met."
    defAr: "تقرير يلخّص مرحلة اختبار مكتملة، يُعدّ عند اكتمال المرحلة، ويُفضَّل أن يكون ذلك بعد تحقق معايير خروجها."
    match: ["Test Completion Report", "test completion report"]
---
المقاييس (القسم 5.3.1) أرقام خام، و**تقارير الاختبار (Test Reports)** هي التي تحوّلها إلى رسالة يفهمها من يحتاجها. **إعداد تقارير الاختبار (Test Reporting)** يلخّص معلومات الاختبار ويوصلها **أثناء الاختبار وبعده**. ولذلك يوجد نوعان رئيسيان من التقارير، لكل منهما غرض مختلف:

- **تقارير تقدّم الاختبار (Test Progress Reports):** تدعم **التحكم المستمر** في الاختبار. ويجب أن توفّر **معلومات كافية لتعديل جدول الاختبار أو موارده أو خطته**، عندما تكون هذه التعديلات مطلوبة بسبب **انحراف عن الخطة** أو **تغيّر الظروف**.
- **تقارير إكمال الاختبار (Test Completion Reports):** **تلخّص نشاط اختبار محددًا** (مثل مستوى اختبار، أو دورة اختبار، أو تكرار)، ويمكن أن تقدّم معلومات **للاختبار اللاحق**.

### تقرير تقدّم الاختبار — Test Progress Report

أثناء **مراقبة الاختبار والتحكم فيه**، يُعدّ فريق الاختبار تقارير التقدّم **لإبقاء أصحاب المصلحة على اطلاع**. وتصدر عادة **بانتظام**: يوميًا، أو أسبوعيًا، أو غير ذلك. محتواها المعتاد، مع سبب وجود كل بند:

1. **فترة الاختبار:** حتى يعرف القارئ أي أيام يغطي التقرير.
2. **تقدّم الاختبار** (متقدّم أو متأخر عن الجدول)، **مع أي انحرافات ملحوظة:** هذا قلب التقرير، لأنه يقول هل نحتاج إلى تدخّل.
3. **عوائق الاختبار وحلولها البديلة (Workarounds):** ما يعطّل الفريق، وكيف يتجاوزه مؤقتًا.
4. **مقاييس الاختبار:** أرقام تدعم الحكم على التقدّم.
5. **المخاطر الجديدة والمتغيرة خلال الفترة:** لأن المخاطر تتحرك، والتحكم يحتاج آخر صورة لها.
6. **الاختبار المخطط للفترة القادمة:** حتى يعرف الجميع ما سيحدث بعد ذلك.

**مثال: تقرير التقدّم الأسبوعي لتطبيق التوصيل**

| Item | Content |
| --- | --- |
| Testing period | Sprint 14, week 1 (5–9 Oct) |
| Progress | Behind schedule by about 1 day: 182 of 240 test cases run (76%, plan was 85%) |
| Impediments and workarounds | Payment gateway sandbox down 1.5 days; workaround: a mock gateway for UI tests |
| Metrics | 9 failed tests; 27 defects found, 21 fixed, 4 high-priority open; requirements coverage 88% |
| New and changed risks | New: the gateway announced an API change next month. Changed: coupon risk raised after 6 defects in one module |
| Planned for next period | Finish payment tests, rerun coupon regression, exploratory session on the Arabic UI |

لاحظ كيف يخدم هذا التقرير **التحكم**: من يقرؤه يرى انحرافًا (76% بدل 85%)، ويرى سببه (تعطّل بيئة بوابة الدفع)، ويرى خطرًا تغيّر (الكوبونات). هذه معلومات كافية ليقرر مالك المنتج ومدير الاختبار تعديلًا: مثلًا نقل اختبار المحفظة إلى الـ sprint التالي، أو طلب مختبر إضافي يومين. تقرير يقول «الاختبار يسير جيدًا» دون أرقام أو أسباب لا يتيح أي قرار، فهو لا يحقق غرضه.

### تقرير إكمال الاختبار — Test Completion Report

يُعدّ تقرير الإكمال خلال **إكمال الاختبار**، عندما يكتمل **مشروع**، أو **مستوى اختبار**، أو **نوع اختبار**، وعندما تكون **معايير الخروج قد تحققت** في الحالة المثالية. وهو **يستخدم تقارير التقدّم** وبيانات أخرى. محتواه المعتاد:

1. **ملخص الاختبار:** ماذا اختُبر، وعلى أي إصدار.
2. **تقييم الاختبار وجودة المنتج بناءً على خطة الاختبار الأصلية**، أي **أهداف الاختبار ومعايير الخروج:** هل حققنا ما وعدنا به؟
3. **الانحرافات عن خطة الاختبار:** الاختلاف عن الجدول والمدة والجهد المخطط.
4. **عوائق الاختبار وحلولها البديلة.**
5. **مقاييس الاختبار المبنية على تقارير التقدّم.**
6. **المخاطر غير المخففة والـ defects غير المصلحة:** ما يجب أن يعرفه من يقرر الإصدار، لأنه سيُطلق المنتج وهي موجودة.
7. **الدروس المستفادة المتعلقة بالاختبار:** حتى يكون الإصدار القادم أفضل.

**مثال: تقرير إكمال اختبار النظام للإصدار 3.2**

| Item | Content |
| --- | --- |
| Test summary | System testing of release 3.2 (coupons, wallet payment), build 3.2.0 (412), 2 sprints |
| Evaluation against the plan | 4 of 5 exit criteria met (including "0 open high-priority defects" after the last fix, and requirements coverage 97% vs target 95%); not met: "performance tests executed for all payment methods" |
| Deviations | 3 days late due to the sandbox outage; effort 310 h vs 260 h planned |
| Impediments and workarounds | Sandbox outage; mock gateway used, then real gateway tests repeated |
| Metrics | 512 tests run, 98% passed; 61 defects found, 57 fixed; DDP to be measured after 30 days in production |
| Unmitigated risks, defects not fixed | Wallet top-up under load not performance-tested; 4 low-severity UI defects deferred to 3.3 |
| Lessons learned | Agree a sandbox SLA with the gateway; start coupon decision tables during refinement |

هذا التقرير يجيب عن سؤال مختلف: **ماذا نعرف الآن عن جودة الإصدار 3.2، وماذا بقي دون معالجة؟** بند «المخاطر غير المخففة» يخبر من يقرر الإطلاق أن تعبئة المحفظة تحت الضغط لم تُختبر، فيستطيع أن يقبل هذا الخطر بوعي أو أن يؤجل الإطلاق. ويقدّم التقرير **معلومات للاختبار اللاحق**: اختبار أداء المحفظة يصبح أول مهمة في خطة الإصدار 3.3، والدروس المستفادة تدخل في التخطيط القادم. ولاحظ أن معظم الأرقام هنا لم تُجمع من جديد، بل جاءت من **تقارير التقدّم** المتتالية.

### الجمهور — Audience

الجماهير المختلفة تحتاج **معلومات مختلفة** في التقارير، وتؤثر على **درجة رسميتها** و**تكرارها**. تقارير التقدّم لزملاء **الفريق نفسه** تكون غالبًا **متكررة وغير رسمية**، أما تقرير الإكمال **فيتبع قالبًا محددًا ويصدر مرة واحدة**.

السبب أن كل قارئ يتخذ قرارات مختلفة. المطوّر يريد أن يعرف أي اختبار فشل وعلى أي بناء ليصلحه اليوم، فتكفيه رسالة قصيرة في قناة الفريق. والإدارة لا تحتاج قائمة الاختبارات الفاشلة، بل تحتاج أن تعرف هل المنتج جاهز للإطلاق وما الخطر الذي ستتحمله إن أطلقته. وكلما ابتعد القارئ عن الفريق، زادت الحاجة إلى صيغة رسمية ثابتة يمكن الرجوع إليها لاحقًا.

| Audience | What they need | Form |
| --- | --- | --- |
| Scrum team | Failed tests, blocking defects, today's plan | Daily, informal |
| Product owner | Story readiness, open risks, scope decisions | Each sprint, short |
| Management | Go / no-go, residual risks, cost and schedule | At milestones, formal |

ويتضمن المعيار **ISO/IEC/IEEE 29119-3** قوالب وأمثلة لتقارير التقدّم، ويسمّيها **تقارير حالة الاختبار (Test Status Reports)**، ولتقارير إكمال الاختبار.

<figure class="gx-figure gx-spectrum" aria-label="Progress report vs completion report."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Test progress report</b><span>During testing, regularly. Supports ongoing control. Includes next period's plan.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Test completion report</b><span>At the end of a stage, ideally when exit criteria are met. Evaluates against the plan. Includes lessons learned.</span></div></div><figcaption>Progress report vs completion report.</figcaption></figure>

### لا تخلط بين — Don't Confuse

| | Test progress report | Test completion report |
| --- | --- | --- |
| When | Regularly during testing | Once, at test completion |
| Purpose | Support ongoing test control | Summarise a finished test activity, inform later testing |
| Looks forward to | Testing planned for the next period | Lessons learned for future projects |
| Unique content | New and changed risks in the period | Evaluation against the original plan; unmitigated risks and unfixed defects |
| Formality | Often informal within the team | Follows a set template |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">"Testing planned for the next period" → progress report. "Lessons learned" and "evaluation against the original plan's exit criteria" → completion report.</p><p class="gx-ar" lang="ar" dir="rtl">«الاختبار المخطط للفترة القادمة» ← تقرير التقدّم. «الدروس المستفادة» و«التقييم مقارنة بمعايير الخروج في الخطة الأصلية» ← تقرير الإكمال.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Sending the same detailed report to every audience. Executives need a short risk-and-decision view; the team needs details. Tailor content and formality to the reader.</p><p class="gx-ar" lang="ar" dir="rtl">إرسال التقرير التفصيلي نفسه لكل الجماهير. الإدارة العليا تحتاج نظرة قصيرة عن المخاطر والقرارات؛ والفريق يحتاج التفاصيل. كيّف المحتوى ودرجة الرسمية حسب القارئ.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake · shared items</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع · بنود مشتركة</span></p><p class="gx-en" lang="en" dir="ltr">Impediments with workarounds and test metrics appear in both reports. Do not use them to tell the two apart; look for next-period plans (progress) or lessons learned and evaluation against the plan (completion).</p><p class="gx-ar" lang="ar" dir="rtl">العوائق مع حلولها البديلة ومقاييس الاختبار موجودة في التقريرين معًا، فلا تستخدمها للتمييز بينهما؛ ابحث عن خطة الفترة القادمة (تقدّم) أو الدروس المستفادة والتقييم مقارنة بالخطة (إكمال).</p></aside>

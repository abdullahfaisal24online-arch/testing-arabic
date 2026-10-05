---
order: 9
slug: "2-2-3"
chapter: 2
group: "2.2"
section: "2.2.3"
title: "Confirmation Testing and Regression Testing"
titleAr: "اختبار التأكيد واختبار الانحدار"
objectives: "FL-2.2.3 · K2"
minutes: 6
lo:
  FL-2.2.3: "Tell confirmation testing and regression testing apart."
loAr:
  FL-2.2.3: "تميّز بين اختبار التأكيد واختبار الانحدار."
takeaways:
  - "Confirmation testing checks that an original defect has been fixed."
  - "Regression testing checks that a change has not caused adverse effects elsewhere: in the same component, other components or connected systems."
  - "Impact analysis helps decide the scope of regression testing."
  - "Regression suites run many times and grow over time, so they are strong candidates for automation, ideally in CI."
  - "Both apply at all test levels whenever defects are fixed or changes are made."
takeawaysAr:
  - "اختبار التأكيد يتحقق من أن العيب الأصلي تم إصلاحه."
  - "اختبار الانحدار يتحقق من أن التغيير لم يسبب آثارًا سلبية في مكان آخر: في المكوّن نفسه، أو مكوّنات أخرى، أو أنظمة مرتبطة."
  - "تحليل الأثر يساعد في تحديد نطاق اختبار الانحدار."
  - "مجموعات الانحدار تُشغَّل مرات كثيرة وتكبر مع الوقت، فهي مرشّحة قوية للأتمتة، ويفضّل ضمن CI."
  - "الاثنان ينطبقان في كل مستويات الاختبار عند إصلاح العيوب أو إجراء تغييرات."
terms:
  - en: "Impact Analysis"
    ar: "تحليل الأثر"
    def: "Identifying the consequences of a change, to help decide the scope of testing such as regression testing."
    defAr: "تحديد عواقب التغيير، للمساعدة في تحديد نطاق الاختبار مثل اختبار الانحدار."
    match: ["Impact Analysis", "impact analysis"]
---
عندما يُجرى تغيير على النظام، سواء لإصلاح عيب أو إضافة وظيفة أو تعديل موجودة، يجب اختباره. هناك نوعان من الاختبار المرتبط بالتغيير.

<figure class="gx-figure gx-spectrum" aria-label="Two kinds of change-related testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Confirmation testing</b><span>Was the original defect fixed? Looks at the fix itself.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Regression testing</b><span>Did the change break anything else? Looks around the fix.</span></div></div><figcaption>Two kinds of change-related testing.</figcaption></figure>

### اختبار التأكيد — Confirmation Testing

يتأكد من أن **العيب الأصلي تم إصلاحه بنجاح**. حسب الخطورة، يمكن اختبار النسخة المصلحة بعدة طرق:

- تنفيذ **كل حالات الاختبار** التي فشلت سابقًا بسبب العيب.
- **إضافة اختبارات جديدة** لتغطية أي تغييرات احتاجها الإصلاح.

لكن عند ضيق الوقت أو المال، قد يقتصر اختبار التأكيد على **تنفيذ الخطوات التي تعيد إنتاج العطل** والتحقق من أنه لم يعد يحدث.

### اختبار الانحدار — Regression Testing

يتأكد من أن التغيير، بما في ذلك الإصلاح الذي خضع لاختبار التأكيد، **لم يسبب آثارًا سلبية**. هذه الآثار قد تظهر في:

- **المكوّن نفسه** الذي تم تغييره.
- **مكوّنات أخرى** في النظام نفسه.
- **أنظمة أخرى مرتبطة** به.

ولا يقتصر اختبار الانحدار على موضوع الاختبار نفسه، بل قد يشمل **البيئة** أيضًا. يُنصح بإجراء **تحليل الأثر (Impact Analysis)** أولًا لتحسين نطاق اختبار الانحدار، أي لمعرفة الأجزاء التي قد تتأثر بالتغيير.

### الانحدار والأتمتة — Regression and Automation

مجموعات اختبار الانحدار **تُشغَّل مرات كثيرة**، وعدد حالاتها **يزداد** مع كل دورة أو إصدار. لذلك هي **مرشّحة قوية للأتمتة**، ويُفضّل أن تبدأ أتمتتها مبكرًا في المشروع. وعند استخدام CI كما في DevOps، من الممارسات الجيدة تضمين اختبارات انحدار مؤتمتة، على المستويات المناسبة.

اختبار التأكيد و/أو الانحدار مطلوبان **في كل مستويات الاختبار** عند إصلاح العيوب أو إجراء التغييرات.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A fix changes how VAT is rounded. Confirmation: re-run the failing invoice test with 0.005 values and check the total. Regression (after impact analysis): re-run invoice PDF generation, monthly reports and the accounting export, because they all use the same rounding function.</p><p class="gx-ar" lang="ar" dir="rtl">إصلاح يغيّر طريقة تقريب ضريبة القيمة المضافة. التأكيد: إعادة تشغيل اختبار الفاتورة الذي فشل بقيم 0.005 والتحقق من المجموع. الانحدار (بعد تحليل الأثر): إعادة تشغيل توليد فواتير PDF، والتقارير الشهرية، وتصدير المحاسبة، لأنها كلها تستخدم دالة التقريب نفسها.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Keywords: "fixed", "resolved", "re-run the failed test" → confirmation. "Unchanged areas", "side effects", "other parts still work" → regression.</p><p class="gx-ar" lang="ar" dir="rtl">كلمات مفتاحية: «أُصلح»، «حُلّ»، «أعد تشغيل الاختبار الذي فشل» ← تأكيد. «المناطق التي لم تتغير»، «آثار جانبية»، «الأجزاء الأخرى ما زالت تعمل» ← انحدار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming regression testing only covers the changed component. It also covers other components, connected systems, and even the environment.</p><p class="gx-ar" lang="ar" dir="rtl">الافتراض بأن اختبار الانحدار يغطي المكوّن الذي تغيّر فقط. هو يغطي أيضًا مكوّنات أخرى، وأنظمة مرتبطة، وحتى البيئة.</p></aside>

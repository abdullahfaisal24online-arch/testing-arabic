---
order: 9
slug: "2-2-3"
chapter: 2
group: "2.2"
section: "2.2.3"
title: "Confirmation Testing and Regression Testing"
titleAr: "اختبار التأكيد واختبار الانحدار"
objectives: "FL-2.2.3 · K2"
minutes: 12
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
  - "Depending on risk, confirmation testing can re-run all tests that failed because of the defect and add new tests for the fix; when time or money is short, it may be limited to repeating the steps that reproduce the failure."
takeawaysAr:
  - "اختبار التأكيد يتحقق من أن الـ defect الأصلي تم إصلاحه."
  - "اختبار الانحدار يتحقق من أن التغيير لم يسبب آثارًا سلبية في مكان آخر: في المكوّن نفسه، أو مكوّنات أخرى، أو أنظمة مرتبطة."
  - "تحليل الأثر يساعد في تحديد نطاق اختبار الانحدار."
  - "مجموعات الانحدار تُشغَّل مرات كثيرة وتكبر مع الوقت، فهي مرشّحة قوية للأتمتة، ويفضّل ضمن CI."
  - "الاثنان ينطبقان في كل مستويات الاختبار عند إصلاح الـ defects أو إجراء تغييرات."
  - "حسب المخاطر، قد يعيد اختبار التأكيد تشغيل كل الاختبارات التي فشلت بسبب الـ defect ويضيف اختبارات جديدة للإصلاح؛ وعند ضيق الوقت أو المال قد يقتصر على تكرار الخطوات التي تعيد إنتاج العطل."
terms:
  - en: "Impact Analysis"
    ar: "تحليل الأثر"
    def: "Identifying the consequences of a change, to help decide the scope of testing such as regression testing."
    defAr: "تحديد عواقب التغيير، للمساعدة في تحديد نطاق الاختبار مثل اختبار الانحدار."
    match: ["Impact Analysis", "impact analysis"]
---
البرمجيات تتغير باستمرار. يقول المنهج إن التغييرات تُجرى عادة على المكوّن أو النظام لأحد سببين: **تحسينه بإضافة ميزة جديدة**، أو **إصلاحه بإزالة defect**. وفي الحالتين يجب أن يشمل الاختبار **اختبار التأكيد (confirmation testing)** و**اختبار الانحدار (regression testing)**. الأول ينظر إلى **مكان الإصلاح نفسه**، والثاني ينظر إلى **ما حوله**.

<figure class="gx-figure gx-spectrum" aria-label="Two kinds of change-related testing."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Confirmation testing</b><span>Was the original defect fixed? Looks at the fix itself.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Regression testing</b><span>Did the change break anything else? Looks around the fix.</span></div></div><figcaption>Two kinds of change-related testing.</figcaption></figure>

### اختبار التأكيد — Confirmation Testing

**اختبار التأكيد** **يتأكد من أن الـ defect الأصلي تم إصلاحه بنجاح**. المطوّر يقول «أصلحته»، واختبار التأكيد هو الدليل. وحسب **المخاطر**، يمكن اختبار النسخة المصلحة بعدة طرق، منها:

- **تنفيذ كل الاختبارات التي فشلت سابقًا بسبب الـ defect**. فإذا كان الـ defect قد أفشل ثلاثة اختبارات، تُعاد الثلاثة كلها، لا واحد منها فقط.
- **إضافة اختبارات جديدة لتغطية أي تغييرات احتاجها الإصلاح**. فالإصلاح نفسه شيفرة جديدة، وقد يحتاج اختبارات لم تكن موجودة.

لكن **عندما يكون الوقت أو المال ضيقًا**، قد يقتصر اختبار التأكيد على **تنفيذ خطوات الاختبار التي يُفترض أن تعيد إنتاج العطل الذي سببه الـ defect، والتحقق من أن العطل لم يعد يحدث**. هذا أقل ما يمكن فعله، ويُلجأ إليه عندما يكون الوقت أو المال ضيقًا.

مثال: الزبون الذي طلب بقيمة 20.00 دينارًا دُفعت عليه رسوم توصيل 1.50. بعد الإصلاح، يعيد المختبر الطلب نفسه بقيمة 20.00 ويتحقق من أن التوصيل صار مجانيًا؛ هذا هو الحد الأدنى. وإذا كانت المخاطر أعلى، يعيد كل الاختبارات التي فشلت بسبب الـ defect، مثل اختبار دالة الرسوم واختبار الإيصال لطلب بقيمة 20.00، ويضيف اختبارًا جديدًا يغطي المقارنة التي عدّلها المطوّر في الشيفرة.

### اختبار الانحدار — Regression Testing

**اختبار الانحدار** **يتأكد من أن التغيير لم يسبب عواقب سلبية**، **بما في ذلك الإصلاح الذي اجتاز اختبار التأكيد**. أي أن نجاح التأكيد لا يكفي: الإصلاح قد يحل المشكلة هنا ويكسر شيئًا هناك. ولا يقتصر اختبار الانحدار على الإصلاحات؛ فإضافة ميزة جديدة، مثل الدفع بالمحفظة الرقمية، تستدعيه أيضًا، لأن الشيفرة الجديدة تلمس أجزاء قائمة. وهذه العواقب السلبية قد تصيب:

- **المكوّن نفسه** الذي تغيّر: تعديل حد التوصيل المجاني كسر حساب الرسوم للطلبات الصغيرة.
- **مكوّنات أخرى في النظام نفسه**: الإيصال في تطبيق الزبون صار يعرض مجموعًا مختلفًا عن لوحة المطعم.
- **أنظمة أخرى مرتبطة**: المبلغ المرسل إلى بوابة الدفع صار خاطئًا.

و**قد لا يقتصر اختبار الانحدار على موضوع الاختبار نفسه، بل قد يرتبط أيضًا بالبيئة**: تحديث نظام التشغيل أو مكتبة أو إعدادات الخادم يتطلب التحقق من أن التطبيق ما زال يعمل.

### تحليل الأثر — Impact Analysis

لا يمكن إعادة اختبار كل شيء بعد كل تغيير صغير، ولا يصح إعادة اختبار المكوّن المتغير وحده. لذلك **يُنصح بإجراء تحليل الأثر (impact analysis) أولًا لتحديد مدى اختبار الانحدار**. **تحليل الأثر يُظهر أي أجزاء البرمجية قد تتأثر** بالتغيير. مثلًا: تعديل دالة حساب المجموع يؤثر على السلة، والكوبونات، ورسوم التوصيل، والإيصال، والمبلغ المرسل لبوابة الدفع، لكنه لا يؤثر على شاشة تتبع السائق. بهذه النتيجة يختار الفريق اختبارات الانحدار التي تستحق التشغيل، فلا يضيع وقتًا في أجزاء بعيدة عن التغيير، ولا يترك جزءًا متأثرًا بلا فحص. وكلما كانت البنية المعمارية واضحة والتتبع بين المتطلبات والاختبارات جيدًا، كان تحليل الأثر أسرع وأدق.

### الانحدار والأتمتة — Regression and Automation

**مجموعات اختبار الانحدار تُشغَّل مرات كثيرة**، و**يزداد عدد حالاتها عادة مع كل دورة أو إصدار**، لأن كل ميزة جديدة تضيف اختباراتها إلى المجموعة. لهذين السببين **اختبار الانحدار مرشّح قوي للأتمتة**: تكرار يدوي لمئات الاختبارات كل أسبوعين مكلف وممل ومعرّض للخطأ. و**يجب أن تبدأ الأتمتة مبكرًا في المشروع**، لا بعد أن تتراكم مئات الحالات اليدوية.

**وحيث يُستخدم CI، كما في DevOps** (القسم 2.1.4)، **من الممارسات الجيدة تضمين اختبارات انحدار مؤتمتة** فيه. و**حسب الحالة، قد يشمل ذلك اختبارات انحدار على مستويات اختبار مختلفة**: اختبارات مكوّنات مع كل Commit، واختبارات نظام ليلية مثلًا.

### في كل المستويات — At All Test Levels

**اختبار التأكيد و/أو الانحدار لموضوع الاختبار مطلوبان في كل مستويات الاختبار**، متى **أُصلحت defects و/أو أُجريت تغييرات على هذه المستويات**. إصلاح في دالة يحتاج تأكيدًا وانحدارًا على مستوى المكوّنات، وإصلاح في واجهة بوابة الدفع يحتاجهما على مستوى تكامل الأنظمة.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Defect: orders of exactly 20.00 JOD were charged a 1.50 delivery fee. Confirmation: re-run all tests that failed for a 20.00 order (fee function and receipt) and add a test for the corrected comparison. Regression (after impact analysis): re-run the automated suites for cart totals, coupons, receipts and the payment-gateway amount, because they all use the same total calculation; the driver-tracking tests are not needed.</p><p class="gx-ar" lang="ar" dir="rtl">الـ defect: الطلبات بقيمة 20.00 دينارًا بالضبط تُحمَّل رسوم توصيل 1.50. التأكيد: إعادة كل الاختبارات التي فشلت لطلب بقيمة 20.00 (دالة الرسوم والإيصال)، وإضافة اختبار للمقارنة المصحّحة. الانحدار (بعد تحليل الأثر): إعادة مجموعات الاختبار المؤتمتة لمجموع السلة والكوبونات والإيصالات والمبلغ المرسل لبوابة الدفع، لأنها كلها تستخدم حساب المجموع نفسه؛ أما اختبارات تتبع السائق فلا حاجة لها.</p></aside>

### لا تخلط بين — Don't Confuse

| | Confirmation testing | Regression testing |
| --- | --- | --- |
| Question | Is the original defect fixed? | Did the change break anything else? |
| Where it looks | The fix itself | Same component, other components, connected systems, environment |
| Trigger | A defect fix | Any change: fix, new feature, environment change |
| Typical tests | Tests that failed + new tests for the fix | Existing tests of unchanged areas, chosen by impact analysis |
| Automation | Sometimes | Strong candidate |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Keywords: "fixed", "resolved", "re-run the failed test" → confirmation. "Unchanged areas", "side effects", "other parts still work" → regression.</p><p class="gx-ar" lang="ar" dir="rtl">كلمات مفتاحية: «أُصلح»، «حُلّ»، «أعد تشغيل الاختبار الذي فشل» ← تأكيد. «المناطق التي لم تتغير»، «آثار جانبية»، «الأجزاء الأخرى ما زالت تعمل» ← انحدار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming regression testing only covers the changed component. It also covers other components, connected systems, and even the environment.</p><p class="gx-ar" lang="ar" dir="rtl">الافتراض بأن اختبار الانحدار يغطي المكوّن الذي تغيّر فقط. هو يغطي أيضًا مكوّنات أخرى، وأنظمة مرتبطة، وحتى البيئة.</p></aside>

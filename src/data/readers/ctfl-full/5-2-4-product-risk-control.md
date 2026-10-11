---
order: 11
slug: "5-2-4"
chapter: 5
group: "5.2"
section: "5.2.4"
title: "Product Risk Control"
titleAr: "التحكم في مخاطر المنتج"
objectives: "FL-5.2.4 · K2"
minutes: 14
lo:
  FL-5.2.4: "Explain what measures can be taken in response to analysed product risks."
loAr:
  FL-5.2.4: "تشرح الإجراءات الممكنة استجابة لمخاطر المنتج بعد تحليلها."
takeaways:
  - "Product risk control covers all measures taken in response to identified and assessed risks: risk mitigation and risk monitoring."
  - "Mitigation applies the actions proposed in risk assessment to reduce the risk level; monitoring checks that mitigation works, improves the assessment and spots emerging risks."
  - "Response options include mitigation by testing, risk acceptance, risk transfer and a contingency plan."
  - "Mitigation by testing: choose testers with the right skills, the right independence, reviews and static analysis, suitable techniques and coverage, suitable test types, and dynamic testing including regression testing."
  - "Testing lowers the risk level because defects it finds are fixed before release; what remains afterwards is the residual risk, tracked by risk monitoring."
takeawaysAr:
  - "التحكم في مخاطر المنتج يشمل كل الإجراءات المتخذة استجابة للمخاطر المحددة والمقيّمة: تخفيف المخاطر ومراقبتها."
  - "التخفيف يطبّق الإجراءات المقترحة في التقييم لخفض مستوى الخطر؛ والمراقبة تتحقق من فعالية التخفيف، وتحسّن التقييم، وتكتشف المخاطر الناشئة."
  - "خيارات الاستجابة تشمل التخفيف بالاختبار، وقبول الخطر، ونقله، وخطة طوارئ."
  - "التخفيف بالاختبار: اختيار مختبرين بالمهارات المناسبة، والاستقلالية المناسبة، والمراجعات والتحليل الساكن، والتقنيات والتغطية المناسبة، وأنواع الاختبار المناسبة، والاختبار الديناميكي بما فيه اختبار الانحدار."
  - "الاختبار يخفض مستوى الخطر لأن الـ defects التي يكشفها تُصلَح قبل الإصدار؛ وما يبقى بعد ذلك هو المخاطر المتبقية التي تتابعها مراقبة المخاطر."
terms:
  - en: "Risk Mitigation"
    ar: "تخفيف المخاطر"
    def: "Implementing the actions proposed in risk assessment to reduce the risk level."
    defAr: "تنفيذ الإجراءات المقترحة في تقييم المخاطر لخفض مستوى الخطر."
  - en: "Risk Monitoring"
    ar: "مراقبة المخاطر"
    def: "Ensuring that mitigation actions are effective, obtaining information to improve risk assessment, and identifying emerging risks."
    defAr: "التأكد من فعالية إجراءات التخفيف، والحصول على معلومات لتحسين تقييم المخاطر، واكتشاف المخاطر الناشئة."
  - en: "Contingency Plan"
    ar: "خطة الطوارئ"
    def: "A prepared set of actions to take if a risk occurs, to limit its impact."
    defAr: "مجموعة إجراءات مُعدّة مسبقًا تُنفَّذ إذا وقع الخطر، للحد من أثره."
    match: ["Contingency Plan", "contingency plan"]
---
تحليل المخاطر (القسم 5.2.3) يقول لنا **أين** الخطر وكم هو كبير. أما **التحكم في مخاطر المنتج (Product Risk Control)** فهو ما **نفعله** بعد ذلك: يشمل **كل الإجراءات المتخذة استجابة لمخاطر المنتج المحددة والمقيّمة**. قائمة مخاطر جميلة لا يتبعها تصرف لا تحمي أحدًا.

يتكوّن التحكم من مكوّنين:

- **تخفيف المخاطر (Risk Mitigation):** **تنفيذ الإجراءات المقترحة في تقييم المخاطر** بهدف **خفض مستوى الخطر**. التقييم اقترح، والتخفيف ينفّذ.
- **مراقبة المخاطر (Risk Monitoring):** متابعة مستمرة لها ثلاثة أهداف، نشرحها أدناه.

### تخفيف المخاطر — Risk Mitigation

كيف يخفض الاختبار مستوى الخطر وهو لا يغيّر الشيفرة؟ الاختبار يكشف الـ defects فتُصلَح قبل الإصدار، فتنخفض **احتمالية** وقوع العطل عند المستخدم. وحتى عندما لا يجد الاختبار defects، فإنه يزيد معرفتنا بالمنتج، فنقدّر الخطر بثقة أكبر. مثال: خطر «حساب رسوم التوصيل خاطئ عند 20.00 دينارًا» كان مستواه 9. بعد اختبار BVA وإصلاح defect واحد ونجاح كل الاختبارات، يقدّر الفريق الاحتمالية بـ 1 بدل 3، فيصبح المستوى **3 بدل 9**: هذه هي **المخاطر المتبقية**.

### مراقبة المخاطر — Risk Monitoring

لمراقبة المخاطر ثلاثة أهداف:

1. **التأكد من فعالية إجراءات التخفيف:** هل نفّذنا ما خططنا له، وهل انخفض الخطر فعلًا؟ إذا استمرت اختبارات الكوبونات في كشف defects جديدة في كل بناء، فالتخفيف لم ينجح بعد.
2. **الحصول على معلومات إضافية لتحسين تقييم المخاطر:** بيانات الإنتاج قد تكشف أن 40% من الطلبات تُدفع بالمحفظة الرقمية، لا 10% كما افترضنا، فيرتفع أثر مخاطر المحفظة ويُعاد ترتيبها.
3. **اكتشاف المخاطر الناشئة (Emerging Risks):** مخاطر لم تكن في القائمة: إصدار جديد من نظام iOS، أو تغيير في واجهة بوابة الدفع، أو قانون جديد لحماية البيانات.

| | Risk mitigation | Risk monitoring |
| --- | --- | --- |
| Question | What do we do to reduce the risk? | Is it working, and what has changed? |
| Input | Actions proposed in risk assessment | Test results, defects, production data, news |
| Output | Lower risk level | Updated assessment, new risks, corrected actions |
| Example | 3-value BVA on the fee threshold | Watching the fee-related complaints after release |

### خيارات الاستجابة — Response Options

بعد تحليل الخطر، هناك عدة **خيارات للاستجابة** (Veenendaal 2012)، ويمكن الجمع بينها:

<figure class="gx-figure gx-spectrum" aria-label="Possible responses to an analysed product risk."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Mitigation by testing</b><span>Reduce the risk level through testing.</span></div><div class="gx-spectrum-item"><b>Risk acceptance</b><span>Accept the risk as it is.</span></div><div class="gx-spectrum-item"><b>Risk transfer</b><span>Move the risk to someone else, e.g. insurance or a supplier contract.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Contingency plan</b><span>Prepare what to do if the risk happens.</span></div></div><figcaption>Possible responses to an analysed product risk.</figcaption></figure>

| Option | Delivery-app example |
| --- | --- |
| Mitigation by testing | Card charged twice on a gateway timeout: integration tests with timeout simulation |
| Risk acceptance | Arabic text slightly truncated on very old Android screens: level 2, accepted and documented |
| Risk transfer | Storing card numbers: card data is entered on the payment provider's hosted page, so the provider carries this risk by contract |
| Contingency plan | Maps service down: drivers see the written address and a "call customer" button; a feature flag can disable wallet payment within minutes |

**قبول الخطر** ليس إهمالًا، بل قرار واعٍ حين تكون كلفة المعالجة أكبر من الضرر المتوقع. و**خطة الطوارئ** لا تخفض الاحتمالية، لكنها تقلل **الأثر** إذا وقع الخطر.

### التخفيف بالاختبار — Mitigation by Testing

يذكر السيليبس ستة إجراءات لتخفيف مخاطر المنتج بالاختبار:

1. **اختيار مختبرين بالخبرة والمهارات المناسبة لنوع الخطر:** مخاطر الدفع يتولاها مختبر عمل سابقًا مع بوابات الدفع، ومخاطر إمكانية الوصول يتولاها من يعرف قارئات الشاشة.
2. **تطبيق مستوى مناسب من استقلالية الاختبار:** كلما ارتفع الخطر زادت الحاجة إلى عين مستقلة؛ لذا يُكلَّف فريق أمن خارجي باختبار اختراق لمسار الدفع، بينما يكفي أن يختبر المطوّرون شاشة الإعدادات.
3. **إجراء المراجعات والتحليل الساكن:** مراجعة معايير قبول قصة الكوبونات قبل البرمجة، وتشغيل أداة تحليل ساكن تكشف ثغرات حقن SQL في واجهات الطلبات. هذا يمنع الـ defect قبل أن يولد.
4. **تطبيق تقنيات الاختبار ومستويات التغطية المناسبة:** جدول قرار بتغطية 100% لقواعد الكوبونات، وBVA بثلاث قيم لحدّي 5.00 و20.00 دينار.
5. **تطبيق أنواع الاختبار التي تعالج خصائص الجودة المتأثرة:** خطر البطء في ذروة الجمعة يعالجه **اختبار الأداء**، وخطر تسرّب البيانات يعالجه **اختبار الأمن**، وخطر صعوبة الاستخدام يعالجه **اختبار قابلية الاستخدام**.
6. **إجراء الاختبار الديناميكي، بما فيه اختبار الانحدار:** تنفيذ الاختبارات فعليًا على البرنامج، وتشغيل حزمة انحدار مؤتمتة لحساب المجموع في خط CI مع كل commit، حتى لا يعود خطر خُفّض سابقًا بعد تغيير جديد.

### خطوات التعامل مع خطر محلَّل — Step by Step

1. **ابدأ من نتيجة التقييم:** مستوى الخطر وفئته وطرق المعالجة المقترحة.
2. **اختر خيار الاستجابة** أو مزيجًا منها: الخطر العالي يحتاج غالبًا تخفيفًا بالاختبار مع خطة طوارئ، والمنخفض قد يُقبل.
3. **إذا اخترت الاختبار، فحدّد الإجراءات الستة المناسبة:** من يختبر، وبأي استقلالية، وهل نراجع أولًا، وبأي تقنية وتغطية، وبأي نوع اختبار، ومتى نشغّل الانحدار.
4. **نفّذ** الإجراءات (هذا هو التخفيف).
5. **راقب** النتائج، وحدّث المستوى، وأضف المخاطر الناشئة إلى القائمة؛ ثم عُد إلى الخطوة الأولى في التكرار التالي.

### مثال متكامل: خطر واحد من البداية للنهاية — End-to-End Example

| Step | Content |
| --- | --- |
| Risk | Card charged twice when the payment gateway times out (L 2, I 4, level 8) |
| Response | Mitigation by testing + contingency plan |
| Mitigation actions | Payments-experienced tester; review of retry logic; integration tests with simulated timeouts; regression in CI |
| Contingency | Daily reconciliation job that refunds duplicates automatically |
| Monitoring | Duplicate-charge count per day after release; new risk spotted: the gateway changes its API version next quarter |
| Residual level | L 1, I 4 → 4 |

لاحظ ثلاثة أمور في هذا المثال. أولًا، الاختبار خفّض **الاحتمالية** فقط، أما **الأثر** فبقي 4 لأن الخصم المزدوج سيظل مؤذيًا إن وقع. ثانيًا، خطة الطوارئ هي التي تحدّ من هذا الأثر المتبقي. ثالثًا، المراقبة لم تكتفِ بمتابعة الخطر القديم، بل اكتشفت خطرًا ناشئًا سيدخل تحليل المخاطر في الإصدار القادم. هكذا تعمل الدورة: تحليل، ثم تحكم، ثم تحليل من جديد.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Risk: "International card payments may fail." Mitigation by testing: a tester experienced in payments, system integration tests with the payment provider's sandbox, and regression tests on every release. Contingency plan: if payments fail in production, switch to a backup provider within an hour. Monitoring: watch the payment failure rate daily after launch.</p><p class="gx-ar" lang="ar" dir="rtl">الخطر: «قد تفشل مدفوعات البطاقات الدولية». التخفيف بالاختبار: مختبر ذو خبرة في المدفوعات، واختبارات تكامل أنظمة مع بيئة الاختبار لمزوّد الدفع، واختبارات انحدار في كل إصدار. خطة الطوارئ: إذا فشلت المدفوعات في الإنتاج، يُحوَّل لمزوّد احتياطي خلال ساعة. المراقبة: متابعة نسبة فشل المدفوعات يوميًا بعد الإطلاق.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember the two components (mitigation and monitoring) and the four response options (mitigation by testing, acceptance, transfer, contingency plan). Questions often ask which action is mitigation by testing.</p><p class="gx-ar" lang="ar" dir="rtl">تذكّر المكوّنين (التخفيف والمراقبة) وخيارات الاستجابة الأربعة (التخفيف بالاختبار، والقبول، والنقل، وخطة الطوارئ). الأسئلة كثيرًا ما تسأل أي إجراء هو تخفيف بالاختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking testing is the only response to a product risk. Accepting, transferring or preparing a contingency plan are also valid responses.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار هو الاستجابة الوحيدة لخطر المنتج. القبول والنقل وإعداد خطة طوارئ استجابات صحيحة أيضًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake · monitoring</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع · المراقبة</span></p><p class="gx-en" lang="en" dir="ltr">Thinking risk monitoring only checks known risks. It has three aims: confirm mitigation is effective, improve the risk assessment, and identify emerging risks.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن مراقبة المخاطر تتابع المخاطر المعروفة فقط. لها ثلاثة أهداف: التأكد من فعالية التخفيف، وتحسين تقييم المخاطر، واكتشاف المخاطر الناشئة.</p></aside>

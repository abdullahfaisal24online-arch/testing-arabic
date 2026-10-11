---
order: 5
slug: "2-1-5"
chapter: 2
group: "2.1"
section: "2.1.5"
title: "Shift Left"
titleAr: "النقل لليسار"
objectives: "FL-2.1.5 · K2"
minutes: 11
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
تخيّل دورة حياة التطوير خطًا زمنيًا يبدأ من اليسار بالمتطلبات، وينتهي في اليمين بالإطلاق والتشغيل. تقليديًا كان الاختبار يتكدّس في الطرف الأيمن: ننتظر اكتمال الشيفرة ثم نختبر. **النقل لليسار (Shift Left)** يعني دفع الاختبار نحو الطرف الأيسر، أي **إجراء الاختبار في وقت أبكر من دورة الحياة**.

<figure class="gx-figure" aria-label="Shift left moves testing towards the start of the lifecycle."><div class="gx-flow-row"><span class="gx-flow-node gx-flow-node--accent">Requirements<small>review specs</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Design<small>test cases first</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Code<small>static analysis, CI</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Integration</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Release</span></div><figcaption>Shift left moves testing towards the start of the lifecycle.</figcaption></figure>

### النقل لليسار والاختبار المبكر — Shift Left and Early Testing

يقول المنهج إن **مبدأ الاختبار المبكر** (القسم 1.3) **يُسمّى أحيانًا النقل لليسار**، لأنه نهج يُنفَّذ فيه الاختبار في وقت أبكر. والفكرة الأساسية أن الاختبار **لا ينتظر** حتى تُكتب الشيفرة، ولا ينتظر حتى تُدمج المكوّنات. والسبب اقتصادي قبل أن يكون تقنيًا: الـ defect الذي يُكتشف في مسودة المتطلبات يُصلح بتعديل جملة، أما إذا وصل إلى الإنتاج فقد يكلّف شيفرة جديدة، وإعادة اختبار، وإصدارًا عاجلًا، وزبائن غاضبين.

لكن انتبه: النقل لليسار **لا يعني إهمال الاختبار في المراحل اللاحقة**. اختبار النظام واختبار القبول يبقيان ضروريين؛ كل ما في الأمر أننا نضيف اختبارًا مبكرًا يقلل ما يصل إليهما من defects.

### خمس ممارسات للنقل لليسار — Five Good Practices

**1. مراجعة المواصفات من منظور المختبر.** المختبر يقرأ المواصفة وهو يسأل: «كيف سأختبر هذا؟». هذه المراجعات **كثيرًا ما تكشف defects محتملة** مثل **الغموض** و**النقص** و**التناقض**. مثال: قصة تقول «التوصيل مجاني للطلبات الكبيرة» غامضة (كم هو «كبير»؟)، وقصة الإلغاء التي لا تذكر استرداد المبلغ ناقصة، وقاعدة تسمح بالإلغاء «في أي وقت» تتناقض مع حالات الطلب التي تمنعه بعد Out for delivery.

**2. كتابة حالات الاختبار قبل الشيفرة، وتشغيل الشيفرة في أداة تشغيل اختبار (test harness) أثناء تنفيذها.** هذا جوهر الأساليب التي تبدأ بالاختبار مثل TDD (القسم 2.1.3). المطوّر يعرف الهدف قبل أن يبدأ، ويرى فورًا هل وصل إليه. وأداة تشغيل الاختبار (test harness) هي البيئة التي تضم البدائل (stubs) والمشغّلات (drivers) اللازمة لتشغيل جزء من الشيفرة قبل أن تكتمل الأجزاء التي يعتمد عليها؛ فمكوّن حساب السعر يمكن اختباره قبل وجود بوابة الدفع الحقيقية.

**3. استخدام CI، والأفضل CD.** لأنهما يأتيان **بتغذية راجعة سريعة** و**اختبارات مكوّنات مؤتمتة ترافق الشيفرة عند تسليمها إلى المستودع**. كل Commit في تطبيق التوصيل يُختبر خلال دقائق، فلا يتراكم الخطأ.

**4. إكمال التحليل الساكن للشيفرة قبل الاختبار الديناميكي، أو كجزء من عملية مؤتمتة.** أداة التحليل الساكن تكشف متغيرًا لم يُعرَّف، أو ثغرة أمنية معروفة، دون تشغيل الشيفرة أصلًا، أي قبل أن يضيع وقت المختبر في عطل سببه خطأ بسيط. وعندما يكون التحليل جزءًا من الخط المؤتمت، لا يعتمد على تذكّر أحد لتشغيله، بل يحدث مع كل تغيير.

**5. إجراء الاختبار غير الوظيفي بدءًا من مستوى اختبار المكوّنات حيثما أمكن.** هذا شكل من النقل لليسار لأن الاختبارات غير الوظيفية **تميل إلى أن تُنفَّذ متأخرًا**، عندما يكتمل النظام وتتوفر **بيئة اختبار ممثّلة**. لكن بعضها يمكن البدء به مبكرًا: قياس زمن استجابة دالة البحث عن المطاعم وحدها، قبل أن يكتمل التطبيق بأشهر.

### مثال متكامل: قصة الكوبونات — One Story, Shifted Left

لنتتبع قصة «تطبيق كوبون على الطلب» في تطبيق التوصيل لنرى الممارسات الخمس معًا:

| When | Shift-left activity | What it catches |
| --- | --- | --- |
| Story draft | Tester reviews the story | Can two coupons be combined? (answer: one coupon per order) |
| Before coding | Tests for percentage, fixed amount and expired coupon written first | Missing rule for a coupon expiring today |
| Every commit | CI runs component tests and static analysis | Discount applied twice after a refactor |
| Component level | Response time of the coupon API measured | Slow database lookup |
| Later | System and acceptance testing still run | End-to-end issues, user's view |

لاحظ الصف الأخير: النقل لليسار لم يلغِ الاختبار اللاحق، بل جعله يبدأ بعدد أقل من الـ defects، فيركّز المختبران في اختبار النظام على رحلة الزبون الكاملة بدل اصطياد أخطاء كان يمكن منعها قبل أسابيع. وهذا هو المعنى الحقيقي للنقل لليسار: توزيع الاختبار على طول الخط، لا تكديسه في أحد طرفيه.

### الثمن والمكسب — Cost Now, Savings Later

النقل لليسار **قد يتطلب تدريبًا أو جهدًا أو تكاليف إضافية في بداية العملية**: تدريب المطوّرين على كتابة الاختبارات، وإعداد خط CI، ووقت المختبر في المراجعات. لكنه **يُتوقع أن يوفّر الجهد والتكاليف لاحقًا**، لأن الـ defects تُكتشف حين يكون إصلاحها رخيصًا.

ولهذا يؤكد المنهج أنه **من المهم أن يقتنع أصحاب المصلحة بالمفهوم ويدعموه**. مدير يرى فقط أن الـ sprint الأول صار أبطأ قد يلغي المبادرة قبل أن تظهر ثمارها، ما لم يفهم أن التكلفة المبكرة استثمار. ودعم أصحاب المصلحة يظهر عمليًا في منح الفريق وقتًا للمراجعات والأتمتة ضمن خطة الـ sprint، لا مطالبته بها فوق عمله المعتاد.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In the delivery app, a developer adds a simple performance check to the restaurant-search component: 1,000 restaurants must be filtered in under 200 ms. It fails in the first sprint because of an unindexed query. The fix takes one hour, instead of a week of investigation if it had been found in system testing before a store release.</p><p class="gx-ar" lang="ar" dir="rtl">في تطبيق التوصيل، يضيف مطوّر فحص أداء بسيطًا لمكوّن البحث عن المطاعم: يجب تصفية 1000 مطعم في أقل من 200 ميلي ثانية. يفشل الفحص في الـ sprint الأول بسبب استعلام بلا فهرس. يأخذ الإصلاح ساعة، بدل أسبوع من التحقيق لو اكتُشف في اختبار النظام قبيل الإصدار إلى المتاجر.</p></aside>

### لا تخلط بين — Don't Confuse

| Statement | Shift left? |
| --- | --- |
| Testers review a draft user story | Yes |
| Static analysis runs on every commit | Yes |
| Performance check at component level | Yes |
| Skipping system testing because unit tests exist | No: later testing is not neglected |
| Waiting for the full system before any testing | No: the opposite |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">A common distractor: "shift left means moving all testing to the beginning". Wrong. It means doing more testing earlier, not dropping later testing.</p><p class="gx-ar" lang="ar" dir="rtl">خيار مضلل شائع: «النقل لليسار يعني نقل كل الاختبار إلى البداية». خطأ. يعني اختبارًا أكثر في وقت أبكر، لا إلغاء الاختبار اللاحق.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking non-functional testing must wait for a complete system. Where possible, it can start at component level, and that is itself a shift-left practice.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار غير الوظيفي يجب أن ينتظر اكتمال النظام. حيثما أمكن، يمكن أن يبدأ على مستوى المكوّنات، وهذا بحد ذاته ممارسة نقل لليسار.</p></aside>

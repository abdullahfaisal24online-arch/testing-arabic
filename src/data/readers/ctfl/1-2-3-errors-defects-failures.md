---
order: 5
slug: "1-2-3"
chapter: 1
group: "1.2"
section: "1.2.3"
title: "Errors, Defects, Failures, and Root Causes"
titleAr: "الأخطاء والـ defects والأعطال والأسباب الجذرية"
objectives: "FL-1.2.3 · K2"
minutes: 11
lo:
  FL-1.2.3: "Distinguish between a root cause, an error, a defect and a failure."
loAr:
  FL-1.2.3: "تميّز بين السبب الجذري والخطأ والـ defect والعطل."
labs: ["LAB-1.2.3"]
takeaways:
  - "People make errors, errors produce defects, and defects may lead to failures."
  - "A defect can sit in code, requirements, test scripts or any other work product."
  - "Not every defect causes a failure; some only fail in specific conditions and some never do."
  - "Failures can also come from environmental conditions, not only from defects."
  - "A root cause is the fundamental reason behind a problem; addressing it can prevent similar defects or reduce how often they occur."
  - "Defects in early work products, such as requirements, often lead to defective work products later in the lifecycle."
takeawaysAr:
  - "الإنسان يرتكب خطأ، والخطأ ينتج defect، والـ defect قد يؤدي إلى عطل."
  - "الـ defect قد يكون في الشيفرة أو المتطلبات أو الـ test scripts أو أي مُخرَج عمل آخر."
  - "ليس كل defect يسبب عطلًا؛ بعضها يظهر في ظروف محددة فقط، وبعضها لا يظهر أبدًا."
  - "الأعطال قد تنتج أيضًا عن ظروف بيئية، لا عن الـ defects فقط."
  - "السبب الجذري هو السبب الأساسي وراء المشكلة؛ ومعالجته قد تمنع defects مشابهة أو تقلل تكرارها."
  - "الـ defects في مخرجات العمل المبكرة، كالمتطلبات، تؤدي غالبًا إلى مخرجات فيها defects لاحقًا في دورة الحياة."
terms:
  - en: "Error"
    ar: "الخطأ"
    def: "A human action that produces an incorrect result. Also called a mistake."
    defAr: "تصرّف بشري ينتج عنه نتيجة غير صحيحة. ويسمّى أيضًا «غلطة» (Mistake)."
    match: ["Error", "error", "mistake"]
  - en: "Defect"
    ar: "الـ defect"
    def: "An imperfection or deficiency in a work product where it does not meet its requirements. Also called a fault or bug."
    defAr: "نقص أو خلل في مُخرَج عمل يجعله لا يحقق متطلباته. ويسمّى أيضًا Fault أو Bug."
    match: ["Defect", "defect", "bug", "fault"]
  - en: "Failure"
    ar: "العطل"
    def: "An event in which a component or system does not perform a required function within specified limits."
    defAr: "حدث لا يؤدي فيه مكوّن أو نظام وظيفة مطلوبة ضمن الحدود المحددة."
    match: ["Failure", "failure"]
  - en: "Root Cause"
    ar: "السبب الجذري"
    def: "A source of a defect such that if it is removed, the occurrence of the defect type is decreased or removed."
    defAr: "مصدر الـ defect الذي إذا أُزيل، يقل ظهور هذا النوع من الـ defects أو يختفي."
    match: ["Root Cause", "root cause"]
  - en: "Root Cause Analysis"
    ar: "تحليل السبب الجذري"
    def: "An analysis technique aimed at identifying the root causes of defects, typically performed when a failure occurs or a defect is identified."
    defAr: "تحليل يهدف إلى تحديد الأسباب الجذرية للـ defects، ويُجرى عادة عند حدوث عطل أو اكتشاف defect."
    match: ["Root Cause Analysis", "root cause analysis"]
---
أربعة مصطلحات تتكرر في كل مكان، وفي الامتحان أيضًا: **الخطأ** و**الـ defect** و**العطل** و**السبب الجذري**. في الحياة اليومية يستخدمها الناس بالتبادل، فيقولون «في التطبيق خطأ» ويقصدون أي شيء. لكن المنهج يفرّق بينها بدقة، لأن لكل منها **مكانًا مختلفًا** و**علاجًا مختلفًا**: الخطأ يقع في رأس إنسان، والـ defect يقع في مُخرَج عمل، والعطل يقع أثناء التشغيل، والسبب الجذري يقع في الظروف التي جعلت الخطأ ممكنًا.

### السلسلة — The Chain

<figure class="gx-figure" aria-label="From root cause to failure: each link causes the next."><div class="gx-flow-row"><span class="gx-flow-node">Root cause<small>why it happened</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Error<small>human mistake</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Defect<small>in a work product</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Failure<small>seen when it runs</small></span></div><figcaption>From root cause to failure: each link causes the next.</figcaption></figure>

القاعدة الأساسية في المنهج: **الإنسان يرتكب أخطاء (Errors)، فتنتج defects (Defects)، والـ defects بدورها قد تؤدي إلى أعطال (Failures).** لاحظ كلمة «**قد**»: الانتقال من الـ defect إلى العطل ليس حتميًا، كما سنرى. ووراء الخطأ غالبًا **سبب جذري (Root Cause)** أعمق.

### الخطأ — Error

**الخطأ (Error)**، ويسمّى أيضًا **الغلطة (Mistake)**، تصرّف بشري ينتج عنه نتيجة غير صحيحة: سوء فهم، أو سهو، أو افتراض خاطئ. يذكر المنهج أسبابًا كثيرة لارتكاب البشر الأخطاء:

- **ضغط الوقت:** مطوّر ينهي ميزة الكوبونات في آخر يوم من الـSprint.
- **التعقيد:** تعقيد مُخرَجات العمل، أو العمليات، أو البنية التحتية، أو **التفاعلات**؛ فطلب واحد في تطبيق التوصيل يمر على تطبيق الزبون والخادم وبوابة الدفع ولوحة المطعم وتطبيق السائق.
- **التعب.**
- **نقص التدريب الكافي:** مختبر جديد لا يعرف أن الإلغاء ممنوع بعد «Out for delivery».

### الـ defect — Defect

**الـ defect (Defect)**، ويسمّى أيضًا **Fault** أو **Bug**، هو أثر الخطأ داخل **مُخرَج عمل**. ولا يقتصر على الشيفرة؛ فقد يكون في:

- **التوثيق:** مثل مواصفات المتطلبات أو **test script** يتوقع نتيجة خاطئة.
- **الشيفرة المصدرية.**
- **مُخرَج عمل مساند:** مثل **ملف بناء (Build file)** يُغفل ملف الترجمة العربية فيظهر التطبيق بالإنجليزية فقط.

ويؤكد المنهج أن الـ defects في مخرجات العمل التي تُنتج **مبكرًا** في دورة التطوير، إن لم تُكتشف، تؤدي غالبًا إلى **مخرجات فيها defects لاحقًا**. لماذا؟ لأن كل مرحلة تبني على ما قبلها: التصميم يُبنى على المتطلب، والشيفرة على التصميم، والاختبارات على المتطلب أيضًا. defect واحد في المتطلب يتكاثر.

### العطل — Failure

**العطل (Failure)** حدث يُلاحَظ أثناء التشغيل: إذا نُفّذت شيفرة فيها defect، قد **لا يفعل النظام ما يجب أن يفعله**، أو **يفعل ما لا يجب أن يفعله**. لكن العلاقة بين الـ defect والعطل ليست واحدًا لواحد:

| Defect behaviour | Delivery-app example |
| --- | --- |
| Always fails when executed | Order total ignores the delivery fee for every order below 20.00 JOD |
| Fails only in specific circumstances | Cancellation fails only for wallet payments on Android in English UI |
| May never fail | Wrong code in a payment branch that no screen can reach any more |

لهذا قد يبقى defect في التطبيق سنوات دون أن يلاحظه أحد، ثم يظهر فجأة حين تتحقق ظروفه، كأن تضيف الشركة طريقة دفع جديدة تُعيد تفعيل الفرع القديم.

وهذا يربط القسم بما سبق: **الاختبار الديناميكي** يرى الأعطال فقط، فلا يكشف الـ defect الذي لا يُنفَّذ أو لا تتحقق ظروفه أثناء الاختبار. أما **الاختبار الساكن** فيجد الـ defect نفسه في الشيفرة أو الوثيقة، حتى لو كان لن يسبب عطلًا إلا بعد سنوات. ولهذا يكمّل كل منهما الآخر.

### ليست كل الأعطال من الـ defects — Not All Failures Come from Defects

الأخطاء والـ defects **ليست السبب الوحيد** للأعطال. قد تنتج الأعطال أيضًا عن **ظروف بيئية**. مثال المنهج: **الإشعاع أو الحقول الكهرومغناطيسية** التي تُحدث defects في **البرمجيات الثابتة (Firmware)**. هنا لم يرتكب أي إنسان خطأ، ومع ذلك تعطّل النظام. لذلك عند تحليل عطل لا تفترض فورًا أن مبرمجًا أخطأ.

### السبب الجذري — Root Cause

**السبب الجذري (Root Cause)** هو **السبب الأساسي** لحدوث المشكلة، مثل **موقف أدى إلى الخطأ**. ويُحدَّد عبر **تحليل السبب الجذري (Root Cause Analysis)**، الذي يُجرى عادة **عند حدوث عطل أو اكتشاف defect**. والفكرة وراءه أن **معالجة السبب الجذري**، كإزالته، تمنع حدوث أعطال أو defects مشابهة، أو **تقلل تكرارها**. إصلاح الـ defect يعالج حالة واحدة؛ ومعالجة السبب الجذري تحمي الحالات القادمة. ولاحظ الصلة بضمان الجودة في القسم السابق: نتائج تحليل السبب الجذري تغذية راجعة عن العملية نفسها، فهي تقود إلى تحسين طريقة العمل لا إلى إصلاح منتج واحد فقط.

### مثال كامل للسلسلة — A Full Chain Example

القاعدة المتفق عليها: التوصيل مجاني للطلبات من **20.00 دينارًا فأكثر**.

| Link | In the delivery app |
| --- | --- |
| Root cause | No step in the team's process to review acceptance criteria against the agreed business rules; the story was written in a rush |
| Error | The product owner types "more than 20 JOD" instead of "20 JOD or more" |
| Defect (requirements) | The user story's acceptance criterion is wrong |
| Defect (code, tests) | The developer implements `total > 20`; the tester's test also expects a fee at 20.00 |
| Failure | A customer orders exactly 20.00 JOD and is charged 1.50 JOD delivery |

تابع السلسلة: الخطأ وقع في رأس مالك المنتج، والـ defect الأول وُلد في قصة المستخدم، ثم **تكاثر** إلى الشيفرة وإلى الاختبار نفسه (لهذا لم يكتشفه الاختبار!)، والعطل رآه الزبون. إصلاح الشرط في الشيفرة يعالج العطل، وتصحيح القصة والاختبار يزيل بقية الـ defects، أما إضافة مراجعة معايير القبول إلى عملية الفريق فتعالج السبب الجذري وتمنع تكرار defects مشابهة في الحدود الأخرى، مثل الحد الأدنى للطلب.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A customer is charged twice (failure). The payment code calls the charge function inside a retry loop without checking if the first call succeeded (defect). The developer wrote it that way under deadline pressure without a code review (error). The root cause: no review step and no guidance on idempotent payment calls. Fixing the loop solves this bug; adding a review rule and guidance prevents the next one.</p><p class="gx-ar" lang="ar" dir="rtl">عميل خُصم منه المبلغ مرتين (عطل). شيفرة الدفع تستدعي دالة الخصم داخل حلقة إعادة محاولة دون التحقق من نجاح الاستدعاء الأول (defect). المطوّر كتبها بهذه الطريقة تحت ضغط موعد التسليم ودون مراجعة شيفرة (خطأ). السبب الجذري: غياب خطوة المراجعة وغياب إرشادات لعمليات الدفع التي يجب ألّا تتكرر. إصلاح الحلقة يحل هذا الـ defect؛ وإضافة قاعدة مراجعة وإرشادات تمنع الـ defect التالي.</p></aside>

### لا تخلط بين — Don't Confuse

| Term | What it is | Where it lives | Typical fix |
| --- | --- | --- | --- |
| Error | A human action | In a person's work | Training, time, support |
| Defect | An imperfection in a work product | Requirements, code, test script, build file | Debugging / correcting the work product |
| Failure | An observed event | In operation or test execution | Removing the defect behind it |
| Root cause | The fundamental reason | Process, conditions, situation | Changing the process or situation |

<section class="gx-lab" data-lab="LAB-1.2.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Trace a Real Bug Back to Its Root Cause</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · تتبّع defect حقيقيًا حتى سببه الجذري</span></span><span class="gx-lab-meta">LAB-1.2.3 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> practise separating failure, defect, error and root cause on a real case.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> التدرّب على الفصل بين العطل والـ defect والخطأ والسبب الجذري على حالة حقيقية.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Choose a defect from your project, or a public incident you know about.</span><span class="gx-ar" lang="ar" dir="rtl">اختر defect من مشروعك، أو حادثة عامة تعرف تفاصيلها.</span></li><li><span class="gx-en" lang="en" dir="ltr">Write one sentence for each: the failure (what users saw), the defect (what was wrong and where), the error (what someone did), the root cause (why it happened).</span><span class="gx-ar" lang="ar" dir="rtl">اكتب جملة واحدة لكل منها: العطل (ما رآه المستخدم)، والـ defect (ما الخلل وأين)، والخطأ (ما الذي فعله شخص ما)، والسبب الجذري (لماذا حدث ذلك).</span></li><li><span class="gx-en" lang="en" dir="ltr">Check the defect location: is it in code, requirements, a test script or another work product?</span><span class="gx-ar" lang="ar" dir="rtl">تحقق من مكان الـ defect: هل هو في الشيفرة، أم المتطلبات، أم test script، أم مُخرَج آخر؟</span></li><li><span class="gx-en" lang="en" dir="ltr">Suggest one action that removes the root cause, not only the defect.</span><span class="gx-ar" lang="ar" dir="rtl">اقترح إجراءً واحدًا يعالج السبب الجذري، لا الـ defect فقط.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">The four sentences describe four different things, and none of them repeats another in different words. The failure is observable behaviour; the defect has a location; the error is a human action; the root cause explains why the error was likely. Your action would make similar defects less likely in future.</span><span class="gx-ar" lang="ar" dir="rtl">الجمل الأربع تصف أربعة أشياء مختلفة، ولا تكرر إحداها الأخرى بكلمات مختلفة. العطل سلوك يمكن ملاحظته؛ والـ defect له مكان؛ والخطأ تصرّف بشري؛ والسبب الجذري يفسّر لماذا كان الخطأ واردًا. والإجراء الذي اقترحته يقلل احتمال defects مشابهة مستقبلًا.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Look at what the question describes. Something a person did → error. Something wrong inside a work product → defect. Something observed while the system runs → failure. The underlying reason that led to the mistake → root cause.</p><p class="gx-ar" lang="ar" dir="rtl">انظر إلى ما يصفه السؤال. شيء فعله شخص ← خطأ. شيء خاطئ داخل مُخرَج عمل ← defect. شيء يُلاحَظ أثناء تشغيل النظام ← عطل. السبب الأعمق الذي أدى للغلطة ← سبب جذري.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming every failure comes from a defect, or every defect will cause a failure. Neither is true: environmental conditions can cause failures, and some defects never show up as failures.</p><p class="gx-ar" lang="ar" dir="rtl">الافتراض أن كل عطل سببه defect، أو أن كل defect سيسبب عطلًا. كلاهما غير صحيح: الظروف البيئية قد تسبب أعطالًا، وبعض الـ defects لا تظهر كأعطال أبدًا.</p></aside>

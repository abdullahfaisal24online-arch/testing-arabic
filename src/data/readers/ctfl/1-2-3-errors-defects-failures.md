---
order: 5
slug: "1-2-3"
chapter: 1
group: "1.2"
section: "1.2.3"
title: "Errors, Defects, Failures, and Root Causes"
titleAr: "الأخطاء والـ defects والأعطال والأسباب الجذرية"
objectives: "FL-1.2.3 · K2"
minutes: 9
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
  - "A root cause is the fundamental reason behind a problem; fixing it prevents similar defects."
takeawaysAr:
  - "الإنسان يرتكب خطأ، والخطأ ينتج defect، والـ defect قد يؤدي إلى عطل."
  - "الـ defect قد يكون في الشيفرة أو المتطلبات أو الـ test scripts أو أي مُخرَج عمل آخر."
  - "ليس كل defect يسبب عطلًا؛ بعضها يظهر في ظروف محددة فقط، وبعضها لا يظهر أبدًا."
  - "الأعطال قد تنتج أيضًا عن ظروف بيئية، لا عن الـ defects فقط."
  - "السبب الجذري هو السبب الأساسي وراء المشكلة؛ ومعالجته تمنع تكرار defects مشابهة."
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
---
هذه أربعة مصطلحات تتكرر في كل مكان، وفي الامتحان أيضًا. يستخدمها الناس في الحياة اليومية بشكل متبادل، لكن المنهج يفرّق بينها بدقة.

### السلسلة — The Chain

<figure class="gx-figure" aria-label="From root cause to failure: each link causes the next."><div class="gx-flow-row"><span class="gx-flow-node">Root cause<small>why it happened</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Error<small>human mistake</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Defect<small>in a work product</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Failure<small>seen when it runs</small></span></div><figcaption>From root cause to failure: each link causes the next.</figcaption></figure>

القاعدة الأساسية: **الإنسان يرتكب خطأ (Error)، فينتج defect (Defect)، والـ defect قد يؤدي إلى عطل (Failure).** ووراء الخطأ غالبًا **سبب جذري (Root Cause)** أعمق.

### الخطأ — Error

**الخطأ (Error / Mistake)** تصرّف بشري. قد يحدث لأسباب كثيرة، منها:

- ضغط الوقت.
- تعقيد مُخرَج العمل أو العمليات أو البنية التحتية أو التفاعلات.
- التعب.
- نقص التدريب الكافي.

### الـ defect — Defect

**الـ defect (Defect / Fault / Bug)** هو نتيجة الخطأ داخل مُخرَج عمل. ولا يقتصر على الشيفرة؛ فقد يكون في:

- التوثيق، مثل مواصفات المتطلبات أو test script.
- الشيفرة المصدرية.
- مُخرَج عمل مساند، مثل ملف بناء (Build file).

الـ defects التي تقع في مراحل مبكرة من دورة التطوير، إن لم تُكتشف، تؤدي غالبًا إلى مخرجات فيها defects في المراحل اللاحقة. متطلب خاطئ ينتج تصميمًا خاطئًا، ثم شيفرة خاطئة.

### العطل — Failure

**العطل (Failure)** هو ما نراه عندما تُنفَّذ شيفرة فيها defect: النظام لا يفعل ما يجب أن يفعله، أو يفعل ما لا يجب أن يفعله.

لكن ليس كل defect يسبب عطلًا:

- بعض الـ defects **تسبب عطلًا دائمًا** عند تنفيذها.
- بعضها يسبب عطلًا **في ظروف محددة فقط**.
- وبعضها **لا يسبب عطلًا أبدًا**، مثلًا لأن الشيفرة التي فيها الـ defect لا تُنفَّذ.

### ليست كل الأعطال من الـ defects — Not All Failures Come from Defects

الأخطاء والـ defects ليست السبب الوحيد للأعطال. قد تنتج الأعطال عن **ظروف بيئية**، كأن يتسبب الإشعاع أو الحقول الكهرومغناطيسية في إحداث defects في البرمجيات الثابتة (Firmware).

### السبب الجذري — Root Cause

**السبب الجذري** هو السبب الأساسي لحدوث المشكلة، مثل موقف أدى إلى الخطأ. يُحدَّد عبر **تحليل السبب الجذري (Root Cause Analysis)**، وغالبًا يُجرى عند حدوث عطل أو اكتشاف defect.

الفكرة أن معالجة السبب الجذري تمنع تكرار أعطال أو defects مشابهة، أو تقلل تكرارها. إصلاح الـ defect يعالج حالة واحدة؛ ومعالجة السبب الجذري تحمي ما بعدها.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A customer is charged twice (failure). The payment code calls the charge function inside a retry loop without checking if the first call succeeded (defect). The developer wrote it that way under deadline pressure without a code review (error). The root cause: no review step and no guidance on idempotent payment calls. Fixing the loop solves this bug; adding a review rule and guidance prevents the next one.</p><p class="gx-ar" lang="ar" dir="rtl">عميل خُصم منه المبلغ مرتين (عطل). شيفرة الدفع تستدعي دالة الخصم داخل حلقة إعادة محاولة دون التحقق من نجاح الاستدعاء الأول (defect). المطوّر كتبها بهذه الطريقة تحت ضغط موعد التسليم ودون مراجعة شيفرة (خطأ). السبب الجذري: غياب خطوة المراجعة وغياب إرشادات لعمليات الدفع التي يجب ألّا تتكرر. إصلاح الحلقة يحل هذا الـ defect؛ وإضافة قاعدة مراجعة وإرشادات تمنع الـ defect التالي.</p></aside>

<section class="gx-lab" data-lab="LAB-1.2.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Trace a Real Bug Back to Its Root Cause</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · تتبّع defect حقيقيًا حتى سببه الجذري</span></span><span class="gx-lab-meta">LAB-1.2.3 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> practise separating failure, defect, error and root cause on a real case.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> التدرّب على الفصل بين العطل والـ defect والخطأ والسبب الجذري على حالة حقيقية.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Choose a defect from your project, or a public incident you know about.</span><span class="gx-ar" lang="ar" dir="rtl">اختر defect من مشروعك، أو حادثة عامة تعرف تفاصيلها.</span></li><li><span class="gx-en" lang="en" dir="ltr">Write one sentence for each: the failure (what users saw), the defect (what was wrong and where), the error (what someone did), the root cause (why it happened).</span><span class="gx-ar" lang="ar" dir="rtl">اكتب جملة واحدة لكل منها: العطل (ما رآه المستخدم)، والـ defect (ما الخلل وأين)، والخطأ (ما الذي فعله شخص ما)، والسبب الجذري (لماذا حدث ذلك).</span></li><li><span class="gx-en" lang="en" dir="ltr">Check the defect location: is it in code, requirements, a test script or another work product?</span><span class="gx-ar" lang="ar" dir="rtl">تحقق من مكان الـ defect: هل هو في الشيفرة، أم المتطلبات، أم test script، أم مُخرَج آخر؟</span></li><li><span class="gx-en" lang="en" dir="ltr">Suggest one action that removes the root cause, not only the defect.</span><span class="gx-ar" lang="ar" dir="rtl">اقترح إجراءً واحدًا يعالج السبب الجذري، لا الـ defect فقط.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">The four sentences describe four different things, and none of them repeats another in different words. The failure is observable behaviour; the defect has a location; the error is a human action; the root cause explains why the error was likely. Your action would make similar defects less likely in future.</span><span class="gx-ar" lang="ar" dir="rtl">الجمل الأربع تصف أربعة أشياء مختلفة، ولا تكرر إحداها الأخرى بكلمات مختلفة. العطل سلوك يمكن ملاحظته؛ والـ defect له مكان؛ والخطأ تصرّف بشري؛ والسبب الجذري يفسّر لماذا كان الخطأ واردًا. والإجراء الذي اقترحته يقلل احتمال defects مشابهة مستقبلًا.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Look at what the question describes. Something a person did → error. Something wrong inside a work product → defect. Something observed while the system runs → failure. The underlying reason that led to the mistake → root cause.</p><p class="gx-ar" lang="ar" dir="rtl">انظر إلى ما يصفه السؤال. شيء فعله شخص ← خطأ. شيء خاطئ داخل مُخرَج عمل ← defect. شيء يُلاحَظ أثناء تشغيل النظام ← عطل. السبب الأعمق الذي أدى للغلطة ← سبب جذري.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Assuming every failure comes from a defect, or every defect will cause a failure. Neither is true: environmental conditions can cause failures, and some defects never show up as failures.</p><p class="gx-ar" lang="ar" dir="rtl">الافتراض أن كل عطل سببه defect، أو أن كل defect سيسبب عطلًا. كلاهما غير صحيح: الظروف البيئية قد تسبب أعطالًا، وبعض الـ defects لا تظهر كأعطال أبدًا.</p></aside>

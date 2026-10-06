---
order: 8
slug: "4-3-3"
chapter: 4
group: "4.3"
section: "4.3.3"
title: "The Value of White-box Testing"
titleAr: "قيمة اختبار الصندوق الأبيض"
objectives: "FL-4.3.3 · K2"
minutes: 5
lo:
  FL-4.3.3: "Explain the value of white-box testing."
loAr:
  FL-4.3.3: "تشرح قيمة اختبار الصندوق الأبيض."
takeaways:
  - "White-box testing takes the whole implementation into account, so it can find defects even when the specification is vague, outdated or incomplete."
  - "Its weakness: if the software does not implement a requirement, white-box testing may not notice the omission."
  - "White-box techniques can also be used in static testing, such as dry runs of code or reviewing pseudocode."
  - "Black-box testing alone gives no measure of actual code coverage; white-box coverage gives an objective measure and can guide extra tests."
takeawaysAr:
  - "اختبار الصندوق الأبيض يأخذ التنفيذ كاملًا بالحسبان، فيكتشف الـ defects حتى عندما تكون المواصفات غامضة أو قديمة أو ناقصة."
  - "ضعفه: إذا لم تنفّذ البرمجية متطلبًا ما، قد لا يلاحظ اختبار الصندوق الأبيض هذا النقص."
  - "يمكن استخدام تقنيات الصندوق الأبيض في الاختبار الساكن أيضًا، مثل التشغيل الذهني للشيفرة أو مراجعة الشيفرة الزائفة."
  - "اختبار الصندوق الأسود وحده لا يعطي قياسًا لتغطية الشيفرة الفعلية؛ وتغطية الصندوق الأبيض تعطي قياسًا موضوعيًا ويمكن أن توجّه اختبارات إضافية."
terms:
  - en: "Dry Run"
    ar: "التشغيل الذهني"
    def: "Walking through code by hand, step by step, without executing it, to check its logic."
    defAr: "تتبّع الشيفرة يدويًا خطوة بخطوة دون تشغيلها، لفحص منطقها."
---
### القوة — Strength

القوة الأساسية لتقنيات الصندوق الأبيض أن **التنفيذ البرمجي كله يؤخذ بالحسبان** أثناء الاختبار. هذا يسهّل **اكتشاف الـ defects حتى عندما تكون مواصفات البرمجية غامضة أو قديمة أو ناقصة**.

### الضعف — Weakness

نقطة الضعف المقابلة: **إذا لم تنفّذ البرمجية متطلبًا واحدًا أو أكثر**، فقد لا يكتشف اختبار الصندوق الأبيض الـ defects الناتجة عن هذا **الإغفال**. لا يمكنك تغطية شيفرة غير موجودة.

### في الاختبار الساكن أيضًا — Also in Static Testing

يمكن استخدام تقنيات الصندوق الأبيض في **الاختبار الساكن**، مثلًا:

- **التشغيل الذهني (Dry Run)** للشيفرة.
- مراجعة **شيفرة لم تصبح جاهزة للتشغيل** بعد.
- مراجعة **الشيفرة الزائفة (Pseudocode)** أو منطق عالي المستوى يمكن نمذجته بمخطط تدفق تحكم.

### قياس موضوعي للتغطية — An Objective Coverage Measure

**إجراء اختبار الصندوق الأسود وحده لا يعطي قياسًا لتغطية الشيفرة الفعلية.** أما قياسات تغطية الصندوق الأبيض فتوفر **قياسًا موضوعيًا** للتغطية، وتعطي المعلومات اللازمة لإنشاء **اختبارات إضافية** لرفع التغطية، وبالتالي رفع الثقة في الشيفرة.

<figure class="gx-figure gx-spectrum" aria-label="White-box vs black-box: complementary views."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>White-box finds</b><span>Defects in code that the vague spec never mentioned.</span></div><div class="gx-spectrum-item"><b>Black-box finds</b><span>Missing features: requirements that were never implemented.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Together</b><span>Coverage measured objectively and requirements checked.</span></div></div><figcaption>White-box vs black-box: complementary views.</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A team's black-box suite passes, but a coverage tool shows the error-handling code for a timed-out payment was never executed (61% branch coverage). They add two tests that simulate a timeout and find that the order is marked "paid" anyway.</p><p class="gx-ar" lang="ar" dir="rtl">مجموعة اختبارات الصندوق الأسود لدى فريق تنجح كلها، لكن أداة تغطية تُظهر أن شيفرة معالجة انتهاء مهلة الدفع لم تُنفَّذ أبدًا (تغطية فروع 61%). يضيفون اختبارين يحاكيان انتهاء المهلة، فيكتشفون أن الطلب يُعلَّم «مدفوعًا» رغم ذلك.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">If an option says white-box testing "can detect missing requirements", it is wrong: that is its weakness. If it says white-box "can be used when the specification is outdated", it is right.</p><p class="gx-ar" lang="ar" dir="rtl">إذا قال خيار إن اختبار الصندوق الأبيض «يكتشف المتطلبات غير المنفّذة»، فهو خاطئ: هذا بالضبط نقطة ضعفه. وإذا قال إنه «يمكن استخدامه عندما تكون المواصفات قديمة»، فهو صحيح.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking white-box testing always needs running code. Dry runs and reviews of code or pseudocode are white-box techniques used statically.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن اختبار الصندوق الأبيض يحتاج دائمًا شيفرة تعمل. التشغيل الذهني ومراجعة الشيفرة أو الشيفرة الزائفة تقنيات صندوق أبيض تُستخدم بشكل ساكن.</p></aside>

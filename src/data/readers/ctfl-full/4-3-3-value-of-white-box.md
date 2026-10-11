---
order: 8
slug: "4-3-3"
chapter: 4
group: "4.3"
section: "4.3.3"
title: "The Value of White-box Testing"
titleAr: "قيمة اختبار الصندوق الأبيض"
objectives: "FL-4.3.3 · K2"
minutes: 12
lo:
  FL-4.3.3: "Explain the value of white-box testing."
loAr:
  FL-4.3.3: "تشرح قيمة اختبار الصندوق الأبيض."
takeaways:
  - "White-box testing takes the whole implementation into account, so it can find defects even when the specification is vague, outdated or incomplete."
  - "Its weakness: if the software does not implement a requirement, white-box testing may not notice the omission."
  - "White-box techniques can also be used in static testing, such as dry runs of code or reviewing pseudocode."
  - "Black-box testing alone gives no measure of actual code coverage; white-box coverage gives an objective measure and can guide extra tests."
  - "White-box and black-box testing complement each other: one sees the code that exists, the other checks the requirements that should exist."
takeawaysAr:
  - "اختبار الصندوق الأبيض يأخذ التنفيذ كاملًا بالحسبان، فيكتشف الـ defects حتى عندما تكون المواصفات غامضة أو قديمة أو ناقصة."
  - "ضعفه: إذا لم تنفّذ البرمجية متطلبًا ما، قد لا يلاحظ اختبار الصندوق الأبيض هذا النقص."
  - "يمكن استخدام تقنيات الصندوق الأبيض في الاختبار الساكن أيضًا، مثل التشغيل الذهني للشيفرة أو مراجعة الشيفرة الزائفة."
  - "اختبار الصندوق الأسود وحده لا يعطي قياسًا لتغطية الشيفرة الفعلية؛ وتغطية الصندوق الأبيض تعطي قياسًا موضوعيًا ويمكن أن توجّه اختبارات إضافية."
  - "اختبار الصندوق الأبيض والأسود يكمّل أحدهما الآخر: الأول يرى الشيفرة الموجودة، والثاني يتحقق من المتطلبات التي يجب أن توجد."
terms:
  - en: "Dry Run"
    ar: "التشغيل الذهني"
    def: "Walking through code by hand, step by step, without executing it, to check its logic."
    defAr: "تتبّع الشيفرة يدويًا خطوة بخطوة دون تشغيلها، لفحص منطقها."
  - en: "Defect of Omission"
    ar: "defect الإغفال"
    def: "A defect caused by something missing from the implementation, such as a requirement that was never implemented."
    defAr: "defect سببه شيء ناقص في التنفيذ، مثل متطلب لم يُنفَّذ أبدًا."
    match: ["defects of omission", "defect of omission"]
---
بعد أن عرفنا اختبار التعليمات واختبار الفروع، يبقى السؤال العملي: **لماذا نتعب في قياس تغطية الشيفرة إذا كانت اختبارات الصندوق الأسود تتحقق أصلًا من المتطلبات؟** يجيب المنهج بنقطة قوة مشتركة بين كل تقنيات الصندوق الأبيض، ونقطة ضعف مقابلة لها، وفائدتين إضافيتين: الاستخدام في الاختبار الساكن، والقياس الموضوعي للتغطية. فهم هذه النقاط الأربع هو ما يجعلك تعرف متى تعتمد على الصندوق الأبيض ومتى لا يكفيك.

### القوة — Strength

القوة الأساسية التي **تشترك فيها كل تقنيات الصندوق الأبيض** أن **التنفيذ البرمجي كله يؤخذ بالحسبان** أثناء الاختبار. المختبر لا يعتمد على ما تقوله الوثيقة، بل على ما كُتب فعلًا في الشيفرة. وهذا يسهّل **اكتشاف الـ defects حتى عندما تكون مواصفات البرمجية غامضة أو قديمة أو ناقصة**:

- **غامضة (vague):** المواصفات تقول «رسوم توصيل مخفّضة للطلبات الكبيرة» دون رقم. بالنظر إلى الشيفرة يكتشف المختبر شرطًا `total > 20.00` وشرطًا آخر في شاشة السلة `total >= 20.00`، فيظهر التناقض عند 20.00 بالضبط، رغم أن الوثيقة لم تحدد الحد أصلًا.
- **قديمة (outdated):** أُضيفت المحفظة الرقمية طريقةً للدفع ولم تُحدَّث الوثيقة. تقرير التغطية يُظهر فرعًا كاملًا للمحفظة لم يختبره أحد.
- **ناقصة (incomplete):** لا تذكر المواصفات ما يحدث عند انتهاء مهلة بوابة الدفع، لكن الشيفرة فيها معالجة لهذه الحالة، وتغطيتها تكشف إن كانت تعمل.

السبب أن الشيفرة هي **الحقيقة الوحيدة** عمّا سيعمل عند الزبون، فاختبارها مباشرة لا يتأثر بجودة الوثائق.

### الضعف — Weakness

نقطة الضعف المقابلة: **إذا لم تنفّذ البرمجية متطلبًا واحدًا أو أكثر**، فقد **لا يكتشف** اختبار الصندوق الأبيض **الـ defects في الإغفال (defects of omission)** الناتجة عن ذلك. السبب بسيط: تقنيات الصندوق الأبيض تقيس ما هو **موجود** في الشيفرة، و**لا يمكنك تغطية شيفرة غير موجودة**.

مثال: المتطلب يقول إن الزبون يستطيع **إلغاء الطلب** في أي حالة قبل «خرج للتوصيل». نسي المطوّر تنفيذ الإلغاء في حالة «قيد التحضير». الشيفرة الموجودة كلها مغطّاة بنسبة **100% تعليمات و100% فروع**، والتقرير أخضر بالكامل، ومع ذلك يبقى المتطلب غير منفّذ. هذا الـ defect يكشفه اختبار **صندوق أسود** مبني على المتطلبات، مثل اختبار انتقالات الحالة، لا قياس التغطية.

### في الاختبار الساكن أيضًا — Also in Static Testing

لا تحتاج تقنيات الصندوق الأبيض دائمًا إلى تشغيل البرنامج؛ يمكن استخدامها في **الاختبار الساكن (static testing)**:

- **التشغيل الذهني (Dry Run):** يتتبّع المراجع الشيفرة بيده سطرًا بسطر بقيم مختارة، كأنه الحاسوب، ويسجّل قيم المتغيرات والفروع التي سُلكت.
- **مراجعة شيفرة لم تصبح جاهزة للتشغيل بعد:** مثل دالة لم تكتمل أو لا تُترجم، فيمكن مع ذلك فحص منطقها وفروعها.
- **مراجعة الشيفرة الزائفة (Pseudocode)** وغيرها من **المنطق عالي المستوى أو المنطق من الأعلى إلى الأسفل (top-down logic)** الذي **يمكن نمذجته بمخطط تدفق تحكم**.

في تطبيق التوصيل، كتب المطوّر خوارزمية تسعير الطلب بشيفرة زائفة قبل البرمجة. رسم المختبر مخطط تدفق التحكم لها في جلسة مراجعة، وتتبّع ذهنيًا طلبًا بقيمة 19.99 مع كوبون، فاكتشف فرعًا لا يمكن الوصول إليه أبدًا. اكتُشف الـ defect قبل كتابة سطر واحد، وهذا أرخص وقت لإصلاحه (القسم 3.1.2).

### قياس موضوعي للتغطية — An Objective Coverage Measure

**إجراء اختبار الصندوق الأسود وحده لا يعطي قياسًا لتغطية الشيفرة الفعلية.** قد يكون لديك مئتا اختبار ناجح مبني على المتطلبات، ولا تعرف هل نفّذت 40% من الشيفرة أم 95%. أما **قياسات تغطية الصندوق الأبيض** فتوفر:

1. **قياسًا موضوعيًا (objective):** رقم تحسبه أداة، لا انطباع شخصي، ويمكن مقارنته بين الإصدارات.
2. **المعلومات اللازمة لإنشاء اختبارات إضافية:** التقرير يحدد الأسطر والفروع غير المنفّذة بالضبط، فتعرف أين تضيف الاختبار.
3. **زيادة الثقة في الشيفرة:** كلما ارتفعت التغطية بالاختبارات الإضافية، زادت الثقة في أن الشيفرة لا تخفي مناطق لم تُفحص.

### الخلاصة: تكامل لا منافسة — Complementary Views

قوة الصندوق الأبيض هي بالضبط ما ينقص الصندوق الأسود، والعكس صحيح. اختبارات الصندوق الأسود تسأل: «هل فعل النظام كل ما طُلب منه؟»، فتكشف المتطلبات المنسية. واختبارات الصندوق الأبيض تسأل: «هل فحصنا كل ما كُتب فعلًا في الشيفرة؟»، فتكشف المناطق التي لم يلمسها أحد. لذلك تبدأ فرق كثيرة باختبارات مبنية على المتطلبات، ثم تقيس التغطية، ثم تضيف اختبارات للمناطق المكشوفة. الشكل التالي يلخّص لماذا يحتاج الفريق إلى النوعين معًا:

<figure class="gx-figure gx-spectrum" aria-label="White-box vs black-box: complementary views."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>White-box finds</b><span>Defects in code that the vague spec never mentioned.</span></div><div class="gx-spectrum-item"><b>Black-box finds</b><span>Missing features: requirements that were never implemented.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Together</b><span>Coverage measured objectively and requirements checked.</span></div></div><figcaption>White-box vs black-box: complementary views.</figcaption></figure>

### لا تخلط بين — Don't Confuse

| | White-box testing | Black-box testing |
| --- | --- | --- |
| Based on | Code, structure, pseudocode | Specification, requirements |
| Works with a vague or outdated spec | Yes | Weakened |
| Finds missing requirements (omission) | May not | Yes, if the requirement is in the test basis |
| Measures code coverage | Yes, objectively | No |
| Static use | Dry runs, code and pseudocode reviews | Reviews of requirements |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A team's black-box suite passes, but a coverage tool shows the error-handling code for a timed-out payment was never executed (61% branch coverage). They add two tests that simulate a timeout and find that the order is marked "paid" anyway.</p><p class="gx-ar" lang="ar" dir="rtl">مجموعة اختبارات الصندوق الأسود لدى فريق تنجح كلها، لكن أداة تغطية تُظهر أن شيفرة معالجة انتهاء مهلة الدفع لم تُنفَّذ أبدًا (تغطية فروع 61%). يضيفون اختبارين يحاكيان انتهاء المهلة، فيكتشفون أن الطلب يُعلَّم «مدفوعًا» رغم ذلك.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">If an option says white-box testing "can detect missing requirements", it is wrong: that is its weakness. If it says white-box "can be used when the specification is outdated", it is right.</p><p class="gx-ar" lang="ar" dir="rtl">إذا قال خيار إن اختبار الصندوق الأبيض «يكتشف المتطلبات غير المنفّذة»، فهو خاطئ: هذا بالضبط نقطة ضعفه. وإذا قال إنه «يمكن استخدامه عندما تكون المواصفات قديمة»، فهو صحيح.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking white-box testing always needs running code. Dry runs and reviews of code or pseudocode are white-box techniques used statically.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن اختبار الصندوق الأبيض يحتاج دائمًا شيفرة تعمل. التشغيل الذهني ومراجعة الشيفرة أو الشيفرة الزائفة تقنيات صندوق أبيض تُستخدم بشكل ساكن.</p></aside>

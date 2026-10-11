---
order: 9
slug: "4-4-1"
chapter: 4
group: "4.4"
section: "4.4.1"
title: "Error Guessing"
titleAr: "تخمين الأخطاء"
objectives: "FL-4.4.1 · K2"
minutes: 13
lo:
  FL-4.4.1: "Explain error guessing."
loAr:
  FL-4.4.1: "تشرح تقنية تخمين الأخطاء."
labs: ["LAB-4.4.1"]
takeaways:
  - "Error guessing anticipates errors, defects and failures based on the tester's knowledge."
  - "That knowledge includes how the application has worked before, the errors developers tend to make, and failures in similar applications."
  - "Typical areas: input, output, logic, computation, interfaces and data."
  - "Fault attacks are a methodical form: list possible errors, defects and failures, then design tests to expose them."
  - "The three experience-based techniques in the syllabus are error guessing, exploratory testing and checklist-based testing."
takeawaysAr:
  - "تخمين الأخطاء يتوقّع الأخطاء والـ defects والأعطال بناءً على معرفة المختبر."
  - "تشمل هذه المعرفة طريقة عمل التطبيق سابقًا، والأخطاء التي يميل المطوّرون لارتكابها، والأعطال في تطبيقات مشابهة."
  - "المجالات المعتادة: المدخلات، والمخرجات، والمنطق، والحسابات، والواجهات، والبيانات."
  - "هجمات الأعطال شكل منهجي منها: اكتب قائمة بالأخطاء والـ defects والأعطال الممكنة، ثم صمّم اختبارات لكشفها."
  - "التقنيات الثلاث المبنية على الخبرة في المنهج هي: تخمين الأخطاء، والاختبار الاستكشافي، والاختبار المبني على قوائم التحقق."
terms:
  - en: "Error Guessing"
    ar: "تخمين الأخطاء"
    def: "A test technique in which tests are derived from the tester's knowledge of past failures or general knowledge of failure modes."
    defAr: "تقنية اختبار تُستخرج فيها الاختبارات من معرفة المختبر بالأعطال السابقة أو بأنماط الفشل عمومًا."
    match: ["Error Guessing", "error guessing"]
  - en: "Fault Attack"
    ar: "هجوم الأعطال"
    def: "A methodical approach to error guessing: create a list of possible errors, defects and failures, and design tests to expose them."
    defAr: "نهج منهجي لتخمين الأخطاء: إنشاء قائمة بالأخطاء والـ defects والأعطال الممكنة، وتصميم اختبارات لكشفها."
    match: ["Fault Attack", "fault attack", "fault attacks"]
---
مع القسم 4.4 ننتقل إلى العائلة الثالثة: **التقنيات المبنية على الخبرة (Experience-based Test Techniques)**. هنا لا يأتي الاختبار من المواصفات (كالصندوق الأسود) ولا من بنية الشيفرة (كالصندوق الأبيض)، بل من **معرفة المختبر وخبرته**. ويعرض المنهج ثلاث تقنيات شائعة الاستخدام:

- **تخمين الأخطاء (Error Guessing)**، وهو موضوع هذا القسم.
- **الاختبار الاستكشافي (Exploratory Testing)**، في القسم 4.4.2.
- **الاختبار المبني على قوائم التحقق (Checklist-based Testing)**، في القسم 4.4.3.

### الفكرة — The Idea

**تخمين الأخطاء (Error Guessing)** تقنية اختبار تُستخدم **لتوقّع حدوث الأخطاء والـ defects والأعطال**. لاحظ الكلمات الثلاث: المختبر يتوقع **الخطأ** الذي قد يرتكبه الإنسان، و**الـ defect** الذي سيتركه في الشيفرة، و**العطل** الذي سيراه المستخدم (القسم 1.2.3). والتوقّع ليس حدسًا عشوائيًا، بل مبني على **معرفة المختبر**، وتشمل هذه المعرفة ثلاثة مصادر:

1. **كيف عمل التطبيق في الماضي:** إذا كانت حسابات الكوبونات في تطبيق التوصيل قد تعطّلت مرتين في إصدارات سابقة، فهي مرشّحة للتعطّل مرة ثالثة بعد أي تعديل.
2. **أنواع الأخطاء التي يميل المطوّرون لارتكابها، وأنواع الـ defects الناتجة عنها:** مثل الخلط بين `>` و`>=` عند حد التوصيل المجاني، أو نسيان التحويل بين الأرقام العربية (٢٠) والغربية (20) في حقل الإدخال.
3. **أنواع الأعطال التي حدثت في تطبيقات أخرى مشابهة:** تطبيقات التوصيل عمومًا تعاني من الطلب المكرر عند الضغط مرتين على زر «اطلب»، ومن مشكلات المناطق الزمنية في أوقات عمل المطاعم.

لماذا يعمل هذا؟ لأن الـ defects **ليست موزّعة عشوائيًا**: البشر يكررون الأخطاء نفسها، والأنظمة المتشابهة تفشل بطرق متشابهة. المختبر الخبير يحوّل هذا التكرار إلى اختبارات موجّهة.

### أين تبحث؟ — Where to Look

يذكر المنهج أن الأخطاء والـ defects والأعطال ترتبط **بشكل عام** بست مناطق. الجدول يضع أمثلة المنهج إلى جانب أمثلة من تطبيق التوصيل:

| Area | Syllabus examples | Delivery-app example |
| --- | --- | --- |
| Input | correct input not accepted; parameters wrong or missing | phone number with Arabic digits rejected; order sent without address |
| Output | wrong format; wrong result | price shown as 20.5 instead of 20.50 JOD |
| Logic | missing cases; wrong operator | no handling for cancelling during "Preparing"; `>` used instead of `>=` |
| Computation | incorrect operand; wrong computation | percentage coupon applied to delivery fee instead of meals |
| Interfaces | parameter mismatch; incompatible types | backend sends amount in fils, app reads it as dinars |
| Data | incorrect initialization; wrong type | cart total not reset to 0 after an order |

هذه المناطق الست تعمل كخريطة ذهنية: عند كل ميزة جديدة، يمر المختبر عليها ويسأل «ما الذي يمكن أن يُخطئ هنا؟». لاحظ أن بعض الأمثلة تتقاطع مع تقنيات أخرى: خطأ `>` بدل `>=` يكشفه أيضًا تحليل القيم الحدّية، والحالات الناقصة قد يكشفها جدول القرار. الفرق أن تخمين الأخطاء يصل إليها انطلاقًا من **الخبرة بمكان تكرار الأخطاء**، لا من تحليل منهجي للمواصفات، ولذلك قد يصل أيضًا إلى defects لا تصفها أي وثيقة، مثل مشكلات الشبكة الضعيفة أو تغيير اللغة.

### هجمات الأعطال — Fault Attacks

**هجمات الأعطال (Fault Attacks)** طريقة **لتطبيق** تخمين الأخطاء بشكل **منهجي** بدل الاعتماد على ما يخطر في البال لحظتها. تتطلب من المختبر:

1. **إنشاء أو الحصول على قائمة** بالأخطاء والـ defects والأعطال الممكنة.
2. **تصميم اختبارات** تؤدي واحدًا من ثلاثة أهداف: **تحديد الـ defects المرتبطة بالأخطاء**، أو **كشف الـ defects**، أو **التسبب في الأعطال**.

الأهداف الثلاثة تختلف في نقطة الانطلاق: قد تبدأ من **خطأ بشري** متوقع (المطوّر ينسى تقريب المبلغ) فتبحث عن الـ defect المرتبط به، أو من **defect** محتمل في الشيفرة (عدم التحقق من تاريخ الانتهاء) فتصمّم اختبارًا يكشفه، أو من **عطل** معروف في أنظمة مشابهة (تجمّد الشاشة عند انقطاع الشبكة) فتحاول التسبب فيه عمدًا.

ويمكن بناء هذه القوائم من ثلاثة مصادر: **الخبرة**، و**بيانات الـ defects والأعطال** (مثل سجل الـ defects في أداة المتابعة)، و**المعرفة العامة عن أسباب فشل البرمجيات**.

**مثال: قائمة هجمات لحقل الكوبون**

| Attack (expected weakness) | Test |
| --- | --- |
| Expired coupon still accepted | Apply a coupon one minute after its expiry time |
| Two coupons on one order | Apply a second coupon after the first |
| Fixed coupon larger than the total | 10 JOD coupon on a 7 JOD order: total must not go negative |
| Case and spaces not normalised | Enter " save10 " instead of "SAVE10" |
| Double submit | Tap "Apply" twice quickly: discount applied once |

القائمة قابلة لإعادة الاستخدام في الإصدارات القادمة، وتنمو مع كل defect جديد يُكتشف.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Before each store release, the delivery app's testers spend 30 minutes on a fault attack list built from their defect tracker. Last release, the attack "switch the phone language to Arabic during checkout" exposed a crash on Android that no scripted test covered.</p><p class="gx-ar" lang="ar" dir="rtl">قبل كل إصدار إلى المتاجر، يخصص مختبرا تطبيق التوصيل 30 دقيقة لقائمة هجمات أعطال مبنية من أداة متابعة الـ defects. في الإصدار الماضي، كشف الهجوم «تغيير لغة الهاتف إلى العربية أثناء الدفع» عطلًا مفاجئًا على Android لم يغطّه أي اختبار مكتوب.</p></aside>

### خطوات التطبيق — Step by Step

1. **اجمع المعرفة:** راجع سجل الـ defects السابقة للميزة، واسأل المطوّرين عن الأجزاء التي يعتبرونها هشّة، وتذكّر أعطال التطبيقات المشابهة.
2. **مرّ على المناطق الست:** المدخلات، والمخرجات، والمنطق، والحسابات، والواجهات، والبيانات، واكتب لكل منها ما قد يُخطئ.
3. **حوّل كل توقّع إلى اختبار** محدد بمدخلات ونتيجة متوقعة، كما في جدول الكوبون أعلاه.
4. **نفّذ وسجّل:** أي هجوم كشف defect يبقى في القائمة، وأي defect جديد يُضاف إليها للمرة القادمة.

### نقاط القوة والحدود — Strengths and Limits

قوة التقنية أنها **تصيب الـ defects التي تفوّتها التقنيات الرسمية**، لأنها تستهدف أماكن الضعف المعروفة مباشرة، ولا تحتاج مواصفات تفصيلية. أما حدّها فأنها **تعتمد على خبرة المختبر**: مختبر جديد بلا تاريخ مع النظام سيخمّن أقل، ولا يمكن قياس التغطية بها بشكل موضوعي. لذلك تُستخدم **مكمّلةً** لتقنيات الصندوق الأسود والأبيض، لا بديلًا عنها.

### لا تخلط بين — Don't Confuse

| | Error guessing | Fault attack | Checklist-based testing |
| --- | --- | --- | --- |
| Basis | Tester's knowledge and experience | A list of possible errors, defects and failures | A checklist of test conditions |
| Form | Can be informal | A methodical way to implement error guessing | Separate technique (4.4.3) |
| Goal | Anticipate where things go wrong | Expose defects or cause failures on purpose | Cover each checklist item |

<section class="gx-lab" data-lab="LAB-4.4.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Build a Fault Attack List for a Form</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · ابنِ قائمة هجمات أعطال لنموذج إدخال</span></span><span class="gx-lab-meta">LAB-4.4.1 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> turn experience into a reusable list of attacks for one input form.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تحويل الخبرة إلى قائمة هجمات قابلة لإعادة الاستخدام لنموذج إدخال واحد.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Pick a form in your product (sign-up, checkout, profile).</span><span class="gx-ar" lang="ar" dir="rtl">اختر نموذجًا في منتجك (التسجيل، الدفع، الملف الشخصي).</span></li><li><span class="gx-en" lang="en" dir="ltr">Write at least two attacks for each area: input, output, logic, computation, interfaces, data.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب هجومين على الأقل لكل مجال: المدخلات، والمخرجات، والمنطق، والحسابات، والواجهات، والبيانات.</span></li><li><span class="gx-en" lang="en" dir="ltr">Add three attacks from past defects in your tracker.</span><span class="gx-ar" lang="ar" dir="rtl">أضف ثلاث هجمات من defects سابقة في أداة المتابعة لديكم.</span></li><li><span class="gx-en" lang="en" dir="ltr">Run the attacks and note which ones exposed something.</span><span class="gx-ar" lang="ar" dir="rtl">نفّذ الهجمات وسجّل أيها كشف شيئًا.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Your list is specific (for example "paste a name with leading spaces", "submit twice quickly", "Arabic digits in the phone field") and reusable on the next form. At least some attacks came from your own defect history.</span><span class="gx-ar" lang="ar" dir="rtl">قائمتك محددة (مثلًا: «لصق اسم يبدأ بمسافات»، «الإرسال مرتين بسرعة»، «أرقام عربية في حقل الهاتف»)، وقابلة لإعادة الاستخدام في النموذج التالي. وبعض الهجمات على الأقل جاءت من تاريخ الـ defects لديكم.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Error guessing is based on knowledge and experience, not on the specification or the code structure. "A list of possible defects used to design tests" → fault attack.</p><p class="gx-ar" lang="ar" dir="rtl">تخمين الأخطاء مبني على المعرفة والخبرة، لا على المواصفات ولا على بنية الشيفرة. «قائمة بالـ defects الممكنة تُستخدم لتصميم الاختبارات» ← هجوم أعطال.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking error guessing is random. Done well, it is guided by past defects, typical developer errors and failures in similar systems, and fault attacks make it methodical.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن تخمين الأخطاء عشوائي. عندما يُنفَّذ جيدًا، يكون موجّهًا بالـ defects السابقة، والأخطاء المعتادة للمطوّرين، والأعطال في أنظمة مشابهة؛ وهجمات الأعطال تجعله منهجيًا.</p></aside>

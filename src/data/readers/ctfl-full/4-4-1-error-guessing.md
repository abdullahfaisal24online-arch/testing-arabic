---
order: 9
slug: "4-4-1"
chapter: 4
group: "4.4"
section: "4.4.1"
title: "Error Guessing"
titleAr: "تخمين الأخطاء"
objectives: "FL-4.4.1 · K2"
minutes: 7
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
takeawaysAr:
  - "تخمين الأخطاء يتوقّع الأخطاء والعيوب والأعطال بناءً على معرفة المختبر."
  - "تشمل هذه المعرفة طريقة عمل التطبيق سابقًا، والأخطاء التي يميل المطوّرون لارتكابها، والأعطال في تطبيقات مشابهة."
  - "المجالات المعتادة: المدخلات، والمخرجات، والمنطق، والحسابات، والواجهات، والبيانات."
  - "هجمات الأعطال شكل منهجي منها: اكتب قائمة بالأخطاء والعيوب والأعطال الممكنة، ثم صمّم اختبارات لكشفها."
terms:
  - en: "Error Guessing"
    ar: "تخمين الأخطاء"
    def: "A test technique in which tests are derived from the tester's knowledge of past failures or general knowledge of failure modes."
    defAr: "تقنية اختبار تُستخرج فيها الاختبارات من معرفة المختبر بالأعطال السابقة أو بأنماط الفشل عمومًا."
    match: ["Error Guessing", "error guessing"]
  - en: "Fault Attack"
    ar: "هجوم الأعطال"
    def: "A methodical approach to error guessing: create a list of possible errors, defects and failures, and design tests to expose them."
    defAr: "نهج منهجي لتخمين الأخطاء: إنشاء قائمة بالأخطاء والعيوب والأعطال الممكنة، وتصميم اختبارات لكشفها."
    match: ["Fault Attack", "fault attack", "fault attacks"]
---
**تخمين الأخطاء (Error Guessing)** تقنية تُستخدم لتوقّع حدوث **الأخطاء والعيوب والأعطال**، بناءً على **معرفة المختبر**، ومنها:

- **كيف عمل التطبيق في الماضي.**
- **أنواع الأخطاء** التي يميل المطوّرون لارتكابها، وأنواع العيوب الناتجة عنها.
- **أنواع الأعطال** التي حدثت في تطبيقات أخرى مشابهة.

### أين تبحث؟ — Where to Look

بشكل عام، قد ترتبط الأخطاء والعيوب والأعطال بـ:

| Area | أمثلة |
| --- | --- |
| Input | مدخل صحيح لا يُقبل، معاملات خاطئة أو ناقصة |
| Output | صيغة خاطئة، نتيجة خاطئة |
| Logic | حالات ناقصة، عملية منطقية خاطئة |
| Computation | معامل غير صحيح، حساب خاطئ |
| Interfaces | عدم تطابق المعاملات، أنواع غير متوافقة |
| Data | تهيئة خاطئة، نوع بيانات خاطئ |

### هجمات الأعطال — Fault Attacks

**هجمات الأعطال (Fault Attacks)** طريقة **منهجية** لتطبيق تخمين الأخطاء. تتطلب من المختبر:

1. **إنشاء أو الحصول على قائمة** بالأخطاء والعيوب والأعطال الممكنة.
2. **تصميم اختبارات** تحدد العيوب المرتبطة بالأخطاء، أو تكشف العيوب، أو تسبب الأعطال.

يمكن بناء هذه القوائم من **الخبرة**، ومن **بيانات العيوب والأعطال**، أو من **المعرفة العامة** عن أسباب فشل البرمجيات.

<section class="gx-lab" data-lab="LAB-4.4.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Build a Fault Attack List for a Form</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · ابنِ قائمة هجمات أعطال لنموذج إدخال</span></span><span class="gx-lab-meta">LAB-4.4.1 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> turn experience into a reusable list of attacks for one input form.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تحويل الخبرة إلى قائمة هجمات قابلة لإعادة الاستخدام لنموذج إدخال واحد.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Pick a form in your product (sign-up, checkout, profile).</span><span class="gx-ar" lang="ar" dir="rtl">اختر نموذجًا في منتجك (التسجيل، الدفع، الملف الشخصي).</span></li><li><span class="gx-en" lang="en" dir="ltr">Write at least two attacks for each area: input, output, logic, computation, interfaces, data.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب هجومين على الأقل لكل مجال: المدخلات، والمخرجات، والمنطق، والحسابات، والواجهات، والبيانات.</span></li><li><span class="gx-en" lang="en" dir="ltr">Add three attacks from past defects in your tracker.</span><span class="gx-ar" lang="ar" dir="rtl">أضف ثلاث هجمات من عيوب سابقة في أداة المتابعة لديكم.</span></li><li><span class="gx-en" lang="en" dir="ltr">Run the attacks and note which ones exposed something.</span><span class="gx-ar" lang="ar" dir="rtl">نفّذ الهجمات وسجّل أيها كشف شيئًا.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Your list is specific (for example "paste a name with leading spaces", "submit twice quickly", "Arabic digits in the phone field") and reusable on the next form. At least some attacks came from your own defect history.</span><span class="gx-ar" lang="ar" dir="rtl">قائمتك محددة (مثلًا: «لصق اسم يبدأ بمسافات»، «الإرسال مرتين بسرعة»، «أرقام عربية في حقل الهاتف»)، وقابلة لإعادة الاستخدام في النموذج التالي. وبعض الهجمات على الأقل جاءت من تاريخ العيوب لديكم.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Error guessing is based on knowledge and experience, not on the specification or the code structure. "A list of possible defects used to design tests" → fault attack.</p><p class="gx-ar" lang="ar" dir="rtl">تخمين الأخطاء مبني على المعرفة والخبرة، لا على المواصفات ولا على بنية الشيفرة. «قائمة بالعيوب الممكنة تُستخدم لتصميم الاختبارات» ← هجوم أعطال.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking error guessing is random. Done well, it is guided by past defects, typical developer errors and failures in similar systems, and fault attacks make it methodical.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن تخمين الأخطاء عشوائي. عندما يُنفَّذ جيدًا، يكون موجّهًا بالعيوب السابقة، والأخطاء المعتادة للمطوّرين، والأعطال في أنظمة مشابهة؛ وهجمات الأعطال تجعله منهجيًا.</p></aside>

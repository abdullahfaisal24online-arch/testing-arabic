---
order: 12
slug: "1-5-1"
chapter: 1
group: "1.5"
section: "1.5.1"
title: "Generic Skills Required for Testing"
titleAr: "المهارات العامة المطلوبة للاختبار"
objectives: "FL-1.5.1 · K2"
minutes: 7
lo:
  FL-1.5.1: "Give examples of the generic skills needed for testing."
loAr:
  FL-1.5.1: "تعطي أمثلة على المهارات العامة اللازمة للاختبار."
labs: ["LAB-1.5.1"]
takeaways:
  - "Testers need testing knowledge, thoroughness and curiosity, communication, analytical and critical thinking, technical knowledge and domain knowledge."
  - "Testing knowledge improves effectiveness; technical knowledge improves efficiency."
  - "Testers often bring bad news, and confirmation bias makes it hard to accept, so communicate defects constructively."
takeawaysAr:
  - "المختبر يحتاج معرفة بالاختبار، ودقة وفضولًا، ومهارات تواصل، وتفكيرًا تحليليًا ونقديًا، ومعرفة تقنية، ومعرفة بمجال العمل."
  - "المعرفة بالاختبار ترفع الفعالية؛ والمعرفة التقنية ترفع الكفاءة."
  - "المختبر غالبًا يحمل أخبارًا سيئة، والتحيّز التأكيدي يجعل تقبّلها صعبًا، فقدّم الـ defects بطريقة بنّاءة."
terms:
  - en: "Confirmation Bias"
    ar: "التحيّز التأكيدي"
    def: "The tendency to accept information that agrees with existing beliefs and resist information that contradicts them."
    defAr: "الميل لقبول المعلومات التي تتفق مع القناعات الحالية ومقاومة ما يناقضها."
    match: ["Confirmation Bias", "confirmation bias"]
  - en: "Domain Knowledge"
    ar: "المعرفة بمجال العمل"
    def: "Understanding of the business area the software serves, needed to communicate with users and business representatives."
    defAr: "فهم مجال العمل الذي تخدمه البرمجية، وهو ضروري للتواصل مع المستخدمين وممثلي العمل."
---
الاختبار عمل يتطلب مزيجًا من المعرفة والمهارات الشخصية. يذكر المنهج مجموعة من **المهارات العامة** المهمة بشكل خاص للمختبرين.

### المهارات المطلوبة — The Skills

<figure class="gx-figure gx-spectrum" aria-label="Generic skills for testers."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Testing knowledge</b><span>Use test techniques to increase test effectiveness.</span></div><div class="gx-spectrum-item"><b>Thoroughness</b><span>Carefulness, curiosity, attention to detail, being methodical.</span></div><div class="gx-spectrum-item"><b>Communication</b><span>Good communication, active listening, being a team player.</span></div><div class="gx-spectrum-item"><b>Thinking</b><span>Analytical thinking, critical thinking, creativity.</span></div><div class="gx-spectrum-item"><b>Technical knowledge</b><span>Increases test efficiency, e.g. using the right tools.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Domain knowledge</b><span>Understand and talk with end users and business representatives.</span></div></div><figcaption>Generic skills for testers.</figcaption></figure>

- **المعرفة بالاختبار:** لرفع **فعالية** الاختبار، مثلًا عبر استخدام تقنيات الاختبار لاختيار حالات تكشف defects أكثر.
- **الدقة والحرص والفضول والانتباه للتفاصيل والمنهجية:** لاكتشاف الـ defects، خصوصًا تلك التي يصعب العثور عليها.
- **مهارات التواصل الجيد والإصغاء الفعّال والعمل ضمن فريق:** للتعامل بفعالية مع كل أصحاب المصلحة، ونقل المعلومات للآخرين، والإبلاغ عن الـ defects ومناقشتها.
- **التفكير التحليلي والنقدي والإبداع:** لرفع فعالية الاختبار.
- **المعرفة التقنية:** لرفع **كفاءة** الاختبار، مثلًا عبر استخدام أدوات الاختبار المناسبة.
- **المعرفة بمجال العمل:** لفهم المستخدمين وممثلي العمل والتواصل معهم.

### المختبر حامل الأخبار السيئة — Testers Bring Bad News

المختبرون غالبًا هم من **يحملون الأخبار السيئة**: «هذه الميزة لا تعمل»، «هذا الإصدار غير جاهز». ومن الطبيعي أن يكون رد الفعل البشري لوم من يحمل الخبر.

يزيد الأمر صعوبة **التحيّز التأكيدي (Confirmation Bias)**: الميل لرفض المعلومات التي تناقض ما نؤمن به. المطوّر المقتنع بأن شيفرته صحيحة قد يجد صعوبة في تقبّل تقرير يقول العكس. وبعض الناس يرون الاختبار نشاطًا هدّامًا، رغم أنه يساهم كثيرًا في نجاح المشروع وجودة المنتج.

لذلك يجب تقديم المعلومات عن الـ defects والأعطال **بطريقة بنّاءة**: التركيز على الحقائق، وعلى المنتج لا على الشخص، وعلى الهدف المشترك وهو منتج أفضل.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Instead of "Your login page is broken again", write: "Login fails with a 500 error when the email contains a '+' (steps and logs attached). This blocks users of Gmail aliases. Happy to pair on reproducing it." Same defect, very different reaction.</p><p class="gx-ar" lang="ar" dir="rtl">بدل أن تقول «صفحة الدخول تبعك خربانة مرة ثانية»، اكتب: «تسجيل الدخول يفشل بخطأ 500 عندما يحتوي الإيميل على علامة '+' (الخطوات والسجلات مرفقة). هذا يمنع مستخدمي أسماء Gmail البديلة من الدخول. يسعدني أن نعيد إنتاجه معًا». الـ defect نفسه، لكن رد الفعل مختلف تمامًا.</p></aside>

<section class="gx-lab" data-lab="LAB-1.5.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Rewrite a Defect Report Constructively</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · أعد كتابة تقرير defect بطريقة بنّاءة</span></span><span class="gx-lab-meta">LAB-1.5.1 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> practise communicating a defect in a factual, neutral and helpful way.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> التدرّب على الإبلاغ عن defect بأسلوب واقعي ومحايد ومفيد.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Find a defect report or chat message about a bug that caused friction in your team.</span><span class="gx-ar" lang="ar" dir="rtl">ابحث عن تقرير defect أو رسالة في الشات عن defect سبّب توترًا في الفريق.</span></li><li><span class="gx-en" lang="en" dir="ltr">Remove any wording about people ("you", "again", "obviously"). Keep only facts.</span><span class="gx-ar" lang="ar" dir="rtl">احذف أي صياغة عن الأشخاص («إنت»، «مرة ثانية»، «واضح إنه»). أبقِ على الحقائق فقط.</span></li><li><span class="gx-en" lang="en" dir="ltr">Add what was expected, what actually happened, how to reproduce it and the impact on users.</span><span class="gx-ar" lang="ar" dir="rtl">أضف ما كان متوقعًا، وما حدث فعلًا، وكيف يُعاد إنتاجه، وأثره على المستخدمين.</span></li><li><span class="gx-en" lang="en" dir="ltr">End with an offer to help, such as pairing on reproduction or sharing test data.</span><span class="gx-ar" lang="ar" dir="rtl">اختم بعرض مساعدة، مثل إعادة الإنتاج معًا أو مشاركة بيانات الاختبار.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">A developer reading your new version learns what is wrong, why it matters and how to see it, without feeling judged. Nothing in it is about a person.</span><span class="gx-ar" lang="ar" dir="rtl">المطوّر الذي يقرأ النسخة الجديدة يفهم ما الخلل، ولماذا هو مهم، وكيف يراه، دون أن يشعر بأنه يُحاكَم. لا شيء فيها يتحدث عن شخص.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Note the pairing in the syllabus: testing knowledge raises effectiveness; technical knowledge raises efficiency. A question may swap them.</p><p class="gx-ar" lang="ar" dir="rtl">لاحظ الربط في المنهج: المعرفة بالاختبار ترفع الفعالية؛ والمعرفة التقنية ترفع الكفاءة. قد يبدّل السؤال بينهما.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking a good tester only needs technical skills. Communication, curiosity and domain knowledge are listed alongside them, and constructive communication is singled out as essential.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن المختبر الجيد يحتاج مهارات تقنية فقط. التواصل والفضول والمعرفة بمجال العمل مذكورة بجانبها، والتواصل البنّاء بالذات مذكور كأمر أساسي.</p></aside>

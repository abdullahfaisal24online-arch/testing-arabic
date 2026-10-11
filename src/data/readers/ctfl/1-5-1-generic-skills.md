---
order: 12
slug: "1-5-1"
chapter: 1
group: "1.5"
section: "1.5.1"
title: "Generic Skills Required for Testing"
titleAr: "المهارات العامة المطلوبة للاختبار"
objectives: "FL-1.5.1 · K2"
minutes: 12
lo:
  FL-1.5.1: "Give examples of the generic skills needed for testing."
loAr:
  FL-1.5.1: "تعطي أمثلة على المهارات العامة اللازمة للاختبار."
labs: ["LAB-1.5.1"]
takeaways:
  - "Testers need testing knowledge, thoroughness and curiosity, communication, analytical and critical thinking, technical knowledge and domain knowledge."
  - "Testing knowledge improves effectiveness; technical knowledge improves efficiency."
  - "Testers often bring bad news, and confirmation bias makes it hard to accept, so communicate defects constructively."
  - "A skill is the ability to do something well, coming from knowledge, practice and aptitude."
takeawaysAr:
  - "المختبر يحتاج معرفة بالاختبار، ودقة وفضولًا، ومهارات تواصل، وتفكيرًا تحليليًا ونقديًا، ومعرفة تقنية، ومعرفة بمجال العمل."
  - "المعرفة بالاختبار ترفع الفعالية؛ والمعرفة التقنية ترفع الكفاءة."
  - "المختبر غالبًا يحمل أخبارًا سيئة، والتحيّز التأكيدي يجعل تقبّلها صعبًا، فقدّم الـ defects بطريقة بنّاءة."
  - "المهارة هي القدرة على أداء شيء ما بشكل جيد، وتأتي من المعرفة والممارسة والاستعداد الفطري."
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
يعرّف السيليبس **المهارة (Skill)** بأنها **القدرة على أداء شيء ما بشكل جيد**، وهي تأتي من ثلاثة مصادر: **المعرفة**، و**الممارسة**، و**الاستعداد الفطري (Aptitude)**. لذلك لا تكفي قراءة كتاب لتصبح مختبرًا جيدًا، ولا تكفي الموهبة وحدها دون تدريب. ويقول السيليبس إن المختبر الجيد يحتاج مهارات أساسية ليؤدي عمله جيدًا، ويجب أن يكون **عضوًا فعّالًا في الفريق** (القسم 1.5.2)، وقادرًا على الاختبار **بمستويات مختلفة من الاستقلالية** (القسم 1.5.3).

المهارات التالية **عامة**، أي أنها مفيدة في مهن كثيرة، لكنها **وثيقة الصلة بالاختبار بشكل خاص**. والأهم في الامتحان وفي العمل: لكل مهارة **سبب** يذكره السيليبس بين قوسين.

<figure class="gx-figure gx-spectrum" aria-label="Generic skills for testers."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Testing knowledge</b><span>Use test techniques to increase test effectiveness.</span></div><div class="gx-spectrum-item"><b>Thoroughness</b><span>Carefulness, curiosity, attention to detail, being methodical.</span></div><div class="gx-spectrum-item"><b>Communication</b><span>Good communication, active listening, being a team player.</span></div><div class="gx-spectrum-item"><b>Thinking</b><span>Analytical thinking, critical thinking, creativity.</span></div><div class="gx-spectrum-item"><b>Technical knowledge</b><span>Increases test efficiency, e.g. using the right tools.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Domain knowledge</b><span>Understand and talk with end users and business representatives.</span></div></div><figcaption>Generic skills for testers.</figcaption></figure>

### المهارات الست وأسبابها — The Skills and Why

**1. المعرفة بالاختبار (Testing Knowledge)** لرفع **فعالية (Effectiveness)** الاختبار، مثلًا باستخدام تقنيات الاختبار. المختبر الذي يعرف تحليل القيم الحدّية يختبر 19.99 و20.00 عند حد التوصيل المجاني، بدل قيم عشوائية مثل 15 و30 لا تكشف شيئًا.

**2. الدقة والحرص والفضول والانتباه للتفاصيل والمنهجية (Thoroughness, Carefulness, Curiosity, Attention to Details, Being Methodical)** لاكتشاف الـ defects، **خصوصًا تلك التي يصعب العثور عليها**. الفضول يدفع المختبر لسؤال: «ماذا لو ألغى الزبون الطلب بعد استخدام الكوبون؟ هل يعود الكوبون صالحًا؟»، والمنهجية تضمن ألا ينسى اختبار الواجهة العربية بعد إنهاء الإنجليزية.

**3. مهارات التواصل الجيد، والإصغاء الفعّال، والعمل ضمن فريق (Good Communication Skills, Active Listening, Being a Team Player)** لـ **التفاعل بفعالية مع كل أصحاب المصلحة**، و**نقل المعلومات للآخرين**، و**أن يُفهَم كلامه**، و**الإبلاغ عن الـ defects ومناقشتها**. الإصغاء الفعّال في جلسة تحسين القصص قد يكشف أن مالك المنتج يقصد شيئًا مختلفًا عمّا كُتب.

**4. التفكير التحليلي والتفكير النقدي والإبداع (Analytical Thinking, Critical Thinking, Creativity)** لرفع **فعالية** الاختبار. التحليل يفكك قاعدة الكوبون إلى شروط، والتفكير النقدي يشكك في الافتراض «الزبون لن يدخل كوبونين»، والإبداع يبتكر سيناريو مثل تغيير لغة التطبيق في منتصف الدفع.

**5. المعرفة التقنية (Technical Knowledge)** لرفع **كفاءة (Efficiency)** الاختبار، مثلًا باستخدام أدوات الاختبار المناسبة. المختبر الذي يستطيع استدعاء واجهة API مباشرة ينشئ 20 طلبًا تجريبيًا في دقيقة، بدل إنشائها يدويًا من التطبيق في ساعة.

**6. المعرفة بمجال العمل (Domain Knowledge)** لـ **فهم المستخدمين النهائيين وممثلي العمل والتواصل معهم**. من يفهم عمل المطاعم يعرف أن المطعم قد يرفض الطلب لنفاد صنف، فيختبر هذا السيناريو حتى لو لم يُذكر صراحة.

### الفعالية والكفاءة — Effectiveness vs Efficiency

لاحظ أن السيليبس يربط المعرفة بالاختبار والتفكير التحليلي **بالفعالية**، أي اختبار الأشياء الصحيحة وإيجاد defects أكثر أهمية. ويربط المعرفة التقنية **بالكفاءة**، أي إنجاز الاختبار بجهد ووقت أقل. المختبر الفعّال يختار الاختبار الصحيح، والمختبر الكفء ينفذه بسرعة.

### المختبر حامل الأخبار السيئة — Testers Bring Bad News

المختبرون غالبًا هم من **يحملون الأخبار السيئة**: «الخصم يُحسب بشكل خاطئ»، «الإصدار غير جاهز». ومن **السمات البشرية الشائعة لوم من يحمل الخبر السيئ**. لهذا يقول السيليبس إن **مهارات التواصل حاسمة** للمختبرين، ويذكر ثلاثة أسباب أخرى تزيد الأمر صعوبة:

- **نتائج الاختبار قد تُفهم كنقد** للمنتج و**لكاتبه**: المطوّر قد يقرأ تقرير الـ defect كأنه حكم على كفاءته.
- **التحيّز التأكيدي (Confirmation Bias)** يجعل من الصعب **تقبّل معلومات تخالف القناعات الحالية**: المطوّر المقتنع بأن حساب الخصم صحيح سيبحث أولًا عن خطأ في الاختبار.
- **بعض الناس يرون الاختبار نشاطًا هدّامًا**، **رغم أنه يساهم كثيرًا في نجاح المشروع وجودة المنتج**.

ولتحسين هذه النظرة، يجب **إيصال المعلومات عن الـ defects والأعطال بطريقة بنّاءة**: التركيز على الحقائق والأدلة، وعلى المنتج لا الشخص، وعلى الأثر على المستخدم، وعلى الهدف المشترك وهو منتج أفضل.

### مثال: defect الكوبون — Example: Reporting the Coupon Defect

اكتشف المختبر أن كوبون 10% على طلب قيمته 20.00 دينارًا يُلغي التوصيل المجاني، فيدفع الزبون 19.50 بدل 18.00. قارن بين رسالتين في قناة الفريق:

- **رسالة هدّامة:** «الكوبونات أفسدت كل شيء مرة أخرى، من كتب هذا الكود؟». تركّز على شخص، ولا تقدّم دليلًا، وتستدعي الدفاع عن النفس بدل الإصلاح.
- **رسالة بنّاءة:** «طلب بقيمة 20.00 مع كوبون 10%: توقعتُ إجمالي 18.00 مع توصيل مجاني، والفعلي 19.50 لأن حد التوصيل المجاني فُحص بعد الخصم فأضيفت رسوم 1.50. الخطوات مرفقة. يبدو أن المتطلب لا يحدد هل يُحسب حد التوصيل المجاني قبل الخصم أم بعده؛ هل نسأل مالك المنتج معًا؟».

الرسالة الثانية تحترم الحقائق، وتوضح الأثر على الزبون، وتعترف بأن السبب قد يكون في المتطلب لا في الكود، فتقلل أثر التحيّز التأكيدي وتحوّل الخبر السيئ إلى مشكلة يحلها الفريق معًا. هكذا يرى الآخرون أن الاختبار يحمي المنتج والزبون، لا أنه يهدم عمل الزملاء.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Instead of "Your login page is broken again", write: "Login fails with a 500 error when the email contains a '+' (steps and logs attached). This blocks users of Gmail aliases. Happy to pair on reproducing it." Same defect, very different reaction.</p><p class="gx-ar" lang="ar" dir="rtl">بدل أن تقول «صفحة الدخول التي كتبتها معطّلة مرة أخرى»، اكتب: «تسجيل الدخول يفشل بخطأ 500 عندما يحتوي الإيميل على علامة '+' (الخطوات والسجلات مرفقة). هذا يمنع مستخدمي أسماء Gmail البديلة من الدخول. يسعدني أن نعيد إنتاجه معًا». الـ defect نفسه، لكن رد الفعل مختلف تمامًا.</p></aside>

<section class="gx-lab" data-lab="LAB-1.5.1"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Rewrite a Defect Report Constructively</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · أعد كتابة تقرير defect بطريقة بنّاءة</span></span><span class="gx-lab-meta">LAB-1.5.1 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> practise communicating a defect in a factual, neutral and helpful way.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> التدرّب على الإبلاغ عن defect بأسلوب واقعي ومحايد ومفيد.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Find a defect report or chat message about a bug that caused friction in your team.</span><span class="gx-ar" lang="ar" dir="rtl">ابحث عن تقرير defect أو رسالة في الشات عن defect سبّب توترًا في الفريق.</span></li><li><span class="gx-en" lang="en" dir="ltr">Remove any wording about people ("you", "again", "obviously"). Keep only facts.</span><span class="gx-ar" lang="ar" dir="rtl">احذف أي صياغة عن الأشخاص («إنت»، «مرة ثانية»، «واضح إنه»). أبقِ على الحقائق فقط.</span></li><li><span class="gx-en" lang="en" dir="ltr">Add what was expected, what actually happened, how to reproduce it and the impact on users.</span><span class="gx-ar" lang="ar" dir="rtl">أضف ما كان متوقعًا، وما حدث فعلًا، وكيف يُعاد إنتاجه، وأثره على المستخدمين.</span></li><li><span class="gx-en" lang="en" dir="ltr">End with an offer to help, such as pairing on reproduction or sharing test data.</span><span class="gx-ar" lang="ar" dir="rtl">اختم بعرض مساعدة، مثل إعادة الإنتاج معًا أو مشاركة بيانات الاختبار.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">A developer reading your new version learns what is wrong, why it matters and how to see it, without feeling judged. Nothing in it is about a person.</span><span class="gx-ar" lang="ar" dir="rtl">المطوّر الذي يقرأ النسخة الجديدة يفهم ما الخلل، ولماذا هو مهم، وكيف يراه، دون أن يشعر بأنه يُحاكَم. لا شيء فيها يتحدث عن شخص.</span></p></details></div></section>

### لا تخلط بين — Don't Confuse

| Skill | Purpose stated in the syllabus |
| --- | --- |
| Testing knowledge | Increase effectiveness (e.g., test techniques) |
| Analytical and critical thinking, creativity | Increase effectiveness |
| Technical knowledge | Increase efficiency (e.g., test tools) |
| Thoroughness, curiosity, attention to detail | Find defects, especially hard-to-find ones |
| Communication, active listening, team player | Interact with stakeholders, report and discuss defects |
| Domain knowledge | Understand and communicate with end users and business representatives |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Note the pairing in the syllabus: testing knowledge raises effectiveness; technical knowledge raises efficiency. A question may swap them.</p><p class="gx-ar" lang="ar" dir="rtl">لاحظ الربط في المنهج: المعرفة بالاختبار ترفع الفعالية؛ والمعرفة التقنية ترفع الكفاءة. قد يبدّل السؤال بينهما.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking a good tester only needs technical skills. Communication, curiosity and domain knowledge are listed alongside them, and constructive communication is singled out as essential.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن المختبر الجيد يحتاج مهارات تقنية فقط. التواصل والفضول والمعرفة بمجال العمل مذكورة بجانبها، والتواصل البنّاء بالذات مذكور كأمر أساسي.</p></aside>

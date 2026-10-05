---
order: 6
slug: "1-3"
chapter: 1
section: "1.3"
title: "Testing Principles"
titleAr: "مبادئ الاختبار"
objectives: "FL-1.3.1 · K2"
minutes: 12
lo:
  FL-1.3.1: "Explain the seven testing principles."
loAr:
  FL-1.3.1: "تشرح مبادئ الاختبار السبعة."
labs: ["LAB-1.3"]
takeaways:
  - "Testing can show that defects are present, but it cannot prove they are absent."
  - "Testing everything is impossible, so use techniques, prioritisation and risk to focus."
  - "Testing early, both static and dynamic, saves time and money."
  - "Defects tend to cluster in a small number of components."
  - "Repeating the same tests finds fewer new defects over time, so tests need updating."
  - "There is no single right way to test: it depends on the context."
  - "A product with no known defects can still fail to meet users' needs."
takeawaysAr:
  - "الاختبار يُظهر وجود العيوب، لكنه لا يثبت عدم وجودها."
  - "اختبار كل شيء مستحيل، فاستخدم التقنيات والأولويات والمخاطر لتركيز الجهد."
  - "الاختبار المبكر، الساكن والديناميكي، يوفّر الوقت والمال."
  - "العيوب تميل للتجمّع في عدد قليل من المكوّنات."
  - "تكرار الاختبارات نفسها يجد عيوبًا جديدة أقل مع الوقت، فتحتاج الاختبارات إلى تحديث."
  - "لا توجد طريقة واحدة صحيحة للاختبار: الأمر يعتمد على السياق."
  - "منتج بلا عيوب معروفة قد يفشل مع ذلك في تلبية احتياجات المستخدمين."
terms:
  - en: "Exhaustive Testing"
    ar: "الاختبار الشامل"
    def: "A test approach in which all combinations of input values and preconditions are tested. Impossible except in trivial cases."
    defAr: "نهج اختبار تُختبر فيه كل تركيبات قيم المدخلات والشروط المسبقة. مستحيل إلا في الحالات البسيطة جدًا."
    match: ["Exhaustive Testing", "exhaustive testing"]
  - en: "Defect Clustering"
    ar: "تجمّع العيوب"
    def: "The observation that a small number of components usually contain most of the defects found."
    defAr: "الملاحظة بأن عددًا قليلًا من المكوّنات يحتوي عادة معظم العيوب المكتشفة."
  - en: "Pareto Principle"
    ar: "مبدأ باريتو"
    def: "The observation that roughly 80% of effects come from 20% of causes; in testing, most defects come from a few components."
    defAr: "الملاحظة بأن نحو 80% من النتائج تأتي من 20% من الأسباب؛ وفي الاختبار: معظم العيوب تأتي من مكوّنات قليلة."
  - en: "Shift Left"
    ar: "النقل لليسار"
    def: "An approach where testing activities are performed earlier in the software development lifecycle."
    defAr: "نهج تُنفّذ فيه أنشطة الاختبار في وقت أبكر من دورة حياة تطوير البرمجيات."
    match: ["Shift Left", "shift left", "shift-left"]
---
على مدى عقود، لاحظ العاملون في الاختبار مجموعة من القواعد العامة التي تنطبق على معظم المشاريع. يجمعها المنهج في **سبعة مبادئ**. هي ليست قوانين صارمة، لكنها إرشادات تساعدك على اتخاذ قرارات اختبار أفضل.

<figure class="gx-figure gx-spectrum" aria-label="The seven testing principles."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>1 · Presence, not absence</b><span>Testing shows defects exist, not that none remain.</span></div><div class="gx-spectrum-item"><b>2 · Exhaustive is impossible</b><span>Focus with techniques, priorities and risk.</span></div><div class="gx-spectrum-item"><b>3 · Early testing saves</b><span>Find defects before they spread.</span></div><div class="gx-spectrum-item"><b>4 · Defects cluster</b><span>A few components hold most defects.</span></div><div class="gx-spectrum-item"><b>5 · Tests wear out</b><span>Same tests, fewer new defects.</span></div><div class="gx-spectrum-item"><b>6 · Context dependent</b><span>No single approach fits all.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>7 · Absence-of-defects fallacy</b><span>Correct is not the same as useful.</span></div></div><figcaption>The seven testing principles.</figcaption></figure>

### المبدأ 1: الاختبار يُظهر الوجود لا الغياب — Principle 1: Testing Shows the Presence, Not the Absence of Defects

الاختبار يستطيع أن يُظهر أن في موضوع الاختبار عيوبًا، لكنه **لا يستطيع إثبات خلوّه من العيوب**. الاختبار يقلل احتمال بقاء عيوب غير مكتشفة، لكن حتى لو لم نجد أي عيب، فهذا لا يثبت أن البرمجية صحيحة تمامًا.

### المبدأ 2: الاختبار الشامل مستحيل — Principle 2: Exhaustive Testing Is Impossible

اختبار كل شيء، أي كل تركيبات المدخلات والشروط، غير ممكن إلا في حالات بسيطة جدًا. حقل واحد يقبل نصًا من 20 حرفًا له عدد احتمالات يفوق ما يمكن تشغيله في عمر كامل.

لذلك، بدل محاولة اختبار كل شيء، نركّز الجهد باستخدام **تقنيات الاختبار**، و**ترتيب أولويات حالات الاختبار**، و**الاختبار المبني على المخاطر**.

### المبدأ 3: الاختبار المبكر يوفّر الوقت والمال — Principle 3: Early Testing Saves Time and Money

العيب الذي يُكتشف ويُزال مبكرًا لا ينتقل إلى مخرجات العمل اللاحقة. متطلب خاطئ يُصحَّح في المراجعة أرخص بكثير من شيفرة مبنية عليه ثم عطل في الإنتاج.

تكلفة الجودة تنخفض لأن الأعطال المتأخرة تقل. لذلك يجب أن يبدأ الاختبار، **الساكن والديناميكي**، في أبكر وقت ممكن. هذه الفكرة هي أساس نهج **النقل لليسار (Shift Left)** الذي ستراه في الفصل الثاني.

### المبدأ 4: العيوب تتجمّع — Principle 4: Defects Cluster Together

عادة يكون معظم العيوب المكتشفة، ومعظم الأعطال في التشغيل، في **عدد قليل من مكوّنات النظام**. هذا مثال على **مبدأ باريتو (Pareto Principle)**.

تجمّعات العيوب المتوقعة، أو التي لوحظت فعلًا أثناء الاختبار أو التشغيل، مدخل مهم للاختبار المبني على المخاطر: نركّز الجهد حيث يُرجّح وجود العيوب.

### المبدأ 5: الاختبارات تستهلك نفسها — Principle 5: Tests Wear Out

إذا كررت الاختبارات نفسها مرات كثيرة، تقل فعاليتها في اكتشاف عيوب جديدة. الحل: تعديل الاختبارات الحالية وبيانات الاختبار، أو كتابة اختبارات جديدة.

لكن في بعض الحالات يكون تكرار الاختبارات نفسها مفيدًا، كما في **اختبار الانحدار المؤتمت**، لأن هدفه التأكد من أن ما كان يعمل ما زال يعمل، لا اكتشاف عيوب جديدة.

### المبدأ 6: الاختبار يعتمد على السياق — Principle 6: Testing Is Context Dependent

لا يوجد نهج اختبار واحد يصلح لكل الحالات. اختبار نظام تحكم في جهاز طبي يختلف جذريًا عن اختبار لعبة على الموبايل أو موقع تسويقي. الاختبار يُنفَّذ بطرق مختلفة حسب السياق.

### المبدأ 7: مغالطة غياب العيوب — Principle 7: Absence-of-Defects Fallacy

من الخطأ توقع أن التحقق من البرمجية وحده يضمن نجاح النظام. يمكنك اختبار كل المتطلبات المحددة بدقة، وإصلاح كل العيوب المكتشفة، ومع ذلك تنتج نظامًا **لا يلبّي احتياجات المستخدمين أو أهداف العمل**، أو أضعف من المنافسين.

لذلك، إلى جانب **التحقق (Verification)**، يجب إجراء **المصادقة (Validation)**.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A team ran 600 automated tests on a new expense app, all green, no open defects. After launch, employees kept using spreadsheets because submitting a receipt took nine taps. The app was correct (verification passed) but not useful (validation was missing): principle 7.</p><p class="gx-ar" lang="ar" dir="rtl">فريق شغّل 600 اختبار مؤتمت على تطبيق مصاريف جديد، كلها ناجحة، ولا عيوب مفتوحة. بعد الإطلاق استمر الموظفون باستخدام جداول البيانات، لأن رفع إيصال واحد يحتاج تسع نقرات. التطبيق كان صحيحًا (التحقق نجح) لكنه غير مفيد (المصادقة غابت): هذا المبدأ السابع.</p></aside>

<section class="gx-lab" data-lab="LAB-1.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Spot the Principles in Your Project</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · ابحث عن المبادئ في مشروعك</span></span><span class="gx-lab-meta">LAB-1.3 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> connect each principle to something you have seen at work.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> ربط كل مبدأ بشيء رأيته فعلًا في العمل.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Open your defect tracker and count defects per module for the last release. Do a few modules hold most of them? (principle 4)</span><span class="gx-ar" lang="ar" dir="rtl">افتح أداة متابعة العيوب واحسب العيوب لكل وحدة في آخر إصدار. هل تحتوي وحدات قليلة على معظمها؟ (المبدأ 4)</span></li><li><span class="gx-en" lang="en" dir="ltr">Find a regression suite that has not found a new defect in months. Decide what to change or add. (principle 5)</span><span class="gx-ar" lang="ar" dir="rtl">ابحث عن مجموعة اختبارات انحدار لم تكتشف عيبًا جديدًا منذ أشهر. قرر ماذا تعدّل أو تضيف. (المبدأ 5)</span></li><li><span class="gx-en" lang="en" dir="ltr">Find one defect that started in requirements and was found late. Estimate what it would have cost to catch it in a review. (principle 3)</span><span class="gx-ar" lang="ar" dir="rtl">ابحث عن عيب بدأ في المتطلبات واكتُشف متأخرًا. قدّر كم كانت ستكون تكلفته لو اكتُشف في مراجعة. (المبدأ 3)</span></li><li><span class="gx-en" lang="en" dir="ltr">Write one sentence on how testing in your project differs from another project you know. (principle 6)</span><span class="gx-ar" lang="ar" dir="rtl">اكتب جملة واحدة عن اختلاف الاختبار في مشروعك عن مشروع آخر تعرفه. (المبدأ 6)</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You can name a real example for at least four principles and say what you would do differently because of each one, such as focusing more testing on the defect-heavy module or refreshing a stale suite.</span><span class="gx-ar" lang="ar" dir="rtl">تستطيع ذكر مثال حقيقي لأربعة مبادئ على الأقل، وتقول ماذا ستغيّر بسبب كل منها، مثل تركيز اختبار أكثر على الوحدة كثيرة العيوب، أو تجديد مجموعة اختبارات قديمة.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Exam questions often describe a situation and ask which principle it shows. Key signals: "no defects found, so it must be correct" → principle 1; "too many combinations" → 2; "fix it in requirements" → 3; "most defects in one module" → 4; "same tests find nothing new" → 5; "a medical device needs a different approach" → 6; "meets the spec but users reject it" → 7.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة الامتحان كثيرًا ما تصف موقفًا وتسأل أي مبدأ يوضحه. علامات مميزة: «لم نجد عيوبًا إذن البرمجية صحيحة» ← المبدأ 1؛ «تركيبات كثيرة جدًا» ← 2؛ «صحّحه في المتطلبات» ← 3؛ «معظم العيوب في وحدة واحدة» ← 4؛ «الاختبارات نفسها لا تجد جديدًا» ← 5؛ «جهاز طبي يحتاج نهجًا مختلفًا» ← 6؛ «يطابق المواصفات لكن المستخدمين رفضوه» ← 7.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Using older names. Earlier syllabus versions called principle 5 the "pesticide paradox". In v4 it is "Tests wear out", with the same meaning. Also, principle 7 does not say defects don't matter; it says fixing defects alone is not enough.</p><p class="gx-ar" lang="ar" dir="rtl">استخدام الأسماء القديمة. نسخ المنهج السابقة سمّت المبدأ الخامس «مفارقة المبيدات» (Pesticide Paradox)، وفي النسخة الرابعة صار اسمه «الاختبارات تستهلك نفسها» (Tests wear out) بالمعنى نفسه. كذلك المبدأ السابع لا يقول إن العيوب غير مهمة؛ بل يقول إن إصلاح العيوب وحده لا يكفي.</p></aside>

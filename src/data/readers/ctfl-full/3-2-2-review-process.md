---
order: 5
slug: "3-2-2"
chapter: 3
group: "3.2"
section: "3.2.2"
title: "Review Process Activities"
titleAr: "أنشطة عملية المراجعة"
objectives: "FL-3.2.2 · K2"
minutes: 13
lo:
  FL-3.2.2: "Summarise the activities of the review process."
loAr:
  FL-3.2.2: "تلخّص أنشطة عملية المراجعة."
labs: ["LAB-3.2.2"]
takeaways:
  - "ISO/IEC 20246 defines a generic review process; its activities are planning, review initiation, individual review, communication and analysis, and fixing and reporting."
  - "Planning defines the scope: purpose, work product, quality characteristics, focus areas, exit criteria, standards, effort and timeframes."
  - "In individual review, each reviewer assesses the work product, often with checklist-based or scenario-based reviewing, and logs anomalies, recommendations and questions."
  - "Anomalies are not necessarily defects; communication and analysis decides their status, ownership and actions."
  - "Fixing and reporting creates defect reports, accepts the work product when exit criteria are met, and reports the results."
  - "The process is flexible: the more formal the review, the more of its tasks are needed, and a large work product may need several review cycles."
takeawaysAr:
  - "معيار ISO/IEC 20246 يعرّف عملية مراجعة عامة؛ أنشطتها: التخطيط، وبدء المراجعة، والمراجعة الفردية، والتواصل والتحليل، والإصلاح والتقرير."
  - "التخطيط يحدد النطاق: الغرض، والمُخرَج، وخصائص الجودة، ومناطق التركيز، ومعايير الخروج، والمعايير، والجهد، والأطر الزمنية."
  - "في المراجعة الفردية يقيّم كل مراجع المُخرَج، غالبًا بأسلوب قائمة التحقق أو السيناريوهات، ويسجّل الحالات الشاذة والتوصيات والأسئلة."
  - "الحالات الشاذة ليست بالضرورة defects؛ ونشاط التواصل والتحليل يقرر حالتها ومسؤوليتها والإجراءات المطلوبة."
  - "الإصلاح والتقرير يُنشئ تقارير الـ defects، ويقبل المُخرَج عند تحقق معايير الخروج، ويقدّم النتائج."
  - "العملية مرنة: كلما زادت رسمية المراجعة احتجنا مهامّ أكثر منها، والمُخرَج الكبير قد يحتاج عدة دورات مراجعة."
terms:
  - en: "Checklist-based Reviewing"
    ar: "المراجعة بقائمة التحقق"
    def: "A review technique where reviewers use a checklist of questions or items to examine the work product."
    defAr: "أسلوب مراجعة يستخدم فيه المراجعون قائمة أسئلة أو بنود لفحص المُخرَج."
  - en: "Scenario-based Reviewing"
    ar: "المراجعة بالسيناريوهات"
    def: "A review technique where reviewers follow usage scenarios to examine the work product."
    defAr: "أسلوب مراجعة يتّبع فيه المراجعون سيناريوهات استخدام لفحص المُخرَج."
---
المراجعة الجيدة ليست «اجتماعًا نقرأ فيه الوثيقة معًا». هي عملية لها بداية ونهاية وأنشطة واضحة. معيار **ISO/IEC 20246** يعرّف **عملية مراجعة عامة (generic review process)** توفّر إطارًا **منظّمًا لكنه مرن**، يمكن تكييف عملية مراجعة محددة منه لتناسب موقفًا معينًا. والقاعدة: **كلما كانت المراجعة المطلوبة أكثر رسمية، احتجنا إلى عدد أكبر من المهام** الموصوفة في كل نشاط. مراجعة غير رسمية لتعديل صغير قد تمر بالأنشطة الخمسة في عشر دقائق، بينما تفتيش (Inspection) لمواصفات الدفع يطبّق كل مهمة بالتفصيل ويوثّقها.

وهناك ملاحظة عملية مهمة: **حجم كثير من مخرجات العمل يجعلها أكبر من أن تغطيها مراجعة واحدة**، لذلك **قد تُستدعى العملية عدة مرات** حتى تكتمل مراجعة المُخرَج كله. وثيقة متطلبات تطبيق التوصيل مثلًا تُراجَع على دفعات: الطلب والسلة، ثم الدفع والكوبونات، ثم تتبّع التوصيل.

<figure class="gx-figure" aria-label="The generic review process (ISO/IEC 20246)."><div class="gx-flow-row"><span class="gx-flow-node">Planning</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Initiation</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Individual review</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Communication & analysis</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Fixing & reporting</span></div><figcaption>The generic review process (ISO/IEC 20246).</figcaption></figure>

سنتابع مثالًا واحدًا عبر الأنشطة الخمسة: **مراجعة قصة المستخدم «تطبيق كوبون الخصم»** في تطبيق التوصيل.

### 1. التخطيط — Planning

في التخطيط يُحدَّد **نطاق المراجعة (scope)**، ويشمل:

- **الغرض** من المراجعة: اكتشاف الغموض والنقص في القصة.
- **المُخرَج** الذي سيُراجَع: القصة ومعايير قبولها، لا شاشة الدفع كلها.
- **خصائص الجودة** المطلوب تقييمها: الاكتمال، والوضوح، وقابلية الاختبار.
- **مناطق التركيز**: قواعد الكوبون (نوعه، تاريخ انتهائه، كوبون واحد لكل طلب).
- **معايير الخروج (exit criteria)**: مثل «لا توجد مشكلات كبيرة مفتوحة».
- **المعلومات المساندة** مثل المعايير: قالب كتابة القصص وتعريف الجاهزية.
- **الجهد والأطر الزمنية**: ساعة واحدة، تنتهي قبل جلسة التخطيط للـ sprint.

لماذا كل هذا؟ لأن المراجعة بلا نطاق تنتهي إما بتعليقات مشتتة لا تُحصى، أو بلا تعليقات تقريبًا لأن أحدًا لا يعرف عمّ يبحث.

### 2. بدء المراجعة — Review Initiation

الهدف هنا **التأكد من أن كل شيء وكل شخص جاهز للبدء**:

- لكل مشارك **وصول إلى المُخرَج** قيد المراجعة (رابط القصة يعمل، والصلاحيات صحيحة).
- كل مشارك **يفهم دوره ومسؤولياته** في هذه المراجعة.
- كل مشارك **يتسلم كل ما يحتاجه** لأداء المراجعة: قائمة التحقق، وقواعد العمل، وأي وثيقة مرجعية.

في مثالنا: يُرسَل إلى المختبرَين ومطوّر الخلفية رابط القصة مع قائمة تحقق من خمسة أسئلة، ويُوضَّح لكل منهم ما يُنتظر منه.

### 3. المراجعة الفردية — Individual Review

**كل مراجع** يُجري **مراجعة فردية** لتقييم جودة المُخرَج، ولتحديد **الحالات الشاذة (anomalies)** و**التوصيات (recommendations)** و**الأسئلة (questions)**، مستخدمًا **أسلوب مراجعة واحدًا أو أكثر**، مثل:

- **المراجعة بقائمة التحقق (checklist-based reviewing)**: يمر المراجع على أسئلة محددة مسبقًا، مثل «هل لكل معيار قبول نتيجة متوقعة واضحة؟».
- **المراجعة بالسيناريوهات (scenario-based reviewing)**: يتتبّع المراجع سيناريو استخدام، مثل «زبون يطبّق كوبونًا منتهيًا ثم يحاول كوبونًا آخر».

ويقدّم المعيار ISO/IEC 20246 مزيدًا من التفاصيل عن أساليب المراجعة. ويُسجّل المراجعون **كل** ما وجدوه. لماذا «فردية»؟ لأن كل شخص يرى المُخرَج من زاويته دون أن يتأثر برأي الآخرين، فتظهر حالات شاذة أكثر وأكثر تنوعًا.

### 4. التواصل والتحليل — Communication and Analysis

الحالات الشاذة المكتشفة **ليست بالضرورة defects**؛ قد تكون سوء فهم من المراجع، أو سلوكًا مقصودًا. لذلك يجب **تحليلها ومناقشتها كلها**. ولكل حالة شاذة يُتّخذ قرار بشأن:

- **حالتها (status)**: defect، أو ليست defect، أو سؤال يحتاج جوابًا.
- **المسؤول عنها (ownership)**: من سيتابعها.
- **الإجراءات المطلوبة (required actions)**.

يتم هذا عادةً في **اجتماع مراجعة**، يقرر فيه المشاركون أيضًا **مستوى جودة** المُخرَج المراجَع و**إجراءات المتابعة** المطلوبة. وقد تلزم **مراجعة متابعة (follow-up review)** لإكمال الإجراءات. في مثالنا، ملاحظة «لا يُذكر هل يُطبَّق الكوبون على رسوم التوصيل 1.50» تتحول إلى defect يتولاه مالك المنتج، بينما يتبيّن أن ملاحظة أخرى ليست defect لأن القاعدة موجودة في قصة أخرى.

### 5. الإصلاح والتقرير — Fixing and Reporting

- يُنشأ **تقرير defect (defect report)** لكل defect، حتى **تُتابَع الإجراءات التصحيحية**.
- عندما **تتحقق معايير الخروج**، يمكن **قبول** المُخرَج.
- تُرفع **نتائج المراجعة** في تقرير.

لماذا تقرير defect لكل defect؟ لأن ما يُقال في الاجتماع يُنسى بسرعة؛ التقرير يضمن أن لكل defect مسؤولًا وحالة تُتابَع حتى الإغلاق. ولماذا ننتظر معايير الخروج؟ لأنها الشرط الذي اتُّفق عليه في التخطيط، فيكون قرار القبول موضوعيًا لا مزاجيًا. في مثالنا، يحدّث مالك المنتج القصة، ويتحقق قائد المراجعة من أنه لم تبق مشكلات كبيرة مفتوحة، فتُعتبر القصة جاهزة لتدخل الـ sprint.

### لا تخلط بين — Don't Confuse

| Activity | Key output | Typical mix-up |
| --- | --- | --- |
| Planning | Scope and exit criteria | Not the moment to look for anomalies |
| Review initiation | Everyone prepared, has access and materials | Confused with planning |
| Individual review | Logged anomalies, recommendations, questions | Status of anomalies is not decided here |
| Communication and analysis | Decision on status, ownership, actions; quality level | Not every anomaly becomes a defect |
| Fixing and reporting | Defect reports, acceptance, review report | Acceptance only when exit criteria are met |

<section class="gx-lab" data-lab="LAB-3.2.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Run a Small Review of One User Story</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · أجرِ مراجعة صغيرة لقصة مستخدم واحدة</span></span><span class="gx-lab-meta">LAB-3.2.2 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> go through all five review activities in 30 minutes.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> المرور على أنشطة المراجعة الخمسة خلال 30 دقيقة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Planning: pick one story, define the purpose (find ambiguities), the focus (acceptance criteria) and an exit criterion ("no open major issues").</span><span class="gx-ar" lang="ar" dir="rtl">التخطيط: اختر قصة، وحدد الغرض (اكتشاف الغموض)، والتركيز (معايير القبول)، ومعيار الخروج («لا مشكلات كبيرة مفتوحة»).</span></li><li><span class="gx-en" lang="en" dir="ltr">Initiation: send the story and a five-question checklist to two reviewers.</span><span class="gx-ar" lang="ar" dir="rtl">البدء: أرسل القصة وقائمة تحقق من خمسة أسئلة لمراجعَين اثنين.</span></li><li><span class="gx-en" lang="en" dir="ltr">Individual review: each reviewer logs anomalies, recommendations and questions on their own for 10 minutes.</span><span class="gx-ar" lang="ar" dir="rtl">المراجعة الفردية: كل مراجع يسجّل الحالات الشاذة والتوصيات والأسئلة بمفرده لمدة 10 دقائق.</span></li><li><span class="gx-en" lang="en" dir="ltr">Communication and analysis: meet for 10 minutes and decide for each item: defect, not a defect, or question for the product owner.</span><span class="gx-ar" lang="ar" dir="rtl">التواصل والتحليل: اجتمعوا 10 دقائق وقرروا لكل بند: defect، أو ليس defect، أو سؤال لمالك المنتج.</span></li><li><span class="gx-en" lang="en" dir="ltr">Fixing and reporting: log the real defects, update the story and note whether the exit criterion was met.</span><span class="gx-ar" lang="ar" dir="rtl">الإصلاح والتقرير: سجّلوا الـ defects الحقيقية، وحدّثوا القصة، ودوّنوا هل تحقق معيار الخروج.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Some logged anomalies turned out not to be defects, each real defect has an owner, and you can say clearly whether the story is accepted.</span><span class="gx-ar" lang="ar" dir="rtl">بعض الحالات الشاذة المسجّلة تبيّن أنها ليست defects، ولكل defect حقيقي مسؤول، وتستطيع أن تقول بوضوح هل قُبلت القصة.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Ordering questions are common: Planning → Review initiation → Individual review → Communication and analysis → Fixing and reporting. Deciding the status of anomalies happens in communication and analysis, not in individual review.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة الترتيب شائعة: التخطيط ← بدء المراجعة ← المراجعة الفردية ← التواصل والتحليل ← الإصلاح والتقرير. تقرير حالة الحالات الشاذة يحدث في التواصل والتحليل، لا في المراجعة الفردية.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Calling every logged item a defect. Reviewers log anomalies; only analysis decides which of them are real defects.</p><p class="gx-ar" lang="ar" dir="rtl">تسمية كل بند مسجّل defect. المراجعون يسجّلون حالات شاذة؛ والتحليل وحده يقرر أيها defects حقيقية.</p></aside>

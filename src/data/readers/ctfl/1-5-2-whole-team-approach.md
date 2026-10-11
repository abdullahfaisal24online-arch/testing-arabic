---
order: 13
slug: "1-5-2"
chapter: 1
group: "1.5"
section: "1.5.2"
title: "Whole Team Approach"
titleAr: "نهج الفريق الكامل"
objectives: "FL-1.5.2 · K1"
minutes: 7
lo:
  FL-1.5.2: "Recall the advantages of the whole team approach."
loAr:
  FL-1.5.2: "تتذكّر مزايا نهج الفريق الكامل."
takeaways:
  - "In the whole team approach, anyone with the right knowledge and skills can do any task, and everyone is responsible for quality."
  - "It comes from Extreme Programming and benefits from a shared workspace, physical or virtual."
  - "It improves team dynamics, communication and collaboration, and creates synergy."
  - "It may not suit every context: safety-critical systems can need high test independence."
takeawaysAr:
  - "في نهج الفريق الكامل، أي عضو لديه المعرفة والمهارة المناسبة يستطيع أداء أي مهمة، والجميع مسؤول عن الجودة."
  - "أصله من البرمجة المتطرفة (XP)، ويستفيد من مساحة عمل مشتركة، فعلية أو افتراضية."
  - "يحسّن ديناميكية الفريق والتواصل والتعاون، ويصنع تآزرًا بين أعضائه."
  - "قد لا يناسب كل سياق: الأنظمة الحرجة للسلامة قد تحتاج استقلالية عالية في الاختبار."
terms:
  - en: "Whole Team Approach"
    ar: "نهج الفريق الكامل"
    def: "An approach in which any team member with the necessary knowledge and skills can perform any task, and everyone is responsible for quality."
    defAr: "نهج يستطيع فيه أي عضو في الفريق لديه المعرفة والمهارات اللازمة أداء أي مهمة، ويكون الجميع مسؤولًا عن الجودة."
    match: ["Whole Team Approach", "whole team approach", "whole-team approach"]
---
من أهم مهارات المختبر **القدرة على العمل بفعالية ضمن فريق والمساهمة الإيجابية في أهدافه**. وعلى هذه المهارة يُبنى **نهج الفريق الكامل (Whole Team Approach)**، وهو ممارسة قادمة من **البرمجة المتطرفة (Extreme Programming / XP)** (القسم 2.1). في الفرق التقليدية كثيرًا ما يُنظر إلى الجودة كأنها مسؤولية «قسم الاختبار» وحده؛ أما هذا النهج فيجعلها مسؤولية الجميع.

### الفكرة الأساسية — The Core Idea

- **أي عضو في الفريق لديه المعرفة والمهارات اللازمة يستطيع أداء أي مهمة.** في فريق التوصيل، إذا تأخر اختبار الكوبونات، يستطيع مطوّر يجيد الأتمتة كتابة جزء من الاختبارات المؤتمتة، ويستطيع المختبر مراجعة معايير القبول مع مالك المنتج.
- **الجميع مسؤول عن الجودة.** المطوّر لا «يرمي» الكود للمختبر، ومالك المنتج لا يكتفي بكتابة القصة؛ كلهم يسألون: كيف نتأكد أن هذا يعمل؟
- **أعضاء الفريق يتشاركون مساحة العمل نفسها**، فعلية أو افتراضية، لأن **القرب يسهّل التواصل والتفاعل**. الفريق الموزّع يمكنه تحقيق ذلك بقناة مشتركة واجتماعات يومية قصيرة.

### المزايا — Advantages

يذكر السيليبس ثلاث مزايا لنهج الفريق الكامل:

1. **يحسّن ديناميكية الفريق (Team Dynamics):** العلاقة تصبح شراكة لا تسليمًا واستلامًا بين «مطوّرين» و«مختبرين».
2. **يعزز التواصل والتعاون داخل الفريق:** الأسئلة تُطرح مبكرًا وتُحل في دقائق بدل تذاكر تنتظر أيامًا.
3. **يصنع تآزرًا (Synergy)** بالسماح **بالاستفادة من مهارات الفريق المختلفة لصالح المشروع**: معرفة المطوّر بالكود، ومعرفة المختبر بالتقنيات، ومعرفة مالك المنتج بالزبائن، تجتمع لتعطي نتيجة أفضل من عمل كل منهم منفردًا.

### دور المختبر في الفريق الكامل — The Tester's Role

المختبرون **يعملون عن قرب مع باقي أعضاء الفريق** لضمان الوصول إلى مستويات الجودة المطلوبة. ومن ذلك:

- **التعاون مع ممثلي العمل** لمساعدتهم في إنشاء **اختبارات قبول مناسبة**. يجلس المختبر مع مالك المنتج ويحوّلان قاعدة «كوبون واحد لكل طلب» إلى أمثلة واضحة: كوبون واحد يُقبل، وكوبون ثانٍ يُرفض برسالة مفهومة بالعربية والإنجليزية.
- **العمل مع المطوّرين** للاتفاق على **استراتيجية الاختبار** وتحديد **طرق أتمتة الاختبار**. يتفق المختبر والمطوّرون مثلًا على أن قواعد حساب الخصم تُختبر باختبارات مؤتمتة سريعة في الـ CI، وأن الواجهة تُختبر بجلسات استكشافية على iOS وAndroid.

بهذا **ينقل المختبرون معرفتهم بالاختبار** إلى باقي الفريق، و**يؤثرون في تطوير المنتج** نفسه، لا في اختباره فقط.

### حدود هذا النهج — When It May Not Fit

حسب السياق، **قد لا يكون نهج الفريق الكامل مناسبًا دائمًا**. ففي بعض الحالات، مثل الأنظمة **الحرجة للسلامة (Safety-critical)**، قد تكون هناك حاجة إلى **مستوى عالٍ من استقلالية الاختبار** (القسم 1.5.3)، لأن قرب المختبر من الفريق قد يجعله يشاركهم الافتراضات نفسها. نظام لإدارة جرعات الأدوية في مستشفى، مثلًا، لا يكفيه أن يختبره الفريق الذي بناه، حتى لو كان متعاونًا ومتمكنًا. أما تطبيق التوصيل فيناسبه هذا النهج، مع استقلالية أعلى في أجزاء محددة كأمن الدفع.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">During refinement, the tester asks "what happens if the coupon has expired?" and the product owner adds an acceptance criterion. A developer writes the automated check for it, and the tester explores edge cases around time zones. Nobody says "that's QA's job".</p><p class="gx-ar" lang="ar" dir="rtl">أثناء جلسة تحسين القصص، يسأل المختبر: «ماذا يحدث إذا انتهت صلاحية الكوبون؟» فيضيف مالك المنتج معيار قبول جديدًا. يكتب أحد المطوّرين الفحص المؤتمت له، ويستكشف المختبر الحالات الحدّية المتعلقة بالمناطق الزمنية. لا أحد يقول «هذه مهمة فريق QA».</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">This is K1: remember the three advantages (team dynamics, communication and collaboration, synergy) and the origin (Extreme Programming). Also remember the limit: high independence may be needed in safety-critical contexts.</p><p class="gx-ar" lang="ar" dir="rtl">هذا هدف K1: احفظ المزايا الثلاث (ديناميكية الفريق، والتواصل والتعاون، والتآزر) والأصل (البرمجة المتطرفة). وتذكّر الحدّ: قد تلزم استقلالية عالية في السياقات الحرجة للسلامة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking the whole team approach removes the need for testers. Testers are still there; they share testing knowledge and work closely with business and developers, while everyone shares responsibility for quality.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن نهج الفريق الكامل يلغي الحاجة للمختبرين. المختبرون موجودون؛ ينقلون معرفتهم بالاختبار ويعملون عن قرب مع ممثلي العمل والمطوّرين، بينما يتشارك الجميع مسؤولية الجودة.</p></aside>

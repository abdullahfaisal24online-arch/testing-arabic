---
order: 14
slug: "4-5-3"
chapter: 4
group: "4.5"
section: "4.5.3"
title: "Acceptance Test-driven Development (ATDD)"
titleAr: "التطوير المقاد باختبارات القبول"
objectives: "FL-4.5.3 · K3"
minutes: 10
lo:
  FL-4.5.3: "Use ATDD to derive test cases."
loAr:
  FL-4.5.3: "تستخدم ATDD لاستخراج حالات الاختبار."
labs: ["LAB-4.5.3"]
takeaways:
  - "ATDD is a test-first approach: test cases are created before the user story is implemented, by team members with different perspectives."
  - "It starts with a specification workshop where the story and its acceptance criteria are analysed, discussed and written, and ambiguities and defects are fixed."
  - "Test cases are based on the acceptance criteria and serve as examples of how the software works."
  - "Typically: positive tests first (happy path), then negative tests, then non-functional ones such as performance or usability."
  - "Tests are written in language stakeholders understand, cover all characteristics of the story without going beyond it, and no two tests describe the same characteristic."
  - "Captured in a format an automation framework supports, they become executable requirements."
takeawaysAr:
  - "ATDD نهج يبدأ بالاختبار: تُنشأ حالات الاختبار قبل تنفيذ القصة، من أعضاء فريق بوجهات نظر مختلفة."
  - "يبدأ بورشة مواصفات تُحلَّل فيها القصة ومعايير قبولها وتُناقش وتُكتب، ويُعالَج الغموض والعيوب."
  - "حالات الاختبار مبنية على معايير القبول، وتعمل كأمثلة على كيفية عمل البرمجية."
  - "عادة: الاختبارات الإيجابية أولًا (المسار السعيد)، ثم السلبية، ثم غير الوظيفية مثل الأداء وسهولة الاستخدام."
  - "تُكتب بلغة يفهمها أصحاب المصلحة، وتغطي كل خصائص القصة دون تجاوزها، ولا تصف حالتان الخاصية نفسها."
  - "عند كتابتها بصيغة تدعمها أداة أتمتة، تصبح متطلبات قابلة للتشغيل."
terms:
  - en: "Specification Workshop"
    ar: "ورشة المواصفات"
    def: "A collaborative session where a user story and its acceptance criteria are analysed, discussed and written by the team."
    defAr: "جلسة تعاونية يحلّل فيها الفريق قصة المستخدم ومعايير قبولها ويناقشها ويكتبها."
  - en: "Happy Path"
    ar: "المسار السعيد"
    def: "The expected, correct flow through a feature without exceptions or error conditions."
    defAr: "المسار المتوقع والصحيح عبر الميزة، دون استثناءات أو حالات خطأ."
    match: ["Happy Path", "happy path"]
---
**ATDD** نهج **يبدأ بالاختبار** (القسم 2.1.3). تُنشأ حالات الاختبار **قبل تنفيذ قصة المستخدم**، من أعضاء فريق ذوي **وجهات نظر مختلفة**، مثل العملاء والمطوّرين والمختبرين. وقد تُنفَّذ حالات الاختبار يدويًا أو آليًا.

<figure class="gx-figure" aria-label="The ATDD flow."><div class="gx-flow-row"><span class="gx-flow-node">Specification workshop<small>story + criteria</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Write test cases<small>from criteria</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Implement<small>make tests pass</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Executable requirements<small>automated</small></span></div><figcaption>The ATDD flow.</figcaption></figure>

### الخطوة الأولى: ورشة المواصفات — Specification Workshop

تُحلَّل **قصة المستخدم** و**معايير قبولها** (إن لم تكن معرّفة بعد) وتُناقش وتُكتب من قبل أعضاء الفريق. أي **نقص أو غموض أو عيوب** في القصة تُعالَج في هذه المرحلة.

### الخطوة الثانية: إنشاء حالات الاختبار — Creating Test Cases

- يمكن أن يُنشئها الفريق كله معًا، أو المختبر بمفرده.
- **مبنية على معايير القبول**، ويمكن اعتبارها **أمثلة** على كيفية عمل البرمجية. هذا يساعد الفريق على تنفيذ القصة بشكل صحيح.
- قد تستفيد من **تقنيات الصندوق الأسود** والتقنيات المبنية على الخبرة، مثل EP وBVA.

### الترتيب المعتاد — Typical Order

1. **الاختبارات الإيجابية أولًا:** تؤكد السلوك الصحيح بدون استثناءات أو أخطاء، وتشمل تسلسل الأنشطة المنفذة إذا سار كل شيء كما هو متوقع (**المسار السعيد / Happy Path**).
2. **ثم الاختبارات السلبية.**
3. **وأخيرًا الخصائص غير الوظيفية** مثل الأداء وسهولة الاستخدام.

### قواعد كتابة الاختبارات — Rules for the Tests

- تُكتب بلغة **يفهمها أصحاب المصلحة**: جمل بلغة طبيعية تتضمن الشروط المسبقة والمدخلات والشروط اللاحقة اللازمة.
- يجب أن **تغطي كل خصائص** قصة المستخدم، و**ألّا تتجاوزها**.
- **لا يجوز أن تصف حالتا اختبار الخاصية نفسها.**

عندما تُكتب بصيغة تدعمها **أداة أتمتة اختبار**، يستطيع المطوّرون أتمتتها بكتابة الشيفرة المساندة أثناء تنفيذ الميزة. عندها تصبح اختبارات القبول **متطلبات قابلة للتشغيل (Executable Requirements)**.

### مثال — Example

القصة: «بصفتي عميلًا مسجّلًا، أريد استخدام كوبون خصم، لكي أدفع أقل».
معايير القبول: كوبون صالح يعطي 10% خصمًا؛ الكوبون المنتهي يُرفض برسالة واضحة؛ كوبون واحد لكل طلب.

| # | Type | Given | When | Then |
| --- | --- | --- | --- | --- |
| 1 | Positive | Cart $200, valid coupon SAVE10 | Apply coupon | Total is $180 |
| 2 | Negative | Cart $200, expired coupon OLD5 | Apply coupon | Rejected: "Coupon expired", total $200 |
| 3 | Negative | SAVE10 already applied | Apply WELCOME | Rejected: "One coupon per order" |
| 4 | Non-functional | Any valid coupon | Apply coupon | New total shown within 1 second |

<section class="gx-lab" data-lab="LAB-4.5.3"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Derive ATDD Tests from One Story</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · استخرج اختبارات ATDD من قصة واحدة</span></span><span class="gx-lab-meta">LAB-4.5.3 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> practise deriving acceptance tests in the ATDD order.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> التدرّب على استخراج اختبارات القبول بترتيب ATDD.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Take a story from your backlog that has not been developed yet.</span><span class="gx-ar" lang="ar" dir="rtl">خذ قصة من قائمة المنتج لم تُطوَّر بعد.</span></li><li><span class="gx-en" lang="en" dir="ltr">Hold a 15-minute mini workshop with a developer and the product owner; agree on 3–5 acceptance criteria.</span><span class="gx-ar" lang="ar" dir="rtl">اعقد ورشة مصغّرة لمدة 15 دقيقة مع مطوّر ومالك المنتج، واتفقوا على 3 إلى 5 معايير قبول.</span></li><li><span class="gx-en" lang="en" dir="ltr">Write test cases in Given/When/Then: positive first, then negative, then one non-functional.</span><span class="gx-ar" lang="ar" dir="rtl">اكتب حالات الاختبار بصيغة Given/When/Then: الإيجابية أولًا، ثم السلبية، ثم واحدة غير وظيفية.</span></li><li><span class="gx-en" lang="en" dir="ltr">Check: does every criterion have a test? Does any test go beyond the story? Do two tests check the same thing?</span><span class="gx-ar" lang="ar" dir="rtl">افحص: هل لكل معيار اختبار؟ هل يتجاوز أي اختبار حدود القصة؟ هل يفحص اختباران الشيء نفسه؟</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">Every acceptance criterion maps to at least one test, the first test is the happy path, nothing tests behaviour outside the story, and there are no duplicates. A developer could start coding from your tests alone.</span><span class="gx-ar" lang="ar" dir="rtl">كل معيار قبول مرتبط باختبار واحد على الأقل، وأول اختبار هو المسار السعيد، ولا شيء يختبر سلوكًا خارج القصة، ولا يوجد تكرار. ويستطيع المطوّر أن يبدأ البرمجة من اختباراتك وحدها.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K3 questions give a story with acceptance criteria and several candidate test cases. Pick the one that matches a criterion exactly; reject options that test something outside the story or duplicate another test.</p><p class="gx-ar" lang="ar" dir="rtl">أسئلة K3 تعطي قصة بمعايير قبول وعدة حالات اختبار مقترحة. اختر الحالة التي تطابق معيارًا بالضبط؛ واستبعد الخيارات التي تختبر شيئًا خارج القصة أو تكرر اختبارًا آخر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Starting with edge cases and negative tests. In ATDD the usual order is positive (happy path) first, then negative, then non-functional.</p><p class="gx-ar" lang="ar" dir="rtl">البدء بالحالات الحدّية والاختبارات السلبية. في ATDD الترتيب المعتاد: الإيجابية (المسار السعيد) أولًا، ثم السلبية، ثم غير الوظيفية.</p></aside>

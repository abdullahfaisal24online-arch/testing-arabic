---
order: 7
slug: "4-3-2"
chapter: 4
group: "4.3"
section: "4.3.2"
title: "Branch Testing and Branch Coverage"
titleAr: "اختبار الفروع وتغطيتها"
objectives: "FL-4.3.2 · K2"
minutes: 18
lo:
  FL-4.3.2: "Explain branch testing."
loAr:
  FL-4.3.2: "تشرح اختبار الفروع."
takeaways:
  - "A branch is a transfer of control between two nodes in the control flow graph; branches can be unconditional or conditional."
  - "In branch testing, the coverage items are branches; coverage = branches exercised ÷ total branches × 100%."
  - "100% branch coverage exercises all branches, conditional and unconditional; for an IF, both the true and false outcomes."
  - "Branch coverage subsumes statement coverage: 100% branch coverage always gives 100% statement coverage, but not the other way round."
  - "Even 100% branch coverage can miss defects that need a specific path through the code."
  - "Conditional branches come from IF outcomes (true/false), switch/case outcomes, and the decision to exit or continue a loop."
takeawaysAr:
  - "الفرع انتقال للتحكم بين عقدتين في مخطط تدفق التحكم؛ وقد يكون غير مشروط أو مشروطًا."
  - "في اختبار الفروع، عناصر التغطية هي الفروع؛ والتغطية = الفروع المنفّذة ÷ إجمالي الفروع × 100%."
  - "تغطية الفروع 100% تنفّذ كل الفروع المشروطة وغير المشروطة؛ ولجملة IF تعني النتيجتين الصحيحة والخاطئة."
  - "تغطية الفروع تشمل تغطية التعليمات: 100% فروع تعطي دائمًا 100% تعليمات، والعكس غير صحيح."
  - "حتى تغطية الفروع 100% قد تفوّت defects تحتاج مسارًا محددًا عبر الشيفرة."
  - "الفروع المشروطة تأتي من نتائج IF (صحيح/خطأ)، ونتائج switch/case، وقرار الخروج من الحلقة أو الاستمرار فيها."
terms:
  - en: "Branch Testing"
    ar: "اختبار الفروع"
    def: "A white-box test technique in which test cases are designed to exercise branches."
    defAr: "تقنية صندوق أبيض تُصمَّم فيها حالات الاختبار لتمرّ على الفروع."
    match: ["Branch Testing", "branch testing"]
  - en: "Branch Coverage"
    ar: "تغطية الفروع"
    def: "The percentage of branches that have been exercised by a test suite."
    defAr: "نسبة الفروع التي نفّذتها مجموعة اختبارات."
    match: ["Branch Coverage", "branch coverage"]
  - en: "Control Flow Graph"
    ar: "مخطط تدفق التحكم"
    def: "A graph of the possible execution paths through code, with nodes for statements or blocks and edges for transfers of control."
    defAr: "مخطط لمسارات التنفيذ الممكنة في الشيفرة، عقده تعليمات أو كتل، وحوافه انتقالات التحكم."
  - en: "Branch"
    ar: "الفرع"
    def: "A transfer of control between two nodes in the control flow graph; it can be unconditional or conditional."
    defAr: "انتقال للتحكم بين عقدتين في مخطط تدفق التحكم؛ وقد يكون غير مشروط أو مشروطًا."
---
رأينا في القسم السابق أن اختبارًا واحدًا قد ينفّذ كل التعليمات ومع ذلك يتجاهل نصف منطق القرار. **اختبار الفروع (Branch Testing)** يسد هذه الثغرة: بدلًا من أن يسأل «هل نُفّذ كل سطر؟»، يسأل **«هل سلكنا كل طريق ممكن للخروج من كل نقطة في الشيفرة؟»**. ولهذا هو المعيار الأقوى بين التقنيتين في هذا المنهج.

### مخطط تدفق التحكم والفرع — Control Flow Graph and Branch

**مخطط تدفق التحكم (Control Flow Graph / CFG)** رسم يُظهر **التسلسلات الممكنة لتنفيذ تعليمات الشيفرة** في موضوع الاختبار. **العقد (nodes)** فيه تعليمات أو كتل من التعليمات، و**الحواف (edges)** بينها انتقالات للتحكم.

**الفرع (Branch)** هو **انتقال للتحكم بين عقدتين** في هذا المخطط، أي حافة واحدة. وكل انتقال قد يكون:

- **غير مشروط (Unconditional):** شيفرة متسلسلة مستقيمة؛ بعد انتهاء العقدة ينتقل التحكم دائمًا إلى العقدة التالية، بلا خيار.
- **مشروط (Conditional):** **نتيجة قرار (decision outcome)**؛ يذهب التحكم إلى عقدة أو أخرى حسب قيمة الشرط.

يذكر المنهج ثلاثة مصادر نموذجية للفروع المشروطة:

| Source | Conditional branches | Delivery-app example |
| --- | --- | --- |
| `IF … THEN` decision | true outcome, false outcome | `IF total >= 20.00` |
| `switch / case` | one outcome per case (plus default) | payment method: cash, card, wallet |
| Loop | continue looping, or exit the loop | `FOR each meal in order` |

- **جملة IF:** لها دائمًا نتيجتان، فرع «صحيح» وفرع «خطأ»، سواء كُتب ELSE أم لا.
- **جملة switch/case:** كل حالة فرع مستقل. اختيار طريقة الدفع (نقدًا، بطاقة، محفظة رقمية) يعطي ثلاثة فروع على الأقل، وإذا وُجد فرع `default` للقيم غير المتوقعة فهو فرع رابع يجب تغطيته أيضًا، وكثيرًا ما يُنسى.
- **الحلقة (loop):** عند كل دورة يُتخذ قرار: **الاستمرار** في الحلقة أو **الخروج** منها. لتغطية الفرعين يجب أن يدخل اختبار واحد على الأقل جسم الحلقة، وأن تخرج الحلقة في النهاية. وفي الشيفرة التي قد لا تدخل الحلقة أبدًا (مثلًا `WHILE` على قائمة فارغة)، يلزم اختبار يكون فيه شرط الحلقة خاطئًا من البداية.

### الفكرة — The Idea

في اختبار الفروع تكون **عناصر التغطية هي الفروع**، والهدف تصميم حالات اختبار **تمر على الفروع** حتى الوصول إلى **مستوى تغطية مقبول**.

**تغطية الفروع = عدد الفروع التي نفّذتها حالات الاختبار ÷ إجمالي الفروع × 100%**

عند الوصول إلى **100%** تكون **كل الفروع**، **المشروطة وغير المشروطة**، قد نُفّذت. ولجملة IF يعني هذا تنفيذ نتيجة **«صحيح»** ونتيجة **«خطأ»**، **حتى لو لم يكن هناك ELSE**، فالنتيجة الخاطئة تبقى فرعًا يقفز فوق جسم الشرط.

### مثال محلول 1 — Worked Example: Delivery Fee

نعود إلى الدالة نفسها من القسم السابق:

```text
1   fee = 1.50
2   IF total >= 20.00 THEN
3       fee = 0.00
4   END IF
5   avgMeal = total / meals ... RETURN total + fee
```

عقد المخطط: **A** (السطر 1)، **D** (القرار في السطر 2)، **B** (السطر 3)، **C** (الأسطر 5 فما بعد). والفروع (الحواف) أربعة:

| Branch | Type | Exercised by |
| --- | --- | --- |
| A → D | Unconditional | every test |
| D → B (total ≥ 20.00 is true) | Conditional | T2 (total = 25.00) |
| D → C (total ≥ 20.00 is false) | Conditional | T1 (total = 12.00) |
| B → C | Unconditional | T2 |

- **T2 وحده:** يمر على A→D وD→B وB→C = **3 من 4 = 75%** تغطية فروع، رغم أنه أعطى **100% تغطية تعليمات**.
- **T1 وحده:** يمر على A→D وD→C = **2 من 4 = 50%**.
- **T1 + T2:** **4 من 4 = 100%**. وهنا فقط يُكشف الـ defect الذي رأيناه سابقًا: لو كُتب السطر 1 `fee = 0.00` خطأً، فإن T1 سيُظهر توصيلًا مجانيًا لطلب بقيمة 12 دينارًا.

ولو عددنا **الفروع المشروطة فقط** (نتيجتا القرار)، فإن T2 يغطي 1 من 2 = 50%. لذلك اقرأ في السؤال ما الذي يُعدّ فرعًا قبل أن تحسب.

### مثال محلول 2 — Two Decisions, Minimum Tests

دالة تطبّق كوبونًا ثابتًا ثم تحسب رسوم التوصيل. والقاعدة المتفق عليها في تطبيق التوصيل: **حد التوصيل المجاني (20.00) يُفحص على قيمة الطلب قبل الخصم**.

```text
1   fee = 1.50
2   IF coupon == "FIXED5" THEN
3       total = total - 5.00
4   END IF
5   IF total >= 20.00 THEN
6       fee = 0.00
7   END IF
8   RETURN total + fee
```

لكل قرار نتيجتان، أي **4 فروع مشروطة**. يكفي **اختباران** للوصول إلى 100%:

| Test | total | coupon | Decision 1 (coupon) | Decision 2 (total ≥ 20.00) | Result |
| --- | --- | --- | --- | --- | --- |
| T1 | 30.00 | FIXED5 | true | true (25.00) | 25.00, free delivery |
| T2 | 10.00 | none | false | false | 11.50 |

النتيجتان صحيحتان حسب القاعدة، وتغطية الفروع **4 من 4 = 100%**.

### لماذا لا يكفي 100% فروع؟ — Path-specific Defects

يقول المنهج إن تنفيذ الفرع **لا يكشف الـ defects في كل الحالات**، ومنها الـ defects التي **تحتاج تنفيذ مسار محدد (specific path)**. في المثال 2 أربعة **مسارات** ممكنة (صحيح/صحيح، صحيح/خطأ، خطأ/صحيح، خطأ/خطأ)، واختباراتنا سلكت اثنين فقط: صحيح/صحيح وخطأ/خطأ.

والـ defect هنا أن الشيفرة تفحص حد التوصيل المجاني **بعد** الخصم، بعكس القاعدة. طلب بقيمة 22.00 دينارًا مع FIXED5 يستحق توصيلًا مجانيًا (22.00 ≥ 20.00 قبل الخصم)، لكن الشيفرة تخصم أولًا فيصبح المجموع 17.00، ويُحمَّل الزبون رسوم 1.50 خطأً. هذا الـ defect لا يظهر إلا على مسار **صحيح/خطأ** (كوبون مطبّق، والمجموع بعد الخصم أقل من 20.00) وبطلب قيمته بين 20.00 و24.99. لم يمر أي من الاختبارين بهذا المسار، فبقي الـ defect مخفيًا رغم أن تغطية الفروع **100%**.

### العلاقة مع تغطية التعليمات — Branch Coverage Subsumes Statement Coverage

**تغطية الفروع تشمل (subsumes) تغطية التعليمات**: أي مجموعة حالات اختبار تحقق **100% تغطية فروع** تحقق أيضًا **100% تغطية تعليمات**، **والعكس غير صحيح**.

- **لماذا الاتجاه الأول صحيح دائمًا؟** كل تعليمة تقع في عقدة، وكل عقدة يدخلها التحكم عبر حافة (فرع) واحدة على الأقل. فإذا سلكت الاختبارات **كل الحواف**، فقد مرّت حتمًا **بكل العقد**، أي بكل التعليمات.
- **لماذا العكس غير صحيح؟** لأن بعض الفروع لا تحتوي أي تعليمة خاصة بها، وأوضح مثال **النتيجة الخاطئة لجملة IF بدون ELSE** (الحافة D→C في المثال 1). يمكن تنفيذ كل التعليمات دون سلوك هذه الحافة أبدًا، كما فعل T2 بمفرده: 100% تعليمات، و75% فروع فقط.

<figure class="gx-figure gx-spectrum" aria-label="Branch coverage subsumes statement coverage."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>100% branch coverage</b><span>→ always 100% statement coverage.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>100% statement coverage</b><span>→ not necessarily 100% branch coverage.</span></div></div><figcaption>Branch coverage subsumes statement coverage.</figcaption></figure>

### لا تخلط بين — Don't Confuse

| | Statement testing | Branch testing |
| --- | --- | --- |
| Coverage item | Executable statement (node) | Branch (edge) |
| IF without ELSE | One "true" test can reach 100% | Needs both true and false outcomes |
| Strength | Weaker | Stronger; subsumes statement coverage |
| Still misses | Data-dependent defects, untaken branches | Data-dependent and path-specific defects |

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="cov" data-config="{&quot;title&quot;:&quot;Checkout discount&quot;,&quot;spec&quot;:&quot;Two decisions. member: 1 = member, 0 = not a member. Add tests until both meters reach 100%.&quot;,&quot;inputs&quot;:[{&quot;name&quot;:&quot;total&quot;,&quot;value&quot;:150},{&quot;name&quot;:&quot;member&quot;,&quot;value&quot;:1}],&quot;program&quot;:[{&quot;id&quot;:&quot;s1&quot;,&quot;s&quot;:&quot;discount = 0&quot;},{&quot;id&quot;:&quot;d1&quot;,&quot;if&quot;:&quot;total &gt;= 100&quot;,&quot;then&quot;:[{&quot;id&quot;:&quot;s2&quot;,&quot;s&quot;:&quot;discount = 10&quot;}]},{&quot;id&quot;:&quot;d2&quot;,&quot;if&quot;:&quot;member == 1&quot;,&quot;then&quot;:[{&quot;id&quot;:&quot;s3&quot;,&quot;s&quot;:&quot;discount = discount + 5&quot;}],&quot;else&quot;:[{&quot;id&quot;:&quot;s4&quot;,&quot;s&quot;:&quot;showSignupBanner()&quot;}]},{&quot;id&quot;:&quot;s5&quot;,&quot;s&quot;:&quot;pay(total - discount)&quot;}],&quot;caption&quot;:&quot;Two tests are enough here: (total=150, member=1) and (total=50, member=0). Statement coverage reaches 100% only after both.&quot;}" aria-label="Checkout discount"><figcaption>Interactive: Checkout discount</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery team sets a quality gate in CI: pricing and order-state code must keep at least 85% branch coverage. A pull request that adds a new "Cancelled by restaurant" case without a test drops coverage to 82%, the pipeline fails, and the developer adds the missing test before merging.</p><p class="gx-ar" lang="ar" dir="rtl">يضع فريق التوصيل بوابة جودة في CI: شيفرة التسعير وحالات الطلب يجب أن تحافظ على تغطية فروع 85% على الأقل. طلب دمج يضيف حالة جديدة «ألغاه المطعم» دون اختبار يخفض التغطية إلى 82%، فيفشل الخط، ويضيف المطوّر الاختبار الناقص قبل الدمج.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">For "minimum tests for 100% branch coverage", trace each decision's true and false outcome. Remember: an IF without ELSE still has a false branch that must be exercised.</p><p class="gx-ar" lang="ar" dir="rtl">لسؤال «أقل عدد اختبارات لتغطية فروع 100%»، تتبّع نتيجة «صحيح» و«خطأ» لكل قرار. وتذكّر: جملة IF بدون ELSE لها فرع «خطأ» يجب تنفيذه أيضًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Saying statement coverage subsumes branch coverage. It is the other way round: branch coverage is the stronger criterion.</p><p class="gx-ar" lang="ar" dir="rtl">القول إن تغطية التعليمات تشمل تغطية الفروع. العكس هو الصحيح: تغطية الفروع هي المعيار الأقوى.</p></aside>

---
order: 7
slug: "4-3-2"
chapter: 4
group: "4.3"
section: "4.3.2"
title: "Branch Testing and Branch Coverage"
titleAr: "اختبار الفروع وتغطيتها"
objectives: "FL-4.3.2 · K2"
minutes: 9
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
takeawaysAr:
  - "الفرع انتقال للتحكم بين عقدتين في مخطط تدفق التحكم؛ وقد يكون غير مشروط أو مشروطًا."
  - "في اختبار الفروع، عناصر التغطية هي الفروع؛ والتغطية = الفروع المنفّذة ÷ إجمالي الفروع × 100%."
  - "تغطية الفروع 100% تنفّذ كل الفروع المشروطة وغير المشروطة؛ ولجملة IF تعني النتيجتين الصحيحة والخاطئة."
  - "تغطية الفروع تشمل تغطية التعليمات: 100% فروع تعطي دائمًا 100% تعليمات، والعكس غير صحيح."
  - "حتى تغطية الفروع 100% قد تفوّت defects تحتاج مسارًا محددًا عبر الشيفرة."
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
---
**الفرع (Branch)** هو **انتقال للتحكم بين عقدتين** في **مخطط تدفق التحكم (Control Flow Graph)**، الذي يُظهر التسلسلات الممكنة لتنفيذ تعليمات الشيفرة في موضوع الاختبار. كل انتقال للتحكم قد يكون:

- **غير مشروط (Unconditional):** مثل الشيفرة المتسلسلة المستقيمة.
- **مشروط (Conditional):** مثل نتيجة قرار (صحيح أو خطأ).

### الفكرة — The Idea

في **اختبار الفروع (Branch Testing)**، **عناصر التغطية هي الفروع**. الهدف تصميم حالات اختبار تنفّذ الفروع حتى مستوى تغطية مقبول.

**تغطية الفروع = عدد الفروع التي نفّذتها حالات الاختبار ÷ إجمالي الفروع × 100%**

عند الوصول إلى **تغطية فروع 100%**، تكون كل الفروع في الشيفرة، المشروطة وغير المشروطة، قد نُفّذت. **لجملة IF، هذا يعني تنفيذ نتيجة «صحيح» ونتيجة «خطأ»** حتى لو لم يكن هناك Else.

### العلاقة مع تغطية التعليمات — Relation to Statement Coverage

**تغطية الفروع تشمل تغطية التعليمات (Subsumes):** أي مجموعة حالات اختبار تحقق 100% تغطية فروع، تحقق أيضًا 100% تغطية تعليمات. **العكس غير صحيح.**

<figure class="gx-figure gx-spectrum" aria-label="Branch coverage subsumes statement coverage."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>100% branch coverage</b><span>→ always 100% statement coverage.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>100% statement coverage</b><span>→ not necessarily 100% branch coverage.</span></div></div><figcaption>Branch coverage subsumes statement coverage.</figcaption></figure>

### حدود التقنية — Limits

حتى مع **100% تغطية فروع**، قد تفوت defects تحتاج **تنفيذ مسار محدد** في الشيفرة لتظهر، أي تركيبة معيّنة من الفروع لم تختبرها حالاتك.

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="cov" data-config="{&quot;title&quot;:&quot;Checkout discount&quot;,&quot;spec&quot;:&quot;Two decisions. member: 1 = member, 0 = not a member. Add tests until both meters reach 100%.&quot;,&quot;inputs&quot;:[{&quot;name&quot;:&quot;total&quot;,&quot;value&quot;:150},{&quot;name&quot;:&quot;member&quot;,&quot;value&quot;:1}],&quot;program&quot;:[{&quot;id&quot;:&quot;s1&quot;,&quot;s&quot;:&quot;discount = 0&quot;},{&quot;id&quot;:&quot;d1&quot;,&quot;if&quot;:&quot;total &gt;= 100&quot;,&quot;then&quot;:[{&quot;id&quot;:&quot;s2&quot;,&quot;s&quot;:&quot;discount = 10&quot;}]},{&quot;id&quot;:&quot;d2&quot;,&quot;if&quot;:&quot;member == 1&quot;,&quot;then&quot;:[{&quot;id&quot;:&quot;s3&quot;,&quot;s&quot;:&quot;discount = discount + 5&quot;}],&quot;else&quot;:[{&quot;id&quot;:&quot;s4&quot;,&quot;s&quot;:&quot;showSignupBanner()&quot;}]},{&quot;id&quot;:&quot;s5&quot;,&quot;s&quot;:&quot;pay(total - discount)&quot;}],&quot;caption&quot;:&quot;Two tests are enough here: (total=150, member=1) and (total=50, member=0). Statement coverage reaches 100% only after both.&quot;}" aria-label="Checkout discount"><figcaption>Interactive: Checkout discount</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">For "minimum tests for 100% branch coverage", trace each decision's true and false outcome. Remember: an IF without ELSE still has a false branch that must be exercised.</p><p class="gx-ar" lang="ar" dir="rtl">لسؤال «أقل عدد اختبارات لتغطية فروع 100%»، تتبّع نتيجة «صحيح» و«خطأ» لكل قرار. وتذكّر: جملة IF بدون ELSE لها فرع «خطأ» يجب تنفيذه أيضًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Saying statement coverage subsumes branch coverage. It is the other way round: branch coverage is the stronger criterion.</p><p class="gx-ar" lang="ar" dir="rtl">القول إن تغطية التعليمات تشمل تغطية الفروع. العكس هو الصحيح: تغطية الفروع هي المعيار الأقوى.</p></aside>

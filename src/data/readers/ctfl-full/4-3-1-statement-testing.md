---
order: 6
slug: "4-3-1"
chapter: 4
group: "4.3"
section: "4.3.1"
title: "Statement Testing and Statement Coverage"
titleAr: "اختبار التعليمات وتغطيتها"
objectives: "FL-4.3.1 · K2"
minutes: 8
lo:
  FL-4.3.1: "Explain statement testing."
loAr:
  FL-4.3.1: "تشرح اختبار التعليمات."
takeaways:
  - "In statement testing, the coverage items are executable statements."
  - "Statement coverage = statements exercised by the tests ÷ total executable statements × 100%."
  - "100% statement coverage means every executable statement, including any containing a defect, ran at least once."
  - "It may still miss defects that depend on data, such as division by zero only when the divisor is 0."
  - "It does not guarantee that all decision logic is tested: some branches may never be taken."
takeawaysAr:
  - "في اختبار التعليمات، عناصر التغطية هي التعليمات القابلة للتنفيذ."
  - "تغطية التعليمات = التعليمات التي نفّذتها الاختبارات ÷ إجمالي التعليمات القابلة للتنفيذ × 100%."
  - "تغطية التعليمات 100% تعني أن كل تعليمة قابلة للتنفيذ، ومنها أي تعليمة فيها عيب، نُفّذت مرة واحدة على الأقل."
  - "قد تفوّت عيوبًا تعتمد على البيانات، مثل القسمة على صفر التي تحدث فقط عندما يكون المقسوم عليه 0."
  - "لا تضمن اختبار كل منطق القرارات: بعض الفروع قد لا تُسلك أبدًا."
terms:
  - en: "Statement Testing"
    ar: "اختبار التعليمات"
    def: "A white-box test technique in which test cases are designed to execute statements."
    defAr: "تقنية صندوق أبيض تُصمَّم فيها حالات الاختبار لتنفيذ التعليمات."
    match: ["Statement Testing", "statement testing"]
  - en: "Statement Coverage"
    ar: "تغطية التعليمات"
    def: "The percentage of executable statements that have been exercised by a test suite."
    defAr: "نسبة التعليمات القابلة للتنفيذ التي نفّذتها مجموعة اختبارات."
    match: ["Statement Coverage", "statement coverage"]
---
ننتقل الآن لتقنيات **الصندوق الأبيض**، التي تنظر داخل الشيفرة. يركّز المنهج على اثنتين مرتبطتين بالشيفرة: **اختبار التعليمات** و**اختبار الفروع**. وهناك تقنيات صندوق أبيض أكثر صرامة تُستخدم في بيئات حرجة للسلامة أو المهمة أو عالية التكامل، لكنها خارج نطاق هذا المنهج.

### الفكرة — The Idea

في **اختبار التعليمات (Statement Testing)**، **عناصر التغطية هي التعليمات القابلة للتنفيذ**. الهدف تصميم حالات اختبار تنفّذ التعليمات حتى الوصول لمستوى تغطية مقبول.

**تغطية التعليمات = عدد التعليمات التي نفّذتها حالات الاختبار ÷ إجمالي التعليمات القابلة للتنفيذ × 100%**

### ماذا تضمن 100%؟ — What 100% Gives You

عند الوصول إلى **تغطية تعليمات 100%**، تضمن أن **كل تعليمة قابلة للتنفيذ في الشيفرة نُفّذت مرة واحدة على الأقل**. هذا يعني أن كل تعليمة فيها عيب نُفّذت أيضًا، وقد تسبب عطلًا يكشف العيب.

### ماذا لا تضمن؟ — What It Does Not Guarantee

- قد **لا تكتشف عيوبًا تعتمد على البيانات**: مثلًا قسمة على صفر لا تفشل إلا عندما يكون المقسوم عليه 0. تنفيذ التعليمة بقيمة أخرى لن يكشف العيب.
- قد **لا تضمن اختبار كل منطق القرارات**، لأنها لا تضمن سلوك كل الفروع في الشيفرة (القسم التالي).

### جرّبها — Try It

<figure class="gx-figure gx-widget" data-widget="cov" data-config="{&quot;title&quot;:&quot;Shipping fee&quot;,&quot;spec&quot;:&quot;One decision, no else. Find a single test that reaches 100% statement coverage, then look at the branch meter.&quot;,&quot;inputs&quot;:[{&quot;name&quot;:&quot;total&quot;,&quot;value&quot;:150}],&quot;program&quot;:[{&quot;id&quot;:&quot;s1&quot;,&quot;s&quot;:&quot;fee = 5&quot;},{&quot;id&quot;:&quot;d1&quot;,&quot;if&quot;:&quot;total &gt;= 100&quot;,&quot;then&quot;:[{&quot;id&quot;:&quot;s2&quot;,&quot;s&quot;:&quot;fee = 0&quot;}]},{&quot;id&quot;:&quot;s3&quot;,&quot;s&quot;:&quot;charge(fee)&quot;}],&quot;caption&quot;:&quot;total = 150 runs every statement (100%) but only the true branch of the decision (50% branch coverage).&quot;}" aria-label="Shipping fee"><figcaption>Interactive: Shipping fee</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: expect "what does 100% statement coverage guarantee?" Correct: every executable statement ran at least once. Wrong: all branches were taken, or no defects remain.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: توقّع سؤال «ماذا تضمن تغطية التعليمات 100%؟». الصحيح: كل تعليمة قابلة للتنفيذ نُفّذت مرة واحدة على الأقل. والخطأ: كل الفروع سُلكت، أو لم يتبقَّ أي عيب.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating 100% statement coverage as "fully tested". In the example above, one test reaches 100% statements, yet the case where the fee stays 5 (total under 100) is never checked.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار تغطية التعليمات 100% «اختبارًا كاملًا». في المثال أعلاه، اختبار واحد يصل إلى 100% تعليمات، ومع ذلك لم تُفحص أبدًا الحالة التي تبقى فيها الرسوم 5 (مجموع أقل من 100).</p></aside>

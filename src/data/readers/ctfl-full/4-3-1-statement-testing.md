---
order: 6
slug: "4-3-1"
chapter: 4
group: "4.3"
section: "4.3.1"
title: "Statement Testing and Statement Coverage"
titleAr: "اختبار التعليمات وتغطيتها"
objectives: "FL-4.3.1 · K2"
minutes: 16
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
  - "The syllabus covers only statement and branch testing; more rigorous code techniques, API-level white-box techniques and non-code coverage (e.g. neuron coverage) are out of scope."
takeawaysAr:
  - "في اختبار التعليمات، عناصر التغطية هي التعليمات القابلة للتنفيذ."
  - "تغطية التعليمات = التعليمات التي نفّذتها الاختبارات ÷ إجمالي التعليمات القابلة للتنفيذ × 100%."
  - "تغطية التعليمات 100% تعني أن كل تعليمة قابلة للتنفيذ، ومنها أي تعليمة فيها defect، نُفّذت مرة واحدة على الأقل."
  - "قد تفوّت defects تعتمد على البيانات، مثل القسمة على صفر التي تحدث فقط عندما يكون المقسوم عليه 0."
  - "لا تضمن اختبار كل منطق القرارات: بعض الفروع قد لا تُسلك أبدًا."
  - "يغطي المنهج اختبار التعليمات والفروع فقط؛ أما تقنيات الشيفرة الأكثر صرامة، وتقنيات الصندوق الأبيض على مستوى الواجهات البرمجية، والتغطية غير المرتبطة بالشيفرة (مثل تغطية العصبونات) فخارج النطاق."
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
  - en: "Executable Statement"
    ar: "تعليمة قابلة للتنفيذ"
    def: "A statement that, when compiled or interpreted, results in an action at run time, such as an assignment, a decision, a call or a return."
    defAr: "تعليمة ينتج عنها فعل عند التشغيل، مثل الإسناد أو القرار أو الاستدعاء أو الإرجاع."
    match: ["executable statements", "executable statement"]
---
ننتقل الآن من تقنيات **الصندوق الأسود** التي تنظر إلى السلوك من الخارج، إلى تقنيات **الصندوق الأبيض (White-box)** التي تنظر **داخل الشيفرة** نفسها وتسأل: أي أجزاء من البرنامج نفّذتها اختباراتنا فعلًا، وأي أجزاء لم تُلمس أبدًا؟ الجواب عن هذا السؤال رقم يمكن قياسه بدقة، وهذا ما يميّز هذه العائلة من التقنيات.

### نطاق المنهج — Scope of Section 4.3

يركّز المنهج على تقنيتين مرتبطتين بالشيفرة، اختارهما **لشيوعهما وبساطتهما**:

- **اختبار التعليمات (Statement Testing)**، وهو موضوع هذا القسم.
- **اختبار الفروع (Branch Testing)**، وهو موضوع القسم التالي.

ويذكر المنهج أن هناك تقنيات أخرى **خارج نطاقه**، ويكفي أن تعرف أنها موجودة:

- تقنيات صندوق أبيض **أكثر صرامة** تُستخدم في البيئات **الحرجة للسلامة (safety-critical)** أو **الحرجة للمهمة (mission-critical)** أو **عالية التكامل (high-integrity)**، مثل أنظمة الطيران والأجهزة الطبية، للوصول إلى تغطية أعمق للشيفرة.
- تقنيات صندوق أبيض تُستخدم في **مستويات اختبار أعلى**، مثل **اختبار الواجهات البرمجية (API testing)**، حيث يكون «الهيكل» المغطّى هو نقاط النهاية والعمليات لا أسطر الشيفرة.
- تقنيات تستخدم **تغطية غير مرتبطة بالشيفرة**، مثل **تغطية العصبونات (neuron coverage)** في اختبار الشبكات العصبية.

### الفكرة — The Idea

في **اختبار التعليمات (Statement Testing)** تكون **عناصر التغطية (coverage items)** هي **التعليمات القابلة للتنفيذ (executable statements)**: الأسطر التي ينتج عنها فعل عند التشغيل، مثل الإسناد، وتقييم شرط، واستدعاء دالة، وإرجاع قيمة. أما الأسطر التي لا تفعل شيئًا بذاتها، مثل `END IF` و`ELSE` والتعليقات والتعريفات الفارغة، فلا تُعدّ عادةً.

**الهدف** تصميم حالات اختبار **تنفّذ التعليمات** في الشيفرة حتى الوصول إلى **مستوى تغطية مقبول**. لاحظ كلمة «مقبول»: المنهج لا يشترط 100% دائمًا، بل المستوى الذي يتفق عليه الفريق أو تفرضه المخاطر.

**تغطية التعليمات = عدد التعليمات التي نفّذتها حالات الاختبار ÷ إجمالي التعليمات القابلة للتنفيذ × 100%**

### خطوات التطبيق — Step by Step

1. **رقّم الأسطر** وحدّد أيها تعليمات قابلة للتنفيذ.
2. **تتبّع كل حالة اختبار** سطرًا بسطر، وسجّل التعليمات التي مرّت عليها.
3. **اجمع** التعليمات المنفّذة من كل الحالات (دون تكرار).
4. **احسب النسبة**، وإن لم تصل إلى المستوى المطلوب، **صمّم حالة جديدة** تمر بالتعليمات المتبقية.

### مثال محلول — Worked Example: Order Summary

في تطبيق التوصيل، دالة تحسب ملخص الطلب: رسوم التوصيل 1.50 دينار، وتصبح مجانية للطلبات من 20.00 دينارًا فأكثر، ويُعرض متوسط سعر الوجبة في الإيصال:

```text
FUNCTION orderSummary(total, meals)
1   fee = 1.50
2   IF total >= 20.00 THEN
3       fee = 0.00
4   END IF
5   avgMeal = total / meals
6   PRINT "Delivery fee: " + fee
7   RETURN total + fee
```

التعليمات القابلة للتنفيذ: الأسطر **1، 2، 3، 5، 6، 7** = **6 تعليمات** (السطر 4 لا يُعدّ).

| Test | Inputs | Statements executed | Statement coverage |
| --- | --- | --- | --- |
| T1 | total = 12.00, meals = 2 | 1, 2, 5, 6, 7 | 5 / 6 = 83.3% |
| T2 | total = 25.00, meals = 2 | 1, 2, 3, 5, 6, 7 | 6 / 6 = 100% |
| T1 + T2 | — | 1, 2, 3, 5, 6, 7 | 6 / 6 = 100% |

الاختبار T1 وحده لا ينفّذ السطر 3، لأن الشرط خاطئ. أما **T2 وحده فيكفي للوصول إلى 100%**، لأن الطلب المؤهل للتوصيل المجاني يمر على كل التعليمات.

لاحظ أن النسبة تُحسب **لمجموعة الاختبارات كلها** لا لكل اختبار منفردًا: إذا كان لدى الفريق T1 فقط، فالتغطية 83.3%، ويخبرهم التقرير بالضبط أي سطر لم يُنفَّذ (السطر 3)، فيعرفون أي اختبار ينقصهم. هذه هي القيمة العملية للقياس: لا يقول لك «اختبرت جيدًا» فقط، بل يدلّك على الجزء الذي لم تلمسه بعد. وفي المشاريع الحقيقية تقوم **أدوات التغطية (coverage tools)** بهذا العدّ تلقائيًا أثناء تشغيل الاختبارات، ولا يحسبه أحد يدويًا.

### ماذا تضمن 100%؟ — What 100% Gives You

عند الوصول إلى **تغطية تعليمات 100%** نضمن أن **كل تعليمة قابلة للتنفيذ نُفّذت مرة واحدة على الأقل**. والأهم: **كل تعليمة فيها defect نُفّذت أيضًا**، وهذا قد يسبب **عطلًا (failure)** يُظهر وجود الـ defect. فلو كتب المطوّر في السطر 3 `fee = 0.50` بدل `0.00`، فإن T2 سيكشف ذلك فورًا. أما الشيفرة التي لم تُنفَّذ أبدًا فلا يمكن أن تكشف الـ defects فيها أي حالة اختبار.

### ماذا لا تضمن؟ — What It Does Not Guarantee

يحذّر المنهج من أن **تنفيذ التعليمة لا يكشف الـ defect في كل الحالات**. وهناك سببان رئيسيان:

**1. الـ defects المعتمدة على البيانات (data dependent):** السطر 5 يقسم على `meals`. الاختباران T1 وT2 نفّذاه بالقيمة 2 ونجحا، فوصلنا إلى 100% تغطية. لكن إذا وصل طلب بعدد وجبات 0 بسبب خلل في التحقق، فإن **القسمة على صفر** ستُسقط الخدمة. التعليمة «مغطّاة»، والـ defect ما زال موجودًا، لأنه لا يظهر إلا مع **قيمة بعينها**. هنا تحتاج تقنيات مثل تحليل القيم الحدّية لاختيار البيانات.

**2. منطق القرارات غير المختبر:** تغطية التعليمات 100% **لا تضمن اختبار كل منطق القرارات**، لأنها قد لا تمر على **كل الفروع** (القسم 4.3.2). في مثالنا، T2 وحده أعطى 100%، لكنه لم يجرّب أبدًا الحالة التي يكون فيها الشرط في السطر 2 **خاطئًا**. تخيّل أن المطوّر كتب السطر 1 خطأً `fee = 0.00`: الاختبار T2 ينفّذ هذا السطر الذي فيه الـ defect، ثم يُعاد ضبط الرسوم إلى صفر في السطر 3، فتأتي النتيجة صحيحة ويبقى الـ defect مخفيًا. لا يكشفه إلا طلب أقل من 20 دينارًا، أي **الفرع الخاطئ** من القرار.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app's CI pipeline runs a coverage tool on every commit. The report shows the line that applies a fixed-amount coupon was never executed, because all unit tests used percentage coupons. One extra test brings statement coverage of the pricing module from 91% to 100% and finds that a fixed coupon could make the total negative.</p><p class="gx-ar" lang="ar" dir="rtl">يشغّل خط CI في تطبيق التوصيل أداة تغطية مع كل commit. يُظهر التقرير أن السطر الذي يطبّق كوبونًا بمبلغ ثابت لم يُنفَّذ أبدًا، لأن كل اختبارات الوحدة استخدمت كوبونات بالنسبة المئوية. اختبار إضافي واحد يرفع تغطية تعليمات وحدة التسعير من 91% إلى 100%، ويكشف أن الكوبون الثابت قد يجعل المجموع سالبًا.</p></aside>

### لا تخلط بين — Don't Confuse

| | Statement coverage 100% | "Fully tested" |
| --- | --- | --- |
| Meaning | Every executable statement ran at least once | Every relevant behaviour and data value checked |
| Data-dependent defects | May be missed (e.g. division by zero) | Should be found |
| Decision outcomes | Not all guaranteed (false branch may be skipped) | All checked |

### جرّبها — Try It

المثال التفاعلي التالي يستخدم متجرًا عامًا (رسوم 5 تصبح 0 عند مجموع 100 فأكثر)، والفكرة نفسها تمامًا: اختبار واحد يكفي للتعليمات، ولا يكفي للفروع.

<figure class="gx-figure gx-widget" data-widget="cov" data-config="{&quot;title&quot;:&quot;Shipping fee&quot;,&quot;spec&quot;:&quot;One decision, no else. Find a single test that reaches 100% statement coverage, then look at the branch meter.&quot;,&quot;inputs&quot;:[{&quot;name&quot;:&quot;total&quot;,&quot;value&quot;:150}],&quot;program&quot;:[{&quot;id&quot;:&quot;s1&quot;,&quot;s&quot;:&quot;fee = 5&quot;},{&quot;id&quot;:&quot;d1&quot;,&quot;if&quot;:&quot;total &gt;= 100&quot;,&quot;then&quot;:[{&quot;id&quot;:&quot;s2&quot;,&quot;s&quot;:&quot;fee = 0&quot;}]},{&quot;id&quot;:&quot;s3&quot;,&quot;s&quot;:&quot;charge(fee)&quot;}],&quot;caption&quot;:&quot;total = 150 runs every statement (100%) but only the true branch of the decision (50% branch coverage).&quot;}" aria-label="Shipping fee"><figcaption>Interactive: Shipping fee</figcaption></figure>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: expect "what does 100% statement coverage guarantee?" Correct: every executable statement ran at least once. Wrong: all branches were taken, or no defects remain.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: توقّع سؤال «ماذا تضمن تغطية التعليمات 100%؟». الصحيح: كل تعليمة قابلة للتنفيذ نُفّذت مرة واحدة على الأقل. والخطأ: كل الفروع سُلكت، أو لم يتبقَّ أي defect.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip · counting</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان · العدّ</span></p><p class="gx-en" lang="en" dir="ltr">To find the minimum tests for 100% statement coverage, look for IF statements without ELSE: a single test that makes the condition true often covers everything. An IF with ELSE needs at least one test per side.</p><p class="gx-ar" lang="ar" dir="rtl">لإيجاد أقل عدد اختبارات لتغطية تعليمات 100%، ابحث عن جمل IF بدون ELSE: اختبار واحد يجعل الشرط صحيحًا يغطي كل شيء غالبًا. أما IF مع ELSE فتحتاج اختبارًا واحدًا على الأقل لكل جهة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating 100% statement coverage as "fully tested". In the example above, one test reaches 100% statements, yet the case where the fee stays 5 (total under 100) is never checked.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار تغطية التعليمات 100% «اختبارًا كاملًا». في المثال أعلاه، اختبار واحد يصل إلى 100% تعليمات، ومع ذلك لم تُفحص أبدًا الحالة التي تبقى فيها الرسوم 5 (مجموع أقل من 100).</p></aside>

---
order: 6
slug: "2-2-3"
chapter: 2
group: "2.2"
section: "2.2.3"
title: "Automated Regression Testing with Generative AI"
titleAr: "اختبار الانحدار المؤتمت باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.3 · K3 / HO-2.2.3a · H2 / HO-2.2.3b · H2"
minutes: 22
lo:
  GenAI-2.2.3: "Use GenAI to support automated regression testing."
  HO-2.2.3a: "Use few-shot prompting to create, maintain and debug keyword-driven test scripts."
  HO-2.2.3b: "Use structured prompting to analyse regression test reports."
loAr:
  GenAI-2.2.3: "تطبّق GenAI لدعم اختبار الانحدار المؤتمت."
  HO-2.2.3a: "تستخدم التوجيه بالأمثلة لإنشاء scripts بالكلمات المفتاحية وصيانتها وتصحيحها."
  HO-2.2.3b: "تستخدم التوجيه المنظّم لتحليل تقارير اختبار الانحدار."
takeaways:
  - "Regression suites grow with every release, so automation in CI/CD pays off, and GenAI helps create, maintain and optimise them."
  - "Five uses: keyword-driven scripts, impact analysis, self-healing tests, reporting, and defect reporting with root-cause support."
  - "GUI tests suffer from changing locators; API tests from changing endpoints, payloads and authentication."
  - "Review generated outputs in proportion to the risk."
  - "Self-healing suits only minor, intended changes; check the approved specification before accepting a fix."
takeawaysAr:
  - "مجموعات الانحدار تكبر مع كل إصدار، فتصبح أتمتتها في CI/CD مجدية، ويساعد GenAI في إنشائها وصيانتها وتحسينها."
  - "خمسة استخدامات: scripts الكلمات المفتاحية، وتحليل الأثر، والاختبارات ذاتية الإصلاح، والتقارير، وتقارير الـ defects مع دعم تحليل السبب الجذري."
  - "اختبارات الواجهة تعاني من تغيّر المحددات؛ واختبارات API من تغيّر المسارات وبنية البيانات والمصادقة."
  - "راجع المخرجات المولّدة بقدر الخطر."
  - "الإصلاح الذاتي يناسب التغييرات البسيطة المقصودة فقط؛ راجع المواصفات المعتمدة قبل قبول أي إصلاح."
terms:
  - en: "Regression Testing"
    ar: "اختبار الانحدار"
    def: "Re-testing after changes to detect defects introduced in unchanged areas."
    defAr: "إعادة الاختبار بعد التغييرات لكشف defects ظهرت في أجزاء لم تتغير."
    match: ["Regression"]
  - en: "Keyword-driven Testing"
    ar: "الاختبار المعتمد على الكلمات المفتاحية"
    def: "Automation where predefined keywords represent common test steps and scripts are built from them."
    defAr: "أتمتة تمثّل فيها كلمات مفتاحية محددة مسبقًا خطوات الاختبار الشائعة، وتُبنى الـ scripts منها."
    match: ["Keyword-driven"]
  - en: "Impact Analysis"
    ar: "تحليل الأثر"
    def: "Identifying the areas most likely affected by a change so regression effort goes where it matters."
    defAr: "تحديد الأجزاء الأكثر تأثرًا بالتغيير، ليتجه جهد الانحدار إلى حيث يهم."
  - en: "Self-healing"
    ar: "الإصلاح الذاتي"
    def: "Automatically adapting test scripts to small UI or API changes to avoid needless failures."
    defAr: "تكييف الـ test scripts تلقائيًا مع تغييرات بسيطة في الواجهة أو API لتجنّب فشل غير ضروري."
---
مع كل iteration أو إصدار جديد يكتمل، تُضاف ميزات جديدة، ويجب أن نتأكد أن ما كان يعمل قبلها ما زال يعمل. لذلك يزداد عدد حالات **اختبار الانحدار (Regression Testing)** مع الوقت ولا ينقص. في تطبيق التوصيل مثلًا، بدأت مجموعة الانحدار بحالات الطلب والدفع فقط، ثم أُضيفت الكوبونات، ثم إلغاء الطلب، ثم واجهة المطعم، فصارت المجموعة تكبر في كل sprint. وهذا القسم من مستوى **K3**: المطلوب أن تعرف كيف **تطبّق** GenAI على أنشطة الانحدار المؤتمت، وأين تتوقف ثقتك بناتجه.

### لماذا الانحدار مرشّح مثالي للأتمتة؟ — Why Regression Suits Automation

يربط المنهج بين أمرين: **العدد المتزايد** لحالات الانحدار، و**التكرار العالي** لتشغيلها، خصوصًا في خطوط **التكامل والتسليم المستمرين (CI/CD)**. في فريق التوصيل يعمل خط CI مع كل commit، أي عشرات المرات في اليوم الواحد. تنفيذ مئات الحالات يدويًا بهذا التكرار مستحيل عمليًا، أما الأتمتة فتنفّذها في كل مرة بالتكلفة نفسها تقريبًا.

لكن الأتمتة نفسها تحتاج جهدًا: كتابة الـ test scripts، وصيانتها كلما تغيّر التطبيق، وتقليل الحالات المكررة أو غير المفيدة. هنا يأتي دور GenAI، فالمنهج يذكر ثلاثة أفعال: **الإنشاء (creation)**، و**الصيانة (maintenance)**، و**التحسين (optimization)** لمجموعات الانحدار المؤتمتة.

ويضيف المنهج قدرتين: **التكيّف الديناميكي مع تغييرات الشيفرة**، و**تحليل الأثر (Impact Analysis)**. معناهما أن GenAI يستطيع أن يحدد **أي أجزاء البرنامج يُرجَّح أن تتأثر** بالتعديلات الأخيرة، فيتركّز جهد الانحدار **حيث الحاجة إليه أكبر**، بدل توزيعه بالتساوي على كل شيء.

### الأنشطة الخمسة — Five Typical Activities

يسرد المنهج خمسة أنشطة نموذجية في الانحدار المؤتمت وتقارير الاختبار يمكن دعمها بالتوجيه:

| Activity | What GenAI does | What the tester checks |
|---|---|---|
| Keyword-driven script implementation | Maps keywords to test cases and generates scripts | Every keyword exists; arguments and order are right |
| Impact analysis and test optimization | Analyses code changes to find high-risk areas | Dependencies missing from the input |
| Self-healing and adaptive tests | Adjusts scripts to minor UI or API changes | The fix does not hide a real defect |
| Automated test reporting and insights | Detailed, timely reports and dashboards with trends and predictions | Calculations and the source of each claim |
| Enhanced defect reporting and root cause analysis | Compiles defect reports with logs, screenshots, environment data | Proven facts separated from hypotheses |

### الـ scripts بالكلمات المفتاحية — Keyword-driven Automation

في إطار **الاختبار المعتمد على الكلمات المفتاحية (Keyword-driven Testing)**، كل خطوة اختبار شائعة لها **كلمة مفتاحية محددة مسبقًا** وموثّقة، مثل OpenMenu أو AddMeal أو ApplyCoupon (أسماء افتراضية للتوضيح). يقول المنهج إن النماذج اللغوية تستطيع **ربط هذه الكلمات بحالات اختبار محددة**، و**توليد الـ test scripts**، و**مساعدة المختبرين ومهندسي الأتمتة** في عملهم. السبب أن هذه المهمة متكررة وصيغتها مقيّدة: يجب استخدام كلمات المكتبة فقط، بوسائطها وترتيبها. ولهذا يربطها الهدف العملي HO-2.2.3a بتقنية **التوجيه بالأمثلة (Few-shot Prompting)**: مثالان صحيحان من scripts الفريق يُظهران للنموذج النمط المطلوب بالضبط.

### تحليل الأثر وتحسين الاختبارات — Impact Analysis and Test Optimization

يحلل GenAI **تغييرات الشيفرة** لتحديد **المناطق عالية الخطر**، فيصبح الانحدار **موجّهًا (targeted)**. مثال: مطوّر عدّل دالة حساب رسوم التوصيل. يقرأ النموذج الـ diff ويقترح تشغيل حالات السلة والدفع والكوبونات أولًا، لأنها تعتمد على المبلغ الإجمالي. لماذا لا نكتفي بهذا دائمًا؟ لأن النموذج لا يرى إلا ما أعطيته: إن كانت لوحة المطعم تعرض الإجمالي نفسه عبر API آخر لم يظهر في الـ diff، فقد يفوته. عمليًا، تبقى المجموعة الكاملة تعمل دوريًا (ليلًا مثلًا)، والمجموعة الموجّهة تعمل مع كل commit.

### الاختبارات ذاتية الإصلاح والتكيفية — Self-healing and Adaptive Tests

يكيّف GenAI الـ test scripts تلقائيًا مع **تغييرات بسيطة في الواجهة أو API**، فيمنع **الفشل غير الضروري** الناتج عن تعديلات صغيرة، ويُبقي مجموعة الاختبارات **مستقرة مع الوقت**. مثال: تغيّر معرّف زر «إتمام الطلب» من btn-checkout إلى checkout-button دون أي تغيير في السلوك. بدون **الإصلاح الذاتي (Self-healing)** تفشل عشرات الحالات، ويضيع وقت الفريق في التحقيق في فشل لا علاقة له بالجودة. الكلمة المهمة في المنهج هي **بسيطة (minor)**: إذا تغيّر السلوك نفسه، فالمطلوب تحقيق، لا إصلاح تلقائي.

### التقارير والرؤى المؤتمتة — Automated Test Reporting and Insights

يولّد GenAI تقارير **مفصّلة ومتاحة في وقتها**، فيها **مقاييس النجاح، والإخفاقات، والرؤى الأساسية**، ويقدّم لأصحاب المصلحة **لوحات مؤشرات (dashboards)** تُبرز **اتجاهات الاختبار** وتقدّم **رؤى تنبؤية** عن نقاط الفشل المحتملة. مثال: بعد كل تشغيل ليلي، يلخص النموذج أن حالات الدفع بالمحفظة الرقمية فشلت في ثلاث ليالٍ من آخر خمس، ويتوقع أنها منطقة خطر في الإصدار القادم. التوقع هنا **فرضية** يتحقق منها الفريق، لا حقيقة.

### تقارير الـ defects المحسّنة وتحليل السبب الجذري — Enhanced Defect Reporting and Root Cause Analysis

يسهّل GenAI **التجميع التلقائي** لتقارير defects **شاملة** تحتوي **سجلات الاختبار (test logs)، ولقطات الشاشة، وبيانات بيئة الاختبار**. فائدة ذلك أن المطوّر يحصل على كل ما يحتاجه لإعادة إنتاج المشكلة دون أن يسأل. وعنوان النشاط في المنهج يذكر **تحليل السبب الجذري**؛ عمليًا، يقترح النموذج أسبابًا محتملة من السجلات، ويبقى على المختبِر والمطوّر إثباتها قبل كتابتها كسبب.

### وظيفي وغير وظيفي، والمراجعة بقدر الخطر — Functional, Non-functional and Risk

يؤكد المنهج أن هذه الأنشطة تنطبق على أنواع مختلفة من الانحدار، **الوظيفي وغير الوظيفي**. مثال غير وظيفي: مقارنة زمن استجابة API إنشاء الطلب بين الإصدارات، وتلخيص النموذج لاتجاهه.

لكنه يحذّر: **GenAI قد يخطئ**، لذلك يجب **فحص الناتج بعناية بحسب الخطر المرتبط به** (انظر الفصل الثالث). إصلاح ذاتي في خطوة الدفع يستحق مراجعة بشرية كاملة، أما صياغة جملة في تقرير يومي داخلي فتكفيها مراجعة سريعة.

### واجهة المستخدم مقابل API — GUI vs API Regression

يدعم GenAI اختبارات الانحدار **الشاملة (end-to-end) عبر الواجهة الرسومية** والاختبارات **المبنية على API**، ولكل منهما تحدياته وحلوله:

| Test type | Typical challenge | How GenAI helps | What to check |
|---|---|---|---|
| GUI end-to-end | Frequent UI changes: dynamic locators, modified interactions | Adapts scripts automatically, less manual intervention | The healed step still does what the test intended |
| API-based | Changing request/response formats, endpoints, authentication | Adapts scripts to evolving API specifications; generates diverse test data | The change is in the approved specification |

اختبارات الواجهة **تفقد استقرارها كثيرًا** لأن الواجهة تتغير باستمرار: **محددات ديناميكية (dynamic locators)** يولّدها الإطار عند كل بناء، أو **تفاعلات معدّلة**، مثل تحويل قائمة منسدلة إلى أزرار. يكيّف GenAI الـ scripts فيقلّ **التدخل اليدوي**. أما اختبارات API فتواجه تغيّر **صيغ الطلب والاستجابة**، و**المسارات (endpoints)**، و**المصادقة**. يكيّف GenAI الـ scripts مع **تطوّر مواصفات API**، ويولّد **بيانات اختبار متنوعة**، فتبقى **التغطية شاملة** ويقلّ التحديث اليدوي.

### خطوات التطبيق — Step by Step

1. **حدّد النشاط**: أي الأنشطة الخمسة تحتاج؟ إنشاء scripts، أم تحليل أثر، أم إصلاح، أم تقرير؟
2. **أعطِ السياق الصحيح**: مكتبة الكلمات الموثّقة، أو الـ diff، أو مواصفات API المعتمدة، أو السجلات.
3. **اختر التقنية**: أمثلة (Few-shot) للـ scripts ذات الصيغة الثابتة (HO-2.2.3a). ولتحليل تقارير الانحدار، توجيهات منظّمة في محادثة واحدة، كل خطوة تبني على السابقة: مقارنة النتائج بمواصفات الاختبار، ثم تجميع الـ defects المتشابهة، ثم تحديث قائمة الحالات الشاذة المعروفة، ثم التحقق المتقاطع (HO-2.2.3b).
4. **قيّد الناتج**: «استخدم الكلمات الموثّقة فقط»، «افصل الحقائق عن الفرضيات».
5. **راجع بقدر الخطر**، ثم شغّل في بيئة اختبار، وسجّل ما قبلته وما رفضته.

### أمثلة محلولة — Worked Examples

**المثال 1: توليد script بالأمثلة، ومراجعة تكشف خطأ.** أعطى المختبِر النموذج مثالين، ثم طلب حالة: طلب بقيمة 22.00 دينار مع كوبون خصم 10%. القاعدة أن التوصيل المجاني يُفحص على قيمة الطلب **قبل** الخصم.

| Step | Generated script | Review result |
|---|---|---|
| 1 | AddMeal "Shawarma" 2 (total 22.00) | OK |
| 2 | ApplyDiscount 10% | Rejected: undocumented keyword; the library has ApplyCoupon |
| 3 | ExpectTotal 19.80 | OK: 22.00 − 2.20 = 19.80 |
| 4 | ExpectDeliveryFee 1.50 | Wrong: 22.00 ≥ 20.00 before the coupon, so the fee is 0.00 |

استنتج النموذج أن 19.80 أقل من 20.00 فأضاف الرسوم، وهذا خطأ استدلال لا يظهر إلا لمن يعرف القاعدة. تصحيح التوجيه: إضافة القاعدة صراحة ومثال ثالث عليها.

**المثال 2: تحليل الأثر.** الـ diff يعدّل ملف حساب الرسوم وملف ترجمة نصوص الواجهة العربية.

| Change | Model suggestion | Tester decision |
|---|---|---|
| Delivery fee calculation | Cart, checkout, coupon tests | Accept, and add restaurant dashboard totals (not in the diff) |
| Arabic UI strings file | All Arabic UI tests | Narrow to changed screens; layout check on iOS and Android |

**المثال 3 (حالة خادعة): إصلاح ذاتي يجب رفضه.** فشل اختبار API لأن حقل الاستجابة تغيّر اسمه من deliveryFee إلى delivery_fee، فاقترح الإصلاح الذاتي تعديل الـ assertion. يبدو التغيير «بسيطًا»، لكن المختبِر راجع مواصفات API المعتمدة فوجد الاسم القديم ما زال فيها. إذن التغيير غير مقصود، وسيكسر نسخ التطبيق القديمة على الهواتف. القرار: رفض الإصلاح، وتسجيل defect. الإصلاح الذاتي مناسب فقط عندما يكون التغيير مقصودًا وموثّقًا ولا يغيّر السلوك.

### لا تخلط بين — Don't Confuse

| | Self-healing | Impact analysis | Defect reporting / RCA |
|---|---|---|---|
| Input | Failing script + changed UI or API | Code changes | Logs, screenshots, environment data |
| Output | Adjusted script | List of high-risk areas and tests | Complete defect report, likely causes |
| Main risk | Masks a real defect | Misses hidden dependencies | Hypothesis reported as proven cause |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app team lets self-healing propose fixes in CI, but never merge them automatically. Each proposed fix appears in the pipeline report with the old and new locator or field; a tester approves it only after checking the approved specification. Fixes on payment and checkout steps always get a full review.</p><p class="gx-ar" lang="ar" dir="rtl">يسمح فريق تطبيق التوصيل للإصلاح الذاتي باقتراح التعديلات في CI، لكنه لا يدمجها تلقائيًا أبدًا. يظهر كل إصلاح مقترح في تقرير خط CI مع المحدد أو الحقل القديم والجديد، ولا يعتمده المختبِر إلا بعد مراجعة المواصفات المعتمدة. وإصلاحات خطوات الدفع وإتمام الطلب تخضع دائمًا لمراجعة كاملة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Accepting any self-heal that makes the test pass. If the “Submit” button changed and self-healing picked “Delete”, the run passes but the test is wrong. Check the intent of the step and the expected result; reject the fix if needed. For APIs, give the model the approved specification so it does not “fix” a test to tolerate an unintended contract change.</p><p class="gx-ar" lang="ar" dir="rtl">قبول أي إصلاح ذاتي يجعل الاختبار ينجح. إذا تغيّر زر «إرسال» واختار الإصلاح الذاتي زر «حذف»، ينجح التشغيل لكن الاختبار خاطئ. افحص نية الخطوة والنتيجة المتوقعة، وارفض الإصلاح إن لزم. وفي API، أعطِ النموذج المواصفات المعتمدة حتى لا «يصلح» اختبارًا ليتسامح مع تغيير غير مقصود في العقد.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the five regression activities by name and purpose: keyword-driven script implementation, impact analysis and test optimisation, self-healing and adaptive tests, automated reporting and insights, and enhanced defect reporting and root cause analysis. Know the typical GUI problem (frequent interface changes, locators) and the API problems (changed request/response structures, endpoints, authentication).</p><p class="gx-ar" lang="ar" dir="rtl">اعرف أنشطة الانحدار الخمسة باسمها وهدفها: تنفيذ الـ scripts بالكلمات المفتاحية، وتحليل الأثر وتحسين الاختبارات، والاختبارات ذاتية الإصلاح والتكيفية، والتقارير والرؤى المؤتمتة، وتقارير الـ defects المحسّنة وتحليل السبب الجذري. واعرف مشكلة الواجهة المعتادة (تغيّر الواجهة المتكرر والمحددات) ومشكلات API (تغيّر بنية الطلب والاستجابة والمسارات والمصادقة).</p></aside>

<section class="gx-lab" data-lab="HO-2.2.3a"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Keyword-driven Scripts with Few-shot</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · scripts بالكلمات المفتاحية مع Few-shot</span></span><span class="gx-lab-meta">HO-2.2.3a · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Part 1 · Automation.</strong> This is a hypothetical training keyword library, not an installable package.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الجزء الأول · الأتمتة.</strong> هذه مكتبة كلمات مفتاحية تدريبية افتراضية، وليست حزمة قابلة للتثبيت.</span></p><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Keyword</span><span class="gx-ar" lang="ar" dir="rtl">الكلمة</span></th><th><span class="gx-en" lang="en" dir="ltr">Arguments</span><span class="gx-ar" lang="ar" dir="rtl">الوسائط</span></th><th><span class="gx-en" lang="en" dir="ltr">Documented behaviour</span><span class="gx-ar" lang="ar" dir="rtl">السلوك الموثّق</span></th></tr></thead><tbody><tr><td>OpenRegistration</td><td><span class="gx-en" lang="en" dir="ltr">none</span><span class="gx-ar" lang="ar" dir="rtl">لا شيء</span></td><td><span class="gx-en" lang="en" dir="ltr">Opens the sign-up screen</span><span class="gx-ar" lang="ar" dir="rtl">يفتح شاشة التسجيل</span></td></tr><tr><td>FillEmail</td><td><span class="gx-en" lang="en" dir="ltr">email</span><span class="gx-ar" lang="ar" dir="rtl">البريد</span></td><td><span class="gx-en" lang="en" dir="ltr">Fills the email field</span><span class="gx-ar" lang="ar" dir="rtl">يعبّئ حقل البريد</span></td></tr><tr><td>FillPassword</td><td><span class="gx-en" lang="en" dir="ltr">password</span><span class="gx-ar" lang="ar" dir="rtl">كلمة المرور</span></td><td><span class="gx-en" lang="en" dir="ltr">Fills the password field</span><span class="gx-ar" lang="ar" dir="rtl">يعبّئ حقل كلمة المرور</span></td></tr><tr><td>SubmitRegistration</td><td><span class="gx-en" lang="en" dir="ltr">none</span><span class="gx-ar" lang="ar" dir="rtl">لا شيء</span></td><td><span class="gx-en" lang="en" dir="ltr">Submits the form</span><span class="gx-ar" lang="ar" dir="rtl">يرسل النموذج</span></td></tr><tr><td>ExpectAccountCreated</td><td><span class="gx-en" lang="en" dir="ltr">none</span><span class="gx-ar" lang="ar" dir="rtl">لا شيء</span></td><td><span class="gx-en" lang="en" dir="ltr">Checks the account was created</span><span class="gx-ar" lang="ar" dir="rtl">يتحقق من إنشاء الحساب</span></td></tr><tr><td>ExpectNoAccount</td><td><span class="gx-en" lang="en" dir="ltr">none</span><span class="gx-ar" lang="ar" dir="rtl">لا شيء</span></td><td><span class="gx-en" lang="en" dir="ltr">Checks no new account was created</span><span class="gx-ar" lang="ar" dir="rtl">يتحقق من عدم إنشاء حساب جديد</span></td></tr></tbody></table><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Give the model a valid sign-up example and an empty-email example written with these keywords.</span><span class="gx-ar" lang="ar" dir="rtl">أعطِ النموذج مثال تسجيل صحيحًا ومثال بريد فارغ مكتوبَين بهذه الكلمات.</span></li><li><span class="gx-en" lang="en" dir="ltr">Ask for an 11-character password case, with the constraint “use the documented library only”.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب حالة لكلمة مرور من 11 محرفًا، مع القيد «استخدم المكتبة الموثّقة فقط».</span></li><li><span class="gx-en" lang="en" dir="ltr">Ask the model to validate the generated script against the keyword library: every keyword documented, arguments in the right order, and the expected result checked.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب من النموذج التحقق من الـ script الناتج مقابل مكتبة الكلمات المفتاحية: كل كلمة موثّقة، والوسائط بالترتيب الصحيح، والنتيجة المتوقعة مفحوصة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Review the draft yourself, then run it with your real tool in a test environment.</span><span class="gx-ar" lang="ar" dir="rtl">راجع المسودة بنفسك، ثم شغّلها بأداتك الفعلية في بيئة اختبار.</span></li></ol><pre class="gx-lab-prompt"><code>OpenRegistration
FillEmail learner01@example.test
FillPassword abcdefghijk
SubmitRegistration
ExpectNoAccount</code></pre><p><span class="gx-en" lang="en" dir="ltr">This sequence is illustrative, not a real run. A real product test should also check the right error message. If the model suggests an undocumented keyword, do not quietly add it to the library: fix the prompt, or update the library through a visible review.</span><span class="gx-ar" lang="ar" dir="rtl">هذا التسلسل توضيحي، وليس تشغيلًا حقيقيًا. اختبار المنتج الحقيقي يجب أن يتحقق أيضًا من رسالة الخطأ الصحيحة. وإذا اقترح النموذج كلمة غير موثّقة، لا تضفها للمكتبة بصمت: صحّح التوجيه، أو حدّث المكتبة بمراجعة واضحة.</span></p><p><span class="gx-en" lang="en" dir="ltr"><strong>Part 2 · Debugging.</strong> Use a system prompt that defines the assistant's role and the library limits, then pass the script and the failure log. Ask it to find the failing step, fix it and explain briefly from the log. Compare before and after, re-run, then extend coverage with more cases.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الجزء الثاني · التصحيح.</strong> استخدم توجيه نظام يحدد دور المساعد وحدود المكتبة، ثم مرّر الـ script وسجل الفشل. اطلب منه تحديد الخطوة الفاشلة وإصلاحها وشرحًا موجزًا من السجل. قارن قبل وبعد، وأعد التشغيل، ثم وسّع التغطية بحالات إضافية.</span></p></div></section>

<section class="gx-lab" data-lab="HO-2.2.3b"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Analyse a Regression Report</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · تحليل تقرير انحدار</span></span><span class="gx-lab-meta">HO-2.2.3b · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Given:</strong> TC-01 failed with “locator missing”. TC-02 failed with HTTP 500. TC-03 was skipped by the runner. The team has a known defect, KB-7, about an outdated locator on the sign-up screen.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المعطيات:</strong> TC-01 فشل برسالة «locator missing». TC-02 فشل بـ HTTP 500. TC-03 تخطّاه المشغّل. ولدى الفريق defect معروف KB-7 عن محدد قديم في شاشة التسجيل.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Compare the results with the test specification.</span><span class="gx-ar" lang="ar" dir="rtl">قارن النتائج بمواصفات الاختبار.</span></li><li><span class="gx-en" lang="en" dir="ltr">Cluster similar symptoms.</span><span class="gx-ar" lang="ar" dir="rtl">اجمع الأعراض المتشابهة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Compare with the known-anomalies list.</span><span class="gx-ar" lang="ar" dir="rtl">قارن بقائمة الحالات الشاذة المعروفة.</span></li><li><span class="gx-en" lang="en" dir="ltr">Cross-check the evidence. Keep every step in the same conversation, each building on the previous one.</span><span class="gx-ar" lang="ar" dir="rtl">تحقّق من الأدلة بشكل متقاطع. أبقِ كل الخطوات في المحادثة نفسها، كل خطوة تبني على السابقة.</span></li></ol><details class="gx-lab-answer"><summary>Model answer · <span class="gx-ar-inline" lang="ar" dir="rtl">الإجابة النموذجية</span></summary><p><span class="gx-en" lang="en" dir="ltr">TC-01 may relate to KB-7 after checking the build and the step. TC-02 needs its own investigation; HTTP 500 alone does not name a root cause. TC-03 was not executed, which is not a pass. Keep the known-anomalies list and the reasons for exclusions so cases are not lost in the summary.</span><span class="gx-ar" lang="ar" dir="rtl">TC-01 قد يرتبط بـ KB-7 بعد فحص الإصدار والخطوة. TC-02 يحتاج تحقيقًا مستقلًا؛ HTTP 500 وحده لا يحدد سببًا جذريًا. TC-03 لم يُنفَّذ، وهذا ليس نجاحًا. احتفظ بقائمة الحالات الشاذة المعروفة وأسباب الاستبعاد حتى لا تضيع حالات في الملخص.</span></p></details></div></section>

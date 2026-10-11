---
order: 3
slug: "3-1-3"
chapter: 3
group: "3.1"
section: "3.1.3"
title: "Differences between Static Testing and Dynamic Testing"
titleAr: "الفرق بين الاختبار الساكن والديناميكي"
objectives: "FL-3.1.3 · K2"
minutes: 12
lo:
  FL-3.1.3: "Compare and contrast static testing and dynamic testing."
loAr:
  FL-3.1.3: "تقارن بين الاختبار الساكن والديناميكي."
takeaways:
  - "Both aim to find defects and assess quality as early as possible; they complement each other."
  - "Static testing finds defects directly; dynamic testing causes failures from which defects are then found."
  - "Static testing can examine non-executable work products and rarely executed paths; dynamic testing needs something that runs."
  - "Static testing measures characteristics that do not depend on execution, such as maintainability; dynamic testing measures those that do, such as performance."
  - "Requirement, design and coding defects, standards deviations, interface mismatches, security vulnerabilities and gaps in test basis coverage are often easier or cheaper to find statically."
  - "Some defect types can only be found by static testing and others only by dynamic testing, so neither replaces the other."
takeawaysAr:
  - "كلاهما يهدف إلى اكتشاف الـ defects وتقييم الجودة في أبكر وقت؛ وهما متكاملان."
  - "الاختبار الساكن يجد الـ defects مباشرة؛ والديناميكي يُحدث أعطالًا تُستخرج منها الـ defects."
  - "الساكن يفحص مخرجات غير قابلة للتشغيل ومسارات نادرة التنفيذ؛ والديناميكي يحتاج شيئًا يعمل."
  - "الساكن يقيس خصائص لا تعتمد على التشغيل مثل قابلية الصيانة؛ والديناميكي يقيس ما يعتمد عليه مثل الأداء."
  - "الـ defects في المتطلبات والتصميم والشيفرة، ومخالفة المعايير، وعدم تطابق الواجهات، والثغرات الأمنية، وفجوات تغطية أساس الاختبار غالبًا أسهل أو أرخص اكتشافًا بالاختبار الساكن."
  - "بعض أنواع الـ defects لا يجدها إلا الاختبار الساكن، وبعضها لا يجدها إلا الديناميكي، فلا يغني أحدهما عن الآخر."
terms:
  - en: "Anomaly"
    ar: "الحالة الشاذة"
    def: "A condition that deviates from what is expected. In reviews, an anomaly may or may not turn out to be a defect."
    defAr: "حالة تنحرف عن المتوقع. في المراجعات، قد يتبيّن أن الحالة الشاذة defect، وقد لا تكون."
    match: ["Anomaly", "anomaly", "anomalies"]
  - en: "Dynamic Testing"
    ar: "الاختبار الديناميكي"
    def: "Testing that involves the execution of the test item."
    defAr: "اختبار يتضمن تشغيل عنصر الاختبار."
    match: ["Dynamic Testing", "dynamic testing"]
---
الاختبار الساكن والاختبار الديناميكي **متكاملان (complement each other)**، وليسا بديلين يختار الفريق أحدهما. لهما **أهداف متشابهة**، أهمها دعم اكتشاف الـ defects في مخرجات العمل وتقييم جودتها (القسم 1.1.1)، لكنهما يصلان إلى ذلك بطريقتين مختلفتين، ولكل طريقة نقاط قوة. في تطبيق التوصيل، مراجعة قصة الكوبونات ومحلّل الشيفرة في خط CI يمثّلان الجانب الساكن، واختبارات الواجهة واختبار الحِمل قبل الإصدار يمثّلان الجانب الديناميكي. فهم الفروق بينهما يساعدك على معرفة **أي نوع من الـ defects ستجده بأي طريقة**، وهذا بالضبط ما يقيسه هدف K2 في الامتحان.

### أوجه الاختلاف — Key Differences

| Aspect | Static testing | Dynamic testing |
| --- | --- | --- |
| Defect types found | Some types only static testing finds | Some types only dynamic testing finds |
| How defects are found | Finds defects directly | Causes failures; defects are found by analysis |
| Hard-to-reach code | Can examine paths rarely executed | Only what the tests actually execute |
| What it can test | Non-executable work products too | Only executable work products |
| Quality characteristics | Not dependent on execution (e.g. maintainability) | Dependent on execution (e.g. performance efficiency) |

نشرح كل فرق مع سببه ومثاله:

**1. كلاهما يكتشف الـ defects، لكن ليس الـ defects نفسها.** الاختبار الساكن، والاختبار الديناميكي مع تحليل الأعطال، يؤديان كلاهما إلى اكتشاف الـ defects. غير أن **بعض أنواع الـ defects لا يجدها إلا أحدهما**. تناقض بين قصتين في قائمة المنتج لا يظهر إلا بالقراءة؛ وتسرّب ذاكرة يجعل تطبيق السائق يبطؤ بعد ساعتين من العمل لا يظهر إلا بالتشغيل. لهذا يحتاج الفريق الطريقتين معًا.

**2. مباشرة مقابل عبر الأعطال.** الاختبار الساكن **يجد الـ defect نفسه مباشرة**: المراجع يشير إلى السطر الذي يحسب الرسوم خطأً. أما الاختبار الديناميكي فـ**يُحدث عطلًا (failure)**، مثل ظهور رسوم 1.50 على طلب قيمته 25 دينارًا، ثم يحتاج الفريق إلى **تحليل لاحق** (تنقيح debugging) لتحديد الـ defect الذي سبّبه. لذلك يكون الطريق من الاكتشاف إلى الإصلاح في الساكن أقصر عادة.

**3. المسارات النادرة.** قد يكتشف الاختبار الساكن بسهولة أكبر الـ defects الموجودة في **مسارات شيفرة نادرة التنفيذ أو يصعب الوصول إليها** بالاختبار الديناميكي. مثلًا، مسار معالجة انقطاع الاتصال ببوابة الدفع في منتصف العملية: إعادة إنتاجه بالتشغيل تحتاج بيئة خاصة، بينما يقرؤه المراجع أو تحلّله الأداة كأي سطر آخر.

**4. القابل للتشغيل وغير القابل للتشغيل.** الاختبار الساكن يُطبَّق على **مخرجات غير قابلة للتشغيل** (متطلبات، تصاميم، خطط اختبار، عقود) وعلى الشيفرة أيضًا. أما الديناميكي فلا يُطبَّق إلا على **المخرجات القابلة للتشغيل**. لا يمكنك «تشغيل» وثيقة متطلبات الكوبونات.

**5. خصائص الجودة.** الاختبار الساكن يقيس خصائص **لا تعتمد على تشغيل الشيفرة**، مثل **قابلية الصيانة (maintainability)**: تعقيد الدوال، والتكرار، والالتزام بالمعايير. والديناميكي يقيس خصائص **تعتمد على التشغيل**، مثل **كفاءة الأداء (performance efficiency)**: كم ثانية تحتاج صفحة تتبّع الطلب عندما يفتحها ألف زبون في وقت الغداء؟

### defects أسهل اكتشافًا بالاختبار الساكن — Defects Easier to Find Statically

يذكر المنهج أنواعًا نموذجية من الـ defects يكون اكتشافها و/أو إصلاحها **أسهل أو أرخص** بالاختبار الساكن:

| Defect type | Syllabus examples | Delivery-app example |
| --- | --- | --- |
| Requirements defects | Inconsistencies, ambiguities, contradictions, omissions, inaccuracies, duplications | One story says one coupon per order, another allows stacking |
| Design defects | Inefficient database structures, poor modularization | Order and payment logic mixed in one huge module |
| Certain coding defects | Undefined values, undeclared variables, unreachable or duplicated code, excessive complexity | Discount variable used before it gets a value |
| Deviations from standards | Not following naming conventions | Mixed naming styles in the driver app code |
| Incorrect interface specifications | Mismatched number, type or order of parameters | App sends amount as text, API expects a number |
| Security vulnerabilities | e.g. buffer overflows | Unchecked input length in a native image library |
| Gaps in test basis coverage | Missing tests for an acceptance criterion | No test for "free delivery from 20.00 JOD" |

لماذا هذه بالذات؟ لأن كل نوع منها **مكتوب** في مكان ما ويمكن رؤيته بالقراءة أو بالأداة:

- **الـ defects في المتطلبات**: التناقض والغموض والتعارض والنقص وعدم الدقة والتكرار تظهر بمجرد أن يقرأ شخص منتبه النص، قبل وجود أي شيفرة.
- **الـ defects في التصميم**: هيكل قاعدة بيانات غير فعّال أو تقسيم ضعيف للوحدات يظهر في مخطط التصميم، ويصبح إصلاحه بعد البناء باهظًا.
- **أنواع معينة من الـ defects في الشيفرة**: متغيرات بقيم غير معرّفة، ومتغيرات غير مُعلنة، وشيفرة غير قابلة للوصول أو مكررة، وتعقيد مفرط؛ وكلها تجدها أدوات التحليل الساكن آليًا.
- **الانحراف عن المعايير**: مثل عدم الالتزام بقواعد التسمية في معايير كتابة الشيفرة؛ لا يسبب عطلًا، فلن يكشفه التشغيل أبدًا.
- **مواصفات الواجهات غير الصحيحة**: عدم تطابق **عدد** المعاملات أو **نوعها** أو **ترتيبها** بين التطبيق وواجهات الخلفية، ويظهر بمقارنة المواصفتين.
- **أنواع محددة من الثغرات الأمنية**: مثل **تجاوز سعة المخزن المؤقت (buffer overflow)**، وتكتشفها أدوات الفحص الأمني الساكن.
- **فجوات أو أخطاء في تغطية أساس الاختبار**: مثل غياب اختبارات لأحد معايير القبول؛ تظهر بمراجعة حالات الاختبار مقابل القصة.

### كيف يتكاملان؟ — Working Together

لاحظ أن القائمة السابقة تقول «أسهل أو أرخص»، لا «فقط». كثير من هذه الـ defects قد يظهر في النهاية بالاختبار الديناميكي أيضًا، لكن بعد أن يكون قد كلّف أكثر. لذلك يرتّب فريق تطبيق التوصيل عمله بحيث يلتقط الاختبار الساكن ما يستطيع التقاطه مبكرًا: مراجعة القصص في refinement، ومراجعة الشيفرة في كل Pull Request، والتحليل الساكن مع كل commit. ثم يركّز الاختبار الديناميكي على ما لا يظهر إلا بالتشغيل: التكامل مع بوابة الدفع وخدمة الخرائط، والأداء تحت الحِمل، وسلوك التطبيق على أجهزة iOS وAndroid الحقيقية.

### لا تخلط بين — Don't Confuse

| | Defect | Failure | Anomaly |
| --- | --- | --- | --- |
| What it is | Flaw in a work product | Wrong behaviour when executed | Anything that deviates from expectation |
| How it shows up | Static testing points to it directly; dynamic testing reaches it by analysing a failure | Observed while running the software | Logged by reviewers during individual review |
| Is it confirmed? | Yes | Yes, as observed behaviour | Not yet; analysis decides |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A linter flags a variable used before it is assigned, in a branch that only runs on 29 February. Dynamic testing would probably never hit it; static analysis finds it in seconds. Meanwhile, only a load test can show that the same page takes eight seconds with 1,000 users.</p><p class="gx-ar" lang="ar" dir="rtl">أداة Linter تنبّه إلى متغير يُستخدم قبل إعطائه قيمة، في فرع لا يُنفَّذ إلا في 29 فبراير. غالبًا لن يصل إليه الاختبار الديناميكي أبدًا؛ والتحليل الساكن يكتشفه خلال ثوانٍ. في المقابل، اختبار الحِمل وحده يستطيع أن يُظهر أن الصفحة نفسها تستغرق ثماني ثوانٍ مع 1000 مستخدم.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2 comparison: "finds defects directly" and "maintainability" → static. "Causes failures" and "performance" → dynamic. Also remember that missing tests for an acceptance criterion (a test basis coverage gap) is found statically.</p><p class="gx-ar" lang="ar" dir="rtl">مقارنة K2: «يجد الـ defects مباشرة» و«قابلية الصيانة» ← ساكن. «يُحدث أعطالًا» و«الأداء» ← ديناميكي. وتذكّر أن غياب اختبارات لأحد معايير القبول (فجوة في تغطية أساس الاختبار) يُكتشف بالاختبار الساكن.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking static testing can cause failures. It cannot, because nothing is executed; it finds defects directly.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار الساكن يمكن أن يُحدث أعطالًا. لا يمكن، لأن لا شيء يُشغَّل؛ هو يجد الـ defects مباشرة.</p></aside>

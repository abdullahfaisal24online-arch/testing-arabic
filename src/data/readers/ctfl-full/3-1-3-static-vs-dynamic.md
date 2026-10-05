---
order: 3
slug: "3-1-3"
chapter: 3
group: "3.1"
section: "3.1.3"
title: "Differences between Static Testing and Dynamic Testing"
titleAr: "الفرق بين الاختبار الساكن والديناميكي"
objectives: "FL-3.1.3 · K2"
minutes: 7
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
takeawaysAr:
  - "كلاهما يهدف إلى اكتشاف العيوب وتقييم الجودة في أبكر وقت؛ وهما متكاملان."
  - "الاختبار الساكن يجد العيوب مباشرة؛ والديناميكي يُحدث أعطالًا تُستخرج منها العيوب."
  - "الساكن يفحص مخرجات غير قابلة للتشغيل ومسارات نادرة التنفيذ؛ والديناميكي يحتاج شيئًا يعمل."
  - "الساكن يقيس خصائص لا تعتمد على التشغيل مثل قابلية الصيانة؛ والديناميكي يقيس ما يعتمد عليه مثل الأداء."
  - "عيوب المتطلبات والتصميم والشيفرة، ومخالفة المعايير، وعدم تطابق الواجهات، والثغرات الأمنية، وفجوات تغطية أساس الاختبار غالبًا أسهل أو أرخص اكتشافًا بالاختبار الساكن."
terms:
  - en: "Anomaly"
    ar: "الحالة الشاذة"
    def: "A condition that deviates from what is expected. In reviews, an anomaly may or may not turn out to be a defect."
    defAr: "حالة تنحرف عن المتوقع. في المراجعات، قد يتبيّن أن الحالة الشاذة عيب، وقد لا تكون."
    match: ["Anomaly", "anomaly", "anomalies"]
---
الاختبار الساكن والديناميكي **متكاملان**: كلاهما يهدف إلى تقييم الجودة واكتشاف العيوب في أبكر وقت ممكن، وبعض أنواع العيوب لا يكتشفها إلا أحدهما.

### أوجه الاختلاف — Key Differences

| Aspect | Static testing | Dynamic testing |
| --- | --- | --- |
| How defects are found | Finds defects directly | Causes failures; defects are found by analysis |
| What it can test | Non-executable work products too | Only executable work products |
| Hard-to-reach code | Can examine paths rarely executed | Only what the tests actually execute |
| Quality characteristics | Not dependent on execution (e.g. maintainability) | Dependent on execution (e.g. performance efficiency) |

- الساكن يجد العيوب في مخرجات العمل **مباشرة**، والديناميكي يُحدث **أعطالًا** تُحدَّد منها العيوب بالتحليل اللاحق.
- الساكن قد يكتشف بسهولة أكبر عيوبًا في **مسارات شيفرة نادرة التنفيذ** أو يصعب الوصول إليها بالاختبار الديناميكي.
- الساكن يمكن تطبيقه على **مخرجات غير قابلة للتشغيل**، والديناميكي على **القابلة للتشغيل** فقط.
- الساكن يقيس خصائص جودة **لا تعتمد على تشغيل الشيفرة**، مثل قابلية الصيانة. والديناميكي يقيس خصائص **تعتمد على التشغيل**، مثل كفاءة الأداء.

### عيوب أسهل اكتشافًا بالاختبار الساكن — Defects Easier to Find Statically

العيوب المعتادة التي يكون اكتشافها و/أو إصلاحها **أسهل أو أرخص** بالاختبار الساكن:

| Defect type | أمثلة |
| --- | --- |
| Requirements defects | التناقضات، الغموض، التعارض، النقص، عدم الدقة، التكرار |
| Design defects | هياكل قاعدة بيانات غير فعّالة، تقسيم ضعيف للوحدات |
| Certain coding defects | متغيرات بقيم غير معرّفة، متغيرات غير مُعلنة، شيفرة غير قابلة للوصول أو مكررة، تعقيد مفرط |
| Deviations from standards | مثل عدم الالتزام بقواعد تسمية الشيفرة |
| Incorrect interface specifications | عدم تطابق عدد المعاملات أو أنواعها أو ترتيبها |
| Security vulnerabilities | مثل القابلية لتجاوز سعة الذاكرة (Buffer Overflow) |
| Gaps in test basis coverage | مثل غياب اختبارات لأحد معايير القبول |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A linter flags a variable used before it is assigned, in a branch that only runs on 29 February. Dynamic testing would probably never hit it; static analysis finds it in seconds. Meanwhile, only a load test can show that the same page takes eight seconds with 1,000 users.</p><p class="gx-ar" lang="ar" dir="rtl">أداة Linter تنبّه إلى متغير يُستخدم قبل إعطائه قيمة، في فرع لا يُنفَّذ إلا في 29 فبراير. غالبًا لن يصل إليه الاختبار الديناميكي أبدًا؛ والتحليل الساكن يكتشفه خلال ثوانٍ. في المقابل، اختبار الحِمل وحده يستطيع أن يُظهر أن الصفحة نفسها تستغرق ثماني ثوانٍ مع 1000 مستخدم.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2 comparison: "finds defects directly" and "maintainability" → static. "Causes failures" and "performance" → dynamic. Also remember that missing tests for an acceptance criterion (a test basis coverage gap) is found statically.</p><p class="gx-ar" lang="ar" dir="rtl">مقارنة K2: «يجد العيوب مباشرة» و«قابلية الصيانة» ← ساكن. «يُحدث أعطالًا» و«الأداء» ← ديناميكي. وتذكّر أن غياب اختبارات لأحد معايير القبول (فجوة في تغطية أساس الاختبار) يُكتشف بالاختبار الساكن.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking static testing can cause failures. It cannot, because nothing is executed; it finds defects directly.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار الساكن يمكن أن يُحدث أعطالًا. لا يمكن، لأن لا شيء يُشغَّل؛ هو يجد العيوب مباشرة.</p></aside>

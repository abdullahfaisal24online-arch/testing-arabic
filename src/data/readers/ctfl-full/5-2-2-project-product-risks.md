---
order: 9
slug: "5-2-2"
chapter: 5
group: "5.2"
section: "5.2.2"
title: "Project Risks and Product Risks"
titleAr: "مخاطر المشروع ومخاطر المنتج"
objectives: "FL-5.2.2 · K2"
minutes: 11
lo:
  FL-5.2.2: "Tell project risks and product risks apart."
loAr:
  FL-5.2.2: "تميّز بين مخاطر المشروع ومخاطر المنتج."
takeaways:
  - "Project risks relate to managing and controlling the project; product risks relate to the quality characteristics of the product."
  - "Project risks: organisational issues, people issues, technical issues and supplier issues; they affect schedule, budget and scope."
  - "Product risks: missing or wrong functionality, wrong calculations, runtime errors, poor architecture, inefficient algorithms, slow response, poor user experience, security vulnerabilities."
  - "Product risks can lead to user dissatisfaction, lost revenue, trust or reputation, damage to third parties, high maintenance costs, helpdesk overload, criminal penalties, and in extreme cases physical damage, injury or death."
takeawaysAr:
  - "مخاطر المشروع ترتبط بإدارة المشروع والتحكم فيه؛ ومخاطر المنتج ترتبط بخصائص جودة المنتج."
  - "مخاطر المشروع: مشكلات تنظيمية، ومشكلات أشخاص، ومشكلات تقنية، ومشكلات موردين؛ وتؤثر على الجدول والميزانية والنطاق."
  - "مخاطر المنتج: وظائف ناقصة أو خاطئة، وحسابات خاطئة، وأخطاء تشغيل، وبنية ضعيفة، وخوارزميات غير فعّالة، واستجابة بطيئة، وتجربة مستخدم ضعيفة، وثغرات أمنية."
  - "قد تؤدي مخاطر المنتج إلى عدم رضا المستخدمين، وخسارة الإيرادات أو الثقة أو السمعة، وضرر لأطراف ثالثة، وتكاليف صيانة عالية، وضغط على الدعم الفني، وعقوبات جنائية، وفي الحالات القصوى ضرر مادي أو إصابات أو وفاة."
terms:
  - en: "Project Risk"
    ar: "خطر المشروع"
    def: "A risk related to the management and control of a project, affecting schedule, budget or scope."
    defAr: "خطر مرتبط بإدارة المشروع والتحكم فيه، يؤثر على الجدول أو الميزانية أو النطاق."
    match: ["Project Risk", "project risk", "project risks"]
  - en: "Product Risk"
    ar: "خطر المنتج"
    def: "A risk related to the quality characteristics of a product."
    defAr: "خطر مرتبط بخصائص جودة المنتج."
    match: ["Product Risk", "product risk", "product risks"]
---
في اختبار البرمجيات نهتم عمومًا بنوعين من المخاطر: **مخاطر المشروع (Project Risks)** و**مخاطر المنتج (Product Risks)**. التمييز بينهما ليس ترفًا نظريًا: النوع الأول يهدد **قدرة الفريق على إنجاز العمل**، والثاني يهدد **جودة ما يصل إلى المستخدم**. ولكل منهما طريقة مختلفة في المعالجة، فمخاطر المنتج هي التي يوجّه إليها الاختبار جهده مباشرة (القسمان 5.2.3 و5.2.4)، بينما تُعالج مخاطر المشروع غالبًا بقرارات إدارية: تعديل الجدول، أو الموارد، أو العقود.

### مخاطر المشروع — Project Risks

ترتبط مخاطر المشروع بـ **إدارة المشروع والتحكم فيه**. يقسّمها السيليبس إلى أربع فئات، وهذه أمثلتها في تطبيق التوصيل:

| Category | Syllabus examples | Delivery-app example |
| --- | --- | --- |
| Organizational issues | Delays in work product deliveries, inaccurate estimates, cost cutting | The coupon API reaches the testers 4 days late; the regression effort was estimated at 2 days but needs 5; the device-lab subscription is cancelled to save money |
| People issues | Insufficient skills, conflicts, communication problems, shortage of staff | Nobody on the team knows security testing; one of the 2 testers is on leave during the release sprint |
| Technical issues | Scope creep, poor tool support | Digital wallet payment is added in the middle of a sprint; the automation tool does not handle the Arabic right-to-left layout |
| Supplier issues | Third-party delivery failure, bankruptcy of the supporting company | The payment gateway does not deliver its test sandbox on time; the company supporting the maps service goes bankrupt |

**مشكلات تنظيمية:** تأخر تسليم مخرجات العمل يضغط وقت الاختبار في نهاية الـ sprint، والتقديرات غير الدقيقة تجعل الخطة غير واقعية، وخفض التكاليف قد يحرم الفريق من أجهزة أو بيئات يحتاجها.

**مشكلات الأشخاص:** نقص المهارات يعني أن خطرًا مهمًا قد لا يُختبر جيدًا، والصراعات ومشكلات التواصل تؤدي إلى فهم مختلف للمتطلبات (مالك المنتج يقصد «الحد الأدنى 5 دنانير قبل الخصم»، والمطوّر يفهمه «بعد الخصم»)، ونقص الموظفين يقلل ما يمكن إنجازه.

**مشكلات تقنية:** **تضخّم النطاق (Scope Creep)** يعني إضافة متطلبات دون تعديل الوقت، فيتقلص وقت اختبار كل ميزة. و**ضعف دعم الأدوات** يبطئ الفريق أو يجبره على العمل اليدوي.

**مشكلات الموردين:** تطبيق التوصيل يعتمد على طرفين ثالثين (بوابة الدفع وخدمة الخرائط). إذا فشل أحدهما في التسليم، أو أفلست الشركة الداعمة، تتوقف أعمال لا يملك الفريق السيطرة عليها.

**الأثر:** عندما تقع مخاطر المشروع، قد تؤثر على **جدول المشروع** أو **ميزانيته** أو **نطاقه**، فتؤثر بالتالي على **قدرته على تحقيق أهدافه**. مثال: تأخر بيئة الاختبار أسبوعًا قد يؤجّل الإصدار (الجدول)، أو يتطلب مختبرًا إضافيًا (الميزانية)، أو يؤدي إلى إخراج ميزة المحفظة من الإصدار (النطاق).

### مخاطر المنتج — Product Risks

ترتبط مخاطر المنتج بـ **خصائص جودة المنتج**، مثل تلك الموصوفة في **نموذج الجودة ISO 25010** (الملاءمة الوظيفية، وكفاءة الأداء، وقابلية الاستخدام، والأمن، وغيرها). السؤال هنا: ماذا لو لم يتصرف البرنامج كما ينبغي؟

| Product risk (syllabus) | Delivery-app example |
| --- | --- |
| Missing or wrong functionality | Cancelling an order is impossible in the Accepted state |
| Incorrect calculations | Delivery fee 1.50 JOD charged on a 20.00 JOD order |
| Runtime errors | The driver app crashes when the route has more than 10 stops |
| Poor architecture | Orders and payments share one database lock, so one slow payment blocks all orders |
| Inefficient algorithms | Searching restaurants takes longer as the number of restaurants grows |
| Inadequate response time | Checkout takes 9 seconds at Friday lunchtime |
| Poor user experience | The coupon field is hidden behind three taps in the Arabic UI |
| Security vulnerabilities | One customer can view another customer's order history by changing an ID in the API |

لاحظ أن القائمة لا تقتصر على الأخطاء الوظيفية. **البنية الضعيفة** و**الخوارزميات غير الفعّالة** قد لا يراها المستخدم اليوم، لكنها تظهر عندما يكبر عدد الطلبات، فتتحول إلى بطء أو انهيار. و**تجربة المستخدم الضعيفة** خطر حقيقي حتى لو كانت النتائج صحيحة، لأن الزبون الذي لا يجد حقل الكوبون لن يستخدمه. لهذا يرتبط خطر المنتج بكل خصائص الجودة، لا بالوظائف وحدها.

### عواقب مخاطر المنتج — Consequences

عندما تقع مخاطر المنتج، قد تؤدي إلى عواقب سلبية متعددة، تتدرج من الإزعاج إلى الكارثة:

- **عدم رضا المستخدمين:** تقييمات سيئة في متجر التطبيقات بعد بطء الدفع.
- **خسارة الإيرادات أو الثقة أو السمعة:** طلبات متروكة في سلة الشراء، وزبائن ينتقلون إلى منافس، وخبر في وسائل التواصل عن «تطبيق يخصم مرتين».
- **ضرر لأطراف ثالثة:** مطعم يحضّر طلبات أُلغيت دون أن تصله رسالة الإلغاء، فيخسر ثمنها.
- **تكاليف صيانة عالية وضغط على الدعم الفني:** كل خطأ في الحساب يولّد مكالمات وطلبات استرداد يدوية.
- **عقوبات جنائية:** تسريب بيانات الزبائن قد يخالف قوانين حماية البيانات.
- **في الحالات القصوى: ضرر مادي أو إصابات أو حتى وفاة:** إذا لم تظهر معلومات مسببات الحساسية في الوجبة، قد يتعرض زبون لرد فعل تحسّسي خطير.

<figure class="gx-figure gx-spectrum" aria-label="Project risk or product risk?"><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Project risk</b><span>About the project: delays, skills, tools, suppliers. Hits schedule, budget, scope.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Product risk</b><span>About the product's quality: wrong results, slow, insecure, hard to use. Hits users and the business.</span></div></div><figcaption>Project risk or product risk?</figcaption></figure>

### حالة دقيقة: المصدر نفسه، خطران مختلفان — Same Source, Two Risks

الطرف الثالث نفسه قد يولّد النوعين. «قد يتأخر مزوّد الخرائط في تسليم النسخة الجديدة من مكتبته» خطر **مشروع** (مشكلة مورّد تؤثر على الجدول). أما «قد تعيد مكتبة الخرائط إحداثيات خاطئة فيذهب السائق إلى عنوان خاطئ» فخطر **منتج** (وظيفة خاطئة يراها المستخدم). المعيار ليس **من أين** جاء الخطر، بل **ماذا يصيب**: سير العمل أم جودة المنتج.

طريقة سريعة للتصنيف في ثلاث خطوات:

1. **صِف ما سيحدث** لو وقع الخطر، بجملة واحدة.
2. **اسأل من يتضرر أولًا:** إذا كان الفريق وخطته (تأخير، تكلفة، نطاق أصغر) فهو خطر مشروع؛ وإذا كان المستخدم أو العمل بسبب سلوك البرنامج فهو خطر منتج.
3. **اربطه بفئة:** إحدى الفئات الأربع لمخاطر المشروع، أو خاصية جودة لمخاطر المنتج. إذا لم تجد فئة مناسبة، فأعد صياغة الخطر.

### لا تخلط بين — Don't Confuse

| | Project risk | Product risk |
| --- | --- | --- |
| Related to | Management and control of the project | Quality characteristics of the product |
| Categories / examples | Organizational, people, technical, supplier issues | Wrong functionality, calculations, performance, usability, security… |
| When it occurs, it hits | Schedule, budget, scope | Users, revenue, reputation, third parties, safety |
| Typical handling | Management actions (plan, staff, contracts) | Product risk analysis and control, mainly by testing |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Ask "is this about the work or about the software?" A key tester leaving, a late test environment or a vendor delay → project risk. Slow pages, wrong totals or a data leak → product risk.</p><p class="gx-ar" lang="ar" dir="rtl">اسأل: «هل هذا عن العمل أم عن البرمجية؟». مغادرة مختبر أساسي، أو تأخر بيئة الاختبار، أو تأخير مورّد ← خطر مشروع. صفحات بطيئة، أو مجاميع خاطئة، أو تسرّب بيانات ← خطر منتج.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Classifying "poor tool support" as a product risk. Tool problems affect the project's ability to work, so they are project risks (technical issues).</p><p class="gx-ar" lang="ar" dir="rtl">تصنيف «ضعف دعم الأدوات» كخطر منتج. مشكلات الأدوات تؤثر على قدرة المشروع على العمل، فهي مخاطر مشروع (مشكلات تقنية).</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake · technical ≠ product</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع · تقني لا يعني منتج</span></p><p class="gx-en" lang="en" dir="ltr">The word "technical" misleads. "Technical issues" such as scope creep are project risks. "Poor architecture" and "inefficient algorithms" are product risks, because they are about the quality of the product itself.</p><p class="gx-ar" lang="ar" dir="rtl">كلمة «تقني» مضللة. «المشكلات التقنية» مثل تضخّم النطاق مخاطر مشروع. أما «البنية الضعيفة» و«الخوارزميات غير الفعّالة» فمخاطر منتج، لأنها تخص جودة المنتج نفسه.</p></aside>

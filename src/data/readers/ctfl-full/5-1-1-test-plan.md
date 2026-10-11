---
order: 1
slug: "5-1-1"
chapter: 5
group: "5.1"
section: "5.1.1"
title: "Purpose and Content of a Test Plan"
titleAr: "الغرض من خطة الاختبار ومحتواها"
objectives: "FL-5.1.1 · K2"
minutes: 12
lo:
  FL-5.1.1: "Give examples of the purpose and content of a test plan."
loAr:
  FL-5.1.1: "تعطي أمثلة على الغرض من خطة الاختبار ومحتواها."
takeaways:
  - "A test plan describes the objectives, resources and processes for a test project."
  - "It documents the means and schedule for achieving the test objectives, helps ensure activities meet the criteria, serves communication, and shows that testing follows the test policy and strategy."
  - "Planning makes testers think ahead and confront risks, schedules, people, tools, costs and effort."
  - "Typical content: context, assumptions and constraints, stakeholders, communication, risk register, test approach, budget and schedule."
takeawaysAr:
  - "خطة الاختبار تصف الأهداف والموارد والعمليات لمشروع اختبار."
  - "توثّق وسائل تحقيق أهداف الاختبار وجدولها، وتساعد على ضمان التزام الأنشطة بالمعايير، وتخدم التواصل، وتُظهر أن الاختبار يتبع سياسة الاختبار واستراتيجيته."
  - "التخطيط يجعل المختبرين يفكرون مسبقًا ويواجهون المخاطر والجداول والأشخاص والأدوات والتكاليف والجهد."
  - "المحتوى المعتاد: السياق، والافتراضات والقيود، وأصحاب المصلحة، والتواصل، وسجل المخاطر، ونهج الاختبار، والميزانية والجدول الزمني."
terms:
  - en: "Test Approach"
    ar: "نهج الاختبار"
    def: "The way testing is carried out for a specific project: test levels, test types, techniques, deliverables, entry and exit criteria, and more."
    defAr: "طريقة تنفيذ الاختبار لمشروع محدد: المستويات، والأنواع، والتقنيات، والمخرجات، ومعايير الدخول والخروج، وغيرها."
---
قبل أن يبدأ فريق **تطبيق التوصيل** باختبار إصدار جديد، يحتاج إلى إجابات واضحة عن أسئلة تبدو بسيطة: ماذا سنختبر، وما الذي لن نختبره؟ من سيختبر، وبأي أدوات وبيئات؟ متى نبدأ، ومتى نعتبر أننا انتهينا؟ وما المخاطر التي قد تُفسد كل ذلك؟ المكان الذي تُجمع فيه هذه الإجابات هو **خطة الاختبار (Test Plan)**.

يعرّفها السيليبس بأنها تصف **أهداف الاختبار (test objectives)** و**الموارد (resources)** و**العمليات (processes)** لمشروع اختبار. الأهداف تجيب عن «لماذا نختبر؟»، والموارد عن «بماذا ومَن؟»، والعمليات عن «كيف ومتى؟». وأهميتها أن الاختبار بلا خطة يتحول إلى جهد عشوائي: يُختبر ما يتذكره الفريق، ويُنسى ما هو أخطر، ولا يعرف أحد متى يتوقف.

### الغرض من خطة الاختبار — Purpose of a Test Plan

يذكر السيليبس أربعة أغراض لخطة الاختبار، ولكل منها سبب عملي:

**1. توثيق وسائل تحقيق أهداف الاختبار وجدولها الزمني.** الخطة تربط كل هدف بالطريقة التي سيتحقق بها وبالوقت المخصص له. مثلًا: هدف «التحقق من صحة رسوم التوصيل» يتحقق بتقنيتي EP وBVA على حدّ 20.00 دينارًا، في الأسبوع الأول من الـ sprint. بدون هذا التوثيق يبقى الهدف أمنية لا خطة.

**2. المساعدة في ضمان أن أنشطة الاختبار المنفذة ستحقق المعايير المحددة.** عندما تحدد الخطة مسبقًا معايير مثل «تغطية 100% لقيم BVA في قواعد الطلب» أو «لا defects حرجة مفتوحة»، يصبح لدى الفريق مرجع يقيس عليه عمله أثناء التنفيذ، فيكتشف مبكرًا إن كان ينحرف عنه.

**3. وسيلة تواصل مع أعضاء الفريق وأصحاب المصلحة الآخرين.** مالك المنتج يقرأ الخطة ليعرف ما الذي سيُختبر قبل الإطلاق، والمطوّرون يعرفون ما المتوقع منهم (مثل اختبارات الوحدات)، والإدارة ترى الميزانية والجدول. الخطة لغة مشتركة تمنع سوء الفهم، كأن يظن مالك المنتج أن الاختبار على أجهزة iOS القديمة مشمول وهو ليس كذلك.

**4. إثبات أن الاختبار سيلتزم بسياسة الاختبار واستراتيجيته الحاليتين، أو شرح سبب الانحراف عنهما.** **سياسة الاختبار (test policy)** تصف على مستوى المؤسسة لماذا تختبر وما أهدافها العامة، و**استراتيجية الاختبار (test strategy)** تصف الطريقة العامة للاختبار فيها. والخطة تطبّقهما على مشروع محدد. فإذا كانت الاستراتيجية تقول «كل إصدار يمر باختبار أداء»، وقرر الفريق تأجيله لأن الإصدار يغيّر نصوص الواجهة فقط، فعلى الخطة أن **تذكر هذا الانحراف وسببه** صراحةً، لا أن تتجاهله.

### التخطيط يوجّه التفكير — Planning Guides Thinking

قيمة **تخطيط الاختبار (test planning)** لا تكمن في الوثيقة الناتجة فقط، بل في عملية إعدادها. يقول السيليبس إن التخطيط **يوجّه تفكير المختبرين ويجبرهم على مواجهة التحديات المستقبلية** المتعلقة بالمخاطر والجداول والأشخاص والأدوات والتكاليف والجهد وغيرها. أمثلة من تطبيق التوصيل:

- **المخاطر:** ماذا لو كانت بيئة الاختبار الخاصة ببوابة الدفع (طرف ثالث) غير متاحة أسبوعًا كاملًا؟
- **الجداول:** هل يكفي 2 sprints لاختبار ميزة الكوبونات مع الانحدار الكامل قبل النشر في المتاجر؟
- **الأشخاص:** أحد المختبرَين في إجازة في الأسبوع الأخير؛ من يغطي مكانه؟
- **الأدوات:** هل نحتاج أداة لمحاكاة موقع السائق بدل خدمة الخرائط الحقيقية؟
- **التكاليف والجهد:** كم جهازًا حقيقيًا نحتاج لاختبار iOS وAndroid باللغتين العربية والإنجليزية؟

طرح هذه الأسئلة قبل البدء أرخص بكثير من اكتشافها في منتصف التنفيذ. لهذا يصف السيليبس **إعداد الخطة** بأنه طريقة مفيدة للتفكير في الجهد المطلوب لتحقيق أهداف الاختبار.

### المحتوى المعتاد — Typical Content

| Section | المحتوى |
| --- | --- |
| Context of testing | نطاق الاختبار، وأهداف الاختبار، وأساس الاختبار |
| Assumptions and constraints | افتراضات وقيود مشروع الاختبار |
| Stakeholders | الأدوار والمسؤوليات، وعلاقتهم بالاختبار، واحتياجات التوظيف والتدريب |
| Communication | أشكال التواصل وتكراره وقوالب التوثيق |
| Risk register | مخاطر المنتج ومخاطر المشروع |
| Test approach | مستويات الاختبار، وأنواعه، وتقنياته، ومخرجاته، ومعايير الدخول والخروج، واستقلالية الاختبار، والمقاييس التي ستُجمع، ومتطلبات بيانات وبيئة الاختبار، والانحرافات عن سياسة الاختبار واستراتيجيته |
| Budget and schedule | الميزانية والجدول الزمني |

لنفهم كل بند بمثال من خطة إصدار ميزة **الكوبونات** في تطبيق التوصيل:

- **سياق الاختبار (Context of testing):** يحدد **النطاق** (ما يُختبر وما لا يُختبر)، و**أهداف الاختبار**، و**أساس الاختبار (test basis)** أي المصادر التي تُشتق منها الاختبارات. النطاق هنا تطبيق الزبون وواجهات الـ API الخاصة بالكوبونات، ولوحة المطعم خارج النطاق، والأساس قصص المستخدم ومعايير قبولها.
- **الافتراضات والقيود (Assumptions and constraints):** الافتراض شيء نعدّه صحيحًا دون تأكد، مثل «بيئة sandbox لبوابة الدفع متاحة طوال الـ sprint». والقيد حدّ مفروض علينا، مثل «لا اختبار على بيئة الإنتاج» أو «موعد النشر في المتاجر ثابت». تدوينهما يوضح على ماذا بُنيت الخطة، فإذا سقط افتراض عرف الجميع أن الخطة تحتاج مراجعة.
- **أصحاب المصلحة (Stakeholders):** أدوارهم ومسؤولياتهم، ومدى صلتهم بالاختبار، واحتياجات التوظيف والتدريب. مالك المنتج يعتمد معايير القبول، والمطوّرون مسؤولون عن اختبارات الوحدات، والمختبران يحتاجان تدريبًا على أداة الأتمتة الجديدة.
- **التواصل (Communication):** أشكال التواصل وتكراره وقوالب التوثيق: الاجتماع اليومي، وتقرير تقدم أسبوعي لمالك المنتج، وقالب موحد لتقارير الـ defects.
- **سجل المخاطر (Risk register):** قائمة **مخاطر المنتج** (مثل خطأ في احتساب الخصم أو قبول كوبون منتهي الصلاحية) و**مخاطر المشروع** (مثل تأخر تسليم واجهة الـ API من المطوّرين)، مع مستوى كل خطر (القسم 5.2).
- **نهج الاختبار (Test approach):** أكبر أجزاء الخطة، ويصف كيف سيُنفذ الاختبار فعلًا (انظر الجدول التالي).
- **الميزانية والجدول الزمني (Budget and schedule):** كلفة الاختبار، ومتى يبدأ كل نشاط وينتهي، مرتبطًا بموعد الإصدار كل 2 sprints.

| Test approach element | Example (coupons release) |
| --- | --- |
| Test levels | Component, component integration, system, acceptance |
| Test types | Functional; performance of the coupon API; regression |
| Test techniques | EP for coupon type, BVA for expiry date and minimum order |
| Test deliverables | Test cases, defect reports, test completion report |
| Entry / exit criteria | Smoke tests pass / no open critical defects |
| Independence of testing | Testers in the team review developers' tests |
| Metrics to be collected | Test cases passed/failed, defects by severity |
| Test data / environment | Expired and valid coupons; staging with payment sandbox |
| Deviations | Performance test postponed, with the reason stated |

تفاصيل أكثر عن خطة الاختبار ومحتواها موجودة في معيار **ISO/IEC/IEEE 29119-3**. ولاحظ أن المحتوى «معتاد» وليس قالبًا إلزاميًا: حجم الخطة وشكلها يتبعان السياق، فقد تكون وثيقة مفصلة لمشروع كبير، أو صفحة واحدة لإصدار صغير.

### لا تخلط بين — Don't Confuse

| | Test policy | Test strategy | Test plan | Test report |
| --- | --- | --- | --- | --- |
| Level | Organization | Organization | Project / release | Project / release |
| Answers | Why we test | How we usually test | How we will test this project | What happened |
| When | Rarely changes | Rarely changes | Before and during testing | During and after testing |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A one-page test plan for a small release can still cover the essentials: scope (new loyalty points feature), out of scope (old checkout), risks (points miscalculation), approach (EP and BVA on point thresholds, automated regression on checkout), exit criteria (no open critical defects), schedule (5 days), and who to tell about blockers.</p><p class="gx-ar" lang="ar" dir="rtl">خطة اختبار من صفحة واحدة لإصدار صغير يمكن أن تغطي الأساسيات: النطاق (ميزة نقاط الولاء الجديدة)، وخارج النطاق (عملية الدفع القديمة)، والمخاطر (خطأ في حساب النقاط)، والنهج (EP وBVA على حدود النقاط، وانحدار مؤتمت على الدفع)، ومعايير الخروج (لا defects حرجة مفتوحة)، والجدول (5 أيام)، ومن يجب إبلاغه عند العوائق.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: questions often list items and ask which belongs in a test plan. Test levels, techniques, entry/exit criteria, risk register, budget and schedule all do. Actual test results do not; they belong in test reports.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: الأسئلة كثيرًا ما تذكر بنودًا وتسأل أيها ينتمي لخطة الاختبار. مستويات الاختبار، والتقنيات، ومعايير الدخول/الخروج، وسجل المخاطر، والميزانية والجدول كلها تنتمي. أما نتائج الاختبار الفعلية فلا؛ مكانها تقارير الاختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Seeing the test plan as a document written once and forgotten. Planning is about thinking ahead, and the plan is a communication tool that is updated as things change.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار خطة الاختبار وثيقة تُكتب مرة وتُنسى. التخطيط هو تفكير مسبق، والخطة أداة تواصل تُحدَّث كلما تغيّرت الظروف.</p></aside>

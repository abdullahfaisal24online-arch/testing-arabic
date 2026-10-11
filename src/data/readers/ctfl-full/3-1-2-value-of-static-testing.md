---
order: 2
slug: "3-1-2"
chapter: 3
group: "3.1"
section: "3.1.2"
title: "Value of Static Testing"
titleAr: "قيمة الاختبار الساكن"
objectives: "FL-3.1.2 · K2"
minutes: 10
lo:
  FL-3.1.2: "Explain the value of static testing."
loAr:
  FL-3.1.2: "تشرح قيمة الاختبار الساكن."
takeaways:
  - "Static testing finds defects in the earliest phases of the SDLC, applying the early testing principle."
  - "It can find defects that dynamic testing cannot, such as unreachable code or defects in non-executable work products."
  - "It builds confidence in work products, checks that requirements describe real needs and creates shared understanding."
  - "Reviews cost effort, but overall project costs are usually lower because fewer defects need fixing later."
  - "Static analysis finds some code defects more efficiently than dynamic testing, often with less effort."
  - "Because it improves communication and shared understanding, a wide variety of stakeholders should be involved in static testing."
takeawaysAr:
  - "الاختبار الساكن يكتشف الـ defects في أبكر مراحل دورة التطوير، تطبيقًا لمبدأ الاختبار المبكر."
  - "يستطيع اكتشاف defects لا يكتشفها الاختبار الديناميكي، مثل الشيفرة التي لا يمكن الوصول إليها، أو الـ defects في مخرجات غير قابلة للتشغيل."
  - "يبني الثقة في مخرجات العمل، ويتحقق من أن المتطلبات تصف احتياجات حقيقية، ويخلق فهمًا مشتركًا."
  - "المراجعات تكلّف جهدًا، لكن تكاليف المشروع الإجمالية عادة أقل لأن الـ defects التي تحتاج إصلاحًا لاحقًا أقل."
  - "التحليل الساكن يكتشف بعض الـ defects في الشيفرة بكفاءة أعلى من الاختبار الديناميكي، وغالبًا بجهد أقل."
  - "لأنه يحسّن التواصل والفهم المشترك، يُنصح بإشراك مجموعة متنوعة من أصحاب المصلحة في الاختبار الساكن."
terms:
  - en: "Unreachable Code"
    ar: "الشيفرة غير القابلة للوصول"
    def: "Code that can never be executed, whatever the inputs."
    defAr: "شيفرة لا يمكن تنفيذها أبدًا، مهما كانت المدخلات."
---
لماذا يقضي فريق تطبيق التوصيل ساعة في قراءة قصص المستخدم ومراجعة الشيفرة، بدل أن يشغّل التطبيق ويختبره مباشرة؟ لأن للاختبار الساكن **قيمة لا يقدّمها الاختبار الديناميكي وحده**: يجد الـ defects قبل أن يوجد شيء قابل للتشغيل، ويجد أنواعًا من الـ defects لا يمكن لأي تشغيل أن يكشفها، ويجعل الفريق وأصحاب المصلحة يفهمون الشيء نفسه بالطريقة نفسها. يعرض المنهج هذه القيمة في عدة أفكار، نشرحها واحدة واحدة.

### اكتشاف مبكر — Early Detection

يستطيع الاختبار الساكن اكتشاف الـ defects في **أبكر مراحل دورة حياة تطوير البرمجيات (SDLC)**، لأنه لا ينتظر وجود شيفرة قابلة للتشغيل؛ يكفي أن توجد قصة مستخدم أو تصميم. وهذا تطبيق مباشر لمبدأ **الاختبار المبكر يوفّر الوقت والمال (Early testing saves time and money)** من القسم 1.3.

لماذا يوفّر؟ لأن الـ defect في المتطلب ينتقل إلى التصميم، ثم إلى الشيفرة، ثم إلى الاختبارات، وقد يصل إلى الزبون. كلما تأخر اكتشافه زاد عدد المخرجات التي يجب تعديلها. في تطبيق التوصيل، اكتشاف أن القصة لا تحدد «هل رسوم التوصيل 1.50 تُحسب قبل الخصم أم بعده؟» في جلسة refinement يكلّف سؤالًا لمالك المنتج. أما اكتشافه بعد الإصدار فيعني فواتير خاطئة، وشكاوى، وإصلاحًا طارئًا، وإصدارًا جديدًا للمتاجر.

### defects لا يراها الاختبار الديناميكي — Defects Dynamic Testing Cannot Detect

الاختبار الديناميكي يكشف الـ defect فقط إذا **شُغّل** الجزء الذي فيه الـ defect وأنتج عطلًا ظاهرًا. لذلك هناك defects لا يصل إليها مهما كثرت الاختبارات، ويذكر المنهج منها:

- **الشيفرة غير القابلة للوصول (Unreachable Code)**: شيفرة لا يمكن تنفيذها أبدًا، مثل فرع `if (status == "Delivered" && status == "Cancelled")` الذي لا يتحقق شرطه. لا يمكن تشغيلها، فلا يمكن أن تفشل أمام الاختبار؛ لكنها تُربك من يصون الشيفرة، وقد تدل على منطق مكتوب خطأً.
- **أنماط التصميم غير المطبّقة كما هو مطلوب (design patterns not implemented as desired)**: مثلًا، اتفق الفريق على أن تمر كل اتصالات بوابة الدفع عبر طبقة Adapter واحدة، لكن مطوّرًا استدعى البوابة مباشرة من شاشة الدفع. التطبيق يعمل والاختبارات تنجح، والمخالفة لا تظهر إلا لمن يقرأ الشيفرة.
- **الـ defects في مخرجات غير قابلة للتشغيل**: وثيقة المتطلبات، وخطة الاختبار، والعقد مع المطعم. هذه لا «تعمل» أصلًا، فالطريقة الوحيدة لاختبارها هي قراءتها.

### الجودة والثقة — Quality and Confidence

يتيح الاختبار الساكن **تقييم جودة** مخرجات العمل و**بناء الثقة** فيها. عندما تمر قصة «إلغاء الطلب» بمراجعة جيدة، يبدأ المطوّرون العمل وهم واثقون أنها واضحة ومكتملة.

وبـ**التحقق من المتطلبات الموثّقة** يتأكد أصحاب المصلحة أن هذه المتطلبات **تصف احتياجاتهم الفعلية**. فقد تكون الوثيقة متسقة ومكتوبة بإتقان، لكنها تصف شيئًا لا يريده أحد؛ مالك المطعم مثلًا قد يكتشف عند المراجعة أن المتطلب لا يسمح له برفض طلب حين تنفد مكوّناته.

### فهم مشترك وتواصل أفضل — Shared Understanding and Communication

لأن الاختبار الساكن يجري **مبكرًا**، فهو يخلق **فهمًا مشتركًا** بين أصحاب المصلحة المشاركين قبل أن يبني كل طرف تصوّره الخاص. ويتحسّن **التواصل** بينهم أيضًا، لأنهم يجلسون حول المُخرَج نفسه ويناقشونه. لهذا **يُنصح بإشراك مجموعة واسعة ومتنوعة من أصحاب المصلحة**: في مراجعة قصة تتبّع الطلب، ينظر سائق التوصيل إلى ما لا يراه المطوّر، ويرى مالك المنتج ما لا يراه المختبر.

### التكلفة — Cost

تنفيذ المراجعات **قد يكون مكلفًا**: ساعات من وقت أشخاص كان يمكن أن يكتبوا شيفرة. لكن المنهج يقارن بالصورة الكاملة: **تكاليف المشروع الإجمالية عادة أقل بكثير** مما لو لم تُجرَ المراجعات، لأن **الوقت والجهد المطلوبين لإصلاح الـ defects لاحقًا في المشروع يقلّان**. المراجعة استثمار صغير الآن يمنع إعادة عمل كبيرة لاحقًا. في تطبيق التوصيل، ساعة مراجعة يشارك فيها أربعة أشخاص تكلّف أربع ساعات عمل، بينما defect واحد في حساب رسوم التوصيل يُكتشف بعد النشر قد يكلّف أيامًا من التحقيق والإصلاح وإعادة الاختبار وانتظار موافقة المتاجر.

### التحليل الساكن للشيفرة — Static Analysis of Code

**بعض الـ defects في الشيفرة** يمكن اكتشافها بالتحليل الساكن **بكفاءة أعلى** من الاختبار الديناميكي، والنتيجة عادة أمران: **defects أقل في الشيفرة**، و**جهد تطوير إجمالي أقل**. مثلًا، متغير قد يُستخدم دون قيمة في مسار نادر لحساب الخصم: قد يحتاج الاختبار الديناميكي إلى مجموعة مدخلات محددة جدًا ليصل إليه، بينما تشير إليه أداة التحليل الساكن في خط CI خلال ثوانٍ، مع رقم السطر.

### لا تخلط بين — Don't Confuse

| Statement | Correct? |
| --- | --- |
| Static testing finds defects earlier and finds some defects dynamic testing cannot | Yes |
| Reviews cost effort, but usually lower the overall project cost | Yes |
| Static testing replaces dynamic testing | No, they complement each other |
| Reviews are only worth it for code | No, any readable work product can be reviewed |

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Static testing is not a cheaper copy of dynamic testing. It finds different defects, earlier, and in work products that cannot be executed at all.</p><p class="gx-ar" lang="ar" dir="rtl">الاختبار الساكن ليس نسخة أرخص من الاختبار الديناميكي. هو يكتشف defects مختلفة، في وقت أبكر، وفي مخرجات لا يمكن تشغيلها أصلًا.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A ten-minute review of a delivery-app story finds that "customers can cancel orders" does not say until when. Without the review, developers would allow cancellation even while the driver is on the way, testers would design tests on the rule "before Out for delivery", and the conflict would surface in acceptance testing, after both had done their work.</p><p class="gx-ar" lang="ar" dir="rtl">مراجعة مدتها عشر دقائق لقصة في تطبيق التوصيل تكشف أن عبارة «يستطيع الزبون إلغاء الطلب» لا تحدد حتى متى. بدون المراجعة كان المطوّرون سيسمحون بالإلغاء حتى والسائق في الطريق، والمختبرون سيصممون اختباراتهم على قاعدة «قبل حالة Out for delivery»، وكان التعارض سيظهر في اختبار القبول، بعد أن أنهى الطرفان عملهما.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: a strong answer about the value of static testing mentions earliness, defects that dynamic testing cannot find, shared understanding, or lower overall cost. "It replaces dynamic testing" is never correct.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: الإجابة القوية عن قيمة الاختبار الساكن تذكر التبكير، أو الـ defects التي لا يجدها الاختبار الديناميكي، أو الفهم المشترك، أو التكلفة الإجمالية الأقل. أما «يغني عن الاختبار الديناميكي» فليست صحيحة أبدًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Judging reviews by their own cost only. The syllabus compares them with total project cost: reviews cost effort now but reduce the cost of fixing defects later.</p><p class="gx-ar" lang="ar" dir="rtl">الحكم على المراجعات بتكلفتها هي فقط. المنهج يقارنها بتكلفة المشروع الإجمالية: المراجعات تكلّف جهدًا الآن، لكنها تقلل تكلفة إصلاح الـ defects لاحقًا.</p></aside>

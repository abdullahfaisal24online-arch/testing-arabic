---
order: 2
slug: "3-1-2"
chapter: 3
group: "3.1"
section: "3.1.2"
title: "Value of Static Testing"
titleAr: "قيمة الاختبار الساكن"
objectives: "FL-3.1.2 · K2"
minutes: 5
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
takeawaysAr:
  - "الاختبار الساكن يكتشف العيوب في أبكر مراحل دورة التطوير، تطبيقًا لمبدأ الاختبار المبكر."
  - "يستطيع اكتشاف عيوب لا يكتشفها الاختبار الديناميكي، مثل الشيفرة التي لا يمكن الوصول إليها، أو العيوب في مخرجات غير قابلة للتشغيل."
  - "يبني الثقة في مخرجات العمل، ويتحقق من أن المتطلبات تصف احتياجات حقيقية، ويخلق فهمًا مشتركًا."
  - "المراجعات تكلّف جهدًا، لكن تكاليف المشروع الإجمالية عادة أقل لأن العيوب التي تحتاج إصلاحًا لاحقًا أقل."
  - "التحليل الساكن يكتشف بعض عيوب الشيفرة بكفاءة أعلى من الاختبار الديناميكي، وغالبًا بجهد أقل."
terms:
  - en: "Unreachable Code"
    ar: "الشيفرة غير القابلة للوصول"
    def: "Code that can never be executed, whatever the inputs."
    defAr: "شيفرة لا يمكن تنفيذها أبدًا، مهما كانت المدخلات."
---
لماذا نستثمر وقتًا في قراءة الوثائق والشيفرة بدل تشغيل النظام مباشرة؟ لأن للاختبار الساكن قيمة لا يقدمها الاختبار الديناميكي وحده.

### اكتشاف مبكر — Early Detection

الاختبار الساكن يستطيع اكتشاف العيوب في **أبكر مراحل دورة التطوير**، محققًا مبدأ **الاختبار المبكر يوفّر الوقت والمال**.

### عيوب لا يراها الاختبار الديناميكي — Defects Dynamic Testing Misses

يستطيع الاختبار الساكن تحديد عيوب **لا يمكن اكتشافها بالاختبار الديناميكي**، مثل:

- **الشيفرة غير القابلة للوصول (Unreachable Code)**: لا يمكن تشغيلها أصلًا، فلا يمكن أن تفشل.
- **أنماط التصميم غير المطبّقة كما ينبغي.**
- **العيوب في مخرجات غير قابلة للتشغيل**، مثل وثيقة المتطلبات.

### ثقة وفهم مشترك — Confidence and Shared Understanding

- يتيح **تقييم جودة** مخرجات العمل و**بناء الثقة** بها.
- بالتحقق من المتطلبات الموثقة، يستطيع أصحاب المصلحة التأكد من أنها **تصف احتياجاتهم الفعلية**.
- لأن الاختبار الساكن يمكن أن يُجرى مبكرًا، يمكن **خلق فهم مشترك** بين أصحاب المصلحة.
- ويتحسّن التواصل بينهم أيضًا. لذلك يُنصح بإشراك مجموعة متنوعة من أصحاب المصلحة.

### التكلفة — Cost

تنفيذ المراجعات قد يكون مكلفًا، لكن **تكاليف المشروع الإجمالية غالبًا أقل بكثير** مما لو لم تُجرَ، لأن الوقت والجهد المطلوبين لإصلاح العيوب لاحقًا يقلّان.

### التحليل الساكن للشيفرة — Static Analysis of Code

بعض عيوب الشيفرة يمكن اكتشافها بالتحليل الساكن **بكفاءة أعلى** من الاختبار الديناميكي، وغالبًا ينتج ذلك **عددًا أقل من العيوب في الشيفرة** و**جهد تطوير إجمالي أقل**.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Static testing is not a cheaper copy of dynamic testing. It finds different defects, earlier, and in work products that cannot be executed at all.</p><p class="gx-ar" lang="ar" dir="rtl">الاختبار الساكن ليس نسخة أرخص من الاختبار الديناميكي. هو يكتشف عيوبًا مختلفة، في وقت أبكر، وفي مخرجات لا يمكن تشغيلها أصلًا.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A ten-minute review of a story finds that "users can cancel orders" does not say until when. Without the review, developers would allow cancellation after shipping, testers would design tests on a different assumption, and the conflict would surface in UAT.</p><p class="gx-ar" lang="ar" dir="rtl">مراجعة لقصة مستخدم مدتها عشر دقائق تكشف أن عبارة «يستطيع المستخدم إلغاء الطلب» لا تحدد حتى متى. بدون المراجعة كان المطوّرون سيسمحون بالإلغاء بعد الشحن، والمختبرون سيصممون اختباراتهم على افتراض مختلف، وكان التعارض سيظهر في اختبار القبول.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: a strong answer about the value of static testing mentions earliness, defects that dynamic testing cannot find, shared understanding, or lower overall cost. "It replaces dynamic testing" is never correct.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: الإجابة القوية عن قيمة الاختبار الساكن تذكر التبكير، أو العيوب التي لا يجدها الاختبار الديناميكي، أو الفهم المشترك، أو التكلفة الإجمالية الأقل. أما «يغني عن الاختبار الديناميكي» فليست صحيحة أبدًا.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Judging reviews by their own cost only. The syllabus compares them with total project cost: reviews cost effort now but reduce the cost of fixing defects later.</p><p class="gx-ar" lang="ar" dir="rtl">الحكم على المراجعات بتكلفتها هي فقط. المنهج يقارنها بتكلفة المشروع الإجمالية: المراجعات تكلّف جهدًا الآن، لكنها تقلل تكلفة إصلاح العيوب لاحقًا.</p></aside>

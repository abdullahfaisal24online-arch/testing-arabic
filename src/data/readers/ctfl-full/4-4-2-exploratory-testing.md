---
order: 10
slug: "4-4-2"
chapter: 4
group: "4.4"
section: "4.4.2"
title: "Exploratory Testing"
titleAr: "الاختبار الاستكشافي"
objectives: "FL-4.4.2 · K2"
minutes: 14
lo:
  FL-4.4.2: "Explain exploratory testing."
loAr:
  FL-4.4.2: "تشرح الاختبار الاستكشافي."
labs: ["LAB-4.4.2"]
takeaways:
  - "In exploratory testing, tests are designed, executed and evaluated at the same time while the tester learns about the test object."
  - "It is used to learn more about the test object, explore it in depth with focused tests, and create tests for untested areas."
  - "Session-based exploratory testing uses a time-box, a test charter with objectives, and a debriefing afterwards."
  - "It is useful with few or inadequate specifications, under significant time pressure, or to complement more formal techniques."
  - "It is more effective with experienced testers who have domain knowledge, analytical skills, curiosity and creativity, and it can use other techniques such as EP."
  - "In session-based testing, the charter's test objectives act as high-level test conditions; coverage items are identified and exercised during the session and can be recorded on test session sheets."
takeawaysAr:
  - "في الاختبار الاستكشافي تُصمَّم الاختبارات وتُنفَّذ وتُقيَّم في الوقت نفسه، بينما يتعلّم المختبر عن موضوع الاختبار."
  - "يُستخدم لمعرفة المزيد عن موضوع الاختبار، واستكشافه بعمق باختبارات مركّزة، وإنشاء اختبارات لمناطق لم تُختبر."
  - "الاختبار الاستكشافي المبني على الجلسات يستخدم وقتًا محددًا، وميثاق اختبار بأهداف، واجتماع مراجعة بعده."
  - "مفيد عندما تكون المواصفات قليلة أو غير كافية، وتحت ضغط وقت كبير، أو لتكملة التقنيات الأكثر رسمية."
  - "أكثر فعالية مع مختبرين ذوي خبرة ومعرفة بمجال العمل ومهارات تحليلية وفضول وإبداع، ويمكن أن يستخدم تقنيات أخرى مثل EP."
  - "في الاختبار المبني على الجلسات، أهداف الميثاق تُعامَل كشروط اختبار عالية المستوى؛ وعناصر التغطية تُحدَّد وتُنفَّذ أثناء الجلسة، ويمكن تسجيلها في أوراق الجلسة."
terms:
  - en: "Exploratory Testing"
    ar: "الاختبار الاستكشافي"
    def: "An approach in which tests are designed, executed and evaluated simultaneously while the tester learns about the test object."
    defAr: "نهج تُصمَّم فيه الاختبارات وتُنفَّذ وتُقيَّم في الوقت نفسه، بينما يتعلّم المختبر عن موضوع الاختبار."
    match: ["Exploratory Testing", "exploratory testing"]
  - en: "Session-based Testing"
    ar: "الاختبار المبني على الجلسات"
    def: "Exploratory testing done in time-boxed sessions guided by a test charter, followed by a debriefing."
    defAr: "اختبار استكشافي يُنفَّذ في جلسات محددة الوقت يوجّهها ميثاق اختبار، يعقبها اجتماع مراجعة."
---
في التقنيات الرسمية يُصمَّم الاختبار أولًا ثم يُنفَّذ لاحقًا، وقد يفصل بين الخطوتين أيام. أما في **الاختبار الاستكشافي (Exploratory Testing)** فتُصمَّم الاختبارات وتُنفَّذ وتُقيَّم **في الوقت نفسه**، بينما **يتعلّم المختبر** عن موضوع الاختبار. كل نتيجة يراها المختبر تغيّر فكرته عن الاختبار التالي: يجرّب شيئًا، يلاحظ سلوكًا غريبًا، فيصمّم فورًا اختبارًا أعمق في الاتجاه نفسه.

### الفكرة — The Idea

تخيّل مختبرًا في تطبيق التوصيل يستكشف شاشة الكوبونات. يُدخل كوبونًا صالحًا فيرى الخصم، ثم يلاحظ أن الخصم يظهر قبل تحديث رسوم التوصيل بثانية. **التصميم** (طلب بقيمة 22 دينارًا مع كوبون 5 دنانير: هل يبقى التوصيل مجانيًا، لأن الحد يُفحص قبل الخصم؟) و**التنفيذ** (يجرّب ذلك فورًا) و**التقييم** (هل الرسوم صحيحة؟) حدثت كلها في دقيقة واحدة، ودون حالة اختبار مكتوبة مسبقًا.

يذكر المنهج ثلاثة استخدامات للاختبار الاستكشافي:

- **التعلّم أكثر عن موضوع الاختبار:** مثلًا عند استلام ميزة جديدة لم يرها الفريق من قبل، كشاشة تتبّع السائق على الخريطة.
- **استكشافه بعمق باختبارات مركّزة:** حين تظهر منطقة مشبوهة، يركّز المختبر عليها بدل الانتقال إلى غيرها.
- **إنشاء اختبارات لمناطق لم تُختبر:** ما يكتشفه المختبر قد يتحول لاحقًا إلى حالات اختبار رسمية أو مؤتمتة.

### الاختبار المبني على الجلسات — Session-based Exploratory Testing

قد يبدو الاستكشاف فوضويًا، لذلك يُنفَّذ أحيانًا باستخدام **الاختبار المبني على الجلسات (Session-based Testing)** لإعطائه **تنظيمًا**:

<figure class="gx-figure" aria-label="A session-based exploratory testing session."><div class="gx-flow-row"><span class="gx-flow-node">Test charter<small>objectives</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Time-boxed session<small>explore, take notes</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Debriefing<small>discuss results</small></span></div><figcaption>A session-based exploratory testing session.</figcaption></figure>

- **وقت محدد (Time-box):** تُنفَّذ الجلسة خلال مدة ثابتة، مثل 60 أو 90 دقيقة، فلا يضيع المختبر في الاستكشاف بلا نهاية، ويمكن تخطيط عدد الجلسات وتقدير الجهد.
- **ميثاق اختبار (Test Charter):** يحتوي **أهداف الاختبار** التي توجّه الجلسة، أي «ماذا نستكشف، وبأي وسيلة، ولاكتشاف ماذا».
- **اجتماع مراجعة (Debriefing):** يعقب الجلسة عادةً **نقاش بين المختبر وأصحاب المصلحة المهتمين بنتائجها**، مثل مالك المنتج أو المطوّر، حول ما وُجد، وما لم يُغطَّ، وما يستحق جلسة جديدة.
- **أهداف الاختبار كشروط اختبار:** في هذا النهج **قد تُعامَل أهداف الاختبار على أنها شروط اختبار عالية المستوى (high-level test conditions)**.
- **عناصر التغطية:** **تُحدَّد عناصر التغطية وتُنفَّذ أثناء الجلسة نفسها**، لا قبلها كما في التقنيات الرسمية.
- **أوراق الجلسة (Test Session Sheets):** قد يستخدمها المختبر **لتوثيق الخطوات المتبعة والاكتشافات**، فتصبح الجلسة قابلة للمراجعة والتتبّع.

**مثال على ميثاق وورقة جلسة**

| Field | Example |
| --- | --- |
| Charter | Explore order cancellation across all order states, using the customer app and restaurant dashboard, to discover state and refund problems |
| Time-box | 60 minutes |
| Coverage items found | Cancel in Placed, Accepted, Preparing; try cancel in Out for delivery; cancel while offline |
| Findings | Cancel during "Preparing" leaves the order visible on the dashboard |
| Questions | Should a card refund be shown immediately? |
| Next charter | Explore refunds for wallet payments |

لاحظ أن الهدف في الميثاق («مشكلات الحالات والاسترداد») هو شرط الاختبار عالي المستوى، وأن الحالات المحددة التي جُرّبت هي عناصر التغطية التي ظهرت أثناء الجلسة.

ولماذا هذا التنظيم مهم؟ لأنه يجيب عن أكبر اعتراض على الاستكشاف: «كيف نعرف ماذا اختبرتم؟». الميثاق يحدد النطاق، والوقت المحدد يجعل الجهد قابلًا للتخطيط، وورقة الجلسة تترك أثرًا مكتوبًا، واجتماع المراجعة ينقل المعرفة إلى بقية الفريق ويحوّل الاكتشافات إلى قرارات: إصلاح defect، أو سؤال لمالك المنتج، أو ميثاق جديد للجلسة القادمة.

### متى يكون مفيدًا؟ — When It Is Useful

- **عندما تكون المواصفات قليلة أو غير كافية:** لا يمكن اشتقاق حالات رسمية من وثيقة غير موجودة، لكن يمكن التعلّم من النظام نفسه.
- **عند ضغط وقت كبير على الاختبار:** مثلًا قبل إصدار عاجل إلى المتاجر، حين لا يوجد وقت لكتابة حالات اختبار مفصّلة.
- **لتكملة تقنيات الاختبار الأخرى الأكثر رسمية:** حتى مع وجود مواصفات جيدة، يكتشف الاستكشاف defects لم يتوقعها أحد عند كتابة الحالات.

### متى يكون أكثر فعالية؟ — What Makes It Effective

يكون الاختبار الاستكشافي أكثر فعالية إذا كان المختبر **ذا خبرة**، ولديه **معرفة بمجال العمل (domain knowledge)**، ويتمتع بدرجة عالية من **المهارات الأساسية** مثل **المهارات التحليلية والفضول والإبداع** (القسم 1.5.1). السبب أن جودة الاختبار هنا تعتمد على الأسئلة التي يطرحها المختبر لحظة بلحظة: من يعرف كيف تعمل المطاعم والسائقون سيجرّب سيناريوهات واقعية لا تخطر على بال غيره.

### دمج تقنيات أخرى — Using Other Techniques

الاستكشاف لا يعني التخلي عن التقنيات الرسمية؛ **يمكن أن يدمج تقنيات اختبار أخرى**، مثل **تقسيم التكافؤ (EP)**. أثناء استكشاف حقل عدد الوجبات، قد يقسم المختبر القيم سريعًا إلى أقسام (أقل من 1، من 1 إلى 20، أكثر من 20) ويجرّب قيمة من كل قسم، ثم يضيف حدودها، كل ذلك داخل الجلسة نفسها. وبالطريقة نفسها قد يستعين بقائمة هجمات من تخمين الأخطاء، أو يرسم مخطط حالات سريعًا لحالات الطلب. التقنية الرسمية هنا أداة في يد المستكشف، لا خطة مكتوبة مسبقًا.

<section class="gx-lab" data-lab="LAB-4.4.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Run One 30-Minute Exploratory Session</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · نفّذ جلسة استكشافية واحدة مدتها 30 دقيقة</span></span><span class="gx-lab-meta">LAB-4.4.2 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> experience a structured, session-based exploratory test.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تجربة اختبار استكشافي منظّم مبني على الجلسات.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Write a one-line charter, e.g. "Explore the coupon field with unusual inputs to discover validation and pricing problems."</span><span class="gx-ar" lang="ar" dir="rtl">اكتب ميثاقًا من سطر واحد، مثلًا: «استكشف حقل الكوبون بمدخلات غير معتادة لاكتشاف مشكلات التحقق والتسعير».</span></li><li><span class="gx-en" lang="en" dir="ltr">Set a 30-minute timer and explore. Note every test idea you try and anything surprising.</span><span class="gx-ar" lang="ar" dir="rtl">اضبط مؤقتًا لـ 30 دقيقة واستكشف. سجّل كل فكرة اختبار تجرّبها وكل شيء مفاجئ.</span></li><li><span class="gx-en" lang="en" dir="ltr">Use at least one formal technique during the session, such as EP on the coupon length.</span><span class="gx-ar" lang="ar" dir="rtl">استخدم تقنية رسمية واحدة على الأقل أثناء الجلسة، مثل EP على طول الكوبون.</span></li><li><span class="gx-en" lang="en" dir="ltr">Debrief for 10 minutes with a developer or product owner: findings, questions, areas not covered.</span><span class="gx-ar" lang="ar" dir="rtl">اعقد اجتماع مراجعة لمدة 10 دقائق مع مطوّر أو مالك المنتج: الاكتشافات، والأسئلة، والمناطق التي لم تُغطَّ.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You have notes that someone else can follow, at least one finding or question, and a short list of areas for the next charter. The session stayed within its charter.</span><span class="gx-ar" lang="ar" dir="rtl">لديك ملاحظات يستطيع شخص آخر متابعتها، واكتشاف أو سؤال واحد على الأقل، وقائمة قصيرة بمناطق للميثاق القادم. والجلسة بقيت ضمن ميثاقها.</span></p></details></div></section>

### لا تخلط بين — Don't Confuse

| | Exploratory testing | Scripted (formal) testing |
| --- | --- | --- |
| Test design | During execution, while learning | Before execution |
| Guided by | Charter and test objectives | Detailed test cases |
| Coverage items | Identified during the session | Defined in advance |
| Best when | Specs are poor, time is short, or to complement | Specs are good and repeatability matters |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Key phrase: "simultaneously designed, executed and evaluated while learning". Session-based = time-box + charter + debriefing.</p><p class="gx-ar" lang="ar" dir="rtl">العبارة المفتاحية: «تُصمَّم وتُنفَّذ وتُقيَّم في الوقت نفسه أثناء التعلّم». المبني على الجلسات = وقت محدد + ميثاق + اجتماع مراجعة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking exploratory testing means "no documentation, no structure". Charters, time-boxes, session notes and debriefings give it structure and traceability.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار الاستكشافي يعني «بلا توثيق ولا تنظيم». المواثيق والأوقات المحددة وملاحظات الجلسة واجتماعات المراجعة تمنحه تنظيمًا وقابلية تتبّع.</p></aside>

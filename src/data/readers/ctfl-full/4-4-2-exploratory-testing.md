---
order: 10
slug: "4-4-2"
chapter: 4
group: "4.4"
section: "4.4.2"
title: "Exploratory Testing"
titleAr: "الاختبار الاستكشافي"
objectives: "FL-4.4.2 · K2"
minutes: 7
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
takeawaysAr:
  - "في الاختبار الاستكشافي تُصمَّم الاختبارات وتُنفَّذ وتُقيَّم في الوقت نفسه، بينما يتعلّم المختبر عن موضوع الاختبار."
  - "يُستخدم لمعرفة المزيد عن موضوع الاختبار، واستكشافه بعمق باختبارات مركّزة، وإنشاء اختبارات لمناطق لم تُختبر."
  - "الاختبار الاستكشافي المبني على الجلسات يستخدم وقتًا محددًا، وميثاق اختبار بأهداف، واجتماع مراجعة بعده."
  - "مفيد عندما تكون المواصفات قليلة أو غير كافية، وتحت ضغط وقت كبير، أو لتكملة التقنيات الأكثر رسمية."
  - "أكثر فعالية مع مختبرين ذوي خبرة ومعرفة بمجال العمل ومهارات تحليلية وفضول وإبداع، ويمكن أن يستخدم تقنيات أخرى مثل EP."
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
في **الاختبار الاستكشافي (Exploratory Testing)** تُصمَّم الاختبارات وتُنفَّذ وتُقيَّم **في الوقت نفسه**، بينما **يتعلّم المختبر** عن موضوع الاختبار.

يُستخدم الاختبار الاستكشافي لـ:

- **التعلّم** أكثر عن موضوع الاختبار.
- **استكشافه بعمق** باختبارات مركّزة.
- **إنشاء اختبارات** لمناطق لم تُختبر بعد.

### الاختبار المبني على الجلسات — Session-based Exploratory Testing

أحيانًا يُنفَّذ الاختبار الاستكشافي بشكل **مبني على الجلسات (Session-based)**، لتنظيم النشاط:

<figure class="gx-figure" aria-label="A session-based exploratory testing session."><div class="gx-flow-row"><span class="gx-flow-node">Test charter<small>objectives</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Time-boxed session<small>explore, take notes</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Debriefing<small>discuss results</small></span></div><figcaption>A session-based exploratory testing session.</figcaption></figure>

- يعمل المختبر خلال **وقت محدد (Time-box)**.
- يستخدم **ميثاق اختبار (Test Charter)** يحتوي أهداف الاختبار لتوجيهه.
- بعد الجلسة يُعقد عادة **اجتماع مراجعة (Debriefing)** يناقش فيه المختبر وأصحاب المصلحة المهتمون نتائج الجلسة.
- قد تُستخدم **أوراق الجلسة (Session Sheets)** لتوثيق الخطوات والاكتشافات.

### متى يكون مفيدًا؟ — When It Is Useful

- عندما تكون **المواصفات قليلة أو غير كافية**.
- عند **ضغط وقت كبير** على الاختبار.
- **لتكملة** تقنيات الاختبار الأخرى الأكثر رسمية.

### متى يكون أكثر فعالية؟ — What Makes It Effective

يكون أكثر فعالية إذا كان المختبر **ذا خبرة**، ولديه **معرفة بمجال العمل**، ودرجة عالية من المهارات الأساسية مثل **المهارات التحليلية والفضول والإبداع** (القسم 1.5.1).

ويمكن أن يدمج الاختبار الاستكشافي **تقنيات اختبار أخرى**، مثل تقسيم التكافؤ.

<section class="gx-lab" data-lab="LAB-4.4.2"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Run One 30-Minute Exploratory Session</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · نفّذ جلسة استكشافية واحدة مدتها 30 دقيقة</span></span><span class="gx-lab-meta">LAB-4.4.2 · Practice</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> experience a structured, session-based exploratory test.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> تجربة اختبار استكشافي منظّم مبني على الجلسات.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Write a one-line charter, e.g. "Explore the coupon field with unusual inputs to discover validation and pricing problems."</span><span class="gx-ar" lang="ar" dir="rtl">اكتب ميثاقًا من سطر واحد، مثلًا: «استكشف حقل الكوبون بمدخلات غير معتادة لاكتشاف مشكلات التحقق والتسعير».</span></li><li><span class="gx-en" lang="en" dir="ltr">Set a 30-minute timer and explore. Note every test idea you try and anything surprising.</span><span class="gx-ar" lang="ar" dir="rtl">اضبط مؤقتًا لـ 30 دقيقة واستكشف. سجّل كل فكرة اختبار تجرّبها وكل شيء مفاجئ.</span></li><li><span class="gx-en" lang="en" dir="ltr">Use at least one formal technique during the session, such as EP on the coupon length.</span><span class="gx-ar" lang="ar" dir="rtl">استخدم تقنية رسمية واحدة على الأقل أثناء الجلسة، مثل EP على طول الكوبون.</span></li><li><span class="gx-en" lang="en" dir="ltr">Debrief for 10 minutes with a developer or product owner: findings, questions, areas not covered.</span><span class="gx-ar" lang="ar" dir="rtl">اعقد اجتماع مراجعة لمدة 10 دقائق مع مطوّر أو مالك المنتج: الاكتشافات، والأسئلة، والمناطق التي لم تُغطَّ.</span></li></ol><details class="gx-lab-answer"><summary>What good looks like · <span class="gx-ar-inline" lang="ar" dir="rtl">كيف يبدو الحل الجيد</span></summary><p><span class="gx-en" lang="en" dir="ltr">You have notes that someone else can follow, at least one finding or question, and a short list of areas for the next charter. The session stayed within its charter.</span><span class="gx-ar" lang="ar" dir="rtl">لديك ملاحظات يستطيع شخص آخر متابعتها، واكتشاف أو سؤال واحد على الأقل، وقائمة قصيرة بمناطق للميثاق القادم. والجلسة بقيت ضمن ميثاقها.</span></p></details></div></section>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Key phrase: "simultaneously designed, executed and evaluated while learning". Session-based = time-box + charter + debriefing.</p><p class="gx-ar" lang="ar" dir="rtl">العبارة المفتاحية: «تُصمَّم وتُنفَّذ وتُقيَّم في الوقت نفسه أثناء التعلّم». المبني على الجلسات = وقت محدد + ميثاق + اجتماع مراجعة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking exploratory testing means "no documentation, no structure". Charters, time-boxes, session notes and debriefings give it structure and traceability.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار الاستكشافي يعني «بلا توثيق ولا تنظيم». المواثيق والأوقات المحددة وملاحظات الجلسة واجتماعات المراجعة تمنحه تنظيمًا وقابلية تتبّع.</p></aside>

---
order: 11
slug: "4-4-3"
chapter: 4
group: "4.4"
section: "4.4.3"
title: "Checklist-Based Testing"
titleAr: "الاختبار المبني على قوائم التحقق"
objectives: "FL-4.4.3 · K2"
minutes: 6
lo:
  FL-4.4.3: "Explain checklist-based testing."
loAr:
  FL-4.4.3: "تشرح الاختبار المبني على قوائم التحقق."
takeaways:
  - "The tester designs, implements and executes tests to cover test conditions taken from a checklist."
  - "Checklists are built from experience, knowledge of what matters to users, and understanding of why and how software fails."
  - "They should not contain items that can be checked automatically, items better suited as entry or exit criteria, or items that are too general."
  - "Items are often phrased as questions; each should be checkable separately and directly."
  - "Without detailed test cases, checklists give guidelines and some consistency; high-level checklists add variability, which can raise coverage but lower repeatability."
takeawaysAr:
  - "المختبر يصمّم وينفّذ اختبارات تغطي شروط اختبار مأخوذة من قائمة تحقق."
  - "تُبنى القوائم من الخبرة، ومعرفة ما يهم المستخدم، وفهم لماذا وكيف تفشل البرمجيات."
  - "يجب ألّا تحتوي بنودًا يمكن فحصها آليًا، أو بنودًا تناسب معايير الدخول والخروج أكثر، أو بنودًا عامة جدًا."
  - "البنود غالبًا تُصاغ كأسئلة؛ ويجب أن يكون كل بند قابلًا للفحص منفردًا ومباشرة."
  - "عند غياب حالات اختبار مفصّلة، تعطي القوائم إرشادات وشيئًا من الاتساق؛ والقوائم عالية المستوى تضيف تنوّعًا قد يرفع التغطية لكنه يقلل قابلية التكرار."
terms:
  - en: "Checklist-based Testing"
    ar: "الاختبار المبني على قوائم التحقق"
    def: "An experience-based test technique in which tests cover test conditions taken from a checklist."
    defAr: "تقنية اختبار مبنية على الخبرة، تغطي فيها الاختبارات شروط اختبار مأخوذة من قائمة تحقق."
    match: ["Checklist-based Testing", "checklist-based testing"]
---
في **الاختبار المبني على قوائم التحقق (Checklist-based Testing)**، يصمّم المختبر الاختبارات وينفّذها لتغطية **شروط اختبار مأخوذة من قائمة تحقق**.

### كيف تُبنى القائمة؟ — Building a Checklist

يمكن بناء قوائم التحقق على أساس:

- **الخبرة.**
- **المعرفة بما هو مهم للمستخدم.**
- **فهم لماذا وكيف تفشل البرمجيات.**

### ما الذي لا يجب أن تحتويه؟ — What Not to Include

- بنود **يمكن فحصها آليًا**.
- بنود **تناسب أكثر كمعايير دخول أو خروج**.
- بنود **عامة جدًا**.

### صياغة البنود — Writing the Items

- غالبًا تُصاغ البنود **على شكل أسئلة**.
- يجب أن يكون كل بند **قابلًا للفحص منفردًا ومباشرة**.
- قد تشير البنود إلى المتطلبات، أو خصائص واجهة المستخدم، أو خصائص الجودة، أو أشكال أخرى من شروط الاختبار.
- قوائم التحقق تدعم أنواع اختبار مختلفة، منها **الوظيفي وغير الوظيفي** (مثل 10 قواعد لاختبار سهولة الاستخدام).

### صيانة القائمة — Keeping It Useful

بعض البنود قد تفقد فعاليتها تدريجيًا، لأن المطوّرين يتعلّمون تجنّب هذه الأخطاء. وقد تحتاج إضافة بنود جديدة تعكس **defects عالية الخطورة اكتُشفت حديثًا**. لذلك يجب **تحديث القوائم بانتظام** بناءً على تحليل الـ defects، مع الحذر من أن تصبح **طويلة جدًا**.

### الاتساق والتنوّع — Consistency and Variability

عند **غياب حالات اختبار مفصّلة**، يمكن أن توفّر قوائم التحقق **إرشادات** ودرجة من **الاتساق** للاختبار. أما إذا كانت القوائم **عالية المستوى**، فسيظهر **تنوّع** في الاختبار الفعلي، ما قد يرفع **التغطية** لكنه يقلل **قابلية التكرار**.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A mobile team's release checklist: "Does the app handle losing connection during payment?", "Is every new text visible in Arabic and English?", "Does the layout work in RTL?", "Are new screens usable with large system fonts?". Each item is a question, checkable on its own, and none of them is something a script already checks.</p><p class="gx-ar" lang="ar" dir="rtl">قائمة تحقق للإصدار لدى فريق موبايل: «هل يتعامل التطبيق مع انقطاع الاتصال أثناء الدفع؟»، «هل كل نص جديد ظاهر بالعربية والإنجليزية؟»، «هل التصميم يعمل باتجاه RTL؟»، «هل الشاشات الجديدة قابلة للاستخدام مع خطوط النظام الكبيرة؟». كل بند سؤال، قابل للفحص منفردًا، ولا أحد منها يفحصه script أصلًا.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Look for what should NOT be in a checklist: automatable checks, entry/exit criteria and over-general items. And remember the trade-off: high-level checklists → more coverage variability, less repeatability.</p><p class="gx-ar" lang="ar" dir="rtl">ابحث عمّا يجب ألّا يكون في القائمة: فحوص قابلة للأتمتة، ومعايير دخول/خروج، وبنود عامة جدًا. وتذكّر المقايضة: قوائم عالية المستوى ← تنوّع وتغطية أكثر، وقابلية تكرار أقل.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Letting the checklist grow forever. Items that no longer find defects should be reviewed, and new high-risk items added, without making the list too long to use.</p><p class="gx-ar" lang="ar" dir="rtl">ترك القائمة تكبر بلا حد. البنود التي لم تعد تكتشف defects يجب مراجعتها، والبنود الجديدة عالية الخطورة يجب إضافتها، دون أن تصبح القائمة أطول من أن تُستخدم.</p></aside>

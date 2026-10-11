---
order: 11
slug: "4-4-3"
chapter: 4
group: "4.4"
section: "4.4.3"
title: "Checklist-Based Testing"
titleAr: "الاختبار المبني على قوائم التحقق"
objectives: "FL-4.4.3 · K2"
minutes: 13
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
  - "Checklists should be updated regularly based on defect analysis: some items lose effectiveness as developers learn, and new high-severity defects add new items, without letting the list grow too long."
takeawaysAr:
  - "المختبر يصمّم وينفّذ اختبارات تغطي شروط اختبار مأخوذة من قائمة تحقق."
  - "تُبنى القوائم من الخبرة، ومعرفة ما يهم المستخدم، وفهم لماذا وكيف تفشل البرمجيات."
  - "يجب ألّا تحتوي بنودًا يمكن فحصها آليًا، أو بنودًا تناسب معايير الدخول والخروج أكثر، أو بنودًا عامة جدًا."
  - "البنود غالبًا تُصاغ كأسئلة؛ ويجب أن يكون كل بند قابلًا للفحص منفردًا ومباشرة."
  - "عند غياب حالات اختبار مفصّلة، تعطي القوائم إرشادات وشيئًا من الاتساق؛ والقوائم عالية المستوى تضيف تنوّعًا قد يرفع التغطية لكنه يقلل قابلية التكرار."
  - "يجب تحديث القوائم بانتظام بناءً على تحليل الـ defects: بعض البنود تفقد فعاليتها مع تعلّم المطوّرين، والـ defects الجديدة عالية الخطورة تضيف بنودًا جديدة، دون أن تصبح القائمة طويلة جدًا."
terms:
  - en: "Checklist-based Testing"
    ar: "الاختبار المبني على قوائم التحقق"
    def: "An experience-based test technique in which tests cover test conditions taken from a checklist."
    defAr: "تقنية اختبار مبنية على الخبرة، تغطي فيها الاختبارات شروط اختبار مأخوذة من قائمة تحقق."
    match: ["Checklist-based Testing", "checklist-based testing"]
---
في **الاختبار المبني على قوائم التحقق (Checklist-based Testing)** يقوم المختبر **بتصميم الاختبارات وتنفيذها (implement) وتشغيلها (execute)** لتغطية **شروط اختبار (test conditions) مأخوذة من قائمة تحقق**. كل بند في القائمة شرط اختبار، ومهمة المختبر أن يحوّله إلى اختبار فعلي ويتأكد منه. الفكرة قديمة ومجرّبة خارج البرمجيات: الطيّارون والجرّاحون يستخدمون قوائم التحقق لأن الذاكرة البشرية تنسى، حتى عند الخبراء، وخاصة تحت الضغط.

### كيف تُبنى القائمة؟ — Building a Checklist

يذكر المنهج ثلاثة مصادر لبناء قوائم التحقق، وكلها مصادر **خبرة**، ولذلك تُصنَّف التقنية ضمن التقنيات المبنية على الخبرة:

- **الخبرة:** ما تعلّمه المختبر من مشاريع سابقة، مثل أن شاشات RTL تنكسر كثيرًا عند إضافة نص جديد.
- **المعرفة بما هو مهم للمستخدم:** زبون تطبيق التوصيل يهتم أولًا بأن يصل الطلب الصحيح، وأن يعرف المبلغ النهائي قبل الدفع.
- **فهم لماذا وكيف تفشل البرمجيات:** مثل انقطاع الشبكة، والإدخال المزدوج، والحالات الحدّية.

### ما الذي لا يجب أن تحتويه؟ — What Not to Include

يحدد المنهج ثلاثة أنواع من البنود **لا مكان لها** في القائمة، ولكل منها سبب:

| Do not include | Why | Delivery-app example |
| --- | --- | --- |
| Items that can be checked automatically | A tool or script does it faster and more reliably | "Does the build compile?" or "Do all unit tests pass?" |
| Items better suited as entry or exit criteria | They decide whether testing starts or ends, not what to test | "Is the test environment ready?" or "Are all critical defects closed?" |
| Items that are too general | They cannot be checked directly | "Is the app good?" or "Is it user-friendly?" |

البند الجيد يحتاج **حكمًا بشريًا** ويمكن التحقق منه **مباشرة**. أما البند الذي تفحصه أداة فوجوده في القائمة يضيّع وقت المختبر، والبند العام جدًا لا يقول له ماذا يفعل.

### صياغة البنود — Writing the Items

- **غالبًا تُصاغ البنود على شكل أسئلة:** «هل تظهر رسوم التوصيل 1.50 دينار قبل تأكيد الطلب للطلبات تحت 20 دينارًا؟». السؤال يدفع المختبر إلى الإجابة بنعم أو لا بعد فحص فعلي.
- **يجب أن يكون كل بند قابلًا للفحص منفردًا ومباشرة:** لا يعتمد بند على نتيجة بند آخر، ولا يجمع سؤالين في سؤال. «هل تعمل الشاشة بالعربية والإنجليزية وفي الوضع الليلي؟» ثلاثة بنود في بند واحد، ويجب فصلها.
- **قد تشير البنود إلى أنواع مختلفة من شروط الاختبار:** **متطلبات**، أو **خصائص الواجهة الرسومية**، أو **خصائص جودة**، أو أشكال أخرى من شروط الاختبار.
- **تدعم أنواع اختبار مختلفة، الوظيفية وغير الوظيفية:** ومن أشهر الأمثلة غير الوظيفية **قواعد نيلسن العشر لسهولة الاستخدام (10 usability heuristics, Nielsen)**، مثل «هل يُظهر النظام للمستخدم حالته دائمًا؟»، وهي تنطبق مباشرة على شاشة تتبّع الطلب.

**مثال: قائمة تحقق لشاشة الدفع في تطبيق التوصيل**

1. هل يظهر المبلغ النهائي، شاملًا رسوم التوصيل والخصم، قبل الضغط على «ادفع»؟ (متطلب)
2. هل يُمنع إرسال طلب أقل من الحد الأدنى 5.00 دنانير برسالة واضحة؟ (متطلب)
3. هل تظهر طرق الدفع الثلاث: نقدًا، وبطاقة، ومحفظة رقمية؟ (واجهة رسومية)
4. هل يبقى زر «ادفع» معطّلًا بعد الضغطة الأولى لمنع الطلب المكرر؟ (فهم أسباب الفشل)
5. هل يعرض التطبيق رسالة مفهومة إذا رفضت بوابة الدفع البطاقة؟ (سهولة الاستخدام)
6. هل يبقى ترتيب الحقول صحيحًا عند تغيير اللغة إلى العربية؟ (واجهة رسومية، RTL)

كل بند سؤال واحد، يُفحص وحده، ويحتاج عينًا بشرية. لاحظ أيضًا ما **لم** يدخل القائمة: «هل نجحت اختبارات الوحدة؟» (آلي)، و«هل البيئة جاهزة؟» (معيار دخول)، و«هل الشاشة جيدة؟» (عام جدًا).

### صيانة القائمة — Keeping It Useful

القائمة ليست وثيقة ثابتة. يذكر المنهج سببين لتغييرها:

1. **بعض البنود تفقد فعاليتها تدريجيًا**، لأن **المطوّرين يتعلّمون تجنّب الأخطاء نفسها**. إذا كان بند «هل يُقبل رقم الهاتف بالأرقام العربية؟» لم يكتشف defect منذ ستة إصدارات، فقد حان وقت مراجعته.
2. **قد تحتاج إلى بنود جديدة** تعكس **defects عالية الخطورة اكتُشفت حديثًا**، مثل defect في استرداد مبلغ الطلب الملغى.

لذلك يجب **تحديث القوائم بانتظام بناءً على تحليل الـ defects**. لكن مع الحذر من أن **تصبح القائمة طويلة جدًا**، فالقائمة الطويلة لا يُكملها أحد، فتفقد قيمتها.

### الاتساق والتنوّع — Consistency and Variability

عند **غياب حالات اختبار مفصّلة**، توفّر قوائم التحقق **إرشادات** ودرجة من **الاتساق**: كل مختبر يفحص النقاط نفسها، فلا تُنسى نقطة مهمة. لكن إذا كانت القوائم **عالية المستوى**، فمن المرجّح أن يظهر **تنوّع** في الاختبار الفعلي: مختبران يقرآن البند «هل تعمل عملية الدفع بالبطاقة؟» سيجرّب كل منهما بيانات وخطوات مختلفة. النتيجة **تغطية أكبر محتملة** لأن الاختبارات تختلف من مرة لأخرى، و**قابلية تكرار أقل** لأن أحدًا لا يستطيع إعادة الاختبار نفسه بالضبط.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A mobile team's release checklist: "Does the app handle losing connection during payment?", "Is every new text visible in Arabic and English?", "Does the layout work in RTL?", "Are new screens usable with large system fonts?". Each item is a question, checkable on its own, and none of them is something a script already checks.</p><p class="gx-ar" lang="ar" dir="rtl">قائمة تحقق للإصدار لدى فريق موبايل: «هل يتعامل التطبيق مع انقطاع الاتصال أثناء الدفع؟»، «هل كل نص جديد ظاهر بالعربية والإنجليزية؟»، «هل التصميم يعمل باتجاه RTL؟»، «هل الشاشات الجديدة قابلة للاستخدام مع خطوط النظام الكبيرة؟». كل بند سؤال، قابل للفحص منفردًا، ولا أحد منها يفحصه script أصلًا.</p></aside>

### لا تخلط بين — Don't Confuse

| | Checklist-based testing | Error guessing | Scripted test cases |
| --- | --- | --- | --- |
| Input | Checklist of test conditions | Tester's knowledge of likely errors | Detailed steps and expected results |
| Consistency | Some | Low | High |
| Repeatability | Lower if the checklist is high-level | Low | High |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Look for what should NOT be in a checklist: automatable checks, entry/exit criteria and over-general items. And remember the trade-off: high-level checklists → more variability and potentially greater coverage, less repeatability.</p><p class="gx-ar" lang="ar" dir="rtl">ابحث عمّا يجب ألّا يكون في القائمة: فحوص قابلة للأتمتة، ومعايير دخول/خروج، وبنود عامة جدًا. وتذكّر المقايضة: قوائم عالية المستوى ← تنوّع وتغطية أكثر، وقابلية تكرار أقل.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Letting the checklist grow forever. Items that no longer find defects should be reviewed, and items for newly found high-severity defects added, without making the list too long to use.</p><p class="gx-ar" lang="ar" dir="rtl">ترك القائمة تكبر بلا حد. البنود التي لم تعد تكتشف defects يجب مراجعتها، والبنود الجديدة عالية الخطورة يجب إضافتها، دون أن تصبح القائمة أطول من أن تُستخدم.</p></aside>

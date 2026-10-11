---
order: 1
slug: "4-1"
chapter: 4
section: "4.1"
title: "Test Techniques Overview"
titleAr: "نظرة عامة على تقنيات الاختبار"
objectives: "FL-4.1.1 · K2"
minutes: 12
lo:
  FL-4.1.1: "Tell black-box, white-box and experience-based test techniques apart."
loAr:
  FL-4.1.1: "تميّز بين تقنيات الصندوق الأسود والصندوق الأبيض والتقنيات المبنية على الخبرة."
takeaways:
  - "Test techniques help testers decide what to test and how, in test analysis and test design."
  - "They help define test conditions, coverage items and test data, and develop a relatively small but sufficient set of test cases systematically."
  - "Black-box techniques are based on the specified behaviour, without reference to internal structure; tests stay valid if the implementation changes but the behaviour does not."
  - "White-box techniques are based on the internal structure; tests can only be created after the design or implementation exists."
  - "Experience-based techniques use the tester's knowledge and experience and can find defects the other techniques miss."
  - "The effectiveness of experience-based techniques depends heavily on the tester's skills, so they complement, not replace, black-box and white-box techniques."
  - "The commonly used black-box techniques in this syllabus are equivalence partitioning, boundary value analysis, decision table testing and state transition testing."
takeawaysAr:
  - "تقنيات الاختبار تساعد المختبر على تحديد ماذا يختبر وكيف، في تحليل الاختبار وتصميمه."
  - "تساعد في تحديد شروط الاختبار وعناصر التغطية وبيانات الاختبار، وتطوير مجموعة صغيرة نسبيًا لكنها كافية من حالات الاختبار بشكل منهجي."
  - "تقنيات الصندوق الأسود مبنية على السلوك المحدد، دون النظر للبنية الداخلية؛ والاختبارات تبقى صالحة إذا تغيّر التنفيذ ولم يتغيّر السلوك."
  - "تقنيات الصندوق الأبيض مبنية على البنية الداخلية؛ ولا يمكن إنشاء الاختبارات إلا بعد وجود التصميم أو التنفيذ."
  - "التقنيات المبنية على الخبرة تستخدم معرفة المختبر وخبرته، وقد تكتشف defects تفوتها التقنيات الأخرى."
  - "فعالية التقنيات المبنية على الخبرة تعتمد كثيرًا على مهارات المختبر، لذلك هي مكمّلة لتقنيات الصندوق الأسود والأبيض لا بديل عنها."
  - "تقنيات الصندوق الأسود الشائعة في هذا المنهج هي: تقسيم التكافؤ، وتحليل القيم الحدّية، والاختبار بجداول القرار، واختبار انتقالات الحالة."
terms:
  - en: "Test Technique"
    ar: "تقنية الاختبار"
    def: "A procedure used to define test conditions, design test cases and specify test data."
    defAr: "إجراء يُستخدم لتحديد شروط الاختبار، وتصميم حالات الاختبار، وتحديد بيانات الاختبار."
    match: ["Test Technique", "test technique", "test techniques"]
  - en: "Coverage Item"
    ar: "عنصر التغطية"
    def: "An attribute or combination of attributes derived from test conditions using a test technique, used to measure how thorough testing is."
    defAr: "صفة أو مجموعة صفات مستخرجة من شروط الاختبار باستخدام تقنية اختبار، تُستخدم لقياس مدى شمولية الاختبار."
    match: ["Coverage Item", "coverage item", "coverage items"]
  - en: "Experience-based Test Technique"
    ar: "تقنية الاختبار المبنية على الخبرة"
    def: "A test technique based on the tester's experience, knowledge and intuition."
    defAr: "تقنية اختبار مبنية على خبرة المختبر ومعرفته وحدسه."
  - en: "Black-box Test Technique"
    ar: "تقنية الصندوق الأسود"
    def: "A test technique based on an analysis of the specification of a component or system, without reference to its internal structure."
    defAr: "تقنية اختبار مبنية على تحليل مواصفات المكوّن أو النظام، دون الرجوع إلى بنيته الداخلية."
    match: ["Black-box test technique", "black-box test technique", "black-box test techniques", "black-box techniques"]
  - en: "White-box Test Technique"
    ar: "تقنية الصندوق الأبيض"
    def: "A test technique based solely on the internal structure of a component or system."
    defAr: "تقنية اختبار مبنية فقط على البنية الداخلية للمكوّن أو النظام."
    match: ["White-box test technique", "white-box test technique", "white-box test techniques", "white-box techniques"]
---
هذا الفصل هو قلب الجزء العملي في المنهج، وأكبر الفصول وزنًا في الامتحان. **تقنيات الاختبار (Test Techniques)** تدعم المختبر في **تحليل الاختبار (Test Analysis)**، أي الإجابة عن سؤال «**ماذا** نختبر؟»، وفي **تصميم الاختبار (Test Design)**، أي الإجابة عن سؤال «**كيف** نختبر؟».

لماذا نحتاجها أصلًا؟ خذ شاشة إتمام الطلب في تطبيق التوصيل: قيمة الطلب قد تكون أي مبلغ، وعدد الوجبات من 1 إلى 20، وطريقة الدفع واحدة من ثلاث، والكوبون قد يكون نسبة أو مبلغًا ثابتًا وقد يكون منتهي الصلاحية. عدد التركيبات الممكنة هائل، ونعرف من مبادئ الاختبار أن **الاختبار الشامل مستحيل**. بدون تقنية، سيختار كل مختبر قيمًا عشوائية حسب مزاجه، فتتكرر اختبارات وتُنسى مناطق خطرة. التقنية تعطينا طريقة **منهجية** للاختيار.

### ماذا تقدّم التقنيات؟ — What Techniques Give Us

يذكر المنهج فائدتين رئيسيتين:

**أولًا: مجموعة صغيرة نسبيًا لكنها كافية.** التقنية تساعد على تطوير مجموعة **صغيرة نسبيًا لكنها كافية** من حالات الاختبار، **بطريقة منهجية**. «صغيرة» لأن الوقت والميزانية محدودان، و«كافية» لأن كل حالة اختبار مختارة لسبب واضح، لا بالصدفة. و«منهجية» تعني أن مختبرَين مختلفين يطبّقان التقنية نفسها على المتطلب نفسه سيصلان إلى نتائج متقاربة، وأن النتيجة قابلة للمراجعة والقياس.

**ثانيًا: دعم التحليل والتصميم.** تساعد التقنية المختبر على تحديد **شروط الاختبار (Test Conditions)**، و**عناصر التغطية (Coverage Items)**، و**بيانات الاختبار (Test Data)**. والجدول التالي يبيّن السلسلة على قاعدة «الحد الأدنى للطلب 5.00 دنانير»:

| Step | Output | Example |
| --- | --- | --- |
| Test analysis | Test condition | The minimum order of 5.00 JOD is enforced |
| Test design (technique: BVA) | Coverage items | Boundary values 4.99 and 5.00 |
| Test design | Test data | A cart worth 4.99 JOD and a cart worth 5.00 JOD |
| Test design | Test cases | 4.99 → "minimum order" message; 5.00 → order accepted |

لاحظ أن عناصر التغطية هي ما يسمح بقياس **التغطية**: إذا اختبرنا 4.99 فقط، فنحن غطّينا نصف العناصر. ولمزيد من التفاصيل عن التقنيات يحيل المنهج إلى المعيار **ISO/IEC/IEEE 29119-4** وإلى عدد من الكتب المرجعية.

### ثلاث مجموعات — Three Groups

يصنّف المنهج التقنيات في ثلاث مجموعات، والفرق بينها هو **مصدر المعلومات** الذي تُبنى عليه حالات الاختبار:

<figure class="gx-figure gx-spectrum" aria-label="The three groups of test techniques."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Black-box</b><span>Specification-based. Uses the specified behaviour, not the internal structure.</span></div><div class="gx-spectrum-item"><b>White-box</b><span>Structure-based. Uses the internal structure and processing of the test object.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Experience-based</b><span>Uses the knowledge and experience of testers.</span></div></div><figcaption>The three groups of test techniques.</figcaption></figure>

### تقنيات الصندوق الأسود — Black-box Test Techniques

**تقنيات الصندوق الأسود (Black-box Test Techniques)** تُسمّى أيضًا **التقنيات المبنية على المواصفات (Specification-based)**. تعتمد على تحليل **السلوك المحدد** لموضوع الاختبار كما تصفه المتطلبات وقصص المستخدم ومعايير القبول، **دون الرجوع إلى بنيته الداخلية**. المختبر يرى «صندوقًا» مغلقًا: يُدخل مدخلات ويقارن المخرجات بالسلوك المطلوب.

النتيجة المهمة التي يؤكدها المنهج: **حالات الاختبار مستقلة عن طريقة تنفيذ البرمجية**. لذلك **إذا تغيّر التنفيذ وبقي السلوك المطلوب كما هو، تبقى حالات الاختبار مفيدة**. مثال: أعاد المطوّرون كتابة حساب رسوم التوصيل من سلسلة شروط إلى محرّك قواعد. القاعدة نفسها لم تتغيّر (مجاني من 20.00 دينارًا، وإلا 1.50)، فاختبارات 19.99 و20.00 تبقى صالحة كما هي، بل تصبح أداة ممتازة لاختبار الانحدار بعد إعادة الكتابة. ومن نتائج هذه الاستقلالية أيضًا أن هذه الاختبارات يمكن تصميمها بمجرد توفر المواصفات، قبل كتابة الكود.

التقنيات الشائعة من هذه المجموعة، وهي موضوع القسم 4.2: **تقسيم التكافؤ**، و**تحليل القيم الحدّية**، و**الاختبار بجداول القرار**، و**اختبار انتقالات الحالة**.

### تقنيات الصندوق الأبيض — White-box Test Techniques

**تقنيات الصندوق الأبيض (White-box Test Techniques)** تُسمّى أيضًا **التقنيات المبنية على البنية (Structure-based)**. تعتمد على تحليل **البنية الداخلية لموضوع الاختبار ومعالجته**: التعليمات، والفروع، والقرارات داخل الكود.

ولأن حالات الاختبار **تعتمد على طريقة تصميم البرمجية**، فإنها **لا يمكن إنشاؤها إلا بعد** تصميم موضوع الاختبار أو تنفيذه. لا يمكنك أن تقول «سأتأكد من تنفيذ الفرع الخاص باسترداد مبالغ المحفظة» قبل أن يوجد هذا الفرع. والوجه الآخر لهذه الحقيقة: إذا تغيّر التنفيذ، قد تحتاج هذه الاختبارات إلى تحديث حتى لو لم يتغيّر السلوك. تقنيتا **اختبار التعليمات** و**اختبار الفروع** موضوع القسم 4.3.

### التقنيات المبنية على الخبرة — Experience-based Test Techniques

**التقنيات المبنية على الخبرة (Experience-based Test Techniques)** تستخدم بفعالية **معرفة المختبرين وخبرتهم** في تصميم حالات الاختبار وتنفيذها: ما رأوه من أعطال سابقة، وما يعرفونه عن المجال والمستخدمين والتقنيات.

يقرر المنهج ثلاث حقائق عنها:

- **فعاليتها تعتمد كثيرًا على مهارات المختبر.** مختبر خبير في تطبيقات الدفع سيجرّب أشياء لا تخطر لمبتدئ.
- **يمكنها اكتشاف defects قد تفوت تقنيات الصندوق الأسود والأبيض.** مثلًا: كتابة مبلغ بالأرقام العربية الهندية «٢٠» في حقل يتوقع «20»، أو إغلاق التطبيق في منتصف عملية الدفع. لا المواصفات ذكرت ذلك، ولا الكود فيه فرع خاص به.
- لذلك هي **مكمّلة** لتقنيات الصندوق الأسود والأبيض، وليست بديلًا عنها.

تقنياتها (تخمين الأخطاء، والاختبار الاستكشافي، والاختبار المبني على قوائم التحقق) موضوع القسم 4.4.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In the delivery app's checkout: a black-box test uses the rule "free delivery for orders of 20.00 JOD or more" from the user story. A white-box test makes sure the code branch that refunds wallet payments on cancellation is executed. An experience-based test pastes an amount typed in Arabic-Indic digits, because the tester has seen that break forms before. Each one finds defects the others can miss.</p><p class="gx-ar" lang="ar" dir="rtl">في شاشة إتمام الطلب في تطبيق التوصيل: اختبار الصندوق الأسود يستخدم قاعدة «توصيل مجاني للطلبات من 20.00 دينارًا فأكثر» من قصة المستخدم. اختبار الصندوق الأبيض يتأكد من تنفيذ فرع الكود الذي يعيد مبالغ المحفظة عند الإلغاء. والاختبار المبني على الخبرة يلصق مبلغًا مكتوبًا بالأرقام العربية الهندية، لأن المختبر رأى ذلك يعطّل النماذج من قبل. وكل منها يكتشف defects قد تفوت غيره.</p></aside>

### لا تخلط بين — Don't Confuse

| | Black-box | White-box | Experience-based |
| --- | --- | --- | --- |
| Also called | Specification-based | Structure-based | — |
| Based on | Specified behaviour (test basis) | Internal structure and processing | Testers' knowledge and experience |
| When tests can be created | As soon as the specification exists | Only after design or implementation | Any time; often during execution |
| If the implementation changes but behaviour does not | Tests are still useful | Tests may need updating | Not directly affected |
| Effectiveness depends on | Quality of the specification | Access to and understanding of the structure | The tester's skills |
| Examples in this chapter | EP, BVA, decision tables, state transitions | Statement testing, branch testing | Error guessing, exploratory, checklist-based |

### مثال تصنيف محلول — Worked Classification

| Situation in the delivery app | Group | Why |
| --- | --- | --- |
| Tests derived from the order-state rules in the user story | Black-box | Based on specified behaviour |
| Tests added until every decision in the coupon code has gone both ways | White-box | Based on the code's structure |
| A session attacking the payment screen with a list of past failures | Experience-based | Based on the tester's knowledge |

في الامتحان، ابحث عن **مصدر** حالات الاختبار في نص السؤال: المواصفات، أم الكود، أم خبرة المختبر.

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">"Test cases can only be created after the design is available" → white-box. "Test cases remain useful if the implementation changes" → black-box. "Depends heavily on the tester's skills" → experience-based.</p><p class="gx-ar" lang="ar" dir="rtl">«لا يمكن إنشاء حالات الاختبار إلا بعد توفر التصميم» ← صندوق أبيض. «حالات الاختبار تبقى مفيدة إذا تغيّر التنفيذ» ← صندوق أسود. «يعتمد كثيرًا على مهارات المختبر» ← مبني على الخبرة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking experience-based techniques are "unstructured guessing" to be avoided. They complement the systematic techniques and often find defects the others miss.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن التقنيات المبنية على الخبرة «تخمين عشوائي» يجب تجنّبه. هي تكمّل التقنيات المنهجية، وغالبًا تكتشف defects تفوت غيرها.</p></aside>

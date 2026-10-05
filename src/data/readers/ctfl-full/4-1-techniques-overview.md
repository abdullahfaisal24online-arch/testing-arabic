---
order: 1
slug: "4-1"
chapter: 4
section: "4.1"
title: "Test Techniques Overview"
titleAr: "نظرة عامة على تقنيات الاختبار"
objectives: "FL-4.1.1 · K2"
minutes: 6
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
takeawaysAr:
  - "تقنيات الاختبار تساعد المختبر على تحديد ماذا يختبر وكيف، في تحليل الاختبار وتصميمه."
  - "تساعد في تحديد شروط الاختبار وعناصر التغطية وبيانات الاختبار، وتطوير مجموعة صغيرة نسبيًا لكنها كافية من حالات الاختبار بشكل منهجي."
  - "تقنيات الصندوق الأسود مبنية على السلوك المحدد، دون النظر للبنية الداخلية؛ والاختبارات تبقى صالحة إذا تغيّر التنفيذ ولم يتغيّر السلوك."
  - "تقنيات الصندوق الأبيض مبنية على البنية الداخلية؛ ولا يمكن إنشاء الاختبارات إلا بعد وجود التصميم أو التنفيذ."
  - "التقنيات المبنية على الخبرة تستخدم معرفة المختبر وخبرته، وقد تكتشف عيوبًا تفوتها التقنيات الأخرى."
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
---
هذا الفصل هو قلب الجزء العملي في المنهج، وأكبر الفصول وزنًا في الامتحان. **تقنيات الاختبار (Test Techniques)** تدعم المختبر في **تحليل الاختبار** (ماذا نختبر) و**تصميمه** (كيف نختبر).

تساعد تقنيات الاختبار على تطوير مجموعة **صغيرة نسبيًا لكنها كافية** من حالات الاختبار، بطريقة منهجية. كما تساعد المختبر على تحديد **شروط الاختبار**، و**عناصر التغطية (Coverage Items)**، و**بيانات الاختبار** أثناء التحليل والتصميم.

يصنّف المنهج التقنيات في ثلاث مجموعات:

<figure class="gx-figure gx-spectrum" aria-label="The three groups of test techniques."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Black-box</b><span>Specification-based. Uses the specified behaviour, not the internal structure.</span></div><div class="gx-spectrum-item"><b>White-box</b><span>Structure-based. Uses the internal structure and processing of the test object.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Experience-based</b><span>Uses the knowledge and experience of testers.</span></div></div><figcaption>The three groups of test techniques.</figcaption></figure>

### تقنيات الصندوق الأسود — Black-box Test Techniques

تُسمّى أيضًا **التقنيات المبنية على المواصفات**. تعتمد على تحليل **السلوك المحدد** لموضوع الاختبار، **دون الرجوع لبنيته الداخلية**.

لذلك، **حالات الاختبار مستقلة عن طريقة تنفيذ البرمجية**. إذا تغيّر التنفيذ ولم يتغيّر السلوك المطلوب، تبقى حالات الاختبار مفيدة.

### تقنيات الصندوق الأبيض — White-box Test Techniques

تُسمّى أيضًا **التقنيات المبنية على البنية**. تعتمد على تحليل **البنية الداخلية للموضوع ومعالجته**.

ولأن حالات الاختبار تعتمد على طريقة تصميم البرمجية، **لا يمكن إنشاؤها إلا بعد** تصميم موضوع الاختبار أو تنفيذه.

### التقنيات المبنية على الخبرة — Experience-based Test Techniques

تستخدم بفعالية **معرفة المختبرين وخبرتهم** في تصميم الاختبارات وتنفيذها. فعاليتها تعتمد كثيرًا على مهارات المختبر.

يمكنها اكتشاف عيوب قد تفوت تقنيات الصندوق الأسود والأبيض. لذلك هي **مكمّلة** لهما.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">For a loan calculator: a black-box test uses the rule "loans of $1,000–$50,000 are allowed" from the specification. A white-box test makes sure the branch that applies a special rate for existing customers is executed. An experience-based test tries a pasted amount with a currency symbol, because the tester has seen that break forms before.</p><p class="gx-ar" lang="ar" dir="rtl">لحاسبة قروض: اختبار الصندوق الأسود يستخدم قاعدة «القروض بين 1000 و50000 دولار مسموحة» من المواصفات. اختبار الصندوق الأبيض يتأكد من تنفيذ الفرع الذي يطبّق سعرًا خاصًا للعملاء الحاليين. والاختبار المبني على الخبرة يجرّب لصق مبلغ مع رمز العملة، لأن المختبر رأى ذلك يعطّل النماذج من قبل.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">"Test cases can only be created after the design is available" → white-box. "Test cases remain useful if the implementation changes" → black-box. "Depends heavily on the tester's skills" → experience-based.</p><p class="gx-ar" lang="ar" dir="rtl">«لا يمكن إنشاء حالات الاختبار إلا بعد توفر التصميم» ← صندوق أبيض. «حالات الاختبار تبقى مفيدة إذا تغيّر التنفيذ» ← صندوق أسود. «يعتمد كثيرًا على مهارات المختبر» ← مبني على الخبرة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking experience-based techniques are "unstructured guessing" to be avoided. They complement the systematic techniques and often find defects the others miss.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن التقنيات المبنية على الخبرة «تخمين عشوائي» يجب تجنّبه. هي تكمّل التقنيات المنهجية، وغالبًا تكتشف عيوبًا تفوت غيرها.</p></aside>

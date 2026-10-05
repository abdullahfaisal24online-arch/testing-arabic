---
order: 5
slug: "2-2-2"
chapter: 2
group: "2.2"
section: "2.2.2"
title: "Test Design and Test Implementation with Generative AI"
titleAr: "تصميم الاختبار وتجهيزه باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.2 · K3 / HO-2.2.2a · H2 / HO-2.2.2b · H2 / HO-2.2.2c · H2"
minutes: 13
lo:
  GenAI-2.2.2: "Use GenAI to support test design and test implementation tasks."
  HO-2.2.2a: "Generate functional test cases from user stories with chaining, structured prompts and meta prompting."
  HO-2.2.2b: "Use few-shot prompting to generate Gherkin-style test cases from user stories."
  HO-2.2.2c: "Use prompt chaining to prioritise test cases by priority and dependencies."
loAr:
  GenAI-2.2.2: "تطبّق GenAI لدعم مهام تصميم الاختبار وتجهيزه."
  HO-2.2.2a: "تولّد حالات اختبار وظيفية من قصص المستخدم بتسلسل التوجيهات والتوجيه المنظّم والتوجيه الفوقي."
  HO-2.2.2b: "تستخدم التوجيه بالأمثلة لتوليد حالات اختبار بصيغة Gherkin من قصص المستخدم."
  HO-2.2.2c: "تستخدم تسلسل التوجيهات لترتيب حالات الاختبار حسب الأولويات والاعتماديات."
takeaways:
  - "GenAI helps generate test cases, synthetic test data and test scripts, and helps schedule and prioritise execution."
  - "Test implementation prepares what execution needs; it is not test execution itself."
  - "Priority never overrides a hard dependency: a high-priority test still waits for the tests it depends on."
  - "A script that runs without errors can still check the wrong expected result."
takeawaysAr:
  - "يساعد GenAI في توليد حالات الاختبار وبيانات الاختبار التركيبية والسكربتات، وفي جدولة التنفيذ وترتيب أولوياته."
  - "تجهيز الاختبار يُعدّ ما يحتاجه التنفيذ؛ وهو ليس تنفيذ الاختبار نفسه."
  - "الأولوية لا تتجاوز اعتمادية إلزامية أبدًا: الاختبار عالي الأولوية ينتظر الاختبارات التي يعتمد عليها."
  - "السكربت الذي يعمل دون أخطاء قد يتحقق رغم ذلك من نتيجة متوقعة خاطئة."
terms:
  - en: "Test Design"
    ar: "تصميم الاختبار"
    def: "Elaborating test conditions into test cases and other testware."
    defAr: "تفصيل شروط الاختبار إلى حالات اختبار ومواد اختبار أخرى."
  - en: "Test Implementation"
    ar: "تجهيز الاختبار"
    def: "Creating or acquiring the testware needed for execution, such as procedures, scripts, data and environments."
    defAr: "إنشاء مواد الاختبار اللازمة للتنفيذ أو اقتناؤها، مثل الإجراءات والسكربتات والبيانات والبيئات."
  - en: "Synthetic Test Data"
    ar: "بيانات اختبار تركيبية"
    def: "Generated data that resembles production data, including edge cases, without exposing real confidential information."
    defAr: "بيانات مولّدة تشبه بيانات الإنتاج، وتشمل الحالات الحدّية، دون كشف معلومات سرية حقيقية."
  - en: "Gherkin"
    ar: "صيغة Gherkin"
    def: "A Given–When–Then syntax for writing test scenarios in structured natural language."
    defAr: "صيغة Given–When–Then لكتابة سيناريوهات الاختبار بلغة طبيعية منظّمة."
---
**Test Design** يفصّل شروط الاختبار إلى حالات ومواد اختبار. **Test Implementation** يعني تجهيز أو اقتناء ما يلزم لتنفيذ الاختبارات، مثل الإجراءات والسكربتات والبيانات والبيئة؛ لا تخلطه مع **Test Execution** الذي يشغّل الاختبارات فعليًا. يدعم GenAI إعداد السكربتات اليدوية والمؤتمتة وترتيبها وجدولتها، ويساعد في إنشاء مواد الاختبار المختلفة وتقييمها: حالات الاختبار، وبيانات الاختبار، والسكربتات، وحتى بيئات الاختبار.

### مهام التصميم والتجهيز — Design and Implementation Tasks

- **توليد حالات الاختبار:** من متطلبات وظيفية وغير وظيفية، مع الشروط المسبقة والمدخلات والنتائج المتوقعة وأهداف التغطية، من التحقق الوظيفي البسيط حتى اختبارات End-to-End.
- **إنشاء بيانات اختبار تركيبية — Synthetic Test Data:** متنوعة وقريبة من بيانات الإنتاج، تشمل الحالات الحدّية وتخدم الاختبارات الوظيفية وغير الوظيفية، دون كشف معلومات سرية.
- **توليد السكربتات:** تحويل الحالات المنظمة إلى إجراءات يدوية أو سكربتات تتوافق مع إطار الأتمتة، وتحديثها مع تغيّر المتطلبات.
- **جدولة التنفيذ وترتيبه:** بحسب الأولوية والمخاطر والاعتماديات وتوفر الموارد وأهداف الاختبار.

### أمثلة لكل مهمة — Examples

**توليد الحالات:** من متطلب وظيفي مثل «يحصل العميل على خصم 10% عند شراء أكثر من 3 قطع»، يقترح النموذج حالات بشروط مسبقة (سلة فيها 3 قطع، 4 قطع)، ومدخلات، ونتائج متوقعة. ومن متطلب غير وظيفي مثل «تُحمَّل الصفحة خلال ثانيتين»، يقترح شروط القياس والحمل والبيئة.

**البيانات التركيبية:** تحتاج 500 عميل لاختبار تقرير؟ يولّد النموذج أسماء وعناوين وأرقامًا واقعية الشكل لكنها غير حقيقية، مع حالات حدّية مثل أسماء طويلة جدًا، وأحرف عربية وإنجليزية مختلطة، وتواريخ ميلاد على الحدود. هذا يخدم الاختبار دون كشف بيانات عملاء فعلية.

**السكربتات:** من حالة منظمة بخطوات واضحة، يولّد النموذج سكربتًا للإطار الذي يستخدمه الفريق، وعند تغيّر المتطلب يحدّث السكربت المتأثر.

**الجدولة:** يقرأ النموذج الحالات واعتمادياتها ويقترح ترتيب تنفيذ يراعي الأولوية والمخاطر والموارد المتاحة وأهداف الاختبار.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating generated data as safe by default, or treating a script that runs as a correct test. Check data for sensitivity and validity, and check every script's expected result and coverage before approving it.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار البيانات المولّدة آمنة تلقائيًا، أو اعتبار السكربت الذي يعمل اختبارًا صحيحًا. افحص البيانات من حيث الحساسية والصلاحية، وافحص النتيجة المتوقعة والتغطية لكل سكربت قبل اعتماده.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the four design and implementation tasks: test case generation, synthetic test data, test script generation, and execution scheduling and prioritisation. Remember that test implementation prepares testware for execution; it is not execution itself.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف مهام التصميم والتجهيز الأربع: توليد حالات الاختبار، وبيانات الاختبار التركيبية، وتوليد السكربتات، وجدولة التنفيذ وترتيب أولوياته. وتذكّر أن التجهيز يُعدّ مواد الاختبار للتنفيذ، وليس هو التنفيذ.</p></aside>

<section class="gx-lab" data-lab="HO-2.2.2a"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Generate, Check Coverage, Then Meta-Prompt</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · ولّد، افحص التغطية، ثم استخدم التوجيه الفوقي</span></span><span class="gx-lab-meta">HO-2.2.2a · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> generate functional test cases for the rule “password length is 12–64 characters”, assuming all other fields are valid.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> توليد حالات اختبار وظيفية لقاعدة «طول كلمة المرور من 12 إلى 64 محرفًا»، بافتراض أن بقية الحقول صحيحة.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Ask for test cases in the format ID / Preconditions / Input / Steps / Expected / Requirement.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب حالات اختبار بالصيغة: المعرّف / الشروط المسبقة / المدخل / الخطوات / المتوقع / المتطلب.</span></li><li><span class="gx-en" lang="en" dir="ltr">Ask for a coverage table per acceptance criterion and review it.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب جدول تغطية لكل معيار قبول وراجعه.</span></li><li><span class="gx-en" lang="en" dir="ltr">Use a meta prompt to design a prompt for an end-to-end procedure: sign up, then reach the allowed feature. Fix the prompt when you find a gap and regenerate only the affected part.</span><span class="gx-ar" lang="ar" dir="rtl">استخدم توجيهًا فوقيًا لتصميم توجيه لإجراء End-to-End: التسجيل ثم الوصول إلى الميزة المسموحة. صحّح التوجيه عند اكتشاف فجوة، وأعد توليد الجزء المتأثر فقط.</span></li></ol><table><thead><tr><th><span class="gx-en" lang="en" dir="ltr">Case</span><span class="gx-ar" lang="ar" dir="rtl">الحالة</span></th><th><span class="gx-en" lang="en" dir="ltr">Input</span><span class="gx-ar" lang="ar" dir="rtl">المدخل</span></th><th><span class="gx-en" lang="en" dir="ltr">Expected</span><span class="gx-ar" lang="ar" dir="rtl">المتوقع</span></th><th><span class="gx-en" lang="en" dir="ltr">Source</span><span class="gx-ar" lang="ar" dir="rtl">المصدر</span></th></tr></thead><tbody><tr><td>TC-01</td><td><span class="gx-en" lang="en" dir="ltr">11 characters</span><span class="gx-ar" lang="ar" dir="rtl">11 محرفًا</span></td><td><span class="gx-en" lang="en" dir="ltr">Sign-up rejected for length</span><span class="gx-ar" lang="ar" dir="rtl">رفض التسجيل بسبب الطول</span></td><td><span class="gx-en" lang="en" dir="ltr">Lower boundary</span><span class="gx-ar" lang="ar" dir="rtl">الحد الأدنى</span></td></tr><tr><td>TC-02</td><td><span class="gx-en" lang="en" dir="ltr">12 characters</span><span class="gx-ar" lang="ar" dir="rtl">12 محرفًا</span></td><td><span class="gx-en" lang="en" dir="ltr">Length rule accepted</span><span class="gx-ar" lang="ar" dir="rtl">قبول شرط الطول</span></td><td><span class="gx-en" lang="en" dir="ltr">Lower boundary</span><span class="gx-ar" lang="ar" dir="rtl">الحد الأدنى</span></td></tr><tr><td>TC-03</td><td><span class="gx-en" lang="en" dir="ltr">64 characters</span><span class="gx-ar" lang="ar" dir="rtl">64 محرفًا</span></td><td><span class="gx-en" lang="en" dir="ltr">Length rule accepted</span><span class="gx-ar" lang="ar" dir="rtl">قبول شرط الطول</span></td><td><span class="gx-en" lang="en" dir="ltr">Upper boundary</span><span class="gx-ar" lang="ar" dir="rtl">الحد الأعلى</span></td></tr><tr><td>TC-04</td><td><span class="gx-en" lang="en" dir="ltr">65 characters</span><span class="gx-ar" lang="ar" dir="rtl">65 محرفًا</span></td><td><span class="gx-en" lang="en" dir="ltr">Sign-up rejected for length</span><span class="gx-ar" lang="ar" dir="rtl">رفض التسجيل بسبب الطول</span></td><td><span class="gx-en" lang="en" dir="ltr">Upper boundary</span><span class="gx-ar" lang="ar" dir="rtl">الحد الأعلى</span></td></tr></tbody></table><pre class="gx-lab-prompt"><code>Design a prompt that generates an end-to-end procedure from the approved
acceptance criteria and test cases. Ask for missing data first, define the
order of steps and observable results. Do not assume screens or permissions
that are not stated. Include a check that links each step to its source.</code></pre><p><span class="gx-en" lang="en" dir="ltr">These teaching cases do not cover all of sign-up. Clarify how characters are counted when Unicode is involved instead of assuming each visible symbol counts as one.</span><span class="gx-ar" lang="ar" dir="rtl">هذه الحالات التعليمية لا تغطي التسجيل كله. وضّح طريقة احتساب المحارف عند وجود Unicode بدل افتراض أن كل رمز ظاهر يُحسب واحدًا.</span></p></div></section>

<section class="gx-lab" data-lab="HO-2.2.2b"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Few-shot Gherkin Scenarios</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · سيناريوهات Gherkin بالأمثلة</span></span><span class="gx-lab-meta">HO-2.2.2b · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Goal:</strong> give the model correct examples, each with its user story and test condition, then ask for a scenario for a new condition.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>الهدف:</strong> إعطاء النموذج أمثلة صحيحة، كل مثال مع قصة المستخدم وشرط الاختبار، ثم طلب سيناريو لشرط جديد.</span></p><pre class="gx-lab-prompt"><code>Scenario: Reject an empty email
  Given all other registration fields are valid
  When the learner submits an empty email
  Then no account is created
# Second example
Scenario: Reject an existing email
  Given an account already uses the submitted email
  When the learner submits otherwise valid registration data
  Then no second account is created</code></pre><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Attach the story and test condition to each example above.</span><span class="gx-ar" lang="ar" dir="rtl">أرفق القصة وشرط الاختبار مع كل مثال أعلاه.</span></li><li><span class="gx-en" lang="en" dir="ltr">Ask for a scenario for a password that is too short.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب سيناريو لكلمة مرور أقصر من المسموح.</span></li><li><span class="gx-en" lang="en" dir="ltr">Check that Given sets up, When acts and Then states the result, and that nothing adds a new requirement. If not, refine the examples or the prompt and try again.</span><span class="gx-ar" lang="ar" dir="rtl">تأكد أن Given يجهّز، وWhen ينفّذ الفعل، وThen يذكر النتيجة، وأن لا شيء يضيف متطلبًا جديدًا. وإن لم يكن كذلك، حسّن الأمثلة أو التوجيه وأعد المحاولة.</span></li></ol></div></section>

<section class="gx-lab" data-lab="HO-2.2.2c"><header class="gx-lab-head"><span class="gx-lab-title"><span class="gx-en" lang="en" dir="ltr">Lab · Prioritise with Dependencies</span><span class="gx-ar" lang="ar" dir="rtl">تمرين عملي · ترتيب الأولويات مع الاعتماديات</span></span><span class="gx-lab-meta">HO-2.2.2c · H2</span></header><div class="gx-lab-body"><p><span class="gx-en" lang="en" dir="ltr"><strong>Given:</strong> A creates a user (2 min). B enrols in a course and needs A (3 min). C issues a certificate and needs B (4 min). D opens a public page and is independent (1 min). C has the highest priority.</span><span class="gx-ar" lang="ar" dir="rtl"><strong>المعطيات:</strong> A ينشئ مستخدمًا (دقيقتان). B يسجّل في دورة ويحتاج A (3 دقائق). C يصدر شهادة ويحتاج B (4 دقائق). D يفتح صفحة عامة وهو مستقل (دقيقة). أولوية C هي الأعلى.</span></p><ol class="gx-lab-steps"><li><span class="gx-en" lang="en" dir="ltr">Ask the model to extract the dependencies, and review them.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب من النموذج استخراج الاعتماديات، وراجعها.</span></li><li><span class="gx-en" lang="en" dir="ltr">Ask for an order that respects the dependencies, using risk-, coverage- or requirements-based prioritisation.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب ترتيبًا يحترم الاعتماديات، باستخدام الترتيب القائم على المخاطر أو التغطية أو المتطلبات.</span></li><li><span class="gx-en" lang="en" dir="ltr">Ask for a schedule with execution resources, then verify the reasoning yourself.</span><span class="gx-ar" lang="ar" dir="rtl">اطلب جدولًا بموارد التنفيذ، ثم تحقق من الاستدلال بنفسك.</span></li></ol><figure class="gx-figure gx-flow" aria-label="A then B then C, with D independent"><div class="gx-flow-row"><span class="gx-flow-node">A<small>2 min</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">B<small>3 min</small></span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">C<small>highest priority</small></span><span class="gx-flow-arrow" aria-hidden="true">·</span><span class="gx-flow-node">D<small>independent</small></span></div><figcaption>One runner: 10 minutes. Two runners: D runs alongside A, so the minimum is 9 minutes (the A → B → C path).</figcaption></figure></div></section>

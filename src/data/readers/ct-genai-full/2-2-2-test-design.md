---
order: 5
slug: "2-2-2"
chapter: 2
group: "2.2"
section: "2.2.2"
title: "Test Design and Test Implementation with Generative AI"
titleAr: "تصميم الاختبار وتجهيزه باستخدام الذكاء التوليدي"
objectives: "GenAI-2.2.2 · K3 / HO-2.2.2a · H2 / HO-2.2.2b · H2 / HO-2.2.2c · H2"
minutes: 22
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
  - "Generated test cases are drafts: recalculate the expected results of critical cases yourself from the approved rules."
takeawaysAr:
  - "يساعد GenAI في توليد حالات الاختبار وبيانات الاختبار التركيبية والـ scripts، وفي جدولة التنفيذ وترتيب أولوياته."
  - "تجهيز الاختبار يُعدّ ما يحتاجه التنفيذ؛ وهو ليس تنفيذ الاختبار نفسه."
  - "الأولوية لا تتجاوز اعتمادية إلزامية أبدًا: الاختبار عالي الأولوية ينتظر الاختبارات التي يعتمد عليها."
  - "الـ script الذي يعمل دون أخطاء قد يتحقق رغم ذلك من نتيجة متوقعة خاطئة."
  - "حالات الاختبار المولّدة مسودات: أعد حساب النتائج المتوقعة للحالات الحرجة بنفسك من القواعد المعتمدة."
terms:
  - en: "Test Design"
    ar: "تصميم الاختبار"
    def: "Elaborating test conditions into test cases and other testware."
    defAr: "تفصيل شروط الاختبار إلى حالات اختبار ومواد اختبار أخرى."
  - en: "Test Implementation"
    ar: "تجهيز الاختبار"
    def: "Creating or acquiring the testware needed for execution, such as procedures, scripts, data and environments."
    defAr: "إنشاء مواد الاختبار اللازمة للتنفيذ أو اقتناؤها، مثل الإجراءات والـ scripts والبيانات والبيئات."
  - en: "Synthetic Test Data"
    ar: "بيانات اختبار تركيبية"
    def: "Generated data that resembles production data, including edge cases, without exposing real confidential information."
    defAr: "بيانات مولّدة تشبه بيانات الإنتاج، وتشمل الحالات الحدّية، دون كشف معلومات سرية حقيقية."
  - en: "Gherkin"
    ar: "صيغة Gherkin"
    def: "A Given–When–Then syntax for writing test scenarios in structured natural language."
    defAr: "صيغة Given–When–Then لكتابة سيناريوهات الاختبار بلغة طبيعية منظّمة."
  - en: "Test Execution Schedule"
    ar: "جدول تنفيذ الاختبار"
    def: "The planned order and timing of test execution, based on priority, risks, dependencies, resource availability and test objectives."
    defAr: "الترتيب والتوقيت المخطط لتنفيذ الاختبارات، بناءً على الأولوية والمخاطر والاعتماديات وتوفر الموارد وأهداف الاختبار."
---
بعد أن يجيب التحليل عن «ماذا نختبر؟»، يأتي سؤالان: **كيف نختبره بالضبط؟** و**ماذا نحتاج لننفّذ الاختبار؟** يعتمد المنهج هنا تعريفات منهج الأساس [ISTQB_CTFL_SYL]:

- **تصميم الاختبار (Test Design)** هو **تفصيل شروط الاختبار وتنقيحها**، ثم **ترجمتها إلى حالات اختبار ومواد اختبار (testware) أخرى**.
- **تجهيز الاختبار (Test Implementation)** هو **إنشاء مواد الاختبار اللازمة لتنفيذ الاختبارات أو اقتناؤها**، مثل الإجراءات والـ scripts والبيانات والبيئة.

لا تخلط التجهيز مع **تنفيذ الاختبار (Test Execution)** الذي يشغّل الاختبارات فعليًا: التجهيز يُعدّ كل شيء، والتنفيذ يستخدمه.

يقول المنهج إن **الاختبارات اليدوية والـ test scripts المؤتمتة** يمكن **إنشاؤها، وترتيب أولوياتها، وتنظيمها في جدول تنفيذ الاختبار** بدعم من GenAI. ويصف هذه المجموعة من الأنشطة بأنها **كبيرة**، وأن GenAI يستطيع دعمها **بشكل كبير** بالمساعدة في **إنشاء** مواد الاختبار المختلفة **وتقييمها**: حالات الاختبار، وبيانات الاختبار، والـ test scripts، وبيئات الاختبار. لاحظ كلمة «تقييم»: النموذج لا يكتب فقط، بل يمكن أن يُطلب منه مراجعة حالات موجودة، مثل البحث عن حالات مكررة أو نتائج متوقعة ناقصة. ولهذا الهدف مستوى **K3**: ستُعطى مهمة تصميم أو تجهيز، وعليك أن تطبّق GenAI عليها وتعرف ما الذي تتحقق منه.

### 1. توليد حالات الاختبار — Test Case Generation

**ماذا يفعل النموذج؟** باستخدام **معالجة اللغة الطبيعية**، يُنشئ **مسودات** حالات اختبار من **المتطلبات الوظيفية وغير الوظيفية**. وعندما يُعطى **معلومات مناسبة**، يقترح **الشروط المسبقة، والمدخلات، والنتائج المتوقعة، ومعايير التغطية**، فينتج حالات تخدم **أهداف اختبار مختلفة**: من **التحقق الوظيفي البسيط** حتى **اختبارات End-to-End المعقّدة**.

كلمتان مهمتان هنا: **«مسودات»** تعني أن الناتج يحتاج مراجعة قبل اعتماده، و**«معلومات مناسبة»** تعني أن جودة الحالات تتبع جودة ما أعطيته. **مثال من تطبيق التوصيل:** من قاعدة رسوم التوصيل، يقترح النموذج حالات بقيم حدّية (19.99 و20.00) مع شرط مسبق «سلة فيها وجبات بهذه القيمة» ونتيجة متوقعة واضحة للرسوم والإجمالي. وعلى مستوى End-to-End: عميل يطلب، والمطعم يقبل، والسائق يوصل، ويظهر Delivered في التطبيقات الثلاثة. ومن متطلب غير وظيفي، كأن يعتمد الفريق حدًا لزمن تحميل قائمة المطعم، يقترح شروط القياس والحمل والبيئة.

### 2. توليد بيانات الاختبار التركيبية — Test Data Synthesis

**ماذا يفعل النموذج؟** يُنشئ **بيانات اختبار تركيبية (synthetic test data)** **تمثيلية** و**تحافظ على خصوصية البيانات**، **تشبه بيانات الإنتاج**، وتغطي **الحالات القصوى** و**شروط اختبار متنوعة**. ويقول المنهج إنها تُستخدم في **الاختبار الوظيفي وغير الوظيفي**، وإنها يمكن أن **تُكيَّف مع متطلبات التطبيق**، فتحاكي سيناريوهات واقعية **دون كشف معلومات حساسة**.

**لماذا يهم في تطبيقنا؟** بيانات العملاء تتضمن أسماء وأرقام هواتف وعناوين، وهي بيانات شخصية. نسخ بيانات الإنتاج إلى بيئة الاختبار يعرّضها للخطر. البديل: عملاء وهميون بأسماء عربية وإنجليزية، وأرقام هواتف بصيغة صحيحة لكنها غير حقيقية، وعناوين طويلة جدًا، وطلبات على الحدود.

### 3. توليد الـ test scripts المؤتمتة — Automated Test Script Generation

**ماذا يفعل النموذج؟** يولّد **إجراءات اختبار يدوية** و**test scripts مؤتمتة** من **حالات اختبار منظّمة**، فيفسّر خطوات الاختبار ويترجمها إلى شيفرة **متوافقة مع أطر أتمتة مختلفة**. ويمكن **تحديث** هذه الـ scripts أو **توسيعها** بناءً على متطلبات جديدة.

**مثال:** من حالة منظّمة «اطلب وجبتين بقيمة 20.00، ادفع نقدًا، تحقّق أن رسوم التوصيل صفر»، يولّد النموذج script بإطار الأتمتة الذي يستخدمه الفريق. وعندما يضيف الفريق المحفظة الرقمية كطريقة دفع، يطلب المختبِر من النموذج توسيع الـ scripts المتأثرة بدل كتابتها من الصفر. لاحظ أن المدخل حالة **منظّمة**: الخطوات الغامضة تعطي script غامضًا.

### 4. جدولة التنفيذ وترتيب أولوياته — Test Execution Scheduling and Prioritization

**ماذا يفعل النموذج؟** يحلل حالات الاختبار و**الاعتماديات بينها**، ويحسّن جدول التنفيذ بناءً على **الأولوية، والمخاطر المرتبطة، وتوفر الموارد، وأهداف الاختبار**.

**لماذا يحتاج مراجعة؟** لأنها مهمة **استدلال متعدد المعايير**: يجب أن يوازن النموذج بين الأولوية والاعتمادية والموارد في وقت واحد، وهنا قد يخطئ في استدلاله. القاعدة الثابتة: **الأولوية لا تتجاوز اعتمادية إلزامية**.

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating generated data as safe by default, or treating a script that runs as a correct test. Check data for sensitivity and validity, and check every script's expected result and coverage before approving it.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار البيانات المولّدة آمنة تلقائيًا، أو اعتبار الـ script الذي يعمل اختبارًا صحيحًا. افحص البيانات من حيث الحساسية والصلاحية، وافحص النتيجة المتوقعة والتغطية لكل script قبل اعتماده.</p></aside>

### خطوات التطبيق — Step by Step

1. **ابدأ من شروط اختبار معتمدة** (ناتج القسم 2.2.1)، لا من القصة الخام.
2. **أعطِ النموذج القواعد الدقيقة**: الحدود، والعملة، وترتيب الحساب (مثل: حد التوصيل المجاني يُحسب قبل الخصم).
3. **حدّد صيغة الحالة**: المعرّف، الشروط المسبقة، المدخلات، الخطوات، النتيجة المتوقعة، المصدر. ولصيغة متكررة مثل Gherkin، أضف أمثلة (Few-shot).
4. **اطلب جدول تغطية** يربط كل شرط بحالاته، وابحث عن الشروط بلا حالات.
5. **احسب النتائج المتوقعة بنفسك** للحالات الحرجة؛ لا تعتمد على حساب النموذج.
6. **للبيانات والـ scripts والجدولة**: افحص الخصوصية، وشغّل الـ script وتحقق مما يفحصه، وراجع الاعتماديات قبل اعتماد الترتيب.

### أمثلة محلولة — Worked Examples

**المثال 1 (حالة خادعة): رسوم التوصيل مع الكوبون.** القواعد: الحد الأدنى 5.00 دينار؛ التوصيل مجاني من 20.00 فأكثر، **محسوبًا على قيمة الطلب قبل الخصم**؛ وإلا فالرسوم 1.50. طلب المختبِر حالات من النموذج، ثم راجع النتائج المتوقعة بنفسه:

| Case | Order value | Coupon | Expected delivery fee | Expected total |
|---|---|---|---|---|
| TC-01 | 4.99 | None | Order rejected (below minimum) | — |
| TC-02 | 5.00 | None | 1.50 | 6.50 |
| TC-03 | 19.99 | None | 1.50 | 21.49 |
| TC-04 | 20.00 | None | 0.00 | 20.00 |
| TC-05 | 22.00 | Fixed 3.00 | 0.00 | 19.00 |
| TC-06 | 25.00 | 20% | 0.00 | 20.00 |

في المسودة الأولى أعطى النموذج TC-05 رسومًا قدرها 1.50، لأنه حسب الحد بعد الخصم (19.00). هذا الخطأ لا يظهر إلا إذا حسبت النتيجة المتوقعة بنفسك من القاعدة. وظهر سؤال لم تجب عنه القواعد: طلب بقيمة 6.00 مع كوبون 2.00 يصبح 4.00؛ هل الحد الأدنى يُحسب قبل الخصم أم بعده؟ القاعدة لا تقول، فهو **سؤال لمالك المنتج**، لا قرار يتخذه النموذج.

**المثال 2: بيانات تركيبية لاختبار الطلبات.**

| Field | Synthetic values | Why |
|---|---|---|
| Customer name | Short Latin name; 60-character Arabic name | Arabic and English UI, long text |
| Phone number | Valid format, not a real subscriber | Personal data must not be exposed |
| Address | Very long Arabic address with digits | Layout and right-to-left display |
| Meals | 1, 20, and 21 (invalid) | Boundaries of 1–20 meals |
| Payment | Cash, card, digital wallet | One value per partition |
| Coupon expiry | Yesterday, today, next month | Expired vs valid coupon |

وللاختبار غير الوظيفي، يمكن أن يولّد النموذج آلاف الطلبات الوهمية بالتوزيع نفسه لاختبار الحمل. وقبل الاستخدام، تحقّق أن لا قيمة منها تطابق بيانات حقيقية.

**المثال 3 (حالة خادعة): ترتيب التنفيذ مع اعتماديات.**

| Test | Priority | Depends on |
|---|---|---|
| T1 Place a cash order | High | — |
| T2 Restaurant accepts the order | Medium | T1 |
| T3 Customer cancels while Preparing | High | T2 |
| T4 Driver marks the order Delivered | High | T2 |
| T5 Arabic labels in order history | Low | — |

الترتيب الصحيح: T1 ثم T2، ثم T3 وT4، وT5 في أي وقت أو بالتوازي على جهاز ثانٍ. أولوية T3 عالية، لكنها لا تسبق T2. وهناك فخ آخر: T3 وT4 **لا تستطيعان استخدام الطلب نفسه**، لأن الطلب الملغى لا يمكن توصيله. الجدول الصحيح يجهّز طلبين منفصلين. هذا النوع من الاعتمادية الخفية هو ما يجب أن تبحث عنه عند مراجعة استدلال النموذج.

### لا تخلط بين — Don't Confuse

| | Test design | Test implementation | Test execution |
|---|---|---|---|
| Main question | How do we test it? | What do we need to run it? | Run it and compare results |
| Typical output | Test cases | Procedures, scripts, data, environment, schedule | Test results, defect reports |
| GenAI support (this section) | Test case generation | Data synthesis, script generation, scheduling | Not covered here |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Know the four design and implementation tasks: test case generation, synthetic test data, test script generation, and execution scheduling and prioritisation. Remember that test implementation prepares testware for execution; it is not execution itself.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف مهام التصميم والتجهيز الأربع: توليد حالات الاختبار، وبيانات الاختبار التركيبية، وتوليد الـ scripts، وجدولة التنفيذ وترتيب أولوياته. وتذكّر أن التجهيز يُعدّ مواد الاختبار للتنفيذ، وليس هو التنفيذ.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app testers generated 30 checkout test cases in minutes, but before approving them they recalculated the expected totals for the boundary and coupon cases. Two expected results were wrong because the model applied the free-delivery limit after the discount. Fixing the prompt with the exact rule and regenerating only those cases took less time than writing them all by hand.</p><p class="gx-ar" lang="ar" dir="rtl">ولّد مختبرو تطبيق التوصيل 30 حالة اختبار لشاشة الدفع في دقائق، لكنهم قبل اعتمادها أعادوا حساب الإجماليات المتوقعة لحالات الحدود والكوبونات. كانت نتيجتان متوقعتان خاطئتين لأن النموذج طبّق حد التوصيل المجاني بعد الخصم. وتصحيح التوجيه بالقاعدة الدقيقة وإعادة توليد هاتين الحالتين فقط استغرق وقتًا أقل من كتابة الحالات كلها يدويًا.</p></aside>

### التمارين العملية — The Labs

**HO-2.2.2a** (مستوى H2): توليد حالات اختبار وظيفية من قصص المستخدم بثلاث أدوات معًا: **تسلسل التوجيهات، والتوجيه المنظّم، والتوجيه الفوقي**، لضمان تغطية شاملة. الخطوة الأولى توجيه يولّد الحالات من معايير القبول **بصيغة مخرجات محددة**. والثانية **التحقق من الاكتمال**: يولّد النموذج **جدولًا يلخّص التغطية** لكل معيار قبول. والثالثة **توجيه فوقي** يساعد في إنشاء **إجراءات End-to-End**، ويُحسَّن تكراريًا.

**HO-2.2.2b** (مستوى H2): بعد مراجعة أمثلة جاهزة وصيغة Gherkin، **تختار n مثالًا** تضعها في التوجيه، **كل مثال فيه قصة مستخدم وشروط اختبار وحالات Given-When-Then المتوقعة**. ثم تطبّق التوجيه على قصة جديدة. وإذا كانت النتائج غير دقيقة، **تحسّن التوجيه أو الأمثلة**.

**HO-2.2.2c** (مستوى H2): ترتيب حالات مجموعة اختبار حسب **المخاطر والاعتماديات** باستخدام تسلسل التوجيهات. يبدأ بنظرة على مناهج مختلفة: **القائم على المخاطر، والقائم على التغطية، والقائم على المتطلبات**، ثم مراجعة مجموعة الاختبار، ثم كتابة توجيهات تولّد **خطط ترتيب قابلة للتنفيذ**. ويجب **التحقق يدويًا** من النتائج لاكتشاف أخطاء استدلال النموذج. الهدف تجربة GenAI في مهام تحتاج **استدلالًا متعدد المعايير**.

تستخدم التمارين أدناه مثال التسجيل في منصة «تعلّم».

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

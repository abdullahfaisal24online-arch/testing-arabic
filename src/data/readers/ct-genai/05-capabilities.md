---
order: 5
slug: "1-2-1"
chapter: 1
group: "1.2"
section: "1.2.1"
title: "Key LLM Capabilities for Test Tasks"
titleAr: "القدرات الأساسية للنماذج اللغوية في مهام الاختبار"
objectives: "GenAI-1.2.1 · K2"
minutes: 15
lo:
  GenAI-1.2.1: "Give examples of what LLMs can do for test tasks."
loAr:
  GenAI-1.2.1: "تعطي أمثلة على ما تستطيع النماذج اللغوية فعله في مهام الاختبار."
takeaways:
  - "LLM capabilities are general; the value comes from aiming them at a specific test task and evaluating the result."
  - "Each capability comes with something to verify: coverage, oracle correctness, data validity, script correctness."
  - "Quality of context is part of the quality of the result."
  - "LLMs can interpret many inputs of the test process: requirements, specifications, screenshots, code, test cases and defect reports."
  - "The seven capabilities cover the whole test process: requirements analysis, test case creation, test oracles, test data, automation, result analysis and testware."
takeawaysAr:
  - "قدرات النماذج عامة؛ القيمة تأتي من توجيهها لمهمة اختبار محددة وتقييم النتيجة."
  - "كل قدرة يرافقها شيء يجب التحقق منه: التغطية، وصحة مرجع الحكم، وصلاحية البيانات، وصحة الـ script."
  - "جودة السياق جزء من جودة النتيجة."
  - "تستطيع النماذج تفسير مدخلات كثيرة من عملية الاختبار: المتطلبات والمواصفات ولقطات الشاشة والشيفرة وحالات الاختبار وتقارير الـ defects."
  - "القدرات السبع تغطي عملية الاختبار كاملة: تحليل المتطلبات، وإنشاء الحالات، ومراجع الحكم، والبيانات، والأتمتة، وتحليل النتائج، ومواد الاختبار."
terms:
  - en: "Test Oracle"
    ar: "مرجع الحكم"
    def: "A source used to determine the expected result of a test, such as a business rule or a calculation."
    defAr: "مصدر يُستخدم لتحديد النتيجة المتوقعة للاختبار، مثل قاعدة أعمال أو عملية حسابية."
  - en: "Testware"
    ar: "مواد الاختبار"
    def: "Work products created during testing, such as plans, test cases, scripts, data and reports."
    defAr: "نواتج العمل التي تُنشأ أثناء الاختبار، مثل الخطط والحالات والـ scripts والبيانات والتقارير."
  - en: "Anomaly"
    ar: "الحالة الشاذة"
    def: "Any deviation between what was expected and what was observed during testing; it may later turn out to be a defect, a test problem or no problem at all."
    defAr: "أي انحراف بين المتوقع والملاحَظ أثناء الاختبار؛ قد يتبيّن لاحقًا أنه defect، أو مشكلة في الاختبار نفسه، أو لا مشكلة إطلاقًا."
    match: ["anomalies", "Anomalies"]
---
في الأقسام السابقة تعرّفت على ما يجري داخل النموذج اللغوي الكبير: الـ tokens، ونافذة السياق، وأنواع النماذج، وقدرة بعضها على قراءة الصور. هذا القسم يجيب عن السؤال الذي يهمّك كمختبِر أكثر من أي شيء آخر: **ماذا يستطيع النموذج أن يفعل لي في عملي اليومي؟**

يذكّر المنهج في مقدمة هذا الجزء بالقدرات العامة للنماذج: **معالجة اللغة والشيفرة**، و**توليد نص وشيفرة مترابطين**، و**الإجابة عن الأسئلة**، و**تلخيص المعلومات**، و**الترجمة بين اللغات**، و**تحليل الصور** في السياق متعدد الوسائط. هذه القدرات وحدها لا تختبر شيئًا. قيمتها تظهر عندما توجّهها نحو مهمة اختبار محددة، ثم تقيّم الناتج بعناية.

### ما الذي يستطيع النموذج قراءته؟ — What LLMs Can Interpret

يقول المنهج إن النماذج تستطيع **تفسير المتطلبات، والمواصفات، ولقطات الشاشة، والشيفرة، وحالات الاختبار، وتقارير الـ defects**. وهي تقريبًا كل ما يمرّ على المختبِر. ولذلك يصف المنهج النماذج بأنها أدوات لغرضين:

1. **الفهم والتوضيح:** فهم المعلومات التي تحتاجها في كل مرحلة وتوضيحها، مثل شرح وحدة شيفرة لا تعرفها، أو تلخيص تقرير defect طويل، أو قراءة لقطة شاشة مرفقة بشكوى عميل.
2. **التوليد:** إنشاء **عناصر من مواد الاختبار (testware)**، مثل حالات الاختبار والبيانات والـ scripts والتقارير.

لماذا يهمّك هذا التمييز؟ لأن خطر الخطأ يختلف. في الفهم، أنت تستخدم الناتج لتفكّر بشكل أفضل. أما في التوليد، فالناتج قد يدخل مباشرة في عمل الفريق، فيجب مراجعته قبل اعتماده.

### القدرات السبع — The Seven Key Capabilities

يعدّد المنهج سبع قدرات أساسية. الجدول التالي يلخّصها بأسمائها كما في المنهج، ثم نشرح كل واحدة بمثال من تطبيق التوصيل الذي يرافقنا في هذا الدليل:

| Capability | What the LLM helps with | What the tester verifies |
| --- | --- | --- |
| Requirements analysis and improvement | Ambiguities, inconsistencies, missing information; clarifying questions | That the questions are real gaps, and no answers are invented |
| Test case creation support | Test cases and test objectives from the test basis | Traceability to requirements and coverage |
| Test oracle generation | Expected results | Correctness against the business rule |
| Test data generation | Datasets, boundary values, combinations | Validity against constraints |
| Test automation support | Scripts from test case descriptions; improving scripts; suggesting test techniques | That the code runs and checks the right thing |
| Test result analysis | Summaries; classifying anomalies by severity and priority | No important failure dropped; classification confirmed |
| Testware creation | Test plans, test reports, defect reports, kept up to date | Match with evidence and the real project status |

### تحليل المتطلبات وتحسينها — Requirements Analysis and Improvement

يستطيع النموذج تحليل المتطلبات، وغيرها من عناصر **أساس الاختبار (test basis)**، ليكشف ثلاثة أنواع من المشكلات: **الغموض** (عبارة تحتمل أكثر من معنى)، و**التناقض** (متطلبان لا يمكن أن يصحّا معًا)، و**المعلومات الناقصة** (حالة لم يذكرها أحد). ويستطيع أيضًا **توليد أسئلة مفيدة** تطرحها في نقاشك مع أصحاب المصلحة.

**مثال:** كانت المسودة الأولى لقصة «التوصيل المجاني» في تطبيق التوصيل تقول: «التوصيل مجاني للطلبات من 20.00 دينار فأكثر». سأل النموذج: هل يُحسب الحد قبل خصم الكوبون أم بعده؟ هذا سؤال لم ينتبه له أحد، فأجاب مالك المنتج: **قبل الخصم**، وأُضيفت الإجابة إلى معايير القبول. لماذا هذا مهم؟ لأن اكتشاف الغموض قبل البرمجة أرخص بكثير من اكتشافه كـ defect بعد الإصدار.

### دعم إنشاء حالات الاختبار — Test Case Creation Support

من متطلبات النظام أو قصص المستخدم أو أي عنصر آخر من أساس الاختبار، يقترح النموذج **حالات اختبار** و**أهداف اختبار**. لاحظ كلمة «دعم»: النموذج يقترح، والمختبِر يتأكد أن كل حالة مرتبطة بمتطلب فعلي، وأن المتطلبات كلها مغطاة، وأن الحالات السلبية لم تُنسَ.

**مثال:** من قصة إلغاء الطلب، يقترح النموذج حالات للإلغاء في حالات Placed وAccepted وPreparing، وحالة سلبية لمحاولة الإلغاء بعد Out for delivery.

### توليد مرجع الحكم — Test Oracle Generation

**مرجع الحكم (test oracle)** هو ما نعرف منه **النتيجة المتوقعة**. يستطيع النموذج المساعدة في توليد النتائج المتوقعة، وهذه قدرة قوية وخطيرة في الوقت نفسه: الرقم الذي يعطيه النموذج يبدو دقيقًا حتى لو كان خطأ. لذلك تُقارن كل نتيجة متوقعة بالقاعدة نفسها.

**مثال:** طلب بقيمة 21.00 مع كوبون بمبلغ ثابت 5.00. النتيجة المتوقعة: 16.00 **بدون** رسوم توصيل، لأن الحد يُفحص على قيمة الطلب قبل الخصم (21.00 ≥ 20.00). لو أجاب النموذج 17.50، فهو طبّق الحد بعد الخصم، وهذا بالضبط ما يجب أن يلتقطه المختبِر.

### توليد بيانات الاختبار — Test Data Generation

يستطيع النموذج **توليد مجموعات بيانات**، و**تحديد القيم الحدّية**، و**إنشاء تركيبات مختلفة** من البيانات.

**مثال:** لقيمة الطلب: 4.99 و5.00 (الحد الأدنى)، و19.99 و20.00 (التوصيل المجاني). لعدد الوجبات: 0 و1 و20 و21. وتركيبات من طرق الدفع الثلاث مع نوعي الكوبون ولغتي الواجهة. عمليًا، اطلب أسماء وعناوين وأرقام هواتف **اصطناعية**، ولا تعطِ النموذج بيانات عملاء حقيقيين، فهي بيانات شخصية.

### دعم أتمتة الاختبار — Test Automation Support

يذكر المنهج ثلاثة أشياء هنا: **توليد test scripts من وصف حالة الاختبار**، و**تحسين الـ scripts الموجودة باقتراح تغييرات**، و**تحديد تقنيات الاختبار المناسبة**.

**مثال:** يحوّل النموذج حالة «طلب بالبطاقة يصل إلى Delivered» إلى test script لإطار الأتمتة الذي يستخدمه الفريق، ويقترح استبدال الانتظار الثابت بانتظار حتى ظهور العنصر، ويقترح **اختبار انتقال الحالة** لحالات الطلب و**تحليل القيم الحدّية** لقيمة الطلب. الـ script المولَّد لا يُعتمد قبل أن يُشغَّل ويُراجع.

### تحليل نتائج الاختبار — Test Result Analysis

يساعد النموذج في **تلخيص النتائج** و**تصنيف الحالات الشاذة (anomalies) حسب الشدة والأولوية**.

**مثال:** خط CI يشغّل الاختبارات مع كل commit، وفي نهاية اليوم هناك مئات النتائج. يلخّصها النموذج: 12 فشلًا، منها 9 بسبب انتهاء مهلة خدمة الخرائط، وواحد في رفض دفع بالبطاقة، واثنان في نص عربي مقطوع. ويقترح أن فشل الدفع شدته عالية. لكن **الشدة** تعتمد على الأثر على النظام، و**الأولوية** على احتياجات العمل، فالقرار النهائي للفريق.

### إنشاء مواد الاختبار — Testware Creation

يساعد النموذج في إنشاء وثائق متنوعة، منها **خطط الاختبار** و**تقارير الاختبار** و**تقارير الـ defects**، و**تحديثها مع تطور المشروع**. الجزء الأخير مهم: الوثيقة التي لا تُحدَّث تفقد قيمتها بسرعة.

**مثال:** يصوغ النموذج مسودة تقرير defect من ملاحظات المختبِر السريعة، بخطوات إعادة إنتاج واضحة. وعندما يُضاف الدفع بالمحفظة الرقمية، يقترح الأقسام التي يجب تحديثها في خطة الاختبار.

### لا تخلط بين — Don't Confuse

| | Test case creation | Test oracle generation | Test data generation |
| --- | --- | --- | --- |
| Output | Steps and conditions to test | The expected result | The input values |
| Delivery app example | "Order with coupon above free-delivery limit" | "Total 16.00, no delivery fee" | "21.00 with fixed coupon 5.00" |
| Main check | Coverage of the test basis | Correctness against the rule | Validity against constraints |

### عبر عملية الاختبار كاملة — Across the Whole Test Process

يختم المنهج بأن هذه القدرات تُظهر كيف يمكن للنماذج أن تؤثر في **جوانب متعددة من الاختبار عبر عملية الاختبار كاملة**: من تحليل المتطلبات في البداية، إلى التصميم والتنفيذ، إلى التقارير في النهاية. ولهذا يستفيد منها المختبِر اليدوي ومهندس الأتمتة ومدير الاختبار معًا. وتذكّر أن **جودة السياق جزء من جودة النتيجة**: كلما أعطيت النموذج أساس اختبار أوضح وقواعد أدق، صار الناتج أقرب لما تحتاجه. وكيف تكتب هذا السياق بإتقان هو موضوع الفصل الثاني.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice · Test oracle</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي · مرجع الحكم</span></p><p class="gx-en" lang="en" dir="ltr">The delivery app testers asked the model for expected totals for 20 coupon cases. Most were right, but for an order of 21.00 with a fixed 5.00 coupon it added the 1.50 delivery fee, because it checked the free-delivery limit after the discount. A number from the model is not a trusted oracle just because it is a number: check each expected result against the rule, and flag missing information such as rounding.</p><p class="gx-ar" lang="ar" dir="rtl">طلب مختبرو تطبيق التوصيل من النموذج المجاميع المتوقعة لعشرين حالة كوبون. كان معظمها صحيحًا، لكنه في طلب بقيمة 21.00 مع كوبون ثابت 5.00 أضاف رسوم التوصيل 1.50، لأنه فحص حد التوصيل المجاني بعد الخصم. الرقم الذي يعطيه النموذج ليس مرجع حكم موثوقًا لمجرد أنه رقم: قارن كل نتيجة متوقعة بالقاعدة، ونبّه للمعلومات الناقصة مثل التقريب.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Expect “which capability is this?” questions. Learn the seven by name: requirements analysis and improvement, test case creation support, test oracle generation, test data generation, test automation support, test result analysis, and testware creation. Classifying anomalies by severity and priority belongs to test result analysis; suggesting appropriate test techniques belongs to test automation support.</p><p class="gx-ar" lang="ar" dir="rtl">توقّع أسئلة من نوع «أي قدرة هذه؟». احفظ السبع بأسمائها: تحليل المتطلبات وتحسينها، ودعم إنشاء حالات الاختبار، وتوليد مرجع الحكم، وتوليد بيانات الاختبار، ودعم أتمتة الاختبار، وتحليل نتائج الاختبار، وإنشاء مواد الاختبار. تصنيف الحالات الشاذة حسب الشدة والأولوية يتبع تحليل نتائج الاختبار؛ واقتراح تقنيات الاختبار المناسبة يتبع دعم أتمتة الاختبار.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Accepting the model's severity or priority as final. It can propose a classification, but severity depends on impact on the system and priority on business needs, which the tester must confirm.</p><p class="gx-ar" lang="ar" dir="rtl">قبول الشدة أو الأولوية التي يقترحها النموذج كقرار نهائي. يستطيع اقتراح تصنيف، لكن الشدة تعتمد على الأثر على النظام، والأولوية على احتياجات العمل، وهذا ما يجب أن يؤكده المختبِر.</p></aside>

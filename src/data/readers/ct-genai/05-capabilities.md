---
order: 5
slug: "1-2-1"
chapter: 1
group: "1.2"
section: "1.2.1"
title: "Key LLM Capabilities for Test Tasks"
titleAr: "القدرات الأساسية للنماذج اللغوية في مهام الاختبار"
objectives: "GenAI-1.2.1 · K2"
minutes: 8
lo:
  GenAI-1.2.1: "Give examples of what LLMs can do for test tasks."
takeaways:
  - "LLM capabilities are general; the value comes from aiming them at a specific test task and evaluating the result."
  - "Each capability comes with something to verify: coverage, oracle correctness, data validity, script correctness."
  - "Quality of context is part of the quality of the result."
terms:
  - en: "Test Oracle"
    ar: "مرجع الحكم"
    def: "A source used to determine the expected result of a test, such as a business rule or a calculation."
  - en: "Testware"
    ar: "مواد الاختبار"
    def: "Work products created during testing, such as plans, test cases, scripts, data and reports."
---
تستطيع النماذج اللغوية معالجة اللغة والشيفرات، وتوليد محتوى، والإجابة عن أسئلة، والتلخيص والترجمة، وتحليل الصور عندما تدعم الوسائط المتعددة. هذه قدرات عامة؛ القيمة العملية تأتي من توجيهها لمهمة اختبار محددة وتقييم الناتج.

يعدّد السيليبس سبع قدرات أساسية تمتد عبر عملية الاختبار كاملة، من التحليل حتى التقارير. الجدول التالي يربط كل قدرة بتطبيق عملي وبما يجب التحقق منه قبل اعتماد الناتج:

| Capability | تطبيق على مهمة اختبار | ما الذي نتحقق منه؟ |
| --- | --- | --- |
| Requirements analysis | كشف الغموض والتناقض والمعلومات الناقصة، مثل عبارة «استجابة سريعة»، وتوليد أسئلة توضيحية لأصحاب المصلحة | ألا يخترع النموذج زمن استجابة لم يتفق عليه أصحاب المصلحة |
| Test case generation | اقتراح أهداف اختبار وحالات إيجابية وسلبية من المتطلبات وقصص المستخدم | ارتباط الحالات بالمتطلبات وتغطيتها |
| Test oracle generation | اقتراح النتيجة المتوقعة من قاعدة أعمال | صحة المرجع وعدم الاعتماد على تخمين النموذج |
| Test data generation | اقتراح قيم حدّية وتركيبات مختلفة وبيانات اصطناعية | توافقها مع القيود وصلاحيتها للمهمة |
| Test automation support | توليد سكربت من وصف الحالة، واقتراح تحسينات على السكربتات الحالية وتقنيات تصميم اختبار مناسبة | صحة الشيفرة والمكتبات والتحققات عند التنفيذ |
| Test result analysis | تلخيص النتائج وتصنيف الحالات الشاذة حسب الشدة والأولوية | عدم إسقاط فشل مهم أو الخلط بين الشدة والأولوية |
| Testware creation | إعداد مسودات خطط وتقارير اختبار وتقارير عيوب وتحديثها | مطابقتها للأدلة والحالة الفعلية للمشروع |

### أمثلة على كل قدرة — Examples by Capability

**تحليل المتطلبات وتحسينها:** تعطي النموذج متطلبًا يقول «يجب أن يستجيب النظام بسرعة عند البحث». يشير النموذج إلى أن «بسرعة» غير قابلة للقياس، ويقترح سؤالًا لأصحاب المصلحة: ما الحد الزمني المقبول، وتحت أي حمل؟ وقد يكتشف تناقضًا بين متطلبين، أو معلومة ناقصة مثل غياب ما يحدث عند عدم وجود نتائج.

**إنشاء حالات الاختبار:** من قصة مستخدم ومعايير قبولها، يقترح النموذج أهداف اختبار وحالات إيجابية وسلبية. المهم أن تتحقق أن كل حالة مرتبطة بمعيار فعلي، وأن المعايير كلها مغطاة.

**توليد بيانات الاختبار:** لحقل عمر يقبل من 18 إلى 65، يقترح النموذج القيم 17 و18 و65 و66، وتركيبات من الحقول، وبيانات اصطناعية واقعية بدل بيانات عملاء حقيقيين.

**دعم الأتمتة:** تحويل حالة مكتوبة إلى سكربت لإطار يستخدمه الفريق، أو اقتراح تحسين لسكربت موجود، أو اقتراح تقنية تصميم مناسبة مثل تحليل القيم الحدّية.

**تحليل النتائج:** تلخيص مئات النتائج، وتصنيف الحالات الشاذة حسب الشدة (Severity) والأولوية (Priority).

**إنشاء مواد الاختبار:** مسودات لخطة الاختبار أو تقرير الإكمال أو تقارير العيوب، وتحديثها مع تطور المشروع.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice · Test oracle</p><p>If the requirement says a 10% discount applies to a price of 100, the expected result is 90 before any fees that are not mentioned. A number from the model is not a trusted oracle just because it is a number: check it against the rule and the calculation, and flag missing information such as rounding or tax.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label">Exam tip</p><p>Expect “which capability is this?” questions. Learn the seven by name: requirements analysis and improvement, test case creation, test oracle generation, test data generation, test automation support, test result analysis, and testware creation. Classifying anomalies by severity and priority belongs to test result analysis.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label">Common mistake</p><p>Accepting the model's severity or priority as final. It can propose a classification, but severity depends on impact on the system and priority on business needs, which the tester must confirm.</p></aside>

تمتد هذه القدرات عبر عملية الاختبار كاملة. قد يستفيد منها المختبِر اليدوي، ومهندس الأتمتة، ومدير الاختبار. المدخلات قد تكون متطلبات أو مواصفات أو صورًا أو شيفرة أو حالات اختبار أو تقارير عيوب؛ جودة السياق جزء من جودة النتيجة.

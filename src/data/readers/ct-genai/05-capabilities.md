---
order: 5
slug: "1-2-1"
chapter: 1
group: "1.2"
section: "1.2.1"
title: "Key LLM Capabilities for Test Tasks"
titleAr: "القدرات الأساسية للنماذج اللغوية في مهام الاختبار"
objectives: "GenAI-1.2.1 · K2"
minutes: 4
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

| Capability | تطبيق على مهمة اختبار | ما الذي نتحقق منه؟ |
| --- | --- | --- |
| Requirements analysis | تحديد عبارة غامضة مثل «استجابة سريعة» واقتراح سؤال توضيحي | ألا يخترع النموذج زمن استجابة لم يتفق عليه أصحاب المصلحة |
| Test case generation | اقتراح حالات إيجابية وسلبية من معايير القبول | ارتباط الحالات بالمتطلبات وتغطيتها |
| Test oracle generation | اقتراح النتيجة المتوقعة من قاعدة أعمال | صحة المرجع وعدم الاعتماد على تخمين النموذج |
| Test data generation | اقتراح قيم حدّية وتركيبات مختلفة وبيانات اصطناعية | توافقها مع القيود وصلاحيتها للمهمة |
| Test automation support | تحويل وصف الحالة إلى سكربت واقتراح تحسينات | صحة الشيفرة والمكتبات والتحققات عند التنفيذ |
| Test result analysis | تلخيص النتائج وتجميع الأنماط واقتراح تصنيف العيوب | عدم إسقاط فشل مهم أو الخلط بين الشدة والأولوية |
| Testware creation | إعداد مسودات خطط وتقارير اختبار وتقارير عيوب وتحديثها | مطابقتها للأدلة والحالة الفعلية للمشروع |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label">In practice · Test oracle</p><p>If the requirement says a 10% discount applies to a price of 100, the expected result is 90 before any fees that are not mentioned. A number from the model is not a trusted oracle just because it is a number: check it against the rule and the calculation, and flag missing information such as rounding or tax.</p></aside>

قد يستفيد من هذه القدرات المختبِر اليدوي، ومهندس الأتمتة، ومدير الاختبار. المدخلات قد تكون متطلبات أو مواصفات أو صورًا أو شيفرة أو حالات اختبار أو تقارير عيوب؛ جودة السياق جزء من جودة النتيجة.

---
order: 5
slug: "5-2-1"
chapter: 5
group: "5.2"
section: "5.2.1"
title: "Essential Skills and Knowledge for Testing with Generative AI"
titleAr: "المهارات والمعرفة الأساسية للاختبار بالذكاء التوليدي"
objectives: "GenAI-5.2.1 · K2"
minutes: 6
lo:
  GenAI-5.2.1: "Explain the essential skills and knowledge for testing with GenAI."
loAr:
  GenAI-5.2.1: "شرح المهارات والمعارف الأساسية للاختبار باستخدام الذكاء التوليدي."
takeaways:
  - "Prompt engineering, understanding the context window, and reviewing generated testware."
  - "Domain and test-technique knowledge stay essential: good phrasing cannot replace knowing the right answer."
  - "Data sharing implications, data sanitization and privacy-preserving prompts."
  - "Right-sizing models for cost and energy, and knowing when to reject an output."
takeawaysAr:
  - "هندسة الـ prompts، وفهم نافذة السياق، ومراجعة أدوات الاختبار (testware) المولَّدة."
  - "معرفة المجال وتقنيات الاختبار تبقى أساسية: الصياغة الجيدة لا تغني عن معرفة الإجابة الصحيحة."
  - "تبعات مشاركة البيانات، وتنقية البيانات، وكتابة prompts تحافظ على الخصوصية."
  - "اختيار حجم النموذج المناسب للكلفة والطاقة، ومعرفة متى ترفض المخرَج."
terms:
  - en: "Data Sanitization"
    ar: "تنقيح البيانات"
    def: "Removing or masking personal and confidential information before data is shared with a GenAI tool."
    defAr: "إزالة المعلومات الشخصية والسرية أو إخفاؤها قبل مشاركة البيانات مع أداة ذكاء توليدي."
---
يتطلب تطبيق GenAI بنجاح نهجًا منظمًا لإدارة التغيير: بناء مهارات GenAI الأساسية، وتطوير أدوار الاختبار التقليدية لتناسب عمليات مدعومة بالذكاء الاصطناعي. الدمج الناجح يجمع المهارات التقنية والتغيير التنظيمي: من يوجّه الأداة، ومن يراجع، ومن يقرر، وكيف يتعلم الفريق ويحسّن العملية مع الوقت.

### المهارات المطلوبة — Required Skills

- **هندسة التوجيه** وفهم نافذة السياق وطرق مراجعة مواد الاختبار المولّدة.
- **معرفة المجال وتقنيات الاختبار**، وهي أساسية لتقييم الحالات المولّدة وتحليل العيوب وبيانات الاختبار.
- **تقييم قدرات النموذج** وتنقيح الطلبات وتقييم صحة Testware وتغطيته، وفهم المخاطر وطرق تخفيفها.
- **فهم تبعات مشاركة البيانات** و**Data Sanitization** بإزالة المعلومات الشخصية والسرية أو إخفائها، وصياغة طلبات تحافظ على الخصوصية.
- **اختيار حجم النموذج ونمط استخدامه** بما يوازن الفائدة بالكلفة والطاقة.

### لماذا تبقى خبرة الاختبار أساسية؟ — Why Testing Expertise Still Matters

قد يبدو أن الذكاء التوليدي يقلل الحاجة لمعرفة تقنيات الاختبار، والعكس هو الصحيح. لكي تحكم على حالات ولّدها النموذج، يجب أن تعرف ما الحالات الصحيحة: أين الحدود، وما الفئات المتكافئة، وما المخاطر في هذا المجال. المختبِر الذي لا يعرف تحليل القيم الحدّية لن يلاحظ أن النموذج نسي الحد الأعلى.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice · A combined skill</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي · مهارة مركّبة</span></p><p class="gx-en" lang="en" dir="ltr">The model produces a case accepting an 8-character password, but the source says 12. The tester needs to read the source, know the boundaries, check traceability and fix the prompt. If the inputs also contain real customer data, they need to sanitise it and question whether the tool is suitable.</p><p class="gx-ar" lang="ar" dir="rtl">يُنتج النموذج حالة تقبل كلمة مرور من 8 أحرف، بينما المصدر يقول 12. يحتاج المختبِر أن يقرأ المصدر، ويعرف القيم الحدّية، ويتحقق من التتبّع، ويصلح الـ prompt. وإن احتوت المدخلات أيضًا على بيانات عملاء حقيقية، فعليه تنقيتها والتساؤل عن ملاءمة الأداة.</p></aside>

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">Know when to reject an output or ask for missing information, instead of passing it on because it looks tidy.</p><p class="gx-ar" lang="ar" dir="rtl">اعرف متى ترفض المخرَج أو تطلب المعلومات الناقصة، بدل تمريره لأنه يبدو مرتّبًا.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Skills span prompting and context management, domain and test-technique knowledge, evaluating model capabilities and testware, understanding risks, data sanitization and privacy-preserving prompting, and right-sizing models for cost and energy.</p><p class="gx-ar" lang="ar" dir="rtl">تشمل المهارات: كتابة الـ prompts وإدارة السياق، ومعرفة المجال وتقنيات الاختبار، وتقييم قدرات النماذج وأدوات الاختبار، وفهم المخاطر، وتنقية البيانات وكتابة prompts تحافظ على الخصوصية، واختيار حجم النموذج المناسب للكلفة والطاقة.</p></aside>

---
order: 4
slug: "1-2-2"
chapter: 1
group: "1.2"
section: "1.2.2"
title: "Testing and Quality Assurance (QA)"
titleAr: "الاختبار وضمان الجودة"
objectives: "FL-1.2.2 · K1"
minutes: 6
lo:
  FL-1.2.2: "Recall how testing relates to quality assurance."
loAr:
  FL-1.2.2: "تتذكّر العلاقة بين الاختبار وضمان الجودة."
takeaways:
  - "Testing and QA are not the same thing."
  - "Testing is a form of quality control (QC): product-oriented and corrective."
  - "QA is process-oriented and preventive: good processes lead to good products."
  - "Test results are used by both: testing uses them to fix defects, QA uses them to improve processes."
takeawaysAr:
  - "الاختبار وضمان الجودة ليسا الشيء نفسه."
  - "الاختبار شكل من أشكال ضبط الجودة (QC): موجّه نحو المنتج وتصحيحي."
  - "ضمان الجودة موجّه نحو العملية ووقائي: العمليات الجيدة تنتج منتجات جيدة."
  - "نتائج الاختبار يستخدمها الطرفان: الاختبار لإصلاح الـ defects، وضمان الجودة لتحسين العمليات."
terms:
  - en: "Quality Assurance"
    ar: "ضمان الجودة"
    def: "Activities focused on establishing and improving processes so that the products they produce are of good quality. Process-oriented and preventive."
    defAr: "أنشطة تركّز على وضع العمليات وتحسينها بحيث تكون المنتجات الناتجة عنها جيدة. موجّهة نحو العملية ووقائية."
    match: ["Quality Assurance", "QA"]
  - en: "Quality Control"
    ar: "ضبط الجودة"
    def: "Product-oriented, corrective activities that support achieving appropriate levels of quality. Testing is a major form of quality control."
    defAr: "أنشطة تصحيحية موجّهة نحو المنتج تدعم الوصول لمستوى الجودة المناسب. والاختبار شكل رئيسي من أشكاله."
    match: ["Quality Control", "QC"]
---
في سوق العمل يُستخدم مصطلح «QA» كثيرًا كاسم وظيفي للمختبر، فيظن البعض أن الاختبار وضمان الجودة شيء واحد. المنهج واضح هنا: **الاختبار وضمان الجودة (QA) ليسا الشيء نفسه.**

### الاختبار شكل من ضبط الجودة — Testing Is a Form of QC

**ضبط الجودة (Quality Control / QC)** نهج **موجّه نحو المنتج** و**تصحيحي**: يركّز على الأنشطة التي تساعد في الوصول لمستوى الجودة المناسب في المنتج نفسه. والاختبار هو الشكل الرئيسي لضبط الجودة، وإلى جانبه أساليب أخرى مثل الأساليب الرسمية (Formal Methods) كفحص النماذج وإثبات الصحة، والمحاكاة، والنماذج الأولية.

### ضمان الجودة موجّه نحو العملية — QA Is Process-Oriented

**ضمان الجودة (Quality Assurance / QA)** نهج **موجّه نحو العملية** و**وقائي**: يركّز على تطبيق العمليات وتحسينها. فكرته الأساسية أن **العملية الجيدة، إذا طُبّقت بشكل صحيح، تنتج منتجًا جيدًا.**

ضمان الجودة يشمل عمليات التطوير وعمليات الاختبار معًا، وهو **مسؤولية كل من في المشروع**، لا فريق واحد.

| | Testing (QC) | Quality Assurance |
| --- | --- | --- |
| Focus | المنتج | العملية |
| Approach | تصحيحي: يجد المشكلة بعد حدوثها | وقائي: يمنع المشكلة قبل حدوثها |
| Who | الفرق المسؤولة عن الاختبار أساسًا | كل من في المشروع |
| Example | تشغيل اختبارات على شاشة الدفع | فرض مراجعة الشيفرة قبل الدمج |

### نتائج الاختبار تخدم الاثنين — Test Results Serve Both

نتائج الاختبار يستخدمها الطرفان، لكن بطريقة مختلفة:

- **في الاختبار** تُستخدم لإصلاح الـ defects.
- **في ضمان الجودة** تُستخدم كتغذية راجعة عن مدى جودة أداء عمليات التطوير والاختبار.

مثلًا، إذا تكررت defects من النوع نفسه في كل إصدار، فالمطلوب ليس إصلاحها واحدًا واحدًا فقط، بل تحسين العملية التي تنتجها.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">QC asks "Is this product good enough?" QA asks "Is the way we work producing good products?" Testing belongs to the first question.</p><p class="gx-ar" lang="ar" dir="rtl">ضبط الجودة يسأل: «هل هذا المنتج جيد بما يكفي؟». وضمان الجودة يسأل: «هل طريقة عملنا تنتج منتجات جيدة؟». والاختبار ينتمي للسؤال الأول.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Testers keep finding missing input validation on new forms. Fixing each form is quality control. Adding a validation checklist to the definition of done, so the problem stops appearing, is quality assurance.</p><p class="gx-ar" lang="ar" dir="rtl">يجد المختبرون باستمرار نقصًا في التحقق من المدخلات في النماذج الجديدة. إصلاح كل نموذج على حدة ضبط جودة. أما إضافة قائمة تحقق خاصة بالمدخلات إلى «تعريف الإنجاز» حتى تتوقف المشكلة عن الظهور فهذا ضمان جودة.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember the pairs: testing/QC = product-oriented, corrective; QA = process-oriented, preventive. Exam options often swap one word to make a wrong answer.</p><p class="gx-ar" lang="ar" dir="rtl">احفظ الأزواج: الاختبار/ضبط الجودة = موجّه نحو المنتج، تصحيحي؛ ضمان الجودة = موجّه نحو العملية، وقائي. خيارات الامتحان كثيرًا ما تبدّل كلمة واحدة لتصنع إجابة خاطئة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating QA as the testers' job only. In the syllabus, QA applies to both development and testing processes and is the responsibility of everyone on the project.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار ضمان الجودة مسؤولية المختبرين فقط. في المنهج، ضمان الجودة يشمل عمليات التطوير والاختبار معًا، وهو مسؤولية كل من في المشروع.</p></aside>

---
order: 4
slug: "1-2-2"
chapter: 1
group: "1.2"
section: "1.2.2"
title: "Testing and Quality Assurance (QA)"
titleAr: "الاختبار وضمان الجودة"
objectives: "FL-1.2.2 · K1"
minutes: 7
lo:
  FL-1.2.2: "Recall how testing relates to quality assurance."
loAr:
  FL-1.2.2: "تتذكّر العلاقة بين الاختبار وضمان الجودة."
takeaways:
  - "Testing and QA are not the same thing."
  - "Testing is a form of quality control (QC): product-oriented and corrective."
  - "QA is process-oriented and preventive: good processes lead to good products."
  - "Test results are used by both: testing uses them to fix defects, QA uses them to improve processes."
  - "Besides testing, other forms of quality control include formal methods (model checking, proof of correctness), simulation and prototyping."
takeawaysAr:
  - "الاختبار وضمان الجودة ليسا الشيء نفسه."
  - "الاختبار شكل من أشكال ضبط الجودة (QC): موجّه نحو المنتج وتصحيحي."
  - "ضمان الجودة موجّه نحو العملية ووقائي: العمليات الجيدة تنتج منتجات جيدة."
  - "نتائج الاختبار يستخدمها الطرفان: الاختبار لإصلاح الـ defects، وضمان الجودة لتحسين العمليات."
  - "إلى جانب الاختبار، من أشكال ضبط الجودة: الأساليب الرسمية (فحص النماذج وإثبات الصحة) والمحاكاة والنماذج الأولية."
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
في سوق العمل يُستخدم مصطلح «QA» كثيرًا اسمًا وظيفيًا للمختبر، فيستخدم الناس كلمتي «الاختبار» و«ضمان الجودة» بالتبادل. لكن المنهج واضح: **الاختبار وضمان الجودة (QA) ليسا الشيء نفسه.** الفرق بينهما هو الفرق بين **فحص ما أنتجناه** و**تحسين الطريقة التي ننتج بها**.

### الاختبار شكل من ضبط الجودة — Testing Is a Form of QC

الاختبار نهج **موجّه نحو المنتج (product-oriented)** و**تصحيحي (corrective)**: يركّز على الأنشطة التي تدعم الوصول إلى **مستوى مناسب من الجودة** في المنتج نفسه. «موجّه نحو المنتج» لأنه ينظر إلى موضوع اختبار محدد، مثل شاشة الدفع في تطبيق التوصيل. و«تصحيحي» لأنه يكشف مشكلات موجودة فعلًا ليتم إصلاحها. ولاحظ كلمة «مناسب»: الهدف ليس منتجًا كاملًا بلا defects، بل جودة كافية لما يحتاجه أصحاب المصلحة.

والاختبار هو **الشكل الرئيسي لضبط الجودة (Quality Control / QC)**، لكنه ليس الوحيد. يذكر المنهج أشكالًا أخرى:

- **الأساليب الرسمية (Formal Methods):** مثل **فحص النماذج (model checking)** و**إثبات الصحة (proof of correctness)** رياضيًا.
- **المحاكاة (Simulation):** تشغيل نموذج للنظام، كمحاكاة ألف طلب في ساعة الذروة.
- **النماذج الأولية (Prototyping):** نموذج مبدئي يُعرض على المستخدمين لتقييم المنتج قبل بنائه كاملًا.

### ضمان الجودة موجّه نحو العملية — QA Is Process-Oriented

**ضمان الجودة (Quality Assurance / QA)** نهج **موجّه نحو العملية (process-oriented)** و**وقائي (preventive)**: يركّز على **تطبيق العمليات وتحسينها**. فكرته الأساسية أن **العملية الجيدة، إذا اتُّبعت بشكل صحيح، تنتج منتجًا جيدًا.** هو لا يسأل «هل في هذه الشاشة defect؟» بل «لماذا تخرج شاشاتنا بـ defects، وكيف نمنع ذلك؟». و«وقائي» لأنه يعمل قبل أن يولد الـ defect: معايير كتابة الشيفرة، وقوالب قصص المستخدم، وتدريب الفريق، كلها تقلل احتمال الخطأ من الأساس بدل انتظار اكتشافه.

وضمان الجودة يشمل **عمليات التطوير وعمليات الاختبار معًا**، وهو **مسؤولية كل من في المشروع**: المطوّر الذي يلتزم بمراجعة الشيفرة، ومالك المنتج الذي يكتب معايير قبول واضحة، والمختبر الذي يحسّن طريقة تصميم اختباراته.

| | Testing (QC) | Quality Assurance |
| --- | --- | --- |
| Focus | The product | The process |
| Approach | Corrective | Preventive |
| Who | Mainly those testing | Everyone on the project |
| Delivery-app example | Running tests on the checkout screen | Requiring code review before every merge |

### نتائج الاختبار تخدم الاثنين — Test Results Serve Both

نتائج الاختبار يستخدمها الطرفان بطريقتين مختلفتين:

- **في الاختبار** تُستخدم **لإصلاح الـ defects**.
- **في ضمان الجودة** تُستخدم **تغذيةً راجعة** عن مدى جودة أداء عمليات التطوير والاختبار.

مثال: في ثلاثة إصدارات متتالية ظهرت defects في عرض النصوص العربية من اليمين لليسار. إصلاح كل defect على حدة ضبط جودة. أما ملاحظة النمط وإضافة فحص الاتجاهين إلى «تعريف الإنجاز» فهي ضمان جودة.

### لماذا يهم التمييز؟ — Why the Distinction Matters

انتبه إلى أن **التوقيت لا يحدد النوع**. مراجعة قصة مستخدم في بداية الـSprint اختبار ساكن مبكر، لكنها ما زالت ضبط جودة لأنها تفحص **مُخرَج عمل محددًا** لتجد الـ defects فيه. أما قرار الفريق أن **كل** قصة تُراجع قبل دخولها الـSprint فهو ضمان جودة، لأنه يغيّر **العملية** نفسها.

والخلط بينهما مكلف عمليًا. المؤسسة التي تسمّي مختبريها «فريق QA» ثم تحمّلهم وحدهم مسؤولية الجودة، تنسى أن الـ defects تولد في عمليات التطوير والتخطيط أيضًا. المختبر يستطيع أن يجد الـ defects، لكنه لا يستطيع وحده أن يمنع ظهورها؛ هذا يحتاج مشاركة الفريق كله.

<aside class="gx-callout" data-kind="key"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Key idea</span><span class="gx-ar" lang="ar" dir="rtl">فكرة أساسية</span></p><p class="gx-en" lang="en" dir="ltr">QC asks "Is this product good enough?" QA asks "Is the way we work producing good products?" Testing belongs to the first question.</p><p class="gx-ar" lang="ar" dir="rtl">ضبط الجودة يسأل: «هل هذا المنتج جيد بما يكفي؟». وضمان الجودة يسأل: «هل طريقة عملنا تنتج منتجات جيدة؟». والاختبار ينتمي للسؤال الأول.</p></aside>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">Testers keep finding missing input validation on new forms. Fixing each form is quality control. Adding a validation checklist to the definition of done, so the problem stops appearing, is quality assurance.</p><p class="gx-ar" lang="ar" dir="rtl">يجد المختبرون باستمرار نقصًا في التحقق من المدخلات في النماذج الجديدة. إصلاح كل نموذج على حدة ضبط جودة. أما إضافة قائمة تحقق خاصة بالمدخلات إلى «تعريف الإنجاز» حتى تتوقف المشكلة عن الظهور فهذا ضمان جودة.</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Remember the pairs: testing/QC = product-oriented, corrective; QA = process-oriented, preventive. Exam options often swap one word to make a wrong answer.</p><p class="gx-ar" lang="ar" dir="rtl">احفظ الأزواج: الاختبار/ضبط الجودة = موجّه نحو المنتج، تصحيحي؛ ضمان الجودة = موجّه نحو العملية، وقائي. خيارات الامتحان كثيرًا ما تبدّل كلمة واحدة لتصنع إجابة خاطئة.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Treating QA as the testers' job only. In the syllabus, QA applies to both development and testing processes and is the responsibility of everyone on the project.</p><p class="gx-ar" lang="ar" dir="rtl">اعتبار ضمان الجودة مسؤولية المختبرين فقط. في المنهج، ضمان الجودة يشمل عمليات التطوير والاختبار معًا، وهو مسؤولية كل من في المشروع.</p></aside>

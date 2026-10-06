---
order: 8
slug: "2-2-2"
chapter: 2
group: "2.2"
section: "2.2.2"
title: "Test Types"
titleAr: "أنواع الاختبار"
objectives: "FL-2.2.2 · K2"
minutes: 8
lo:
  FL-2.2.2: "Tell the different test types apart."
loAr:
  FL-2.2.2: "تميّز بين أنواع الاختبار المختلفة."
takeaways:
  - "Four test types: functional, non-functional, black-box and white-box testing."
  - "Functional testing checks what the system does; non-functional testing checks how well it does it."
  - "ISO/IEC 25010 lists non-functional characteristics: performance efficiency, compatibility, usability, reliability, security, maintainability, portability and safety."
  - "Black-box testing is specification-based; white-box testing is structure-based."
  - "All four types can be applied at all test levels, with a different focus at each."
takeawaysAr:
  - "أربعة أنواع اختبار: الوظيفي، وغير الوظيفي، والصندوق الأسود، والصندوق الأبيض."
  - "الاختبار الوظيفي يفحص ماذا يفعل النظام؛ وغير الوظيفي يفحص مدى جودة أدائه لذلك."
  - "معيار ISO/IEC 25010 يذكر الخصائص غير الوظيفية: كفاءة الأداء، والتوافق، وسهولة الاستخدام، والموثوقية، والأمن، وقابلية الصيانة، وقابلية النقل، والسلامة."
  - "اختبار الصندوق الأسود مبني على المواصفات؛ واختبار الصندوق الأبيض مبني على البنية الداخلية."
  - "الأنواع الأربعة يمكن تطبيقها في كل مستويات الاختبار، بتركيز مختلف في كل مستوى."
terms:
  - en: "Test Type"
    ar: "نوع الاختبار"
    def: "A group of test activities related to specific quality characteristics."
    defAr: "مجموعة أنشطة اختبار مرتبطة بخصائص جودة محددة."
    match: ["Test Type", "test type", "test types"]
  - en: "Functional Testing"
    ar: "الاختبار الوظيفي"
    def: "Testing that evaluates the functions a component or system should perform: the 'what'."
    defAr: "اختبار يقيّم الوظائف التي يجب أن يؤديها المكوّن أو النظام: «ماذا يفعل»."
    match: ["Functional Testing", "functional testing"]
  - en: "Non-functional Testing"
    ar: "الاختبار غير الوظيفي"
    def: "Testing that evaluates attributes other than functional characteristics: 'how well' the system behaves."
    defAr: "اختبار يقيّم صفات غير الخصائص الوظيفية: «مدى جودة» سلوك النظام."
    match: ["Non-functional Testing", "non-functional testing"]
  - en: "Black-box Testing"
    ar: "اختبار الصندوق الأسود"
    def: "Specification-based testing that derives tests from documentation external to the test object."
    defAr: "اختبار مبني على المواصفات، يستخرج الاختبارات من وثائق خارجية عن موضوع الاختبار."
    match: ["Black-box Testing", "black-box testing", "black-box"]
  - en: "White-box Testing"
    ar: "اختبار الصندوق الأبيض"
    def: "Structure-based testing that derives tests from the internal structure or implementation of the system."
    defAr: "اختبار مبني على البنية، يستخرج الاختبارات من البنية الداخلية للنظام أو طريقة تنفيذه."
    match: ["White-box Testing", "white-box testing", "white-box"]
---
مستوى الاختبار يجيب «أين نختبر؟». أما **نوع الاختبار (Test Type)** فهو مجموعة أنشطة اختبار مرتبطة **بخصائص جودة محددة**، ويجيب «ماذا نختبر في النظام؟». ومعظم أنشطة الاختبار يمكن تنفيذها في كل مستوى.

### الاختبار الوظيفي — Functional Testing

يقيّم **الوظائف** التي يجب أن يؤديها المكوّن أو النظام، أي **«ماذا»** يجب أن يفعل موضوع الاختبار. هدفه الرئيسي فحص:

- **الاكتمال الوظيفي**: هل كل الوظائف المطلوبة موجودة؟
- **الصحة الوظيفية**: هل تعطي النتائج الصحيحة؟
- **الملاءمة الوظيفية**: هل تسهّل إنجاز المهام والأهداف المطلوبة؟

### الاختبار غير الوظيفي — Non-functional Testing

يقيّم صفات غير الخصائص الوظيفية، أي **«مدى جودة»** سلوك النظام. حسب معيار **ISO/IEC 25010**، الخصائص غير الوظيفية هي:

<figure class="gx-figure gx-spectrum" aria-label="Non-functional quality characteristics (ISO/IEC 25010)."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Performance efficiency</b><span>Time behaviour, resource use, capacity.</span></div><div class="gx-spectrum-item"><b>Compatibility</b><span>Co-existence and interoperability.</span></div><div class="gx-spectrum-item"><b>Interaction capability</b><span>Usability: how easy and pleasant it is to use.</span></div><div class="gx-spectrum-item"><b>Reliability</b><span>Maturity, availability, fault tolerance, recoverability.</span></div><div class="gx-spectrum-item"><b>Security</b><span>Confidentiality, integrity, authenticity and more.</span></div><div class="gx-spectrum-item"><b>Maintainability</b><span>Modularity, analysability, modifiability, testability.</span></div><div class="gx-spectrum-item"><b>Flexibility</b><span>Portability: adaptability, installability, replaceability.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Safety</b><span>Avoiding states that endanger people, property or the environment.</span></div></div><figcaption>Non-functional quality characteristics (ISO/IEC 25010).</figcaption></figure>

ملاحظات مهمة:

- قد يبدأ الاختبار غير الوظيفي **مبكرًا** في دورة الحياة، مثلًا ضمن المراجعات واختبار المكوّنات أو اختبار النظام.
- كثير من الاختبارات غير الوظيفية **مشتقة من اختبارات وظيفية**، لأنها تستخدم الاختبارات الوظيفية نفسها لكنها تتحقق من أن قيدًا غير وظيفي تحقق أثناء تنفيذ الوظيفة، مثل التحقق من أن وظيفة تُنفَّذ خلال وقت محدد.
- **اكتشاف الـ defects غير الوظيفية متأخرًا قد يهدد نجاح المشروع بشكل خطير.**
- قد يحتاج الاختبار غير الوظيفي **بيئة اختبار خاصة جدًا**، مثل مختبر سهولة الاستخدام.

### اختبار الصندوق الأسود — Black-box Testing

مبني على **المواصفات**: يستخرج الاختبارات من وثائق **خارجية عن موضوع الاختبار**. هدفه الرئيسي فحص سلوك النظام مقابل مواصفاته.

### اختبار الصندوق الأبيض — White-box Testing

مبني على **البنية**: يستخرج الاختبارات من **طريقة تنفيذ النظام أو بنيته الداخلية**، مثل الشيفرة والبنية المعمارية ومسارات العمل وتدفق البيانات. هدفه الرئيسي **تغطية البنية الداخلية** حتى مستوى مقبول.

### الأنواع والمستويات معًا — Types Across Levels

الأنواع الأربعة **يمكن تطبيقها في كل مستويات الاختبار**، لكن التركيز يختلف في كل مستوى. وتُستخدم تقنيات اختبار مختلفة لاستخراج شروط الاختبار وحالاته لكل نوع (الفصل 4).

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">At component level, a developer checks that the price function returns the right total (functional, black-box) and that every branch of the discount logic runs (white-box). At system level, the tester checks checkout end to end (functional) and that it responds within two seconds for 500 users (non-functional: performance efficiency).</p><p class="gx-ar" lang="ar" dir="rtl">على مستوى المكوّنات، يتحقق المطوّر من أن دالة السعر تعيد المجموع الصحيح (وظيفي، صندوق أسود) ومن أن كل فرع في منطق الخصم يُنفَّذ (صندوق أبيض). وعلى مستوى النظام، يتحقق المختبر من عملية الدفع من البداية للنهاية (وظيفي) ومن أنها تستجيب خلال ثانيتين مع 500 مستخدم (غير وظيفي: كفاءة الأداء).</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Watch for "how well" wording: response time, ease of use, recovery after a crash, protection of data → non-functional. "Calculates", "displays", "saves" → functional.</p><p class="gx-ar" lang="ar" dir="rtl">انتبه لصياغة «مدى الجودة»: زمن الاستجابة، وسهولة الاستخدام، والتعافي بعد الانهيار، وحماية البيانات ← غير وظيفي. «يحسب»، «يعرض»، «يحفظ» ← وظيفي.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking non-functional testing only happens at the end, in system testing. It can start early, in reviews and component testing, and finding non-functional defects late is a serious risk.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار غير الوظيفي يحدث في النهاية فقط ضمن اختبار النظام. يمكن أن يبدأ مبكرًا في المراجعات واختبار المكوّنات، واكتشاف الـ defects غير الوظيفية متأخرًا خطر جدّي.</p></aside>

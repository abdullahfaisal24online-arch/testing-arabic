---
order: 8
slug: "2-2-2"
chapter: 2
group: "2.2"
section: "2.2.2"
title: "Test Types"
titleAr: "أنواع الاختبار"
objectives: "FL-2.2.2 · K2"
minutes: 15
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
  - "Many non-functional tests reuse functional tests and check a non-functional constraint while the function runs; late discovery of non-functional defects can seriously threaten a project."
takeawaysAr:
  - "أربعة أنواع اختبار: الوظيفي، وغير الوظيفي، والصندوق الأسود، والصندوق الأبيض."
  - "الاختبار الوظيفي يفحص ماذا يفعل النظام؛ وغير الوظيفي يفحص مدى جودة أدائه لذلك."
  - "معيار ISO/IEC 25010 يذكر الخصائص غير الوظيفية: كفاءة الأداء، والتوافق، وسهولة الاستخدام، والموثوقية، والأمن، وقابلية الصيانة، وقابلية النقل، والسلامة."
  - "اختبار الصندوق الأسود مبني على المواصفات؛ واختبار الصندوق الأبيض مبني على البنية الداخلية."
  - "الأنواع الأربعة يمكن تطبيقها في كل مستويات الاختبار، بتركيز مختلف في كل مستوى."
  - "كثير من الاختبارات غير الوظيفية يعيد استخدام الاختبارات الوظيفية ويتحقق من قيد غير وظيفي أثناء تنفيذ الوظيفة؛ واكتشاف الـ defects غير الوظيفية متأخرًا قد يهدد نجاح المشروع بشكل خطير."
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
مستوى الاختبار يجيب عن سؤال **«متى وعلى أي قطعة نختبر؟»**. أما **نوع الاختبار (test type)** فهو **مجموعة أنشطة اختبار مرتبطة بخصائص جودة محددة**، ويجيب عن سؤال **«ماذا نفحص، أو من أين نستخرج الاختبارات؟»**. توجد أنواع اختبار كثيرة، لكن المنهج يتناول أربعة منها: **الوظيفي، وغير الوظيفي، والصندوق الأسود، والصندوق الأبيض**. الأولان يتعلقان بـ **ماذا** نقيّم في النظام، والأخيران بـ **مصدر** الاختبارات.

### الاختبار الوظيفي — Functional Testing

**الاختبار الوظيفي (functional testing)** **يقيّم الوظائف التي يجب أن يؤديها المكوّن أو النظام**. الوظائف هي **«ماذا»** يجب أن يفعل موضوع الاختبار. وهدفه الرئيسي فحص ثلاث خصائص:

- **الاكتمال الوظيفي (functional completeness)**: هل كل الوظائف المطلوبة موجودة؟ هل يمكن الدفع بالطرق الثلاث: نقدًا وبطاقة ومحفظة؟
- **الصحة الوظيفية (functional correctness)**: هل تعطي الوظائف نتائج صحيحة؟ هل تُحسب رسوم 1.50 للطلب بقيمة 19.99؟
- **الملاءمة الوظيفية (functional appropriateness)**: هل تسهّل الوظائف إنجاز المهام والأهداف المقصودة؟ هل يستطيع الزبون إعادة طلب وجبته المعتادة دون أن يبحث عنها من جديد؟

### الاختبار غير الوظيفي — Non-functional Testing

**الاختبار غير الوظيفي (non-functional testing)** **يقيّم صفات غير الخصائص الوظيفية**، أي **«مدى جودة سلوك النظام»**. الوظيفة قد تعمل صحيحة، لكن ببطء، أو بشكل غير آمن، أو على جهاز واحد فقط. وهدفه الرئيسي فحص **خصائص الجودة غير الوظيفية**، التي يصنّفها معيار **ISO/IEC 25010** كما يلي:

<figure class="gx-figure gx-spectrum" aria-label="Non-functional quality characteristics (ISO/IEC 25010)."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Performance efficiency</b><span>Time behaviour, resource use, capacity.</span></div><div class="gx-spectrum-item"><b>Compatibility</b><span>Co-existence and interoperability.</span></div><div class="gx-spectrum-item"><b>Interaction capability</b><span>Usability: how easy and pleasant it is to use.</span></div><div class="gx-spectrum-item"><b>Reliability</b><span>Maturity, availability, fault tolerance, recoverability.</span></div><div class="gx-spectrum-item"><b>Security</b><span>Confidentiality, integrity, authenticity and more.</span></div><div class="gx-spectrum-item"><b>Maintainability</b><span>Modularity, analysability, modifiability, testability.</span></div><div class="gx-spectrum-item"><b>Flexibility</b><span>Portability: adaptability, installability, replaceability.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Safety</b><span>Avoiding states that endanger people, property or the environment.</span></div></div><figcaption>Non-functional quality characteristics (ISO/IEC 25010).</figcaption></figure>

| Characteristic | Question it answers | Delivery app example |
| --- | --- | --- |
| Performance efficiency | Fast enough, with acceptable resource use and capacity? | Checkout responds within 2 s with 500 users at lunch time |
| Compatibility | Works with other systems and co-exists with other apps? | Order data exchanged correctly with the restaurant dashboard; app runs alongside the maps app |
| Usability (interaction capability) | Easy to learn and use, accessible? | A new user places a first order in under 3 minutes, in Arabic or English |
| Reliability | Available, fault tolerant, recovers? | If the payment gateway times out, the order is not lost and the user can retry |
| Security | Data protected, users authenticated? | One customer cannot see another customer's orders or saved card |
| Maintainability | Easy to analyse, modify and test? | Changing the delivery fee needs a change in one place only |
| Portability (flexibility) | Adaptable, installable, replaceable? | The app installs and works on iOS and Android, and on new OS versions |
| Safety | Avoids danger to people, property or the environment? | The driver app does not require typing while the vehicle is moving |

وبكلمات بسيطة:

- **كفاءة الأداء (performance efficiency)**: السرعة واستهلاك الموارد والسعة تحت الحمل المتوقع.
- **التوافق (compatibility)**: قدرة النظام على تبادل المعلومات مع أنظمة أخرى، والعمل بجانب تطبيقات أخرى دون تعارض.
- **سهولة الاستخدام (usability)**: سهولة التعلم والاستخدام، وإمكانية الوصول لذوي الاحتياجات الخاصة.
- **الموثوقية (reliability)**: أن يعمل النظام عند الحاجة، ويتحمل الأعطال، ويتعافى منها.
- **الأمن (security)**: حماية البيانات من الوصول غير المصرّح به، والتأكد من هوية المستخدم.
- **قابلية الصيانة (maintainability)**: سهولة فهم النظام وتعديله واختباره دون كسر أجزاء أخرى.
- **قابلية النقل (portability)**: سهولة تثبيته وتشغيله على منصات وبيئات مختلفة.
- **السلامة (safety)**: تجنّب الحالات التي تعرّض الناس أو الممتلكات أو البيئة للخطر.

انتبه للاسمين البديلين في المنهج: **سهولة الاستخدام (usability)** تُعرف أيضًا بـ **قدرة التفاعل (interaction capability)**، و**قابلية النقل (portability)** تُعرف أيضًا بـ **المرونة (flexibility)**. والشكل أعلاه يستخدم الاسمين الجديدين.

ويضيف المنهج أربع ملاحظات مهمة عن الاختبار غير الوظيفي:

1. **من المناسب أحيانًا أن يبدأ مبكرًا** في دورة الحياة، مثلًا **ضمن المراجعات** أو **اختبار المكوّنات**. مراجعة تصميم الشاشة قد تكشف مشكلة سهولة استخدام قبل برمجتها.
2. **كثير من الاختبارات غير الوظيفية مشتق من الاختبارات الوظيفية**: تستخدم الاختبارات الوظيفية نفسها، لكنها تتحقق من أن **قيدًا غير وظيفي** تحقق أثناء تنفيذ الوظيفة. مثل التحقق من أن **وظيفة تُنفَّذ خلال زمن محدد**، أو أن **وظيفة يمكن نقلها إلى منصة جديدة**. اختبار «إتمام الطلب» الوظيفي نفسه يصبح اختبار أداء إذا قسنا زمنه، واختبار قابلية نقل إذا شغّلناه على إصدار Android الجديد.
3. **اكتشاف الـ defects غير الوظيفية متأخرًا قد يشكّل تهديدًا خطيرًا لنجاح المشروع**، لأن إصلاحها كثيرًا ما يتطلب تغييرًا في البنية المعمارية، لا سطرًا واحدًا. تطبيق لا يتحمل ضغط وقت الغداء لا يُصلح في يوم الإطلاق.
4. **يحتاج أحيانًا بيئة اختبار خاصة جدًا**، مثل **مختبر سهولة الاستخدام (usability lab)**، أو بيئة تحاكي آلاف المستخدمين لاختبار الأداء.

### اختبار الصندوق الأسود — Black-box Testing

**اختبار الصندوق الأسود (black-box testing)** (القسم 4.2) **مبني على المواصفات (specification-based)**، ويستخرج الاختبارات من **وثائق لا علاقة لها بالبنية الداخلية لموضوع الاختبار**: المتطلبات، وقصص المستخدم، ومعايير القبول. المختبر لا يحتاج أن يرى الشيفرة. و**هدفه الرئيسي فحص سلوك النظام مقابل مواصفاته**. مثال: من قاعدة «من 1 إلى 20 وجبة» نستخرج اختبارات بالقيم 0 و1 و20 و21.

### اختبار الصندوق الأبيض — White-box Testing

**اختبار الصندوق الأبيض (white-box testing)** (القسم 4.3) **مبني على البنية (structure-based)**، ويستخرج الاختبارات من **تنفيذ النظام أو بنيته الداخلية**، مثل **الشيفرة**، و**البنية المعمارية**، و**مسارات العمل (work flows)**، و**تدفق البيانات (data flows)**. و**هدفه الرئيسي تغطية البنية الأساسية بالاختبارات إلى مستوى مقبول**. مثال: في دالة الكوبون فرعان، نسبة مئوية ومبلغ ثابت، فنصمّم اختبارات تجعل كل فرع يُنفَّذ مرة على الأقل.

### الأنواع عبر المستويات — Types Across Levels

**الأنواع الأربعة يمكن تطبيقها في كل مستويات الاختبار، لكن التركيز يختلف في كل مستوى**. و**يمكن استخدام تقنيات اختبار مختلفة لاستخراج شروط الاختبار وحالاته** لكل هذه الأنواع.

| Level | Functional | Non-functional | Black-box | White-box |
| --- | --- | --- | --- | --- |
| Component | Fee function returns correct fee | Fee function runs in under 5 ms | Tests from the fee rule | Every branch of the coupon code |
| System | Full order from cart to Delivered | Checkout under load | Tests from user stories | Every step of the order workflow |
| Acceptance | Restaurant can accept and prepare orders | Staff find the dashboard easy | Tests from acceptance criteria | Coverage of business process flows |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">One feature, four types: for "apply a coupon", the tester checks that 10% is deducted from 30.00 (functional, black-box), that both the percentage and fixed-amount branches are executed (white-box), and that applying the coupon still takes under one second for 500 users at lunch time (non-functional: performance efficiency).</p><p class="gx-ar" lang="ar" dir="rtl">ميزة واحدة وأربعة أنواع: في «تطبيق كوبون» يتحقق المختبر من خصم 10% من 30.00 (وظيفي، صندوق أسود)، ومن تنفيذ فرعي النسبة المئوية والمبلغ الثابت (صندوق أبيض)، ومن أن تطبيق الكوبون ما زال يستغرق أقل من ثانية مع 500 مستخدم وقت الغداء (غير وظيفي: كفاءة الأداء).</p></aside>

### لا تخلط بين — Don't Confuse

| | Test level | Test type |
| --- | --- | --- |
| Answers | Which stage / which piece? | Which quality characteristic or test source? |
| Examples | Component, system, acceptance | Functional, non-functional, black-box, white-box |
| Relation | Each level can use all four types | Each type can appear at every level |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">Watch for "how well" wording: response time, ease of use, recovery after a crash, protection of data → non-functional. "Calculates", "displays", "saves" → functional.</p><p class="gx-ar" lang="ar" dir="rtl">انتبه لصياغة «مدى الجودة»: زمن الاستجابة، وسهولة الاستخدام، والتعافي بعد الانهيار، وحماية البيانات ← غير وظيفي. «يحسب»، «يعرض»، «يحفظ» ← وظيفي.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking non-functional testing only happens at the end, in system testing. It can start early, in reviews and component testing, and finding non-functional defects late is a serious risk.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الاختبار غير الوظيفي يحدث في النهاية فقط ضمن اختبار النظام. يمكن أن يبدأ مبكرًا في المراجعات واختبار المكوّنات، واكتشاف الـ defects غير الوظيفية متأخرًا خطر جدّي.</p></aside>

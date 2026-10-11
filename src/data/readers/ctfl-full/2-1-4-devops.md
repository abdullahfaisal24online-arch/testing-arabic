---
order: 4
slug: "2-1-4"
chapter: 2
group: "2.1"
section: "2.1.4"
title: "DevOps and Testing"
titleAr: "DevOps والاختبار"
objectives: "FL-2.1.4 · K2"
minutes: 12
lo:
  FL-2.1.4: "Summarise how DevOps might affect testing."
loAr:
  FL-2.1.4: "تلخّص كيف قد يؤثر DevOps على الاختبار."
takeaways:
  - "DevOps creates synergy between development (including testing) and operations to reach shared goals."
  - "It relies on a cultural shift, team autonomy, fast feedback, integrated toolchains, and practices such as CI and CD."
  - "Benefits for testing: fast feedback, shift left through CI, stable test environments, visibility of non-functional quality, less repetitive manual testing and lower regression risk."
  - "Risks: the delivery pipeline must be defined and set up, CI/CD tools introduced and maintained, and test automation needs resources and is hard to build and maintain."
  - "Manual testing, especially from the user's perspective, is still needed."
takeawaysAr:
  - "DevOps يصنع تآزرًا بين التطوير (ومنه الاختبار) والعمليات لتحقيق أهداف مشتركة."
  - "يعتمد على تغيير ثقافي، واستقلالية الفرق، وتغذية راجعة سريعة، وأدوات متكاملة، وممارسات مثل CI وCD."
  - "فوائده للاختبار: تغذية راجعة سريعة، ونقل لليسار عبر CI، وبيئات اختبار مستقرة، ورؤية للجودة غير الوظيفية، واختبار يدوي متكرر أقل، وخطر انحدار أقل."
  - "مخاطره: يجب تعريف خط التسليم وإعداده، وإدخال أدوات CI/CD وصيانتها، والأتمتة تحتاج موارد ويصعب بناؤها وصيانتها."
  - "الاختبار اليدوي، خاصة من منظور المستخدم، يبقى ضروريًا."
terms:
  - en: "DevOps"
    ar: "DevOps"
    def: "An organisational approach that creates synergy between development (including testing) and operations to achieve common goals."
    defAr: "نهج تنظيمي يصنع تآزرًا بين التطوير (ومنه الاختبار) والعمليات لتحقيق أهداف مشتركة."
  - en: "Continuous Integration"
    ar: "التكامل المستمر"
    def: "A practice in which code changes are merged and built frequently, with automated tests run on each change."
    defAr: "ممارسة تُدمج فيها تغييرات الشيفرة وتُبنى بشكل متكرر، مع تشغيل اختبارات مؤتمتة لكل تغيير."
    match: ["Continuous Integration", "CI"]
  - en: "Continuous Delivery"
    ar: "التسليم المستمر"
    def: "A practice in which software is kept in a releasable state and delivered through an automated pipeline."
    defAr: "ممارسة تبقى فيها البرمجية جاهزة للإطلاق، وتُسلَّم عبر خط تسليم مؤتمت."
    match: ["Continuous Delivery", "CD"]
  - en: "DevOps Delivery Pipeline"
    ar: "خط تسليم DevOps"
    def: "An automated sequence of steps that takes a code change through build, testing and release."
    defAr: "سلسلة خطوات مؤتمتة تنقل تغيير الشيفرة عبر البناء والاختبار والإطلاق."
    match: ["DevOps delivery pipeline", "delivery pipeline"]
---
في كثير من المؤسسات التقليدية يعمل فريق التطوير على كتابة الشيفرة واختبارها، ثم «يرميها فوق الجدار» إلى فريق العمليات (Operations) الذي يتولى النشر والتشغيل. لكل فريق أهدافه: التطوير يريد إطلاق ميزات بسرعة، والعمليات تريد استقرارًا وأقل قدر من التغيير. **DevOps** جاء ليهدم هذا الجدار.

### ما DevOps؟ — What DevOps Is

**DevOps** **نهج تنظيمي** يهدف إلى إيجاد **تآزر (synergy)** بجعل التطوير (**ويشمل الاختبار**) والعمليات يعملان معًا لتحقيق **مجموعة أهداف مشتركة**. لاحظ ثلاث نقاط في هذا التعريف:

- إنه **نهج تنظيمي**، لا أداة تُشترى. لذلك يتطلب **تغييرًا ثقافيًا** داخل المؤسسة لسدّ الفجوة بين التطوير والعمليات.
- يتعامل مع وظائف الفريقين **بقيمة متساوية**؛ فلا يُنظر إلى العمليات على أنها «خدمة لاحقة».
- الاختبار جزء من «التطوير» في هذا التعريف، أي أن المختبر داخل الصورة لا خارجها.

ويعزز DevOps أربعة أشياء: **استقلالية الفرق**، و**التغذية الراجعة السريعة**، و**سلاسل الأدوات المتكاملة**، و**الممارسات التقنية** مثل **التكامل المستمر (CI)** و**التسليم المستمر (CD)**. هذا كله يمكّن الفرق من **بناء شيفرة عالية الجودة واختبارها وإطلاقها بشكل أسرع** عبر **خط تسليم DevOps (DevOps delivery pipeline)**.

<figure class="gx-figure" aria-label="A simplified DevOps delivery pipeline with automated testing at each step."><div class="gx-flow-row"><span class="gx-flow-node">Commit</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Build + static analysis</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Component tests</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node">Integration tests</span><span class="gx-flow-arrow" aria-hidden="true">→</span><span class="gx-flow-node gx-flow-node--accent">Deploy</span></div><figcaption>A simplified DevOps delivery pipeline with automated testing at each step.</figcaption></figure>

**التكامل المستمر (Continuous Integration / CI)** يعني أن المطوّرين يدمجون تغييراتهم في المستودع المشترك مرات كثيرة يوميًا، وكل دمج يُبنى ويُختبر آليًا. أما **التسليم المستمر (Continuous Delivery / CD)** فيذهب أبعد: تبقى البرمجية دائمًا في حالة جاهزة للإطلاق، وتمر عبر خط مؤتمت حتى بيئات أقرب إلى الإنتاج. والفكرة المشتركة: كل تغيير صغير يُفحص فورًا، بدل تجميع مئات التغييرات واختبارها دفعة واحدة في النهاية.

في تطبيق التوصيل، يعمل خط CI مع كل Commit: يبني التطبيق، ويشغّل التحليل الساكن، ثم اختبارات المكوّنات، ثم اختبارات التكامل للواجهات البرمجية، وإذا نجح كل شيء تُنشر النسخة تلقائيًا على بيئة اختبار.

### الفوائد من منظور الاختبار — Benefits for Testing

يذكر المنهج ست فوائد:

1. **تغذية راجعة سريعة عن جودة الشيفرة**، وعن ما إذا كانت التغييرات **تؤثر سلبًا على الشيفرة الموجودة**. المطوّر الذي كسر حساب رسوم التوصيل يعرف خلال دقائق، لا بعد أسبوعين في جولة اختبار يدوية.
2. **CI يعزز النقل لليسار** في الاختبار، لأنه **يشجّع المطوّرين على تسليم شيفرة عالية الجودة مصحوبة باختبارات مكوّنات وتحليل ساكن**. حين يرفض الخط أي Commit بلا اختبارات، يصبح الاختبار المبكر عادة.
3. **العمليات المؤتمتة مثل CI/CD تسهّل إنشاء بيئات اختبار مستقرة**. البيئة التي تُبنى آليًا من إعدادات محفوظة تكون متطابقة في كل مرة، فلا يضيع وقت المختبر في defects سببها بيئة مُعدّة يدويًا بشكل خاطئ.
4. **تزداد الرؤية لخصائص الجودة غير الوظيفية**، مثل **كفاءة الأداء** و**الموثوقية**. إذا قاس الخط زمن استجابة واجهة «تأكيد الطلب» مع كل نسخة، يظهر أي تراجع في الأداء فورًا بدل أن يُكتشف عند الإطلاق.
5. **الأتمتة عبر خط التسليم تقلل الحاجة إلى الاختبار اليدوي المتكرر**، فيتفرغ المختبرون لما يحتاج عقلًا بشريًا.
6. **يقل خطر الانحدار** بفضل **حجم اختبارات الانحدار المؤتمتة واتساع نطاقها**.

### المخاطر والتحديات — Risks and Challenges

DevOps **ليس بلا مخاطر وتحديات**، ومنها:

- **يجب تعريف خط تسليم DevOps وإنشاؤه**: تصميم الخطوات، والبيئات، وشروط النجاح والفشل، وهذا عمل كبير قبل جني أي فائدة.
- **يجب إدخال أدوات CI/CD وصيانتها**: الأدوات نفسها تحتاج تحديثات وإعدادات ومن يعتني بها.
- **أتمتة الاختبار تتطلب موارد إضافية، وقد يصعب إنشاؤها وصيانتها**: اختبار مؤتمت هشّ يفشل بلا سبب حقيقي يفقد الفريق ثقته بالخط كله.

### والاختبار اليدوي؟ — Manual Testing Still Matters

رغم أن DevOps يأتي بمستوى عالٍ من الاختبار المؤتمت، **سيبقى الاختبار اليدوي ضروريًا، وخاصة من منظور المستخدم**. الأتمتة تتحقق مما طلبنا منها فحصه فقط؛ أما أن تكون رسالة الخطأ بالعربية مفهومة، أو أن يكون تتبع السائق على الخريطة مريحًا للعين، فيحتاج إنسانًا يجرّب.

### كيف يتغير عمل المختبر؟ — How the Tester's Work Changes

إذا جمعنا الفوائد والمخاطر معًا، نرى أن DevOps يغيّر **أين** يقضي المختبر وقته أكثر مما يقلل الحاجة إليه. جزء من وقته يذهب إلى بناء الاختبارات المؤتمتة في الخط وصيانتها، وإلى قراءة نتائجها وتحليل الإخفاقات بسرعة، وإلى التعاون مع فريق العمليات في مراقبة سلوك النظام بعد الإطلاق. والجزء الآخر يذهب إلى الاختبار اليدوي الاستكشافي من منظور المستخدم، حيث لا تصل الأتمتة. لذلك يحتاج المختبر في بيئة DevOps مهارات تقنية أكثر، لكن خبرته في اختيار ما يستحق الاختبار تبقى هي الأساس.

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">In the delivery app, every commit runs static analysis and about 1,200 component tests in eight minutes, then API integration tests. A developer who breaks the free-delivery rule sees a red build before lunch. The two testers no longer repeat the same login and checkout checks by hand; they spend that time exploring the new driver-tracking screen on iOS and Android.</p><p class="gx-ar" lang="ar" dir="rtl">في تطبيق التوصيل، يشغّل كل Commit تحليلًا ساكنًا ونحو 1200 اختبار مكوّنات خلال ثماني دقائق، ثم اختبارات تكامل الواجهات البرمجية. المطوّر الذي يكسر قاعدة التوصيل المجاني يرى البناء أحمر قبل الغداء. ولم يعد المختبران يكرران فحوص تسجيل الدخول والدفع نفسها يدويًا؛ بل يستغلان ذلك الوقت في استكشاف شاشة تتبع السائق الجديدة على iOS وAndroid.</p></aside>

### لا تخلط بين — Don't Confuse

| Statement | Benefit or risk? |
| --- | --- |
| Fast feedback on code quality | Benefit |
| Stable test environments through CI/CD | Benefit |
| Better visibility of performance and reliability | Benefit |
| Less repetitive manual testing | Benefit |
| The pipeline must be defined and established | Risk / challenge |
| CI/CD tools must be introduced and maintained | Risk / challenge |
| Test automation needs extra resources and maintenance | Risk / challenge |

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: be ready to sort statements into "benefit" or "risk". Fast feedback, stable environments and lower regression risk are benefits. Setting up the pipeline, maintaining CI/CD tools and the cost of automation are risks.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: كن جاهزًا لتصنيف العبارات إلى «فائدة» أو «خطر». التغذية الراجعة السريعة، والبيئات المستقرة، وانخفاض خطر الانحدار فوائد. إعداد خط التسليم، وصيانة أدوات CI/CD، وتكلفة الأتمتة مخاطر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Concluding that DevOps removes manual testing. The syllabus explicitly says manual testing, especially from the user's perspective, is still needed.</p><p class="gx-ar" lang="ar" dir="rtl">الاستنتاج بأن DevOps يلغي الاختبار اليدوي. المنهج يقول صراحة إن الاختبار اليدوي، خاصة من منظور المستخدم، يبقى ضروريًا.</p></aside>

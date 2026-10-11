---
order: 1
slug: "6-1"
chapter: 6
section: "6.1"
title: "Tool Support for Testing"
titleAr: "دعم الأدوات للاختبار"
objectives: "FL-6.1.1 · K2"
minutes: 11
lo:
  FL-6.1.1: "Explain how different types of test tools support testing."
loAr:
  FL-6.1.1: "تشرح كيف تدعم أنواع أدوات الاختبار المختلفة الاختبار."
takeaways:
  - "Test tools support and facilitate many test activities."
  - "Types: test management, static testing, test design and implementation, test execution and coverage, non-functional testing, DevOps, collaboration, and scalability and deployment standardisation tools."
  - "Any tool that helps testing is a test tool in that context; even a spreadsheet."
  - "The syllabus list is examples, not a closed list; what matters is which test activity a tool supports."
takeawaysAr:
  - "أدوات الاختبار تدعم أنشطة اختبار كثيرة وتسهّلها."
  - "أنواعها: إدارة الاختبار، والاختبار الساكن، وتصميم الاختبار وتجهيزه، وتنفيذ الاختبار والتغطية، والاختبار غير الوظيفي، وDevOps، والتعاون، والتوسّع وتوحيد النشر."
  - "أي أداة تساعد في الاختبار هي أداة اختبار في ذلك السياق؛ حتى جدول البيانات."
  - "قائمة المنهج أمثلة لا قائمة مغلقة؛ المهم هو نشاط الاختبار الذي تدعمه الأداة."
terms:
  - en: "Test Management Tool"
    ar: "أداة إدارة الاختبار"
    def: "A tool that supports the management of the test process and of test work products, requirements, defects and reporting."
    defAr: "أداة تدعم إدارة عملية الاختبار ومخرجاته، والمتطلبات، والـ defects، والتقارير."
  - en: "Test Automation"
    ar: "أتمتة الاختبار"
    def: "The use of software to perform or support test activities, such as test execution and comparing actual with expected results."
    defAr: "استخدام البرمجيات لتنفيذ أنشطة الاختبار أو دعمها، مثل تنفيذ الاختبارات ومقارنة النتائج الفعلية بالمتوقعة."
    match: ["Test Automation", "test automation"]
---
فريق تطبيق التوصيل فيه مختبران اثنان فقط، والتطبيق يعمل على iOS وAndroid بلغتين، ويتكامل مع بوابة دفع وخدمة خرائط، ويُبنى مع كل commit. لا يمكن لشخصين أن يختبرا كل هذا يدويًا في كل sprint. هنا يأتي دور الأدوات: **أدوات الاختبار تدعم أنشطة اختبار كثيرة وتسهّلها (support and facilitate)**. والكلمة المهمة «تدعم»: الأداة لا تحل محل المختبر، بل تأخذ عنه العمل المتكرر أو الصعب أو المستحيل يدويًا، ليركّز هو على التفكير.

يعرض المنهج الأنواع التالية **كأمثلة، لا كقائمة مغلقة** («include, but are not limited to»). والطريقة الصحيحة لفهمها، ولحل أسئلة K2، أن تسأل عن كل أداة: **أي نشاط اختبار تدعم؟**

| Tool type | What it supports | Delivery-app example |
| --- | --- | --- |
| Test management | Managing the SDLC, requirements, tests, defects, configuration | Linking each story to its tests and defects |
| Static testing | Reviews and static analysis | Code analyser on every commit |
| Test design and implementation | Generating test cases, test data, test procedures | Generating 500 test orders with varied totals |
| Test execution and coverage | Automated test execution, coverage measurement | Running API tests and measuring branch coverage |
| Non-functional testing | Non-functional tests hard or impossible to do manually | Simulating 1,000 users ordering at lunchtime |
| DevOps | Delivery pipeline, workflow tracking, automated builds, CI/CD | Pipeline that builds and tests every commit |
| Collaboration | Communication | Team channel with failure alerts |
| Scalability and deployment standardization | e.g. virtual machines, containerization | Identical containerised test environments |

### أدوات إدارة الاختبار — Test Management Tools

**تزيد كفاءة عملية الاختبار** بتسهيل إدارة **دورة التطوير، والمتطلبات، والاختبارات، والـ defects، والإعدادات (configuration)**. فائدتها الكبرى **التتبّع (traceability)** بين المتطلبات والاختبارات والـ defects، وما يتيحه ذلك من تقارير عن التقدّم: حين يسأل مالك المنتج «هل اختُبرت قصة الكوبونات؟ وما الـ defects المفتوحة عليها؟»، يجد الجواب في مكان واحد بدل البحث في رسائل متفرقة.

### أدوات الاختبار الساكن — Static Testing Tools

**تدعم المختبر في إجراء المراجعات والتحليل الساكن**: أدوات لإدارة تعليقات المراجعة على المستندات والـ Pull Requests، وأدوات تحليل تفحص الشيفرة دون تشغيلها بحثًا عن متغيرات غير معرّفة أو شيفرة مكررة أو ثغرات أمنية (الفصل 3).

### أدوات تصميم الاختبار وتجهيزه — Test Design and Implementation Tools

**تسهّل توليد حالات الاختبار، وبيانات الاختبار، وإجراءات الاختبار.** مثلًا، أداة تولّد طلبات تجريبية بقيم حول حد التوصيل المجاني 20.00 دينار وبطرق دفع مختلفة، بدل أن يكتبها المختبر واحدًا واحدًا.

### أدوات تنفيذ الاختبار والتغطية — Test Execution and Coverage Tools

**تسهّل التنفيذ المؤتمت للاختبارات وقياس التغطية.** مجموعة اختبارات الانحدار لواجهات الطلبات تعمل آليًا، وتُظهر الأداة نسبة الفروع التي غطّتها في منطق حساب الرسوم، فيعرف الفريق أي أجزاء الشيفرة لم يمر عليها أي اختبار بعد.

### أدوات الاختبار غير الوظيفي — Non-functional Testing Tools

**تسمح للمختبر بإجراء اختبار غير وظيفي يصعب أو يستحيل إجراؤه يدويًا.** لا يستطيع الفريق أن يطلب من ألف شخص فتح التطبيق في اللحظة نفسها، لكن أداة اختبار الحِمل تستطيع محاكاة ذلك وقياس زمن الاستجابة.

### أدوات DevOps — DevOps Tools

**تدعم خط تسليم DevOps (delivery pipeline)، ومتابعة سير العمل، وعمليات البناء المؤتمتة، والتكامل والتسليم المستمرّين (CI/CD).** هي التي تجعل خط CI في تطبيق التوصيل يبني التطبيق ويشغّل الاختبارات مع كل commit دون تدخل أحد.

### أدوات التعاون — Collaboration Tools

**تسهّل التواصل** بين أفراد الفريق وأصحاب المصلحة: قناة يصل إليها تنبيه فوري عند فشل اختبار، أو لوحة مشتركة يناقش فيها الفريق ومالك المنتج قصص الـ sprint.

### أدوات التوسّع وتوحيد النشر — Scalability and Deployment Standardization

مثل **الأجهزة الافتراضية (virtual machines)** و**أدوات الحاويات (containerization)**. تسمح بإنشاء بيئات اختبار **متطابقة** بسرعة، وتشغيل عدة بيئات في الوقت نفسه؛ فتختفي مشكلة «يعمل على جهازي فقط». ولأن البيئة تُعرَّف مرة واحدة ثم تُستنسخ، يستطيع الفريق تشغيل اختبارات iOS وAndroid والخلفية بالتوازي، ثم إزالة البيئات بعد انتهاء الاختبار.

### أي أداة يمكن أن تكون أداة اختبار — Any Tool Can Be a Test Tool

**أي أداة أخرى تساعد في الاختبار** هي أداة اختبار في هذا السياق. مثال المنهج: **جدول البيانات (spreadsheet)** أداة اختبار عندما يُستخدم في الاختبار، كتسجيل حالات الاختبار أو بيانات الاختبار. في تطبيق التوصيل، الجدول الذي يحتوي قيم BVA لحد الطلب الأدنى 5.00 دينار مع النتائج المتوقعة أداة اختبار بكل معنى الكلمة.

### رحلة commit واحد — One Commit, Many Tools

لترى كيف تتعاون هذه الأنواع، تتبّع تعديلًا واحدًا على حساب رسوم التوصيل. يدفع المطوّر الشيفرة، فتلتقطها **أداة DevOps** وتبني التطبيق داخل **حاوية** مطابقة لبيئة الإنتاج. تفحص **أداة الاختبار الساكن** الشيفرة قبل تشغيل أي شيء، ثم تشغّل **أداة تنفيذ الاختبار** اختبارات الانحدار مستخدمةً بيانات أعدّتها **أداة تصميم الاختبار**، وتقيس التغطية. إذا فشل اختبار، يصل تنبيه عبر **أداة التعاون**، ويُسجَّل الـ defect في **أداة إدارة الاختبار** مرتبطًا بالقصة. كل ذلك خلال دقائق، ودون أن يضغط أحد زرًا. أما قبل الإصدار للمتاجر، فتُضاف **أداة الاختبار غير الوظيفي** لقياس الأداء تحت الحِمل.

لماذا يهم هذا الفهم في الامتحان؟ لأن أسئلة K2 لا تطلب منك حفظ أسماء الأنواع فقط، بل تصف موقفًا («الفريق يحتاج إلى…») وتسألك عن نوع الأداة الذي يدعمه. إذا عرفت النشاط، عرفت النوع.

<figure class="gx-figure gx-spectrum" aria-label="Example tools by type (examples only; the syllabus names no products)."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Test management</b><span>e.g. a test management plugin for an issue tracker.</span></div><div class="gx-spectrum-item"><b>Static testing</b><span>e.g. linters, static code analysers.</span></div><div class="gx-spectrum-item"><b>Test execution</b><span>e.g. UI or API automation frameworks.</span></div><div class="gx-spectrum-item"><b>Non-functional</b><span>e.g. load and performance testing tools.</span></div><div class="gx-spectrum-item"><b>DevOps</b><span>e.g. CI/CD servers and pipelines.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Scalability</b><span>e.g. containers and virtual machines for test environments.</span></div></div><figcaption>Example tools by type (examples only; the syllabus names no products).</figcaption></figure>

### لا تخلط بين — Don't Confuse

| Activity in the question | Tool type |
| --- | --- |
| Generating test data or test cases | Test design and implementation |
| Running tests automatically, measuring coverage | Test execution and coverage |
| Load or performance testing | Non-functional testing |
| Building and deploying on every commit | DevOps |
| Linking requirements, tests and defects | Test management |
| Identical test environments | Scalability and deployment standardization |

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">The delivery-app team's toolchain: stories, tests and defects linked in a test management tool (test management), a static analyser on every commit (static testing), a data generator for test orders (test design), API and UI tests run by the CI server with coverage reports (test execution and DevOps), a load tool before each store release (non-functional), containers for test environments (scalability), and a team channel for failure alerts (collaboration).</p><p class="gx-ar" lang="ar" dir="rtl">سلسلة أدوات فريق تطبيق التوصيل: القصص والاختبارات والـ defects مترابطة في أداة إدارة الاختبار (إدارة الاختبار)، ومحلّل ساكن مع كل commit (اختبار ساكن)، ومولّد بيانات للطلبات التجريبية (تصميم الاختبار)، واختبارات API وواجهة يشغّلها خادم CI مع تقارير التغطية (تنفيذ الاختبار وDevOps)، وأداة حِمل قبل كل إصدار للمتاجر (غير وظيفي)، وحاويات لبيئات الاختبار (التوسّع)، وقناة للفريق لتنبيهات الفشل (التعاون).</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: match the tool type to what it supports. "Generating test data" → test design and implementation tools. "Measuring coverage" → test execution and coverage tools. "Containers" → scalability and deployment standardization.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: اربط نوع الأداة بما تدعمه. «توليد بيانات الاختبار» ← أدوات تصميم الاختبار وتجهيزه. «قياس التغطية» ← أدوات تنفيذ الاختبار والتغطية. «الحاويات» ← التوسّع وتوحيد النشر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking only specialised commercial tools count. The syllabus explicitly says any tool that assists testing, even a spreadsheet, is a test tool in that context.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الأدوات التجارية المتخصصة فقط هي التي تُحسب. المنهج يقول صراحة إن أي أداة تساعد في الاختبار، حتى جدول البيانات، هي أداة اختبار في ذلك السياق.</p></aside>

---
order: 1
slug: "6-1"
chapter: 6
section: "6.1"
title: "Tool Support for Testing"
titleAr: "دعم الأدوات للاختبار"
objectives: "FL-6.1.1 · K2"
minutes: 7
lo:
  FL-6.1.1: "Explain how different types of test tools support testing."
loAr:
  FL-6.1.1: "تشرح كيف تدعم أنواع أدوات الاختبار المختلفة الاختبار."
takeaways:
  - "Test tools support and facilitate many test activities."
  - "Types: test management, static testing, test design and implementation, test execution and coverage, non-functional testing, DevOps, collaboration, and scalability and deployment standardisation tools."
  - "Any tool that helps testing is a test tool in that context; even a spreadsheet."
takeawaysAr:
  - "أدوات الاختبار تدعم أنشطة اختبار كثيرة وتسهّلها."
  - "أنواعها: إدارة الاختبار، والاختبار الساكن، وتصميم الاختبار وتجهيزه، وتنفيذ الاختبار والتغطية، والاختبار غير الوظيفي، وDevOps، والتعاون، والتوسّع وتوحيد النشر."
  - "أي أداة تساعد في الاختبار هي أداة اختبار في ذلك السياق؛ حتى جدول البيانات."
terms:
  - en: "Test Management Tool"
    ar: "أداة إدارة الاختبار"
    def: "A tool that supports the management of the test process and of test work products, requirements, defects and reporting."
    defAr: "أداة تدعم إدارة عملية الاختبار ومخرجاته، والمتطلبات، والعيوب، والتقارير."
  - en: "Test Automation"
    ar: "أتمتة الاختبار"
    def: "The use of software to perform or support test activities, such as test execution and comparing actual with expected results."
    defAr: "استخدام البرمجيات لتنفيذ أنشطة الاختبار أو دعمها، مثل تنفيذ الاختبارات ومقارنة النتائج الفعلية بالمتوقعة."
    match: ["Test Automation", "test automation"]
---
أدوات الاختبار **تدعم وتسهّل أنشطة اختبار كثيرة**. يذكر المنهج الأنواع التالية:

| Tool type | ماذا تدعم؟ |
| --- | --- |
| Test management tools | تزيد كفاءة عملية الاختبار بتسهيل إدارة الـ SDLC، والمتطلبات، والاختبارات، والعيوب، والإعدادات |
| Static testing tools | تدعم المختبر في المراجعات والتحليل الساكن |
| Test design and implementation tools | تسهّل توليد حالات الاختبار، وبيانات الاختبار، وإجراءات الاختبار |
| Test execution and coverage tools | تسهّل التنفيذ المؤتمت للاختبارات وقياس التغطية |
| Non-functional testing tools | تسمح بتنفيذ اختبار غير وظيفي يصعب أو يستحيل تنفيذه يدويًا |
| DevOps tools | تدعم خط تسليم DevOps، ومتابعة سير العمل، وعمليات البناء المؤتمتة، وCI/CD |
| Collaboration tools | تسهّل التواصل |
| Scalability and deployment standardization tools | مثل الأجهزة الافتراضية (VMs) وأدوات الحاويات (Containerization) |

### أي أداة يمكن أن تكون أداة اختبار — Any Tool Can Be a Test Tool

**أي أداة أخرى تساعد في الاختبار** هي أداة اختبار في هذا السياق. مثلًا: **جدول البيانات (Spreadsheet)** يُعتبر أداة اختبار عندما يُستخدم لتسجيل حالات الاختبار أو بيانات الاختبار.

<figure class="gx-figure gx-spectrum" aria-label="Example tools by type (examples only; the syllabus names no products)."><div class="gx-spectrum-row"><div class="gx-spectrum-item"><b>Test management</b><span>e.g. a test management plugin for an issue tracker.</span></div><div class="gx-spectrum-item"><b>Static testing</b><span>e.g. linters, static code analysers.</span></div><div class="gx-spectrum-item"><b>Test execution</b><span>e.g. UI or API automation frameworks.</span></div><div class="gx-spectrum-item"><b>Non-functional</b><span>e.g. load and performance testing tools.</span></div><div class="gx-spectrum-item"><b>DevOps</b><span>e.g. CI/CD servers and pipelines.</span></div><div class="gx-spectrum-item gx-spectrum-item--accent"><b>Scalability</b><span>e.g. containers and virtual machines for test environments.</span></div></div><figcaption>Example tools by type (examples only; the syllabus names no products).</figcaption></figure>

<aside class="gx-callout" data-kind="practice"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">In practice</span><span class="gx-ar" lang="ar" dir="rtl">من الواقع العملي</span></p><p class="gx-en" lang="en" dir="ltr">A typical web team's toolchain: tests and defects in a test management plugin (test management), a linter on every pull request (static testing), Playwright or Selenium tests run by a CI server (test execution and DevOps), a load testing tool before major releases (non-functional), Docker for test environments (scalability), and a chat channel for status (collaboration).</p><p class="gx-ar" lang="ar" dir="rtl">سلسلة أدوات معتادة لفريق ويب: الاختبارات والعيوب في إضافة لإدارة الاختبار (إدارة الاختبار)، وأداة Linter على كل Pull Request (اختبار ساكن)، واختبارات Playwright أو Selenium يشغّلها خادم CI (تنفيذ الاختبار وDevOps)، وأداة اختبار حِمل قبل الإصدارات الكبيرة (غير وظيفي)، وDocker لبيئات الاختبار (التوسّع)، وقناة شات لحالة الاختبار (التعاون).</p></aside>

<aside class="gx-callout" data-kind="tip"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Exam tip</span><span class="gx-ar" lang="ar" dir="rtl">تلميح امتحان</span></p><p class="gx-en" lang="en" dir="ltr">K2: match the tool type to what it supports. "Generating test data" → test design and implementation tools. "Measuring coverage" → test execution and coverage tools. "Containers" → scalability and deployment standardization.</p><p class="gx-ar" lang="ar" dir="rtl">هدف K2: اربط نوع الأداة بما تدعمه. «توليد بيانات الاختبار» ← أدوات تصميم الاختبار وتجهيزه. «قياس التغطية» ← أدوات تنفيذ الاختبار والتغطية. «الحاويات» ← التوسّع وتوحيد النشر.</p></aside>

<aside class="gx-callout" data-kind="warn"><p class="gx-callout-label"><span class="gx-en" lang="en" dir="ltr">Common mistake</span><span class="gx-ar" lang="ar" dir="rtl">خطأ شائع</span></p><p class="gx-en" lang="en" dir="ltr">Thinking only specialised commercial tools count. The syllabus explicitly says any tool that assists testing, even a spreadsheet, is a test tool in that context.</p><p class="gx-ar" lang="ar" dir="rtl">الظن بأن الأدوات التجارية المتخصصة فقط هي التي تُحسب. المنهج يقول صراحة إن أي أداة تساعد في الاختبار، حتى جدول البيانات، هي أداة اختبار في ذلك السياق.</p></aside>

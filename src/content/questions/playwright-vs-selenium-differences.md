---
title: شو الفرق الأساسي بين Playwright و Selenium؟
slug: playwright-vs-selenium-differences
level: متقدّم
domain: أتمتة
shortAnswer: Selenium بيعتمد على الـ WebDriver للاتصال بالمتصفحات، بينما Playwright بيتصل مباشرة بالمتصفح عبر الـ DevTools Protocol، مما يجعله أسرع، أكثر استقراراً، وبيدعم الـ Auto-waiting تلقائياً.
tags:
  - Tool Comparison
  - Playwright
  - Selenium
  - Automation
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لتقييم معرفتك بالأدوات الحديثة والقدرة على اختيار الأداة المناسبة للمشروع (Tool Selection).
- **الجواب النموذجي:** **Selenium:** مكتبة عريقة، بتدعم لغات ومتصفحات كثيرة، بتعتمد على WebDriver HTTP protocol، وتحتاج لإدارة الـ Drivers والـ Waits يدويًا في كثير من الأحيان.**Playwright:** إطار عمل حديث من Microsoft، بيعمل على مستوى الشبكة (DevTools/CDP)، أسرع بالتشغيل، بيدعم الـ Shadow DOM، الـ Multi-context، والـ Auto-wait تلقائياً بدون الحاجة لـ Thread.sleep أو Explicit Waits معقدة.
- **الفخ الشائع:** القول إن إحدى الأداتين ممتازة دائماً والأخرى سيئة، دون توضيح الفروقات المعمارية (Architecture) وحاجة المشروع.

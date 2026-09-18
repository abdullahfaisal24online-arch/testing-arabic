---
title: شو هو الـ Headless Mode ومتى بنستخدمه؟
slug: headless-browser-testing-automation
level: مبتدئ
domain: أتمتة
shortAnswer: تشغيل المتصفح بدون واجهة رسومية (UI)، ويُستخدم لتسريع تنفيذ الاختبارات وتوفير استهلاك الموارد خاصة في بيئات الـ CI/CD Pipelines.
tags:
  - Playwright
  - Selenium
  - CI-CD
  - Headless Mode
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لمعرفة دراية المتقدم بكيفية تشغيل الاختبارات داخل السيرفرات وبيئات التكامل المستمر.
- **الجواب النموذجي:****المميزات:** أسرع، لا يستهلك موارد كرت الشاشة أو الشاشة الفعالة، ويتيح تشغيل التست على سيرفرات بدون GUI (مثل Docker أو Linux Containers).**الاستخدام:** بنستخدم الـ Headed (الواجهة الظاهرة) أثناء التطوير والـ Debugging، بينما بنحاول اعتماد الـ Headless عند التشغيل التلقائي بالـ CI/CD.
- **الفخ الشائع:** افتراض أن الـ Headless Mode دائماً يعطي نفس سلوك الـ Headed بنسبة 100%، حيث قد تظهر اختلافات بسيطة جداً بتنفيذ بعض الـ Layouts أو الـ File Downloads.

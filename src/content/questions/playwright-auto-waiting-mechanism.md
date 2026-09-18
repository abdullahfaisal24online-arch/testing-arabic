---
title: كيف بيتعامل Playwright مع الـ Auto-waiting؟
slug: playwright-auto-waiting-mechanism
level: متوسط
domain: أتمتة
shortAnswer: بيعمل Playwright فحص تلقائي لعدة شروط (Actionability Checks) قبل أي إجراء (مثل الضغط أو الكتابة) للتأكد إن العنصر Visible, Enabled, Stable ومش مغطى بعنصر ثاني.
tags:
  - Synchronization
  - Automation
  - Playwright
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** للتأكد من فهم أهم ميزة بالـ Playwright اللي بتقلل من مشكلة الـ Flaky Tests.
- **الجواب النموذجي:** قبل تنفيذ أي Action (مثل `click()`) يقوم Playwright بالتأكد التلقائي من:**Attached:** العنصر موجود بالـ DOM.**Visible:** العنصر مرئي مش خفي.**Stable:** العنصر مش بيمشي أو بيتحرك (No Animation).**Receives Events:** مش مغطى بعنصر ثاني (Non-obscured).**Enabled:** العنصر مفعل ومتاح للتفاعل.
- **الفخ الشائع:** إضافة `waitFor Timeout` يدوي بكثرة بالـ Playwright، مما يلغي فائدة الـ Auto-waiting الذكي.

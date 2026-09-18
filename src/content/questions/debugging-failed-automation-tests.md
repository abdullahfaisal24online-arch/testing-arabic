---
title: كيف بتعمل Debug للـ Tests الفاشلة وتستخرج أدلة بالـ Playwright و Selenium؟
slug: debugging-failed-automation-tests
level: متوسط
domain: أتمتة
shortAnswer: بالـ Selenium نأخذ Screenshots و Video يدوي عند الفشل عبر الـ Listeners، أما بالـ Playwright نستخدم الـ Trace Viewer المدمج لتتبع خطوات التست خطوة بخطوة مع الـ DOM Snapshot والـ Network Logs.
tags:
  - Automation
  - Screenshots
  - Trace Viewer
  - Debugging
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لمعرفة كيف يتصرف المهندس عندما يفشل السكريبت في الـ CI/CD للوصول للسبب الجذري.
- **الجواب النموذجي:** **Playwright Trace Viewer:** أداة قوية جداً بتوفر سجل كامل للتست يحتوي على الفيديو، الشاشة، حالة الـ DOM بكل خطوة، والـ Network Requests قبل وبعد الـ Action.**Selenium:** نعتمد على إضافة Test Framework Listeners (مثل TestNG Listeners) لالتقاط الصورة وتخزين الـ Browser Console Logs عند حدوث Exception.
- **الفخ الشائع:** الاكتفاء بقراءة الـ Error Stack Trace دون العودة لصور الشاشة أو الـ Network Logs.

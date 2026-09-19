---
title: شو الأداة اللي بتستخدمها لعمل Mock للـ APIs لو كان الـ Backend مش جاهز؟
slug: mocking-api-tools-postman-json-server
level: متوسط
domain: أدوات
shortAnswer: بنستخدم Postman Mock Servers أو مكتبات مثل JSON Server أو WireMock لمحاكاة الـ API والـ Responses حتى نتمكن من الفحص أو الأتمتة المبكرة قبل جهوزية الـ Backend.
tags:
  - API Tools
  - JSON Server
  - Postman
  - Mocking
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لمعرفة كيفية تطبيقك لمفهوم الـ Shift-Left وتفادي معوقات تأخر الـ Backend Development.
- **الجواب النموذجي:**
    - **Postman Mock Server:** يتيح إنشاء Endpoint وهمي يعيد JSON Response بناءً على الـ Examples المعرفة مسبقاً.
    - **JSON Server:** خادم محلي سريع يُنشئ REST API كاملاً من ملف JSON بسيط لاختبار الواجهات فوراً.
- **الفخ الشائع:** توقف عمل الـ QA بانتظار إكتمال الـ Backend بدلاً من استخدام حلول الـ Mocking.

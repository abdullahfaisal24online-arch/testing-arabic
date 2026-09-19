---
title: شو الأدوات اللي بتستخدمها لمراقبة الـ Web Traffic أو التعديل على الـ Requests (مثل Charles Proxy أو DevTools)؟
slug: network-proxy-tools-charles-devtools
level: متوسط
domain: أدوات
shortAnswer: بنستخدم Chrome DevTools (Network Tab) لفحص الطلبات بالويب، وأدوات Proxy مثل Charles Proxy أو Fiddler لتتبع وحقن طلبات الـ Mobile Applications والـ Traffic المعقد.
tags:
  - Tools
  - Fiddler
  - Charles Proxy
  - Chrome DevTools
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** للتحقق من مهارتك في تشخيص مشاكل الاتصال والتواصل بين الـ Frontend والـ Backend.
- **الجواب النموذجي:**
    - **DevTools:** لمتابعة الـ Headers, Response Codes, والـ Payload للتطبيقات على المتصفح.
    - **Charles / Fiddler:** تتيح إنشاء Breakpoints والتعديل المباشر على الـ Request/Response لرؤية سلوك التطبيق في الحالات الاستثنائية (Mocking / Edge cases).
- **الفخ الشائع:** عدم القدرة على تحديد ما إذا كان الخطأ قادماً من الـ UI أم من الـ API Network.

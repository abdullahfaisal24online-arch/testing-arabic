---
title: شو الفرق بين الـ Authentication والـ Authorization بالـ API، وكيف بتفحصهم؟
slug: api-authentication-vs-authorization
level: مبتدئ
domain: أساسيات
shortAnswer: 'Authentication: التحقق من هية المستخدم (من أنت؟ - مثل اللوجن برقم سر وتوكن)، بينما Authorization: التحقق من الصلاحيات والمسموحات (شو مسموح لك تعمل؟ - مثل مدير مقابل مستخدم عادي).'
tags:
  - Authorization
  - Authentication
  - Security
  - API
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لقياس مدى إدراكك لاختبارات الأمان الأساسية (Security Testing) في الـ API endpoints.
- **الجواب النموذجي:**
    - **Authentication:** نفحص الاستجابة عند إرسال طلب بدون Bearer Token أو بتوكن منتهي الصلاحية والتأكد من إرجاع `401 Unauthorized`.
    - **Authorization:** نفحص محاولة مستخدم عادي التعديل على بيانات مستخدم آخر أو الوصول للـ Admin API والتأكد من إرجاع `403 Forbidden`.
- **الفخ الشائع:** الخلط بين الـ Response Code الخاص بكل حالة (`401` للمصادقة مقابل `403` للصلاحيات).

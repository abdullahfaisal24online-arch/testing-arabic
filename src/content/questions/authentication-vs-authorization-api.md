---
title: شو الفرق بين Authentication و Authorization بالـ API وكيف بتختبرهم؟
slug: authentication-vs-authorization-api
level: متوسط
domain: API
shortAnswer: 'Authentication: "مين أنت؟" (التحقق من الهوية مثل تسجيل الدخول والـ Tokens). Authorization: "شو مسموح لك تعمل؟" (التحقق من الصلاحيات والـ Roles).'
tags:
  - Postman
  - Authorization
  - Authentication
  - API Security
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** للتحقق من قدرة المهندس على إجراء اختبارات الأمان والتأكد من عدم وجود ثغرات وصول للبيانات الحساسة (Bypass Security).
- **الجواب النموذجي:****Authentication Testing:** التأكد من رفض الطلبات بدون Token، أو بـ Token منتهي الصلاحية (Expired)، أو بـ Header خاطئ (يرجع `401 Unauthorized`).**Authorization Testing:** محاولة وصول مستخدم عادي (User Role) لنقطة نهاية خاصة بالمدير (Admin Endpoint)، والتأكد من إرجاع كود `403 Forbidden` ومنع الوصول (BOLA/IDOR Vulnerabilities).
- **الفخ الشائع:** الخلط بين كود الاستجابة `401 Unauthorized` (مشكلة هوية) وكود `403 Forbidden` (مشكلة صلاحيات).

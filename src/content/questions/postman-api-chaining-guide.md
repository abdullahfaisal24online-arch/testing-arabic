---
title: كيف بتنفذ مفهوم الـ API Chaining بالـ Postman لتمرير داتا من Request لأخر تلقائياً؟
slug: postman-api-chaining-guide
level: متوسط
domain: API
shortAnswer: بنستخرج القيمة (مثل الـ Token أو الـ ID) من الـ Response للطلب الأول باستخدام JavaScript في تبويب Tests، وبنحفظها بـ Environment Variable، وبنستدعيها بالطلب الثاني بـ {{variable_name}}.
tags:
  - Environment Variables
  - Automation
  - API Chaining
  - Postman
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لمعرفة ما إذا كان المتقدم يتقن أتمتة اختبارات الـ API والمواقف المتسلسلة (End-to-End API Workflows) في Postman بدلاً من التعديل اليدوي الشاق.
- **الجواب النموذجي:****Execute Request 1 (Login/Create):** إرسال طلب تسجيل الدخول أو إنشاء عنصر.**Extract Data in `Tests` Tab:**
JavaScriptconst response = pm.response.json();
pm.environment.set("token", response.token);
**Pass Variable in Request 2:** استخدام المتغير بالـ Header للطلب التالي كـ `Bearer {{token}}`.
- **الفخ الشائع:** نسخ الـ ID أو الـ Token يدويًا بين الطلبات أثناء المقابلة العملية أو عدم معرفة كيفية استخدام قسم الـ `Tests` لضبط المتغيرات.

---
title: شو الفرق بين HTTP Methods الأساسية (GET, POST, PUT, PATCH, DELETE)؟
slug: http-request-methods-explained
level: مبتدئ
domain: API
shortAnswer: 'GET: لجلب البيانات، POST: لإضافة بيان جديد، PUT: لتعديل الكائن بالكامل (أو إنشائه)، PATCH: لتعديل جزء معين من البيانات، و DELETE: لحذف البيانات.'
tags:
  - QA Basics
  - REST API
  - HTTP Methods
  - API Testing
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** للتأكد من فهمك للأساسيات الجوهرية لمعمارية RESTful APIs وكيفية التفاعل مع الـ Resources.
- **الجواب النموذجي:** **GET:** قراءة فقط (Read-only)، آمنة (Safe) ولا تغير حالة السيرفر (Idempotent).**POST:** إنشاء عنصر جديد، ترسل البيانات بالـ Request Body.**PUT:** استبدال كامل للـ Resource الحالي ببيانات جديدة.**PATCH:** تعديل جزئي (Partial Update) لحقل معين دون المساس بباقي البيانات.**DELETE:** إزالة الـ Resource المحدد من قاعدة البيانات.
- **الفخ الشائع:** الخلط بين PUT و PATCH؛ حيث يُلزم PUT بإرسال كامل الجسم، بينما PATCH يكتفي بالحقل المراد تعديله فقط.

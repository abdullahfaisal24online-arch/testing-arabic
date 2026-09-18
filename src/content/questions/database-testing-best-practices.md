---
title: كيف بتنفذ الـ Database Testing لميزة معينة، وشو أهم الأشياء اللي بتفحصها بالـ DB؟
slug: database-testing-best-practices
level: متوسط
domain: أدوات
shortAnswer: بنتأكد إن البيانات اتسجلت صح بالجدول (Data Integrity)، قيم الـ Constraints والـ Default values صحيحة، التشفير شغال للبيانات الحساسة، ولما نعمل Delete أو Update ما يضل بيانات يتيمة (Orphan Records).
tags:
  - Backend Testing
  - Data Integrity
  - SQL
  - Database Testing
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لضمان أن الـ QA لا يكتفي بفحص الـ UI أو الـ API Response، بل بيتحقق من صحة وحفظ البيانات في الطبقة الخلفية (Persistence Layer).
- **الجواب النموذجي:** **Data Mapping & Integrity:** التأكد إن البيانات المكتوبة بالـ Frontend انحفظت بالأعمدة (Columns) الصحيحة وبنفس نوع البيانات (Data Types).**Security & Encryption:** فحص إن كلمات السر والـ Credit Cards مش محفوظة بـ Plain Text بالـ Database.**ACID Properties & Transactions:** التأكد إنه لو فشلت العملية بمنتصف الطريق (مثل فشل عملية الدفع) بيتم عمل Rollback وما بتسجل داتا ناقصة.
- **الفخ الشائع:** الاعتماد الكلي على الـ UI لإغلاق الفحص دون فتح الـ Database والتحقق المباشر عبر استعلامات SQL.

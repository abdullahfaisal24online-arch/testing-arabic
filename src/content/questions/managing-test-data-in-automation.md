---
title: كيف بتدير الـ Test Data بالاختبارات المتمتة عشان تتفادى التضارب أو فشل التست؟
slug: managing-test-data-in-automation
level: متقدّم
domain: أدوات
shortAnswer: عبر إنشاء بيانات جديدة تلقائياً قبل كل اختبار (Dynamic Data Generation / API Setup) وتنظيفها بعد الانتهاء (Teardown)، لتفادي الاعتماد على بيانات ثابتة قد تتغير.
tags:
  - Setup/Teardown
  - Postman
  - Automation
  - Test Data
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** سؤال متقدم جداً يغطي مشكلة الشائعة بالـ Automation وهي تلوث بيئة الفحص (Environment Data Contamination).
- **الجواب النموذجي:**
    - **تجنب الـ Hardcoded Data:** استخدام مكتبات توليد الداتا (مثل Faker) لإنشاء إيميلات وأسماء عشوائية فريدة لكل Test Run.
    - **API Setup/Teardown:** إنشاء العناصر المطلوبة للتست مباشرة عن طريق الـ API بتبويب ה-Before Class/Setup وحذفها بعد الانتهاء بـ After Class/Teardown لضمان استقلالية الفحص تماماً.
- **الفخ الشائع:** الاعتماد على مستخدم واحد أو بيانات ثابتة بالـ Database لتشغيل مئات السكريبتات بالتوازي.

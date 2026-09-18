---
title: شو هو نمط Page Object Model (POM) وليه بنستخدمه بالأتمتة؟
slug: page-object-model-design-pattern
level: متوسط
domain: أتمتة
shortAnswer: هو Design Pattern بيقسّم المشروع بحيث تكون عناصر وصفحات الواجهة بملفات منفصلة عن كود الاختبارات، مما يسهل صيانة السكريبتات وإعادة استخدام العناصر (Reusability).
tags:
  - Playwright
  - Selenium
  - Design Patterns
  - POM
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** للتأكد من إن المتقدم بيكتب كود أتمتة نظيف وقابل للصيانة (Clean & Maintainable Code) ومش مجرد سكريبتات عشوائية.
- **الجواب النموذجي:** **الفائدة الرئيسية:** صيانة الكود؛ إذا تغير مكان عنصر بالصفحة (Locator)، بنعدله بملفات الـ Page Class فقط دون الحاجة لتعديل عشرات الـ Test Cases.**الهيكلية:** كل صفحة بالسيستم لها Class خاص بيحتوي الـ Locators والـ Actions التابعة لها، والـ Test Files بتستدعي هذي الـ Methods فقط.
- **الفخ الشائع:** وضع الـ Assertions داخل الـ Page Classes بدلاً من وضعها بملفات الـ Test Files.

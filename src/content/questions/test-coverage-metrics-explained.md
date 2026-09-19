---
title: كيف بتحسب الـ Test Coverage وشو الفرق بين Requirement Coverage و Code Coverage؟
slug: test-coverage-metrics-explained
level: متوسط
domain: إدارة الاختبار
shortAnswer: 'Requirement Coverage: قياس نسبة فحص المتطلبات المطلوبة للعميل (QA Role)، بينما Code Coverage: قياس نسبة السطور البرمجية المنيزة بالتست من قبل المطورين (Unit/Integration Tests).'
tags:
  - Code Coverage
  - Metrics
  - Requirements
  - Test Coverage
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لضمان فهمك المباشر لكيفية قياس مدى كفاية الفحص وجودة التغطية.
- **الجواب النموذجي:**
    - الـ QA بيركز بشكل أساسي على **Requirement Traceability Matrix (RTM)** للتأكد من إن كل User Story لها Test Cases تغطي الـ Happy path والـ Edge cases.
    - الـ Code Coverage أداة بستخدمها المطورون عبر أدوات مثل SonarQube أو JaCoCo لقياس نسبة تغطية الكود بالـ Unit Tests.
- **الفخ الشائع:** ادعاء الـ QA بأنه يقيس الـ Code Coverage بنسبة 100% بنفسه يدوياً، دون تمييز الفرق بينها وبين تغطية المتطلبات.

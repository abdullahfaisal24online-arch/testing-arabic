---
title: شو الفرق بين Smoke Testing و Sanity Testing؟
slug: smoke-vs-sanity-testing
level: مبتدئ
domain: أساسيات
shortAnswer: Smoke Testing بيختبر الميزات الأساسية للسيستم كامل للتأكد من استقرار الـ Build بشكل عام، بينما Sanity Testing بيكون مركز وسريع على ميزة معينة أو Bug تم إصلاحه للتأكد من جاهزيته للاختبار التفصيلي.
tags:
  - QA Basics
  - Sanity Testing
  - Smoke Testing
  - Testing Types
relatedLessons:
  - smoke-testing
draft: false
---

- **ليش بينسأل؟** من أكثر الأسئلة اللي بيلتبس مفهومها على المتقدمين لبيان مدى التمييز بين أنواع الاختبار السريعة.
- **الجواب النموذجي:** **Smoke Testing (Shallow & Wide):** بيتم تنفيذه على Build جديد كلياً للتأكد من إن السيستم شغّال ومش بيكراش من البداية (Acceptance of Build).**Sanity Testing (Narrow & Deep):** بيتم بعد عمل Release صغير أو Bug Fix لتفحص جزء محدد جداً وتضمن إن التعديل شغّال صح بدون الخوض بكل التفاصيل.
- **الفخ الشائع:** إظهارهم كأنهم نفس الشيء، أو عدم ربط الـ Smoke بالتأكد من صلاحية الـ Build للاختبار من الأساس.

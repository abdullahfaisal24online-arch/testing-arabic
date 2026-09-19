---
title: شو مفهوم الـ Shift-Right Testing وكيف بيفرق عن الـ Shift-Left؟
slug: shift-right-testing-in-production
level: متقدّم
domain: أساسيات
shortAnswer: الـ Shift-Right هو فحص واختبار النظام في بيئة الـ Production الحقيقية بعد الإطلاق، عبر مراقبة الأداء (Monitoring)، الـ Canary Releases، و A/B Testing.
tags:
  - QA Concepts
  - Monitoring
  - Production Testing
  - Shift-Right
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لقياس مدى مواكبتك لمفاهيم الجودة الحديثة بالأنظمة الحية الموزعة.
- **الجواب النموذجي:**
    - **Shift-Left:** الفحص المبكر بالتحليل والتصميم والتطوير.
    - **Shift-Right:** التأكد من استقرار السيستم بالـ Production عبر أدوات الـ APM (مثل Datadog/NewRelic)، متابعة الـ User Feedback، والـ Chaos Engineering لملاحظة الأخطاء التي لا تظهر ببيئة الـ Staging.
- **الفخ الشائع:** اعتقاد أن دور الـ QA ينتهي بمجرد رفع التحديث لبيئة الـ Production.

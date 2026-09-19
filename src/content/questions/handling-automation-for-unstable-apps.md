---
title: شو بتعمل لو طلبوا منك أتمتة مشروع (Unstable Project) بيتغير الـ UI والـ Backend فيه باستمرار؟
slug: handling-automation-for-unstable-apps
level: متقدّم
domain: أتمتة
shortAnswer: بنصح بعدم البدء بالـ UI Automation للتطبيق غير المستقر، وبنبدأ بالـ API Automation المباشر أو الـ Smoke Tests للخدمات المستقرة فقط لتوفير الجهد.
tags:
  - Risk Management
  - Behavioral
  - Automation Strategy
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** للتأكد من إن المتقدم بيفهم متى تكون الأتمتة مجدية مالمسار الصحيح (ROI) ومش مجرد تطبيق أعمى للأوامر.
- **الجواب النموذجي:**
    - توضيح التكلفة العالية المترتبة على صيانة الـ UI Locators المتغيرة باستمرار (High Maintenance Cost).
    - البدء بالـ API Testing لأنه أكثر استقراراً وسرعة بالنتائج.
    - حصر الـ UI Automation على الميزات الثابتة تماماً (Stable Core Features) مثل الـ Login أو التسجيل.
- **الفخ الشائع:** البدء بأتمتة جميع الشاشات فوراً ثم ضياع الوقت بالصيانة اليومية للسكريبتات المنكسرة.

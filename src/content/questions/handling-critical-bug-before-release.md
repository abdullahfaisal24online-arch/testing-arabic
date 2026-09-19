---
title: شو بتعمل لو اكتشفت Bug بآخر لحظة قبل الـ Release المخطط له؟
slug: handling-critical-bug-before-release
level: متوسط
domain: سلوكي
shortAnswer: 'بنقيم خطورة وأثر الـ Bug فوراً (Impact & Severity)، وبنبلغ الـ Product Owner/Team Lead للقرار: إما إيقاف الـ Release، إغلاق الميزة (Feature Toggle)، أو تأجيل إصلاحها.'
tags:
  - Release Management
  - Behavioral
  - Decision Making
  - Risk Assessment
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لقياس الثبات الانفعالي، سرعة اتخاذ القرار، ومهارة إدارة المخاطر تحت الضغط.
- **الجواب النموذجي:**
    1. **تحديد الأثر:** هل الـ Bug بتمنع المستخدم من الدفع أو التسجيل (Blocker)، أم مجرد مشكلة تنسيق بسيطة (Minor UI)?
    2. **التواصل المباشر:** إبلاغ الـ Product Owner فوراً بالأدلة وخطورة المشكلة، مع طرح خيارات مثل:
        - استخدام **Feature Flag** لإخفاء الميزة وإطلاق باقي السيستم.
        - تأجيل الـ Release إذا كانت المشكلة حرجة وتمس بيانات المستخدمين.
- **الفخ الشائع:** إخفاء المشكلة لتفادي تأخير التسليم، أو إيقاف الـ Release فوراً بقرار فردي دون الرجوع لإدارة المنتج.

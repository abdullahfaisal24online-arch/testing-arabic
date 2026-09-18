---
title: شو هي مراحل دورة حياة الخطأ (Bug / Defect Lifecycle)؟
slug: bug-defect-lifecycle
level: مبتدئ
domain: أساسيات
shortAnswer: تبدأ بحالة New عند اكتشاف الخطأ، ثم Assigned للمطور، تتحول لـ Fixed بعد التعديل، ثم Retest من الـ QA، وتنتهي بـ Closed أو Reopen إذا لم تُحل المشكلة.
tags:
  - QA Basics
  - Defect Management
  - Bug Life Cycle
relatedLessons:
  - fundamentals-of-testing
draft: false
---

- **ليش بينسأل؟** لمعرفة مدى دراية المتقدم بإدارة تذاكر الأخطاء على أدوات مثل Jira وتتبع حالاتها.
- **الجواب النموذجي:** **New:** تسجيل الـ Bug بواسطة الـ QA.**Assigned:** إسناد الـ Bug للمطور المعني.**In Progress / Fixed:** المطور يعمل على المشكلة ويعلّمها كمصلحة.**Pending Retest / Retest:** الـ QA يعيد اختبار المشكلة في بيئة الاختبار.**Closed:** إغلاق الـ Bug بنجاح.**Reopened:** إعادة فتح المشكلة إذا تبيّن أنها لم تُحل بشكل صحيح._(حالات أخرى: Deferred, Rejected, Duplicate)._
- **الفخ الشائع:** عدم معرفة متى تُستخدم حالة Deferred (تأجيل) أو Rejected (رفض).

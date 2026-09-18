---
title: شو بتعمل إذا واجهت Bug بيظهر مرة وبعشر مرات بختفي (Intermittent Bug)؟
slug: handling-intermittent-bugs
level: متوسط
domain: سلوكي
shortAnswer: أجمع كافة التفاصيل الممكنة (Logs, Network Requests, System Resources)، أحاول تحديد النمط (Pattern) أو الظروف المسببة، وأجلس مع المطور لمراجعة الـ Server/Console Logs.
tags:
  - Debugging
  - Troubleshooting
  - Bug Hunting
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** للتحقق من الصبر ومهارات التحليل والـ Troubleshooting العميقة.
- **الجواب النموذجي:** تسجل فيديو وتوثيق دقيق لبيئة الاختبار والبيانات المستخدمة. فحص الـ Console/Network Logs بالـ Browser أو الـ Server Logs برابط الوقت. التحقق مما إذا كانت المشكلة مرتبطة بالسرعة (Race Condition)، أو بطء بالشبكة، أو بيئة محددة.
- **الفخ الشائع:** إهمال الـ Bug وتجاهله لمجرد أنه لم يظهر في المرة الثانية.

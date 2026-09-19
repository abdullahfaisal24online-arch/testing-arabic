---
title: شو يعني JQL (Jira Query Language) وكيف بتستخدمها كـ QA لتصفية الـ Tickets ؟
slug: jira-query-language-jql-for-qa
level: متوسط
domain: أدوات
shortAnswer: JQL هي لغة استعلام مخصصة في Jira تُستخدم للبحث المتقدم وتصفية التيكتس حسب شروط معينة مثل حالة الـ Bugs المفتوحة، الأولوية، أو الـ Sprint الحالي.
tags:
  - Tools
  - Reporting
  - JQL
  - Jira
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** للتحقق من قدرتك على استخراج التقارير والـ Bugs الفعالة بسرعة وتخصيص الـ Dashboards.
- **الجواب النموذجي:** تتيح كتابة استعلامات سريعة مثل: `project = "PROJ" AND type = Bug AND status = "In QA" AND priority = High` تُستخدم للبحث عن الثغرات الحرجة المتبقية قبل إطلاق الـ Release أو لتنظيم أولوية الفحص اليومي.
- **الفخ الشائع:** الاعتماد فقط على الـ Basic Search السطحي دون معرفة إمكانية حفظ الـ Filters واستخدام JQL بالـ Dashboards.

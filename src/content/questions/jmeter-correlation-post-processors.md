---
title: كيف بتتعامل مع القيمة المتغيرة dynamic data (مثل Session ID أو Auth Token) بـ JMeter؟
slug: jmeter-correlation-post-processors
level: متقدّم
domain: أدوات
shortAnswer: بنستخدم الـ Post-Processors (مثل JSON Extractor أو Regular Expression Extractor) لاستخراج القيمة من استجابة الطلب الأول وحفظها بمتغير لاستخدامها بالطلب التالي.
tags:
  - Tools
  - Post-Processors
  - Correlation
  - JMeter
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** هذا السؤال هو الاختبار العملي الأهم لخبرتك الحقيقية في JMeter مع التطبيقات المعقدة.
- **الجواب النموذجي:**
    - التسجيل العادي للاختبار يلتقط قيم ثابتة (Hardcoded Values)، مما يؤدي لفشل السكريبت بسبب رفض السيرفر للتسجيل المكرر.
    - نطبق مفهوم **Correlation** عبر ربط العناصر الديناميكية: نلتقط الـ Session Token من استجابة الـ Login باستخدام `JSON Extractor` ونمرره في الـ Request Headers للطلبات اللاحقة.
- **الفخ الشائع:** عدم تمرير الـ Extracted Variables وإعادة استخدام قيم منتهية الصلاحية.

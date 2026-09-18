---
title: شو الفرق بين Black Box Testing و White Box Testing؟
slug: black-box-vs-white-box-testing
level: مبتدئ
domain: أساسيات
shortAnswer: Black Box هو اختبار الوظائف والواجهات دون الاطلاع على الكود الداخلي، بينما White Box يتطلب فحص الكود البرمجي والبنية الداخلية للنظام (مثل Unit Testing).
tags:
  - Methodologies
  - QA Basics
  - testing Types
relatedLessons:
  - test-analysis-and-design
draft: false
---

- **ليش بينسأل؟** للتأكد من فهم المتقدم لمستويات وأساليب الاختبار المختلفة وموقعه كمهندس QA بينهما.
- **الجواب النموذجي:****Black Box (الصندوق الأسود):** يركز على الـ Inputs والـ Outputs بناءً على المتطلبات، دون معرفة كيف كُتب الكود. يمارسه غالباً مهندسو الـ QA.**White Box (الصندوق الأبيض):** يركز على تغطية المسارات البرمجية (Code Coverage) والمنطق الداخلي. يمارسه غالباً المطورون (Developers) أو مهندسو الـ SDET.
- **الفخ الشائع:** الاعتقاد بأن الـ QA يعمل فقط Black Box، بينما في الواقع قد يحتاج لمعرفة أساليب Gray Box عند اختبار الـ APIs أو قواعد البيانات.

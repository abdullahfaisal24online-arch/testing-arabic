---
title: شو أهم المؤشرات والـ Metrics اللي بتطلع عليها بالتقرير لما تعمل Load Testing؟
slug: performance-testing-metrics-guide
level: متقدّم
domain: أدوات
shortAnswer: بنراقب زمن الاستجابة (Response Time / Latency)، الإنتاجية (Throughput / TPS)، نسبة الأخطاء (Error Rate)، واستهلاك الموارد (CPU/Memory Utilization).
tags:
  - Tools
  - Performance Metrics
  - k6
  - JMeter
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** للتأكد من قدرتك على تحليل التقارير وتحديد اختناقات الأداء (Bottlenecks) وليس فقط تشغيل السكريبت.
- **الجواب النموذجي:**
    - **Response Time (p90/p95):** زمن الاستجابة لـ 95% من الطلبات.
    - **Throughput (Requests Per Second):** عدد الطلبات الناجحة المعالجة في الثانية.
    - **Error Rate:** نسبة الطلبات الفاشلة بالنسبة لإجمالي الطلبات.
    - **Server Resources:** استهلاك السيرفر للذاكرة والمعالج أثناء الضغط.
- **الفخ الشائع:** التركيز فقط على الـ Average Response Time وتجاهل الـ Percentiles (مثل 95th percentile).

---
title: شو هي أداة Apache JMeter وشو أجزاء الـ Test Plan فيها؟
slug: jmeter-architecture-and-test-plan
level: متوسط
domain: أدوات
shortAnswer: JMeter أداة مفتوحة المصدر مبنية بـ Java لاختبار الأداء والضغط. تتكون من Thread Group (المستخدمين)، Samplers (الطلبات)، و Listeners (النتائج).
tags:
  - Tools
  - Load Testing
  - Performance Testing
  - JMeter
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لمعرفة ما إذا كان لديك خبرة بعمل محاكاة للمستخدمين باستخدام JMeter.
- **الجواب النموذجي:**
    - **Thread Group:** تحديد عدد المستخدمين الوهميين (Virtual Users) وزمن الصعود (Ramp-up Period).
    - **Samplers:** الطلبات المرسلة للنظام (مثل HTTP Requests).
    - **Listeners:** أدوات قياس وعرض النتائج (Graph Results, Aggregate Report).
- **الفخ الشائع:** تشغيل اختبار ضغط عالي جداً بوجود الـ Listeners التفاعلية مُمكّنة، مما يستهلك ذاكرة الجهاز نفسه بدلاً من اختبار السيرفر.

---
title: شو الفرق بين Implicit Wait و Explicit Wait و Fluent Wait بالـ Selenium؟
slug: selenium-waits-implicit-explicit-fluent
level: متوسط
domain: أتمتة
shortAnswer: 'Implicit: ينتظر وقتاً محدداً لكل عناصر الصفحة، Explicit: ينتظر شرطاً معيناً لعنصر محدد، و Fluent: ينتظر مع تحديد فترة الفحص المكرر (Polling Interval) وتجاهل استثناءات معينة.'
tags:
  - Synchronization
  - Waits
  - Selenium
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** أساسي جداً بالـ Selenium لمعرفة كيف المتقدم بيحل مشكلة مزامنة عناصر الصفحة (Synchronization).
- **الجواب النموذجي:** **Implicit Wait:** يُعرّف مرة واحدة بحد أقصى للانتظار يطبق على كامل الـ Driver.**Explicit Wait:** ينتظر تحقق شرط محدد (مثل `visibilityOfElementLocated`) لعنصر معين قبل الاستمرار.**Fluent Wait:** بيمتاز بإمكانية تحديد الـ Polling Frequency (مثلاً افحص كل نصف ثانية) واستثناء أخطاء معينة مثل `NoSuchElementException`.
- **الفخ الشائع:** الخلط بين الـ Implicit والـ Explicit معاً بنفس المشروع، لأن ذلك يسبب أوقات انتظار غير متوقعة (Unpredictable Wait Times).

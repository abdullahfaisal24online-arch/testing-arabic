---
title: كيف بيتحكم Playwright بالـ Browser Contexts والمحتوى المعزول؟
slug: playwright-browser-contexts-explained
level: متقدّم
domain: أتمتة
shortAnswer: الـ Browser Context هو جلسة معزولة تماماً (مثل Incognito Window) داخل نفس المتصفح، بتسمح بتشغيل عدة اختبارات أو مستخدمين ببيئات مستقلة وسريعة جداً بدون فتح متصفح جديد كل مرة.
tags:
  - Parallel Testing
  - Browser Context
  - Playwright
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لقياس الفهم المعماري العميق للـ Playwright وكيفية استغلاله للسرعة والـ Parallel Execution.
- **الجواب النموذجي:**فتح المتصفح (Browser Instance) يحتاج وقتاً وموارد، لكن فتح Browser Context يحتاج ميلي ثواني فقط.يوفر عزل كامل للـ Cookies, Local Storage, والـ Sessions.ممتاز لاختبار سيناريوهات تتطلب أكثر من مستخدم معاً (مثل محادثة بين أدمن ومستخدم عادي بنفس الاختبار).
- **الفخ الشائع:** إعادة فتح وإغلاق الـ Browser Instance لكل Test Case بدلاً من فتح Context جديد.

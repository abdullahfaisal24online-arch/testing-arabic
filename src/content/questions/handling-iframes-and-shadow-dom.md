---
title: كيف بتتعامل مع الـ Frames و الـ Shadow DOM بالـ Selenium مقارنة بـ Playwright؟
slug: handling-iframes-and-shadow-dom
level: متقدّم
domain: أتمتة
shortAnswer: بالـ Selenium يلزم الانتقال اليدوي switchTo().frame() وتجاوز الـ Shadow Root بالـ JS، بينما بالـ Playwright يتم اختراق الـ Shadow DOM تلقائياً والوصول للـ Frames مباشرة عبر frameLocator().
tags:
  - Playwright
  - Selenium
  - Shadow DOM
  - iFrames
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لقياس قدرة المهندس على أتمتة العناصر المعقدة بالصفحات الحديثة.
- **الجواب النموذجي:** **Selenium:** يجب عمل Switch للـ Frame قبل التفاعل معه ثم الرجوع للـ Parent Frame. أما بالنسبة للـ Shadow DOM فيتطلب استخدام JavascriptExecutor للحصول على الـ Shadow Root.**Playwright:** الـ Selectors العادية بتخترق الـ Shadow DOM بشكل افتراضي بدون أي كود إضافي، ويمكن التعامل مع الـ Frames ببساطة باستخدام `page.frameLocator()`.
- **الفخ الشائع:** محاولة البحث عن عنصر داخل iFrame أو Shadow DOM بنفس الـ Locator العادي في Selenium دون عمل Switch.

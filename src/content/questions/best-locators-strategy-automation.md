---
title: كيف بتختار أفضل Locator بالـ Selenium أو Playwright؟
slug: best-locators-strategy-automation
level: متقدّم
domain: أتمتة
shortAnswer: الأفضلية للـ Custom Data Attributes (مثل data-testid) ثم الـ User-facing Attributes (مثل Role أو Text بالـ Playwright)، ثم الـ ID/CSS، وأخيراً الـ Absolute XPath.
tags:
  - Selenium
  - Playwright
  - CSS Selectors
  - XPath
  - Locators
relatedLessons: []
draft: false
---

- **ليش بينسأل؟** لمعرفة ما إذا كان المتقدم يكتب سيناريوهات متينة لا تتأثر بتغيرات التصميم المباشرة (Fragile vs Robust Locators).
- **الجواب النموذجي:** **Playwright Recommended:** استخدام الـ User-Facing Locators مثل `getByRole()`, `getByLabel()`, `getByTestId()`.**Selenium Recommended:** استخدام `id`, `name`, ثم `CSS Selectors` أو `Relative XPath` القصير.**تجنب:** الـ Absolute XPath (مثل `/html/body/div[2]/div/span`) لأنه ينكسر مع أي تعديل في هيكلية الصفحة.
- **الفخ الشائع:** الاعتماد الكلي على النسخ المباشر للـ XPath من الـ Browser DevTools.

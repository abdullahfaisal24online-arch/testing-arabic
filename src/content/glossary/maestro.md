---
title: Maestro
slug: maestro
termEn: Maestro
description: "أداة أتمتة موبايل بتكتب فيها الاختبار بملف YAML بسيط بدل كود."
category: أتمتة
aliases:
  - Maestro
  - مايسترو
draft: false
---

Maestro بيكتب الاختبار بملف YAML مقروء: `tapOn`، `inputText`، `assertVisible`. يعني مختبر يدوي بيقدر يبدأ أتمتة بدون خلفية برمجية — وهاي أكبر ميزة فيه.

وفيه انتظار ذكي مدمج: بيستنى العنصر يظهر لحاله، فما بتحتاج تكتب [انتظارات](/glossary/explicit-wait/) يدوية، وهاد بيقلّل [التذبذب](/glossary/flaky-test/) كثير مقارنة بالأدوات التقليدية.

وحدوده واضحة كمان: أقل مرونة من [Appium](/glossary/appium/) بالحالات المعقّدة، ومنظومته أصغر.

القاعدة العملية: تطبيق Flutter أو فريق بلا مبرمجين أتمتة؟ ابدأ بـ Maestro. تحتاج تحكّم عميق وتكامل واسع؟ Appium.

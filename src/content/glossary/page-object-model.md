---
title: نمط Page Object
slug: page-object-model
termEn: Page Object Model (POM)
description: "فصل تعريف عناصر الشاشة عن خطوات الاختبار، عشان التعديل يصير بمكان واحد."
category: أتمتة
aliases:
  - Page Object
  - Page Object Model
  - POM
  - نمط Page Object
draft: false
---

بدون POM بتلاقي محدّد زر الدخول مكرّر بـ٣٠ اختبار. بيتغيّر الزر؟ بتعدّل ٣٠ مكان — وبتنسى وحدة.

مع POM بتعمل ملف لكل شاشة فيه العناصر والأفعال، والاختبار بيصير يقرأ زي جملة: `loginPage.login(user, pass)`. بيتغيّر المحدّد؟ بتعدّل سطر واحد.

وفايدتين إضافيتين: الاختبارات بتصير مقروءة لحدا ما بيعرف أداة الأتمتة، والمحدّدات بتنجمع بمكان واحد فبتكتشف بسرعة أي شاشة بتعتمد على محدّدات هشّة.

وهاد بيشتغل مع كل الأدوات — Selenium، Playwright، [Appium](/glossary/emulator-vs-real-device/) — لأنه نمط تنظيم مش ميزة أداة.

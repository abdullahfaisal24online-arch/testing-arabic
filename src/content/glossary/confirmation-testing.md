---
title: اختبار التأكيد
slug: confirmation-testing
termEn: Confirmation Testing (Re-testing)
description: "إعادة تنفيذ نفس الخطوات بعد الإصلاح للتأكد إنه الـ Bug فعلاً انحل."
category: أنواع الاختبار
aliases:
  - اختبار التأكيد
  - إعادة الاختبار
  - Confirmation Testing
  - Re-testing
  - Retest
draft: false
---

المطوّر بيقول «انحل». اختبار التأكيد هو إنك ترجع **نفس الخطوات ونفس البيانات ونفس البيئة** اللي كشفت الـ Bug، وتتأكد بنفسك إنه ما عاد يظهر.

وبينخلط كثير مع [Regression](/glossary/regression/)، والفرق واضح: التأكيد بيفحص **الـ Bug نفسه** انحل، والـ Regression بيفحص إنه **الإصلاح ما كسر شي تاني**. الاثنين لازمين، وبهذا الترتيب.

وهاي المحطة اللي ما بتنتخطّى: تسكير الـ Bug بناءً على كلام المطوّر بدون إعادة اختبار هو أسرع طريق ليرجع Reopened بعد الإصدار.

التفاصيل: [دورة حياة الـ Bug](/glossary/defect-lifecycle/).

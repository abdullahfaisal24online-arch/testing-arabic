---
title: دورة حياة الـ Bug
slug: defect-lifecycle
termEn: Defect Life Cycle
description: "الحالات اللي بيمر فيها الـ Bug من لحظة ما تكتشفه لحدّ ما ينسكر."
category: إدارة الاختبار
aliases:
  - دورة حياة الـ Bug
  - دورة حياة العيب
  - Defect Life Cycle
  - Bug Life Cycle
  - Defect Lifecycle
draft: false
---

المسار المعتاد: New ← Assigned ← Fixed ← Retest ← Closed. وفي مسارات جانبية مهمة: Rejected لما المطوّر يشوفه سلوك صحيح، Deferred لما يتأجل لإصدار جاي، و Reopened لما الإصلاح ما زبط.

أهم محطة إلك كمختبر هي **Retest**: ما تسكّر الـ Bug إلا بعد ما تتأكد بنفسك إنه انحل على نفس البيئة ونفس الخطوات. والتسكير بدون إعادة اختبار من أكتر الأخطاء اللي بترجّع الـ Bug للحياة بعد الإصدار.

ولما يرجع Reopened كثير على نفس الميزة، هاي إشارة إنه [تقرير الـ Bug](/articles/how-to-write-bug-report/) ناقص معلومات، مش إنه المطوّر مقصّر.

الشرح الكامل: [دورة حياة الـ Bug](/articles/defect-life-cycle/).

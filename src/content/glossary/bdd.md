---
title: التطوير المقاد بالسلوك
slug: bdd
termEn: BDD — Behaviour-Driven Development
description: "وصف السلوك المطلوب بصيغة Given / When / Then يفهمها الكل."
category: أساسيات
aliases:
  - BDD
  - Behaviour Driven Development
  - Behavior-Driven Development
  - Given When Then
  - التطوير المقاد بالسلوك
draft: false
---

الفكرة إنه المتطلب ينكتب بلغة وحدة يفهمها المحلّل والمطوّر والمختبر والعميل، بصيغة ثابتة:

**Given** مستخدم مسجّل دخوله وعنده منتج بالسلة
**When** يضغط «إتمام الشراء»
**Then** بيتحوّل لصفحة الدفع وبتظهر قيمة الطلب

قيمته الحقيقية مش بالصيغة — بالنقاش اللي بيصير وانتوا بتكتبوها. أغلب سوء الفهم بينكشف بهاي الجلسة، قبل ما ينكتب كود.

وبتصير هاي السيناريوهات [معايير القبول](/glossary/acceptance-criteria/) وأساس حالات اختبارك مباشرة — وبأدوات زي Cucumber بتتحوّل لاختبارات مؤتمتة بنفس النص.

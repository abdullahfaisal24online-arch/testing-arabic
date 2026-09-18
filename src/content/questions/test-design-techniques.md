---
title: شو هي تقنيات تصميم حالات الاختبار (Test Design Techniques)؟
slug: test-design-techniques
level: مبتدئ
domain: أساسيات
shortAnswer: 'التقنيات تساعدنا نغطي أكبر قدر من حالات الاختبار بأقل عدد ممكن، وأشهرها: Equivalence Partitioning، Boundary Value Analysis، و State Transition Testing.'
tags:
  - Test Design
  - Equivalence Partitioning
  - Boundary Value Analysis
relatedLessons:
  - test-analysis-and-design
draft: false
---

- **ليش بينسأل؟** لقياس قدرة المهندس على تصميم اختبارات ذكية ومختصرة بدلاً من كتابة آلاف الحالات العشوائية.
- **الجواب النموذجي:** **Equivalence Partitioning (EP):** تقسيم البيانات لمجموعات (Valid/Invalid) واختبار عينة واحدة من كل مجموعة.**Boundary Value Analysis (BVA):** اختبار القيم على الحدود مباشرة (مثل الحد الأدنى والأقصى للتحقق من أخطاء الـ Off-by-one).**Decision Table Testing:** استخدام جدول القرار عندما تتعدد الشروط والنتائج المركبة.
- **الفخ الشائع:** اكتفاء المتقدم باختبار القيم العادية (Happy Path) وإهمال القيم الحدية والبيانات غير الصالحة.

---
title: مخرجات سكرم — Scrum Artifacts
slug: scrum-artifacts
description: 'الدرس الخامس من دورة أساسيات Scrum: المخرجات الثلاثة — Product Backlog و Sprint Backlog و Increment — والتزام كل مخرج، وليش Definition of Done أهم بند للمختبر.'
publishDate: 2026-09-07
updatedDate: ''
category: Jira و Agile
level: مبتدئ
duration: 08:11
videoId: a1f6800f-9f09-480d-96b6-1088d4d8cef5
youtubeUrl: ''
thumbnail: /uploads/scrum-05-artifacts.png
course: scrum
order: 5
lessonType: شرح
tags:
  - Scrum
  - Product Backlog
  - Sprint Backlog
  - Definition of Done
  - Increment
summary:
  - 'المخرجات الثلاثة موجودة لهدف واحد: الشفافية — وكل مخرج مربوط بالتزام'
  - Product Backlog قائمة مرتّبة ومتغيّرة، التزامها Product Goal، وهي المصدر الوحيد للشغل
  - Sprint Backlog = Sprint Goal (ليش) + العناصر المختارة (شو) + خطة التنفيذ (كيف)، وملك الـ Developers
  - 'Increment تراكمي: كل زيادة تُضاف للسابق وتتحقّق مع بعضها'
  - Definition of Done هي تعريف الجودة — أي شي ما بيحقّقها مش Done وما بيُعرض بالريفيو
prerequisites:
  - 'الدرس الرابع: اجتماعات سكرم — Scrum Events'
  - ما بتحتاج أي خلفية برمجية
relatedLessons:
  - scrum-framework
  - scrum-events
  - scrum-roles
  - scrum-intro
appUsed: ''
exerciseTitle: اكتب Definition of Done لفريقك
exercise:
  - 'افتح باكلوق مشروعك: هل هو مرتّب بأولوية واضحة ولا تكتات بلا ترتيب؟'
  - اكتب Product Goal لمنتجك بجملة واحدة
  - خود آخر سبرنت واكتب Sprint Goal + العناصر + الخطة — الثلاثة مع بعض
  - اكتب Definition of Done عند فريقك؛ إذا ما في مكتوبة، اكتب أوّل نسخة بـ 6 بنود
  - أضف للـ DoD بنود الاختبار المطلوبة عندك — وين بينتهي شغل الاختبار
  - حدّد عنصر انتهى «شكلياً» بسبرنت سابق وهو ما بيحقّق الـ DoD، وشو صار فيه بعدين
exerciseNote: ''
solution:
  - باكلوق بلا ترتيب معناه ما في PO فعّال — الترتيب مسؤوليته، والتنقية (refinement) شغل مستمر مع الفريق
  - Product Goal هدف طويل المدى، والباكلوق كله لازم يخدمه
  - الثلاثة مع بعض هم Sprint Backlog — الفريق بيحدّثه يومياً ولازم يكون مرئي للجميع
  - DoD جيدة = قابلة للتحقّق، مش «تم التطوير» بس — بتشمل الاختبار والمراجعة والتوثيق ومعايير الجودة
  - 'بنود اختبار نموذجية: حالات الاختبار منفّذة، اختبار انحدار للمسارات الحرجة، ما في عيوب مفتوحة بشدة عالية، وتغطية مصفوفة الأجهزة'
  - عنصر ما بيحقّق الـ DoD بيرجع للـ Product Backlog — ما بينزل ولا بينحسب Done جزئياً
solutionCode: ''
resources: []
featured: false
draft: false
---

هذا الدرس بيغطّي **مخرجات Scrum الثلاثة** والالتزام المربوط بكل واحد. الشرح بالفيديو، وهذا ملخّص سريع.

## ليش «مخرجات»؟

كل مخرج بيمثّل شغل أو قيمة، ومصمّم لهدف واحد: **الشفافية**. ولكل مخرج التزام بيقيس هل هو بيخدم هدفه:

| المخرج | الالتزام |
|---|---|
| Product Backlog | Product Goal |
| Sprint Backlog | Sprint Goal |
| Increment | Definition of Done |

## Product Backlog

قائمة **مرتّبة ومتغيّرة** بكل اللي محتاجه المنتج، وهي المصدر الوحيد للشغل. الـ PO مسؤول عن ترتيبها ووضوحها، و**التنقية (refinement)** شغل مستمر: تفصيل العناصر وتقديرها — والتقدير شغل الـ Developers. التزامها **Product Goal**: هدف طويل المدى يخدمه الباكلوق كله.

## Sprint Backlog

ثلاثة أجزاء مع بعض: **Sprint Goal** (ليش) + العناصر المختارة (شو) + خطة التنفيذ (كيف). ملك الـ Developers، بيحدّثوه يومياً، ولازم يكون مرئي.

## Increment و Definition of Done

- الإنكريمنت **تراكمي**: كل زيادة تُضاف للسابق وتتحقّق مع بعضها، وممكن يصير أكثر من إنكريمنت داخل السبرنت.
- **Definition of Done** هي الوصف الرسمي لحالة الجودة: شغل ما بيحقّقها **مش جزء من الإنكريمنت** — ما بينزل ولا بيُعرض بالريفيو، وبيرجع للباكلوق.
- إذا الـ DoD معيار مؤسسي، فهي الحد الأدنى لكل الفرق.

## وين المختبر؟

الـ DoD هي مكان الاختبار بالإطار: «Done» يعني **مختبَر حسب الـ DoD** — فبنود الاختبار لازم تكون مكتوبة فيها ومتّفق عليها، مش اجتهاد بآخر السبرنت.

بالدرس الجاي: تطبيق Scrum عملياً.

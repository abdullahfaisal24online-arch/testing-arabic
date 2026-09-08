---
title: أنواع الـ Issues في Jira
slug: jira-issue-types
description: 'الدرس الثالث: أنواع الـ Issues على Jira والفرق العملي بين Story و Task و Bug و Subtask، إيمتى تستخدم كل نوع، وكيف تضيفهم وتربطهم ببعض.'
publishDate: 2026-09-08
updatedDate: ''
category: Jira و Agile
level: مبتدئ
duration: 26:06
videoId: 921ff3cb-31ac-446b-af0a-8d46465bb1e1
youtubeUrl: ''
thumbnail: /uploads/jira-03-issues.png
course: jira
order: 3
lessonType: شرح
tags:
  - Jira
  - Issues
  - Story
  - Bug
  - Epic
summary:
  - Epic هدف كبير بيجمّع تحته Issues، والـ Subtask تقسيم داخلي لـ Issue واحد
  - الـ Story بتوصف قيمة للمستخدم، والـ Task شغل لازم ينعمل بس ما بيوصف قيمة مباشرة
  - الـ Bug انحراف عن السلوك المتوقّع — لازم خطوات إعادة إنتاج + نتيجة فعلية + نتيجة متوقّعة
  - 'أنواع الـ Issues مش ثابتة: بتقدر تضيف أو تعدّل الأنواع من إعدادات المشروع'
  - النوع الغلط بيطلع أرقام غلط بالتقارير والفلاتر — اختيار النوع مش تفصيل شكلي
prerequisites:
  - يكون عندك مشروع جاهز من الدرس الثاني
  - فكرة عن الـ Backlog والـ Board من الدرس الأول
relatedLessons:
  - jira-first-project
  - jira-intro
  - jira-sprint
  - jira-versions-releases
  - jira-project-settings
  - jira-reports
appUsed: Jira Cloud (Free plan)
exerciseTitle: رتّب الـ Backlog بأنواع صحيحة
exercise:
  - أنشئ Epic واحد يمثّل ميزة كبيرة بمشروعك
  - 'أضف تحته 3 Stories بصيغة: كمستخدم، بدي ... عشان ...'
  - أضف Task واحد لشغل ما إله واجهة — مثلاً تجهيز بيئة اختبار
  - سجّل Bug فيه خطوات إعادة إنتاج ونتيجة فعلية ونتيجة متوقّعة
  - قسّم أطول Story لـ Subtasks
  - افتح الـ Backlog وفلتر حسب النوع وشوف الصورة الكاملة
exerciseNote: ''
solution:
  - الـ Epic بيظهر بلون مميّز، وبتشوف كل اللي تحته من شاشته أو من الـ Timeline
  - إذا ما قدرت تكتبها بصيغة «كمستخدم...» غالباً هي Task مش Story
  - 'الـ Task شغل لازم ينعمل بس ما بيوصل قيمة للمستخدم: إعداد بيئة، ترحيل بيانات، توثيق'
  - bug بلا خطوات إعادة إنتاج بيرجع لإلك Cannot Reproduce — الخطوات + الفعلي + المتوقّع هي الحد الأدنى
  - الـ Subtask بتتبع Issue واحد وما بتنتقل لوحدها بين الـ Sprints
  - 'الفلترة حسب النوع بتكشف اختلال التوزيع: Backlog كله Tasks يعني محدا بيفكّر بقيمة المستخدم'
solutionCode: ''
resources: []
featured: false
draft: false
---

## هرم الأنواع

Epic فوق، تحته Story و Task و Bug، وتحتهم Subtask. الـ Epic بيجمّع شغل تحت هدف واحد، والـ Subtask بتقسّم شغلة وحدة لخطوات.

## Story مقابل Task

**Story**: بتوصف نتيجة للمستخدم — «كمستخدم، بدي أفلتر النتائج عشان ألاقي أسرع».

**Task**: شغل لازم ينعمل بس ما إله واجهة ولا قيمة مباشرة — إعداد بيئة، ترحيل بيانات، توثيق.

## الـ Bug

انحراف عن السلوك المتوقّع. الحد الأدنى لأي bug: خطوات إعادة الإنتاج، النتيجة الفعلية، والنتيجة المتوقّعة.

## ليش النوع مهم؟

التقارير والفلاتر واللوحات كلها بتتبنى على النوع. نوع غلط يعني تقارير بتحكي شي والواقع شي ثاني.

بالدرس الجاي: تقسيم الـ Backlog وتشغيل أول Sprint.

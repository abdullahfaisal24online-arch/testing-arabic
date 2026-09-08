---
title: كيف تضيف Version و Release على Jira
slug: jira-versions-releases
description: 'الدرس الخامس: إدارة الإصدارات على Jira — إنشاء Version، ربط الـ Issues فيها بحقل Fix Version، متابعة صفحة Releases، وإطلاع النسخة وشو بيصير للشغل اللي ما خلص.'
publishDate: 2026-09-08
updatedDate: ''
category: Jira و Agile
level: مبتدئ
duration: 06:30
videoId: 9327ee48-96c9-48e2-b544-1a4ec31ebfd5
youtubeUrl: ''
thumbnail: /uploads/jira-05-releases.png
course: jira
order: 5
lessonType: عملي
tags:
  - Jira
  - Version
  - Release
  - Fix Version
  - إدارة الإصدارات
summary:
  - الـ Version وحدة تجميع للشغل اللي رح يطلع بنسخة واحدة — مش نفس الـ Sprint
  - حقل Fix Version على الـ Issue هو اللي بيربطه بالإصدار، وبيتعبّى وقت التخطيط مش بعدين
  - صفحة Releases بتوريك لكل Version شو خلص وشو لسا — أسرع تقرير جاهز للفريق والعميل
  - لمّا تعمل Release بتنسكّر الـ Version وبينحدّد إلها تاريخ إصدار، والـ Issues غير المكتملة لازم تنقل
  - 'للمختبر: الـ Fix Version هي اللي بتحدّد شو لازم يُختبر بهذه النسخة وشو داخل بالـ regression'
prerequisites:
  - مشروع فيه Issues و Sprint شغّال من الدروس السابقة
  - صلاحية إدارة المشروع (Administer project) عشان تقدر تنشئ Versions
relatedLessons:
  - jira-intro
  - jira-first-project
  - jira-issue-types
  - jira-sprint
appUsed: Jira Cloud (Free plan)
exerciseTitle: أطلع أول Release من مشروعك
exercise:
  - افتح Releases من قائمة المشروع وأنشئ Version باسم 1.0
  - حدّد تاريخ إصدار متوقّع للـ Version
  - افتح 5 Issues واعطيهم Fix Version = 1.0
  - أنشئ Version ثانية باسم 1.1 واربط فيها Issue واحد
  - افتح صفحة Releases وقارن نسبة الإنجاز بين 1.0 و 1.1
  - اعمل Release للـ Version 1.0 وشوف شو صار للـ Issues غير المكتملة
exerciseNote: ''
solution:
  - Releases موجودة بقائمة المشروع، وزر Create version فوق الصفحة
  - تاريخ الإصدار المتوقّع بيطلع بصفحة Releases وبينبّه إذا الـ Version متأخّرة
  - Fix Version حقل على الـ Issue نفسه، وبتقدر تعبّيه لكلهم مرة وحدة بالـ Bulk change
  - Version وحدة بتقدر تحتوي Issues من أكثر من Sprint، والـ Sprint الواحد فيه Issues لأكثر من Version
  - صفحة Releases بتوريك عدد الـ Issues المكتملة وغير المكتملة لكل Version
  - 'وقت الـ Release، Jira بتسألك شو تعمل بالـ Issues غير المكتملة: تنقلها لـ Version ثانية أو تشيل الـ Fix Version'
solutionCode: ''
resources: []
featured: false
draft: false
---

## Version مقابل Sprint

الـ Sprint وحدة زمنية (فترة شغل)، والـ Version وحدة إصدار (شو رح يطلع للمستخدم). ممكن Version تأخد شغل من عدة Sprints.

## حقل Fix Version

هو الربط بين الـ Issue والإصدار. عبّيه وقت التخطيط مش بعد ما تطلع النسخة، وبتقدر تعبّيه لعدة Issues مرة وحدة من الـ Bulk change.

## صفحة Releases

من قائمة المشروع بتفتح Releases وبتشوف كل Version: كم Issue خلص، كم لسا، وتاريخ الإصدار المتوقّع — تقرير جاهز بلا مجهود.

## إطلاع النسخة (Release)

لمّا تضغط Release، الـ Version بتنسكّر وبينحدّد إلها تاريخ إصدار، ولازم تقرّر وين تروح الـ Issues اللي ما خلصت.

## وين بيوقع المختبر؟

الـ Fix Version بتعطيك قائمة الشغل اللي داخل النسخة — وهي أساس خطة الاختبار والـ regression قبل الإصدار.

بالدرس الجاي: إعدادات المشروع وإضافة الأعضاء وتوزيع الصلاحيات.

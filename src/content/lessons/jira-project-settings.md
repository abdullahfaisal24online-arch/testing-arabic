---
title: إعدادات المشروع — إضافة الأعضاء وتوزيع الصلاحيات
slug: jira-project-settings
description: 'الدرس السادس: جولة بـ Project settings — تعديل تفاصيل المشروع، إضافة الأعضاء وتحديد الأدوار، توزيع الـ Permissions، وتعديل أنواع الـ Issues والـ Workflow حسب فريقك.'
publishDate: 2026-09-08
updatedDate: ''
category: Jira و Agile
level: مبتدئ
duration: 10:34
videoId: 5cce4558-cb25-4b91-b92a-fc612e976cbc
youtubeUrl: ''
thumbnail: /uploads/jira-06-settings.png
course: jira
order: 6
lessonType: عملي
tags:
  - Jira
  - Project settings
  - Permissions
  - Roles
  - Workflow
summary:
  - 'Project settings هو مركز التحكّم: Details و Access و Issue types و Workflows و Notifications'
  - 'بالـ Team-managed الوصول بثلاث مستويات: Admin و Member و Viewer'
  - بالـ Company-managed الصلاحيات بتيجي من Permission scheme مربوطة بـ Roles مش بأشخاص
  - تعديل الـ Workflow بالـ Team-managed بيأثر على مشروعك بس، وبالـ Company-managed بيأثر على كل المشاريع المشتركة
  - 'القاعدة: أقل صلاحية تكفي — Viewer للعميل، Member للفريق، و Admin لواحد أو اثنين بس'
prerequisites:
  - مشروع جاهز من الدروس السابقة
  - تكون Admin على المشروع عشان تقدر تفتح الإعدادات
relatedLessons:
  - jira-intro
  - jira-first-project
  - jira-issue-types
  - jira-sprint
  - jira-versions-releases
  - jira-reports
appUsed: Jira Cloud (Free plan)
exerciseTitle: اضبط فريقك وصلاحياته
exercise:
  - افتح Project settings وعدّل اسم المشروع وأيقونته والـ Lead
  - 'أضف عضوين للمشروع بمستويين مختلفين: Member و Viewer'
  - جرّب تدخل بحساب Viewer وحاول تعدّل Issue
  - أضف Issue type جديد اسمه Test Case
  - عدّل الـ Workflow وأضف حالة جديدة اسمها In Review
  - حرّك Issue وشوف إن الحالة الجديدة طلعت على الـ Board
exerciseNote: ''
solution:
  - قسم Details فيه الاسم والـ Key والأيقونة والـ Lead — والـ Key هو الوحيد اللي تغييره موجع
  - بالـ Team-managed الوصول من Access، وبتختار Admin أو Member أو Viewer لكل شخص
  - الـ Viewer بيقرأ بس — ما بيقدر يضيف ولا يعدّل ولا ينقل Issue بين الأعمدة
  - أنواع الـ Issues بتتعدّل من Issue types، وكل نوع إله حقوله والـ Workflow الخاص فيه
  - أي حالة تضيفها على الـ Workflow بتطلع كعمود على الـ Board أو بتربطها بعمود موجود
  - In Review حالة شائعة بتفصل «خلص التطوير» عن «خلص الاختبار» وبتوضّح شغل المختبر على الـ Board
solutionCode: ''
resources: []
featured: false
draft: false
---

## وين Project settings؟

من داخل المشروع، آخر خيار بالقائمة الجانبية. جوّاه: Details و Access و Issue types و Workflows و Notifications.

## الأعضاء والوصول

بالـ Team-managed بتضيف الشخص من Access وبتعطيه Admin أو Member أو Viewer. بالـ Company-managed القصة من Roles و Permission scheme عند الأدمن.

## أقل صلاحية تكفي

Viewer للعميل والمتابعين، Member للفريق، و Admin لواحد أو اثنين بس. كل ما زادوا الـ Admins زادت التعديلات اللي محدا يعرف مين عملها.

## Issue types والـ Workflow

بتقدر تضيف أو تعدّل أنواع الـ Issues وحقولها، وتعدّل الـ Workflow بإضافة حالات أو Transitions جديدة عشان تعكس شغل فريقك الفعلي.

## للمختبر: حالة In Review

إضافة حالة بين In Progress و Done بتخلّي شغل الاختبار ظاهر على الـ Board بدل ما يكون مخفي جوّا Done.

بالدرس الجاي: تقارير Jira وقراءة أداء الفريق.

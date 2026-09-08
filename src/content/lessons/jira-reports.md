---
title: تقارير Jira — اقرأ أداء فريقك وتقدّمه
slug: jira-reports
description: 'الدرس السابع والأخير: تقارير Jira — Burndown و Velocity و Cumulative Flow والـ Dashboards، وكيف تقرأ منهم أداء الفريق ووين بيعلق الشغل.'
publishDate: 2026-09-08
updatedDate: ''
category: Jira و Agile
level: مبتدئ
duration: 12:03
videoId: c43c8c56-9605-4509-bae9-fbbe73b2dd97
youtubeUrl: ''
thumbnail: /uploads/jira-07-reports.png
course: jira
order: 7
lessonType: شرح
tags:
  - Jira
  - Reports
  - Burndown
  - Velocity
  - Dashboard
summary:
  - تقارير Jira بتقرأ من بيانات الـ Issues نفسها — تقارير غلط معناها إدخال غلط مش أداة غلط
  - الـ Burndown chart بيوري الشغل المتبقّي يوم بيوم — والخط المسطّح معناه ما في شي بيخلص
  - الـ Velocity بتقارن الملتزم فيه مقابل المنجز عبر كذا Sprint، وبتستخدم للتخطيط مش للمحاسبة
  - Cumulative Flow و Control chart بيوروا وين الشغل بيعلق بين الحالات
  - الـ Dashboards بتجمّع Gadgets من أكثر من مشروع بشاشة وحدة — مفيدة للعميل والإدارة
prerequisites:
  - Sprint مكتمل أو شغّال من الدرس الرابع
  - الـ Issues حالاتها محدّثة بشكل يومي وإلا التقارير ما إلها معنى
relatedLessons:
  - jira-intro
  - jira-first-project
  - jira-issue-types
  - jira-sprint
  - jira-versions-releases
  - jira-project-settings
appUsed: Jira Cloud (Free plan)
exerciseTitle: اقرأ تقاريرك واستنتج ثلاث قرارات
exercise:
  - افتح Reports من قائمة المشروع وشوف شو التقارير المتوفّرة
  - افتح الـ Burndown chart لآخر Sprint واكتب إيمتى بلّش الخط ينزل
  - افتح الـ Velocity واحسب متوسط آخر ثلاث Sprints
  - افتح Cumulative Flow وحدّد أعرض شريط — الحالة اللي بيتكدّس فيها الشغل
  - أنشئ Dashboard جديدة وضيف Gadget بيوري الـ Issues حسب الحالة
  - اكتب 3 استنتاجات قابلة للتنفيذ من التقارير عن شغل فريقك
exerciseNote: ''
solution:
  - 'التقارير بتختلف حسب القالب: Scrum فيه Burndown و Velocity، و Kanban فيه Control chart و Cumulative Flow'
  - خط بينزل بس بآخر يومين معناه الشغل بيخلص كله بالنهاية — خطر على الاختبار
  - متوسط الـ Velocity بيعطيك سقف واقعي للـ Sprint الجاي، مش هدف لازم تزيده كل مرة
  - أعرض شريط بالـ Cumulative Flow هو أكبر تكدّس، وغالباً بيكون عند In Review أو الاختبار
  - الـ Dashboard بتنشأ من قائمة Dashboards فوق، والـ Gadgets بتنضاف من Add gadget
  - 'الاستنتاج المفيد قابل للتنفيذ: قلّل حجم الـ Sprint، ابدأ الاختبار أبكر، قسّم الـ Issues الكبيرة'
solutionCode: ''
resources: []
featured: false
draft: false
---

## من وين التقارير؟

من قائمة المشروع اختر Reports. التقارير بتتولّد من بيانات الـ Issues نفسها، فإذا الفريق ما بيحدّث الحالات ما رح تطلع معك أرقام صحيحة.

## Burndown chart

بيوري الشغل المتبقّي بالـ Sprint يوم بيوم مقابل الخط المثالي. خط مسطّح لأيام طويلة معناه الشغل ما بيوصل لـ Done — غالباً لأنه عالق بالاختبار.

## Velocity

بتقارن الملتزم فيه مقابل المنجز عبر عدة Sprints. استخدمها لتخطّط واقعي، مش لتقارن فريق بفريق.

## Cumulative Flow و Control chart

بيوروا كمية الشغل بكل حالة عبر الزمن والوقت اللي بيقضيه الـ Issue بكل حالة — أسرع طريقة تلاقي الـ Bottleneck.

## Dashboards

شاشة بتجمّع Gadgets من أكثر من مشروع: عدد الـ Issues حسب الحالة، الـ bugs المفتوحة، وتقدّم الـ Sprint — مفيدة للعميل والإدارة.

## للمختبر

التقارير أقوى دليل لمّا تحكي إن الاختبار بيبلّش متأخّر: ورّيهم الـ Burndown والتكدّس بحالة الاختبار بدل النقاش بالرأي.

بهيك بنكون خلّصنا الدورة: من إنشاء أول Project لحد قراءة التقارير. طبّق على مشروع حقيقي ورح تلاقي الفرق.

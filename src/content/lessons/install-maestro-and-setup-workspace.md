---
title: تثبيت أداة Maestro وإعداد بيئة العمل وربط الجهاز
slug: install-maestro-and-setup-workspace
description: خطوات تطبيقية لتثبيت أداة Maestro، إنشاء مساحة العمل (Workspace)، ربط المحاكي أو الجهاز الحقيقي، وتثبيت التطبيق واكتشافه للبدء بالأتمتة.
publishDate: 2026-09-13
updatedDate: ''
category: أتمتة
level: متقدّم
duration: 16:40
videoId: 03a7f26e-6445-469c-9dad-3093829c75aa
youtubeUrl: ''
thumbnail: /uploads/ep02_A_install (1).jpg
course: maestro-mobile-automation
order: 2
lessonType: أدوات
tags:
  - Installation
  - Maestro
  - Workspace
summary:
  - تثبيت أداة Maestro على جهازك
  - إنشاء وتنظيم مساحة العمل (Workspace) الخاصة بمشاريع الاختبار.
  - ربط المحاكي (Emulator/Simulator) أو الجهاز الحقيقي (Real Device) بالأداة.
  - تثبيت التطبيق المستهدف واستكشافه لاستخراج العناصر واختباره.
prerequisites:
  - مشاهدة الدرس الأول (مقدمة في Maestro).
  - تشغيل محاكي Android Studio أو iOS Simulator أو توفير جهاز حقيقي مفعّل عليه الوضع المطور (Developer Options / USB Debugging).
relatedLessons:
  - introduction-to-maestro-framework
appUsed: Maestro Studio
exerciseTitle: إعداد البيئة الكاملة لتشغيل Maestro واختبار تطبيق على المحاكي
exercise:
  - قم بتثبيت Maestro على جهازك والتأكد من نجاح عملية التثبيت.
  - أنشئ مجلداً جديداً يمثل مساحة العمل (Workspace).
  - قم بتشغيل المحاكي (Emulator) والتحقق من ارتباطه بالأداة.
  - ثبت التطبيق المراد اختباره على المحاكي وقم باستكشافه.
exerciseNote: تأكد من فتح الـ Terminal داخل مجلد مساحة العمل (Workspace) وتأكد من أن الجهاز أو المحاكي متصل وجاهز عبر الأمر adb devices في حال استخدام Android.
solution:
  - ثبت Maestro من خلال الأمر الرسمي في الـ Terminal.
  - 'أنشئ المجلد وانتقل إليه: mkdir maestro-workspace && cd maestro-workspace.'
  - تأكد من ظهور المحاكي المتصل.
  - 'شغل أمر Maestro للتحقق من الاتصال واستكشاف التطبيق عبر Studio: maestro studio.'
solutionCode: |-
  # 1. التثبيت (Install)
  curl -FsSL "https://get.maestro.mobile.dev" | bash

  # 2. إنشاء مساحة العمل (Workspace)
  mkdir maestro-workspace
  cd maestro-workspace

  # 3. التأكد من ربط الجهاز (Check connected devices)
  adb devices

  # 4. تشغيل Maestro Studio لاكتشاف التطبيق (Install & Explore)
  maestro studio
resources: []
featured: false
draft: false
---

### خطة إعداد بيئة العمل مع Maestro

في هذا الدرس سنتعرف على الخطوات العملية الأربع لإعداد بيئة العمل وبدء أتمتة التطبيقات:

#### 1. التثبيت (Install)

نبدأ بتنزيل وتثبيت أداة Maestro على الجهاز من خلال الأمر الرسمي الموفر من موقع الأداة، للـ Terminal لتصبح الأداة متاحة للاستخدام المباشر.

#### 2. مساحة العمل (Workspace)

إعادة تنظيم وتجهيز المجلد الرئيسي الذي سيوضع فيه ملفات الاختبار (YAML Flow Files) والإعدادات الخاصة بالمشروع لضمان سهولة الإدارة والتتبع.

#### 3. ربط الجهاز (Emulator / Real Device)

ربط البيئة التشغيلية سواء كانت محاكي وهمي (Android Emulator / iOS Simulator) أو جهازاً حقيقياً متصلاً عبر الـ USB، والتحقق من التعرف عليه بواسطة أدوات النظام (مثل ADB).

#### 4. التطبيق (Install & Explore)

تثبيت ملف التطبيق (APK / APP) على المحاكي واستكشاف الواجهات والعناصر (Elements) باستخدام أدوات Maestro التفاعلية مثل **Maestro Studio** للتحضير لكتابة أسطر الاختبار.

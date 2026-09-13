---
title: مقدمة - ليه مايسترو (Maestro) ؟!
slug: introduction-to-maestro-framework
description: تعرّف على أداة Maestro الحديثة لأتمتة اختبار تطبيق Android وiOS بطريقة بسيطة وسريعة، ولماذا تعتبر الخيار الأفضل مقارنة بأدوات الأتمتة التقليدية.
publishDate: 2026-09-13
updatedDate: ''
category: أتمتة
level: متقدّم
duration: 01:50
videoId: f5b2d752-c7d6-45d1-b1f6-f3e3d73341b0
youtubeUrl: ''
thumbnail: /uploads/wm_W3_glow.jpg
course: maestro-mobile-automation
order: 1
lessonType: أدوات
tags:
  - Maestro
  - Mobile Automation
  - UI Testing
summary:
  - مفهوم أداة Maestro وكيفية عملها في أتمتة التطبيقات.
  - أسباب اختيار Maestro واختلافها عن أدوات مثل Appium.
  - 'الميزات الرئيسية: البساطة، السرعة، وعدم الحاجة لكتابة كود معقد.'
prerequisites:
  - معرفة أساسية بمبادئ اختبار البرمجيات (Software Testing).
  - خلفية بسيطة عن تطبيقات الهاتف المحمول (Android / iOS).
relatedLessons: []
appUsed: Maestro Studio
exerciseTitle: تنزيل أداة Maestro وتجهيز Maestro Studio للعمل
exercise:
  - التوجه إلى الموقع الرسمي لأداة Maestro واتباع تعليمات التثبيت.
  - فتح التطبيق/المحاكي (Emulator/Simulator) المطلوب اختباره.
  - تشغيل أداة Maestro Studio من خلال الخصر/الطرفية (Terminal) للبدء بتحديد عناصر الشاشة تفاعلياً.
exerciseNote: تأكد من إعداد المحاكي (Android Emulator أو iOS Simulator) وتشغيله قبل البدء بفتح Maestro Studio.
solution:
  - اتبع أمر التثبيت الرسمي المذكور في التوثيق (Documentation) على الموقع الرسمي.
  - قم بتشغيل المحاكي الخاص بك افتح التطبيق المستهدف.
  - شغل الأمر maestro studio في الـ Terminal ليفتح لك واجهة Studio التفاعلية في المتصفح.
solutionCode: |-
  # تثبيت Maestro عبر الأمر الرسمي من التوثيق:
  curl -FsSL "https://get.maestro.mobile.dev" | bash

  # تشغيل Maestro Studio التفاعلي:
  maestro studio
resources: []
featured: false
draft: false
---

### ما هي أداة مايسترو (Maestro)؟

أداة **Maestro** هي إطار عمل حديث ومفتوح المصدر مخصص لأتمتة اختبار واجهات المستخدم (UI Testing) لتطبيقات الهاتف المحمول (Android و iOS). تم تصميم الأداة لتكون بسيطة جداً وسريعة مقارنة بالأدوات التقليدية مثل Appium أو Espresso.

### لماذا نستخدم Maestro؟

تعتمد Maestro على كتابة سيناريوهات الاختبار باستخدام لغة **YAML** البسيطة، مما يعني أنك لا تحتاج لكتابة أكواد برمجية معقدة أو إدارة تعريفات العناصر (Element Locators) بالطرق البرمجية الصعبة.

أبرز ما يدفعنا لاستخدامها:

- **سهولة التعلم والإنشاء:** كتابة الاختبارات تتم بلغة واضحة وقريبة من اللغة البشرية.
- **التعامل الذكي مع التأخير (Flakiness):** تمتلك Maestro آلية معالجة تلقائية للتأخير والتغيرات في الواجهة (Built-in Flakiness Tolerance).
- **إعداد سريع (Zero-setup overhead):** لا تتطلب تثبيت تعريفات معقدة أو إعدادات برمجية طائلة للبدء.

### لماذا يُعد Maestro أفضل من غيره؟

| **الميزة** | **Maestro** | **Appium / Tools الأخرى** |
| **لغة الإعداد** | YAML بسيطة وسريعة | أسطر كود برمجية متطاولة (Java, Python, JS) |
| **السرعة والثبات** | سرعة عالية في التنفيذ وثبات ممتاز | أبطأ نسبياً وعرضة لمشاكل Flaky Tests |
| **دعم المنصات** | دعم موحد لـ React Native, Flutter, Native iOS & Android | يتطلب إعدادات خاصة لكل بيئة عمل |
| **إعادة التشغيل والتصحيح** | يدعم التحديث المباشر أثناء التعديل (Hot Reload) | يتطلب إعادة بناء وتشغيل الاختبار من البداية |

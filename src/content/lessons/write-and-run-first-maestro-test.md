---
title: أول اختبار أتمتة باستخدام Maestro (smoke و login)
slug: write-and-run-first-maestro-test
description: تعلم كيفية كتابة أول سناريوهات اختبار عملي (Smoke Test & Login Flow) باستخدام ملفات YAML وتشغيلها بنجاح عبر أداة Maestro.
publishDate: 2026-09-13
updatedDate: ''
category: Jira و Agile
level: متقدّم
duration: 35:07
videoId: e89a9d6e-9c07-49d9-b345-a84754b81eae
youtubeUrl: ''
thumbnail: /uploads/ep03_A_first_test.jpg
course: ''
order: 3
lessonType: أدوات
tags:
  - Maestro
  - YAML
  - Smoke Test
  - Login Flow
  - Mobile Automation
summary:
  - بناء الهيكل الأساسي لملف اختبار Maestro باستخدام صيغة YAML.
  - كتابة ملف اختبار الدخان الأول 01_smoke.yaml للتحقق من تشغيل التطبيق والصفحة الرئيسية.
  - إنشاء سيناريو تسجيل الدخول 02_login.yaml والتعامل مع النقر على العناصر وإدخال النصوص.
  - تشغيل ملفات الاختبار عبر Terminal ومتابعة النتيجة (Pass / Fail).
prerequisites:
  - إعداد بيئة Maestro وربط المحاكي (الدرس الثاني).
  - معرفة بسيطة بكيفية فتح المجلد في محرر الأكواد (VS Code).
relatedLessons:
  - introduction-to-maestro-framework
  - install-maestro-and-setup-workspace
appUsed: Maestro Studio
exerciseTitle: كتابة ملف اختبار Smoke وتجربة تشغيله عبر Maestro
exercise:
  - افتح مجلد مشروعك في محرر الأكواد (VS Code).
  - أنشئ ملفاً جديداً باسم 01_smoke.yaml واكتب فيه معرف التطبيق (appId) وخطوات النقر واختبار ظهور النصوص.
  - تأكد من تشغيل المحاكي وتثبيت التطبيق.
  - نفذ أمر تشغيل الاختبار من خلال الـ Terminal وافحص النتيجة.
exerciseNote: تأكد من استبدال com.example.app بمعرّف التطبيق الحقيقي (App ID) الذي تقوم باختباره.
solution:
  - أنشئ الملف 01_smoke.yaml وزوّده بالأوامر الأساسية مثل launchApp, tapOn, assertVisible.
  - شغل المحاكي المتصل.
  - 'افتح الـ Terminal في نفس المجلد وشغّل الأمر: maestro test 01_smoke.yaml.'
solutionCode: |-
  # 01_smoke.yaml
  appId: com.example.app
  ---
  - launchApp
  - assertVisible: "Welcome"
  - tapOn: "Get Started"
resources: []
featured: false
draft: false
---

### كتابة أول اختبار وتشغيله باستخدام Maestro

بعد إعداد البيئة والمحاكي، حان الوقت لكتابة أول سيناريوهات اختبار فعلية باستخدام لغة **YAML** البسيطة.

### 1. اختبار الدخان الأول (`01_smoke.yaml`)

يهدف هذا الاختبار للتحقق من أن التطبيق يفتح بنجاح وأن العناصر الرئيسية على الشاشة الأولى تظهر بدون مشاكل:

YAML

```plain
appId: com.example.app
---
- launchApp
- assertVisible: "Welcome"

```

### 2. سيناريو تسجيل الدخول (`02_login.yaml`)

في هذا الملف نتوسع لكتابة تدفق عملي يتفاعل مع مدخلات المستخدم مثل إدخال الاسم، كلمة المرور، والضغط على زر الدخول:

YAML

```plain
appId: com.example.app
---
- launchApp
- tapOn: "Login"
- inputText: "user@example.com"
- tapOn: "Password"
- inputText: "123456"
- tapOn: "Submit"
- assertVisible: "Dashboard"

```

### 3. طريقة التشغيل

لتشغيل أي ملف اختبار، نستخدم الأمر `maestro test` متبوعاً باسم الملف داخل الـ Terminal:

Bash

```plain
maestro test 01_smoke.yaml
maestro test 02_login.yaml
```

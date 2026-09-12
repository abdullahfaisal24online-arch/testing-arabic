---
title: إنشاء Mock API باستخدام JSON Server
slug: create-mock-api-using-json-server-postman
description: تعلم كيفية بناء واجهة برمجة تطبيقات وهمية (Mock API) كاملة في دقائق باستخدام مكتبة JSON Server وتطوير سيناريوهات فحص الـ CRUD بـ Postman بدون الحاجة لكتابة كود Backend.
publishDate: 2026-09-12
updatedDate: ''
category: أساسيات
level: مبتدئ
duration: 19:30
videoId: db7fd413-7bc1-43d2-b09c-56e7922fbe45
youtubeUrl: ''
thumbnail: /uploads/تعلم (2).png
course: ''
order: 1
lessonType: شرح
tags:
  - Postman
  - Mock API
  - JSON Server
  - API Testing
  - REST API
summary:
  - فهم مفهوم الـ Mock API ولماذا يحتاجه مهندس الـ QA في مرحلة الفحص
  - تثبيت Node.js ومكتبة JSON Server على الجهاز خطوة بخطوة
  - إنشاء ملف db.json لتحديد البيانات والهيكلية المطلوبة
  - تشغيل الـ Server المحلي واختبار الـ Endpoints الكاملة (GET, POST, PUT, DELETE) عبر Postman
prerequisites:
  - معرفة أساسيات أداة Postman والـ APIs (الدرس الأول)
  - تثبيت بيئة Node.js على جهازك (سنمر عليها بالخطوات)
relatedLessons:
  - introduction-to-apis-and-postman
appUsed: JSON Server & Postman
exerciseTitle: بناء Mock API محلي وتطبيق عمليات الـ CRUD عليه
exercise:
  - 'قم بتثبيت json-server عالمياً على جهازك باستخدام الأمر: npm install -g json-server.'
  - أنشئ ملفاً باسم db.json يحتوي على مصفوفة منتجات أو مستخدمين.
  - شغّل السيرفر عبر الأمر json-server --watch db.json وتأكد من عمل الرابط http://localhost:3000/posts.
  - افتح Postman وقم بإرسال طلب POST لإضافة عنصر جديد، ثم تحقق من إضافته بطلب GET.
exerciseNote: 'تأكد من إضافة الهيدر Content-Type: application/json عند إرسال طلبات POST أو PUT في Postman.'
solution:
  - 'افتح السطر البرمجي (Terminal/CMD) واكتب: npx json-server db.json.'
  - انسخ الرابط المحالي http://localhost:3000/posts.
  - في Postman أنشئ طلب POST مع Body من نوع raw / JSON.
  - اضغط Send وتأكد أن الـ Status Code هو 201 Created.
solutionCode: |-
  {
    "posts": [
      { "id": 1, "title": "First Test Post", "author": "QA Engineer" },
      { "id": 2, "title": "Second Test Post", "author": "Testing Arabic" }
    ]
  }
resources: []
featured: false
draft: false
---

أهلاً بك في الدرس الثاني من دورة Postman و API Testing!

في كثير من الأحيان أثناء عملك كـ \*\*QA Engineer\*\*، تكون واجهات الـ Backend غير جاهزة بعد، أو تريد بيئة آمنة للتجارب دون التأثير على قواعد البيانات الحقيقية. هنا يأتي دور الـ \*\*Mock API\*\*.

---

### 1. ما هو الـ Mock API ولماذا نحتاجه؟

الـ \*\*Mock API\*\* هو سيرفر وهمي يُحاكي سلوك الـ API الحقيقي؛ حيث يعيد استجابات (Responses) وبيانات وهمية تمكنك من كتابة وتصميم الـ Test Cases واختبار الواجهات مبكراً.

\*\*فوائد الـ Mock API:\*\*

\* \*\*الفحص المبكر (Shift-Left Testing):\*\* البدء بكتابة وتجربة أوتوميشن الـ API قبل انتهاء المطور من الكود.

\* \*\*الاستقلالية:\*\* عدم الاعتماد على توفر السيرفرات الحقيقية أو انقطاعها.

\* \*\*محاكاة الحالات الخاصة:\*\* إمكانية تعديل البيانات بسهولة لاختبار أخطاء السيرفر (مثل 500 أو 404).

---

### 2. ما هو JSON Server؟

\*\*JSON Server\*\* هي أداة رائعة ومفتوحة المصدر تمكنك من إنشاء \*\*Full Fake REST API\*\* كامل ومحلي خلال أقل من دقيقة باستخدام ملف JSON بسيط دون الحاجة لكتابة أي كود Backend!

---

### 3. خطوات التثبيت والتشغيل خطوة بخطوة

#### الخطوة الأولى: تثبيت Node.js

تأكد من تثبيت بيئة [Node.js](https://nodejs.org/) على جهازك.

#### الخطوة الثانية: إنشاء ملف البيانات \`db.json\`

أنشئ مجلداً جديداً على جهازك وأنظئ داخله ملفاً باسم \`db.json\` وضغ داخله الكود التالي:

\`\`\`json

{

  "users": [

    { "id": 1, "name": "Ahmad", "role": "QA Lead" },

    { "id": 2, "name": "Sara", "role": "Software Tester" }

  ]

}

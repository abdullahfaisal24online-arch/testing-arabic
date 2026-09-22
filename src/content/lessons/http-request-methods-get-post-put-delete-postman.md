---
title: فهم طرق طلبات HTTP الأساسية (GET, POST, PUT, DELETE)
slug: http-request-methods-get-post-put-delete-postman
description: تعرف على طرق طلبات HTTP الأساسية (CRUD Operations)، وفروقات الاستخدام بين GET و POST و PUT و DELETE وكيفية تطبيق واختبار كل طريقة عملياً باستخدام أداة Postman.
publishDate: 2026-09-12
updatedDate: ''
category: أدوات
level: متقدّم
duration: 19:30
videoId: 76122f90-28c7-4cd8-abcb-805f1130d868
youtubeUrl: ''
thumbnail: /uploads/http-request-methods-get-post-put-delete-postman-3.png
course: postman-course
order: 3
lessonType: شرح
tags:
  - Postman
  - HTTP Methods
  - REST API
  - CRUD
  - API Testing
summary:
  - فهم مفهوم طرق طلبات HTTP (HTTP Request Methods) وعلاقتها بـ REST APIs
  - التعرف على الاستخدامات والفرق الدقيق بين GET و POST و PUT و DELETE
  - كيفية إرسال البيانات وإضافة -Body و Headers المناسبة لكل طريقة
  - فهم أنواع الاستجابة (Status Codes) المتوقعة لكل نوع طلب
prerequisites:
  - معرفة أساسيات Postman وكيفية إنشاء Mock API (الدرسين الأول والثاني)
relatedLessons:
  - introduction-to-apis-and-postman
  - create-mock-api-using-json-server-postman
appUsed: Postman Desktop App
exerciseTitle: تطبيق دورة حياة البيانات الكاملة (CRUD) على سيرفر محلي
exercise:
  - قم بتشغيل سيرفر JSON Server المحلي من الدرس السابق.
  - أرسل طلب GET لجلب كافة المنتجات والتأكد من نجاح الاتصال.
  - أرسل طلب POST لإضافة منتج جديد مع تمرير البيانات في الـ Body بصيغة JSON.
  - أرسل طلب PUT لتعديل كامل تفاصيل المنتج بناءً على الـ ID الخاص به.
  - أرسل طلب DELETE لحذف هذا المنتج والتحقق من أنه لم يعد موجوداً.
exerciseNote: 'تأكد من ضبط Header: Content-Type = application/json عند إرسال طلبات POST و PUT.'
solution:
  - أنشئ طلب POST إلى http://localhost:3000/posts وأدخل كود الـ JSON في تبويب Body -> raw -> JSON.
  - أنشئ طلب PUT إلى http://localhost:3000/posts/1 لتحديث بيانات العنصر الأول.
  - أنشئ طلب DELETE إلى http://localhost:3000/posts/1 واضغط Send للتأكد من إرجاع status code 200 أو 204.
solutionCode: |-
  {
    "title": "Updated Article Title",
    "author": "Senior QA Engineer",
    "category": "API Automation"
  }
resources: []
featured: false
draft: false
---

مرحباً بك في الدرس الثالث من دورة Postman و API Testing!

الـ \*\*HTTP Methods\*\* (أو ما يُعرف بالـ HTTP Verbs) هي الأساس الذي يعتمد عليه بروتوكول HTTP لتحديد نوع الإجراء أو العملية المطلوبة من السيرفر. في هذا الدرس، سنشرح أهم 4 طرق تُشكل ما يُعرف بـ \*\*CRUD Operations\*\* (Create, Read, Update, Delete).

---

### 1. ما هي طرق طلبات HTTP الرئيسية؟

تُستخدم هذه الطرق لتوجيه السيرفر حول ما يجب فعله بالبيانات المحددة في الرابط (URL):

#### 1. طلب \`GET\` (Read)

\* \*\*الوظيفة:\*\* قراءة أو استرجاع البيانات من السيرفر.

\* \*\*الخصائص:\*\* لا يحتوي عادةً على Body، وآمن تماماً (Safe & Idempotent) لأنه لا يغير شيئاً في قاعدة البيانات.

\* \*\*رمز الاستجابة المتوقع:\*\* \`200 OK\`.

#### 2. طلب \`POST\` (Create)

\* \*\*الوظيفة:\*\* إنشاء عنصر أو سجل جديد على السيرفر.

\* \*\*الخصائص:\*\* يتم إرسال البيانات داخل الـ \*\*Body\*\* (عادة بصيغة JSON). غير مكرر آلياً (Non-Idempotent) لأن تكراره ينشئ عناصر جديدة بكل مرة.

\* \*\*رمز الاستجابة المتوقع:\*\* \`201 Created\`.

#### 3. طلب \`PUT\` (Update)

\* \*\*الوظيفة:\*\* تحديث واستبدال عنصر كامل موجود مسبقاً على السيرفر.

\* \*\*الخصائص:\*\* يتطلب إرسال الـ ID الخاص بالعنصر في الـ URL وتمرير البيانات الكاملة في الـ Body.

\* \*\*رمز الاستجابة المتوقع:\*\* \`200 OK\` أو \`204 No Content\`.

#### 4. طلب \`DELETE\` (Delete)

\* \*\*الوظيفة:\*\* حذف عنصر معين من قاعدة البيانات.

\* \*\*الخصائص:\*\* يتطلب تمرير معرّف العنصر (ID) في الرابط لعدم حذف بيانات أخرى بطريق الخطأ.

\* \*\*رمز الاستجابة المتوقع:\*\* \`200 OK\` أو \`204 No Content\`.

---

### 2. ملخص الفرق بين PUT و PATCH

\* \*\*\`PUT\`:\*\* يقوم بستبدال \*\*كامل البيانات\*\* الخاصة بالعنصر. إذا نسيت إرسال أحد الحقول سيتدمر الحقل أو يتحول إلى NULL.

\* \*\*\`PATCH\`:\*\* يُستخدم للتعديل \*\*الجزئي\*\* فقط (مثلاً تغيير البريد الإلكتروني للمستخدم دون المساس بباقي معلوماته).

---

### 3. التطبيق العملي في Postman

عند اختيار أي طريقة من هذه الطرق داخل أداة Postman:

1. حدد نوع الطلب من القائمة المنسدلة بجانب الرابط.

2. أدخل رابط الـ Endpoint المناسب.

3. إذا كان الطلب \`POST\` أو \`PUT\` أو \`PATCH\`؛ انتقل لتبويب \*\*Body\*\* واختر \*\*raw\*\* ثم نغير النوع إلى \*\*JSON\*\*.

4. اضغط \*\*Send\*\* وراجع الـ Response والـ Status Code الناتج.

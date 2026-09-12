---
title: إدارة الطلبات المتقدمة باستخدام Collections و كتابة الاختبارات بـ Scripts
slug: postman-collections-tests-and-scripts
description: تعلم كيفية تنظيم طلبات API داخل مجموعات (Collections)، وكتابة السكريبتات الآلية (Tests Scripts) في Postman لاختبار استجابة السيرفر وتأكيد الـ Status Code والـ Response Body تلقائياً.
publishDate: 2026-09-12
updatedDate: ''
category: أدوات
level: متقدّم
duration: 24:01
videoId: ddcabda2-55ae-4600-8738-5ddfe16e3b1f
youtubeUrl: ''
thumbnail: /uploads/تعلم (4).png
course: postman-course
order: 4
lessonType: عملي
tags:
  - Postman
  - Collections
  - API Testing
  - Test Automation
  - JavaScript
summary:
  - مفهوم الـ Collections وكيفية هيكلة وتمرير الطلبات بداخلها بفاعلية.
  - التعرف على تبويب Pre-request Script وتمرير البيانات قبل إرسال الطلب.
  - كتابة سيناريوهات الاختبارات وتأكيد النتيجة باستخدام كتابة الـ Assertions وتبويب Tests.
  - كيفية تشغيل مجموعة طلبات كاملة بنقرة واحدة باستخدام Collection Runner.
prerequisites:
  - فهم طرق طلبات HTTP الأساسية واستخدام Postman (الدرس الثالث)
relatedLessons:
  - introduction-to-apis-and-postman
  - http-request-methods-get-post-put-delete-postman
  - create-mock-api-using-json-server-postman
appUsed: Postman Desktop App
exerciseTitle: أنشئ Collection متكاملة واكتب اختبارات آلية للتحقق من استجابات السيرفر
exercise:
  - أنشئ Collection جديدة باسم "JSON Server Automated Tests".
  - أضف طلب GET لجلب كافة التدوينات، واكتب سكريبت اختبار للتأكد من أن رمز الاستجابة هو 200 OK وأن زمن الاستجابة أقل من 500ms.
  - أضف طلب POST لإضافة عنصر جديد واكتب اختباراً للتأكد من رجوع رمز الاستجابة 201 Created وأن العنصر يحتوي على ID.
  - استخدم الـ Collection Runner لتشغيل كل الاختبارات دفعة واحدة ومراجعة التقرير المجمع.
exerciseNote: يمكنك اختيار النماذج الجاهزة لسكريبتات الاختبار (Snippets) الموجودة على الجانب الأيمن من تبويب Tests في برنامج Postman للتسهيل عليك.
solution:
  - افتح تبويب Tests في طلب GET وأضف السكريبت التلقائي للتحقق من Status Code 200 وزمن Response Time.
  - افتح تبويب Tests في طلب POST وأضف السكريبت الخاص بالتحقق من الحقول في الـ Response Body.
  - اضغط على الخيارات الخاصة بـ Collection واختر Run Collection لمشاهدة النتائج (Pass / Fail).
solutionCode: |-
  // Test 1: Check Status Code is 200 OK
  pm.test("Status code is 200 OK", function () {
      pm.response.to.have.status(200);
  });

  // Test 2: Response time is less than 500ms
  pm.test("Response time is less than 500ms", function () {
      pm.expect(pm.response.responseTime).to.be.below(500);
  });

  // Test 3: Check JSON body field
  pm.test("Response body contains title", function () {
      var jsonData = pm.response.json();
      pm.expect(jsonData[0]).to.have.property("title");
  });
resources: []
featured: false
draft: false
---

أهلاً بك في الدرس الرابع من دورة Postman و API Testing!

في هذا الدرس سنتقل من مرحلة إرسال الطلبات اليدوية (Manual Requests) إلى مرحلة التنظيم والأتمتة (Automation) من خلال استخدام الـ \*\*Collections\*\* وكتابة \*\*Test Scripts\*\* للتحقق الآلي من صحة الـ APIs.

---

### 1. ما هي الـ Collections في Postman؟

الـ \*\*Collection\*\* هي عبارة عن مجلد يُستخدم لتجميع وإدارة الطلبات (Requests) المرتبطة بمشروع معين أو ميزة معينة. 

#### فوائد الـ Collections:

\* \*\*التنظيم:\*\* بدلاً من وجود طلبات مبعثرة، يمكنك تقسيم المشافع إلى مجلدات فرعية (مثلاً: Authentication, Products, Cart).

\* \*\*إعادة الاستخدام:\*\* يمكنك حفظ وتمرير متغيرات مشتركة (Variables) بين الطلبات بداخلها.

\* \*\*التشغيل الآلي:\*\* ميزة \*\*Collection Runner\*\* تتيح لك تشغيل عشرات الطلبات والاختبارات متتالية بزر واحد.

---

### 2. مفهوم الـ Scripts في Postman

يقدم Postman تبويبين رئيسيين لكتابة أكواد بلغة \*\*JavaScript\*\*:

#### أ. Pre-request Script

\* يُنفذ هذا السكريبت \*\*قبل\*\* إرسال طلب الـ HTTP للسيرفر.

\* يُستخدم عادة في تجهيز البيانات، أو توليد تواريخ عشوائية، أو حساب توقيعات أمان (Signatures/Tokens).

#### ب. Tests Script

\* يُنفذ هذا السكريبت \*\*بعد\*\* وصول الاستجابة (Response) من السيرفر.

\* يُستخدم بكثرة للتحقق من:

  \* الـ \*\*Status Code\*\* (مثل 200, 201, 404).

  \* \*\*زمن الاستجابة\*\* (Response Time).

  \* محتوى الـ \*\*Response Body\*\* وقيم الحقول الـ JSON.

---

### 3. كتابة أول Test Script باستخدام Postman Chai Library

يعتمد Postman على مكتبة \*\*Chai Assertion Library\*\* للتأكد من النتائج. إليك مثال لكتابة اختبار بسيط:

\`\`\`javascript

// التأكد من أن الـ Status Code هو 200

pm.test("Status code is 200", function () {

    pm.response.to.have.status(200);

});

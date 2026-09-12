---
title: مقدمة في الـ APIs وأداة Postman
slug: introduction-to-apis-and-postman
description: تعرف على مفهوم الـ APIs وكيف تترابط الأنظمة البرمجية، ولمذا نستخدم أداة Postman في فحصها واختبارها، مع شرح خطوة بخطوة لتحميل وتثبيت البرنامج.
publishDate: 2026-09-12
updatedDate: ''
category: أدوات
level: متقدّم
duration: 10:04
videoId: 0c24627b-0451-42e5-9be4-efd3f75024a9
youtubeUrl: ''
thumbnail: /uploads/تعلم (1).png
course: postman-course
order: 1
lessonType: شرح
tags:
  - Postman
  - API Testing
  - REST API
  - Postman Setup
summary:
  - فهم مفهوم الـ API وكيفية تبادل البيانات بين السيرفر والمتصفح
  - التعرف على أداة Postman وأهميتها لمهندس ضبط الجودة (QA)
  - تحميل وتثبيت تطبيق Postman Desktop وإنشاء حساب مجاني
prerequisites:
  - لا يوجد متطلبات سابقة — هذا الدرس مخصص للمبتدئين
relatedLessons: []
appUsed: Postman Desktop App
exerciseTitle: تثبيت أداة Postman وإنشاء أول طلب (First Request)
exercise:
  - قم بزيارة الموقع الرسمي لـ Postman وتحميل النسخة المناسبة لنظام تشغيلك.
  - ثبّت البرنامج وقم بتسجيل الدخول بحسابك المجاني.
  - 'افتح تبويب جديد وأرسل طلب GET تجريبي إلى الرابط: [https://postman-echo.com/get](https://postman-echo.com/get) وتأكد من استلام الـ Status Code: 200 OK.'
exerciseNote: تأكد من اختيار نوع الطلب GET وإدخال الرابط بالشكل الصحيح في خانة الـ URL.
solution:
  - افتح Postman واضغط على زر + لفتح Tab جديد.
  - غير نوع الطلب إلى GET.
  - انسخ الرابط [https://postman-echo.com/get](https://postman-echo.com/get) وضعه في خانة الـ URL.
  - اضغط على زر Send وشاهد النتيجة في أسفل الشاشة.
solutionCode: |-
  JSON
  {
    "status": 200,
    "message": "OK",
    "url": "https://postman-echo.com/get"
  }
resources: []
featured: false
draft: false
---

مرحباً بك في الدرس الأول من دورة Postman و API Testing! 

في هذا الدرس، سنضع حجر الأساس لشرح أحد أهم المفاهيم التقنية في عالم البرمجة واختبار البرمجيات، وهو مفهوم الـ \*\*APIs\*\* وكيفية فحصها باستخدام أداة \*\*Postman\*\*.

---

### 1. ما هو الـ API؟ (Application Programming Interface)

الـ \*\*API\*\* هو اختصار لـ \*\*Application Programming Interface\*\* (واجهة برمجة التطبيقات). لتبسيط المفهوم: تخيل الـ API كمثل "النادل" في المطعم؛ أنت تطلب الوجبة (Request)، والنادل يأخذ الطلب للمطبخ (Server)، ثم يعود لك بالوجبة المطلوبة (Response).

في عالم البرمجيات:

\* الـ API يسمح للتطبيقات المختلفة بالتحدث مع بعضها البعض.

\* مثال: عندما تستخدم تطبيق طيران لحجز رحلة، يتواصل التطبيق عبر الـ API مع سيرفرات شركة الطيران لجلب أسعار التذاكر المتاحة.

---

### 2. ما هي أداة Postman؟ ولماذا نستخدمها؟

أداة \*\*Postman\*\* هي أشهر أداة عالمياً تُستخدم في \*\*API Testing\*\* وبنائها وتوثيقها. 

\*\*لماذا نحتاجها كـ QA؟\*\*

\* \*\*اختبار الـ Backend مباشرة:\*\* تمكننا من فحص المنطق البرمجي للـ Backend قبل أن تجهز واجهة المستخدم (UI).

\* \*\*سرعة الفحص:\*\* إرسال طلبات سريعة واختبار البيانات الحقيقية واستجابات السيرفر.

\* \*\*الأوتوميشن:\*\* إمكانية كتابة سكربتات فحص تلقائية للتأكد من سلامة النظام بعد كل تحديث.

---

### 3. خطوات تحميل وتثبيت Postman

1. اذهب إلى الموقع الرسمي: [postman.com/downloads](https://www.postman.com/downloads/)

2. قم بتحميل النسخة الخاصة بنظام تشغيلك (Windows / macOS / Linux).

3. بعد اكتمال التحميل، قم بتثبيت البرنامج بضغطتين (Double Click).

4. افتح البرنامج وقم بنشئ حساب مجاني (\*\*Create Account\*\*) لحفظ مجموعتك واختباراتك في السحاب (Cloud).

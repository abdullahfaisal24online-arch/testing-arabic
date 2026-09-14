---
title: كيف تكتب Test Cases احترافية 🔻
slug: how-to-write-test-cases
description: تعرّف على مفهوم حالات الفحص (Test Cases)، وكيفية صياغتها بشكل منظم ودقيق يضمن تغطية متطلبات البرمجيات والتحقق من جودة النظام.
publishDate: 2026-09-14
updatedDate: ''
category: مهارات
level: مبتدئ
duration: 08:43
videoId: ef00730e-cf73-45d9-a312-ba7828c78743
youtubeUrl: ''
thumbnail: /uploads/test-cases.png
course: qa-fundamentals-and-practical-skills
order: 6
lessonType: شرح
tags:
  - فحص البرمجيات
  - Test Cases
  - حالات الفحص
  - حالات الاختبار
  - Software Testing
summary:
  - حالة الفحص (Test Case) هي مجموعة من الشروط والخطوات المحددة مسبقاً للتحقق من عمل ميزة معينة في النظام.
  - تتكون حالة الفحص الأساسية من عنوان، شروط مسبقة (Preconditions)، خطوات تنفيذ، والنتيجة المتوقعة.
  - تساعد حالات الفحص في توثيق عملية الفحص وتسهيل إعادتها (Regression Testing) ومشاركتها مع الفريق.
  - تغطي حالات الفحص كلاً من المسار الصحيح (Positive Testing) وحالات الخطأ (Negative Testing).
prerequisites:
  - الفرق بين Functional و Non-Functional Testing
relatedLessons:
  - smoke-testing
  - usability-testing
  - functional-vs-non-functional-testing
  - how-to-write-a-bug-report
appUsed: ''
exerciseTitle: كتابة Test Case لميزة نسيت كلمة المرور (Forgot Password)
exercise:
  - اكتب حالة فحص (Test Case) للتحقق من إرسال رابط إعادة تعيين كلمة المرور عند أدخال بريد إلكتروني مسجل وصحيح.
  - حدد العنوان (Title)، الشروط المسبقة (Preconditions)، خطوات التنفيذ (Steps)، والنتيجة المتوقعة (Expected Result).
exerciseNote: تأكد من أن تكون الخطوات واضحة ومحددة بحيث يمكن لأي شخص آخر تنفيذها والحصول على نفس النتيجة.
solution:
  - 'Test Title: Verify successful password reset link dispatch with a registered email.'
  - 'Preconditions: User has an active and registered account in the system.'
  - 'Test Steps:  Navigate to the Login page.  Click on the "Forgot Password" link.  Enter a valid registered email address.  Click the "Send Reset Link" button.'
  - 'Expected Result: A confirmation message is displayed, and a reset password link is sent to the specified email address.'
solutionCode: ''
resources: []
featured: false
draft: false
---

تُعتبر صياغة **حالات الفحص (Test Cases)** من أهم المهارات اليومية لمهندس جودة البرمجيات؛ حيث تحول المتطلبات النظرية إلى خطوات عملية قابلة للتنفيذ والقياس.

### 1. ما هي الـ Test Case؟

هي وثيقة تصف مدخلاً محدداً، وخطوات تنفيذ، ونتيجة متوقعة، تم إعدادها للتحقق من ميزة معينة أو شرط محدد داخل التطبيق.

### 2. المكونات الرئيسية لحالة الفحص:

- **معرف حالة الفحص (Test Case ID):** رمز فريد لتمييز حالة الفحص (مثل: `TC_LOGIN_001`).
- **العنوان (Test Title / Summary):** وصف مختصر وواضح لما يتم فحصه.
- **الشروط المسبقة (Preconditions):** الحالات أو البيانات التي يجب توفرها قبل بدء الفحص (مثل: وجود حساب مسجل).
- **خطوات التنفيذ (Test Steps):** الخطوات المتسلسلة والواضحة التي يتبعها الفاحص.
- **بيانات الفحص (Test Data):** القيم والبيانات المُدخلة أثناء الفحص (مثل: البريد الإلكتروني، كلمة المرور).
- **النتيجة المتوقعة (Expected Result):** السلوك المفترض للنظام بعد تنفيذ الخطوات وفقاً للمتطلبات.

### 3. أنواع حالات الفحص حسب التغطية:

- **Positive Testing:** فحص المسار الصحيح للنظام باستخدام بيانات سليمة للتأكد من أداء الوظيفة كما هو متوقع.
- **Negative Testing:** فحص سلوك النظام عند أدخال بيانات غير صحيحة أو غير متوقعة للتأكد من التعامل مع الأخطاء بذكاء وسلاسة.

**الخلاصة:** حالة الفحص الممتازة هي التي تتميز بالوضوح، والقابلية للإعادة (Reusability)، والتغطية الدقيقة للمتطلبات دون غموض.

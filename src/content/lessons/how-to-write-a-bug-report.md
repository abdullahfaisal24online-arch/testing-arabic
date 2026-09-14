---
title: كيف تكتب Bug Report باحتراف 🔻
slug: how-to-write-a-bug-report
description: تعرّف على كيفية كتابة تقرير خلل (Bug Report) واضح واحترافي يُسهّل على فريق التطوير فهم المشكلة وإصلاحها بسرعة وبكفاءة.
publishDate: 2026-09-14
updatedDate: ''
category: مهارات
level: مبتدئ
duration: 11:42
videoId: 782b2756-edbd-42ad-a0b0-635d1a097199
youtubeUrl: ''
thumbnail: /uploads/bug-report.png
course: qa-fundamentals-and-practical-skills
order: 5
lessonType: شرح
tags:
  - Bug Report
  - Defect Report
  - فحص البرمجيات
summary:
  - تقرير الخلل (Bug Report) هو وثيقة تصف المشكلة أو الخطأ البرمجي لمساعدة المطوّر على إعادة إنتاجها وإصلاحها.
  - يركز التقرير الاحترافي على العناوين الواضحة والنتائج المتوقعة والفعلية.
  - كتابة تقرير دقيق يقلل من وقت التواصل ويُسارع من عملية التعديل والإغلاق (Bug Life Cycle).
  - وضوح التفاصيل والأولوية يساعد إدارة المشروع في ترتيب المهام حسب أهميتها.
prerequisites:
  - الفرق بين Functional و Non-Functional Testing
relatedLessons:
  - smoke-testing
  - usability-testing
  - functional-vs-non-functional-testing
appUsed: ''
exerciseTitle: صياغة تقرير خلل لمشكلة في نموذج تسجيل الدخول
exercise:
  - لاحظت أن زر "تسجيل الدخول" لا يستجيب عند الضغط عليه رغم إدخال بيانات صحيحة، وتظهر الشاشة بيضاء دون أي رسالة خطأ.
  - قم بصياغة عنوان مناسب (Summary)، وتحديد النتيجة المتوقعة (Expected Result) والنتيجة الفعلية (Actual Result) لهذا الخلل.
exerciseNote: تذكر دائماً أن يوضح العنوان ماذا حدث، أين حدث، ومتى أو تحت أي شرط.
solution:
  - 'Summary: Login button unresponsive when clicked with valid credentials.'
  - 'Expected Result: The user should be logged in successfully and redirected to the dashboard.'
  - 'Actual Result: The login button does not respond, and a blank white screen is displayed.'
solutionCode: ''
resources: []
featured: false
draft: false
---

تُعتبر مهارة كتابة **Bug Report** واضحة ومباشرة من أهم المهارات الأساسية لمهندس فحص البرمجيات؛ لأن التقرير الممتاز يوفر وقت الفريق ويُسرّع من عملية إصلاح الأخطاء.

### العناصر الأساسية لـ Bug Report الاحترافي:

- **العنوان (Summary / Title):** عنوان مختصر ودقيق يشرح المشكلة باختصار.
    - _مثال ممتاز:_ `Login button unresponsive on checkout page with valid credentials`
- **الأولوية والشدة (Priority & Severity):**
    - **Severity:** مدى تأثير الخطأ على النظام (مثل: Critical, Major, Minor).
    - **Priority:** مدى سرعة الحاجة لإصلاح الخطأ من ناحية العمل (مثل: High, Medium, Low).
- **النتيجة المتوقعة (Expected Result):** وصف ما كان يفترض أن يحدث طبقاً لمتطلبات المشروع (Requirements).
- **النتيجة الفعلية (Actual Result):** وصف ما حدث بالفعل في النظام أثناء الفحص وتسبب في المشكلة.

**الخلاصة:** تقرير الخلل الناجح هو التقرير الذي يتيح للمطور فهم المشكلة مباشرة وبدء إصلاحها دون الحاجة للاستفسار عن تفاصيل إضافية.

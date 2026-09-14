---
title: الفرق بين Functional و Non-Functional Testing
slug: functional-vs-non-functional-testing
description: تعرّف على الفرق الأساسي بين الفحص الوظيفي (Functional Testing) والفحص غير الوظيفي (Non-Functional Testing)، مع أمثلة عملية توضح أهداف ومجالات كل نوع في فحص البرمجيات.
publishDate: 2026-09-14
updatedDate: ''
category: أساسيات
level: مبتدئ
duration: 08:15
videoId: db1e7f49-8d4e-4007-a937-ac41c10e1f05
youtubeUrl: ''
thumbnail: /uploads/ChatGPT Image Sep 14, 2026, 03_54_28 PM.png
course: qa-fundamentals-and-practical-skills
order: 1
lessonType: شرح
tags:
  - فحص البرمجيات
  - Non-Functional Testing
  - Functional Testing
  - اختبار البرمجيات
  - انواع الاختبار
summary:
  - الفحص الوظيفي (Functional Testing) يركز على ماذا يفعله النظام (What the system does) للتأكد من مطابقة الميزات للمتطلبات.
  - الفحص غير الوظيفي (Non-Functional Testing) يركز على كيف يعمل النظام (How the system performs) مثل الأداء، الأمان، وسهولة الاستخدام.
  - الفحص الوظيفي يغطي حالات مثل تسجيل الدخول، إنشاء الحساب، والعمليات المالية.
  - الفحص غير الوظيفي يغطي جوانب مثل الأداء تحت الضغط (Load Testing)، الأمان (Security)، وسرعة الاستجابة.
prerequisites:
  - مقدمة في فحص البرمجيات (Software Testing Basics)
relatedLessons: []
appUsed: ''
exerciseTitle: تحديد نوع الفحص للمتطلبات البرمجية
exercise:
  - 'اقرأ المتطلب: "يجب أن يتمكن المستخدم من إعادة تعيين كلمة المرور عبر البريد الإلكتروني." وحدد هل هو Functional أم Non-Functional.'
  - 'اقرأ المتطلب: "يجب أن يتحمل الموقع 10,000 مستخدم بالتزامن دون أن تتجاوز استجابة الصفحة ثانيتين." وحدد نوعه.'
exerciseNote: 'فكر في السؤال الأساسي: هل المتطلب يشرح ميزة وظيفية أم يقيس جودة وأداء النظام؟'
solution:
  - 'المتطلب الأول: Functional Testing (لأنه يفحص وظيفة وميزة محددة في النظام).'
  - 'المتطلب الثاني: Non-Functional Testing (لأنه يقيس الأداء وسرعة الاستجابة تحت الضغط).'
solutionCode: ''
resources: []
featured: false
draft: false
---

يعتبر كل من **Functional Testing** و **Non-Functional Testing** من الركائز الأساسية لضمان جودة أي تطبيق أو نظام برمجي، ولكنهما يختلفان في الهدف والتركيز:

### 1. الفحص الوظيفي (Functional Testing)

يركز هذا النوع على التحقق من أن النظام يعمل وفقاً للمتطلبات الوظيفية (Functional Requirements) المحددة مسبقاً.

- **السؤال الأساسي:** ماذا يفعل النظام؟ (What does the system do?)
- **الهدف:** التأكد من أن كل ميزة (Feature) في التطبيق تعمل بشكل صحيح وتؤدي وظيفتها المتوقعة.
- **أمثلة:**
    - فحص عملية تسجيل الدخول باستخدام اسم مستخدم وكلمة مرور صحيحة.
    - فحص إمكانية إضافة منتج إلى سلة التسوق وإتمام عملية الدفع.

### 2. الفحص غير الوظيفي (Non-Functional Testing)

يركز على الجوانب التشغيلية وصفات الجودة للنظام بدلاً من الوظائف المباشرة.

- **السؤال الأساسي:** كيف يعمل النظام؟ (How well does the system perform?)
- **الهدف:** التأكد من أن النظام يعمل بكفاءة، أمان، وسرعة تحت مختلف الظروف.
- **أمثلة:**
    - **فحص الأداء (Performance Testing):** قياس زمن استجابة الموقع عند زيادة عدد المستخدمين.
    - **فحص الأمان (Security Testing):** التأكد من حماية البيانات ضد الثغرات والاختراقات.
    - **فحص سهولة الاستخدام (Usability Testing):** تقييم مدى سهولة تصفح الواجهات بالنسبة للمستخدم.

**الخلاصة:** الفحص الوظيفي يضمن أن التطبيق يفعل الأشياء الصحيحة، بينما الفحص غير الوظيفي يضمن أن التطبيق يفعلها بالطريقة الصحيحة والآمنة.

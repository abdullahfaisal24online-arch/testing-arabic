---
title: الفرق بين الـ QA & QC
slug: qa-vs-qc
description: تعرّف على الفرق الأساسي بين ضمان الجودة (Quality Assurance) ضبط الجودة (Quality Control)، ودور كل منهما في دورة حياة تطوير البرمجيات.
publishDate: 2026-09-14
updatedDate: ''
category: أساسيات
level: مبتدئ
duration: 05:34
videoId: 01063e99-a3ac-4e42-ac67-0c967d05c481
youtubeUrl: ''
thumbnail: /uploads/chatgpt-image-sep-14-2026-04-13-36-pm.png
course: qa-fundamentals-and-practical-skills
order: 4
lessonType: شرح
tags:
  - Quality Assurance
  - QA
  - QC
  - Quality Control
  - اختبار البرمجيات
  - ضمان الجودة
  - مراقبة الجودة
summary:
  - ضمان الجودة (QA) هو عملية وقائية (Preventive) تهدف لمنع ظهور العيوب من الأساس عبر تحسين العمليات.
  - ضبط الجودة (QC) هو عملية تصحيحية (Corrective) تهدف لاكتشاف العيوب واختبار المنتج الفعلي.
  - الـ QA يركز على العمليات (Process Oriented)، بينما الـ QC يركز على المنتج (Product Oriented).
  - فحص البرمجيات (Software Testing) هو جزء تنفيذي يندرج تحت مظلة الـ QC.
prerequisites:
  - مقدمة في فحص البرمجيات (Software Testing Basics)
relatedLessons:
  - usability-testing
  - smoke-testing
  - functional-vs-non-functional-testing
appUsed: ''
exerciseTitle: تصنيف الأنشطة بين QA و QC
exercise:
  - 'النشاط الأول: إقامة جلسة مراجعة لمتطلبات المشروع (Requirements Review) قبل البدء بالبرمجة لمنع التناقضات. حدد هل هذا QA أم QC.'
  - 'النشاط الثاني: كتابة وتشغيل حالات الفحص (Test Cases) على التطبيق بعد تجهيزه من فريق التطوير. حدد نوعه.'
exerciseNote: 'اسأل نفسك دائماً: هل النشاط يركز على تحسين طريقة العمل لمنع الأخطاء (QA)، أم يركز على فحص المنتج المكتمل لاكتشاف الأخطاء (QC)؟'
solution:
  - 'النشاط الأول: QA (Quality Assurance)؛ لأنه إجراء وقائي يركز على العمليات والتحقق من المتطلبات قبل كتابة الكود.'
  - 'النشاط الثاني: QC (Quality Control)؛ لأنه فحص مباشر للمنتج النهائي لاكتشاف الأخطاء والعيوب الموجودة.'
solutionCode: ''
resources: []
featured: false
draft: false
---

يعتقد الكثيرون أن **QA (Quality Assurance)** و **QC (Quality Control)** هما مسميان لشيء واحد، ولكن في عالم بناء وتطوير البرمجيات يوجد اختلاف جوهري في المفهوم والهدف:

### 1. ضمان الجودة (Quality Assurance - QA)

هو التخطيط والأنشطة المنهجية التي تهدف إلى **منع وجود الأخطاء (Prevent Defect)** من البداية.

- **التركيز:** يركز على العمليات والأساليب المتبعة لبناء المنتج (Process-Oriented).
- **طبيعة العمل:** وقائي (Preventive).
- **الهدف:** التأكد من أن جميع أفراد الفريق يتبعون الممارسات والخطوات الصحيحة للحد من حدوث العيوب.
- **أمثلة:** إعداد معايير العمل، مراجعة الكود (Code Review)، ومراجعة تحليل المتطلبات.

### 2. ضبط الجودة (Quality Control - QC)

هو الأنشطة التي تهدف إلى **اكتشاف العيوب (Find Defects)** في المنتج الفعلي بعد أو أثناء بنائه.

- **التركيز:** يركز على المنتج النهائي نفسه (Product-Oriented).
- **طبيعة العمل:** تصحيحي/اكتشافي (Corrective / Detective).
- **الهدف:** التأكد من أن المنتج النهائي يطابق التوقعات والمتطلبات المحددة قبل تسليمه للعميل.
- **أمثلة:** تنفيذ الفحوصات (Execution of Test Cases)، فحص الأداء، واختبار الواجهات.

**العلاقة بين المفهومين:** يمكن اعتبار الـ **QA** بمثابة المظلة الكبيرة التي تضمن بيئة عمل جيدة للإنتاج، بينما **QC** هو الجزء العملي المتخصص باختبار وتقييم جودة المخرجات، ويُعد **فحص البرمجيات (Software Testing)** جزءاً أساسياً من الـ QC.

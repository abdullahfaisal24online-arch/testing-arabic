---
title: إعداد بيئة Maestro وأول فلو
slug: maestro-setup
description: تنصيب Maestro، ربطه بالمحاكي، وكتابة أول ملف فلو يشتغل فعلاً على تطبيق تجريبي.
publishDate: 2026-08-20
updatedDate: ''
category: أتمتة
level: متقدّم
duration: 09:15
videoId: 0f3c11f9-8fab-4dad-8683-ba1cd2712325
youtubeUrl: ''
thumbnail: ''
course: maestro-automation
order: 1
lessonType: شرح
tags: []
summary: []
prerequisites: []
relatedLessons: []
appUsed: ''
exerciseTitle: ''
exercise: []
exerciseNote: ''
solution: []
solutionCode: ''
resources:
  - label: first-flow.yaml
    url: /uploads/first-flow.yaml
featured: true
draft: false
---

## نظرة عامة

بهذا الدرس منركّب البيئة من الصفر ومنشغّل أول فلو. الهدف إنه يكون عندك شي شغّال بنهاية الدرس، مش نظري.

## أول فلو

```yaml
appId: com.saucelabs.mydemoapp.android
---
- launchApp
- tapOn:
    id: "menuIV"
- assertVisible: "Catalog"
```

## ملاحظات مهمة

- تأكد إن المحاكي شغّال قبل ما تنفّذ الأمر.
- خلّي الـ `appId` مطابق تماماً لاسم الحزمة، وإلا الفلو بيفشل من أول سطر.

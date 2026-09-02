---
title: إعداد بيئة Maestro وأول فلو
slug: maestro-setup
description: تنصيب Maestro، ربطه بالمحاكي، وكتابة أول ملف فلو يشتغل فعلاً على تطبيق تجريبي.
publishDate: 2026-08-20
category: أتمتة
level: متقدّم
duration: "09:15"
track: maestro-automation
order: 1
featured: true
draft: false
resources:
  - label: first-flow.yaml
    url: "/uploads/first-flow.yaml"
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

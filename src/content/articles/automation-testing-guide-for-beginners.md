---
title: متى وكيف نلجأ لأتمتة اختبار البرمجيات؟
slug: automation-testing-guide-for-beginners
description: دليل هندسي مبسط ومفصل يشرح مفهوم الأتمتة، الفرق الحقيقي بينها وبين الفحص اليدوي، ومتى تكون الأتمتة خيارك الأذكى ومتى يصبح الفحص اليدوي هو الأفضل.
publishDate: 2026-09-16
updatedDate: ''
category: أتمتة
tags:
  - Automation Testing
  - Manual Testing
  - أتمتة
cover: /uploads/chatgpt-image-sep-16-2026-10-11-54-am.png
featured: false
draft: false
---

لما يدخل أي مختبر جديد على عالم الـ QA، بيسمع كلمة «الأتمتة (**Automation Testing**)» وكأنها عصا سحرية بتحلّ كل مشاكل الجودة… أو بالعكس، كأنها تهديد رح يلغي دور الفحص اليدوي (Manual Testing) نهائياً.

الحقيقة الهندسية غير هيك تماماً: Automation و Manual مش خصمين، هما طبقتين من نفس الاستراتيجية. الأتمتة بتشتغل على الأشياء **الثابتة والمتكررة**، والفحص اليدوي بيشتغل على الأشياء **الجديدة والمتغيّرة والحسّية**.

هالدليل بيمشي معك خطوة خطوة: شو يعني Automation فعلياً، وين مكانها الصح، إمتى تستخدمها، إمتى الـ Manual هو القرار الأذكى، وكيف تحسب القرار بالأرقام بدل الإحساس.

***

## أولاً: شو يعني Automation Testing فعلياً؟

الأتمتة ببساطة هي تحويل خطوات الاختبار اللي كنت بتعملها بإيدك إلى **كود بيتنفّذ لحاله**، سواء على الواجهة (UI) أو على الـ APIs.

خلينا نشوف نفس الحالة بالطريقتين.

**الطريقة اليدوية** — Test Case بسيط لتسجيل الدخول:

```plain
1. افتح https://app.example.com/login
2. اكتب الإيميل: user@example.com
3. اكتب كلمة المرور: Passw0rd!
4. اضغط زر "تسجيل الدخول"
5. تأكد إنه ظهرت صفحة Dashboard
6. تأكد إنه اسم المستخدم ظاهر بالـ header

```

المختبر اليدوي بيعمل هالخطوات بـ 40 ثانية. تمام… بس اعملها 300 مرة، على 4 متصفحات، بعد كل Release.

**نفس الحالة كـ script** باستخدام Playwright:

```plain
// tests/login.spec.js
import { test, expect } from '@playwright/test';

test('user can log in with valid credentials', async ({ page }) => {
  await page.goto('https://app.example.com/login');

  await page.getByLabel('Email').fill('user@example.com');
  await page.getByLabel('Password').fill('Passw0rd!');
  await page.getByRole('button', { name: 'تسجيل الدخول' }).click();

  // Assertions - this is the actual "test"
  await expect(page).toHaveURL(/.*\/dashboard/);
  await expect(page.getByTestId('user-name')).toHaveText('Abdullah');
});

```

**النقطة المهمة اللي بيغفل عنها المبتدئين:** السطور اللي فيها `expect` هي الاختبار الحقيقي. باقي الكود مجرد «تنقّل». Script بدون Assertions مش Test — هو مجرد Robot بيتمشى بالتطبيق وبيرجع Pass دايماً.

هدف الأتمتة **مش** إلغاء التفكير البشري، هدفها تنقل تركيز المختبر من «المهام المكررة» إلى «التحليل واستكشاف المشاكل المعقدة». وقيمتها بتبلش تظهر لما ننتقل من مرحلة «أثبت إنه الميزة اشتغلت لأول مرة» إلى مرحلة «تأكد إنه التحديث الجديد ما كسر الميزات القديمة».

***

## ثانياً: الأتمتة مش مستوى واحد — هرم الاختبار (Test Pyramid)

أكبر غلط بيقع فيه الفريق: يفكر إنه «أتمتة» = «سكربتات UI». الواقع إنه في ثلاث طبقات، وكل طبقة إلها تكلفة وسرعة مختلفة.

```plain
        /\
       /  \      UI Tests        ← بطيئة، غالية، هشّة   (10%)
      /----\
     /      \    API Tests       ← سريعة، مستقرة        (20-30%)
    /--------\
   /          \  Unit Tests      ← أسرع شي، أرخص شي     (60-70%)
  /____________\

```

**القاعدة العملية:** أي شي بتقدر تختبره على مستوى أدنى، لا تختبره على مستوى أعلى.

مثال واقعي — عندك قاعدة عمل: «الخصم ما بينطبق إذا كانت قيمة السلة أقل من 50 دينار».

- ❌ الطريقة الغلط: تعمل UI script يفتح المتصفح، يسجّل دخول، يضيف منتج، يروح للسلة، يحط كود الخصم، ويتأكد من الرسالة. → 45 ثانية لكل تنفيذ، وبينكسر إذا تغيّر تصميم السلة.
- ✅ الطريقة الصح: تختبرها على مستوى الـ API أو الـ Unit → أقل من ثانية، وما بيتأثر بأي تغيير بالتصميم.
- ✅ وتترك للـ UI حالة وحدة فقط: إنه رسالة الخصم بتظهر للمستخدم بشكل صحيح.

مثال على اختبار API بـ Python:

```plain
# tests/test_discount_api.py
import requests

BASE = "https://api.example.com"

def test_discount_rejected_below_minimum():
    payload = {"cart_total": 40, "coupon": "SAVE10"}
    res = requests.post(f"{BASE}/v1/cart/apply-coupon", json=payload)

    assert res.status_code == 422
    body = res.json()
    assert body["error_code"] == "MIN_CART_NOT_MET"
    assert body["min_cart_total"] == 50


def test_discount_applied_at_minimum():
    payload = {"cart_total": 50, "coupon": "SAVE10"}
    res = requests.post(f"{BASE}/v1/cart/apply-coupon", json=payload)

    assert res.status_code == 200
    assert res.json()["discount_value"] == 5

```

لاحظ: هدول اختبارين بيغطوا حدود القاعدة (Boundary Values) بأقل من ثانية، وما بدهم متصفح أصلاً.

***

## ثالثاً: الفوائد الحقيقية للأتمتة (مع أمثلة)

### 1. سرعة التنفيذ

الـ script بيفحص مئات الـ Test Cases بدقائق، مقابل ساعات أو أيام يدوي.

| المقياس | يدوي | مؤتمت |
| --- | --- | --- |
| 60 Test Case للـ Regression | \~5 ساعات | \~15 دقيقة |
| التنفيذ على 3 متصفحات | \~15 ساعة | \~20 دقيقة (بالتوازي) |
| وقت الانتظار بعد أي Commit | لليوم التالي | 6 دقائق |

وبـ Playwright مثلاً، التشغيل بالتوازي سطر واحد بالإعدادات:

```plain
// playwright.config.js
export default {
  workers: 4,              // run 4 tests in parallel
  retries: 1,              // retry once before failing
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox',  use: { browserName: 'firefox'  } },
    { name: 'webkit',   use: { browserName: 'webkit'   } },
  ],
};

```

### 2. إعادة الاستخدام (Reusability)

بتكتب المنطق مرة وحدة وبتشغّله بعشرات الحالات. هاي أقوى نقطة بالأتمتة وأكثر وحدة بينساها المبتدئ.

بدل ما تكتب 6 tests متشابهة لتسجيل الدخول:

```plain
// tests/login-validation.spec.js
const cases = [
  { email: '',                  pass: 'Passw0rd!', error: 'الإيميل مطلوب' },
  { email: 'user@example.com',  pass: '',          error: 'كلمة المرور مطلوبة' },
  { email: 'not-an-email',      pass: 'Passw0rd!', error: 'صيغة الإيميل غير صحيحة' },
  { email: 'user@example.com',  pass: 'wrong',     error: 'بيانات الدخول غير صحيحة' },
  { email: '   ',               pass: 'Passw0rd!', error: 'الإيميل مطلوب' },
  { email: 'USER@EXAMPLE.COM',  pass: 'Passw0rd!', error: null }, // case-insensitive
];

for (const c of cases) {
  test(`login: "${c.email}" / "${c.pass}"`, async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill(c.email);
    await page.getByLabel('Password').fill(c.pass);
    await page.getByRole('button', { name: 'تسجيل الدخول' }).click();

    if (c.error) {
      await expect(page.getByRole('alert')).toHaveText(c.error);
    } else {
      await expect(page).toHaveURL(/dashboard/);
    }
  });
}

```

6 حالات اختبار من 20 سطر. تضيف حالة سابعة؟ سطر واحد.

### 3. دقة النتائج وحياديتها

الساعة 4 العصر، بعد 3 ساعات Regression يدوي، عينك رح تمرّ على «12 ريال» بدل «12 دينار» وما تلاحظ. الـ script ما بيتعب وما بيسهى:

```plain
await expect(page.getByTestId('total')).toHaveText('120.00 JOD');

```

إما بتطابق تماماً أو بيفشل. لا اجتهاد ولا تخمين.

### 4. التكامل مع الـ CI/CD Pipelines

هون بتتضاعف قيمة الأتمتة: الاختبارات بتشتغل لحالها مع كل Commit أو Pull Request، والمطوّر بياخد تغذية راجعة خلال دقائق بدل أيام.

```plain
# .github/workflows/e2e.yml
name: E2E Tests

on:
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm ci
      - run: npx playwright install --with-deps

      - name: Run smoke suite
        run: npx playwright test --grep @smoke

      - name: Upload report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report/

```

وبتوسم الحالات الحرجة بوسم واحد:

```plain
test('checkout end to end @smoke', async ({ page }) => { /* ... */ });

```

النتيجة: أي Pull Request بيكسر مسار الشراء **ما بينفع يندمج** أصلاً. هاي الأتمتة وهي بتشتغل كـ بوابة جودة، مش كتقرير.

### 5. تغطية سيناريوهات مستحيلة يدوياً

اختبار الأداء والضغط (Performance & Load Testing) — مستحيل تحاكي 1000 مستخدم يدوياً:

```plain
// load/checkout.js  (k6)
import http from 'k6/http';
import { check } from 'k6';

export const options = {
  stages: [
    { duration: '1m',  target: 200 },   // ramp up
    { duration: '3m',  target: 1000 },  // peak load
    { duration: '1m',  target: 0 },     // ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<800'],   // 95% under 800ms
    http_req_failed:   ['rate<0.01'],   // less than 1% errors
  },
};

export default function () {
  const res = http.get('https://api.example.com/v1/products?page=1');
  check(res, { 'status is 200': (r) => r.status === 200 });
}

```

***

## رابعاً: إمتى نلجأ للأتمتة؟ (السيناريوهات المثالية)

### 1. اختبار الانحدار (Regression Testing)

الميزات القديمة المستقرة اللي لازم نتأكد من سلامتها بعد كل Release. هاي أوضح وأربح حالة للأتمتة، لأنها بتتكرر مع كل إصدار، وبيصير تنفيذها اليدوي عبء ثابت على الفريق.

**مؤشر عملي:** إذا نفس الـ Test Case انفذ يدوياً **3 مرات أو أكثر** وما تغيّر — هو مرشّح للأتمتة.

### 2. المهام المتكررة والمتعبة

تعبئة نماذج طويلة، إنشاء مئات الحسابات التجريبية، تجهيز بيانات اختبار. حتى لو ما كانت «اختبار»، الأتمتة هون بتوفّر وقت هائل:

```plain
# scripts/seed_users.py - test data preparation, not a test
import requests

for i in range(1, 201):
    requests.post("https://api.example.com/v1/users", json={
        "name":  f"Test User {i}",
        "email": f"qa+{i}@example.com",
        "role":  "investor" if i % 2 == 0 else "viewer",
    })

```

### 3. المسارات الحرجة (Critical Path & Smoke Testing)

المسارات اللي إذا وقعت، المنتج كله واقف: التسجيل، تسجيل الدخول، الشراء والدفع، رفع ملف. هاي لازم تنفحص بعد **كل** نشرة، وأتمتتها بتخليها 4 دقائق بدل ساعة.

مثال على Smoke flow لتطبيق Flutter باستخدام Maestro:

```plain
# flows/smoke_login.yaml
appId: com.example.app
name: Smoke - Login and reach home
---
- launchApp:
    clearState: true

- tapOn:
    id: "email_field"
- inputText: "qa@example.com"

- tapOn:
    id: "password_field"
- inputText: "Passw0rd!"

- tapOn:
    id: "login_button"

# Assertions
- assertVisible:
    id: "home_screen"
- assertVisible: "أهلاً بك"
- assertNotVisible: "حدث خطأ"

```

### 4. الاختبار عبر بيئات متعددة (Cross-Browser & Multi-Device)

نفس السيناريو على Chrome و Safari و Firefox، أو على Android 11 و 14، بنفس اللحظة. يدوياً هاي عملية ضرب: 20 حالة × 4 بيئات = 80 تنفيذ.

### 5. اختبار الواجهات البرمجية (API Testing)

أسرع عائد استثمار بالأتمتة كلها. الـ Endpoints مستقرة أكثر من الواجهة، والاختبار أسرع بمئات المرات، وبيمسك المشاكل قبل ما توصل للـ UI.

***

## خامساً: إمتى الفحص اليدوي هو الأفضل — بل والضروري؟

رغم قوة الأتمتة، في مناطق بتتفوق فيها عين وعقل الإنسان بالكامل:

### 1. تجربة وواجهة المستخدم (UI / UX Testing)

الـ script بيقدر يتأكد إنه الزر موجود وقابل للضغط. ما بيقدر يتأكد إنه:

- لون الزر مريح ومتباين كفاية مع الخلفية
- النص العربي مش مقصوص أو متداخل
- المسافات مزعجة بصرياً
- الترتيب RTL منطقي للمستخدم العربي
- الرسالة صيغتها محرجة أو مش مفهومة

مثال: script بيمرّ 100% على شاشة كل نصوصها ظاهرة… بس مرتّبة من اليسار لليمين بتطبيق عربي. الـ Bug موجود، والأتمتة ما شافته.

### 2. الميزات الجديدة قيد التطوير (Early Stage Features)

لما المتطلبات لسا بتتغيّر أسبوعياً، أتمتة الشاشة معناها إنك رح تعيد كتابة الـ script كل أسبوع. الصيانة رح تاكل الفائدة كلها.

**القاعدة:** أتمت الميزة بعد ما تستقر، مش وهي بتتبنى.

### 3. الاختبار الاستكشافي (Exploratory Testing)

هون بتشتغل خبرة المختبر وحدسه، ومسارات ما حدا كتبها بـ Test Case:

- شو بيصير لو ضغطت «رجوع» وسط عملية الدفع؟
- شو بيصير لو قطعت النت بنص رفع الملف؟
- شو بيصير لو فتحت نفس الحساب بجهازين مع بعض؟
- شو بيصير لو حطيت اسم بـ 300 حرف؟ أو بإيموجي؟ أو بنص عربي مع أرقام إنجليزية؟

معظم الـ Bugs المحرجة اللي بتوصل للإنتاج بتتمسك هون، مش بالـ Regression suite.

### 4. الاختبارات السريعة لمرة واحدة (Ad-hoc Testing)

سيناريو رح ينفحص مرة وحدة وما في حاجة لتكراره — أتمتته خسارة صافية للوقت.

### 5. التحقق البصري والمحتوى والترجمة

مراجعة نصوص الشاشة، الأخطاء الإملائية، صيغة العملة والتاريخ، صحة الترجمة — كلها أسرع وأدق يدوياً.

***

## سادساً: الميزان الذهبي — احسب القرار، لا تحسّه

السؤال قبل ما تكتب أول سطر:

> **«هل الوقت والجهد اللي رح أستثمره بكتابة وصيانة هالـ script رح يوفّر عليّ وقت أطول بكثير على المدى البعيد؟»**

خليه بالأرقام. المعادلة:

```plain
تكلفة الأتمتة   = وقت الكتابة + (وقت الصيانة لكل دورة × عدد الدورات)
التوفير         = (وقت التنفيذ اليدوي − وقت تنفيذ الـ script) × عدد الدورات
نقطة التعادل    = وقت الكتابة ÷ التوفير لكل دورة

```

### مثال محسوب

معطيات فريق عنده Release كل أسبوعين:

| البند | القيمة |
| --- | --- |
| عدد حالات الـ Regression | 60 |
| وقت التنفيذ اليدوي لكل دورة | 5 ساعات |
| وقت كتابة الأتمتة | 45 ساعة (45 دقيقة × 60 حالة) |
| وقت تنفيذ الـ script | 15 دقيقة (0.25 ساعة) |
| الصيانة السنوية المتوقعة | \~9 ساعات (20% من الكتابة) |
| عدد الدورات بالسنة | 24 |

**الحساب:**

```plain
التوفير لكل دورة  = 5 − 0.25 = 4.75 ساعة
نقطة التعادل      = 45 ÷ 4.75 ≈ 9.5 دورة ≈ بعد 5 أشهر

السنة الأولى:
  يدوي   = 5 × 24 = 120 ساعة
  مؤتمت  = 45 (كتابة) + 9 (صيانة) + 6 (تنفيذ) = 60 ساعة
  التوفير = 60 ساعة

السنة الثانية:
  يدوي   = 120 ساعة
  مؤتمت  = 9 + 6 = 15 ساعة
  التوفير = 105 ساعة

```

**القرار:** مجدية جداً. لكن لاحظ إنه العائد ما ظهر إلا بعد 5 أشهر — هاي النقطة اللي بتخلي الإدارة تحبط بالشهر الثاني إذا ما شرحتها من البداية.

**واحسبها بالعكس كمان:** لو نفس الـ suite بينفحص مرتين بالسنة فقط، التوفير = 4.75 × 2 = 9.5 ساعة مقابل 45 ساعة استثمار. القرار: **لا تأتمت**.

### جدول القرار السريع

| السؤال | نعم → | لا → |
| --- | --- | --- |
| السيناريو بيتكرر كثير؟ | Automation | Manual |
| الميزة مستقرة ومتطلباتها ثابتة؟ | Automation | Manual |
| النتيجة قابلة للتحقق برمجياً (نص، حالة، رقم)؟ | Automation | Manual |
| التقييم بصري أو ذوقي؟ | Manual | Automation |
| بدك تغطي أحمال أو بيئات متعددة؟ | Automation | Manual |
| السيناريو بيحتاج حدس واستكشاف؟ | Manual | Automation |

***

## سابعاً: أخطاء شائعة بتقتل مشاريع الأتمتة

### 1. Locators هشّة

```plain
// ❌ بينكسر مع أول تعديل بالتصميم
await page.click('body > div:nth-child(3) > div > form > button');
await page.click('.css-1x2y3z4');

// ✅ ثابت ومقروء
await page.getByTestId('submit-order').click();
await page.getByRole('button', { name: 'تأكيد الطلب' }).click();

```

اتفق مع المطوّرين على `data-testid` لكل عنصر حرج. هاي أرخص استثمار بمشروع الأتمتة كله.

### 2. الاعتماد على `sleep` بدل الانتظار الذكي

```plain
// ❌ إما بطيء بلا داعي أو بيفشل عشوائياً
await page.click('#save');
await page.waitForTimeout(5000);
expect(await page.textContent('#msg')).toBe('تم الحفظ');

// ✅ ينتظر بالضبط للحظة اللي بدها
await page.getByTestId('save').click();
await expect(page.getByTestId('msg')).toHaveText('تم الحفظ');

```

الـ `sleep` هو السبب الأول للـ Flaky Tests (الاختبارات المتذبذبة اللي بتنجح مرة وبتفشل مرة).

### 3. Script بدون Assertions

```plain
// ❌ هذا مش اختبار، هذا تنقّل
test('open profile', async ({ page }) => {
  await page.goto('/profile');
  await page.click('#edit');
});

// ✅ فيه تحقق فعلي
test('open profile in edit mode', async ({ page }) => {
  await page.goto('/profile');
  await page.getByTestId('edit').click();

  await expect(page.getByTestId('name-input')).toBeEditable();
  await expect(page.getByTestId('save')).toBeVisible();
});

```

### 4. اختبارات مرتبطة ببعضها

Test رقم 5 بيعتمد على إنه Test رقم 3 أنشأ حساب. أول ما يفشل 3، بيفشل الباقي بالسلسلة وبتضيع ساعة بالتشخيص. كل Test لازم يجهّز بياناته ويمشي لحاله.

### 5. ملاحقة نسبة تغطية 100%

هدف «نأتمت كل شي» بينتهي بـ suite بطيء وهشّ، والفريق بيبطّل يثق فيه، وبيصير يتجاهل النتائج الحمراء. **suite صغير موثوق أفضل من suite ضخم متذبذب.**

***

## ثامناً: من وين تبدأ عملياً؟ (خطة 30 يوم)

**الأسبوع 1 — اختر المعركة الصح** اختر 5 حالات فقط: المسار الحرج + أكثر شاشة مستقرة. لا تبلش بالشاشة الأصعب.

**الأسبوع 2 — اختر الأداة حسب منتجك**

| نوع المنتج | أدوات مناسبة |
| --- | --- |
| Web | Playwright، Selenium، Cypress |
| Mobile (Flutter/Native) | Maestro، Appium |
| API | Postman + Newman، pytest + requests، REST Assured |
| Performance | k6، JMeter |

**الأسبوع 3 — رتّب المشروع من البداية**

```plain
tests/
├── e2e/
│   ├── login.spec.js
│   └── checkout.spec.js
├── pages/              # Page Object Model
│   ├── LoginPage.js
│   └── CheckoutPage.js
├── fixtures/           # test data
│   └── users.json
└── utils/
    └── api-helpers.js

```

مثال على Page Object بسيط:

```plain
// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page     = page;
    this.email    = page.getByTestId('email');
    this.password = page.getByTestId('password');
    this.submit   = page.getByTestId('login-submit');
    this.error    = page.getByRole('alert');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.submit.click();
  }
}

```

الفائدة: لو تغيّر `data-testid` الخاص بالإيميل، بتعدّله **بمكان واحد** بدل 40 ملف.

**الأسبوع 4 — اربطه بالـ CI** أي suite ما بيشتغل تلقائياً، رح يتنساه الفريق خلال شهر. ربطه بالـ Pipeline هو اللي بيخليه حيّ.

***

## تاسعاً: جدول المقارنة السريع

| المعيار | Manual Testing | Automation Testing |
| --- | --- | --- |
| التكلفة الأولية | منخفضة | مرتفعة |
| التكلفة على المدى البعيد | مرتفعة ومتراكمة | منخفضة |
| السرعة | بطيء | سريع جداً |
| التقييم البصري والـ UX | ممتاز | ضعيف |
| الاختبار الاستكشافي | ممتاز | غير ممكن |
| اختبار الأحمال | غير ممكن | ممتاز |
| الثبات عند التكرار | يتأثر بالتعب البشري | ثابت 100% |
| التعامل مع تغيّر المتطلبات | مرن فوراً | يحتاج صيانة |
| مناسب للـ CI/CD | لا | نعم |

***

## الخلاصة

الأتمتة مش بديل عن المختبر، هي **امتداد** له. الفريق الناضج بيوزّع الشغل هيك:

- **Automation** تتكفّل بالـ Regression والمسارات الحرجة و APIs والأحمال — كل شي ثابت ومتكرر وقابل للقياس.
- **Manual** يتكفّل بالميزات الجديدة والاستكشاف والـ UX والحكم البشري — كل شي بيحتاج عين وعقل.

وقبل أي script جديد، ارجع لسؤال واحد:

> **«هذا السيناريو رح يتكرر كثير وهو ثابت؟»** إذا نعم → أتمته فوراً. إذا لا → الفحص اليدوي هو القرار الأذكى، مش الخيار الكسول.

***

### أسئلة للمراجعة الذاتية

1. عندك شاشة تسجيل جديدة، المتطلبات لسا بتتغيّر كل أسبوعين. تأتمتها ولا لأ؟ ليش؟
2. Test Case بياخد دقيقتين يدوياً وبينفحص مرة كل 6 شهور. احسب جدوى أتمتته.
3. Suite عندك بينجح 8 مرات من 10 بدون أي تغيير بالكود. شو التشخيص الأرجح، وشو أول شي بتفحصه؟
4. مين الأنسب لاكتشاف إنه النص العربي بالشاشة مقطوع على شاشة صغيرة: Manual ولا Automation؟

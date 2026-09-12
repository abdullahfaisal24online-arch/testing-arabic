---
title: كيف تختبر E-commerce Checkout بدون ما تضيع؟ — دليل عملي وشامل لـ QA
slug: E-commerce-Checkout-Testing
description: تعلم كيف تختبر عملية الدفع والتسوق (Checkout) في المتاجر الإلكترونية خطوة بخطوة. سيناريوهات فحص كاملة لسلة الشراء، طرق الدفع، الأكواد، وحالات Edge Cases.
publishDate: 2026-09-12
updatedDate: ''
category: مهارات
tags:
  - E-commerce Testing
  - Checkout Flow
  - Payment Gateway Testing
  - QA Scenarios
  - Functional Testing
  - Edge Cases
cover: /uploads/ChatGPT Image Sep 12, 2026, 06_36_33 PM.png
featured: false
draft: false
---

# كيف تختبر E-commerce Checkout بدون ما تضيع؟ — دليل عملي وشامل لـ QA

تُعتبر **صفحة الدفع وإتمام الطلب (Checkout Page)** هي القلب النابض لأي متجر إلكتروني (E-commerce). أي خلل أو بَج (Bug) في هذه المرحلة يعني خسارة أرباح مباشرة للعميل وضربة لسمعة المتجر.

كـ **QA Engineer**، اختبار عملية الـ Checkout ليس مجرد الضغط على زر "Buy Now"، بل هو اختبار لمسار كامل (End-to-End Flow) تتداخل فيه سلة التسوق، العروض، الشحن، وبوابات الدفع.

في هذا الدليل، سنبسط لك عملية الفحص لتغطي كل السيناريوهات الأساسية والحالات الخاصة (Edge Cases) بدون أن تتشتت.

## 1. فحص سلة التسوق (Shopping Cart Validation)

قبل أن يصل المستخدم لصفحة الـ Checkout، يجب التأكد من صحة البيانات المتجهة من السلة:

- **حساب الأسعار (Price Calculation):**
    - تأكد من المجموع الفرعي (**Subtotal**)، قيمة الضريبة (**Tax**)، وتكلفة الشحن (**Shipping Fee**).
    - فحص المجموع الكلي (**Grand Total**) والتأكد من مطابقة القيمة للعملات المختلفة في حال دعم المتجر لـ **Multi-currency**.
- **الكميات والأصناف (Quantity & Cart Items):**
    - إضافة وتعديل وحذف المنتجات من السلة.
    - فحص حد الكمية المتاحة في المخزون (**Out of Stock / Inventory Limit**).
    - اختبار حالة السلة الفارغة (**Empty Cart State**).

## 2. معلومات العميل والشحن (Customer & Shipping Info)

هذه الخطوة تضم جمع بيانات التسليم، واختبارها يتطلب التركيز على تقنيات **Form Validation**:

- **أنواع المستخدمين (User Types):**
    - **Guest Checkout:** إتمام الشراء كزائر بدون إنشاء حساب.
    - **Registered User:** الشراء بحساب مسجل وملاحظة حفظ عناوين الشحن المسبقة (**Saved Addresses**).
- **التحقق من الخانات (Form Fields & Validation):**
    - فحص الخانات الإلزامية (**Mandatory Fields**) مثل العنوان والرمز البريدي ورقم الهاتف.
    - اختبار إدخال رموز خاصة أو مسافات فارغة (**Boundary Value Analysis & Special Characters**).
- **خيارات الشحن (Shipping Methods):**
    - تغيير خيار الشحن (مثلاً: Express vs Standard) والتأكد من تحديث المجموع الكلي فوريًا.

## 3. بوابات الدفع (Payment Gateway Testing)

الجزء الأكثر حساسية في الـ Checkout هو الربط مع **Payment Gateways** (مثل Stripe, PayPal, HyperPay):

- **طرق الدفع المختلفة (Payment Methods):**
    - البطاقات الائتمانية (**Credit / Debit Cards**).
    - المحافظ الإلكترونية (**E-Wallets**).
    - الدفع عند الاستلام (**Cash on Delivery - COD**).
    - خدمات الدفع الآجل (**Buy Now Pay Later - BNPL**) مثل Tabby أو Tamara.
- **بطاقات الاختبار (Test Cards & Responses):**
    - **Successful Transaction:** استخدام بطاقة تجريبية لعملية ناجحة.
    - **Failed Transaction:** استخدام بطاقات تجريبية للعمليات المرفوضة (رصيد غير كافٍ، بطاقة منتهية الصلاحية، أو رمز CVC خاطئ) والتأكد من ظهور **Error Message** واضحة للعميل.
    - **3D Secure Verification:** اختبار إرسال رمز التحقق (OTP) من البنك.

## 4. الخصومات والكوبونات (Discounts & Promo Codes)

- **صحة الكوبون (Valid & Invalid Coupons):**
    - تطبيق كود خصم صحيح وتفحص نسبة الخصم أو المبلغ المخصوم.
    - إدخال كود منتهي الصلاحية (**Expired Code**) أو غير صحيح وملاحظة الرسالة الموجهة للمستخدم.
- **شروط الكوبون (Coupon Constraints):**
    - كود مخصص لمنتج معين أو حد أدنى للشراء (**Minimum Order Amount**).
    - منع استخدام نفس الكود أكثر من مرة إن كان مخصصاً لاستخدام واحد فقط (**Single-use Limit**).

## 5. حالات حافة وحالات استثنائية (Edge Cases & System Behavior)

هنا تظهر مهارة الـ QA الحقيقي في اكتشاف الثغرات قبل أن يكتشفها العميل:

- **انقطاع الاتصال (Network Interruption):** ماذا يحدث إذا فصل الإنترنت في لحظة النقر على "Place Order"؟
- **الضغط المكرر (Double Clicking):** النقر السريع والمتكرر على زر "Pay Now" — يجب التأكد من عدم تكرار عملية الخصم أو إنشاء طلبين مكررين (**Idempotency Check**).
- **نفاد المخزون أثناء الشراء (Stock Depletion):** ماذا لو اشترى عميل آخر آخر قطعة متوفرة في نفس اللحظة التي تقف فيها أنت على صفحة الدفع؟
- **جلسة العمل (Session Timeout):** ترك الصفحة لمدة طويلة ثم محاولة إتمام الدفع.

## 6. مرحلة ما بعد الشراء (Post-Purchase Flow)

عملية الاختبار لا تنتهي بمجرد خصم المبلغ:

- **صفحة تأكيد الطلب (Order Confirmation Page / Thank You Page):** ظهور رقم الطلب (**Order ID**) وتفاصيل الشراء الصحيحة.
- **البريد الإلكتروني والإشعارات (Email & SMS Notifications):** وصول إيميل الفاتورة وتفاصيل الطلب للعميل بنفس البيانات.
- **لوحة التحكم والتخزين (Admin Panel & Database Check):**
    - تغير حالة الطلب في الـ Backend إلى **Pending / Processing**.
    - خصم الكمية المشتراة من المخزون تلقائيًا (**Inventory Deduction**).

### ملخص سريع لك حتّى ما تضيع (QA Checkout Checklist)

1. ✅ **Cart Items & Totals** (الحسابات والأصناف).
2. ✅ **Shipping & Form Validation** (بيانات العنونة والدفع).
3. ✅ **Payment Gateways** (العمليات الناجحة والمرفوضة).
4. ✅ **Promo Codes & Discounts** (الكوبونات والخصومات).
5. ✅ **Edge Cases** (انقطاع الشبكة، التكرار، والسيشن).
6. ✅ **Post-Purchase Verification** (الإيميل، صفحة النجاح، ولوحة الأدمن).

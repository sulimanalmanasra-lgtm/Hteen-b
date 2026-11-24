# رفع التحديث

## 1) ملفات الموقع (GitHub Pages)
ارفع كل ملفات `hteen-site-update.zip` فوق ملفات الريبو (بتستبدل القديمة):
index/shop/offers/about/contact/cart.html + style.css + login.html + lang.js

من المتصفح: الريبو ← Add file ← Upload files ← اختار الملفات ← Commit changes.

## 2) السيرفر (PHP + MySQL) — مكان ثاني، مش GitHub
ارفع `hteen-php-server.zip` (مجلد api + database.sql) على استضافة PHP فيها MySQL وHTTPS،
ثم عدّل ثوابت أعلى سكربت `login.html`: API و GOOGLE_CLIENT_ID و APPLE_CLIENT_ID.
متغيرات البيئة على السيرفر: DB_PASS, GOOGLE_CLIENT_ID, APPLE_CLIENT_ID,
ALLOWED_ORIGIN=https://sulimanalmanasra-lgtm.github.io  و  SAMESITE=None

## جوجل
console.cloud.google.com ← OAuth Client (Web) ← Authorized JavaScript origins:
https://sulimanalmanasra-lgtm.github.io  (بدون / بالآخر وبدون /hteen-bakery)

## ابل
حساب مطوّر مدفوع + Services ID + دومين مؤكّد، وعلى السيرفر: composer require firebase/php-jwt داخل api/

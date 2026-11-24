<?php
// خزّن هالقيم كمتغيرات بيئة على السيرفر. لا ترفع هذا الملف بقيم حقيقية على GitHub.
return [
  'db_host' => getenv('DB_HOST') ?: 'localhost',
  'db_name' => getenv('DB_NAME') ?: 'hteen_bakery',
  'db_user' => getenv('DB_USER') ?: 'hteen_app',
  'db_pass' => getenv('DB_PASS') ?: '',
  'google_client_id' => getenv('GOOGLE_CLIENT_ID') ?: '',
  'apple_client_id'  => getenv('APPLE_CLIENT_ID') ?: '',   // Services ID
  // لو الموقع (github.io) والـ PHP على دومينين مختلفين: ضع رابط الموقع هون و SameSite=None
  'allowed_origin' => getenv('ALLOWED_ORIGIN') ?: '',       // مثال: https://sulimanalmanasra-lgtm.github.io
  'samesite' => getenv('SAMESITE') ?: 'Lax',                // 'None' لو دومينين مختلفين
  'max_fails' => 5,
  'lock_minutes' => 15,
];

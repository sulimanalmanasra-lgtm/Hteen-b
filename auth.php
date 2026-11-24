<?php
declare(strict_types=1);
$C = require __DIR__ . '/config.php';
require __DIR__ . '/db.php';

// ---------- ترويسات الأمان ----------
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header('Referrer-Policy: no-referrer');
header('Cache-Control: no-store');
if ($C['allowed_origin'] && ($_SERVER['HTTP_ORIGIN'] ?? '') === $C['allowed_origin']) {
  header('Access-Control-Allow-Origin: ' . $C['allowed_origin']);
  header('Access-Control-Allow-Credentials: true');
  header('Access-Control-Allow-Headers: Content-Type, X-CSRF-Token');
  header('Vary: Origin');
}
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

// ---------- جلسة آمنة ----------
session_name('hteen_sid');
session_set_cookie_params([
  'lifetime' => 0, 'path' => '/', 'secure' => true,
  'httponly' => true, 'samesite' => $C['samesite'],
]);
ini_set('session.use_strict_mode', '1');
session_start();

function out(int $code, array $data): never { http_response_code($code); echo json_encode($data, JSON_UNESCAPED_UNICODE); exit; }
function body(): array { $j = json_decode(file_get_contents('php://input') ?: '', true); return is_array($j) ? $j : []; }

$action = $_GET['action'] ?? '';
$pdo = db($C);

// ---------- CSRF ----------
if ($action === 'csrf') {
  $_SESSION['csrf'] ??= bin2hex(random_bytes(32));
  out(200, ['csrf' => $_SESSION['csrf']]);
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $t = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
  if (empty($_SESSION['csrf']) || !hash_equals($_SESSION['csrf'], $t)) out(403, ['error' => 'جلسة غير صالحة، حدّث الصفحة.']);
}

// ---------- أدوات ----------
function client_ip_hash(): string { return hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . '|hteen'); }
function email_hash(string $e): string { return hash('sha256', strtolower($e)); }

function locked(PDO $pdo, array $C, string $email): bool {
  $q = $pdo->prepare("SELECT COUNT(*) FROM login_attempts
    WHERE attempted_at > (NOW() - INTERVAL ? MINUTE) AND (ip_hash = ? OR email_hash = ?)");
  $q->execute([$C['lock_minutes'], client_ip_hash(), email_hash($email)]);
  return (int)$q->fetchColumn() >= $C['max_fails'];
}
function record_fail(PDO $pdo, string $email): void {
  $pdo->prepare("INSERT INTO login_attempts (ip_hash, email_hash) VALUES (?,?)")->execute([client_ip_hash(), email_hash($email)]);
}
function clear_fails(PDO $pdo, string $email): void {
  $pdo->prepare("DELETE FROM login_attempts WHERE email_hash = ?")->execute([email_hash($email)]);
}
function start_session(PDO $pdo, int $uid): void {
  session_regenerate_id(true);               // يمنع Session Fixation
  $_SESSION['uid'] = $uid;
  $_SESSION['csrf'] = bin2hex(random_bytes(32));
  $pdo->prepare("UPDATE users SET last_login_at = NOW() WHERE id = ?")->execute([$uid]);
}
function public_user(array $u): array { return ['id' => (int)$u['id'], 'email' => $u['email'], 'name' => $u['name']]; }

function social_login(PDO $pdo, string $provider, string $sub, ?string $email, ?string $name): never {
  $q = $pdo->prepare("SELECT u.* FROM oauth_identities o JOIN users u ON u.id = o.user_id WHERE o.provider=? AND o.provider_id=?");
  $q->execute([$provider, $sub]);
  $u = $q->fetch();
  if (!$u) {
    if (!$email) out(400, ['error' => 'ما وصلنا إيميل من الحساب.']);
    $q = $pdo->prepare("SELECT * FROM users WHERE email = ?"); $q->execute([strtolower($email)]);
    $u = $q->fetch();
    if (!$u) {
      $pdo->prepare("INSERT INTO users (email, name) VALUES (?,?)")->execute([strtolower($email), $name]);
      $q = $pdo->prepare("SELECT * FROM users WHERE id = ?"); $q->execute([$pdo->lastInsertId()]); $u = $q->fetch();
    }
    $pdo->prepare("INSERT INTO oauth_identities (user_id, provider, provider_id) VALUES (?,?,?)")->execute([$u['id'], $provider, $sub]);
  }
  start_session($pdo, (int)$u['id']);
  out(200, ['user' => public_user($u), 'csrf' => $_SESSION['csrf']]);
}

// ---------- الإجراءات ----------
$in = body();

switch ($action) {

  case 'register': {
    $email = strtolower(trim((string)($in['email'] ?? '')));
    $pass  = (string)($in['password'] ?? '');
    $name  = mb_substr(trim((string)($in['name'] ?? '')), 0, 120);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 190) out(422, ['error' => 'الإيميل غير صحيح.']);
    if (strlen($pass) < 10 || strlen($pass) > 200) out(422, ['error' => 'كلمة السر لازم تكون 10 أحرف على الأقل.']);
    $hash = password_hash($pass, PASSWORD_ARGON2ID, ['memory_cost' => 65536, 'time_cost' => 4, 'threads' => 1]);
    try {
      $pdo->prepare("INSERT INTO users (email, name, password_hash) VALUES (?,?,?)")->execute([$email, $name ?: null, $hash]);
    } catch (PDOException $e) {
      if ($e->getCode() === '23000') out(409, ['error' => 'ما قدرنا ننشئ الحساب بهالبيانات.']);
      throw $e;
    }
    $uid = (int)$pdo->lastInsertId();
    start_session($pdo, $uid);
    out(201, ['user' => ['id' => $uid, 'email' => $email, 'name' => $name], 'csrf' => $_SESSION['csrf']]);
  }

  case 'login': {
    $email = strtolower(trim((string)($in['email'] ?? '')));
    $pass  = (string)($in['password'] ?? '');
    if (locked($pdo, $C, $email)) out(429, ['error' => 'محاولات كثيرة. جرّب بعد ' . $C['lock_minutes'] . ' دقيقة.']);
    $q = $pdo->prepare("SELECT * FROM users WHERE email = ?"); $q->execute([$email]);
    $u = $q->fetch();
    // نتحقق دائماً (حتى لو المستخدم مش موجود) حتى ما ينكشف وجود الإيميل من زمن الاستجابة
    $dummy = '$argon2id$v=19$m=65536,t=4,p=1$c29tZXNhbHRzb21lc2FsdA$0000000000000000000000000000000000000000000';
    $ok = password_verify($pass, $u['password_hash'] ?? $dummy) && $u && $u['password_hash'];
    if (!$ok) { record_fail($pdo, $email); out(401, ['error' => 'الإيميل أو كلمة السر غير صحيحة.']); }
    if (password_needs_rehash($u['password_hash'], PASSWORD_ARGON2ID)) {
      $pdo->prepare("UPDATE users SET password_hash=? WHERE id=?")->execute([password_hash($pass, PASSWORD_ARGON2ID), $u['id']]);
    }
    clear_fails($pdo, $email);
    start_session($pdo, (int)$u['id']);
    out(200, ['user' => public_user($u), 'csrf' => $_SESSION['csrf']]);
  }

  case 'google': {
    $tok = (string)($in['credential'] ?? '');
    if (!$C['google_client_id'] || $tok === '') out(400, ['error' => 'تسجيل جوجل غير مفعّل.']);
    $ch = curl_init('https://oauth2.googleapis.com/tokeninfo?id_token=' . urlencode($tok));
    curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 8]);
    $res = curl_exec($ch); $code = curl_getinfo($ch, CURLINFO_HTTP_CODE); curl_close($ch);
    $p = json_decode((string)$res, true);
    if ($code !== 200 || !is_array($p) || ($p['aud'] ?? '') !== $C['google_client_id']
        || !in_array($p['iss'] ?? '', ['accounts.google.com', 'https://accounts.google.com'], true)
        || ($p['email_verified'] ?? '') !== 'true') out(401, ['error' => 'تعذّر التحقق من حساب جوجل.']);
    social_login($pdo, 'google', $p['sub'], $p['email'] ?? null, $p['name'] ?? null);
  }

  case 'apple': {
    // يحتاج: composer require firebase/php-jwt
    $autoload = __DIR__ . '/vendor/autoload.php';
    $tok = (string)($in['id_token'] ?? '');
    if (!$C['apple_client_id'] || $tok === '' || !is_file($autoload)) out(400, ['error' => 'تسجيل ابل غير مفعّل.']);
    require $autoload;
    try {
      $keys = json_decode((string)file_get_contents('https://appleid.apple.com/auth/keys'), true);
      $p = (array)\Firebase\JWT\JWT::decode($tok, \Firebase\JWT\JWK::parseKeySet($keys));
    } catch (Throwable $e) { out(401, ['error' => 'تعذّر التحقق من حساب ابل.']); }
    if (($p['iss'] ?? '') !== 'https://appleid.apple.com' || ($p['aud'] ?? '') !== $C['apple_client_id']) out(401, ['error' => 'تعذّر التحقق من حساب ابل.']);
    social_login($pdo, 'apple', (string)$p['sub'], $p['email'] ?? null, $in['name'] ?? null);
  }

  case 'me': {
    if (empty($_SESSION['uid'])) out(401, ['error' => 'غير مسجّل دخول.']);
    $q = $pdo->prepare("SELECT id,email,name FROM users WHERE id=?"); $q->execute([$_SESSION['uid']]);
    $u = $q->fetch();
    $u ? out(200, ['user' => public_user($u)]) : out(401, ['error' => 'غير مسجّل دخول.']);
  }

  case 'logout': {
    $_SESSION = [];
    setcookie(session_name(), '', ['expires' => 1, 'path' => '/', 'secure' => true, 'httponly' => true, 'samesite' => $C['samesite']]);
    session_destroy();
    out(200, ['ok' => true]);
  }

  default: out(404, ['error' => 'غير موجود.']);
}

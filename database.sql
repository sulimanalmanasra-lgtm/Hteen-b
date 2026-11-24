CREATE DATABASE IF NOT EXISTS hteen_bakery CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE hteen_bakery;

CREATE TABLE users (
  id            BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email         VARCHAR(190) NOT NULL UNIQUE,
  name          VARCHAR(120) NULL,
  password_hash VARCHAR(255) NULL,            -- NULL لحسابات جوجل/ابل
  created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  last_login_at TIMESTAMP NULL
) ENGINE=InnoDB;

CREATE TABLE oauth_identities (
  id          BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id     BIGINT UNSIGNED NOT NULL,
  provider    ENUM('google','apple') NOT NULL,
  provider_id VARCHAR(190) NOT NULL,
  UNIQUE KEY uq_provider (provider, provider_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE login_attempts (
  id           BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  ip_hash      CHAR(64) NOT NULL,
  email_hash   CHAR(64) NOT NULL,
  attempted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_ip (ip_hash, attempted_at),
  INDEX idx_email (email_hash, attempted_at)
) ENGINE=InnoDB;

-- مستخدم قاعدة بيانات بأقل صلاحيات (بدّل كلمة السر):
-- CREATE USER 'hteen_app'@'localhost' IDENTIFIED BY 'ضع_كلمة_سر_طويلة_عشوائية';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON hteen_bakery.* TO 'hteen_app'@'localhost';

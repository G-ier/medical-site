-- Database initialization for Health Platform
-- This script creates the database structure for the health platform application

-- Create databases
CREATE DATABASE health_platform_dev;
CREATE DATABASE health_platform_test;

-- Create user
-- health_platform_dev database with health_platform_user
CREATE USER IF NOT EXISTS health_platform_user@'%' IDENTIFIED BY 'health_platform_password';
GRANT ALL PRIVILEGES ON health_platform_dev.* TO health_platform_user@'%';
GRANT ALL PRIVILEGES ON health_platform_test.* TO health_platform_user@'%';
FLUSH PRIVILEGES;

-- Success message
\echo 'Database initialized successfully for Health Platform development' 
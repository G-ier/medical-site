-- Database initialization for Rejuve Meds
-- This file will be executed when PostgreSQL container starts

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- The database and user are already created by Docker environment variables
-- rejuve_meds_dev database with rejuve_user

-- Set timezone
SET timezone = 'UTC';

-- Log successful initialization
\echo 'Database initialized successfully for Rejuve Meds development' 
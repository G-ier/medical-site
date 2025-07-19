-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "auth0_user_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "picture" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "progress_sessions" (
    "id" SERIAL NOT NULL,
    "session_token" TEXT,
    "user_id" INTEGER,
    "current_step_id" TEXT,
    "completed_steps" JSONB NOT NULL DEFAULT '[]',
    "step_data" JSONB NOT NULL DEFAULT '{}',
    "is_anonymous" BOOLEAN NOT NULL DEFAULT true,
    "expires_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "progress_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_auth0_user_id_key" ON "users"("auth0_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "progress_sessions_session_token_key" ON "progress_sessions"("session_token");

-- CreateIndex
CREATE INDEX "progress_sessions_session_token_idx" ON "progress_sessions"("session_token");

-- CreateIndex
CREATE INDEX "progress_sessions_user_id_idx" ON "progress_sessions"("user_id");

-- CreateIndex
CREATE INDEX "progress_sessions_is_anonymous_idx" ON "progress_sessions"("is_anonymous");

-- AddForeignKey
ALTER TABLE "progress_sessions" ADD CONSTRAINT "progress_sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

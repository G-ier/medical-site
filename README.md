# Rejuve Meds - Next.js Application

A modern web application for medical onboarding, built with Next.js and integrated with Auth0, PostgreSQL, Prisma ORM, and Sanity CMS.

## 🚀 Tech Stack

- **Frontend**: Next.js 15.3.3, React 19, TypeScript
- **Styling**: Tailwind CSS 4, Radix UI
- **Database**: PostgreSQL 15
- **ORM**: Prisma 6.10.1
- **Authentication**: Auth0
- **CMS**: Sanity
- **Containerization**: Docker & Docker Compose
- **Package Manager**: pnpm

## 📋 Prerequisites

Make sure you have installed:

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0
- **Docker** and **Docker Compose**
- **Git**

## 🛠 Installation and Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd rejuve_meds_front
```

### 2. Install dependencies

```bash
# Install all project dependencies
pnpm install

# Verify installation
pnpm --version
node --version

# Optional: Check if all dependencies are installed correctly
pnpm list
```

**Note**: This project uses `pnpm` as the package manager. If you don't have `pnpm` installed:

```bash
# Install pnpm globally
npm install -g pnpm

# Or using Homebrew (macOS)
brew install pnpm

# Or using Chocolatey (Windows)
choco install pnpm
```

### 3. Database setup

#### 3.1 Start PostgreSQL via Docker

```bash
# Start PostgreSQL container
docker-compose -f docker-compose.dev.yml up -d

# Check container status
docker-compose -f docker-compose.dev.yml ps
```

Database will be available at:
- **Host**: localhost
- **Port**: 5434
- **Database**: rejuve_meds_dev
- **User**: rejuve_user
- **Password**: rejuve_password

#### 3.2 Prisma setup

```bash
# Generate Prisma client
pnpm run db:generate

# Apply migrations
pnpm run db:migrate

# Alternative: apply migrations in production
npx prisma migrate deploy
```

### 4. Environment variables setup

#### 4.1 Create .env file

```bash
cp env.example .env.local
```

#### 4.2 Configure DATABASE_URL

Add to `.env.local`:

```env
# Database Configuration
DATABASE_URL="postgresql://rejuve_user:rejuve_password@localhost:5434/rejuve_meds_dev"
```

#### 4.3 Auth0 setup

1. Create an account at [Auth0](https://auth0.com/)
2. Create a new application (Single Page Application)
3. Add to `.env.local`:

```env
# Auth0 Configuration
AUTH0_SECRET='your-secret-key-32-characters'
AUTH0_BASE_URL='http://localhost:3004'
AUTH0_ISSUER_BASE_URL='https://your-domain.us.auth0.com'
AUTH0_CLIENT_ID='your-client-id'
AUTH0_CLIENT_SECRET='your-client-secret'
AUTH0_AUDIENCE='https://your-domain.us.auth0.com/api/v2/'
AUTH0_SCOPE='openid profile email'
```

**Generate AUTH0_SECRET:**
```bash
openssl rand -hex 32
```

**Auth0 Dashboard Configuration:**
- **Allowed Callback URLs**: `http://localhost:3004/api/auth/callback`
- **Allowed Logout URLs**: `http://localhost:3004`
- **Allowed Web Origins**: `http://localhost:3004`

#### 4.4 Sanity CMS setup

1. Create a project at [Sanity](https://www.sanity.io/)
2. Add to `.env.local`:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production

# Optional: API token for write operations
SANITY_API_TOKEN=your-api-token
```

### 5. Run the application

#### 5.1 Development mode

```bash
# Start Next.js server on port 3004
pnpm run dev
```

Application will be available at: [http://localhost:3004](http://localhost:3004)

#### 5.2 Production build

```bash
# Build the application
pnpm run build

# Start production version
pnpm run start
```

## 🗃 Database Management

### Useful Prisma commands

```bash
# Generate client after schema changes
pnpm run db:generate

# Create and apply new migration
pnpm run db:migrate

# Apply changes without migration (for development)
pnpm run db:push

# Open Prisma Studio to view data
pnpm run db:studio

# Reset database (CAUTION!)
pnpm run db:reset
```

### Working with Docker container

```bash
# Stop container
docker-compose -f docker-compose.dev.yml down

# Stop with volume removal (complete data cleanup)
docker-compose -f docker-compose.dev.yml down -v

# View logs
docker-compose -f docker-compose.dev.yml logs postgres

# Connect to PostgreSQL
docker exec -it rejuve-meds-postgres psql -U rejuve_user -d rejuve_meds_dev
```

### Data cleanup

```bash
# Remove all user data
docker exec -it rejuve-meds-postgres psql -U rejuve_user -d rejuve_meds_dev -c "DELETE FROM progress_sessions; DELETE FROM users;"
```

## 🏗 Project Architecture

The project uses **Feature-Sliced Design (FSD)** architecture:

```
src/
├── app/                    # Next.js App Router pages
├── entities/              # Business entities
├── features/              # Feature functionality
├── shared/                # Shared components and utilities
│   ├── ui/               # UI components (Atomic Design)
│   │   ├── atoms/        # Basic components
│   │   ├── molecules/    # Composite components
│   │   ├── organisms/    # Complex components
│   │   └── templates/    # Page templates
│   ├── api/             # API clients
│   ├── lib/             # Utilities and helpers
│   └── types/           # TypeScript types
└── widgets/              # Page widgets
```

## 🔧 Development

### Linting and formatting

```bash
# Check ESLint
pnpm run lint

# Auto-fix ESLint
pnpm run lint --fix
```

### Working with Sanity Studio

```bash
# Start Sanity Studio (if configured)
cd sanity && npx sanity dev
```

Studio will be available at: [http://localhost:3333](http://localhost:3333)

## 🚨 Troubleshooting

### Database issues

**PostgreSQL connection error:**
```bash
# Check container status
docker-compose -f docker-compose.dev.yml ps

# Restart container
docker-compose -f docker-compose.dev.yml restart postgres
```

**Migration errors:**
```bash
# Reset migrations (CAUTION!)
pnpm run db:reset

# Or force apply migrations
npx prisma migrate resolve --applied "20250622150113_init"
```

### Auth0 issues

**redirect_uri_mismatch error:**
- Make sure correct Callback URLs are configured in Auth0 Dashboard
- Check `AUTH0_BASE_URL` value in `.env.local`

**invalid_client error:**
- Verify `AUTH0_CLIENT_ID` and `AUTH0_CLIENT_SECRET` are correct

### Port issues

**Port 3004 is busy:**
```bash
# Find process on port 3004
lsof -i :3004

# Kill process
kill -9 <PID>

# Or run on different port
pnpm run dev -- -p 3005
```

**Port 5434 is busy:**
```bash
# Change port in docker-compose.dev.yml
ports:
  - "5435:5432"  # External port changed to 5435

# Update DATABASE_URL in .env.local
DATABASE_URL="postgresql://rejuve_user:rejuve_password@localhost:5435/rejuve_meds_dev"
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Auth0 Next.js SDK](https://auth0.com/docs/quickstart/webapp/nextjs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🆘 Support

If you encounter problems or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Browse existing [Issues](../../issues)
3. Create a new Issue with detailed problem description

**Minimum information for Issues:**
- Node.js version: `node --version`
- pnpm version: `pnpm --version`
- Operating system
- Steps to reproduce the error
- Error messages (full text)

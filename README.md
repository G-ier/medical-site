# Health Platform - Next.js Application

A comprehensive health platform application built with Next.js, featuring personalized health assessments, onboarding flows, and secure patient management.

## Project Overview

This application provides a complete health platform solution with:
- **Multi-step Onboarding**: Comprehensive health assessment flow
- **Authentication**: Secure user authentication and authorization  
- **Database Integration**: PostgreSQL with Prisma ORM
- **Payment Processing**: Stripe integration for subscriptions
- **Health Integrations**: External health service APIs
- **Admin Dashboard**: Management interface for healthcare providers
- **Responsive Design**: Mobile-first UI with modern components

## Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Auth0
- **Payments**: Stripe
- **Deployment**: Docker, PM2
- **Forms**: React Hook Form with Zod validation

## Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- Docker (optional)

### Installation

1. **Clone the repository**
   ```bash
   cd health_platform
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

3. **Database Setup**
   
   **Option A: Docker (Recommended)**
   ```bash
   docker-compose up -d postgres
   ```
   
   **Option B: Local PostgreSQL**
   - Install PostgreSQL locally
   - **Database**: health_platform_dev
   - **User**: health_platform_user
   - **Password**: health_platform_password
   
   Connection string:
   `postgresql://health_platform_user:health_platform_password@localhost:5434/health_platform_dev`

4. **Database Migration**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

## Environment Variables

Key environment variables (see `.env.example` for complete list):

```bash
# Database
DATABASE_URL="postgresql://health_platform_user:health_platform_password@localhost:5434/health_platform_dev"

# Authentication
AUTH0_SECRET=""
AUTH0_BASE_URL=""
AUTH0_ISSUER_BASE_URL=""
AUTH0_CLIENT_ID=""
AUTH0_CLIENT_SECRET=""

# External APIs
HEALTHIE_API_KEY=""
HEALTHIE_API_SECRET=""
STRIPE_SECRET_KEY=""
STRIPE_PUBLISHABLE_KEY=""
```

## Database Management

### Connect to Database
```bash
docker exec -it health-platform-postgres psql -U health_platform_user -d health_platform_dev
```

### Reset Database
```bash
docker exec -it health-platform-postgres psql -U health_platform_user -d health_platform_dev -c "DELETE FROM progress_sessions; DELETE FROM users;"
```

### Migration Commands
```bash
# Create new migration
npx prisma migrate dev --name migration_name

# Reset database
npx prisma migrate reset

# Deploy to production
npx prisma migrate deploy
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── onboarding/        # Onboarding flow pages
│   └── dashboard/         # User dashboard
├── shared/                # Shared utilities and components
│   ├── ui/               # Reusable UI components
│   ├── lib/              # Utility libraries
│   ├── hooks/            # Custom React hooks
│   └── schemas/          # Validation schemas
└── widgets/              # Feature-specific components
    ├── assessment-*/     # Health assessment widgets
    └── payment-*/        # Payment flow widgets
```

## Development Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npx prisma studio    # Open Prisma Studio
npx prisma generate  # Generate Prisma client
npx prisma migrate dev # Run migrations

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## Deployment

### Production Environment

For production deployment with custom environment:

```bash
# Update environment
DATABASE_URL="postgresql://health_platform_user:health_platform_password@localhost:5435/health_platform_dev"

# Deploy
./deploy-prod.sh
```

### Docker Deployment

```bash
# Build and run with Docker
docker-compose up -d

# View logs
docker-compose logs -f app
```

## API Documentation

### Authentication
- JWT-based authentication via Auth0
- Session management with secure cookies
- Role-based access control

### Key Endpoints
- `/api/auth/*` - Authentication routes
- `/api/onboarding/*` - Onboarding flow APIs
- `/api/users/*` - User management
- `/api/payments/*` - Payment processing

## Contributing

1. **Code Style**: Follow ESLint configuration
2. **Commits**: Use conventional commit messages
3. **Testing**: Write tests for new features
4. **Documentation**: Update README for significant changes

## License

This project is available as an open-source health platform template.

## Support

For questions or issues, please check the documentation or create an issue in the repository.

#!/bin/bash
# Health Platform - Deployment Script

# Function to print colored output
print_success() {
    echo -e "\033[32m✓ $1\033[0m"
}

print_error() {
    echo -e "\033[31m✗ $1\033[0m"
}

print_info() {
    echo -e "\033[34mℹ $1\033[0m"
}

print_warning() {
    echo -e "\033[33m⚠ $1\033[0m"
}

print_step() {
    echo -e "\033[35m▶ $1\033[0m"
}

# Colors for section headers
print_header() {
    echo ""
    echo -e "\033[46m\033[30m                                          \033[0m"
    echo -e "\033[46m\033[30m  $1  \033[0m"
    echo -e "\033[46m\033[30m                                          \033[0m"
    echo ""
}

# Check if running as root
if [ "$EUID" -eq 0 ]; then
    print_error "This script should not be run as root"
    exit 1
fi

# Configuration
PROJECT_DIR="/var/www/health-platform"
BACKUP_DIR="/home/$(whoami)/backups"
NODE_VERSION="18"

print_header "Health Platform Deployment"

print_step "Starting Health Platform Deployment"

# Check prerequisites
print_step "Checking Prerequisites"
check_command "node"
check_command "pnpm"
check_command "pm2"

# Verify Node.js version
NODE_CURRENT=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_CURRENT" -lt "$NODE_VERSION" ]; then
    print_error "Node.js version $NODE_VERSION or higher is required. Current: $(node -v)"
    exit 1
fi

# Verify pnpm version
PNPM_CURRENT=$(pnpm -v | cut -d'.' -f1)
if [ "$PNPM_CURRENT" -lt "$PNPM_VERSION" ]; then
    print_error "pnpm version $PNPM_VERSION or higher is required. Current: $(pnpm -v)"
    exit 1
fi

print_success "All prerequisites met"

# Install dependencies
print_step "Installing Dependencies"
pnpm install --frozen-lockfile
print_success "Dependencies installed"

# Generate Prisma client
print_step "Generating Prisma Client"
pnpm run db:generate
print_success "Prisma client generated"

# Build application
print_step "Building Application"
pnpm run build
print_success "Application built successfully"

# Start application with PM2
print_step "Starting Application with PM2"

# Stop existing PM2 processes
pm2 stop health-platform 2>/dev/null || true
pm2 delete health-platform 2>/dev/null || true

# Create PM2 ecosystem file
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'health-platform',
    script: 'pnpm',
    args: 'start',
    cwd: process.cwd(),
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    instances: 1,
    exec_mode: 'fork',
    max_memory_restart: '1G',
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    watch: false,
    max_restarts: 5,
    min_uptime: '10s'
  }]
};
EOF

# Create logs directory
mkdir -p logs

# Start application with PM2
pm2 start ecosystem.config.js --only health-platform || {
    print_error "Failed to start with ecosystem config, trying direct start..."
    pm2 start npm --name "health-platform" -- start
}

print_success "Application started with PM2"

# Wait for application to be ready
print_step "Performing Health Check"
sleep 5
if curl -f -s "http://localhost:${APP_PORT}" > /dev/null 2>&1; then
    print_success "Application is running and healthy"
else
    print_error "Application health check failed"
    print_error "PM2 logs:"
    pm2 logs health-platform --lines 10
    exit 1
fi

# Create stop script
cat > stop-app.sh << 'EOF'
#!/bin/bash
echo "Stopping Health Platform application..."
pm2 stop health-platform 2>/dev/null || true
pm2 delete health-platform 2>/dev/null || true
echo "Application stopped"
EOF

chmod +x stop-app.sh

# Create status check script
cat > status.sh << 'EOF'
#!/bin/bash
echo "=== Health Platform Status ==="

# Check PM2 process
if pm2 list | grep -q "health-platform"; then
    echo "✓ Application: Running via PM2"
    echo "  URL: http://localhost:3000"
    echo ""
    pm2 info health-platform
else
    echo "✗ Application: Not running"
fi

echo ""
echo "=== Recent Application Logs ==="
pm2 logs health-platform --lines 10 2>/dev/null || echo "No logs available"
EOF

chmod +x status.sh

print_step "Deployment Complete"
print_success "Health Platform has been successfully deployed!"
echo ""
echo -e "${GREEN}Application URL: http://localhost:${APP_PORT}${NC}"
echo -e "${GREEN}Process Manager: PM2${NC}"
echo ""
echo "Management Commands:"
echo "  - Check status: ./status.sh"
echo "  - Stop application: ./stop-app.sh"
echo "  - View logs: pm2 logs health-platform"
echo "  - Restart app: pm2 restart health-platform"
echo "  - PM2 monitoring: pm2 monit"
echo ""
echo "Important Notes:"
echo "  - Make sure .env.local is properly configured"
echo "  - Ensure database is running and accessible"
echo "  - Set up reverse proxy (nginx) for production"
echo "  - Configure SSL certificates for HTTPS"
echo ""
print_warning "Make sure all environment variables and database are properly configured" 
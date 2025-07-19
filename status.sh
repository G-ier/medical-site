#!/bin/bash
echo "=== Rejuve Meds Status ==="

# Check PM2 process
if pm2 list | grep -q "rejuve-meds"; then
    echo "✓ Application: Running via PM2"
    echo "  URL: http://localhost:3000"
    echo ""
    pm2 info rejuve-meds
else
    echo "✗ Application: Not running"
fi

echo ""
echo "=== Recent Application Logs ==="
pm2 logs rejuve-meds --lines 10 2>/dev/null || echo "No logs available"

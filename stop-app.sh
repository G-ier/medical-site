#!/bin/bash
echo "Stopping Rejuve Meds application..."
pm2 stop rejuve-meds 2>/dev/null || true
pm2 delete rejuve-meds 2>/dev/null || true
echo "Application stopped"

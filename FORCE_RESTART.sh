#!/bin/bash

echo "🔄 FORCE RESTART SERVER"
echo "======================"
echo ""

# Kill any process on port 3000
echo "1. Killing any process on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || echo "   No process found on port 3000"

sleep 2

# Navigate to server directory and start
echo ""
echo "2. Starting server..."
cd "$(dirname "$0")/server"

echo ""
echo "✅ Server will start now. Watch for 'Server running on port 3000'"
echo ""
echo "Press Ctrl+C to stop the server when needed."
echo "================================"
echo ""

npm run dev

#!/bin/bash

echo "================================"
echo "🔄 STARTING SERVER FRESH"
echo "================================"
echo ""

# Navigate to server directory
cd "$(dirname "$0")/server"

echo "📍 Current directory: $(pwd)"
echo ""

# Check if translation files exist
echo "1️⃣  Checking translation files..."
if [ -f "routes/Translation.js" ]; then
    echo "   ✅ routes/Translation.js EXISTS"
else
    echo "   ❌ routes/Translation.js MISSING!"
    exit 1
fi

if [ -f "controllers/Translation.js" ]; then
    echo "   ✅ controllers/Translation.js EXISTS"
else
    echo "   ❌ controllers/Translation.js MISSING!"
    exit 1
fi

if [ -f "services/translationService.js" ]; then
    echo "   ✅ services/translationService.js EXISTS"
else
    echo "   ❌ services/translationService.js MISSING!"
    exit 1
fi

echo ""
echo "2️⃣  Testing if modules can load..."
node test-translation-load.js
if [ $? -ne 0 ]; then
    echo "   ❌ Modules failed to load!"
    exit 1
fi

echo ""
echo "3️⃣  Killing any existing server on port 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null && echo "   ✅ Old server killed" || echo "   ℹ️  No server was running"

echo ""
echo "4️⃣  Waiting 3 seconds..."
sleep 3

echo ""
echo "================================"
echo "🚀 STARTING SERVER NOW..."
echo "================================"
echo ""
echo "Watch for these messages:"
echo "  - Database connection established successfully."
echo "  - Database synchronized successfully."
echo "  - Server running on port 3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "================================"
echo ""

# Start the server
npm run dev

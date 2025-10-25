#!/bin/bash

echo "🔧 Translation System - Restart & Test Script"
echo "=============================================="
echo ""

# Check if backend is running
echo "1️⃣  Checking if backend is running..."
if curl -s http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "✅ Backend is running on port 3000"
    echo ""
    echo "⚠️  Testing translation endpoint..."
    RESPONSE=$(curl -s -X POST http://localhost:3000/api/translate \
      -H "Content-Type: application/json" \
      -d '{"text":"Bonjour","sourceLang":"fr","targetLang":"en"}')
    
    if echo "$RESPONSE" | grep -q "translated"; then
        echo "✅ Translation endpoint is working!"
        echo "Response: $RESPONSE"
    else
        echo "❌ Translation endpoint NOT working"
        echo "Response: $RESPONSE"
        echo ""
        echo "🔄 You need to RESTART the backend server!"
        echo ""
        echo "To restart:"
        echo "1. Stop the current server (Ctrl+C in the terminal running 'npm run dev')"
        echo "2. Start it again: cd server && npm run dev"
    fi
else
    echo "❌ Backend is NOT running"
    echo ""
    echo "To start:"
    echo "   cd server && npm run dev"
fi

echo ""
echo "2️⃣  Checking if frontend is running..."
if curl -s http://localhost:5173 > /dev/null 2>&1; then
    echo "✅ Frontend is running on port 5173"
else
    echo "❌ Frontend is NOT running"
    echo ""
    echo "To start:"
    echo "   cd client && npm run dev"
fi

echo ""
echo "=============================================="
echo "📝 Next Steps:"
echo "=============================================="
echo "1. Make sure BOTH servers are running"
echo "2. RESTART the backend if translation endpoint doesn't work"
echo "3. Open http://localhost:5173/contact"
echo "4. Click the language switcher (🇫🇷) in navbar"
echo "5. Select English (🇬🇧)"
echo "6. Watch the page translate!"
echo ""

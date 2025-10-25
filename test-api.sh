#!/bin/bash

echo "🧪 Testing Translation API..."
echo ""

# Test if server is running
echo "1️⃣  Testing if server is accessible..."
if curl -s http://localhost:3000/api/health > /dev/null 2>&1; then
    echo "✅ Server is running!"
else
    echo "❌ Server is NOT running. Please start it with:"
    echo "   cd server && npm run dev"
    exit 1
fi

echo ""
echo "2️⃣  Testing translation endpoint..."
RESPONSE=$(curl -s -X POST http://localhost:3000/api/translate \
  -H "Content-Type: application/json" \
  -d '{"text":"Bonjour","sourceLang":"fr","targetLang":"en"}')

echo "Response: $RESPONSE"

if echo "$RESPONSE" | grep -q "translated"; then
    echo "✅ Translation API works!"
else
    echo "❌ Translation API failed"
    echo "Check server logs for errors"
fi

echo ""
echo "3️⃣  Testing cache stats..."
curl -s http://localhost:3000/api/translate/stats
echo ""

echo ""
echo "✅ All tests complete!"
echo ""
echo "Next steps:"
echo "1. Start frontend: cd client && npm run dev"
echo "2. Open browser and click the language switcher 🌐"
echo "3. Select English or Arabic to see translation"

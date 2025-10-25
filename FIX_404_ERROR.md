# FIX 404 ERROR - Translation Endpoint Not Found

## ❌ The Problem
```
Cannot POST /api/translate
404 (Not Found)
```

This means the backend server is running the **OLD CODE** without the translation routes.

## ✅ THE SOLUTION

### Method 1: Use the Force Restart Script (EASIEST)

```bash
chmod +x FORCE_RESTART.sh
./FORCE_RESTART.sh
```

This script will:
1. Kill any old server process
2. Start a fresh server with the translation routes

### Method 2: Manual Restart

#### Step 1: Find and stop the old server
Open a terminal and run:
```bash
# Find the process ID
lsof -ti:3000

# Kill it (replace PID with the number from above)
kill -9 <PID>
```

OR simply find the terminal window where you ran `npm run dev` and press **Ctrl+C**.

#### Step 2: Start the server fresh
```bash
cd server
npm run dev
```

#### Step 3: Wait for confirmation
You should see:
```
Database connection established successfully.
Database synchronized successfully.
Server running on port 3000
```

### Method 3: If port 3000 is stuck

```bash
# Kill everything on port 3000
lsof -ti:3000 | xargs kill -9

# Wait 2 seconds
sleep 2

# Start server
cd server
npm run dev
```

## 🧪 TEST IF IT WORKS

### Test 1: Check the endpoint
```bash
curl -X POST http://localhost:3000/api/translate \
  -H "Content-Type: application/json" \
  -d '{"text":"Bonjour","sourceLang":"fr","targetLang":"en"}'
```

**Expected:**
```json
{
  "original": "Bonjour",
  "translated": "Hello",
  "sourceLang": "fr",
  "targetLang": "en"
}
```

**If you still get 404, the server did NOT restart properly.**

### Test 2: Check server logs
When you start the server, you should see:
- ✅ `Database connection established successfully.`
- ✅ `Database synchronized successfully.`
- ✅ `Server running on port 3000`

**NO ERRORS** about translation routes.

### Test 3: Browser test
1. Make sure backend is running (see Test 1)
2. Open http://localhost:5173
3. Click language switcher (🇫🇷)
4. Select English (🇬🇧)
5. Text should translate!

## 🔍 STILL NOT WORKING?

### Check 1: Are the files present?
```bash
ls -la server/routes/Translation.js
ls -la server/controllers/Translation.js
ls -la server/services/translationService.js
```

All three should exist.

### Check 2: Can Node.js load them?
```bash
cd server
node test-translation-load.js
```

Should show "✅ ALL MODULES LOADED SUCCESSFULLY!"

### Check 3: Is something else on port 3000?
```bash
lsof -ti:3000
```

If you see a number, that's the process ID. Kill it:
```bash
kill -9 <PID>
```

Then restart your server.

## 💡 IMPORTANT NOTES

1. **You MUST restart the server** after I added the translation files
2. **Ctrl+C** in the terminal stops the server
3. **npm run dev** starts the server
4. **The server must show NO ERRORS** on startup
5. **Test the curl command** before testing in browser

## 🎯 QUICK FIX (Copy-Paste This)

```bash
# Kill old server
lsof -ti:3000 | xargs kill -9

# Wait a moment
sleep 2

# Start fresh server
cd /Users/rayen/Desktop/Website-ELITE-CARE-TRAVEL/server
npm run dev
```

Wait for "Server running on port 3000", then test:

```bash
curl -X POST http://localhost:3000/api/translate \
  -H "Content-Type: application/json" \
  -d '{"text":"Contactez Elite Care Travel","sourceLang":"fr","targetLang":"en"}'
```

If this returns JSON with translations, **IT WORKS!** 🎉

Refresh your browser and try the language switcher.

# Translation System Testing Guide

## Step-by-Step Testing

### 1. Check if Backend is Running
```bash
# Terminal 1 - Start backend
cd server
npm run dev
```

You should see:
```
Server running on port 3000
Database connection established successfully.
```

### 2. Test Backend API Directly
Open a new terminal and run:
```bash
curl -X POST http://localhost:3000/api/translate \
  -H "Content-Type: application/json" \
  -d '{"text":"Bonjour","sourceLang":"fr","targetLang":"en"}'
```

Expected response:
```json
{
  "original": "Bonjour",
  "translated": "Hello",
  "sourceLang": "fr",
  "targetLang": "en"
}
```

### 3. Check Client Environment
```bash
cd client
cat .env.local
```

Should show:
```
VITE_API_URL=http://localhost:3000
```

### 4. Start Frontend
```bash
# Terminal 2 - Start frontend
cd client
npm run dev
```

### 5. Test in Browser

1. Open http://localhost:5173 (or the port shown)
2. Look for the **language switcher** in the navbar (top right, has flags 🇫🇷 🇬🇧 🇹🇳)
3. Click the language switcher
4. Select **English** or **Arabic**
5. Watch the text change!

### Where to See Translation

**On the Home page, these elements should translate:**
- Carousel titles: "CHIRURGIE ESTHETIQUE", "CHIRURGIE CARDIO VASCULAIRE", etc.
- Carousel description: "Elite Care Travel une agence spécialisée..."
- Section heading: "Qui sommes-nous ?"

### Troubleshooting

#### ❌ Language switcher not visible
- Check if `LanguageSwitcher` is imported in Navbar
- Look in browser console for errors

#### ❌ Text not translating
**Check browser console (F12 → Console):**
- Look for errors like "Failed to fetch" or "Network error"
- Check if API URL is correct

**Common issues:**
1. Backend not running → Start with `npm run dev` in server folder
2. Wrong API URL → Check `.env.local` in client folder
3. CORS error → Backend should have `cors` enabled (it does)

#### ❌ Backend API fails
```bash
# Test if LibreTranslate is accessible
curl https://libretranslate.com/translate \
  -H "Content-Type: application/json" \
  -d '{"q":"Hello","source":"en","target":"fr","format":"text"}'
```

If this fails, LibreTranslate might be down. Try:
1. Use a different instance
2. Self-host LibreTranslate
3. Use Google Translate API (paid)

### Quick Debug Checklist

- [ ] Backend running on port 3000
- [ ] Frontend running (usually port 5173)
- [ ] `/client/.env.local` exists with `VITE_API_URL=http://localhost:3000`
- [ ] `axios` installed in server (`npm list axios` in server folder)
- [ ] No errors in browser console
- [ ] No errors in server terminal
- [ ] Can see language switcher in navbar
- [ ] Language switcher dropdown works

### Browser Console Commands

Open browser console (F12) and test:

```javascript
// Test if context is available
console.log('Testing translation system...');

// Check sessionStorage for cached translations
console.log(Object.keys(sessionStorage).filter(k => k.startsWith('translation_')));

// Clear cache and retry
sessionStorage.clear();
location.reload();
```

### Expected Behavior

**When switching to English:**
- "Qui sommes-nous ?" → "Who are we?"
- "CHIRURGIE ESTHETIQUE" → "COSMETIC SURGERY"
- "Elite Care Travel une agence..." → "Elite Care Travel an agency..."

**When switching to Arabic:**
- Page direction changes to RTL
- Text flows right-to-left
- "Qui sommes-nous ?" → "من نحن؟"

### Performance Notes

- **First translation**: ~200-500ms (API call)
- **Cached translation**: <1ms (instant)
- **Cache persists**: Until browser tab is closed

### Need More Help?

1. Check `/TRANSLATION_SETUP.md` for full documentation
2. Check `/IMPLEMENTATION_SUMMARY.md` for architecture
3. Look at `/TRANSLATION_EXAMPLE.tsx` for code examples
4. Check browser Network tab (F12 → Network) to see API calls

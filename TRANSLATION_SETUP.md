# Multi-Language Translation System Setup

## Overview
This system provides automatic translation for FR (French), EN (English), and AR (Arabic) with RTL support for Arabic.

## Features
- ✅ Original French text stays in source files
- ✅ Automatic translation on language switch
- ✅ RTL support for Arabic
- ✅ Frontend and backend caching
- ✅ Fallback to original text on error

## Installation

### 1. Install Server Dependencies
```bash
cd server
npm install axios
```

### 2. Client Environment Variables
Create `/client/.env` with:
```env
VITE_API_URL=http://localhost:3000
```

For production:
```env
VITE_API_URL=https://your-api-domain.com
```

### 3. Server Environment Variables (Optional)
Add to `/server/.env`:
```env
# Optional: Use a different LibreTranslate instance
LIBRE_TRANSLATE_URL=https://libretranslate.com/translate

# Optional: LibreTranslate API key (for higher rate limits)
LIBRE_TRANSLATE_API_KEY=your_api_key_here
```

## Usage

### Method 1: Using AutoTranslate Component
```tsx
import AutoTranslate from '../components/AutoTranslate';

<AutoTranslate>Texte en français</AutoTranslate>
<AutoTranslate as="h1" className="title">Titre principal</AutoTranslate>
<AutoTranslate as="p">Paragraph de texte</AutoTranslate>
```

### Method 2: Using useTranslate Hook
```tsx
import { useTranslate } from '../hooks/useTranslation';

function MyComponent() {
  const title = useTranslate('Mon titre');
  const description = useTranslate('Ma description');
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
```

### Method 3: Using T Helper (Inline)
```tsx
import { T } from '../components/AutoTranslate';

<h1>{T({ children: 'Mon titre' })}</h1>
```

## Language Switcher
The LanguageSwitcher component is already added to the Navbar. Users can:
- Click the language button
- Select FR (Français), EN (English), or AR (العربية)
- The page automatically translates and applies RTL for Arabic

## API Endpoints

### Translate Single Text
```http
POST /api/translate
Content-Type: application/json

{
  "text": "Bonjour le monde",
  "sourceLang": "fr",
  "targetLang": "en"
}
```

### Translate Batch
```http
POST /api/translate/batch
Content-Type: application/json

{
  "texts": ["Bonjour", "Au revoir"],
  "sourceLang": "fr",
  "targetLang": "en"
}
```

### Cache Statistics
```http
GET /api/translate/stats
```

## Caching
- **Frontend**: Uses `sessionStorage` + in-memory cache
- **Backend**: In-memory cache (up to 1000 translations)
- Translations are cached by: source language + target language + text

## RTL Support
When Arabic is selected:
- `<html dir="rtl">` is automatically applied
- `<html lang="ar">` is set
- CSS should handle RTL with: `rtl:` Tailwind modifiers if needed

## Performance Tips
1. Keep text strings short and reusable
2. Avoid translating the same text multiple times
3. Use batch translation for lists
4. Cache is persistent per session

## Alternative Translation Services

### Google Translate API (Paid)
Update `/server/services/translationService.js`:
```javascript
const GOOGLE_API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;
const GOOGLE_TRANSLATE_URL = 'https://translation.googleapis.com/language/translate/v2';
```

### Self-Hosted LibreTranslate
```bash
docker run -ti --rm -p 5000:5000 libretranslate/libretranslate
```

Then update `.env`:
```env
LIBRE_TRANSLATE_URL=http://localhost:5000/translate
```

## Troubleshooting

### Translation not working
1. Check if backend server is running
2. Verify VITE_API_URL in client/.env
3. Check browser console for errors
4. Check server logs

### Rate limiting
- LibreTranslate free tier has rate limits
- Consider self-hosting or getting an API key
- Implement request throttling if needed

### Cache issues
- Clear session storage: `sessionStorage.clear()`
- Restart backend to clear server cache
- Check `/api/translate/stats` for cache size

## Example: Update a Page
```tsx
// Before
<h1 className="title">Services de Chirurgie</h1>
<p>Nous offrons les meilleurs soins</p>

// After
import AutoTranslate from '../components/AutoTranslate';

<AutoTranslate as="h1" className="title">Services de Chirurgie</AutoTranslate>
<AutoTranslate as="p">Nous offrons les meilleurs soins</AutoTranslate>
```

## Notes
- All original text should remain in French
- Translation happens client-side at render time
- Failed translations fallback to French
- Language preference is saved in localStorage

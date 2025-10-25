const axios = require('axios');

// In-memory cache for translations
const translationCache = new Map();

// MyMemory API - FREE, no API key required, 10,000 words/day
const MYMEMORY_API_URL = 'https://api.mymemory.translated.net/get';

// Language code mapping for better compatibility
const langMap = {
  'fr': 'fr-FR',
  'en': 'en-GB',
  'ar': 'ar-SA'
};

/**
 * Generate a cache key from source language, target language, and text
 */
function getCacheKey(sourceLang, targetLang, text) {
  return `${sourceLang}:${targetLang}:${text}`;
}

/**
 * Translate text using MyMemory API (FREE - no API key needed)
 */
async function translateText(text, sourceLang = 'fr', targetLang = 'en') {
  // Return original if same language
  if (sourceLang === targetLang) {
    return text;
  }

  // Check cache first
  const cacheKey = getCacheKey(sourceLang, targetLang, text);
  if (translationCache.has(cacheKey)) {
    console.log('Translation found in cache');
    return translationCache.get(cacheKey);
  }

  try {
    // Use mapped language codes or fallback to original
    const sourceCode = langMap[sourceLang] || sourceLang;
    const targetCode = langMap[targetLang] || targetLang;
    
    const response = await axios.get(MYMEMORY_API_URL, {
      params: {
        q: text,
        langpair: `${sourceCode}|${targetCode}`
      },
      timeout: 8000 // 8 second timeout
    });

    if (response.data && response.data.responseData && response.data.responseData.translatedText) {
      const translatedText = response.data.responseData.translatedText;

      // Store in cache
      translationCache.set(cacheKey, translatedText);

      // Limit cache size to prevent memory issues (keep last 1000 translations)
      if (translationCache.size > 1000) {
        const firstKey = translationCache.keys().next().value;
        translationCache.delete(firstKey);
      }

      return translatedText;
    } else {
      console.warn('Invalid translation response format');
      return text;
    }
  } catch (error) {
    console.error('Translation error:', error.message);
    // Return original text on error
    return text;
  }
}

/**
 * Batch translate multiple texts
 */
async function translateBatch(texts, sourceLang = 'fr', targetLang = 'en') {
  const translations = await Promise.all(
    texts.map(text => translateText(text, sourceLang, targetLang))
  );
  return translations;
}

/**
 * Clear translation cache
 */
function clearCache() {
  translationCache.clear();
  console.log('Translation cache cleared');
}

/**
 * Get cache statistics
 */
function getCacheStats() {
  return {
    size: translationCache.size,
    maxSize: 1000
  };
}

module.exports = {
  translateText,
  translateBatch,
  clearCache,
  getCacheStats
};

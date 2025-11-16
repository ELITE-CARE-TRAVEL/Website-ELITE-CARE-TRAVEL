 import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

// In-memory cache for translations
const translationCache = new Map<string, string>();

// Session storage cache
const CACHE_KEY_PREFIX = 'translation_';

function getCacheKey(text: string, sourceLang: string, targetLang: string): string {
  return `${CACHE_KEY_PREFIX}${sourceLang}_${targetLang}_${text}`;
}

function getFromCache(text: string, sourceLang: string, targetLang: string): string | null {
  const key = getCacheKey(text, sourceLang, targetLang);
  
  // Check in-memory cache first
  if (translationCache.has(key)) {
    return translationCache.get(key)!;
  }
  
  // Check session storage
  const cached = sessionStorage.getItem(key);
  if (cached) {
    translationCache.set(key, cached);
    return cached;
  }
  
  return null;
}

// Note: saveToCache function removed as translation API is no longer available
// If you add a translation service in the future, you can restore caching functionality

async function translateText(text: string, sourceLang: string, targetLang: string): Promise<string> {
  // Return original if same language
  if (sourceLang === targetLang) {
    return text;
  }

  // Check cache
  const cached = getFromCache(text, sourceLang, targetLang);
  if (cached) {
    return cached;
  }

  // Note: Translation API has been removed with backend.
  // Returning original text. Add translation service here if needed in the future.
  return text;
}

export function useTranslation() {
  const { language } = useLanguage();

  const translate = async (text: string): Promise<string> => {
    if (language === 'fr') {
      return text; // Original French text
    }
    return translateText(text, 'fr', language);
  };

  return { translate, language };
}

export function useTranslate(text: string): string {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    if (language === 'fr') {
      setTranslatedText(text);
      return;
    }

    // Check cache first
    const cached = getFromCache(text, 'fr', language);
    if (cached) {
      setTranslatedText(cached);
      return;
    }

    // Translate
    let isMounted = true;
    translateText(text, 'fr', language).then((translated) => {
      if (isMounted) {
        setTranslatedText(translated);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [text, language]);

  return translatedText;
}

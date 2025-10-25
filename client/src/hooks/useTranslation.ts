import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

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

function saveToCache(text: string, translation: string, sourceLang: string, targetLang: string): void {
  const key = getCacheKey(text, sourceLang, targetLang);
  
  // Save to in-memory cache
  translationCache.set(key, translation);
  
  // Save to session storage
  try {
    sessionStorage.setItem(key, translation);
  } catch (e) {
    // Session storage might be full, ignore error
    console.warn('Could not save to session storage:', e);
  }
}

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

  try {
    const response = await fetch(`${API_URL}/api/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        sourceLang,
        targetLang,
      }),
    });

    if (!response.ok) {
      throw new Error('Translation failed');
    }

    const data = await response.json();
    const translation = data.translated;

    // Save to cache
    saveToCache(text, translation, sourceLang, targetLang);

    return translation;
  } catch (error) {
    console.error('Translation error:', error);
    // Return original text on error
    return text;
  }
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

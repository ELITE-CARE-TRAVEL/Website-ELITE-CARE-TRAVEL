 import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import fr from '../locales/fr.json';
import en from '../locales/en.json';
import ar from '../locales/ar.json';

type Dictionaries = {
  fr: Record<string, string>;
  en: Record<string, string>;
  ar: Record<string, string>;
};

const dictionaries: Dictionaries = { fr, en, ar };

function translateText(text: string, targetLang: keyof Dictionaries): string {
  if (targetLang === 'fr') {
    return text;
  }

  const dict = dictionaries[targetLang];
  if (!dict) {
    return text;
  }

  // Use the French text as the key, fall back to original if missing
  return dict[text] ?? text;
}

export function useTranslation() {
  const { language } = useLanguage();

  const translate = (text: string): string => {
    return translateText(text, language);
  };

  return { translate, language };
}

export function useTranslate(text: string): string {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    setTranslatedText(translateText(text, language));
  }, [text, language]);

  return translatedText;
}

'use client';

import { useState, useEffect } from 'react';

type TranslationData = {
  [key: string]: string | TranslationData;
};

type Language = 'en' | 'es' | 'fr';

const translations: Record<Language, TranslationData> = {
  en: {},
  es: {},
  fr: {}
};

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(false);
  const [translationsData, setTranslationsData] = useState<TranslationData>(translations.en);

  // Load translations for a language
  const loadTranslations = async (language: Language) => {
    if (translations[language] && Object.keys(translations[language]).length > 0) {
      // Already loaded
      setTranslationsData(translations[language]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/translations/${language}.json`);
      if (response.ok) {
        const data = await response.json();
        translations[language] = data;
        setTranslationsData(data);
      } else {
        console.error(`Failed to load translations for ${language}`);
        // Fallback to English
        setTranslationsData(translations.en);
      }
    } catch (error) {
      console.error(`Error loading translations for ${language}:`, error);
      // Fallback to English
      setTranslationsData(translations.en);
    } finally {
      setIsLoading(false);
    }
  };

  // Change language
  const changeLanguage = async (language: Language) => {
    if (language === currentLanguage) return;

    setCurrentLanguage(language);
    await loadTranslations(language);

    // Store in localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('regenerativa-language', language);
    }
  };

  // Initialize on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initializeTranslations = () => {
      // Check for stored language preference first
      const storedLanguage = localStorage.getItem('regenerativa-language') as Language;
      if (storedLanguage && ['en', 'es', 'fr'].includes(storedLanguage)) {
        console.log('Loading stored language:', storedLanguage);
        setCurrentLanguage(storedLanguage);
        setTranslationsData(translations[storedLanguage]);
        return;
      }

      // Detect browser language
      const browserLang = navigator.language || 'en';
      const detectedLang = browserLang.split('-')[0] as Language;

      if (['en', 'es', 'fr'].includes(detectedLang)) {
        console.log('Detected browser language:', detectedLang);
        setCurrentLanguage(detectedLang);
        setTranslationsData(translations[detectedLang]);
        localStorage.setItem('regenerativa-language', detectedLang);
        return;
      }

      // Default to English
      console.log('Loading default language: en');
      setCurrentLanguage('en');
      setTranslationsData(translations.en);
      localStorage.setItem('regenerativa-language', 'en');
    };

    initializeTranslations();

    // Listen for language change events from LanguageSelector
    const handleLanguageChange = (event: CustomEvent) => {
      const newLanguage = event.detail.language as Language;
      if (newLanguage && ['en', 'es', 'fr'].includes(newLanguage)) {
        console.log('Language changed to:', newLanguage);
        setCurrentLanguage(newLanguage);
        setTranslationsData(translations[newLanguage]);
      }
    };

    window.addEventListener('languageChanged', handleLanguageChange as EventListener);
    return () => window.removeEventListener('languageChanged', handleLanguageChange as EventListener);
  }, []);

  // Translation function
  const t = (key: string, defaultValue: string = key): string => {
    const keys = key.split('.');
    let value: string | TranslationData | undefined = translationsData;

    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    return typeof value === 'string' ? value : defaultValue;
  };

  return {
    currentLanguage,
    changeLanguage,
    t,
    isLoading
  };
}

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
  const [translationsData, setTranslationsData] = useState<TranslationData>({
    "common": {
      "home": "Home",
      "about": "About",
      "contact": "Contact",
      "join": "Join",
      "contribute": "Contribute",
      "library": "Library",
      "network": "Network",
      "events": "Events",
      "visit": "Visit",
      "stake": "Stake",
      "privacy": "Privacy",
      "terms": "Terms",
      "cookies": "Cookies",
      "demo": "Demo"
    },
    "hero": {
      "title": "Regenerativa",
      "subtitle": "A global initiative for integral regeneration",
      "description": "Join the movement to build sustainable, resilient communities through bioregional networks and regenerative practices.",
      "cta": "Join the Movement"
    },
    "navigation": {
      "home": "Home",
      "about": "About",
      "network": "Network",
      "library": "Library",
      "events": "Events",
      "contact": "Contact",
      "join": "Join"
    },
    "footer": {
      "description": "A global initiative for integral regeneration. Join the movement to build sustainable, resilient communities.",
      "follow_us": "Follow Us",
      "contact_info": "Contact Information",
      "quick_links": "Quick Links",
      "legal": "Legal"
    }
  });
  const [isLoading, setIsLoading] = useState(false);

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

    const initializeTranslations = async () => {
      // Check for stored language preference
      const storedLanguage = localStorage.getItem('regenerativa-language') as Language;
      if (storedLanguage && ['en', 'es', 'fr'].includes(storedLanguage)) {
        console.log('Loading stored language:', storedLanguage);
        await changeLanguage(storedLanguage);
      } else {
        // Default to English
        console.log('Loading default language: en');
        await loadTranslations('en');
      }
    };

    initializeTranslations();
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

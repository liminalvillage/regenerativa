'use client';

import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
];

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isChanging, setIsChanging] = useState(false);

  // Initialize current language and listen for changes
  useEffect(() => {
    const initializeLanguage = () => {
      const supportedLanguages = languages.map(l => l.code);
      
      // Check if user has manually set a language before
      const storedLanguage = localStorage.getItem('regenerativa-language');
      const hasManuallySetLanguage = localStorage.getItem('regenerativa-language-manually-set') === 'true';
      
      if (storedLanguage && supportedLanguages.includes(storedLanguage) && hasManuallySetLanguage) {
        setCurrentLanguage(storedLanguage);
        console.log('LanguageSelector: Loading manually set language:', storedLanguage);
        return;
      }

      // Auto-detect browser language for first-time visitors or when no manual setting exists
      const browserLang = navigator.language || navigator.languages?.[0] || 'en';
      const detectedLang = browserLang.split('-')[0];

      if (supportedLanguages.includes(detectedLang)) {
        setCurrentLanguage(detectedLang);
        console.log('LanguageSelector: Auto-detected browser language:', detectedLang, 'from', browserLang);
        localStorage.setItem('regenerativa-language', detectedLang);
        return;
      }

      // Try fallback languages from browser preferences
      if (navigator.languages) {
        for (const lang of navigator.languages) {
          const fallbackLang = lang.split('-')[0];
          if (supportedLanguages.includes(fallbackLang)) {
            setCurrentLanguage(fallbackLang);
            console.log('LanguageSelector: Auto-detected fallback language:', fallbackLang, 'from', lang);
            localStorage.setItem('regenerativa-language', fallbackLang);
            return;
          }
        }
      }

      // Default to English
      console.log('LanguageSelector: No supported browser language detected, defaulting to English');
      setCurrentLanguage('en');
    };

    initializeLanguage();

    // Listen for localStorage changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'regenerativa-language' && e.newValue) {
        setCurrentLanguage(e.newValue);
        console.log('Language updated from storage:', e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Find current language object
  const currentLangObj = languages.find(lang => lang.code === currentLanguage) || languages[0];

  // Function to change language
  const handleLanguageChange = (language: Language) => {
    if (language.code === currentLanguage) return;

    console.log('Manually changing language to:', language.name, '(', language.code, ')');
    setIsChanging(true);

    // Store in localStorage for synchronization and mark as manually set
    const supportedLanguages = languages.map(l => l.code);
    if (supportedLanguages.includes(language.code)) {
      localStorage.setItem('regenerativa-language', language.code);
      localStorage.setItem('regenerativa-language-manually-set', 'true');
      setCurrentLanguage(language.code);

      // Dispatch custom event to notify other components
      window.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: language.code }
      }));
    }

    setTimeout(() => setIsChanging(false), 300);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 flex items-center space-x-1"
          disabled={isChanging}
        >
          <span className="text-sm">{currentLangObj.flag}</span>
          <span className="text-xs font-medium">{currentLangObj.code.toUpperCase()}</span>
          {isChanging && <Globe className="h-3 w-3 animate-spin" />}
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="max-h-96 overflow-y-auto">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={`cursor-pointer ${
              currentLanguage === language.code ? 'bg-accent' : ''
            }`}
          >
            <div className="flex items-center space-x-3 w-full">
              <span className="text-lg">{language.flag}</span>
              <div className="flex flex-col flex-1">
                <span className="font-medium">{language.nativeName}</span>
                <span className="text-xs text-muted-foreground">{language.name}</span>
              </div>
              <span className="text-xs font-mono text-muted-foreground">{language.code.toUpperCase()}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

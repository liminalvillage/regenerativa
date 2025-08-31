'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseGoogleTranslateReturn {
  isReady: boolean;
  currentLanguage: string;
  changeLanguage: (languageCode: string) => void;
  getCurrentLanguage: () => string;
  isTranslating: boolean;
}

export function useGoogleTranslate(): UseGoogleTranslateReturn {
  const [isReady, setIsReady] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);

  // Check if Google Translate is ready
  const checkGoogleTranslate = useCallback(() => {
    if (typeof window !== 'undefined' && window.google?.translate) {
      // Get current language from Google Translate
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        setCurrentLanguage(selectElement.value || 'en');
        setIsReady(true);
        return true;
      }
    }
    return false;
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    let attempts = 0;
    const maxAttempts = 10;
    
    const initGoogleTranslate = () => {
      if (checkGoogleTranslate() || attempts >= maxAttempts) {
        return;
      }
      
      attempts++;
      // Retry with exponential backoff
      const delay = Math.min(200 * Math.pow(2, attempts - 1), 2000);
      const timer = setTimeout(initGoogleTranslate, delay);
      return () => clearTimeout(timer);
    };

    // Start initialization after a short delay to ensure Google Translate is loaded
    const startTimer = setTimeout(initGoogleTranslate, 500);
    return () => clearTimeout(startTimer);
  }, []);

  // Additional effect to check for Google Translate after it might have been initialized
  useEffect(() => {
    if (isReady) return; // Don't run if already ready
    
    const checkAfterDelay = () => {
      if (!isReady) {
        checkGoogleTranslate();
      }
    };

    // Check a few times with increasing delays, but only if not ready
    const timers = [1000, 2000, 3000].map(delay => 
      setTimeout(checkAfterDelay, delay)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [isReady]);

  // Change language
  const changeLanguage = useCallback((languageCode: string) => {
    if (!isReady) {
      console.log('Google Translate not ready, cannot change language');
      return;
    }

    setIsTranslating(true);
    
    // Try using the global function first
    const windowWithFunctions = window as Window & {
      changeGoogleTranslateLanguage?: (lang: string) => boolean;
    };
    if (typeof window !== 'undefined' && windowWithFunctions.changeGoogleTranslateLanguage) {
      const success = windowWithFunctions.changeGoogleTranslateLanguage(languageCode);
      if (success) {
        setCurrentLanguage(languageCode);
        setTimeout(() => {
          setIsTranslating(false);
        }, 2000);
        return;
      }
    }
    
    // Fallback to direct DOM manipulation
    const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = languageCode;
      selectElement.dispatchEvent(new Event('change'));
      setCurrentLanguage(languageCode);
      
      // Reset translating state after a delay
      setTimeout(() => {
        setIsTranslating(false);
      }, 2000);
    } else {
      console.log('Select element not found for language change');
      setIsTranslating(false);
    }
  }, [isReady]);

  // Get current language
  const getCurrentLanguage = useCallback(() => {
    if (typeof window !== 'undefined') {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        return selectElement.value || 'en';
      }
    }
    return currentLanguage;
  }, [currentLanguage]);

  // Listen for language changes with improved monitoring
  useEffect(() => {
    if (!isReady) return;

    let lastKnownLanguage = currentLanguage;

    const checkForChanges = () => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement && selectElement.value !== lastKnownLanguage) {
        console.log('Language change detected:', lastKnownLanguage, '->', selectElement.value);
        lastKnownLanguage = selectElement.value;
        setCurrentLanguage(selectElement.value);
      }
    };

    // Check more frequently for changes
    const interval = setInterval(checkForChanges, 500);
    
    // Also set up a mutation observer for immediate detection
    const observer = new MutationObserver(() => {
      checkForChanges();
    });

    const selectElement = document.querySelector('.goog-te-combo');
    if (selectElement) {
      observer.observe(selectElement, { 
        attributes: true, 
        attributeFilter: ['value'],
        childList: true,
        subtree: true
      });
    }

    // Listen for custom events from Google Translate
    const handleGoogleTranslateReady = (event: CustomEvent) => {
      console.log('Google Translate ready event received:', event.detail);
      const language = event.detail.language;
      if (language && language !== currentLanguage) {
        console.log('Setting language from ready event:', language);
        setCurrentLanguage(language);
      }
    };

    const handleGoogleTranslateLanguageChanged = (event: CustomEvent) => {
      console.log('Google Translate language changed event received:', event.detail);
      const language = event.detail.language;
      if (language && language !== currentLanguage) {
        console.log('Setting language from change event:', language);
        setCurrentLanguage(language);
      }
    };

    window.addEventListener('googleTranslateReady', handleGoogleTranslateReady as EventListener);
    window.addEventListener('googleTranslateLanguageChanged', handleGoogleTranslateLanguageChanged as EventListener);

    return () => {
      clearInterval(interval);
      observer.disconnect();
      window.removeEventListener('googleTranslateReady', handleGoogleTranslateReady as EventListener);
      window.removeEventListener('googleTranslateLanguageChanged', handleGoogleTranslateLanguageChanged as EventListener);
    };
  }, [isReady, currentLanguage]);

  return {
    isReady,
    currentLanguage,
    changeLanguage,
    getCurrentLanguage,
    isTranslating,
  };
}

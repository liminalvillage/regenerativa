'use client';

import { useEffect } from 'react';

export default function GoogleTranslate() {
  useEffect(() => {
    // Simple Google Translate initialization
    const initGoogleTranslate = () => {
      // Define the callback function
      window.googleTranslateElementInit = function() {
        try {
          new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'es,fr,en',
            autoDisplay: false,
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
          }, 'google_translate_element');
        } catch (error) {
          console.error('Google Translate initialization error:', error);
        }
      };

      // Create the hidden translate element
      const translateElement = document.createElement('div');
      translateElement.id = 'google_translate_element';
      translateElement.style.display = 'none';
      document.body.appendChild(translateElement);

      // Load the Google Translate script
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.head.appendChild(script);

      // Define utility functions
      window.triggerGoogleTranslate = function(targetLang: string) {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (selectElement) {
          selectElement.value = targetLang;
          selectElement.dispatchEvent(new Event('change', { bubbles: true }));
        }
      };

      window.getGoogleTranslateLanguage = function() {
        const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        return selectElement ? selectElement.value : 'en';
      };
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initGoogleTranslate, 100);

    return () => {
      clearTimeout(timer);
      // Cleanup
      const script = document.querySelector('script[src*="translate.google.com"]');
      const element = document.getElementById('google_translate_element');
      if (script) script.remove();
      if (element) element.remove();
    };
  }, []);

  return null;
}

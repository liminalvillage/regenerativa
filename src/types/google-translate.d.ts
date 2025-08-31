declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: {
          new (options: Record<string, unknown>, elementId: string): Record<string, unknown>;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
    googleTranslateElementInit: () => void;
    googleTranslateInitialized: boolean;
    googleTranslateReady: boolean;
    triggerGoogleTranslate: (targetLang: string) => boolean;
    getGoogleTranslateLanguage: () => string;
  }
}

export {};

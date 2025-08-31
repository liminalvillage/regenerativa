declare global {
  var google: {
    translate: {
      TranslateElement: {
        new (options: Record<string, unknown>, elementId: string): Record<string, unknown>;
        InlineLayout: {
          SIMPLE: number;
        };
      };
    };
  };

  interface Window {
    googleTranslateElementInit: () => void;
    googleTranslateInitialized: boolean;
    googleTranslateReady: boolean;
    triggerGoogleTranslate: (targetLang: string) => boolean;
    getGoogleTranslateLanguage: () => string;
  }
}

export {};

'use client';

import { useEffect, useState } from 'react';
import LanguageSelector from '@/components/LanguageSelector';
import { useGoogleTranslate } from '@/hooks/useGoogleTranslate';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/navigation';

interface DebugInfo {
  googleAvailable: boolean;
  googleTranslateAvailable: boolean;
  selectElement: Element | null;
  translateElement: HTMLElement | null;
  globalFunctions: {
    changeGoogleTranslateLanguage: boolean;
    isGoogleTranslateReady: boolean;
  };
  browserLanguage: string;
  timestamp: string;
}

export default function TestLanguagePage() {
  const { isReady, currentLanguage, isTranslating } = useGoogleTranslate();
  const [debugInfo, setDebugInfo] = useState<DebugInfo>({
    googleAvailable: false,
    googleTranslateAvailable: false,
    selectElement: null,
    translateElement: null,
    globalFunctions: {
      changeGoogleTranslateLanguage: false,
      isGoogleTranslateReady: false,
    },
    browserLanguage: 'N/A',
    timestamp: new Date().toLocaleTimeString(),
  });

  useEffect(() => {
    const updateDebugInfo = () => {
      const info = {
        googleAvailable: typeof window !== 'undefined' && typeof window.google !== 'undefined',
        googleTranslateAvailable: typeof window !== 'undefined' && !!window.google?.translate,
        selectElement: document.querySelector('.goog-te-combo'),
        translateElement: document.getElementById('google_translate_element'),
        globalFunctions: {
          changeGoogleTranslateLanguage: typeof window !== 'undefined' && typeof (window as Window & { changeGoogleTranslateLanguage?: (lang: string) => boolean }).changeGoogleTranslateLanguage !== 'undefined',
          isGoogleTranslateReady: typeof window !== 'undefined' && typeof (window as Window & { isGoogleTranslateReady?: () => boolean }).isGoogleTranslateReady !== 'undefined',
        },
        browserLanguage: typeof window !== 'undefined' ? navigator.language : 'N/A',
        timestamp: new Date().toLocaleTimeString(),
      };
      setDebugInfo(info);
    };

    // Update immediately
    updateDebugInfo();

    // Update every 2 seconds
    const interval = setInterval(updateDebugInfo, 2000);
    return () => clearInterval(interval);
  }, []);

  const testLanguageChange = (languageCode: string) => {
    const windowWithFunctions = window as Window & {
      changeGoogleTranslateLanguage?: (lang: string) => boolean;
    };
    if (typeof window !== 'undefined' && windowWithFunctions.changeGoogleTranslateLanguage) {
      const success = windowWithFunctions.changeGoogleTranslateLanguage(languageCode);
      console.log('Manual language change test:', languageCode, success);
    } else {
      console.log('Global function not available');
    }
  };

  const forceInit = () => {
    const windowWithFunctions = window as Window & {
      googleTranslateElementInit?: () => void;
    };
    if (typeof window !== 'undefined' && windowWithFunctions.googleTranslateElementInit) {
      windowWithFunctions.googleTranslateElementInit();
      console.log('Forced Google Translate initialization');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Language Selector Debug</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Status</CardTitle>
              <CardDescription>Google Translate Status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Google Translate Ready:</strong> {isReady ? '✅ Yes' : '❌ No'}</p>
              <p><strong>Current Language:</strong> {currentLanguage}</p>
              <p><strong>Translating:</strong> {isTranslating ? '🔄 Yes' : '❌ No'}</p>
              <p><strong>Browser Language:</strong> {debugInfo.browserLanguage}</p>
              <p><strong>Last Updated:</strong> {debugInfo.timestamp}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Language Selector</CardTitle>
              <CardDescription>Test the language dropdown</CardDescription>
            </CardHeader>
            <CardContent>
              <LanguageSelector />
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Debug Information</CardTitle>
            <CardDescription>Real-time debugging data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Google API Status</h4>
                <p><strong>Google Available:</strong> {debugInfo.googleAvailable ? '✅' : '❌'}</p>
                <p><strong>Google Translate Available:</strong> {debugInfo.googleTranslateAvailable ? '✅' : '❌'}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">DOM Elements</h4>
                <p><strong>Select Element:</strong> {debugInfo.selectElement ? '✅ Found' : '❌ Not Found'}</p>
                <p><strong>Translate Element:</strong> {debugInfo.translateElement ? '✅ Found' : '❌ Not Found'}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Global Functions</h4>
                <p><strong>changeGoogleTranslateLanguage:</strong> {debugInfo.globalFunctions?.changeGoogleTranslateLanguage ? '✅' : '❌'}</p>
                <p><strong>isGoogleTranslateReady:</strong> {debugInfo.globalFunctions?.isGoogleTranslateReady ? '✅' : '❌'}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Manual Test Buttons</CardTitle>
            <CardDescription>Test language changes directly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button onClick={() => testLanguageChange('es')} variant="outline">Spanish</Button>
                <Button onClick={() => testLanguageChange('fr')} variant="outline">French</Button>
                <Button onClick={() => testLanguageChange('de')} variant="outline">German</Button>
                <Button onClick={() => testLanguageChange('it')} variant="outline">Italian</Button>
                <Button onClick={() => testLanguageChange('en')} variant="outline">English</Button>
              </div>
              <div>
                <Button onClick={forceInit} variant="secondary">Force Google Translate Init</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Test Content</CardTitle>
            <CardDescription>This content should translate when you change languages</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              This is a test page to verify that the language selector is working properly. 
              Try clicking on the language selector above or the manual test buttons and see if the content translates.
            </p>
            <p className="mb-4">
              If you see this text translated to a different language, then the language 
              selector is working correctly!
            </p>
            <p>
              Check the browser console for debugging information about the Google Translate initialization and language changes.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

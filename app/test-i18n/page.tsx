import { Metadata } from "next";

export const metadata: Metadata = {
  title: "i18n Test - Regenerativa",
  description: "Testing internationalization functionality",
};

export default function TestI18nPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">i18n Test Page</h1>
        
        <div className="space-y-6">
          <section className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Test Content</h2>
            <p className="text-muted-foreground mb-4">
              This page contains various types of content to test Google Translate functionality.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">English Content</h3>
                <p>
                  This is a sample paragraph in English that should be translated automatically 
                  based on the user&apos;s browser language settings. The Google Translate script 
                  should detect the browser language and translate this content accordingly.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Technical Terms</h3>
                <p>
                  Some technical terms that might be challenging to translate: 
                  &ldquo;bioregional networks&rdquo;, &ldquo;regenerative practices&rdquo;, &ldquo;hexagonal micro-economies&rdquo;, 
                  &ldquo;integral regeneration&rdquo;, and &ldquo;sustainable communities&rdquo;.
                </p>
              </div>
            </div>
          </section>
          
          <section className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Language Detection</h2>
            <p className="text-muted-foreground mb-4">
              Your browser language is: <span id="browser-language" className="font-mono bg-muted px-2 py-1 rounded">Loading...</span>
            </p>
            
            <div className="space-y-2">
              <p><strong>Expected behavior:</strong></p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Content should automatically translate to your browser language</li>
                <li>No visible Google Translate elements should appear</li>
                <li>Language selector in navigation should work</li>
                <li>Translation should happen seamlessly in the background</li>
              </ul>
            </div>
          </section>
          
          <section className="bg-card p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Test Instructions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">1. Automatic Translation</h3>
                <p className="text-sm text-muted-foreground">
                  If your browser language is not English, this content should automatically 
                  appear in your preferred language without any visible translation controls.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">2. Manual Language Selection</h3>
                <p className="text-sm text-muted-foreground">
                  Click the globe icon in the navigation bar to manually select a different language. 
                  The content should update immediately.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">3. Browser Language Change</h3>
                <p className="text-sm text-muted-foreground">
                  Change your browser language settings and refresh the page to test automatic 
                  language detection.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Display browser language
            document.getElementById(&apos;browser-language&apos;).textContent = navigator.language || &apos;Unknown&apos;;
            
            // Check if Google Translate is loaded
            function checkGoogleTranslate() {
              if (window.google && window.google.translate) {
                console.log(&apos;✅ Google Translate is loaded and ready&apos;);
                return true;
              } else {
                console.log(&apos;⏳ Google Translate not yet loaded, retrying...&apos;);
                return false;
              }
            }
            
            // Check every 500ms for the first 10 seconds
            let attempts = 0;
            const maxAttempts = 20;
            const checkInterval = setInterval(() => {
              attempts++;
              if (checkGoogleTranslate() || attempts >= maxAttempts) {
                clearInterval(checkInterval);
                if (attempts >= maxAttempts) {
                  console.log(&apos;❌ Google Translate failed to load after 10 seconds&apos;);
                }
              }
            }, 500);
          `,
        }}
      />
    </div>
  );
}

'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Cookie, Settings, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Cookie <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              How we use cookies and similar technologies on our website.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cookie Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold mb-6 flex items-center">
                <Cookie className="h-8 w-8 text-primary mr-3" />
                What Are Cookies?
              </h2>
              <p className="text-lg text-muted-foreground">
                Cookies are small text files that are stored on your device when you visit our website. They help us 
                provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Types of Cookies We Use</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg">Essential Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation, access to secure areas, and form submissions. The website cannot function properly 
                    without these cookies.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mt-2">
                    <li>Authentication and security</li>
                    <li>Session management</li>
                    <li>Load balancing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Analytics Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously. This helps us improve our website and services.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mt-2">
                    <li>Page views and time spent</li>
                    <li>Traffic sources</li>
                    <li>User behavior patterns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Functional Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies enable enhanced functionality and personalization, such as remembering your language 
                    preferences and customizing content based on your interests.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mt-2">
                    <li>Language preferences</li>
                    <li>User interface customization</li>
                    <li>Content personalization</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Marketing Cookies</h4>
                  <p className="text-muted-foreground">
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground mt-2">
                    <li>Ad targeting and optimization</li>
                    <li>Social media integration</li>
                    <li>Campaign effectiveness tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Settings className="h-6 w-6 text-primary mr-2" />
                Managing Your Cookie Preferences
              </h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  You have several options for managing cookies on our website:
                </p>
                <div>
                  <h4 className="font-semibold">Browser Settings</h4>
                  <p className="text-muted-foreground">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Block all cookies</li>
                    <li>Allow cookies from specific sites</li>
                    <li>Delete existing cookies</li>
                    <li>Set preferences for different types of cookies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Cookie Consent</h4>
                  <p className="text-muted-foreground">
                    When you first visit our website, you&apos;ll see a cookie consent banner that allows you to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Accept all cookies</li>
                    <li>Reject non-essential cookies</li>
                    <li>Customize your preferences</li>
                    <li>Learn more about our cookie policy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Shield className="h-6 w-6 text-primary mr-2" />
                Third-Party Cookies
              </h3>
              <p className="text-muted-foreground mb-4">
                Some cookies on our website are set by third-party services that we use to enhance functionality. These include:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Google Analytics</h4>
                  <p className="text-muted-foreground">
                    We use Google Analytics to understand how visitors use our website. Google Analytics cookies collect 
                    information about your use of our site and may be used by Google to provide personalized ads.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Social Media</h4>
                  <p className="text-muted-foreground">
                    Social media platforms may set cookies when you interact with social media features on our website, 
                    such as sharing buttons or embedded content.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Payment Processors</h4>
                  <p className="text-muted-foreground">
                    If you make donations or payments through our website, payment processors may set cookies to ensure 
                    secure transactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Cookie Retention</h3>
              <p className="text-muted-foreground mb-4">
                Different types of cookies are stored for different periods:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain on your device for a set period</li>
                <li><strong>Analytics cookies:</strong> Typically stored for up to 2 years</li>
                <li><strong>Marketing cookies:</strong> May be stored for up to 1 year</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Updates to This Policy</h3>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                updated policy on our website.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <p className="font-semibold">Regenerativa</p>
                <p className="text-muted-foreground">Email: privacy@regenerativa.org</p>
                <p className="text-muted-foreground">Contact Form: <Link href="/contact" className="text-primary hover:underline">Contact Us</Link></p>
              </div>
            </div>

            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Last Updated:</strong> December 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

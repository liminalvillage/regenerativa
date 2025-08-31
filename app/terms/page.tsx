'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              The terms and conditions governing your use of our platform and services.
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

      {/* Terms Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold mb-6 flex items-center">
                <FileText className="h-8 w-8 text-primary mr-3" />
                Agreement to Terms
              </h2>
              <p className="text-lg text-muted-foreground">
                By accessing and using the Regenerativa website and services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">1. Description of Service</h3>
              <p className="text-muted-foreground mb-4">
                Regenerativa provides a platform for connecting individuals and communities interested in regenerative practices, 
                sustainable living, and ecological restoration. Our services include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Community networking and connection</li>
                <li>Educational resources and workshops</li>
                <li>Project collaboration tools</li>
                <li>Event organization and participation</li>
                <li>Resource sharing and knowledge exchange</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">2. User Accounts</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  When you create an account with us, you must provide accurate and complete information. You are responsible for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Maintaining the security of your account and password</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your account information remains current</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">3. Acceptable Use</h3>
              <p className="text-muted-foreground mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Use the service for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Upload or transmit malicious code or content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">4. Community Guidelines</h3>
              <p className="text-muted-foreground mb-4">
                Our platform is built on principles of respect, collaboration, and regenerative values. Users are expected to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Treat all community members with respect and dignity</li>
                <li>Share knowledge and resources generously</li>
                <li>Contribute positively to community discussions</li>
                <li>Support regenerative and sustainable practices</li>
                <li>Respect diverse perspectives and experiences</li>
                <li>Maintain confidentiality when requested</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">5. Content and Intellectual Property</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">User-Generated Content</h4>
                  <p className="text-muted-foreground">
                    You retain ownership of content you create and share on our platform. By sharing content, you grant us a 
                    non-exclusive license to use, display, and distribute your content in connection with our services.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Our Content</h4>
                  <p className="text-muted-foreground">
                    All content on our platform, including text, graphics, logos, and software, is owned by Regenerativa or 
                    our licensors and is protected by copyright and other intellectual property laws.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">6. Privacy and Data Protection</h3>
              <p className="text-muted-foreground">
                Your privacy is important to us. Our collection and use of personal information is governed by our 
                <Link href="/privacy" className="text-primary hover:underline"> Privacy Policy</Link>, which is incorporated into these Terms by reference.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">7. Disclaimers and Limitations</h3>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our services are provided &quot;as is&quot; without warranties of any kind. We do not guarantee:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground">
                  <li>Uninterrupted or error-free service</li>
                  <li>Accuracy of information provided by users</li>
                  <li>Compatibility with all devices or browsers</li>
                  <li>Security of data transmission</li>
                </ul>
                <p className="text-muted-foreground">
                  We are not responsible for the actions, content, or information of third parties, including other users.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">8. Limitation of Liability</h3>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Regenerativa shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of our services.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">9. Termination</h3>
              <p className="text-muted-foreground">
                We may terminate or suspend your account and access to our services at any time, with or without cause, 
                with or without notice. Upon termination, your right to use the service will cease immediately.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">10. Governing Law</h3>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 
                Regenerativa operates, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">11. Changes to Terms</h3>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by 
                posting the new Terms on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">12. Contact Information</h3>
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mt-4">
                <p className="font-semibold">Regenerativa</p>
                <p className="text-muted-foreground">Email: legal@regenerativa.org</p>
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

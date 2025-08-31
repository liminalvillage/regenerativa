'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Lock, Users, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              How we protect and handle your personal information.
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

      {/* Privacy Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-12">
              <h2 className="text-3xl font-display font-bold mb-6 flex items-center">
                <Shield className="h-8 w-8 text-primary mr-3" />
                Our Commitment to Privacy
              </h2>
              <p className="text-lg text-muted-foreground">
                At Regenerativa, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                and use our services.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Eye className="h-6 w-6 text-primary mr-2" />
                Information We Collect
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Personal Information</h4>
                  <p className="text-muted-foreground">
                    We may collect personal information such as your name, email address, phone number, and location when you:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Register for an account</li>
                    <li>Join our community</li>
                    <li>Contact us through our forms</li>
                    <li>Complete our community connection questionnaire</li>
                    <li>Participate in events or workshops</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">Usage Information</h4>
                  <p className="text-muted-foreground">
                    We automatically collect certain information about your device and how you interact with our website, including:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>IP address and location data</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Lock className="h-6 w-6 text-primary mr-2" />
                How We Use Your Information
              </h3>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Provide and maintain our services</li>
                <li>Connect you with local communities and projects</li>
                <li>Send you updates about events and opportunities</li>
                <li>Improve our website and user experience</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Ensure the security and integrity of our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary mr-2" />
                Information Sharing
              </h3>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and providing services</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                <li><strong>Community Connections:</strong> With your consent, we may share your information with local communities you choose to connect with</li>
                <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred as part of the business assets</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Data Security</h3>
              <p className="text-muted-foreground mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication</li>
                <li>Secure hosting and infrastructure</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Your Rights</h3>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Cookies and Tracking</h3>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Children&apos;s Privacy</h3>
              <p className="text-muted-foreground">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Changes to This Policy</h3>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-display font-bold mb-4">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
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

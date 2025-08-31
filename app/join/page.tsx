import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Users, MapPin, Heart, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner1.jpg"
            alt="Join the regeneration movement"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-balance mb-6">
              Join the <span className="text-primary">Regeneration Movement</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Connect with thousands of people building sustainable communities and regenerative systems worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Join Form */}
            <Card className="p-6 lg:p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Join Our Community</CardTitle>
                <CardDescription>
                  Tell us about yourself and how you&apos;d like to get involved in building regenerative communities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Fill out our simple questionnaire to help us understand your interests and connect you with the right opportunities.
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <a href="https://wequest.typeform.com/to/q0BDRm7z" target="_blank" rel="noopener noreferrer">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    This will open in a new tab and take just a few minutes to complete.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">What You&apos;ll Get</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Community Connection</h3>
                      <p className="text-sm text-muted-foreground">Get matched with local communities and people who share your interests and values.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Local Network Access</h3>
                      <p className="text-sm text-muted-foreground">Connect with people in your bioregion and discover nearby regenerative initiatives.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Personalized Opportunities</h3>
                      <p className="text-sm text-muted-foreground">Receive tailored recommendations for events, projects, and ways to contribute.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Direct Support</h3>
                      <p className="text-sm text-muted-foreground">Get help finding the right path to start your regenerative journey.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    What Happens Next
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Personalized response within 24-48 hours</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Invitation to join relevant community channels</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Connection with local communities matching your interests</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>Custom recommendations for getting involved</span>
                  </div>
                </CardContent>
              </Card>


            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


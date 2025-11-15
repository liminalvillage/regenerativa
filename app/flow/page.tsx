'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowRight, TrendingUp, Users, Leaf, Heart, Database, Scale, Coins, Globe } from "lucide-react";
import Link from "next/link";

export default function FlowPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-violet-500/10 via-background to-purple-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Value Recognition System</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Flow Token
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              A "current-see" making visible the flow of value through regenerative contributions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Start Contributing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">
                  Learn More
                  <Zap className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Beyond Proof-of-Work
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Unlike Bitcoin and other cryptocurrencies that create artificial scarcity through energy-intensive computational work, Regenerativa employs Flow—a token that functions as a <strong>"current-see"</strong> (making visible the current of value moving through the system).
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Each month, a fixed amount of Flow is released. Rather than going to energy-intensive mining, Flow distributes to those who have contributed toward collectively identified needs, including planetary regeneration and organizational support functions.
            </p>
            <p className="text-lg text-muted-foreground">
              Because Flow represents recognized contribution across the entire network, it functions as a universal medium of exchange—a kind of gold standard backed not by precious metal but by <strong>proven value creation for the commons.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              How Flow Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monthly distribution based on contribution quality and network integration
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Performance Weighting</CardTitle>
                  <CardDescription>Measurable results achieved</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Flow distribution considers quantifiable outcomes: trees planted and kept alive, plastic removed from oceans, soil carbon sequestered, products created, needs satisfied. Performance metrics are defined by each Holon according to their focus.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Relationality Weighting</CardTitle>
                  <CardDescription>Quality of collaboration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The algorithm also values cooperative behavior and network integration. Those who support others, share knowledge openly, and strengthen community connections receive recognition alongside individual achievement.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Community-Defined Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Within any given Holon, the community decides what constitutes valuable contribution according to their declared value system.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4">
                    <p className="font-semibold mb-2">Regeneration-Focused Holon</p>
                    <p className="text-sm text-muted-foreground">
                      Planting trees kept alive for years, restoring wetlands, creating wildlife corridors
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <p className="font-semibold mb-2">Software Development Holon</p>
                    <p className="text-sm text-muted-foreground">
                      Code contributions solving collective needs, documentation, testing, user support
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Release</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Fixed amount of Flow tokens released each lunation cycle (new moon to new moon)
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Algorithmic Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Transparent formula weighing both performance and relationality across the network
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Universal Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Flow is accepted across all Holons as evidence of proven value creation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Resource Accounting */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Multi-Resource Accounting
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Flow operates within a comprehensive accounting system that tracks the full spectrum of value exchanges
            </p>

            <Card className="mb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  Money as One Resource Among Many
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regenerativa treats money as just one resource among many, distinguished primarily by its high optionality in conventional markets. Every resource is indexed globally by name, location, and usage. Exchange rates between resources vary by location and context.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Coins className="h-5 w-5 mr-2 text-primary" />
                    Financial Capital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Conventional money providing maximum optionality in current markets
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Labor & Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Time, skills, and knowledge contributions measured by domain and experience
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Database className="h-5 w-5 mr-2 text-primary" />
                    Physical Materials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Building supplies, tools, equipment tracked by type, quantity, and location
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Globe className="h-5 w-5 mr-2 text-primary" />
                    Land & Location Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Space for production, living, gathering—contextually valued by bioregion
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Leaf className="h-5 w-5 mr-2 text-primary" />
                    Regenerative Impacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Trees planted, carbon sequestered, biodiversity supported, plastic removed
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Heart className="h-5 w-5 mr-2 text-primary" />
                    Social Capital
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Relationships, trust, reputation within the network enabling collaboration
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Hop Exchange */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Multi-Hop Bartering
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Sophisticated exchanges without direct coincidence of wants
            </p>

            <Card className="mb-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>Beyond Simple Barter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Traditional barter requires exact coincidence of wants: you have what I need AND I have what you need. This severely limits exchange possibilities.
                </p>
                <p className="text-muted-foreground">
                  Regenerativa's multi-resource accounting enables <strong>multi-hop exchanges</strong> where Person A can exchange with Person B even without direct coincidence of wants, because the system can route value through multiple intermediate exchanges to satisfy both parties.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-5 w-5 mr-2 text-primary" />
                  Contextual Exchange Rates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Exchange rates between resources vary by location and context. A liter of water in the desert holds different value than a liter of water at the North Pole, and the system reflects this contextual reality.
                </p>
                <p className="text-muted-foreground">
                  This enables fair exchanges that honor local conditions while maintaining network-wide coordination.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Earning Flow */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              How to Earn Flow
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Contribute to collective needs and regenerative action
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Leaf className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Regenerative Actions</h3>
                      <p className="text-sm text-muted-foreground">
                        Plant trees and maintain them, restore degraded land, remove plastic from oceans, create wildlife habitat, build soil carbon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Address Collective Needs</h3>
                      <p className="text-sm text-muted-foreground">
                        Respond to needs expressed through Theos Protocol—produce food, create tools, provide education, offer healing services
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-violet-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Database className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Infrastructure Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Develop software, maintain systems, coordinate networks, document processes, support onboarding
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-amber-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Heart className="h-4 w-4 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Community Building</h3>
                      <p className="text-sm text-muted-foreground">
                        Facilitate gatherings, resolve conflicts, mentor newcomers, strengthen relationships, share knowledge
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/90 via-primary to-secondary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Start Creating Value for the Commons
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Flow tokens recognize and reward contributions to collective needs and planetary regeneration. Your work for the commons becomes visible, valued, and exchangeable across the entire network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/join">
                  Join the Network
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link href="/contribute">
                  Start Contributing
                  <Zap className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

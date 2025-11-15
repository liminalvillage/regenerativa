'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tractor, Sprout, Shield, Globe, ArrowRight, Leaf, Factory, MapPin, CheckCircle2, TreePine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AgrospherePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/permaculture.jpg"
            alt="Agrosphere regenerative farming"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sprout className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Regenerative Agriculture Technology</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Agrosphere
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Small Holding Integrated Farming Technologies (SHIFT)
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Open-source farming equipment enabling small-scale organic agriculture at unprecedented density and efficiency while actively regenerating ecosystems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/regenerative-business">
                  Access Technology
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#technology">
                  Learn More
                  <Tractor className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Regenerative Farming at Scale
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Agrosphere represents Regenerativa's first major production system—demonstrating how regenerative principles operate in practice. These open-source farming technologies enable physically organic, pesticide-free agriculture that produces abundant local food while actively regenerating degraded soil and sequestering carbon.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              What makes Agrosphere revolutionary is not just the technology, but the <strong>licensing framework</strong>: users must dedicate 50% of their agricultural land to regeneration—planting native species, creating wildlife corridors, and restoring natural habitat.
            </p>
            <p className="text-lg text-muted-foreground">
              This ensures that food production and ecological healing occur simultaneously. Farmers produce more food than conventional methods even while dedicating half their land to regeneration.
            </p>
          </div>
        </div>
      </section>

      {/* The Technology */}
      <section id="technology" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Four Sequential Machines
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agrosphere consists of four machines that work together to enable high-density organic farming
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Bed Creator</CardTitle>
                <CardDescription>Foundation preparation system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Generates raised beds with integrated drip irrigation and mulching systems. Creates optimal growing conditions while conserving water and building soil health from the start.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Transplanter</CardTitle>
                <CardDescription>Precision planting mechanism</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Moves seedlings into prepared beds at optimal spacing. Enables dense, efficient planting that maximizes yields while maintaining plant health and accessibility for harvest.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Tunnel Former</CardTitle>
                <CardDescription>Protection infrastructure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creates protective tunnels in a single sweep, shielding crops from pests, extreme weather, and hail while remaining wind-resistant. Eliminates need for chemical pest control.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Harvester</CardTitle>
                <CardDescription>Efficient collection system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Assists in efficient collection of densely-packed crop yields. Reduces labor requirements while maintaining produce quality and minimizing waste during harvest.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Factory className="h-5 w-5 mr-2 text-primary" />
                Accessible Manufacturing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                These machines can be built in a modest maker space or production center with relatively accessible equipment and modest capital investment. Full plans, materials lists, and build instructions are available under the regenerative license.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Regenerative Requirements */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Built-In Regeneration
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              The Agrosphere license includes mandatory regenerative requirements
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TreePine className="h-5 w-5 mr-2 text-primary" />
                    50% Land Regeneration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Users must dedicate 50% of land farmed with Agrosphere technology to regeneration:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Planting native species</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Creating wildlife corridors</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Restoring natural habitat</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Building soil carbon</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-primary" />
                    Intertwined Landscape
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    When farmers grow intertwined rows of crops and native plantings, they create a landscape that:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Nature could rapidly reclaim if farming ceased</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Supports biodiversity while producing food</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Creates resilient agroecosystems</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Builds soil health year over year</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  More Food, Less Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The density and efficiency of Agrosphere technology means farmers produce <strong>more food than conventional methods</strong> even while dedicating half their land to regeneration. This proves that ecological restoration and food security are not in conflict—they are complementary.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Pathways */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Three Ways to Access
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Agrosphere operates under the regenerative business model
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">☀️</span>
                  </div>
                  <CardTitle>Purchase</CardTitle>
                  <CardDescription>Solar License</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Buy the machines through conventional transaction. Includes ownership token for future production and full technical support.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌙</span>
                  </div>
                  <CardTitle>Produce</CardTitle>
                  <CardDescription>Lunar License</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Become a production center—receive all plans and support to manufacture Agrosphere machines and serve local farmers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <CardTitle>Attract</CardTitle>
                  <CardDescription>Collective Ownership</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Small holding farmers collectively pool resources to acquire and share the technology through their local Holon.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" asChild>
                <Link href="/regenerative-business">
                  Learn About Licensing Pathways
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Implementation */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Production Centers
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Demonstrating the model across two continents
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Italy
                  </CardTitle>
                  <CardDescription>European Production Hub</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The first Agrosphere production center operates in Italy, serving farmers across Southern Europe with locally-manufactured equipment and ongoing technical support.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/sites/brickfactory">
                      Visit Brick Factory
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    South Africa
                  </CardTitle>
                  <CardDescription>African Production Hub</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    A second production center in South Africa demonstrates how the technology transfers across climates, cultures, and agricultural contexts.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/network">
                      View on Network Map
                      <Globe className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-primary" />
                  Scaling Through Open-Source
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  As demand grows in other regions, new production centers will emerge. Technology transfer happens through the open-source licensing framework—no franchising fees, no territorial restrictions, just knowledge sharing and mutual support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/90 via-primary to-secondary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Transform Agriculture in Your Bioregion
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you're a farmer seeking regenerative tools, a maker space ready to produce them, or a community organizing collective access—Agrosphere offers a pathway to food sovereignty and ecological restoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/join">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link href="/contribute">
                  Become a Producer
                  <Factory className="ml-2 h-4 w-4" />
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

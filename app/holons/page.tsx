'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/button";
import { Hexagon, ArrowRight, Network, Users, Leaf, ArrowDownUp, ArrowUpDown, Layers } from "lucide-react";
import Link from "next/link";

export default function HolonsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Hexagon className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Fractal Organization</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Holon Structure
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              A whole that is simultaneously a part of a larger whole—the basic organizational unit of Regenerativa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/network">
                  Explore Holons
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#structure">
                  Learn More
                  <Layers className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Holon */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              What is a Holon?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The term "holon" comes from systems theory, coined by Arthur Koestler to describe something that is simultaneously a whole and a part. Every holon has two essential natures:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Hexagon className="h-5 w-5 mr-2 text-primary" />
                    As a Whole
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Each holon is a complete, self-organizing entity with its own integrity, governance, and capacity to meet its members' needs. It functions autonomously with internal coherence.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Network className="h-5 w-5 mr-2 text-primary" />
                    As a Part
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Simultaneously, each holon is a component of larger holons, contributing to and benefiting from the health of broader systems. No holon exists in isolation.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-muted-foreground">
              In Regenerativa, holons function as living cells within a larger organism—each contributing to and benefiting from the health of the whole. This fractal structure enables coordination at every scale, from individual projects to bioregional networks to the planetary system.
            </p>
          </div>
        </div>
      </section>

      {/* Holon Interfaces */}
      <section id="structure" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Two Fundamental Interfaces
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Every holon operates through two primary interfaces that connect it to the broader network
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <ArrowDownUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Input Interface</CardTitle>
                  <CardDescription>Needs and Wishes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The needs and wishes of participants within the holon, expressed as subscriptions to desired outcomes. These needs travel with individuals across different holons they participate in, creating a personal profile of requirements that can be satisfied anywhere in the network.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Examples:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Organic food access</li>
                      <li>• Quality education for children</li>
                      <li>• Regenerative tools and equipment</li>
                      <li>• Skill development opportunities</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                    <ArrowUpDown className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle>Output Interface</CardTitle>
                  <CardDescription>Contributions and Positive Externalities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    The positive externalities generated by the holon—products, services, regenerative impacts—that address needs specified elsewhere in the network. Every holon contributes value that extends beyond its immediate members.
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">Examples:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Locally-grown organic produce</li>
                      <li>• Open-source farming equipment</li>
                      <li>• Educational programs and workshops</li>
                      <li>• Ecosystem restoration services</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-200 dark:border-orange-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-orange-600" />
                  Negative Externalities Become Needs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Each holon must account for its negative externalities—the resources consumed and impacts generated in producing its outputs. Critically, <strong>these negative externalities themselves become needs that other projects can address</strong>, creating a self-correcting system that naturally evolves toward circularity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fractal Scaling */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Fractal Scaling
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Holons nest within holons at every scale
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Individual Level
                  </CardTitle>
                  <CardDescription>Personal needs and contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Each individual is a holon—a whole person with their own needs and agency, and simultaneously a participant in multiple larger holons (projects, communities, bioregions).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Hexagon className="h-5 w-5 mr-2 text-primary" />
                    Project Level
                  </CardTitle>
                  <CardDescription>Specific initiatives and enterprises</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Projects like Agrosphere farming operations or tool-sharing libraries are holons—complete in themselves while contributing to community resilience and participating in the broader network.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Network className="h-5 w-5 mr-2 text-primary" />
                    Community Level
                  </CardTitle>
                  <CardDescription>Local nodes and physical places</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Places like Liminal Village or Brick Factory are holons—complete communities with internal coherence while participating in bioregional and global networks.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layers className="h-5 w-5 mr-2 text-primary" />
                    Bioregional Level
                  </CardTitle>
                  <CardDescription>Watershed and ecosystem-based coordination</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Bioregions organized around natural boundaries (watersheds, ecosystems) function as holons—coordinating resources and regeneration across larger territories while contributing to planetary health.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Network className="h-5 w-5 mr-2 text-primary" />
                    Planetary Level
                  </CardTitle>
                  <CardDescription>Global coordination and knowledge sharing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Regenerativa itself functions as a planetary holon—a complete network while simultaneously being part of the larger living Earth system.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Holon Coordination */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              How Holons Coordinate
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Through Theos Protocol and regenerative principles
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Transparent Need Expression</h3>
                      <p className="text-sm text-muted-foreground">
                        All holons make their needs visible through Theos Protocol, creating demand signals that other holons can respond to.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Resource Flow Tracking</h3>
                      <p className="text-sm text-muted-foreground">
                        Multi-resource accounting enables sophisticated exchanges—labor, materials, land access, expertise, and regenerative impact all flow between holons.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Regenerative Licensing</h3>
                      <p className="text-sm text-muted-foreground">
                        All outputs carry regenerative licenses ensuring improvements remain commons-accessible and ecological requirements are met.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Flow Token Distribution</h3>
                      <p className="text-sm text-muted-foreground">
                        Monthly Flow token distribution rewards contributions to collective needs, creating incentive alignment across the network.
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
              Become Part of the Holarchy
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you're starting a new project, organizing a community, or connecting existing initiatives—the holon structure provides a framework for coordination at every scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/join">
                  Join the Network
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link href="/network">
                  Explore Existing Holons
                  <Network className="ml-2 h-4 w-4" />
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

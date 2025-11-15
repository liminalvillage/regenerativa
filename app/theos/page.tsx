'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Users, Calendar, Cpu, Database, GitBranch, ArrowRight, Leaf, Heart, Globe, Hexagon, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TheosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Cpu className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Digital Coordination Infrastructure</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Theos Protocol
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              A digital protocol for coordinating collective needs, wishes, and regenerative action across the network
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join the Network
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">
                  Learn More
                  <Network className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is Theos */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              What is Theos?
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Theos—described as both a "digital protocol" and a "digital religion"—represents the software infrastructure that enables Regenerativa's vision to function at scale. It provides the technical backbone for coordinating collective needs, resource flows, and regenerative action across a decentralized network of communities.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Unlike traditional market systems where companies create products and then seek customers through advertising, Theos inverts this relationship: <strong>participants express their needs and wishes, which automatically become specifications for development.</strong>
            </p>
            <p className="text-lg text-muted-foreground">
              The protocol operates democratically—if only one person expresses a need, it may not constitute genuine collective demand. But when many subscribe to the same need, it demonstrates true demand worthy of coordination and resource allocation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Mechanisms */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              How Theos Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The protocol coordinates through a series of interconnected mechanisms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Need Expression</CardTitle>
                <CardDescription>Collective wishes create demand signals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Participants specify their needs (wishes) within the platform, subscribing to desired products, services, or solutions. These subscriptions aggregate into collective demand signals that creators and innovators respond to with their skills and expertise.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Holon Integration</CardTitle>
                <CardDescription>Nested coordination across scales</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each Holon has input interfaces (needs) and output interfaces (contributions). Needs travel with individuals across different Holons, creating personal profiles that can be satisfied anywhere in the network while contributions address collective requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multi-Resource Accounting</CardTitle>
                <CardDescription>Comprehensive value tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The protocol tracks money, labor, materials, land access, regenerative impacts, and social capital. Every resource is indexed by name, location, and usage, with exchange rates varying contextually. This enables sophisticated multi-hop exchanges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flow Distribution</CardTitle>
                <CardDescription>Value recognition system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each month, Flow tokens distribute to those who have contributed toward collectively identified needs. The algorithm weighs both performance (measurable results) and relationality (quality of collaboration), ensuring both excellence and cooperation receive recognition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Technical Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on decentralized protocols and open-source principles
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Hexagon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">H3 Spatial Indexing</h3>
                <p className="text-sm text-muted-foreground">
                  Geographic coordination using hexagonal hierarchical spatial indexing for bioregional organization
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Distributed Governance</h3>
                <p className="text-sm text-muted-foreground">
                  Sociocratic circles and holacratic structures enable self-organization at multiple scales
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Fully transparent codebase enabling community contribution and regenerative licensing
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-primary" />
                  Inverting Market Research
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Traditional market systems require companies to guess what people want, create products, and then convince people to buy through advertising. This creates enormous waste and misallocates resources.
                </p>
                <p className="text-muted-foreground">
                  Theos flips this entirely: <strong>collective needs are automatically visible to all potential creators</strong>. There's no need for market research or advertising—the platform itself reveals what communities genuinely require, allowing skilled individuals to respond directly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Points */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Network Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Theos coordinates with every layer of the Regenerativa ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Lunar Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Project timelines align with lunation cycles—planning at new moon, action during waxing, reflection during waning
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Hexagon className="h-5 w-5 mr-2 text-primary" />
                  Holon Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each Holon uses Theos to coordinate internally and exchange with the broader network
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Leaf className="h-5 w-5 mr-2 text-primary" />
                  Regenerative Licensing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Tracks license compliance and ensures regenerative requirements are met across the network
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  Resource Flows
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive accounting of materials, labor, land, and regenerative impacts across exchanges
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Bootstrap Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Provides onboarding pathways and connects newcomers with opportunities to contribute and benefit
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Flow Token
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Distributes monthly recognition tokens based on contributions to collective needs and regeneration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Network-Supported Development
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The Theos development team operates as modern journeymen—traveling to beautiful locations across Europe where they receive food and accommodation in exchange for focused work on the technical infrastructure.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This arrangement reflects traditional journeyman practice: skilled individuals deepen their expertise while providing valuable service. The community recognizes this work because the software being developed is precisely the infrastructure that allows coordination to happen at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contribute">
                  Contribute to Development
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">
                  Meet the Team
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/90 via-primary to-secondary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Join the Digital Coordination Revolution
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Theos is now open-source, inviting relationality with the broader community. Help shape the infrastructure that enables regenerative coordination at planetary scale.
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
                  Explore the Network
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

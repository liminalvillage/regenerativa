'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Moon, Users, ArrowRight, Leaf, Shield, Coins, Factory, BookOpen, Sparkles, Circle } from "lucide-react";
import Link from "next/link";

export default function RegenerativeBusinessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-amber-500/10 via-background to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Economic Transformation</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Regenerative Business Model
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              Three pathways to access: Purchase, Produce, or Attract—transforming consumers into producer-owners
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join the Movement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#pathways">
                  Explore Pathways
                  <Sparkles className="ml-2 h-4 w-4" />
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
              Beyond Consumption
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              In conventional business models, purchasing a product represents a one-time transaction that transfers ownership while maintaining the purchaser as a perpetual consumer dependent on the producer.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              The regenerative model inverts this: <strong>every purchase corresponds to acquiring an ownership token of future production.</strong> Buying a product is simultaneously an investment in the productive capacity to create more of that product.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Consumers become producer-owners, acquiring not just the immediate product but the knowledge, rights, and support to become production nodes themselves.
            </p>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Abundance Before Extraction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  The regenerative business model incorporates a critical safeguard: <strong>abundance must be established within the network before products can be exported to external markets.</strong> This prevents the extraction of value from network participants to serve external demand, ensuring that the needs of the community are met first.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Three Pathways */}
      <section id="pathways" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Three Pathways to Access
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              For every product or service developed within the network, participants have three options
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Solar License - Purchase */}
            <Card className="overflow-hidden border-2 border-amber-200 dark:border-amber-900 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 p-6">
                <div className="h-16 w-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                  <Sun className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-2xl mb-2">Solar License</CardTitle>
                <CardDescription className="text-base">Purchase pathway</CardDescription>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-lg">Pay Money, Receive Product</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Purchase the product through conventional transaction. This option allows those outside the network or those preferring traditional transactions to access network products while bringing financial resources into the system.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Immediate access to products</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Standard consumer transaction</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Supports network development</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Includes ownership token for future production</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/stake">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Lunar License - Produce */}
            <Card className="overflow-hidden border-2 border-blue-200 dark:border-blue-900 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/10 p-6">
                <div className="h-16 w-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <Moon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl mb-2">Lunar License</CardTitle>
                <CardDescription className="text-base">Production pathway</CardDescription>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-lg">Become a Production Center</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Receive all plans, instructions, and support to become a production center yourself. Commit to open-sourcing your production under the same regenerative license and serve the nearest subscribers.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Full access to production plans</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Technical support and training</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Automatic customer connections</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">No marketing or advertising needed</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contribute">
                    Start Producing
                    <Factory className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Attract - Collective Ownership */}
            <Card className="overflow-hidden border-2 border-emerald-200 dark:border-emerald-900 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/10 p-6">
                <div className="h-16 w-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-2xl mb-2">Attract</CardTitle>
                <CardDescription className="text-base">Collective ownership</CardDescription>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-lg">Pool Resources Together</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Gather a group within your local Holon to pool resources—labor, expertise, materials, locations, and finances—to collectively manifest the product or service without individual financial burden.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Shared ownership model</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Pool diverse resources (not just money)</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Distributed individual burden</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Circle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0 fill-current" />
                    <p className="text-sm">Collective benefits and governance</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/network">
                    Find Your Holon
                    <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Licensing Framework */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              The Regenerative License
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              Products and services operate under unique licensing that embeds regenerative principles directly into usage rights
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Open-Source Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    All derivative works must carry the same regenerative license, ensuring improvements and innovations remain available to the network.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This prevents enclosure of the commons while encouraging continuous innovation and knowledge sharing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-primary" />
                    Regenerative Obligations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Products with significant regenerative potential include specific regenerative requirements in their license.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For example, Agrosphere machine users must dedicate 50% of agricultural land to regeneration, creating wildlife corridors alongside food production.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    Community Ownership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Capital structured as loans repaid through usage fees means facilities come to own themselves over time.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This prevents external investors from expecting perpetual returns and keeps value circulating within communities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coins className="h-5 w-5 mr-2 text-primary" />
                    Local-First Economics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Production centers automatically connect with nearest subscribers based on geographic proximity.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    This eliminates traditional marketing costs while strengthening local economic resilience and reducing transportation impacts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Example: Kindergarten Model */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Case Study: The Kindergarten Model
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              How stacking functions at a single location creates maximum community benefit
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Phase 1: Initial Collective Investment</CardTitle>
                    <span className="text-2xl font-bold text-primary">€1,000</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Fifteen families within 30km radius pool €1,000 collectively to start a nature-based kindergarten. This capital is structured as a loan repaid through usage fees—over time, the land and facility come to own themselves rather than being owned by external investors.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Phase 2: Food Hub Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Because parents are already traveling to the kindergarten daily, partnership with nearby farmers enables fresh produce delivery to the same site. Parents pick up their weekly vegetable crate when dropping off or collecting children, eliminating separate trips to markets.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Phase 3: Tool-Sharing Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">
                    A tool-sharing library is established at the location. Families subscribe to shared access to specialized equipment—pressure washers, power tools, specialized machines—that individuals might need rarely but are expensive to own separately.
                  </p>
                  <p className="text-muted-foreground">
                    Collective insurance covers damage or loss. When tools wear out, the community collectively funds replacement through a production center within the network, supporting open-source manufacturing rather than profit-extracting corporations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-primary" />
                    The Compounding Effect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    An initial collective investment of €1,000 catalyzes a comprehensive mutual support system that reduces dependence on conventional retail, eliminates redundant individual ownership of rarely-used equipment, and creates daily opportunities for community connection.
                  </p>
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
              Choose Your Pathway
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you want to purchase products, become a producer, or organize collective ownership in your community, there's a pathway for you in the regenerative economy.
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
                  Find Your Community
                  <Users className="ml-2 h-4 w-4" />
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

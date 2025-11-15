'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, ArrowRight, Leaf, Shield, Sparkles, CheckCircle2, TrendingUp, Gift, MapPin } from "lucide-react";
import Link from "next/link";

export default function BootstrapPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Transition Pathway</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              Bootstrap Network
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              A safe haven for those transitioning to regenerative livelihoods and falling through the cracks of conventional systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#pathway">
                  Explore Pathway
                  <MapPin className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              The Transition Challenge
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              The most common objection to any alternative economic vision is practical: <em>"This sounds good, but how will I pay my taxes and bills while participating?"</em>
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              This is not a trivial concern. Most regenerative initiatives fail to address the bridge between current economic reality and desired future systems. People need to eat, house themselves, and meet obligations <strong>now</strong>—not after the revolution.
            </p>
            <p className="text-lg text-muted-foreground">
              Regenerativa addresses this through the Bootstrap Network—a safe haven for those falling through the cracks of the conventional system or consciously choosing to transition away from it.
            </p>
          </div>
        </div>
      </section>

      {/* What Bootstrap Provides */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              What Bootstrap Provides
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four essential supports for successful transition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Gateway Tools</CardTitle>
                <CardDescription>Simple onboarding processes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Help newcomers understand the system, identify their skills and needs, and connect with opportunities to contribute and benefit.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Skills inventory and assessment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Need expression framework</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Network navigation support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hybrid Resource Flows</CardTitle>
                <CardDescription>Gradual transition support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Recognition that during transition, both monetary and non-monetary resources will circulate. The system treats money as one resource among many.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-resource accounting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Gradual monetary dependence reduction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Diversified resource access pathways</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Trauma Healing Spaces</CardTitle>
                <CardDescription>Recovery and regeneration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Physical locations where people can recover from the psychological, physical, and spiritual trauma inflicted by conventional economic systems.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Burnout recovery support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community connection rebuilding</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Meaning and purpose restoration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Skill Development</CardTitle>
                <CardDescription>Learning and contribution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Opportunities to learn productive skills valued within the network while contributing at whatever capacity one currently possesses.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Regenerative agriculture training</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Open-source production skills</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Community coordination practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Optionality Ranking */}
      <section id="pathway" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              The Optionality System
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Bootstrap succeeds by creating genuine optionality—the ability to meet diverse needs through diverse pathways
            </p>

            <Card className="mb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>What is Optionality?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Every resource and contribution is ranked by its optionality: How many other resources can be accessed through it? How many people recognize it as valuable?
                </p>
                <p className="text-muted-foreground">
                  As participants contribute, they accumulate various forms of optionality that enable them to meet their needs with decreasing reliance on conventional money.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Money (Conventional)</CardTitle>
                      <CardDescription>Current system maximum</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">Maximum optionality</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Can be exchanged for almost anything in conventional markets, but requires participation in extractive systems to acquire.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Flow Tokens</CardTitle>
                      <CardDescription>Network-wide recognition</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">High optionality</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Recognized across all Holons in the network, earned through contribution to collective needs and regenerative actions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Specialized Skills</CardTitle>
                      <CardDescription>Domain-specific value</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">Medium optionality</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    High value within relevant Holons (e.g., carpentry in building projects, permaculture knowledge in food systems).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Regenerative Actions</CardTitle>
                      <CardDescription>Ecological contribution</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">Growing optionality</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Tree planting, ocean plastic removal, soil restoration gain optionality as more Holons recognize ecological health as fundamental infrastructure.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Social Capital</CardTitle>
                      <CardDescription>Trust and relationship</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">Context-dependent</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Reputation and relationships within communities enable access to resources through trust rather than formal exchange.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Parallel System Strategy */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              Parallel System Strategy
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Regenerativa grows alongside existing systems rather than requiring their overthrow
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Solve Real Problems</h3>
                      <p className="text-sm text-muted-foreground">
                        Begin with projects that address genuine unmet needs—local organic food, soil regeneration, quality childhood education, tool sharing—creating immediate tangible value.
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
                      <h3 className="font-semibold mb-2">Open Source Everything</h3>
                      <p className="text-sm text-muted-foreground">
                        Make all solutions freely available under regenerative licenses so that success spreads naturally rather than being enclosed for profit extraction.
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
                      <h3 className="font-semibold mb-2">Build Resilient Networks</h3>
                      <p className="text-sm text-muted-foreground">
                        Create strong relationality between Holons so that disruption in one area can be supported by abundance elsewhere.
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
                      <h3 className="font-semibold mb-2">Welcome Existing Initiatives</h3>
                      <p className="text-sm text-muted-foreground">
                        Invite any project working toward regenerative or social benefit to join as an early project, bringing their methodology and learning into the network.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">5</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Demonstrate Superior Outcomes</h3>
                      <p className="text-sm text-muted-foreground">
                        Let the results speak—healthier soil, happier children, stronger communities, reduced dependence on extractive systems—so that participation becomes obviously preferable.
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
              Begin Your Transition
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Whether you're experiencing burnout from conventional systems, seeking meaningful work aligned with regeneration, or ready to build alternatives in your community—the Bootstrap Network provides a pathway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/join">
                  Join Bootstrap Network
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link href="/visit">
                  Visit a Healing Space
                  <Heart className="ml-2 h-4 w-4" />
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

"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, Leaf, Coins, Shield, ArrowRight, Info, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function StakePage() {
  const [selectedPool, setSelectedPool] = useState("");
  const [amount, setAmount] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const productPools = [
    {
      id: "clay_houses_2026",
      name: "Clay House Units 2026",
      description: "Funding for sustainable clay house construction at Liminal Village",
      target: 50000,
      raised: 32000,
      expectedReturn: "Local scrip + housing credits",
      risk: "Medium",
      timeline: "12-18 months"
    },
    {
      id: "food_coop_2025",
      name: "Food Cooperative 2025",
      description: "Establishing local food distribution network",
      target: 25000,
      raised: 18000,
      expectedReturn: "Food credits + profit sharing",
      risk: "Low",
      timeline: "6-12 months"
    },
    {
      id: "permaculture_center",
      name: "Permaculture Education Center",
      description: "Building educational facilities for regenerative agriculture",
      target: 75000,
      raised: 45000,
      expectedReturn: "Education credits + community benefits",
      risk: "Medium",
      timeline: "18-24 months"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/transition.jpg"
            alt="Regenerative finance and investment"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Stake in <span className="text-primary">Regeneration</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              Invest in regenerative projects and receive receipt tokens for future benefits and local scrip.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              How Receipt Token Staking Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent way to support regenerative projects while receiving tangible benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Coins className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>1. Choose a Project</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Select from our vetted regenerative projects, each with clear goals, timelines, and expected returns.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>2. Stake Your Funds</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Contribute funds to the project pool. Your stake is used to finance regenerative infrastructure and initiatives.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>3. Receive Tokens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get non-transferable receipt tokens that entitle you to future benefits, services, or local scrip.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="flex items-center text-destructive">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Important Risk Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Receipt token staking involves risks. Please read this disclosure carefully before participating.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>No Guaranteed Returns:</strong> Projects may not achieve expected outcomes or returns.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Non-Transferable:</strong> Receipt tokens cannot be sold or transferred to others.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Project Delays:</strong> Construction and implementation may take longer than expected.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="h-2 w-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Local Scrip Risk:</strong> Local currencies may have limited acceptance or value.</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                By participating, you acknowledge that you understand these risks and are investing only what you can afford to lose.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Pools */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Available Project Pools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully selected regenerative projects, each with transparent goals and expected benefits.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {productPools.map((pool) => (
              <Card key={pool.id} className={`cursor-pointer transition-all ${
                selectedPool === pool.id ? 'ring-2 ring-primary' : ''
              }`} onClick={() => setSelectedPool(pool.id)}>
                <CardHeader>
                  <CardTitle>{pool.name}</CardTitle>
                  <CardDescription>{pool.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Target:</span>
                      <span className="font-semibold">€{pool.target.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Raised:</span>
                      <span className="font-semibold text-primary">€{pool.raised.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${(pool.raised / pool.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Return:</span>
                      <p className="font-medium">{pool.expectedReturn}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Risk:</span>
                      <p className="font-medium">{pool.risk}</p>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Timeline:</span>
                    <p className="font-medium">{pool.timeline}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Staking Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 lg:p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-display">Stake Your Funds</CardTitle>
                <CardDescription>
                  Complete the form below to stake funds in your selected project pool.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="pool">Project Pool</Label>
                  <Select value={selectedPool} onValueChange={setSelectedPool}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a project pool" />
                    </SelectTrigger>
                    <SelectContent>
                      {productPools.map((pool) => (
                        <SelectItem key={pool.id} value={pool.id}>
                          {pool.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Stake Amount (EUR)</Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    min="5"
                    step="5"
                  />
                  <p className="text-sm text-muted-foreground">
                    Minimum stake: €5.00
                  </p>
                </div>

                {selectedPool && amount && (
                  <Card className="bg-primary/5 border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg">Stake Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Project:</span>
                        <span className="font-semibold">
                          {productPools.find(p => p.id === selectedPool)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Amount:</span>
                        <span className="font-semibold">€{parseFloat(amount || "0").toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Expected Return:</span>
                        <span className="font-semibold">
                          {productPools.find(p => p.id === selectedPool)?.expectedReturn}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline:</span>
                        <span className="font-semibold">
                          {productPools.find(p => p.id === selectedPool)?.timeline}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed">
                      I have read and understand the risk disclosure and agree to the terms of staking. 
                      I acknowledge that receipt tokens are non-transferable and returns are not guaranteed.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm leading-relaxed">
                      I would like to stay informed about project progress and community updates.
                    </Label>
                  </div>
                </div>

                <Button 
                  className="w-full" 
                  size="lg"
                  disabled={!selectedPool || !amount || !agreedToTerms}
                >
                  Proceed to Payment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Common questions about receipt token staking and regenerative finance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What are receipt tokens?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Receipt tokens are non-transferable digital certificates that prove your stake in a regenerative project. 
                  They entitle you to future benefits, services, or local scrip from the completed project.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I receive my returns?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Returns are typically provided as local scrip, service credits, or direct benefits from the completed project. 
                  You&apos;ll be notified when your tokens can be redeemed.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I withdraw my stake early?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Stakes are locked until project completion. Early withdrawal is not available to ensure project funding stability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens if a project fails?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  If a project cannot be completed, remaining funds are returned proportionally to stakeholders, 
                  minus any costs already incurred.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are my funds insured?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Funds are held in secure escrow accounts, but they are not insured. 
                  We recommend only staking what you can afford to lose.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I track my investment?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  You&apos;ll receive regular updates on project progress and can view your receipt tokens 
                  in your account dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Ready to Support Regeneration?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of people already supporting regenerative projects and building 
              sustainable communities through receipt token staking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://wequest.typeform.com/to/q0BDRm7z" target="_blank" rel="noopener noreferrer">
                  Get Connected First
                  <Users className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Ask Questions
                  <Info className="ml-2 h-4 w-4" />
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


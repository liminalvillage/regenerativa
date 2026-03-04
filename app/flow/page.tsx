'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ArrowRight, TrendingUp, Users, Leaf, Heart, Database, Scale, Coins, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";
import { flowTranslations } from "@/translations/pages/flow";

export default function FlowPage() {
  const { currentLanguage } = useTranslation();
  const pt = (key: string) => {
    const t = flowTranslations[currentLanguage] || flowTranslations['en'];
    return t[key] || flowTranslations['en'][key] || key;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-violet-500/10 via-background to-purple-500/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner1.jpg"
            alt="Growing value through regenerative systems"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">{pt("heroBadge")}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6">
              {pt("heroTitle")}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              {pt("heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  {pt("startContributing")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">
                  {pt("learnMore")}
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
              {pt("beyondTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {pt("beyondP1")}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              {pt("beyondP2")}
            </p>
            <p className="text-lg text-muted-foreground">
              <strong>{pt("beyondP3")}</strong>
            </p>
          </div>

          {/* Visual — value exchange */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/stock/farmers-market.jpg"
                  alt="Local food market — real value exchange"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/stock/soil-hands.jpg"
                  alt="Nurturing growth from the ground up"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {pt("howWorksTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pt("howWorksSubtitle")}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{pt("perfTitle")}</CardTitle>
                  <CardDescription>{pt("perfDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("perfBody")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{pt("relTitle")}</CardTitle>
                  <CardDescription>{pt("relDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("relBody")}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 mb-12">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  {pt("commValueTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{pt("commValueBody")}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4">
                    <p className="font-semibold mb-2">{pt("regenHolon")}</p>
                    <p className="text-sm text-muted-foreground">{pt("regenHolonBody")}</p>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <p className="font-semibold mb-2">{pt("softHolon")}</p>
                    <p className="text-sm text-muted-foreground">{pt("softHolonBody")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{pt("monthlyRelease")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("monthlyReleaseBody")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{pt("algoDistrib")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("algoDistribBody")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{pt("univRecog")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("univRecogBody")}</p>
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
              {pt("multiResTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {pt("multiResSubtitle")}
            </p>

            <Card className="mb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  {pt("moneyTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{pt("moneyBody")}</p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Coins className="h-5 w-5 mr-2 text-primary" />
                    {pt("financialTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("financialBody")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    {pt("laborTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("laborBody")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Database className="h-5 w-5 mr-2 text-primary" />
                    {pt("materialsTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("materialsBody")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Globe className="h-5 w-5 mr-2 text-primary" />
                    {pt("landTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("landBody")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Leaf className="h-5 w-5 mr-2 text-primary" />
                    {pt("regenImpTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("regenImpBody")}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-base">
                    <Heart className="h-5 w-5 mr-2 text-primary" />
                    {pt("socialTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("socialBody")}</p>
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
              {pt("multiHopTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {pt("multiHopSubtitle")}
            </p>

            <Card className="mb-6 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>{pt("beyondBarterTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{pt("beyondBarterP1")}</p>
                <p className="text-muted-foreground"><strong>{pt("beyondBarterP2")}</strong></p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-5 w-5 mr-2 text-primary" />
                  {pt("contextTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{pt("contextP1")}</p>
                <p className="text-muted-foreground">{pt("contextP2")}</p>
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
              {pt("earnTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {pt("earnSubtitle")}
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Leaf className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{pt("earn1Title")}</h3>
                      <p className="text-sm text-muted-foreground">{pt("earn1Body")}</p>
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
                      <h3 className="font-semibold mb-2">{pt("earn2Title")}</h3>
                      <p className="text-sm text-muted-foreground">{pt("earn2Body")}</p>
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
                      <h3 className="font-semibold mb-2">{pt("earn3Title")}</h3>
                      <p className="text-sm text-muted-foreground">{pt("earn3Body")}</p>
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
                      <h3 className="font-semibold mb-2">{pt("earn4Title")}</h3>
                      <p className="text-sm text-muted-foreground">{pt("earn4Body")}</p>
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
              {pt("ctaTitle")}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {pt("ctaBody")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/join">
                  {pt("joinNetwork")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link href="/contribute">
                  {pt("startContributingBtn")}
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

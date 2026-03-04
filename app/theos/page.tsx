'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Users, Calendar, Cpu, Database, GitBranch, ArrowRight, Leaf, Heart, Globe, Hexagon, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";

import { theosTranslations } from "@/translations/pages/theos";

export default function TheosPage() {
  const { currentLanguage } = useTranslation();
  const pt = (key: string) => {
    const t = theosTranslations[currentLanguage] || theosTranslations['en'];
    return t[key] || theosTranslations['en'][key] || key;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner3.jpg"
            alt="Global regenerative network"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Cpu className="h-4 w-4 text-primary" />
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
                  {pt("joinNetwork")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#how-it-works">
                  {pt("learnMore")}
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
              {pt("whatIsTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {pt("whatIsP1")}
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>{pt("whatIsP2")}</strong>
            </p>
            <p className="text-lg text-muted-foreground">
              {pt("whatIsP3")}
            </p>
          </div>

          {/* Visual break */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/stock/collaborative-team.jpg"
                  alt="Team collaborating on regenerative systems"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/stock/eco-village.jpg"
                  alt="Solar-powered community infrastructure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Mechanisms */}
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{pt("needExprTitle")}</CardTitle>
                <CardDescription>{pt("needExprDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("needExprBody")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{pt("holonIntTitle")}</CardTitle>
                <CardDescription>{pt("holonIntDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("holonIntBody")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{pt("multiResTitle")}</CardTitle>
                <CardDescription>{pt("multiResDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("multiResBody")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{pt("flowDistTitle")}</CardTitle>
                <CardDescription>{pt("flowDistDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("flowDistBody")}
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
              {pt("techArchTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pt("techArchSubtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Hexagon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{pt("h3Title")}</h3>
                <p className="text-sm text-muted-foreground">
                  {pt("h3Desc")}
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GitBranch className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{pt("distGovTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {pt("distGovDesc")}
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{pt("openSourceTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {pt("openSourceDesc")}
                </p>
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-primary" />
                  {pt("invertTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {pt("invertP1")}
                </p>
                <p className="text-muted-foreground">
                  <strong>{pt("invertP2")}</strong>
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
              {pt("netIntTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pt("netIntSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  {pt("lunarCalTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("lunarCalDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Hexagon className="h-5 w-5 mr-2 text-primary" />
                  {pt("holonStructTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("holonStructDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Leaf className="h-5 w-5 mr-2 text-primary" />
                  {pt("regenLicTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("regenLicDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Database className="h-5 w-5 mr-2 text-primary" />
                  {pt("resFlowTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("resFlowDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  {pt("bootNetTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("bootNetDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  {pt("flowTokenTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {pt("flowTokenDesc")}
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
              {pt("devTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {pt("devP1")}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {pt("devP2")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contribute">
                  {pt("contributeDev")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">
                  {pt("meetTeam")}
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
                <Link href="/network">
                  {pt("exploreNetwork")}
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

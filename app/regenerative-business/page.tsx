'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Moon, Users, ArrowRight, Leaf, Shield, Coins, Factory, BookOpen, Sparkles, Circle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";
import { regenbusinessTranslations } from "@/translations/pages/regenbusiness";

export default function RegenerativeBusinessPage() {
  const { currentLanguage } = useTranslation();
  const pt = (key: string) => {
    const t = regenbusinessTranslations[currentLanguage] || regenbusinessTranslations['en'];
    return t[key] || regenbusinessTranslations['en'][key] || key;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-amber-500/10 via-background to-blue-500/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/liminalvillage/1.jpeg"
            alt="Regenerative economy in action"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Leaf className="h-4 w-4 text-primary" />
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
                  {pt("joinMovement")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#pathways">
                  {pt("explorePaths")}
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
              {pt("beyondTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">{pt("beyondP1")}</p>
            <p className="text-lg text-muted-foreground mb-6"><strong>{pt("beyondP2")}</strong></p>
            <p className="text-lg text-muted-foreground mb-6">{pt("beyondP3")}</p>

            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 mt-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  {pt("abundanceTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground"><strong>{pt("abundanceBody")}</strong></p>
              </CardContent>
            </Card>
          </div>

          {/* Visual — retreat experience */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/brickfactory/5.jpeg"
                  alt="Regenerative retreat experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/liminalvillage/7.JPG"
                  alt="Sustainable living at Liminal Village"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pathways */}
      <section id="pathways" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {pt("pathwaysTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pt("pathwaysSubtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Solar License */}
            <Card className="overflow-hidden border-2 border-amber-200 dark:border-amber-900 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/10 p-6">
                <div className="h-16 w-16 bg-amber-500/20 rounded-full flex items-center justify-center mb-4">
                  <Sun className="h-8 w-8 text-amber-600 dark:text-amber-400" />
                </div>
                <CardTitle className="text-2xl mb-2">{pt("solarTitle")}</CardTitle>
                <CardDescription className="text-base">{pt("solarDesc")}</CardDescription>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-lg">{pt("solarSubtitle")}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pt("solarBody")}</p>
                <div className="space-y-2">
                  {["solar1","solar2","solar3","solar4"].map(k => (
                    <div key={k} className="flex items-start space-x-2">
                      <Circle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0 fill-current" />
                      <p className="text-sm">{pt(k)}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700" asChild>
                  <Link href="/stake">
                    {pt("solarBtn")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Lunar License */}
            <Card className="overflow-hidden border-2 border-blue-200 dark:border-blue-900 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/10 p-6">
                <div className="h-16 w-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <Moon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-2xl mb-2">{pt("lunarTitle")}</CardTitle>
                <CardDescription className="text-base">{pt("lunarDesc")}</CardDescription>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-lg">{pt("lunarSubtitle")}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pt("lunarBody")}</p>
                <div className="space-y-2">
                  {["lunar1","lunar2","lunar3","lunar4"].map(k => (
                    <div key={k} className="flex items-start space-x-2">
                      <Circle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0 fill-current" />
                      <p className="text-sm">{pt(k)}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/contribute">
                    {pt("lunarBtn")}
                    <Factory className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Attract */}
            <Card className="overflow-hidden border-2 border-emerald-200 dark:border-emerald-900 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/10 p-6">
                <div className="h-16 w-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <CardTitle className="text-2xl mb-2">{pt("attractTitle")}</CardTitle>
                <CardDescription className="text-base">{pt("attractDesc")}</CardDescription>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-lg">{pt("attractSubtitle")}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pt("attractBody")}</p>
                <div className="space-y-2">
                  {["attract1","attract2","attract3","attract4"].map(k => (
                    <div key={k} className="flex items-start space-x-2">
                      <Circle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0 fill-current" />
                      <p className="text-sm">{pt(k)}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/network">
                    {pt("attractBtn")}
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
              {pt("licenseTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              {pt("licenseSubtitle")}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    {pt("openSourceTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{pt("openSourceBody1")}</p>
                  <p className="text-sm text-muted-foreground">{pt("openSourceBody2")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2 text-primary" />
                    {pt("regenObTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{pt("regenObBody1")}</p>
                  <p className="text-sm text-muted-foreground">{pt("regenObBody2")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    {pt("commOwnerTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{pt("commOwnerBody1")}</p>
                  <p className="text-sm text-muted-foreground">{pt("commOwnerBody2")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coins className="h-5 w-5 mr-2 text-primary" />
                    {pt("localFirstTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{pt("localFirstBody1")}</p>
                  <p className="text-sm text-muted-foreground">{pt("localFirstBody2")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Kindergarten Model */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              {pt("caseTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {pt("caseSubtitle")}
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{pt("phase1Title")}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{pt("phase1Amount")}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pt("phase1Body")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{pt("phase2Title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pt("phase2Body")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{pt("phase3Title")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{pt("phase3Body1")}</p>
                  <p className="text-muted-foreground">{pt("phase3Body2")}</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-primary" />
                    {pt("compoundTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pt("compoundBody")}</p>
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
                <Link href="/network">
                  {pt("findCommunity")}
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

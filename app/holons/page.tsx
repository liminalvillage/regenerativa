'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hexagon, ArrowRight, Network, Users, Leaf, ArrowDownUp, ArrowUpDown, Layers } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslationSimple";
import { holonsTranslations } from "@/translations/pages/holons";

export default function HolonsPage() {
  const { currentLanguage } = useTranslation();
  const pt = (key: string) => {
    const t = holonsTranslations[currentLanguage] || holonsTranslations['en'];
    return t[key] || holonsTranslations['en'][key] || key;
  };

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
                <Link href="/network">
                  {pt("exploreNetworks")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#structure">
                  {pt("learnMore")}
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
              {pt("whatIsTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {pt("whatIsP1")}
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Hexagon className="h-5 w-5 mr-2 text-primary" />
                    {pt("asWholeTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {pt("asWholeBody")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Network className="h-5 w-5 mr-2 text-primary" />
                    {pt("asPartTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {pt("asPartBody")}
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-muted-foreground">
              {pt("whatIsP2")}
            </p>
          </div>
        </div>
      </section>

      {/* Holon Interfaces */}
      <section id="structure" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              {pt("interfacesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {pt("interfacesSubtitle")}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                    <ArrowDownUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{pt("inputTitle")}</CardTitle>
                  <CardDescription>{pt("inputDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pt("inputBody")}
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">{pt("inputExamples")}</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• {pt("inputEx1")}</li>
                      <li>• {pt("inputEx2")}</li>
                      <li>• {pt("inputEx3")}</li>
                      <li>• {pt("inputEx4")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                    <ArrowUpDown className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle>{pt("outputTitle")}</CardTitle>
                  <CardDescription>{pt("outputDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pt("outputBody")}
                  </p>
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-lg p-4">
                    <p className="text-sm font-medium mb-2">{pt("outputExamples")}</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• {pt("outputEx1")}</li>
                      <li>• {pt("outputEx2")}</li>
                      <li>• {pt("outputEx3")}</li>
                      <li>• {pt("outputEx4")}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-2 border-orange-200 dark:border-orange-900">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-orange-600" />
                  {pt("negExtTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {pt("negExtBody")}
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
              {pt("fractalTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {pt("fractalSubtitle")}
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    {pt("indivTitle")}
                  </CardTitle>
                  <CardDescription>{pt("indivDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {pt("indivBody")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Hexagon className="h-5 w-5 mr-2 text-primary" />
                    {pt("projectTitle")}
                  </CardTitle>
                  <CardDescription>{pt("projectDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {pt("projectBody")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Network className="h-5 w-5 mr-2 text-primary" />
                    {pt("communityTitle")}
                  </CardTitle>
                  <CardDescription>{pt("communityDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {pt("communityBody")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Layers className="h-5 w-5 mr-2 text-primary" />
                    {pt("bioregionalTitle")}
                  </CardTitle>
                  <CardDescription>{pt("bioregionalDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {pt("bioregionalBody")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Network className="h-5 w-5 mr-2 text-primary" />
                    {pt("planetaryTitle")}
                  </CardTitle>
                  <CardDescription>{pt("planetaryDesc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {pt("planetaryBody")}
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
              {pt("coordTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {pt("coordSubtitle")}
            </p>

            <div className="space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{pt("coord1Title")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {pt("coord1Body")}
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
                      <h3 className="font-semibold mb-2">{pt("coord2Title")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {pt("coord2Body")}
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
                      <h3 className="font-semibold mb-2">{pt("coord3Title")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {pt("coord3Body")}
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
                      <h3 className="font-semibold mb-2">{pt("coord4Title")}</h3>
                      <p className="text-sm text-muted-foreground">
                        {pt("coord4Body")}
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
                  {pt("exploreExisting")}
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

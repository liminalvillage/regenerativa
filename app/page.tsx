'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Calendar, ArrowRight, Hexagon, Leaf, Heart, Globe, Factory, Home, TreePine, Zap, Sprout, Sun, Moon, Network } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 lg:py-40 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner1.jpg"
            alt="Regenerative landscape"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-7xl font-display font-bold text-balance mb-6 leading-tight">
              {t("homepage.hero.title").split(',').map((part, i) => i === 0 ? <span key={i}>{part},<br /></span> : <span key={i}>{part}</span>)}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto">
              {t("homepage.hero.subtitle")}
            </p>
            <Button size="lg" className="text-base px-8 py-6" asChild>
              <Link href="/join">
                {t("homepage.hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem / Vision */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              {t("homepage.vision.heading").split('.').map((part, i, arr) => i < arr.length - 1 ? <span key={i}>{part}.<br /></span> : <span key={i}>{part}</span>)}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t("homepage.vision.description")}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t("homepage.vision.ecological")}</h3>
                <p className="text-sm text-muted-foreground">{t("homepage.vision.ecologicalDesc")}</p>
              </div>
              <div className="text-center">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t("homepage.vision.social")}</h3>
                <p className="text-sm text-muted-foreground">{t("homepage.vision.socialDesc")}</p>
              </div>
              <div className="text-center">
                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t("homepage.vision.systemic")}</h3>
                <p className="text-sm text-muted-foreground">{t("homepage.vision.systemicDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <div className="relative h-48 md:h-64">
        <Image
          src="/stock/green-field.jpg"
          alt="Golden fields at sunset"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* The Framework — Centerpiece */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("homepage.framework.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("homepage.framework.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-primary/10">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{t("homepage.framework.theosTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("homepage.framework.theosDesc")}
                </p>
                <Button variant="link" size="sm" className="p-0" asChild>
                  <Link href="/theos">
                    {t("homepage.framework.theosCta")} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-primary/10">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Hexagon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{t("homepage.framework.holonsTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("homepage.framework.holonsDesc")}
                </p>
                <Button variant="link" size="sm" className="p-0" asChild>
                  <Link href="/holons">
                    {t("homepage.framework.holonsCta")} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-primary/10">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Moon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">{t("homepage.framework.flowTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("homepage.framework.flowDesc")}
                </p>
                <Button variant="link" size="sm" className="p-0" asChild>
                  <Link href="/flow">
                    {t("homepage.framework.flowCta")} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all hover:-translate-y-1 border-primary/10">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Sun className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-lg">{t("homepage.framework.regenBusinessTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("homepage.framework.regenBusinessDesc")}
                </p>
                <Button variant="link" size="sm" className="p-0" asChild>
                  <Link href="/regenerative-business">
                    {t("homepage.framework.regenBusinessCta")} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Project: Agrosphere */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/permaculture.jpg"
                  alt="Agrosphere regenerative farming"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 rounded-full px-4 py-2 mb-4">
                <Sprout className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-600">{t("homepage.agrosphere.badge")}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("homepage.agrosphere.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("homepage.agrosphere.description")}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t("homepage.agrosphere.production")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span className="text-sm">{t("homepage.agrosphere.landReq")}</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/agrosphere">
                  {t("homepage.agrosphere.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sites */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("sites.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("sites.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-48 relative">
                <Image
                  src="/liminalvillage/1.jpeg"
                  alt="Liminal Village"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="h-5 w-5 mr-2 text-primary" />
                  {t("sites.liminalVillage.title")}
                </CardTitle>
                <CardDescription>{t("sites.liminalVillage.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("sites.liminalVillage.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/sites/liminalvillage">
                    {t("homepage.learnMore")} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-48 relative">
                <Image
                  src="/brickfactory/13.jpeg"
                  alt="ReFactory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Factory className="h-5 w-5 mr-2 text-primary" />
                  {t("sites.brickFactory.title")}
                </CardTitle>
                <CardDescription>{t("sites.brickFactory.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("sites.brickFactory.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/sites/brickfactory">
                    {t("homepage.learnMore")} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="h-48 relative">
                <Image
                  src="/casaselva/1.jpeg"
                  alt="Casa Selva"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TreePine className="h-5 w-5 mr-2 text-primary" />
                  {t("sites.casaSelva.title")}
                </CardTitle>
                <CardDescription>{t("sites.casaSelva.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("sites.casaSelva.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/sites/casaselva">
                    {t("homepage.learnMore")} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bootstrap Network */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 rounded-full px-4 py-2 mb-6">
                <Network className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">{t("homepage.bootstrap.badge")}</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("homepage.bootstrap.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("homepage.bootstrap.description")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/bootstrap">
                    {t("homepage.bootstrap.startNode")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/network">
                    {t("homepage.bootstrap.viewMap")}
                    <MapPin className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="/brickfactory/1.jpeg"
                alt="Sustainable architecture — blending tradition with innovation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Events — Simplified */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                {t("homepage.events.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("homepage.events.subtitle")}
              </p>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="/liminalvillage/4.jpeg"
                  alt="Community planning session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  {t("events.nextLunation.title")}
                </CardTitle>
                <CardDescription>{t("events.nextLunation.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("events.nextLunation.description")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-base">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  {t("events.autumnEquinox.title")}
                </CardTitle>
                <CardDescription>{t("events.autumnEquinox.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("events.autumnEquinox.description")}
                </p>
              </CardContent>
            </Card>
            </div>
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/events">
                {t("homepage.events.viewAll")}
                <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/stock/aerial-green.jpg"
            alt="Mountain landscape"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-display font-bold mb-6">
              {t("homepage.cta.heading")}
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto">
              {t("homepage.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base px-8" asChild>
                <Link href="/join">
                  {t("homepage.cta.joinNetwork")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/visit">
                  {t("homepage.cta.visitSite")}
                  <MapPin className="ml-2 h-5 w-5" />
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

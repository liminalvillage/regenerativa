'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Calendar, ArrowRight, Hexagon, Leaf, Heart, Globe, Factory, Home, TreePine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner1.jpg"
            alt="Regenerative landscape"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/network">
                  {t("hero.explore")}
                  <MapPin className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section id="video" className="py-16 lg:py-24 bg-gradient-to-br from-primary/90 via-primary to-secondary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("video.title")}
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              {t("video.subtitle")}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/XdhPXocPf9g"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Regenerativa Introduction Video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Explainer */}
      <section id="about" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("about.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("about.description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Hexagon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("about.fractalNetworks")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.fractalNetworksDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("about.regenerativePractices")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.regenerativePracticesDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("about.integralRegeneration")}</h3>
                    <p className="text-sm text-muted-foreground">{t("about.integralRegenerationDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/permaculture.jpg"
                  alt="Permaculture garden showing regenerative agriculture practices"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sites */}
      <section id="sites" className="py-16 lg:py-24">
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
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/liminalvillage/1.jpeg"
                  alt="Liminal Village - Community hub"
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
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/brickfactory/13.jpeg"
                  alt="Fabbrica del Terzo Settore - Regenerative Factory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/casaselva/1.jpeg"
                  alt="Casa Selva - Forest sanctuary"
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
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Network Map Preview */}
      <section id="network" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("network.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("network.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {t("network.activeNodes")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">{t("network.activeNodesDesc")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {t("network.communityMembers")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">2,847</p>
                <p className="text-sm text-muted-foreground">{t("network.communityMembersDesc")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  {t("network.fractalCommunities")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">156</p>
                <p className="text-sm text-muted-foreground">{t("network.fractalCommunitiesDesc")}</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/network">
                {t("network.explore")}
                <MapPin className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to Engage */}
      <section id="engage" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("engage.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("engage.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("engage.join.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("engage.join.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wequest.typeform.com/to/q0BDRm7z" target="_blank" rel="noopener noreferrer">
                    {t("engage.join.cta")}
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("engage.contribute.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("engage.contribute.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contribute">{t("engage.contribute.cta")}</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("engage.stake.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("engage.stake.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/stake">{t("engage.stake.cta")}</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("engage.visit.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("engage.visit.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/visit">{t("engage.visit.cta")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("events.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("events.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {t("events.nextLunation.title")}
                </CardTitle>
                <CardDescription>{t("events.nextLunation.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">{t("events.nextLunation.date")}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("events.nextLunation.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">{t("events.nextLunation.cta")}</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {t("events.autumnEquinox.title")}
                </CardTitle>
                <CardDescription>{t("events.autumnEquinox.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">{t("events.autumnEquinox.date")}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("events.autumnEquinox.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">{t("events.autumnEquinox.cta")}</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {t("events.permacultureWorkshop.title")}
                </CardTitle>
                <CardDescription>{t("events.permacultureWorkshop.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">{t("events.permacultureWorkshop.date")}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("events.permacultureWorkshop.description")}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">{t("events.permacultureWorkshop.cta")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/events">
                {t("events.viewAll")}
                <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section id="stories" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("stories.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("stories.subtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/earthship.jpg"
                  alt="Clay house construction project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{t("stories.clayHouse.title")}</CardTitle>
                <CardDescription>{t("stories.clayHouse.location")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("stories.clayHouse.description")}
                </p>
                <Button variant="link" size="sm" className="p-0">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/banner3.jpg"
                  alt="Community gathering in nature"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{t("stories.newCommunity.title")}</CardTitle>
                <CardDescription>{t("stories.newCommunity.location")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("stories.newCommunity.description")}
                </p>
                <Button variant="link" size="sm" className="p-0">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/transition.jpg"
                  alt="Sustainable transition and renewable energy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{t("stories.regenFinance.title")}</CardTitle>
                <CardDescription>{t("stories.regenFinance.location")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("stories.regenFinance.description")}
                </p>
                <Button variant="link" size="sm" className="p-0">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners & Network - Hidden for now */}
      {/* 
      <section id="partners" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Our Regenerative Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connected to a global ecosystem of organizations pioneering regenerative practices, 
              Resource-Based Economy principles, and transformative community models.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-display font-bold text-center mb-8">Core Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 relative">
                  <Image
                    src="/venusproject.png"
                    alt="Venus Project"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Venus Project</h4>
                <p className="text-sm text-muted-foreground">
                  Pioneering Resource-Based Economy and holistic design for sustainable civilization.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 relative">
                  <Image
                    src="/zeitgeist.png"
                    alt="Zeitgeist Movement"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Zeitgeist Movement</h4>
                <p className="text-sm text-muted-foreground">
                  Global movement advocating for scientific method and Resource-Based Economy principles.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 relative">
                  <Image
                    src="/envienta.png"
                    alt="Envienta"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Envienta</h4>
                <p className="text-sm text-muted-foreground">
                  Open-source platform for regenerative technology and sustainable innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-display font-bold text-center mb-8">Regenerative Allies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Permaculture Institute</p>
                <p className="text-xs text-muted-foreground mt-1">Regenerative Agriculture</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Transition Network</p>
                <p className="text-xs text-muted-foreground mt-1">Community Resilience</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Biomimicry Institute</p>
                <p className="text-xs text-muted-foreground mt-1">Nature-Inspired Design</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Game B Community</p>
                <p className="text-xs text-muted-foreground mt-1">Cultural Evolution</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Regen Network</p>
                <p className="text-xs text-muted-foreground mt-1">Regenerative Finance</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Open Source Ecology</p>
                <p className="text-xs text-muted-foreground mt-1">Open Technology</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-center mb-8">Technology Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 relative">
                  <Image
                    src="/ethereum.png"
                    alt="Ethereum"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Ethereum Foundation</h4>
                <p className="text-sm text-muted-foreground">
                  Decentralized infrastructure supporting regenerative economy and community governance.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Holochain</h4>
                <p className="text-sm text-muted-foreground">
                  Peer-to-peer applications for regenerative community coordination and resource sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      <Footer />
    </div>
  );
}

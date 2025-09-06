'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Users,
  Lightbulb,
  ChefHat,
  Heart,
  Sparkles,
  ArrowRight,
  Music,
  Building2,
  TreePine,
  Coffee,
  Sun,
  Camera,
  MapPin,
  Clock,
  Mountain,
  Waves,
  Car,
  Ruler
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";

export default function RegenerativeVillagePage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/brickfactory/13.jpeg"
            alt="Fabbrica del Terzo Settore"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              {t("regenerativeVillage.hero.title")}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              {t("regenerativeVillage.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  {t("regenerativeVillage.hero.cta")}
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#vision">
                  {t("regenerativeVillage.hero.discoverVision")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pagina 1 – Visione */}
      <section id="vision" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("regenerativeVillage.vision.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("regenerativeVillage.vision.description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Home className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.vision.sustainableLiving")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.vision.sustainableLivingDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.vision.activeCommunity")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.vision.activeCommunityDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.vision.collectiveSpaces")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.vision.collectiveSpacesDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/brickfactory/1.jpeg"
                  alt="Case nelle rocce con cascata"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagina 2 – Location & History */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/brickfactory/12.jpeg"
                  alt="Vista panoramica del villaggio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("regenerativeVillage.location.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("regenerativeVillage.location.description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Ruler className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.location.size")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.location.sizeDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.location.history")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.location.historyDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.location.ascoliPiceno")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.location.ascoliPicenoDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proximity & Accessibility */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("regenerativeVillage.location.accessibility")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("regenerativeVillage.location.accessibilityDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.location.ascoliPiceno")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.location.ascoliPicenoDesc")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.location.adriaticCoast")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.location.adriaticCoastDesc")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mountain className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.location.skiArea")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.location.skiAreaDesc")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.location.rome")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.location.romeDesc")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.location.sibilliniPark")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.location.sibilliniParkDesc")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.location.lagaPark")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.location.lagaParkDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pagina 3 – Comunità e Cultura */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/brickfactory/2.jpeg"
                  alt="Palco all'aperto con luci arcobaleno"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("regenerativeVillage.communityCulture.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("regenerativeVillage.communityCulture.description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Music className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.communityCulture.culturalEvents")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.communityCulture.culturalEventsDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.communityCulture.socialInnovation")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.communityCulture.socialInnovationDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.communityCulture.communityParticipation")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.communityCulture.communityParticipationDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagina 3 – Innovazione e Coworking */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/brickfactory/8.jpeg"
                  alt="Spazio coworking innovativo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("regenerativeVillage.innovationCoworking.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("regenerativeVillage.innovationCoworking.description")}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.innovationCoworking.workspaces")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.innovationCoworking.workspacesDesc")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.innovationCoworking.workshopRooms")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.innovationCoworking.workshopRoomsDesc")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.innovationCoworking.startupIncubator")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.innovationCoworking.startupIncubatorDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pagina 4 – Vita Quotidiana e Gastronomia */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("regenerativeVillage.dailyLifeGastronomy.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("regenerativeVillage.dailyLifeGastronomy.description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <ChefHat className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.dailyLifeGastronomy.communityRestaurant")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.dailyLifeGastronomy.communityRestaurantDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TreePine className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.dailyLifeGastronomy.sharedGardens")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.dailyLifeGastronomy.sharedGardensDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.dailyLifeGastronomy.authenticRelationships")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.dailyLifeGastronomy.authenticRelationshipsDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-muted rounded-lg overflow-hidden h-60 relative">
                <Image
                  src="/brickfactory/11.jpeg"
                  alt="Ristorante comunitario e orti condivisi"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="bg-muted rounded-lg overflow-hidden h-60 relative">
                <Image
                  src="/brickfactory/14.jpeg"
                  alt="Orti condivisi e spazi gastronomici"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagina 5 – Benessere e Natura */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/brickfactory/5.jpeg"
                  alt="Spazi benessere nella natura"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("regenerativeVillage.wellnessNature.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("regenerativeVillage.wellnessNature.description")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Sun className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.wellnessNature.relaxationSpaces")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.wellnessNature.relaxationSpacesDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TreePine className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.wellnessNature.unspoiledNature")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.wellnessNature.unspoiledNatureDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{t("regenerativeVillage.wellnessNature.authenticConnection")}</h3>
                    <p className="text-sm text-muted-foreground">{t("regenerativeVillage.wellnessNature.authenticConnectionDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagina 6 – Futuro e Innovazione */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("regenerativeVillage.futureInnovation.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              {t("regenerativeVillage.futureInnovation.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.futureInnovation.solidarityEconomy")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.futureInnovation.solidarityEconomyDesc")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.futureInnovation.participatoryGovernance")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.futureInnovation.participatoryGovernanceDesc")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TreePine className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("regenerativeVillage.futureInnovation.environmentalSustainability")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("regenerativeVillage.futureInnovation.environmentalSustainabilityDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <div className="bg-muted rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg font-medium text-primary">
                {t("regenerativeVillage.futureInnovation.buildFuture")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Gallery */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("regenerativeVillage.villageVisions.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("regenerativeVillage.villageVisions.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[4, 6, 7, 9, 10, 14, 15].map((num) => (
              <div key={num} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={`/brickfactory/${num}.jpeg`}
                    alt={`Visione Regenerative Village - Concetto ${num}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              {t("regenerativeVillage.callToAction.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("regenerativeVillage.callToAction.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  {t("regenerativeVillage.callToAction.joinNow")}
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  {t("regenerativeVillage.callToAction.contactUs")}
                  <ArrowRight className="ml-2 h-4 w-4" />
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

'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Moon, Sun, Users, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";

export default function EventsPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner3.jpg"
            alt="Community events at Liminal Village"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              {t("eventsPage.heroTitle")}<span className="text-primary">{t("eventsPage.heroTitleHighlight")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4 text-balance">
              {t("eventsPage.heroSubtitle")}
            </p>
            <p className="text-lg text-muted-foreground">
              {t("eventsPage.heroLocation")}
            </p>
          </div>
        </div>
      </section>

      {/* Next Seasonal Gathering — Spring Equinox */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-emerald-500/5 to-amber-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{t("eventsPage.nextGathering")}</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                {t("eventsPage.springEquinox")}
              </h2>
            </div>

            <Card className="overflow-hidden border-2 border-emerald-200 dark:border-emerald-900">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto relative">
                  <Image
                    src="/banner1.jpg"
                    alt="Spring Equinox gathering at Liminal Village"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3 text-sm">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-semibold">{t("eventsPage.springDate")}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{t("eventsPage.springLocation")}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{t("eventsPage.springParticipation")}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {t("eventsPage.springDesc")}
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    <li>• {t("eventsPage.springSeed")}</li>
                    <li>• {t("eventsPage.springKickoffs")}</li>
                    <li>• {t("eventsPage.springReview")}</li>
                    <li>• {t("eventsPage.springGoals")}</li>
                    <li>• {t("eventsPage.springMeal")}</li>
                  </ul>
                  <Button asChild>
                    <Link href="/join">
                      {t("eventsPage.joinUs")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Lunation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("eventsPage.currentMoonPhase")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("eventsPage.currentMoonSubtitle")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Moon className="h-5 w-5 mr-2" />
                  {t("eventsPage.currentPhase")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl mb-2">🌖</p>
                <p className="text-lg font-semibold text-primary mb-1">{t("eventsPage.waningGibbous")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("eventsPage.lastFullMoon")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("eventsPage.reflectingPhase")}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  {t("eventsPage.nextKeyDates")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("eventsPage.newMoon")}</span>
                    <span className="font-semibold">Mar 19</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">🌱 {t("eventsPage.springEquinoxCard")}</span>
                    <span className="font-semibold">Mar 20</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("eventsPage.fullMoon")}</span>
                    <span className="font-semibold">Apr 2</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t("eventsPage.newMoon")}</span>
                    <span className="font-semibold">Apr 17</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {t("eventsPage.whatsHappening")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {t("eventsPage.fullMoonersWrapping")}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t("eventsPage.newMoonersReflecting")}
                </p>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  {t("eventsPage.daysUntilNext")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lunation Protocol Explainer */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("eventsPage.whatIsLunation")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("eventsPage.lunationDesc1")}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {t("eventsPage.lunationDesc2")}
              </p>
              <Button asChild className="mt-2">
                <Link href="#moon-dynamic">
                  {t("eventsPage.howTeamsWork")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80">
                <Image
                  src="/transition.jpg"
                  alt="Lunation timeline and moon phases"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Moon / Full Moon Dynamic */}
      <section id="moon-dynamic" className="py-16 lg:py-24 bg-gradient-to-br from-blue-500/5 to-amber-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
                {t("eventsPage.twoTeamsTitle")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("eventsPage.twoTeamsSubtitle")}
              </p>
            </div>

            <Card className="mb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  {t("eventsPage.teamsIntro")}
                </p>
                <p className="text-muted-foreground">
                  {t("eventsPage.teamsSwitchNote")}
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 border-blue-200 dark:border-blue-900">
                <CardHeader>
                  <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <Moon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>{t("eventsPage.newMooners")}</CardTitle>
                  <CardDescription>{t("eventsPage.newMoonersStart")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("eventsPage.newMoonersDesc")}
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                    <p className="text-sm"><strong>{t("eventsPage.sprint")}</strong></p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("eventsPage.newMoonersSprint")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-200 dark:border-amber-900">
                <CardHeader>
                  <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center mb-4">
                    <Sun className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle>{t("eventsPage.fullMooners")}</CardTitle>
                  <CardDescription>{t("eventsPage.fullMoonersStart")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t("eventsPage.fullMoonersDesc")}
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-950/20 rounded-lg p-4">
                    <p className="text-sm"><strong>{t("eventsPage.sprint")}</strong></p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {t("eventsPage.fullMoonersSprint")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  {t("eventsPage.halfMoonExchange")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {t("eventsPage.halfMoonDesc1")}
                </p>
                <p className="text-muted-foreground">
                  {t("eventsPage.halfMoonDesc2")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2026 Moon Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("eventsPage.lunationCalendar")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("eventsPage.lunationCalendarSubtitle")}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { month: "March", newMoon: "Mar 19", fullMoon: "Mar 3", seasonal: "🌱 Spring Equinox — Mar 20" },
                { month: "April", newMoon: "Apr 17", fullMoon: "Apr 2", seasonal: null },
                { month: "May", newMoon: "May 16", fullMoon: "May 1 & 31", seasonal: null },
                { month: "June", newMoon: "Jun 15", fullMoon: "Jun 30", seasonal: "☀️ Summer Solstice — Jun 21" },
                { month: "July", newMoon: "Jul 14", fullMoon: "Jul 29", seasonal: null },
                { month: "August", newMoon: "Aug 12", fullMoon: "Aug 28", seasonal: null },
                { month: "September", newMoon: "Sep 11", fullMoon: "Sep 26", seasonal: "🍂 Autumn Equinox — Sep 23" },
                { month: "October", newMoon: "Oct 10", fullMoon: "Oct 26", seasonal: null },
                { month: "November", newMoon: "Nov 9", fullMoon: "Nov 24", seasonal: null },
                { month: "December", newMoon: "Dec 9", fullMoon: "Dec 24", seasonal: "❄️ Winter Solstice — Dec 21" },
              ].map((m) => (
                <Card key={m.month} className={m.seasonal ? "border-primary/30" : ""}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{m.month}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">🌑 {t("eventsPage.newMoon")}</span>
                      <span>{m.newMoon}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">🌕 {t("eventsPage.fullMoon")}</span>
                      <span>{m.fullMoon}</span>
                    </div>
                    {m.seasonal && (
                      <p className="text-primary font-semibold pt-2 text-xs">{m.seasonal}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Annual Seasonal Gatherings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("eventsPage.seasonalGatherings")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("eventsPage.seasonalGatheringsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-emerald-200 dark:border-emerald-900">
              <CardHeader>
                <div className="h-12 w-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <CardTitle>{t("eventsPage.springEquinoxCard")}</CardTitle>
                <CardDescription>{t("eventsPage.springEquinoxCardDate")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("eventsPage.springEquinoxCardDesc")}
                </p>
                <p className="text-xs font-semibold text-emerald-600">{t("eventsPage.nextEvent")}</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle>{t("eventsPage.summerSolstice")}</CardTitle>
                <CardDescription>{t("eventsPage.summerSolsticeDate")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("eventsPage.summerSolsticeDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🍂</span>
                </div>
                <CardTitle>{t("eventsPage.autumnEquinox")}</CardTitle>
                <CardDescription>{t("eventsPage.autumnEquinoxDate")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("eventsPage.autumnEquinoxDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">❄️</span>
                </div>
                <CardTitle>{t("eventsPage.winterSolstice")}</CardTitle>
                <CardDescription>{t("eventsPage.winterSolsticeDate")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("eventsPage.winterSolsticeDesc")}
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
              {t("eventsPage.joinNextCycle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("eventsPage.joinNextCycleDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  {t("eventsPage.joinNewsletter")}
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/network">
                  {t("eventsPage.aboutLiminalVillage")}
                  <MapPin className="ml-2 h-4 w-4" />
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

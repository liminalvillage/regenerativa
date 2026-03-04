'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";

export default function VisitPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner4.jpg"
            alt="Community visit and connection"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              {t("visitPage.heroTitle")}<span className="text-primary">{t("visitPage.heroTitleHighlight")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              {t("visitPage.heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/network">
                  {t("visitPage.exploreNetwork")}
                  <MapPin className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  {t("visitPage.scheduleVisit")}
                  <Calendar className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Options */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("visitPage.howToVisit")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("visitPage.howToVisitDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("visitPage.dayVisits")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("visitPage.dayVisitsDesc")}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• {t("visitPage.guidedTours")}</li>
                  <li>• {t("visitPage.handsOnWorkshops")}</li>
                  <li>• {t("visitPage.communityMeals")}</li>
                  <li>• {t("visitPage.qaSessions")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("visitPage.weekendRetreats")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("visitPage.weekendRetreatsDesc")}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• {t("visitPage.accommodation")}</li>
                  <li>• {t("visitPage.dailyActivities")}</li>
                  <li>• {t("visitPage.skillWorkshops")}</li>
                  <li>• {t("visitPage.communityGatherings")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("visitPage.extendedStays")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("visitPage.extendedStaysDesc")}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• {t("visitPage.workExchange")}</li>
                  <li>• {t("visitPage.skillDevelopment")}</li>
                  <li>• {t("visitPage.deepIntegration")}</li>
                  <li>• {t("visitPage.projectParticipation")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              {t("visitPage.readyToExperience")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("visitPage.readyToExperienceDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {t("visitPage.scheduleYourVisit")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/network">
                  {t("visitPage.browseCommunities")}
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

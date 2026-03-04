'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MapPin, Heart, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";

export default function JoinPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner1.jpg"
            alt="Join the regeneration movement"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-display font-bold text-balance mb-6">
              {t("joinPage.heroTitle")}<span className="text-primary">{t("joinPage.heroTitleHighlight")}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              {t("joinPage.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Join Form */}
            <Card className="p-6 lg:p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-display">{t("joinPage.joinOurCommunity")}</CardTitle>
                <CardDescription>
                  {t("joinPage.joinFormDesc")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    {t("joinPage.fillQuestionnaire")}
                  </p>
                  <Button asChild className="w-full" size="lg">
                    <a href="https://wequest.typeform.com/to/q0BDRm7z" target="_blank" rel="noopener noreferrer">
                      {t("joinPage.startJourney")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    {t("joinPage.openNewTab")}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-display font-bold mb-4">{t("joinPage.whatYouGet")}</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{t("joinPage.communityConnection")}</h3>
                      <p className="text-sm text-muted-foreground">{t("joinPage.communityConnectionDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{t("joinPage.localNetworkAccess")}</h3>
                      <p className="text-sm text-muted-foreground">{t("joinPage.localNetworkAccessDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{t("joinPage.personalizedOpportunities")}</h3>
                      <p className="text-sm text-muted-foreground">{t("joinPage.personalizedOpportunitiesDesc")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <ArrowRight className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{t("joinPage.directSupport")}</h3>
                      <p className="text-sm text-muted-foreground">{t("joinPage.directSupportDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    {t("joinPage.whatHappensNext")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>{t("joinPage.personalizedResponse")}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>{t("joinPage.invitationChannels")}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>{t("joinPage.connectionLocal")}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span>{t("joinPage.customRecommendations")}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

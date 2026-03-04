'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Users, Globe, ArrowRight, Gift, BookOpen, Wrench, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";

export default function ContributePage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner1.jpg"
            alt="Community contribution and collaboration"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              {t("contributePage.heroTitle")}<span className="text-primary">{t("contributePage.heroTitleHighlight")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              {t("contributePage.heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  {t("contributePage.joinNetwork")}
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  {t("contributePage.getInTouch")}
                  <Heart className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("contributePage.waysToContribute")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contributePage.waysToContributeDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("contributePage.shareSkills")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contributePage.shareSkillsDesc")}
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• {t("contributePage.permacultureDesign")}</li>
                  <li>• {t("contributePage.sustainableBuilding")}</li>
                  <li>• {t("contributePage.renewableEnergy")}</li>
                  <li>• {t("contributePage.communityOrganizing")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("contributePage.volunteerTime")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contributePage.volunteerTimeDesc")}
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• {t("contributePage.physicalLabor")}</li>
                  <li>• {t("contributePage.eventOrganization")}</li>
                  <li>• {t("contributePage.adminSupport")}</li>
                  <li>• {t("contributePage.technicalAssistance")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("contributePage.donateResources")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contributePage.donateResourcesDesc")}
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• {t("contributePage.buildingMaterials")}</li>
                  <li>• {t("contributePage.toolsEquipment")}</li>
                  <li>• {t("contributePage.seedsPlants")}</li>
                  <li>• {t("contributePage.financialDonations")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("contributePage.shareKnowledge")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contributePage.shareKnowledgeDesc")}
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• {t("contributePage.writeArticles")}</li>
                  <li>• {t("contributePage.createTutorials")}</li>
                  <li>• {t("contributePage.documentProjects")}</li>
                  <li>• {t("contributePage.shareResearch")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Needs */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("contributePage.currentNeeds")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contributePage.currentNeedsDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>{t("contributePage.solarInstallation")}</CardTitle>
                <CardDescription>{t("contributePage.solarLocation")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contributePage.solarDesc")}
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/contact">
                    {t("contributePage.offerHelp")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t("contributePage.waterSystem")}</CardTitle>
                <CardDescription>{t("contributePage.waterLocation")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contributePage.waterDesc")}
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/contact">
                    {t("contributePage.offerHelp")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>{t("contributePage.communityOutreach")}</CardTitle>
                <CardDescription>{t("contributePage.outreachLocation")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contributePage.outreachDesc")}
                </p>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/contact">
                    {t("contributePage.offerHelp")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
              {t("contributePage.readyToMakeDifference")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("contributePage.readyToMakeDifferenceDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {t("contributePage.startContributing")}
                  <Heart className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/network">
                  {t("contributePage.exploreCommunities")}
                  <Globe className="ml-2 h-4 w-4" />
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

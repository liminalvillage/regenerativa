'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hexagon, Leaf, Heart, Users, Globe, Target, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FractalMap from "@/components/FractalMap";
import { useTranslation } from "@/hooks/useTranslationSimple";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner3.jpg"
            alt="Community gathering in nature"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              {t("aboutPage.heroTitle")}<span className="text-primary">{t("aboutPage.heroTitleHighlight")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              {t("aboutPage.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Principles */}
      <section id="vision" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                {t("aboutPage.ourVision")}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t("aboutPage.visionDesc1")}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {t("aboutPage.visionDesc2")}
              </p>
              <Button asChild>
                <Link href="/library">
                  {t("aboutPage.readManifesto")}
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold">{t("aboutPage.corePrinciples")}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Hexagon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{t("aboutPage.bioregionalDesign")}</h4>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.bioregionalDesignDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{t("aboutPage.regenerativePractices")}</h4>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.regenerativePracticesDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{t("aboutPage.integralRegeneration")}</h4>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.integralRegenerationDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{t("aboutPage.communitySovereignty")}</h4>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.communitySovereigntyDesc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Hexagonal Map */}
      <section id="map" className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("aboutPage.exploreNetwork")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("aboutPage.exploreNetworkDesc")}
            </p>
          </div>
          <div className="h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <FractalMap
              selectedLens="communities"
              onCellSelect={(cellId) => {
                console.log('Selected cell:', cellId);
              }}
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {t("aboutPage.mapHint")}
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("aboutPage.ourTeam")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("aboutPage.ourTeamDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/banner4.jpg"
                  alt="Laura - Founder & Director"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Laura</CardTitle>
                <CardDescription>{t("aboutPage.founderDirector")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("aboutPage.founderDesc")}
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Permaculture</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Leadership</span>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/transition.jpg"
                  alt="Roberto - Technology Lead"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Roberto</CardTitle>
                <CardDescription>{t("aboutPage.techLead")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("aboutPage.techLeadDesc")}
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Technology</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Finance</span>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/permaculture.jpg"
                  alt="Jillian - Community Coordinator"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Jillian</CardTitle>
                <CardDescription>{t("aboutPage.communityCoordinator")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("aboutPage.communityCoordinatorDesc")}
                </p>
                <div className="flex justify-center space-x-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Education</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Facilitation</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section id="governance" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("aboutPage.ourGovernance")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("aboutPage.governanceDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {t("aboutPage.sociocraticCircles")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("aboutPage.sociocraticDesc")}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• {t("aboutPage.generalCircle")}</li>
                  <li>• {t("aboutPage.operationsCircle")}</li>
                  <li>• {t("aboutPage.networkCircle")}</li>
                  <li>• {t("aboutPage.financeCircle")}</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  {t("aboutPage.holacraticRoles")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("aboutPage.holacraticDesc")}
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• {t("aboutPage.roleBased")}</li>
                  <li>• {t("aboutPage.distributedAuthority")}</li>
                  <li>• {t("aboutPage.transparentProcesses")}</li>
                  <li>• {t("aboutPage.continuousEvolution")}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/library/governance">
                {t("aboutPage.readGovernanceGuide")}
                <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact & Roadmap */}
      <section id="impact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("aboutPage.impactRoadmap")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("aboutPage.impactRoadmapDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">{t("aboutPage.currentImpact")}</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">{t("aboutPage.activeCommunities")}</p>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.regenerativeNodes")}</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">{t("aboutPage.communityMembers")}</p>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.activeParticipants")}</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">2,847</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">{t("aboutPage.projectsCompleted")}</p>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.regenerativeInitiatives")}</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">156</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">{t("aboutPage.lunationsCompleted")}</p>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.monthlyCycles")}</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">28</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">{t("aboutPage.roadmapTo2030")}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">{t("aboutPage.foundation2024")}</p>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.foundation2024Desc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">{t("aboutPage.networkGrowth2025")}</p>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.networkGrowth2025Desc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">{t("aboutPage.scaling2027")}</p>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.scaling2027Desc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">{t("aboutPage.ecoCiv2030")}</p>
                    <p className="text-sm text-muted-foreground">{t("aboutPage.ecoCiv2030Desc")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/library/roadmap">
                {t("aboutPage.viewDetailedRoadmap")}
                <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              {t("aboutPage.joinBuildingFuture")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("aboutPage.joinBuildingFutureDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  {t("aboutPage.joinTheMovement")}
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  {t("aboutPage.getInTouch")}
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

"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Users, Building, Globe, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";

export default function ContactPage() {
  const { t } = useTranslation();
  const [contactType, setContactType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { contactType, formData });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner4.jpg"
            alt="Community connection and communication"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              {t("contactPage.heroTitle")}<span className="text-primary">{t("contactPage.heroTitleHighlight")}</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              {t("contactPage.heroSubtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Types */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("contactPage.howCanWeHelp")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contactPage.howCanWeHelpDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className={`cursor-pointer transition-all ${
              contactType === "partnership" ? 'ring-2 ring-primary' : ''
            }`} onClick={() => setContactType("partnership")}>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">{t("contactPage.partnership")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {t("contactPage.partnershipDesc")}
                </p>
              </CardContent>
            </Card>
            <Card className={`cursor-pointer transition-all ${
              contactType === "media" ? 'ring-2 ring-primary' : ''
            }`} onClick={() => setContactType("media")}>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">{t("contactPage.media")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {t("contactPage.mediaDesc")}
                </p>
              </CardContent>
            </Card>
            <Card className={`cursor-pointer transition-all ${
              contactType === "municipality" ? 'ring-2 ring-primary' : ''
            }`} onClick={() => setContactType("municipality")}>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">{t("contactPage.municipality")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {t("contactPage.municipalityDesc")}
                </p>
              </CardContent>
            </Card>
            <Card className={`cursor-pointer transition-all ${
              contactType === "general" ? 'ring-2 ring-primary' : ''
            }`} onClick={() => setContactType("general")}>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-center">{t("contactPage.general")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {t("contactPage.generalDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="p-6 lg:p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-display">
                  {contactType === "partnership" && t("contactPage.partnershipInquiry")}
                  {contactType === "media" && t("contactPage.mediaInquiry")}
                  {contactType === "municipality" && t("contactPage.municipalityInquiry")}
                  {contactType === "general" && t("contactPage.generalInquiry")}
                  {!contactType && t("contactPage.contactForm")}
                </CardTitle>
                <CardDescription>
                  {contactType === "partnership" && t("contactPage.partnershipFormDesc")}
                  {contactType === "media" && t("contactPage.mediaFormDesc")}
                  {contactType === "municipality" && t("contactPage.municipalityFormDesc")}
                  {contactType === "general" && t("contactPage.generalFormDesc")}
                  {!contactType && t("contactPage.selectContactType")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("contactPage.fullName")}</Label>
                      <Input 
                        id="name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contactPage.emailAddress")}</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">{t("contactPage.organization")}</Label>
                    <Input 
                      id="organization" 
                      placeholder={t("contactPage.organizationPlaceholder")}
                      value={formData.organization}
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t("contactPage.subject")}</Label>
                    <Input 
                      id="subject" 
                      required
                      placeholder={t("contactPage.subjectPlaceholder")}
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contactPage.message")}</Label>
                    <Textarea 
                      id="message" 
                      required
                      rows={6}
                      placeholder={t("contactPage.messagePlaceholder")}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={!contactType}
                  >
                    {t("contactPage.sendMessage")}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("contactPage.otherWaysToConnect")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contactPage.otherWaysDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("contactPage.email")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contactPage.emailDesc")}
                </p>
                <p className="font-semibold">hello@regenerativa.earth</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {t("contactPage.responseTime")}
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("contactPage.visitUs")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contactPage.visitUsDesc")}
                </p>
                <p className="font-semibold">Liminal Village</p>
                <p className="text-sm text-muted-foreground">Tuscany, Italy</p>
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <Link href="/visit">{t("contactPage.planYourVisit")}</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{t("contactPage.community")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("contactPage.communityDesc")}
                </p>
                <div className="space-y-2">
                  <p className="font-semibold">Telegram</p>
                  <p className="font-semibold">Matrix</p>
                  <p className="font-semibold">Discord</p>
                </div>
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <Link href="/join">{t("contactPage.joinCommunity")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {t("contactPage.commonQuestions")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("contactPage.commonQuestionsDesc")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("contactPage.howQuickly")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("contactPage.howQuicklyAnswer")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("contactPage.canIVisit")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("contactPage.canIVisitAnswer")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("contactPage.doYouConsult")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("contactPage.doYouConsultAnswer")}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{t("contactPage.howToPartner")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("contactPage.howToPartnerAnswer")}
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
              {t("contactPage.readyToGetStarted")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("contactPage.readyToGetStartedDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  {t("contactPage.joinOurCommunity")}
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/network">
                  {t("contactPage.exploreOurNetwork")}
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

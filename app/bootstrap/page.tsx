'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, ArrowRight, Leaf, Shield, Sparkles, CheckCircle2, TrendingUp, Gift, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslationSimple";
import { bootstrapTranslations } from "@/translations/pages/bootstrap";

export default function BootstrapPage() {
  const { currentLanguage } = useTranslation();
  const pt = (key: string) => {
    const t = bootstrapTranslations[currentLanguage] || bootstrapTranslations['en'];
    return t[key] || bootstrapTranslations['en'][key] || key;
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-emerald-500/10 via-background to-teal-500/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/brickfactory/1.jpeg"
            alt="Regenerative building and sustainable architecture"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-primary" />
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
                <Link href="/join">
                  {pt("getStarted")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#pathway">
                  {pt("explorePath")}
                  <MapPin className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              {pt("challengeTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              <em>{pt("challengeP1")}</em>
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>{pt("challengeP2")}</strong>
            </p>
            <p className="text-lg text-muted-foreground">
              {pt("challengeP3")}
            </p>
          </div>

          {/* Visual — aerial of existing node */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/liminalvillage/1.jpeg"
                alt="Liminal Village — an established regenerative node in Tuscany"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <p className="absolute bottom-4 left-6 text-white/90 text-sm font-medium">Liminal Village — a working example of a regenerative node in Tuscany</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Bootstrap Provides */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              {pt("providesTitle")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {pt("providesSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{pt("gatewayTitle")}</CardTitle>
                <CardDescription>{pt("gatewayDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{pt("gatewayBody")}</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("gateway1")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("gateway2")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("gateway3")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{pt("hybridTitle")}</CardTitle>
                <CardDescription>{pt("hybridDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{pt("hybridBody")}</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("hybrid1")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("hybrid2")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("hybrid3")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{pt("healingTitle")}</CardTitle>
                <CardDescription>{pt("healingDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{pt("healingBody")}</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("healing1")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("healing2")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("healing3")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{pt("skillTitle")}</CardTitle>
                <CardDescription>{pt("skillDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{pt("skillBody")}</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("skill1")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("skill2")}</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{pt("skill3")}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Optionality Ranking */}
      <section id="pathway" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              {pt("optTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {pt("optSubtitle")}
            </p>

            <Card className="mb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle>{pt("optWhat")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{pt("optP1")}</p>
                <p className="text-muted-foreground">{pt("optP2")}</p>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{pt("moneyTitle")}</CardTitle>
                      <CardDescription>{pt("moneyDesc")}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">{pt("moneyStars")}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("moneyBody")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{pt("flowTitle")}</CardTitle>
                      <CardDescription>{pt("flowDesc")}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">{pt("flowStars")}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("flowBody")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{pt("skillsTitle")}</CardTitle>
                      <CardDescription>{pt("skillsDesc")}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">{pt("skillsStars")}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("skillsBody")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{pt("regenTitle")}</CardTitle>
                      <CardDescription>{pt("regenDesc")}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">{pt("regenStars")}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("regenBody")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{pt("socialTitle")}</CardTitle>
                      <CardDescription>{pt("socialDesc")}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">⭐⭐⭐</div>
                      <p className="text-xs text-muted-foreground">{pt("socialStars")}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{pt("socialBody")}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Parallel System Strategy */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-center">
              {pt("parallelTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              {pt("parallelSubtitle")}
            </p>

            <div className="space-y-6">
              {[1,2,3,4,5].map(n => (
                <Card key={n}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold text-primary">{n}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{pt(`par${n}Title`)}</h3>
                        <p className="text-sm text-muted-foreground">{pt(`par${n}Body`)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                  {pt("joinBootstrap")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
                <Link href="/visit">
                  {pt("visitHealing")}
                  <Heart className="ml-2 h-4 w-4" />
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

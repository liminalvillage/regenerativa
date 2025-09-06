'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TreePine,
  Users,
  Heart,
  ArrowRight,
  Mountain,
  Camera,
  Sun,
  Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CasaSelvaPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/casaselva/1.jpeg"
            alt="Casa Selva - Forest House"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Casa <span className="text-primary">Selva</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              A school for being human in harmony with nature—a home for regeneration nestled in the medieval village of Castel Trosino.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join the Community
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#vision">
                  Discover the Vision
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Principles */}
      <section id="vision" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Born from the vision of Laura Valenti, Casa Selva invites people to reconnect with themselves, with each other, and with the living world.
                Here, life unfolds at a slower rhythm: guided by the cycles of nature, the laughter of children, and the practice of everyday care.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Casa Selva offers a space for inner work, healing, and learning, where education is not just for children but for all ages—
                a school for being human in harmony with nature.
              </p>
              <Button asChild>
                <Link href="/library">
                  Learn More About Our Vision
                  <TreePine className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold">Our Focus</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Inner Work & Healing</h4>
                    <p className="text-sm text-muted-foreground">Practices that nurture wholeness and self-discovery.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TreePine className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Nature Stewardship</h4>
                    <p className="text-sm text-muted-foreground">Caring for the land, the forest, and the waters with reverence.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Relationships & Community</h4>
                    <p className="text-sm text-muted-foreground">Building authentic connections rooted in trust and presence.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Camera className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Education & Play</h4>
                    <p className="text-sm text-muted-foreground">Inspired by Waldorf principles and creative exploration for children and adults.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Setting */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Location & Setting
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nestled in the medieval village of Castel Trosino, in the mountains above Ascoli Piceno.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mountain className="h-5 w-5 mr-2" />
                  Medieval Village
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Located in Castel Trosino, a historic medieval village offering
                  a timeless setting for reflection and connection with heritage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sun className="h-5 w-5 mr-2" />
                  Mountain Setting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Positioned in the mountains above Ascoli Piceno, providing
                  panoramic views and a peaceful retreat from urban life.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TreePine className="h-5 w-5 mr-2" />
                  Natural Rhythms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Life unfolds at a slower rhythm, guided by the cycles of nature,
                  the laughter of children, and the practice of everyday care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community & Activities */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Education & Community Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A school for being human where education is not just for children but for all ages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Learning & Growth</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Camera className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Waldorf-Inspired Education</p>
                    <p className="text-sm text-muted-foreground">Creative exploration and holistic learning for children and adults alike.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Inner Work Practices</p>
                    <p className="text-sm text-muted-foreground">Spaces for healing, self-discovery, and nurturing wholeness.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Family & Community</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Authentic Relationships</p>
                    <p className="text-sm text-muted-foreground">Building connections rooted in trust, presence, and genuine care.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TreePine className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Nature Stewardship</p>
                    <p className="text-sm text-muted-foreground">Caring for the land, forest, and waters with reverence and respect.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Casa Selva Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the beauty and serenity of our forest sanctuary through these images.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div key={num} className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src={`/casaselva/${num}.jpeg`}
                  alt={`Casa Selva - Forest sanctuary ${num}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Connection */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Part of a Living Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Casa Selva complements the experimental spirit of Liminal Village by offering a more intimate, 
              family-rooted space for reflection and renewal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Complementary Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  While Liminal Village focuses on experimental innovation and Hackalongs, Casa Selva provides 
                  a nurturing, family-centered environment for deeper inner work and healing.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Bioregional Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Together with other regenerative hubs in the bioregion, Casa Selva is part of a living network 
                  cultivating pathways for a more conscious, compassionate, and resilient world.
                </p>
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
              Join Our School for Being Human
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience Casa Selva as a space for inner work, healing, and learning—where education is not just for children but for all ages, 
              and where life unfolds at a slower rhythm guided by nature&apos;s cycles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join the Community
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Learn More
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

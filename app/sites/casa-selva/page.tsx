'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  TreePine,
  Home,
  Users,
  Heart,
  ArrowRight,
  MapPin,
  Mountain,
  Waves,
  Camera,
  Sun,
  Leaf,
  Building2
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
            src="/banner1.jpg"
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
              A forest sanctuary blending traditional architecture with modern regenerative living in harmony with nature.
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
                Casa Selva represents the perfect synthesis of traditional wisdom and modern regenerative practices.
                Nestled in the forest, this sanctuary serves as a living laboratory for sustainable living,
                community building, and ecological restoration.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Every element of Casa Selva is designed to honor the forest ecosystem while providing
                a nurturing environment for human flourishing and creative expression.
              </p>
              <Button asChild>
                <Link href="/library">
                  Learn More About Our Vision
                  <TreePine className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold">Core Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TreePine className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Forest Integration</h4>
                    <p className="text-sm text-muted-foreground">Architecture that harmonizes with the natural forest environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Regenerative Living</h4>
                    <p className="text-sm text-muted-foreground">Practices that restore and enhance the surrounding ecosystem.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Community Focus</h4>
                    <p className="text-sm text-muted-foreground">Spaces designed to foster connection and collective creativity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Features */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Location & Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique setting and architectural features of Casa Selva.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mountain className="h-5 w-5 mr-2" />
                  Forest Setting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Surrounded by ancient forests and natural biodiversity,
                  providing a serene environment for contemplation and creativity.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  Traditional Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Inspired by local building traditions with modern sustainable materials
                  and passive design principles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sun className="h-5 w-5 mr-2" />
                  Natural Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Solar orientation, natural ventilation, and rainwater harvesting
                  systems integrated seamlessly with the forest ecosystem.
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
              Community & Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the vibrant community life and creative activities at Casa Selva.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Daily Life</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Leaf className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Forest Practices</p>
                    <p className="text-sm text-muted-foreground">Permaculture gardens, forest bathing, and nature connection activities.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Camera className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Creative Workshops</p>
                    <p className="text-sm text-muted-foreground">Art, music, and craft sessions inspired by the natural surroundings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Community Events</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Seasonal Celebrations</p>
                    <p className="text-sm text-muted-foreground">Rituals and gatherings honoring the changing seasons and natural cycles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Healing Circles</p>
                    <p className="text-sm text-muted-foreground">Group sharing, meditation, and community support gatherings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Experience Casa Selva
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in this forest sanctuary where nature, community, and creativity converge
              to create a truly regenerative living experience.
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

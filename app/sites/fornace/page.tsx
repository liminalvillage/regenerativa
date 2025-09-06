'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  Users,
  TreePine,
  Heart,
  Mountain,
  Waves,
  GraduationCap,
  Camera,
  Building2,
  Target,
  Leaf,
  ArrowRight,
  Calendar,
  Zap,
  Droplets,
  Coffee,
  Sparkles,
  Lightbulb,
  Music
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LiminalVillagePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/brickfactory/1.jpeg"
            alt="Liminal Village - Community sanctuary"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Liminal <span className="text-primary">Village</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              Where transformation begins. A former industrial site reborn as a regenerative community hub, blending ancient wisdom with cutting-edge sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join the Community
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#gallery">
                  View Gallery
                  <Camera className="ml-2 h-4 w-4" />
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
                Liminal Village represents the threshold between old industrial paradigms and new regenerative possibilities.
                What was once a brick factory is becoming a living laboratory for sustainable community living,
                where ancient building techniques meet cutting-edge ecological design.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Here, we demonstrate that industrial sites can be transformed into thriving ecosystems that support
                both human flourishing and environmental regeneration.
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
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Regenerative Transformation</h4>
                    <p className="text-sm text-muted-foreground">Turning industrial legacy into ecological opportunity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Community First</h4>
                    <p className="text-sm text-muted-foreground">Building spaces that foster genuine human connection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Innovation Through Tradition</h4>
                    <p className="text-sm text-muted-foreground">Honoring ancestral wisdom while embracing future technologies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Transformation */}
      <section id="transformation" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              From Factory to Village
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Witnessing the rebirth of industrial space into a thriving regenerative community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  Adaptive Reuse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transforming industrial structures into living, breathing community spaces that honor the past while serving the future.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2" />
                  Ecological Restoration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Healing the land through regenerative practices, native planting, and wildlife habitat restoration.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Community Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creating spaces that foster genuine human connection and collaborative living.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Daily Life & Community */}
      <section id="community" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Community Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the vibrant daily life and communal activities that make Liminal Village a living, breathing community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Daily Practices</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Coffee className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Shared Meals</p>
                    <p className="text-sm text-muted-foreground">Community meals prepared from our regenerative gardens and local partnerships.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Creative Workshops</p>
                    <p className="text-sm text-muted-foreground">Art, music, and craft sessions inspired by our industrial heritage.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Community Events</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Music className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Cultural Gatherings</p>
                    <p className="text-sm text-muted-foreground">Concerts, performances, and celebrations in our transformed industrial spaces.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Camera className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Learning Experiences</p>
                    <p className="text-sm text-muted-foreground">Workshops on regenerative practices, sustainable building, and community living.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section id="future" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Building the Future
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Liminal Village is more than a place—it's a movement demonstrating how industrial sites can become thriving regenerative communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Living Laboratory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A real-world testing ground for regenerative practices, sustainable building techniques, and community living models.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Innovation Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Spaces for workshops, research, and collaboration on solutions for the ecological and social challenges of our time.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Community Sanctuary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A welcoming space where people can connect, learn, and contribute to building a more regenerative world together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="join" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Join Liminal Village
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of the transformation from industrial legacy to regenerative community.
              Your participation helps build a more sustainable and connected world.
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
                  Get in Touch
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

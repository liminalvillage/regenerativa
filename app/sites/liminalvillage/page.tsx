'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  TreePine,
  Heart,
  Camera,
  Building2,
  Target,
  Leaf,
  ArrowRight,
  Coffee,
  Sparkles,
  Lightbulb,
  Music,
  Mountain,
  Sun
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
            src="/liminalvillage/1.jpeg"
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
              A co-living, co-creation eco-tech hub in the Tronto Valley—a living lab where value-aligned individuals gather to co-create the future they envision.
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
                The term &quot;liminal&quot; reflects our mission: a site of transition, a threshold between old systems and the new possibilities of harmonious living.
                Rooted in regenerative design and inspired by concepts like Resource-Based Economy and Game B, we aim to upgrade the societal operating system,
                moving from scarcity-driven markets to access abundance.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At this crossroads of nature and technology, science and spirituality, economy and society, we explore new paradigms—
                hosting immersive Hackalongs during lunar-aligned cycles and experimenting with biomimetic systems.
              </p>
              <Button asChild>
                <Link href="/library">
                  Learn More About Our Vision
                  <TreePine className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold">Three Dimensions of Transformation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Personal</h4>
                    <p className="text-sm text-muted-foreground">Encouraging self-discovery, creative expression, and personal growth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Local</h4>
                    <p className="text-sm text-muted-foreground">Inspiring hands-on regeneration, learning, and collaborative community work.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Global</h4>
                    <p className="text-sm text-muted-foreground">Connecting to and contributing toward broader societal and planetary healing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Living Lab & Innovation */}
      <section id="transformation" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Regenerative Incubator
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A living lab where we experiment with biomimetic systems and host immersive Hackalongs during lunar-aligned cycles.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Hackalongs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Immersive collaborative sessions during lunar-aligned cycles, bringing together innovators to co-create solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2" />
                  Biomimetic Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Experimenting with gardens, biolakes, and open-source water/food infrastructure inspired by natural systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Network Anchoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Connecting to and contributing toward a growing network of regenerative initiatives worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Accommodation */}
      <section id="location" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Location & Accommodation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nestled in the Tronto Valley, Marche, central Italy—approximately 20 minutes from both sea and mountains.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Location</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mountain className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Tronto Valley, Marche</p>
                    <p className="text-sm text-muted-foreground">Central Italy&apos;s regenerative heartland, offering panoramic landscapes and natural beauty.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sun className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Sea & Mountains</p>
                    <p className="text-sm text-muted-foreground">Just 20 minutes from both the Adriatic coast and the Apennine mountains.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Accommodation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Private Rooms</p>
                    <p className="text-sm text-muted-foreground">Comfortable private accommodations for focused work and personal space.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Coffee className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Caravans & Camping</p>
                    <p className="text-sm text-muted-foreground">Alternative accommodation options for immersive nature connection.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">High-Speed Internet</p>
                    <p className="text-sm text-muted-foreground">Reliable connectivity for remote work and digital collaboration.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Life & Community */}
      <section id="community" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Community Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience co-living and co-creation in a value-aligned community where individuals gather to co-create the future they envision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Co-Living Experience</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Coffee className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Shared Spaces</p>
                    <p className="text-sm text-muted-foreground">Co-creation spaces designed for collaboration, innovation, and community building.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sparkles className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Value-Aligned Living</p>
                    <p className="text-sm text-muted-foreground">A community of individuals committed to regenerative practices and conscious living.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Co-Creation Activities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Music className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Lunar-Aligned Cycles</p>
                    <p className="text-sm text-muted-foreground">Hackalongs and collaborative sessions timed with natural rhythms and cycles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Camera className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Innovation Workshops</p>
                    <p className="text-sm text-muted-foreground">Hands-on learning in regenerative practices, biomimetic design, and sustainable systems.</p>
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
              Liminal Village Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the beauty and innovation of our regenerative community through these images.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: 1, ext: 'jpeg' },
              { num: 2, ext: 'jpeg' },
              { num: 3, ext: 'jpg' },
              { num: 4, ext: 'jpeg' },
              { num: 5, ext: 'jpeg' },
              { num: 6, ext: 'png' },
              { num: 7, ext: 'JPG' }
            ].map(({ num, ext }) => (
              <div key={num} className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src={`/liminalvillage/${num}.${ext}`}
                  alt={`Liminal Village - Community transformation ${num}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
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
              Liminal Village is more than a place—it&apos;s a movement demonstrating how regenerative communities can thrive and inspire transformation.
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
              Step Into the Liminal Space
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              As a regenerative incubator, we invite you to step into this liminal space—to heal, innovate, and co-architect a future where individuals, communities, and the planet flourish together.
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

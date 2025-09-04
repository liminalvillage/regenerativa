'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Factory,
  Home,
  Users,
  TreePine,
  Pizza,
  Recycle,
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
  Utensils
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FornacePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/brickfactory/1.jpeg"
            alt="Fornace brick factory site"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Fornace <span className="text-primary">Site</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              The physical foundation of Regenerativa - a 3-acre brick factory site transforming into a self-sustaining regenerative community.
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

      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Site Overview
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              An old brick factory site serving as the physical foundation and key resource for the entire Regenerativa initiative.
              This three-acre property offers significant building capacity and unique features central to our vision of a self-sustaining, regenerative community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  6,000 m³ Capacity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Equivalent to 2,000 m² of building capacity including the old brick factory and its silo.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TreePine className="h-5 w-5 mr-2" />
                  3-Acre Property
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Located with a regeneration plan that specifically allows for housing development.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2" />
                  Strategic Foundation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Central to the project's vision of a self-sustaining, regenerative community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure & Capacity */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Existing Infrastructure & Capacity
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Factory className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Building Capacity</h3>
                    <p className="text-sm text-muted-foreground">6,000 cubic meters of building capacity, equivalent to 2,000 square meters.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Building2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Historic Brick Factory</h3>
                    <p className="text-sm text-muted-foreground">The old brick factory building with its stone oven and industrial heritage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Home className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Relocatable Silo</h3>
                    <p className="text-sm text-muted-foreground">The old silo can be relocated or repurposed to facilitate housing unit creation.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TreePine className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">3-Acre Property</h3>
                    <p className="text-sm text-muted-foreground">Property size with regeneration plan allowing housing development.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/brickfactory/2.jpeg"
                  alt="Fornace site infrastructure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Housing Development */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/brickfactory/3.jpeg"
                  alt="Housing development potential"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Housing Development
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The project envisions starting with about 20 housing units, each approximately 100 square meters,
                designed to be built on this property using sustainable materials.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Home className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">20 Housing Units</h3>
                    <p className="text-sm text-muted-foreground">Each approximately 100 square meters, built with sustainable materials.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Flexible Design Approach</h3>
                    <p className="text-sm text-muted-foreground">Instead of rigid master plans, housing volumes defined as "boxes" for flexibility.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Community-Driven Development</h3>
                    <p className="text-sm text-muted-foreground">Housing development allows for flexibility and adjustment over time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phased Utilization */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Phased Utilization of the Site
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A strategic approach to transforming the brick factory site into a thriving regenerative community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Phase One: Pioneer Community & Infrastructure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The initial phase focuses on developing basic urbanization on the property, including sewerage and electricity.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Basic infrastructure development</li>
                  <li>• Camper stop transformation</li>
                  <li>• Tiny house friendly with gardens</li>
                  <li>• Special camping spots for tiny houses</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="h-5 w-5 mr-2" />
                  Phase Two: Permanent Housing & Business Incubation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Once a cohesive community is established, focus on permanent housing and regenerative business development.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Additive manufacturing (3D printing) for houses</li>
                  <li>• Rapid, cost-effective building with local materials</li>
                  <li>• Regenerative business incubation</li>
                  <li>• Community consolidation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regenerative Businesses Hub */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Hub for Regenerative Businesses & Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The brick factory site is envisioned as a vibrant hub for various regenerative businesses and community activities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Pizza className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Food Business</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The stone oven within the brick factory is ideal for establishing a pizzeria or similar food venture.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Stone oven utilization</li>
                  <li>• Collectively managed gardens</li>
                  <li>• Local food production</li>
                  <li>• Community dining experiences</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Regenerative Building Company</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A company that would operate from the site, using local, sustainable materials and green energy.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Sustainable building materials</li>
                  <li>• Green energy utilization</li>
                  <li>• Cost-effective construction</li>
                  <li>• Services for challenging locations</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Plastic Recycling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Implementation of Precious Plastic initiatives for plastic recycling on the site.
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• Precious Plastic workshops</li>
                  <li>• Plastic waste processing</li>
                  <li>• Recycled material production</li>
                  <li>• Community recycling programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tourism & Recreation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                Tourism and Recreation
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mountain className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Rock Climbing Wall</h3>
                    <p className="text-sm text-muted-foreground">Conveniently located near a prominent rock-climbing wall, noted as the closest wall to the sea in Italy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Waves className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">River Activities</h3>
                    <p className="text-sm text-muted-foreground">The river located just down from the factory offers potential for canoeing, with coordination with the municipality for dike openings.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TreePine className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Riverside Cleanup</h3>
                    <p className="text-sm text-muted-foreground">Requires cleaning up the riverside to ensure safety for recreational activities.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/brickfactory/4.jpeg"
                  alt="Natural surroundings for tourism and recreation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Project & Educational Hub */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Social Project and Educational Hub
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The brick factory site will ultimately be a social project and a model for future living, serving as a hub for open-source regenerative technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Water Purification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Development and production of water purification systems using open-source regenerative technologies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Food Machines</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Creation of innovative food production and processing machines for sustainable food systems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Technology Hub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Open-source regenerative technologies development, production, and distribution center.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Systems for water purification and food machines will be developed, produced, and distributed by the community from this location.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section id="gallery" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Site Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the Fornace brick factory site through these images showcasing its current state and potential.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
              <div key={num} className="relative group overflow-hidden rounded-lg">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={`/brickfactory/${num}.jpeg`}
                    alt={`Fornace site image ${num}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
              Join the Fornace Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of transforming this historic brick factory site into a model of regenerative living.
              Whether you're interested in housing, business development, or community building,
              there's a place for you in our vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join the Movement
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

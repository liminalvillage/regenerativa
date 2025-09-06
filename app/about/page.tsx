'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hexagon, Leaf, Heart, Users, Globe, Target, Award, BookOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FractalComposableMap from "@/components/FractalComposableMap";

export default function AboutPage() {
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
              About <span className="text-primary">Regenerativa</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              Building EcoCivilization 2030 through integral regeneration and bioregional networks.
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
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We envision a world where human communities thrive in harmony with nature, 
                where local economies are regenerative and resilient, and where every person 
                has access to healthy food, clean water, and meaningful work.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                By 2030, we aim to have established a global network of 10,000 fractal and composable
                communities, each supporting 1,000 people in creating sustainable,
                regenerative systems.
              </p>
              <Button asChild>
                <Link href="/library">
                  Read Our Manifesto
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold">Core Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Hexagon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Bioregional Design</h4>
                    <p className="text-sm text-muted-foreground">Organize communities around natural watersheds and ecosystems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Regenerative Practices</h4>
                    <p className="text-sm text-muted-foreground">Use permaculture, circular economy, and sustainable agriculture.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Integral Regeneration</h4>
                    <p className="text-sm text-muted-foreground">Address social, ecological, and economic systems holistically.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Community Sovereignty</h4>
                    <p className="text-sm text-muted-foreground">Empower local communities to make their own decisions.</p>
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
              Explore Our Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover regenerative communities, projects, and opportunities across our fractal and composable bioregional network.
            </p>
          </div>
          <div className="h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl">
            <FractalComposableMap
              selectedLens="communities"
              onCellSelect={(cellId) => {
                console.log('Selected cell:', cellId);
                // You can add navigation or modal logic here
              }}
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Click on cells to explore local communities and projects. Use the lens selector to filter by different types of data.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the people behind Regenerativa, working to build a more sustainable and regenerative future.
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
                <CardDescription>Founder & Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Permaculture designer and community organizer with 15 years of experience in regenerative agriculture.
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
                <CardDescription>Technology Lead</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Software engineer specializing in decentralized systems and regenerative finance platforms.
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
                <CardDescription>Community Coordinator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Experienced facilitator and educator focused on building resilient community networks.
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
              Our Governance
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We use sociocratic and holacratic principles to ensure inclusive, transparent, and effective decision-making.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Sociocratic Circles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our organization is structured in circles that make decisions through consent-based processes, 
                  ensuring everyone&apos;s voice is heard and integrated.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• General Circle (strategic decisions)</li>
                  <li>• Operations Circle (day-to-day management)</li>
                  <li>• Network Circle (community coordination)</li>
                  <li>• Finance Circle (resource allocation)</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Holacratic Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Each member has clearly defined roles and accountabilities, allowing for 
                  distributed leadership and autonomous decision-making within defined domains.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Role-based organization</li>
                  <li>• Distributed authority</li>
                  <li>• Transparent processes</li>
                  <li>• Continuous evolution</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/library/governance">
                Read Full Governance Guide
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
              Impact & Roadmap
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our progress toward EcoCivilization 2030 and the milestones we&apos;ve achieved.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Current Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">Active Communities</p>
                    <p className="text-sm text-muted-foreground">Regenerative nodes</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">12</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">Community Members</p>
                    <p className="text-sm text-muted-foreground">Active participants</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">2,847</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">Projects Completed</p>
                    <p className="text-sm text-muted-foreground">Regenerative initiatives</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">156</p>
                </div>
                <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                  <div>
                    <p className="font-semibold">Lunations Completed</p>
                    <p className="text-sm text-muted-foreground">Monthly cycles</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">28</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold mb-6">Roadmap to 2030</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">2024 - Foundation Phase</p>
                    <p className="text-sm text-muted-foreground">Established core team, launched website, began community building</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">2025 - Network Growth</p>
                    <p className="text-sm text-muted-foreground">Launch interactive map, expand to 50 cells, 5,000 members</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">2027 - Scaling Phase</p>
                    <p className="text-sm text-muted-foreground">500 cells, 50,000 members, launch RegenMatch platform</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-3 w-3 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">2030 - EcoCivilization</p>
                    <p className="text-sm text-muted-foreground">10,000 cells, 1 million members, global regenerative network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/library/roadmap">
                View Detailed Roadmap
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
              Join Us in Building the Future
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you want to contribute your skills, invest in regenerative projects, 
              or simply stay informed, there&apos;s a place for you in our community.
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


"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hexagon, Users, MapPin, Globe, Search, Info } from "lucide-react";
import Link from "next/link";
import FractalComposableMap from "@/components/FractalComposableMap";

export default function NetworkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Regenerative <span className="text-primary">Network</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              Explore our global network of fractal and composable bioregional communities, projects, and regenerative initiatives from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join a Community
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/library">
                  Learn More
                  <Info className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <FractalComposableMap
              selectedLens="regenerative"
              onCellSelect={(cellId) => {
                console.log('Selected cell:', cellId);
                // You can add navigation or modal logic here
              }}
            />
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Network Statistics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our growing network of regenerative communities and projects.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Hexagon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">12</CardTitle>
                <CardDescription>Active Cells</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">2,847</CardTitle>
                <CardDescription>Community Members</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">156</CardTitle>
                <CardDescription>Projects Completed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">8</CardTitle>
                <CardDescription>Countries</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              How to Use the Network Map
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how to navigate and interact with our fractal network.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Explore by Lens</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Use the lens selector to filter the map by different types of data:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Communities:</strong> Active local groups</li>
                  <li>• <strong>Projects:</strong> Ongoing initiatives</li>
                  <li>• <strong>Needs:</strong> Community requests</li>
                  <li>• <strong>Offers:</strong> Available resources</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Navigate & Zoom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The map uses H3 fractal grid system for precise location tracking:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Zoom in/out:</strong> Changes cell resolution</li>
                  <li>• <strong>Click cells:</strong> Select and explore</li>
                  <li>• <strong>Drag to pan:</strong> Move around the map</li>
                  <li>• <strong>Colored cells:</strong> Indicate active data</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Connect & Engage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Once you find interesting communities or projects:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• <strong>Join communities:</strong> Become a member</li>
                  <li>• <strong>Contribute skills:</strong> Offer your expertise</li>
                  <li>• <strong>Start projects:</strong> Launch new initiatives</li>
                  <li>• <strong>Share resources:</strong> Help others grow</li>
                </ul>
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
              Ready to Join the Network?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you want to find a community near you, start a new project, or contribute to existing initiatives, 
              there&apos;s a place for you in our regenerative network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join the Network
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


'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Users, Map, Calendar, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import FractalComposableMap from "@/components/FractalComposableMap";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Demo Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Explore the features of the Regenerativa platform
          </p>
        </div>

        <div className="space-y-8">
          {/* Hexagonal Map Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Map className="h-5 w-5" />
                Interactive Hexagonal Map
              </CardTitle>
              <CardDescription>
                Explore the global network of regenerative communities using H3 hexagonal cells
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 w-full rounded-lg border">
                <FractalComposableMap
                  selectedLens="regenerative"
                  onCellSelect={(cellId) => {
                    console.log('Selected cell:', cellId);
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Global Network
                </CardTitle>
                <CardDescription>
                  Connect with regenerative communities worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Join thousands of people already building regenerative communities across the globe.
                </p>
                <Button asChild>
                  <Link href="/network">
                    Explore Network
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Community
                </CardTitle>
                <CardDescription>
                  Build and grow local regenerative networks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Create and manage hexagonal communities focused on local resilience.
                </p>
                <Button asChild variant="outline">
                  <Link href="/join">
                    Join Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5" />
                  Regenerative Practices
                </CardTitle>
                <CardDescription>
                  Learn and implement sustainable solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Access resources and tools for building regenerative systems.
                </p>
                <Button asChild variant="outline">
                  <Link href="/library">
                    Browse Library
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Statistics Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Map className="h-5 w-5" />
                  Active Nodes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Regenerative communities</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Community Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">2,847</p>
                <p className="text-sm text-muted-foreground">Active participants</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Hex Communities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">156</p>
                <p className="text-sm text-muted-foreground">Local micro-economies</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Events This Month
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">8</p>
                <p className="text-sm text-muted-foreground">Upcoming activities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

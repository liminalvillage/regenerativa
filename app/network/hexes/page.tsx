'use client';

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Hexagon, MapPin, Users, Globe, ArrowLeft, Search, Filter } from "lucide-react";
import Link from "next/link";
import FractalComposableMap from "@/components/FractalComposableMap";

export default function HexesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Fractal and Composable <span className="text-primary">Grid</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              Explore our bioregional network through the H3 fractal grid system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/network">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Network
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/network/nodes">
                  View Nodes
                  <MapPin className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-2xl font-display font-bold mb-2">Interactive Fractal Map</h2>
                <p className="text-muted-foreground">
                  Navigate through our bioregional network using the H3 fractal grid system.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
            <FractalComposableMap
              selectedLens="cells"
              onCellSelect={(cellId) => {
                console.log('Selected cell:', cellId);
                // You can add navigation or modal logic here
              }}
            />
          </div>
        </div>
      </section>

      {/* Hexagon Information */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Understanding Cells
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how our fractal grid system works and what each cell represents.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Hexagon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>H3 Grid System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  We use the H3 fractal grid system developed by Uber for precise location tracking and bioregional mapping.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Consistent fractal cell sizes</li>
                  <li>• Hierarchical resolution levels</li>
                  <li>• Global coverage</li>
                  <li>• Efficient spatial indexing</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Bioregional Boundaries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Each cell represents a bioregional area with similar ecological characteristics and community needs.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Watershed boundaries</li>
                  <li>• Climate zones</li>
                  <li>• Ecosystem types</li>
                  <li>• Cultural regions</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Community Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Cells contain aggregated data about communities, projects, and resources in that area.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Community members</li>
                  <li>• Active projects</li>
                  <li>• Available resources</li>
                  <li>• Skill networks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hexagon Statistics */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Current Cell Statistics
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Overview of our fractal network coverage and activity.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Hexagon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">1,247</CardTitle>
                <CardDescription>Active Cells</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">8,392</CardTitle>
                <CardDescription>Community Members</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">342</CardTitle>
                <CardDescription>Active Projects</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl font-bold text-primary">12</CardTitle>
                <CardDescription>Countries</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              How to Use the Fractal Grid
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn how to navigate and interact with our fractal network system.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Zoom in/out:</strong> Changes cell resolution</li>
                  <li>• <strong>Click cells:</strong> Select and view details</li>
                  <li>• <strong>Drag to pan:</strong> Move around the map</li>
                  <li>• <strong>Use filters:</strong> Show specific data types</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Understanding Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>Green:</strong> High community activity</li>
                  <li>• <strong>Yellow:</strong> Moderate activity</li>
                  <li>• <strong>Orange:</strong> Low activity</li>
                  <li>• <strong>Gray:</strong> No data available</li>
                </ul>
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
              Explore Your Bioregion
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Find communities and projects in your area, or discover new opportunities in other bioregions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join a Community
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contribute">
                  Contribute
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

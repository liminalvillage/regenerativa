import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Calendar, ArrowRight, Hexagon, Leaf, Heart, Globe, Factory, Home, TreePine } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner1.jpg"
            alt="Regenerative landscape"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Building a Global Network for <span className="text-primary">Integral Care</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              A global network for integral care through bioregional communities and regenerative practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join the Movement
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/network">
                  Explore Network
                  <MapPin className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Video Section */}
      <section id="video" className="py-16 lg:py-24 bg-gradient-to-br from-primary/90 via-primary to-secondary/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Watch Our Introduction
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
              Learn more about our vision to restore and revitalize our planet and our lives
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/XdhPXocPf9g"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Regenerativa Introduction Video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Explainer */}
      <section id="about" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                What is Regenerativa?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We&apos;re building a global network of bioregional communities connected through fractal and composable micro-economies.
                Each cell represents a local catchment area where people collaborate on regenerative projects,
                share resources, and build resilient systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Hexagon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Fractal and Composable Networks</h3>
                    <p className="text-sm text-muted-foreground">Local communities organized in H3 fractal cells for optimal resource sharing.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Regenerative Practices</h3>
                    <p className="text-sm text-muted-foreground">Permaculture, sustainable agriculture, and circular economy principles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Integral Regeneration</h3>
                    <p className="text-sm text-muted-foreground">Holistic approach addressing social, ecological, and economic systems.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80 relative">
                <Image
                  src="/permaculture.jpg"
                  alt="Permaculture garden showing regenerative agriculture practices"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sites */}
      <section id="sites" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Our Sites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Visit our regenerative communities and see sustainable living in action.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/liminalvillage/1.jpeg"
                  alt="Liminal Village - Community hub"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="h-5 w-5 mr-2 text-primary" />
                  Liminal Village
                </CardTitle>
                <CardDescription>Community hub</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our central community hub where innovation meets tradition,
                  serving as the heart of our regenerative network.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/sites/liminalvillage">
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/brickfactory/13.jpeg"
                  alt="Fabbrica del Terzo Settore - Regenerative Factory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Factory className="h-5 w-5 mr-2 text-primary" />
                  Fabbrica del Terzo Settore
                </CardTitle>
                <CardDescription>Regenerative Factory</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A third sector factory focused on regenerative practices, circular economy,
                  and sustainable production methodologies.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/sites/brickfactory">
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 relative">
                <Image
                  src="/casaselva/1.jpeg"
                  alt="Casa Selva - Forest sanctuary"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TreePine className="h-5 w-5 mr-2 text-primary" />
                  Casa Selva
                </CardTitle>
                <CardDescription>Forest sanctuary</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A forest sanctuary blending traditional architecture with modern regenerative living
                  in perfect harmony with nature.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/sites/casaselva">
                    Learn More
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Network Map Preview */}
      <section id="network" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Our Growing Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of people already building regenerative communities across the globe.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
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
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
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
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Fractal Communities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary">156</p>
                <p className="text-sm text-muted-foreground">Local micro-economies</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/network">
                Explore Interactive Map
                <MapPin className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Ways to Engage */}
      <section id="engage" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your path to contribute to the regeneration movement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Join</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Tell us about yourself and get connected with regenerative communities worldwide.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://wequest.typeform.com/to/q0BDRm7z" target="_blank" rel="noopener noreferrer">
                    Get Connected
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Contribute</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Share your skills, time, and expertise to support regenerative projects.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contribute">Share Skills</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Stake</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Invest in regenerative projects and receive receipt tokens for future benefits.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/stake">Stake Funds</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Experience regenerative living firsthand at Liminal Village and other network nodes.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/visit">Plan Visit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our Lunation Protocol and seasonal celebrations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Next Lunation
                </CardTitle>
                <CardDescription>Monthly co-creation rhythm</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">September 15-30, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our monthly cycle of planning, building, and celebrating regenerative projects.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Autumn Equinox
                </CardTitle>
                <CardDescription>Seasonal celebration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">September 22, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Celebrate the harvest and prepare for the winter season with community rituals.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">Join Celebration</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Permaculture Workshop
                </CardTitle>
                <CardDescription>Skill building</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">October 5-7, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn regenerative design principles at Liminal Village.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/events">Register Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button asChild>
              <Link href="/events">
                View All Events
                <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Stories */}
      <section id="stories" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Latest Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how communities are implementing regenerative practices around the world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/earthship.jpg"
                  alt="Clay house construction project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Clay House Construction Begins</CardTitle>
                <CardDescription>Liminal Village, Italy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Our first clay house project is underway, showcasing sustainable building techniques and local materials.
                </p>
                <Button variant="link" size="sm" className="p-0">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/banner3.jpg"
                  alt="Community gathering in nature"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>New Fractal Community Forms</CardTitle>
                <CardDescription>Tuscany Region</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A new fractal and composable community has reached 500 members, creating a local micro-economy focused on food sovereignty.
                </p>
                <Button variant="link" size="sm" className="p-0">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/transition.jpg"
                  alt="Sustainable transition and renewable energy"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Regenerative Finance Pilot</CardTitle>
                <CardDescription>Global Network</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Launching our first receipt token system for funding regenerative infrastructure projects.
                </p>
                <Button variant="link" size="sm" className="p-0">
                  Read More <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners & Network - Hidden for now */}
      {/* 
      <section id="partners" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Our Regenerative Network
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Connected to a global ecosystem of organizations pioneering regenerative practices, 
              Resource-Based Economy principles, and transformative community models.
            </p>
          </div>
          
          <div className="mb-16">
            <h3 className="text-2xl font-display font-bold text-center mb-8">Core Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 relative">
                  <Image
                    src="/venusproject.png"
                    alt="Venus Project"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Venus Project</h4>
                <p className="text-sm text-muted-foreground">
                  Pioneering Resource-Based Economy and holistic design for sustainable civilization.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 relative">
                  <Image
                    src="/zeitgeist.png"
                    alt="Zeitgeist Movement"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Zeitgeist Movement</h4>
                <p className="text-sm text-muted-foreground">
                  Global movement advocating for scientific method and Resource-Based Economy principles.
                </p>
              </div>
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 relative">
                  <Image
                    src="/envienta.png"
                    alt="Envienta"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Envienta</h4>
                <p className="text-sm text-muted-foreground">
                  Open-source platform for regenerative technology and sustainable innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-display font-bold text-center mb-8">Regenerative Allies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Permaculture Institute</p>
                <p className="text-xs text-muted-foreground mt-1">Regenerative Agriculture</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Transition Network</p>
                <p className="text-xs text-muted-foreground mt-1">Community Resilience</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Biomimicry Institute</p>
                <p className="text-xs text-muted-foreground mt-1">Nature-Inspired Design</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Game B Community</p>
                <p className="text-xs text-muted-foreground mt-1">Cultural Evolution</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Regen Network</p>
                <p className="text-xs text-muted-foreground mt-1">Regenerative Finance</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Open Source Ecology</p>
                <p className="text-xs text-muted-foreground mt-1">Open Technology</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold text-center mb-8">Technology Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="h-20 w-20 mx-auto mb-4 relative">
                  <Image
                    src="/ethereum.png"
                    alt="Ethereum"
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-2">Ethereum Foundation</h4>
                <p className="text-sm text-muted-foreground">
                  Decentralized infrastructure supporting regenerative economy and community governance.
                </p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Holochain</h4>
                <p className="text-sm text-muted-foreground">
                  Peer-to-peer applications for regenerative community coordination and resource sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      <Footer />
    </div>
  );
}

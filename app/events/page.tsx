import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Moon, Sun, Users, BookOpen, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner3.jpg"
            alt="Community celebration and events"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-balance mb-6">
              Events & <span className="text-primary">Lunation Protocol</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-balance">
              Join our monthly co-creation rhythm and seasonal celebrations aligned with natural cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Lunation Protocol Explainer */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
                What is the Lunation Protocol?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                The Lunation Protocol is our monthly rhythm for co-creation and community building, 
                synchronized with the natural cycles of the moon. Each month is divided into three phases 
                that guide our collective work and celebration.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Moon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">New Moon - Planning Phase</h3>
                    <p className="text-sm text-muted-foreground">Set intentions, plan projects, and gather community input for the month ahead.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Sun className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Full Moon - Action Phase</h3>
                    <p className="text-sm text-muted-foreground">Implement projects, build community, and work on regenerative initiatives.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Waning Moon - Reflection Phase</h3>
                    <p className="text-sm text-muted-foreground">Celebrate achievements, share learnings, and prepare for the next cycle.</p>
                  </div>
                </div>
              </div>
              <Button asChild className="mt-6">
                <Link href="/library/lunation-protocol">
                  Read Full Protocol Guide
                  <BookOpen className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-lg overflow-hidden h-80">
                <Image
                  src="/transition.jpg"
                  alt="Lunation timeline and moon phases"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Lunation */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Current Lunation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                              We&apos;re currently in the Action Phase of Lunation #29
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Moon className="h-5 w-5 mr-2" />
                  Phase
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">Action</p>
                <p className="text-sm text-muted-foreground">Full Moon Phase</p>
                <div className="mt-4">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">60% complete</p>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">September 15-30, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">Current cycle</p>
                <div className="text-sm">
                  <p>• Planning: Sep 1-14</p>
                  <p>• Action: Sep 15-30</p>
                  <p>• Reflection: Oct 1-7</p>
                </div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Users className="h-5 w-5 mr-2" />
                  Participation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary mb-2">1,247</p>
                <p className="text-sm text-muted-foreground mb-4">Active participants</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Projects</span>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Events</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Communities</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our community events, workshops, and seasonal celebrations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/banner1.jpg"
                  alt="Autumn Equinox Celebration"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Autumn Equinox Celebration
                </CardTitle>
                <CardDescription>Seasonal celebration</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">September 22, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Celebrate the harvest and prepare for winter with community rituals, 
                  local food sharing, and gratitude ceremonies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-3 w-3" />
                    <span>2:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-3 w-3" />
                    <span>Liminal Village, Tuscany</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Register Now
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/permaculture.jpg"
                  alt="Permaculture Design Workshop"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Permaculture Design Workshop
                </CardTitle>
                <CardDescription>Skill building</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">October 5-7, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn regenerative design principles, practical permaculture techniques, 
                  and community-scale planning.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-3 w-3" />
                    <span>3-day intensive</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-3 w-3" />
                    <span>Waldorf Commons Hub</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="/earthship.jpg"
                  alt="Natural Building Workshop"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Natural Building Workshop
                </CardTitle>
                <CardDescription>Hands-on learning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">October 15-21, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Build with clay, straw, and natural materials. Learn sustainable 
                  construction techniques and traditional building methods.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-3 w-3" />
                    <span>7-day workshop</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-3 w-3" />
                    <span>Liminal Village</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Join Waitlist
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Community Planning Meeting
                </CardTitle>
                <CardDescription>Lunation #30 Planning</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">October 8, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Join the planning phase for the next lunation. Share ideas, 
                  propose projects, and help shape our community&apos;s direction.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-3 w-3" />
                    <span>7:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-3 w-3" />
                    <span>Online + Local Hubs</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  RSVP
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Regenerative Finance Meetup
                </CardTitle>
                <CardDescription>Network event</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">October 12, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore innovative financial models for regenerative projects. 
                  Learn about receipt tokens, mutual credit, and community currencies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-3 w-3" />
                    <span>6:00 PM - 8:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-3 w-3" />
                    <span>Various Locations</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Find Local Event
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Lunation Reflection Circle
                </CardTitle>
                <CardDescription>Community sharing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">October 1, 2025</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Celebrate the completion of Lunation #29. Share stories, 
                  learnings, and achievements from the past month.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-3 w-3" />
                    <span>8:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-3 w-3" />
                    <span>Global Online</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Join Circle
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/events/calendar">
                View Full Calendar
                <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seasonal Celebrations */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Seasonal Celebrations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Honor the natural cycles with our community celebrations throughout the year.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Spring Equinox</CardTitle>
                <CardDescription>March 20-21</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Celebrate new beginnings, plant seeds, and set intentions for the growing season.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Summer Solstice</CardTitle>
                <CardDescription>June 20-21</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Honor the peak of light and abundance with community feasts and gratitude ceremonies.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Autumn Equinox</CardTitle>
                <CardDescription>September 22-23</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Celebrate the harvest, share abundance, and prepare for the winter season.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Winter Solstice</CardTitle>
                <CardDescription>December 21-22</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Honor the return of light, reflect on the year, and plan for renewal.
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
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
              Get Involved in Our Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you want to join a lunation cycle, attend events, or host your own 
              community gathering, there are many ways to participate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/join">
                  Join Newsletter
                  <Users className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/network">
                  Find Local Events
                  <MapPin className="ml-2 h-4 w-4" />
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


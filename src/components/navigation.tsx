"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, MapPin, Users } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import SectionNavigation from "@/components/SectionNavigation";
import { useEffect, useState } from "react";

interface NavigationProps {
  sections?: Array<{ id: string; label: string }>;
  autoDetectSections?: boolean;
}

const Navigation = ({ sections: propSections, autoDetectSections = true }: NavigationProps = {}) => {
  const [detectedSections, setDetectedSections] = useState<Array<{ id: string; label: string }>>([]);

  // Auto-detect sections on the page
  useEffect(() => {
    if (!autoDetectSections) return;

    const detectSections = () => {
      const sectionElements = document.querySelectorAll('section[id]');
      const sections = Array.from(sectionElements).map(section => {
        const id = section.id;
        // Try to find a heading within the section for the label
        const heading = section.querySelector('h1, h2, h3');
        let label = id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

        if (heading) {
          const headingText = heading.textContent?.trim();
          if (headingText && headingText.length > 0 && headingText.length < 30) {
            label = headingText;
          }
        }

        return { id, label };
      }).filter(section => section.id !== ''); // Filter out empty IDs

      setDetectedSections(sections);
    };

    // Initial detection
    detectSections();

    // Re-detect on navigation changes (for SPA routing)
    const observer = new MutationObserver(detectSections);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [autoDetectSections]);

  // Use prop sections if provided, otherwise use detected sections
  const sections = propSections || detectedSections;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Section Navigation - Left */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 relative">
                <Image
                  src="/logotransparent.png"
                  alt="Regenerativa Logo"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="font-display text-xl font-bold">Regenerativa</span>
            </Link>
            {sections && sections.length > 0 && (
              <SectionNavigation
                position="inline"
                sections={sections}
                className="flex"
              />
            )}
          </div>

          {/* Main Navigation - Center */}
          <div className="hidden md:flex items-center space-x-6">
            {/* About & Vision */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                  About
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/about">Our Vision</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/library">Library</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Network & Communities */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                  Network
                  <MapPin className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/network">Interactive Map</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/network/nodes">Active Nodes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/network/cells">Fractal Communities</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sites/fornace">Fornace Site</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sites/regenerative-village">Regenerative Village</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Participation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                  Participate
                  <Users className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/join">Join Community</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contribute">Contribute Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/stake">Stake Funds</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/visit">Visit Sites</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Events & Learning */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium hover:text-primary">
                  Learn
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem asChild>
                  <Link href="/events">Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/library">Resources</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact">Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Language Selector - Top Right */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-primary/5 hover:bg-primary/10 rounded-md border border-primary/20 transition-colors cursor-pointer">
              <span className="text-sm">🌐</span>
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
                {/* About Section */}
                <div className="px-2 py-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">About</p>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/about">Our Vision</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/library">Library</Link>
                </DropdownMenuItem>

                {/* Network Section */}
                <div className="px-2 py-1 mt-2 border-t">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Network</p>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/network">Interactive Map</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/network/nodes">Active Nodes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/network/cells">Fractal Communities</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sites/fornace">Fornace Site</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/sites/regenerative-village">Regenerative Village</Link>
                </DropdownMenuItem>

                {/* Participate Section */}
                <div className="px-2 py-1 mt-2 border-t">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Participate</p>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/join">Join Community</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contribute">Contribute Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/stake">Stake Funds</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/visit">Visit Sites</Link>
                </DropdownMenuItem>

                {/* Learn Section */}
                <div className="px-2 py-1 mt-2 border-t">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Learn</p>
                </div>
                <DropdownMenuItem asChild>
                  <Link href="/events">Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/library">Resources</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact">Contact Us</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Language Selector */}
            <div className="ml-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


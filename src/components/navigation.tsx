"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, MapPin, Users } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";

const Navigation = () => {

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  Network
                  <MapPin className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/network">Interactive Map</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/network/nodes">Active Nodes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/network/cells">Fractal Communities</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-sm font-medium">
                  Get Involved
                  <Users className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/join">Join Newsletter</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contribute">Contribute Skills</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/stake">Stake Funds</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/visit">Visit Liminal Village</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
              Events
            </Link>
            <Link href="/library" className="text-sm font-medium transition-colors hover:text-primary">
              Library
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button asChild>
              <Link href="/join">Join</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/network">Network</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/join">Join</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contribute">Contribute</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/stake">Stake</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/visit">Visit</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/events">Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/library">Library</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


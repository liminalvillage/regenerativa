"use client";

import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "@/components/LanguageSelector";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left */}
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
          </div>

          {/* Language Selector - Top Right */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2 px-3 py-1 bg-primary/5 hover:bg-primary/10 rounded-md border border-primary/20 transition-colors cursor-pointer">
              <span className="text-sm">🌐</span>
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Language Selector */}
          <div className="md:hidden">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslationSimple";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { t } = useTranslation();

  const navGroups = [
    {
      label: t("nav.vision"),
      key: "vision",
      items: [
        { href: "/theos", label: t("nav.theos") },
        { href: "/holons", label: t("nav.holons") },
        { href: "/flow", label: t("nav.flow") },
        { href: "/regenerative-business", label: t("nav.regenBusiness") },
      ],
    },
    {
      label: t("nav.projects"),
      key: "projects",
      items: [
        { href: "/agrosphere", label: t("nav.agrosphere") },
        { href: "/bootstrap", label: t("nav.bootstrapNetwork") },
        { href: "/network", label: t("nav.networkMap") },
      ],
    },
    {
      label: t("nav.sites"),
      key: "sites",
      items: [
        { href: "/sites/liminalvillage", label: t("nav.liminalVillage") },
        { href: "/sites/brickfactory", label: t("nav.brickFactory") },
        { href: "/sites/casaselva", label: t("nav.casaSelva") },
      ],
    },
    {
      label: t("nav.participate"),
      key: "participate",
      items: [
        { href: "/events", label: t("nav.events") },
        { href: "/join", label: t("nav.join") },
        { href: "/contribute", label: t("nav.contribute") },
        { href: "/visit", label: t("nav.visit") },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="h-8 w-8 relative">
              <Image
                src="/logotransparent.png"
                alt="ReGenerativa Logo"
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <span className="font-display text-xl font-bold">ReGenerativa</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navGroups.map((group) => (
              <div
                key={group.key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(group.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
                  <span>{group.label}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                {openDropdown === group.key && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="bg-background border rounded-lg shadow-lg py-2 min-w-[180px]">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1 bg-primary/5 hover:bg-primary/10 rounded-md border border-primary/20 transition-colors cursor-pointer">
              <span className="text-sm">🌐</span>
              <LanguageSelector />
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navGroups.map((group) => (
              <div key={group.key}>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {group.label}
                </p>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-2 border-t">
              <div className="flex items-center space-x-2 px-3 py-2">
                <span className="text-sm">🌐</span>
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

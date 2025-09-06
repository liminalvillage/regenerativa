"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

interface Section {
  id: string;
  label: string;
}

interface SectionNavigationProps {
  sections: Section[];
  className?: string;
  position?: "topbar" | "overlay" | "inline";
}

const SectionNavigation = ({ sections, className = "", position = "topbar" }: SectionNavigationProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? "down" : "up";

      // Show/hide navigation based on scroll direction
      if (position === "overlay") {
        setIsVisible(scrollDirection === "up" || currentScrollY < 100);
      }

      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element && element.offsetTop <= currentScrollY + 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, position, sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navigation
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const baseClasses = "transition-all duration-300 ease-in-out";
  const positionClasses = position === "overlay"
    ? `fixed top-20 left-1/2 transform -translate-x-1/2 z-40 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`
    : position === "inline"
    ? "flex items-center"
    : "sticky top-16 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b";

  if (position === "inline") {
    return (
      <div className={`${baseClasses} ${positionClasses} ${className} ml-2`}>
        <div className="flex items-center space-x-1 bg-white/95 dark:bg-gray-900/95 border border-gray-200 dark:border-gray-700 rounded-full px-2 py-1 shadow-sm">
          {/* Section navigation buttons */}
          {sections.slice(0, 5).map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(section.id)}
              className={`px-2 py-1 text-xs font-medium rounded-full transition-colors ${
                activeSection === section.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "hover:bg-primary/10 text-foreground/80 hover:text-foreground"
              }`}
            >
              {section.label}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${positionClasses} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3">
          <div className="flex items-center space-x-1 bg-muted/50 rounded-full px-4 py-2">
            {/* Scroll to top button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
              title="Scroll to top"
            >
              <ChevronUp className="h-4 w-4" />
            </Button>

            {/* Section navigation buttons */}
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "hover:bg-primary/10 text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.label}
              </Button>
            ))}

            {/* Scroll to bottom button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToBottom}
              className="h-8 w-8 p-0 rounded-full hover:bg-primary/10"
              title="Scroll to bottom"
            >
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionNavigation;

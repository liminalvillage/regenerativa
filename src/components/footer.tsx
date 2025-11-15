import Link from "next/link";
import { Button } from "@/components/ui/button";

import LanguageSelector from "@/components/LanguageSelector";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">R</span>
              </div>
              <span className="font-display text-xl font-bold">ReGenerativa</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building EcoCivilization 2030 through integral regeneration and bioregional networks.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/join">Join Movement</Link>
              </Button>
            </div>
          </div>

          {/* Framework */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Framework</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/theos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Theos Protocol
                </Link>
              </li>
              <li>
                <Link href="/holons" className="text-muted-foreground hover:text-foreground transition-colors">
                  Holon Structure
                </Link>
              </li>
              <li>
                <Link href="/regenerative-business" className="text-muted-foreground hover:text-foreground transition-colors">
                  Business Model
                </Link>
              </li>
              <li>
                <Link href="/flow" className="text-muted-foreground hover:text-foreground transition-colors">
                  Flow Token
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Projects</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/agrosphere" className="text-muted-foreground hover:text-foreground transition-colors">
                  Agrosphere Tech
                </Link>
              </li>
              <li>
                <Link href="/network" className="text-muted-foreground hover:text-foreground transition-colors">
                  Network Map
                </Link>
              </li>
              <li>
                <Link href="/bootstrap" className="text-muted-foreground hover:text-foreground transition-colors">
                  Bootstrap Network
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Participate</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/join" className="text-muted-foreground hover:text-foreground transition-colors">
                  Join Network
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events & Lunations
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-muted-foreground hover:text-foreground transition-colors">
                  Visit Sites
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 ReGenerativa APS. All rights reserved.
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


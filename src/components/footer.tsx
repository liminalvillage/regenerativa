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
              <span className="font-display text-xl font-bold">Regenerativa</span>
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Network</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/network" className="text-muted-foreground hover:text-foreground transition-colors">
                  Interactive Map
                </Link>
              </li>
              <li>
                <Link href="/network/nodes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Active Nodes
                </Link>
              </li>
              <li>
                <Link href="/network/cells" className="text-muted-foreground hover:text-foreground transition-colors">
                  Fractal Communities
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
            <h3 className="font-display font-semibold">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/join" className="text-muted-foreground hover:text-foreground transition-colors">
                  Join Newsletter
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contribute Skills
                </Link>
              </li>
              <li>
                <Link href="/stake" className="text-muted-foreground hover:text-foreground transition-colors">
                  Stake Funds
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-muted-foreground hover:text-foreground transition-colors">
                  Visit Liminal Village
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link href="/library" className="text-muted-foreground hover:text-foreground transition-colors">
                  Library
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2025 Regenerativa APS. All rights reserved.
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


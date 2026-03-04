"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslationSimple";

const Footer = () => {
  const { t } = useTranslation();

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
              {t("footerSection.tagline")}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/join">{t("footerSection.joinMovement")}</Link>
              </Button>
            </div>
          </div>

          {/* Framework */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">{t("footerSection.framework")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/theos" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.theosProtocol")}
                </Link>
              </li>
              <li>
                <Link href="/holons" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.holonStructure")}
                </Link>
              </li>
              <li>
                <Link href="/regenerative-business" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.businessModel")}
                </Link>
              </li>
              <li>
                <Link href="/flow" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.flowToken")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">{t("footerSection.projects")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/agrosphere" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.agrosphereTech")}
                </Link>
              </li>
              <li>
                <Link href="/network" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.networkMap")}
                </Link>
              </li>
              <li>
                <Link href="/bootstrap" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.bootstrapNetwork")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.aboutUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold">{t("footerSection.participate")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/join" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.joinNetwork")}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.eventsLunations")}
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.contribute")}
                </Link>
              </li>
              <li>
                <Link href="/visit" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t("footerSection.visitSites")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-muted-foreground">
            {t("footerSection.copyright")}
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              {t("footerSection.terms")}
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              {t("footerSection.privacy")}
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
              {t("footerSection.cookies")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

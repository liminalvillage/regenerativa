import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Regenerativa - EcoCivilization 2030",
  description: "A global initiative for integral regeneration. Join the movement to build sustainable, resilient communities through bioregional networks and regenerative practices.",
  keywords: ["regeneration", "sustainability", "ecocivilization", "bioregional", "community", "resilience"],
  authors: [{ name: "Regenerativa APS" }],
  openGraph: {
    title: "Regenerativa - EcoCivilization 2030",
    description: "A global initiative for integral regeneration. Join the movement to build sustainable, resilient communities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regenerativa - EcoCivilization 2030",
    description: "A global initiative for integral regeneration. Join the movement to build sustainable, resilient communities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
        {/* <GoogleTranslate /> */}
      </body>
    </html>
  );
}

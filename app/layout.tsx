import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Cinzel, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import { site, siteUrl } from "@/lib/site";

const serif = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Curating Luxury, Crafting Experiences`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "luxury production",
    "creative consulting",
    "private experiences",
    "wellness",
    "property management",
    "brand collaborations"
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Curating Luxury, Crafting Experiences`,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Curating Luxury, Crafting Experiences`,
    description: site.description,
    images: [site.ogImage]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: siteUrl
  }
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-blood focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <SmoothScroll />
        <JsonLd />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

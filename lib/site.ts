/**
 * Central site configuration. Values that should be configured per-deployment
 * are read from environment variables with safe, public-friendly fallbacks so
 * the site always builds and renders, even before real business details are set.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://whiterabbitproductions.com";

export const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@whiterabbitproductions.com";

export const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL || "";

export const calLink = process.env.NEXT_PUBLIC_CAL_LINK || "";

export const site = {
  name: "White Rabbit Productions",
  shortName: "White Rabbit",
  description:
    "A luxury-minded creative and consulting house — production, consulting, wellness, property, and bespoke experiences, executed with discretion.",
  url: siteUrl,
  email: contactEmail,
  ogImage: "/assets/scene-brand.png",
  locale: "en_US"
};

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Experiences", href: "/experiences" },
  { label: "Book", href: "/book" },
  { label: "Contact", href: "/contact" }
];

export const footerNav: NavItem[] = [
  { label: "Shop", href: "/shop" },
  { label: "Return Policy", href: "/return-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Accessibility", href: "/accessibility" }
];

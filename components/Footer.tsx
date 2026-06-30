import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import Logo from "./Logo";
import { footerNav, contactEmail, instagramUrl } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-silver/10 bg-ink-soft">
      <div className="container-wr py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 text-[13px] leading-relaxed text-ivory/55">
              A private creative and consulting house. Production, consulting,
              wellness, property, and bespoke experiences — executed with
              discretion.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3">
            <span className="eyebrow mb-1">More</span>
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[12px] uppercase tracking-brand text-ivory/65 transition-colors hover:text-ivory"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="eyebrow mb-1">Connect</span>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-brand text-ivory/65 transition-colors hover:text-ivory"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email
            </a>
            {instagramUrl ? (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-brand text-ivory/65 transition-colors hover:text-ivory"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-brand text-ivory/30">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </span>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-silver/10 pt-8 text-[11px] uppercase tracking-brand text-ivory/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} White Rabbit Productions</span>
          <span>Matte Black · Brushed Silver · Blood Red</span>
        </div>
      </div>
    </footer>
  );
}

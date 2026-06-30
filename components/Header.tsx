"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { primaryNav } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-silver/10 bg-ink/85 backdrop-blur-md"
          : "bg-gradient-to-b from-ink/90 to-transparent"
      }`}
    >
      <div className="container-wr flex h-20 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[11px] uppercase tracking-brand transition-colors hover:text-ivory ${
                  active ? "text-ivory" : "text-ivory/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="h-6 w-6 text-ivory" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6 text-ivory" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!open} className="md:hidden">
        <nav
          aria-label="Mobile"
          className="flex h-[calc(100vh-5rem)] flex-col gap-2 border-t border-silver/10 bg-ink px-6 py-10"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-silver/10 py-4 font-serif text-2xl text-ivory/90"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import type { Service } from "@/lib/content";

export default function ServiceAccordion({ services }: { services: Service[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(services[0]?.slug ?? null);

  return (
    <div className="border-t border-silver/10">
      {services.map((service, index) => {
        const isOpen = openSlug === service.slug;
        const panelId = `service-panel-${service.slug}`;
        const buttonId = `service-button-${service.slug}`;
        return (
          <div key={service.slug} className="border-b border-silver/10">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenSlug(isOpen ? null : service.slug)}
                className="flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <span className="flex items-baseline gap-5">
                  <span className="text-[11px] tracking-wide2 text-blood-bright">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl text-ivory sm:text-3xl">
                    {service.name}
                  </span>
                </span>
                {isOpen ? (
                  <Minus className="h-5 w-5 shrink-0 text-silver" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5 shrink-0 text-silver" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-9"
            >
              <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="max-w-2xl">
                  <p className="text-[15px] leading-[1.9] text-ivory/75">
                    {service.detail}
                  </p>
                  <p className="mt-4 text-[13px] text-ivory/45">
                    <span className="uppercase tracking-wide2 text-ivory/35">
                      For
                    </span>{" "}
                    {service.forWhom}
                  </p>
                </div>
                <Link
                  href={`/book?service=${encodeURIComponent(service.name)}`}
                  className="btn-ghost whitespace-nowrap"
                >
                  Inquire
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

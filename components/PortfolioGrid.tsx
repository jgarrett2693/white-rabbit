"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, portfolioCategories } from "@/lib/content";

export default function PortfolioGrid() {
  const [filter, setFilter] =
    useState<(typeof portfolioCategories)[number]>("All");

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-3"
      >
        {portfolioCategories.map((category) => {
          const active = filter === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(category)}
              className={`border px-5 py-2 text-[11px] uppercase tracking-wide2 transition-colors ${
                active
                  ? "border-blood bg-blood text-ivory"
                  : "border-silver/20 text-ivory/60 hover:border-silver/50 hover:text-ivory"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-px border border-silver/10 bg-silver/10 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="group relative block overflow-hidden bg-ink"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-[10px] uppercase tracking-wide2 text-blood-bright">
                {project.category} · {project.year}
              </p>
              <h3 className="mt-2 flex items-center gap-2 font-serif text-2xl text-ivory">
                {project.title}
                <ArrowUpRight
                  className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
              </h3>
              <p className="mt-2 text-[13px] text-ivory/60">{project.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { projects } from "@/lib/content";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Case Study" };
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image }]
    }
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden pt-20">
        <Image
          src={project.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 [filter:brightness(0.6)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20"
        />
        <div className="container-wr relative z-10 py-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-ivory/60 hover:text-ivory"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All work
          </Link>
          <p className="eyebrow mt-8">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container-wr grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-8">
            <h2 className="font-serif text-2xl text-ivory">Overview</h2>
            <p className="mt-6 text-[16px] leading-[1.9] text-ivory/75">
              {project.overview}
            </p>
            <p className="mt-6 text-[14px] italic leading-relaxed text-ivory/40">
              Placeholder case study. Replace with approved details, imagery, and
              outcomes before publishing.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-4">
            <h2 className="font-serif text-2xl text-ivory">Scope</h2>
            <ul className="mt-6 space-y-3">
              {project.scope.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[14px] text-ivory/70"
                >
                  <span aria-hidden="true" className="text-blood-bright">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have a project in mind?"
        cta={{ label: "Inquire Within", href: "/book" }}
      />
    </>
  );
}

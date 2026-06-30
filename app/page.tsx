import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SceneHero from "@/components/SceneHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { services, projects, experiences } from "@/lib/content";

export default function HomePage() {
  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);
  const featuredExperiences = experiences.slice(0, 2);

  return (
    <>
      <SceneHero
        variant="full"
        priority
        scrollCue
        eyebrow="White Rabbit Productions"
        title={"Curating Luxury,\nCrafting Experiences"}
        body="Exclusive wellness. Strategic consulting. Bespoke experiences."
        cta={{ label: "Inquire Within", href: "/book" }}
        secondaryCta={{ label: "The House", href: "/about" }}
        image="/assets/scene-home.png"
        imageAlt="A white rabbit walking a darkened corridor toward a warm open door."
      />

      {/* 1. The House */}
      <section className="section">
        <div className="container-wr grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionHeading
            eyebrow="The House"
            title="Luxury should feel discovered, not announced."
            body="White Rabbit Productions is a private creative and consulting house. We bring production, consulting, wellness, property, and curated experiences together under one quiet, cinematic identity — built for clients who value discretion and taste."
          />
          <Reveal delay={0.1} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/assets/scene-moodboard.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-80"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"
            />
          </Reveal>
        </div>
      </section>

      {/* 2. Services preview */}
      <section className="section">
        <div className="container-wr">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Services" title="A selective practice." />
            <Link href="/services" className="btn-ghost">
              All services
            </Link>
          </div>
          <div className="mt-14 grid gap-px border border-silver/10 bg-silver/10 sm:grid-cols-3">
            {featuredServices.map((service, i) => (
              <Reveal
                as="article"
                key={service.slug}
                delay={i * 0.08}
                className="bg-ink p-8 sm:p-10"
              >
                <span className="text-[11px] tracking-wide2 text-blood-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-7 font-serif text-2xl text-ivory">
                  {service.name}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-ivory/60">
                  {service.summary}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured experiences */}
      <section className="section">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Experiences"
            title="Moments built with intention."
            body="Private, polished, atmospheric. Designed around access, presence, and discretion."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {featuredExperiences.map((exp, i) => (
              <Reveal
                key={exp.name}
                delay={i * 0.08}
                className="border border-silver/10 bg-ink-soft p-8 sm:p-10"
              >
                <h3 className="font-serif text-2xl text-ivory">{exp.name}</h3>
                <p className="mt-4 text-[14px] leading-[1.8] text-ivory/60">
                  {exp.body}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/experiences" className="btn-ghost">
              Explore experiences
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Portfolio preview */}
      <section className="section">
        <div className="container-wr">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Portfolio" title="Selected work." />
            <Link href="/portfolio" className="btn-ghost">
              View all
            </Link>
          </div>
          <div className="mt-14 grid gap-px border border-silver/10 bg-silver/10 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal as="article" key={project.slug} delay={i * 0.08} className="bg-ink">
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group relative block"
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
                      {project.category}
                    </p>
                    <h3 className="mt-2 flex items-center gap-2 font-serif text-xl text-ivory">
                      {project.title}
                      <ArrowUpRight
                        className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-hidden="true"
                      />
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Booking CTA */}
      <CtaBand
        title="Tell us what you have in mind."
        body="Every engagement begins with a quiet conversation. Share your intention and we will be in touch."
        cta={{ label: "Inquire Within", href: "/book" }}
      />
    </>
  );
}

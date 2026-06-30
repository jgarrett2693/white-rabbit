import type { Metadata } from "next";
import SceneHero from "@/components/SceneHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { experiences } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Private, polished, atmospheric experiences designed around discretion, access, wellness, and presence.",
  alternates: { canonical: "/experiences" }
};

export default function ExperiencesPage() {
  return (
    <>
      <SceneHero
        eyebrow="Experiences"
        title={"Moments Built\nWith Intention"}
        body="Private, polished, atmospheric experiences designed around discretion, access, and presence."
        image="/assets/scene-moodboard.png"
        imageAlt="A private lounge beside black water under moonlight."
        priority
      />

      <section className="section">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Offerings"
            title="Curated, concierge-style, and entirely private."
            body="From a single evening to an extended retreat, we design and quietly manage every detail."
          />
          <div className="mt-14 grid gap-px border border-silver/10 bg-silver/10 sm:grid-cols-2">
            {experiences.map((exp, i) => (
              <Reveal
                as="article"
                key={exp.name}
                delay={i * 0.07}
                className="bg-ink p-8 sm:p-12"
              >
                <span className="text-[11px] tracking-wide2 text-blood-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-serif text-2xl text-ivory sm:text-3xl">
                  {exp.name}
                </h3>
                <p className="mt-4 max-w-md text-[14px] leading-[1.85] text-ivory/60">
                  {exp.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Bespoke"
        title="Have something specific in mind?"
        body="Tell us the intention. We will design the rest, and manage it with discretion."
        cta={{ label: "Request an Experience", href: "/book" }}
      />
    </>
  );
}

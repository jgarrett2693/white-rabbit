import type { Metadata } from "next";
import SceneHero from "@/components/SceneHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "White Rabbit Productions is a luxury-minded creative and consulting house built for clients who value discretion, taste, and thoughtful execution.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <>
      <SceneHero
        eyebrow="About"
        title={"Discretion, Vision,\nand Modern Refinement"}
        body="A private creative house built for clients who value privacy, taste, and thoughtful execution."
        image="/assets/scene-moodboard.png"
        imageAlt="A white rabbit overlooking still black water beneath a quiet mountain sky."
        priority
      />

      <section className="section">
        <div className="container-wr grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Philosophy" title="A quieter kind of luxury." />
          </div>
          <Reveal className="space-y-6 lg:col-span-7">
            <p className="text-[16px] leading-[1.9] text-ivory/75">
              White Rabbit Productions is a luxury-minded creative and consulting
              house built for clients who value discretion, taste, wellness, and
              thoughtful execution. We work quietly and selectively, treating every
              engagement as something to be considered rather than announced.
            </p>
            <p className="text-[16px] leading-[1.9] text-ivory/75">
              Our work spans production, consulting, wellness, property, brand
              collaborations, and bespoke experiences — held together by a single
              point of view: restraint over noise, and detail as the work itself.
            </p>
            <p className="text-[16px] leading-[1.9] text-ivory/75">
              We are not an agency, and we are not for everyone. We are a small,
              deliberate house — and that is by design.
            </p>
          </Reveal>
        </div>
      </section>

      {/* House note placeholder */}
      <section className="section">
        <div className="container-wr">
          <Reveal className="mx-auto max-w-3xl border-l-2 border-blood pl-8">
            <p className="font-serif text-2xl leading-relaxed text-ivory/90 sm:text-3xl">
              &ldquo;We build experiences the way we build trust — carefully,
              privately, and without shortcuts.&rdquo;
            </p>
            <p className="mt-6 text-[12px] uppercase tracking-wide2 text-ivory/45">
              The House · Founder note placeholder
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-wr">
          <SectionHeading eyebrow="Values" title="What we hold to." />
          <div className="mt-14 grid gap-px border border-silver/10 bg-silver/10 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, i) => (
              <Reveal
                as="article"
                key={value.name}
                delay={i * 0.06}
                className="bg-ink p-8"
              >
                <h3 className="font-serif text-xl text-ivory">{value.name}</h3>
                <p className="mt-4 text-[13px] leading-[1.75] text-ivory/60">
                  {value.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Begin"
        title="If this sounds like the right fit, begin a conversation."
        cta={{ label: "Inquire Within", href: "/book" }}
      />
    </>
  );
}

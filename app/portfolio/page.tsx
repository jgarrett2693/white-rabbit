import type { Metadata } from "next";
import SceneHero from "@/components/SceneHero";
import SectionHeading from "@/components/SectionHeading";
import PortfolioGrid from "@/components/PortfolioGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected projects, visual direction, properties, collaborations, and case studies from White Rabbit Productions.",
  alternates: { canonical: "/portfolio" }
};

export default function PortfolioPage() {
  return (
    <>
      <SceneHero
        eyebrow="Portfolio"
        title={"A Curated Body\nof Work"}
        body="Selected projects across production, properties, brand, experiences, and consulting."
        image="/assets/scene-brand.png"
        imageAlt="A dark studio with a director's chair beneath a single spotlight."
        priority
      />

      <section className="section">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Selected Work"
            title="Filtered by discipline."
            body="A representative selection. Full case studies are shared privately on request."
          />
          <div className="mt-14">
            <PortfolioGrid />
          </div>
        </div>
      </section>

      <CtaBand
        title="Interested in working together?"
        cta={{ label: "Inquire Within", href: "/book" }}
      />
    </>
  );
}

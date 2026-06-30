import type { Metadata } from "next";
import SceneHero from "@/components/SceneHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceAccordion from "@/components/ServiceAccordion";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Production, consulting, wellness, property management, brand collaborations, and bespoke experiences — executed quietly under one refined identity.",
  alternates: { canonical: "/services" }
};

export default function ServicesPage() {
  return (
    <>
      <SceneHero
        eyebrow="Services"
        title={"Selective Services,\nExecuted Quietly"}
        body="A focused practice across production, consulting, wellness, property, collaborations, and bespoke experiences."
        image="/assets/scene-system.png"
        imageAlt="A quiet executive setting overlooking a city skyline at dusk."
        priority
      />

      <section className="section">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Practice"
            title="Six disciplines, one standard."
            body="Each engagement is shaped to its purpose. Select a discipline to learn more, then inquire when the fit feels right."
          />
          <div className="mt-14">
            <ServiceAccordion services={services} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure where your project fits?"
        body="Tell us the intention and the constraints. We will point you to the right starting place."
        cta={{ label: "Inquire Within", href: "/book" }}
      />
    </>
  );
}

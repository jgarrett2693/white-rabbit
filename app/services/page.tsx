import SceneHero from "@/components/SceneHero";
import { pages } from "@/lib/pages";

const page = pages.find((p) => p.slug === "services")!;

export default function Page() {
  return (
    <>
      <SceneHero {...page} />

      <section className="section">
        <div className="grid">
          <div className="card"><span>01</span><h3>Production</h3><p>Creative direction, media, content, and polished brand visuals.</p></div>
          <div className="card"><span>02</span><h3>Consulting</h3><p>Business, brand, hospitality, and client experience strategy.</p></div>
          <div className="card"><span>03</span><h3>Property Management</h3><p>Curated property presentation, guest flow, operations, and premium positioning.</p></div>
          <div className="card"><span>04</span><h3>Wellness</h3><p>Exclusive wellness offerings designed with privacy and high-touch service.</p></div>
          <div className="card"><span>05</span><h3>Collaborations</h3><p>Selective partnerships, limited releases, and brand-aligned projects.</p></div>
          <div className="card"><span>06</span><h3>Bespoke</h3><p>Custom requests, private experiences, and refined execution.</p></div>
        </div>
      </section>

    </>
  );
}

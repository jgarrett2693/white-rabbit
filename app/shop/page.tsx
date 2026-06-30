import SceneHero from "@/components/SceneHero";
import { pages } from "@/lib/pages";

const page = pages.find((p) => p.slug === "shop")!;

export default function Page() {
  return (
    <>
      <SceneHero {...page} />

      <section className="section">
        <p className="eyebrow">White Rabbit Standard</p>
        <h2>Every detail should feel intentional.</h2>
        <p className="lede">This page is structured so Claude Code can expand it with finalized copy, forms, galleries, booking modules, or CMS-powered content while preserving the brand system.</p>
      </section>

    </>
  );
}

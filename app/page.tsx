import SceneHero from "@/components/SceneHero";
import { pages } from "@/lib/pages";

const home = pages[0];

export default function HomePage() {
  return (
    <>
      <SceneHero {...home} large />
      <section className="section">
        <p className="eyebrow">The House</p>
        <h2>Luxury should feel discovered, not announced.</h2>
        <p className="lede">
          White Rabbit Productions brings together production, consulting, wellness, property, and curated experiences through one cinematic luxury identity.
        </p>
      </section>
      <section className="section">
        <div className="grid">
          <div className="card"><span>01</span><h3>Production</h3><p>Visual direction, content, media, creative concepts, and brand presentation.</p></div>
          <div className="card"><span>02</span><h3>Consulting</h3><p>Strategic thinking for brand, hospitality, property, lifestyle, and client experience.</p></div>
          <div className="card"><span>03</span><h3>Experiences</h3><p>Private, polished moments designed around discretion, atmosphere, and taste.</p></div>
        </div>
      </section>
    </>
  );
}

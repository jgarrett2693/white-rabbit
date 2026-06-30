import { Fragment } from "react";

type Props = {
  eyebrow: string;
  title: string;
  lede: string;
  cta?: string;
  image: string;
  large?: boolean;
};

function TitleLines({ title }: { title: string }) {
  const parts = title.split("\n");
  return (
    <>
      {parts.map((t, i) => (
        <Fragment key={i}>
          {t}
          {i < parts.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

export default function SceneHero({ eyebrow, title, lede, cta, image, large = false }: Props) {
  return (
    <section className={large ? "hero" : "scene-page"}>
      <div className="bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="content">
        <p className="eyebrow">{eyebrow}</p>
        {large ? <h1><TitleLines title={title} /></h1> : <h2><TitleLines title={title} /></h2>}
        <p className="lede">{lede}</p>
        {cta && <a className="button" href="/contact">{cta}</a>}
      </div>
    </section>
  );
}

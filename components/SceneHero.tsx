type Props = {
  eyebrow: string;
  title: string;
  lede: string;
  cta?: string;
  image: string;
  large?: boolean;
};

export default function SceneHero({ eyebrow, title, lede, cta, image, large = false }: Props) {
  return (
    <section className={large ? "hero" : "scene-page"}>
      <div className="bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="content">
        <p className="eyebrow">{eyebrow}</p>
        {large ? <h1>{title.split("\n").map((t, i) => <>{t}{i < title.split("\n").length - 1 && <br />}</>)}</h1>
          : <h2>{title.split("\n").map((t, i) => <>{t}{i < title.split("\n").length - 1 && <br />}</>)}</h2>}
        <p className="lede">{lede}</p>
        {cta && <a className="button" href="/contact">{cta}</a>}
      </div>
    </section>
  );
}

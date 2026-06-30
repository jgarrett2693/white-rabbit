import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left"
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body && <p className={`lede mt-6 ${centered ? "mx-auto" : ""}`}>{body}</p>}
    </Reveal>
  );
}

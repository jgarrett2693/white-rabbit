import Link from "next/link";
import Reveal from "./Reveal";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  cta?: { label: string; href: string };
};

export default function CtaBand({
  eyebrow = "Inquire",
  title,
  body,
  cta = { label: "Inquire Within", href: "/book" }
}: CtaBandProps) {
  return (
    <section className="border-b border-silver/10 bg-ink-soft">
      <div className="container-wr py-24 text-center sm:py-32">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {body && <p className="lede mx-auto mt-6">{body}</p>}
          <Link href={cta.href} className="btn mt-10">
            {cta.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

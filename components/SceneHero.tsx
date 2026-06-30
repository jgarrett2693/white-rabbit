import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type SceneHeroProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  imageAlt?: string;
  align?: "left" | "center";
  /** Full-viewport home hero vs. shorter interior page header. */
  variant?: "full" | "page";
  priority?: boolean;
  scrollCue?: boolean;
};

function TitleLines({ title }: { title: string }) {
  const lines = title.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </Fragment>
      ))}
    </>
  );
}

/**
 * Cinematic scene header used across every page. Supports an eyebrow, multi-line
 * title, body copy, up to two CTAs, alignment, gradient overlay, and an optional
 * scroll cue. Replace the placeholder images with licensed stock later.
 */
export default function SceneHero({
  eyebrow,
  title,
  body,
  cta,
  secondaryCta,
  image,
  imageAlt = "",
  align = "left",
  variant = "page",
  priority = false,
  scrollCue = false
}: SceneHeroProps) {
  const isFull = variant === "full";
  const centered = align === "center";

  return (
    <section
      className={`relative flex w-full overflow-hidden ${
        isFull ? "min-h-screen" : "min-h-[70vh] pt-20"
      } ${centered ? "items-center" : "items-end md:items-center"}`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center opacity-70 [filter:brightness(0.62)_saturate(0.85)_contrast(1.05)]"
      />
      {/* Layered gradient overlays for depth and legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40"
      />

      <div className="container-wr relative z-10 py-28">
        <div
          className={`flex max-w-3xl flex-col ${
            centered ? "mx-auto items-center text-center" : "items-start"
          }`}
        >
          {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
          <h1
            className={`font-serif leading-[0.95] tracking-tight ${
              isFull
                ? "text-5xl sm:text-7xl lg:text-8xl"
                : "text-4xl sm:text-5xl lg:text-6xl"
            } [text-shadow:0_18px_60px_rgba(0,0,0,0.7)]`}
          >
            <TitleLines title={title} />
          </h1>
          {body && (
            <p className={`lede mt-7 ${centered ? "mx-auto" : ""}`}>{body}</p>
          )}
          {(cta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {cta && (
                <Link href={cta.href} className="btn">
                  {cta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="btn-ghost">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {scrollCue && (
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-silver/30 p-2">
            <span className="h-2 w-[2px] animate-scroll-cue rounded-full bg-silver" />
          </div>
        </div>
      )}
    </section>
  );
}

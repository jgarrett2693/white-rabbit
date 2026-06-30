import type { Metadata } from "next";
import Link from "next/link";
import SceneHero from "@/components/SceneHero";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { shopCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Apparel, candles, drinkware, and limited objects carrying the White Rabbit mark. Arriving soon.",
  alternates: { canonical: "/shop" }
};

export default function ShopPage() {
  return (
    <>
      <SceneHero
        eyebrow="Merchandise"
        title={"Objects With\na Signature"}
        body="Apparel, candles, drinkware, and limited pieces carrying the White Rabbit mark."
        image="/assets/scene-brand.png"
        imageAlt="A black marble table holding a few quiet, considered objects."
        priority
      />

      <section className="section">
        <div className="container-wr">
          <SectionHeading
            eyebrow="Coming Soon"
            title="A small, considered collection."
            body="Our first release is in production. Categories below are placeholders for the Shopify-powered storefront to follow."
          />

          <div className="mt-14 grid gap-px border border-silver/10 bg-silver/10 sm:grid-cols-2 lg:grid-cols-4">
            {shopCategories.map((category, i) => (
              <Reveal
                as="article"
                key={category.name}
                delay={i * 0.06}
                className="relative bg-ink p-8"
              >
                <span className="absolute right-6 top-6 text-[10px] uppercase tracking-wide2 text-ivory/30">
                  Soon
                </span>
                <h3 className="mt-2 font-serif text-2xl text-ivory">
                  {category.name}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.75] text-ivory/60">
                  {category.body}
                </p>
                {/* Shopify-ready placeholder: product grid mounts here */}
                <div
                  aria-hidden="true"
                  className="mt-8 flex h-px w-full bg-silver/10"
                />
                <p className="mt-4 text-[11px] uppercase tracking-wide2 text-ivory/25">
                  Storefront placeholder
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6">
            <Link href="/book" className="btn">
              Join the List
            </Link>
            <Link
              href="/return-policy"
              className="text-[12px] uppercase tracking-brand text-ivory/60 hover:text-ivory"
            >
              Return Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

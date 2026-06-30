import type { Metadata } from "next";
import SceneHero from "@/components/SceneHero";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import CalEmbed from "@/components/CalEmbed";
import { emailConfigured } from "@/lib/email";

export const metadata: Metadata = {
  title: "Book",
  description:
    "Begin a private booking application with White Rabbit Productions. Share your intention and preferred timing, and we will follow up to confirm.",
  alternates: { canonical: "/book" }
};

type Props = {
  searchParams: Promise<{ service?: string }>;
};

export default async function BookPage({ searchParams }: Props) {
  const { service } = await searchParams;
  const showDevNotice =
    process.env.NODE_ENV !== "production" && !emailConfigured();

  return (
    <>
      <SceneHero
        eyebrow="Book"
        title={"Begin Your\nApplication"}
        body="A private booking application. Tell us what you have in mind, and we will follow up to confirm the details."
        image="/assets/scene-system.png"
        imageAlt="A dark reception room softly lit by a single illuminated doorway."
        priority
      />

      <section className="section">
        <div className="container-wr grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Application"
              title="Share the essentials."
              body="Every field beyond the essentials is optional. The more you share, the better we can prepare."
            />

            {showDevNotice && (
              <div className="mt-8 border border-blood/40 bg-blood/5 p-5 text-[13px] leading-relaxed text-ivory/70">
                <strong className="text-ivory">Developer notice:</strong> email
                delivery is not configured. Set <code>RESEND_API_KEY</code>,{" "}
                <code>INQUIRY_TO_EMAIL</code>, and <code>INQUIRY_FROM_EMAIL</code>{" "}
                to deliver submissions. Until then, applications are logged to the
                server console and the form still works. This notice is hidden in
                production.
              </div>
            )}

            <div className="mt-10">
              <BookingForm defaultService={service} />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <CalEmbed />

              <div className="mt-8 border border-silver/15 bg-ink-soft p-8">
                <p className="eyebrow mb-3">What to expect</p>
                <ul className="space-y-4 text-[14px] leading-relaxed text-ivory/65">
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="text-blood-bright">
                      01
                    </span>
                    We review every application personally.
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="text-blood-bright">
                      02
                    </span>
                    We respond to confirm fit and next steps.
                  </li>
                  <li className="flex gap-3">
                    <span aria-hidden="true" className="text-blood-bright">
                      03
                    </span>
                    We arrange timing, scope, and any deposit privately.
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

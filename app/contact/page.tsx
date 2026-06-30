import type { Metadata } from "next";
import { Mail, Instagram } from "lucide-react";
import SceneHero from "@/components/SceneHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { contactEmail, instagramUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach White Rabbit Productions for inquiries, partnerships, press, consulting, property, and collaborations.",
  alternates: { canonical: "/contact" }
};

export default function ContactPage() {
  return (
    <>
      <SceneHero
        eyebrow="Contact"
        title={"Inquire\nWithin"}
        body="For consulting, collaborations, bookings, property opportunities, and private requests."
        image="/assets/scene-home.png"
        imageAlt="A black door bearing a rabbit emblem, lit by warm light."
        priority
      />

      <section className="section">
        <div className="container-wr grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Reach Us"
              title="Start a conversation."
              body="Share a few details and we will respond personally. For scheduling, the booking application is the fastest route."
            />

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-3 text-[14px] text-ivory/75 hover:text-ivory"
              >
                <Mail className="h-5 w-5 text-blood-bright" aria-hidden="true" />
                {contactEmail}
              </a>
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] text-ivory/75 hover:text-ivory"
                >
                  <Instagram
                    className="h-5 w-5 text-blood-bright"
                    aria-hidden="true"
                  />
                  Instagram
                </a>
              )}
            </div>

            <div className="mt-12 border-t border-silver/10 pt-8">
              <h3 className="font-serif text-xl text-ivory">Press & Collaboration</h3>
              <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ivory/60">
                For press, partnerships, and brand collaborations, select the
                relevant inquiry type and we will route your message to the right
                desk.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

import { Fragment } from "react";
import type { Policy } from "@/lib/policies";
import { contactEmail } from "@/lib/site";

function withEmail(text: string) {
  const parts = text.split("{EMAIL}");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a href={`mailto:${contactEmail}`} className="text-blood-bright underline">
          {contactEmail}
        </a>
      )}
    </Fragment>
  ));
}

export default function PolicyPage({ policy }: { policy: Policy }) {
  return (
    <article className="container-wr max-w-3xl pb-28 pt-36">
      <p className="eyebrow mb-5">Legal</p>
      <h1 className="font-serif text-4xl tracking-tight sm:text-5xl">
        {policy.title}
      </h1>
      <p className="mt-4 text-[12px] uppercase tracking-wide2 text-ivory/40">
        {policy.lastUpdated}
      </p>

      <p className="lede mt-10 max-w-none">{policy.intro}</p>

      <div className="mt-10 space-y-6">
        {policy.blocks.map((block, i) => {
          if (block.type === "h") {
            return (
              <h2
                key={i}
                className="pt-4 font-serif text-2xl tracking-tight text-ivory"
              >
                {block.text}
              </h2>
            );
          }
          if (block.type === "ul") {
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[15px] leading-relaxed text-ivory/70"
                  >
                    <span aria-hidden="true" className="text-blood-bright">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="text-[15px] leading-[1.9] text-ivory/70">
              {withEmail(block.text)}
            </p>
          );
        })}
      </div>

      {policy.reviewNote && (
        <p className="mt-14 border-t border-silver/10 pt-8 text-[12px] italic leading-relaxed text-ivory/40">
          This policy is a starting template and should be reviewed by a
          qualified attorney before publishing.
        </p>
      )}
    </article>
  );
}

import { calLink } from "@/lib/site";

/**
 * Scheduling block. When NEXT_PUBLIC_CAL_LINK is configured it renders a button
 * to the Cal.com booking link; otherwise it shows graceful fallback messaging
 * so the page is always complete.
 */
export default function CalEmbed() {
  if (!calLink) {
    return (
      <div className="border border-silver/15 bg-ink-soft p-8">
        <p className="eyebrow mb-3">Scheduling</p>
        <p className="text-[14px] leading-relaxed text-ivory/60">
          Direct scheduling will be available here shortly. In the meantime,
          send your details through the application and we will follow up to
          confirm a time.
        </p>
      </div>
    );
  }

  const href = calLink.startsWith("http")
    ? calLink
    : `https://cal.com/${calLink}`;

  return (
    <div className="border border-silver/15 bg-ink-soft p-8">
      <p className="eyebrow mb-3">Scheduling</p>
      <p className="text-[14px] leading-relaxed text-ivory/60">
        Prefer to choose a time now? Open the calendar and reserve a slot
        directly.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn mt-6"
      >
        Open Calendar
      </a>
    </div>
  );
}

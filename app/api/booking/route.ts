import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/validators";
import { sendInquiryEmail, emailConfigured } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please review the form and try again." },
      { status: 422 }
    );
  }

  const d = parsed.data;

  // Silently accept honeypot hits so bots get no signal.
  if (d.company) {
    return NextResponse.json({ ok: true, message: "" });
  }

  const text = [
    "New booking application — White Rabbit Productions",
    "",
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone || "—"}`,
    `Preferred contact: ${d.contactMethod}`,
    `City: ${d.city || "—"}`,
    `Service: ${d.serviceCategory}`,
    `Preferred date: ${d.preferredDate || "—"}`,
    `Time window: ${d.timeWindow || "—"}`,
    `Budget: ${d.budget || "—"}`,
    `Referral: ${d.referral || "—"}`,
    "",
    "Notes:",
    d.notes || "—"
  ].join("\n");

  const result = await sendInquiryEmail({
    subject: `Booking — ${d.serviceCategory} — ${d.name}`,
    text,
    replyTo: d.email
  });

  if (!result.delivered) {
    // Log for the operator but still succeed for the visitor.
    console.warn(
      `[booking] email not delivered (${result.reason ?? "unknown"})`
    );
    if (process.env.NODE_ENV !== "production") {
      console.info("[booking] submission:\n" + text);
    }
  }

  return NextResponse.json({
    ok: true,
    delivered: result.delivered,
    message: emailConfigured()
      ? ""
      : "Your application was received. Email delivery is not yet configured for this environment."
  });
}

import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validators";
import { sendInquiryEmail, emailConfigured } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please review the form and try again." },
      { status: 422 }
    );
  }

  const d = parsed.data;

  if (d.company) {
    return NextResponse.json({ ok: true, message: "" });
  }

  const text = [
    "New inquiry — White Rabbit Productions",
    "",
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Phone: ${d.phone || "—"}`,
    `Type: ${d.inquiryType}`,
    "",
    "Message:",
    d.message
  ].join("\n");

  const result = await sendInquiryEmail({
    subject: `Inquiry — ${d.inquiryType} — ${d.name}`,
    text,
    replyTo: d.email
  });

  if (!result.delivered) {
    console.warn(
      `[inquiry] email not delivered (${result.reason ?? "unknown"})`
    );
    if (process.env.NODE_ENV !== "production") {
      console.info("[inquiry] submission:\n" + text);
    }
  }

  return NextResponse.json({
    ok: true,
    delivered: result.delivered,
    message: emailConfigured()
      ? ""
      : "Your message was received. Email delivery is not yet configured for this environment."
  });
}

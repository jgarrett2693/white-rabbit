import { Resend } from "resend";

/**
 * Thin wrapper around Resend that degrades gracefully. If the API key or the
 * to/from addresses are not configured, sending is skipped and the caller is
 * told the message was not delivered — the request still succeeds so forms work
 * in preview and local environments without secrets.
 */

type SendArgs = {
  subject: string;
  text: string;
  replyTo?: string;
};

export type SendResult = { delivered: boolean; reason?: string };

export function emailConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.INQUIRY_TO_EMAIL &&
      process.env.INQUIRY_FROM_EMAIL
  );
}

export async function sendInquiryEmail({
  subject,
  text,
  replyTo
}: SendArgs): Promise<SendResult> {
  if (!emailConfigured()) {
    return { delivered: false, reason: "email-not-configured" };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.INQUIRY_FROM_EMAIL as string,
      to: process.env.INQUIRY_TO_EMAIL as string,
      subject,
      text,
      replyTo
    });

    if (error) {
      return { delivered: false, reason: error.message };
    }
    return { delivered: true };
  } catch (err) {
    return {
      delivered: false,
      reason: err instanceof Error ? err.message : "unknown-error"
    };
  }
}

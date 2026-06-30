/**
 * Policy content adapted from the legal starter templates in /policies. These
 * are starting templates and should be reviewed by a qualified attorney before
 * publishing. Replace [SUPPORT EMAIL] via NEXT_PUBLIC_CONTACT_EMAIL and set a
 * real "Last updated" date before launch.
 */

export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export type Policy = {
  slug: string;
  title: string;
  intro: string;
  lastUpdated: string;
  reviewNote?: boolean;
  blocks: PolicyBlock[];
};

const lastUpdated = "Last updated: [DATE]";

export const policies: Record<string, Policy> = {
  "return-policy": {
    slug: "return-policy",
    title: "Return Policy",
    lastUpdated,
    reviewNote: true,
    intro:
      "This Return Policy applies to purchases made through White Rabbit Productions.",
    blocks: [
      { type: "h", text: "Merchandise Returns" },
      {
        type: "p",
        text: "Unused, unworn, and undamaged merchandise may be eligible for return within 14 days of delivery. Items must be returned in their original condition and packaging."
      },
      { type: "h", text: "Non-Returnable Items" },
      { type: "p", text: "The following items are final sale unless defective:" },
      {
        type: "ul",
        items: [
          "Custom or personalized items",
          "Opened candles, body products, or personal-use goods",
          "Digital products or delivered creative work",
          "Gift cards",
          "Sale or limited-release items marked final sale"
        ]
      },
      { type: "h", text: "Services and Bookings" },
      {
        type: "p",
        text: "Service fees, consulting sessions, production work, wellness appointments, deposits, and private bookings may be subject to cancellation terms shown at booking. Once a service has begun, been delivered, or time has been reserved, fees may be non-refundable."
      },
      { type: "h", text: "Deposits" },
      {
        type: "p",
        text: "Deposits may be used to reserve time, staff, locations, travel, or production resources. Deposit refundability depends on the specific booking terms agreed to at the time of purchase."
      },
      { type: "h", text: "Damaged or Incorrect Items" },
      {
        type: "p",
        text: "If an item arrives damaged or incorrect, contact us within 7 days of delivery with your order number and photos of the item and packaging."
      },
      { type: "h", text: "How to Request a Return" },
      {
        type: "p",
        text: "Email {EMAIL} with your order number, reason for return, and photos if applicable."
      },
      { type: "h", text: "Shipping" },
      {
        type: "p",
        text: "Original shipping fees are generally non-refundable. Return shipping costs may be the responsibility of the customer unless the item arrived damaged or incorrect."
      }
    ]
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    lastUpdated,
    reviewNote: true,
    intro:
      "Welcome to White Rabbit Productions. By using this website, booking services, purchasing products, or submitting an inquiry, you agree to these Terms of Service.",
    blocks: [
      { type: "h", text: "Services" },
      {
        type: "p",
        text: "White Rabbit Productions may provide creative production, consulting, wellness-related services, property management support, brand collaborations, merchandise, and bespoke experiences."
      },
      { type: "h", text: "Bookings and Payments" },
      {
        type: "p",
        text: "Bookings may require payment, a deposit, or written confirmation. Appointment availability is not guaranteed until confirmed. Pricing, availability, and service details may change."
      },
      { type: "h", text: "Cancellations" },
      {
        type: "p",
        text: "Cancellation, rescheduling, and refund terms may vary by service type and will be communicated during booking or in a written agreement."
      },
      { type: "h", text: "Merchandise" },
      {
        type: "p",
        text: "Product descriptions, availability, and pricing may change without notice. We reserve the right to refuse or cancel orders where appropriate."
      },
      { type: "h", text: "User Submissions" },
      {
        type: "p",
        text: "When you submit forms, inquiries, messages, or files, you confirm that the information is accurate and that you have the right to provide it."
      },
      { type: "h", text: "Intellectual Property" },
      {
        type: "p",
        text: "All logos, graphics, copy, photography, layouts, designs, and brand materials on this site are owned by or licensed to White Rabbit Productions unless otherwise stated. You may not copy or reuse them without written permission."
      },
      { type: "h", text: "No Guarantees" },
      {
        type: "p",
        text: "We aim to provide high-quality work and service, but we do not guarantee specific business, financial, wellness, creative, or property outcomes."
      },
      { type: "h", text: "Third-Party Services" },
      {
        type: "p",
        text: "This site may use third-party tools such as scheduling, payment, analytics, email, CMS, or commerce providers. Their terms and privacy practices may also apply."
      },
      { type: "h", text: "Limitation of Liability" },
      {
        type: "p",
        text: "To the fullest extent permitted by law, White Rabbit Productions is not liable for indirect, incidental, special, consequential, or punitive damages arising from use of this website, services, or products."
      },
      { type: "h", text: "Changes" },
      {
        type: "p",
        text: "We may update these Terms from time to time. Continued use of the website means you accept the updated terms."
      },
      { type: "h", text: "Contact" },
      { type: "p", text: "Questions may be sent to {EMAIL}." }
    ]
  },
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated,
    reviewNote: true,
    intro:
      "White Rabbit Productions respects your privacy. This Privacy Policy explains how we collect, use, and protect information submitted through this website.",
    blocks: [
      { type: "h", text: "Information We Collect" },
      { type: "p", text: "We may collect:" },
      {
        type: "ul",
        items: [
          "Name",
          "Email address",
          "Phone number",
          "Booking or inquiry details",
          "Service preferences",
          "Location/city",
          "Payment-related information through third-party payment processors",
          "Website usage data through analytics tools"
        ]
      },
      { type: "h", text: "How We Use Information" },
      { type: "p", text: "We use information to:" },
      {
        type: "ul",
        items: [
          "Respond to inquiries",
          "Manage bookings",
          "Provide services",
          "Process purchases",
          "Improve the website",
          "Send relevant business communications",
          "Maintain security and prevent misuse"
        ]
      },
      { type: "h", text: "Third-Party Providers" },
      {
        type: "p",
        text: "We may use third-party providers for hosting, scheduling, payments, analytics, email, CMS, and commerce. Examples may include Vercel, Cal.com, Stripe, Resend, Shopify, Sanity, Supabase, Google Analytics, or similar tools."
      },
      { type: "h", text: "Payments" },
      {
        type: "p",
        text: "Payment information is processed by third-party payment processors. We do not intentionally store complete payment card numbers on this website."
      },
      { type: "h", text: "Cookies and Analytics" },
      {
        type: "p",
        text: "We may use cookies or analytics technologies to understand website performance and visitor behavior. You may control cookies through your browser settings."
      },
      { type: "h", text: "Data Retention" },
      {
        type: "p",
        text: "We keep information only as long as reasonably needed for business, legal, security, or operational purposes."
      },
      { type: "h", text: "Your Choices" },
      {
        type: "p",
        text: "You may contact us to request access, correction, or deletion of certain personal information, subject to legal and operational limits."
      },
      { type: "h", text: "Security" },
      {
        type: "p",
        text: "We use reasonable safeguards, but no system is completely secure."
      },
      { type: "h", text: "Contact" },
      { type: "p", text: "For privacy questions, contact {EMAIL}." }
    ]
  },
  accessibility: {
    slug: "accessibility",
    title: "Accessibility",
    lastUpdated,
    reviewNote: false,
    intro:
      "White Rabbit Productions is committed to making its website accessible and usable for all visitors.",
    blocks: [
      {
        type: "p",
        text: "We aim to follow modern accessibility practices, including readable contrast, keyboard-friendly navigation, clear labels, alt text, and responsive design."
      },
      { type: "h", text: "Need Assistance?" },
      {
        type: "p",
        text: "If you experience difficulty using any part of the website, contact {EMAIL} with the page URL and a description of the issue, and we will make reasonable efforts to assist."
      }
    ]
  }
};

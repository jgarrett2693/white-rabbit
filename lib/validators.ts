import { z } from "zod";

export const serviceCategories = [
  "Production",
  "Consulting",
  "Wellness",
  "Property Management",
  "Brand Collaboration",
  "Bespoke Experience",
  "General Inquiry"
] as const;

export const contactMethods = ["Email", "Phone", "Either"] as const;

export const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Prefer to discuss"
] as const;

export const inquiryTypes = [
  "General Inquiry",
  "Booking",
  "Press",
  "Collaboration",
  "Property",
  "Consulting"
] as const;

const name = z
  .string()
  .trim()
  .min(2, "Please enter your name.")
  .max(120, "That name is a little too long.");

const email = z
  .string()
  .trim()
  .min(1, "Email is required.")
  .email("Please enter a valid email address.");

const phone = z
  .string()
  .trim()
  .max(40, "That phone number is too long.")
  .optional()
  .or(z.literal(""));

// Honeypot field — must remain empty for a legitimate submission.
const company = z.literal("").optional().or(z.string().max(0));

export const bookingSchema = z.object({
  name,
  email,
  phone,
  contactMethod: z.enum(contactMethods),
  city: z.string().trim().max(120).optional().or(z.literal("")),
  serviceCategory: z.enum(serviceCategories),
  preferredDate: z.string().trim().max(40).optional().or(z.literal("")),
  timeWindow: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.enum(budgetRanges).optional().or(z.literal("")),
  notes: z
    .string()
    .trim()
    .max(4000, "Please keep notes under 4000 characters.")
    .optional()
    .or(z.literal("")),
  referral: z.string().trim().max(200).optional().or(z.literal("")),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm we may contact you." })
  }),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "Please agree to the Terms and Privacy Policy." })
  }),
  company
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const inquirySchema = z.object({
  name,
  email,
  phone,
  inquiryType: z.enum(inquiryTypes),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more detail.")
    .max(4000, "Please keep your message under 4000 characters."),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please confirm we may contact you." })
  }),
  company
});

export type InquiryInput = z.infer<typeof inquirySchema>;

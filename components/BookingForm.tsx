"use client";

import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  bookingSchema,
  type BookingInput,
  serviceCategories,
  contactMethods,
  budgetRanges
} from "@/lib/validators";

type Props = { defaultService?: string };

const isValidService = (
  value?: string
): value is (typeof serviceCategories)[number] =>
  !!value && (serviceCategories as readonly string[]).includes(value);

export default function BookingForm({ defaultService }: Props) {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [serverMessage, setServerMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      contactMethod: "Email",
      serviceCategory: isValidService(defaultService)
        ? defaultService
        : "General Inquiry"
    }
  });

  const onSubmit = async (data: BookingInput) => {
    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Submission failed.");
      setStatus("ok");
      setServerMessage(json?.message || "");
      reset();
    } catch (err) {
      setStatus("error");
      setServerMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  };

  if (status === "ok") {
    return (
      <div className="border border-blood/40 bg-ink-soft p-10 text-center">
        <p className="eyebrow mb-4">Received</p>
        <h3 className="font-serif text-3xl">Thank you.</h3>
        <p className="lede mx-auto mt-4">
          Your application has been received. We review every inquiry personally
          and will be in touch shortly.
        </p>
        <button
          type="button"
          className="btn-ghost mt-8"
          onClick={() => setStatus("idle")}
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* Honeypot — hidden from users, catches bots */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" error={errors.name?.message} required>
          <input
            type="text"
            autoComplete="name"
            className="field-input"
            {...register("name")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message} required>
          <input
            type="email"
            autoComplete="email"
            className="field-input"
            {...register("email")}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            className="field-input"
            {...register("phone")}
          />
        </Field>
        <Field label="Preferred contact method" error={errors.contactMethod?.message}>
          <select className="field-input" {...register("contactMethod")}>
            {contactMethods.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </Field>
        <Field label="City / location" error={errors.city?.message}>
          <input type="text" className="field-input" {...register("city")} />
        </Field>
        <Field label="Service category" error={errors.serviceCategory?.message} required>
          <select className="field-input" {...register("serviceCategory")}>
            {serviceCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred date" error={errors.preferredDate?.message}>
          <input type="date" className="field-input" {...register("preferredDate")} />
        </Field>
        <Field label="Preferred time window" error={errors.timeWindow?.message}>
          <input
            type="text"
            placeholder="e.g. weekday evenings"
            className="field-input"
            {...register("timeWindow")}
          />
        </Field>
        <Field label="Budget range" error={errors.budget?.message}>
          <select className="field-input" {...register("budget")}>
            <option value="">Select…</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field label="How did you hear of us?" error={errors.referral?.message}>
          <input type="text" className="field-input" {...register("referral")} />
        </Field>
      </div>

      <Field label="Notes / request details" error={errors.notes?.message}>
        <textarea rows={5} className="field-input resize-y" {...register("notes")} />
      </Field>

      <div className="space-y-4">
        <Checkbox error={errors.consent?.message} {...register("consent")}>
          I consent to be contacted by White Rabbit Productions about my inquiry.
        </Checkbox>
        <Checkbox error={errors.agreeTerms?.message} {...register("agreeTerms")}>
          I agree to the{" "}
          <a className="underline hover:text-ivory" href="/terms-of-service">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="underline hover:text-ivory" href="/privacy-policy">
            Privacy Policy
          </a>
          .
        </Checkbox>
      </div>

      {status === "error" && (
        <p role="alert" className="text-[13px] text-blood-bright">
          {serverMessage || "Something went wrong. Please try again."}
        </p>
      )}

      <button type="submit" className="btn w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit application"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="field-label">
        {label}
        {required && <span className="text-blood-bright"> *</span>}
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1 block text-[12px] text-blood-bright">
          {error}
        </span>
      )}
    </label>
  );
}

const Checkbox = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    children: React.ReactNode;
    error?: string;
  }
>(function Checkbox({ children, error, ...props }, ref) {
  return (
    <div>
      <label className="flex items-start gap-3 text-[13px] leading-relaxed text-ivory/70">
        <input
          type="checkbox"
          ref={ref}
          className="mt-1 h-4 w-4 shrink-0 accent-[#8E1116]"
          {...props}
        />
        <span>{children}</span>
      </label>
      {error && (
        <span role="alert" className="mt-1 block pl-7 text-[12px] text-blood-bright">
          {error}
        </span>
      )}
    </div>
  );
});

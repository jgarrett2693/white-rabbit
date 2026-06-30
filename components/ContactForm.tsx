"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { inquirySchema, type InquiryInput, inquiryTypes } from "@/lib/validators";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { inquiryType: "General Inquiry" }
  });

  const onSubmit = async (data: InquiryInput) => {
    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Submission failed.");
      setStatus("ok");
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
      <div className="border border-blood/40 bg-ink-soft p-10">
        <p className="eyebrow mb-4">Received</p>
        <h3 className="font-serif text-3xl">Thank you.</h3>
        <p className="lede mt-4">
          Your message has reached us. We respond to every inquiry personally
          and will be in touch shortly.
        </p>
        <button
          type="button"
          className="btn-ghost mt-8"
          onClick={() => setStatus("idle")}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input
          id="contact-company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">
            Full name<span className="text-blood-bright"> *</span>
          </span>
          <input type="text" autoComplete="name" className="field-input" {...register("name")} />
          {errors.name && (
            <span role="alert" className="mt-1 block text-[12px] text-blood-bright">
              {errors.name.message}
            </span>
          )}
        </label>
        <label className="block">
          <span className="field-label">
            Email<span className="text-blood-bright"> *</span>
          </span>
          <input type="email" autoComplete="email" className="field-input" {...register("email")} />
          {errors.email && (
            <span role="alert" className="mt-1 block text-[12px] text-blood-bright">
              {errors.email.message}
            </span>
          )}
        </label>
        <label className="block">
          <span className="field-label">Phone</span>
          <input type="tel" autoComplete="tel" className="field-input" {...register("phone")} />
        </label>
        <label className="block">
          <span className="field-label">Inquiry type</span>
          <select className="field-input" {...register("inquiryType")}>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="field-label">
          Message<span className="text-blood-bright"> *</span>
        </span>
        <textarea rows={6} className="field-input resize-y" {...register("message")} />
        {errors.message && (
          <span role="alert" className="mt-1 block text-[12px] text-blood-bright">
            {errors.message.message}
          </span>
        )}
      </label>

      <div>
        <label className="flex items-start gap-3 text-[13px] leading-relaxed text-ivory/70">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 accent-[#8E1116]"
            {...register("consent")}
          />
          <span>
            I consent to be contacted by White Rabbit Productions about my
            inquiry.
          </span>
        </label>
        {errors.consent && (
          <span role="alert" className="mt-1 block pl-7 text-[12px] text-blood-bright">
            {errors.consent.message}
          </span>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="text-[13px] text-blood-bright">
          {serverMessage || "Something went wrong. Please try again."}
        </p>
      )}

      <button type="submit" className="btn w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

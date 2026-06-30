import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { policies } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Return Policy",
  description:
    "Return, cancellation, and deposit terms for merchandise, services, and bookings at White Rabbit Productions."
};

export default function Page() {
  return <PolicyPage policy={policies["return-policy"]} />;
}

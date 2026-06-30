import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { policies } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "White Rabbit Productions is committed to an accessible, usable website for all visitors."
};

export default function Page() {
  return <PolicyPage policy={policies["accessibility"]} />;
}

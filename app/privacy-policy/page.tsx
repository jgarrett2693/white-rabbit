import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { policies } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How White Rabbit Productions collects, uses, and protects information submitted through this website."
};

export default function Page() {
  return <PolicyPage policy={policies["privacy-policy"]} />;
}

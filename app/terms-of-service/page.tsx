import type { Metadata } from "next";
import PolicyPage from "@/components/PolicyPage";
import { policies } from "@/lib/policies";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms governing use of the White Rabbit Productions website, services, and merchandise."
};

export default function Page() {
  return <PolicyPage policy={policies["terms-of-service"]} />;
}

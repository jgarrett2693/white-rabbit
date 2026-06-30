import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <Image
          src="/assets/rabbit-mark.png"
          alt=""
          width={96}
          height={96}
          className="mx-auto h-24 w-24 object-contain opacity-90"
        />
        <p className="eyebrow mt-10">404</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          You followed the wrong rabbit.
        </h1>
        <p className="lede mx-auto mt-6">
          The page you were looking for has slipped away. Let us guide you back.
        </p>
        <Link href="/" className="btn mt-10">
          Return Home
        </Link>
      </div>
    </section>
  );
}

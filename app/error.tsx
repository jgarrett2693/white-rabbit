"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          A quiet error occurred.
        </h1>
        <p className="lede mx-auto mt-6">
          The page could not be displayed. Please try again, or return home.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button type="button" onClick={reset} className="btn">
            Try again
          </button>
          <Link href="/" className="btn-ghost">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}

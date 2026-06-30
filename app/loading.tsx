import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink">
      <Image
        src="/assets/rabbit-mark.png"
        alt="Loading"
        width={64}
        height={64}
        className="h-16 w-16 animate-pulse object-contain opacity-80"
      />
    </div>
  );
}

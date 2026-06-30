import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** When true, the wordmark is hidden and only the rabbit mark shows. */
  markOnly?: boolean;
  className?: string;
};

/**
 * The rabbit mark is the home button across the entire site. Do not redesign
 * the mark; it is a fixed brand asset.
 */
export default function Logo({ markOnly = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="White Rabbit Productions — home"
      className={`group flex items-center gap-3 ${className ?? ""}`}
    >
      <Image
        src="/assets/rabbit-mark.png"
        alt="White Rabbit Productions"
        width={48}
        height={48}
        priority
        className="h-11 w-11 object-contain"
      />
      {!markOnly && (
        <span className="hidden leading-tight sm:block">
          <span className="block font-serif text-[13px] tracking-brand text-ivory">
            WHITE RABBIT
          </span>
          <span className="block text-[8px] tracking-wide3 text-blood-bright">
            PRODUCTIONS
          </span>
        </span>
      )}
    </Link>
  );
}

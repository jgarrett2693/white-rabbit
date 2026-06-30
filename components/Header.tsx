import Link from "next/link";
import { pages } from "@/lib/pages";

export default function Header() {
  const nav = pages.filter((p) => p.slug !== "" && ["about","services","portfolio","experiences","contact"].includes(p.slug));
  return (
    <header className="header">
      <Link className="logo-home" href="/">
        <img src="/assets/rabbit-logo.png" alt="White Rabbit Productions" />
        <span>
          <strong>White Rabbit</strong>
          <small>Productions</small>
        </span>
      </Link>
      <nav className="nav">
        {nav.map((item) => (
          <Link key={item.slug} href={`/${item.slug}`}>{item.nav}</Link>
        ))}
      </nav>
    </header>
  );
}

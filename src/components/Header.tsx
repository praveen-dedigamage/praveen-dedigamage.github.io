import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "#about", label: "Home" },
  { href: "#research", label: "About Me" },
  { href: "#projects", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm">
        <Link href="#about" className="text-lg font-semibold">
          <span className="text-accent">P</span>raveenDedigamage
        </Link>
        <div className="flex items-center gap-8">
          <ThemeToggle />
          <ul className="hidden items-center gap-6 font-medium tracking-wide uppercase text-xs sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="opacity-80 hover:opacity-100" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black hover:opacity-90"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}

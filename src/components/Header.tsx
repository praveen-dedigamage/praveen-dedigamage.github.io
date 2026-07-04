"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 w-full bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 text-sm sm:px-10 lg:px-16">
        <Link href="/" className="text-lg font-semibold">
          <span className="text-accent">P</span>raveenDedigamage
        </Link>
        <div className="flex items-center gap-8">
          <ThemeToggle />
          <ul className="hidden items-center gap-6 text-xs font-medium tracking-wide uppercase sm:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  className={
                    pathname === item.href
                      ? "text-accent"
                      : "opacity-80 hover:opacity-100"
                  }
                  href={item.href}
                >
                  {item.label}
                </Link>
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

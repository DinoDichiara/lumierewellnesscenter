"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-studio-bg/90 backdrop-blur-md border-b border-studio-border">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="w-8 h-8 rounded-full bg-studio-accent/15 border border-studio-accent/60 flex items-center justify-center group-hover:bg-studio-accent/25 transition-colors">
            <span className="text-studio-accent text-xs font-bold tracking-tight">
              L
            </span>
          </div>
          <span className="text-studio-text font-semibold tracking-widest text-xs uppercase">
            YOUR BRAND
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-studio-accent relative group pb-0.5",
                  pathname === link.href
                    ? "text-studio-accent"
                    : "text-studio-muted"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px bg-studio-accent transition-all duration-300",
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center h-9 px-5 rounded-md bg-studio-accent text-studio-bg text-xs font-bold uppercase tracking-wider hover:bg-studio-accent-hover transition-colors"
          >
            Book Now
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-1.5 text-studio-muted hover:text-studio-accent transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-studio-surface border-t border-studio-border animate-fade-in">
          <ul className="flex flex-col px-6 py-4 gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center py-3.5 text-sm font-medium border-b border-studio-border/40 last:border-0 transition-colors",
                    pathname === link.href
                      ? "text-studio-accent"
                      : "text-studio-muted hover:text-studio-text"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-3 rounded-md bg-studio-accent text-studio-bg text-xs font-bold uppercase tracking-wider hover:bg-studio-accent-hover transition-colors"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

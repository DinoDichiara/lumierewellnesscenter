import Link from "next/link";
import { Instagram, Facebook, Globe } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", icon: Instagram, label: "Instagram" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Globe, label: "Website" },
];

export default function Footer() {
  return (
    <footer className="bg-studio-surface border-t border-studio-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-studio-accent/15 border border-studio-accent/60 flex items-center justify-center">
                <span className="text-studio-accent text-xs font-bold">L</span>
              </div>
              <span className="text-studio-text font-semibold tracking-widest text-xs uppercase">
                YOUR BRAND
              </span>
            </div>
            <p className="text-studio-muted text-sm leading-relaxed max-w-xs">
              Premium beauty studio bringing out your natural radiance with
              personalized treatments and expert care.
            </p>
            <div className="flex gap-3 pt-1">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-studio-border flex items-center justify-center text-studio-muted hover:text-studio-accent hover:border-studio-accent transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-studio-text font-semibold text-xs uppercase tracking-[0.15em] mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-studio-muted text-sm hover:text-studio-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-studio-text font-semibold text-xs uppercase tracking-[0.15em] mb-6">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-studio-muted text-sm">Los Angeles, California</p>
              <a
                href="mailto:hello@yourbrand.com"
                className="text-studio-muted text-sm hover:text-studio-accent transition-colors block"
              >
                hello@yourbrand.com
              </a>
              <a
                href="tel:+13105550100"
                className="text-studio-muted text-sm hover:text-studio-accent transition-colors block"
              >
                (310) 555-0100
              </a>
              <p className="text-studio-muted text-sm pt-1">
                Mon–Sat: 10am – 7pm
                <br />
                Sun: 11am – 5pm
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-studio-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-studio-subtle text-xs">
            © {new Date().getFullYear()} YOUR BRAND. All rights reserved.
          </p>
          <p className="text-studio-subtle text-xs">
            Crafted with care in Los Angeles
          </p>
        </div>
      </div>
    </footer>
  );
}

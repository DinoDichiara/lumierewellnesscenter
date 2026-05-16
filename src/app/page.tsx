import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Leaf,
  Star,
  ArrowRight,
  Clock,
  Users,
  ShieldCheck,
} from "lucide-react";

const featuredServices = [
  {
    icon: Sparkles,
    title: "Custom Facials",
    description:
      "Personalized treatments that target your unique skin concerns, leaving you glowing and deeply refreshed.",
  },
  {
    icon: Star,
    title: "Lash Extensions",
    description:
      "Classic, hybrid, and volume sets designed to frame your eyes and elevate your natural beauty effortlessly.",
  },
  {
    icon: Leaf,
    title: "Brow Design",
    description:
      "Expert shaping, lamination, and tinting to define and perfect your brows with precision and artistry.",
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "5 ★", label: "Average Rating" },
  { value: "8+", label: "Years Experience" },
  { value: "20+", label: "Treatments Offered" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Medical-Grade Products",
    description:
      "We use only professional-grade skincare lines trusted by dermatologists and estheticians alike.",
  },
  {
    icon: Users,
    title: "Personalized Approach",
    description:
      "Every visit begins with a skin assessment so your treatment is perfectly tailored to you.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Open seven days a week with online booking — we work around your schedule, not the other way around.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://placehold.co/1920x1080/1A1210/2C1F19?text=."
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-25"
          />
          {/* Warm amber radial glow — echoes the studio's circular light */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 60% at 65% 45%, rgba(200,136,42,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-studio-bg/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">
          <div className="max-w-2xl">
            <span className="inline-block text-studio-accent text-xs font-bold tracking-[0.25em] uppercase mb-5">
              Los Angeles Beauty Studio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-studio-text leading-[1.1] mb-7">
              Elevate Your{" "}
              <span className="text-studio-accent">Natural</span>
              <br />
              Beauty
            </h1>
            <p className="text-studio-muted text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              Premium skincare treatments, lash artistry, and personalized
              beauty experiences — crafted to make you feel confidently radiant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Your Session
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto group"
                >
                  View Services
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <section className="border-y border-studio-border bg-studio-surface/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-studio-border">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="text-3xl md:text-4xl font-bold text-studio-accent">
                  {stat.value}
                </p>
                <p className="text-studio-muted text-sm mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Services ─────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-studio-accent text-xs font-bold tracking-[0.25em] uppercase">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-studio-text mt-4 mb-5 text-balance">
              Our Signature Services
            </h2>
            <p className="text-studio-muted max-w-xl mx-auto leading-relaxed">
              Every treatment is tailored to your skin and beauty goals,
              performed by experienced estheticians using premium products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {featuredServices.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="group hover:border-studio-accent/50 transition-all duration-300 hover:-translate-y-1.5"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-studio-accent/10 border border-studio-accent/25 flex items-center justify-center mb-5 group-hover:bg-studio-accent/20 transition-colors">
                    <Icon size={22} className="text-studio-accent" />
                  </div>
                  <h3 className="text-studio-text font-semibold text-xl mb-3">
                    {title}
                  </h3>
                  <p className="text-studio-muted text-sm leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                See All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── About / Experience ────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-studio-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image with floating badge */}
            <div className="relative">
              <img
                src="https://placehold.co/700x520/2C1F19/C8882A?text=Studio"
                alt="Luci Beauty Studio"
                className="rounded-2xl w-full object-cover border border-studio-border"
              />
              {/* Floating info card */}
              <div className="absolute -bottom-5 -right-4 bg-studio-surface border border-studio-border rounded-xl p-5 shadow-xl hidden md:flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-studio-accent/15 border border-studio-accent/40 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-studio-accent" />
                </div>
                <div>
                  <p className="text-studio-text text-sm font-semibold">
                    Open 7 Days a Week
                  </p>
                  <p className="text-studio-muted text-xs">10am – 7pm daily</p>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <span className="text-studio-accent text-xs font-bold tracking-[0.25em] uppercase">
                The Experience
              </span>
              <h2 className="text-4xl font-bold text-studio-text mt-4 mb-6 leading-tight text-balance">
                Beauty in a Space That Feels Like Home
              </h2>
              <p className="text-studio-muted leading-relaxed mb-5">
                Step into a sanctuary designed for your comfort. Our studio
                blends warm, intimate ambiance with professional-grade tools to
                give you a truly elevated experience from the moment you walk in.
              </p>
              <p className="text-studio-muted leading-relaxed mb-10">
                Whether it&apos;s your first facial or your hundredth lash
                appointment, we treat every visit as a personalized ritual —
                because you deserve nothing less.
              </p>

              <div className="space-y-5">
                {reasons.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-9 h-9 rounded-lg bg-studio-accent/10 border border-studio-accent/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-studio-accent" />
                    </div>
                    <div>
                      <p className="text-studio-text text-sm font-semibold mb-1">
                        {title}
                      </p>
                      <p className="text-studio-muted text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-3xl bg-studio-surface border border-studio-border overflow-hidden px-8 py-20 md:px-20 text-center">
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(200,136,42,0.10) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <span className="text-studio-accent text-xs font-bold tracking-[0.25em] uppercase">
                Ready to Glow?
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-studio-text mt-4 mb-5 text-balance">
                Book Your Appointment Today
              </h2>
              <p className="text-studio-muted max-w-lg mx-auto leading-relaxed mb-10">
                Secure your spot at the studio — fill out our contact form or
                use our online scheduler to find a time that works perfectly for
                you.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Schedule a Session
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

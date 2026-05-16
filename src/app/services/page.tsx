import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Star,
  Leaf,
  Zap,
  Wind,
  Scissors,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Custom Facials",
    description:
      "Our signature custom facial is a fully personalized treatment. We analyze your skin type, lifestyle, and goals to create a targeted protocol using medical-grade products. Includes double cleanse, exfoliation, extractions, mask, and relaxing facial massage.",
    duration: "60 min",
    price: "From $120",
    tags: ["Anti-Aging", "Hydrating", "Brightening", "Acne Care"],
  },
  {
    icon: Star,
    title: "Lash Extensions",
    description:
      "Achieve effortlessly beautiful lashes with our hand-applied extensions. Choose from classic for a natural, mascara-like look; hybrid for added fullness; or volume for bold, dramatic impact. Results last 3–4 weeks with proper aftercare.",
    duration: "90–150 min",
    price: "From $160",
    tags: ["Classic", "Hybrid", "Volume", "Mega Volume"],
  },
  {
    icon: Leaf,
    title: "Brow Design",
    description:
      "Frame your face with perfectly sculpted brows. From precision threading and waxing to lamination and tinting, we craft a brow shape that enhances your natural features and lasts for weeks without daily upkeep.",
    duration: "45–90 min",
    price: "From $55",
    tags: ["Lamination", "Tinting", "Shaping", "Microblading"],
  },
  {
    icon: Zap,
    title: "Chemical Peels",
    description:
      "Reveal smoother, clearer, and more luminous skin with our professional-grade chemical peels. Formulated for a range of skin types and concerns, from superficial brightening to deeper resurfacing treatments targeting fine lines and uneven texture.",
    duration: "45 min",
    price: "From $150",
    tags: ["Brightening", "Resurfacing", "Acne", "Anti-Aging"],
  },
  {
    icon: Wind,
    title: "Dermaplaning",
    description:
      "A gentle blade-based exfoliation technique that removes dead skin cells and vellus hair (peach fuzz) for an instantly smooth, luminous complexion. Perfect before a big event or as a regular step in your skincare ritual.",
    duration: "30–45 min",
    price: "From $85",
    tags: ["Exfoliation", "Smoothing", "Glow", "Prep Treatment"],
  },
  {
    icon: Scissors,
    title: "Waxing Services",
    description:
      "Fast, effective, and gentle full-body waxing using premium hard and soft wax formulas. Our estheticians ensure the most comfortable experience possible, with minimal redness and long-lasting smooth results.",
    duration: "15–60 min",
    price: "From $20",
    tags: ["Face", "Body", "Bikini", "Brazilian"],
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-studio-accent text-xs font-bold tracking-[0.25em] uppercase">
            Full Service Menu
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-studio-text mt-4 mb-5 text-balance">
            Our Services
          </h1>
          <p className="text-studio-muted max-w-xl mx-auto leading-relaxed text-lg">
            From skincare essentials to transformative beauty treatments —
            everything you need to look and feel your very best.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map(
            ({ icon: Icon, title, description, duration, price, tags }) => (
              <Card
                key={title}
                className="group hover:border-studio-accent/40 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-studio-accent/10 border border-studio-accent/25 flex items-center justify-center flex-shrink-0 group-hover:bg-studio-accent/20 transition-colors mt-0.5">
                      <Icon size={20} className="text-studio-accent" />
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Title + pricing */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h2 className="text-studio-text font-semibold text-xl leading-snug">
                          {title}
                        </h2>
                        <div className="text-right flex-shrink-0">
                          <p className="text-studio-accent font-semibold text-sm">
                            {price}
                          </p>
                          <p className="text-studio-subtle text-xs mt-0.5">
                            {duration}
                          </p>
                        </div>
                      </div>

                      <p className="text-studio-muted text-sm leading-relaxed mb-4">
                        {description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-studio-surface border border-studio-border text-studio-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl bg-studio-surface border border-studio-border p-12 md:p-16 text-center overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(200,136,42,0.09) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-studio-text mb-4 text-balance">
              Not Sure Where to Start?
            </h3>
            <p className="text-studio-muted max-w-md mx-auto mb-8 leading-relaxed">
              Book a complimentary skin consultation and our estheticians will
              recommend the perfect treatments for your unique skin profile and
              beauty goals.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Book a Consultation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

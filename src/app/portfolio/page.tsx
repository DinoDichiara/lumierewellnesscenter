import { Card } from "@/components/ui/card";

const portfolioItems = [
  {
    id: 1,
    title: "Hydrating Custom Facial",
    category: "Facials",
    tags: ["Hydration", "Glow", "Anti-Aging"],
    image:
      "https://placehold.co/800x600/2C1F19/C8882A?text=Custom+Facial",
  },
  {
    id: 2,
    title: "Mega Volume Lash Set",
    category: "Lashes",
    tags: ["Volume", "Drama", "Extensions"],
    image:
      "https://placehold.co/800x600/231915/DDA040?text=Volume+Lash+Set",
  },
  {
    id: 3,
    title: "Brow Lamination & Tint",
    category: "Brows",
    tags: ["Lamination", "Tinting", "Definition"],
    image:
      "https://placehold.co/800x600/2C1F19/C8882A?text=Brow+Lamination",
  },
  {
    id: 4,
    title: "Vitamin C Brightening Peel",
    category: "Treatments",
    tags: ["Chemical Peel", "Brightening", "Glow"],
    image:
      "https://placehold.co/800x600/231915/C8882A?text=Chemical+Peel",
  },
  {
    id: 5,
    title: "Dermaplaning Session",
    category: "Treatments",
    tags: ["Exfoliation", "Smooth Skin", "Prep"],
    image:
      "https://placehold.co/800x600/2C1F19/DDA040?text=Dermaplaning",
  },
  {
    id: 6,
    title: "Studio Atmosphere",
    category: "Studio",
    tags: ["Space", "Ambiance", "Design"],
    image:
      "https://placehold.co/800x600/231915/C8882A?text=Studio+Space",
  },
  {
    id: 7,
    title: "Hybrid Lash Extensions",
    category: "Lashes",
    tags: ["Hybrid", "Natural", "Length"],
    image:
      "https://placehold.co/800x600/2C1F19/C8882A?text=Hybrid+Lashes",
  },
  {
    id: 8,
    title: "Deep Cleansing Facial",
    category: "Facials",
    tags: ["Cleansing", "Extractions", "Purifying"],
    image:
      "https://placehold.co/800x600/231915/DDA040?text=Deep+Cleanse",
  },
  {
    id: 9,
    title: "Full Brazilian Wax",
    category: "Waxing",
    tags: ["Brazilian", "Smooth", "Long-Lasting"],
    image:
      "https://placehold.co/800x600/2C1F19/C8882A?text=Waxing+Service",
  },
];

const categories = [
  "All",
  "Facials",
  "Lashes",
  "Brows",
  "Treatments",
  "Waxing",
  "Studio",
];

export default function PortfolioPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-studio-accent text-xs font-bold tracking-[0.25em] uppercase">
            Our Work
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-studio-text mt-4 mb-5 text-balance">
            Portfolio
          </h1>
          <p className="text-studio-muted max-w-xl mx-auto leading-relaxed text-lg">
            A glimpse into the transformations, artistry, and experiences we
            create for every client who steps through our doors.
          </p>
        </div>

        {/* Category filters — visual only for static site */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors cursor-default select-none ${
                i === 0
                  ? "bg-studio-accent text-studio-bg border-studio-accent"
                  : "bg-transparent text-studio-muted border-studio-border hover:border-studio-accent/60 hover:text-studio-accent"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:border-studio-accent/50 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-bg/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <h3 className="text-studio-text font-semibold text-sm leading-snug">
                    {item.title}
                  </h3>
                  <span className="text-studio-accent text-xs font-medium flex-shrink-0 mt-0.5">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-studio-surface border border-studio-border text-studio-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Instagram CTA */}
        <p className="text-center text-studio-subtle text-sm mt-16">
          Follow us on Instagram{" "}
          <a
            href="#"
            className="text-studio-accent hover:underline underline-offset-2"
          >
            @yourbrand
          </a>{" "}
          for the latest transformations and behind-the-scenes moments.
        </p>
      </div>
    </div>
  );
}

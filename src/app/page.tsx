import HeroSection from "@/components/sections/HeroSection";
import PhilosophyStrip from "@/components/sections/PhilosophyStrip";
import FeaturedServices from "@/components/sections/FeaturedServices";
import AboutSection from "@/components/sections/AboutSection";
import RitualSection from "@/components/sections/RitualSection";
import GallerySection from "@/components/sections/GallerySection";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PhilosophyStrip />
      <FeaturedServices />
      <AboutSection />
      <RitualSection />
      <GallerySection />
      <CtaBanner />
    </>
  );
}

import HeroSection from "@/components/HeroSection";
import GamePreviewSection from "@/components/GamePreviewSection";
import FeatureSection from "@/components/FeatureSection";
import RoadmapSection from "@/components/RoadmapSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import FloatingRewards from "@/components/FloatingRewards";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GamePreviewSection />
      <FeatureSection />
      <RoadmapSection />
      <CommunitySection />
      <Footer />
      <FloatingRewards />
    </>
  );
}

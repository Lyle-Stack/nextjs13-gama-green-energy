import AboutUsSection from "@/components/home/AboutUsSection";
import CostEffectivenessSection from "@/components/home/CostEffectivenessSection";
import HeroSection from "@/components/home/HeroSection";
import OurStrengthSection from "@/components/home/OurStrengthSection";
import PartnerSection from "@/components/home/PartnerSection";
import zhContext from "@/constants/texts/zh";
import React from "react";

const Home = () => {
  return (
    <main>
      <HeroSection {...zhContext.heroSection} />
      <AboutUsSection {...zhContext.aboutUsSection} />
      <CostEffectivenessSection {...zhContext.costEffectivenessSection} />
      <OurStrengthSection {...zhContext.ourStrengthSection} />
      <PartnerSection {...zhContext.partnerSection} />
    </main>
  );
};

export default Home;

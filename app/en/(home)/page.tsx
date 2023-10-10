import AboutUsSection from "@/components/home/AboutUsSection";
import CostEffectivenessSection from "@/components/home/CostEffectivenessSection";
import HeroSection from "@/components/home/HeroSection";
import OurStrengthSection from "@/components/home/OurStrengthSection";
import PartnerSection from "@/components/home/PartnerSection";
import enContext from "@/constants/texts/en";
import React from "react";

const Home = () => {
  return (
    <main>
      <HeroSection {...enContext.heroSection} />
      <AboutUsSection {...enContext.aboutUsSection} />
      <CostEffectivenessSection {...enContext.costEffectivenessSection} />
      <OurStrengthSection {...enContext.ourStrengthSection} />
      <PartnerSection {...enContext.partnerSection} />
    </main>
  );
};

export default Home;

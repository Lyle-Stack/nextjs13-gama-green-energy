import AboutUsSection from "@/components/home/AboutUsSection";
import CostEffectivenessSection from "@/components/home/CostEffectivenessSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import OurStrengthSection from "@/components/home/OurStrengthSection";
import PartnerSection from "@/components/home/PartnerSection";
import PracticalCaseSection from "@/components/home/PracticalCaseSection";
import SolutionSection from "@/components/home/SolutionSection";
import enContext from "@/constants/texts/en";
import React from "react";

const Home = () => {
  return (
    <main>
      <HeroSection {...enContext.heroSection} />
      <AboutUsSection {...enContext.aboutUsSection} />
      <SolutionSection {...enContext.solutionSection} />
      <CostEffectivenessSection {...enContext.costEffectivenessSection} />
      <PracticalCaseSection {...enContext.practicalCaseSection} />
      <OurStrengthSection {...enContext.ourStrengthSection} />
      <FaqSection {...enContext.faqSection} />
      <PartnerSection {...enContext.partnerSection} />
    </main>
  );
};

export default Home;

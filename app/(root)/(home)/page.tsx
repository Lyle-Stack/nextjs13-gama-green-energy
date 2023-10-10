import AboutUsSection from "@/components/home/AboutUsSection";
import CostEffectivenessSection from "@/components/home/CostEffectivenessSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import OurStrengthSection from "@/components/home/OurStrengthSection";
import PartnerSection from "@/components/home/PartnerSection";
import PracticalCaseSection from "@/components/home/PracticalCaseSection";
import SolutionSection from "@/components/home/SolutionSection";
import zhContext from "@/constants/texts/zh";
import React from "react";

const Home = () => {
  return (
    <main>
      <HeroSection {...zhContext.heroSection} />
      <AboutUsSection {...zhContext.aboutUsSection} />
      <SolutionSection {...zhContext.solutionSection} />
      <CostEffectivenessSection {...zhContext.costEffectivenessSection} />
      <PracticalCaseSection {...zhContext.practicalCaseSection} />
      <OurStrengthSection {...zhContext.ourStrengthSection} />
      <FaqSection {...zhContext.faqSection} />
      <PartnerSection {...zhContext.partnerSection} />
    </main>
  );
};

export default Home;

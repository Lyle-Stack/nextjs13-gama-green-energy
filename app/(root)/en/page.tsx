import HeroSection from "@/components/home/HeroSection";
import enContext from "@/constants/texts/en";
import React from "react";

const En = () => {
  return (
    <main>
      <HeroSection {...enContext.heroSection} />
    </main>
  );
};

export default En;

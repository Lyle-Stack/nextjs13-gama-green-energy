import { HeroSectionProps } from "@/types";
import Image from "next/image";
import React from "react";

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    // TODO: data-aos="fade-up"
    <section className="relative mb-12">
      <div className="section-p-mx-max flex h-[500px] flex-row items-center justify-start sm:h-[560px] md:h-[640px] lg:md:h-[720px] xl:md:h-[800px]">
        {/*  TODO: data-aos="fade-up" data-aos-mirror='true' data-aos-delay="200" */}
        <hgroup className="text-white">
          <h1 className="mb-2">{title}</h1>
          <h3>{subtitle}</h3>
        </hgroup>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <Image
          src="/images/BN.jpg"
          alt=""
          fill={true}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
};

export default HeroSection;

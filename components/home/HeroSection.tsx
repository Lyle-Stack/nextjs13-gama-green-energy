import { HeroSectionProps } from "@/types";
import Image from "next/image";
import React from "react";
import bn from "@/public/images/BN.jpg";

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    // TODO: data-aos="fade-up"
    <section id="back-to-top-anchor" className="relative mb-12">
      <div className="section-p-mx-max flex h-[500px] flex-row items-center justify-start sm:h-[560px] md:h-[640px] lg:md:h-[720px] xl:md:h-[800px]">
        {/*  TODO: data-aos="fade-up" data-aos-mirror='true' data-aos-delay="200" */}
        <hgroup className="text-white">
          <h1 className="mb-2">{title}</h1>
          <p className="h3">{subtitle}</p>
        </hgroup>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
        <Image
          src={bn}
          alt=""
          fill={true}
          className="object-cover"
          sizes="100vw"
          blurDataURL="/images/BN_blur.jpg"
          priority={true}
        />
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import Image from "next/image";
import { PartnerSectionProps } from "@/types";
import MovingBrand from "../shared/MovingBrand";

const PartnerSection = ({ title, titleDes }: PartnerSectionProps) => {
  return (
    <section className="mb-20">
      <div className="mb-10 bg-[#07451A]">
        <div className="section-p-mx-max grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-14">
          <div className="section-p flex flex-col items-center justify-start gap-5 sm:pr-0">
            <h2 className="mb-5 text-accent">{title}</h2>
            <p className="subtitle2 text-white">{titleDes}</p>
          </div>
          <div className="relative hidden h-full w-full sm:inline-block ">
            <Image
              src="/images/team.jpg"
              alt=""
              fill={true}
              className="object-cover"
              sizes="(max-width: 1536px) 50vw, 676px"
            />
          </div>
        </div>
      </div>

      <div className="section-p-mx-max">
        <MovingBrand />
      </div>
    </section>
  );
};

export default PartnerSection;

import React from "react";
import Image from "next/image";
import { CostEffectivenessSectionProps } from "@/types";
import IconFire from "@/public/icons/icon-fire_outlined.svg";
import IconSupperPowers from "@/public/icons/icon-superpowers.svg";
import IconCO2Colud from "@/public/icons/icon-co2_cloud_outlined.svg";
import IconBox from "@/public/icons/icon-box.svg";

const CostEffectivenessSection = ({
  title,
  titleDes,
  stage,
  listDescription,
}: CostEffectivenessSectionProps) => {
  return (
    <section
      id="solution"
      className="relative mx-auto mb-12 w-full max-w-screen-2xl sm:mb-24 md:mb-36 lg:mb-48"
    >
      {/* TODO: data-aos="fade-up" */}
      <div className="section-p w-full pt-0 sm:w-10/12 md:w-8/12">
        <h2 className="mb-5 text-secondary">{title}</h2>
        <p className="subtitle2">{titleDes}</p>
      </div>
      <div className="">
        {[
          {
            kw: "400 kW",
            gwh: "3.2 GWh",
            co2: "1,600 T",
            waste: "2,000 T",
          },
          {
            kw: "1.2 MW",
            gwh: "9.6 GWh",
            co2: "4,800 T",
            waste: "6,000 T",
          },
        ].map(({ kw, gwh, co2, waste }, ind) => (
          <div
            key={`top-${ind}`}
            className="mb-[60px] grid grid-cols-12 gap-y-5"
          >
            <h3 className="col-span-12 text-center text-secondary">
              {stage[ind]}
            </h3>
            {[
              { h2: kw, p: listDescription[0], icon: IconFire },
              { h2: gwh, p: listDescription[1], icon: IconSupperPowers },
              { h2: co2, p: listDescription[2], icon: IconCO2Colud },
              { h2: waste, p: listDescription[3], icon: IconBox },
            ].map(({ h2, p, icon }, index) => (
              <div
                key={`${h2}-${p}-${index}`}
                className={`col-span-3 flex h-[200px] flex-col items-center justify-center ${
                  index % 2 === 0 ? "bg-[#07451A]" : "bg-[#10692B]"
                }`}
              >
                <Image src={icon} alt="icon-fire" />
                <h2 className="text-base font-black leading-[1.37] text-accent sm:text-[1.8rem] md:text-[2rem] lg:text-4xl xl:text-[2.5rem]">
                  {h2}
                </h2>
                <p className="subtitle2 text-white">{p}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CostEffectivenessSection;

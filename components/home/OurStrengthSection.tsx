import React from "react";
import Image from "next/image";
import { OurStrengthSectionProps } from "@/types";
import IconIdea from "@/public/icons/icon-idea.svg";
import IconIdcard from "@/public/icons/icon-id_card.svg";
import IconFileText from "@/public/icons/icon-file_text_filled.svg";

const OurStrengthSection = ({ title, cards }: OurStrengthSectionProps) => {
  return (
    <div
      id="strength"
      className="section-p-mx-max mb-12 sm:mb-24 md:mb-36 lg:mb-48"
    >
      {/* TODO: data-aos="fade-up" */}
      <h2 className="mb-10 text-secondary">{title}</h2>
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 md:gap-5">
        {cards
          .map((card, index) => ({
            ...card,
            imgPath:
              index === 0
                ? "/images/advantage-01.jpg"
                : index === 1
                ? "/images/advantage-02.jpg"
                : "/images/advantage-03.jpg",
            icon:
              index === 0 ? IconIdea : index === 1 ? IconIdcard : IconFileText,
          }))
          .map(({ title, titleDes, imgPath, icon }, index) => (
            <div key={`card-${index}`} className="bg-[#07451A]">
              <div className="relative h-[230px]">
                <Image
                  src={imgPath}
                  alt={imgPath}
                  fill={true}
                  className="object-cover"
                  sizes="(max-width: 600px) 100vw, 30vw"
                />
              </div>
              <div className="px-6 pb-8 pt-6 sm:pb-12">
                <Image src={icon} alt={`icon ${title}`} />
                <h3 className="my-5 text-white">{title}</h3>
                <p className="body1 text-white">{titleDes}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurStrengthSection;

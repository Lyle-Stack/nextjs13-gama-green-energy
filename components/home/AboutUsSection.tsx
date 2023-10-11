import { AboutUsSectionProps } from "@/types";
import Image from "next/image";
import React from "react";
import YouTubeComp from "../shared/YouTubeComp";
import GamaWatermark from "@/public/icons/gama_watermark.svg";

const AboutUsSection = ({
  imagePart,
  descriptionPart,
}: AboutUsSectionProps) => {
  return (
    // TODO: data-aos="fade-up"
    <section
      id="aboutUs"
      className="relative mb-12 overflow-x-hidden sm:mb-24 md:mb-36 lg:mb-48"
    >
      <div className="section-p-mx-max flex flex-row items-center justify-center">
        <div className="grid grid-cols-12 gap-0 sm:gap-12">
          <div className="col-span-12 flex sm:col-span-4 sm:inline-block md:col-span-4">
            {imagePart.map((imgPart, index) => (
              <div
                key={imgPart.title}
                className="relative mb-20 flex w-full flex-col items-center justify-center px-4 py-5 sm:mb-0 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14 lg:py-10 xl:px-[72px] xl:py-5"
              >
                <div className="absolute left-0 top-0 -z-20 h-full w-full">
                  <Image
                    src={`/images/about_us_${index + 1}.jpg`}
                    alt=""
                    fill={true}
                    className="bg-gradient-to-t from-black/60 to-black/60 object-cover"
                    sizes="(max-width: 1536px) 30vw, 438px"
                  />
                </div>
                <div className="absolute left-0 top-0 -z-10 h-full w-full bg-gradient-to-t from-black/60 to-black/60"></div>
                <h3 className="mb-5 text-accent">{imgPart.title}</h3>
                <p className="body1 text-white">{imgPart.description}</p>
              </div>
            ))}
          </div>

          <div className="col-span-12 flex flex-col justify-center sm:col-span-7 md:ml-auto">
            <h2 className="mb-5 text-secondary">{descriptionPart.title}</h2>
            <p className="subtitle2 mb-8 sm:mb-[60px]">
              {descriptionPart.titileDes}
            </p>
            <h3 className="mb-5 text-secondary">
              {descriptionPart.subtitleFirstLine}
              <br />
              {descriptionPart.subtitleSecondLine}
            </h3>
            <p className="subtitle2">
              {descriptionPart.contentFirstPara} <br />
              <br />
              {descriptionPart.contentSecondPara}
            </p>
          </div>

          <div className="relative col-span-12 mt-12 block w-full sm:mt-auto">
            <div className="relative mx-auto aspect-video w-full max-w-4xl">
              <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
                <YouTubeComp videoId="L88JGeg-XXo" title="生質能源循環" />
              </div>
            </div>
            <div className="absolute right-0 top-0 h-[160px] w-[625px] -translate-y-full translate-x-[calc(50vw-50%)]">
              <Image src={GamaWatermark} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

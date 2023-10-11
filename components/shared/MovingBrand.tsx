"use client";

import React from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import logoOpeaTurbines from "@/public/images/logo-OPRA-Turbines.jpg";
import logoGreenEarthEco from "@/public/images/logo-green-earth-eco.jpg";
import logoSunshenAm from "@/public/images/logo-sunshen-am.png";
import logoAurelia from "@/public/images/logo-aurelia.png";
import logoSunsing from "@/public/images/logo-sunghsing.png";
import logoGreenProsperity from "@/public/images/logo-green-prosperity.png";
import logoAdicomp from "@/public/images/logo-adicomp.png";
import logoSunforce from "@/public/images/logo-sunforce.png";
import logoDPCleanTech from "@/public/images/logo-DPCleanTech.png";
import logoAirmenEnergy from "@/public/images/logo-airmen-energy.jpg";

const partnerList = [
  {
    imgPath: logoOpeaTurbines,
    alt: "OPRA Turbines - An Airem Energy Company",
    twAspectClass: "aspect-[1.8]",
    link: "https://www.opra.energy/zh/",
  },
  {
    imgPath: logoGreenEarthEco,
    alt: "綠美地環保資源 - Green Earth Eco",
    twAspectClass: "aspect-[1.3]",
    link: "https://www.104.com.tw/company/1a2x6bkweb",
  },
  {
    imgPath: logoSunshenAm,
    alt: "三生農機- San-Shen Agricultural Machinery",
    twAspectClass: "aspect-[1]",
    link: "http://www.sanshen-am.com.tw/zh-tw",
  },
  {
    imgPath: logoAurelia,
    alt: "Aurelia - Aurelia Turbines Oy",
    twAspectClass: "aspect-[1]",
    link: "https://aureliaturbines.com/",
  },
  {
    imgPath: logoSunsing,
    alt: "頌欣機械 - Sung-Hsing Enterprise",
    twAspectClass: "aspect-[2.6]",
    link: "https://www.hocom.tw/h/index?key=8277077768",
  },
  {
    imgPath: logoGreenProsperity,
    alt: "金茂榮環境工程 - Green Prosperity Eco-Awareness",
    twAspectClass: "aspect-[3]",
    link: "https://www.greenprosperity.com.tw/",
  },
  {
    imgPath: logoAdicomp,
    alt: "Adicomp S.r.l. - Advanced air and gas solutions",
    twAspectClass: "aspect-[2.1]",
    link: "https://www.adicomp.com/",
  },
  {
    imgPath: logoSunforce,
    alt: "晟福科技 - Sunforce Technologies",
    twAspectClass: "aspect-[2.8]",
    link: "https://www.sunforce.com.tw/",
  },
  {
    imgPath: logoDPCleanTech,
    alt: "DPClean Tech",
    twAspectClass: "aspect-[2.9]",
    link: "https://www.dpcleantech.com/",
  },
  {
    imgPath: logoAirmenEnergy,
    alt: "Airem Energy - Driving the World’s Energy Transition",
    twAspectClass: "aspect-[4]",
    link: "https://airemenergy.com/",
  },
];

const MovingBrand = () => {
  return (
    <TooltipProvider>
      <div className="flex w-full flex-row flex-wrap justify-around gap-x-2 sm:gap-x-4 md:gap-x-8">
        {partnerList.map(({ link, twAspectClass, imgPath, alt }) => (
          <Tooltip key={`${alt}-1`}>
            <TooltipTrigger
              className={`relative h-[120px] max-w-full ${twAspectClass}`}
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="relative block h-full w-full"
              >
                <Image
                  src={imgPath}
                  alt={alt}
                  fill={true}
                  className="object-contain"
                  sizes="480px"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="subtitle1">{alt}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default MovingBrand;

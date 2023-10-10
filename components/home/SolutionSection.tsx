import { SolutionSectionProps } from "@/types";
import Image from "next/image";
import React from "react";
import YouTubeComp from "../shared/YouTubeComp";
import GamaWatermark from "@/public/icons/gama_watermark.svg";

const SolutionSection = ({
  title,
  titleDes,
  subtitleFirst,
  contentFirst,
  subtitleSecond,
  contentSecond,
  subtitleThird,
  contentThird,
}: SolutionSectionProps) => {
  return (
    <section
      id="solution"
      className="relative mb-[60px] w-full overflow-x-hidden"
    >
      {/* TODO: data-aos="fade-up" */}
      <div className="w-full bg-[#050607]">
        <div className="section-p-mx-max section-p relative mb-[60px] grid grid-cols-12">
          <div className="absolute left-0 top-0 -z-0 h-full w-full overflow-hidden">
            <Image
              src="/images/solution_bg.jpg"
              alt=""
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="absolute left-0 top-0 -z-0 h-full w-full bg-gradient-to-t from-black/70 to-black/70"></div>
          <div className="relative z-0 col-span-5 col-start-2 hidden aspect-[4/3] sm:inline-block">
            <Image
              src="/images/solution_title.jpg"
              alt=""
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="z-0 col-span-10 col-start-2 mx-auto flex flex-col items-center justify-center sm:col-span-4 sm:col-start-8 sm:items-start">
            <h2 className="mb-5 text-accent">{title}</h2>
            <h5 className="text-white">{titleDes}</h5>
          </div>
        </div>
      </div>

      {/* TODO: data-aos="fade-up" */}
      <div className="section-p-mx-max relative">
        <h5 className="mb-5 block text-secondary">{subtitleFirst}</h5>
        <div className="relative grid grid-cols-12 justify-end">
          {contentFirst.map((c, i) => (
            <React.Fragment key={c}>
              <div className="relative col-span-4 mb-8 min-h-[150px] bg-neutral-100 py-2 pl-8 pr-4 sm:col-span-3 sm:min-h-[180px] sm:py-6 md:min-h-[200px]">
                {/* TODO: data-aos="fade-left" */}
                <div className="absolute right-0 top-[35%] h-[30%] w-[2px] bg-[#86D800]"></div>
                <h2 className="text-popover">{`0${i + 1}.`}</h2>
                <span className="subtitle2">{c}</span>
                {(i === 6 || i === 3) && (
                  <div className="absolute left-[100%] top-0 h-full w-[50vw] bg-neutral-100"></div>
                )}
              </div>
              {i === 3 && (
                <div className="hidden sm:col-span-3 sm:inline-block"></div>
              )}
              {i === 5 && <div className="col-span-8 sm:hidden"></div>}
            </React.Fragment>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 -z-10 mb-16 h-[160px] w-[625px]">
          <Image src={GamaWatermark} alt="" />
        </div>
      </div>

      <div className="section-p-mx-max section-p mb-20">
        <h5 className="mb-5 text-secondary">
          {subtitleSecond[0]}
          <br />
          {subtitleSecond[1]}
        </h5>
        <p className="subtitle2">
          {contentSecond[0]}
          <br />
          <br />
          {contentSecond[1]}
          <br />
          <br />
          {contentSecond[2]}
        </p>
      </div>

      {/* TODO: data-aos="fade-up" */}
      <div className="relative mb-20 w-full">
        <div className="absolute left-0 top-0 -z-0 h-full w-full bg-[#07451A] sm:w-1/2"></div>
        <div className="section-p-mx-max z-0 flex flex-col items-center sm:flex-row-reverse">
          <div className="relative aspect-[800/522] w-full sm:w-1/2">
            <Image
              src="/images/service-02.jpg"
              alt="去中心化"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="section-p relative w-full py-8 sm:w-1/2 sm:py-12 md:py-16 lg:py-20">
            <p className="subtitle2 text-white">{contentSecond[3]}</p>
          </div>
        </div>
      </div>

      {/* TODO: data-aos="fade-up" */}
      <div className="relative mb-20 w-full bg-neutral-100 py-[60px]">
        <div className="absolute right-0 top-0 -z-0 hidden h-full w-1/3 bg-white sm:block"></div>
        <div className="section-p-mx-max mb-20 flex flex-col sm:flex-row-reverse">
          <h5 className="mb-5 text-secondary sm:hidden">{subtitleThird}</h5>
          <div className="relative aspect-[461/260] w-full sm:ml-auto sm:w-5/12">
            <Image
              src="/images/aurelia_device_A400.png"
              alt="Aurelia A400"
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="relative w-full sm:w-1/2">
            <h5 className="mb-5 hidden text-secondary sm:inline-block">
              {subtitleThird}
            </h5>
            <p className="subtitle2">
              {contentThird[0]}
              <br />
              <br />
              {contentThird[1]}
            </p>
          </div>
        </div>

        <div className="relative z-0 mx-auto aspect-video w-full max-w-4xl">
          <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
            <YouTubeComp
              videoId="O-lvJtYNPXM"
              title="Aurelia Turbines introduction of the new turbine"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

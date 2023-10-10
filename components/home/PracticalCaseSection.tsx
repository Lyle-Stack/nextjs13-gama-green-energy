import React from "react";
import Image from "next/image";
import { PracticalCaseSectionProps } from "@/types";
import YouTubeComp from "../shared/YouTubeComp";

const PicHoverEffect = ({ title }: { title: string }) => (
  <div className="group absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-transparent transition-colors duration-300 hover:bg-black/70">
    <h5 className="relative translate-y-full px-6 py-2.5 text-accent opacity-0 transition-all duration-300 ease-linear after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0 after:border-b after:border-[#51FE28] after:transition-transform after:delay-75 after:duration-300 after:ease-linear group-hover:translate-y-0 group-hover:opacity-100 group-hover:after:scale-100">
      {title}
    </h5>
  </div>
);

const PracticalCaseSection = ({
  title,
  subtitleFirst,
  contentFirst,
  subtitleSecond,
  contentSecond,
  subtitleThird,
  contentThird,
  picGridSubtitle,
}: PracticalCaseSectionProps) => {
  return (
    <section
      id="showcase"
      className="relative mb-12 w-full overflow-x-hidden sm:mb-24 md:mb-36 lg:mb-48"
    >
      {/* TODO: data-aos="fade-up" */}
      <div className="mb-20 w-full bg-[#050607]">
        <div className="section-p-mx-max section-p relative mb-[60px] grid grid-cols-12">
          <div className="absolute left-0 top-0 -z-0 h-full w-full overflow-hidden">
            <Image
              src="/images/service-04.jpg"
              alt=""
              fill={true}
              className="object-cover"
              sizes="(max-width: 1536px) 100vw, 1500px"
            />
          </div>
          <div className="absolute left-0 top-0 -z-0 h-full w-full bg-gradient-to-t from-black/70 to-black/70"></div>
          <div className="z-0 col-span-10 col-start-2 mx-auto flex flex-col items-center justify-center gap-2.5 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
            <h2 className="text-accent">{title}</h2>
            <h5 className="text-white">{subtitleFirst}</h5>
            <h5 className="subtitle2 text-white">{contentFirst}</h5>
          </div>
        </div>
      </div>

      <div className="relative z-0 mx-auto mb-20 aspect-video w-full max-w-4xl">
        <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
          <YouTubeComp videoId="STVhhP6pmms" title="環保局稻稈計畫" />
        </div>
      </div>

      <div className="section-p-mx-max mb-20 bg-neutral-100 py-20">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <h5 className="mb-5 text-secondary sm:hidden">{subtitleSecond}</h5>
          <div className="relative mb-5 aspect-[461/260] w-full sm:w-5/12">
            <Image
              src="/images/gama_3d.jpg"
              alt="佳瑪外觀3D圖"
              fill={true}
              className="object-contain"
              sizes="(max-width: 600px) 100vw, (max-width: 1536px) 50vw, 600px"
            />
          </div>
          <div className="relative w-full sm:ml-auto sm:w-1/2">
            <h5 className="mb-5 hidden text-secondary sm:block">
              {subtitleSecond}
            </h5>
            <p className="subtitle2">
              {contentSecond[0]}
              <br />
              <br />
              {contentSecond[1]}
            </p>
          </div>
        </div>
      </div>

      <div className="section-p-mx-max section-p relative">
        <h2 className="mb-5 text-secondary">{subtitleThird}</h2>
        <h5 className="mb-10">{contentThird}</h5>
        <div className="grid w-full grid-cols-2 gap-6 md:grid-cols-3">
          <div className="relative col-start-1 row-span-2 row-start-1 h-full w-full">
            <Image
              src="/images/device-3.jpg"
              alt={picGridSubtitle[0]}
              fill={true}
              className="object-cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1536px) 30vw, 464px"
            />
            <PicHoverEffect title={picGridSubtitle[0]} />
          </div>
          <div className="relative col-start-1 row-start-3 aspect-[464/368] w-full md:col-start-3 md:row-start-2">
            <Image
              src="/images/device-5.jpg"
              alt={picGridSubtitle[4]}
              fill={true}
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1536px) 30vw, 464px"
            />
            <PicHoverEffect title={picGridSubtitle[4]} />
          </div>
          <div className="relative col-start-2 row-start-1 aspect-[464/368] w-full">
            <Image
              src="/images/device-1.jpg"
              alt={picGridSubtitle[1]}
              fill={true}
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1536px) 30vw, 464px"
            />
            <PicHoverEffect title={picGridSubtitle[1]} />
          </div>
          <div className="relative col-start-2 row-start-2 aspect-[464/368] w-full md:col-start-3 md:row-start-1">
            <Image
              src="/images/device-4.jpg"
              alt={picGridSubtitle[2]}
              fill={true}
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1536px) 30vw, 464px"
            />
            <PicHoverEffect title={picGridSubtitle[2]} />
          </div>
          <div className="relative col-start-2 row-start-3 aspect-[464/368] w-full md:col-start-2 md:row-start-2">
            <Image
              src="/images/device-2.jpg"
              alt={picGridSubtitle[3]}
              fill={true}
              className="object-contain"
              sizes="(max-width: 768px) 50vw, (max-width: 1536px) 30vw, 464px"
            />
            <PicHoverEffect title={picGridSubtitle[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalCaseSection;

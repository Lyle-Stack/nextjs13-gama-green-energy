import React from "react";
import Image from "next/image";
import { FaqSectionProps } from "@/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import qaBg from "@/public/images/qa_bg.jpg";

const FaqSection = ({
  title,
  subtitleFuel,
  qaFuel,
  subtitleTechnology,
  qaTechnology,
  subtitlePowGen,
  qaPowGen,
  subtitleApplication,
  qaApplication,
}: FaqSectionProps) => {
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
              src={qaBg}
              alt=""
              fill={true}
              className="object-cover"
              sizes="(max-width: 1536px) 100vw, 1500px"
            />
          </div>
          <div className="absolute left-0 top-0 -z-0 h-full w-full bg-gradient-to-t from-black/70 to-black/70"></div>
          <div className="z-0 col-span-10 col-start-2 mx-auto flex flex-col items-center justify-center gap-2.5 sm:col-span-8 sm:col-start-3 md:col-span-6 md:col-start-4">
            <h2 className="text-center text-accent">{title}</h2>
          </div>
        </div>
      </div>

      <div className="section-p-mx-max grid grid-cols-12 gap-6">
        {[
          { title: subtitleFuel, qas: qaFuel },
          {
            title: subtitleTechnology,
            qas: qaTechnology,
          },
          {
            title: subtitlePowGen,
            qas: qaPowGen,
          },
          {
            title: subtitleApplication,
            qas: qaApplication,
          },
        ].map(({ title, qas }, i) => (
          <React.Fragment key={title}>
            <div className="col-span-2 col-start-1 md:col-span-1 md:col-start-2">
              <div
                className={`flex h-full w-full flex-col items-center justify-center rounded ${
                  i === 0
                    ? "bg-[#0A5822]"
                    : i === 1
                    ? "bg-[#13702F]"
                    : i === 2
                    ? "bg-[#1F8940]"
                    : "bg-[#2DA351]"
                }`}
              >
                {title.split("").map((c, i) => (
                  <p
                    key={`qa-title-${i}`}
                    className="subtitle1 leading-tight text-white"
                  >
                    {c}
                  </p>
                ))}
              </div>
            </div>
            <Accordion
              type="multiple"
              className="col-span-10 col-start-3 grid grid-cols-1 gap-4 md:col-span-8"
            >
              {qas.map(({ q, a }, index) => (
                <AccordionItem
                  value={`item-${index + 1}`}
                  key={q}
                  className="overflow-hidden rounded px-4 shadow-md"
                >
                  <AccordionTrigger>
                    <span className="subtitle2 font-bold text-secondary">
                      {q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="body1">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

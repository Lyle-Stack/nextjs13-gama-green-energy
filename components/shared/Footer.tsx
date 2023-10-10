import React from "react";
import Image from "next/image";
import { FooterProps } from "@/types";
import PhoneIcon from "@/public/icons/Mui_Phone.svg";
import EmailIcon from "@/public/icons/MUI_Email.svg";
import WatchLaterIcon from "@/public/icons/Mui_WatchLater.svg";
import IconFax from "@/public/icons/icon-fax.svg";
import IconMapLocation from "@/public/icons/icon-map_location_dot.svg";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const PartnerSection = ({
  title,
  office,
  phone,
  fax,
  workHour,
  email,
  cta,
}: FooterProps) => {
  return (
    <section id="contactUs" className="bg-[#07451A]">
      <div className="relative block overflow-hidden">
        <div className="absolute left-0 top-0 -z-0 h-full w-full">
          <Image
            src="/images/footer-map.png"
            alt=""
            fill={true}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="z-10 mx-auto grid w-full max-w-screen-lg grid-cols-1 py-28 max-lg:px-0 sm:grid-cols-2">
          <div className="section-p flex flex-col items-start justify-start gap-4 bg-white/30 p-14 backdrop-blur">
            <h2 className="pb-6 text-white">{title}</h2>
            {[
              { title: office, icon: IconMapLocation },
              { title: phone, icon: PhoneIcon },
              { title: fax, icon: IconFax },
              { title: workHour, icon: WatchLaterIcon },
              { title: email, icon: EmailIcon },
            ].map(({ title, icon }) => (
              <div key={`footer-${title}`} className="flex flex-row">
                <Image
                  src={icon}
                  alt={title}
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <p className="subtitle1 ml-6 text-white">{title}</p>
              </div>
            ))}
          </div>
          <div className="z-0 mt-14 flex h-full w-full flex-col items-center justify-center">
            <a
              className="relative hidden h-24 w-24 cursor-pointer text-[#51FE28] sm:block"
              id="ball-scale"
              href="https://goo.gl/maps/sMFdpi6QEi2pxMwB9"
              target="_blank"
            >
              <div></div>
              <div></div>
              <div></div>
            </a>
            <a
              className="flex flex-row flex-nowrap items-center gap-3 rounded bg-[#86D800] px-6 py-2.5 text-white transition-colors duration-200 hover:bg-[#7dba1a] sm:mt-14"
              href={`mailto:${email}?subject=To Gama Green Energy&body=what you wanna ask us`}
              referrerPolicy="no-referrer"
            >
              <span className="subtitle1 font-black leading-8">{cta}</span>{" "}
              <ArrowRightIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="section-p-mx-max block pb-4 pt-6">
        <p className="body1 text-center text-white">
          Copyright © 2019 GAMA Green-Energy Technology Co., Ltd., All Right
          Reserved.
        </p>
      </div>
    </section>
  );
};

export default PartnerSection;

import { NavbarProps } from "@/types";
import React from "react";
import Image from "next/image";
import GamaLogo from "@/public/icons/gama-logo.svg";
import LangZh from "@/public/icons/lang_zh.svg";
import LangEn from "@/public/icons/lang_en.svg";
import Link from "next/link";
import MobileLinks from "@/components/navbar/MobileLinks";

const Navbar = ({ lang, pages }: NavbarProps) => {
  return (
    <nav
      aria-hidden="false"
      id="navbar-OnScrollTrigger"
      className="sticky top-0 z-40 translate-y-0 bg-white shadow-md transition-transform duration-500 aria-hidden:-translate-y-full"
    >
      <div className="section-p-mx-max flex flex-row items-center justify-between">
        <div className="flex flex-row flex-nowrap items-center">
          <Image src={GamaLogo} alt="Gama Logo" />
        </div>
        <div className="flex flex-row flex-nowrap items-center gap-4">
          <div className="hidden flex-row flex-nowrap items-center lg:flex">
            {pages.map((page, ind, arr) => {
              if (ind + 1 !== arr.length)
                return (
                  <Link
                    href={page.pathName}
                    key={page.pathName}
                    className="text-btn block p-2 text-base font-bold transition-all duration-300 hover:bg-[#07451A] hover:text-white"
                  >
                    {page.name}
                  </Link>
                );
              return (
                <a
                  href={page.pathName}
                  key={page.pathName}
                  className="text-btn block p-2 text-base font-bold transition-all duration-300 hover:bg-[#07451A] hover:text-white"
                >
                  {page.name}
                </a>
              );
            })}
          </div>
          <Link href={lang === "En" ? "/" : "/en"} className="py-2">
            {lang === "En" ? (
              <Image src={LangZh} alt="中文" />
            ) : (
              <Image src={LangEn} alt="EN" />
            )}
          </Link>
          <div className="inline lg:hidden">
            <MobileLinks pages={pages} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

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
      id="navbar-OnScrollTrigger"
      aria-hidden="false"
      className="sticky top-0 z-40 translate-y-0 bg-white shadow-md transition-transform duration-500 aria-hidden:-translate-y-full"
    >
      <div className="section-p-mx-max flex flex-row items-center justify-between">
        <a
          className="flex flex-row flex-nowrap items-center"
          href={lang === "En" ? "/en" : "/"}
          aria-label="home link"
          role="button"
        >
          <Image src={GamaLogo} alt="Gama Logo" />
        </a>
        <div className="flex flex-row flex-nowrap items-center gap-4">
          <div className="hidden flex-row flex-nowrap items-center lg:flex">
            {pages.map((page) => (
              <Link
                href={page.pathName}
                key={page.pathName}
                className="text-btn block p-2 text-base font-bold transition-all duration-300 hover:bg-[#07451A] hover:text-white"
              >
                {page.name}
              </Link>
            ))}
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

      {/* TODO: ToTopButton */}
    </nav>
  );
};

export default Navbar;

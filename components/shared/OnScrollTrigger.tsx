"use client";

import { debounce } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import IconScrollToTop from "@/public/icons/icon-scroll_to_top.svg";

const OnScrollTrigger = () => {
  const toTopBtn = useRef<HTMLAnchorElement>(null);
  const navbar = document.querySelector("#navbar-OnScrollTrigger");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;

      if (navbar) {
        navbar.ariaHidden = String(
          currentScrollPos > 300 ? prevScrollPos - 70 < currentScrollPos : false
        );
      }
      if (toTopBtn?.current) {
        toTopBtn.current.ariaHidden = String(
          currentScrollPos < 300 || prevScrollPos - 70 < currentScrollPos
        );
      }

      setPrevScrollPos(currentScrollPos);
    }, 80);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, navbar]);
  return (
    <a
      aria-hidden="true"
      href="#back-to-top-anchor"
      className="fixed bottom-8 right-4 z-50 translate-x-0 translate-y-0 scale-100 transition-transform duration-300 aria-hidden:translate-x-7 aria-hidden:translate-y-7 aria-hidden:scale-0"
      ref={toTopBtn}
    >
      <Image src={IconScrollToTop} alt="scroll to top" width={60} height={60} />
    </a>
  );
};

export default OnScrollTrigger;

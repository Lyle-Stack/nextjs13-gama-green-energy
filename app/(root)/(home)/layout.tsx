import React from "react";
import Navbar from "@/components/shared/Navbar";
import ZhContext from "@/constants/texts/zh";
import Footer from "@/components/shared/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar {...ZhContext.navbar} />
      {children}
      <Footer {...ZhContext.footer} />
    </>
  );
}

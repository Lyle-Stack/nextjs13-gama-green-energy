import React from "react";
import Navbar from "@/components/shared/Navbar";
import EnContext from "@/constants/texts/en";
import Footer from "@/components/shared/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar {...EnContext.navbar} />
      {children}
      <Footer {...EnContext.footer} />
    </>
  );
}

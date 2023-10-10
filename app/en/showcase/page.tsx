import PracticalCaseSection from "@/components/home/PracticalCaseSection";
import enContext from "@/constants/texts/en";
import React from "react";
import type { Metadata } from "next";
import { metaDescription, ogImageUrl, siteUrl } from "@/app/layout";

const title = "Case Study | Gama Green Energy";

export const metadata: Metadata = {
  alternates: {
    canonical: "/showcase",
    languages: {
      en: [
        {
          title: "Case Study | Gama Green Energy",
          url: "/en/showcase",
        },
      ],
    },
  },
  title,
  openGraph: {
    type: "website",
    url: new URL("/en/showcase", siteUrl),
    title,
    siteName: title,
    description: metaDescription,
    images: [{ url: ogImageUrl }],
    locale: "en",
  },
  twitter: {
    card: "summary",
    title,
    images: [{ url: ogImageUrl }],
    description: metaDescription,
  },
};

const Home = () => {
  return (
    <main>
      <PracticalCaseSection {...enContext.practicalCaseSection} />
    </main>
  );
};

export default Home;

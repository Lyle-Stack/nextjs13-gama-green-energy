import PracticalCaseSection from "@/components/home/PracticalCaseSection";
import zhContext from "@/constants/texts/zh";
import React from "react";
import type { Metadata } from "next";
import { metaDescription, ogImageUrl, siteUrl } from "@/app/layout";

const title = "案例實績 | 佳瑪環能科技";

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
    url: new URL("/showcase", siteUrl),
    title,
    siteName: title,
    description: metaDescription,
    images: [{ url: ogImageUrl }],
    locale: "zh_tw",
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
      <PracticalCaseSection {...zhContext.practicalCaseSection} />
    </main>
  );
};

export default Home;

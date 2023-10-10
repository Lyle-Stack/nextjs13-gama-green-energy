import SolutionSection from "@/components/home/SolutionSection";
import zhContext from "@/constants/texts/zh";
import React from "react";
import type { Metadata } from "next";
import { metaDescription, ogImageUrl, siteUrl } from "@/app/layout";

const title = "解決方案 | 佳瑪環能科技";

export const metadata: Metadata = {
  alternates: {
    canonical: "/solution",
    languages: {
      en: [
        {
          title: "Total Solution | Gama Green Energy",
          url: "/en/solution",
        },
      ],
    },
  },
  title,
  openGraph: {
    type: "website",
    url: new URL("/solution", siteUrl),
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
      <SolutionSection {...zhContext.solutionSection} />
    </main>
  );
};

export default Home;

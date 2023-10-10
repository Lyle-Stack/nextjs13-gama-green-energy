import FaqSection from "@/components/home/FaqSection";
import zhContext from "@/constants/texts/zh";
import React from "react";
import type { Metadata } from "next";
import { metaDescription, ogImageUrl, siteUrl } from "@/app/layout";

const title = "相關問答 | 佳瑪環能科技";

export const metadata: Metadata = {
  alternates: {
    canonical: "/faq",
    languages: {
      en: [
        {
          title: "Q&A | Gama Green Energy",
          url: "/en/faq",
        },
      ],
    },
  },
  title,
  openGraph: {
    type: "website",
    url: new URL("/faq", siteUrl),
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
      <FaqSection {...zhContext.faqSection} />
    </main>
  );
};

export default Home;

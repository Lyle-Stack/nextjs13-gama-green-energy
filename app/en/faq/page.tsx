import FaqSection from "@/components/home/FaqSection";
import enContext from "@/constants/texts/en";
import React from "react";
import type { Metadata } from "next";
import { metaDescription, ogImageUrl, siteUrl } from "@/app/layout";

const title = "Q&A | Gama Green Energy";

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
    url: new URL("/en/faq", siteUrl),
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
      <FaqSection {...enContext.faqSection} />
    </main>
  );
};

export default Home;

import SolutionSection from "@/components/home/SolutionSection";
import enContext from "@/constants/texts/en";
import React from "react";
import type { Metadata } from "next";
import { metaDescription, ogImageUrl, siteUrl } from "@/app/layout";

const title = "Total Solution | Gama Green Energy";

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
    url: new URL("/en/solution", siteUrl),
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
      <SolutionSection {...enContext.solutionSection} />
    </main>
  );
};

export default Home;

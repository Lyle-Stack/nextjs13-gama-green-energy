import React from "react";
import dynamic from "next/dynamic";
import "./globals.css";
import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Inter, Noto_Sans_TC } from "next/font/google";
const OnScrollTrigger = dynamic(
  () => import("@/components/shared/OnScrollTrigger"),
  {
    ssr: false,
  }
);

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metaDescription =
  "佳瑪環能運用特殊氣化(Gasification)技術，將有機廢棄資源轉化為廢棄物衍生燃料(RDF)中具有較高能源轉換效率的RDF-7合成氣(syngas)，再透過微型渦輪發電機(MTG)轉換成電力提供穩定的再生能源";
const title = "佳瑪環能科技 | Gama Green Engergy";
export const siteUrl = new URL("https://gama-green.tw/");
export const ogImageUrl = new URL("/images/leaf.jpg", siteUrl);

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: {
    canonical: "/",
    languages: {
      en: [
        {
          title: "Gama Green Energy",
          url: "/en",
        },
      ],
    },
  },
  title,
  description: metaDescription,
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    url: siteUrl,
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
  keywords: [
    "佳瑪環能",
    "waste to energy",
    "green energy",
    "廢棄物處理",
    "循環經濟",
  ],
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" className="scroll-smooth">
      <body
        className={`${inter.className} ${notoSansTC.className} text-primary`}
      >
        <div id="back-to-top-anchor"></div>
        <OnScrollTrigger />
        {children}
      </body>
    </html>
  );
}

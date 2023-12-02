import React from "react";
import type { Metadata } from "next";
import { Oswald, Fira_Sans as firaSans } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const firasans = firaSans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

export const BASE_URL = "https://eco1-six.vercel.app/";
export const TITLE = "Eco solution";
export const DESCRIPTION = "Eco solution – your partner ";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: TITLE,
    locale: "en",
    type: "website",
  },
  metadataBase: new URL(BASE_URL),
  manifest: "/meta/manifest.webmanifest",
  robots: "all",
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firasans.variable} ${oswald.variable}`}>
        <ActiveSectionContextProvider>
          <Navbar />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

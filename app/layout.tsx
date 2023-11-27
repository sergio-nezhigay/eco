import React from "react";
import type { Metadata } from "next";
import { Oswald, Fira_Sans as firaSans } from "next/font/google";
import "./globals.css";

const firasans = firaSans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Eco",
  description: "Eco",
  // icons: { icon: "/assets/images/site-logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firasans.variable} ${oswald.variable}`}>
        {children}
      </body>
    </html>
  );
}

import React from "react";
import { Manrope } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import AudioProvider from "@/providers/AudioProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bhutanese Podcaster",
  description: "Generate your podcast using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <body className={manrope.className}>
          <AudioProvider>{children}</AudioProvider>
        </body>
      </html>
    </ConvexClerkProvider>
  );
}

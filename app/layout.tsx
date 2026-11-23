import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const barlow = Barlow_Condensed({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });

export const metadata: Metadata = {
  title: "VEDRIX AUTO | EV Components & Automobile Spare Parts",
  description: "EV components, conversion kits and automobile spare parts supplied across India from Rajkot, Gujarat.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${barlow.variable}`}>{children}</body></html>;
}

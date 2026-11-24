import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
const barlow = Barlow_Condensed({ subsets: ["latin"], variable: "--font-display", weight: ["600", "700"] });
const siteUrl = "https://www.vedrixautoparts.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VEDRIX AUTO | EV Components & Automobile Spare Parts",
    template: "%s | VEDRIX AUTO",
  },
  description: "VEDRIX AUTO supplies EV conversion kits, lithium batteries, hub motors, chargers, controllers and automobile spare parts from Rajkot, Gujarat.",
  applicationName: "VEDRIX AUTO",
  keywords: [
    "EV components India",
    "EV conversion kits",
    "lithium batteries",
    "electric hub motors",
    "EV chargers",
    "motor controllers",
    "automobile spare parts Rajkot",
    "auto parts Gujarat",
  ],
  authors: [{ name: "VEDRIX AUTO PARTS PVT. LTD." }],
  creator: "VEDRIX AUTO PARTS PVT. LTD.",
  publisher: "VEDRIX AUTO PARTS PVT. LTD.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "VEDRIX AUTO",
    title: "VEDRIX AUTO | EV Components & Automobile Spare Parts",
    description: "EV components and automobile spare parts for retail, wholesale, dealer, distributor and bulk requirements.",
    images: [{
      url: "/images/hero-balanced-v6.webp",
      width: 1672,
      height: 941,
      alt: "VEDRIX AUTO electric vehicle components and automobile spare parts",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VEDRIX AUTO | EV Components & Automobile Spare Parts",
    description: "EV components and automobile spare parts supplied from Rajkot, Gujarat.",
    images: ["/images/hero-balanced-v6.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/images/vedrix-icon.png" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "AutoPartsStore"],
  name: "VEDRIX AUTO PARTS PVT. LTD.",
  alternateName: "VEDRIX AUTO",
  url: siteUrl,
  logo: `${siteUrl}/images/vedrix-logo.png`,
  slogan: "Powering the Future of Mobility",
  description: "Automobile and electric mobility business supplying EV components and automobile spare parts.",
  email: "vedrixauto@gmail.com",
  telephone: ["+91 7048437976", "+91 7283889492"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Electric vehicle conversion kits",
    "Lithium batteries",
    "Electric hub motors",
    "EV chargers",
    "Motor controllers",
    "Automobile spare parts",
    "EV accessories",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7048437976",
    contactType: "sales",
    areaServed: "IN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={`${manrope.variable} ${barlow.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

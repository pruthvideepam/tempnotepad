import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const siteUrl = "https://tempnotepad.com";
const title = "Free Online Notepad for Temporary Notes | TempNotepad";
const description =
  "TempNotepad is a free online notepad for temporary notes, quick writing, and simple text sharing. No signup required. Open a link and start writing instantly.";
const ogImage = `${siteUrl}/opengraph-image.png`;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "TempNotepad",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "TempNotepad homepage preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "TempNotepad",
        url: siteUrl,
        description,
      },
      {
        "@type": "Organization",
        name: "TempNotepad",
        url: siteUrl,
        logo: `${siteUrl}/favicon.ico`,
      },
      {
        "@type": "WebPage",
        name: title,
        url: siteUrl,
        description,
        isPartOf: {
          "@type": "WebSite",
          name: "TempNotepad",
          url: siteUrl,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: "TempNotepad",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Web",
        url: siteUrl,
        description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomeClient />
    </>
  );
}
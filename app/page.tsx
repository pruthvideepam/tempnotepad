import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const siteUrl = "https://tempnotepad.com";
const title = "Free Online Temporary Notepad | TempNotepad";
const description =
  "TempNotepad is a free online temporary notepad to write, save, and share text instantly with a simple URL. No signup, no install, just quick note sharing.";
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
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

const siteUrl = "https://tempnotepad.com";
const title = "TempNotepad — Free Online Temporary Notepad";
const description =
  "TempNotepad is a free online temporary notepad to write, save, and share text instantly with a simple URL. No signup, no install, just quick note sharing.";

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
  },
  twitter: {
    card: "summary",
    title,
    description,
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
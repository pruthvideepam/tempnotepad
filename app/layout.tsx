import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tempnotepad.com"),
  title: {
    default: "TempNotepad",
    template: "%s",
  },
  description:
    "TempNotepad is a free online temporary notepad for quick notes, text sharing, and simple browser writing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TempNotepad",
    description:
      "Free online temporary notepad for quick notes, text sharing, and simple browser writing.",
    url: "/",
    siteName: "TempNotepad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TempNotepad",
    description:
      "Free online temporary notepad for quick notes, text sharing, and simple browser writing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
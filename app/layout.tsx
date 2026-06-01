import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://tempnotepad.com"),
  title: {
    default: "TempNotepad",
    template: "%s | TempNotepad",
  },
  description:
    "TempNotepad is a simple online temporary notepad for quick text sharing, browser notes, and lightweight writing workflows.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TempNotepad",
    description:
      "Simple browser-based temporary notepad for quick notes and text sharing.",
    url: "/",
    siteName: "TempNotepad",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TempNotepad",
    description:
      "Simple browser-based temporary notepad for quick notes and text sharing.",
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
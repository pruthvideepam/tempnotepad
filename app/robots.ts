import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tempnotepad.com/sitemap.xml",
    host: "https://tempnotepad.com",
  };
}
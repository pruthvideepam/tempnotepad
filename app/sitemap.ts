import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";

const baseUrl = "https://tempnotepad.com";
const siteLastModified = "2026-05-30T06:15:56.749Z";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/founder`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: siteLastModified,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: siteLastModified,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    images: post.image ? [`${baseUrl}${post.image}`] : [],
  }));

  return [...staticPages, ...blogPages];
}
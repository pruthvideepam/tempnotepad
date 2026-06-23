import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blogs";

const baseUrl = "https://tempnotepad.com";

const lastmod = {
  home: "2026-06-23",
  blog: "2026-06-23",
  faq: "2026-06-23",
  about: "2026-05-30",
  founder: "2026-05-30",
  privacy: "2026-05-30",
  terms: "2026-05-30",
  contact: "2026-05-30",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: lastmod.home,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastmod.blog,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastmod.about,
    },
    {
      url: `${baseUrl}/founder`,
      lastModified: lastmod.founder,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: lastmod.privacy,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastmod.terms,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastmod.contact,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastmod.faq,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    images: post.image ? [`${baseUrl}${post.image}`] : [],
  }));

  return [...staticPages, ...blogPages];
}
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blogs";
import SiteFooterNav from "@/components/SiteFooterNav";

const siteUrl = "https://tempnotepad.com";
const pageTitle = "Online Notepad Tips and Guides | TempNotepad";
const pageDescription =
  "Read practical guides about online notepads, temporary notes, text sharing, browser writing, and simple productivity workflows with TempNotepad.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/blog`,
    siteName: "TempNotepad",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
};

const featuredLinks = [
  {
    href: "/blog/share-temporary-notes-online",
    label: "How to Share Temporary Notes Online Quickly",
  },
  {
    href: "/blog/online-notepad-for-students",
    label: "Online Notepad for Students: Best Uses and Benefits",
  },
  {
    href: "/blog/when-to-use-temporary-notepad",
    label: "When to Use a Temporary Notepad",
  },
];

const priorityOrder = [
  "share-temporary-notes-online",
  "online-notepad-for-students",
  "when-to-use-temporary-notepad",
  "send-text-phone-laptop",
];

const sortedPosts = [
  ...blogPosts.filter((post) => priorityOrder.includes(post.slug)).sort((a, b) => {
    return priorityOrder.indexOf(a.slug) - priorityOrder.indexOf(b.slug);
  }),
  ...blogPosts.filter((post) => !priorityOrder.includes(post.slug)),
];

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    url: `${siteUrl}/blog`,
    description: pageDescription,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sortedPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${siteUrl}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f3f3",
        padding: "56px 16px",
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
        color: "#111",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            color: "#444",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Back to TempNotepad home
        </Link>

        <h1
          style={{
            fontSize: "clamp(36px, 7vw, 64px)",
            margin: "0 0 12px",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Online Notepad Tips and Guides
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            margin: "0 0 18px",
            lineHeight: 1.6,
            maxWidth: "720px",
          }}
        >
          Explore practical guides about online notepads, temporary notes, quick
          text sharing, browser writing, and simple ways to use TempNotepad for
          study, work, and everyday tasks.
        </p>

        <section
          style={{
            background: "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "14px",
            padding: "22px",
            marginBottom: "26px",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "24px",
            }}
          >
            Start here
          </h2>

          <p
            style={{
              margin: "0 0 12px",
              fontSize: "16px",
              lineHeight: 1.75,
              color: "#444",
            }}
          >
            If you are new to TempNotepad, start with these guides to understand
            how temporary online notes work, when to use them, and how to share
            text quickly with a simple link.
          </p>

          <div
            style={{
              display: "grid",
              gap: "10px",
            }}
          >
            {featuredLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "#222",
                  textDecoration: "underline",
                  fontSize: "16px",
                  lineHeight: 1.7,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <div
          style={{
            display: "grid",
            gap: "22px",
          }}
        >
          {sortedPosts.map((post) => (
            <article
              key={post.slug}
              style={{
                border: "1px solid #d4d4d4",
                borderRadius: "16px",
                padding: "20px",
                background: "#fff",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: "18px",
                }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    display: "block",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 8",
                      overflow: "hidden",
                      borderRadius: "12px",
                      marginBottom: "16px",
                      background: "#e8e8e8",
                    }}
                  >
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 980px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Link>

                <div
                  style={{
                    fontSize: "13px",
                    color: "#666",
                  }}
                >
                  {post.category} · {post.publishedAt} · {post.readingTime}
                </div>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "28px",
                    lineHeight: 1.2,
                  }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      color: "#111",
                      textDecoration: "none",
                    }}
                  >
                    {post.title}
                  </Link>
                </h2>

                <p
                  style={{
                    margin: 0,
                    color: "#555",
                    fontSize: "16px",
                    lineHeight: 1.7,
                  }}
                >
                  {post.description}
                </p>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "20px",
                    color: "#444",
                    lineHeight: 1.8,
                    fontSize: "15px",
                  }}
                >
                  {post.takeaways.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    color: "#222",
                    fontSize: "15px",
                    textDecoration: "underline",
                  }}
                >
                  Read more about {post.title}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section
          style={{
            background: "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "14px",
            padding: "22px",
            marginTop: "26px",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "24px",
            }}
          >
            More about TempNotepad
          </h2>

          <p
            style={{
              margin: "0 0 12px",
              fontSize: "16px",
              lineHeight: 1.75,
              color: "#444",
            }}
          >
            TempNotepad is built for fast browser-based writing, temporary
            notes, and simple text sharing. Open the homepage to create a note
            instantly and start writing without signup.
          </p>

          <Link
            href="/"
            style={{
              color: "#222",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            Open the TempNotepad homepage
          </Link>
        </section>

        <SiteFooterNav />
      </div>
    </main>
  );
}
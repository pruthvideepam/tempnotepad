import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogs";
import SiteFooterNav from "@/components/SiteFooterNav";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://tempnotepad.com";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | TempNotepad",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: "TempNotepad",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [
        {
          url: `${siteUrl}${post.image}`,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${siteUrl}${post.image}`],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: [`${siteUrl}${post.image}`],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: "Pruthvi Deepam L A",
      url: `${siteUrl}/founder`,
    },
    publisher: {
      "@type": "Organization",
      name: "TempNotepad",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/favicon.ico`,
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f3f3",
        padding: "48px 16px 64px",
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
        color: "#111",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <article
        style={{
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <nav
          aria-label="Breadcrumb"
          style={{
            fontSize: "14px",
            color: "#666",
            marginBottom: "16px",
          }}
        >
          <Link
            href="/"
            style={{
              color: "#666",
              textDecoration: "underline",
            }}
          >
            Home
          </Link>{" "}
          /{" "}
          <Link
            href="/blog"
            style={{
              color: "#666",
              textDecoration: "underline",
            }}
          >
            Blog
          </Link>{" "}
          / <span>{post.title}</span>
        </nav>

        <Link
          href="/blog"
          style={{
            display: "inline-block",
            marginBottom: "20px",
            color: "#444",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          ← Back to blog
        </Link>

        <div
          style={{
            fontSize: "14px",
            color: "#666",
            marginBottom: "12px",
          }}
        >
          {post.category} · Published {post.publishedAt} · Updated{" "}
          {post.updatedAt} · {post.readingTime}
        </div>

        <h1
          style={{
            fontSize: "clamp(34px, 6vw, 58px)",
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            margin: "0 0 16px",
          }}
        >
          {post.title}
        </h1>

        <p
          style={{
            fontSize: "19px",
            lineHeight: 1.7,
            color: "#555",
            margin: "0 0 28px",
          }}
        >
          {post.description}
        </p>

        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 8",
            overflow: "hidden",
            borderRadius: "14px",
            marginBottom: "26px",
            background: "#e8e8e8",
          }}
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 860px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <section
          style={{
            background: "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "14px",
            padding: "22px",
            marginBottom: "20px",
          }}
        >
          <p
            style={{
              margin: "0 0 18px",
              fontSize: "17px",
              lineHeight: 1.85,
              color: "#222",
            }}
          >
            {post.intro}
          </p>

          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "24px",
            }}
          >
            Key takeaways
          </h2>

          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              color: "#444",
              lineHeight: 1.8,
              fontSize: "16px",
            }}
          >
            {post.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          {post.sections.map((section) => (
            <section
              key={section.heading}
              style={{
                background: "#fff",
                border: "1px solid #d4d4d4",
                borderRadius: "14px",
                padding: "22px",
              }}
            >
              <h2
                style={{
                  margin: "0 0 14px",
                  fontSize: "26px",
                  lineHeight: 1.25,
                }}
              >
                {section.heading}
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: "14px",
                }}
              >
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    style={{
                      margin: 0,
                      fontSize: "17px",
                      lineHeight: 1.85,
                      color: "#222",
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section
          style={{
            background: "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "14px",
            padding: "22px",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "26px",
            }}
          >
            Frequently asked questions
          </h2>

          <div
            style={{
              display: "grid",
              gap: "16px",
            }}
          >
            {post.faq.map((item) => (
              <div key={item.question}>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: "20px",
                    lineHeight: 1.35,
                  }}
                >
                  {item.question}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    lineHeight: 1.8,
                    color: "#444",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "14px",
            padding: "22px",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "26px",
            }}
          >
            Related articles
          </h2>

          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                style={{
                  color: "#222",
                  textDecoration: "underline",
                  fontSize: "16px",
                  lineHeight: 1.7,
                }}
              >
                Read more about {item.title}
              </Link>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "14px",
            padding: "22px",
            marginTop: "20px",
          }}
        >
          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "26px",
            }}
          >
            Try TempNotepad
          </h2>

          <p
            style={{
              margin: "0 0 12px",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#444",
            }}
          >
            Want to create and share a temporary note right away? Open the
            homepage and start writing instantly without signing up.
          </p>

          <Link
            href="/"
            style={{
              color: "#222",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            Open TempNotepad
          </Link>
        </section>

        <SiteFooterNav />
      </article>
    </main>
  );
}
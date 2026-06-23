import Link from "next/link";
import type { Metadata } from "next";
import SiteFooterNav from "@/components/SiteFooterNav";

export const metadata: Metadata = {
  title: "Online Notepad FAQ | TempNotepad",
  description:
    "Read common questions about TempNotepad, a free online notepad for temporary notes, quick writing, sharing text with a link, and browser-based note taking.",
  alternates: {
    canonical: "/faq",
  },
};

const faqs = [
  {
    question: "What is TempNotepad?",
    answer:
      "TempNotepad is a free online notepad for temporary notes, quick writing, and simple text sharing in your browser.",
  },
  {
    question: "How does TempNotepad work?",
    answer:
      "You open a note page, type directly in the browser, and use the page link when you want to revisit or share the same note.",
  },
  {
    question: "Do I need to sign up to use TempNotepad?",
    answer:
      "No. TempNotepad is designed for fast use, so you can start writing without creating an account.",
  },
  {
    question: "Can I share a note with someone else?",
    answer:
      "Yes. You can share the note link with another person so they can open the same page.",
  },
  {
    question: "Is TempNotepad an online notepad or a permanent notes app?",
    answer:
      "TempNotepad is better for temporary notes, quick drafts, short writing, and simple sharing than for long-term permanent note storage.",
  },
  {
    question: "Can I use TempNotepad on mobile?",
    answer:
      "Yes. TempNotepad works in a browser on phones, tablets, and desktop devices.",
  },
  {
    question: "Can I use TempNotepad to move text between phone and laptop?",
    answer:
      "Yes. One of the easiest use cases is opening the same note link on different devices when you want to move text quickly.",
  },
  {
    question: "What kind of notes is TempNotepad best for?",
    answer:
      "It works well for quick reminders, copied text, rough drafts, links, simple collaboration, short class notes, and lightweight code snippets.",
  },
  {
    question: "Can students use TempNotepad for classes?",
    answer:
      "Yes. Students can use it for short study notes, quick group sharing, collecting links, and rough writing during class or revision.",
  },
  {
    question: "Should I store passwords or sensitive information in TempNotepad?",
    answer:
      "It is better to avoid storing highly sensitive, confidential, or regulated information in temporary online note tools unless you fully understand their privacy and security model.",
  },
  {
    question: "Can I create a custom note link?",
    answer:
      "Yes. TempNotepad lets you open a custom note link when you want a simple URL that is easier to remember and share.",
  },
  {
    question: "Where can I learn more about using an online notepad?",
    answer:
      "You can visit the blog for guides about sharing temporary notes online, common note-taking use cases, and practical ways to use a browser-based notepad.",
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
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
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div
        style={{
          maxWidth: "860px",
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
          ← Back to Home
        </Link>

        <h1
          style={{
            fontSize: "clamp(36px, 7vw, 64px)",
            margin: "0 0 12px",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Online Notepad FAQ
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            margin: "0 0 32px",
            lineHeight: 1.6,
            maxWidth: "720px",
          }}
        >
          Answers to common questions about TempNotepad, a free online notepad
          for temporary notes, simple sharing, and quick browser-based writing.
        </p>

        <div
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          {faqs.map((item) => (
            <section
              key={item.question}
              style={{
                background: "#fff",
                border: "1px solid #d4d4d4",
                borderRadius: "12px",
                padding: "20px",
              }}
            >
              <h2
                style={{
                  margin: "0 0 10px",
                  fontSize: "22px",
                  lineHeight: 1.3,
                }}
              >
                {item.question}
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#444",
                }}
              >
                {item.answer}
              </p>
            </section>
          ))}
        </div>

        <SiteFooterNav />
      </div>
    </main>
  );
}
import Link from "next/link";
import SiteFooterNav from "@/components/SiteFooterNav";

export const metadata = {
  title: "FAQ | TempNotepad",
  description:
    "Frequently asked questions about TempNotepad, temporary online notes, privacy, sharing, and how the tool works.",
};

const faqs = [
  {
    question: "What is TempNotepad?",
    answer:
      "TempNotepad is a simple browser-based tool for writing and sharing temporary text notes using a direct link.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. TempNotepad is designed to be fast and simple, so you can start using it without creating an account.",
  },
  {
    question: "Can I share a note with someone else?",
    answer:
      "Yes. You can share the page link with another person so they can open the same note page.",
  },
  {
    question: "Is TempNotepad for permanent note storage?",
    answer:
      "No. It is best used for temporary writing, quick sharing, rough drafts, short text, and lightweight collaboration.",
  },
  {
    question: "Can students use TempNotepad for classes?",
    answer:
      "Yes. Students can use it for rough notes, quick group sharing, collecting links, and short study collaboration.",
  },
  {
    question: "Can I use TempNotepad to move text between phone and laptop?",
    answer:
      "Yes. That is one of the easiest use cases for a browser-based temporary notepad.",
  },
  {
    question: "Should I store sensitive information here?",
    answer:
      "It is better to avoid storing highly sensitive, confidential, or regulated information in temporary note-sharing tools unless you fully understand their privacy and security model.",
  },
  {
    question: "What kind of content is TempNotepad best for?",
    answer:
      "It works best for copied text, short reminders, rough notes, links, code snippets, class notes, and one-time collaboration.",
  },
  {
    question: "Where can I learn more?",
    answer:
      "You can visit the blog section for helpful guides about online note sharing, temporary text tools, and common use cases.",
  },
];

export default function FAQPage() {
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
          Frequently Asked Questions
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
          Answers to common questions about TempNotepad, how it works, and when
          to use it.
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
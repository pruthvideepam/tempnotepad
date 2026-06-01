import Link from "next/link";
import SiteFooterNav from "@/components/SiteFooterNav";

export const metadata = {
  title: "About | TempNotepad",
  description:
    "Learn what TempNotepad is, who it is for, and how it helps people share temporary text online quickly.",
};

export default function AboutPage() {
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
          About TempNotepad
        </h1>

        <p
          style={{
            fontSize: "19px",
            color: "#555",
            margin: "0 0 30px",
            lineHeight: 1.7,
            maxWidth: "760px",
          }}
        >
          TempNotepad is a simple online text pad built for people who want to
          write, paste, and share temporary text quickly without extra steps.
        </p>

        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >
          <section
            style={{
              background: "#fff",
              border: "1px solid #d4d4d4",
              borderRadius: "12px",
              padding: "22px",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "24px",
              }}
            >
              What it does
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              TempNotepad helps you create a quick text page that can be used for
              rough notes, copied text, links, code snippets, short collaboration,
              and temporary writing. It is designed to reduce friction so you can
              get started fast.
            </p>
          </section>

          <section
            style={{
              background: "#fff",
              border: "1px solid #d4d4d4",
              borderRadius: "12px",
              padding: "22px",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "24px",
              }}
            >
              Who it is for
            </h2>

            <p
              style={{
                margin: "0 0 12px",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              TempNotepad is useful for students, developers, freelancers,
              teammates, and everyday users who need to share or move text quickly
              between devices or people.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              It works best when the task is simple and speed matters more than
              advanced document features.
            </p>
          </section>

          <section
            style={{
              background: "#fff",
              border: "1px solid #d4d4d4",
              borderRadius: "12px",
              padding: "22px",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "24px",
              }}
            >
              When to use it
            </h2>

            <p
              style={{
                margin: "0 0 12px",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              Use TempNotepad when you want to save a quick note, pass text from
              phone to laptop, share short code snippets, collect rough points, or
              send temporary written information without using a full document app.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              For sensitive, permanent, or highly structured work, a long-term
              document platform may be a better fit.
            </p>
          </section>

          <SiteFooterNav />
        </div>
      </div>
    </main>
  );
}
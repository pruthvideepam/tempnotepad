import Link from "next/link";
import SiteFooterNav from "@/components/SiteFooterNav";

export const metadata = {
  title: "Contact | TempNotepad",
  description:
    "Contact TempNotepad for support, feedback, business inquiries, or website-related questions.",
};

export default function ContactPage() {
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
          maxWidth: "800px",
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
          Contact
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            margin: "0 0 28px",
            lineHeight: 1.6,
            maxWidth: "700px",
          }}
        >
          For support, feedback, business inquiries, or content concerns related to
          TempNotepad, please use the contact details below.
        </p>

        <section
          style={{
            background: "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "12px",
            padding: "22px",
            marginBottom: "18px",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "24px",
            }}
          >
            Need any support?
          </h2>

          <p
            style={{
              margin: "0 0 8px",
              fontSize: "16px",
              color: "#444",
              lineHeight: 1.7,
            }}
          >
            Contact us on:
          </p>

          <a
            href="mailto:support@tempnotepad.com"
            style={{
              color: "#222",
              textDecoration: "underline",
              fontSize: "16px",
            }}
          >
            support@tempnotepad.com
          </a>
        </section>

        <section
          style={{
            background: "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "12px",
            padding: "22px",
            marginBottom: "18px",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px",
              fontSize: "24px",
            }}
          >
            What to contact us for
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
            <li>Bug reports and technical issues</li>
            <li>General feedback and feature suggestions</li>
            <li>Business and partnership inquiries</li>
            <li>Privacy or legal concerns related to published content</li>
          </ul>
        </section>

        <SiteFooterNav />
      </div>
    </main>
  );
}
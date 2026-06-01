import Image from "next/image";
import Link from "next/link";
import SiteFooterNav from "@/components/SiteFooterNav";

export const metadata = {
  title: "Founder | TempNotepad",
  description:
    "Meet the founder behind TempNotepad and learn why this simple online notepad was created.",
};

export default function FounderPage() {
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
            margin: "0 0 18px",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Founder
        </h1>

        <section
          style={{
            background: "#fff",
            border: "1px solid #d4d4d4",
            borderRadius: "14px",
            padding: "22px",
            marginBottom: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flexShrink: 0,
              }}
            >
              <Image
                src="/founder.jpg"
                alt="Pruthvi Deepam L A"
                width={140}
                height={140}
                style={{
                  borderRadius: "16px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ flex: 1, minWidth: "240px" }}>
              <h2
                style={{
                  margin: "0 0 8px",
                  fontSize: "30px",
                  lineHeight: 1.15,
                }}
              >
                Pruthvi Deepam L A
              </h2>

              <p
                style={{
                  margin: "0 0 10px",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#555",
                }}
              >
                Founder of TempNotepad
              </p>

              <a
                href="mailto:ceo@tempnotepad.com"
                style={{
                  color: "#222",
                  textDecoration: "underline",
                  fontSize: "16px",
                }}
              >
                ceo@tempnotepad.com
              </a>
            </div>
          </div>
        </section>

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
              Why this was built
            </h2>

            <p
              style={{
                margin: "0 0 12px",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              Many note and document tools are powerful, but they are often too
              heavy for small tasks. Sometimes people just want to open a page,
              type or paste text, and share it immediately.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              TempNotepad was created for those moments when simplicity is more
              useful than complexity.
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
              Product approach
            </h2>

            <p
              style={{
                margin: "0 0 12px",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              The goal is to keep TempNotepad straightforward, useful, and easy to
              understand. The product is meant to help with quick text sharing,
              rough notes, short collaboration, and lightweight productivity.
            </p>

            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              Instead of trying to replace full document platforms, it focuses on
              doing one simple job well.
            </p>
          </section>

          <SiteFooterNav />
        </div>
      </div>
    </main>
  );
}
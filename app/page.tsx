"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { generateRandomSlug, slugify } from "@/lib/slug";

export default function Home() {
  const router = useRouter();
  const [padName, setPadName] = useState("");

  function openPad(slug: string) {
    if (!slug) return;
    router.push(`/${slug}`);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const slug = slugify(padName);

    if (!slug) return;
    openPad(slug);
  }

  function handleRandomPad() {
    openPad(generateRandomSlug());
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #f8fafc 0%, #f3f4f6 50%, #eef2f7 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
      }}
    >
      <header
        style={{
          width: "100%",
          borderBottom: "1px solid #e5e7eb",
          background: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "16px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#111827",
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            TempNotepad
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Link
              href="/about"
              style={{
                textDecoration: "none",
                color: "#4b5563",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
              }}
            >
              About
            </Link>
            <Link
              href="/founder"
              style={{
                textDecoration: "none",
                color: "#4b5563",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
              }}
            >
              Founder
            </Link>
            <Link
              href="/privacy"
              style={{
                textDecoration: "none",
                color: "#4b5563",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
              }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              style={{
                textDecoration: "none",
                color: "#4b5563",
                fontSize: "14px",
                fontWeight: 600,
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
              }}
            >
              Terms
            </Link>
          </nav>
        </div>
      </header>

      <section
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "40px 24px",
          flex: 1,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "860px",
            textAlign: "center",
            background: "rgba(255,255,255,0.88)",
            border: "1px solid #e5e7eb",
            borderRadius: "24px",
            padding: "56px 28px",
            boxShadow: "0 20px 60px rgba(15,23,42,0.06)",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "-2px",
              margin: 0,
              color: "#0f172a",
              lineHeight: 1,
            }}
          >
            TEMPNOTEPAD
          </h1>

          <p
            style={{
              marginTop: "14px",
              marginBottom: "36px",
              fontSize: "20px",
              color: "#475569",
            }}
          >
            The simplest way to share temporary text online
          </p>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #cbd5e1",
                borderRadius: "12px",
                background: "#fff",
                overflow: "hidden",
                width: "100%",
                maxWidth: "560px",
                minHeight: "50px",
                boxShadow: "0 4px 16px rgba(15,23,42,0.04)",
              }}
            >
              <span
                style={{
                  padding: "0 14px",
                  fontSize: "15px",
                  color: "#475569",
                  borderRight: "1px solid #e2e8f0",
                  background: "#f8fafc",
                  whiteSpace: "nowrap",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                tempnotepad.com/
              </span>

              <input
                type="text"
                value={padName}
                onChange={(e) => setPadName(e.target.value)}
                placeholder="your-pad-name"
                autoFocus
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "0 14px",
                  fontSize: "16px",
                  color: "#111827",
                  height: "48px",
                  background: "#fff",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                height: "50px",
                padding: "0 22px",
                border: "1px solid #111827",
                borderRadius: "12px",
                background: "#111827",
                color: "#ffffff",
                fontSize: "16px",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Open Pad
            </button>
          </form>

          <p
            style={{
              marginTop: "16px",
              marginBottom: "8px",
              fontSize: "15px",
              color: "#64748b",
            }}
          >
            No login required. Open a named pad or jump into a random one.
          </p>

          <button
            type="button"
            onClick={handleRandomPad}
            style={{
              border: "none",
              background: "transparent",
              color: "#4338ca",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Or use a random pad
          </button>
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "24px 16px 20px",
          color: "#667085",
          fontSize: "14px",
          borderTop: "1px solid #e5e7eb",
          background: "rgba(255,255,255,0.82)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            flexWrap: "wrap",
            marginBottom: "10px",
          }}
        >
          <Link href="/about" style={{ color: "#555", textDecoration: "none" }}>
            About
          </Link>
          <span>|</span>
          <Link href="/founder" style={{ color: "#555", textDecoration: "none" }}>
            Founder
          </Link>
          <span>|</span>
          <Link href="/privacy" style={{ color: "#555", textDecoration: "none" }}>
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms" style={{ color: "#555", textDecoration: "none" }}>
            Terms
          </Link>
        </div>

        <div>© 2026 TempNotepad</div>
      </footer>
    </main>
  );
}
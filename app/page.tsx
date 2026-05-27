"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
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

  const navLinkStyle = useMemo(
    () =>
      ({
        textDecoration: "none",
        color: "#475569",
        fontSize: "14px",
        fontWeight: 600,
        padding: "10px 14px",
        borderRadius: "999px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        whiteSpace: "nowrap",
      }) as const,
    []
  );

  return (
    <>
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(180deg, #f8fafc 0%, #f3f4f6 50%, #eef2f7 100%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
        }

        .header {
          width: 100%;
          border-bottom: 1px solid #e5e7eb;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(10px);
        }

        .headerInner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 14px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .brand {
          text-decoration: none;
          color: #111827;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.03em;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-end;
        }

        .heroWrap {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 28px 16px 36px;
          flex: 1;
          align-items: center;
        }

        .heroCard {
          width: 100%;
          max-width: 860px;
          text-align: center;
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 48px 24px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.06);
        }

        .title {
          font-size: clamp(36px, 9vw, 64px);
          font-weight: 800;
          letter-spacing: -0.06em;
          margin: 0;
          color: #0f172a;
          line-height: 0.98;
        }

        .subtitle {
          margin-top: 14px;
          margin-bottom: 28px;
          font-size: clamp(16px, 3.5vw, 20px);
          color: #475569;
        }

        .form {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 10px;
          flex-wrap: wrap;
        }

        .inputGroup {
          display: flex;
          align-items: center;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          background: #fff;
          overflow: hidden;
          width: 100%;
          max-width: 560px;
          min-height: 52px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
        }

        .prefix {
          padding: 0 14px;
          font-size: 15px;
          color: #475569;
          border-right: 1px solid #e2e8f0;
          background: #f8fafc;
          white-space: nowrap;
          height: 100%;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .input {
          flex: 1;
          border: none;
          outline: none;
          padding: 0 14px;
          font-size: 16px;
          color: #111827;
          height: 50px;
          min-width: 0;
          background: #fff;
        }

        .submitBtn {
          height: 52px;
          padding: 0 22px;
          border: 1px solid #111827;
          border-radius: 12px;
          background: #111827;
          color: #ffffff;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          min-width: 140px;
        }

        .helper {
          margin-top: 16px;
          margin-bottom: 8px;
          font-size: 15px;
          color: #64748b;
        }

        .randomBtn {
          border: none;
          background: transparent;
          color: #4338ca;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
        }

        .footer {
          text-align: center;
          padding: 20px 16px 18px;
          color: #667085;
          font-size: 14px;
          border-top: 1px solid #e5e7eb;
          background: rgba(255, 255, 255, 0.82);
        }

        .footerLinks {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }

        .footerLink {
          color: #555;
          text-decoration: none;
        }

        .divider {
          color: #98a2b3;
        }

        @media (max-width: 640px) {
          .headerInner {
            justify-content: center;
          }

          .nav {
            width: 100%;
            justify-content: center;
          }

          .heroWrap {
            padding: 20px 12px 28px;
            align-items: flex-start;
          }

          .heroCard {
            padding: 32px 16px 24px;
            border-radius: 18px;
          }

          .subtitle {
            margin-bottom: 22px;
          }

          .form {
            flex-direction: column;
            align-items: stretch;
          }

          .inputGroup {
            flex-direction: column;
            align-items: stretch;
            max-width: 100%;
            border-radius: 12px;
          }

          .prefix {
            border-right: none;
            border-bottom: 1px solid #e2e8f0;
            justify-content: flex-start;
            padding: 12px 14px;
            min-height: 44px;
          }

          .input {
            height: 48px;
            width: 100%;
          }

          .submitBtn {
            width: 100%;
            min-width: 0;
            height: 50px;
          }

          .footerLinks {
            gap: 8px;
          }

          .divider {
            display: none;
          }
        }
      `}</style>

      <main className="page">
        <header className="header">
          <div className="headerInner">
            <Link href="/" className="brand">
              TempNotepad
            </Link>

            <nav className="nav">
              <Link href="/about" style={navLinkStyle}>
                About
              </Link>
              <Link href="/founder" style={navLinkStyle}>
                Founder
              </Link>
              <Link href="/privacy" style={navLinkStyle}>
                Privacy
              </Link>
              <Link href="/terms" style={navLinkStyle}>
                Terms
              </Link>
            </nav>
          </div>
        </header>

        <section className="heroWrap">
          <div className="heroCard">
            <h1 className="title">TEMPNOTEPAD</h1>

            <p className="subtitle">
              The simplest way to share temporary text online
            </p>

            <form onSubmit={handleSubmit} className="form">
              <div className="inputGroup">
                <span className="prefix">tempnotepad.com/</span>

                <input
                  type="text"
                  value={padName}
                  onChange={(e) => setPadName(e.target.value)}
                  placeholder="your-pad-name"
                  autoFocus
                  className="input"
                />
              </div>

              <button type="submit" className="submitBtn">
                Open Pad
              </button>
            </form>

            <p className="helper">
              No login required. Open a named pad or jump into a random one.
            </p>

            <button
              type="button"
              onClick={handleRandomPad}
              className="randomBtn"
            >
              Or use a random pad
            </button>
          </div>
        </section>

        <footer className="footer">
          <div className="footerLinks">
            <Link href="/about" className="footerLink">
              About
            </Link>
            <span className="divider">|</span>
            <Link href="/founder" className="footerLink">
              Founder
            </Link>
            <span className="divider">|</span>
            <Link href="/privacy" className="footerLink">
              Privacy Policy
            </Link>
            <span className="divider">|</span>
            <Link href="/terms" className="footerLink">
              Terms
            </Link>
          </div>

          <div>© 2026 TempNotepad</div>
        </footer>
      </main>
    </>
  );
}
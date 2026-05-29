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
    <>
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f3f3f3;
          display: flex;
          flex-direction: column;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          color: #111;
        }

        .main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 16px 36px;
        }

        .centerBox {
          width: 100%;
          max-width: 760px;
          text-align: center;
        }

        .title {
          margin: 0;
          font-size: clamp(52px, 10vw, 88px);
          line-height: 0.95;
          font-weight: 700;
          letter-spacing: -0.05em;
          color: #000;
        }

        .subtitle {
          margin: 18px 0 34px;
          font-size: clamp(18px, 3vw, 26px);
          color: #4b4b4b;
          line-height: 1.35;
        }

        .form {
          display: flex;
          justify-content: center;
          align-items: stretch;
          gap: 12px;
          flex-wrap: nowrap;
        }

        .inputGroup {
          flex: 1;
          max-width: 560px;
          display: flex;
          align-items: stretch;
          border: 1px solid #9ca3af;
          border-radius: 8px;
          overflow: hidden;
          background: #fff;
          min-width: 0;
        }

        .prefix {
          display: flex;
          align-items: center;
          padding: 0 18px;
          background: #f7f7f7;
          border-right: 1px solid #c7c7c7;
          color: #4b5563;
          font-size: 18px;
          white-space: nowrap;
          height: 56px;
          flex-shrink: 0;
        }

        .input {
          flex: 1;
          min-width: 0;
          border: none;
          outline: none;
          height: 56px;
          padding: 0 18px;
          font-size: 18px;
          color: #111827;
          background: #fff;
        }

        .input::placeholder {
          color: #8a8a8a;
          font-style: italic;
        }

        .submitBtn {
          border: 1px solid #a3a3a3;
          border-radius: 8px;
          background: #f8f8f8;
          color: #333;
          font-size: 18px;
          height: 56px;
          padding: 0 24px;
          min-width: 96px;
          cursor: pointer;
        }

        .helper {
          margin: 22px 0 0;
          font-size: 18px;
          color: #4b4b4b;
        }

        .randomBtn {
          margin-top: 14px;
          border: none;
          background: transparent;
          color: #4b4b4b;
          font-size: 16px;
          cursor: pointer;
          text-decoration: underline;
        }

        .footer {
          padding: 18px 16px 14px;
          text-align: center;
          color: #444;
        }

        .footerLinks {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 14px;
          line-height: 1.35;
        }

        .footerLink {
          color: #444;
          text-decoration: none;
        }

        .divider {
          color: #666;
        }

        .copyright {
          margin-top: 10px;
          font-size: 14px;
          color: #444;
        }

        @media (max-width: 640px) {
          .main {
            justify-content: flex-start;
            align-items: flex-start;
            padding: 130px 14px 20px;
          }

          .centerBox {
            max-width: 100%;
          }

          .title {
            font-size: 54px;
          }

          .subtitle {
            margin: 14px 0 24px;
            font-size: 18px;
          }

          .form {
            gap: 10px;
          }

          .inputGroup {
            max-width: none;
          }

          .prefix {
            padding: 0 14px;
            font-size: 15px;
            height: 52px;
          }

          .input {
            height: 52px;
            padding: 0 14px;
            font-size: 15px;
          }

          .submitBtn {
            height: 52px;
            min-width: 78px;
            padding: 0 16px;
            font-size: 15px;
          }

          .helper {
            margin-top: 18px;
            font-size: 16px;
          }

          .randomBtn {
            font-size: 15px;
          }

          .footer {
            padding: 8px 12px 12px;
          }

          .footerLinks {
            gap: 6px;
            font-size: 13px;
          }

          .copyright {
            margin-top: 8px;
            font-size: 13px;
          }
        }

        @media (max-width: 430px) {
          .main {
            padding: 120px 12px 14px;
          }

          .title {
            font-size: 48px;
          }

          .subtitle {
            font-size: 17px;
          }

          .prefix {
            padding: 0 12px;
            font-size: 14px;
            height: 50px;
          }

          .input {
            height: 50px;
            padding: 0 12px;
            font-size: 14px;
          }

          .submitBtn {
            height: 50px;
            min-width: 72px;
            padding: 0 14px;
            font-size: 14px;
          }

          .helper {
            font-size: 15px;
          }

          .footerLinks {
            font-size: 12px;
          }

          .copyright {
            font-size: 12px;
          }
        }
      `}</style>

      <main className="page">
        <section className="main">
          <div className="centerBox">
            <h1 className="title">TEMPNOTEPAD</h1>

            <p className="subtitle">The simplest way to share text online</p>

            <form onSubmit={handleSubmit} className="form">
              <div className="inputGroup">
                <span className="prefix">tempnotepad.com/</span>

                <input
                  type="text"
                  value={padName}
                  onChange={(e) => setPadName(e.target.value)}
                  placeholder="your-secret-page"
                  autoFocus
                  className="input"
                />
              </div>

              <button type="submit" className="submitBtn">
                Go!
              </button>
            </form>

            <p className="helper">No login required</p>

            <button
              type="button"
              onClick={handleRandomPad}
              className="randomBtn"
            >
              Use a random pad
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

          <div className="copyright">© 2026 TempNotepad</div>
        </footer>
      </main>
    </>
  );
}
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
  background: #f3f3f3;
  display: block;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #111;
}

        .main {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 140px 16px 20px;
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
          margin: 18px 0 30px;
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
          min-width: 0;
          display: flex;
          align-items: stretch;
          border: 1px solid #a8a8a8;
          border-radius: 8px;
          overflow: hidden;
          background: #fff;
        }

        .prefix {
          display: flex;
          align-items: center;
          padding: 0 18px;
          background: #f7f7f7;
          border-right: 1px solid #c8c8c8;
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
          border: 1px solid #a8a8a8;
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
          margin-top: auto;
          padding: 10px 16px 14px;
          text-align: center;
          color: #444;
        }

        .footerLinks {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
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
          margin-top: 8px;
          font-size: 14px;
          color: #444;
        }

        @media (max-width: 640px) {
          .main {
            padding: 80px 14px 10px;
          }

          .centerBox {
            max-width: 100%;
          }

          .title {
            font-size: 54px;
          }

          .subtitle {
            margin: 14px 0 22px;
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
            font-size: 16px;
            height: 52px;
          }

          .input {
            height: 52px;
            padding: 0 14px;
            font-size: 16px;
          }

          .submitBtn {
            height: 52px;
            min-width: 78px;
            padding: 0 16px;
            font-size: 16px;
          }

          .helper {
            margin-top: 16px;
            font-size: 16px;
          }

          .randomBtn {
            margin-top: 10px;
            font-size: 15px;
          }

          .footer {
            padding: 8px 12px 10px;
          }

          .footerLinks {
            gap: 6px;
            font-size: 13px;
          }

          .copyright {
            margin-top: 6px;
            font-size: 13px;
          }
        }

        @media (max-width: 430px) {
          .main {
            padding: 60px 12px 8px;
          }

          .title {
            font-size: 48px;
          }

          .subtitle {
            font-size: 17px;
          }

          .prefix {
            padding: 0 12px;
            font-size: 15px;
            height: 50px;
          }

          .input {
            height: 50px;
            padding: 0 12px;
            font-size: 16px;
          }

          .submitBtn {
            height: 50px;
            min-width: 72px;
            padding: 0 14px;
            font-size: 15px;
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
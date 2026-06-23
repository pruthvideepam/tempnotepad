"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { generateRandomSlug, slugify } from "@/lib/slug";

export default function HomeClient() {
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
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
          color: #111;
        }

        .main {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 110px 16px 48px;
          flex: 1;
        }

        .centerBox {
          width: 100%;
          max-width: 860px;
          text-align: center;
        }

        .title {
          margin: 0;
          font-size: clamp(38px, 8vw, 72px);
          line-height: 0.98;
          font-weight: 700;
          letter-spacing: -0.05em;
          color: #000;
        }

        .subtitle {
          margin: 18px auto 28px;
          max-width: 760px;
          font-size: clamp(18px, 3vw, 24px);
          color: #4b4b4b;
          line-height: 1.45;
        }

        .primaryCta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 58px;
          padding: 0 28px;
          min-width: 220px;
          border: 1px solid #111;
          border-radius: 10px;
          background: #111;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.18s ease, transform 0.18s ease,
            border-color 0.18s ease;
        }

        .primaryCta:hover {
          background: #222;
          border-color: #222;
          transform: translateY(-1px);
        }

        .primaryCta:active {
          transform: translateY(0);
        }

        .trustRow {
          margin: 16px auto 0;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px 16px;
          max-width: 680px;
          color: #4b4b4b;
          font-size: 15px;
          line-height: 1.5;
        }

        .trustItem {
          white-space: nowrap;
        }

        .customWrap {
          margin: 34px auto 0;
          max-width: 700px;
          padding: 22px 20px;
          border: 1px solid #d0d0d0;
          border-radius: 14px;
          background: #fff;
          text-align: left;
        }

        .customTitle {
          margin: 0 0 8px;
          font-size: 20px;
          line-height: 1.3;
          color: #111;
        }

        .customText {
          margin: 0 0 16px;
          font-size: 16px;
          line-height: 1.6;
          color: #555;
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
          font-size: 17px;
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
          font-size: 17px;
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
          font-size: 17px;
          font-weight: 600;
          height: 56px;
          padding: 0 22px;
          min-width: 124px;
          cursor: pointer;
        }

        .helper {
          margin: 14px 0 0;
          font-size: 15px;
          color: #666;
          line-height: 1.5;
        }

        .section {
          margin: 52px auto 0;
          max-width: 820px;
          text-align: left;
        }

        .sectionTitle {
          margin: 0 0 14px;
          font-size: 28px;
          line-height: 1.2;
          color: #111;
          text-align: center;
        }

        .sectionIntro {
          margin: 0 auto 22px;
          max-width: 760px;
          font-size: 17px;
          line-height: 1.7;
          color: #555;
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .card {
          background: #fff;
          border: 1px solid #d8d8d8;
          border-radius: 14px;
          padding: 18px 18px 16px;
          text-align: left;
        }

        .cardTitle {
          margin: 0 0 8px;
          font-size: 18px;
          line-height: 1.35;
          color: #111;
        }

        .cardText {
          margin: 0;
          font-size: 15px;
          line-height: 1.65;
          color: #555;
        }

        .stepsWrap {
          background: #fff;
          border: 1px solid #d8d8d8;
          border-radius: 14px;
          padding: 20px;
        }

        .steps {
          margin: 0;
          padding-left: 20px;
          color: #555;
        }

        .steps li {
          margin-bottom: 10px;
          font-size: 16px;
          line-height: 1.65;
        }

        .linkSection {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px 18px;
        }

        .textLink {
          color: #222;
          font-size: 16px;
          text-decoration: underline;
        }

        .footer {
          padding: 14px 16px 16px;
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

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .main {
            padding: 76px 14px 24px;
          }

          .centerBox {
            max-width: 100%;
          }

          .subtitle {
            margin: 14px auto 22px;
            font-size: 18px;
          }

          .primaryCta {
            width: 100%;
            min-width: 0;
            height: 54px;
            font-size: 17px;
            padding: 0 20px;
          }

          .trustRow {
            margin-top: 14px;
            gap: 8px 12px;
            font-size: 14px;
          }

          .customWrap {
            margin-top: 28px;
            padding: 18px 16px;
          }

          .customTitle {
            font-size: 18px;
          }

          .customText {
            font-size: 15px;
            margin-bottom: 14px;
          }

          .form {
            flex-direction: column;
            gap: 10px;
          }

          .prefix {
            padding: 0 14px;
            font-size: 15px;
            height: 52px;
          }

          .input {
            height: 52px;
            padding: 0 14px;
            font-size: 16px;
          }

          .submitBtn {
            height: 52px;
            min-width: 0;
            width: 100%;
            padding: 0 16px;
            font-size: 16px;
          }

          .helper {
            margin-top: 12px;
            font-size: 14px;
          }

          .section {
            margin-top: 40px;
          }

          .sectionTitle {
            font-size: 24px;
          }

          .sectionIntro {
            font-size: 16px;
          }

          .card {
            padding: 16px;
          }

          .stepsWrap {
            padding: 16px;
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
            padding: 60px 12px 10px;
          }

          .title {
            font-size: 40px;
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
            font-size: 15px;
          }

          .submitBtn {
            height: 50px;
            font-size: 15px;
          }

          .helper {
            font-size: 13px;
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
            <h1 className="title">Free online notepad for temporary notes</h1>

            <p className="subtitle">
              TempNotepad is a simple online notepad for temporary notes, quick writing,
  and easy text sharing. Open a note instantly, use a custom link, and start
  typing without signup or installation.
            </p>

            <button
              type="button"
              onClick={handleRandomPad}
              className="primaryCta"
            >
              Start writing now
            </button>

            <div className="trustRow" aria-label="Key benefits">
              <span className="trustItem">No signup required</span>
              <span className="trustItem">Custom URL or random link</span>
              <span className="trustItem">Works on desktop and mobile</span>
            </div>

            <div className="customWrap">
              <h2 className="customTitle">Open your own note link</h2>

              <p className="customText">
                Create a custom temporary note URL if you want something easy to
                remember and share.
              </p>

              <form onSubmit={handleSubmit} className="form">
                <div className="inputGroup">
                  <span className="prefix">tempnotepad.com/</span>

                  <input
                    type="text"
                    value={padName}
                    onChange={(e) => setPadName(e.target.value)}
                    placeholder="your-note-name"
                    className="input"
                    aria-label="Enter your custom pad name"
                  />
                </div>

                <button type="submit" className="submitBtn">
                  Open custom note
                </button>
              </form>

              <p className="helper">
                Use letters, numbers, and hyphens to create a clean note link.
              </p>
            </div>

            <section className="section" aria-labelledby="why-tempnotepad">
              <h2 id="why-tempnotepad" className="sectionTitle">
                Why use TempNotepad
              </h2>

              <p className="sectionIntro">
                TempNotepad is built for fast writing and simple sharing. It works
                well when you need a temporary note, a quick browser notepad, or a
                lightweight page to share text with someone else.
              </p>

              <div className="grid">
                <article className="card">
                  <h3 className="cardTitle">Write instantly</h3>
                  <p className="cardText">
                    Open a note in seconds and start typing right away without
                    creating an account or installing an app.
                  </p>
                </article>

                <article className="card">
                  <h3 className="cardTitle">Share with a simple link</h3>
                  <p className="cardText">
                    Each note lives at its own URL, which makes it easy to share
                    text, instructions, drafts, or snippets.
                  </p>
                </article>

                <article className="card">
                  <h3 className="cardTitle">Use it anywhere</h3>
                  <p className="cardText">
                    TempNotepad works in a browser on desktop and mobile, so you
                    can open notes quickly from almost any device.
                  </p>
                </article>
              </div>
            </section>

            <section className="section" aria-labelledby="how-it-works">
              <h2 id="how-it-works" className="sectionTitle">
                How it works
              </h2>

              <div className="stepsWrap">
                <ol className="steps">
                  <li>Open a random note or choose your own custom note link.</li>
                  <li>Type your text directly in the browser.</li>
                  <li>Save the page link and reopen it later when needed.</li>
                  <li>Share the link if you want another person to view or edit the note.</li>
                </ol>
              </div>
            </section>

            <section className="section" aria-labelledby="common-uses">
              <h2 id="common-uses" className="sectionTitle">
                Common uses for an online temporary notepad
              </h2>

              <div className="grid">
                <article className="card">
                  <h3 className="cardTitle">Quick reminders</h3>
                  <p className="cardText">
                    Save short notes, rough thoughts, to-do points, and temporary
                    reminders when you do not want a full notes app.
                  </p>
                </article>

                <article className="card">
                  <h3 className="cardTitle">Text sharing</h3>
                  <p className="cardText">
                    Share plain text, instructions, drafts, links, or copied
                    snippets with a simple web address.
                  </p>
                </article>

                <article className="card">
                  <h3 className="cardTitle">Study and work notes</h3>
                  <p className="cardText">
                    Use TempNotepad for short study notes, meeting bullets, coding
                    snippets, and browser-based scratch writing.
                  </p>
                </article>
              </div>

              <div className="linkSection">
                <Link href="/blog/share-temporary-notes-online" className="textLink">
                  How to share temporary notes online
                </Link>
                <Link
                  href="/blog/best-uses-of-online-notepad-for-students"
                  className="textLink"
                >
                  Best uses of online notepad for students
                </Link>
                <Link href="/faq" className="textLink">
                  Read frequently asked questions
                </Link>
              </div>
            </section>

            <section className="section" aria-labelledby="learn-more">
              <h2 id="learn-more" className="sectionTitle">
                Learn more about TempNotepad
              </h2>

              <div className="linkSection">
                <Link href="/blog" className="textLink">
                  Read the blog
                </Link>
                <Link href="/about" className="textLink">
                  About TempNotepad
                </Link>
                <Link href="/contact" className="textLink">
                  Contact
                </Link>
              </div>
            </section>
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
            <Link href="/blog" className="footerLink">
              Blog
            </Link>
            <span className="divider">|</span>
            <Link href="/faq" className="footerLink">
              FAQ
            </Link>
            <span className="divider">|</span>
            <Link href="/contact" className="footerLink">
              Contact
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
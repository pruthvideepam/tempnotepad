import Link from "next/link";
import SiteFooterNav from "@/components/SiteFooterNav";

export const metadata = {
  title: "Privacy Policy | TempNotepad",
  description:
    "Read the Privacy Policy for TempNotepad, including information about data handling, cookies, user content, and legal requests.",
};

export default function PrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f3f3f3",
        padding: "48px 16px 72px",
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
        color: "#111",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
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
            margin: "0 0 10px",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Privacy Policy
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#666",
            margin: "0 0 28px",
            lineHeight: 1.7,
          }}
        >
          Effective date: May 29, 2026
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>1. Overview</h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              This Privacy Policy explains how TempNotepad collects, uses, stores,
              and discloses information in connection with the website, related
              pages, and any services offered through tempnotepad.com.
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              2. Site owner and contact
            </h2>
            <p style={{ margin: "0 0 8px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              TempNotepad is operated by Pruthvi Deepam L A.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              Privacy, grievance, or policy-related requests may be sent to our support team:{" "}
              <a
                href="mailto:support@tempnotepad.com"
                style={{ color: "#222", textDecoration: "underline" }}
              >
                support@tempnotepad.com
              </a>
              .
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              3. Information we may collect
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              Depending on how you use the site, TempNotepad may collect or process:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              <li>Text or note content that you create, store, or access using the service.</li>
              <li>Technical information such as IP address, browser type, device data, timestamps, and request logs.</li>
              <li>Contact information you voluntarily provide, such as your email address when contacting us.</li>
              <li>Basic usage and analytics information used to maintain, secure, and improve the service.</li>
            </ul>
          </section>

          <section
            style={{
              background: "#fff",
              border: "1px solid #d4d4d4",
              borderRadius: "12px",
              padding: "22px",
            }}
          >
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              4. How we use information
            </h2>
            <ul
              style={{
                margin: 0,
                paddingLeft: "20px",
                fontSize: "16px",
                lineHeight: 1.8,
                color: "#444",
              }}
            >
              <li>To provide, operate, maintain, and secure the site and its core note-sharing functionality.</li>
              <li>To detect abuse, spam, fraud, malicious activity, security incidents, or unlawful use.</li>
              <li>To investigate complaints, respond to support requests, and enforce our Terms.</li>
              <li>To comply with applicable law, lawful requests, court orders, or directions from competent authorities.</li>
              <li>To improve website performance, reliability, and user experience.</li>
            </ul>
          </section>

          <section
            style={{
              background: "#fff",
              border: "1px solid #d4d4d4",
              borderRadius: "12px",
              padding: "22px",
            }}
          >
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              5. Legal and platform compliance
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              TempNotepad is intended to operate in accordance with applicable Indian
              law, including data protection and information technology obligations
              that may apply to website operators and intermediaries.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              Where legally required, we may preserve, review, disclose, restrict,
              or remove information in response to abuse reports, security issues,
              intellectual property complaints, or lawful government or judicial
              directions.
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              6. User content and privacy limits
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              TempNotepad is a temporary text utility. You should not use the service
              to store highly sensitive personal data, financial data, government
              identifiers, passwords, confidential business information, regulated
              health information, or any data you are not legally permitted to share.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              While we may apply reasonable technical and administrative safeguards,
              no website or internet transmission can be guaranteed to be completely
              secure or risk-free.
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              7. Cookies, analytics, and advertising
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              TempNotepad may use cookies or similar technologies for site
              functionality, security, analytics, preference handling, and service
              improvement.
            </p>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              If advertising services such as Google AdSense are used on this site,
              third-party vendors, including Google, may use cookies to serve ads
              based on a user’s prior visits to this site or other websites.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              Users may learn more about Google’s advertising practices and ad
              personalization controls through Google’s own policies and settings.
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              8. Data sharing and disclosure
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              We do not sell personal data as a business model.
            </p>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              We may disclose information to service providers, infrastructure
              vendors, professional advisers, law enforcement, regulators, courts,
              or other authorised parties where reasonably necessary for hosting,
              maintenance, security, legal compliance, or rights protection.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              We may also disclose or preserve information if we believe it is
              necessary to investigate abuse, enforce our rules, prevent harm, or
              comply with applicable law.
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              9. Data retention
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              Information may be retained for as long as reasonably necessary for
              the operation of the service, dispute resolution, abuse prevention,
              backup, system integrity, legal compliance, or enforcement purposes.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              Temporary notes, logs, and related data may be deleted, archived,
              restricted, or retained according to technical, operational, or legal
              requirements determined by TempNotepad from time to time.
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              10. Security
            </h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              We take reasonable measures intended to protect information against
              unauthorised access, misuse, alteration, loss, and unlawful
              disclosure. However, no system, storage method, or internet-based
              service can be guaranteed to be fully secure.
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              11. Your rights and requests
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              Subject to applicable law, you may contact us to request access,
              correction, deletion, or other action regarding personal information
              that you have provided to us directly.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              We may need to verify your identity, evaluate legal and technical
              constraints, and retain certain information where required or
              permitted by law.
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              12. Children
            </h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              TempNotepad is not intended for unlawful use by minors or for the
              deliberate collection of children’s personal data in violation of
              applicable law. If you believe personal data relating to a child has
              been improperly submitted, please contact us.
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>
              13. Policy changes
            </h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              We may update this Privacy Policy at any time. Updated versions become
              effective when posted on this page unless stated otherwise. Continued
              use of the site after updates may be treated as acceptance of the
              revised policy to the extent permitted by law.
            </p>
          </section>

          <SiteFooterNav />
        </div>
      </div>
    </main>
  );
}
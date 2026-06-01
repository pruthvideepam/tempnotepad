import Link from "next/link";
import SiteFooterNav from "@/components/SiteFooterNav";

export const metadata = {
  title: "Terms of Service | TempNotepad",
  description:
    "Read the Terms of Service for TempNotepad, including user obligations, prohibited content, takedowns, and liability limits.",
};

export default function TermsPage() {
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
          Terms of Service
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
            <h2 style={{ margin: "0 0 12px", fontSize: "24px" }}>1. Acceptance of terms</h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              By accessing or using TempNotepad, you agree to be bound by these
              Terms of Service, our Privacy Policy, and any additional rules or
              notices posted on the site. If you do not agree, you must not use
              the service.
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
              2. Nature of the service
            </h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              TempNotepad is a temporary text-sharing and note utility. The service
              may change, be interrupted, be restricted, or be discontinued at any
              time, with or without notice.
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
              3. Eligibility and lawful use
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              You may use TempNotepad only in compliance with applicable law and
              these Terms. You are responsible for your own conduct and for any
              content you create, upload, store, publish, transmit, or share using
              the service.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              You must have legal authority to share any content you place on the
              service.
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
              4. Prohibited conduct and prohibited content
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              You must not use TempNotepad to create, store, publish, transmit, or
              share content that:
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
              <li>Is unlawful, fraudulent, defamatory, obscene, abusive, hateful, harassing, or threatening.</li>
              <li>Infringes intellectual property, privacy, publicity, confidentiality, or other legal rights.</li>
              <li>Contains malware, phishing material, harmful code, or security exploits.</li>
              <li>Promotes illegal activity, violence, self-harm, or unlawful exploitation.</li>
              <li>Includes personal, financial, medical, government-issued, or otherwise sensitive information without valid legal basis or authorisation.</li>
              <li>Impersonates any person or entity, or misleads others about source or identity.</li>
              <li>Violates applicable Indian law or any other law that may apply to your use.</li>
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
              5. Monitoring, restriction, and takedown
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              TempNotepad reserves the right, but not the obligation, to review,
              restrict, disable, suspend, remove, preserve, or report content or
              access where we reasonably believe it may violate these Terms,
              applicable law, security requirements, or the rights of any person.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              We may act without prior notice where necessary for safety, abuse
              prevention, legal compliance, or operational integrity.
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
              6. Complaints and grievance reporting
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              If you believe content on TempNotepad violates law, your rights, or
              these Terms, you may report the matter by email to{" "}
              <a
                href="mailto:support@tempnotepad.com"
                style={{ color: "#222", textDecoration: "underline" }}
              >
                support@tempnotepad.com
              </a>
              .
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              Complaints should include sufficient detail to identify the content,
              the nature of the complaint, your basis for the request, and your
              contact details.
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
              7. No guarantee of storage, retention, or availability
            </h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              TempNotepad is not a guaranteed backup, archiving, or permanent
              storage service. We do not guarantee continuous availability,
              uninterrupted access, error-free operation, recovery of lost content,
              or retention of any note for any minimum period.
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
              8. Intellectual property
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              The TempNotepad website, branding, layout, design elements, and
              underlying software and content owned by us are protected by
              applicable intellectual property laws.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              You retain responsibility for content you submit, but you represent
              that you have the rights or authority necessary to use and share it
              through the service.
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
              9. Disclaimers
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              The service is provided on an “as is” and “as available” basis to
              the maximum extent permitted by law.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              TempNotepad disclaims warranties of any kind, whether express,
              implied, statutory, or otherwise, including warranties of
              availability, merchantability, fitness for a particular purpose,
              non-infringement, accuracy, and security.
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
              10. Limitation of liability
            </h2>
            <p style={{ margin: "0 0 12px", fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              To the maximum extent permitted by law, TempNotepad and its owner
              shall not be liable for any indirect, incidental, consequential,
              special, exemplary, punitive, or business-related loss or damage.
            </p>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              This includes loss of data, loss of profits, loss of business,
              interruption, reputational harm, unauthorised access, user misuse, or
              reliance on content or service availability.
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
              11. Indemnity
            </h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              You agree to defend, indemnify, and hold harmless TempNotepad and its
              owner from and against claims, liabilities, damages, losses, costs,
              and expenses arising out of or related to your content, your use of
              the service, your breach of these Terms, or your violation of any law
              or third-party rights.
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
              12. Suspension and termination
            </h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              We may suspend, restrict, or terminate access to the service, remove
              content, or take technical or legal action at any time if we believe
              it is necessary for safety, abuse prevention, legal compliance,
              investigation, or enforcement.
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
              13. Governing law and jurisdiction
            </h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              These Terms shall be governed by and construed in accordance with the
              laws of India. Subject to applicable law, courts of competent
              jurisdiction in India shall have jurisdiction over disputes arising
              out of or relating to the service or these Terms.
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
              14. Changes to these terms
            </h2>
            <p style={{ margin: 0, fontSize: "16px", lineHeight: 1.8, color: "#444" }}>
              We may revise these Terms at any time by posting an updated version on
              this page. Continued use of TempNotepad after changes are posted may
              be treated as acceptance of the updated Terms to the extent permitted
              by law.
            </p>
          </section>

          <SiteFooterNav />
        </div>
      </div>
    </main>
  );
}
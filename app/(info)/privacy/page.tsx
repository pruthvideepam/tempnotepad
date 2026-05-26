export default function PrivacyPage() {
  const sectionTitleStyle = {
    marginTop: "36px",
    marginBottom: "14px",
    fontSize: "22px",
    fontWeight: 700 as const,
    color: "#111827",
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "32px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
  };

  const listStyle = {
    paddingLeft: "22px",
    marginTop: "12px",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6f7fb",
        padding: "48px 20px",
        fontFamily:
          'Arial, "Helvetica Neue", Helvetica, sans-serif',
        color: "#181818",
      }}
    >
      <div
        style={{
          maxWidth: "920px",
          margin: "0 auto",
        }}
      >
        <div style={cardStyle}>
          <p
            style={{
              margin: 0,
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#6b7280",
            }}
          >
            TempNotepad
          </p>

          <h1
            style={{
              fontSize: "36px",
              lineHeight: 1.2,
              marginTop: "10px",
              marginBottom: "14px",
              color: "#111827",
            }}
          >
            Privacy Policy
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#374151",
            }}
          >
            This Privacy Policy explains how TempNotepad may collect, use,
            store, retain, review, preserve, and disclose information in
            connection with the operation, protection, moderation, abuse
            prevention, and legal compliance of the service.
          </p>

          <h2 style={sectionTitleStyle}>Nature of the Service</h2>
          <ul style={listStyle}>
            <li>TempNotepad is a temporary, URL-based text pad service.</li>
            <li>It is not encrypted private messaging, secure storage, or confidential document hosting.</li>
            <li>Anyone who obtains a pad URL may be able to access the related content.</li>
            <li>You must not treat TempNotepad as a private, secret, or sensitive storage service.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Information We May Collect and Store</h2>
          <ul style={listStyle}>
            <li>Pad slug, pad content, and related text submitted through the service.</li>
            <li>Operational timestamps such as creation, update, viewing, deletion, restoration, and other service events.</li>
            <li>Audit log records, including action type, request ID, IP address, user agent, content hash, content snapshot, and related metadata.</li>
            <li>Rate-limit events, abuse prevention signals, moderation indicators, technical diagnostics, and security logs.</li>
            <li>Complaint records, takedown notices, grievance communications, legal requests, and compliance-related records.</li>
            <li>Other technical and operational data reasonably necessary to provide, secure, maintain, and defend the service.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Purpose of Processing</h2>
          <ul style={listStyle}>
            <li>To create, store, retrieve, update, delete, restore, and manage pads.</li>
            <li>To operate manual save, autosave, retrieval, retention, cleanup, and deletion workflows.</li>
            <li>To maintain service reliability, uptime, performance, diagnostics, and technical integrity.</li>
            <li>To detect, investigate, prevent, and respond to abuse, fraud, spam, malicious activity, or misuse.</li>
            <li>To enforce our Terms, protect users, protect the public, and preserve platform security.</li>
            <li>To comply with legal obligations, lawful requests, court orders, investigations, and regulatory requirements.</li>
          </ul>

          <h2 style={sectionTitleStyle}>No Sensitive or Confidential Use</h2>
          <ul style={listStyle}>
            <li>You must not submit confidential, privileged, classified, regulated, strategic, defence-related, financial, medical, health, biometric, or otherwise sensitive information.</li>
            <li>You must not submit personal data of another person unless you have full lawful authority and a valid legal basis to do so.</li>
            <li>You are solely responsible for any content you choose to place on TempNotepad and for any consequences arising from such use.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Retention and Deletion</h2>
          <ul style={listStyle}>
            <li>TempNotepad is intended for temporary storage and short-lived text sharing.</li>
            <li>Pads may be soft-deleted, restricted, preserved, reviewed, restored, or permanently deleted as part of service operation, abuse prevention, legal compliance, security controls, or maintenance activity.</li>
            <li>Eligible soft-deleted pads may be permanently deleted after the retention period currently applied by the service, including by scheduled cleanup logic.</li>
            <li>We may preserve audit logs, metadata, complaint records, legal records, and related information for longer where reasonably necessary for operational, evidentiary, security, or legal purposes.</li>
            <li>We do not guarantee recoverability, continued availability, or indefinite retention of any pad or record.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Disclosure of Information</h2>
          <ul style={listStyle}>
            <li>We may disclose information to hosting providers, infrastructure providers, database providers, security providers, legal advisors, auditors, and compliance service providers where reasonably necessary to operate and protect the service.</li>
            <li>We may disclose information to courts, regulators, law enforcement agencies, government authorities, or other competent bodies where required or permitted by law or where reasonably necessary for safety, investigation, or enforcement.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Monitoring and Security</h2>
          <ul style={listStyle}>
            <li>We may use logging, monitoring, filtering, rate limiting, automated abuse controls, and other technical or organizational measures to secure the service.</li>
            <li>No system is completely secure, and we do not guarantee absolute security, confidentiality, or uninterrupted service availability.</li>
          </ul>

          <h2 style={sectionTitleStyle}>User Responsibility</h2>
          <ul style={listStyle}>
            <li>You are responsible for the legality, permissibility, accuracy, and consequences of any content submitted through TempNotepad.</li>
            <li>You are responsible for maintaining the secrecy of any pad URL you choose to share or retain.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Contact and Legal Notices</h2>
          <p style={{ margin: 0, color: "#374151" }}>
            For privacy concerns, grievances, takedown requests, legal notices,
            or law-enforcement communications, contact: support@tempnotepad.com
          </p>

          <h2 style={sectionTitleStyle}>Changes to This Policy</h2>
          <p style={{ margin: 0, color: "#374151" }}>
            We may revise this Privacy Policy at any time. Continued use of
            TempNotepad after any revision constitutes acceptance of the revised
            Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  );
}
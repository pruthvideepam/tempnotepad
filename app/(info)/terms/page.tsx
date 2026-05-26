export default function TermsPage() {
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
            Terms of Service
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#374151",
            }}
          >
            TempNotepad is a temporary, URL-based text pad service. By
            accessing or using TempNotepad, you agree to be bound by these
            Terms of Service, our Privacy Policy, and all applicable laws.
          </p>

          <h2 style={sectionTitleStyle}>Nature of the Service</h2>
          <ul style={listStyle}>
            <li>TempNotepad is intended only for temporary text storage and short-lived sharing by URL.</li>
            <li>It is not a secure vault, backup system, private communication service, encrypted storage service, or confidential repository.</li>
            <li>Anyone who obtains a pad URL may be able to access the contents of that pad.</li>
            <li>You use the service entirely at your own risk.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Strictly Prohibited Use</h2>
          <p style={{ margin: 0, color: "#374151" }}>
            You must not use TempNotepad to create, store, transmit, publish,
            coordinate, facilitate, or distribute any content or activity that:
          </p>
          <ul style={listStyle}>
            <li>violates any applicable law, regulation, lawful order, or legal right;</li>
            <li>is fraudulent, deceptive, misleading, defamatory, abusive, threatening, harassing, hateful, obscene, exploitative, or unlawful;</li>
            <li>promotes, supports, coordinates, or facilitates violence, terrorism, extremism, unlawful activity, or public harm;</li>
            <li>contains malware, phishing content, spam, exploit code, malicious scripts, scams, impersonation, or unauthorized access tools;</li>
            <li>infringes intellectual property, privacy, confidentiality, trade secret, or data protection rights;</li>
            <li>contains personal data, confidential information, financial information, health information, government data, defence-related information, or any other sensitive material without full lawful authority and valid legal basis;</li>
            <li>is intended to evade enforcement, conceal unlawful conduct, or assist abusive, dangerous, or criminal behavior.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Monitoring, Logging, and Enforcement Rights</h2>
          <ul style={listStyle}>
            <li>We may apply logging, monitoring, rate limiting, filtering, automated abuse controls, and other technical or organizational controls to protect the service.</li>
            <li>We reserve the absolute right, without prior notice, to block, restrict, deny, preserve, review, flag, soft-delete, restore, permanently delete, or otherwise act upon any pad, slug, request, pattern of activity, or content that we believe may violate these Terms, applicable law, safety requirements, abuse controls, or legal obligations.</li>
            <li>We may take action proactively, on complaint, on internal review, on automated abuse detection, or in response to legal process or lawful direction.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Audit Logs and Records</h2>
          <ul style={listStyle}>
            <li>We may maintain audit records relating to use of the service and related system actions.</li>
            <li>Such records may include action type, slug, timestamps, request identifiers, IP address, user agent, content hash, content snapshot, and related metadata.</li>
            <li>We may preserve and use these records for debugging, abuse handling, security, operational review, investigation, legal compliance, and enforcement purposes.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Temporary Storage, Retention, and Deletion</h2>
          <ul style={listStyle}>
            <li>TempNotepad is designed for temporary use only.</li>
            <li>Pads may be updated by manual save or autosave features.</li>
            <li>Pads may be soft-deleted, restored, restricted, preserved, or permanently deleted at any time for inactivity, storage management, abuse prevention, technical reasons, operational reasons, maintenance, legal compliance, or policy enforcement.</li>
            <li>Eligible soft-deleted pads may be permanently deleted by scheduled cleanup after the retention period currently applied by the service.</li>
            <li>We do not guarantee recoverability, restoration, continued availability, or permanent retention of any content.</li>
          </ul>

          <h2 style={sectionTitleStyle}>No Sensitive, Critical, or Confidential Use</h2>
          <ul style={listStyle}>
            <li>You must not rely on TempNotepad for confidential, privileged, mission-critical, legal, regulatory, financial, health, classified, strategic, or otherwise sensitive information.</li>
            <li>You are solely responsible for deciding what information you store, access, or share through the service.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Cooperation With Authorities</h2>
          <ul style={listStyle}>
            <li>We may preserve pads, logs, metadata, timestamps, technical records, and related information where required or reasonably necessary.</li>
            <li>We may disclose information to courts, regulators, law enforcement agencies, government authorities, or other competent bodies where required or permitted by law or where reasonably necessary for safety, compliance, investigation, or enforcement.</li>
          </ul>

          <h2 style={sectionTitleStyle}>User Responsibility</h2>
          <ul style={listStyle}>
            <li>You are solely and fully responsible for every slug, note, text, code snippet, link, and other content created, stored, accessed, or shared through TempNotepad.</li>
            <li>You are solely responsible for all consequences arising from your use of the service.</li>
            <li>You are responsible for protecting any pad URL that you share, retain, or distribute.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Disclaimer and Limitation</h2>
          <ul style={listStyle}>
            <li>TempNotepad is provided on an "as is" and "as available" basis, with all faults and without warranties of any kind, whether express or implied.</li>
            <li>We do not guarantee availability, continuity, performance, accuracy, recoverability, confidentiality, merchantability, fitness for a particular purpose, or uninterrupted storage of any content.</li>
            <li>To the maximum extent permitted by law, we disclaim liability for loss of data, disclosure of pad content, interruption of service, abuse by third parties, unauthorized access, or any indirect, incidental, consequential, special, or punitive loss or damage arising from use of the service.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Changes to These Terms</h2>
          <p style={{ margin: 0, color: "#374151" }}>
            We may revise these Terms of Service at any time. Continued use of
            TempNotepad after any revision constitutes acceptance of the revised
            Terms of Service.
          </p>
        </div>
      </div>
    </main>
  );
}
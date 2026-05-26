export default function AboutPage() {
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
            About Us
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#374151",
            }}
          >
            TempNotepad is built for simple, temporary text storage and quick
            sharing through a URL. The service is designed to be fast,
            lightweight, and easy to use for short-lived notes, drafts, and
            text sharing without unnecessary complexity.
          </p>

          <h2 style={sectionTitleStyle}>What We Built</h2>
          <ul style={listStyle}>
            <li>A minimal URL-based text pad experience.</li>
            <li>Manual save and autosave support for quick note workflows.</li>
            <li>Temporary storage behavior designed for short-term use.</li>
            <li>Audit logging, retention controls, and abuse protection mechanisms to support service integrity.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Our Approach</h2>
          <ul style={listStyle}>
            <li>Keep the product simple and direct.</li>
            <li>Focus on usability over clutter.</li>
            <li>Maintain operational controls such as logging, deletion workflows, and service protections.</li>
            <li>Be clear that the product is for temporary and non-sensitive usage.</li>
          </ul>

          <h2 style={sectionTitleStyle}>What TempNotepad Is Not</h2>
          <ul style={listStyle}>
            <li>It is not encrypted private messaging.</li>
            <li>It is not a secure vault or confidential storage platform.</li>
            <li>It is not intended for regulated, sensitive, or mission-critical information.</li>
            <li>It is not meant to replace document storage, backup, or long-term collaboration tools.</li>
          </ul>

          <h2 style={sectionTitleStyle}>What Matters to Us</h2>
          <ul style={listStyle}>
            <li>Speed and simplicity.</li>
            <li>Practical feature design.</li>
            <li>Operational accountability.</li>
            <li>Clear rules for acceptable use.</li>
            <li>Responsible handling of abuse, legal requests, and service security.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Contact</h2>
          <p style={{ margin: 0, color: "#374151" }}>
            For general inquiries, support, partnerships, or legal matters,
            contact: [YOUR EMAIL HERE]
          </p>
        </div>
      </div>
    </main>
  );
}
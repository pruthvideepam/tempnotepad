import Image from "next/image";

export default function FounderPage() {
  const sectionTitleStyle = {
    marginTop: "40px",
    marginBottom: "14px",
    fontSize: "22px",
    fontWeight: 700 as const,
    color: "#111827",
    letterSpacing: "-0.02em",
  };

  const wrapperStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(180deg, #eef2ff 0%, #f8fafc 22%, #f6f7fb 100%)",
    padding: "48px 20px 64px",
    fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
    color: "#181818",
  };

  const cardStyle = {
    backgroundColor: "rgba(255,255,255,0.96)",
    border: "1px solid rgba(226,232,240,0.95)",
    borderRadius: "20px",
    padding: "36px",
    boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
    backdropFilter: "blur(6px)",
  };

  const mutedCardStyle = {
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "18px 18px",
  };

  const listStyle = {
    paddingLeft: "22px",
    marginTop: "12px",
    color: "#374151",
  };

  const statStyle = {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "18px",
    minWidth: "180px",
    flex: "1 1 200px",
    boxShadow: "0 8px 24px rgba(15,23,42,0.04)",
  };

  return (
    <main style={wrapperStyle}>
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
        }}
      >
        <div style={cardStyle}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 14px",
              borderRadius: "999px",
              background: "#eef2ff",
              color: "#4338ca",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Founder of TempNotepad
          </div>

          <div
            style={{
              marginTop: "22px",
              display: "flex",
              gap: "28px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: "0 0 220px",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "220px",
                  height: "220px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid #dbe3f0",
                  boxShadow: "0 16px 40px rgba(15,23,42,0.10)",
                  background: "#e5e7eb",
                }}
              >
                <Image
                  src="/founder.jpg"
                  alt="Pruthvi Deepam"
                  fill
                  priority
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                flex: "1 1 520px",
                minWidth: "280px",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#6b7280",
                }}
              >
                Built with intent
              </p>

              <h1
                style={{
                  marginTop: "12px",
                  marginBottom: "10px",
                  fontSize: "44px",
                  lineHeight: 1.1,
                  letterSpacing: "-0.04em",
                  color: "#0f172a",
                }}
              >
                Pruthvi Deepam
              </h1>

              <p
                style={{
                  margin: 0,
                  fontSize: "18px",
                  lineHeight: 1.8,
                  color: "#334155",
                  maxWidth: "760px",
                }}
              >
                Pruthvi Deepam is the founder behind TempNotepad, an independent
                builder focused on creating useful products that are fast,
                practical, and clear in purpose. TempNotepad was created to make
                temporary writing and URL-based text sharing feel effortless,
                while still respecting operational discipline, platform safety,
                and service integrity.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginTop: "28px",
            }}
          >
            <div style={statStyle}>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#6b7280",
                  fontWeight: 700,
                }}
              >
                Role
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                Founder & Builder
              </p>
            </div>

            <div style={statStyle}>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#6b7280",
                  fontWeight: 700,
                }}
              >
                Product philosophy
              </p>
              <p
                style={{
                  margin: "8px 0 0",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#111827",
                }}
              >
                Simplicity with responsibility
              </p>
            </div>

            <div style={statStyle}>
              <p
                style={{
                  margin: 0,
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#6b7280",
                  fontWeight: 700,
                }}
              >
                Contact
              </p>
              <a
                href="mailto:ceo@tempnotepad.com"
                style={{
                  display: "inline-block",
                  marginTop: "8px",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#4338ca",
                  textDecoration: "none",
                  wordBreak: "break-word",
                }}
              >
                ceo@tempnotepad.com
              </a>
            </div>
          </div>

          <h2 style={sectionTitleStyle}>The Idea Behind TempNotepad</h2>
          <div style={mutedCardStyle}>
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.85,
                color: "#374151",
              }}
            >
              TempNotepad was built around a simple belief: not every note needs
              a heavy workspace, a complex editor, or a full account system.
              Sometimes the best product is the one that opens instantly, lets
              you write immediately, saves reliably, and gets out of your way.
              At the same time, simplicity should never mean carelessness. That
              is why the platform is designed with logging, retention rules,
              deletion controls, and abuse-prevention mechanisms that support
              responsible operation.
            </p>
          </div>

          <h2 style={sectionTitleStyle}>Founder Focus</h2>
          <ul style={listStyle}>
            <li>Building practical products that solve clear problems without unnecessary complexity.</li>
            <li>Designing user experiences that feel fast, simple, and intentional.</li>
            <li>Maintaining clear service rules, technical safeguards, and operational accountability.</li>
            <li>Balancing product simplicity with reliability, control, and responsible decision-making.</li>
          </ul>

          <h2 style={sectionTitleStyle}>Operating Principles</h2>
          <ul style={listStyle}>
            <li>Keep the interface clean and focused.</li>
            <li>Make the product easy to use without making it careless.</li>
            <li>Be clear about what the platform is, and equally clear about what it is not.</li>
            <li>Use sensible technical controls to support stability, safety, and platform integrity.</li>
            <li>Build with long-term trust in mind, not short-term gimmicks.</li>
          </ul>

          <h2 style={sectionTitleStyle}>A Note From the Founder</h2>
          <div
            style={{
              borderLeft: "4px solid #4338ca",
              background: "#f8faff",
              padding: "18px 18px 18px 20px",
              borderRadius: "14px",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "16px",
                lineHeight: 1.9,
                color: "#334155",
              }}
            >
              TempNotepad is built for people who want speed, clarity, and less
              friction. The ambition is not to make the loudest product. It is
              to make a dependable one, where every feature feels intentional
              and every decision respects both usability and responsibility.
            </p>
          </div>

          <h2 style={sectionTitleStyle}>Contact the Founder</h2>
          <p
            style={{
              margin: 0,
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#374151",
            }}
          >
            For founder-related inquiries, partnerships, media requests, or
            official communication, email{" "}
            <a
              href="mailto:ceo@tempnotepad.com"
              style={{
                color: "#4338ca",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              ceo@tempnotepad.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
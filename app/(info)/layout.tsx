import Link from "next/link";
import type { ReactNode } from "react";

export default function InfoLayout({
  children,
}: {
  children: ReactNode;
}) {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/founder", label: "Founder" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f6f7fb",
        color: "#111827",
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "#111827",
              fontSize: "20px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            TempNotepad
          </Link>

          <nav
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "#374151",
                  fontSize: "14px",
                  fontWeight: 600,
                  padding: "10px 14px",
                  borderRadius: "999px",
                  border: "1px solid #e5e7eb",
                  background: "#ffffff",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <div>{children}</div>

      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          background: "#ffffff",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "24px 20px",
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            © 2026 TempNotepad. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/about"
              style={{ color: "#4b5563", textDecoration: "none", fontSize: "14px" }}
            >
              About
            </Link>
            <Link
              href="/founder"
              style={{ color: "#4b5563", textDecoration: "none", fontSize: "14px" }}
            >
              Founder
            </Link>
            <Link
              href="/privacy"
              style={{ color: "#4b5563", textDecoration: "none", fontSize: "14px" }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              style={{ color: "#4b5563", textDecoration: "none", fontSize: "14px" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
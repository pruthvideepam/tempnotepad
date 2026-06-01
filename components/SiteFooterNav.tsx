import Link from "next/link";

export default function SiteFooterNav() {
  return (
    <div
      style={{
        marginTop: "36px",
        paddingTop: "20px",
        borderTop: "1px solid #d4d4d4",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#333",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          Home
        </Link>

        <Link
          href="/about"
          style={{
            color: "#333",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          About
        </Link>

        <Link
          href="/founder"
          style={{
            color: "#333",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          Founder
        </Link>

        <Link
          href="/blog"
          style={{
            color: "#333",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          Blog
        </Link>

        <Link
          href="/faq"
          style={{
            color: "#333",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          FAQ
        </Link>

        <Link
          href="/contact"
          style={{
            color: "#333",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          Contact
        </Link>

        <Link
          href="/privacy"
          style={{
            color: "#333",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          Privacy Policy
        </Link>

        <Link
          href="/terms"
          style={{
            color: "#333",
            textDecoration: "underline",
            fontSize: "15px",
          }}
        >
          Terms
        </Link>
      </div>
    </div>
  );
}
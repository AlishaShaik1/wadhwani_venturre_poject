"use client"

import ZeroLogo from "./ZeroLogo"

export default function Footer() {
  return (
    <footer
      style={{ background: "#111110", borderTop: "1px solid rgba(255,255,255,0.07)" }}
      className="px-5 pt-10 pb-8 md:px-6 md:pt-12 md:pb-10"
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 20,
        }}
      >
        {/* Center Logo & Built in India */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <ZeroLogo size={0.42} color="#FFFFFF" />
          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: 12,
              color: "#444444",
              marginTop: 8,
            }}
          >
            Built in India 🇮🇳 · Innovexa Tech
          </p>
        </div>

        {/* Center links */}
        <nav
          aria-label="Footer navigation"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
          }}
        >
          {[
            { label: "Vitals", href: "/#vitals" },
            { label: "Features", href: "/#features" },
            { label: "Specs", href: "/#specs" },
            { label: "Pricing", href: "/#pricing" }
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: 13,
                color: "#666666",
                textDecoration: "none",
                transition: "color 150ms",
                minHeight: 44,
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#666666"
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          marginTop: 32,
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: 11,
            color: "#444444",
          }}
        >
          © 2026 Innovexa Tech. All rights reserved.
        </span>
        <span
          style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: 11,
            color: "#444444",
          }}
        >
          innovexa-tech.in
        </span>
      </div>
      </div>
    </footer>
  )
}

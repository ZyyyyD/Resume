import { C } from "../constants/colors";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to top, #000, transparent)",
        borderTop: `1px solid rgba(243,243,247,0.06)`,
      }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "48px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "32px",
        }}>
        <div>
          <div
            style={{
              fontSize: "22px",
              fontWeight: 900,
              textTransform: "uppercase",
              color: C.amber,
              marginBottom: "8px",
            }}>
            ZYREL.DEV
          </div>
          <p style={{ fontSize: "13px", color: "rgba(243,243,247,0.35)" }}>
            © 2025 Zyrel James S. Frias. Full-Stack Developer.
          </p>
        </div>

        <div style={{ display: "flex", gap: "32px" }}>
          {[
            { label: "Email", href: `mailto:${profile.email}` },
            { label: "LinkedIn", href: `https://${profile.linkedin}` },
            { label: "GitHub", href: `https://${profile.github}` },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                color: "rgba(243,243,247,0.4)",
                textDecoration: "none",
                fontSize: "14px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.amber;
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(243,243,247,0.4)";
                e.currentTarget.style.textDecoration = "none";
              }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

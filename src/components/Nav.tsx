import { C } from "../constants/colors";
import cv from "../assets/Zyrel James Frias Dev.pdf";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: "rgba(11,11,18,0.65)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 40px 40px -5px rgba(245,158,11,0.04)",
        borderBottom: `1px solid ${C.border}`,
      }}>
      <div className="nav-container">
        <span
          style={{
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: C.textHi,
          }}>
          ZYREL.DEV
        </span>

        <div className="nav-links">
          {(["About", "Skills", "Projects", "Experience"] as const).map((s) => (
            <a
              key={s}
              href={`#${s.toLowerCase()}`}
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(243,243,247,0.6)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.amber)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(243,243,247,0.6)")
              }>
              {s}
            </a>
          ))}
        </div>

        <a
          href={cv}
          download={cv}
          className="nav-contact"
          style={{
            background: `linear-gradient(135deg, ${C.amber}, ${C.amberDim})`,
            color: C.bg,
            fontWeight: 700,
            borderRadius: "12px",
            textDecoration: "none",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
          }>
          Download CV
        </a>
      </div>
    </nav>
  );
}


import { C } from "../constants/colors";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
        overflow: "hidden",
      }}>
      {/* Background glows */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "25%",
          width: "384px",
          height: "384px",
          background: `rgba(245,158,11,0.08)`,
          borderRadius: "50%",
          filter: "blur(120px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25%",
          right: "25%",
          width: "256px",
          height: "256px",
          background: "rgba(167,139,250,0.08)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 16px",
          maxWidth: "1024px",
          margin: "0 auto",
        }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.amber,
            marginBottom: "24px",
          }}>
          Available for Projects
        </span>

        <h1
          style={{
            fontSize: "clamp(56px, 10vw, 112px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
            color: C.textHi,
            marginBottom: "32px",
          }}>
          FULL-STACK
          <br />
          <span
            style={{
              backgroundImage: `linear-gradient(90deg, ${C.amber}, #fbbf24)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
            DEVELOPER
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 22px)",
            color: C.textMuted,
            maxWidth: "640px",
            margin: "0 auto 48px",
            fontWeight: 300,
            lineHeight: 1.6,
          }}>
          {profile.summary}
        </p>

        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}>
          <a
            href="#projects"
            style={{
              padding: "16px 32px",
              background: C.amber,
              color: C.bg,
              fontWeight: 700,
              borderRadius: "12px",
              textDecoration: "none",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
            }>
            Explore Works
          </a>
          <a
            href="#experience"
            style={{
              padding: "16px 32px",
              background: C.glass,
              backdropFilter: "blur(12px)",
              border: `1px solid ${C.border}`,
              color: C.textHi,
              fontWeight: 700,
              borderRadius: "12px",
              textDecoration: "none",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "rgba(35,50,80,0.6)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = C.glass)
            }>
            View Experience
          </a>
        </div>
      </div>

      {/* Fade bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "256px",
          background: `linear-gradient(to top, ${C.bg}, transparent)`,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

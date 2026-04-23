import { Mail, MapPin, Terminal, ExternalLink } from "lucide-react";
import { C } from "../constants/colors";
import { profile, projects } from "../data/portfolio";

export default function About() {
  return (
    <section
      id="about"
      className="section-padded"
      style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          gap: "64px",
          alignItems: "center",
        }}>
        {/* Left — portrait card */}
        <div className="about-portrait-wrapper">
          <div
            style={{
              aspectRatio: "1",
              borderRadius: "16px",
              overflow: "hidden",
              background: `linear-gradient(135deg, rgba(245,158,11,0.15), rgba(167,139,250,0.12))`,
              border: `1px solid ${C.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <div style={{ textAlign: "center", padding: "48px" }}>
              <img src={profile.avatar} alt={profile.name} />
            </div>
          </div>
          <div
            className="about-badge"
            style={{
              background: C.glass,
              backdropFilter: "blur(12px)",
              border: `1px solid ${C.border}`,
            }}>
            <Terminal size={28} style={{ color: C.amber, flexShrink: 0 }} />
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: C.amber,
                }}>
                Stack
              </p>
              <p
                style={{
                  color: C.textHi,
                  fontWeight: 700,
                  marginTop: "2px",
                  fontSize: "14px",
                }}>
                React & Laravel Dev
              </p>
            </div>
          </div>
        </div>

        {/* Right — bio */}
        <div>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: C.amber,
              display: "block",
              marginBottom: "16px",
            }}>
            Personal Narrative
          </span>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: C.textHi,
              marginBottom: "32px",
            }}>
            Building logic into <span style={{ color: C.amber }}>art.</span>
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              fontSize: "17px",
              lineHeight: 1.7,
              color: C.textMuted,
            }}>
            <p>{profile.summary}</p>
            <p>
              From designing Laravel backends to crafting pixel-perfect React
              interfaces, I focus on clean code, performance, and the human
              experience behind every interaction.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "48px", marginTop: "48px" }}>
            <div>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: 900,
                  color: C.textHi,
                  lineHeight: 1,
                }}>
                {projects.length}+
              </p>
              <p
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: C.textDim,
                  marginTop: "4px",
                }}>
                Projects Delivered
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: 900,
                  color: C.textHi,
                  lineHeight: 1,
                }}>
                1+
              </p>
              <p
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: C.textDim,
                  marginTop: "4px",
                }}>
                Years Crafting
              </p>
            </div>
          </div>

          {/* Contact links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "32px",
              fontSize: "13px",
            }}>
            {[
              {
                icon: <Mail size={13} />,
                href: `mailto:${profile.email}`,
                label: profile.email,
              },
              {
                icon: <MapPin size={13} />,
                href: null,
                label: profile.location,
              },
              {
                icon: <ExternalLink size={13} />,
                href: `https://${profile.github}`,
                label: profile.github,
              },
              {
                icon: <ExternalLink size={13} />,
                href: `https://${profile.linkedin}`,
                label: "LinkedIn",
              },
            ].map(({ icon, href, label }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: C.textMuted,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = C.amber)}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = C.textMuted)
                  }>
                  {icon} {label}
                </a>
              ) : (
                <span
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: C.textMuted,
                  }}>
                  {icon} {label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

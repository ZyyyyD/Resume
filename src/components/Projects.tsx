import { ArrowRight, ExternalLink } from "lucide-react";
import { C } from "../constants/colors";
import { projects, profile } from "../data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padded"
      style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "64px",
          flexWrap: "wrap",
          gap: "16px",
        }}>
        <div>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: C.amber,
              display: "block",
              marginBottom: "12px",
            }}>
            Portfolio
          </span>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: C.textHi,
            }}>
            Selected Works
          </h2>
        </div>
        <a
          href={`https://${profile.github}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: C.amber,
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "underline",
            textUnderlineOffset: "8px",
            textDecorationColor: "rgba(245,158,11,0.3)",
          }}>
          View All Repositories <ArrowRight size={16} />
        </a>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
          gap: "32px",
        }}>
        {projects.map((proj) => (
          <div
            key={proj.id}
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: "16px",
              overflow: "hidden",
              transition: "transform 0.5s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1.02)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
            }>
            {/* Card image area */}
            <div
              style={{
                height: "220px",
                background: proj.gradient,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "52px",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}>
                  {proj.emoji}
                </div>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "rgba(243,243,247,0.5)",
                  }}>
                  {proj.subtitle} · {proj.period}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(to top, ${C.surface}, transparent)`,
                  opacity: 0.7,
                }}
              />
            </div>

            <div style={{ padding: "32px" }}>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: C.textHi,
                  marginBottom: "12px",
                }}>
                {proj.title}
              </h3>
              <p
                style={
                  {
                    color: C.textMuted,
                    fontSize: "14px",
                    marginBottom: "20px",
                    lineHeight: 1.6,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  } as React.CSSProperties
                }>
                {proj.brief}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "24px",
                }}>
                {proj.tags.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "11px",
                      padding: "4px 12px",
                      background: "rgba(245,158,11,0.1)",
                      color: C.amber,
                      border: "1px solid rgba(245,158,11,0.2)",
                      borderRadius: "9999px",
                      fontWeight: 600,
                    }}>
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                {proj.links.length > 0 ? (
                  proj.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        flex: 1,
                        padding: "12px 8px",
                        textAlign: "center",
                        background: C.glass,
                        border: `1px solid ${C.border}`,
                        color: C.textHi,
                        fontWeight: 700,
                        borderRadius: "12px",
                        fontSize: "13px",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        transition:
                          "background 0.3s, color 0.3s, border-color 0.3s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = C.amber;
                        el.style.color = C.bg;
                        el.style.borderColor = C.amber;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.background = C.glass;
                        el.style.color = C.textHi;
                        el.style.borderColor = C.border;
                      }}>
                      <ExternalLink size={11} /> {link.label}
                    </a>
                  ))
                ) : (
                  <div
                    style={{
                      width: "100%",
                      padding: "12px",
                      textAlign: "center",
                      background: C.glass,
                      border: `1px solid ${C.border}`,
                      color: C.textMuted,
                      fontWeight: 700,
                      borderRadius: "12px",
                      fontSize: "13px",
                    }}>
                    In Development
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

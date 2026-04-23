import { C } from "../constants/colors";
import { experiences, education } from "../data/portfolio";

export default function Experience() {
  const timelineItems = [
    ...experiences.map((e, i) => ({
      ...e,
      dotColor: i === 0 ? C.amber : C.amber,
    })),
    ...education.map((e) => ({
      id: 99,
      title: e.degree,
      subtitle: e.school,
      period: e.year,
      bullets: [] as string[],
      links: [] as { label: string; url: string }[],
      tags: [] as string[],
      dotColor: C.textDim,
      icon: "🎓",
    })),
  ];

  return (
    <section
      id="experience"
      className="section-padded"
      style={{ background: "rgba(255,255,255,0.018)" }}>
      <div style={{ maxWidth: "896px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
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
            Trajectory
          </span>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: C.textHi,
            }}>
            Career Path
          </h2>
        </div>

        <div
          className="timeline-track"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}>
          {timelineItems.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const contentBlock = (
              <>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: C.textHi,
                    marginBottom: "4px",
                  }}>
                  {item.title}
                </h4>
                <p
                  style={{
                    fontWeight: 600,
                    color: item.dotColor,
                    marginBottom: "8px",
                  }}>
                  {item.subtitle}
                </p>
                {item.bullets.slice(0, 2).map((b, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: "13px",
                      color: C.textMuted,
                      lineHeight: 1.6,
                      marginBottom: "4px",
                    }}>
                    {b}
                  </p>
                ))}
              </>
            );
            const periodSpan = (
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: C.textDim,
                }}>
                {item.period}
              </span>
            );

            return (
              <div key={`${item.id}-${idx}`} className="timeline-item">
                <div className="timeline-col-left">
                  {isLeft ? contentBlock : periodSpan}
                </div>

                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: item.dotColor,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: `4px solid ${C.bg}`,
                    zIndex: 10,
                    fontSize: "14px",
                  }}></div>

                <div className="timeline-col-right">
                  <div className="timeline-mobile-only">
                    <div style={{ marginBottom: "6px" }}>{periodSpan}</div>
                    {contentBlock}
                  </div>
                  {isLeft ? (
                    <span className="timeline-desktop-only">{item.period}</span>
                  ) : (
                    <div className="timeline-desktop-only">{contentBlock}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

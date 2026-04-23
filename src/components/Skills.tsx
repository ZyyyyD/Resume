import { C } from "../constants/colors";
import { skills } from "../data/portfolio";
import SkillChip from "./Skillchip";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "96px 0",
        background: "rgba(255,255,255,0.018)",
        overflow: "hidden",
      }}>
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: C.textHi,
            marginBottom: "16px",
          }}>
          Skills
        </h2>
        <div
          style={{
            height: "4px",
            width: "96px",
            background: `linear-gradient(to right, ${C.amber}, ${C.amberDim})`,
            margin: "0 auto",
            borderRadius: "9999px",
          }}
        />
      </div>

      <div className="skills-track">
        <div
          className="animate-scroll"
          style={{ paddingTop: "8px", paddingBottom: "8px" }}>
          {[...skills, ...skills].map((skill, i) => (
            <SkillChip
              key={i}
              skill={skill}
              border={C.border}
              glass={C.glass}
              textMuted={C.textMuted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

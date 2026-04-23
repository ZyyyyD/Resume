export default function SkillChip({
  skill,
  border,
  glass,
  textMuted,
}: {
  skill: { name: string; icon: React.ElementType; color: string };
  border: string;
  glass: string;
  textMuted: string;
}) {
  const Icon = skill.icon;
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        background: glass,
        backdropFilter: "blur(12px)",
        border: `1px solid ${border}`,
        padding: "20px 28px",
        margin: "0 12px",
        borderRadius: "16px",
        cursor: "default",
        transition: "border-color 0.2s, box-shadow 0.2s",
        minWidth: "90px",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = skill.color;
        el.style.boxShadow = `0 0 18px ${skill.color}33`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = border;
        el.style.boxShadow = "none";
      }}>
      <Icon size={36} color={skill.color} />
      <span style={{ fontSize: "12px", fontWeight: 600, color: textMuted }}>
        {skill.name}
      </span>
    </div>
  );
}

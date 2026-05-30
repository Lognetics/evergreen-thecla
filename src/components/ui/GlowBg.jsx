// Decorative floating gradient blobs + soft glow. Purely cosmetic (aria-hidden).
export default function GlowBg({ variant = "light", className = "" }) {
  const blobs =
    variant === "dark"
      ? ["bg-brand/30", "bg-brand-light/20", "bg-gold/10"]
      : ["bg-brand-light/20", "bg-brand/10", "bg-gold/10"];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className={`blob ${blobs[0]} animate-float-slow`}
        style={{ width: 420, height: 420, top: "-6%", left: "-8%" }}
      />
      <div
        className={`blob ${blobs[1]} animate-float`}
        style={{ width: 320, height: 320, top: "40%", right: "-6%" }}
      />
      <div
        className={`blob ${blobs[2]} animate-float-slow`}
        style={{ width: 260, height: 260, bottom: "-8%", left: "35%" }}
      />
    </div>
  );
}

import Reveal from "./Reveal";

// Reusable centered (or left) section heading with eyebrow + title + intro.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  light = false,
  gold = false,
  className = "",
}) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className={gold ? "eyebrow-gold" : "eyebrow"}>{eyebrow}</span>
      )}
      <h2
        className={`text-3xl leading-tight sm:text-4xl lg:text-[2.7rem] ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`text-base sm:text-lg ${light ? "text-white/70" : "text-ink/60"}`}>
          {intro}
        </p>
      )}
      {align === "center" && <span className="line-pattern mt-2 w-24" />}
    </Reveal>
  );
}

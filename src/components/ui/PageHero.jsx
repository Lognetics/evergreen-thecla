import Reveal from "./Reveal";
import GlowBg from "./GlowBg";

// Standard inner-page hero: dark emerald band with eyebrow, title, subtitle,
// and an optional framed photo on the right. Falls back to a centered layout
// when no image is provided.
export default function PageHero({ eyebrow, title, subtitle, image, imageAlt, children }) {
  const hasImage = Boolean(image);

  return (
    <section className="relative overflow-hidden bg-dark-emerald pt-40 pb-24 text-white">
      <GlowBg variant="dark" />
      {/* faint dotted texture for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "30px 30px",
        }}
      />
      <span className="absolute inset-x-0 top-0 h-1 bg-emerald-gradient" />

      <div
        className={`container-px relative grid items-center gap-14 ${
          hasImage ? "lg:grid-cols-[1.1fr_0.9fr]" : "place-items-center text-center"
        }`}
      >
        <Reveal dir={hasImage ? "left" : "up"} className={hasImage ? "max-w-xl" : "max-w-2xl"}>
          {eyebrow && <span className="eyebrow-gold">{eyebrow}</span>}
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-relaxed text-white/70">{subtitle}</p>
          )}
          <span
            className={`mt-8 block h-px w-28 bg-gradient-to-r from-gold to-transparent ${
              hasImage ? "" : "mx-auto"
            }`}
          />
          {children}
        </Reveal>

        {hasImage && (
          <Reveal dir="right" className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-light/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-glow-lg">
              <img
                src={image}
                alt={imageAlt || title}
                className="aspect-[4/5] w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
            </div>
            <span className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-ink/40 blur-xl" />
          </Reveal>
        )}
      </div>
    </section>
  );
}

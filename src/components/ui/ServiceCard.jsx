import { getIcon } from "./icons";
import { StaggerItem } from "./Reveal";

// Service card with icon, hover lift + glow. Works on light or dark sections.
export default function ServiceCard({ icon, title, summary, dark = false }) {
  const Icon = getIcon(icon);
  return (
    <StaggerItem>
      <div
        className={`group relative h-full overflow-hidden rounded-2xl p-7 card-elevate ${
          dark
            ? "border border-white/10 bg-white/[0.04] backdrop-blur-sm hover:border-gold/40"
            : "border border-ink/5 bg-white shadow-[0_18px_50px_-35px_rgba(10,10,10,0.4)] hover:border-brand/20"
        }`}
      >
        <span
          className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-light/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
        <div
          className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-500 group-hover:-translate-y-1 ${
            dark
              ? "bg-emerald-gradient text-white"
              : "bg-sage text-brand-deep group-hover:bg-emerald-gradient group-hover:text-white"
          }`}
        >
          <Icon size={26} strokeWidth={1.7} />
        </div>
        <h3
          className={`mb-2 text-xl ${dark ? "text-white" : "text-ink"}`}
        >
          {title}
        </h3>
        <p className={`text-sm leading-relaxed ${dark ? "text-white/65" : "text-ink/60"}`}>
          {summary}
        </p>
      </div>
    </StaggerItem>
  );
}

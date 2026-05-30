import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import GlowBg from "./GlowBg";
import { features } from "../../data/images";

// Full-width dark CTA with image overlay. Used to close most pages.
export default function CTABand({
  title = (
    <>
      You don’t have to shrink to fit into the world.
      <br className="hidden sm:block" /> You were created to stand out.
    </>
  ),
  lines = [
    "Let’s work together.",
    "Let’s build confidence.",
    "Let’s tell your story.",
    "Let’s create impact.",
  ],
  buttonLabel = "Work With Me",
  buttonTo = "/work-with-me",
  image = features.stage,
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-brand-deep/70" />
      </div>
      <GlowBg variant="dark" />
      <div className="container-px relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-3xl leading-tight text-white sm:text-4xl lg:text-[2.7rem]">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-7 flex max-w-md flex-col gap-1 font-accent text-base text-gold sm:text-lg">
            {lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <Link to={buttonTo} className="btn-gold mt-9">
            {buttonLabel}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

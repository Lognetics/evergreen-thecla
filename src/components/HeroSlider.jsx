import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react";
import { portraits, features } from "../data/images";
import { videos } from "../data/videos";
import { PlayBadge } from "./ui/VideoPlayer";

const slides = [
  {
    image: portraits.confident,
    facet: "Speaker · Coach · Host",
    headline: "Find Your Voice.",
    text: "I help people speak with confidence and stand boldly in who they are — on stage, online and in life.",
    align: "right",
  },
  {
    image: portraits.hero,
    facet: "Public Speaker · Confidence Coach",
    headline: "Show Up Boldly.",
    text: "Communication, confidence and creative expression — the tools to become the best version of you.",
    align: "right",
  },
  {
    image: features.press,
    facet: "Host · Brand Influencer",
    headline: "Build Confidence.",
    text: "From red carpets to conference stages, I bring presence, warmth and energy to every moment.",
    align: "left",
  },
  {
    image: portraits.speaking,
    facet: "Spoken Word Artist · Advocate",
    headline: "Become, unapologetically.",
    text: "Words become experiences. Purpose becomes impact. You were created to stand out.",
    align: "right",
  },
];

const AUTOPLAY = 6500;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((d) => {
    setDir(d);
    setIndex((i) => (i + d + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), AUTOPLAY);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const slide = slides[index];

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      <AnimatePresence mode="popLayout" custom={dir}>
        <motion.div
          key={index}
          custom={dir}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover ${
              slide.align === "right" ? "object-[70%_top]" : "object-center"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays — layered for depth and legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      <div className="pointer-events-none absolute inset-0">
        <div className="blob bg-brand/30 animate-float-slow" style={{ width: 460, height: 460, top: "-8%", left: "-6%" }} />
        <div className="blob bg-brand-light/15 animate-float" style={{ width: 360, height: 360, bottom: "2%", right: "10%" }} />
      </div>
      <span className="absolute inset-x-0 top-0 z-10 h-1 bg-emerald-gradient" />

      {/* Content */}
      <div className="container-px relative z-10 flex min-h-[100svh] flex-col justify-center pt-28 pb-28">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-accent text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur"
        >
          <Sparkles size={14} /> The Thecla Network
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-5 max-w-2xl font-display text-[2.5rem] font-semibold leading-[1.04] text-white sm:text-6xl"
        >
          Thecla Amarachukwu Orakwe
        </motion.h1>

        {/* Rotating statement — min-height grows to fit so nothing overlaps */}
        <div className="mt-4 flex min-h-[8.5rem] flex-col justify-start sm:min-h-[7.5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45 }}
              className="max-w-xl"
            >
              <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-light">
                {slide.facet}
              </span>
              <p className="mt-1.5 font-display text-2xl italic leading-tight text-gold sm:text-3xl">
                {slide.headline}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70 sm:text-[15px]">
                {slide.text}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <Link to="/work-with-me" className="btn-gold">
            Work With Me <ArrowRight size={16} />
          </Link>
          <Link to="/unbox-your-aura" className="btn-outline">
            Join Unbox Your Aura
          </Link>
          <div className="flex items-center gap-3 pl-1">
            <PlayBadge video={videos.callMeWoman} size="sm" />
            <span className="font-accent text-xs uppercase tracking-wider text-white/60">
              Watch “Call Me Woman”
            </span>
          </div>
        </motion.div>

        {/* Controls */}
        <div className="mt-9 flex items-center gap-5">
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:text-gold"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="flex gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDir(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className="group relative h-2.5 overflow-hidden rounded-full bg-white/20"
                style={{ width: i === index ? 44 : 10 }}
              >
                {i === index && !paused && (
                  <motion.span
                    key={index}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTOPLAY / 1000, ease: "linear" }}
                    style={{ originX: 0 }}
                    className="absolute inset-0 bg-emerald-gradient"
                  />
                )}
                {i === index && paused && (
                  <span className="absolute inset-0 bg-emerald-gradient" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating slide counter */}
      <div className="absolute bottom-8 right-8 z-10 hidden items-end gap-1 font-display lg:flex">
        <span className="text-3xl text-gold">0{index + 1}</span>
        <span className="mb-1 text-sm text-white/40">/ 0{slides.length}</span>
      </div>
    </section>
  );
}

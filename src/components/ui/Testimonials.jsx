import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d) => {
    setDir(d);
    setIndex((i) => (i + d + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-3xl border border-sage bg-sage/40 p-9 sm:p-12">
        <Quote
          className="absolute right-8 top-8 text-brand/15"
          size={72}
          strokeWidth={1}
        />
        <div className="relative min-h-[210px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -40 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <p className="font-display text-xl italic leading-relaxed text-ink/80 sm:text-2xl">
                “{t.quote}”
              </p>
              <footer className="mt-7 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-gradient font-display text-lg font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <div className="font-accent font-semibold text-ink">{t.name}</div>
                  <div className="text-sm text-brand">{t.role}</div>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 text-brand transition hover:bg-brand hover:text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-brand" : "w-2.5 bg-brand/25 hover:bg-brand/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 text-brand transition hover:bg-brand hover:text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

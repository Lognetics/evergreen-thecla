import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Animated count-up number. If `value` is null, just shows the label as a badge.
export default function Stat({ value, suffix = "", label, light = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value == null) return;
    let raf;
    const start = performance.now();
    const duration = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      {value != null ? (
        <span
          className={`font-display text-4xl font-bold sm:text-5xl ${
            light ? "text-white" : "text-gradient"
          }`}
        >
          {display}
          {suffix}
        </span>
      ) : (
        <span className="mb-1 text-gold">
          <span className="font-display text-2xl">✦</span>
        </span>
      )}
      <span
        className={`mt-2 font-accent text-xs font-semibold uppercase tracking-[0.18em] ${
          light ? "text-white/70" : "text-ink/60"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  up: { hidden: { opacity: 0, y: 36 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

// Fade-up-on-scroll wrapper. Uses a latched useInView + explicit `animate` so that
// once an element has appeared it stays visible across re-renders (e.g. when a
// modal opens elsewhere on the page). whileInView+once would revert to hidden.
export default function Reveal({
  children,
  as = "div",
  dir = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = 0.25,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={variants[dir]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

// Stagger container + item for lists of cards.
export function Stagger({ children, className = "", amount = 0.15 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", dir = "up" }) {
  return (
    <motion.div
      className={className}
      variants={variants[dir]}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

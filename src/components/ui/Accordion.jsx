import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { StaggerItem } from "./Reveal";

// Simple animated FAQ accordion.
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <StaggerItem key={item.q}>
            <div
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isOpen ? "border-brand/30 bg-white" : "border-ink/10 bg-white/70"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-accent text-base font-semibold text-ink">
                  {item.q}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 bg-emerald-gradient text-white"
                      : "bg-sage text-brand-deep"
                  }`}
                >
                  <Plus size={18} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-6 pb-6 leading-relaxed text-ink/60">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </StaggerItem>
        );
      })}
    </div>
  );
}

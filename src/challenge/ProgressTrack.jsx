import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";
import { CHALLENGE } from "./config";
import { useChallenge } from "./store";

// Animated Day 1..30 tracker. `compact` renders smaller chips.
export default function ProgressTrack({ compact = false }) {
  const { isUnlocked, isDayComplete, currentDay } = useChallenge();
  const days = Array.from({ length: CHALLENGE.totalDays }, (_, i) => i + 1);

  return (
    <div
      className={`grid gap-2 ${
        compact ? "grid-cols-10 sm:grid-cols-15" : "grid-cols-6 sm:grid-cols-10"
      }`}
      style={compact ? { gridTemplateColumns: "repeat(10, minmax(0,1fr))" } : undefined}
    >
      {days.map((n) => {
        const done = isDayComplete(n);
        const unlocked = isUnlocked(n);
        const current = n === currentDay && !done;
        const inner = (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: Math.min(n * 0.012, 0.4) }}
            className={`relative flex aspect-square items-center justify-center rounded-xl border font-accent text-xs font-bold transition-all ${
              done
                ? "border-transparent bg-emerald-gradient text-white shadow-soft"
                : current
                ? "border-gold bg-gold/15 text-gold ring-2 ring-gold/40"
                : unlocked
                ? "border-brand/25 bg-white text-brand-deep hover:border-brand"
                : "border-ink/10 bg-ink/[0.03] text-ink/30"
            }`}
          >
            {done ? (
              <Check size={compact ? 12 : 15} />
            ) : unlocked ? (
              n
            ) : (
              <Lock size={compact ? 10 : 13} />
            )}
            {current && (
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-ping rounded-full bg-gold" />
            )}
          </motion.div>
        );
        return unlocked ? (
          <Link key={n} to={`/challenge/day/${n}`} aria-label={`Day ${n}`}>
            {inner}
          </Link>
        ) : (
          <div key={n} title="Locked — complete previous days first" aria-label={`Day ${n} locked`}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

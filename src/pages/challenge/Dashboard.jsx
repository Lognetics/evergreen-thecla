import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Flame,
  ArrowRight,
  Trophy,
  Video,
  PenLine,
  CalendarCheck,
  Sparkles,
  Footprints,
  Zap,
  Star,
  RotateCcw,
} from "lucide-react";
import Reveal from "../../components/ui/Reveal";
import GlowBg from "../../components/ui/GlowBg";
import ProgressTrack from "../../challenge/ProgressTrack";
import { useChallenge } from "../../challenge/store";
import { CHALLENGE, MOTIVATION } from "../../challenge/config";
import { challengeDays, weeks } from "../../data/challengeContent";

const badgeIcons = { Footprints, Flame, Zap, Star, Trophy };

export default function Dashboard() {
  const c = useChallenge();
  const navigate = useNavigate();
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    if (!c.isEnrolled) navigate("/challenge");
  }, [c.isEnrolled, navigate]);
  if (!c.isEnrolled) return null;

  const first = c.profile.name.split(" ")[0];
  const nextDayData = challengeDays.find((d) => d.day === c.currentDay);
  const currentWeek = weeks.find((w) => w.days.includes(c.currentDay)) || weeks[0];
  const quote = MOTIVATION[c.completedCount % MOTIVATION.length];

  const stats = [
    { icon: CalendarCheck, label: "Days completed", value: `${c.completedCount}/30` },
    { icon: Flame, label: "Current streak", value: c.streak },
    { icon: Zap, label: "XP / Level", value: `${c.xp} · Lv ${c.level}` },
    { icon: Video, label: "Videos submitted", value: c.videosCount },
    { icon: PenLine, label: "Journal entries", value: c.journalCount },
    { icon: Trophy, label: "Badges earned", value: c.badges.filter((b) => b.earned).length },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-cream pt-28 pb-24">
      <GlowBg />
      <div className="container-px relative">
        {/* Welcome */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-dark-emerald p-8 text-white shadow-glow sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow-gold">{currentWeek.name} · Week {currentWeek.n}</span>
                <h1 className="mt-2 font-display text-3xl sm:text-4xl">Welcome back, {first}.</h1>
                <p className="mt-2 text-white/70">
                  {c.finished ? (
                    <>You've completed all 30 days. Champion! 🏆</>
                  ) : (
                    <>You are currently on <strong className="text-gold">Day {c.currentDay} of 30</strong>.</>
                  )}
                </p>
              </div>
              <div className="text-right">
                <div className="font-display text-5xl font-bold text-gold">{c.percent}%</div>
                <div className="font-accent text-xs uppercase tracking-wider text-white/50">Complete</div>
              </div>
            </div>
            {/* progress bar */}
            <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-emerald-gradient transition-all duration-1000"
                style={{ width: `${c.percent}%` }}
              />
            </div>
            <p className="mt-4 font-display text-lg italic text-white/80">“{quote}”</p>
          </div>
        </Reveal>

        {/* Continue + stats */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-ink/5 bg-white p-8 shadow-soft">
              <div>
                <span className="eyebrow">{c.finished ? "All done" : "Next lesson"}</span>
                {c.finished ? (
                  <>
                    <h2 className="mt-3 font-display text-2xl text-ink">Your certificate awaits</h2>
                    <p className="mt-2 text-ink/60">
                      You've shown up for 30 days. Download and share your Certificate of
                      Completion.
                    </p>
                    <Link to="/challenge/certificate" className="btn-primary mt-6">
                      View Certificate <Trophy size={16} />
                    </Link>
                  </>
                ) : (
                  <>
                    <h2 className="mt-3 font-display text-2xl text-ink">
                      Day {c.currentDay}: {nextDayData?.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-ink/60">
                      {nextDayData?.lesson?.[0]}
                    </p>
                    <Link to={`/challenge/day/${c.currentDay}`} className="btn-primary mt-6">
                      {c.completedCount === 0 ? "Start Day 1" : "Continue"} <ArrowRight size={16} />
                    </Link>
                  </>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid h-full grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-ink/5 bg-white p-4 shadow-[0_14px_40px_-34px_rgba(10,10,10,0.5)]"
                >
                  <s.icon className="text-brand" size={18} />
                  <div className="mt-2 font-display text-xl font-bold text-ink">{s.value}</div>
                  <div className="font-accent text-[10px] uppercase tracking-wider text-ink/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Progress tracker */}
        <Reveal className="mt-8">
          <div className="rounded-3xl border border-ink/5 bg-white p-8 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <span className="eyebrow">Your Journey</span>
                <h2 className="mt-1 font-display text-2xl text-ink">30-Day Progress</h2>
              </div>
              <div className="flex items-center gap-4 font-accent text-[11px] uppercase tracking-wider text-ink/45">
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-emerald-gradient" /> Done</span>
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded border border-gold bg-gold/20" /> Current</span>
                <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded border border-ink/15 bg-ink/5" /> Locked</span>
              </div>
            </div>
            <ProgressTrack />
          </div>
        </Reveal>

        {/* Badges */}
        <Reveal className="mt-8">
          <div className="rounded-3xl border border-ink/5 bg-white p-8 shadow-soft">
            <span className="eyebrow">Achievements</span>
            <h2 className="mt-1 font-display text-2xl text-ink">Badges</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {c.badges.map((b) => {
                const Icon = badgeIcons[b.icon] || Sparkles;
                return (
                  <div
                    key={b.id}
                    className={`flex flex-col items-center rounded-2xl border p-5 text-center transition ${
                      b.earned
                        ? "border-gold/40 bg-gold/10"
                        : "border-ink/5 bg-cream opacity-60"
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        b.earned ? "bg-gold text-ink" : "bg-ink/10 text-ink/40"
                      }`}
                    >
                      <Icon size={22} />
                    </span>
                    <span className="mt-3 font-accent text-xs font-semibold text-ink">{b.label}</span>
                    <span className="mt-0.5 text-[10px] uppercase tracking-wider text-ink/40">
                      {b.earned ? "Earned" : `Day ${b.threshold}`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Reset */}
        <div className="mt-8 text-center">
          {confirmReset ? (
            <span className="inline-flex items-center gap-3 text-sm text-ink/60">
              Reset all progress?
              <button
                onClick={() => {
                  c.reset();
                  navigate("/challenge");
                }}
                className="font-accent font-semibold text-red-500"
              >
                Yes, reset
              </button>
              <button onClick={() => setConfirmReset(false)} className="font-accent text-ink/50">
                Cancel
              </button>
            </span>
          ) : (
            <button
              onClick={() => setConfirmReset(true)}
              className="inline-flex items-center gap-1.5 font-accent text-xs uppercase tracking-wider text-ink/40 hover:text-ink/70"
            >
              <RotateCcw size={13} /> Reset progress
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

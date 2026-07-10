import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Check,
  Compass,
  Hammer,
  Eye,
  Crown,
  ShieldCheck,
  Trophy,
  Flame,
  PenLine,
  Video,
} from "lucide-react";
import Reveal, { Stagger, StaggerItem } from "../../components/ui/Reveal";
import GlowBg from "../../components/ui/GlowBg";
import SectionHeading from "../../components/ui/SectionHeading";
import { useChallenge } from "../../challenge/store";
import { CHALLENGE } from "../../challenge/config";
import { weeks } from "../../data/challengeContent";
import { portraits } from "../../data/images";

const weekIcons = { 1: Compass, 2: Hammer, 3: Eye, 4: Crown };

const perks = [
  { icon: PenLine, title: "Interactive Journaling", text: "Reflect in guided fields that autosave as you go — no blank pages." },
  { icon: Flame, title: "Streaks & Badges", text: "Earn XP, keep your streak, and unlock 7, 14, 21 and 30-day badges." },
  { icon: Video, title: "Daily Video Journal", text: "Record what you learnt each day and build a personal growth portfolio." },
  { icon: ShieldCheck, title: "Unlock as You Grow", text: "One day at a time — each day unlocks only after you complete the last." },
  { icon: Trophy, title: "Certificate of Completion", text: "Finish all 30 days and earn a shareable certificate from The Thecla Network." },
  { icon: Sparkles, title: "Confetti & Celebrations", text: "Every completed day and week is a moment worth celebrating." },
];

export default function Challenge() {
  const { isEnrolled, enroll, profile, currentDay, percent } = useChallenge();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "" });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    enroll({ name: form.name.trim(), email: form.email.trim() });
    navigate("/challenge/dashboard");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-emerald pt-36 pb-24 text-white">
        <GlowBg variant="dark" />
        <span className="absolute inset-x-0 top-0 h-1 bg-emerald-gradient" />
        <div className="container-px relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal dir="left" className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-accent text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Sparkles size={14} /> The Thecla Network · Challenge Academy
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              The 30-Day Unbox Your Aura Challenge
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              One brave step every day for 30 days. Discover who you are, build
              courageous habits, show up boldly, and become the best version of yourself
              — guided, interactive and unforgettable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {isEnrolled ? (
                <Link to="/challenge/dashboard" className="btn-gold">
                  Continue — Day {currentDay} <ArrowRight size={16} />
                </Link>
              ) : (
                <a href="#enroll" className="btn-gold">
                  Start the Challenge <ArrowRight size={16} />
                </a>
              )}
              <Link to="/unbox-your-aura" className="btn-outline">
                About Unbox Your Aura
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-accent text-xs uppercase tracking-wider text-white/55">
              <span>30 Guided Days</span>
              <span className="text-gold">•</span>
              <span>4 Weekly Milestones</span>
              <span className="text-gold">•</span>
              <span>Certificate on Completion</span>
            </div>
          </Reveal>

          <Reveal dir="right" className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-brand-light/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 shadow-glow-lg">
              <img
                src={portraits.confident}
                alt="Evergreen Thecla"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              {isEnrolled && (
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-ink/50 p-4 backdrop-blur">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/80">Welcome back, {profile.name.split(" ")[0]}</span>
                    <span className="font-display font-bold text-gold">{percent}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                    <div className="h-full bg-emerald-gradient" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* The 4 weeks */}
      <section className="bg-white py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="The Journey"
            title="Four weeks. One transformation."
            intro="The challenge moves through four themed weeks — each building on the last."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {weeks.map((w) => {
              const Icon = weekIcons[w.n];
              return (
                <StaggerItem key={w.n}>
                  <div className="group h-full rounded-3xl border border-ink/5 bg-sage/30 p-7 card-elevate">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-gradient text-white">
                        <Icon size={22} />
                      </span>
                      <span className="font-display text-4xl font-bold text-sage-foreground/20 text-brand/15">
                        0{w.n}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl text-ink">Week {w.n}</h3>
                    <p className="font-accent text-xs font-semibold uppercase tracking-wider text-brand">
                      {w.name}
                    </p>
                    <p className="mt-2 text-sm text-ink/60">{w.tagline}</p>
                    <p className="mt-3 text-xs text-ink/40">Days {w.days[0]}–{w.days[w.days.length - 1]}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Perks */}
      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Why It Works" title="Experience it — don't just read it" />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p) => (
              <StaggerItem key={p.title}>
                <div className="h-full rounded-3xl border border-ink/5 bg-white p-7 card-elevate">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sage text-brand-deep">
                    <p.icon size={22} />
                  </span>
                  <h3 className="text-lg text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink/60">{p.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Enroll */}
      <section id="enroll" className="relative overflow-hidden bg-dark-emerald py-24 text-white">
        <GlowBg variant="dark" />
        <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal dir="left">
            <span className="eyebrow-gold">Enrol Free</span>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              {isEnrolled ? "You're enrolled 🎉" : "Begin your 30-day journey"}
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              {isEnrolled
                ? "Pick up right where you left off and keep your streak alive."
                : "Create your free challenge profile and unlock Day 1. Your progress saves automatically on this device."}
            </p>
            <ul className="mt-6 space-y-2.5">
              {["Personal dashboard & progress tracking", "Resume anytime — everything autosaves", "Certificate after Day 30"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-sm text-white/80">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-gradient">
                    <Check size={12} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal dir="right">
            {isEnrolled ? (
              <div className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 text-center backdrop-blur">
                <Trophy className="mx-auto text-gold" size={40} />
                <p className="mt-4 text-lg text-white">Welcome back, {profile.name.split(" ")[0]}!</p>
                <p className="mt-1 text-sm text-white/60">You're {percent}% through the challenge.</p>
                <Link to="/challenge/dashboard" className="btn-gold mt-6">
                  Go to My Dashboard <ArrowRight size={16} />
                </Link>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur"
              >
                <label className="block">
                  <span className="font-accent text-xs uppercase tracking-wider text-white/60">Full name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                  />
                </label>
                <label className="mt-4 block">
                  <span className="font-accent text-xs uppercase tracking-wider text-white/60">Email address</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-gold focus:outline-none"
                  />
                </label>
                <button type="submit" className="btn-gold mt-6 w-full">
                  Enrol & Unlock Day 1 <ArrowRight size={16} />
                </button>
                <p className="mt-3 text-center text-[11px] text-white/40">
                  Your profile is saved privately on this device.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

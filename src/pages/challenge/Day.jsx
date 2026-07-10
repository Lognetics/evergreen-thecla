import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  BookOpen,
  Target,
  Megaphone,
  HandHeart,
  Flame,
  Gauge,
  PenLine,
  Video as VideoIcon,
  Upload,
  Trash2,
  RefreshCw,
  Volume2,
  Lock,
  CheckCircle2,
  Circle,
  Sparkles,
  LayoutDashboard,
} from "lucide-react";
import Confetti from "../../challenge/Confetti";
import { useChallenge } from "../../challenge/store";
import { CHALLENGE } from "../../challenge/config";
import { challengeDays, weeks } from "../../data/challengeContent";

/* ---------- small building blocks ---------- */

function Panel({ icon: Icon, tone = "brand", eyebrow, title, children }) {
  const tones = {
    brand: "bg-sage text-brand-deep",
    gold: "bg-gold/15 text-gold",
    ink: "bg-ink/5 text-ink",
  };
  return (
    <section className="rounded-3xl border border-ink/5 bg-white p-6 shadow-[0_18px_50px_-42px_rgba(10,10,10,0.5)] sm:p-8">
      <div className="flex items-center gap-3">
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tones[tone]}`}>
          <Icon size={20} />
        </span>
        <div>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h3 className="font-display text-xl text-ink">{title}</h3>
        </div>
      </div>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function AckButton({ done, onClick, doneLabel, label }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-accent text-sm font-semibold transition ${
        done
          ? "bg-emerald-gradient text-white"
          : "border border-brand/30 text-brand-deep hover:bg-brand hover:text-white"
      }`}
    >
      {done ? <Check size={16} /> : <Circle size={16} />}
      {done ? doneLabel : label}
    </button>
  );
}

function CourageMeter({ value, onChange }) {
  const v = value || 0;
  return (
    <div>
      <div className="flex items-end justify-between">
        <span className="font-accent text-xs uppercase tracking-wider text-ink/50">
          How courageous did you feel today?
        </span>
        <span className="font-display text-3xl font-bold text-gradient">{v || "—"}<span className="text-base text-ink/40">/10</span></span>
      </div>
      <input
        type="range"
        min="0"
        max="10"
        value={v}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[#0F7A5A]"
      />
      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-sage">
        <motion.div
          className="h-full rounded-full bg-emerald-gradient"
          animate={{ width: `${v * 10}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        />
      </div>
    </div>
  );
}

function VideoUpload({ video, onSet, onClear }) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);

  const pick = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    // Local preview (real cloud upload is a backend/Phase-2 feature).
    const url = URL.createObjectURL(file);
    setPreview(url);
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          onSet({
            name: file.name,
            size: file.size,
            type: file.type,
            uploadedAt: new Date().toISOString(),
          });
          return 100;
        }
        return p + 10;
      });
    }, 60);
  };

  return (
    <div>
      <p className="text-sm text-ink/60">
        Record a short video (2–5 min): what you learnt, how you applied it, and your
        biggest takeaway. Formats: MP4, MOV, WebM.
      </p>
      <input
        ref={inputRef}
        type="file"
        accept="video/mp4,video/quicktime,video/webm,video/*"
        onChange={pick}
        className="hidden"
      />

      {!video && progress === 0 && (
        <button
          onClick={() => inputRef.current?.click()}
          className="mt-4 flex w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-brand/25 bg-sage/30 py-8 text-brand-deep transition hover:border-brand hover:bg-sage/60"
        >
          <Upload size={26} />
          <span className="font-accent text-sm font-semibold">Choose a video to upload</span>
          <span className="text-xs text-ink/40">Stored locally on this device</span>
        </button>
      )}

      {progress > 0 && progress < 100 && (
        <div className="mt-4">
          <div className="flex justify-between text-xs text-ink/50">
            <span>Uploading…</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-sage">
            <div className="h-full bg-emerald-gradient transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {(video || progress === 100) && (
        <div className="mt-4 rounded-2xl border border-ink/5 bg-cream p-4">
          {preview ? (
            <video src={preview} controls className="w-full rounded-xl" />
          ) : (
            <div className="flex items-center gap-3 text-ink/60">
              <VideoIcon size={20} className="text-brand" />
              <span className="text-sm">{video?.name || "Your submission"}</span>
            </div>
          )}
          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 font-accent text-xs font-semibold text-brand">
              <Check size={14} /> Uploaded
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => inputRef.current?.click()}
                className="inline-flex items-center gap-1 rounded-full border border-ink/10 px-3 py-1.5 text-xs text-ink/60 hover:border-brand hover:text-brand"
              >
                <RefreshCw size={12} /> Replace
              </button>
              <button
                onClick={() => {
                  setPreview(null);
                  setProgress(0);
                  onClear();
                }}
                className="inline-flex items-center gap-1 rounded-full border border-ink/10 px-3 py-1.5 text-xs text-red-500 hover:border-red-300"
              >
                <Trash2 size={12} /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- the day page ---------- */

export default function Day() {
  const { n } = useParams();
  const day = Number(n);
  const navigate = useNavigate();
  const c = useChallenge();
  const data = challengeDays.find((d) => d.day === day);
  const st = c.dayState(day);
  const [celebrate, setCelebrate] = useState(false);
  const topRef = useRef(null);

  // guards
  useEffect(() => {
    if (!c.isEnrolled) navigate("/challenge");
    else if (!c.isUnlocked(day)) navigate("/challenge/dashboard");
  }, [c.isEnrolled, day]); // eslint-disable-line

  // mark opened
  useEffect(() => {
    if (c.isEnrolled && c.isUnlocked(day) && !st.opened) c.patchDay(day, { opened: true });
  }, [day, c.isEnrolled]); // eslint-disable-line

  const week = useMemo(() => weeks.find((w) => w.days.includes(day)), [day]);
  const reqs = c.requirementsFor(day);
  const canFinish = c.canComplete(day);
  const done = c.isDayComplete(day);

  if (!data || !c.isEnrolled) return null;

  const speak = (text) => {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.92;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
    } catch (e) {
      /* not supported */
    }
  };

  const finish = () => {
    const ok = c.completeDay(day);
    if (ok) {
      setCelebrate(true);
      setTimeout(() => setCelebrate(false), 2800);
    }
  };

  const isWeekEnd = [7, 14, 21, 30].includes(day);

  return (
    <div ref={topRef} className="relative min-h-screen bg-cream pb-24 pt-24">
      <AnimatePresence>{celebrate && <Confetti />}</AnimatePresence>

      {/* sticky mini header */}
      <div className="sticky top-[68px] z-30 border-y border-ink/5 bg-white/85 backdrop-blur">
        <div className="container-px flex items-center justify-between gap-4 py-3">
          <Link
            to="/challenge/dashboard"
            className="inline-flex items-center gap-1.5 font-accent text-xs font-semibold text-ink/60 hover:text-brand"
          >
            <LayoutDashboard size={15} /> Dashboard
          </Link>
          <div className="flex flex-1 items-center gap-3">
            <span className="font-accent text-xs font-semibold text-ink/50">Day {day}/30</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sage">
              <div className="h-full bg-emerald-gradient" style={{ width: `${(day / 30) * 100}%` }} />
            </div>
          </div>
          {done && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-gradient px-3 py-1 font-accent text-[11px] font-semibold text-white">
              <Check size={12} /> Done
            </span>
          )}
        </div>
      </div>

      <div className="container-px mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* main column */}
        <div className="space-y-6">
          {/* header */}
          <div className="rounded-3xl bg-dark-emerald p-8 text-white shadow-glow">
            <span className="eyebrow-gold">Week {week?.n} · {week?.name}{isWeekEnd ? " · Checkpoint" : ""}</span>
            <h1 className="mt-2 font-display text-3xl leading-tight text-white sm:text-4xl">
              Day {day}: {data.title}
            </h1>
          </div>

          {/* Lesson */}
          {data.lesson.length > 0 && (
          <Panel icon={BookOpen} eyebrow={isWeekEnd ? "Milestone" : "Today's Lesson"} title={isWeekEnd ? "Weekly Check-In" : "Today's Aura Lesson"}>
            <div className="prose-challenge space-y-3">
              {data.lesson.map((p, i) => (
                <p
                  key={i}
                  className={`leading-relaxed text-ink/75 ${
                    i === 0
                      ? "text-lg first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-brand"
                      : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </Panel>
          )}

          {/* Reflection */}
          {data.reflection.length > 0 && (
            <Panel icon={PenLine} eyebrow={isWeekEnd ? "Weekly Reflection" : "Reflect"} title={isWeekEnd ? "Week Review" : "Aura Reflection"}>
              {data.reflectionIntro?.length > 0 && (
                <p className="mb-4 text-sm italic text-ink/55">{data.reflectionIntro.join(" ")}</p>
              )}
              <div className="space-y-5">
                {data.reflection.map((q, i) => (
                  <div key={i}>
                    <label className="block font-accent text-sm font-medium text-ink/80">
                      {i + 1}. {q}
                    </label>
                    <textarea
                      value={st.reflections?.[i] || ""}
                      onChange={(e) => c.setReflection(day, i, e.target.value)}
                      placeholder="Write your honest answer…"
                      className="mt-2 min-h-[90px] w-full resize-y rounded-2xl border border-ink/10 bg-cream px-4 py-3 text-sm leading-relaxed focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
                    />
                  </div>
                ))}
              </div>
            </Panel>
          )}

          {/* Challenge */}
          {data.challenge.length > 0 && (
            <div className="overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-white to-sage/40 p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold">
                  <Target size={20} />
                </span>
                <div>
                  <span className="eyebrow-gold">Today's Challenge</span>
                  <h3 className="font-display text-xl text-ink">Aura Mission</h3>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-ink/75">
                {data.challenge.map((p, i) => (
                  <p key={i} className="leading-relaxed">{p}</p>
                ))}
              </div>
              <div className="mt-5">
                <AckButton
                  done={!!st.challengeDone}
                  onClick={() => c.patchDay(day, { challengeDone: !st.challengeDone })}
                  label="Mark as Completed"
                  doneLabel="Challenge Completed"
                />
              </div>
            </div>
          )}

          {/* Declaration */}
          {data.declaration.length > 0 && (
            <Panel icon={Megaphone} tone="gold" eyebrow="Speak it" title="Today's Declaration">
              <blockquote className="space-y-1.5 border-l-4 border-gold pl-5 font-display text-lg italic leading-relaxed text-brand-deep">
                {data.declaration.map((l, i) => (
                  <p key={i}>{l}</p>
                ))}
              </blockquote>
              <div className="mt-5">
                <AckButton
                  done={!!st.declarationDone}
                  onClick={() => c.patchDay(day, { declarationDone: !st.declarationDone })}
                  label="I have spoken today's declaration"
                  doneLabel="Declaration spoken"
                />
              </div>
            </Panel>
          )}

          {/* Prayer */}
          {data.prayer.length > 0 && (
            <Panel icon={HandHeart} eyebrow="Pray" title="Aura Prayer">
              <div className="space-y-1.5 text-ink/75">
                {data.prayer.map((l, i) => (
                  <p key={i} className="leading-relaxed">{l}</p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <AckButton
                  done={!!st.prayerViewed}
                  onClick={() => c.patchDay(day, { prayerViewed: !st.prayerViewed })}
                  label="Amen — I've prayed"
                  doneLabel="Prayed"
                />
                <button
                  onClick={() => speak(data.prayer.join(". "))}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2.5 font-accent text-sm text-ink/60 hover:border-brand hover:text-brand"
                >
                  <Volume2 size={16} /> Play audio
                </button>
              </div>
            </Panel>
          )}

          {/* Bold step */}
          {data.boldStep.length > 0 && (
            <Panel icon={Flame} tone="gold" eyebrow="Be bold" title="Today's Bold Step">
              <div className="space-y-2 text-ink/75">
                {data.boldStep.map((l, i) => (
                  <p key={i} className="leading-relaxed">{l}</p>
                ))}
              </div>
              <div className="mt-5">
                <AckButton
                  done={!!st.boldStepDone}
                  onClick={() => c.patchDay(day, { boldStepDone: !st.boldStepDone })}
                  label="I've completed today's bold step"
                  doneLabel="Bold step completed"
                />
              </div>
            </Panel>
          )}

          {/* Courage meter */}
          <Panel icon={Gauge} eyebrow="Measure" title="Today's Courage Meter">
            <CourageMeter value={st.courage} onChange={(v) => c.patchDay(day, { courage: v })} />
          </Panel>

          {/* Journal */}
          <Panel icon={PenLine} eyebrow="Journal" title="My Aura Notes">
            {data.journalPrompt?.length > 0 && (
              <p className="mb-3 text-sm italic text-ink/55">{data.journalPrompt.join(" ")}</p>
            )}
            <textarea
              value={st.journal || ""}
              onChange={(e) => c.patchDay(day, { journal: e.target.value })}
              placeholder="Pour it out — what you felt, learnt, or noticed today…"
              className="min-h-[160px] w-full resize-y rounded-2xl border border-ink/10 bg-cream px-4 py-3 leading-relaxed focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15"
            />
            <div className="mt-2 text-right text-xs text-ink/40">
              {(st.journal || "").trim().length} / {CHALLENGE.requirements.journalMinChars} min characters
            </div>
          </Panel>

          {/* Video upload */}
          <Panel icon={VideoIcon} eyebrow="Submit" title="Video Journal">
            <VideoUpload
              video={st.video}
              onSet={(v) => c.patchDay(day, { video: v })}
              onClear={() => c.patchDay(day, { video: null })}
            />
          </Panel>

          {/* Complete */}
          <div className="rounded-3xl border border-ink/5 bg-white p-8 text-center shadow-soft">
            {done ? (
              <div>
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-gradient text-white">
                  <Check size={30} />
                </span>
                <h3 className="mt-4 font-display text-2xl text-ink">
                  Day {day} complete! {isWeekEnd && day !== 30 ? "Week done 🎉" : ""}
                </h3>
                <p className="mt-2 text-ink/60">
                  {day === 30
                    ? "You've finished the entire challenge. Champion!"
                    : `Day ${day + 1} is now unlocked.`}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {day === 30 ? (
                    <Link to="/challenge/certificate" className="btn-gold">
                      Get My Certificate <Sparkles size={16} />
                    </Link>
                  ) : (
                    <Link to={`/challenge/day/${day + 1}`} className="btn-primary">
                      Next Day <ArrowRight size={16} />
                    </Link>
                  )}
                  <Link to="/challenge/dashboard" className="btn-outline-dark">
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-display text-2xl text-ink">Complete Day {day}</h3>
                <p className="mt-2 text-sm text-ink/55">
                  Finish the required steps below to unlock the next day.
                </p>
                <button
                  onClick={finish}
                  disabled={!canFinish}
                  className={`btn mt-6 ${
                    canFinish
                      ? "bg-emerald-gradient text-white shadow-soft hover:-translate-y-0.5 hover:shadow-glow"
                      : "cursor-not-allowed bg-ink/10 text-ink/40"
                  }`}
                >
                  {canFinish ? (
                    <>Complete Day {day} <Check size={16} /></>
                  ) : (
                    <>Complete required steps first <Lock size={15} /></>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Whisper */}
          {data.whisper.length > 0 && (
            <div className="rounded-3xl bg-ink p-8 text-center text-white">
              <span className="eyebrow-gold">Aura Whisper</span>
              <p className="mx-auto mt-3 max-w-lg font-display text-xl italic text-white/90">
                {data.whisper.join(" ")}
              </p>
            </div>
          )}

          {/* prev/next nav */}
          <div className="flex items-center justify-between">
            {day > 1 ? (
              <Link to={`/challenge/day/${day - 1}`} className="inline-flex items-center gap-1.5 font-accent text-sm font-semibold text-ink/60 hover:text-brand">
                <ArrowLeft size={16} /> Day {day - 1}
              </Link>
            ) : <span />}
            {c.isUnlocked(day + 1) && day < 30 && (
              <Link to={`/challenge/day/${day + 1}`} className="inline-flex items-center gap-1.5 font-accent text-sm font-semibold text-brand hover:gap-2.5 transition-all">
                Day {day + 1} <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>

        {/* checklist sidebar */}
        <aside className="lg:sticky lg:top-32 lg:h-fit">
          <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
            <span className="eyebrow">Today's Checklist</span>
            <h3 className="mt-1 font-display text-lg text-ink">Complete to unlock Day {Math.min(day + 1, 30)}</h3>
            <ul className="mt-4 space-y-2.5">
              {reqs.map((r) => (
                <li key={r.key} className="flex items-center gap-2.5 text-sm">
                  {r.done ? (
                    <CheckCircle2 size={18} className="shrink-0 text-brand" />
                  ) : (
                    <Circle size={18} className="shrink-0 text-ink/25" />
                  )}
                  <span className={r.done ? "text-ink/70 line-through" : "text-ink/70"}>{r.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl bg-sage/40 p-4 text-center">
              <div className="font-display text-2xl font-bold text-gradient">
                {reqs.filter((r) => r.done).length}/{reqs.length}
              </div>
              <div className="font-accent text-[10px] uppercase tracking-wider text-ink/45">Steps done</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

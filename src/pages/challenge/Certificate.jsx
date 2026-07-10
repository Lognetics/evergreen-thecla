import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Download,
  Share2,
  Link2,
  Globe,
  AtSign,
  MessageCircle,
  Lock,
  Package,
  Check,
} from "lucide-react";
import Reveal from "../../components/ui/Reveal";
import Confetti from "../../challenge/Confetti";
import { useChallenge } from "../../challenge/store";
import { CHALLENGE } from "../../challenge/config";

function certId(profile) {
  const base = `${profile?.name || ""}|${profile?.enrolledAt || ""}`;
  let h = 0;
  for (let i = 0; i < base.length; i++) h = (h * 31 + base.charCodeAt(i)) >>> 0;
  return `TTN-UYA30-${h.toString(36).toUpperCase().padStart(7, "0").slice(0, 7)}`;
}

const physicalOptions = [
  { id: "standard", label: "Standard Certificate", desc: "Premium printed A4 certificate", price: "$19" },
  { id: "framed", label: "Premium Framed", desc: "Framed & ready to hang", price: "$49" },
  { id: "luxury", label: "Luxury Gift Package", desc: "Framed + gift box + card", price: "$89" },
];

export default function Certificate() {
  const c = useChallenge();
  const navigate = useNavigate();
  const [party, setParty] = useState(false);
  const [order, setOrder] = useState({ option: "", sent: false });

  useEffect(() => {
    if (!c.isEnrolled) navigate("/challenge");
  }, [c.isEnrolled, navigate]);
  useEffect(() => {
    if (c.finished) {
      setParty(true);
      const t = setTimeout(() => setParty(false), 2800);
      return () => clearTimeout(t);
    }
  }, [c.finished]);

  const id = useMemo(() => certId(c.profile), [c.profile]);
  if (!c.isEnrolled) return null;

  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const shareUrl = "https://evergreen-thecla.vercel.app/challenge";
  const shareText = `I completed The 30-Day Unbox Your Aura Challenge with The Thecla Network! 🎉`;
  const verifyUrl = `${shareUrl}?verify=${id}`;
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(verifyUrl)}`;

  const shares = [
    { icon: Link2, label: "LinkedIn", url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}` },
    { icon: Globe, label: "Facebook", url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
    { icon: AtSign, label: "X", url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}` },
    { icon: MessageCircle, label: "WhatsApp", url: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}` },
  ];

  if (!c.finished) {
    return (
      <section className="flex min-h-screen items-center bg-cream pt-28 pb-24">
        <div className="container-px">
          <div className="mx-auto max-w-lg rounded-3xl border border-ink/5 bg-white p-10 text-center shadow-soft">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage text-brand-deep">
              <Lock size={28} />
            </span>
            <h1 className="mt-5 font-display text-2xl text-ink">Your certificate is locked</h1>
            <p className="mt-2 text-ink/60">
              Complete all 30 days to unlock your Certificate of Completion. You're{" "}
              <strong className="text-brand">{c.percent}%</strong> there —{" "}
              {30 - c.completedCount} day{30 - c.completedCount === 1 ? "" : "s"} to go.
            </p>
            <Link to={`/challenge/day/${c.currentDay}`} className="btn-primary mt-6">
              Continue — Day {c.currentDay}
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-cream pt-28 pb-24">
      {party && <Confetti />}
      <div className="container-px">
        <Reveal className="text-center">
          <span className="eyebrow">Congratulations</span>
          <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            You did it, {c.profile.name.split(" ")[0]}! 🎉
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-ink/60">
            Your Certificate of Completion is ready to download and share.
          </p>
        </Reveal>

        {/* Certificate */}
        <Reveal className="mt-10">
          <div className="cert-print mx-auto max-w-3xl overflow-hidden rounded-3xl border-[6px] border-double border-gold/60 bg-white p-8 shadow-card sm:p-12">
            <div className="rounded-2xl border border-ink/10 p-8 text-center sm:p-10">
              <div className="font-accent text-xs font-bold uppercase tracking-[0.3em] text-brand">
                {CHALLENGE.org}
              </div>
              <div className="mx-auto mt-4 h-px w-24 bg-gold" />
              <h2 className="mt-6 font-display text-3xl font-bold text-ink sm:text-4xl">
                Certificate of Completion
              </h2>
              <p className="mt-6 text-sm text-ink/55">This certificate is proudly presented to</p>
              <p className="mt-2 font-display text-3xl font-bold text-gradient sm:text-4xl">
                {c.profile.name}
              </p>
              <p className="mt-4 text-sm text-ink/55">for successfully completing</p>
              <p className="mt-1 font-display text-xl font-semibold text-brand-deep">
                The 30-Day Unbox Your Aura Challenge
              </p>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ink/60">
                A guided personal growth experience focused on building confidence,
                developing courageous habits, and taking intentional action toward
                purposeful living.
              </p>

              <div className="mt-8 flex flex-wrap items-end justify-between gap-6 text-left">
                <div>
                  <div className="font-display text-lg text-ink">{date}</div>
                  <div className="font-accent text-[10px] uppercase tracking-wider text-ink/45">
                    Completed on
                  </div>
                </div>
                <div className="text-center">
                  <img src={qr} alt="Verification QR" className="mx-auto h-20 w-20 rounded" />
                  <div className="mt-1 font-accent text-[9px] uppercase tracking-wider text-ink/40">
                    Verify · {id}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-lg italic text-brand-deep">Thecla A. Orakwe</div>
                  <div className="font-accent text-[10px] uppercase tracking-wider text-ink/45">
                    {CHALLENGE.founderTitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* actions */}
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          <button onClick={() => window.print()} className="btn-primary">
            <Download size={16} /> Download / Print
          </button>
          <span className="inline-flex items-center gap-2 font-accent text-xs uppercase tracking-wider text-ink/45">
            <Share2 size={14} /> Share:
          </span>
          {shares.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 text-ink/60 transition hover:border-brand hover:bg-brand hover:text-white"
              aria-label={`Share on ${s.label}`}
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>

        {/* Physical certificate ordering */}
        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-3xl border border-ink/5 bg-white p-8 shadow-soft">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-brand-deep">
                <Package size={22} />
              </span>
              <div>
                <span className="eyebrow">Optional</span>
                <h3 className="font-display text-xl text-ink">Request a Physical Certificate</h3>
              </div>
            </div>
            {order.sent ? (
              <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 p-6 text-center">
                <Check className="mx-auto text-gold" size={28} />
                <p className="mt-2 font-accent font-semibold text-ink">Request received!</p>
                <p className="mt-1 text-sm text-ink/60">
                  Our team will reach out with payment & shipping details. (Fulfilment is
                  handled by The Thecla Network.)
                </p>
              </div>
            ) : (
              <>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {physicalOptions.map((o) => (
                    <button
                      key={o.id}
                      onClick={() => setOrder({ ...order, option: o.id })}
                      className={`rounded-2xl border p-5 text-left transition ${
                        order.option === o.id
                          ? "border-brand bg-sage/40 ring-2 ring-brand/20"
                          : "border-ink/10 hover:border-brand/40"
                      }`}
                    >
                      <div className="font-accent text-sm font-semibold text-ink">{o.label}</div>
                      <div className="mt-1 text-xs text-ink/55">{o.desc}</div>
                      <div className="mt-3 font-display text-lg font-bold text-gradient">{o.price}</div>
                    </button>
                  ))}
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (order.option) setOrder({ ...order, sent: true });
                  }}
                  className="mt-5 grid gap-3 sm:grid-cols-2"
                >
                  <input required placeholder="Full name" defaultValue={c.profile.name} className="rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm focus:border-brand focus:outline-none" />
                  <input required placeholder="Phone number" className="rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm focus:border-brand focus:outline-none" />
                  <input required placeholder="Delivery address" className="rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm focus:border-brand focus:outline-none sm:col-span-2" />
                  <input required placeholder="City" className="rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm focus:border-brand focus:outline-none" />
                  <input required placeholder="Country" className="rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm focus:border-brand focus:outline-none" />
                  <button type="submit" className="btn-primary sm:col-span-2" disabled={!order.option}>
                    Request Physical Certificate
                  </button>
                </form>
              </>
            )}
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <Link to="/challenge/dashboard" className="btn-outline-dark">
            Back to Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}

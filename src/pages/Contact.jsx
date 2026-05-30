import { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  CalendarDays,
  MapPin,
  Check,
  Mic,
  Briefcase,
  MessageCircle,
} from "lucide-react";
import Reveal, { Stagger } from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import GlowBg from "../components/ui/GlowBg";
import Accordion from "../components/ui/Accordion";
import { brand, faqs } from "../data/content";

const tabs = [
  { key: "general", label: "General", icon: MessageCircle },
  { key: "speaking", label: "Speaking Request", icon: Mic },
  { key: "service", label: "Service Inquiry", icon: Briefcase },
];

const field =
  "w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 font-body text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/15";

export default function Contact() {
  const [tab, setTab] = useState("general");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-dark-emerald pt-36 pb-20 text-white">
        <GlowBg variant="dark" />
        <div className="container-px relative text-center">
          <Reveal>
            <span className="eyebrow-gold">Contact</span>
            <h1 className="mx-auto mt-4 max-w-2xl text-4xl text-white sm:text-5xl">
              Let’s start a conversation
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Book Thecla to speak, request a service, or simply say hello. Choose what
              fits and send a message — she’d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Split layout */}
      <section className="bg-cream py-20">
        <div className="container-px grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info column */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="rounded-3xl border border-ink/5 bg-white p-8 shadow-[0_18px_50px_-40px_rgba(10,10,10,0.5)]">
                <h2 className="font-display text-2xl text-ink">Contact Information</h2>
                <p className="mt-2 text-sm text-ink/55">
                  Reach out directly — responses usually within 1–2 business days.
                </p>
                <div className="mt-6 space-y-4">
                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-4 rounded-2xl bg-sage/50 px-4 py-3.5 transition hover:bg-sage"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-gradient text-white">
                      <Mail size={18} />
                    </span>
                    <span>
                      <span className="block font-accent text-[11px] uppercase tracking-wider text-ink/45">
                        Email
                      </span>
                      <span className="font-medium text-ink">{brand.email}</span>
                    </span>
                  </a>
                  {brand.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, "")}`}
                      className="flex items-center gap-4 rounded-2xl bg-sage/50 px-4 py-3.5 transition hover:bg-sage"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-gradient text-white">
                        <Phone size={18} />
                      </span>
                      <span>
                        <span className="block font-accent text-[11px] uppercase tracking-wider text-ink/45">
                          Phone
                        </span>
                        <span className="font-medium text-ink">{p}</span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-7">
                  <span className="font-accent text-[11px] uppercase tracking-wider text-ink/45">
                    Follow along
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {brand.socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.url}
                        className="rounded-full border border-ink/10 px-4 py-2 font-accent text-xs font-semibold text-ink/60 transition hover:border-brand hover:bg-brand hover:text-white"
                      >
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Calendar booking placeholder */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-dashed border-brand/30 bg-white p-8">
                <div className="flex items-center gap-3">
                  <CalendarDays className="text-brand" size={22} />
                  <h3 className="font-display text-xl text-ink">Book a Call</h3>
                </div>
                <p className="mt-2 text-sm text-ink/55">
                  Prefer to schedule a discovery call? Calendar booking integration
                  (Calendly / Google Calendar) will appear here.
                </p>
                <button className="btn-outline-dark mt-5">
                  <CalendarDays size={16} /> Schedule a Call
                </button>
              </div>
            </Reveal>
          </div>

          {/* Form column */}
          <Reveal dir="right">
            <div className="rounded-3xl border border-ink/5 bg-white p-8 shadow-card sm:p-10">
              {/* tabs */}
              <div className="flex flex-wrap gap-2">
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => {
                      setTab(t.key);
                      setSent(false);
                    }}
                    className={`flex items-center gap-2 rounded-full px-4 py-2.5 font-accent text-xs font-semibold transition ${
                      tab === t.key
                        ? "bg-emerald-gradient text-white shadow-soft"
                        : "border border-ink/10 text-ink/60 hover:border-brand hover:text-brand"
                    }`}
                  >
                    <t.icon size={15} /> {t.label}
                  </button>
                ))}
              </div>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-gradient text-white">
                    <Check size={30} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-ink">Message sent!</h3>
                  <p className="mt-2 max-w-sm text-ink/55">
                    Thank you for reaching out. Thecla’s team will get back to you very
                    soon.
                  </p>
                  <button onClick={() => setSent(false)} className="btn-outline-dark mt-6">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-7 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className={field} placeholder="Full name" required />
                    <input className={field} type="email" placeholder="Email address" required />
                  </div>

                  {tab === "general" && (
                    <input className={field} placeholder="Subject" />
                  )}

                  {tab === "speaking" && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input className={field} placeholder="Event name" />
                      <input className={field} type="date" />
                      <input className={field} placeholder="Location / venue" />
                      <select className={field} defaultValue="">
                        <option value="" disabled>
                          Type of engagement
                        </option>
                        <option>Keynote</option>
                        <option>Event hosting / MC</option>
                        <option>Spoken word performance</option>
                        <option>Panel / moderation</option>
                        <option>Workshop / training</option>
                      </select>
                      <input className={`${field} sm:col-span-2`} placeholder="Expected audience size" />
                    </div>
                  )}

                  {tab === "service" && (
                    <select className={field} defaultValue="">
                      <option value="" disabled>
                        Which service are you interested in?
                      </option>
                      <option>Public Speaking</option>
                      <option>Event Hosting</option>
                      <option>Spoken Word Poetry</option>
                      <option>Voiceover & Script Writing</option>
                      <option>Brand Influencing & UGC</option>
                      <option>Coaching & Mentorship</option>
                      <option>Project Management & Consulting</option>
                    </select>
                  )}

                  <textarea
                    className={`${field} min-h-[140px] resize-y`}
                    placeholder={
                      tab === "speaking"
                        ? "Tell us about your event and what you’re looking for…"
                        : tab === "service"
                        ? "Tell us about your project, goals and timeline…"
                        : "Your message…"
                    }
                    required
                  />
                  <button type="submit" className="btn-primary w-full">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Map placeholder */}
        <div className="container-px mt-10">
          <Reveal>
            <div className="relative flex h-72 items-center justify-center overflow-hidden rounded-3xl border border-ink/5 bg-sage/40">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(15,122,90,0.25) 1px, transparent 0)", backgroundSize: "26px 26px" }} />
              <div className="relative text-center">
                <MapPin className="mx-auto text-brand" size={32} />
                <p className="mt-2 font-display text-lg text-ink">Based in Nigeria · Available worldwide</p>
                <p className="mt-1 font-accent text-xs uppercase tracking-wider text-ink/45">
                  Google Map integration placeholder
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            intro="A few things people often ask before reaching out."
          />
          <Stagger className="mt-14">
            <Accordion items={faqs} />
          </Stagger>
        </div>
      </section>
    </>
  );
}

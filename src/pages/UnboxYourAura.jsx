import { Link } from "react-router-dom";
import { Check, Sparkles, ArrowRight, Star } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { getIcon } from "../components/ui/icons";
import { PlayBadge } from "../components/ui/VideoPlayer";
import { auraFeatures, auraHelps } from "../data/content";
import { features, slice } from "../data/images";
import { videos } from "../data/videos";

const benefits = [
  "Build unshakeable confidence",
  "Speak in public without fear",
  "Communicate with clarity & presence",
  "Grow personally and professionally",
  "Connect with a supportive community",
  "Discover and live your purpose",
];

const programs = [
  {
    title: "Confidence Foundations",
    text: "A beginner-friendly program to build self-belief and silence self-doubt.",
    level: "Beginner",
  },
  {
    title: "Public Speaking Mastery",
    text: "Learn to prepare, structure and deliver any talk with confidence.",
    level: "Intermediate",
  },
  {
    title: "The Becoming Program",
    text: "A deeper journey into purpose, presence and personal transformation.",
    level: "All levels",
  },
];

const stories = [
  {
    name: "Ngozi",
    text: "I used to freeze before speaking. Now I lead meetings with confidence. Unbox Your Aura changed everything.",
  },
  {
    name: "David",
    text: "The community keeps me accountable and inspired. I've grown more in months than in years.",
  },
  {
    name: "Amara",
    text: "I finally found my voice — and my purpose. This space is a gift.",
  },
];

export default function UnboxYourAura() {
  return (
    <>
      <PageHero
        eyebrow="Unbox Your Aura"
        title="A community for becoming your fullest self"
        subtitle="Unbox Your Aura is a platform and community focused on helping people build confidence, find their voice and become the best version of themselves."
        image={features.community}
        imageAlt="Unbox Your Aura community"
      />

      {/* What is it */}
      <section className="bg-white py-24">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal dir="left">
            <SectionHeading
              align="left"
              eyebrow="What Is It?"
              title="What Is Unbox Your Aura?"
            />
            <p className="mt-6 leading-relaxed text-ink/65">
              Unbox Your Aura is a platform and community focused on helping people:
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {auraHelps.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-gradient text-white">
                    <Check size={12} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
            <p className="mt-6 font-display text-xl italic text-brand-deep">
              It’s a space to grow, learn, express yourself and truly become.
            </p>
          </Reveal>
          <Reveal dir="right" className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-emerald-gradient opacity-10 blur-2xl" />
            <div className="group relative overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={slice(7, 1)[0]}
                alt="Unbox Your Aura session"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayBadge video={videos.vision} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="relative overflow-hidden bg-dark-emerald py-24 text-white">
        <div className="container-px">
          <SectionHeading
            light
            gold
            eyebrow="What You Get"
            title="Everything you need to grow"
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {auraFeatures.map((f) => {
              const Icon = getIcon(f.icon);
              return (
                <StaggerItem key={f.title}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 card-elevate hover:border-gold/40">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-gradient text-white">
                      <Icon size={22} />
                    </span>
                    <h4 className="text-lg text-white">{f.title}</h4>
                    <p className="mt-1.5 text-sm text-white/60">{f.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Benefits" title="What you’ll walk away with" />
          <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <StaggerItem key={b}>
                <div className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-white p-6 card-elevate">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage text-brand-deep">
                    <Sparkles size={18} />
                  </span>
                  <span className="font-accent text-sm font-semibold text-ink">{b}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Training programs */}
      <section className="bg-white py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Training Programs"
            title="Structured paths to confidence"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((p) => (
              <Reveal key={p.title}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/5 bg-sage/40 p-8 card-elevate">
                  <span className="self-start rounded-full bg-emerald-gradient px-3 py-1 font-accent text-[11px] font-semibold uppercase tracking-wider text-white">
                    {p.level}
                  </span>
                  <h4 className="mt-4 text-xl text-ink">{p.title}</h4>
                  <p className="mt-2 flex-1 text-ink/60">{p.text}</p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 font-accent text-sm font-semibold text-brand hover:gap-2.5 transition-all"
                  >
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Success Stories" title="Real transformation" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {stories.map((s) => (
              <Reveal key={s.name}>
                <div className="flex h-full flex-col rounded-3xl border border-ink/5 bg-white p-8 shadow-[0_18px_50px_-40px_rgba(10,10,10,0.5)]">
                  <div className="flex gap-1 text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 font-display text-lg italic text-ink/80">
                    “{s.text}”
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-gradient font-display font-semibold text-white">
                      {s.name.charAt(0)}
                    </span>
                    <span className="font-accent font-semibold text-ink">{s.name}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="relative overflow-hidden bg-emerald-gradient py-24 text-center text-white">
        <div className="absolute inset-0 bg-emerald-radial opacity-50" />
        <div className="container-px relative">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl text-white sm:text-4xl">
              Ready to unbox the most confident version of you?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/80">
              Join a growing community of people becoming bold, expressive and
              purpose-driven.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-gold">
                Join the UNBOX YOUR AURA Community
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

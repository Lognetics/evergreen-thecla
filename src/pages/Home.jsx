import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Video,
  Lightbulb,
  Users,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import GlowBg from "../components/ui/GlowBg";
import Reveal, { Stagger } from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import Stat from "../components/ui/Stat";
import ServiceCard from "../components/ui/ServiceCard";
import Testimonials from "../components/ui/Testimonials";
import CTABand from "../components/ui/CTABand";
import HeroSlider from "../components/HeroSlider";
import { VideoCard } from "../components/ui/VideoPlayer";
import { brand, services, stats, auraFeatures, auraHelps } from "../data/content";
import { portraits, features } from "../data/images";
import { videos } from "../data/videos";

export default function Home() {
  return (
    <>
      {/* ============ HERO SLIDER ============ */}
      <HeroSlider />

      {/* ============ ROLES MARQUEE + STATS ============ */}
      <section className="relative overflow-hidden bg-brand-deep py-5 text-white">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-accent text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
          {[...brand.roles, ...brand.roles].map((r, i) => (
            <span key={i} className="flex items-center gap-10">
              {r} <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-16">
        <GlowBg />
        <div className="container-px relative">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-ink/5 bg-white/80 px-6 py-9 shadow-[0_30px_80px_-50px_rgba(15,122,90,0.5)] backdrop-blur sm:grid-cols-4">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ WELCOME ============ */}
      <section className="relative bg-white py-24">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal dir="left" className="relative order-2 lg:order-1">
            <div className="absolute -left-5 -top-5 h-40 w-40 rounded-3xl bg-sage" />
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-3xl border-2 border-gold/40" />
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={portraits.smile}
                alt="Thecla A. Orakwe"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Welcome"
              title="Welcome to The Thecla A. Orakwe Brand"
            />
            <Reveal dir="up" delay={0.1}>
              <p className="mt-6 text-lg font-medium text-ink/75">
                This platform is built on communication, confidence, creativity, and
                impact.
              </p>
              <p className="mt-4 leading-relaxed text-ink/60">
                Through public speaking, hosting, spoken word poetry, coaching,
                voiceover, digital content, and advocacy, I help individuals and
                organizations communicate better, build confidence, tell their
                stories, and create meaningful impact in their communities and the
                world.
              </p>
              <p className="mt-4 font-display text-xl italic text-brand-deep">
                This is more than a website. This is a space for growth, learning,
                expression, and becoming.
              </p>
              <Link to="/about" className="btn-outline-dark mt-8">
                Read My Story <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHAT I DO ============ */}
      <section className="relative overflow-hidden bg-dark-emerald py-24 text-white">
        <GlowBg variant="dark" />
        <div className="container-px relative">
          <SectionHeading
            light
            gold
            eyebrow="What I Do"
            title="Services that help you communicate, connect & become"
            intro="Ten ways I help individuals, brands and communities find their voice and create impact."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} dark />
            ))}
          </Stagger>
          <Reveal className="mt-12 text-center">
            <Link to="/work-with-me" className="btn-gold">
              Explore All Services <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ VISION & MISSION ============ */}
      <section className="relative overflow-hidden bg-emerald-gradient py-24 text-white">
        <div className="absolute inset-0 bg-emerald-radial opacity-60" />
        <div className="container-px relative grid gap-8 lg:grid-cols-2">
          {[
            {
              label: "Vision",
              text: "To raise a generation of confident, expressive, and purpose-driven individuals who are unafraid to use their voices, tell their stories, and create meaningful impact in the world.",
            },
            {
              label: "Mission",
              text: "To empower individuals and communities through communication, confidence building, and personal development by providing transformative experiences through public speaking, coaching, creative expression, and advocacy.",
            },
          ].map((v, i) => (
            <Reveal key={v.label} dir={i === 0 ? "left" : "right"}>
              <div className="h-full rounded-3xl border border-white/20 bg-white/10 p-9 backdrop-blur-md">
                <span className="font-accent text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                  Our {v.label}
                </span>
                <h3 className="mt-3 font-display text-3xl text-white">{v.label}</h3>
                <p className="mt-5 text-lg leading-relaxed text-white/85">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SPOKEN WORD / WATCH ============ */}
      <section className="relative overflow-hidden bg-ink py-24 text-white">
        <div className="pointer-events-none absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand/25 blur-3xl" />
        <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal dir="left">
            <span className="eyebrow-gold">Unbox Your Aura</span>
            <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl">
              Watch & Get Inspired
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-white/70">
              Bite-sized wisdom from the Unbox Your Aura series — on confidence, courage
              and discovering the gift you were created to share with the world.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://youtube.com/@evergreenthecla"
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
              >
                Visit YouTube Channel
              </a>
              <Link to="/podcast" className="btn-outline">
                More Episodes
              </Link>
            </div>
          </Reveal>
          <Reveal dir="right">
            <VideoCard video={videos.auraEp2} />
          </Reveal>
        </div>
      </section>

      {/* ============ UNBOX YOUR AURA ============ */}
      <section className="relative bg-cream py-24">
        <GlowBg />
        <div className="container-px relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal dir="left" className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-emerald-gradient opacity-10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-card">
              <img
                src={features.community}
                alt="Unbox Your Aura community"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/40 to-transparent" />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="Community"
              title="Unbox Your Aura with Evergreen Thecla"
            />
            <Reveal dir="up" delay={0.1}>
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
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/unbox-your-aura" className="btn-primary">
                  Join Community
                </Link>
                <Link to="/unbox-your-aura" className="btn-outline-dark">
                  Attend Webinar
                </Link>
                <Link to="/books" className="btn-outline-dark">
                  Get Resources
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* feature chips */}
        <div className="container-px relative mt-14">
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {auraFeatures.map((f) => {
              const Icon = { Video, Lightbulb, Users, BookOpen, GraduationCap }[f.icon];
              return (
                <Reveal key={f.title}>
                  <div className="flex h-full flex-col items-center rounded-2xl border border-ink/5 bg-white p-6 text-center card-elevate">
                    <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-sage text-brand-deep">
                      {Icon && <Icon size={22} />}
                    </span>
                    <h4 className="font-accent text-sm font-semibold text-ink">
                      {f.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-ink/55">{f.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="relative bg-white py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Testimonials"
            title="Real stories. Real impact."
            intro="Here’s what people, clients, and communities have to say about their experience working with Thecla and engaging with her platforms."
          />
          <div className="mt-14">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABand />
    </>
  );
}

import { Link } from "react-router-dom";
import { Award, Quote } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import Stat from "../components/ui/Stat";
import Gallery from "../components/ui/Gallery";
import CTABand from "../components/ui/CTABand";
import { PlayBadge } from "../components/ui/VideoPlayer";
import { leadership, impactStats } from "../data/content";
import { portraits, features, slice } from "../data/images";
import { videos } from "../data/videos";

const journey = [
  {
    year: "The Beginning",
    title: "Finding Her Own Voice",
    text: "Thecla's journey began with a personal decision to stop shrinking and start speaking — discovering first-hand the power of a confident voice.",
  },
  {
    year: "The Craft",
    title: "Speaking, Hosting & Spoken Word",
    text: "She honed her gifts across stages, events and creative platforms — becoming a sought-after speaker, host and spoken word artist.",
  },
  {
    year: "The Mission",
    title: "Coaching & Confidence Building",
    text: "Driven to help others, she turned her experience into coaching, training and the Unbox Your Aura community.",
  },
  {
    year: "The Impact",
    title: "Advocacy & Leadership",
    text: "Today she leads and co-leads continental initiatives, advocating for youth, education and development across Africa.",
  },
];

const impactAreas = [
  "Public Speaking & Communication",
  "Confidence & Personal Development",
  "Creative Expression & Spoken Word",
  "Youth & Education Development",
  "Advocacy & Community Building",
  "Brand, Media & Content",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Thecla & The Thecla Network"
        subtitle="Speaker. Coach. Host. Spoken word artist. Advocate. Founder of The Thecla Network (TTN) — one brand for every way she helps people find their voice and become, unapologetically."
        image={portraits.feature}
        imageAlt="Thecla A. Orakwe"
      />

      {/* Her Story */}
      <section className="bg-white py-24">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal dir="left" className="relative">
            <div className="absolute -left-4 -top-4 h-44 w-44 rounded-3xl bg-sage" />
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={portraits.notes}
                alt="Thecla A. Orakwe at an event"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading align="left" eyebrow="Her Story" title="A voice built on purpose" />
            <Reveal dir="up" delay={0.1}>
              <div className="mt-6 space-y-4 leading-relaxed text-ink/65">
                <p>
                  Thecla Amarachukwu Orakwe — known and loved as{" "}
                  <strong className="text-ink">Evergreen Thecla</strong> — is a public
                  speaker, spoken word artist, confidence coach, host, voiceover artist,
                  brand influencer, project manager and youth & education development
                  advocate.
                </p>
                <p>
                  Her work sits at the intersection of communication, confidence,
                  creativity and impact. Whether she is on a stage, behind a microphone,
                  in a coaching session or leading a community, her mission is the same:
                  to help people find their voice and become the fullest version of
                  themselves.
                </p>
                <p>
                  Today, that work lives under one umbrella — <strong className="text-ink">The
                  Thecla Network (TTN)</strong> — connecting her speaking, coaching, the
                  Unbox Your Aura community, the 30-Day Challenge, spoken word, advocacy
                  and digital products into a single network built to{" "}
                  <em>inspire, empower and transform.</em>
                </p>
                <p>
                  She believes that confidence is not a personality you are born with —
                  it is a skill anyone can build. And she has made it her life's work to
                  help others build it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Her Journey timeline */}
      <section className="relative overflow-hidden bg-cream py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Her Journey"
            title="From finding her voice to amplifying others"
          />
          <div className="relative mt-16">
            <span className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-brand via-brand-light to-transparent sm:block" />
            <Stagger className="space-y-8">
              {journey.map((j, i) => (
                <StaggerItem key={j.title}>
                  <div className="relative sm:pl-16">
                    <span className="absolute left-0 top-2 hidden h-8 w-8 items-center justify-center rounded-full bg-emerald-gradient font-display text-sm font-bold text-white sm:flex">
                      {i + 1}
                    </span>
                    <div className="rounded-2xl border border-ink/5 bg-white p-7 shadow-[0_18px_50px_-40px_rgba(10,10,10,0.5)]">
                      <span className="eyebrow">{j.year}</span>
                      <h3 className="mt-2 text-xl text-ink">{j.title}</h3>
                      <p className="mt-2 text-ink/60">{j.text}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* Areas of impact */}
      <section className="relative overflow-hidden bg-dark-emerald py-24 text-white">
        <div className="container-px grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              light
              gold
              align="left"
              eyebrow="Areas of Impact"
              title="Where her voice creates change"
            />
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {impactAreas.map((a) => (
                <StaggerItem key={a}>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white/85">
                    <Award size={18} className="shrink-0 text-gold" />
                    {a}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <Reveal dir="right" className="relative">
            <div className="group relative overflow-hidden rounded-3xl border border-white/15 shadow-glow">
              <img
                src={features.panel}
                alt="Thecla speaking on a panel"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayBadge video={videos.auraEp3} />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <span className="rounded-full bg-gold px-3 py-1 font-accent text-[10px] font-bold uppercase tracking-wider text-ink">
                  Watch
                </span>
                <p className="mt-2 font-display text-lg text-white">
                  On finding your voice
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="container-px mt-16">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-9 sm:grid-cols-4">
            {impactStats.map((s) => (
              <Stat key={s.label} {...s} light />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership roles */}
      <section className="bg-white py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Leadership Roles"
            title="Leading change beyond the stage"
            intro="Thecla brings her voice to leadership, helping shape education, youth and development across the continent."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {leadership.map((l) => (
              <Reveal key={l.org}>
                <div className="group h-full overflow-hidden rounded-3xl border border-ink/5 bg-sage/40 p-9 card-elevate">
                  <div className="flex items-center gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-gradient font-display text-lg font-bold text-white">
                      {l.org.slice(0, 2)}
                    </span>
                    <div>
                      <div className="font-accent text-xs font-semibold uppercase tracking-wider text-brand">
                        {l.role}
                      </div>
                      <div className="font-display text-2xl text-ink">{l.org}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm font-medium text-brand-deep">{l.full}</p>
                  <p className="mt-2 text-ink/60">{l.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Personal philosophy */}
      <section className="relative overflow-hidden bg-emerald-gradient py-24 text-white">
        <div className="absolute inset-0 bg-emerald-radial opacity-50" />
        <div className="container-px relative text-center">
          <Reveal>
            <Quote className="mx-auto text-gold" size={56} strokeWidth={1.2} />
            <p className="mx-auto mt-6 max-w-3xl font-display text-2xl italic leading-relaxed text-white sm:text-3xl">
              “You don’t have to shrink to fit into the world. You were created to stand
              out. My purpose is to help you use your voice — boldly, clearly and
              unapologetically.”
            </p>
            <p className="mt-6 font-accent text-sm uppercase tracking-[0.25em] text-gold">
              — Evergreen Thecla
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Moments from the journey"
            intro="On stage, hosting, speaking and engaging with communities."
          />
          <div className="mt-14">
            <Gallery images={slice(0, 6)} columns={3} />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

import PageHero from "../components/ui/PageHero";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import Stat from "../components/ui/Stat";
import Gallery from "../components/ui/Gallery";
import CTABand from "../components/ui/CTABand";
import { getIcon } from "../components/ui/icons";
import { VideoCard } from "../components/ui/VideoPlayer";
import { advocacyAreas, leadership, impactStats } from "../data/content";
import { features, slice } from "../data/images";
import { videos } from "../data/videos";

export default function Advocacy() {
  return (
    <>
      <PageHero
        eyebrow="Advocacy & Development"
        title="Advocacy & Development Work"
        subtitle="Beyond the stage, Thecla champions youth, education, the girl child and community development — working for a more confident, empowered and self-determined Africa."
        image={features.advocacy}
        imageAlt="Advocacy work"
      />

      {/* Intro statement + video */}
      <section className="bg-white py-20">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal dir="left">
            <span className="eyebrow">Why It Matters</span>
            <p className="mt-5 font-display text-2xl leading-relaxed text-ink/80 sm:text-3xl">
              “Development begins with confident, empowered people. When we equip young
              people to use their voices, we change communities — and we change the
              future.”
            </p>
            <p className="mt-5 leading-relaxed text-ink/60">
              From the girl child to the boardroom, Thecla's advocacy is rooted in a
              simple belief: when people — especially women and young people — find their
              voice, they reshape the world around them. Her spoken word piece{" "}
              <strong className="text-ink">“Call Me Woman”</strong> captures that
              conviction.
            </p>
          </Reveal>
          <Reveal dir="right">
            <VideoCard video={videos.callMeWoman} />
          </Reveal>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Focus Areas"
            title="Where the work happens"
            intro="Six interconnected areas where Thecla's advocacy creates measurable, lasting impact."
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advocacyAreas.map((a) => {
              const Icon = getIcon(a.icon);
              return (
                <StaggerItem key={a.title}>
                  <div className="group h-full rounded-3xl border border-ink/5 bg-white p-8 card-elevate hover:border-brand/20">
                    <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sage text-brand-deep transition group-hover:bg-emerald-gradient group-hover:text-white">
                      <Icon size={26} strokeWidth={1.7} />
                    </span>
                    <h3 className="text-xl text-ink">{a.title}</h3>
                    <p className="mt-2 text-ink/60">{a.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Leadership — AESDI & AUYC */}
      <section className="relative overflow-hidden bg-dark-emerald py-24 text-white">
        <div className="container-px">
          <SectionHeading
            light
            gold
            eyebrow="Leadership"
            title="Leading continental change"
            intro="Thecla holds key leadership roles in organisations driving education, youth and development across Africa."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {leadership.map((l) => (
              <Reveal key={l.org}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-9 card-elevate hover:border-gold/40">
                  <div className="flex items-center gap-4">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-gradient font-display text-xl font-bold text-white">
                      {l.org}
                    </span>
                    <div>
                      <div className="font-accent text-xs font-semibold uppercase tracking-wider text-gold">
                        {l.role}
                      </div>
                      <div className="font-display text-lg text-white">{l.full}</div>
                    </div>
                  </div>
                  <p className="mt-5 text-white/65">{l.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* impact stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-9 sm:grid-cols-4">
            {impactStats.map((s) => (
              <Stat key={s.label} {...s} light />
            ))}
          </div>
          <p className="mt-4 text-center font-accent text-xs uppercase tracking-wider text-white/40">
            Impact figures — update with verified numbers
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="In the Field"
            title="Advocacy in action"
            intro="Documentary moments from events, panels, conferences and community engagement."
          />
          <div className="mt-14">
            <Gallery images={slice(15, 6)} columns={3} />
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Partner with a voice for change.
            <br className="hidden sm:block" /> Let’s build impact together.
          </>
        }
        lines={[
          "Let’s empower youth.",
          "Let’s advance education.",
          "Let’s develop communities.",
          "Let’s shape the future.",
        ]}
        buttonLabel="Partner With Me"
        buttonTo="/contact"
        image={features.panel}
      />
    </>
  );
}

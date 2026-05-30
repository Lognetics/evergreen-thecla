import { Link } from "react-router-dom";
import { Mic, MonitorPlay, Music2, Headphones, Bell, Lock } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import { PlayBadge } from "../components/ui/VideoPlayer";
import { podcastTopics, podcastEpisodes } from "../data/content";
import { portraits } from "../data/images";
import { videos, channelUrl } from "../data/videos";

export default function Podcast() {
  return (
    <>
      {/* Custom hero with mic imagery */}
      <section className="relative overflow-hidden bg-dark-emerald pt-36 pb-24 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob bg-brand/30 animate-float-slow" style={{ width: 460, height: 460, top: "-10%", left: "-6%" }} />
          <div className="blob bg-gold/15 animate-float" style={{ width: 320, height: 320, bottom: "-8%", right: "-4%" }} />
        </div>
        <div className="container-px relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal dir="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-accent text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <Bell size={13} /> Coming Soon
            </span>
            <h1 className="mt-5 text-4xl leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              The Unbox Your Aura Podcast
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Honest, inspiring conversations on confidence, purpose, public speaking,
              growth, faith and becoming — your weekly dose of courage, coming soon to
              your favourite platform.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-gold">
                <Bell size={16} /> Notify Me
              </Link>
              <a href={channelUrl} target="_blank" rel="noreferrer" className="btn-outline">
                <MonitorPlay size={16} /> Subscribe on YouTube
              </a>
            </div>
          </Reveal>

          <Reveal dir="right" className="relative mx-auto">
            <div className="absolute inset-0 rounded-full bg-brand-light/25 blur-3xl" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] sm:h-80 sm:w-80">
              <div className="absolute inset-6 rounded-full border border-white/10" />
              <div className="absolute inset-12 rounded-full border border-white/5" />
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-gradient shadow-glow">
                <Mic size={48} className="text-white" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="What We’ll Talk About"
            title="Conversations that move you forward"
          />
          <Stagger className="mt-14 flex flex-wrap justify-center gap-3">
            {podcastTopics.map((t) => (
              <StaggerItem key={t}>
                <span className="rounded-full border border-brand/15 bg-sage px-5 py-2.5 font-accent text-sm font-semibold text-brand-deep">
                  {t}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Episode cards */}
      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Episodes"
            title="Press play"
            intro="Watch what’s already live and get a sneak peek at what’s coming. Hit play on any available episode."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {podcastEpisodes.map((ep) => {
              const live = Boolean(ep.video);
              const v = live ? videos[ep.video] : null;
              return (
                <Reveal key={ep.number}>
                  <div
                    className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 card-elevate ${
                      live
                        ? "border-brand/20 bg-white"
                        : "border-ink/5 bg-white/70"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-5xl font-bold text-sage">
                        {ep.number}
                      </span>
                      {live ? (
                        <PlayBadge video={v} size="sm" />
                      ) : (
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/70 text-brand-deep/50">
                          <Lock size={16} />
                        </span>
                      )}
                    </div>
                    <h3 className="mt-5 text-xl leading-snug text-ink">{ep.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink/55">{ep.desc}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-accent text-[11px] font-semibold uppercase tracking-wider ${
                          live
                            ? "bg-emerald-gradient text-white"
                            : "bg-gold/15 text-gold"
                        }`}
                      >
                        {live && (
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                        )}
                        {ep.note}
                      </span>
                      <span className="font-accent text-[11px] uppercase tracking-wider text-ink/40">
                        {ep.duration}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12 text-center">
            <a href={channelUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <MonitorPlay size={16} /> Watch All on YouTube
            </a>
          </Reveal>
        </div>
      </section>

      {/* Subscribe / platforms */}
      <section className="relative overflow-hidden bg-dark-emerald py-24 text-white">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal dir="left" className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/15 shadow-glow">
              <img
                src={portraits.speaking}
                alt="Thecla on the mic"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              light
              gold
              align="left"
              eyebrow="Be First to Listen"
              title="Subscribe & never miss an episode"
            />
            <p className="mt-5 text-white/70">
              Follow the show on your favourite platform — full episodes drop soon.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { icon: MonitorPlay, label: "YouTube", url: channelUrl },
                { icon: Music2, label: "Spotify", url: "#" },
                { icon: Headphones, label: "Apple Podcasts", url: "#" },
                { icon: Mic, label: "More platforms", url: "#" },
              ].map((p) => (
                <a
                  key={p.label}
                  href={p.url}
                  target={p.url !== "#" ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 transition hover:border-gold/40 hover:bg-white/[0.08]"
                >
                  <p.icon size={22} className="text-gold" />
                  <span className="font-accent text-sm font-semibold">{p.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-7 rounded-2xl border border-dashed border-white/20 px-5 py-4 text-sm text-white/50">
              📺 YouTube channel integration placeholder — embed the latest episodes
              here once the show launches.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

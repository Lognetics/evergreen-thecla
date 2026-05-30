import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import CTABand from "../components/ui/CTABand";
import { getIcon } from "../components/ui/icons";
import { PlayBadge } from "../components/ui/VideoPlayer";
import { workServices } from "../data/content";
import { portraits, slice } from "../data/images";
import { videos } from "../data/videos";

export default function WorkWithMe() {
  const photos = slice(2, workServices.length);
  return (
    <>
      <PageHero
        eyebrow="Work With Me"
        title="Let’s create something powerful together"
        subtitle="From keynote stages to coaching rooms, hosting to voiceover — here’s how we can work together to communicate, connect and create impact."
        image={portraits.speaking}
        imageAlt="Thecla speaking"
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Services"
            title="Premium services, tailored to your goals"
            intro="Every engagement is shaped around your audience, your brand and the transformation you want to create."
          />
        </div>
      </section>

      {/* Alternating service sections */}
      <section className="bg-cream pb-8">
        <div className="container-px space-y-20">
          {workServices.map((s, i) => {
            const Icon = getIcon(s.icon);
            const flip = i % 2 === 1;
            return (
              <Reveal key={s.title}>
                <div
                  id={s.title.toLowerCase().replace(/[^a-z]+/g, "-")}
                  className="grid items-center gap-10 lg:grid-cols-2"
                >
                  {/* image */}
                  <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                    <div className="absolute -inset-3 rounded-[2rem] bg-emerald-gradient opacity-10 blur-2xl" />
                    <div className="group relative overflow-hidden rounded-[2rem] shadow-card">
                      <img
                        src={photos[i]}
                        alt={s.title}
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/30 to-transparent" />
                      {s.title === "Spoken Word Poetry" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <PlayBadge video={videos.callMeWoman} />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* text */}
                  <div className={flip ? "lg:order-1" : ""}>
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-gradient text-white shadow-soft">
                      <Icon size={26} strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 text-3xl text-ink">{s.title}</h3>
                    <p className="mt-4 leading-relaxed text-ink/65">{s.description}</p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2.5 text-sm text-ink/75"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage text-brand-deep">
                            <Check size={12} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary mt-7">
                      Inquire About {s.title} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="The Process"
            title="Simple, clear and collaborative"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Reach Out", d: "Share your event, goals and vision through a quick inquiry." },
              { n: "02", t: "We Plan", d: "We align on outcomes, audience and the right approach for you." },
              { n: "03", t: "We Deliver", d: "I show up fully prepared to create real, lasting impact." },
            ].map((step) => (
              <Reveal key={step.n}>
                <div className="h-full rounded-3xl border border-ink/5 bg-sage/40 p-8 card-elevate">
                  <span className="font-display text-5xl font-bold text-gradient">
                    {step.n}
                  </span>
                  <h4 className="mt-4 text-xl text-ink">{step.t}</h4>
                  <p className="mt-2 text-ink/60">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={
          <>
            Ready to work together?
            <br className="hidden sm:block" /> Let’s make it happen.
          </>
        }
        buttonLabel="Send an Inquiry"
        buttonTo="/contact"
      />
    </>
  );
}

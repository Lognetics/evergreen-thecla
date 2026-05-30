import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart, Check, Star, Sparkles } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import CTABand from "../components/ui/CTABand";
import BookCover from "../components/ui/BookCover";
import { products } from "../data/content";
import { portraits } from "../data/images";

const benefits = [
  "Written from real experience, not theory",
  "Practical exercises you can use today",
  "Designed for growth at your own pace",
  "Rooted in confidence, faith and purpose",
];

export default function Books() {
  const [cart, setCart] = useState([]);
  const add = (title) => setCart((c) => (c.includes(title) ? c : [...c, title]));

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Books & Digital Products"
        subtitle="Books, e-books, workbooks, journals and confidence resources designed to help you grow in confidence, clarity and voice — at your own pace."
        image={portraits.feature}
        imageAlt="Thecla A. Orakwe"
      />

      {/* cart bar */}
      <div className="sticky top-[72px] z-30 border-b border-ink/5 bg-white/85 backdrop-blur">
        <div className="container-px flex items-center justify-between py-3">
          <span className="font-accent text-sm text-ink/60">
            Curated resources for your becoming
          </span>
          <button className="relative flex items-center gap-2 rounded-full bg-emerald-gradient px-5 py-2.5 font-accent text-sm font-semibold text-white shadow-soft">
            <ShoppingCart size={16} /> Cart
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gold px-1 text-xs font-bold text-ink">
              {cart.length}
            </span>
          </button>
        </div>
      </div>

      {/* Featured */}
      <section className="bg-white py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Featured Books"
            title="Start with these"
            intro="Hand-picked resources to kick-start your confidence journey."
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {products.slice(0, 2).map((p, i) => (
              <Reveal key={p.title} dir={i === 0 ? "left" : "right"}>
                <div className="flex flex-col items-center gap-6 rounded-3xl border border-ink/5 bg-sage/30 p-7 sm:flex-row sm:items-stretch">
                  <div className="flex shrink-0 items-center justify-center sm:w-48">
                    <BookCover title={p.title} type={p.type} size="lg" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    {p.tag && (
                      <span className="self-start rounded-full bg-gold px-3 py-1 font-accent text-[10px] font-bold uppercase tracking-wider text-ink">
                        {p.tag}
                      </span>
                    )}
                    <div className="mt-2 flex gap-1 text-gold">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <h3 className="mt-2 text-2xl text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink/60">{p.text}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-display text-2xl font-bold text-gradient">
                        {p.price}
                      </span>
                      <button
                        onClick={() => add(p.title)}
                        className="btn-primary px-5 py-2.5 text-sm"
                      >
                        {cart.includes(p.title) ? (
                          <>
                            <Check size={15} /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={15} /> Add to Cart
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All products grid */}
      <section className="bg-cream py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="E-books · Workbooks · Journals · Resources"
            title="The full collection"
          />
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <StaggerItem key={p.title}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white card-elevate">
                  {/* book cover image area */}
                  <div className="relative flex items-end justify-center overflow-hidden bg-gradient-to-br from-sage to-white pt-9">
                    <span className="absolute right-4 top-4 rounded-full bg-white/80 px-3 py-1 font-accent text-[10px] font-semibold uppercase tracking-wider text-brand-deep backdrop-blur">
                      {p.type}
                    </span>
                    <div className="translate-y-2 transition-transform duration-500 group-hover:-translate-y-1">
                      <BookCover title={p.title} type={p.type} size="md" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg text-ink">{p.title}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink/55">{p.text}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-display text-xl font-bold text-gradient">
                        {p.price}
                      </span>
                      <button
                        onClick={() => add(p.title)}
                        className="flex items-center gap-1.5 rounded-full border border-brand/25 px-4 py-2 font-accent text-xs font-semibold text-brand transition hover:bg-brand hover:text-white"
                      >
                        {cart.includes(p.title) ? (
                          <>
                            <Check size={14} /> Added
                          </>
                        ) : (
                          <>
                            <ShoppingBag size={14} /> Add
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 text-center">
            <Link to="/contact" className="btn-gold">
              Visit Store <ShoppingBag size={16} />
            </Link>
            <p className="mt-3 font-accent text-xs uppercase tracking-wider text-ink/40">
              Secure checkout coming soon
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why these resources — fills space + adds context */}
      <section className="bg-white py-24">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal dir="left" className="relative">
            <div className="absolute -left-4 -top-4 h-40 w-40 rounded-3xl bg-sage" />
            <div className="relative overflow-hidden rounded-3xl shadow-card">
              <img
                src={portraits.about}
                alt="Thecla A. Orakwe"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="A Note From Thecla"
              title="Resources born from a real journey"
            />
            <Reveal dir="up" delay={0.1}>
              <p className="mt-6 leading-relaxed text-ink/65">
                Every book, workbook and journal here is drawn from my own journey of
                finding my voice and learning to stand boldly in who I am. These aren't
                abstract theories — they're the practical tools I wish I'd had earlier.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-gradient text-white">
                      <Sparkles size={11} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bundle offer — fills the blank space with a strong visual */}
      <section className="relative overflow-hidden bg-dark-emerald py-20 text-white">
        <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="container-px relative grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <Reveal dir="left">
            <span className="eyebrow-gold">Best Value</span>
            <h2 className="mt-4 text-3xl text-white sm:text-4xl">
              The Complete Confidence Bundle
            </h2>
            <p className="mt-5 max-w-md text-white/70">
              Get every book, workbook, journal and resource in one bundle — your full
              toolkit for building unshakeable confidence and finding your voice.
            </p>
            <div className="mt-6 flex items-end gap-3">
              <span className="font-display text-4xl font-bold text-gold">$39.99</span>
              <span className="mb-1 text-white/50 line-through">$66.94</span>
              <span className="mb-1 rounded-full bg-gold/20 px-2 py-0.5 font-accent text-[11px] font-bold uppercase tracking-wider text-gold">
                Save 40%
              </span>
            </div>
            <button
              onClick={() => add("The Complete Confidence Bundle")}
              className="btn-gold mt-7"
            >
              {cart.includes("The Complete Confidence Bundle") ? (
                <>
                  <Check size={16} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={16} /> Add Bundle to Cart
                </>
              )}
            </button>
          </Reveal>
          <Reveal dir="right">
            <div className="flex flex-wrap items-end justify-center gap-3">
              {products.slice(0, 5).map((p, i) => (
                <div key={p.title} style={{ transform: `translateY(${i % 2 ? 14 : 0}px)` }}>
                  <BookCover title={p.title} type={p.type} size="sm" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        title={
          <>
            Invest in your confidence.
            <br className="hidden sm:block" /> Invest in your becoming.
          </>
        }
        buttonLabel="Browse the Store"
        buttonTo="/books"
      />
    </>
  );
}

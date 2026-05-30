import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowRight } from "lucide-react";
import { nav, brand, services } from "../data/content";
import { logoLight } from "../data/images";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <footer className="relative overflow-hidden bg-dark-emerald text-white">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-px relative grid gap-12 py-16 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Link to="/" className="flex items-center">
            <img src={logoLight} alt="Evergreen Thecla" className="h-16 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            Helping people find their voice, build confidence, communicate better and
            become the best version of themselves — on stage, online and in life.
          </p>
          <div className="mt-6 space-y-2 text-sm text-white/75">
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-2 hover:text-gold"
            >
              <Mail size={16} /> {brand.email}
            </a>
            {brand.phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-gold"
              >
                <Phone size={16} /> {p}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className="font-accent text-sm font-semibold uppercase tracking-wider text-gold">
            Explore
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm text-white/70">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="font-accent text-sm font-semibold uppercase tracking-wider text-gold">
            Services
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm text-white/70">
            {services.slice(0, 7).map((s) => (
              <li key={s.title}>
                <Link to="/work-with-me" className="transition hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="lg:col-span-3">
          <h4 className="font-accent text-sm font-semibold uppercase tracking-wider text-gold">
            Newsletter
          </h4>
          <p className="mt-5 text-sm text-white/65">
            Confidence nuggets and updates, straight to your inbox.
          </p>
          {done ? (
            <p className="mt-4 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 text-sm text-gold">
              Thank you — you’re on the list! ✦
            </p>
          ) : (
            <form onSubmit={submit} className="mt-4 flex overflow-hidden rounded-full border border-white/20 bg-white/5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center bg-gold px-4 text-ink transition hover:bg-gold-soft"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {brand.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="flex h-9 items-center rounded-full border border-white/15 px-3 font-accent text-xs text-white/70 transition hover:border-gold hover:text-gold"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="font-display text-sm italic text-gold">{brand.tagline}</p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Evergreen Thecla. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

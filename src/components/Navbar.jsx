import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, brand } from "../data/content";
import { logoDark, logoLight } from "../data/images";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-ink/5 bg-white/85 py-3 shadow-[0_10px_40px_-30px_rgba(10,10,10,0.5)] backdrop-blur-xl"
          : "py-5"
      }`}
    >
      <nav className="container-px flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src={scrolled ? logoDark : logoLight}
            alt="Evergreen Thecla"
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-11" : "h-12 sm:h-14"
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 font-accent text-[13px] font-medium transition-colors ${
                    isActive
                      ? scrolled
                        ? "text-brand"
                        : "text-gold"
                      : scrolled
                      ? "text-ink/70 hover:text-brand"
                      : "text-white/85 hover:text-gold"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full ${
                          scrolled ? "bg-emerald-gradient" : "bg-gold"
                        }`}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <Link
            to="/contact"
            className={
              scrolled
                ? "btn-primary px-5 py-2.5 text-[13px]"
                : "btn-gold px-5 py-2.5 text-[13px]"
            }
          >
            Book Me to Speak
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors xl:hidden ${
            scrolled ? "border-ink/10 text-ink" : "border-white/30 text-white"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden bg-white/95 backdrop-blur-xl xl:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-5">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 font-accent text-sm font-medium ${
                        isActive
                          ? "bg-sage text-brand-deep"
                          : "text-ink/75 hover:bg-sage/60"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <Link to="/contact" className="btn-primary w-full">
                  Book Me to Speak
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

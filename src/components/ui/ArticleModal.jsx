import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { X, Clock, ArrowLeft } from "lucide-react";

const catColors = {
  Confidence: "bg-emerald-gradient",
  "Public Speaking": "bg-brand",
  Growth: "bg-brand-light",
  Leadership: "bg-brand-deep",
  Faith: "bg-gold",
  "Women Development": "bg-brand",
  "Youth Development": "bg-brand-deep",
};

// Renders a structured article body made of typed blocks.
function ArticleBlocks({ blocks }) {
  let firstPara = true;
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => {
        if (b.t === "h2")
          return (
            <h3 key={i} className="!mt-8 font-display text-2xl text-ink">
              {b.x}
            </h3>
          );
        if (b.t === "h3")
          return (
            <h4 key={i} className="!mt-8 font-display text-xl text-brand-deep">
              {b.x}
            </h4>
          );
        if (b.t === "quote")
          return (
            <blockquote
              key={i}
              className="my-2 rounded-2xl border-l-4 border-gold bg-sage/50 px-5 py-4 font-display text-lg italic leading-relaxed text-brand-deep"
            >
              {b.x}
            </blockquote>
          );
        if (b.t === "ul")
          return (
            <ul key={i} className="space-y-2.5">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-3 text-ink/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="leading-relaxed">{it}</span>
                </li>
              ))}
            </ul>
          );
        if (b.t === "details")
          return (
            <dl
              key={i}
              className="grid gap-3 rounded-2xl border border-ink/5 bg-cream p-5 sm:p-6"
            >
              {b.items.map((it, j) => (
                <div key={j} className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                  <dt className="font-accent text-xs font-semibold uppercase tracking-wider text-brand">
                    {it.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-ink/75">{it.value}</dd>
                </div>
              ))}
            </dl>
          );
        if (b.t === "img")
          return (
            <img
              key={i}
              src={b.src}
              alt={b.alt || ""}
              loading="lazy"
              className="my-2 w-full rounded-2xl border border-ink/5 shadow-soft"
            />
          );
        // paragraph
        const drop = firstPara;
        firstPara = false;
        return (
          <p
            key={i}
            className={`leading-relaxed text-ink/70 ${
              drop
                ? "text-lg first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-brand"
                : ""
            }`}
          >
            {b.x}
          </p>
        );
      })}
    </div>
  );
}

// Full-article reading modal opened from the blog grid.
export default function ArticleModal({ post, image, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink/80 p-4 backdrop-blur-sm sm:p-8"
    >
      <motion.article
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative my-4 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-glow-lg"
      >
        {/* Cover */}
        <div className="relative h-56 w-full sm:h-72">
          <img src={image} alt={post.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
          <button
            onClick={onClose}
            aria-label="Close article"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-ink transition hover:bg-white"
          >
            <X size={20} />
          </button>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <span
              className={`inline-block rounded-full px-3 py-1 font-accent text-[11px] font-semibold text-white ${
                catColors[post.category] || "bg-brand"
              }`}
            >
              {post.category}
            </span>
            <h2 className="mt-3 font-display text-xl leading-tight text-white sm:text-2xl">
              {post.headline || post.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-7 sm:px-10 sm:py-9">
          <div className="flex items-center gap-4 border-b border-ink/5 pb-5 text-xs text-ink/45">
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.read}
            </span>
            <span className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-gradient font-display text-[11px] font-bold text-white">
                ET
              </span>
              By Evergreen Thecla
            </span>
          </div>

          <div className="mt-6">
            {post.blocks ? (
              <ArticleBlocks blocks={post.blocks} />
            ) : (
              <div className="space-y-4">
                {(post.body || [post.excerpt]).map((para, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed text-ink/70 ${
                      i === 0
                        ? "text-lg first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-5xl first-letter:font-bold first-letter:text-brand"
                        : ""
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-ink/5 pt-6">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 font-accent text-sm font-semibold text-brand hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> Back to articles
            </button>
            <span className="font-display text-sm italic text-gold">
              Become, unapologetically.
            </span>
          </div>
        </div>
      </motion.article>
    </motion.div>,
    document.body
  );
}

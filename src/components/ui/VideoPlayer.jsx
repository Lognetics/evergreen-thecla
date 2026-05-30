import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { embedUrl } from "../../data/videos";

// Modal lightbox that plays a YouTube video. Reused everywhere via <VideoCard/> or
// the standalone <PlayBadge/>.
function Lightbox({ video, onClose }) {
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl"
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white/10"
        >
          <X size={20} />
        </button>
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-glow-lg">
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={embedUrl(video.id)}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
        <div className="mt-4 text-center">
          <span className="eyebrow-gold">{video.tag}</span>
          <h3 className="mt-1 font-display text-2xl text-white">{video.title}</h3>
          {video.subtitle && (
            <p className="mt-1 text-sm text-white/60">{video.subtitle}</p>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

// A circular pulsing play badge — drop it over any image. Manages its own modal.
export function PlayBadge({ video, size = "md", className = "" }) {
  const [open, setOpen] = useState(false);
  const dims = size === "lg" ? "h-20 w-20" : size === "sm" ? "h-12 w-12" : "h-16 w-16";
  const icon = size === "lg" ? 30 : size === "sm" ? 18 : 24;
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label={`Play: ${video.title}`}
        className={`group relative flex items-center justify-center ${className}`}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
        <span
          className={`relative flex ${dims} items-center justify-center rounded-full bg-white text-brand-deep shadow-glow transition-transform duration-300 group-hover:scale-110`}
        >
          <Play size={icon} fill="currentColor" className="ml-0.5" />
        </span>
      </button>
      <AnimatePresence>
        {open && <Lightbox video={video} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

// Full video card: poster image + play badge + caption. Used in feature sections.
export function VideoCard({ video, className = "", ratio = "aspect-video" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`group relative block w-full overflow-hidden rounded-3xl border border-white/10 shadow-card ${className}`}
      >
        <div className={`relative ${ratio} w-full`}>
          <img
            src={video.poster}
            alt={video.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="relative flex items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-deep shadow-glow transition-transform duration-300 group-hover:scale-110">
                <Play size={26} fill="currentColor" className="ml-0.5" />
              </span>
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-left">
            <span className="rounded-full bg-gold px-3 py-1 font-accent text-[10px] font-bold uppercase tracking-wider text-ink">
              {video.tag}
            </span>
            <h3 className="mt-3 font-display text-xl text-white sm:text-2xl">
              {video.title}
            </h3>
            {video.subtitle && (
              <p className="mt-1 text-sm text-white/70">{video.subtitle}</p>
            )}
          </div>
        </div>
      </button>
      <AnimatePresence>
        {open && <Lightbox video={video} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

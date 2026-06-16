import { Link } from "react-router-dom";
import { Clock, ArrowUpRight, Pin } from "lucide-react";
import { posts } from "../data/posts";

const catColors = {
  Confidence: "bg-emerald-gradient",
  "Public Speaking": "bg-brand",
  Growth: "bg-brand-light",
  Leadership: "bg-brand-deep",
  Faith: "bg-gold",
  "Women Development": "bg-brand",
  "Youth Development": "bg-brand-deep",
};

function Card({ post }) {
  return (
    <Link
      to={`/blog?post=${post.slug}`}
      className="group relative flex w-[300px] shrink-0 flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-[0_18px_50px_-40px_rgba(10,10,10,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card sm:w-[340px]"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1 rounded-full px-3 py-1 font-accent text-[10px] font-semibold text-white ${
            catColors[post.category] || "bg-brand"
          }`}
        >
          {post.pinned && <Pin size={11} />}
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="line-clamp-2 text-lg leading-snug text-ink transition-colors group-hover:text-brand">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-ink/55">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs text-ink/40">
            <Clock size={13} /> {post.read}
          </span>
          <span className="flex items-center gap-1 font-accent text-sm font-semibold text-brand">
            Read <ArrowUpRight size={15} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// Continuously scrolling, looping carousel of blog posts. Pauses on hover.
export default function BlogCarousel() {
  const row = [...posts, ...posts];
  return (
    <div className="group relative">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream to-transparent sm:w-20" />

      <div className="overflow-hidden">
        <div
          className="flex w-max gap-6 py-2 animate-marquee group-hover:[animation-play-state:paused]"
          style={{ animationDuration: "48s" }}
        >
          {row.map((p, i) => (
            <Card key={`${p.slug}-${i}`} post={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

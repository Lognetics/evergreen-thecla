import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Clock, Pin } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import Reveal, { Stagger, StaggerItem } from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";
import ArticleModal from "../components/ui/ArticleModal";
import { blogCategories } from "../data/content";
import { features } from "../data/images";
import { posts, featuredPost, getPostBySlug } from "../data/posts";

const catColors = {
  Confidence: "bg-emerald-gradient",
  "Public Speaking": "bg-brand",
  Growth: "bg-brand-light",
  Leadership: "bg-brand-deep",
  Faith: "bg-gold",
  "Women Development": "bg-brand",
  "Youth Development": "bg-brand-deep",
};

export default function Blog() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [subscribed, setSubscribed] = useState(false);
  const [openPost, setOpenPost] = useState(null);
  const [params, setParams] = useSearchParams();

  const featured = featuredPost;

  // Deep-link support: /blog?post=<slug> opens that article.
  useEffect(() => {
    const slug = params.get("post");
    if (slug) {
      const p = getPostBySlug(slug);
      if (p) setOpenPost(p);
    }
  }, [params]);

  const closePost = () => {
    setOpenPost(null);
    if (params.get("post")) {
      params.delete("post");
      setParams(params, { replace: true });
    }
  };

  const counts = useMemo(() => {
    const c = { All: posts.length };
    blogCategories.forEach((cat) => {
      c[cat] = posts.filter((p) => p.category === cat).length;
    });
    return c;
  }, []);

  const showingDefault = active === "All" && !query;

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const matchQ =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [query, active]);

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Blog / Confidence Nuggets"
        subtitle="Bite-sized wisdom on confidence, public speaking, growth, leadership, faith and becoming — to inspire and equip you on your journey."
        image={features.host}
        imageAlt="Blog / Confidence Nuggets"
      />

      {/* Search + categories */}
      <section className="border-b border-ink/5 bg-white py-8">
        <div className="container-px flex flex-col gap-5">
          <div className="relative mx-auto w-full max-w-xl">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles…"
              className="w-full rounded-full border border-ink/10 bg-cream py-3.5 pl-11 pr-5 font-body text-sm focus:border-brand focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {["All", ...blogCategories].map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 font-accent text-xs font-semibold transition ${
                  active === c
                    ? "bg-emerald-gradient text-white shadow-soft"
                    : "border border-ink/10 text-ink/60 hover:border-brand hover:text-brand"
                }`}
              >
                {c}
                <span
                  className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${
                    active === c ? "bg-white/25 text-white" : "bg-sage text-brand-deep"
                  }`}
                >
                  {counts[c]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / pinned article */}
      {featured && showingDefault && (
        <section className="bg-cream py-16">
          <div className="container-px">
            <Reveal>
              <div className="grid items-center gap-8 overflow-hidden rounded-[2rem] border border-ink/5 bg-white shadow-card lg:grid-cols-2">
                <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:h-full">
                  <img
                    src={featured.img}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 font-accent text-[11px] font-bold uppercase tracking-wider text-ink">
                    <Pin size={12} /> {featured.pinned ? "Pinned" : "Featured"}
                  </span>
                </div>
                <div className="p-8 lg:p-12">
                  <span
                    className={`inline-block rounded-full px-3 py-1 font-accent text-[11px] font-semibold text-white ${catColors[featured.category]}`}
                  >
                    {featured.category}
                  </span>
                  <h2 className="mt-4 text-3xl leading-tight text-ink">{featured.title}</h2>
                  <p className="mt-4 text-ink/60">{featured.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <button
                      onClick={() => setOpenPost(featured)}
                      className="inline-flex items-center gap-2 font-accent text-sm font-semibold text-brand hover:gap-3 transition-all"
                    >
                      Read article <ArrowRight size={16} />
                    </button>
                    <span className="flex items-center gap-1.5 text-xs text-ink/40">
                      <Clock size={13} /> {featured.read}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Articles grid */}
      <section className="bg-cream pb-24 pt-8">
        <div className="container-px">
          {active !== "All" || query ? (
            <p className="mb-8 text-center font-accent text-sm uppercase tracking-wider text-ink/45">
              {filtered.length} article{filtered.length === 1 ? "" : "s"}
              {active !== "All" ? ` in ${active}` : ""}
            </p>
          ) : null}
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-ink/50">
              No articles found. Try a different search or category.
            </p>
          ) : (
            <Stagger immediate className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <StaggerItem key={p.title}>
                  <article
                    onClick={() => setOpenPost(p)}
                    className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-ink/5 bg-white card-elevate"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span
                        className={`absolute left-4 top-4 rounded-full px-3 py-1 font-accent text-[10px] font-semibold text-white ${catColors[p.category]}`}
                      >
                        {p.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-lg leading-snug text-ink transition-colors group-hover:text-brand">
                        {p.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-ink/55">{p.excerpt}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-ink/40">
                          <Clock size={13} /> {p.read}
                        </span>
                        <span className="inline-flex items-center gap-1 font-accent text-sm font-semibold text-brand">
                          Read <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>

      {/* Quick link-style list (searchable via the controls above) */}
      <section className="bg-white py-16">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-ink/5 pb-5">
              <div>
                <span className="eyebrow">Browse</span>
                <h2 className="mt-1 font-display text-2xl text-ink sm:text-3xl">
                  All Articles
                </h2>
              </div>
              <span className="shrink-0 font-accent text-xs uppercase tracking-wider text-ink/45">
                {filtered.length} post{filtered.length === 1 ? "" : "s"}
              </span>
            </div>

            {filtered.length === 0 ? (
              <p className="py-8 text-center text-ink/50">
                No articles match your search.
              </p>
            ) : (
              <Stagger immediate className="flex flex-col gap-3">
                {filtered.map((p) => (
                  <StaggerItem key={p.title}>
                    <article
                      onClick={() => setOpenPost(p)}
                      className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-ink/5 bg-cream p-3 transition-colors hover:border-brand/20 hover:bg-sage/40 sm:gap-5 sm:p-4"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-28">
                        <img
                          src={p.img}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {p.pinned && (
                          <span className="absolute left-1.5 top-1.5 rounded-full bg-gold px-2 py-0.5 font-accent text-[8px] font-bold uppercase tracking-wider text-ink">
                            Pinned
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 font-accent text-[10px] font-semibold text-white ${catColors[p.category]}`}
                        >
                          {p.category}
                        </span>
                        <h3 className="mt-1.5 line-clamp-2 font-display text-base font-semibold leading-snug text-brand-deep underline-offset-2 group-hover:text-brand group-hover:underline sm:text-lg">
                          {p.title}
                        </h3>
                        <p className="mt-1 line-clamp-1 text-sm text-ink/55">
                          {p.excerpt}
                        </p>
                        <span className="mt-1.5 flex items-center gap-1.5 text-xs text-ink/40">
                          <Clock size={12} /> {p.read}
                        </span>
                      </div>
                      <ArrowRight
                        size={18}
                        className="hidden shrink-0 text-brand transition-transform group-hover:translate-x-1 sm:block"
                      />
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative overflow-hidden bg-dark-emerald py-20 text-white">
        <div className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
        <div className="container-px relative text-center">
          <Reveal>
            <span className="eyebrow-gold">Newsletter</span>
            <h2 className="mx-auto mt-3 max-w-xl text-3xl text-white">
              Get confidence nuggets in your inbox
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/65">
              Practical, empowering insights — no spam, just growth.
            </p>
            {subscribed ? (
              <p className="mx-auto mt-7 max-w-sm rounded-full border border-gold/40 bg-gold/10 px-5 py-3 text-gold">
                You’re subscribed — welcome! ✦
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
                className="mx-auto mt-7 flex max-w-md overflow-hidden rounded-full border border-white/20 bg-white/5 p-1.5"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full bg-transparent px-4 text-sm text-white placeholder-white/40 focus:outline-none"
                />
                <button type="submit" className="btn-gold px-6 py-2.5 text-sm">
                  Subscribe
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <AnimatePresence>
        {openPost && (
          <ArticleModal
            post={openPost}
            image={openPost.img}
            onClose={closePost}
          />
        )}
      </AnimatePresence>
    </>
  );
}

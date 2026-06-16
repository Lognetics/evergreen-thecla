import { blogPosts } from "./content";
import { gallery } from "./images";

export const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Posts enriched with a stable slug (for deep-linking) and a cover image
// (explicit `cover` if provided, otherwise a deterministic gallery photo).
export const posts = blogPosts.map((p, i) => ({
  ...p,
  slug: slugify(p.title),
  img: p.cover || gallery[(i + 9) % gallery.length],
}));

export const featuredPost = posts.find((p) => p.featured) || posts[0];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);

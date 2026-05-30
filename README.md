# Evergreen Thecla — Personal Brand Website

Premium personal brand website for **Thecla Amarachukwu Orakwe (Evergreen Thecla)** —
Public Speaker · Confidence Coach · Host · Spoken Word Artist · Advocate.

Built with **Vite + React + Tailwind CSS + Framer Motion**.

> _Find Your Voice. Build Confidence. Become, unapologetically._

---

## Getting started

```bash
npm install        # install dependencies (first time only)
npm run dev        # start the dev server → http://localhost:5173
npm run build      # production build into /dist
npm run preview    # preview the production build locally
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/work-with-me` | Work With Me |
| `/unbox-your-aura` | Unbox Your Aura |
| `/books` | Books & Digital Products |
| `/blog` | Confidence Nuggets (Blog) |
| `/podcast` | Podcast |
| `/advocacy` | Advocacy |
| `/contact` | Contact |

## Project structure

```
public/images/          → all photos (real images of Thecla)
src/
  data/
    content.js          → ALL site copy: services, testimonials, blog, products…
    images.js           → image manifest (which photo goes where)
  components/
    Navbar / Footer / Layout / ScrollToTop
    ui/                 → reusable building blocks (Reveal, GlowBg, Stat,
                          ServiceCard, Testimonials, Gallery, CTABand, PageHero…)
  pages/                → one file per page
```

## Editing content

- **Text** (services, testimonials, blog posts, products, etc.) lives in
  [`src/data/content.js`](src/data/content.js). Edit it there — no need to touch the pages.
- **Photos** are mapped in [`src/data/images.js`](src/data/images.js). To swap a photo,
  drop a new file into `public/images/` and update the path in that file. The 4 studio
  portraits are tagged `portraits.hero / about / speaking / feature`; event shots are in
  `features` and the `gallery` pool.

## Design system

- **Colors:** Deep Emerald `#0F7A5A`, gradient → `#3BCF8E`, dark `#0A0A0A`,
  soft gold `#D9B65D`, soft sage `#E7F6EF`. Defined in
  [`tailwind.config.js`](tailwind.config.js) as `brand`, `ink`, `gold`, `sage`.
- **Fonts:** Playfair Display (headings), Poppins (body), Montserrat (accents) —
  loaded in [`index.html`](index.html).

## Notes / placeholders to wire up later

- Contact forms, newsletter and cart are front-end placeholders (no backend yet).
- Calendar booking, Google Map, store checkout and YouTube embed are marked
  placeholders, ready to connect to real services.
- Social links in `content.js` use `#` — replace with real profile URLs.

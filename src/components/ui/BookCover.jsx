// CSS 3D book-cover mockup. Renders a realistic-looking book (spine, pages edge,
// shadow) branded per product type. Used as the "image" for each product.
const gradients = {
  Book: "linear-gradient(145deg,#0B5A42,#3BCF8E)",
  "E-book": "linear-gradient(145deg,#0F7A5A,#3BCF8E)",
  Workbook: "linear-gradient(145deg,#0B5A42,#D9B65D)",
  Journal: "linear-gradient(145deg,#D9B65D,#0F7A5A)",
  Resource: "linear-gradient(145deg,#3BCF8E,#0B5A42)",
};

export default function BookCover({ title, type = "Book", size = "md", className = "" }) {
  const w = size === "lg" ? 180 : size === "sm" ? 120 : 150;
  const h = w * 1.42;
  const bg = gradients[type] || gradients.Book;

  return (
    <div
      className={`group/book [perspective:1100px] ${className}`}
      style={{ width: w, height: h }}
    >
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] [transform:rotateY(-22deg)] group-hover/book:[transform:rotateY(-8deg)]">
        {/* pages edge (right) */}
        <div
          className="absolute right-0 top-1 bottom-1 rounded-r-sm bg-gradient-to-l from-white via-[#efeee7] to-[#d8d7cf]"
          style={{ width: 12, transform: "translateZ(-6px) translateX(6px)" }}
        />
        {/* spine */}
        <div
          className="absolute left-0 top-0 h-full rounded-l-sm"
          style={{
            width: 16,
            background: "linear-gradient(90deg,rgba(0,0,0,0.45),rgba(0,0,0,0.1))",
            transform: "rotateY(78deg) translateZ(-8px) translateX(-8px)",
            transformOrigin: "left",
          }}
        />
        {/* front cover */}
        <div
          className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-sm rounded-l-[3px] p-4 text-white shadow-[14px_18px_40px_-18px_rgba(10,10,10,0.7)]"
          style={{ background: bg }}
        >
          {/* sheen */}
          <span
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg,rgba(255,255,255,0.28) 0%,rgba(255,255,255,0) 38%)",
            }}
          />
          {/* spine highlight line */}
          <span className="pointer-events-none absolute left-2 top-0 h-full w-px bg-white/25" />

          <div className="relative flex items-center justify-between">
            <span className="font-accent text-[8px] font-bold uppercase tracking-[0.18em] text-white/80">
              {type}
            </span>
            <span className="font-display text-xs font-bold text-gold">✦</span>
          </div>

          <div className="relative">
            <span className="block h-px w-8 bg-white/40" />
            <h4 className="mt-2 font-display text-base font-bold leading-tight">
              {title}
            </h4>
          </div>

          <div className="relative font-accent text-[8px] uppercase tracking-[0.18em] text-white/75">
            Evergreen Thecla
          </div>
        </div>
      </div>
    </div>
  );
}

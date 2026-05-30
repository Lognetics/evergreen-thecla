import { motion } from "framer-motion";

// Masonry-ish photo gallery with hover zoom. `images` is an array of src strings.
export default function Gallery({ images, columns = 3 }) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "sm:grid-cols-2"
      : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid grid-cols-1 gap-4 ${colClass}`}>
      {images.map((src, i) => (
        <motion.div
          key={src + i}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
          className={`group relative overflow-hidden rounded-2xl ${
            i % 5 === 0 ? "sm:row-span-2" : ""
          }`}
        >
          <img
            src={src}
            alt="Thecla A. Orakwe in action"
            loading="lazy"
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
              i % 5 === 0 ? "h-64 sm:h-full" : "h-64"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  );
}

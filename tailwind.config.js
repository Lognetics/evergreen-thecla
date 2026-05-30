/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0F7A5A",
          deep: "#0B5A42",
          mid: "#0F7A5A",
          light: "#3BCF8E",
        },
        ink: "#0A0A0A",
        gold: {
          DEFAULT: "#D9B65D",
          soft: "#E6CC85",
        },
        sage: "#E7F6EF",
        cream: "#FBFCFB",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Poppins", "system-ui", "sans-serif"],
        accent: ["Montserrat", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px -10px rgba(59, 207, 142, 0.45)",
        "glow-lg": "0 0 140px -10px rgba(59, 207, 142, 0.55)",
        soft: "0 20px 60px -25px rgba(15, 122, 90, 0.35)",
        card: "0 24px 70px -30px rgba(10, 10, 10, 0.25)",
      },
      backgroundImage: {
        "emerald-gradient":
          "linear-gradient(135deg, #0B5A42 0%, #0F7A5A 45%, #3BCF8E 100%)",
        "emerald-radial":
          "radial-gradient(circle at 30% 20%, rgba(59,207,142,0.25), transparent 60%)",
        "dark-emerald":
          "linear-gradient(160deg, #0A0A0A 0%, #0A1F18 55%, #0B2A20 100%)",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-22px)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-30px) translateX(14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "floatSlow 11s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

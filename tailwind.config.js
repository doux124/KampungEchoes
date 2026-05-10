/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "rice-paper": "#F8F0DD",
        "heritage-green": "#1F6B55",
        "deep-teal": "#062F35",
        sepia: "#8A5A35",
        "old-gold": "#D8A63A",
        "warm-amber": "#F59E42",
        clay: "#B85C38",
        sage: "#9EB88F",
        charcoal: "#161717",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Manrope", "Inter", "sans-serif"],
      },
      boxShadow: {
        phone: "0 38px 90px rgba(4, 17, 18, 0.5), 0 14px 32px rgba(138, 90, 53, 0.25)",
        glow: "0 0 45px rgba(216, 166, 58, 0.35)",
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        14: "0.14",
        15: "0.15",
        16: "0.16",
        18: "0.18",
        22: "0.22",
        34: "0.34",
        35: "0.35",
        42: "0.42",
        45: "0.45",
        48: "0.48",
        55: "0.55",
        58: "0.58",
        64: "0.64",
        68: "0.68",
        72: "0.72",
        76: "0.76",
        78: "0.78",
        85: "0.85",
        88: "0.88",
      },
      backgroundImage: {
        "map-lines":
          "linear-gradient(115deg, rgba(216,166,58,.12) 1px, transparent 1px), linear-gradient(25deg, rgba(31,107,85,.1) 1px, transparent 1px)",
        "paper-fiber":
          "radial-gradient(circle at 20% 10%, rgba(216,166,58,.16), transparent 20%), radial-gradient(circle at 80% 0%, rgba(31,107,85,.14), transparent 24%), linear-gradient(135deg, #fbf3df, #efe1bf)",
      },
    },
  },
  plugins: [],
};

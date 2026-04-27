/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        ink: {
          900: "#0b1220",
          800: "#111827",
          700: "#1f2937",
          600: "#374151",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "sans-serif"],
        display: ['"Sora"', '"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(15, 23, 42, 0.15)",
        lift: "0 20px 60px -20px rgba(15, 23, 42, 0.25)",
        brand: "0 16px 30px -10px rgba(249, 115, 22, 0.55)",
      },
      borderRadius: {
        pill: "999px",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      maxWidth: {
        site: "1240px",
      },
    },
  },
  plugins: [],
};

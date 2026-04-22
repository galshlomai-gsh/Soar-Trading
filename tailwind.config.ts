import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#05070D",
        surface: "#0E1320",
        elevated: "#161C2B",
        raised: "#1E2638",
        line: "#232B40",
        accent: {
          DEFAULT: "#8FB8FF",
          soft: "#B9D0FF",
          deep: "#5B8EF0",
        },
        ink: {
          DEFAULT: "#E7ECF5",
          muted: "#8592A6",
          dim: "#5A6578",
        },
        warn: "#F37F6A",
        ok: "#6FE3A5",
        sectionLight: "#F6F8FC",
        sectionLightInk: "#0B1220",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(143,184,255,0.35), 0 10px 40px -10px rgba(143,184,255,0.45)",
        soft: "0 20px 60px -30px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #B9D0FF 0%, #5B8EF0 100%)",
        "accent-gradient-soft": "linear-gradient(180deg, rgba(143,184,255,0.12), rgba(143,184,255,0))",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out both",
        "pulse-dot": "pulseDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

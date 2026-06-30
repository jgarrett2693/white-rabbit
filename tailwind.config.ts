import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#050505",
          soft: "#0A0A0A",
          raised: "#101010"
        },
        silver: "#C7C7C7",
        ivory: "#F4F1EA",
        blood: {
          DEFAULT: "#8E1116",
          bright: "#B5161D"
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        brand: "0.24em",
        wide2: "0.34em",
        wide3: "0.45em"
      },
      maxWidth: {
        prose: "68ch"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "scroll-cue": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 0.8s ease forwards",
        "scroll-cue": "scroll-cue 2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Maabeauty Design Tokens
        primary: {
          50: "#fff0f6",
          100: "#ffe0ee",
          200: "#ffc2dd",
          300: "#ff94c2",
          400: "#ff5ca3",
          500: "#f72d85",
          600: "#e0156e",
          700: "#bc0e5a",
          800: "#9c0f4c",
          900: "#821042",
        },
        beauty: {
          pink: "#F72D85",
          rose: "#FF94C2",
          cream: "#FFF8F5",
          blush: "#FFE0EE",
          dark: "#2C1A1D",
        },
        neutral: {
          cream: "#FFF8F5",
          warm: "#F5EDE8",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        beauty: "0 4px 24px rgba(247, 45, 133, 0.12)",
        card: "0 2px 16px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
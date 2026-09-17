/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060E24",
          900: "#0B1A3A",
          800: "#0F2557",
          700: "#153872",
          600: "#1B478E",
        },
        techblue: {
          500: "#1E6FEB",
          400: "#3B8CF5",
          300: "#6DAAF7",
        },
        sky: {
          400: "#4FA8F0",
          300: "#8FC6F5",
          100: "#EAF4FE",
        },
        ink: {
          900: "#0E1524",
          700: "#374056",
          500: "#5B6480",
          300: "#98A2B8",
        },
        cloud: {
          50: "#F6F8FC",
          100: "#EEF2F9",
          200: "#E3E9F3",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,26,58,0.06), 0 8px 24px -12px rgba(11,26,58,0.18)",
        panel: "0 20px 60px -20px rgba(6,14,36,0.45)",
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

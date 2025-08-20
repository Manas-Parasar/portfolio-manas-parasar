/* @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "Arial", "sans-serif"],
        body: ["Inter", "system-ui", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,0.35)",
      },
      backgroundImage: {
        grid: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "20px 20px",
      },
    },
  },
  plugins: [],
};

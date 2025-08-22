import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If deploying to GitHub Pages at https://USERNAME.github.io/REPO,
// set base: '/REPO/'
export default defineConfig({
  plugins: [react()],
  // base: '/manas-portfolio/'
});

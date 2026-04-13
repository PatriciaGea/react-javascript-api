import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// REVIEW: Hardcoded GitHub Pages base `/React_Javascript_Api/` breaks if the repo name or Pages URL changes; prefer env-driven `base` (e.g. `process.env.VITE_BASE_URL`) or document the coupling clearly.
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : "/React_Javascript_Api/",
}));

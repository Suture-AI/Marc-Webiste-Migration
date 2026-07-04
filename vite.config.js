import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  /* PAGES_BASE lets the same build target subpath hosts (e.g. GitHub Pages
     previews); production stays at the domain root. */
  base: process.env.PAGES_BASE || "/",
  plugins: [react()],
  server: { port: 5173, host: true },
  preview: { port: 5173, host: true },
});

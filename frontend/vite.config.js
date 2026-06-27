// vite.config.js — Vite build tool configuration
// Tells Vite to use the React plugin and where to find the entry point.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // During development, proxy /api calls to the Express backend
  // so you don't need to worry about CORS issues in development
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});

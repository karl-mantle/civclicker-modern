import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@atoms": path.resolve(__dirname, "src/atoms"),
      "@components": path.resolve(__dirname, "src/components"),
      "@engine": path.resolve(__dirname, "src/engine"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});

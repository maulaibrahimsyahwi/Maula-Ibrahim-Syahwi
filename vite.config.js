import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
      loader: {
        ".jsx": "jsx",
        ".js": "jsx",
      },
    },
  },
  build: {
    target: "es2020",
  },
});

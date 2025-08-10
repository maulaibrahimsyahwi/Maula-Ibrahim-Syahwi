import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      // Experimental: handle JSX MIME types
      babel: {
        plugins: [],
      },
    }),
    tailwindcss(),
  ],
  define: {
    "process.env": {},
  },
});

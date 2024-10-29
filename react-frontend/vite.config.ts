import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 8080,
  },
  preview: {
    port: Number(process.env.PORT) || 8080,
  },
  define: {
    "process.env.API_PORT": process.env.API_PORT || 8080,
  },
});

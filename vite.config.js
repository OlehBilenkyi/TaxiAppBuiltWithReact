import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/TaxiAppBuiltWithReact/",
  build: {
    outDir: "docs",
  },
  plugins: [react()],
});

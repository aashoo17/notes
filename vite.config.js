import { defineConfig } from "vite";
import vituum from "vituum";
import pug from "@vituum/vite-plugin-pug";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  plugins: [
    vituum({
      pages: {
        dir: "./", // Look in the root directory
        root: "./",
      },
    }),
    pug(),
    // Force a browser refresh whenever ANY pug file in the root or src changes
    FullReload(["index.pug", "*/*.pug"], { delay: 100 }),
  ],
  server: {
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.pug",
      },
    },
  },
});

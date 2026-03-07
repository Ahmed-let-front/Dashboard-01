import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/Dashboard-01",
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        settings: resolve(__dirname, "settings.html"),
        profile: resolve(__dirname, "profile.html"),
        projects: resolve(__dirname, "projects.html"),
        courses: resolve(__dirname, "courses.html"),
        friends: resolve(__dirname, "friends.html"),
        files: resolve(__dirname, "files.html"),
        plans: resolve(__dirname, "plans.html"),
      },
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});

import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
   const env = loadEnv(mode, process.cwd(), "");
   const proxyTarget = env.VITE_PROXY_TARGET ?? "http://localhost:3000";

   return {
      plugins: [react()],
      resolve: {
         alias: {
            "@": path.resolve(__dirname, "src"),
         },
      },
      server: {
         proxy: {
            "/api": {
               target: proxyTarget,
               changeOrigin: true,
            },
         },
      },
      test: {
         globals: true,
         environment: "jsdom",
         setupFiles: "./vitest.setup.ts",
      },
   };
});

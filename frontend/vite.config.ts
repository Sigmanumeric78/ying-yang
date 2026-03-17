import { defineConfig } from "vite";
import path from "node:path";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import solidPlugin from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";

export default defineConfig(({ mode }) => {
  const isDevelopment = mode !== "production";

  return {
    plugins: [
      tsconfigPaths(),
      tailwindcss(),
      solidPlugin(),
      ...(!isDevelopment ? [ViteMinifyPlugin()] : []),
    ],
    css: {
      devSourcemap: true,
      postcss: {
        plugins: [autoprefixer({})],
      },
    },
    resolve: {
      alias: {
        "virtual:env-config": path.resolve(__dirname, "./src/ts/virtual-env-config.ts"),
        "virtual:language-hashes": path.resolve(__dirname, "./src/ts/virtual-language-hashes.ts"),
        "@whitespaces/schemas": path.resolve(__dirname, "./src/types/schemas"),
        "@whitespaces/util": path.resolve(__dirname, "./src/ts/utils/local"),
        "@whitespaces/funbox": path.resolve(__dirname, "./src/ts/utils/local/funbox.ts"),
        "@whitespaces/contracts": path.resolve(__dirname, "./src/ts/utils/local"),
      },
    },
    server: {
      open: true,
      port: 3000,
      host: true,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
        },
      },
    },
    clearScreen: false,
    publicDir: "static",
    optimizeDeps: {
      exclude: ["@fortawesome/fontawesome-free"],
    },
  };
});

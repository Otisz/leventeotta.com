import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  // devtools-ui uses Solid's client-only `use:` directive, which breaks SSR pre-bundling
  environments: { ssr: { optimizeDeps: { exclude: ["@tanstack/react-devtools"] } } },
  plugins: [
    devtools(),
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tailwindcss(),
    tanstackStart({
      router: {
        quoteStyle: "double",
        semicolons: true,
      },
    }),
    viteReact(),
  ],
});

export default config;

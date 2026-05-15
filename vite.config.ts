import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Cloudflare Workers deployment: enable the Cloudflare plugin so the build
// targets the Workers runtime and integrates with wrangler.jsonc.
export default defineConfig({
  cloudflare: true,
  tanstackStart: {
    server: { entry: "server" },
  },
});

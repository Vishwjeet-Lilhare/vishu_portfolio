import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const siteUrl = loadEnv(mode, process.cwd(), "").VITE_SITE_URL?.trim();
  const origin = siteUrl ? new URL(siteUrl).origin : undefined;
  return {
    build: {
      rolldownOptions: {
        onwarn(warning, warn) {
          // Client-only SPA: React server-component directives do not apply.
          if (
            warning.code === "MODULE_LEVEL_DIRECTIVE" &&
            warning.message.includes("use client")
          )
            return;
          warn(warning);
        },
      },
    },
    plugins: [
      {
        name: "portfolio-metadata",
        transformIndexHtml() {
          return origin
            ? [
                {
                  tag: "link",
                  attrs: { rel: "canonical", href: `${origin}/` },
                  injectTo: "head",
                },
                {
                  tag: "meta",
                  attrs: { property: "og:url", content: `${origin}/` },
                  injectTo: "head",
                },
                {
                  tag: "meta",
                  attrs: {
                    property: "og:image",
                    content: `${origin}/social-card.png`,
                  },
                  injectTo: "head",
                },
              ]
            : [];
        },
        generateBundle() {
          this.emitFile({
            type: "asset",
            fileName: "robots.txt",
            source: `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ""}`,
          });
          if (origin)
            this.emitFile({
              type: "asset",
              fileName: "sitemap.xml",
              source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>`,
            });
        },
      },
    ],
  };
});

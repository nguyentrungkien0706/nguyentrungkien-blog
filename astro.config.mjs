// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Site tĩnh hoàn toàn, phục vụ bằng Cloudflare Workers Static Assets (xem wrangler.json).
// https://astro.build/config
export default defineConfig({
	site: "https://nguyentrungkien-blog.nguyentrungkien.workers.dev",
	integrations: [mdx(), sitemap()],
});

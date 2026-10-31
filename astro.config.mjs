import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
const site = process.env.SITE_URL;
export default defineConfig({
  site, base: process.env.BASE_PATH || '/', output: 'static', trailingSlash: 'always',
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] },
});

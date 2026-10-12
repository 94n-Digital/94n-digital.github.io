// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL and BASE_PATH are injected by the GitHub Pages workflow from
// actions/configure-pages, so the build is correct whether the site is served
// from <owner>.github.io/<repo>/ or from a custom domain at the root.
// configure-pages omits the trailing slash; BASE_URL concatenation needs it.
const basePath = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: basePath.endsWith('/') ? basePath : `${basePath}/`,
  trailingSlash: 'ignore',
});

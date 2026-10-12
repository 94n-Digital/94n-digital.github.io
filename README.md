# 94n Digital website

Static marketing site for 94n Digital, a boutique performance marketing agency for ecommerce. Built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run check`   | Type-check `.astro` and `.ts` files          |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Serve the production build locally           |

## Deployment

`.github/workflows/ci.yml` builds and type-checks every pull request, and deploys to GitHub Pages on every push to `main`.

### One-time GitHub setup

1. Create the repository and push this project to `main`.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The site URL and base path come from `actions/configure-pages`, so nothing needs editing for either hosting option:

- **Project pages:** served at `https://<owner>.github.io/<repo>/`.
- **Custom domain:** add the domain under **Settings → Pages → Custom domain**, then point DNS at GitHub ([guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)). The next deploy builds for the root of the domain.

### Linking to pages and assets

The site may be served from a sub-path, so never hard-code root-relative URLs such as `/about` or `/logo.svg`. Prefix them with `import.meta.env.BASE_URL`, or import images from `src/` so Astro resolves them.
